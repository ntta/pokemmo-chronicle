import Vue from 'vue'
import { firebaseDb } from 'boot/firebase'
const state = {
  moves: {}
}

const mutations = {
  loadMove (state, payload) {
    Vue.set(state.moves, payload.id, payload.move)
  }
}

const actions = {
  fbReadMoves ({ commit }) {
    let pokemonMoves = firebaseDb.ref('moves/')

    // child added
    pokemonMoves.on('child_added', snapshot => {
      let move = snapshot.val()
      let payload = {
        id: snapshot.key,
        move: move
      }
      commit('loadMove', payload)
    })
  }
}

const getters = {
  moves: (state) => {
    let movesSorted = {}
    let keysOrdered = Object.keys(state.moves)

    keysOrdered.sort((a, b) => {
      let aNo = state.moves[a].name
      let bNo = state.moves[b].name
      if (aNo > bNo) {
        return 1
      } else if (aNo < bNo) {
        return -1
      } else {
        return 0
      }
    })
    for (let key in keysOrdered) {
      movesSorted[keysOrdered[key]] = state.moves[keysOrdered[key]]
    }
    return movesSorted
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
