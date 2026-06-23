// ============================================
// BIRTHDAY WEBSITE - JAVASCRIPT
// Interactive Birthday Gift Experience
// ============================================

// Sweet memories for the memory jar
const sweetMessages = [
    "You are my favorite person.",
    "I'll always be proud of you.",
    "Never stop smiling.",
    "You deserve every happiness.",
    "I'm lucky to have you.",
    "Your laugh is contagious.",
    "You make everything better.",
    "Thank you for being you.",
    "You're incredibly strong.",
    "I believe in you.",
    "Your kindness inspires me.",
    "You're worth it.",
    "Have patience with yourself.",
    "You're more capable than you think.",
    "Your dreams matter.",
    "You deserve good things.",
    "There's no one like you.",
    "You're a gift to this world.",
    "I'm here for you always.",
    "You make me smile."
];

// 16 reasons I love you
const reasons = [
    { emoji: "😊", title: "Your Smile", message: "It lights up my entire world and makes every moment special." },
    { emoji: "❤️", title: "Your Kindness", message: "The way you care for others shows how beautiful your heart is." },
    { emoji: "😄", title: "Your Laugh", message: "It's the most beautiful sound and instantly lifts my spirits." },
    { emoji: "🧠", title: "Your Intelligence", message: "You see the world in such a unique and thoughtful way." },
    { emoji: "🤝", title: "Your Support", message: "You're always there when I need you most." },
    { emoji: "✨", title: "Your Personality", message: "You make everything around you shine brighter." },
    { emoji: "💪", title: "Your Strength", message: "You inspire me to be stronger every single day." },
    { emoji: "🎨", title: "Your Creativity", message: "The way you see beauty in everything is magical." },
    { emoji: "🌟", title: "Your Direction", message: "You know where you're going and how to get there." },
    { emoji: "💭", title: "Your Compassion", message: "You feel deeply and care genuinely about others." },
    { emoji: "👑", title: "Your Confidence", message: "The way you carry yourself is so inspiring." },
    { emoji: "🎵", title: "Your Voice", message: "When you speak, I always want to listen." },
    { emoji: "🌸", title: "Your Grace", message: "Everything you do has such elegant beauty to it." },
    { emoji: "💝", title: "Your Love", message: "The way you love makes me feel truly cherished." },
    { emoji: "🌈", title: "Your Brightness", message: "You bring color to my world in countless ways." },
    { emoji: "🎁", title: "Your Presence", message: "Just having you near makes everything feel right." }
];

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initializeWebsite();
});

function initializeWebsite() {
    // Setup open screen
    setupOpeningScreen();
    
    // Setup background elements after opening
    setTimeout(() => {
        createFloatingElements();
        setupStars();
    }, 2500);
    
    // Setup interactive sections
    setupLetterSection();
    setupMemoryJar();
    setupLoveMeter();
    setupCake();
    setupReasons();
    setupSurprise();
    
    // Global cursor effects
    setupCursorEffects();
    setupScrollAnimations();
}

// ============================================
// OPENING SCREEN
// ============================================

function setupOpeningScreen() {
    const giftBox = document.getElementById('giftBox');
    const openingScreen = document.getElementById('openingScreen');
    const mainExperience = document.getElementById('mainExperience');
    const floatingHeartsOpening = document.getElementById('floatingHeartsOpening');
    
    // Create floating hearts in opening screen
    createFloatingHeartsInContainer(floatingHeartsOpening, 10);
    
    giftBox.addEventListener('click', () => {
        // Trigger gift opening animation
        giftBox.style.animation = 'none';
        setTimeout(() => {
            giftBox.style.animation = 'giftOpen 0.8s ease-out forwards';
        }, 10);
        
        // Create confetti
        createConfetti(window.innerWidth / 2, window.innerHeight / 2);
        createMagicalSparkles();
        
        // Fade out opening screen
        setTimeout(() => {
            openingScreen.classList.add('fade-out');
            mainExperience.style.display = 'block';
            
            // Trigger all animations
            document.querySelectorAll('.letter').forEach((letter, index) => {
                letter.style.animation = `letterDrop 0.6s ease-out ${letter.style.getPropertyValue('--delay')} forwards`;
            });
        }, 400);
    });
}

function createFloatingHeartsInContainer(container, count) {
    const hearts = ['❤️', '💕', '💖', '💝', '💗'];
    
    for (let i = 0; i < count; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        
        const randomX = Math.random() * 100;
        const randomDelay = Math.random() * 2;
        const randomDuration = 6 + Math.random() * 4;
        
        heart.style.left = randomX + '%';
        heart.style.top = '100%';
        heart.style.animation = `floatUp ${randomDuration}s ease-in infinite`;
        heart.style.animationDelay = randomDelay + 's';
        
        container.appendChild(heart);
    }
}

// ============================================
// FLOATING BACKGROUND ELEMENTS
// ============================================

function createFloatingElements() {
    createFloatingHearts();
    createFloatingPetals();
    createSparkles();
    createBalloons();
    createButterflies();
    createClouds();
}

function createFloatingHearts() {
    const container = document.getElementById('floatingHearts');
    const hearts = ['❤️', '💕', '💖', '💝', '💗'];
    const count = 15;
    
    for (let i = 0; i < count; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        
        const randomX = Math.random() * 100;
        const randomDelay = Math.random() * 3;
        const randomDuration = 8 + Math.random() * 4;
        
        heart.style.left = randomX + '%';
        heart.style.top = '100%';
        heart.style.animation = `floatUp ${randomDuration}s ease-in infinite`;
        heart.style.animationDelay = randomDelay + 's';
        
        container.appendChild(heart);
    }
}

function createFloatingPetals() {
    const container = document.getElementById('floatingPetals');
    const petals = ['🌸', '🌺', '🌼', '🌷', '🌹'];
    const count = 12;
    
    for (let i = 0; i < count; i++) {
        const petal = document.createElement('div');
        petal.className = 'petal';
        petal.textContent = petals[Math.floor(Math.random() * petals.length)];
        
        const randomX = Math.random() * 100;
        const randomDelay = Math.random() * 4;
        const randomDuration = 10 + Math.random() * 5;
        
        petal.style.left = randomX + '%';
        petal.style.top = '-50px';
        petal.style.animation = `floatDown ${randomDuration}s ease-in infinite`;
        petal.style.animationDelay = randomDelay + 's';
        
        container.appendChild(petal);
    }
}

function createSparkles() {
    const container = document.getElementById('sparklesContainer');
    const count = 30;
    
    for (let i = 0; i < count; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        
        const randomX = Math.random() * 100;
        const randomY = Math.random() * 100;
        const randomDelay = Math.random() * 3;
        const randomDuration = 3 + Math.random() * 2;
        
        sparkle.style.left = randomX + '%';
        sparkle.style.top = randomY + '%';
        sparkle.style.animation = `twinkle ${randomDuration}s infinite`;
        sparkle.style.animationDelay = randomDelay + 's';
        
        container.appendChild(sparkle);
    }
}

function createBalloons() {
    const container = document.getElementById('floatingBalloons');
    const colors = ['#ff69b4', '#ffb6d9', '#ffc0d9', '#ffd700', '#e0b0ff'];
    const count = 6;
    
    for (let i = 0; i < count; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.background = colors[i % colors.length];
        
        const randomX = Math.random() * 100;
        const randomDelay = Math.random() * 3;
        const randomDuration = 15 + Math.random() * 8;
        
        balloon.style.left = randomX + '%';
        balloon.style.top = '100%';
        balloon.style.animation = `floatBalloon ${randomDuration}s ease-in infinite`;
        balloon.style.animationDelay = randomDelay + 's';
        
        container.appendChild(balloon);
    }
}

function createButterflies() {
    const container = document.getElementById('floatingButterflies');
    const count = 4;
    
    for (let i = 0; i < count; i++) {
        const butterfly = document.createElement('div');
        butterfly.className = 'butterfly';
        butterfly.textContent = '🦋';
        
        const randomX = Math.random() * 100;
        const randomDelay = Math.random() * 5;
        
        butterfly.style.left = randomX + '%';
        butterfly.style.top = Math.random() * 50 + '%';
        butterfly.style.animation = `floatButterfly 20s ease-in-out infinite`;
        butterfly.style.animationDelay = randomDelay + 's';
        
        container.appendChild(butterfly);
    }
}

function createClouds() {
    const container = document.getElementById('animatedClouds');
    const count = 3;
    
    for (let i = 0; i < count; i++) {
        const cloud = document.createElement('div');
        cloud.className = 'cloud';
        cloud.textContent = '☁️';
        
        const randomY = Math.random() * 30 + '%';
        const randomDelay = Math.random() * 10;
        const randomDuration = 20 + Math.random() * 15;
        
        cloud.style.top = randomY;
        cloud.style.left = '-100px';
        cloud.style.animation = `floatCloud ${randomDuration}s linear infinite`;
        cloud.style.animationDelay = randomDelay + 's';
        
        container.appendChild(cloud);
    }
}

function setupStars() {
    const container = document.getElementById('starsBackground');
    const count = 20;
    
    for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.className = 'sparkle';
        
        const randomX = Math.random() * 100;
        const randomY = Math.random() * 100;
        
        star.style.left = randomX + '%';
        star.style.top = randomY + '%';
        star.style.animation = `twinkle ${2 + Math.random()}s ease-in-out infinite`;
        star.style.animationDelay = Math.random() * 2 + 's';
        
        container.appendChild(star);
    }
}

// ============================================
// SECTION 1: LETTER
// ============================================

function setupLetterSection() {
    const envelope = document.getElementById('envelope');
    const letterButton = document.getElementById('letterButton');
    const letterContent = document.getElementById('letterContent');
    
    letterButton.addEventListener('click', () => {
        if (!envelope.classList.contains('open')) {
            envelope.classList.add('open');
            letterButton.style.display = 'none';
            letterContent.style.display = 'block';
            
            // Add sparkles
            createSparkles();
        }
    });
}

// ============================================
// SECTION 2: MEMORY JAR
// ============================================

function setupMemoryJar() {
    const jar = document.getElementById('memoryJar');
    const jarMessage = document.getElementById('jarMessage');
    let usedMessages = [];
    
    // Create hearts in jar
    createJarHearts();
    
    jar.addEventListener('click', () => {
        if (!jar.classList.contains('open')) {
            jar.classList.add('open');
        }
        
        // Get random message
        let randomIndex = Math.floor(Math.random() * sweetMessages.length);
        
        // Avoid repeats
        if (usedMessages.length === sweetMessages.length) {
            usedMessages = [];
        }
        
        while (usedMessages.includes(randomIndex)) {
            randomIndex = Math.floor(Math.random() * sweetMessages.length);
        }
        
        usedMessages.push(randomIndex);
        
        jarMessage.textContent = `"${sweetMessages[randomIndex]}"`;
        jarMessage.style.animation = 'none';
        setTimeout(() => {
            jarMessage.style.animation = 'fadeInUp 0.6s ease-out forwards';
        }, 10);
    });
}

function createJarHearts() {
    const jarHearts = document.getElementById('jarHearts');
    const hearts = ['❤️', '💕', '💖'];
    
    for (let i = 0; i < 5; i++) {
        const heart = document.createElement('div');
        heart.className = 'jar-heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        
        const randomX = (Math.random() - 0.5) * 80;
        const randomDelay = Math.random() * 4;
        const randomDuration = 3 + Math.random() * 2;
        
        heart.style.left = 'calc(50% + ' + randomX + 'px)';
        heart.style.top = '50%';
        heart.style.animation = `floatInJar ${randomDuration}s ease-in-out infinite`;
        heart.style.animationDelay = randomDelay + 's';
        
        jarHearts.appendChild(heart);
    }
}

// ============================================
// SECTION 3: LOVE METER
// ============================================

function setupLoveMeter() {
    const loveButton = document.getElementById('loveHeartButton');
    const lovePercent = document.getElementById('lovePercent');
    const loveMessage = document.getElementById('loveMessage');
    let count = 0;
    const maxClicks = 50;
    
    const messages = [
        "Loading infinite love...",
        "Still counting...",
        "No limit found.",
        "∞% LOVE",
        "You are everything to me.",
        "I could never love you enough."
    ];
    
    loveButton.addEventListener('click', () => {
        count++;
        
        if (count <= maxClicks) {
            const percent = Math.min((count / maxClicks) * 100, 100);
            lovePercent.textContent = Math.round(percent) + '%';
        } else {
            lovePercent.textContent = '∞%';
        }
        
        // Update message
        if (count > maxClicks) {
            const messageIndex = Math.min(Math.floor((count - maxClicks) / 5), messages.length - 1);
            loveMessage.textContent = messages[messageIndex];
        } else if (count === maxClicks) {
            loveMessage.textContent = messages[0];
        }
        
        // Pulse animation
        const heartIcon = loveButton.querySelector('.heart-icon');
        heartIcon.style.animation = 'none';
        setTimeout(() => {
            heartIcon.style.animation = 'heartPulse 0.4s ease-out';
        }, 10);
        
        // Create small hearts
        createHeartBurst(loveButton.getBoundingClientRect());
    });
}

// ============================================
// SECTION 4: CAKE
// ============================================

function setupCake() {
    const candlesContainer = document.getElementById('candlesContainer');
    const cakeMessage = document.getElementById('cakeMessage');
    let candlesBlown = 0;
    
    // Create 16 candles
    for (let i = 0; i < 16; i++) {
        const candle = document.createElement('div');
        candle.className = 'candle';
        candle.id = `candle-${i}`;
        candlesContainer.appendChild(candle);
        
        candle.addEventListener('click', () => {
            if (!candle.classList.contains('blown')) {
                candle.classList.add('blown');
                candlesBlown++;
                
                // Create small effect
                createSparklesAt(candle.getBoundingClientRect());
                
                if (candlesBlown === 16) {
                    // All candles blown
                    setTimeout(() => {
                        createConfetti(window.innerWidth / 2, window.innerHeight / 2);
                        cakeMessage.textContent = '🎉 Make a wish! 🌸';
                        cakeMessage.style.animation = 'fadeInUp 0.6s ease-out forwards';
                    }, 300);
                }
            }
        });
    }
}

// ============================================
// SECTION 5: REASONS
// ============================================

function setupReasons() {
    const reasonsGrid = document.getElementById('reasonsGrid');
    
    reasons.forEach((reason, index) => {
        const card = document.createElement('div');
        card.className = 'reason-card';
        card.innerHTML = `
            <div class="reason-inner">
                <div class="reason-front">${reason.emoji}</div>
                <div class="reason-back">${reason.title}<br><br>${reason.message}</div>
            </div>
        `;
        
        card.addEventListener('click', () => {
            const inner = card.querySelector('.reason-inner');
            inner.classList.toggle('flip');
        });
        
        reasonsGrid.appendChild(card);
    });
}

// ============================================
// SECTION 6: SURPRISE
// ============================================

function setupSurprise() {
    const surpriseButton = document.getElementById('surpriseButton');
    const surpriseContent = document.getElementById('surpriseContent');
    const surpriseFireworks = document.getElementById('surpriseFireworks');
    
    surpriseButton.addEventListener('click', () => {
        surpriseButton.style.display = 'none';
        surpriseContent.style.display = 'flex';
        
        // Create fireworks effect
        createSurpriseFireworks(surpriseFireworks);
        
        // Create falling hearts
        createFallingHearts();
        
        // Create rose petals
        createRosePetals();
    });
}

function createSurpriseFireworks(container) {
    const colors = ['#ff69b4', '#ffd700', '#ff1493', '#ffb6d9'];
    const count = 100;
    
    for (let i = 0; i < count; i++) {
        const firework = document.createElement('div');
        const emoji = ['✨', '💖', '🌟', '💝'][Math.floor(Math.random() * 4)];
        firework.textContent = emoji;
        firework.style.cssText = `
            position: absolute;
            width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        `;
        
        container.appendChild(firework);
        
        const angle = (Math.PI * 2 * i) / count;
        const distance = 100 + Math.random() * 200;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        const duration = 1.5 + Math.random() * 0.5;
        
        firework.animate([
            {
                transform: 'translate(-50%, -50%) scale(1)',
                opacity: 1
            },
            {
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(0)`,
                opacity: 0
            }
        ], {
            duration: duration * 1000,
            easing: 'ease-out'
        });
        
        setTimeout(() => firework.remove(), duration * 1000);
    }
}

function createFallingHearts() {
    const hearts = ['❤️', '💕', '💖', '💝'];
    
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('div');
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.cssText = `
            position: fixed;
            left: ${Math.random() * 100}%;
            top: -50px;
            font-size: 1.5rem;
            pointer-events: none;
            z-index: 150;
        `;
        
        document.body.appendChild(heart);
        
        const duration = 3 + Math.random() * 2;
        const x = (Math.random() - 0.5) * 200;
        
        heart.animate([
            {
                transform: 'translateY(0) rotate(0deg)',
                opacity: 1
            },
            {
                transform: `translateY(${window.innerHeight + 100}px) translateX(${x}px) rotate(360deg)`,
                opacity: 0
            }
        ], {
            duration: duration * 1000,
            easing: 'ease-in'
        });
        
        setTimeout(() => heart.remove(), duration * 1000);
    }
}

function createRosePetals() {
    const petals = ['🌸', '🌺', '🌼'];
    
    for (let i = 0; i < 20; i++) {
        const petal = document.createElement('div');
        petal.textContent = petals[Math.floor(Math.random() * petals.length)];
        petal.style.cssText = `
            position: fixed;
            left: ${Math.random() * 100}%;
            top: -50px;
            font-size: 1.3rem;
            pointer-events: none;
            z-index: 150;
        `;
        
        document.body.appendChild(petal);
        
        const duration = 4 + Math.random() * 3;
        const x = (Math.random() - 0.5) * 200;
        
        petal.animate([
            {
                transform: 'translateY(0) rotate(0deg)',
                opacity: 1
            },
            {
                transform: `translateY(${window.innerHeight + 100}px) translateX(${x}px) rotate(720deg)`,
                opacity: 0
            }
        ], {
            duration: duration * 1000,
            easing: 'ease-in'
        });
        
        setTimeout(() => petal.remove(), duration * 1000);
    }
}

// ============================================
// CURSOR EFFECTS
// ============================================

function setupCursorEffects() {
    const cursorHearts = document.getElementById('cursorHearts');
    const hearts = ['❤️', '💕', '💖', '💝', '💗'];
    
    document.addEventListener('mousemove', (e) => {
        if (Math.random() > 0.8) {
            const heart = document.createElement('div');
            heart.className = 'cursor-heart';
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            
            cursorHearts.appendChild(heart);
            
            const x = (Math.random() - 0.5) * 100;
            const y = (Math.random() - 0.5) * 100;
            
            heart.style.left = e.clientX + 'px';
            heart.style.top = e.clientY + 'px';
            heart.style.setProperty('--tx', x + 'px');
            heart.style.setProperty('--ty', y + 'px');
            
            setTimeout(() => heart.remove(), 1500);
        }
    });
}

// ============================================
// SCROLL ANIMATIONS
// ============================================

function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

function createConfetti(x, y) {
    const container = document.getElementById('confettiContainer');
    const emojis = ['🎉', '🎊', '💖', '✨', '🌸'];
    
    for (let i = 0; i < 50; i++) {
        const piece = document.createElement('div');
        piece.className = 'confetti-piece';
        piece.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        piece.style.cssText = `
            left: ${x}px;
            top: ${y}px;
            font-size: ${0.8 + Math.random() * 0.8}rem;
        `;
        
        container.appendChild(piece);
        
        const angle = (Math.PI * 2 * i) / 50;
        const velocity = 5 + Math.random() * 10;
        const tx = Math.cos(angle) * velocity * 30;
        const ty = Math.sin(angle) * velocity * 30 - 50;
        
        piece.animate([
            {
                transform: 'translate(0, 0) rotate(0deg)',
                opacity: 1
            },
            {
                transform: `translate(${tx}px, ${ty}px) rotate(720deg)`,
                opacity: 0
            }
        ], {
            duration: 3000,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        });
        
        setTimeout(() => piece.remove(), 3000);
    }
}

function createMagicalSparkles() {
    const emojis = ['✨', '💖', '🌟', '💝'];
    
    for (let i = 0; i < 30; i++) {
        const sparkle = document.createElement('div');
        sparkle.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        sparkle.style.cssText = `
            position: fixed;
            left: ${window.innerWidth / 2}px;
            top: ${window.innerHeight / 2}px;
            pointer-events: none;
            z-index: 300;
            font-size: 1.5rem;
        `;
        
        document.body.appendChild(sparkle);
        
        const angle = (Math.PI * 2 * i) / 30;
        const distance = 50 + Math.random() * 150;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        
        sparkle.animate([
            {
                transform: 'translate(-50%, -50%) scale(1)',
                opacity: 1
            },
            {
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(0)`,
                opacity: 0
            }
        ], {
            duration: 1500,
            easing: 'ease-out'
        });
        
        setTimeout(() => sparkle.remove(), 1500);
    }
}

function createHeartBurst(bounds) {
    const posX = bounds.left + bounds.width / 2;
    const posY = bounds.top + bounds.height / 2;
    
    for (let i = 0; i < 8; i++) {
        const heart = document.createElement('div');
        heart.textContent = '❤️';
        heart.style.cssText = `
            position: fixed;
            left: ${posX}px;
            top: ${posY}px;
            pointer-events: none;
            z-index: 100;
            font-size: 1rem;
        `;
        
        document.body.appendChild(heart);
        
        const angle = (Math.PI * 2 * i) / 8;
        const distance = 40 + Math.random() * 30;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        
        heart.animate([
            {
                transform: 'translate(-50%, -50%) scale(1)',
                opacity: 1
            },
            {
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(0)`,
                opacity: 0
            }
        ], {
            duration: 1000,
            easing: 'ease-out'
        });
        
        setTimeout(() => heart.remove(), 1000);
    }
}

function createSparklesAt(bounds) {
    const posX = bounds.left + bounds.width / 2;
    const posY = bounds.top + bounds.height / 2;
    
    for (let i = 0; i < 5; i++) {
        const sparkle = document.createElement('div');
        sparkle.textContent = '✨';
        sparkle.style.cssText = `
            position: fixed;
            left: ${posX}px;
            top: ${posY}px;
            pointer-events: none;
            z-index: 100;
            font-size: 0.8rem;
        `;
        
        document.body.appendChild(sparkle);
        
        const angle = Math.random() * Math.PI * 2;
        const distance = 20 + Math.random() * 40;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        
        sparkle.animate([
            {
                transform: 'translate(-50%, -50%) scale(1)',
                opacity: 1
            },
            {
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(0)`,
                opacity: 0
            }
        ], {
            duration: 800,
            easing: 'ease-out'
        });
        
        setTimeout(() => sparkle.remove(), 800);
    }
}

// ============================================
// Log completion
// ============================================

console.log('🎂 Happy Birthday, Anindya Zia Shayma! ❤️');
