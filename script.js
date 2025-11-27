// Navegación por pestañas
document.addEventListener('DOMContentLoaded', function() {
    // Sistema de pestañas
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');

    tabLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remover clase active de todos los links y contenidos
            tabLinks.forEach(l => l.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Agregar clase active al link clickeado
            this.classList.add('active');
            
            // Mostrar el contenido correspondiente
            const target = this.getAttribute('href');
            document.querySelector(target).classList.add('active');
        });
    });

    // Copiar IP al portapapeles
    const copyButton = document.querySelector('.copy-ip');
    if (copyButton) {
        copyButton.addEventListener('click', function() {
            const ip = document.querySelector('.ip').textContent;
            navigator.clipboard.writeText(ip).then(() => {
                const originalText = this.textContent;
                this.textContent = '¡IP Copiada!';
                setTimeout(() => {
                    this.textContent = originalText;
                }, 2000);
            });
        });
    }

    // Efectos de hover para las cards de rangos
    const rangoCards = document.querySelectorAll('.rango-card');
    rangoCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 10px 25px rgba(76, 175, 80, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
        });
    });

    // Botones de compra
    const comprarButtons = document.querySelectorAll('.comprar-btn');
    comprarButtons.forEach(button => {
        button.addEventListener('click', function() {
            const rango = this.parentElement.querySelector('h3').textContent;
            alert(`¡Gracias por tu interés en el rango ${rango}! Serás redirigido a la tienda.`);
            // Aquí puedes redirigir a tu tienda de PayPal/Tebex
        });
    });
});

// Contador de jugadores online (ejemplo)
function actualizarContadorJugadores() {
    // Esto es un ejemplo - necesitarías una API de tu servidor
    const contador = document.getElementById('player-count');
    if (contador) {
        // Simular actualización
        contador.textContent = Math.floor(Math.random() * 50) + 10;
    }
}

// Actualizar cada 30 segundos
setInterval(actualizarContadorJugadores, 30000);
