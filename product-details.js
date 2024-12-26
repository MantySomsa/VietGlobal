export const products = [
  {
    id: 1,
    image:
      "https://lagreenworld.com/wp-content/uploads/2023/02/Screen-Shot-2023-02-21-at-13.04.02.png",
    text: "Accent chair",
    description: "",
    category: "outdoor",
  },
  {
    id: 2,
    image:
      "https://lagreenworld.com/wp-content/uploads/2023/01/Background-scaled.jpg",
    text: "Acacia Finger Joint boards",
    description:
      "Solid acacia wood finger joint boards are used popularly in furniture such as kitchen countertops, kitchen cabinets, dinning table sets, TV shelves. We are offering a wide range of finger joint boards including AA, AB, AC, BC grades with thickness available 12mm, 15mm, 18, 25mm, 33mm, 38mm or customized request.",
    specifications: [
      "• Wood species: Solid Acacia Wood.",
      "• Moisture: 8 – 12 %.",
      "• Wood Stave (length): 150-400 millimeters.",
      "• Length & Width tolerance: 0/+3 millimeters.",
      "• Thickness tolerance: +/- 0.2 millimeters.",
      "• Glue: D4.",
      "• Surface finish: sanding 240-320 grit. Both sides of the wood board.",
      "• Quality: AA, AB, AC, BC, CC or customizable.",
    ],
    category: "indoor",
    dimensions: {
      length: "2440 / 3600", // mm
      width: "1220 / 300 / 550", // mm
      thickness: "12 / 15 / 18 / 24 / 30 / 33 / 38", // mm
    },
  },
  {
    id: 3,
    image:
      "https://lagreenworld.com/wp-content/uploads/2023/01/image_2_3057982.jpg",
    text: "Aster",
    description:
      "The wooden garden lounge set adds a vintage look and is specially designed for your garden, patio or other outdoor living space!The outdoor furniture set is built from a solid acacia wood construction with an oil finish, making it stable and durable. The thick seat and back cushions make the set soft to be seated. Thanks to the solid wood tabletop with slatted design, the coffee table offers you space to put your snacks, fruit baskets, decorative items, as well as other essentials. The slightly curved backrest and the armrests add the chair’s seating comfort.",
    specifications: [
      "• Cushion colour: Dark grey",
      "• Material: Solid acacia wood with an oil finish",
      "• Table dimensions: 102 x 50 x 43 cm (L x W x H)",
      "• Chair dimensions: 59 x 67 x 83 cm (W x D x H)",
      "• Seat size: 50 x 48.5 cm (W x D)",
      "• Seat height from the ground: 34 cm",
    ],
    category: "outdoor",
  },
  {
    id: 4,
    image:
      "https://lagreenworld.com/wp-content/uploads/2024/02/c58afebc-5c93-4d3d-9f68-176f0012bc33.1507ca7c40a982172df8db90ae43e197.jpeg.webp",
    text: "BED FRAME",
    category: "indoor",
  },
  {
    id: 5,
    image:
      "https://lagreenworld.com/wp-content/uploads/2024/02/c714706f-9982-4a60-b882-8990d662117b.ae22b8215f16608eb156706eeb2253e7.jpeg.webp",
    text: "BED FRAME",
    category: "indoor",
  },
  {
    id: 6,
    image:
      "https://lagreenworld.com/wp-content/uploads/2024/02/81ppPbP4HaL.jpg",
    text: "BED FRAME",
    category: "indoor",
  },
  {
    id: 7,
    image:
      "https://lagreenworld.com/wp-content/uploads/2024/02/14-inch-Solid-Wood-Platform-Bed-Queen-Frame-No-Squeak-Frame-Size-Box-Spring-Needed-Sturdy-White_962312ff-b074-4fc8-a3ec-aac560b88c28.00dfce88e439d92483bce1aedf86248f.jpeg.webp",
    text: "BED FRAME",
    category: "indoor",
  },
  {
    id: 8,
    image:
      "https://lagreenworld.com/wp-content/uploads/2024/02/81DyHnVwcZL._AC_SL1500_.jpg",
    text: "BED FRAME",
    category: "indoor",
  },
  {
    id: 9,
    image: "https://lagreenworld.com/wp-content/uploads/2024/02/s-l1200.webp",
    text: "BED FRAME",
    category: "indoor",
  },
  {
    id: 10,
    image:
      "https://lagreenworld.com/wp-content/uploads/2023/01/image_8_42647.jpg",
    text: "Begonia",
    description:
      "This outdoor sun bed/garden bench combines style and functionality, and will become the focal point of your garden or patio. The sun lounger can be converted from a bench to a day bed and back again quickly and easily thanks to the adjustable sides. The thick, removable back and seat cushions will provide seating and lying comfort. The cushion covers can be easily removed and washed. Our sun bed/garden bench is made of high-quality acacia wood, a tropical hardwood, which is weather-resistant and highly durable, and finished with a light oil coating. Therefore, it is suitable for outdoor use.",
    specifications: [
      "• Material: Solid acacia wood with a light oil finish",
      "• Overall dimensions: (155-190) x 66 x 75 cm (W x D x H)",
      "• 2-in-1 convertible day bed",
      "• Both sides adjustable",
      "• Cushion covers washable",
    ],
    category: "outdoor",
  },
  {
    id: 11,
    image:
      "https://lagreenworld.com/wp-content/uploads/2023/01/Screen-Shot-2023-01-10-at-22.47.29.png",
    text: "Bellflower dining set",
    category: "outdoor",
  },
  {
    id: 12,
    image:
      "https://lagreenworld.com/wp-content/uploads/2023/01/91jSUe7XsvL._AC_SL1500_.jpg",
    text: "Bellflower sofa set",
    category: "outdoor",
  },
];

// Function to get product ID from the URL
// Assuming you already have the products array either imported or added globally
// If the products array is in a global data.js, it should be available here

// Get product ID from the URL
function getProductIdFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

// Display the product details dynamically
function displayProductDetails() {
  const productId = getProductIdFromURL(); // Get the clicked product ID
  const product = products.find((p) => p.id == productId); // Find the product by ID

  if (product) {
    // Update image, name, description, specifications, etc.
    document.getElementById("product-image").src = product.image;
    document.getElementById("product-name").textContent = product.text;
    document.getElementById("product-description").textContent =
      product.description;

    // Build the specifications dynamically
    const specsContainer = document.getElementById("product-specifications");
    specsContainer.innerHTML = ""; // Clear old specs

    if (product.specifications && product.specifications.length > 0) {
      product.specifications.forEach((spec) => {
        const li = document.createElement("li");
        li.textContent = spec;
        specsContainer.appendChild(li);
      });
      // Only show the specifications section if there are specs
      specsContainer.closest(".specifications").style.display = "block";
    } else {
      // Hide the specifications section if there are no specs
      specsContainer.closest(".specifications").style.display = "none";
    }

    // Update categories
    const categoriesContainer = document.querySelector(".categories");
    categoriesContainer.innerHTML = `Categories: <a href="#">${product.category}</a>`;

    // Update the product dimensions (length, width, thickness)
    if (product.dimensions) {
      document.getElementById("length-value").textContent =
        product.dimensions.length;
      document.getElementById("width-value").textContent =
        product.dimensions.width;
      document.getElementById("thickness-value").textContent =
        product.dimensions.thickness;
    } else {
      console.error("Product dimensions not found!");
    }
  } else {
    console.error("Product not found!");
  }
}

// Initial load
displayProductDetails();
