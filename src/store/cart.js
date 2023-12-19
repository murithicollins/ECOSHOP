// @ts-nocheck
// lib/cart.js
import { writable, derived } from "svelte/store";

export const cart = writable([]);

// Function to add an item to the cart
// @ts-ignore
export const addToCart = (item) => {
  cart.update((cartItems) => [...cartItems, { item, qty: 1 }]);
  // console.log(item);
};

export const removeToCart = (itemId) => {
  cart.update((cartItems) =>
    cartItems.filter((item) => item.item.id !== itemId)
  );
  // console.log(item);
};

export const updateQuantity = (itemId, quantityChange) => {
  cart.update((cartItems) => {
    // Find the item in the cart
    const itemIndex = cartItems.findIndex((item) => item.item.id === itemId);

    // If the item is found, update its quantity
    if (itemIndex !== -1) {
      cartItems[itemIndex].qty += quantityChange;

      // Ensure the quantity doesn't go below 1
      if (cartItems[itemIndex].qty < 1) {
        cartItems[itemIndex].qty = 1;
      }
    }

    return cartItems;
  });
};

export const calculateTotal = derived(
  cart,
  ($cart, set) => {
    let total = 0;

    $cart.forEach((item) => {
      total += item.item.attributes.price * item.qty;
    });

    set(total);
  },
  0
);
