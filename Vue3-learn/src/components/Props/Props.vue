<script setup>
import { defineProps } from 'vue';

//1.passing single props
// const props = defineProps(["data"])
// console.log(props,"props");

// 2.passing multiple props
// const props = defineProps(["data","newvalue"])
// console.log(props,"props");


// // 3. props Validation 

// const props = defineProps({
//     data: {
//         type:String,
//         required:true,
//         default : "not good "
//     },
//     newvalue: {
//         type:Object,
//         required:true
//     }
// })

//4. binding number and boolean

// const props = defineProps({
//     age:{
//         type:Number,
//         required:true,
        
//     },
//     isactive:{
//         type:Boolean
//     }
// })



// //5. coustom Validation 

// const props = defineProps({
//     age:{
//         type:Number,
//         required:true,
//         validator: (propsvalue)=> propsvalue > 0
//     },
//     isactive:{
//         type:Boolean
//     },
    
// })

// 6. coustom class 
const props =  defineProps( {
    person:{
        type:Object,
        required:true,
    }
})

</script>
<template>
    <div>
     <!-- 1.passing single props
        <h1>
            Props{{ data }}
        </h1> 

         2.passing multiple props
        <h1>
            Props :{{ data }}

<h1>
    {{ newvalue.data }}
</h1>        </h1> -->
// {{ age }}
{{ person }}
{{ data }}

    </div>
</template>