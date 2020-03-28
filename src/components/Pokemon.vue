<template>
  <q-item clickable v-ripple>
    <q-item-section>#{{ pokemon.nationalNo }}</q-item-section>
    <q-item-section>
      <q-avatar>
        <img :src="getIconPath(pokemon.nationalNo)" />
      </q-avatar>
    </q-item-section>
    <q-item-section>{{ pokemon.name }}</q-item-section>
    <q-item-section>{{ pokemon.types }}</q-item-section>
  </q-item>
</template>

<script>
export default {
  props: ['pokemon'],
  methods: {
    getIconPath (number) {
      let nationalNoStr = ''
      let iconPath = ''
      if (number < 10) {
        nationalNoStr = '00' + String(number)
      } else if (number < 100) {
        nationalNoStr = '0' + String(number)
      } else {
        nationalNoStr = String(number)
      }
      iconPath = 'https://www.serebii.net/blackwhite/pokemon/' + nationalNoStr + '.png'
      // iconPath = '/statics/icons/pokemons/' + nationalNoStr + '.png'
      return iconPath
    }
  }
}
</script>

<style>
</style>
