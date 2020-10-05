<template>
  <b-list-group flush>
    <b-list-group-item v-for="item in items" :key="item.id">
      <div class="row item-container">
        <img :src="item.image" :alt="item.title" class="item-image">
        <div class="col-8 p-2 item-description">
          <span class="item-title">
            {{ item.title }}
          </span>
          <br>
          <span class="item-sub-title">{{ item.subTitle }}</span>
          <h6 class="item-price">
            {{ item.price }}円（税込）
          </h6>
        </div>
      </div>
    </b-list-group-item>
  </b-list-group>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
.item-container {
  text-align: left;
}
.item-image {
  width: 33%;
  height: auto;
}
.item-title {
  color: black;
  font-size: 16;
}
.item-sub-title {
  color: darkgrey;
  font-size: 12px;
}
.item-price {
  color: red;
  align-self: end;
}
</style>
