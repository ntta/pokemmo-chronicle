import Vue from 'vue'
import { firebaseDb } from 'boot/firebase'
const state = {
  types: {}
}

const mutations = {
  loadType (state, payload) {
    Vue.set(state.types, payload.id, payload.type)
  }
}

const actions = {
  fbReadTypes ({ commit }) {
    let pokemonTypes = firebaseDb.ref('types/')

    // child added
    pokemonTypes.on('child_added', snapshot => {
      let type = snapshot.val()
      let payload = {
        id: snapshot.key,
        type: type
      }
      commit('loadType', payload)
    })
  }
}

const getters = {
  types: (state) => {
    return state.types
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
