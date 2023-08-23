/**
 * QAP1 - FRONT-END & JAVASCRIPT!!
 *
 *
 * Please update the following with your information:
 *
 *      Name:       <YOUR_NAME>
 *      
 *      Date:       <SUBMISSION_DATE>
 */
document.addEventListener("DOMContentLoaded", function () {
  const categoryMenu = document.getElementById("category-menu");
  const categoryTitle = document.getElementById("category");
  const productsTableBody = document.getElementById("products");
  const categories = ["Electronics", "Accessories", "Wearables", "Home Appliances"];

  
  categories.forEach((category) => {
    const button = document.createElement("button");
    button.textContent = category;
    button.addEventListener("click", function () {
      filterByCategory(category);
    });
    categoryMenu.appendChild(button);
  });

  function filterByCategory(category) {
    const filteredProducts = products.filter((product) => {
      return product.category === category;
    });
    displayProducts(filteredProducts);
    categoryTitle.textContent = category;
  }

  function displayProducts(filteredProducts) {
    productsTableBody.innerHTML = "";

    filteredProducts.forEach((product) => {
      const row = document.createElement("tr");

      const titleCell = document.createElement("td");
      titleCell.textContent = product.name;

      const descriptionCell = document.createElement("td");
      descriptionCell.textContent = product.description;

      const priceCell = document.createElement("td");
      const price = product.price / 100;
      const formattedPrice = new Intl.NumberFormat("en-CA", {
        style: "currency",
        currency: "CAD",
      }).format(price);
      priceCell.textContent = formattedPrice;

      row.appendChild(titleCell);
      row.appendChild(descriptionCell);
      row.appendChild(priceCell);

      productsTableBody.appendChild(row);
    });
  }
});