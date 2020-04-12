<template>
  <q-page padding>
    <move
      v-for="(move, id) in moves"
      :key="id"
      :move="move"
    >
    </move>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters('moves', ['moves'])
  },
  methods: {
    ...mapActions('moves', ['fbReadMoves'])
  },
  components: {
    'move': require('components/Move/Move.vue').default
  },
  mounted () {
    if (Object.keys(this.moves).length === 0) {
      console.log('Loading Pokemon moves...')
      this.fbReadMoves()
    }
  }
}
</script>

<style lang="scss">
</style>
