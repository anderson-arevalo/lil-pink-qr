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
  <div class="flex  flex-col md:flex-row px-4 mx-auto w-screen h-screen max-w-7xl sm:px-6 gap-12 justify-center items-center font-montserrat">

    <div class="flex flex-col sm:w-1/2 lg:w-2/3 rounded-lg sm:h-96 items-start justify-center">
      <div class="flex flex-col gap-2">
        <blockquote class="text-2xl sm:text-3xl font-normal italic text-black py-2 ">
              <span class="relative text-black">Ama, vive, rie de corazon</span>
          </blockquote>
        <h1 class="max-w-[50rem] text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">Redime tu bono de navidad.</h1>
        <p class="max-w-lg text-xl text-gray-700">¡Aprovecha tu regalo y disfruta de tus compras!</p>  
      </div>
    </div>

    <div class="flex flex-col sm:w-1/2 lg:w-1/3 backdrop-blur-md bg-white/10 border gap-6  py-12 px-8  rounded-lg">
      <div class="flex flex-col gap-4">
        <LoginFormTheImageBussiness />
        <div class="flex flex-col gap-2">
          <p class="text-2xl text-black font-bold" >Bienvenido!</p>
          <p class="text-sm text-gray-800 font-normal">Para iniciar sesión, solo necesitas tu cedula y contraseña.</p>
        </div>
      </div> 
    <div class="flex flex-col gap-4">
        <input type="text" v-model="document" class="border rounded-lg text-pink-500" />
        <input type="password" v-model=token class="border rounded-lg text-pink-500" />
        <button
            @click="login()"
            class="inline-block rounded-lg bg-black px-5 py-2 text-center text-sm font-semibold text-white sm:w-auto"
            href=""
          >
            Ingresar
          </button>
    </div>
  </div>
  </div>
</template>