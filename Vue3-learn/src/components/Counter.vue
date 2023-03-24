<script setup>
import { ref } from 'vue';
const data = ref(0)
console.log(data.value == 0 ? 0 : data.value-=1 );
</script>
<template>
  <div class="container">
    <h1>
   {{ data }}
   
    </h1>
    <button @click="data+=1">+</button>
    <button @click="data==0 ? 0 : data-=1 ">-</button>
  </div>
</template>