<template>
  <q-card
    dark
    bordered
    class="bg-grey-9 move-card"
    align="center"
    clickable
    @click="pokemonDetailsDialog = true"
  >
    <q-card-section class="row">
      <div class="col-6">{{ move.name }}</div>
      <div class="col-2">{{ movePower }}</div>
      <div class="col-2">{{ moveAccuracy }}</div>
      <div class="col-2">{{ move.pp }}</div>
    </q-card-section>
    <q-card-section class="row">
      <div class="col"><img :src="getMoveType()" /></div>
      <div class="col"><img :src="getMoveCategory()" /></div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  props: ['move'],
  data () {
    return {
      movePower: (this.move.power === '' ? '-' : this.move.power),
      moveAccuracy: (this.move.accuracy === '' ? '-' : this.move.accuracy)
    }
  },
  methods: {
    getMoveType () {
      return '/statics/icons/types/' + this.move.type + '.png'
    },
    getMoveCategory () {
      return '/statics/icons/types/' + this.move.category + '.png'
    }
  },
  components: {}
}
</script>

<style lang="scss">
.q-card__section {
  padding: 0px;
}
.move-card {
  margin-bottom: 15px;
}

.pkm-type {
  padding: 0px 2px;
}
</style>
