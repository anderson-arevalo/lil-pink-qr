export default defineEventHandler(async (event) => {

    const bearer = event.context.adminBearer;
    const query = getQuery(event);

    // Request User auth
    try {
        const data = await $fetch('https://app.credipink.com/api/gift/gi/vo/auth', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${bearer}`
        },
        body: {
            documento: query.document,
            token: query.token
        }
        });
    
        // Pass de variable context to server folders
        return { data:  data}
    
    } catch (error) {
        // Handle the error here
        return { data: error.data }
    }
  
  });
  