<template>
  <div>
    <div v-if="pokemon.genderDifference !== ''">
      <div class="row text-overline pkm-details-title">Gender Difference</div>
      <q-card class="row pkm-details-card" dark bordered>
        <q-card-section>
          {{ pokemon.genderDifference }}
        </q-card-section>
      </q-card>
    </div>
    <!-- if the pokemon doesn't have gender difference -->
    <div v-if="pokemon.sprites.male === undefined">
      <div class="row text-overline pkm-details-title">Normal Sprites</div>
      <q-card class="row pkm-details-card pkm-details-title" dark bordered>
        <q-card-section class="col"><img :src="getGifSprite(true, true)" /></q-card-section>
        <q-card-section class="col"><img :src="getGifSprite(false, true)" /></q-card-section>
      </q-card>
      <div class="row text-overline pkm-details-title">Shiny Sprites</div>
      <q-card class="row pkm-details-card pkm-details-title" dark bordered>
        <q-card-section class="col"><img :src="getGifSprite(true, false)" /></q-card-section>
        <q-card-section class="col"><img :src="getGifSprite(false, false)" /></q-card-section>
      </q-card>
    </div>
    <div v-else>
      <div class="row text-overline pkm-details-title">Normal Sprites</div>
      <div class="row text-overline pkm-details-title">Male</div>
      <q-card class="row pkm-details-card pkm-details-title" dark bordered>
        <q-card-section class="col"><img :src="getGifSprite(true, true)" /></q-card-section>
        <q-card-section class="col"><img :src="getGifSprite(false, true)" /></q-card-section>
      </q-card>
      <div class="row text-overline pkm-details-title">Female</div>
      <q-card class="row pkm-details-card pkm-details-title" dark bordered>
        <q-card-section class="col"><img :src="getGifSprite(true, true, false)" /></q-card-section>
        <q-card-section class="col"><img :src="getGifSprite(false, true, false)" /></q-card-section>
      </q-card>
      <div class="row text-overline pkm-details-title">Shiny Sprites</div>
      <div class="row text-overline pkm-details-title">Male</div>
      <q-card class="row pkm-details-card pkm-details-title" dark bordered>
        <q-card-section class="col"><img :src="getGifSprite(true, false)" /></q-card-section>
        <q-card-section class="col"><img :src="getGifSprite(false, false)" /></q-card-section>
      </q-card>
      <div class="row text-overline pkm-details-title">Female</div>
      <q-card class="row pkm-details-card pkm-details-title" dark bordered>
        <q-card-section class="col"><img :src="getGifSprite(true, false, false)" /></q-card-section>
        <q-card-section class="col"><img :src="getGifSprite(false, false, false)" /></q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
export default {
  props: ['pokemon'],
  methods: {
    getGifSprite (isFront, isNormal, isMale = true) {
      let hasGenderDifference = this.pokemon.sprites.male !== undefined
      let resultPath = ''
      let gifPath = '/statics/sprites/pokemons/gif/'
      if (hasGenderDifference) {
        if (isMale) {
          if (isNormal) {
            resultPath = gifPath + (isFront ? this.pokemon.sprites.male.normal.front : this.pokemon.sprites.male.normal.back) + '.gif'
          } else {
            resultPath = gifPath + (isFront ? this.pokemon.sprites.male.shiny.front : this.pokemon.sprites.male.shiny.back) + '.gif'
          }
        } else {
          if (isNormal) {
            resultPath = gifPath + (isFront ? this.pokemon.sprites.female.normal.front : this.pokemon.sprites.female.normal.back) + '.gif'
          } else {
            resultPath = gifPath + (isFront ? this.pokemon.sprites.female.shiny.front : this.pokemon.sprites.female.shiny.back) + '.gif'
          }
        }
      } else {
        if (isNormal) {
          resultPath = gifPath + (isFront ? this.pokemon.sprites.normal.front : this.pokemon.sprites.normal.back) + '.gif'
        } else {
          resultPath = gifPath + (isFront ? this.pokemon.sprites.shiny.front : this.pokemon.sprites.shiny.back) + '.gif'
        }
      }

      return resultPath
    }
  }
}
</script>

<style lang="scss">
</style>
