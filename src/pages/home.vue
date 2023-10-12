<template>
    <Suspense>
        <template #default>
            <HelloWorld></HelloWorld>
        </template>
        <template #fallback>
            laoding....
        </template>
    </Suspense>   
</template>
<script setup>
import {defineAsyncComponent} from "vue"
const HelloWorld=defineAsyncComponent({
    loader:()=>import("../components/HelloWorld.vue")
})

</script>