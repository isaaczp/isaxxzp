document.addEventListener('DOMContentLoaded', () => {
    // --- Datos de los sitios turísticos de Santa Ana ---
    const sitiosSantaAna = {
        "Volcán de Santa Ana": {
            hotel: "Hotel El Faro Arenal",
            telefono: "+503 2401 2433",
            direccion: "Cerro Verde, Santa Ana, El Salvador"
        },
        "Lago de Coatepeque": {
            hotel: "Cardedeu Lakeside Hotel",
            telefono: "+503 2306 5000",
            direccion: "Lago de Coatepeque, Santa Ana, El Salvador"
        },
        "Sitio Arqueológico Tazumal": {
            hotel: "Hotel Remfort",
            telefono: "+503 2441 5243",
            direccion: "Chalchuapa, Santa Ana, El Salvador"
        },
        "Catedral de Santa Ana": {
            hotel: "Hostal Casa Verde",
            telefono: "+503 2447 2144",
            direccion: "Centro Histórico, Santa Ana, El Salvador"
        },
        "Parque Nacional Cerro Verde": {
            hotel: "Los Naranjos Eco Hotel",
            telefono: "+503 2435 1640",
            direccion: "Cerro Verde, Santa Ana, El Salvador"
        },
        "Termales de Santa Teresa": {
            hotel: "Termales de Santa Teresa Resort & Spa",
            telefono: "+503 2445 2922",
            direccion: "Ahuachapán, cerca de Santa Ana, El Salvador"
        }
    };

    const botonContacto = document.getElementById('contact-button-link');
    const modal = document.getElementById('contactModal');
    const cerrarModal = document.getElementById('closeModal');
    const tituloModal = document.getElementById('modalTitle');
    const hotelModal = document.getElementById('modalHotel');
    const telefonoModal = document.getElementById('modalPhone');
    const direccionModal = document.getElementById('modalAddress');
    let sitioActivo = "Volcán de Santa Ana"; // valor por defecto

    // Detecta el sitio activo en el hero
    const actualizarSitioActivo = () => {
        const tituloHero = document.getElementById('site-title');
        sitioActivo = tituloHero.textContent.trim();
    };

    // Mostrar el modal al hacer clic en el botón
    botonContacto.addEventListener('click', (e) => {
        e.preventDefault();
        actualizarSitioActivo();
        const info = sitiosSantaAna[sitioActivo];
        if (info) {
            tituloModal.textContent = sitioActivo;
            hotelModal.textContent = info.hotel;
            telefonoModal.textContent = info.telefono;
            direccionModal.textContent = info.direccion;
            modal.style.display = 'flex';
        }
    });

    // Cerrar el modal al hacer clic en la "X"
    cerrarModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Cerrar el modal al hacer clic fuera del cuadro
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
