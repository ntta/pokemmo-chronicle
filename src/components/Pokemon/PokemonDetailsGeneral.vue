<template>
  <div>
    <p>{{ pokemon.description }}</p>
    <p>Height: {{ pokemon.height }} m</p>
    <p>Weight: {{ pokemon.weight }} kg</p>
  </div>
</template>

<script>
export default {
  props: ['pokemon']
}
</script>

<style lang="scss">
</style>
