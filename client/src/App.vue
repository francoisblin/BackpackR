<template>
  <div id="app">
    <the-header></the-header>
    <div class="d-flex flex-row">
    <login class="w-75"></login>
    </div>
  </div>
</template>

<script>
import Login from './components/Login'
import TheHeader from './components/TheHeader'

export default {
  name: 'app',
  components: {
    TheHeader,
    Login
  }
}
</script>

<style>
</style>
