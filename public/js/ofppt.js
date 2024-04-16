
    document.addEventListener('DOMContentLoaded', () => {
        const a1 = document.getElementById('lien-1');
        const a2 = document.getElementById('lien-2');
        const a3 = document.getElementById('lien-3');
        const a4 = document.getElementById('lien-4');
        const a5 = document.getElementById('lien-5');

        const setActiveItem = (activeElement) => {
            const active = document.querySelector('.active');
            active?.classList.remove('active');
            activeElement.classList.add('active');
        };

        // Assuming you want to set up event listeners for these elements
        a1.addEventListener('click', () => setActiveItem(a1));
        a2.addEventListener('click', () => setActiveItem(a2));
        a3.addEventListener('click', () => setActiveItem(a3));
        a4.addEventListener('click', () => setActiveItem(a4));
        a5.addEventListener('click', () => setActiveItem(a5));
    });
