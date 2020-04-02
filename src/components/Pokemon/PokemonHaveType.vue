<template>
  <q-card class="bg-black text-white">
    <q-bar>
      <q-space />
      <q-btn dense flat icon="close" v-close-popup>
        <q-tooltip content-class="bg-black text-primary">Close</q-tooltip>
      </q-btn>
    </q-bar>

    <q-card-section>
      <div class="text-h6">Pokemon that have {{ type }} type</div>
    </q-card-section>

    <q-card-section class="q-pt-none pkm-grid-parent">
      <pokemon
        v-for="(pokemon, id) in pokemons"
        :key="id"
        :pokemon="pokemon"
      />
    </q-card-section>
  </q-card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: ['type'],
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters('pokemons', ['pokemons'])
  },
  methods: {
    checkIfPokemonHasType (pokemon) {
      if (pokemon.types === undefined) {
        return false
      } else {
        return pokemon.types.includes(this.type)
      }
    }
  //   getPokemonHaveTypeList () {
  //     let keys = Object.keys(this.pokemons)
  //     console.log(this.pokemons[keys[0]])
  //     for (let i = 0; i < keys.length; i++) {
  //       if (this.pokemons[keys[i]].types !== undefined && this.pokemons[keys[i]].types.includes(this.type)) {
  //         this.pokemonHaveTypeList[keys[i]] = this.pokemons[keys[i]]
  //       }
  //     }
  //     console.log(this.pokemonHaveTypeList)
  //   }
  },
  components: {
    'pokemon': require('components/Pokemon/Pokemon.vue').default
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
