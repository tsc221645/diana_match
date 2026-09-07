<template>
  <main class="landing shell" :class="`landing-v${variant}`">
    <header class="topbar"><img class="brand-logo" src="../assets/logo_diana_match_transparente.png" alt="Diana Match"/><span class="live-link">● EN VIVO</span></header>

    <template v-if="variant === 1">
      <img class="landing-sticker sticker-spicy" src="../assets/spicy.png" alt=""/><img class="landing-sticker sticker-lemon" src="../assets/lemon.png" alt=""/>
      <section class="hero"><div class="sticker">¿LISTO? 👀</div><p class="kicker">SNACKS DIANA PRESENTA</p><h1>¿A QUÉ SABE<br/><span>TU MOMENTO?</span></h1><p class="lead">Hay un Diana para cada personalidad.<br/>Descubrí el tuyo.</p><ProductOrbit/><button class="cta" @click="start">DESCUBRIR MI MATCH <span>→</span></button><p class="tiny">Solo toma menos de un minuto 👀</p><div class="flavors">🌶️ 🧀 🍋 🌽 <span>¿Picante, queso, chilimón o clásico?</span></div></section>
    </template>

    <template v-else-if="variant === 2">
      <section class="hero hero-poster"><div class="poster-copy"><p class="kicker">UNA PREGUNTA, UN SNACK, UNA PERSONALIDAD</p><h1>DESCUBRÍ<br/><span>QUÉ DIANA SOS</span></h1><p class="lead">Tu antojo dice más de vos de lo que creés.</p><button class="cta" @click="start">EMPEZAR EL QUIZ <span>→</span></button></div><div class="poster-products"><img src="../assets/diana_jalapenos.png" alt="Jalapeños Diana"/><img src="../assets/diana_quesitos.png" alt="Quesitos Diana"/><img src="../assets/diana_jalapenos_chilimon.png" alt="Chilimón Diana"/><img src="../assets/diana_nachos.png" alt="Nachos Diana"/></div><div class="poster-tag">5 PREGUNTAS<br/><strong>0 ABURRIMIENTO</strong></div></section>
    </template>

    <template v-else>
      <section class="hero hero-sticker"><div class="sticker big-sticker">¿QUÉ<br/>ANTOJO<br/>TRAÉS?</div><div class="hero-sticker-copy"><p class="kicker">DIANA MATCH</p><h1>HACÉ<br/><span>MATCH</span><br/>CON TU SNACK</h1><p class="lead">Respondé cinco preguntas y descubrí tu Diana.</p><button class="cta" @click="start">DESCUBRIR MI MATCH <span>→</span></button></div><img class="sticker-product sticker-jalapeno" src="../assets/diana_jalapenos.png" alt="Jalapeños Diana"/><img class="sticker-product sticker-queso" src="../assets/diana_quesitos.png" alt="Quesitos Diana"/><img class="sticker-icon sticker-fuego" src="../assets/fuego.png" alt=""/></section>
    </template>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { trackEvent } from '../services/analytics'
import ProductOrbit from '../components/ProductOrbit.vue'

const router = useRouter(); const route = useRoute()
const variant = computed(() => { const value = Number(route.query.variant || 1); return value >= 1 && value <= 3 ? value : 1 })
function start(){sessionStorage.removeItem('diana-answers');sessionStorage.removeItem('diana-result');trackEvent('quiz_started');router.push({path:'/quiz',query:route.query})}
</script>
