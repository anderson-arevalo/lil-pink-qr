<script setup >

definePageMeta({
  layout: 'user'
})

</script>

<template>
  <div class="flex flex-col justify-start items-center text-center gap-6 sm:gap-4 sm:pb-28 w-screen md:w-1/2 lg:w-1/3 h-screen ">
    <UserQrTheImageBanner/>
      <div class="flex flex-col items-center gap-2">
        <p class=" text-black font-bold text-3xl sm:text-3xl md:text-4xl lg:text-5xl" >Carmen Eliana</p>
        <p class=" text-gray-500 font-normal  text-xl md:text-2xl lg:text-3xl">Saldo: $20,000 COP</p>
        <LoginFormTheImageBussiness />
      </div>
      <UserQrTheImageQr />
  </div>
</template>