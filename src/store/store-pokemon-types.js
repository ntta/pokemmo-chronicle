const state = {
  pokemonTypes: {
    'TypeID01': {
      name: 'bug',
      weakness: [
        { name: 'normal', factor: 1 },
        { name: 'fire', factor: 2 },
        { name: 'water', factor: 1 },
        { name: 'electric', factor: 1 },
        { name: 'grass', factor: 0.5 },
        { name: 'ice', factor: 1 },
        { name: 'fighting', factor: 0.5 },
        { name: 'poison', factor: 1 },
        { name: 'ground', factor: 0.5 },
        { name: 'flying', factor: 2 },
        { name: 'psychic', factor: 1 },
        { name: 'bug', factor: 1 },
        { name: 'rock', factor: 2 },
        { name: 'ghost', factor: 1 },
        { name: 'dragon', factor: 1 },
        { name: 'dark', factor: 1 },
        { name: 'steel', factor: 1 },
        { name: 'fairy', factor: 1 }
      ]
    },
    'TypeID02': {
      name: 'dark',
      weakness: [
        { name: 'normal', factor: 1 },
        { name: 'fire', factor: 1 },
        { name: 'water', factor: 1 },
        { name: 'electric', factor: 1 },
        { name: 'grass', factor: 1 },
        { name: 'ice', factor: 1 },
        { name: 'fighting', factor: 2 },
        { name: 'poison', factor: 1 },
        { name: 'ground', factor: 1 },
        { name: 'flying', factor: 1 },
        { name: 'psychic', factor: 0 },
        { name: 'bug', factor: 2 },
        { name: 'rock', factor: 1 },
        { name: 'ghost', factor: 0.5 },
        { name: 'dragon', factor: 1 },
        { name: 'dark', factor: 0.5 },
        { name: 'steel', factor: 1 },
        { name: 'fairy', factor: 2 }
      ]
    },
    'TypeID03': {
      name: 'dragon',
      weakness: [
        { name: 'normal', factor: 1 },
        { name: 'fire', factor: 0.5 },
        { name: 'water', factor: 0.5 },
        { name: 'electric', factor: 0.5 },
        { name: 'grass', factor: 0.5 },
        { name: 'ice', factor: 2 },
        { name: 'fighting', factor: 1 },
        { name: 'poison', factor: 1 },
        { name: 'ground', factor: 1 },
        { name: 'flying', factor: 1 },
        { name: 'psychic', factor: 1 },
        { name: 'bug', factor: 1 },
        { name: 'rock', factor: 1 },
        { name: 'ghost', factor: 1 },
        { name: 'dragon', factor: 2 },
        { name: 'dark', factor: 1 },
        { name: 'steel', factor: 1 },
        { name: 'fairy', factor: 2 }
      ]
    },
    'TypeID04': {
      name: 'electric',
      weakness: [
        { name: 'normal', factor: 1 },
        { name: 'fire', factor: 1 },
        { name: 'water', factor: 1 },
        { name: 'electric', factor: 0.5 },
        { name: 'grass', factor: 1 },
        { name: 'ice', factor: 1 },
        { name: 'fighting', factor: 1 },
        { name: 'poison', factor: 1 },
        { name: 'ground', factor: 2 },
        { name: 'flying', factor: 0.5 },
        { name: 'psychic', factor: 1 },
        { name: 'bug', factor: 1 },
        { name: 'rock', factor: 1 },
        { name: 'ghost', factor: 1 },
        { name: 'dragon', factor: 1 },
        { name: 'dark', factor: 1 },
        { name: 'steel', factor: 0.5 },
        { name: 'fairy', factor: 1 }
      ]
    },
    'TypeID05': {
      name: 'fairy',
      weakness: [
        { name: 'normal', factor: 1 },
        { name: 'fire', factor: 1 },
        { name: 'water', factor: 1 },
        { name: 'electric', factor: 1 },
        { name: 'grass', factor: 1 },
        { name: 'ice', factor: 1 },
        { name: 'fighting', factor: 0.5 },
        { name: 'poison', factor: 2 },
        { name: 'ground', factor: 1 },
        { name: 'flying', factor: 1 },
        { name: 'psychic', factor: 1 },
        { name: 'bug', factor: 0.5 },
        { name: 'rock', factor: 1 },
        { name: 'ghost', factor: 1 },
        { name: 'dragon', factor: 0 },
        { name: 'dark', factor: 0.5 },
        { name: 'steel', factor: 2 },
        { name: 'fairy', factor: 1 }
      ]
    },
    'TypeID06': {
      name: 'fighting',
      weakness: [
        { name: 'normal', factor: 1 },
        { name: 'fire', factor: 1 },
        { name: 'water', factor: 1 },
        { name: 'electric', factor: 1 },
        { name: 'grass', factor: 1 },
        { name: 'ice', factor: 1 },
        { name: 'fighting', factor: 1 },
        { name: 'poison', factor: 1 },
        { name: 'ground', factor: 1 },
        { name: 'flying', factor: 2 },
        { name: 'psychic', factor: 2 },
        { name: 'bug', factor: 0.5 },
        { name: 'rock', factor: 0.5 },
        { name: 'ghost', factor: 1 },
        { name: 'dragon', factor: 1 },
        { name: 'dark', factor: 0.5 },
        { name: 'steel', factor: 1 },
        { name: 'fairy', factor: 2 }
      ]
    },
    'TypeID07': {
      name: 'fire',
      weakness: [
        { name: 'normal', factor: 1 },
        { name: 'fire', factor: 0.5 },
        { name: 'water', factor: 2 },
        { name: 'electric', factor: 1 },
        { name: 'grass', factor: 0.5 },
        { name: 'ice', factor: 0.5 },
        { name: 'fighting', factor: 1 },
        { name: 'poison', factor: 1 },
        { name: 'ground', factor: 2 },
        { name: 'flying', factor: 1 },
        { name: 'psychic', factor: 1 },
        { name: 'bug', factor: 0.5 },
        { name: 'rock', factor: 2 },
        { name: 'ghost', factor: 1 },
        { name: 'dragon', factor: 1 },
        { name: 'dark', factor: 1 },
        { name: 'steel', factor: 0.5 },
        { name: 'fairy', factor: 0.5 }
      ]
    },
    'TypeID08': {
      name: 'flying',
      weakness: [
        { name: 'normal', factor: 1 },
        { name: 'fire', factor: 1 },
        { name: 'water', factor: 1 },
        { name: 'electric', factor: 2 },
        { name: 'grass', factor: 0.5 },
        { name: 'ice', factor: 2 },
        { name: 'fighting', factor: 0.5 },
        { name: 'poison', factor: 1 },
        { name: 'ground', factor: 0 },
        { name: 'flying', factor: 1 },
        { name: 'psychic', factor: 1 },
        { name: 'bug', factor: 0.5 },
        { name: 'rock', factor: 2 },
        { name: 'ghost', factor: 1 },
        { name: 'dragon', factor: 1 },
        { name: 'dark', factor: 1 },
        { name: 'steel', factor: 1 },
        { name: 'fairy', factor: 1 }
      ]
    },
    'TypeID09': {
      name: 'ghost',
      weakness: [
        { name: 'normal', factor: 0 },
        { name: 'fire', factor: 1 },
        { name: 'water', factor: 1 },
        { name: 'electric', factor: 1 },
        { name: 'grass', factor: 1 },
        { name: 'ice', factor: 1 },
        { name: 'fighting', factor: 0 },
        { name: 'poison', factor: 0.5 },
        { name: 'ground', factor: 1 },
        { name: 'flying', factor: 1 },
        { name: 'psychic', factor: 1 },
        { name: 'bug', factor: 0.5 },
        { name: 'rock', factor: 1 },
        { name: 'ghost', factor: 2 },
        { name: 'dragon', factor: 1 },
        { name: 'dark', factor: 2 },
        { name: 'steel', factor: 1 },
        { name: 'fairy', factor: 1 }
      ]
    },
    'TypeID10': {
      name: 'grass',
      weakness: [
        { name: 'normal', factor: 1 },
        { name: 'fire', factor: 2 },
        { name: 'water', factor: 0.5 },
        { name: 'electric', factor: 0.5 },
        { name: 'grass', factor: 0.5 },
        { name: 'ice', factor: 2 },
        { name: 'fighting', factor: 1 },
        { name: 'poison', factor: 2 },
        { name: 'ground', factor: 0.5 },
        { name: 'flying', factor: 2 },
        { name: 'psychic', factor: 1 },
        { name: 'bug', factor: 2 },
        { name: 'rock', factor: 1 },
        { name: 'ghost', factor: 1 },
        { name: 'dragon', factor: 1 },
        { name: 'dark', factor: 1 },
        { name: 'steel', factor: 1 },
        { name: 'fairy', factor: 1 }
      ]
    },
    'TypeID11': {
      name: 'ground',
      weakness: [
        { name: 'normal', factor: 1 },
        { name: 'fire', factor: 1 },
        { name: 'water', factor: 2 },
        { name: 'electric', factor: 0 },
        { name: 'grass', factor: 2 },
        { name: 'ice', factor: 2 },
        { name: 'fighting', factor: 1 },
        { name: 'poison', factor: 0.5 },
        { name: 'ground', factor: 1 },
        { name: 'flying', factor: 1 },
        { name: 'psychic', factor: 1 },
        { name: 'bug', factor: 1 },
        { name: 'rock', factor: 0.5 },
        { name: 'ghost', factor: 1 },
        { name: 'dragon', factor: 1 },
        { name: 'dark', factor: 1 },
        { name: 'steel', factor: 1 },
        { name: 'fairy', factor: 1 }
      ]
    },
    'TypeID12': {
      name: 'ice',
      weakness: [
        { name: 'normal', factor: 1 },
        { name: 'fire', factor: 2 },
        { name: 'water', factor: 1 },
        { name: 'electric', factor: 1 },
        { name: 'grass', factor: 1 },
        { name: 'ice', factor: 0.5 },
        { name: 'fighting', factor: 2 },
        { name: 'poison', factor: 1 },
        { name: 'ground', factor: 1 },
        { name: 'flying', factor: 1 },
        { name: 'psychic', factor: 1 },
        { name: 'bug', factor: 1 },
        { name: 'rock', factor: 2 },
        { name: 'ghost', factor: 1 },
        { name: 'dragon', factor: 1 },
        { name: 'dark', factor: 1 },
        { name: 'steel', factor: 2 },
        { name: 'fairy', factor: 1 }
      ]
    },
    'TypeID13': {
      name: 'normal',
      weakness: [
        { name: 'normal', factor: 1 },
        { name: 'fire', factor: 1 },
        { name: 'water', factor: 1 },
        { name: 'electric', factor: 1 },
        { name: 'grass', factor: 1 },
        { name: 'ice', factor: 1 },
        { name: 'fighting', factor: 2 },
        { name: 'poison', factor: 1 },
        { name: 'ground', factor: 1 },
        { name: 'flying', factor: 1 },
        { name: 'psychic', factor: 1 },
        { name: 'bug', factor: 1 },
        { name: 'rock', factor: 1 },
        { name: 'ghost', factor: 0 },
        { name: 'dragon', factor: 1 },
        { name: 'dark', factor: 1 },
        { name: 'steel', factor: 1 },
        { name: 'fairy', factor: 1 }
      ]
    },
    'TypeID14': {
      name: 'poison',
      weakness: [
        { name: 'normal', factor: 1 },
        { name: 'fire', factor: 1 },
        { name: 'water', factor: 1 },
        { name: 'electric', factor: 1 },
        { name: 'grass', factor: 0.5 },
        { name: 'ice', factor: 1 },
        { name: 'fighting', factor: 0.5 },
        { name: 'poison', factor: 0.5 },
        { name: 'ground', factor: 2 },
        { name: 'flying', factor: 1 },
        { name: 'psychic', factor: 2 },
        { name: 'bug', factor: 0.5 },
        { name: 'rock', factor: 1 },
        { name: 'ghost', factor: 1 },
        { name: 'dragon', factor: 1 },
        { name: 'dark', factor: 1 },
        { name: 'steel', factor: 1 },
        { name: 'fairy', factor: 0.5 }
      ]
    },
    'TypeID15': {
      name: 'psychic',
      weakness: [
        { name: 'normal', factor: 1 },
        { name: 'fire', factor: 1 },
        { name: 'water', factor: 1 },
        { name: 'electric', factor: 1 },
        { name: 'grass', factor: 1 },
        { name: 'ice', factor: 1 },
        { name: 'fighting', factor: 0.5 },
        { name: 'poison', factor: 1 },
        { name: 'ground', factor: 1 },
        { name: 'flying', factor: 1 },
        { name: 'psychic', factor: 0.5 },
        { name: 'bug', factor: 2 },
        { name: 'rock', factor: 1 },
        { name: 'ghost', factor: 2 },
        { name: 'dragon', factor: 1 },
        { name: 'dark', factor: 2 },
        { name: 'steel', factor: 1 },
        { name: 'fairy', factor: 1 }
      ]
    },
    'TypeID16': {
      name: 'rock',
      weakness: [
        { name: 'normal', factor: 0.5 },
        { name: 'fire', factor: 0.5 },
        { name: 'water', factor: 2 },
        { name: 'electric', factor: 1 },
        { name: 'grass', factor: 2 },
        { name: 'ice', factor: 1 },
        { name: 'fighting', factor: 2 },
        { name: 'poison', factor: 0.5 },
        { name: 'ground', factor: 2 },
        { name: 'flying', factor: 0.5 },
        { name: 'psychic', factor: 1 },
        { name: 'bug', factor: 1 },
        { name: 'rock', factor: 1 },
        { name: 'ghost', factor: 1 },
        { name: 'dragon', factor: 1 },
        { name: 'dark', factor: 1 },
        { name: 'steel', factor: 2 },
        { name: 'fairy', factor: 1 }
      ]
    },
    'TypeID17': {
      name: 'steel',
      weakness: [
        { name: 'normal', factor: 0.5 },
        { name: 'fire', factor: 2 },
        { name: 'water', factor: 1 },
        { name: 'electric', factor: 1 },
        { name: 'grass', factor: 0.5 },
        { name: 'ice', factor: 0.5 },
        { name: 'fighting', factor: 2 },
        { name: 'poison', factor: 0 },
        { name: 'ground', factor: 2 },
        { name: 'flying', factor: 0.5 },
        { name: 'psychic', factor: 0.5 },
        { name: 'bug', factor: 0.5 },
        { name: 'rock', factor: 0.5 },
        { name: 'ghost', factor: 1 },
        { name: 'dragon', factor: 0.5 },
        { name: 'dark', factor: 1 },
        { name: 'steel', factor: 0.5 },
        { name: 'fairy', factor: 0.5 }
      ]
    },
    'TypeID18': {
      name: 'water',
      weakness: [
        { name: 'normal', factor: 1 },
        { name: 'fire', factor: 0.5 },
        { name: 'water', factor: 0.5 },
        { name: 'electric', factor: 2 },
        { name: 'grass', factor: 2 },
        { name: 'ice', factor: 1 },
        { name: 'fighting', factor: 1 },
        { name: 'poison', factor: 1 },
        { name: 'ground', factor: 1 },
        { name: 'flying', factor: 1 },
        { name: 'psychic', factor: 1 },
        { name: 'bug', factor: 1 },
        { name: 'rock', factor: 1 },
        { name: 'ghost', factor: 1 },
        { name: 'dragon', factor: 1 },
        { name: 'dark', factor: 1 },
        { name: 'steel', factor: 0.5 },
        { name: 'fairy', factor: 1 }
      ]
    }
  }
}

const mutations = {

}

const actions = {

}

const getters = {
  pokemonTypes: (state) => {
    return state.pokemonTypes
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
