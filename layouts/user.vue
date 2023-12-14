<template>
<div class=" gap-4 flex flex-col justify-center">

    <header class="bg-white z-10" >
      <div class="flex flex-col justify-between gap-4 mx-auto py-2 px-4 lg:px-[750px]">
        <HeaderTheHeader/>
      </div>
    </header>

  <NuxtLoadingIndicator />

  <div class="flex justify-center w-auto">
    <slot />
  </div>

</div>
</template>

<script setup>
// defineRobotMeta();
</script>
