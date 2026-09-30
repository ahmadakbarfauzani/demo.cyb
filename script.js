document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.main-nav');
    const scrollIndicator = document.querySelector('.scroll-indicator');
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            const icon = menuToggle.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                if (icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-times');
                }
            });
        });
    }

    // Add scroll listener for navigation and scroll indicator
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
            if (scrollIndicator) {
                scrollIndicator.style.opacity = '0';
                scrollIndicator.style.pointerEvents = 'none';
            }
        } else {
            nav.classList.remove('scrolled');
            if (scrollIndicator) {
                scrollIndicator.style.opacity = '0.7';
                scrollIndicator.style.pointerEvents = 'auto';
            }
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Booking Form WhatsApp Submission
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const fullName = document.getElementById('fullName').value;
            const whatsapp = document.getElementById('whatsapp').value;
            const service = document.getElementById('service').value;
            const datetime = document.getElementById('datetime').value;
            const location = document.getElementById('location').value;
            
            // Format the date for readability if possible, otherwise use raw
            let formattedDate = datetime;
            try {
                const d = new Date(datetime);
                formattedDate = d.toLocaleString('en-GB', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute:'2-digit' });
            } catch (err) {}

            const message = `*NEW BOOKING REQUEST* %0A%0A` +
                            `*Name:* ${fullName} %0A` +
                            `*WhatsApp:* ${whatsapp} %0A` +
                            `*Service:* ${service} %0A` +
                            `*Date & Time:* ${formattedDate} %0A` +
                            `*Location:* ${location} %0A%0A` +
                            `Please let me know if this slot is available.`;
            
            const waUrl = `https://wa.me/123456789?text=${message}`;
            window.open(waUrl, '_blank');
        });
    }
});
