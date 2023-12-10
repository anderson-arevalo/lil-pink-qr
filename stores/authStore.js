// Setup Store
 import {defineStore} from 'pinia';

 export const useAuthStore = defineStore("auth", () => {
   const bearer = ref('bearer'); // State

   return { bearer }
 })