document.addEventListener('DOMContentLoaded', () => {
    // --- Datos de los sitios turísticos de Cabañas, en el orden solicitado ---
    const sitiosCabanas = {
        "Sensuntepeque (Cabecera)": {
            hotel: "Hostal Colonial Sensuntepeque",
            telefono: "+503 2341 0000",
            direccion: "Barrio El Centro, Sensuntepeque, Cabañas, El Salvador"
        },
        "Río Lempa (Área de Cabañas)": {
            hotel: "Cabañas del Sol Lempa",
            telefono: "+503 7788 1234",
            direccion: "Ribera del Río Lempa, Cabañas, El Salvador"
        },
        "Istepeque (Ruinas Prehispánicas)": {
            hotel: "Hacienda Istepeque Lodge",
            telefono: "+503 2341 5050",
            direccion: "Sitio Arqueológico Istepeque, Cabañas, El Salvador"
        },
        "Parque Cívico de Sensuntepeque": {
            hotel: "Hotel Central Plaza",
            telefono: "+503 2341 2121",
            direccion: "Frente al Parque Cívico, Sensuntepeque, El Salvador"
        },
        "Villa Dolores (Zona Alta)": {
            hotel: "Mirador Villa Dolores",
            telefono: "+503 7654 9876",
            direccion: "Zona Alta, Villa Dolores, Cabañas, El Salvador"
        },
        "Bosque de Cinquera": {
            hotel: "Ecoaldea Cinguera",
            telefono: "+503 2345 6789",
            direccion: "Reserva Natural Bosque de Cinguera, Cabañas, El Salvador"
        }
    };

    const botonContacto = document.getElementById('contact-button-link');
    const modal = document.getElementById('contactModal');
    const cerrarModal = document.getElementById('closeModal');
    const tituloModal = document.getElementById('modalTitle');
    const hotelModal = document.getElementById('modalHotel');
    const telefonoModal = document.getElementById('modalPhone');
    const direccionModal = document.getElementById('modalAddress');
    // Se establece el primer sitio como valor por defecto de Cabañas
    let sitioActivo = "Sensuntepeque (Cabecera)"; 

    // Detecta el sitio activo en el hero (asume que existe un elemento con id 'site-title')
    const actualizarSitioActivo = () => {
        const tituloHero = document.getElementById('site-title');
        // Asegúrate de que el contenido del título del hero coincida exactamente con una de las claves del objeto sitiosCabanas
        if (tituloHero) {
             sitioActivo = tituloHero.textContent.trim();
        }
    };

    // Mostrar el modal al hacer clic en el botón
    botonContacto.addEventListener('click', (e) => {
        e.preventDefault();
        actualizarSitioActivo();
        // Usamos el objeto de datos de Cabañas
        const info = sitiosCabanas[sitioActivo];
        if (info) {
            tituloModal.textContent = sitioActivo;
            hotelModal.textContent = info.hotel;
            telefonoModal.textContent = info.telefono;
            direccionModal.textContent = info.direccion;
            modal.style.display = 'flex';
        } else {
            // Manejo de error si el título del hero no coincide con ningún sitio
            console.error(`Sitio no encontrado en la lista de Cabañas: ${sitioActivo}`);
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