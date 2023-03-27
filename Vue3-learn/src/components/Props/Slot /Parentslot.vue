<script setup>
import { reactive } from "vue";
import slotvue from "./slot.vue"
const data = reactive([{
    name:"vihang",
    surname:"patel",
    age:20,
    sex:"male",
    height:1.7,
}])
</script>

<template>
    <div>
<!--Single slot -->
<!-- <slotvue>
    <ul v-for="data in data" :key="data">
        <li>
            <h3>{{data.name}}</h3>
        
        </li>
        <li>
            <h3>{{ data.surname }}</h3></li>
            <li><h3>{{ data.age }}</h3></li>
            <li><h3>{{ data.sex }}</h3></li>
            <li><h3>{{ data.height }}</h3></li>
            </ul>
</slotvue>
-->

<!-- fallback content-->
<!--
<slotvue>

    </slotvue>
-->

// Multiple Slot || Named Slot 
    </div>
</template>