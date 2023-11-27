document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll("nav ul li a");
    const tabContents = document.querySelectorAll(".tab-content");
    let cart = [];

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", function (e) {
            e.preventDefault();
            hideTabs();
            removeActiveClass();
            tabContents[index].classList.add("active");

            if (tab.getAttribute("href") === "#cart") {
                showCart();
            }
        });
    });

    function hideTabs() {
        tabContents.forEach((content) => {
            content.classList.remove("active");
        });
    }

    function removeActiveClass() {
        tabs.forEach((tab) => {
            tab.classList.remove("active");
        });
    }

    function addToCart() {
        const course = {
            title: 'Самый лучший курс по SaaS',
            price: 99,
        };

        cart.push(course);
        showCart();
    }

    function removeFromCart(index) {
        cart.splice(index, 1);
        showCart();
    }

    function showCart() {
        const cartList = document.getElementById('cart-items');
        const totalPrice = document.getElementById('total-price');

        cartList.innerHTML = '';
        let total = 0;

        cart.forEach((course, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = `${course.title} - ${course.price} манат`;
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Удалить';
            removeButton.classList.add('remove-button');
            removeButton.addEventListener('click', () => removeFromCart(index));
            listItem.appendChild(removeButton);
            cartList.appendChild(listItem);

            total += course.price;
        });

        totalPrice.textContent = `Итого: ${total} манат`;
    }

    // Находим кнопку и добавляем обработчик события при клике
    const addToCartButtons = document.querySelectorAll('.buy-button');
    addToCartButtons.forEach((button) => {
        button.addEventListener('click', addToCart);
    });
});
