//Metodo tipo cambio
function fetchTipoCambio() {
    fetch('https://test.sistemamanejoseguros.com/api/tipocambio')
      .then(response => response.json())
      .then(data => {
        tipoCambioInput.value = data;
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    fetchTipoCambio();
    Swal.fire({
        position: 'center',
        title: 'Confirmar si es de Costa Rica \n Y es mayor de edad',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Si',
        cancelButtonText: 'No'
    }).then((result) => {
        if(!result.isConfirmed){
            document.body.classList.add('blur');
        }
    })
  });