document.addEventListener('DOMContentLoaded', () => {
    const heroImage = document.getElementById('hero-image');
    const siteTitle = document.getElementById('site-title');
    const siteDescription = document.getElementById('site-description');
    const contactButtonLink = document.getElementById('contact-button-link');
    const listItems = document.querySelectorAll('.list-item');

    // Función para actualizar la sección principal (Hero)
    const updateHeroSection = (item) => {
        // Remover la clase 'active' de todos los elementos
        listItems.forEach(li => li.classList.remove('active'));
        // Añadir la clase 'active' al elemento clickeado
        item.classList.add('active');

        // Aplicar animaciones de salida (para una transición suave)
        siteTitle.style.animation = 'none';
        siteDescription.style.animation = 'none';
        contactButtonLink.style.animation = 'none';
        heroImage.style.transform = 'scale(1)'; // Resetear escala para animar de nuevo

        // Forzar un reflow para reiniciar la animación
        void siteTitle.offsetWidth; 
        void siteDescription.offsetWidth;
        void contactButtonLink.offsetWidth;
        void heroImage.offsetWidth;

        // Establecer la nueva información
        heroImage.src = item.dataset.image;
        heroImage.alt = item.dataset.name;
        siteTitle.textContent = item.dataset.name;
        siteDescription.textContent = item.dataset.description;
        contactButtonLink.href = item.dataset.link;

        // Aplicar animaciones de entrada
        siteTitle.style.animation = 'fadeInSlideUp 0.7s ease-out forwards';
        siteDescription.style.animation = 'fadeIn 0.8s ease-out forwards';
        contactButtonLink.style.animation = 'fadeIn 0.9s ease-out forwards';
        heroImage.style.transform = 'scale(1.05)'; // Animación de escala para la imagen
    };

    // Añadir event listeners a cada elemento de la lista lateral
    listItems.forEach(item => {
        item.addEventListener('click', () => {
            updateHeroSection(item);
        });
    });

    // Inicializar con el primer elemento activo al cargar la página
    if (listItems.length > 0) {
        // Asegúrate de que el primer elemento tenga la clase 'active' desde el inicio
        listItems[0].classList.add('active');
        // Actualiza la sección hero con los datos del primer elemento
        updateHeroSection(listItems[0]); 
    }
});

    const menuToggle = document.getElementById('menuToggle');
    const closeMenu = document.getElementById('closeMenu');
    const offCanvasMenu = document.getElementById('offCanvasMenu');
    
    // --- Lógica del Offcanvas (Abre/Cierra) ---
    menuToggle.addEventListener('click', () => {
        offCanvasMenu.classList.add('open');
    });

    closeMenu.addEventListener('click', () => {
        offCanvasMenu.classList.remove('open');
    });
    
    // Cierra el menú si se hace clic fuera de él (opcional)
    offCanvasMenu.addEventListener('click', (e) => {
        if (e.target.id === 'offCanvasMenu') {
            offCanvasMenu.classList.remove('open');
        }
    });

    // --- NUEVA LÓGICA PARA LOS MENÚS DESPLEGABLES (ACORDEÓN) ---
    const dropdownHeaders = document.querySelectorAll('.dropdown-header');

    dropdownHeaders.forEach(header => {
        header.addEventListener('click', function() {
            // Encuentra el contenido del menú
            const content = this.nextElementSibling;
            
            // Si el menú ya está abierto, ciérralo
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                this.classList.remove('active');
            } else {
                // Primero, cierra todos los demás menús (efecto acordeón)
                dropdownHeaders.forEach(otherHeader => {
                    if (otherHeader !== this) {
                        otherHeader.classList.remove('active');
                        otherHeader.nextElementSibling.style.maxHeight = null;
                    }
                });
                
                // Abre el menú actual
                content.style.maxHeight = content.scrollHeight + "px";
                this.classList.add('active');
            }
        });
    });
