document.addEventListener('DOMContentLoaded', () => {
    // --- Datos de los sitios turísticos de La Paz ---
    const sitiosLaPaz = {
        // Sitios extraídos de los atributos data-name del HTML
        "Playa El Pimental": {
            hotel: "Hotel Pacific Paradise Jaltepeque",
            telefono: "+503 2300 5000",
            direccion: "Carretera a El Pimental, La Paz"
        },
        "Estero de Jaltepeque": {
            hotel: "Rancho El Estero (Cabañas)",
            telefono: "+503 7987 1234",
            direccion: "Bocana del Estero de Jaltepeque"
        },
        "Playa Costa del Sol": {
            hotel: "Tesoro Beach Hotel",
            telefono: "+503 2345 6789",
            direccion: "Km 75, Carretera a Costa del Sol"
        },
        "San Luis Talpa (Pueblo)": {
            hotel: "Hotel Aeropuerto (cercano)",
            telefono: "+503 2340 1000",
            direccion: "Cercanías del centro de San Luis Talpa"
        },
        "Puerto de La Paz": {
            hotel: "Hospedaje Puerto Chico",
            telefono: "+503 7200 8000",
            direccion: "Muelle de Pesca Artesanal, Puerto de La Paz"
        },
        "Zacatecoluca (Cabecera)": {
            hotel: "Hotel de Ciudad Las Nubes",
            telefono: "+503 2334 5678",
            direccion: "Barrio El Centro, Zacatecoluca, La Paz"
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
    let sitioActivo = "Playa El Pimental"; 

    // Detecta el sitio activo en el hero (asume que existe un elemento con id 'site-title')
    const actualizarSitioActivo = () => {
        const tituloHero = document.getElementById('site-title');
        // Asegúrate de que el contenido del título del hero coincida exactamente con una de las claves del objeto sitiosLaPaz
        if (tituloHero) {
             sitioActivo = tituloHero.textContent.trim();
        }
    };

    // Mostrar el modal al hacer clic en el botón
    botonContacto.addEventListener('click', (e) => {
        e.preventDefault();
        actualizarSitioActivo();
        // Usamos el objeto de datos de La Paz
        const info = sitiosLaPaz[sitioActivo];
        if (info) {
            tituloModal.textContent = sitioActivo;
            hotelModal.textContent = info.hotel;
            telefonoModal.textContent = info.telefono;
            direccionModal.textContent = info.direccion;
            modal.style.display = 'flex';
        } else {
            // Manejo de error si el título del hero no coincide con ningún sitio
            console.error(`Sitio no encontrado en la lista de La Paz: ${sitioActivo}`);
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