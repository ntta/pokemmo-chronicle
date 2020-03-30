<template>
  <q-dialog
    v-model="dialog"
    persistent
    :maximized="maximizedToggle"
    transition-show="slide-up"
    transition-hide="slide-down"
  >
    <q-card class="bg-primary text-white">
      <q-bar>
        <q-space />
        <q-btn dense flat icon="close" v-close-popup>
          <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
        </q-btn>
      </q-bar>

      <q-card-section>
        <div class="text-h6">Alert</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ pokemon.name }}
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  props: ['pokemon', 'dialog'],
  data () {
    return {
      maximizedToggle: true
    }
  }
}
</script>

<style lang="scss">

</style>
