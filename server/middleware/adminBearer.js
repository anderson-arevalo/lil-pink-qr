export default defineEventHandler(async (event) => {

    const user = useRuntimeConfig().userAdmin;
    const pass = useRuntimeConfig().userPassword;

    const  response  = await $fetch('https://app.credipink.com/api/v1/login', {
    method: 'POST',
    body: {
      email: user,
      password: pass
    }
  }).catch((err) =>{ 
    console.log(err.data)
    event.context.adminBearer = err;
    });

    if(response === undefined ){
      throw new TypeError("Api Not Working");
    }
   
    event.context.adminBearer = response.access_token;
});
