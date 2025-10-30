document.addEventListener('DOMContentLoaded', () => {
    // --- Datos de los sitios turísticos de La Libertad ---
    const sitiosLaLibertad = {
        // Sitios extraídos de los atributos data-name del HTML
        "El Puerto de La Libertad": {
            hotel: "Hotel Pacific Paradise",
            telefono: "+503 2346 1234",
            direccion: "Frente al Muelle, Carretera Litoral, La Libertad"
        },
        "Playa El Tunco": {
            hotel: "Hostal El Tunco Surf House",
            telefono: "+503 7888 5678",
            direccion: "Calle Principal, Playa El Tunco, La Libertad"
        },
        "Playa El Sunzal": {
            hotel: "Hotel El Sunzal Resort",
            telefono: "+503 2400 9000",
            direccion: "Km 44 Carretera Litoral, El Sunzal"
        },
        "Lago de Ilopango": {
            hotel: "Vista Lago Hotel & Suites",
            telefono: "+503 2229 1111",
            direccion: "Carretera Panorámica, Acceso La Libertad a Lago de Ilopango"
        },
        "Tamanique y sus Cascadas": {
            hotel: "Eco-Lodge Tamanique",
            telefono: "+503 7000 4567",
            direccion: "Ruta a las Cascadas, Municipio de Tamanique"
        },
        "Club de Playa Atami": {
            hotel: "Club de Playa Atami (reservas)",
            telefono: "+503 2333 8000",
            direccion: "Km 40 Carretera del Litoral, Puerto La Libertad"
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
    let sitioActivo = "El Puerto de La Libertad"; 

    // Detecta el sitio activo en el hero (asume que existe un elemento con id 'site-title')
    const actualizarSitioActivo = () => {
        const tituloHero = document.getElementById('site-title');
        // Asegúrate de que el contenido del título del hero coincida exactamente con una de las claves del objeto sitiosLaLibertad
        if (tituloHero) {
             sitioActivo = tituloHero.textContent.trim();
        }
    };

    // Mostrar el modal al hacer clic en el botón
    botonContacto.addEventListener('click', (e) => {
        e.preventDefault();
        actualizarSitioActivo();
        // Usamos el objeto de datos de La Libertad
        const info = sitiosLaLibertad[sitioActivo];
        if (info) {
            tituloModal.textContent = sitioActivo;
            hotelModal.textContent = info.hotel;
            telefonoModal.textContent = info.telefono;
            direccionModal.textContent = info.direccion;
            modal.style.display = 'flex';
        } else {
            // Manejo de error si el título del hero no coincide con ningún sitio
            console.error(`Sitio no encontrado en la lista de La Libertad: ${sitioActivo}`);
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