document.addEventListener('DOMContentLoaded', () => {
    // --- Datos de los sitios turísticos de San Salvador ---
    const sitiosSanSalvador = {
        // Sitios extraídos de los atributos data-name del HTML
        "Monumento al Salvador del Mundo": {
            hotel: "Hotel Barceló San Salvador",
            telefono: "+503 2268 4500",
            direccion: "Alameda Roosevelt, San Salvador"
        },
        "Catedral Metropolitana": {
            hotel: "Hotel Real InterContinental San Salvador",
            telefono: "+503 2210 5000",
            direccion: "Frente a la Plaza Gerardo Barrios, Centro Histórico"
        },
        "Teatro Nacional de El Salvador": {
            hotel: "Hotel Cinco (Cercano al Centro)",
            telefono: "+503 2500 1200",
            direccion: "Calle Delgado y 2a. Av. Sur, Centro Histórico"
        },
        "Parque Nacional El Boquerón": {
            hotel: "Hostal Casa Verde (en la zona de El Boquerón)",
            telefono: "+503 7888 3500",
            direccion: "Carretera al Volcán, Cantón El Picacho"
        },
        "Palacio Nacional de El Salvador": {
            hotel: "Hotel Crowne Plaza San Salvador",
            telefono: "+503 2500 0500",
            direccion: "Frente a la Plaza Barrios, Centro Histórico"
        },
        "Iglesia El Rosario": {
            hotel: "Suites Las Palmas",
            telefono: "+503 2264 4200",
            direccion: "6a Calle Oriente, Centro Histórico"
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
    let sitioActivo = "Monumento al Salvador del Mundo"; 

    // Detecta el sitio activo en el hero (asume que existe un elemento con id 'site-title')
    const actualizarSitioActivo = () => {
        const tituloHero = document.getElementById('site-title');
        // Asegúrate de que el contenido del título del hero coincida exactamente con una de las claves del objeto sitiosSanSalvador
        if (tituloHero) {
             sitioActivo = tituloHero.textContent.trim();
        }
    };

    // Mostrar el modal al hacer clic en el botón
    botonContacto.addEventListener('click', (e) => {
        e.preventDefault();
        actualizarSitioActivo();
        // Usamos el objeto de datos de San Salvador
        const info = sitiosSanSalvador[sitioActivo];
        if (info) {
            tituloModal.textContent = sitioActivo;
            hotelModal.textContent = info.hotel;
            telefonoModal.textContent = info.telefono;
            direccionModal.textContent = info.direccion;
            modal.style.display = 'flex';
        } else {
            // Manejo de error si el título del hero no coincide con ningún sitio
            console.error(`Sitio no encontrado en la lista de San Salvador: ${sitioActivo}`);
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