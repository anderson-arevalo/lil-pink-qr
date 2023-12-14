import { DateTime } from "luxon";

export const useTimer = () => {

    const seconds = ref(180);
    const now = DateTime.now().toSeconds();

    const timer = () => {
        seconds.value--;

        console.log("faltan", seconds.value, "segundos")
        console.log("fecha", now )
        if (seconds.value === 0) {
          // Acción a realizar cuando el temporizador finaliza
        }
      };
      
      setInterval(timer, 1000);

    return {
        timer
    }
  }