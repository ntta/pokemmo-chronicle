<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-9 text-white">
    <q-header>
      <q-bar dense class="bg-black text-white">
        <div>#{{ getNationalNoStr() }} - {{ pokemon.name }}</div>
        <q-space />
        <q-btn dense flat icon="close" v-close-popup>
          <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
        </q-btn>
      </q-bar>
    </q-header>
    <q-page-container>
      <q-card class="row pkm-card-top" dark flat>
        <q-card-section class="col-8">
          <div class="row">{{ pokemon.name }}{{ getFormName() }}</div>
          <div class="row">{{ pokemon.species }}</div>
          <div class="row">
            <img
              v-for="type in pokemon.types"
              :key="type"
              :src="getTypeImage(type)"
              class="pkm-details-type"
            />
          </div>
        </q-card-section>
        <q-card-section class="col-4 pkm-card-top-image">
          <img :src="getGifIconImage()" />
        </q-card-section>
      </q-card>
      <q-tab-panels v-model="pokemonDataTab">
        <q-tab-panel
          name="general"
          class="bg-grey-9 text-white"
        >
          <pokemon-details-general :pokemon="pokemon" />
        </q-tab-panel>
        <q-tab-panel
          name="sprites"
          class="bg-grey-9 text-white"
        >
          <pokemon-details-sprites :pokemon="pokemon" />
        </q-tab-panel>
        <q-tab-panel
          name="moves"
          class="bg-grey-9 text-white"
        >
          <pokemon-details-moves :pokemon="pokemon" />
        </q-tab-panel>
        <q-tab-panel
          name="locations"
          class="bg-grey-9 text-white"
        >
          <pokemon-details-locations :pokemon="pokemon" />
        </q-tab-panel>
        <q-tab-panel
          name="evolution"
          class="bg-grey-9 text-white"
        >
          <pokemon-details-evolution :pokemon="pokemon" />
        </q-tab-panel>
      </q-tab-panels>

      <q-footer reveal bordered class="bg-grey-9 text-white">
        <q-tabs narrow-indicator v-model="pokemonDataTab">
          <q-tab label="General" name="general" />
          <q-tab label="Sprites" name="sprites" />
          <q-tab label="Moves" name="moves" />
          <q-tab label="Locations" name="locations" />
          <q-tab label="Evolution Chain" name="evolution" />
        </q-tabs>
      </q-footer>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  props: ['pokemon'],
  data () {
    return {
      slide: 'style',
      pokemonDataTab: 'general',
      pokemonTabs: [
        {
          name: 'general',
          label: 'General'
        },
        {
          name: 'moves',
          label: 'Moves'
        },
        {
          name: 'locations',
          label: 'Locations'
        },
        {
          name: 'evolution',
          label: 'Evolution Chain'
        },
        {
          name: 'sprites',
          label: 'Sprites'
        }
      ]
    }
  },
  methods: {
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
    getTypeImage (type) {
      if (type !== undefined) {
        return '/statics/icons/types/' + type + '.png'
      } else {
        return ''
      }
    },
    getGifIconImage () {
      let imagePath = ''
      if (this.pokemon.sprites.male !== undefined) {
        imagePath = '/statics/sprites/pokemons/gif/' + this.pokemon.sprites.male.normal.front + '.gif'
      } else {
        imagePath = '/statics/sprites/pokemons/gif/' + this.pokemon.sprites.normal.front + '.gif'
      }
      return imagePath
    },
    getFormName () {
      let formName = ''
      if (this.pokemon.formName !== undefined && this.pokemon.formName !== '') {
        formName = ' - ' + this.pokemon.formName
      }
      return formName
    }
  },
  components: {
    'pokemon-details-general': require('components/Pokemon/PokemonDetailsGeneral.vue').default,
    'pokemon-details-moves': require('components/Pokemon/PokemonDetailsMoves.vue').default,
    'pokemon-details-locations': require('components/Pokemon/PokemonDetailsLocations.vue').default,
    'pokemon-details-evolution': require('components/Pokemon/PokemonDetailsEvolution.vue').default,
    'pokemon-details-sprites': require('components/Pokemon/PokemonDetailsSprites.vue').default
  }
}
</script>

<style lang="scss">
  .pkm-details-btn-form {
    margin-right: 5px;
    .q-btn__wrapper {
      padding: 0px;
    }
  }

  .pkm-details-type {
    padding: 0px 2px 5px;
  }

  .pkm-card-top {
    padding: 8px;
  }

  .pkm-card-top-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .q-tab-panel {
    color: black;
  }
</style>
