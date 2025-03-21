<template>
  <div id="app" class="wrap">
    <LnbMenu />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import LnbMenu from './components/LnbMenu.vue'

export default {
  name: 'App',
  components: {
    LnbMenu
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', sans-serif;
}

.wrap {
  width: 1200px;
  height: 800px;
  border: 5px solid #645ED3;
  border-radius: 20px;
  display: flex;
}

.content {
  flex: 1;
  padding: 20px;
}
</style>
