
<template>
  <q-page
    padding
    class="pkm-grid-parent"
  >
    <pokemon
      v-for="(pokemon, id) in pokemons"
      :key="id"
      :pokemon="pokemon"
      class="pkm-info"
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
    'pokemon': require('components/Pokemon/Pokemon.vue').default
  },
  mounted () {
    this.fbReadData()
  }
}
</script>

<style lang="scss">
  .pkm-grid-parent {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    grid-gap: 1em;
  }
</style>
