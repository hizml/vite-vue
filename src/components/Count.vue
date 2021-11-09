<template>
  <div @click="add">
    {{ count }}
  </div>
</template>

<script setup>
import { useStore } from "vuex"
import { computed } from "vue"

let store = useStore()
let count = computed(() => store.state.count)

let double = computed(() => store.getters.double)

function add() {
  store.commit('add')
}


function asyncAdd(){
  store.dispatch('asyncAdd')
}

</script>

<style scoped>

</style>
