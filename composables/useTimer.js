export const useTimer = () => {

    const seconds = ref(10);

    const timer = async () => {
        seconds.value--;
        if (seconds.value === 0) {
          await navigateTo('/');
        }
      };
      
      setInterval(timer, 1000);

    return {
        timer,
        seconds
    }
  }