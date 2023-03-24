<script setup>
import { ref } from "vue";
// Without Reactive

//
// let a: 10,
//   let b:20
//
// setTimeout(()=>{
//     console.log("Settime out called");
//    
//     a = 100;
//     console.log("a:", a);
// },2000)

//With Reactive State
let a = ref(10)
  let b = ref(20)
setTimeout(() => {
  console.log("Settime out called");
 
  a.value = 100;
  console.log("a:", a.value);
}, 2000);
</script>
<template>
  <div>
    <h1>Sum : {{ a + b }}</h1>
    <h2>{{ a }}</h2>
  </div>
</template>
