document.addEventListener('DOMContentLoaded', () => {
    // --- Datos de los sitios turísticos de Chalatenango ---
    const sitiosChalatenango = {
        // Sitios extraídos de los atributos data-name del HTML
        "Lago Suchitlán": {
            hotel: "Suchitlán Hotel & Tours",
            telefono: "+503 2335 1525",
            direccion: "Calle Principal, Suchitoto (cerca del lago)"
        },
        "La Palma, Cuna de la Artesanía": {
            hotel: "Hotel La Palma",
            telefono: "+503 2335 9000",
            direccion: "Barrio El Centro, La Palma, Chalatenango, El Salvador"
        },
        "El Pital (Punto más alto)": {
            hotel: "Cabañas de Don Fernando",
            telefono: "+503 7888 1234",
            direccion: "Cerro El Pital, San Ignacio, Chalatenango"
        },
        "San Ignacio (Zona Cafetalera)": {
            hotel: "Hotel La Montaña",
            telefono: "+503 2335 7000",
            direccion: "Calle Principal, San Ignacio, Chalatenango, El Salvador"
        },
        "Presa Hidroeléctrica Cerrón Grande": {
            hotel: "Eco Hotel La Represa",
            telefono: "+503 2335 4444",
            direccion: "Zona de la Presa Cerrón Grande, El Paraíso"
        },
        "Ciudad de Chalatenango": {
            hotel: "Hostal Chalate",
            telefono: "+503 2344 5555",
            direccion: "Centro Histórico, Chalatenango, El Salvador"
        }
    };

    const botonContacto = document.getElementById('contact-button-link');
    const modal = document.getElementById('contactModal');
    const cerrarModal = document.getElementById('closeModal');
    const tituloModal = document.getElementById('modalTitle');
    const hotelModal = document.getElementById('modalHotel');
    const telefonoModal = document.getElementById('modalPhone');
    const direccionModal = document.getElementById('modalAddress');
    // Se establece el primer sitio como valor por defecto
    let sitioActivo = "Lago Suchitlán"; 

    // Detecta el sitio activo en el hero (asume que existe un elemento con id 'site-title')
    const actualizarSitioActivo = () => {
        const tituloHero = document.getElementById('site-title');
        // Asegúrate de que el contenido del título del hero coincida exactamente con una de las claves del objeto sitiosChalatenango
        if (tituloHero) {
             sitioActivo = tituloHero.textContent.trim();
        }
    };

    // Mostrar el modal al hacer clic en el botón
    botonContacto.addEventListener('click', (e) => {
        e.preventDefault();
        actualizarSitioActivo();
        // Usamos el objeto de datos de Chalatenango
        const info = sitiosChalatenango[sitioActivo];
        if (info) {
            tituloModal.textContent = sitioActivo;
            hotelModal.textContent = info.hotel;
            telefonoModal.textContent = info.telefono;
            direccionModal.textContent = info.direccion;
            modal.style.display = 'flex';
        } else {
            // Manejo de error si el título del hero no coincide con ningún sitio
            console.error(`Sitio no encontrado en la lista de Chalatenango: ${sitioActivo}`);
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