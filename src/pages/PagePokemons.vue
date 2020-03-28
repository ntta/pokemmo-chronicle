
<template>
  <q-page padding>
    <div class="q-pa-md">
    <q-table
      title=""
      :data="arrayPokemons"
      :columns="columns"
      row-key="number"
      dark
      color="amber"
      :pagination.sync="pagination"
      :rows-per-page-options="[10, 20, 50]"
    >
      <template v-slot:body-cell-pic="props">
        <q-td :props="props">
          <img class="pokemon-icon" :src="getPicUrl(props.row.nationalNo)" />
        </q-td>
      </template>
      <template v-slot:body-cell-type="props">
        <q-td :props="props">
          <img v-for="type in props.row.types" :key=type :src="getTypeUrl(type)" />
        </q-td>
      </template>
    </q-table>
    </div>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      pagination: {
        sortBy: 'number',
        descending: false,
        rowsPerPage: 50
      },
      columns: [
        {
          name: 'number',
          required: true,
          label: 'No.',
          align: 'center',
          field: row => row.nationalNo,
          format: val => {
            return '#' + this.getNationalNoStr(val)
          },
          sortable: true
        },
        {
          name: 'pic',
          required: true,
          label: 'Pic',
          align: 'center',
          field: row => row.nationalNo
        },
        {
          name: 'name',
          required: true,
          label: 'Name',
          field: row => row.name,
          format: val => `${val}`,
          align: 'center',
          sortable: true
        },
        {
          name: 'type',
          required: false,
          label: 'Type',
          align: 'center',
          field: row => row.types
        }
      ]
    }
  },
  computed: {
    ...mapGetters('pokemons', ['pokemons']),
    arrayPokemons () {
      return Object.values(this.pokemons)
    }
  },
  methods: {
    ...mapActions('pokemons', ['fbReadData']),
    getNationalNoStr (number) {
      let nationalNoStr = ''
      if (number < 10) {
        nationalNoStr = '00' + String(number)
      } else if (number < 100) {
        nationalNoStr = '0' + String(number)
      } else {
        nationalNoStr = String(number)
      }
      return nationalNoStr
    },
    getPicUrl (number) {
      return 'https://www.serebii.net/blackwhite/pokemon/' + this.getNationalNoStr(number) + '.png'
    },
    getTypeUrl (type) {
      return 'https://www.serebii.net/pokedex-dp/type/' + type + '.gif'
    }
  },
  components: {
    // 'pokemon': require('components/Pokemon.vue').default
  },
  mounted () {
    this.fbReadData()
  }
}
</script>

<style>
  .pokemon-icon {
    max-height: 200%;
  }
</style>
