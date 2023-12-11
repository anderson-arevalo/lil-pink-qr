export default defineEventHandler(async (event) => {

    let bearer = event.context.adminBearer;
    const query = getQuery(event);
    // Request User auth
    await $fetch('https://app.credipink.com/api/gift/gi/vo/auth', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${bearer}`
        },
        body: {
            documento: query.document,
            token: query.token
        }
        }).then(response => {
            if (response) {
            return { data:  response}
            }
          }).catch((err) =>{ 
                console.log(err)
            })
  
  
  });


            