<template>
  <div class="home bg-gray-100 flex flex-col content-center justify-center">
    <h1>The incredible Pack-O-Matic</h1>
    <SacOMatic />
  </div>
</template>

<script>
import SacOMatic from '../components/SacOMatic.vue'

export default {
  name: 'Home',
  components: {
    SacOMatic
  }
}
</script>
