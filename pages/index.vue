<script setup>
const document = ref('');
const token = ref('');

async function login() { 

  const { data: response, pending, refresh, execute, error} = await useAsyncData('login', () => {
      try {
        return $fetch(`/api/auth?document=${document.value}&token=${token.value}`);
      } catch (error) {
        console.log('error');
      }
    });

    if(toRaw(response.value.data.status)){    

      localStorage.setItem("user_name", response.value.data.user_name);
      localStorage.setItem("user_last_name", response.value.data.user_last_name);
      localStorage.setItem("user_io", response.value.data.user_io);
      localStorage.setItem("token", response.value.data.token);
      localStorage.setItem("status", response.value.data.status);
      localStorage.setItem("session_io", response.value.data.session_io);
    }
}

</script>

<template>
  Inicio de sesion
  <div class="flex gap-4">
    <input type="text" v-model="document" class="rounded border-dashed text-pink-500" />
    <input type="password" v-model=token class="rounded  border-dashed text-pink-500" />
    <button
        @click="login()"
        class="inline-block border-2 border-slate-900 border-dashed rounded-lg bg-white hover:bg-slate-100 border px-5 py-3 text-center text-sm font-semibold text-slate-900 sm:w-auto"
        href=""
      >
        Ingresar
      </button>
  </div>
</template>