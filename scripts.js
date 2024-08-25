document.addEventListener("DOMContentLoaded", function () {
    // Alert on "Order Now" button click
    document.querySelector('.order-now').addEventListener('click', function() {
        alert('Order Now button clicked!');
    });

    // Function to add "Add to Cart" event listeners to all buttons
    function addCartButtonListeners() {
        document.querySelectorAll('.btn').forEach(button => {
            button.addEventListener('click', function() {
                alert('Item added to cart!');
            });
        });
    }

    // Initial call to attach event listeners to existing "Add to Cart" buttons
    addCartButtonListeners();

    // Additional products list
    const additionalProducts = [
        { img: 'images/x.jpg', name: 'Pastry Cake', price: '$10.00' },
        { img: 'images/y.jpg', name: 'Fish Cutlet', price: '$15.00' },
        { img: 'images/o.jpg', name: 'Pasta', price: '$20.00' },
        { img: 'images/g.jpg', name: 'Chowmein', price: '$12.00' },
        { img: 'images/s.jpg', name: 'Samosa', price: '$18.00' },
        { img: 'images/n.jpg', name: 'Chicken Masala', price: '$22.00' },
        { img: 'images/u.jpg', name: 'Chicken Tandoori', price: '$24.00' },
        { img: 'images/k.jpg', name: 'Chicken Fry', price: '$27.00' },
        { img: 'images/t.jpg', name: 'Soup', price: '$17.00' },
    ];

    let showingMore = false;

    document.querySelector('.toggle-products').addEventListener('click', function() {
        const grid = document.querySelector('.popular-items-grid');

        if (showingMore) {
            // Remove additional products
            document.querySelectorAll('.additional-item').forEach(item => item.remove());
            this.textContent = 'See More Products';
        } else {
            // Add additional products
            additionalProducts.forEach(product => {
                const item = document.createElement('div');
                item.classList.add('card', 'additional-item');

                item.innerHTML = `
                    <div class="image-container">
                        <img src="${product.img}" alt="${product.name}">
                    </div>
                    <div class="details-container">
                        <div class="text-button">
                            <h2>${product.name}</h2>
                            <button class="btn">Add to Cart</button>
                        </div>
                        <div class="rating-price">
                            <div class="rating">★ 5.0</div>
                            <div class="price">${product.price}</div>
                        </div>
                    </div>
                `;
                grid.appendChild(item);
            });

            // Add event listeners to new "Add to Cart" buttons
            addCartButtonListeners();
            this.textContent = 'See Less Products';
        }

        showingMore = !showingMore;
    });

    // Select elements within the testimonial section
    const profileImage = document.querySelector('.profile-image');
    const leftArrow = document.querySelector('.testimonial-text img:nth-child(4)');
    const rightArrow = document.querySelector('.testimonial-text img:nth-child(5)');
    const foodImage = document.querySelector('.testimonial-image img');

    // Example actions when images are clicked
    profileImage.addEventListener('click', function() {
        alert('Profile image clicked!');
    });

    leftArrow.addEventListener('click', function() {
        alert('Left arrow clicked!');
    });

    rightArrow.addEventListener('click', function() {
        alert('Right arrow clicked!');
    });

    foodImage.addEventListener('click', function() {
        alert('Food image clicked!');
    });

    // Handle subscribe form submissions
    document.querySelector('.subscribe-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const email = event.target.querySelector('input[type="email"]').value;
        alert('Thank you for subscribing with email: ' + email);
    });

    // Handle footer contact form submissions
    document.querySelector('.footer-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const email = event.target.querySelector('input[type="email"]').value;
        alert('Thank you for contacting us with email: ' + email);
    });
});
