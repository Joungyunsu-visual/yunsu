/* ===== JOUNG YUNSU Portfolio — Script ===== */

document.addEventListener('DOMContentLoaded', () => {
    initHeroImage();
    initKineticTypo();
    initNavScroll();
    initScrollReveal();
});

/* --- Hero image load transition --- */
function initHeroImage() {
    const img = document.getElementById('heroImage');
    if (img.complete) {
        img.classList.add('loaded');
    } else {
        img.addEventListener('load', () => img.classList.add('loaded'));
    }
}

/* --- Kinetic Typography: distort words on mousemove --- */
function initKineticTypo() {
    const words = document.querySelectorAll('.kinetic-word');
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 2;   // -1 to 1
        mouseY = (e.clientY / window.innerHeight - 0.5) * 2;  // -1 to 1
    });

    function animate() {
        // Smooth lerp
        currentX += (mouseX - currentX) * 0.08;
        currentY += (mouseY - currentY) * 0.08;

        words.forEach((word) => {
            const speed = parseFloat(word.dataset.speed) || 0.01;
            const moveX = currentX * speed * 600;
            const moveY = currentY * speed * 200;
            const skewX = currentX * speed * 40;
            const scaleX = 1 + Math.abs(currentX * speed) * 0.15;

            word.style.transform =
                `translate(${moveX}px, ${moveY}px) skewX(${skewX}deg) scaleX(${scaleX})`;
        });

        requestAnimationFrame(animate);
    }

    // Start after entrance animation finishes
    setTimeout(() => requestAnimationFrame(animate), 800);
}

/* --- Nav scroll state --- */
function initNavScroll() {
    const nav = document.getElementById('nav');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        if (scrollY > 80) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
        lastScroll = scrollY;
    }, { passive: true });
}

/* --- Scroll reveal for bento cards --- */
function initScrollReveal() {
    const cards = document.querySelectorAll('.bento-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Stagger delay based on card position
                const card = entry.target;
                const siblings = [...card.parentElement.children];
                const i = siblings.indexOf(card);
                setTimeout(() => {
                    card.classList.add('visible');
                }, i * 120);
                observer.unobserve(card);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -60px 0px'
    });

    cards.forEach((card) => observer.observe(card));
}
