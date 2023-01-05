<script setup>
import ProductPreviewCardVue from '@/components/ProductPreviewCard.vue';
console.log(import.meta.env.MODE)
</script>

<template>
  <div class="flex h-screen items-start sm:items-center justify-center">
    <ProductPreviewCardVue />
  </div>
</template>

<style >
body{
background: hsl(30, 38%, 92%)
}

</style>
