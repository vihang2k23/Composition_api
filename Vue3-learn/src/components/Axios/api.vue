<script setup>
import {onMounted, ref} from "vue"
import {deleteSingleUserData, getAllUserData, getSingleUserData,postUserData} from "../../index.js"
console.log(getAllUserData);
// import { onMounted, reactive } from "vue"
// import axios from "axios";
 

// const data = async()=>{
//  const  response  = await axios.get("https://reqres.in/api/users")
//   console.log(response)
// }

// onMounted(()=>{
//     data()
// })
// let url = ref("https://reqres.in/api/users")

//  const {Data,error} = getAllUserData(url)
//  console.log(Data.value,"apidata-----------")

//Post data

// onMounted(()=>{
//   const res =  postUserData("https://jsonplaceholder.typicode.com/posts",{
// "userId": 101,
// "id": 101,
// "title": "optio molestias id quia eum",
// "body": "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
// })
// console.log(res);
// })


//Delete Data 

onMounted(()=>{
  const res =  deleteSingleUserData("https://jsonplaceholder.typicode.com/users/",5)
console.log(res);
})

</script>
<template>
    <div class="container">
     
    </div>
</template>