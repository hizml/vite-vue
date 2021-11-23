<template>

</template>

<script setup lang="ts">
import {computed, reactive, ref} from "vue";
interface geek {
  name: string,
  price: number
}

const msg = ref('') // 根据输入参数推导字符串类型
const msg1 = ref<string>('') // 可以通过范型显示约束

const obj = reactive({})
const course = reactive<geek>({name: 'wanzhuan', price: 100})

const msg2 = computed(() => '') // 默认参数推导
const course2 = computed<geek>(() => {
  return {
    name: 'asdasdas',
    price: 1999
  }
})

// props 属性的类型声明
const props = defineProps<{
  title: string,
  value?: number
}>()
const emit = defineEmits<{
  (e: 'update', value: number): void
}>()

import {ref, Ref} from "vue";
interface Todo{
  title: string,
  done: boolean
}
let todos:Ref<Todo[]> = ref([{title:'学习Vue',done:false}])

</script>

<style scoped>

</style>
