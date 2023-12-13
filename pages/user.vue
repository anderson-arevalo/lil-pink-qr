<script setup >

import { useUserStore } from '@/stores/user'

// access the `store` variable anywhere in the component ✨
const store = useUserStore()

definePageMeta({
  layout: 'user'
})

</script>

<template>

<section class="relative w-screen h-screen bg-[#14171e] flex justify-center items-center text-white" style="perspective: 1000px;">
      <div class="container relative w-96 h-60 z-50" style="transition: 0.6s; transform-style: preserve-3d;">
        <div class="card absolute w-full h-full front-face flex flex-col justify-between">
          <header class="flex items-center justify-between">
            <span class="flex flex-col items-start gap-1">
              <img src="/logos/logo_lili_ink_yoi_blanco.png" class="w-40" alt="" />
              <h5 class="font-normal text-lg">Gift Card</h5>
            </span>
            <img src="/logos/chip.gif" alt="" class="w-12" />
          </header>

          <div class="card-details flex justify-between items-end">
            <div class=" flex flex-col gap-4">
              <div class=" flex flex-col">
                <h6 class="text-xs">Card Number</h6>
                <h5 class="">4063 2020 3070 5000</h5>
              </div>

                <h5 class="">Piyush Patel</h5>

            </div>

            <div class="valid-date">
              <h6 class="text-xs">Valid Thru</h6>
              <h5>08/27</h5>
            </div>
          </div>
        </div>

        <div class="card back-face w-96 h-60 flex flex-col justify-between">

         
        </div>
      </div>
    </section>
</template>

<style scoped>
  
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

.container:hover {
  transform: rotateY(180deg);
}
.card {
  padding: 25px;
  border-radius: 25px;
  backdrop-filter: blur(25px);
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backface-visibility: hidden;
}

.back-face {
  border: none;
  padding: 15px 25px 25px 25px;
  transform: rotateY(180deg);
}

.magnetic-strip {
  left: 0;
  height: 45px;
  width: 100%;
  background: #000;
}

.signature {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 80px;
  height: 40px;
  width: 85%;
  border-radius: 6px;
  background: repeating-linear-gradient(
    #fff,
    #fff 3px,
    #efefef 0px,
    #efefef 9px
  );
}
.signature i {
  color: #000;
  font-size: 12px;
  padding: 4px 6px;
  border-radius: 4px;
  background-color: #fff;
  margin-right: -30px;
  z-index: -1;
}


@media only screen and (min-device-width : 320px) and (max-device-width : 600px) {

}

</style>