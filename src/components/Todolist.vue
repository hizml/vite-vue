<template>
  <input type="text" v-model="title" @keydown.enter="addTodo">
  <button v-if="active < all" @click="clear">清理</button>
  <ul v-if="todos.length">
    <li v-for="todo in todos">
      <input type="checkbox" v-model="todo.done">
      <span :class="{done: todo.done}">{{ todo.title }}</span>
    </li>
  </ul>
  <div v-else>暂无数据</div>
  <div>
    全选 <input type="checkbox" v-model="allDone" />
    <span>{{ active }} / {{ all }}</span>
  </div>
  <h1 @click="add">{{ count }}</h1>
</template>

<script setup>
import { ref, computed, watchEffect } from "vue";
let count = ref(1)
let color = ref('red')
function add () {
  count.value++
  color.value = Math.random() > 0.5 ? 'blue' : 'red'
}


let { title, todos, addTodo, clear, active, all, allDone } = useTodos()

function useTodos() {
  let title = ref('')
  let todos = ref(JSON.parse(localStorage.getItem('todos') || '[]'))
  watchEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos.value))
  })

  function addTodo() {
    todos.value.push({
      title: title.value,
      done: false
    })
    title.value = ''
  }

  function clear() {
    todos.value = todos.value.filter(v => !v.done)
  }

  let active = computed(() => {
    return todos.value.filter(v => !v.done).length
  })
  let all = computed(() => todos.value.length)

  let allDone = computed({
    get: function () {
      return active.value === 0
    },
    set: function () {
      todos.value.forEach(todo => {
        todo.done = value
      })
    }
  })
  return {title, todos, addTodo, clear, active, all, allDone}
}


</script>

<style scoped>
h1 {
  color: v-bind(color);
}
</style>
