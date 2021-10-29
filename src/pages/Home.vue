<template>
  <h1>这是首页</h1>
  <h2>{{ x }}, {{ y }}</h2>
  <TodoList />
</template>

<script setup>
import TodoList from '../components/Todolist.vue'
import {useMouse} from "../utils/mouse";
let {x,y} = useMouse()
</script>

<style scoped>

</style>
