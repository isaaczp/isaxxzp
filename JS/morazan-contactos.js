document.addEventListener('DOMContentLoaded', () => {
    // --- Datos de los sitios turísticos de Morazán ---
    const sitiosMorazan = {
        // Sitios extraídos de los atributos data-name del HTML
        "Museo de la Revolución (Perquín)": {
            hotel: "Hotel y Centro Turístico Perkin",
            telefono: "+503 7878 1000",
            direccion: "Barrio El Centro, Perquín, Morazán"
        },
        "Ruta de Paz (Concepción de Oriente)": {
            hotel: "Cabañas de Arambala",
            telefono: "+503 7600 2000",
            direccion: "Carretera a Arambala, cerca de la Ruta de Paz"
        },
        "Río Torola y Sus Cascadas": {
            hotel: "Hostal Ecológico Torola",
            telefono: "+503 7550 3000",
            direccion: "Cerca de las pozas en San Fernando, Morazán"
        },
        "Cacaopera (Herencia Indígena)": {
            hotel: "Hospedaje Cacaopera Ancestral",
            telefono: "+503 7404 4000",
            direccion: "Calle Principal, Cacaopera, Morazán"
        },
        "Cerro de Perquín": {
            hotel: "Mirador Hotel El Pital (referencia cercana)",
            telefono: "+503 2680 5000",
            direccion: "Zona alta del municipio de Perquín"
        },
        "Sitio Histórico El Mozote": {
            hotel: "Hospedaje de la Memoria",
            telefono: "+503 7100 6000",
            direccion: "Sitio Conmemorativo El Mozote, Meanguera"
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
    let sitioActivo = "Museo de la Revolución (Perquín)"; 

    // Detecta el sitio activo en el hero (asume que existe un elemento con id 'site-title')
    const actualizarSitioActivo = () => {
        const tituloHero = document.getElementById('site-title');
        // Asegúrate de que el contenido del título del hero coincida exactamente con una de las claves del objeto sitiosMorazan
        if (tituloHero) {
             sitioActivo = tituloHero.textContent.trim();
        }
    };

    // Mostrar el modal al hacer clic en el botón
    botonContacto.addEventListener('click', (e) => {
        e.preventDefault();
        actualizarSitioActivo();
        // Usamos el objeto de datos de Morazán
        const info = sitiosMorazan[sitioActivo];
        if (info) {
            tituloModal.textContent = sitioActivo;
            hotelModal.textContent = info.hotel;
            telefonoModal.textContent = info.telefono;
            direccionModal.textContent = info.direccion;
            modal.style.display = 'flex';
        } else {
            // Manejo de error si el título del hero no coincide con ningún sitio
            console.error(`Sitio no encontrado en la lista de Morazán: ${sitioActivo}`);
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