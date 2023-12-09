export default defineEventHandler(async (event) => {
  
    // Recover de context variable from server
    const Bearer = event.context.adminBearer

    return {
      Bearer: Bearer,
    }

});
