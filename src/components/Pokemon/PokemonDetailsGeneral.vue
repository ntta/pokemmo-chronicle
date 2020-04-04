<template>
  <div>
    <p>{{ pokemon.description }}</p>
    <p>Height: {{ pokemon.height }} m</p>
    <p>Weight: {{ pokemon.weight }} kg</p>
    <p v-for="(ability, index) in pokemon.abilities.normal" :key="index">{{ ability }}</p>
  </div>
</template>

<script>
export default {
  props: ['pokemon']
}
</script>

<style lang="scss">
</style>
