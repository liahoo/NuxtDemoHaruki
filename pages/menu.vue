<template>
  <div>
    <b-tabs pills card active-nav-item-class="btn-warning active-tab" content-class="m-0 p-0">
      <b-tab title="超濃厚つけ麺" active>
        <img src="/img/main_title1.png" alt="title" class="content-title">
        <MenuList :items="menuTsukemen" />
      </b-tab>
      <b-tab title="豚骨らーめん">
        <img src="/img/main_title3.png" alt="title" class="content-title">
        <MenuList :items="menuNokoRamen" :sub-title="false" />
      </b-tab>
      <b-tab title="和風ラーメン">
        <img src="/img/main_title2.png" alt="title" class="content-title">
        <MenuList :items="menuWafuRamen" :sub-title="false" />
      </b-tab>
      <b-tab title="サイドメニュー">
        <img src="/img/main_title4.png" alt="title" class="content-title">
        <MenuList :items="menuSide" :sub-title="false" :thumbnail="false" />
      </b-tab>
      <b-tab title="トッピング">
        <img src="/img/main_title5.png" alt="title" class="content-title">
        <MenuList :items="menuTopic" :sub-title="false" :thumbnail="false" />
      </b-tab>
      <b-tab title="お飲み物">
        <img src="/img/main_title6.png" alt="title" class="content-title">
        <MenuList :items="menuDrink" :sub-title="false" :thumbnail="false" />
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import menus from '../assets/menus.js'
export default {
  data () {
    return {
      menuTsukemen: [],
      menuWafuRamen: [],
      menuNokoRamen: [],
      menuSide: [],
      menuTopic: [],
      menuDrink: []
    }
  },
  created () {
    this.menuTsukemen = menus.tsukemen
    this.menuWafuRamen = menus.wafu
    this.menuNokoRamen = menus.noko
    this.menuSide = menus.side
    this.menuTopic = menus.topic
    this.menuDrink = menus.drink
  }
}
</script>

<style>
.active-tab {
  color: white;
}
.content-title {
  margin-left: -1rem;
}
</style>
