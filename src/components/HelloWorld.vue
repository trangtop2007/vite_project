<template>
  {{ data }}
</template>
<script setup>
import axios from 'axios';
import {ref,onMounted} from "vue"
const data=ref({})
const response=await new Promise((resolve)=>{
  setTimeout(()=>{
    resolve(axios.get("https://jsonplaceholder.typicode.com/posts"))
  },3000)
}) 
data.value=response.data
</script>