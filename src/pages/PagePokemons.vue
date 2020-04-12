
<template>
  <q-page
    padding
    class="pkm-grid-parent"
  >
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
    ...mapActions('pokemons', ['fbReadPokemons'])
  },
  components: {
    'pokemon': require('components/Pokemon/Pokemon.vue').default
  },
  mounted () {
    if (Object.keys(this.pokemons).length === 0) {
      console.log('Loading Pokemons...')
      this.fbReadPokemons()
    }
  }
}
</script>

<style lang="scss">
  .pkm-grid-parent {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-gap: 1em;
  }
</style>
