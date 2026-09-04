<template>
  <main v-if="match" class="result shell" :style="{'--product-color':match.product.color}">
    <header class="result-head"><img class="brand-logo" src="../assets/logo_diana_match_transparente.png" alt="Diana Match"/><button class="text-btn" @click="restart">Volver a jugar ↻</button></header>
    <section class="reveal"><p class="kicker">TU DIANA MATCH ES...</p><img class="product-image" :src="match.product.image" :alt="match.product.name"/><h1>{{match.product.name}}</h1><div class="match-pill">{{match.percentage}}% MATCH</div><p class="archetype">{{match.product.archetype}}</p><p class="description">{{match.product.description}}</p><blockquote>“{{match.product.quote}}”</blockquote></section>
    <section class="profile-card"><p class="kicker">TU PERFIL</p><div v-for="item in profileItems" :key="item.key" class="profile-row"><span>{{item.emoji}} {{item.label}}</span><b>{{item.value}}%</b><div class="bar"><i :style="{width:item.value+'%'}"/></div></div></section>
    <section class="stand-card"><span class="badge">🎁 TU MATCH ESTÁ LISTO</span><h2>YA SABÉS QUÉ DIANA SOS...<br/><strong>AHORA PROBALO 👀</strong></h2><p>Mostrá esta pantalla en el stand para recibir tu Diana Match.</p></section>
    <button class="cta wide" @click="openShare">CREAR MI TARJETA <span>→</span></button><p v-if="error" class="error">{{error}}</p><button class="secondary" @click="restart">NUEVO DIANA MATCH</button>
    <div v-if="shareOpen" class="share-overlay" role="dialog" aria-modal="true" aria-label="Tarjeta compartible">
      <div class="share-modal"><button class="share-close" aria-label="Cerrar" @click="shareOpen=false">×</button><p class="kicker">LISTA PARA COMPARTIR</p>
        <div class="share-card"><img class="share-logo" src="../assets/logo_diana_match_transparente.png" alt="Diana Match"/><span class="share-eyebrow">MI DIANA MATCH</span><img class="share-product" :src="match.product.image" :alt="match.product.name"/><strong>{{match.product.name}}</strong><b>{{match.percentage}}%</b><span class="share-archetype">{{match.product.archetype}}</span><p>“{{match.product.quote}}”</p><small>#MiDianaMatch</small></div>
        <div class="share-actions"><button class="cta" @click="share">{{canShare?'COMPARTIR':'GUARDAR TARJETA'}} <span>↗</span></button><button class="secondary" @click="shareOpen=false">SEGUIR VIENDO MI RESULTADO</button></div>
      </div>
    </div>
  </main><main v-else class="shell"/>
</template>
<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useExperience } from '../composables/useExperience'
import { trackEvent } from '../services/analytics'
import type { Dimension } from '../types'
const router=useRouter();const {match,reset,source}=useExperience();const error=ref('');const shareOpen=ref(false);const canShare=typeof navigator!=='undefined'&&!!navigator.share
const profileItems=computed(()=>[{key:'spicy' as Dimension,emoji:'🌶️',label:'Picante'},{key:'intensity' as Dimension,emoji:'🔥',label:'Intensidad'},{key:'social' as Dimension,emoji:'🎉',label:'Social'},{key:'chill' as Dimension,emoji:'😌',label:'Chill'}].map(item=>({...item,value:match.value?.profile[item.key]||0})))
function restart(){reset();router.push('/')}function openShare(){shareOpen.value=true;trackEvent('share_card_created')}
async function share(){if(!match.value)return;try{const canvas=document.createElement('canvas');canvas.width=720;canvas.height=1280;const ctx=canvas.getContext('2d')!;ctx.fillStyle='#e52329';ctx.fillRect(0,0,720,1280);ctx.fillStyle='#fff4dc';ctx.fillRect(32,32,656,1216);ctx.fillStyle='#202020';ctx.textAlign='center';ctx.font='bold 34px Arial';ctx.fillText('DIANA MATCH',360,120);ctx.font='140px Arial';ctx.fillText(match.value.product.emoji,360,380);ctx.font='bold 58px Arial';ctx.fillText(match.value.product.name,360,510);ctx.fillStyle='#e52329';ctx.font='bold 70px Arial';ctx.fillText(`${match.value.percentage}%`,360,640);ctx.fillStyle='#202020';ctx.font='bold 30px Arial';ctx.fillText(match.value.product.archetype,360,710);ctx.font='26px Arial';ctx.fillText('¿QUÉ DIANA SOS?',360,1130);const blob=await new Promise<Blob|null>(resolve=>canvas.toBlob(resolve,'image/png'));if(!blob)throw new Error('card');const file=new File([blob],`mi-diana-match-${match.value.product.id}.png`,{type:'image/png'});if(canShare&&(navigator as any).canShare?.({files:[file]})){await navigator.share({title:'Mi Diana Match',files:[file]});trackEvent('result_shared');return}const link=document.createElement('a');link.href=URL.createObjectURL(blob);link.download=file.name;link.click()}catch{error.value='No pudimos abrir el menú de compartir. Podés guardar tu tarjeta.'}}
onMounted(()=>{if(source.value==='kiosk')setTimeout(()=>{if(location.pathname==='/result')restart()},60000)})
</script>
