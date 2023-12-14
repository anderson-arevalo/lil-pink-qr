<script setup></script>

<template>
  <nav class="top-0 w-full">
    <div
      class="
        flex
        justify-between
        mx-auto
        gap-20
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
            <LoginFormTheImageBussiness class="w-28 lg:w-30" />
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
            <NuxtLink :to="{ path: '/' }"
              class="flex justify-center rounded-lg text-sm font-semibold py-2 px-4 bg-slate-50 text-zinc-900 cursor-pointer"
            >
              <span>Cerrar Sesion</span>
            </NuxtLink>
          </div>
        </div>
        <div
          class="items-center justify-between w-full md:flex md:w-auto"
          id="navbar-sticky"
        >
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
