// Setup Store
 import {defineStore} from 'pinia';

 export const useUserStore = defineStore("user", () => {
  
   const userData = reactive({

    user_name: 'Anderson Arèvalo',
    user_last_name: 'Arèvalo Ramìrez',
    balance: '30000',
    token: '6123466',
    
  })
   return { userData }
 })