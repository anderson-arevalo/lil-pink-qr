export default defineEventHandler(async (event) => {

    const bearer = event.context.adminBearer;
    const query = getQuery(event);

    const users = await $fetch('/api/users', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${bearer}`
        },
        body: {
            documento: query.document,
            token: query.token
        }
        }).catch((error) => {
            return error.data
        })

    return users.data
  
  
  });


            