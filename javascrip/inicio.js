// Carrusel automático
let currentIndex = 0;

function showNextImage() {
    const images = document.querySelectorAll(".carousel img");
    currentIndex = (currentIndex + 1) % images.length; // Rotar a la siguiente imagen
    const offset = -currentIndex * 100; // Mover el carrusel
    document.querySelector(".carousel").style.transform = `translateX(${offset}%)`;
}

setInterval(showNextImage, 5000); // Cambiar imagen cada 5 segundos

// Validación de formulario
function iniciarSesion(event) {
    event.preventDefault(); // Evita que el formulario se recargue
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validación de usuario y redirección según el rol
    if (username === 'admin' && password === '1234') {
        window.location.href = 'inicio_pro.html'; // Redirige a la página de profesores
    } else if (username === 'estud' && password === '1234') {
        window.location.href = 'inicio_est.html'; // Redirige a la página de estudiantes
    } else {
        alert('Usuario o contraseña incorrectos'); // Muestra un mensaje de error
    }
}
