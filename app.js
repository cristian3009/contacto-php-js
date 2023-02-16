let formulario = document.getElementById('formulario')
let respuesta = document.getElementById('respuesta')

formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    
    let datos = new FormData(formulario);

    fetch('contacto.php', {
        method: 'POST',
        body: datos,
    }).then(
        res => res.json()
    ).then(
        data => {
            console.log(data);

            if (data === 'Error') {
                respuesta.innerHTML = `
                <div class="alert alert-danger alert-dismissible fade show" role="alert">
                    Llena todos los campos
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>`
            } else {
                respuesta.innerHTML = `
                <div class="alert alert-primary alert-dismissible fade show" role="alert">
                    ${data}
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>`
            }
        }
    )
})