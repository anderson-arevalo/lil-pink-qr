<template>
<div class="pb-4 m-auto gap-4 flex flex-col justify-center relative">
    <header class="flex flex-col justify-between gap-4 mx-auto py-4 px-4 2xl:px-[30rem]" >
      <HeaderTheHeader />
    </header>

  <NuxtLoadingIndicator />

  <div class="relative">
    <slot />
  </div>

</div>
</template>

<script setup>
// defineRobotMeta();
</script>
