document.getElementById('clienteForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const cliente = {
        identificacion: document.getElementById('identificacion').value,
        nombres: document.getElementById('nombres').value,
        apellidos: document.getElementById('apellidos').value,
        tipoIdentificacion: document.getElementById('tipoIdentificacion').value,
        fechaNacimiento: document.getElementById('fechaNacimiento').value,
        numeroCelular: document.getElementById('numeroCelular').value,
        correoElectronico: document.getElementById('correoElectronico').value
    };

    fetch('http://localhost:8080/api/clientes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cliente)
    }).then(response => response.json())
        .then(data => {
            alert('Cliente registrado: ' + data.nombres);
        }).catch(error => {
        alert('Error al registrar cliente: ' + error.message);
    });
});

document.getElementById('servicioForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const servicio = {
        identificacion: document.getElementById('identificacionServicio').value,
        servicio: document.getElementById('servicio').value,
        fechaInicio: document.getElementById('fechaInicio').value,
        ultimaFacturacion: document.getElementById('ultimaFacturacion').value,
        ultimoPago: document.getElementById('ultimoPago').value
    };

    fetch('http://localhost:8080/api/servicios', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(servicio)
    }).then(response => response.json())
        .then(data => {
            alert('Servicio registrado: ' + data.servicio);
        }).catch(error => {
        alert('Error al registrar servicio: ' + error.message);
    });
});

document.getElementById('consultarBtn').addEventListener('click', function() {
    const identificacion = document.getElementById('consultaIdentificacion').value;

    fetch(`http://localhost:8080/api/servicios/${identificacion}`)
        .then(response => response.json())
        .then(data => {
            const resultado = document.getElementById('resultadoConsulta');
            resultado.innerHTML = `<h3>Servicios para ${identificacion}:</h3>`;
            data.forEach(servicio => {
                resultado.innerHTML += `<p>${servicio.servicio} - Último Pago: ${servicio.ultimoPago}</p>`;
            });
        }).catch(error => {
        alert('Error al consultar: ' + error.message);
    });
});
