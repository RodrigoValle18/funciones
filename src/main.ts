window.onload = () => {
  const turnoElement = document.querySelector('.numero-turno') as HTMLElement;
  const anteriorBtn = document.getElementById('anterior') as HTMLButtonElement;
  const siguienteBtn = document.getElementById('siguiente') as HTMLButtonElement;
  const resetBtn = document.getElementById('reset') as HTMLButtonElement;
  const inputNumero = document.getElementById('input-numero') as HTMLInputElement;

  let turno = 1;

  const actualizarTurno = (nuevoTurno: number) => {
    turno = nuevoTurno;
    const turnoFormateado = turno.toString().padStart(2, '0');
    turnoElement.textContent = turnoFormateado;
  };

  anteriorBtn.onclick = () => {
    if (turno > 1) {
      actualizarTurno(turno - 1);
    }
  };

  siguienteBtn.onclick = () => {
    actualizarTurno(turno + 1);
  };

  resetBtn.onclick = () => {
    actualizarTurno(1);
  };

  inputNumero.onchange = () => {
    const nuevoTurno = parseInt(inputNumero.value);
    if (!isNaN(nuevoTurno) && nuevoTurno >= 1) {
      actualizarTurno(nuevoTurno);
    }
  };
};



