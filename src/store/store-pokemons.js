import Vue from 'vue'
import { firebaseDb } from 'boot/firebase'
const state = {
  pokemons: {}
}

const mutations = {
  loadType (state, payload) {
    Vue.set(state.pokemons, payload.id, payload.name)
  }
}

const actions = {
  fbReadData ({ commit }) {
    let pokemons = firebaseDb.ref('pokemons/')

    // child added
    pokemons.on('child_added', snapshot => {
      let name = snapshot.val()
      let payload = {
        id: snapshot.key,
        name: name
      }
      commit('loadType', payload)
    })
  }
}

const getters = {
  pokemons: (state) => {
    return state.pokemons
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
