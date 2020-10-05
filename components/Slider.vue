<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="640"
      img-height="320"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="えび豚骨ラーメン"
        text="当店人気No.1"
        img-src="~/assets/img/slide1.jpg"
      />

      <!-- Text slides with image -->
      <b-carousel-slide
        caption="いらしゃいませ"
        text="ご来店いただきありがとうございます！"
        img-src="~/assets/img/slide2.jpg"
      />

      <!-- Text slides with image -->
      <b-carousel-slide
        caption="店内"
        text="お待ちしております"
        img-src="~/assets/img/slide3.jpg"
      />
    </b-carousel>
  </div>
</template>

<script>
export default {
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>

<style></style>
