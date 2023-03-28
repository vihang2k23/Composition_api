<script setup>
import { inject } from 'vue';
import Guest from './Guest.vue';
//get app level inject
//inject
const applevel = inject("name")
console.log(applevel,"applevel");

</script>
<template>
    <div>
        <h1>User</h1>
        <Guest/>
    </div>
</template>