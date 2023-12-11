<script setup >

import { useUserStore } from '@/stores/user'

// access the `store` variable anywhere in the component ✨
const store = useUserStore()

definePageMeta({
  layout: 'user'
})

</script>

<template>
  <div class="flex flex-col justify-start items-center text-center gap-4 sm:gap-4 sm:pb-28 w-screen sm:w-2/3 lg:w-1/2 lg:w-2/3 h-screen ">
    <UserQrTheImageBanner/>
      <div class="flex flex-col items-center gap-1 sm:gap-2">
        <p class=" text-black font-bold text-3xl sm:text-3xl md:text-4xl lg:text-5xl" >{{store.userData.user_name}}</p>
        <p class=" text-gray-500 font-normal  text-xl md:text-2xl lg:text-3xl">Saldo: ${{store.userData.balance}} COP</p>
        <LoginFormTheImageBussiness />
      </div>
      <UserQrTheImageQr />
  </div>
</template>