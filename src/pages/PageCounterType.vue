<template>
  <q-page padding>
    <div class="row">
      <div class="q-pa-sm"
          v-for="(pokemonType, key) in pokemonTypes"
          :key="key">
          <p class="pkm-type-name">{{ upperFirstLetter(pokemonType.name) }}</p>
          <q-btn round
            @click="addToSelectedTypes(pokemonType)"
            :disabled="selectedTypes.includes(pokemonType)">
            <q-avatar size="50px">
              <img :src="'/statics/types/'+pokemonType.name+'-icon.png'">
            </q-avatar>
          </q-btn>
      </div>
    </div>
    <hr />
    <p>Selected types</p>
    <div class="row">
      <div class="q-pa-sm"
          v-for="(pokemonType, key) in selectedTypes"
          :key="key">
          <p class="pkm-type-name">{{ upperFirstLetter(pokemonType.name) }}</p>
          <q-btn round
            @click="removeFromSelectedTypes(pokemonType)">
            <q-avatar size="50px">
              <img :src="'/statics/types/'+pokemonType.name+'-icon.png'">
            </q-avatar>
          </q-btn>
      </div>
    </div>
    <hr />
    <div class="pkm-type-weakness">
      <p>Weakness</p>
      <div :hidden="selectedTypes.length === 0">
        <q-list class="row">
          <q-item v-for="weakness in totalWeakness" :key="weakness.type" class="q-my-sm" :class="getWeaknessClass(weakness.factor)">
            <q-item-section avatar>
              <q-avatar size="30px">
                <img :src="'/statics/types/'+weakness.type+'-icon.png'">
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
import { mapGetters } from 'vuex'
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
    ...mapGetters('pokemonTypes', ['pokemonTypes'])
  },
  methods: {
    addToSelectedTypes (type) {
      if (this.selectedTypes.length === 2) {
        return
      }
      this.selectedTypes.push(type)
      for (var i in type.weakness) {
        for (var j in this.totalWeakness) {
          if (this.totalWeakness[j].type === type.weakness[i].name) {
            this.totalWeakness[j].factor *= type.weakness[i].factor
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
          for (var k in this.selectedTypes[j].weakness) {
            for (var l in this.totalWeakness) {
              if (this.totalWeakness[l].type === this.selectedTypes[j].weakness[k].name) {
                this.totalWeakness[l].factor *= this.selectedTypes[j].weakness[k].factor
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
  }
}

</script>

<style lang="scss">
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
