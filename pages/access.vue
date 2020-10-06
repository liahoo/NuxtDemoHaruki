<template>
  <div>
    <img src="/img/shop_img.jpg" alt="shop_image" class="shop-image">
    <div v-for="item in items" :key="item.name" class="row m-3">
      <div class="col-4">
        <span class="item-name">{{ item.name }}
        </span>
      </div>
      <span class="col-8 item-value">{{ item.value }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fields: ['item', 'value'],
      items: [
        { name: '住　所', value: '東京都多摩市落合1-39-1 マグレブＥＡＳＴ 7階' },
        { name: '電話番号', value: '042-339-0025' },
        { name: '営業時間', value: '11:00～23:00' },
        { name: '禁煙タイム', value: '喫煙可' },
        { name: '定休日', value: '年中無休' },
        { name: '駐車場', value: 'あり' },
        { name: '席　数', value: '19席' }
      ]
    }
  }
}
</script>

<style>
.shop-image{
  width: 100%;
  align-self: flex-start;
}
.hidden_header {
  display: none;
}
</style>
