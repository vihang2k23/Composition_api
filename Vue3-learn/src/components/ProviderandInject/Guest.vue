<script setup>
import { inject, provide, reactive } from "vue";
import InjectionkeyVue from "./Injectionkey.vue";
const data = reactive({
    name:"vihang"   ,
    age:18,
    sex:"man",
    height:1.8,
    weight:70,
})
//inject
// 1. inject key 
// 2. default name when no data pass or get from provider side/
// const name = inject("name","Rahul")

// 3. when you pass default data as function so complusory pass third parameter true 
// const name = inject("name",()=>"rahul",true)
console.log(name,"name");
provide("data",data)
</script>
<template>
    <div>
        <h1>Guest</h1>
        <h1>{{ name }}</h1>
        <InjectionkeyVue/>

    </div>
</template>