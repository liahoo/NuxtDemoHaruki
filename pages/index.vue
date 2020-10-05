<template>
  <div class="container">
    <div class="slider">
      <Slider />
    </div>
    <div class="row justify-content-around mid-menu">
      <b-button pill class="btn-warning button-rounded" @click="tabIndex = 0">
        店長<br>おすすめ
      </b-button>
      <b-button pill class="btn-warning button-rounded" @click="tabIndex = 1">
        人気<br>メニュー
      </b-button>
      <b-button pill class="btn-warning button-rounded" @click="tabIndex = 2">
        新作<br>メニュー
      </b-button>
    </div>
    <transition name="fade">
      <div v-if="tabIndex === 2" :key="'new'">
        <MenuList :items="menuNew" />
      </div>
      <div v-else-if="tabIndex === 1" :key="'popular'">
        <MenuList :items="menuPopular" />
      </div>
      <div v-else :key="'recommended'">
        <MenuList :items="menuRecommended" />
      </div>
    </transition>
    <Footer />
  </div>
</template>

<script>
export default {
  data () {
    return {
      tabIndex: 0,
      menuRecommended: [],
      menuPopular: [],
      menuNew: []
    }
  },
  created () {
    this.menuRecommended = [
      {
        id: 1,
        image: '/img/ramen.jpg',
        title: 'えび豚骨ラーメン',
        subTitle: '当店自慢の一品',
        price: 880
      },
      {
        id: 2,
        image: '/img/tsukemen.jpg',
        title: 'つけ麺',
        subTitle: '満腹は幸せ',
        price: 880
      },
      {
        id: 3,
        image: '/img/ramen.jpg',
        title: '濃厚ラーメン',
        subTitle: '人気No.1',
        price: 880
      },
      {
        id: 4,
        image: '/img/ramen.jpg',
        title: '激辛つけ麺',
        subTitle: '本当に辛いよ！',
        price: 880
      },
      {
        id: 5,
        image: '/img/ramen.jpg',
        title: '担々麺',
        subTitle: '女性人気No.1',
        price: 880
      }
    ]
    this.menuPopular = [
      {
        id: 6,
        image: '/img/ramen.jpg',
        title: '激辛つけ麺',
        subTitle: '本当に辛いよ！',
        price: 880
      }
    ]
    this.menuNew = [
      {
        id: 7,
        image: '/img/ramen.jpg',
        title: '担々麺',
        subTitle: '女性人気No.1',
        price: 880
      }
    ]
  },
  methods: {
    tabChange: (index) => {

    }
  }
}
</script>

<style>
.container {
  margin: 0px auto;
  padding: 0px;
  max-width: 800px;
  min-height: 100vh;
  justify-content: center;
  background-color: lightgrey;
}
.mid-menu {
  min-height: 100px;
  justify-content: center;
  text-align: center;
  align-items: center;
  background-color: lightgrey;

}
.slider {
  margin-left: -15px;
  margin-right: -15px;
}
.button-rounded {
  height: 80px;
  width: 80px;
  border-radius: 40px;
  box-shadow: 2px 4px 4px grey;
  color: black;
  font-weight: bold;
  font-size: small;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
