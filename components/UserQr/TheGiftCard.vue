<script setup>

import VueQrcode from "@chenfengyuan/vue-qrcode"

const props = defineProps({ 
    idCegid: {type: String},
    });
  
const { idCegid } = toRefs(props);

</script>

<template>
  <section>
    <div class="absolute blur-3xl w-96 right-0 h-96 opacity-90 bg-[#E53A88] rounded-full"></div>
        <div class="container relative w-80 h-56 sm:w-96 sm:h-60" style="transition: 0.6s; transform-style: preserve-3d;">
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

          <div class="card-back back-face w-80 h-56 sm:w-96 sm:h-60 flex justify-start items-center gap-4  bg-zinc-100">
          <div class="flex justify-center ">
              <vue-qrcode
              :value="idCegid"
              :options="{
                color: {
                  dark: '#18181B',
                  light: '#F4F4F5',
                },
              }"
            ></vue-qrcode>
          </div>
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

.card-back {
  padding: 25px;
  border-radius: 25px;
  backdrop-filter: blur(25px);
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


</style>