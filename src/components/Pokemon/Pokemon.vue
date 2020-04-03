<template>
  <q-card
    dark
    bordered
    class="bg-grey-9 my-card pkm-card"
    align="center"
    clickable
    @click="pokemonDetailsDialog = true"
  >
    <q-card-section><q-img :src="getIconImage()" /></q-card-section>
    <q-card-section>#{{ getNationalNoStr()}}</q-card-section>
    <q-card-section class="pkm-name">{{ pokemon.name }}</q-card-section>
    <q-card-section>
      <img
        v-for="type in pokemon.types"
        :key="type"
        :src="getTypeImage(type)"
        class="pkm-type"
      /></q-card-section>
    <q-dialog
      v-model="pokemonDetailsDialog"
      persistent
      :maximized="maximizedToggle"
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <pokemon-details :pokemon="pokemon" />
    </q-dialog>
  </q-card>
</template>

<script>
export default {
  props: ['pokemon'],
  data () {
    return {
      pokemonDetailsDialog: false,
      maximizedToggle: true
    }
  },
  methods: {
    showPokemonDetail (pokemon) {
      console.log(pokemon.name)
    },
    getTypeImage (type) {
      if (type !== undefined) {
        return '/statics/icons/types/' + type + '.png'
      } else {
        return ''
      }
    },
    getNationalNoStr () {
      let nationalNoStr = ''
      let number = this.pokemon.nationalNo
      if (number < 10) {
        nationalNoStr = '00' + String(number)
      } else if (number < 100) {
        nationalNoStr = '0' + String(number)
      } else {
        nationalNoStr = String(number)
      }
      return nationalNoStr
    },
    getIconImage () {
      return '/statics/icons/pokemons/' + this.getNationalNoStr() + '.png'
    }
  },
  components: {
    'pokemon-details': require('components/Pokemon/PokemonDetails.vue').default
  }
}
</script>

<style lang="scss">
  .q-card__section {
    padding: 0px;
  }
  .pkm-card {
    padding: 0px;
    width: 100%;
  }

  .pkm-type {
    padding: 0px 2px;
  }
</style>
