

<template>
  <div>
    <nav>
      <router-link to="/" class="link">Home</router-link>
      <router-link to="/UnderWriting" class="link">간편 언더라이팅</router-link>
         <router-link to="/Rider" class="link">특약다나와</router-link>
    </nav>
  </div>
</template>


<script>
export default {
  name: 'WIZ',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrap { 
  width: 1200px; 
  height: 800px; 
  border : 5px solid #645ED3;
}

.link {
  display: block;
  margin-left: 10px; /* ✅ 왼쪽 여백 */
  margin-bottom: 8px;
}
</style>

