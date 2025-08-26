// Gerenciamento de estado
let currentCV = null;

// Elementos DOM
const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanes = document.querySelectorAll('.tab-pane');

// Navegação por abas
tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const targetTab = btn.getAttribute('data-tab');
        
        // Remove classe active de todos os botões e painéis
        tabBtns.forEach(b => b.classList.remove('active'));
        tabPanes.forEach(p => p.classList.remove('active'));
        
        // Adiciona classe active ao botão clicado e painel correspondente
        btn.classList.add('active');
        document.getElementById(targetTab).classList.add('active');
    });
});

// Carregar currículo salvo ao iniciar
document.addEventListener('DOMContentLoaded', () => {
    // Funcionalidades do LinkedIn serão carregadas aqui
});

// Links sociais já estão configurados no HTML
// Steam: https://steamcommunity.com/id/SrCastiell
// Instagram: https://www.instagram.com/matheuswenes/
// GitHub: https://github.com/matheusbwv
// Spotify: https://open.spotify.com/user/matheus.wenes
// LinkedIn: https://www.linkedin.com/in/matheuswenes/

// Funcionalidades do LinkedIn
document.addEventListener('DOMContentLoaded', () => {
    // Adicionar funcionalidade para os botões do LinkedIn
    const linkedinButtons = document.querySelectorAll('.linkedin-btn');
    linkedinButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            showNotification('🔗 Redirecionando para o LinkedIn...', 'info');
        });
    });
    

});

// Funcionalidades do LinkedIn implementadas no event listener acima

// Sistema de notificações
function showNotification(message, type = 'info') {
    // Remover notificação existente
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Criar nova notificação
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Adicionar estilos
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#1db954' : type === 'error' ? '#e4405f' : '#00adee'};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        z-index: 1000;
        animation: slideIn 0.3s ease-out;
        max-width: 300px;
    `;
    
    // Adicionar ao DOM
    document.body.appendChild(notification);
    
    // Fechar notificação
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.remove();
    });
    
    // Auto-remover após 5 segundos
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// Adicionar estilos CSS para notificações
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 15px;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        font-size: 20px;
        cursor: pointer;
        padding: 0;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: background 0.3s ease;
    }
    
    .notification-close:hover {
        background: rgba(255,255,255,0.2);
    }
    
    .notification-message {
        flex: 1;
        font-family: 'BigBlueTerm', 'Fira Code', 'JetBrains Mono', 'Courier New', monospace;
    }
`;

document.head.appendChild(notificationStyles);

// Efeitos visuais adicionais
document.addEventListener('DOMContentLoaded', () => {
    // Adicionar efeito de partículas ao fundo
    createParticles();
    
    // Adicionar efeito de hover nos links sociais
    addHoverEffects();
    
    // Adicionar funcionalidade especial para o Spotify
    const spotifyLink = document.querySelector('.social-link.spotify');
    if (spotifyLink) {
        spotifyLink.addEventListener('click', () => {
            showNotification('🎵 Redirecionando para o Spotify...', 'info');
        });
    }
    
    // Adicionar funcionalidade para os cards de playlist
    const playlistCards = document.querySelectorAll('.playlist-card');
    playlistCards.forEach(card => {
        card.addEventListener('click', () => {
            card.style.transform = 'scale(0.95)';
            setTimeout(() => {
                card.style.transform = 'scale(1)';
            }, 150);
        });
    });
});

// Função para criar partículas de fundo
function createParticles() {
    const particleContainer = document.createElement('div');
    particleContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
    `;
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(255, 255, 255, 0.6);
            border-radius: 50%;
            opacity: ${Math.random() * 0.3 + 0.1};
            animation: float ${Math.random() * 10 + 10}s linear infinite;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
        `;
        
        particleContainer.appendChild(particle);
    }
    
    document.body.appendChild(particleContainer);
    
    // Adicionar keyframes para animação
    const particleKeyframes = document.createElement('style');
    particleKeyframes.textContent = `
        @keyframes float {
            0% {
                transform: translateY(0px) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-100vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    
    document.head.appendChild(particleKeyframes);
}

// Função para adicionar efeitos de hover
function addHoverEffects() {
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'scale(1.05) translateY(-5px)';
        });
        
        link.addEventListener('mouseleave', () => {
            link.style.transform = 'scale(1) translateY(0)';
        });
    });
}

// Função para limpar dados (útil para desenvolvimento)
function clearAllData() {
    if (confirm('Tem certeza que deseja limpar todos os dados salvos?')) {
        // Limpar dados do localStorage se necessário
        location.reload();
    }
}

// Adicionar função de limpeza ao console para desenvolvimento
if (typeof console !== 'undefined') {
    console.log('Para limpar todos os dados, use: clearAllData()');
}
