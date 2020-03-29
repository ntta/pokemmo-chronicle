
<template>
  <q-page padding>
    <pokemon
      v-for="(pokemon, id) in pokemons"
      :key="id"
      :pokemon="pokemon"
    >
    </pokemon>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters('pokemons', ['pokemons'])
  },
  methods: {
    ...mapActions('pokemons', ['fbReadData'])
  },
  components: {
    'pokemon': require('components/Pokemon.vue').default
  },
  mounted () {
    this.fbReadData()
  }
}
</script>

<style>
</style>
