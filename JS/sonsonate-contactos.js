document.addEventListener('DOMContentLoaded', () => {
    // --- Datos de los sitios turísticos de Sonsonate ---
    const sitiosSonsonate = {
        // Sitios extraídos de los atributos data-name del HTML
        "Playa Los Cobanos": {
            hotel: "Hotel Decameron Salinitas",
            telefono: "+503 2429 8000",
            direccion: "Cantón Los Cobanos, Acajutla, Sonsonate"
        },
        "Nahuizalco y su Mercado Nocturno": {
            hotel: "Hotel y Restaurante El Mirador de la Ruta (Cercano)",
            telefono: "+503 7878 9000",
            direccion: "Ruta de las Flores, Nahuizalco, Sonsonate"
        },
        "Juayúa y su Feria Gastronómica": {
            hotel: "Hostal Casa Mazeta",
            telefono: "+503 7887 5000",
            direccion: "Calle al Parque Central, Juayúa, Sonsonate"
        },
        "Playa El Zonte (Bitcoin Beach)": {
            hotel: "Hostal La Ola Beto's",
            telefono: "+503 7600 1234",
            direccion: "Carretera Litoral, Playa El Zonte, Sonsonate"
        },
        "Termales de Santa Teresa": {
            hotel: "Hotel y Spa Termales de Santa Teresa",
            telefono: "+503 2401 2000",
            direccion: "Carretera a Acajutla, Sonsonate"
        },
        "Parque Nacional El Imposible": {
            hotel: "Hostal El Imposible (Dentro o cerca del parque)",
            telefono: "+503 7887 6000",
            direccion: "San Benito, Cara Sucia, Sonsonate"
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
    let sitioActivo = "Playa Los Cobanos"; 

    // Detecta el sitio activo en el hero (asume que existe un elemento con id 'site-title')
    const actualizarSitioActivo = () => {
        const tituloHero = document.getElementById('site-title');
        // Asegúrate de que el contenido del título del hero coincida exactamente con una de las claves del objeto sitiosSonsonate
        if (tituloHero) {
             sitioActivo = tituloHero.textContent.trim();
        }
    };

    // Mostrar el modal al hacer clic en el botón
    botonContacto.addEventListener('click', (e) => {
        e.preventDefault();
        actualizarSitioActivo();
        // Usamos el objeto de datos de Sonsonate
        const info = sitiosSonsonate[sitioActivo];
        if (info) {
            tituloModal.textContent = sitioActivo;
            hotelModal.textContent = info.hotel;
            telefonoModal.textContent = info.telefono;
            direccionModal.textContent = info.direccion;
            modal.style.display = 'flex';
        } else {
            // Manejo de error si el título del hero no coincide con ningún sitio
            console.error(`Sitio no encontrado en la lista de Sonsonate: ${sitioActivo}`);
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