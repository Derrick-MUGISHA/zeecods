// Filter functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const products = document.querySelectorAll('.product-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Filter products
        const category = button.dataset.category;
        products.forEach(product => {
            if (category === 'all' || product.dataset.category === category) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    });
});

// Search functionality
const searchInput = document.querySelector('.search-bar input');

searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    
    products.forEach(product => {
        const title
    }
}, true);