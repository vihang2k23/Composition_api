// // import { createApp }from 'vue'
// // import{ VueAxios} from 'vue-axios'

// // // axios
// // import { axios } from 'axios'
// import * as Vue from 'vue' // in Vue 3
// import axios from 'axios'
// import VueAxios from 'vue-axios'
//  const API_URL ="https://reqres.in/";   
// // const token = localStorage.getItem("access-token");

// export const axiosIns = axios.create({
//   baseURL: API_URL,
//   headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json',
//     // 'Authorization': token ? ('Bearer ' + token) : null,
//   }
// })
// const app = Vue.createApp(...)
// app.use(VueAxios, axios)
// // Vue.prototype.$http = axiosIns

// // Vue.use(VueAxios, axiosIns)

// fetch.js
import axios from 'axios'
import { ref, isRef, unref, watchEffect } from 'vue'

//Get Single User Data
function getSingleUserData(url, uid) {
    const Data = ref(null)
    const error = ref(null)

    const getSingleData = async () => {
        //reset state  before fetching
        Data.value = null
        error.value = null
        try {
            //unref() returns the inner value if the argument is a ref, otherwise return the argument itself .
            const res = await axios(unref(url) + unref(uid))
            console.log(res.data.data)
            Data.value = res.data.data
        } catch (error) {
            error.value = error

        }
    }
    //isRef () checks if a value is a ref object 
    if (url) {
        watchEffect(getSingleData)
    }
    else {
        getSingleData()
    }
    return { Data, error }

}


// get All user Data
function getAllUserData(url) {
    const Data = ref(null)
    const error = ref(null)

    const getUserData = async () => {
        //reset state  before fetching
        Data.value = null
        error.value = null
        try {

            const res = await axios(unref(url))
            console.log(res.data.data, "alluser")
            Data.value = res.data.data
            console.log(Data.value, "Data");
        } catch (error) {
            error.value = error

        }
    }
    //isRef () checks if a value is a ref object 
    if (isRef(url)) {
        watchEffect(getUserData)
    }
    else {
        getUserData()
    }
    return { Data, error }

}



// Post user Data
function postUserData(url, data) {
    const Data = ref(null)
    const error = ref(null)

    const postData = async () => {
        //reset state  before fetching
        Data.value = null
        error.value = null
        try {

            const config = {
                method: 'POST',
                url: unref(url),
                headers: {
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify(data)
            }

            const response = await axios(config)
            console.log(response);
            Data.value = response.data
        }
        catch (error) {
            error.value = error

        }
    }
        //isRef () checks if a value is a ref object 
        if (isRef(url)) {
            watchEffect(postData)
        }
        else {
            postData()
        }
        return { Data, error }

  

}
//delete Single User Data
function deleteSingleUserData(url, uid) {
    const Data = ref(null)
    const error = ref(null)

    const deleteSingleData = async () => {
        error.value = null
        try {

            const config = {
                method: 'DELETE',
                url: unref(url)  + unref(uid)  
               
              
            }
            //unref() returns the inner value if the argument is a ref, otherwise return the argument itself .
            const res = await axios(config  )
            console.log(res.data.data)
           
        } catch (error) {
            error.value = error

        }
    }
    //isRef () checks if a value is a ref object 
    if (url) {
        watchEffect(deleteSingleData)
    }
    else {
        deleteSingleData()
    }
    return { error }

}
    export { getSingleUserData, getAllUserData,postUserData,deleteSingleUserData}