document.addEventListener('DOMContentLoaded', () => {
    const notifyButton = document.querySelector('.notify-button');
    if (notifyButton) {
        notifyButton.addEventListener('click', () => {
            alert('Tienes 3 tareas pendientes para esta semana.');
        });
    }

    const ctx = document.getElementById('chart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Materia 1', 'Materia 2', 'Materia 3', 'Materia 4', 'Materia 5'],
            datasets: [{
                label: 'Promedio',
                data: [70, 80, 85, 90, 75],
                backgroundColor: ['#2596ff', '#1e88e5', '#1976d2', '#1565c0', '#0d47a1']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `Promedio: ${context.raw}`;
                        }
                    }
                }
            }
        }
    });

    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const carousel = document.querySelector('.carousel');

    if (prevButton && nextButton && carousel) {
        prevButton.addEventListener('click', () => {
            carousel.scrollBy({ left: -300, behavior: 'smooth' });
        });

        nextButton.addEventListener('click', () => {
            carousel.scrollBy({ left: 300, behavior: 'smooth' });
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const payButtons = document.querySelectorAll('.pay-btn');

    // Función para manejar el evento de pago
    payButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Funcionalidad de pago aún no implementada.');
        });
    });
});
