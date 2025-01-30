document.addEventListener('DOMContentLoaded', () => {
    // Notificaciones
    const notifyButton = document.querySelector('.notify-button');
    if (notifyButton) {
        notifyButton.addEventListener('click', () => {
            alert('Tienes 2 tareas pendientes para esta semana.');
        });
    }

    // Gráfica de asistencia
    const ctx = document.getElementById('chart-asistencia').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Estudiante 1', 'Estudiante 2', 'Estudiante 3', 'Estudiante 4', 'Estudiante 5'],
            datasets: [{
                label: 'Asistencia',
                data: [90, 85, 95, 80, 75],
                backgroundColor: '#2596ff'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `Asistencia: ${context.raw}%`;
                        }
                    }
                }
            }
        }
    });

    // Guardar notas
    const saveButtons = document.querySelectorAll('.save-btn');
    saveButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Nota guardada correctamente.');
        });
    });
});