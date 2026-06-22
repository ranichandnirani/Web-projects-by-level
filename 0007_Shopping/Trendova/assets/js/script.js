"use strict";

// modal variables
const modal = document.querySelector("[data-modal]");
const modalCloseBtn = document.querySelector("[data-modal-close]");
const modalCloseOverlay = document.querySelector("[data-modal-overlay]");

// modal function
const modalCloseFunc = function () {
  modal.classList.add("closed");
};

// modal eventListener
modalCloseOverlay.addEventListener("click", modalCloseFunc);
modalCloseBtn.addEventListener("click", modalCloseFunc);

// notification toast variables
const notificationToast = document.querySelector("[data-toast]");
const toastCloseBtn = document.querySelector("[data-toast-close]");

// notification toast eventListener
toastCloseBtn.addEventListener("click", function () {
  notificationToast.classList.add("closed");
});

// mobile menu variables
const mobileMenuOpenBtn = document.querySelectorAll(
  "[data-mobile-menu-open-btn]",
);
const mobileMenu = document.querySelectorAll("[data-mobile-menu]");
const mobileMenuCloseBtn = document.querySelectorAll(
  "[data-mobile-menu-close-btn]",
);
const overlay = document.querySelector("[data-overlay]");

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {
  // mobile menu function
  const mobileMenuCloseFunc = function () {
    mobileMenu[i].classList.remove("active");
    overlay.classList.remove("active");
  };

  mobileMenuOpenBtn[i].addEventListener("click", function () {
    mobileMenu[i].classList.add("active");
    overlay.classList.add("active");
  });

  mobileMenuCloseBtn[i].addEventListener("click", mobileMenuCloseFunc);
  overlay.addEventListener("click", mobileMenuCloseFunc);
}

// accordion variables
const accordionBtn = document.querySelectorAll("[data-accordion-btn]");
const accordion = document.querySelectorAll("[data-accordion]");

for (let i = 0; i < accordionBtn.length; i++) {
  accordionBtn[i].addEventListener("click", function () {
    const clickedBtn = this.nextElementSibling.classList.contains("active");

    for (let i = 0; i < accordion.length; i++) {
      if (clickedBtn) break;

      if (accordion[i].classList.contains("active")) {
        accordion[i].classList.remove("active");
        accordionBtn[i].classList.remove("active");
      }
    }

    this.nextElementSibling.classList.toggle("active");
    this.classList.toggle("active");
  });
}

// Shopping UI elements and product cards used by the cart, wishlist, and search.
const shopPanel = document.querySelector("[data-shop-panel]");
const shopPanelOverlay = document.querySelector("[data-shop-panel-overlay]");
const shopPanelClose = document.querySelector("[data-shop-panel-close]");
const shopPanelTitle = document.querySelector("[data-shop-panel-title]");
const shopPanelItems = document.querySelector("[data-shop-panel-items]");
const shopPanelFooter = document.querySelector("[data-shop-panel-footer]");
const shopPanelTotal = document.querySelector("[data-shop-panel-total]");
const shopPanelClear = document.querySelector("[data-shop-panel-clear]");
const searchField = document.querySelector(".search-field");
const searchButton = document.querySelector(".search-btn");
const productCards = [...document.querySelectorAll(".showcase")].filter((card) =>
  card.querySelector(".showcase-title")?.textContent.trim(),
);
const cartStorageKey = "trendova-cart";
const wishlistStorageKey = "trendova-wishlist";

// Read saved items safely so invalid or unavailable browser storage does not stop the page.
const readStoredItems = (key) => {
  try {
    const storedItems = JSON.parse(localStorage.getItem(key) || "[]");
    return Array.isArray(storedItems) ? storedItems : [];
  } catch (error) {
    console.warn(`Could not read ${key} from local storage.`, error);
    return [];
  }
};

let cart = readStoredItems(cartStorageKey);
let wishlist = readStoredItems(wishlistStorageKey);
let activePanel = "cart";

// Persist each update so cart and wishlist contents survive a page reload.
const saveItems = (key, items) => {
  try {
    localStorage.setItem(key, JSON.stringify(items));
  } catch (error) {
    console.warn(`Could not save ${key} to local storage.`, error);
  }
};

// Normalize the product card markup into the data shape used by both lists.
const getProductDetails = (card) => {
  const title = card.querySelector(".showcase-title")?.textContent.trim();
  if (!title) return null;

  const image = card.querySelector(".product-img.default, .showcase-banner img");
  const priceText = card.querySelector(
    ".showcase-price .price, .price-box .price, .price-value, .price",
  )?.textContent;
  const price = Number.parseFloat(priceText?.replace(/[^0-9.]/g, "") || "");

  return {
    id: title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
    title,
    price: Number.isFinite(price) ? price : 0,
    image: image?.getAttribute("src") || "",
    imageAlt: image?.getAttribute("alt") || title,
  };
};

const formatPrice = (price) => `$${price.toFixed(2)}`;

// Keep desktop and mobile badges in sync with the current saved items.
const updateHeaderCounts = () => {
  document
    .querySelectorAll(
      ".header-user-actions .action-btn, .mobile-bottom-navigation .action-btn",
    )
    .forEach((button) => {
      const iconName = button.querySelector("ion-icon")?.getAttribute("name");
      const count = button.querySelector(".count");
      if (!count) return;

      if (iconName === "bag-handle-outline") {
        count.textContent = cart.reduce((total, item) => total + item.quantity, 0);
      } else if (iconName === "heart-outline") {
        count.textContent = wishlist.length;
      }
    });
};

// Create action buttons with data attributes so one panel listener can handle them.
const createPanelButton = (label, action, productId, text) => {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "shop-panel-item-action";
  button.textContent = text;
  button.setAttribute("aria-label", label);
  button.dataset.panelAction = action;
  button.dataset.productId = productId;
  return button;
};

// Rebuild the open panel from the latest cart or wishlist data.
const renderPanel = () => {
  const items = activePanel === "cart" ? cart : wishlist;
  shopPanelTitle.textContent = activePanel === "cart" ? "Your cart" : "Your wishlist";
  shopPanelItems.replaceChildren();
  shopPanelFooter.hidden = false;
  shopPanelTotal.parentElement.hidden = activePanel !== "cart";

  if (!items.length) {
    const emptyMessage = document.createElement("p");
    emptyMessage.className = "shop-panel-empty";
    emptyMessage.textContent =
      activePanel === "cart"
        ? "Your cart is empty. Add something you love!"
        : "Your wishlist is empty. Save products with the heart button.";
    shopPanelItems.append(emptyMessage);
  }

  items.forEach((item) => {
    const row = document.createElement("article");
    row.className = "shop-panel-item";

    if (item.image) {
      const image = document.createElement("img");
      image.src = item.image;
      image.alt = item.imageAlt || item.title;
      row.append(image);
    }

    const details = document.createElement("div");
    details.className = "shop-panel-item-details";
    const title = document.createElement("h3");
    title.textContent = item.title;
    const price = document.createElement("p");
    price.textContent = formatPrice(item.price);
    details.append(title, price);

    if (activePanel === "cart") {
      const quantityControls = document.createElement("div");
      quantityControls.className = "shop-panel-quantity";
      quantityControls.append(
        createPanelButton(`Decrease ${item.title} quantity`, "decrease", item.id, "−"),
      );
      const quantity = document.createElement("span");
      quantity.textContent = item.quantity;
      quantityControls.append(quantity);
      quantityControls.append(
        createPanelButton(`Increase ${item.title} quantity`, "increase", item.id, "+"),
        createPanelButton(`Remove ${item.title} from cart`, "remove-cart", item.id, "Remove"),
      );
      details.append(quantityControls);
    } else {
      details.append(
        createPanelButton(`Add ${item.title} to cart`, "add-cart", item.id, "Add to cart"),
        createPanelButton(`Remove ${item.title} from wishlist`, "remove-wishlist", item.id, "Remove"),
      );
    }

    row.append(details);
    shopPanelItems.append(row);
  });

  shopPanelTotal.textContent = formatPrice(
    cart.reduce((total, item) => total + item.price * item.quantity, 0),
  );
  shopPanelClear.textContent = activePanel === "cart" ? "Clear cart" : "Clear wishlist";
  shopPanelClear.hidden = items.length === 0;
  updateHeaderCounts();
};

// Select which list to show, render it, and expose the panel to assistive technology.
const openShopPanel = (panel) => {
  activePanel = panel;
  renderPanel();
  shopPanel.hidden = false;
  shopPanelOverlay.hidden = false;
  shopPanel.classList.add("active");
  shopPanelOverlay.classList.add("active");
  shopPanel.setAttribute("aria-hidden", "false");
  shopPanelClose.focus();
};

// Hide the panel and its backdrop together.
const closeShopPanel = () => {
  shopPanel.classList.remove("active");
  shopPanelOverlay.classList.remove("active");
  shopPanel.setAttribute("aria-hidden", "true");
  shopPanel.hidden = true;
  shopPanelOverlay.hidden = true;
};

// Add one unit of a product, increasing its quantity if it is already in the cart.
const addToCart = (product) => {
  const existingItem = cart.find((item) => item.id === product.id);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  saveItems(cartStorageKey, cart);
  renderPanel();
};

// Add or remove a product from the wishlist and refresh its heart button.
const toggleWishlist = (product) => {
  const existingIndex = wishlist.findIndex((item) => item.id === product.id);
  if (existingIndex >= 0) {
    wishlist.splice(existingIndex, 1);
  } else {
    wishlist.push(product);
  }
  saveItems(wishlistStorageKey, wishlist);
  updateProductHeartButtons();
  renderPanel();
};

// Show saved state on each product heart, including items loaded from storage.
const updateProductHeartButtons = () => {
  productCards.forEach((card) => {
    const product = getProductDetails(card);
    if (!product) return;

    card.querySelectorAll(".btn-action").forEach((button) => {
      const icon = button.querySelector("ion-icon");
      if (icon?.getAttribute("name") !== "heart-outline" && icon?.getAttribute("name") !== "heart") {
        return;
      }
      const isSaved = wishlist.some((item) => item.id === product.id);
      icon.setAttribute("name", isSaved ? "heart" : "heart-outline");
      button.classList.toggle("is-saved", isSaved);
      button.setAttribute(
        "aria-label",
        isSaved ? `Remove ${product.title} from wishlist` : `Add ${product.title} to wishlist`,
      );
    });
  });
};

// Show accessible feedback above the main product grid while filtering products.
const statusMessage = document.createElement("p");
statusMessage.className = "catalog-feedback";
statusMessage.setAttribute("aria-live", "polite");
const productGrid = document.querySelector(".product-main .product-grid");
if (productGrid) productGrid.before(statusMessage);

const filterProducts = (query) => {
  const normalizedQuery = query.trim().toLowerCase();
  let visibleCount = 0;

  productCards.forEach((card) => {
    const isMatch = !normalizedQuery || card.textContent.toLowerCase().includes(normalizedQuery);
    card.hidden = !isMatch;
    if (isMatch) visibleCount += 1;
  });

  statusMessage.textContent = normalizedQuery
    ? visibleCount
      ? `${visibleCount} product${visibleCount === 1 ? "" : "s"} found for “${query.trim()}”.`
      : `No products found for “${query.trim()}”. Try another search.`
    : "";
  statusMessage.hidden = !normalizedQuery;
};

// Filter the catalog as the customer types; Enter and the search button jump to results.
searchField?.addEventListener("input", () => filterProducts(searchField.value));
searchField?.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    document.querySelector(".product-main")?.scrollIntoView({ behavior: "smooth" });
  }
});
searchButton?.addEventListener("click", () => {
  filterProducts(searchField?.value || "");
  document.querySelector(".product-main")?.scrollIntoView({ behavior: "smooth" });
});

// Use event delegation so product actions and both sets of navigation buttons share handlers.
document.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof Element)) return;

  const panelTrigger = target.closest(
    ".header-user-actions .action-btn, .mobile-bottom-navigation .action-btn",
  );
  if (panelTrigger) {
    const iconName = panelTrigger.querySelector("ion-icon")?.getAttribute("name");
    if (iconName === "bag-handle-outline") openShopPanel("cart");
    if (iconName === "heart-outline") openShopPanel("wishlist");
    return;
  }

  const addButton = target.closest(".add-cart-btn, .btn-action");
  if (!addButton) return;
  const productCard = addButton.closest(".showcase");
  const product = productCard ? getProductDetails(productCard) : null;
  if (!product) return;

  if (addButton.matches(".add-cart-btn")) {
    addToCart(product);
    return;
  }

  const iconName = addButton.querySelector("ion-icon")?.getAttribute("name");
  if (iconName === "bag-add-outline") {
    addToCart(product);
  } else if (iconName === "heart-outline" || iconName === "heart") {
    toggleWishlist(product);
  }
});

// Close the panel from its close button, backdrop, or clear the currently viewed list.
shopPanelClose.addEventListener("click", closeShopPanel);
shopPanelOverlay.addEventListener("click", closeShopPanel);
shopPanelClear.addEventListener("click", () => {
  if (activePanel === "cart") {
    cart = [];
    saveItems(cartStorageKey, cart);
  } else {
    wishlist = [];
    saveItems(wishlistStorageKey, wishlist);
    updateProductHeartButtons();
  }
  renderPanel();
});

// Handle quantity, remove, and move-to-cart actions from dynamically rendered panel items.
shopPanelItems.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof Element)) return;
  const actionButton = target.closest("[data-panel-action]");
  if (!actionButton) return;

  const { panelAction, productId } = actionButton.dataset;
  const cartItem = cart.find((item) => item.id === productId);

  if (panelAction === "increase" && cartItem) cartItem.quantity += 1;
  if (panelAction === "decrease" && cartItem) {
    cartItem.quantity -= 1;
    if (cartItem.quantity <= 0) cart = cart.filter((item) => item.id !== productId);
  }
  if (panelAction === "remove-cart") cart = cart.filter((item) => item.id !== productId);
  if (panelAction === "remove-wishlist") {
    wishlist = wishlist.filter((item) => item.id !== productId);
    updateProductHeartButtons();
  }
  if (panelAction === "add-cart") {
    const product = wishlist.find((item) => item.id === productId);
    if (product) addToCart(product);
  }

  saveItems(cartStorageKey, cart);
  saveItems(wishlistStorageKey, wishlist);
  renderPanel();
});

// Allow keyboard users to dismiss the shopping panel.
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !shopPanel.hidden) closeShopPanel();
});

// Initialize counters and saved-product states from browser storage.
updateHeaderCounts();
updateProductHeartButtons();
renderPanel();
