<template>
  <div>
    <b-navbar toggleable type="light" variant="warning">
      <b-navbar-brand href="#" left>
        {{ title }}
      </b-navbar-brand>

      <b-navbar-toggle target="nav-text-collapse" right />
      <b-collapse id="nav-text-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="/">
            ホーム
          </b-nav-item>
          <b-nav-item href="/menu">
            メニュー
          </b-nav-item>
          <b-nav-item href="/reserve">
            ご予約
          </b-nav-item>
          <b-nav-item href="/access">
            営業時間
          </b-nav-item>
          <b-nav-item href="/access">
            アクセス
          </b-nav-item>
          <b-nav-item href="/access">
            お問い合わせ
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
      title: 'らーめん春樹 多摩センター店'
    }
  }
}
</script>

<style>

</style>
