<script setup>

  import { useCounterStore } from '../stores/counter'
  const store = useCounterStore();

</script>

<template>
  Inicio de sesion
    <div>Count: {{store.count}}</div>
    <div class="flex gap-3">
        <button @click="store.increment" class="bg-blue-200 p-2 rounded-lg">
          Incrementar
        </button>
        <button @click="store.decrement" class="bg-red-200 p-2 rounded-lg">
        decrement
      </button>
    </div>
</template>