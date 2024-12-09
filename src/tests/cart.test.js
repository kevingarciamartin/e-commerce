import { addToCartFunction,loadCartFromStorage,saveCartToStorage,resetMain } from "../assets/js/utils/helpers";
import { ShoppingCartPage } from "../assets/js/pages/cart/cart";
import { calculateTotal } from '../assets/js/components/orderSummary/orderSummary';

describe('Shopping Cart Page', () => {
    let cartPage;

    beforeEach(() => {
        document.body.innerHTML = '<main><div id="content-container"></div></main>'
        resetMain();

        const item1 = {id: 444, name: 'tulip', price: 888, quantity: 10};
        const item2 = {id: 333, name: 'forgetmenot', price: 555, quantity: 2};
        cartPage = new ShoppingCartPage([item1,item2]);
        cartPage.renderItemList();
    });

    test('render cart list', () => {
        expect (cartPage.cartList).not.toBeNull();
        expect (cartPage.cartList.classList.contains('cart-list')).toBe(true);
    });

    test('render cart list', () => {
        const cartItems = cartPage.cartList.children;
        expect(cartItems.length).toBe(2);
    });

    test ('update item quantity',() => {
        cartPage.updateQuantity(444,5);
        expect(cartPage.cart.find((item) => item.id === 444).quantity).toBe(5);
    });

    test('remove item from cart', () => {
        cartPage.removeItem(333);
        cartPage.renderItemList();
        const cartItems = cartPage.cartList.children;
        expect(cartItems.length).toBe(1);
    });

    test ('exclude status of item in order', () => {
        cartPage.toggle(444);
        expect(cartPage.cart.find((item)=> item.id === 444).exclude).toBe(true);
    });

})

describe('Add to cart function check', () => {
    let product = {id: 333, name: 'forgetmenot'};
    let cart = [];

    test('add product to cart', () => {
        addToCartFunction(product);
        expect(loadCartFromStorage()).toEqual([{id: 333, name: 'forgetmenot',quantity:1}]);
    });

    test('increase quantity for existing product', () => {
        cart=[{id: 333, name: 'forgetmenot',quantity:1}];
        saveCartToStorage(cart);
        addToCartFunction(product);
        expect(loadCartFromStorage()[0].quantity).toBe(2);
    });
}) 



describe('check calculateTotal', () => {
    test('calculates total price for items in the cart, excluding excluded items', () => {
        const cart = [
        { id: 1, name: 'Item 1', price: 10, quantity: 2, exclude: false },
        { id: 2, name: 'Item 2', price: 20, quantity: 1, exclude: false },
        { id: 3, name: 'Item 3', price: 15, quantity: 3, exclude: true },
        ];

        const total = calculateTotal(cart);
        expect(total).toBe(40);
    });

    test('handles an empty cart', () => {
        const cart = [];
        const total = calculateTotal(cart);
        expect(total).toBe(0);
    });

    test('handles a cart with all items excluded', () => {
        const cart = [
        { id: 1, name: 'Item 1', price: 10, quantity: 2, exclude: true },
        { id: 2, name: 'Item 2', price: 20, quantity: 1, exclude: true },
        ];
        const total = calculateTotal(cart);
        expect(total).toBe(0);
    });

    test('handles items with quantity 0', () => {
        const cart = [
            { id: 1, name: 'Item 1', price: 10, quantity: 0, exclude: false },
            { id: 2, name: 'Item 2', price: 20, quantity: 1, exclude: false },
        ];

        const total = calculateTotal(cart);
        expect(total).toBe(20); 
    });
});