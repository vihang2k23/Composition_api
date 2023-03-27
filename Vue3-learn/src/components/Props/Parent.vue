<script setup>
import { reactive,ref } from 'vue';
import { Person } from './person';
import PropsVue from './Props.vue';
const newvalue = reactive({
    data:"vihang",
    name:"yojit",
    surname:"patel"
})
const data = ref(10)
//custom class

const person = new Person("Vihang","Patel")

</script>
<template>
    <div>
        
            Parents
            // <PropsVue  data="hellloo"  :newvalue="newvalue" />  
            // <PropsVue :age="27" isactive="true"/>
          <!-- Custom class-->
            <PropsVue :person = "person" :data="data"/>
    </div>
</template>