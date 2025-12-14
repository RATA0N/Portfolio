  const revealElements = document.querySelectorAll('.reveal-up');

        const revealOnScroll = () => {
            const windowHeight = window.innerHeight;
            const elementVisible = 50; 

            revealElements.forEach((reveal) => {
                const elementTop = reveal.getBoundingClientRect().top;
                if (elementTop < windowHeight - elementVisible) {
                    reveal.classList.add('active');
                }
            });
        };

        window.addEventListener('scroll', revealOnScroll);
        window.addEventListener('load', revealOnScroll);