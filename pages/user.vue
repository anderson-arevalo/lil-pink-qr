<script setup >

import { useUserStore } from '@/stores/user'

// access the `store` variable anywhere in the component ✨
const store = useUserStore()

definePageMeta({
  layout: 'user'
})

</script>

<template>

<section class=" w-auto h-screen flex flex-col justify-start items-center gap-4 text-white " style="perspective: 1000px;">
      <div class="w-auto flex flex-col gap-6">
        <div class="bg-white border-gray-300 border-2 w-auto h-20 flex rounded-lg">
          CONTADOR
        </div>
        <UserQrTheGiftCard/>
      </div>
    </section>
</template>
