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

    // Work Modal Logic
    const workCards = document.querySelectorAll('.work-card');
    const modal = document.getElementById('work-modal');
    const modalBody = document.getElementById('modal-body');

    if (modal && modalBody) {
        const closeModal = modal.querySelector('.close-modal');

        workCards.forEach(card => {
            card.addEventListener('click', (e) => {
                e.preventDefault();
                const titleElement = card.querySelector('.work-title');
                const yearElement = card.querySelector('.work-year');

                const title = titleElement ? titleElement.textContent : 'Untitled';
                const year = yearElement ? yearElement.textContent : '';

                const imgEl = card.querySelector('img');
                const mainImgSrc = imgEl ? imgEl.src : '';

                let extraImages = [];
                const imagesAttr = card.getAttribute('data-images');
                if (imagesAttr) {
                    try {
                        extraImages = JSON.parse(imagesAttr);
                    } catch (e) { }
                }

                const desc = card.getAttribute('data-desc') || '';

                let credits = null;
                const creditsAttr = card.getAttribute('data-credits');
                if (creditsAttr) {
                    try {
                        credits = JSON.parse(creditsAttr);
                    } catch (e) { }
                }

                let contentHTML = `
                    <div class="modal-header">
                        <h3 class="modal-title">${title}</h3>
                        <p class="modal-year">${year}</p>
                    </div>
                `;

                if (desc) {
                    contentHTML += `<p class="modal-desc">${desc}</p>`;
                }

                if (credits) {
                    contentHTML += `<div class="modal-credits">`;
                    for (const [role, name] of Object.entries(credits)) {
                        contentHTML += `<div class="credit-item"><span class="credit-role">${role}</span> ${name}</div>`;
                    }
                    contentHTML += `</div>`;
                }

                if (mainImgSrc) {
                    contentHTML += `<img src="${mainImgSrc}" alt="${title}" class="modal-main-img">`;
                } else {
                    contentHTML += `<div class="modal-main-img" style="aspect-ratio:16/9; display:flex; align-items:center; justify-content:center; border: 1px dashed var(--glass-border); color: var(--text-muted);">No Main Image Available</div>`;
                }

                if (extraImages.length > 0) {
                    contentHTML += `<div class="modal-masonry">`;
                    extraImages.forEach(src => {
                        contentHTML += `<img src="${src}" class="masonry-item" alt="Extra Image" loading="lazy">`;
                    });
                    contentHTML += `</div>`;
                } else {
                    contentHTML += `
                        <div class="modal-extra-images">
                            <div class="modal-extra-img" style="border: 1px dashed var(--glass-border); display:flex; align-items:center; justify-content:center; color: var(--text-muted);">Extra Image Space 1</div>
                            <div class="modal-extra-img" style="border: 1px dashed var(--glass-border); display:flex; align-items:center; justify-content:center; color: var(--text-muted);">Extra Image Space 2</div>
                        </div>
                    `;
                }

                modalBody.innerHTML = contentHTML;

                modal.classList.add('show');
                document.body.style.overflow = 'hidden';

                // Attach click events for Lightbox
                const modalImages = modalBody.querySelectorAll('img');
                modalImages.forEach(img => {
                    img.addEventListener('click', () => {
                        openLightbox(img.src);
                    });
                });
            });
        });

        // Close functions for Work Modal
        const closeFunc = () => {
            modal.classList.remove('show');
            document.body.style.overflow = '';
        };

        if (closeModal) closeModal.addEventListener('click', closeFunc);

        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeFunc();
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                if (lightbox && lightbox.classList.contains('show')) {
                    closeLightboxFunc();
                } else if (modal.classList.contains('show')) {
                    closeFunc();
                }
            }
        });
    }

    // Lightbox Logic
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');

    let closeLightboxFunc;

    if (lightbox && lightboxImg) {
        const closeBtn = lightbox.querySelector('.close-lightbox');

        const openLightbox = (src) => {
            lightboxImg.src = src;
            lightbox.classList.add('show');
        };

        closeLightboxFunc = () => {
            lightbox.classList.remove('show');
            // Wait for transition before clearing src
            setTimeout(() => {
                if (!lightbox.classList.contains('show')) lightboxImg.src = '';
            }, 400);
        };

        if (closeBtn) closeBtn.addEventListener('click', closeLightboxFunc);

        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox || e.target === lightboxImg) {
                closeLightboxFunc();
            }
        });
    }

});
