document.addEventListener('DOMContentLoaded', () => {
    // --- Datos de los sitios turísticos de San Vicente ---
    const sitiosSanVicente = {
        // Sitios extraídos de los atributos data-name del HTML
        "Volcán de San Vicente (Chinchontepec)": {
            hotel: "Ecoturismo Las Letras (Cercano al Volcán)",
            telefono: "+503 7700 8500",
            direccion: "Falda del Volcán Chinchontepec, San Vicente"
        },
        "Parque Acuático Amapulapa": {
            hotel: "Hotel Vista Hermosa San Vicente",
            telefono: "+503 2345 6000",
            direccion: "Carretera a Zacatecoluca, km 64, San Vicente"
        },
        "Iglesia El Pilar": {
            hotel: "Hostal Colonial Vicentino",
            telefono: "+503 2393 2000",
            direccion: "Barrio El Pilar, Centro de San Vicente"
        },
        "Salto del Chihuahua": {
            hotel: "Casa Rural Los Saltos (Alojamiento local)",
            telefono: "+503 7987 1500",
            direccion: "Cerca de San Ildefonso, San Vicente"
        },
        "Puente de Oro (Referencia Histórica)": {
            hotel: "Hotel Pasatiempo (Cercano a la zona del Lempa)",
            telefono: "+503 2300 4000",
            direccion: "Carretera Panamericana, Río Lempa"
        },
        "Catedral de San Vicente": {
            hotel: "Hotel Central San Vicente",
            telefono: "+503 2393 5000",
            direccion: "Frente al Parque Central, San Vicente"
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
    let sitioActivo = "Volcán de San Vicente (Chinchontepec)"; 

    // Detecta el sitio activo en el hero (asume que existe un elemento con id 'site-title')
    const actualizarSitioActivo = () => {
        const tituloHero = document.getElementById('site-title');
        // Asegúrate de que el contenido del título del hero coincida exactamente con una de las claves del objeto sitiosSanVicente
        if (tituloHero) {
             sitioActivo = tituloHero.textContent.trim();
        }
    };

    // Mostrar el modal al hacer clic en el botón
    botonContacto.addEventListener('click', (e) => {
        e.preventDefault();
        actualizarSitioActivo();
        // Usamos el objeto de datos de San Vicente
        const info = sitiosSanVicente[sitioActivo];
        if (info) {
            tituloModal.textContent = sitioActivo;
            hotelModal.textContent = info.hotel;
            telefonoModal.textContent = info.telefono;
            direccionModal.textContent = info.direccion;
            modal.style.display = 'flex';
        } else {
            // Manejo de error si el título del hero no coincide con ningún sitio
            console.error(`Sitio no encontrado en la lista de San Vicente: ${sitioActivo}`);
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