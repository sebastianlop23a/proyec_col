document.addEventListener('DOMContentLoaded', () => {
    const guardarBtns = document.querySelectorAll('.guardar-btn');

    guardarBtns.forEach(button => {
        button.addEventListener('click', () => {
            alert('Nota guardada correctamente.');
            // Aquí podrías agregar lógica para enviar los datos al servidor
        });
    });
});