<template><main class="live shell"><header class="result-head"><img class="brand-logo" src="../assets/logo_diana_match_transparente.png" alt="Diana Match"/><span class="live-link">● EN VIVO</span></header><section class="live-hero"><p class="kicker">ACTIVACIÓN UNIVERSITARIA</p><h1>¿QUÉ DIANA<br/><span>DOMINA HOY?</span></h1><div class="total">{{total}}<small>TOTAL DE DIANA MATCHES</small></div></section><section v-if="total" class="stats"><h2>Ranking de snacks</h2><div v-for="row in ranking" :key="row.name" class="rank"><img :src="row.image" :alt="row.name"/><span>{{row.emoji}} {{row.name}}</span><b>{{row.pct}}%</b><div class="bar"><i :style="{width:row.pct+'%'}"/></div></div></section><section v-else class="empty"><img class="empty-product" src="../assets/poporopo.png" alt="Snacks Diana"/><h2>Todavía nadie descubrió su Diana</h2><p>Sé el primero.</p><router-link to="/" class="cta">DESCUBRIR MI MATCH →</router-link></section></main></template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { products } from '../data/products'

const total = ref(Number(localStorage.getItem('diana-demo-total') || 0))
const ranking = ref(products.map((product, index) => ({
  name: product.name,
  emoji: product.emoji,
  image: product.image,
  pct: [31, 24, 19, 15, 7, 4][index],
})))

onMounted(() => {
  const timer = setInterval(() => {
    total.value = Number(localStorage.getItem('diana-demo-total') || total.value)
  }, 12000)
  return () => clearInterval(timer)
})
</script>
