document.addEventListener('DOMContentLoaded', function() {
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

    // --- Lógica para el Listado de Sitios (asumiendo que ya está en tu JS) ---
    const listItems = document.querySelectorAll('.list-item');
    const heroImage = document.getElementById('hero-image');
    const siteTitle = document.getElementById('site-title');
    const siteDescription = document.getElementById('site-description');
    const contactButtonLink = document.getElementById('contact-button-link');

    listItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remueve la clase 'active' de todos los items
            listItems.forEach(i => i.classList.remove('active'));
            
            // Agrega la clase 'active' al item actual
            this.classList.add('active');
            
            // Actualiza la sección principal con los datos del item
            heroImage.src = this.getAttribute('data-image');
            siteTitle.textContent = this.getAttribute('data-name');
            siteDescription.textContent = this.getAttribute('data-description');
            contactButtonLink.href = this.getAttribute('data-link');
        });
    });

});


let currentImageIndex = 0;
        const images = document.querySelectorAll('.image-gallery img');
        const captionElement = document.getElementById('image-caption');

        function showImage(index) {
            images.forEach((img) => {
                img.classList.remove('active');
            });

            const activeImage = images[index];
            activeImage.classList.add('active');
            
            const description = activeImage.getAttribute('data-description');
            captionElement.textContent = description;
        }

        function changeImage(direction) {
            currentImageIndex += direction;
            
            if (currentImageIndex >= images.length) {
                currentImageIndex = 0;
            }
            if (currentImageIndex < 0) {
                currentImageIndex = images.length - 1;
            }
            
            showImage(currentImageIndex);
        }

        document.addEventListener('DOMContentLoaded', () => {
            showImage(currentImageIndex);
        });

       
