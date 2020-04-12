<template>
  <q-page padding>
    <div class="pkm-grid-counter">
      <q-btn
        v-for="(pokemonType, key) in types"
        :key="key"
        clickable
        @click="addToSelectedTypes(pokemonType)"
        :disabled="selectedTypes.includes(pokemonType)"
      >
        <img :src="'/statics/icons/types/bigger/'+pokemonType.name+'.png'" />
      </q-btn>
    </div>
    <hr />
    <p>Selected types</p>
    <div class="row">
      <q-btn
        v-for="(pokemonType, key) in selectedTypes"
        :key="key"
        clickable
        @click="removeFromSelectedTypes(pokemonType)"
      >
        <img :src="'/statics/icons/types/bigger/'+pokemonType.name+'.png'" />
      </q-btn>
    </div>
    <hr />
    <div class="pkm-type-weakness">
      <p>Weakness</p>
      <div :hidden="selectedTypes.length === 0">
        <q-list class="row">
          <q-item v-for="weakness in totalWeakness" :key="weakness.type" class="q-my-sm" :class="getWeaknessClass(weakness.factor)">
            <q-item-section avatar>
              <q-avatar size="30px">
                <img :src="'/statics/icons/types/'+weakness.type+'.png'">
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label>{{ upperFirstLetter(weakness.type) }}</q-item-label>
              <q-item-label>x{{ weakness.factor }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      selectedTypes: [],
      totalWeakness: [
        { type: 'normal', factor: 1 },
        { type: 'fire', factor: 1 },
        { type: 'water', factor: 1 },
        { type: 'electric', factor: 1 },
        { type: 'grass', factor: 1 },
        { type: 'ice', factor: 1 },
        { type: 'fighting', factor: 1 },
        { type: 'poison', factor: 1 },
        { type: 'ground', factor: 1 },
        { type: 'flying', factor: 1 },
        { type: 'psychic', factor: 1 },
        { type: 'bug', factor: 1 },
        { type: 'rock', factor: 1 },
        { type: 'ghost', factor: 1 },
        { type: 'dragon', factor: 1 },
        { type: 'dark', factor: 1 },
        { type: 'steel', factor: 1 }
      ]
    }
  },
  computed: {
    ...mapGetters('types', ['types'])
  },
  methods: {
    ...mapActions('types', ['fbReadTypes']),
    addToSelectedTypes (type) {
      if (this.selectedTypes.length === 2) {
        return
      }
      this.selectedTypes.push(type)
      for (var i in type.weaknesses) {
        for (var j in this.totalWeakness) {
          if (this.totalWeakness[j].type === type.weaknesses[i].name) {
            this.totalWeakness[j].factor *= type.weaknesses[i].factor
          }
        }
      }
    },
    removeFromSelectedTypes (type) {
      this.selectedTypes[0].name === type.name ? this.selectedTypes.shift() : this.selectedTypes.pop()
      for (var i in this.totalWeakness) {
        this.totalWeakness[i].factor = 1
      }
      if (this.selectedTypes.length !== 0) {
        for (var j in this.selectedTypes) {
          for (var k in this.selectedTypes[j].weaknesses) {
            for (var l in this.totalWeakness) {
              if (this.totalWeakness[l].type === this.selectedTypes[j].weaknesses[k].name) {
                this.totalWeakness[l].factor *= this.selectedTypes[j].weaknesses[k].factor
              }
            }
          }
        }
      }
    },
    upperFirstLetter (str) {
      return str.charAt(0).toUpperCase() + str.substring(1)
    },
    getWeaknessClass (factor) {
      if (factor > 1) {
        return 'pkm-weakness-good'
      } else if (factor < 1) {
        return 'pkm-weakness-bad'
      } else {
        return 'pkm-weakness-normal'
      }
    }
  },
  mounted () {
    if (Object.keys(this.types).length === 0) {
      console.log('Loading Pokemon types...')
      this.fbReadTypes()
    }
  }
}

</script>

<style lang="scss">
button:disabled {
  background: black;
  filter: grayscale(100%)
}

.pkm-grid-counter {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(51px, 1fr));
    grid-gap: 1em;
  }

.q-pa-sm {
  .pkm-type-name {
    text-align: center;
  }
  p {
    margin: 0 0 0px;
  }
  .disabled, [disabled] {
    opacity: .1 !important;
  }
}

.pkm-type-weakness {
  .q-my-sm {
    margin-top: 8px;
    margin-bottom: 8px;
    float: left;
    width: 150px;
  }
  .pkm-type-name {
    float: left;
    width: 60px;
  }
  .pkm-weakness-good {
    color: rgb(57,255,20) !important;
    font-weight: bold;
  }
  .pkm-weakness-bad {
    color: blue !important;
  }
  .pkm-weakness-normal {
    color: black !important;
  }
}
</style>
