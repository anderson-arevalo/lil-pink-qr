<script setup >

import { ExclamationCircleIcon } from '@heroicons/vue/24/outline'
import { useUserStore } from '@/stores/user'

// access the `store` variable anywhere in the component ✨
const store = useUserStore()

definePageMeta({
  layout: 'user'
})

</script>

<template>

    <section class=" w-auto h-fit flex flex-col justify-between items-center pt-6 text-white relative">
          
          <div class="w-full h-full flex flex-col gap-12">
            <UserQrTheGiftCard/>
                <div class="bg-white z-10 w-auto h-80 flex flex-col justify-between gap-4 rounded-t-xl p-4">
                  <div class="flex flex-col gap-2">
                    <p class="font-light text-zinc-900"> Cuentas</p>
                    <div class="bg-zinc-100 w-full h-fit flex p-4 gap-2 justify-center rounded-xl">
                      <ExclamationCircleIcon class="h-6 w-6 md:h-6 md:w-6 text-[#E53A88]"/>
                        <div class="flex flex-col justify-start w-full h-auto ">
                            <p class="text-zinc-900 font-font-medium text-sm" >Cuenta Gift Card Lili Pink & Yoi</p>
                            <p class="text-zinc-400 font-font-medium text-sm" >Movil</p>
                            <p class="text-zinc-400 font-font-medium text-sm" >Saldo disponible</p>
                            <p class="text-zinc-900 font-extrabold text-2xl" >$ 200.000,00</p>
                        </div>
                    </div>
                  </div>
                </div>
                
          </div>
  
          <div class="bg-[#E53A88] w-full h-fit flex p-4 gap-2 justify-center rounded-xl">
            <ExclamationCircleIcon class="h-6 w-6 md:h-6 md:w-6 text-slate-50"/>
              <div class="flex flex-col justify-start w-full h-auto ">
                  <p class="text-slate-50 font-light" >Tu ventana se cerrará en:</p>
                  <p class="text-slate-50 font-bold" >SEGUNDOS</p>
              </div>
          </div>
          
  </section>

</template>
