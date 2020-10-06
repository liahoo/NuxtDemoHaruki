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
      <b-button pill class="btn-warning button-rounded">
        <router-link to="/menu" class="link-text">
          すべての<br>メニュー
        </router-link>
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
  </div>
</template>

<script>
import menus from '../assets/menus.js'
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
    this.menuRecommended = menus.recommend()
    this.menuPopular = menus.popular()
    this.menuNew = menus.new()
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
}
.mid-menu {
  min-height: 100px;
  justify-content: center;
  text-align: center;
  align-items: center;
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
.link-text{
  color: black!important;
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
