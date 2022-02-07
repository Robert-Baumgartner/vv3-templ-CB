<template>
  <div class="container d-flex flex-column">
    <h2 class="text-center">
      <span class="text-danger"><i class="far fa-heart"></i></span>
      {{ msg }}
      <span class="text-danger"><i class="far fa-heart"></i></span>
    </h2>
    <img src="@/assets/logo.svg" alt="Vue logo" height="100" />
  </div>
  <SayHello name="Robert"></SayHello>
</template>

<script setup>
import SayHello from '@/components/SayHello.vue';

const msg = 'Willkommen!';
</script>

<style>
@import '@/assets/bootstrap.min.css';
</style>
