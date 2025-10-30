let currentStep = 1;
    const totalSteps = 3;

    // --- Funciones de navegación entre pasos ---

    function updateStepIndicator(step) {
        document.querySelectorAll('.step-item').forEach(item => {
            const stepNum = parseInt(item.id.slice(-1));
            item.classList.remove('active', 'completed');
            if (stepNum < step) {
                item.classList.add('completed');
            } else if (stepNum === step) {
                item.classList.add('active');
            }
        });
    }

    function goToStep(step) {
        // Ocultar todos los pasos
        document.querySelectorAll('.form-step').forEach(stepDiv => {
            stepDiv.classList.remove('active');
        });

        // Mostrar el paso actual
        document.getElementById(`step-${step}`).classList.add('active');
        currentStep = step;
        updateStepIndicator(step);
    }

    function validateStep(step) {
        let isValid = true;
        const currentForm = document.getElementById(`step-${step}`);
        const requiredInputs = currentForm.querySelectorAll('[required]');

        requiredInputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.style.borderColor = 'red';
            } else {
                input.style.borderColor = '#ddd';
            }
        });

        return isValid;
    }

    function nextStep(step) {
        if (validateStep(step)) {
            if (step < totalSteps) {
                goToStep(step + 1);
            }
        } else {
            alert('Por favor, rellena todos los campos obligatorios.');
        }
    }

    function prevStep(step) {
        if (step > 1) {
            goToStep(step - 1);
        }
    }

    // --- Funciones específicas del Paso 2 (Sugerencias de Lugar) ---

    // Base de datos simulada de lugares turísticos
    const locationData = {
        'La Libertad': ['Playa El Tunco', 'Playa El Sunzal', 'Puerto de La Libertad', 'Parque Nacional Walter Thilo Deininger'],
        'Ahuachapán': ['Ruta de las Flores (Apaneca)', 'Termales de Santa Teresa', 'El Imposible', 'Laguna El Espino'],
        'Santa Ana': ['Volcán de Santa Ana', 'Lago de Coatepeque', 'Ruinas de Tazumal', 'Teatro Nacional'],
        'San Salvador': ['Catedral Metropolitana', 'Palacio Nacional', 'Centro Histórico', 'Puerta del Diablo'],
        'Usulután': ['Astro Tour El Tamarindo', 'Jiquilisco', 'Alegría (La Laguna)'],
        // Agrega más departamentos y lugares...
    };

    const lugarInput = document.getElementById('lugar');
    const departamentoSelect = document.getElementById('departamento');
    const suggestionsBox = document.getElementById('location-suggestions');

    // Función que se ejecuta al cambiar el departamento
    function updateLocationSuggestions() {
        lugarInput.value = ''; // Limpiar el input al cambiar de departamento
        suggestionsBox.classList.add('hidden');
    }

    // Función para mostrar las sugerencias basadas en el departamento y la búsqueda
    lugarInput.addEventListener('input', () => {
        const selectedDept = departamentoSelect.value;
        const searchText = lugarInput.value.toLowerCase().trim();
        suggestionsBox.innerHTML = '';

        if (!selectedDept || searchText.length < 2) {
            suggestionsBox.classList.add('hidden');
            return;
        }

        const places = locationData[selectedDept] || [];
        const filteredSuggestions = places.filter(place =>
            place.toLowerCase().includes(searchText)
        );

        if (filteredSuggestions.length > 0) {
            filteredSuggestions.forEach(suggestion => {
                const item = document.createElement('div');
                item.className = 'suggestion-item';
                item.textContent = suggestion;
                item.addEventListener('click', () => {
                    lugarInput.value = suggestion;
                    suggestionsBox.classList.add('hidden');
                });
                suggestionsBox.appendChild(item);
            });
            suggestionsBox.classList.remove('hidden');
        } else {
            suggestionsBox.classList.add('hidden');
        }
    });

    // Ocultar sugerencias si se hace clic fuera
    document.addEventListener('click', (e) => {
        if (!document.querySelector('.location-search-container').contains(e.target)) {
            suggestionsBox.classList.add('hidden');
        }
    });

    // --- Función de envío final ---

    function submitForm() {
        if (validateStep(totalSteps)) {
            // Aquí puedes recopilar todos los datos
            const formData = new FormData(document.getElementById('reservaForm'));
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });

            // Muestra los datos recopilados en consola (simulación de envío)
            console.log("Formulario de Reserva Enviado:", data);

            // Mensaje de éxito
            alert('¡Reserva Finalizada con Éxito! Pronto te contactaremos para confirmar.');

            // Opcional: Redirigir o limpiar el formulario
            document.getElementById('reservaForm').reset();
            goToStep(1); // Volver al primer paso
        } else {
            alert('Por favor, completa los campos adicionales requeridos.');
        }
    }
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
