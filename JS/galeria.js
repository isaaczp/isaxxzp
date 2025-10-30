document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('cardsContainer');
    const cards = Array.from(container.querySelectorAll('.flip-card'));
    const rotationTime = 7000; 
    let rotationInterval;

    // Función principal para cambiar el orden de las tarjetas
    function rotateCards() {
        // Obtenemos la primera tarjeta (la que tiene order: 1)
        const firstCard = cards.find(card => parseInt(card.style.order) === 1);
        
        // Si no se encuentra la primera tarjeta o hay un error, salir
        if (!firstCard) return;

        // Actualizamos el orden de todas las tarjetas
        cards.forEach(card => {
            let currentOrder = parseInt(card.style.order || card.dataset.order);
            let newOrder;

            if (currentOrder === 4) {
                // La última tarjeta (4) se convierte en la primera (1)
                newOrder = 1;
            } else {
                // Las demás tarjetas avanzan una posición (1->2, 2->3, 3->4)
                newOrder = currentOrder + 1;
            }

            card.style.order = newOrder;
            card.dataset.order = newOrder; // Actualizamos el data-order para coherencia
        });

        // Reordenar el array en memoria después de la rotación (opcional, pero ayuda a la lógica)
        cards.sort((a, b) => parseInt(a.dataset.order) - parseInt(b.dataset.order));
    }

    // Función para iniciar la rotación
    function startRotation() {
        if (!rotationInterval) {
            rotationInterval = setInterval(rotateCards, rotationTime);
        }
    }

    // Función para detener la rotación
    function stopRotation() {
        clearInterval(rotationInterval);
        rotationInterval = null;
    }

    // Inicializar el orden de las tarjetas al cargar
    cards.forEach((card, index) => {
        card.style.order = index + 1;
        card.dataset.order = index + 1;
    });

    // Iniciar la rotación automática
    startRotation();

    // Eventos para controlar la rotación al pasar el mouse (hover/click)
    cards.forEach(card => {
        // Al entrar el cursor (Hover) o al hacer click, detener la rotación
        card.addEventListener('mouseenter', stopRotation);
        card.addEventListener('click', stopRotation);

        // Al salir el cursor, reanudar la rotación
        card.addEventListener('mouseleave', startRotation);
    });
});