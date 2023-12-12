export default defineEventHandler(async (event) => {

  const response = await $fetch('https://app.credipink.com/api/v1/login', {
    method: 'POST',
    body: {
      email: "analista.sistemas@lilipink.com",
      password: "1023911054"
    }
  }).catch((err) =>{ 
    event.context.adminBearer = err;
    });
  event.context.adminBearer = response.access_token;
});
