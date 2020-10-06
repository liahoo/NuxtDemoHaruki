<template>
  <div>
    <b-navbar toggleable type="light" variant="warning">
      <b-navbar-brand href="/" left>
        <img src="/img/logo.png" class="nav-img-logo" alt="logo">
        <span class="nav-title">
          {{ title }}
        </span>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-text-collapse" right />
      <b-collapse id="nav-text-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item v-for="option in options" :key="option.link" :href="option.link">
            {{ option.text }}
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'らーめん春樹 多摩センター店',
      options: [
        { text: 'ホーム', link: '/' },
        { text: 'メニュー', link: '/menu' },
        { text: 'アクセス・営業時間', link: '/access' }
      ]
    }
  },
  created () {
    this.title = this.generateTitle()
  },
  methods: {
    generateTitle () {
      const option = this.options.find(opt => opt.link === this.$route.path)
      return option ? option.text : 'らーめん春樹 多摩センター店'
    }
  }
}
</script>

<style>
.navbar {
  /* background-color: #FF00FF !important; */
  align-items: center;
  padding: 0.25rem 0.5rem;
}
.navbar .nav-img-logo {
  width: 36px;
  height: 36px;
}
.navbar .nav-title {
  align-self: center;
  margin: auto;
}
.navbar .navbar-brand {
  font-size: 14px;
  font-weight: bolder;
  flex-direction: row;
}
.navbar .navbar-toggler {
  font-size: 16px;
}

</style>
