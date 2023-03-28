<script setup>
import UserVue from './User.vue';
import{ injectionkey,  injectionkey1 } from '../../utiles/injection';
import { inject, provide } from 'vue';

// Provide 

// provide("name","vihang")

//provider with injection key unique identity
provide(injectionkey,{
    name:"vihang",
    surname:"patel",
    age:20,
})
provide(injectionkey1,{
    name:"vihang",
    surname:"patel",
    age:20,
})

</script>
<template>
    <div>
        <h1>Hello</h1>
        {{ data }}
        <UserVue/>
    </div>
</template>