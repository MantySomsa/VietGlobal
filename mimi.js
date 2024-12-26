// Original products for "Top Categories"
const products = [
  { image: "./image/IMG_01-600x600.webp", text: "Raintree" },
  { image: "./image/IMG_01.webp", text: "Raintree" },
  { image: "./image/SUN-02.webp", text: "Lantana" },
  { image: "./image/ACACIA-03.webp", text: "Periwinkle" },
];

// New products for "New Products"
const newProducts = [
  {
    image: "./image/PalermoSunLounge_new_products_01.webp",
    text: "NEW PRODUCT",
  },
  {
    image: "./image/terrace-contour-chaise-dark_new_products_01.webp",
    text: "NEW PRODUCT",
  },
  {
    image:
      "./image/Rosa-Sunlounge-Recliner-Bed-Rattan-Brown-new_products_03.webp",
    text: "NEW PRODUCT",
  },
  {
    image:
      "./image/Casa-Padrino-Luxus-Hollywood-Schaukel-Beige-Braun-Wetterfeste-Garten-Schaukel-mit-Sonnendach-Garten-Moebel-Terrassen-Moebel-Luxus-Moebel-Luxus-Garten-Einrichtung-new_products_04.webp",
    text: "NEW PRODUCT",
  },
];

// Ensure you select the correct containers
const productContainer = document.querySelector(".row"); // For "Top Categories"
const productContainer2 = document.querySelector(".row2"); // For "New Products"

// Clone the card template for each section
const cardTemplate = document.querySelector(".card").cloneNode(true);
const card2Template = document.querySelector(".card_about").cloneNode(true);

productContainer.innerHTML = ""; // Clear out the old cards in "Top Categories"
productContainer2.innerHTML = ""; // Clear out the initial card in "New Products"

// Populate the "Top Categories" section
products.forEach((product) => {
  const card = cardTemplate.cloneNode(true); // Clone the card template for each product
  card.querySelector(".card-img-top").src = product.image; // Set the image
  card.querySelector(".card-text").textContent = product.text; // Set the text for each card
  productContainer.appendChild(card); // Append to the "Top Categories" container
});

// Populate the "New Products" section
newProducts.forEach((newProduct) => {
  const card2 = card2Template.cloneNode(true); // Clone the card template for each product
  card2.querySelector(".card-img-top").src = newProduct.image; // Set the image
  card2.querySelector(".card-text").textContent = newProduct.text; // Set the text for each card
  productContainer2.appendChild(card2); // Append to the "New Products" container
});

// Underline Page User On

// Get the current path
const currentPath = window.location.pathname;

// Define an object that maps paths to their respective links
const navLinks = {
  "/index.html": document.getElementById("home-link"),
  "/products.html": document.getElementById("products-link"),
  "/about.html": document.getElementById("about-link"),
};

// Loop through the navLinks object and match the current path
for (const path in navLinks) {
  if (currentPath.includes(path)) {
    navLinks[path].classList.add("active");
  }
}
