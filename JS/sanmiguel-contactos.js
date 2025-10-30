document.addEventListener('DOMContentLoaded', () => {
    // --- Datos de los sitios turísticos de San Miguel ---
    const sitiosSanMiguel = {
        // Sitios extraídos de los atributos data-name del HTML
        "Volcán de San Miguel (Chaparrastique)": {
            hotel: "Finca El Pacayal (Base del Volcán)",
            telefono: "+503 7600 1000",
            direccion: "Ruta de ascenso, Chinameca, San Miguel"
        },
        "Lago de Olomega": {
            hotel: "Hospedaje Olomega Lake",
            telefono: "+503 7777 2000",
            direccion: "Cantón Olomega, El Sauce, San Miguel"
        },
        "Playa El Cuco": {
            hotel: "Hotel Tropico Inn El Cuco",
            telefono: "+503 2660 3000",
            direccion: "Carretera Litoral, Playa El Cuco"
        },
        "Ciudad de San Miguel": {
            hotel: "Hotel Plaza By Katia",
            telefono: "+503 2661 4000",
            direccion: "Avenida Roosevelt, San Miguel Centro"
        },
        "Puerto El Relámpago": {
            hotel: "Hostal Puerto Relámpago",
            telefono: "+503 7404 5000",
            direccion: "Zona portuaria, El Relámpago, Jucuarán"
        },
        "Volcán de Chinameca (El Pacayal)": {
            hotel: "Beneficio de Café de Chinameca",
            telefono: "+503 7888 6000",
            direccion: "Ruta del Café, Chinameca"
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
    let sitioActivo = "Volcán de San Miguel (Chaparrastique)"; 

    // Detecta el sitio activo en el hero (asume que existe un elemento con id 'site-title')
    const actualizarSitioActivo = () => {
        const tituloHero = document.getElementById('site-title');
        // Asegúrate de que el contenido del título del hero coincida exactamente con una de las claves del objeto sitiosSanMiguel
        if (tituloHero) {
             sitioActivo = tituloHero.textContent.trim();
        }
    };

    // Mostrar el modal al hacer clic en el botón
    botonContacto.addEventListener('click', (e) => {
        e.preventDefault();
        actualizarSitioActivo();
        // Usamos el objeto de datos de San Miguel
        const info = sitiosSanMiguel[sitioActivo];
        if (info) {
            tituloModal.textContent = sitioActivo;
            hotelModal.textContent = info.hotel;
            telefonoModal.textContent = info.telefono;
            direccionModal.textContent = info.direccion;
            modal.style.display = 'flex';
        } else {
            // Manejo de error si el título del hero no coincide con ningún sitio
            console.error(`Sitio no encontrado en la lista de San Miguel: ${sitioActivo}`);
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