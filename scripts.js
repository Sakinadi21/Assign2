// Alert on "Order Now" button click
document.querySelector('.order-now').addEventListener('click', function() {
    alert('Order Now button clicked!');
});

// Function to add "Add to Cart" event listeners to all buttons
function addCartButtonListeners() {
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            alert('Item added to cart!');
        });
    });
}

// Initial call to attach event listeners to existing "Add to Cart" buttons
addCartButtonListeners();

// Additional products list
const additionalProducts = [
    { img: 'images/x.jpg', name: 'Pastrey cake', price: '$10.00' },
    { img: 'images/y.jpg', name: 'Fish cutlet', price: '$15.00' },
    { img: 'images/o.jpg', name: 'Pasta', price: '$20.00' },
    { img: 'images/g.jpg', name: 'Chawmin', price: '$12.00' },
    { img: 'images/s.jpg', name: 'Samusa', price: '$18.00' },
    { img: 'images/n.jpg', name: 'Chicken Massala', price: '$22.00' },
    { img: 'images/u.jpg', name: 'Chicken tanduri', price: '$24.00' },
    { img: 'images/k.jpg', name: 'Chicken fry', price: '$27.00' },
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
            item.classList.add('item', 'additional-item');
            
            item.innerHTML = `
                <img src="${product.img}" alt="${product.name}">
                <div class="item-info">
                    <p>${product.name}</p>
                    <p class="price">${product.price}</p>
                </div>
                <button class="add-to-cart">Add to Cart</button>
            `;
            grid.appendChild(item);
        });

        // Add event listeners to new "Add to Cart" buttons
        addCartButtonListeners();
        this.textContent = 'See Less Products';
    }

    showingMore = !showingMore;
});

// Select all images within the testimonial section
const profileImage = document.querySelector('.profile-image');
const leftArrow = document.querySelector('.testimonial-text img:nth-child(4)');
const rightArrow = document.querySelector('.testimonial-text img:nth-child(5)');
const foodImage = document.querySelector('.testimonial-image img');

// Example actions when images are clicked
profileImage.addEventListener('click', function() {
    alert('Profile image clicked!');
    // Add your logic here for what should happen when the profile image is clicked
});

leftArrow.addEventListener('click', function() {
    alert('Left arrow clicked!');
    // Add your logic here for what should happen when the left arrow is clicked
});

rightArrow.addEventListener('click', function() {
    alert('Right arrow clicked!');
    // Add your logic here for what should happen when the right arrow is clicked
});

foodImage.addEventListener('click', function() {
    alert('Food image clicked!');
    // Add your logic here for what should happen when the food image is clicked
});

// Handle form submissions
document.querySelector('.subscribe-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    alert('Thank you for subscribing with email: ' + email);
    // Additional form submission logic here
});

document.querySelector('.footer-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    alert('Thank you for subscribing with email: ' + email);
    // Add logic to handle form submission
});
