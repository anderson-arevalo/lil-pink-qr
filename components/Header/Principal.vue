<script setup></script>

<template>
  <nav class="bg-white z-20 top-0 border-b-2 pb-2">
    <div
      class="
        flex flex-col sm:flex-row
        sm:items-center
        justify-between
        mx-auto
        gap-2
      "
    >
      <div
        class="
          flex
          justify-start
          items-center
          gap-2
          text-lg text-slate-600
          font-bold
        "
      >
        <div class="cursor-pointer">
          <NuxtLink :to="{ path: `/` }">
            LOGO DE LA MARCA
          </NuxtLink>
        </div>
      </div>
      <div class="flex flex-col sm:gap-2 gap-1">
        <div class="flex items-center sm:justify-end gap-2">
          <div
            class="
              flex flex-col
              sm:w-full
              justify-end
              w-auto
              space-y-2
              sm:flex-row sm:space-x-4 sm:space-y-0
            "
          >
            <NuxtLink :to="{ path: '/landing' }"
              class="flex justify-center rounded-lg text-sm font-semibold py-2 px-4 bg-slate-900 text-white hover:bg-slate-700 cursor-pointer"
            >
              <span>Registrarme </span>
            </NuxtLink>
          </div>
        </div>
        <div
          class="items-center justify-between w-full md:flex md:w-auto"
          id="navbar-sticky"
        >
          <ul
            class="
              flex
              justify-start
              items-center
              gap-4
              text-lg
              sm:text-2xl
              lg:text-3xl
              text-slate-900
              font-extrabold
            "
          > 
            <li>
              <NuxtLink :to="{ path: '/qrcode' }"> QR CODE </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
