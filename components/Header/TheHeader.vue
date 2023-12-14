<script setup>


</script>

<template>
  <nav class="top-0 w-full py-2">
    <div class=" flex justify-between mx-auto items-center">
        <div class="cursor-pointer">
          <NuxtLink :to="{ path: `/` }">
            <LoginFormTheImageBussiness class="w-40 sm:w-40" />
          </NuxtLink>
        </div>

        <NuxtLink :to="{ path: '/' }"
          class="flex justify-center rounded-lg  text-sm font-semibold py-2 px-4 bg-zinc-100 text-zinc-900 cursor-pointer"
        >
          <span class="w-24">Cerrar Sesion</span>
        </NuxtLink>
    </div>
  </nav>
</template>

<style scoped></style>
