import { useCounterStore } from '../stores/counter'
const store = useCounterStore();

export default defineNuxtRouteMiddleware(() => {
  console.log('Login middelware');
  console.log(store.count);
})
