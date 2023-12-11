// Variables to keep track of selected items, total price, and discount
let selectedItems = [];
let totalPrice = 0;
let discount = 0;

// Function to handle card clicks and calculate total price
function calculatekAccessories(card) {
  // Get the card title and price
  const cardTitle = card.querySelector(".card-title").textContent;
  const cardPrice = parseFloat(card.querySelector(".card-body p").textContent);

  // Add card number and title to the selected items container
  const selectedItemsContainer = document.getElementById("selected-items");
  const selectedCardNumber = document.createElement("p");
  selectedCardNumber.textContent = ` ${card.getAttribute("data-card-number")} - ${cardTitle}`;
  selectedItemsContainer.appendChild(selectedCardNumber);

  // Calculate total price
  const totalPriceElement = document.getElementById("total-price");
  const totalPrice = parseFloat(totalPriceElement.textContent);
  const updatedTotalPrice = totalPrice + cardPrice;
  totalPriceElement.textContent = updatedTotalPrice.toFixed(2);

  // Enable the apply button if total price is 200 or more
  const applyButton = document.querySelector('.apply-btn');
  if (updatedTotalPrice >= 200) {
    applyButton.disabled = false;
  } else {
    applyButton.disabled = true;
  }
}

// Function to apply discount
function applyDiscount() {
  const totalPriceElement = document.getElementById("total");
  const totalPrice = parseFloat(totalPriceElement.textContent);
  const discountAmount = totalPrice * 0.2; // 20% discount
  const discountedTotal = totalPrice - discountAmount;

  const discountElement = document.querySelector(".cart-box h6 span");
  discountElement.textContent = discountAmount.toFixed(2);

  totalPriceElement.textContent = discountedTotal.toFixed(2);
}

// Add event listeners to card buttons
const cardButtons = document.querySelectorAll(".card");
cardButtons.forEach((card, index) => {
  card.setAttribute("data-card-number", index + 1); // Assign a card number attribute
  card.addEventListener("click", () => {
    calculatekAccessories(card);
  });
});

// Add event listener to apply button
const applyButton = document.getElementById('apply-btn');
applyButton.addEventListener("click", () => {
  applyDiscount();
});

// Function to close modal and clear prices
function closeModalAndClearPrices() {
  const modal = document.getElementById("my_modal_5");
  modal.close();
  selectedItems = [];
  totalPrice = 0;
  discount = 0;
  updateSelectedItems();
  updateTotalPrice();
  updateDiscount();
}
