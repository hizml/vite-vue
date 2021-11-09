<template>
  <h1>这是首页</h1>
  <h2>{{ x }}, {{ y }}</h2>
  <TodoList />
  <h1>你的评分是 {{score}}</h1>
  <Rate v-model="score" theme="red" />
  <Count></Count>
</template>

<script setup>
import TodoList from '../components/Todolist.vue'
import Rate from '../components/Rate.vue'
import {useMouse} from "../utils/mouse";

import {ref} from "vue";
import Count from '../components/Count.vue'

let score = ref(3.5)

function update(num) {
  score.value = num
}

let {x,y} = useMouse()
</script>

<style scoped>

</style>
