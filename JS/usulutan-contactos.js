document.addEventListener('DOMContentLoaded', () => {
    // --- Datos de los sitios turísticos de Usulután ---
    const sitiosUsulutan = {
        // Sitios extraídos de los atributos data-name del HTML
        "Bahía de Jiquilisco": {
            hotel: "Puerto Barillas Marina & Lodge",
            telefono: "+503 7837 5000",
            direccion: "Puerto Barillas, Bahía de Jiquilisco, Usulután"
        },
        "Playa El Espino": {
            hotel: "Hotel Casa de Playa El Espino",
            telefono: "+503 7500 1000",
            direccion: "Playa El Espino, Jucuarán, Usulután"
        },
        "Volcán de Usulután": {
            hotel: "Hotel Usulután Plaza (En la ciudad cercana)",
            telefono: "+503 2662 5000",
            direccion: "Cercano a Santiago de María, Usulután"
        },
        "Puerto El Triunfo": {
            hotel: "Hostería El Triunfo",
            telefono: "+503 2600 3000",
            direccion: "Muelle de Puerto El Triunfo, Usulután"
        },
        "Ciudad de Usulután": {
            hotel: "Hotel Usulután Plaza",
            telefono: "+503 2662 5000",
            direccion: "Barrio El Centro, Usulután"
        },
        "Península El Cordón del Plata": {
            hotel: "Eco-Lodge Cordon del Plata (Alojamiento Ecológico)",
            telefono: "+503 7900 6000",
            direccion: "Península El Cordón del Plata, Usulután"
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
    let sitioActivo = "Bahía de Jiquilisco"; 

    // Detecta el sitio activo en el hero (asume que existe un elemento con id 'site-title')
    const actualizarSitioActivo = () => {
        const tituloHero = document.getElementById('site-title');
        // Asegúrate de que el contenido del título del hero coincida exactamente con una de las claves del objeto sitiosUsulutan
        if (tituloHero) {
             sitioActivo = tituloHero.textContent.trim();
        }
    };

    // Mostrar el modal al hacer clic en el botón
    botonContacto.addEventListener('click', (e) => {
        e.preventDefault();
        actualizarSitioActivo();
        // Usamos el objeto de datos de Usulután
        const info = sitiosUsulutan[sitioActivo];
        if (info) {
            tituloModal.textContent = sitioActivo;
            hotelModal.textContent = info.hotel;
            telefonoModal.textContent = info.telefono;
            direccionModal.textContent = info.direccion;
            modal.style.display = 'flex';
        } else {
            // Manejo de error si el título del hero no coincide con ningún sitio
            console.error(`Sitio no encontrado en la lista de Usulután: ${sitioActivo}`);
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