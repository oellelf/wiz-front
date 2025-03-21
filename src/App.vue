

<template>
  <div id="app" class="wrap">
    <div class="lnb-container">
      <LnbMenu />
    </div>
    <router-view />
  </div>
</template>

<script>
import LnbMenu from './components/LnbMenu.vue'

export default {
  name: 'App',
  components: {
    LnbMenu,
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
.wrap {
  width: 1200px;
  height: 800px;
  border: 5px solid #645ED3;
  border-radius: 20px;
}
.lnb-container {
  margin-top: 30px; /* ✅ LnbMenu 위 여백 */
}
</style>


