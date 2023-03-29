//create plugin 
import User from "../plugin/User.vue"
export default {
    install:(app,options)=>{
        console.log(options);
        //Add Global Component
        app.component('User',User)

        //Add Directivites
        app.directive('font-size',(el,binding)=>{
            el.style.fontSize = "3.875em"
        })
        //provide and inject 

  app.provide("data","Vihang Patel ")


   // Add global instance properties or methods 
  // Inject a globally available $translate() method
  app.config.globalProperties.$translate = (key) =>{
    console.log(options,"options");
 console.log(key)
 return key.split(".").reduce((o,i)=>{
    console.log(o[i] ,o[i])
       if(o){
        return o[i]
       }
 },options)
  }
 
    }
 
}