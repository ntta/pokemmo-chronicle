<template>
  <div
    class="column inline pkm-info"
    :style="getBoxMargin()"
  >
    <div><img :src="getIconPath(pokemon.nationalNo)" /></div>
    <div>#{{ getNationalNoStr(pokemon.nationalNo)}}</div>
    <div class="pkm-name">{{ pokemon.name }}</div>
    <div class="row inline">
      <div
        v-for="type in pokemon.types"
        :key="type"
        :class="getTypeClassMobile(type)"
      >
        {{ type }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['pokemon'],
  data () {
    return {
    }
  },
  methods: {
    getBoxMargin () {
      let margin = String(screen.width / 120 * 8) + 'px'
      return 'margin: ' + margin
    },
    getTypeClassMobile (type) {
      return 'pill background-color-' + type
    },
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
    getIconPath (number) {
      let iconPath = '/statics/icons/pokemons/' + this.getNationalNoStr(number) + '.png'
      return iconPath
    }
  }
}
</script>

<style lang="scss">
  .pkm-info {
    width: 120px;
    height: 180px;
  }

  .background-color-bug {
    background: linear-gradient(180deg, #729f3f 50%, #729f3f 50%);
    background-color: #729f3f;
    color: #fff;
  }

  .background-color-dark {
    background: linear-gradient(180deg, #707070 50%, #707070 50%);
    background-color: #707070;
    color: #fff;
  }

  .background-color-dragon {
    background: linear-gradient(180deg, #53a4cf 50%, #f16e57 50%);
    background-color: #53a4cf;
    color: #fff;
  }

  .background-color-electric {
    background: linear-gradient(180deg, #eed535 50%, #eed535 50%);
    background-color: #eed535;
    color: #212121;
  }

  .background-color-fighting {
    background: linear-gradient(180deg, #d56723 50%, #d56723 50%);
    background-color: #d56723;
    color: #fff;
  }

  .background-color-fire {
    background: linear-gradient(180deg, #fd7d24 50%, #fd7d24 50%);
    background-color: #fd7d24;
    color: #fff;
  }

  .background-color-flying {
    background: linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%);
    background-color: #3dc7ef;
    color: #212121;
  }

  .background-color-ghost {
    background: linear-gradient(180deg, #7b62a3 50%, #7b62a3 50%);
    background-color: #7b62a3;
    color: #fff;
  }

  .background-color-grass {
    background: linear-gradient(180deg, #9bcc50 50%, #9bcc50 50%);
    background-color: #9bcc50;
    color: #212121;
  }

  .background-color-ground {
    background: linear-gradient(180deg, #f7de3f 50%, #ab9842 50%);
    background-color: #f7de3f;
    color: #212121;
  }

  .background-color-ice {
    background: linear-gradient(180deg, #51c4e7 50%, #51c4e7 50%);
    background-color: #51c4e7;
    color: #212121;
  }

  .background-color-normal {
    background: linear-gradient(180deg, #a4acaf 50%, #a4acaf 50%);
    background-color: #a4acaf;
    color: #212121;
  }

  .background-color-poison {
    background: linear-gradient(180deg, #b97fc9 50%, #b97fc9 50%);
    background-color: #b97fc9;
    color: #fff;
  }

  .background-color-psychic {
    background: linear-gradient(180deg, #f366b9 50%, #f366b9 50%);
    background-color: #f366b9;
    color: #fff;
  }

  .background-color-rock {
    background: linear-gradient(180deg, #a38c21 50%, #a38c21 50%);
    background-color: #a38c21;
    color: #fff;
  }

  .background-color-steel {
    background: linear-gradient(180deg, #9eb7b8 50%, #9eb7b8 50%);
    background-color: #9eb7b8;
    color: #212121;
  }

  .background-color-water {
    background: linear-gradient(180deg, #4592c4 50%, #4592c4 50%);
    background-color: #4592c4;
    color: #fff;
  }

  .pill {
    font-family: "Flexo-Medium",arial,sans-serif;
    border-radius: 3px;
    line-height: 18px;
    max-width: 110px;
    margin: 0 1.5625% 0 0;
    width: 38.4375%;
    float: left;
    text-transform: none;
    font-size: 11px;
    text-align: center;
  }

  .pkm-name {
    font-family: "Flexo-Demi",arial,sans-serif;
    text-transform: none;
    font-size: 145%;
    margin-bottom: 5px;
  }
</style>
