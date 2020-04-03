<template>
  <q-card
    class="bg-grey-9 my-card pkm-details"
    dark
  >
    <q-bar class="bg-grey-9">
      <q-space />
      <q-btn dense flat icon="close" v-close-popup>
        <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
      </q-btn>
    </q-bar>
    <div class="q-pa-md">
      <div class="row">
        <div class="col-9">
          <div class="row">
            <div class="col-8">
              {{ pokemon.name }}
            </div>
            <div class="col-4">
              #{{ getNationalNoStr() }}
            </div>
          </div>
          <div class="row">
            {{ pokemon.species }}
          </div>
          <div class="row">
            <div class="col-6">
              <img
                v-for="type in pokemon.types"
                :key="type"
                :src="getTypeImage(type)"
                class="pkm-type"
              />
            </div>
          </div>
        </div>
        <q-img
          class="col-3"
          :src="getIconImage()"
        />
      </div>
    </div>

    <q-tabs narrow-indicator v-model="pokemonDataTab">
      <q-tab label="G" name="general" />
      <q-tab label="M" name="moves" />
      <q-tab label="L" name="locations" />
      <q-tab label="E" name="evolution" />
      <q-tab label="S" name="sprites" />
    </q-tabs>

    <q-separator />

    <q-tab-panels v-model="pokemonDataTab" animated>
      <q-tab-panel
        name="general"
      >
        general
      </q-tab-panel>
      <q-tab-panel
        name="moves"
      >
        moves
      </q-tab-panel>
      <q-tab-panel
        name="locations"
      >
        locations
      </q-tab-panel>
      <q-tab-panel
        name="evolution"
      >
        evolution
      </q-tab-panel>
      <q-tab-panel
        name="sprites"
      >
        sprites
      </q-tab-panel>
    </q-tab-panels>
  </q-card>
</template>

<script>
export default {
  props: ['pokemon'],
  data () {
    return {
      pokemonDataTab: 'general'
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
    getIconImage () {
      return 'https://img.pokemondb.net/sprites/black-white/anim/normal/' + this.pokemon.name.toLowerCase() + '.gif'
    }
  }
}
</script>

<style lang="scss">
  .pkm-details {
    padding: 15px;
    color: white;
  }

  .q-tab-panel {
    color: black;
  }

  .pkm-type {
    padding: 0px 2px;
  }
</style>
