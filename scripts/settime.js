const countDownDisplay = document.getElementById('countdown');
const myBoton = document.getElementById('startButton');
const pauseBtn = document.getElementById('pauseButton');
const timeInput = document.getElementById('timeInput');
let statrtingTime = 10; // tiempo por defecto

let isPaused = false;
let remainingTime = 0;   // Tiempo restante cuando se pausa

myBoton.addEventListener('click', () => {
    //Obtiene el tiempo desde el input
    const tiempoFijado = parseInt(timeInput.value, 10);
    if (tiempoFijado && tiempoFijado > 0) {
        statrtingTime = tiempoFijado;
    }
    // Desactivar el botón de inicio y habilitar el de pausa
    myBoton.disabled = true;
    pauseBtn.disabled = false;

    // Iniciar el contador
    remainingTime = statrtingTime;

    if (!isPaused) {
        interval = setInterval(() => {

            if (!isPaused) {
                //realizo el decremento
                statrtingTime--;
                //actualizo el contador
                countDownDisplay.textContent = statrtingTime;
                // si el contador llega a cero reiniciamos el interval
                if (statrtingTime <= 0) {
                    clearInterval(interval); //detengo el intervalo
                    setTimeout(() => {
                        countDownDisplay.textContent = "time's up"; // muestra mensaje
                        myBoton.disabled = false; // activa el btn
                    }, 1000); // Espera 1 seg para mostrar mensaje y activar btn
                }

            }

        }, 1000); // intervalo de 1 segundo

    }

});

pauseBtn.addEventListener('click', function () {
    if (isPaused) {
        // Reanudar el contador
        isPaused = false;
        pauseBtn.textContent = "Pause";
    } else {
        // Pausar el contador
        isPaused = true;
        pauseBtn.textContent = "Resume";
    }
});