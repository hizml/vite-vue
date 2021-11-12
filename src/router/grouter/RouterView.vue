<template>
  <component :is="comp"></component>
</template>

<script setup>
import {computed} from "vue";
import {useRouter} from '../grouter/index'

let router = useRouter()

const comp = computed(() => {
  console.log(router)
  const route = router.routes.find((route) => route.path === router.current.value)
  return route ? router.component : null
})
</script>

<style scoped>

</style>
