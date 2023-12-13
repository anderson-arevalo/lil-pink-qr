<script setup>
const document = ref('');
const token = ref('');

async function login() { 
  
  const { pending, data, error, loading } = useFetch(`/api/auth?document=${document.value}&token=${token.value}`, {
    lazy: true
  })

    if(toRaw(data.value.data.status)){    
      localStorage.setItem("user_name", data.value.data.user_name);
      localStorage.setItem("user_last_name", data.value.data.user_last_name);
      localStorage.setItem("user_io", data.value.data.user_io);
      localStorage.setItem("token", data.value.data.token);
      localStorage.setItem("status", data.value.data.status);
      localStorage.setItem("session_io", data.value.data.session_io);
      await navigateTo('/user');
    }

}
</script>

<template>
  <div class="flex flex-col-reverse md:flex-row px-4 mx-auto w-screen h-screen max-w-7xl sm:px-6 gap-12 justify-center items-center font-montserrat">

    <div class="flex flex-col sm:w-1/2 lg:w-2/3 rounded-lg sm:h-96 items-center text-center sm:text-left sm:items-start justify-center">
      <div class="flex flex-col gap-1 sm:gap-2">
        <blockquote class="text-xl lg:text-xl font-normal italic py-2 ">
              <span class="relative principal-colors-fonts">Ama, vive, rie de corazon</span>
          </blockquote>
        <h1 class="max-w-[50rem] principal-colors-fonts font-bold tracking-tight text-4xl md:text-5xl lg:text-7xl">Redime tu bono de navidad.</h1>
        <p class="max-w-l text-base lg:text-xl principal-colors-fonts">¡Aprovecha tu regalo y disfruta de tus compras!</p>  
      </div>
    </div>

    <div class="flex flex-col w-80 gap-6 py-8 px-6 bg-slate-50 rounded-lg">
      <div class="flex flex-col gap-4">
        <LoginFormTheImageBussiness />
        <div class="flex flex-col gap-0">
          <p class="text-base lg:text-xl text-zinc-900 font-bold" >Bienvenido!</p>
          <p class="text-sm text-zinc-900 font-normal">Para iniciar sesión, solo necesitas tu cedula y contraseña.</p>
        </div>
      </div> 
    <div class="flex flex-col gap-4 ">
        <input type="text" v-model="document" class="border rounded-lg text-pink-500" />
        <input type="password" v-model=token class="border rounded-lg text-pink-500" />
        <button
            @click="login()"
            class="inline-block rounded-lg bg-zinc-900 px-5 py-2 text-center text-sm font-semibold text-slate-50 sm:w-auto"
            href=""
          >
            Ingresar
          </button>
    </div>
  </div>
  </div>
</template>


<style scoped>

</style>