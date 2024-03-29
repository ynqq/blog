<template>
    <div>
        <button @click="showChild = !showChild">toggle</button>
        <ChildCom
            v-if="showChild"
            @vue:beforeMount="onChildBeforeMount" 
            @vue:mounted="onChildMounted" 
            @vue:updated="onChildUpdated"
            @vue:beforeUnmount="onChildBeforeUnmount"
            @vue:unmounted="onChildUnMounted"
        />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import ChildCom from './child.vue'

const showChild = ref(false)

const onChildBeforeMount = () => {
    console.log('watch child before mount');
}
const onChildMounted = () => {
    console.log('watch child mounted');
}
const onChildUpdated = () => {
    console.log('watch child updated');
}
const onChildBeforeUnmount = () => {
    console.log('watch child before unmount');
}
const onChildUnMounted = () => {
    console.log('watch child unmounted');
}

</script>

<style scoped></style>