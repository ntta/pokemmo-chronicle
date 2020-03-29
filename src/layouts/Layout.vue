<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-9 text-white">
    <q-header elevated class="bg-grey-6">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />

        <q-toolbar-title>
          {{ currentPageLabel }}
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-footer>
    </q-footer>

    <q-drawer
      v-model="leftDrawerOpen"
      :width="250"
      show-if-above
      bordered
      content-class="bg-grey-8"
    >
      <q-list dark>
        <q-item-label header>PokeMMO Chronicle</q-item-label>
        <q-item
          v-for="nav in navs"
          :key="nav.name"
          :to="nav.to"
          class="text-grey-4"
          @click="getCurrentPageLabel(nav.label)"
          clickable
          exact
        >
          <q-item-section avatar>
            <q-icon :name="nav.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ nav.label }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'Layout',

  data () {
    return {
      leftDrawerOpen: false,
      currentPageLabel: 'News & Updates',
      navs: [
        {
          name: 'news',
          label: 'News & Updates',
          icon: 'system_update',
          to: '/'
        },
        {
          name: 'pokemons',
          label: 'Pokédex',
          icon: 'chrome_reader_mode',
          to: '/pokemons'
        },
        {
          name: 'abilities',
          label: 'Abilities',
          icon: 'font_download',
          to: '/abilities'
        },
        {
          name: 'counter',
          label: 'Counter',
          icon: 'compare_arrows',
          to: '/counter'
        },
        {
          name: 'settings',
          label: 'Settings',
          icon: 'settings',
          to: '/settings'
        },
        {
          name: 'about',
          label: 'About',
          icon: 'info',
          to: '/about'
        }
      ]
    }
  },
  methods: {
    getCurrentPageLabel (label) {
      this.currentPageLabel = label
    }
  }
}
</script>

<style lang="scss">
  .q-drawer {
    .q-router-link--exact-active {
      color: white !important;
    }
  }
</style>
