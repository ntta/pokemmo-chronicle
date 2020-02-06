<template>
    <!-- <li>
        <div>{{ pokemonType.name }}</div>
        <div v-for="type in pokemonType" v-bind:key="type">
            <img class="pokemon-type" v-bind:src="'/statics/types/'+type+'-icon.png'" />
        </div>
        <button @click="comparePokemonType(index)">X</button>
    </li> -->
    <button>
        <img class="pokemon-type" v-bind:src="'/statics/types/'+pokemonType.name+'-icon.png'" />
    </button>
</template>

<script>
export default {
  props: ['pokemonType']
}
</script>

<style>
.pokemon-type {
    padding: 3px;
}
img {
    max-width:50px;
}
</style>
