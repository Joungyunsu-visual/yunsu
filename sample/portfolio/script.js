/* =============================================
   JNGYS Portfolio — Minimal Script
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

    // Scroll fade-in
    const fadeEls = document.querySelectorAll('.fade-in');
    const obs = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.style.opacity = '1';
                e.target.style.transform = 'translateY(0)';
                obs.unobserve(e.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    fadeEls.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        obs.observe(el);
    });

    // Smooth scroll nav
    document.querySelectorAll('.nav-link[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Logo → top
    const logo = document.querySelector('.nav-logo');
    if (logo) {
        logo.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Language / 번역 토글 & Blur Reveal Effect
    const toggle = document.getElementById('lang-toggle');
    let currentLang = 'en'; // default

    // Translatable elements
    const translatables = document.querySelectorAll('[data-en][data-ko]');
    const heroDesc = document.querySelector('.hero-desc');

    function blurReveal(element, text) {
        element.innerHTML = '';

        // Split text into words and space them properly
        const words = text.split(' ');

        words.forEach((word) => {
            const span = document.createElement('span');
            span.innerHTML = word + '&nbsp;'; // 공백 유지
            span.style.display = 'inline-block';
            span.style.opacity = '0'; // 처음에 안 보임

            // 각 단어마다 무작위 지연 시간 생성 (0초 ~ 1.5초 사이)
            const randomDelay = Math.random() * 1.5;

            // 단순 디졸브(투명도 변화) 효과로 부드럽게 나타남
            span.style.transition = `opacity 1.5s ease ${randomDelay}s`;
            element.appendChild(span);

            // Trigger animation in the next frame
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    span.style.opacity = '1';
                });
            });
        });
    }

    // Initial Animation
    if (heroDesc) {
        blurReveal(heroDesc, heroDesc.getAttribute(`data-${currentLang}`));
    }

    toggle.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'ko' : 'en';
        toggle.textContent = currentLang === 'en' ? 'KR' : 'EN';

        translatables.forEach(el => {
            // 히어로 텍스트는 단어별 흐림 해제, 그 외는 즉시 변경
            if (el.classList.contains('hero-desc')) {
                blurReveal(el, el.getAttribute(`data-${currentLang}`));
            } else {
                el.textContent = el.getAttribute(`data-${currentLang}`);
            }
        });
    });

});
