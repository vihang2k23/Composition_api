
// created composable function
import{ref,onMounted,onUnmounted} from "vue"
import { faker } from '@faker-js/faker';
export  function useName(){

    //state encapsulated and managed by the composable
    const firstname = ref()
const lastname = ref()

//a composable can update its managed state over time

firstname.value = faker.name.firstName(),
 lastname.value = faker.name.lastName()  

console.log(lastname.value);
// onMounted(() => {

//     window.addEventListener('mousemove',updatename)
//     console.log(firstname,"called")
// }),
// onUnmounted(() => {
//   window.removeEventListener('mousedown',updatename)  
// })

    return { firstname, lastname }
}