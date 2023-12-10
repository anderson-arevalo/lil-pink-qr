export default defineEventHandler(async (event) => {

  // Request Bearer from server
  try {
    const data = await $fetch('https://app.credipink.com/api/v1/login', {
      method: 'POST',
      body: {
        email: "analista.sistemas@lilipink.com",
        password: "1023911054"
      }
    });
  
    // Pass de variable context to server folders
    event.context.adminBearer = data.access_token
  
  } catch (error) {
    // Handle the error here
      event.context.adminBearer = error
  }

});
