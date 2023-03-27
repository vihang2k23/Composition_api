<script setup>
import { onBeforeMount, onBeforeUpdate, onUpdated, reactive, ref, watch, watchEffect } from "vue";
//Watchers - watch ()


// 1
//  with single ref
// const heartRate = ref(85);
// console.log(heartRate);
// watch(heartRate,(newheartRate,oldheartRate)=>{
//     console.log(newheartRate,"newheartRate");
//     console.log(oldheartRate,"oldheartRate");
//     if(newheartRate > oldheartRate &&  heartRate.value >= 125){
//         console.log("deep breathe ");
//     }
// })



//2
// Reactive object
// when directly watching a reactive object, the watcher is automatically in deep mode
//newvalue and old value will be same
// const state = reactive ({heartRate :85 })
// let {heartRate} = state

// watch(state,(newheartRate,oldheartRate)=>{
//     console.log(newheartRate.heartRate,"newheartRate");
//     console.log(oldheartRate,"oldheartRate");
//     if(newheartRate > oldheartRate &&  heartRate.value >= 125){
//         console.log("deep breathe ");
//     }})




//3
    //using gettter function 
    // const state = reactive ({heartRate :85 })
// let {heartRate} = state

// watch(()=>state.heartRate,(newheartRate,oldheartRate)=>{
//     console.log(newheartRate,"newheartRate");
//     console.log(oldheartRate,"oldheartRate");
//     if(newheartRate > oldheartRate &&  newheartRate >= 125){
//         console.log("deep breathe ");
//     }})

// const hrate = ref(85)
// const fear = ref(100)
// watch([hrate,fear],(newheartRate,oldheartRate)=>{
//     console.log(newheartRate,"newheartRate");
//     console.log(oldheartRate,"oldheartRate");
//     // if(newheartRate > oldheartRate &&  newheartRate >= 125){
//     //     console.log("deep breathe ");
//     // }
// })
// function increment(){
//     hrate.value += 5,
//     fear.value +=5
// }
// function decrement(){
//     hrate.value -= 5,
//     fear.value -=5
// }


//4
//immidiate

// const count = ref(0)
// let api ;
// watch(count , async (cv,ov)=>{
//   if(count.value >= 1)
//     {
//       try{
        
//         const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${count.value} ` )
//         const data =await res.json();
//         console.log(data)
//         api = ref(data)
//         console.log(api,"api")
//     }catch(e){  
//         console.log(e)
//     }
//     }else{
//       api = ref({data:[]})
//       console.log(api.value.data,"api")
//     }
// },{
//   immediate:true
// })




// 5
//DEEP

// When using a getter source watching a recative object, it is required tp manully enable deep mode 
// const state =  reactive({
//   heartrate : 85,
//   fear : 100,
//   patient:{bedcharge:500}
// })
// watch(()=>state,
// (nv,ov)=>{
//   console.log(nv,"newvalue")
//   console.log(ov,"oldvalue")
// },{
//   deep:true
// })


// When directly watching a recative object, the watcher is automattically deep mode 
// const state =  reactive({
//   heartrate : 85,
//   fear : 100,
//   patient:{bedcharge:500}
// })
// watch(state,
// (nv,ov)=>{
//   console.log(nv,"newvalue")
//   console.log(ov,"oldvalue")
// })

//6
//Flush
// onBeforeUpdate(()=>{
//   console.log("called");
// })
// onUpdated(()=>{
//   {
//   console.log("updated")
// }
// })
// const state  = ref(85)
// watch(state,(n,v)=>{
//   console.log("callledddddd");
// },{
//   flush:'post'
// })

//7 Watcher : watchEffect
// let count = ref(0)

// watchEffect(()=>{
//   console.log(count.value);
// },{
//   flush:'post'
// })
// onBeforeUpdate(()=>{
//   console.log("before");
// })
// onUpdated(()=>{
//   console.log("updated");
// })

//8
// stop watcher
// store in another variable 
let count = ref(0)
let stopwatcher =  watchEffect(()=>{
  console.log(count.value);
},{
  flush:'post'
})

function stop(){
  stopwatcher();
}
</script>
<template>
  <div>
 


<h1>{{ count }}</h1>
<button @click="count +=1">change room </button>
<button @click="stop">stop watch</button>

  </div>
</template>
