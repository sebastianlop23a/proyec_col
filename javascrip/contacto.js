function enviarFormulario(event) {
    event.preventDefault(); // Evita que el formulario se envíe
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    // Validación simple
    if (nombre && email && mensaje) {
        alert('Gracias por contactarnos. Nos pondremos en contacto contigo pronto.');
        // Aquí podrías agregar lógica para enviar el formulario a un servidor
    } else {
        alert('Por favor, completa todos los campos.');
    }
}