import Vue from 'vue'
import { firebaseDb } from 'boot/firebase'
const state = {
  pokemons: {
    // pokemonId1: {
    //   nationalNo: 1,
    //   name: 'Bulbasaur',
    //   types: [
    //     'grass',
    //     'poison'
    //   ],
    //   genderRatio: {
    //     male: 87.5,
    //     female: 12.5
    //   },
    //   genderDifference: '',
    //   species: 'Seed Pokémon',
    //   description: 'For some time after its birth, it grows by gaining nourishment from the seed on its back.',
    //   region: [],
    //   height: 0.7,
    //   weight: 6.9,
    //   abilities: {
    //     normal: [
    //       'Overgrow'
    //     ],
    //     hidden: [
    //       'Chlorophyll'
    //     ]
    //   },
    //   pvpTier: '',
    //   evYields: [
    //     '+1 Sp. Attack'
    //   ],
    //   eggGroups: [
    //     'Plant',
    //     'Monster'
    //   ],
    //   baseStats: {
    //     hp: 45,
    //     attack: 49,
    //     defense: 49,
    //     spAttack: 65,
    //     spDefense: 65,
    //     speed: 45
    //   },
    //   moves: [],
    //   locations: [],
    //   sprites: {
    //     normal: {
    //       front: '001-x-n-front',
    //       back: '001-x-n-back'
    //     },
    //     shiny: {
    //       front: '001-x-s-front',
    //       back: '001-x-s-back'
    //     }
    //   }
    // },
    // pokemonId2: {
    //   nationalNo: 2,
    //   name: 'Ivysaur',
    //   types: [
    //     'grass',
    //     'poison'
    //   ],
    //   genderRatio: {
    //     male: 87.5,
    //     female: 12.5
    //   },
    //   genderDifference: '',
    //   species: 'Seed Pokémon',
    //   description: "When the bud on its back starts swelling, a sweet aroma wafts to indicate the flower's coming bloom.",
    //   region: [],
    //   height: 1,
    //   weight: 13,
    //   abilities: {
    //     normal: [
    //       'Overgrow'
    //     ],
    //     hidden: [
    //       'Chlorophyll'
    //     ]
    //   },
    //   pvpTier: '',
    //   evYields: [
    //     '+1 Sp. Attack',
    //     '+1 Sp. Defense'
    //   ],
    //   eggGroups: [
    //     'Plant',
    //     'Monster'
    //   ],
    //   baseStats: {
    //     hp: 60,
    //     attack: 62,
    //     defense: 63,
    //     spAttack: 80,
    //     spDefense: 80,
    //     speed: 60
    //   },
    //   moves: [],
    //   locations: [],
    //   sprites: {
    //     normal: {
    //       front: '002-x-n-front',
    //       back: '002-x-n-back'
    //     },
    //     shiny: {
    //       front: '002-x-s-front',
    //       back: '002-x-s-back'
    //     }
    //   }
    // }
  }
}

const mutations = {
  loadPokemon (state, payload) {
    Vue.set(state.pokemons, payload.id, payload.name)
  }
}

const actions = {
  fbReadData ({ commit }) {
    let pokemons = firebaseDb.ref('pokemons/')

    // child added
    pokemons.on('child_added', snapshot => {
      let name = snapshot.val()
      if (name.pvpTier !== 'N/A') {
        let payload = {
          id: snapshot.key,
          name: name
        }
        commit('loadPokemon', payload)
      }
    })
  }
}

const getters = {
  pokemons: (state) => {
    let pokemonsSorted = {}
    let keysOrdered = Object.keys(state.pokemons)

    keysOrdered.sort((a, b) => {
      let aNo = state.pokemons[a].nationalNo
      let bNo = state.pokemons[b].nationalNo
      if (aNo > bNo) {
        return 1
      } else if (aNo < bNo) {
        return -1
      } else {
        return 0
      }
    })
    for (let key in keysOrdered) {
      pokemonsSorted[keysOrdered[key]] = state.pokemons[keysOrdered[key]]
    }
    return pokemonsSorted
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
