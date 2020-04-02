<template>
  <q-card class="bg-black text-white">
    <q-bar>
      <q-space />
      <q-btn dense flat icon="close" v-close-popup>
        <q-tooltip content-class="bg-black text-primary">Close</q-tooltip>
      </q-btn>
    </q-bar>

    <q-card-section>
      <div class="text-h6">{{ pokemon.name }}</div>
    </q-card-section>

    <q-card-section class="q-pt-none">{{ pokemon }}</q-card-section>
  </q-card>
</template>

<script>
export default {
  props: ['pokemon'],
  data () {
    return {}
  }
}
</script>

<style lang="scss">
</style>
