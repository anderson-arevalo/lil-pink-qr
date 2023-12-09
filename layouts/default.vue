<template>
<div class="pb-4">
  <header class="bg-red-200 flex flex-col gap-4 mx-auto py-4 px-4 md:px-16  2xl:px-[30rem]">
    Header
  </header>

  <NuxtLoadingIndicator />

  <div class="pb-2 px-4 md:px-16 2xl:px-[30rem]">
    <slot />
  </div>

  <footer class="bg-red-200 mx-auto py-4 px-4 md:px-16 2xl:px-[30rem]">
    Footer
  </footer>
</div>
</template>

<script setup>
// defineRobotMeta();
</script>
