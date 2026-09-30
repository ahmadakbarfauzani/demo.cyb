document.addEventListener('DOMContentLoaded', () => {
    const mobileToggle = document.getElementById('mobileToggle');
    const closeSidebar = document.getElementById('closeSidebar');
    const sidebar = document.getElementById('sidebar');

    if (mobileToggle && sidebar) {
        mobileToggle.addEventListener('click', () => {
            sidebar.classList.add('open');
        });
    }

    if (closeSidebar && sidebar) {
        closeSidebar.addEventListener('click', () => {
            sidebar.classList.remove('open');
        });
    }

    // ── Pricing Page: Service Modal ──────────────────────────────
    const serviceModal = document.getElementById('serviceModal');
    const addServiceBtn = document.getElementById('addServiceBtn');
    const cancelModalBtn = document.getElementById('cancelModalBtn');

    function openModal(modal) {
        if (modal) modal.classList.add('active');
    }

    function closeModal(modal) {
        if (modal) modal.classList.remove('active');
    }

    if (addServiceBtn && serviceModal) {
        addServiceBtn.addEventListener('click', () => {
            const title = serviceModal.querySelector('.modal-title');
            if (title) title.textContent = 'ADD NEW SERVICE';
            openModal(serviceModal);
        });
    }

    if (cancelModalBtn) {
        cancelModalBtn.addEventListener('click', () => closeModal(serviceModal));
    }

    // Close modal on overlay click
    if (serviceModal) {
        serviceModal.addEventListener('click', (e) => {
            if (e.target === serviceModal) closeModal(serviceModal);
        });
    }

    // ── Pricing Page: Edit buttons ───────────────────────────────
    document.querySelectorAll('.service-card .edit-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const card = btn.closest('.service-card');
            const name = card.querySelector('.service-name')?.textContent || '';
            const price = card.querySelector('.service-price')?.textContent || '';
            const desc = card.querySelector('.service-desc')?.textContent || '';

            if (serviceModal) {
                const title = serviceModal.querySelector('.modal-title');
                if (title) title.textContent = 'EDIT SERVICE';

                const inputs = serviceModal.querySelectorAll('input, textarea');
                if (inputs[0]) inputs[0].value = name;
                if (inputs[1]) inputs[1].value = price;
                if (inputs[2]) inputs[2].value = desc;

                openModal(serviceModal);
            }
        });
    });

    // ── Pricing Page: Delete Confirmation Modal ──────────────────
    const deleteModal = document.getElementById('deleteModal');
    const cancelDeleteBtn = document.getElementById('cancelDeleteBtn');
    const confirmDeleteBtn = document.getElementById('confirmDeleteBtn');
    let cardToDelete = null;

    document.querySelectorAll('.service-card .delete-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            cardToDelete = btn.closest('.service-card');
            openModal(deleteModal);
        });
    });

    if (cancelDeleteBtn) {
        cancelDeleteBtn.addEventListener('click', () => {
            cardToDelete = null;
            closeModal(deleteModal);
        });
    }

    if (confirmDeleteBtn) {
        confirmDeleteBtn.addEventListener('click', () => {
            if (cardToDelete) {
                cardToDelete.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                cardToDelete.style.opacity = '0';
                cardToDelete.style.transform = 'scale(0.95)';
                setTimeout(() => cardToDelete.remove(), 300);
                cardToDelete = null;
            }
            closeModal(deleteModal);
        });
    }

    if (deleteModal) {
        deleteModal.addEventListener('click', (e) => {
            if (e.target === deleteModal) {
                cardToDelete = null;
                closeModal(deleteModal);
            }
        });
    }

    // ── Pricing Page: Service Form Submit (mock) ─────────────────
    const serviceForm = document.getElementById('serviceForm');
    if (serviceForm) {
        serviceForm.addEventListener('submit', (e) => {
            e.preventDefault();
            closeModal(serviceModal);
            serviceForm.reset();
        });
    }
});
