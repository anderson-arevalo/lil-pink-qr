// Setup Store
 import {defineStore} from 'pinia';

 export const useCounterStore = defineStore("counter", () => {
   const count = ref(10); // State


   function increment (){
      count.value++
   }

   function decrement (){
    count.value--
 }
   return { count, decrement, increment }
 })