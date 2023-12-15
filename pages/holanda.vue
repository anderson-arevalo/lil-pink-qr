<script setup>

import VueQrcode from 'vue-qrcode'
const url = ref("https://warocol.com/");

</script>

<template>

                <qrcode
              :value="url"
              :options="{
              color: {
                  dark: '#000000',
                  light: '#e0a1c2',
              },
              width: 200,
              }"
          ></qrcode>

</template>

<style scoped>
</style>