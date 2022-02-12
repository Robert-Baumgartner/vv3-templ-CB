<template>
  <div class="container d-flex flex-column align-items-center">
    <h2>
      <span class="text-danger"><i class="far fa-heart"></i></span>
      {{ msg }}
      <span class="text-danger"><i class="far fa-heart"></i></span>
    </h2>
    <img src="@/assets/logo.svg" alt="Vue logo" height="100" />
    <SayHello name="Robert"></SayHello>
  </div>
</template>

<script setup>
import SayHello from '@/components/SayHello.vue';

const msg = 'Willkommen!';
</script>

<style>
</style>
