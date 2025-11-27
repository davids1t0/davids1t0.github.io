document.addEventListener('DOMContentLoaded', function() {
    // Sistema de pestañas
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');

    tabLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remover clase active de todos
            tabLinks.forEach(l => l.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Agregar clase active al link clickeado
            this.classList.add('active');
            
            // Mostrar contenido correspondiente
            const target = this.getAttribute('href');
            document.querySelector(target).classList.add('active');
            
            // Efecto de sonido (opcional)
            playTabSound();
        });
    });

    // Copiar IP
    const copyButton = document.querySelector('.copy-ip');
    if (copyButton) {
        copyButton.addEventListener('click', function() {
            const ip = document.querySelector('.ip').textContent;
            navigator.clipboard.writeText(ip).then(() => {
                const originalText = this.textContent;
                this.textContent = '✓ Copiada!';
                this.style.background = '#00ff88';
                
                setTimeout(() => {
                    this.textContent = originalText;
                    this.style.background = '';
                }, 2000);
            });
        });
    }

    // Efectos hover para cards
    const rangoCards = document.querySelectorAll('.rango-card');
    rangoCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Botones de compra con efectos
    const comprarButtons = document.querySelectorAll('.comprar-btn');
    comprarButtons.forEach(button => {
        button.addEventListener('click', function() {
            const rango = this.closest('.rango-card').querySelector('h3').textContent;
            
            // Efecto visual
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
            
            // Simulación de compra
            showPurchaseModal(rango);
        });
    });

    // Contador de jugadores animado
    function updatePlayerCount() {
        const counter = document.getElementById('player-count');
        if (counter) {
            const targetCount = Math.floor(Math.random() * 50) + 20; // Simulación
            animateCounter(counter, targetCount);
        }
    }

    function animateCounter(element, target) {
        let current = 0;
        const increment = target / 30;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current);
        }, 50);
    }

    // Modal de compra
    function showPurchaseModal(rango) {
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
        `;
        
        modal.innerHTML = `
            <div style="
                background: linear-gradient(145deg, #1a1a1a, #0d0d0d);
                padding: 2rem;
                border-radius: 20px;
                border: 2px solid #00ff88;
                text-align: center;
                max-width: 400px;
                width: 90%;
            ">
                <h3 style="color: #00ff88; margin-bottom: 1rem;">¡Excelente Elección!</h3>
                <p>Estás adquiriendo el rango: <strong>${rango}</strong></p>
                <p style="margin: 1rem 0; opacity: 0.8;">Serás redirigido a nuestra tienda segura...</p>
                <button onclick="this.closest('div').parentElement.remove()" style="
                    background: #00ff88;
                    color: black;
                    border: none;
                    padding: 0.75rem 2rem;
                    border-radius: 25px;
                    cursor: pointer;
                    font-weight: bold;
                ">Continuar</button>
            </div>
        `;
        
        document.body.appendChild(modal);
    }

    // Crear partículas de fondo
    function createParticles() {
        const container = document.querySelector('.background-animation');
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.cssText = `
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation-delay: ${Math.random() * 6}s;
                opacity: ${Math.random() * 0.5 + 0.2};
            `;
            container.appendChild(particle);
        }
    }

    // Efecto de sonido para pestañas (opcional)
    function playTabSound() {
        // Puedes agregar un sonido aquí si quieres
        console.log('Tab changed');
    }

    // Inicializar
    updatePlayerCount();
    createParticles();
    setInterval(updatePlayerCount, 30000);
});

// Efecto de escritura para el título
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Iniciar efecto de escritura cuando la página cargue
window.addEventListener('load', function() {
    const title = document.querySelector('.hero h1');
    if (title) {
        const originalText = title.textContent;
        typeWriter(title, originalText, 150);
    }
});
