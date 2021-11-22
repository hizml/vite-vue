<template>
  <div>
    <router-link to="/">首页</router-link>
    <router-link to="/about">关于</router-link>
  </div>
  <router-view></router-view>

  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite aaaa" />
</template>

<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'

let a = 0, b = 0
async function as() {
  await function () {
    console.log(1)
    a = 1
  }
  await function () {
    console.log(2)
    b = 2
  }
  return 3
}

as().then(() => {
  console.log(a,b)
})

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
