<template>
  <div>
    <div class="row text-overline pkm-details-title">Description</div>
    <q-card class="row pkm-details-card" dark bordered>
      <q-card-section>
        {{ pokemon.description }}
      </q-card-section>
    </q-card>
    <div class="row text-overline pkm-details-title">
      <div class="col">Height</div>
      <div class="col">Weight</div>
    </div>
    <div class="row">
      <q-card class="col pkm-details-card" align="center" dark bordered>{{ pokemon.height }} m</q-card>
      <q-card class="col pkm-details-card" align="center" dark bordered>{{ pokemon.weight }} kg</q-card>
    </div>
    <div class="row text-overline pkm-details-title">Gender Ratio</div>
    <div
      class="row pkm-details-content"
      v-if="pokemon.genderRatio.male !== 0 || pokemon.genderRatio.female !== 0"
    >
        <q-linear-progress class="pkm-details-gender-male" :style="getGenderStyle(pokemon.genderRatio.male, true)" size="25px" :value="1">
          <div class="absolute-full flex flex-center">
            <q-badge color="transparent" text-color="black" :label="getGenderLabel(pokemon.genderRatio.male, true)" />
          </div>
        </q-linear-progress>
        <q-linear-progress class="pkm-details-gender-female" :style="getGenderStyle(pokemon.genderRatio.female, false)" size="25px" :value="1">
          <div class="absolute-full flex flex-center">
            <q-badge color="transparent" text-color="black" :label="getGenderLabel(pokemon.genderRatio.female, false)" />
          </div>
        </q-linear-progress>
    </div>
    <div
      class="row pkm-details-content"
      v-else
    >
      <q-linear-progress dark rounded size="25px" :value="1" color="grey">
          <div class="absolute-full flex flex-center">
            <q-badge color="transparent" text-color="black" :label="pokemonIsGenderless" />
          </div>
        </q-linear-progress>
    </div>
    <div class="row text-overline pkm-details-title">Egg Groups</div>
    <div class="row pkm-details-title pkm-details-content">
      <q-btn
        color="white"
        class="col bg-black pkm-details-button pkm-details-title"
        v-for="eggGroup in pokemon.eggGroups"
        :key="eggGroup"
        outline
      >
        {{ eggGroup }}
      </q-btn>
    </div>
    <div class="row text-overline pkm-details-title">EV Yields</div>
    <q-card dark bordered class="pkm-details-card pkm-details-title">
      <q-card-section
        v-for="ev in pokemon.evYields"
        :key="ev"
      >
        {{ ev }}
      </q-card-section>
    </q-card>
    <div class="row text-overline pkm-details-title">Base Stats</div>
    <q-card class="pkm-details-card" dark bordered>
      <div class="row pkm-details-title">
        <div class="col-4">HP</div>
        <div class="col-8">
          <q-linear-progress dark size="100%" :value="pokemon.baseStats.hp/maxStat" color="warning">
              <div class="absolute-full flex flex-center">
                <q-badge color="transparent" text-color="black" class="pkm-details-base-stats-text" :label="pokemon.baseStats.hp" />
              </div>
          </q-linear-progress>
        </div>
      </div>
      <div class="row pkm-details-title">
        <div class="col-4">Attack</div>
        <div class="col-8">
          <q-linear-progress dark size="100%" :value="pokemon.baseStats.attack/maxStat" color="warning">
              <div class="absolute-full flex flex-center">
                <q-badge color="transparent" text-color="black" class="pkm-details-base-stats-text" :label="pokemon.baseStats.attack" />
              </div>
          </q-linear-progress>
        </div>
      </div>
      <div class="row pkm-details-title">
        <div class="col-4">Defense</div>
        <div class="col-8">
          <q-linear-progress dark size="100%" :value="pokemon.baseStats.defense/maxStat" color="warning">
              <div class="absolute-full flex flex-center">
                <q-badge color="transparent" text-color="black" class="pkm-details-base-stats-text" :label="pokemon.baseStats.defense" />
              </div>
          </q-linear-progress>
        </div>
      </div>
      <div class="row pkm-details-title">
        <div class="col-4">Sp. Attack</div>
        <div class="col-8">
          <q-linear-progress dark size="100%" :value="pokemon.baseStats.spAttack/maxStat" color="warning">
              <div class="absolute-full flex flex-center">
                <q-badge color="transparent" text-color="black" class="pkm-details-base-stats-text" :label="pokemon.baseStats.spAttack" />
              </div>
          </q-linear-progress>
        </div>
      </div>
      <div class="row pkm-details-title">
        <div class="col-4">Sp. Defense</div>
        <div class="col-8">
          <q-linear-progress dark size="100%" :value="pokemon.baseStats.spDefense/maxStat" color="warning">
              <div class="absolute-full flex flex-center">
                <q-badge color="transparent" text-color="black" class="pkm-details-base-stats-text" :label="pokemon.baseStats.spDefense" />
              </div>
          </q-linear-progress>
        </div>
      </div>
      <div class="row pkm-details-title">
        <div class="col-4">Speed</div>
        <div class="col-8">
          <q-linear-progress dark size="100%" :value="pokemon.baseStats.speed/maxStat" color="warning">
              <div class="absolute-full flex flex-center">
                <q-badge color="transparent" text-color="black" class="pkm-details-base-stats-text" :label="pokemon.baseStats.speed" />
              </div>
          </q-linear-progress>
        </div>
      </div>
    </q-card>
  </div>
</template>

<script>
export default {
  props: ['pokemon'],
  data () {
    return {
      pokemonIsGenderless: this.pokemon.name + ' is genderless',
      maxStat: Math.max(this.pokemon.baseStats.hp, this.pokemon.baseStats.attack, this.pokemon.baseStats.defense, this.pokemon.baseStats.spAttack, this.pokemon.baseStats.spDefense, this.pokemon.baseStats.speed)
    }
  },
  methods: {
    getGenderLabel (gender, isMale) {
      let label = ''
      if (gender !== undefined && gender > 0) {
        label = (isMale ? '♂ ' : ' ♀') + String(gender.toFixed(1)) + '%'
      }
      return label
    },
    getGenderStyle (gender, isMale) {
      let width = ''
      let border = ''
      let style = width + border
      if (gender !== undefined) {
        width = 'width: ' + String(gender.toFixed(1)) + '%;'
        if (gender === 100) {
          border = 'border-radius: 4px;'
        } else if (gender > 0 && isMale) {
          border = 'border-top-left-radius: 4px;border-bottom-left-radius: 4px;'
        } else if (gender > 0) {
          border = 'border-top-right-radius: 4px;border-bottom-right-radius: 4px;'
        }
        style = width + border
      }
      return style
    }
  }
}
</script>

<style lang="scss">
  .pkm-details-base-stats-text {
    font-size: 80%;
    font-weight: bold;
  }

  .pkm-details-button {
    margin: 0 5px;
  }

  .pkm-details-content {
    margin-bottom: 8px;
  }

  .pkm-details-card {
    padding: 8px;
    margin: 0px 5px 8px;
  }

  div {
    .pkm-details-gender-male {
      .q-badge {
        font-size: 45%;
      }
        color: #81d5fa;
    }
    .pkm-details-gender-female {
      .q-badge {
        font-size: 45%;
      }
        color: #f48fb1;
    }
  }

  .pkm-details-gender2 {
    width: 12.5%;
  }

  .pkm-details-title {
    justify-content: center;
    align-items: center;
    text-align: center;
  }
</style>
