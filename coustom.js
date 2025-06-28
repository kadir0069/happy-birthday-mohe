document.addEventListener('DOMContentLoaded', function() {
    // Create floating elements
    createFloatingElements();
    
    // Scroll-triggered animations
    setupScrollAnimations();
    
    // Button hover effects
    document.querySelector('.magic-button').addEventListener('click', function() {
        createFireworks();
    });
});

function createFloatingElements() {
    const container = document.querySelector('.magical-background');
    
    // Create hearts
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '❤';
        heart.style.color = `hsl(${Math.random() * 60 + 330}, 100%, 70%)`;
        heart.style.fontSize = `${Math.random() * 20 + 10}px`;
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.top = `${Math.random() * 100}vh`;
        container.appendChild(heart);
        
        animateHeart(heart);
    }
    
    // Create petals
    for (let i = 0; i < 50; i++) {
        const petal = document.createElement('div');
        petal.className = 'petal';
        petal.style.background = `hsl(${Math.random() * 20 + 340}, 100%, 85%)`;
        petal.style.width = `${Math.random() * 15 + 5}px`;
        petal.style.height = `${Math.random() * 15 + 5}px`;
        petal.style.borderRadius = '50% 0 50% 50%';
        petal.style.transform = `rotate(${Math.random() * 360}deg)`;
        petal.style.left = `${Math.random() * 100}vw`;
        petal.style.top = `${Math.random() * 100}vh`;
        container.appendChild(petal);
        
        animatePetal(petal);
    }
    
    // Create balloons
    for (let i = 0; i < 15; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.background = `hsl(${Math.random() * 360}, 100%, 75%)`;
        balloon.style.width = `${Math.random() * 40 + 30}px`;
        balloon.style.height = `${Math.random() * 60 + 40}px`;
        balloon.style.borderRadius = '50%';
        balloon.style.left = `${Math.random() * 100}vw`;
        balloon.style.bottom = '-100px';
        container.appendChild(balloon);
        
        animateBalloon(balloon);
    }
}

function animateHeart(element) {
    gsap.to(element, {
        y: `+=${Math.random() * 100 + 50}`,
        x: `+=${(Math.random() - 0.5) * 100}`,
        rotation: Math.random() * 360,
        opacity: 0,
        duration: Math.random() * 10 + 10,
        ease: 'none',
        onComplete: () => {
            element.style.top = '-50px';
            element.style.left = `${Math.random() * 100}vw`;
            gsap.set(element, { opacity: 1 });
            animateHeart(element);
        }
    });
}

function setupScrollAnimations() {
    // Setup GSAP scroll triggers for memories
    gsap.utils.toArray('.memory').forEach((memory, i) => {
        gsap.from(memory, {
            scrollTrigger: {
                trigger: memory,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power2.out'
        });
    });
}

function createFireworks() {
    // Create explosion effect when button is clicked
    const container = document.querySelector('.magical-background');
    
    for (let i = 0; i < 50; i++) {
        const spark = document.createElement('div');
        spark.className = 'sparkle';
        spark.style.background = `hsl(${Math.random() * 60 + 300}, 100%, 70%)`;
        spark.style.width = '5px';
        spark.style.height = '5px';
        spark.style.borderRadius = '50%';
        spark.style.left = '50%';
        spark.style.top = '50%';
        container.appendChild(spark);
        
        gsap.to(spark, {
            x: `${(Math.random() - 0.5) * 300}`,
            y: `${(Math.random() - 0.5) * 300}`,
            opacity: 0,
            scale: Math.random() * 2 + 1,
            duration: 1,
            onComplete: () => spark.remove()
        });
    }
}