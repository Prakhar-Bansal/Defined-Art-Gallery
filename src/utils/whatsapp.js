import { products } from "../data";

const STORAGE = "defined-art-gallery-cart";

export function sendBagToWhatsApp() {
  const whatsappNumber = "916397522455";

  // Get the exact cart structure used by this project
  let cart = {};

  try {
    cart = JSON.parse(localStorage.getItem(STORAGE)) || {};
  } catch (error) {
    console.error("Could not read cart:", error);
    alert("Unable to read your bag. Please try again.");
    return;
  }

  // Convert cart object into product rows
  const rows = Object.entries(cart)
    .map(([id, quantity]) => {
      const product = products.find((item) => item.id === id);

      if (!product) return null;

      return {
        product,
        quantity: Number(quantity) || 1,
      };
    })
    .filter(Boolean);

  if (rows.length === 0) {
    alert("Your bag is empty.");
    return;
  }

  // Calculate total
  const total = rows.reduce((sum, { product, quantity }) => {
    return sum + product.price * quantity;
  }, 0);

  // Build WhatsApp product list
  const items = rows
    .map(({ product, quantity }, index) => {
      const subtotal = product.price * quantity;

      return (
        `${index + 1}. ${product.name}\n` +
        `Quantity: ${quantity}\n` +
        `Price: $${product.price.toFixed(2)}\n` +
        `Subtotal: $${subtotal.toFixed(2)}`
      );
    })
    .join("\n\n");

  const message =
    `Hello Defined Art Gallery! 👋\n\n` +
    `I’m interested in ordering the following items from your collection:\n\n` +
    rows
      .map(({ product, quantity }, index) => {
        const subtotal = product.price * quantity;
        return (
          `*${index + 1}. ${product.name}*\n` +
          `Qty: ${quantity} × $${product.price.toFixed(2)}\n` +
          `Subtotal: *$${subtotal.toFixed(2)}*`
        );
      })
      .join("\n\n") +
    `\n\n` +
    `━━━━━━━━━━━━━━\n` +
    `*Order Total: $${total.toFixed(2)}*\n` +
    `━━━━━━━━━━━━━━\n\n` +
    `Could you please confirm the availability and let me know the next steps for placing the order?\n\n` +
    `Thank you! 😊`;

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  window.open(whatsappUrl, "_blank");
}
