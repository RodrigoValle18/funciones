// Definimos una interfaz para el estado de nuestra aplicación
interface AppState {
    currentNumber: number;
  }
  
  // Función para renderizar el estado actual en el navegador
  function render(state: AppState) {
    const numberDisplay = document.querySelector(".numero-turno");
    const textDisplay = document.querySelector(".texto-turno");
    if (numberDisplay && textDisplay) {
      numberDisplay.textContent = state.currentNumber.toString().padStart(2, "0");
      textDisplay.textContent = `Por favor, acérquese al mostrador`;
    }
  }
  
  // Función principal para inicializar la aplicación
  function init() {
    const initialState: AppState = {
      currentNumber: 1,
    };
  
    render(initialState);
  
    const resetButton = document.getElementById("reset-button");
    const prevButton = document.getElementById("prev-button");
    const nextButton = document.getElementById("next-button");
  
    if (resetButton && prevButton && nextButton) {
      resetButton.addEventListener("click", () => {
        initialState.currentNumber = 1;
        render(initialState);
      });
  
      prevButton.addEventListener("click", () => {
        if (initialState.currentNumber > 1) {
          initialState.currentNumber--;
          render(initialState);
        }
      });
  
      nextButton.addEventListener("click", () => {
        if (initialState.currentNumber < 99) {
          initialState.currentNumber++;
          render(initialState);
        }
      });
    }
  }
  
  // Llamamos a la función init para comenzar la aplicación cuando se carga la página
  window.onload = () => {
    init();
  };

  