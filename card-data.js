// Hardcoded valid card data
const cards = [
  { id: "C000200200020D", pin: "9728", active: false },
  { id: "E003000303003F", pin: "7248", active: false }
];

function validateCard(inputId, inputPin) {
  const card = cards.find(c => c.id === inputId);
  if (!card) return { success: false, message: "Card not found." };
  if (card.pin !== inputPin) return { success: false, message: "Invalid PIN." };
  if (card.active) return { success: false, message: "Card already activated." };

  // Simulate marking card as active
  card.active = true;
  return { success: true, message: "Card activated." };
}
