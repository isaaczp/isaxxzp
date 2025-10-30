document.addEventListener('DOMContentLoaded', () => {
    // --- Datos de los sitios turísticos de Cuscatlán ---
    const sitiosCuscatlan = {
        // Sitios extraídos de los atributos data-name del HTML
        "Teatro de Cojutepeque": {
            hotel: "Hotel Plaza Cojutepeque",
            telefono: "+503 2340 1000",
            direccion: "Barrio El Centro, Cojutepeque, Cuscatlán, El Salvador"
        },
        "Lago de Ilopango (Acceso Cuscatlán)": {
            hotel: "Balneario Apulo Cabañas",
            telefono: "+503 2225 3300",
            direccion: "Carretera al Lago de Ilopango, Cuscatlán"
        },
        "Cerro de Las Pavas": {
            hotel: "Hospedaje El Mirador",
            telefono: "+503 7777 0101",
            direccion: "Ruta al Cerro de Las Pavas, Cojutepeque"
        },
        "San Pedro Perulapán": {
            hotel: "Hostal Colonial Perulapán",
            telefono: "+503 2300 2000",
            direccion: "Centro Histórico, San Pedro Perulapán"
        },
        "Puente Colgante de Santa Cruz Michapa": {
            hotel: "Cabañas Río Jiboa",
            telefono: "+503 7600 3000",
            direccion: "Santa Cruz Michapa, cerca del río Jiboa"
        },
        "Sitio Histórico de Cuscatlán": {
            hotel: "Posada Ancestral",
            telefono: "+503 2300 4000",
            direccion: "Cercanías de la Antigua Ciudad de Cuscatlán"
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
    let sitioActivo = "Teatro de Cojutepeque"; 

    // Detecta el sitio activo en el hero (asume que existe un elemento con id 'site-title')
    const actualizarSitioActivo = () => {
        const tituloHero = document.getElementById('site-title');
        // Asegúrate de que el contenido del título del hero coincida exactamente con una de las claves del objeto sitiosCuscatlan
        if (tituloHero) {
             sitioActivo = tituloHero.textContent.trim();
        }
    };

    // Mostrar el modal al hacer clic en el botón
    botonContacto.addEventListener('click', (e) => {
        e.preventDefault();
        actualizarSitioActivo();
        // Usamos el objeto de datos de Cuscatlán
        const info = sitiosCuscatlan[sitioActivo];
        if (info) {
            tituloModal.textContent = sitioActivo;
            hotelModal.textContent = info.hotel;
            telefonoModal.textContent = info.telefono;
            direccionModal.textContent = info.direccion;
            modal.style.display = 'flex';
        } else {
            // Manejo de error si el título del hero no coincide con ningún sitio
            console.error(`Sitio no encontrado en la lista de Cuscatlán: ${sitioActivo}`);
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