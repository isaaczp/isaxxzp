document.addEventListener('DOMContentLoaded', () => {
    // --- Datos de los sitios turísticos de La Unión ---
    const sitiosLaUnion = {
        // Sitios extraídos de los atributos data-name del HTML
        "Golfo de Fonseca": {
            hotel: "Hotel Mirador del Golfo",
            telefono: "+503 2600 1000",
            direccion: "Sector de Puerto Cutuco, La Unión"
        },
        "Isla Meanguera": {
            hotel: "Cabañas Los Alcatraces",
            telefono: "+503 7777 0101",
            direccion: "Playa El Tamarindo, Isla Meanguera"
        },
        "Playa Las Flores": {
            hotel: "Las Flores Surf Club",
            telefono: "+503 2682 9900",
            direccion: "Carretera Litoral, Cantón Las Flores, Intipucá"
        },
        "Puerto de La Unión (Cutuco)": {
            hotel: "Hotel Portuario La Unión",
            telefono: "+503 2604 5000",
            direccion: "Contiguo al Puerto de Cutuco, La Unión"
        },
        "Volcán de Conchagua": {
            hotel: "Hostal Vistas de Conchagua",
            telefono: "+503 7888 2020",
            direccion: "Ruta de Ascenso, Volcán de Conchagua"
        },
        "Ciudad de La Unión": {
            hotel: "Hotel Central Colonial",
            telefono: "+503 2680 3000",
            direccion: "4a Calle Oriente, Centro de La Unión"
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
    let sitioActivo = "Golfo de Fonseca"; 

    // Detecta el sitio activo en el hero (asume que existe un elemento con id 'site-title')
    const actualizarSitioActivo = () => {
        const tituloHero = document.getElementById('site-title');
        // Asegúrate de que el contenido del título del hero coincida exactamente con una de las claves del objeto sitiosLaUnion
        if (tituloHero) {
             sitioActivo = tituloHero.textContent.trim();
        }
    };

    // Mostrar el modal al hacer clic en el botón
    botonContacto.addEventListener('click', (e) => {
        e.preventDefault();
        actualizarSitioActivo();
        // Usamos el objeto de datos de La Unión
        const info = sitiosLaUnion[sitioActivo];
        if (info) {
            tituloModal.textContent = sitioActivo;
            hotelModal.textContent = info.hotel;
            telefonoModal.textContent = info.telefono;
            direccionModal.textContent = info.direccion;
            modal.style.display = 'flex';
        } else {
            // Manejo de error si el título del hero no coincide con ningún sitio
            console.error(`Sitio no encontrado en la lista de La Unión: ${sitioActivo}`);
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