<template>
    <div class="mt-15">
        <div class="mt-15">子组件</div>
        <input class="mt-15" type="text" v-model="currentVal" placeholder="请输入内容">
    </div>
</template>

<script setup>
import { onBeforeMount, onBeforeUnmount, onMounted, onUnmounted, onUpdated, ref } from 'vue';

const currentVal = ref('')

onBeforeMount(() => {
    console.log('child before mount');
})
onMounted(()=> {
    console.log('child mounted');
})
onUpdated(() => {
    console.log('child updated');
})
onBeforeUnmount(() => {
  console.log('child before unmount');
})
onUnmounted(() => {
    console.log('child unmounted');
})

</script>

<style scoped>
.mt-15{
    margin-top: 15px;
}
</style>