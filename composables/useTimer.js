
export const useTimer = () => {

    const seconds = ref(0);

    const setTimer = async (timer) => {
      seconds.value = parseInt(timer/1000);
    };

    const timer = async () => {
        seconds.value--;
        if (seconds.value === 0 ) {
          await navigateTo('/');
        }
      }; 
      
      setInterval(timer, 1000);

    return {
        timer,
        seconds,
        setTimer
    }
  }