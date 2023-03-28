<script setup>
// import{ref,onMounted,onUnmounted} from "vue"
// import { faker } from '@faker-js/faker';
// const firstname = ref()
// const lastname = ref()
// function updatename(){
//     firstname.value = faker.name.firstName(),
//     lastname.value = faker.name.lastName()  
// }
// onMounted(()=>window.addEventListener("mousedown",updatename))
// onUnmounted(()=>window.removeEventListener("mousemove",updatename))
// import useName from "./name.js"
import {useName} from "./name.js"
const {firstName,lastName} = useName()
console.log(useName,firstName);

</script>
<template>
    <div>
        <h1>composable function </h1>
    <div>Firstname :{{ firstName }}</div>
<div>Last Name : {{ lastName }}</div>
    </div>
    </template>