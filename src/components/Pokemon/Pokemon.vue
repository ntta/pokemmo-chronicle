<template>
  <q-item
    class="column inline pkm-info"
  >
    <q-btn
      @click="pokemonDetailsDialog = true"
    >
      <img :src="getIconPath(pokemon.nationalNo)" />
      <div class="pkm-name">
        #{{ getNationalNoStr(pokemon.nationalNo)}}
        <br />
        {{ pokemon.name }}
      </div>
    </q-btn>
    <q-btn
      rounded
      v-for="type in pokemon.types"
      :key="type"
      :label="type"
      :class="getTypeClassMobile(type)"
      @click="pokemonHaveTypeDialog = true; clickedType = type"
    >
    </q-btn>
    <q-dialog
      v-model="pokemonDetailsDialog"
      persistent
      :maximized="maximizedToggle"
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <pokemon-details :pokemon="pokemon" />
    </q-dialog>
    <q-dialog
      v-model="pokemonHaveTypeDialog"
      persistent
      :maximized="maximizedToggle"
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <pokemon-have-type :type="clickedType" />
    </q-dialog>
  </q-item>
</template>

<script>
export default {
  props: ['pokemon'],
  data () {
    return {
      pokemonDetailsDialog: false,
      pokemonHaveTypeDialog: false,
      clickedType: '',
      maximizedToggle: true
    }
  },
  methods: {
    showPokemonDetail (pokemon) {
      console.log(pokemon.name)
    },
    getTypeClassMobile (type) {
      return 'pill background-color-' + type
    },
    getNationalNoStr (number) {
      let nationalNoStr = ''
      if (number < 10) {
        nationalNoStr = '00' + String(number)
      } else if (number < 100) {
        nationalNoStr = '0' + String(number)
      } else {
        nationalNoStr = String(number)
      }
      return nationalNoStr
    },
    getIconPath (number) {
      let iconPath = '/statics/icons/pokemons/' + this.getNationalNoStr(number) + '.png'
      return iconPath
    }
  },
  components: {
    'pokemon-details': require('components/Pokemon/PokemonDetails.vue').default,
    'pokemon-have-type': require('components/Pokemon/PokemonHaveType.vue').default
  },
  name: 'Pokemon'
}
</script>

<style lang="scss">
  .pkm-info {
    padding: 0px;
  }

  .pkm-name {
    font-family: "Flexo-Demi",arial,sans-serif;
    text-transform: none;
    font-size: 120%;
  }

  .background-color-bug {
    background-color: #adbd21;
    color: #fff;
  }

  .background-color-dark {
    background-color: #735a4a;
    color: #fff;
  }

  .background-color-dragon {
    background-color: #7b63e7;
    color: #fff;
  }

  .background-color-electric {
    background-color: #ffc631;
    color: #fff;
  }

  .background-color-fighting {
    background-color: #a55239;
    color: #fff;
  }

  .background-color-fire {
    background-color: #f75231;
    color: #fff;
  }

  .background-color-flying {
    background-color: #9cadf7;
    color: #fff;
  }

  .background-color-ghost {
    background-color: #6363b5;
    color: #fff;
  }

  .background-color-grass {
    background-color: #7bce52;
    color: #fff;
  }

  .background-color-ground {
    background-color: #d6b55a;
    color: #fff;
  }

  .background-color-ice {
    background-color: #5acee7;
    color: #fff;
  }

  .background-color-normal {
    background-color: #ada594;
    color: #fff;
  }

  .background-color-poison {
    background-color: #b55aa5;
    color: #fff;
  }

  .background-color-psychic {
    background-color: #ff73a5;
    color: #fff;
  }

  .background-color-rock {
    background-color: #bda55a;
    color: #fff;
  }

  .background-color-steel {
    background-color: #adadc6;
    color: #fff;
  }

  .background-color-water {
    background-color: #399cff;
    color: #fff;
  }

  .pill {
    width: 100%;
    text-transform: none;
    font-size: 100%;
  }
</style>
