<template>
  <q-page>
    <div class="q-pa-md bg-grey-9 text-white">
      <q-list dark padding bordered class="rounded-borders" style="max-width: 328px">
        <q-expansion-item
          icon="perm_identity"
          label="Account settings"
        >
          <q-card class="bg-white text-black">
            <q-card-section style="padding: 5px;">
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-list>
    </div>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters('pokemons', ['pokemons']),
    ...mapGetters('types', ['types'])
  },
  methods: {
    ...mapActions('pokemons', ['fbReadPokemons']),
    ...mapActions('types', ['fbReadTypes'])
  },
  mounted () {
    if (Object.keys(this.pokemons).length === 0) {
      console.log('Loading Pokemons...')
      this.fbReadPokemons()
    }
    if (Object.keys(this.types).length === 0) {
      console.log('Loading Pokemon types...')
      this.fbReadTypes()
    }
  }
}
</script>

<style></style>
