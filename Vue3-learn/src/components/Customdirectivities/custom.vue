<script setup>
 // CUSTOM DIRECTIVIES WITH BINDING VALUE
//  const vFontSize = {
//     mounted: (el,binding)=> {
//         console.log("el",el);
//         console.log("binding",binding.value);
//         el.style.fontSize = binding.value + "px"
        
//     },
//  }

//CUSTOM directivities with static value
const vFontSize = {
    mounted: (el,binding)=> {
        console.log("el",el);
        console.log("binding",binding.value);
        el.style.fontSize = 30 + "px";
  
        
    }}

    const vFontColor= {
        mounted : (el,binding)=>{
            el.style.color  = "red"
        }
    }
 
</script>

<template>

        <div>
        <h1 v-font-size="30" v-font-color >
        Custom directives    
        </h1>
        </div>

</template>