<template>
  <b-list-group flush>
    <b-list-group-item v-for="item in items" :key="item.id" class="item-container">
      <img :src="item.titleImage" alt="title">
      <div class="row">
        <img v-if="thumbnail" :src="item.image" :alt="item.title" class="item-image">
        <div v-if="subTitle" class="col-8 p-2 item-description">
          <span class="item-sub-title">{{ item.subTitle }}</span>
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
    },
    subTitle: {
      type: Boolean,
      default: true
    },
    thumbnail: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped>
.item-container {
  text-align: left;
  padding-top: 2rem;
}
.item-image {
  margin: auto;
  width: 33%;
  align-self: flex-start;
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
