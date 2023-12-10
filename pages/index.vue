<script setup>

const { data, pending, error, refresh } = await useFetch(`/api/auth?document=1020792346&token=C355fd`)

</script>

<template>
<div>{{data}}</div>
  Inicio de sesion
</template>