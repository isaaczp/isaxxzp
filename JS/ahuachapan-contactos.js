document.addEventListener('DOMContentLoaded', () => {
    // --- Datos de los sitios turísticos de Ahuachapán, en el orden solicitado ---
    const sitiosAhuachapan = {
        "Los Ausoles (Campo Geotérmico)": {
            hotel: "Hostal Casa de Mama",
            telefono: "+503 2441 2233",
            direccion: "Ruta de Las Flores, Ahuachapán, El Salvador"
        },
        "Cascadas de Malacatao": {
            hotel: "Eco Hotel Santa Clara",
            telefono: "+503 7845 6011",
            direccion: "Cantón Malacatao, Ahuachapán, El Salvador"
        },
        "Concepción de Ataco": {
            hotel: "Hotel Misión de Ángeles",
            telefono: "+503 2452 1400",
            direccion: "Ruta de Las Flores, Concepción de Ataco, El Salvador"
        },
        "Centro Histórico de Ahuachapán": {
            hotel: "Hotel El Parador",
            telefono: "+503 2443 1978",
            direccion: "Centro Histórico, Ahuachapán, El Salvador"
        },
        "Termales de Albania": {
            hotel: "Termales de Albania Cabañas",
            telefono: "+503 2450 5000",
            direccion: "Cantón Los Ausoles, Apaneca, El Salvador"
        },
        "Chorros de la Calera": {
            hotel: "Finca Campo Bello",
            telefono: "+503 2404 0000",
            direccion: "Carretera a Apaneca, Ahuachapán, El Salvador"
        }
    };

    const botonContacto = document.getElementById('contact-button-link');
    const modal = document.getElementById('contactModal');
    const cerrarModal = document.getElementById('closeModal');
    const tituloModal = document.getElementById('modalTitle');
    const hotelModal = document.getElementById('modalHotel');
    const telefonoModal = document.getElementById('modalPhone');
    const direccionModal = document.getElementById('modalAddress');
    // Se establece el primer sitio como valor por defecto de Ahuachapán
    let sitioActivo = "Los Ausoles (Campo Geotérmico)"; 

    // Detecta el sitio activo en el hero (asume que existe un elemento con id 'site-title')
    const actualizarSitioActivo = () => {
        const tituloHero = document.getElementById('site-title');
        // Asegúrate de que el contenido del título del hero coincida exactamente con una de las claves del objeto sitiosAhuachapan
        if (tituloHero) {
             sitioActivo = tituloHero.textContent.trim();
        }
    };

    // Mostrar el modal al hacer clic en el botón
    botonContacto.addEventListener('click', (e) => {
        e.preventDefault();
        actualizarSitioActivo();
        // Cambiamos el objeto de datos a Ahuachapan
        const info = sitiosAhuachapan[sitioActivo];
        if (info) {
            tituloModal.textContent = sitioActivo;
            hotelModal.textContent = info.hotel;
            telefonoModal.textContent = info.telefono;
            direccionModal.textContent = info.direccion;
            modal.style.display = 'flex';
        } else {
            // Manejo de error si el título del hero no coincide con ningún sitio
            console.error(`Sitio no encontrado en la lista de Ahuachapán: ${sitioActivo}`);
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