import Vue from 'vue'
import { firebaseDb } from 'boot/firebase'
const state = {
  pokemons: {}
}

const mutations = {
  loadPokemon (state, payload) {
    Vue.set(state.pokemons, payload.id, payload.name)
  }
}

const actions = {
  fbReadPokemons ({ commit }) {
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
