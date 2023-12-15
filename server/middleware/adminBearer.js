export default defineEventHandler(async (event) => {

    const  response  = await $fetch('https://app.credipink.com/api/v1/login', {
    method: 'POST',
    body: {
      email: "analista.sistemas@lilipink.com",
      password: "1023911054"
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
