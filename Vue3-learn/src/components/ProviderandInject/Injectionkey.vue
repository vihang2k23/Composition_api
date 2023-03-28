<script setup>
import { inject } from 'vue';
import { injectionkey,injectionkey1 } from '../../utiles/injection';

//injection key
//inject
const injection = inject(injectionkey)
const injection1 = inject(injectionkey1)
console.log(injection,injection1);
</script>
<template>
    <div>
        <h1>User</h1>
        <Guest/>
    </div>
</template>  