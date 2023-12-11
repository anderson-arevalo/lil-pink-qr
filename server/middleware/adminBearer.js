export default defineEventHandler(async (event) => {

    await $fetch('https://app.credipink.com/api/v1/login', {
    method: 'POST',
    body: {
      email: "analista.sistemas@lilipink.com",
      password: "1023911054"
    }
  }).then(response => {
    if (response) {
      event.context.adminBearer = response.access_token;
    }
  }).catch((err) =>{ 
    event.context.adminBearer = err;
    });
});
