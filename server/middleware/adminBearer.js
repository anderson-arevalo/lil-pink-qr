export default defineEventHandler(async (event) => {
  
  // Pass de variable context to server folders
  event.context.adminBearer = '1234'
});
