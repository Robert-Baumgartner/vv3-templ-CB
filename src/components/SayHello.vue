<template>
  <div>
    <p class="fs-5 fst-italic">{{ name }} sagt: Hallo!</p>
  </div>
</template>

<script setup>
defineProps({
  name: String,
});
</script>