<template>
  <h1 @click="toggle">这是关于页面</h1>
  <Heading :level="3">hello</Heading>
</template>

<script setup>
import { useFullscreen } from '@vueuse/core'
const { isFullscreen, enter, exit, toggle } = useFullscreen()
import Heading from "../components/Heading";
</script>

<style scoped>

</style>
