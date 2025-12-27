export type CartEntry = {
  productId: number;
  quantity: number;
  size?: string;
};

const CART_KEY = "f1_cart";

export function getCart(): CartEntry[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(CART_KEY) || "[]";
    return JSON.parse(raw) as CartEntry[];
  } catch (e) {
    console.error("Failed to read cart from localStorage", e);
    return [];
  }
}

export function saveCart(cart: CartEntry[]) {
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  } catch (e) {
    console.error("Failed to save cart to localStorage", e);
  }
}

export function addItemToCart(item: CartEntry) {
  const cart = getCart();
  const existing = cart.find(
    (c) => c.productId === item.productId && c.size === item.size
  );
  if (existing) {
    existing.quantity = existing.quantity + item.quantity;
  } else {
    cart.push({ ...item });
  }
  saveCart(cart);
  return cart;
}

export function removeItem(productId: number, size?: string) {
  const cart = getCart().filter(
    (c) => !(c.productId === productId && c.size === size)
  );
  saveCart(cart);
  return cart;
}

export function clearCart() {
  saveCart([]);
}
