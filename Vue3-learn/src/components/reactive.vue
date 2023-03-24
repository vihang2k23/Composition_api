<script setup>
import { reactive } from "vue";
// Without Reactive

// let num = {
//     a: 10,
//     b:20
// }
// setTimeout(()=>{
//     console.log("Settime out called");
//     console.log("num",num);
//     num.a = 100;
//     console.log("a:", num.a);
// },2000)

    
//With Reactive State
let num = reactive({
    a: 10,
    b:20
})
setTimeout(()=>{
    console.log("Settime out called");
    console.log("num",num);
    num.a = 100;
    console.log("a:", num.a);
},2000)
</script>
<template>
    <div>
        <h1>Sum : {{ num.a + num.b }}</h1>  
        <h2>{{ num.a }}</h2>
    </div>
</template>