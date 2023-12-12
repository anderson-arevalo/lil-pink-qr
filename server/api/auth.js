export default defineEventHandler(async (event) => {

    const bearer = event.context.adminBearer;
    const query = getQuery(event);

    const response = await $fetch('https://app.credipink.com/api/gift/gi/vo/auth', {
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

    return {data: response }
  
  });


            