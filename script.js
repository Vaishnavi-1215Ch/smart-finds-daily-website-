// Add products here. Keep each product in its own collection and replace the
// title, description, price, image and URL placeholders with your own details.
const digitalProducts = [
  {
    category: "Travel planners",
    title: "The Ultimate Travel Planner – 52 Pages",
    description: "Plan your next adventure with this 52-page travel planner. Includes a printable PDF and an editable Canva version.",
    price: "$4.99 USD",
    image: "travel-planner-cover.png",
    imageAlt: "The Ultimate Travel Planner cover",
    showImageTag: false,
    imageFit: "contain",
    url: "https://smartfinds1215.gumroad.com/l/rndgum"
  },
  {
    category: "Printable planners",
    title: "Weekly Meal Planner & Grocery List",
    description: "Plan your meals, organize your grocery shopping and manage your food budget with this convenient 5-page planner bundle. Includes a Weekly Meal Planner, Grocery List, Monthly Dinner Planner, Pantry Check, Budget Tracker, an editable Canva template and a printable US Letter PDF.",
    price: "$4 USD",
    image: "meal-planner-cover.png",
    imageAlt: "Weekly Meal Planner and Grocery List cover",
    showImageTag: false,
    imageFit: "contain",
    url: "https://smartfinds1215.gumroad.com/l/cwpqo"
  },
  {
    category: "Colouring books",
    title: "Relaxation Floral Coloring Book for Adults: 40 Mandala, Flower & Cozy Pages",
    description: "Take a screen-free break with 40 relaxing coloring pages featuring mandalas, beautiful florals and cozy scenes. Includes 12 mandala designs, 12 floral designs, 12 cozy scenes, a welcome page and notes page, a printable US Letter PDF, and a digital coloring PDF for tablets.",
    price: "$5.99 USD",
    image: "floral-coloring-book-cover.png",
    imageAlt: "Relaxation Floral Coloring Book for Adults cover",
    showImageTag: false,
    imageFit: "contain",
    url: "https://smartfinds1215.gumroad.com/l/ctxzvx"
  },
  {
    category: "Printable planners",
    title: "College Student Notebook | 150-Page Printable Planner and Notes",
    description: "Stay organized throughout your academic journey with this 150-page college student notebook. A useful resource for planning, studying and keeping notes in one place. Format: Printable PDF + editable Canva template.",
    price: "$7.99 USD",
    image: "college-notebook-cover.png",
    imageAlt: "College Student Notebook cover",
    showImageTag: false,
    imageFit: "contain",
    url: "https://smartfinds1215.gumroad.com/l/obpydc"
  },
  {
    category: "Other Downloads",
    title: "Undated Digital Planner | Hyperlinked iPad Planner (40-Page PDF)",
    description: "Organize your year with this 40-page undated digital planner. Navigate easily between your year, monthly, weekly, daily and notes pages using clickable hyperlinks. Start any day and reuse it every year. Features 3 cover colours (beige, sage and blush), a year overview and 24 monthly pages, weekly and daily planning pages, habit tracker, budget and goals pages, lined, grid and Cornell notes, and a sticker sheet. Format: Hyperlinked PDF for GoodNotes and other PDF annotation apps.",
    price: "$6 USD",
    image: "digital-planner-cover.png",
    imageAlt: "Undated Digital Planner cover",
    showImageTag: false,
    imageFit: "contain",
    url: "https://smartfinds1215.gumroad.com/l/zrikqc"
  },
  {
    category: "Other Downloads",
    title: "52-Week Savings Challenge | Printable Savings Tracker PDF",
    description: "Make saving feel like a game! Choose a savings challenge, track each amount you save and watch your progress grow. This 13-page printable bundle includes the 52-Week Savings Challenge, Reverse 52-Week Challenge, 100 Envelope Challenge, $1,000 Mini Challenge, 26-Paycheck Challenge, 30-Day No-Spend Calendar, Savings Goal Tracker, Monthly Tracker and Savings Log. Format: Printable US Letter PDF.",
    price: "$6 USD",
    image: "52-week-savings-cover.png",
    imageAlt: "52-Week Savings Challenge cover",
    showImageTag: false,
    imageFit: "contain",
    freeVersionUrl: "https://smartfinds1215.gumroad.com/l/wqtyme",
    url: "https://smartfinds1215.gumroad.com/l/wpldkw"
  },
  {
    category: "Other Downloads",
    title: "Free Savings Challenge Printable (52-Week + 100 Envelope)",
    description: "Start your savings journey with this free printable savings challenge! Get started with the 52-week savings challenge and 100-envelope challenge, track your progress and work towards your savings goals.",
    price: "FREE",
    image: "free-savings-challenge-cover.png",
    imageAlt: "Free Savings Challenge Printable cover",
    showImageTag: false,
    badgeText: "FREE",
    imageFit: "contain",
    buttonText: "Get It Free",
    url: "https://smartfinds1215.gumroad.com/l/wqtyme"
  },
  {
    category: "Printable planners",
    title: "Undated ADHD Printable Planner",
    description: "An undated printable planner designed to help users organize their tasks, plan their days and keep track of their goals. Start whenever you like and use it at your own pace.",
    price: "$5 USD",
    image: "adhd-planner-cover.png",
    imageAlt: "Undated ADHD Printable Planner cover",
    showImageTag: false,
    imageFit: "contain",
    url: "https://smartfinds1215.gumroad.com/l/yhpfhx"
  },
  {
    category: "Other Downloads",
    title: "Boho Baby Shower Printable Bundle | Games, Signs and Cards",
    description: "Plan a beautiful boho-themed baby shower with this printable bundle of games, signs and cards. Make your celebration special with coordinated decorations and fun activities for your guests. Format: Printable PDF + Canva template.",
    price: "$5.99 USD",
    image: "boho-baby-shower-cover.png",
    imageAlt: "Boho Baby Shower Printable Bundle cover",
    showImageTag: false,
    imageFit: "contain",
    url: "https://smartfinds1215.gumroad.com/l/ggmthj"
  }
];

const affiliateProducts = [
  {
    category: "Fashion",
    title: "Carrylux Large Capacity Croco Pattern Tote Bag",
    description: "A stylish and spacious tote bag featuring a crocodile-textured pattern. A versatile everyday accessory for carrying your essentials to work, shopping or outings.",
    price: "₹399",
    rating: "4.1/5 (4,648 ratings)",
    image: "carrylux-tote-bag.avif",
    imageAlt: "Carrylux large capacity crocodile-pattern tote bag",
    showImageTag: false,
    imageFit: "contain",
    url: "https://link.amazon/B01FKXU9l"
  },
  {
    category: "Fashion",
    subcategory: "Dresses",
    title: "Shasmi Women's Cinched-Waist Western Maxi Dress",
    description: "Elegant V-neck maxi dress featuring puff sleeves, a flattering cinched waist and a flowing A-line silhouette.",
    price: "₹649",
    rating: "8.6/10",
    ratingCount: "2,338 reviews",
    ratingStar: true,
    image: "shasmi-maxi-dress.avif",
    imageAlt: "Shasmi Women's Cinched-Waist Western Maxi Dress",
    showImageTag: false,
    imageFit: "contain",
    url: "https://www.amazon.in/Shasmi-Cinched-Western-246-Brown-2XL/dp/B0FLKCCS62?pf_rd_r=GBHS91SCRQD40G0A0A81&pf_rd_p=286f3373-742a-418d-b575-b70b276829ea&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&linkCode=sl2&tag=smartfind050b-21&linkId=3c2d9b644284c67d8c6e238fa0ef481d&ref_=as_li_ss_tl&ascsubtag=srctok-41957f6ce8c77e3c&btn_type=ss&btn_ref=srctok-41957f6ce8c77e3c&th=1&psc=1"
  },
  {
    category: "Fashion",
    subcategory: "Women's Footwear",
    title: "XE Looks Women's Elegant Block Heel Sandals",
    description: "Elegant brown block heel sandals featuring stretchable straps, a lightweight design and a comfortable cushioned sole.",
    price: "₹738.98",
    rating: "4.1/5",
    ratingCount: "89 ratings",
    ratingStar: true,
    image: "xe-looks-brown-heels.avif",
    imageAlt: "XE Looks Women's Elegant Block Heel Sandals",
    showImageTag: false,
    imageFit: "contain",
    url: "https://www.amazon.in/dp/B0C3XVB2TK?lv=shuf&_encoding=UTF8&utm_medium=organic&social_share=cm_sw_r_cp_ud_dp_RSN02J1VH5F21XNN8FYY&utm_source=Pinterest&channelId=716&plpRedirect=mhFallback&th=1&psc=1&linkCode=ll2&tag=smartfind050b-21&linkId=53b2723be27245092fbe68b56d069d82&ref_=as_li_ss_tl"
  },
  {
    category: "Fashion",
    subcategory: "Jewellery",
    title: "Shining Diva Fashion 5 Pcs Heart Butterfly Pearl Necklace Jewellery Set",
    description: "Add a touch of elegance to your outfits with this beautiful 5-piece heart, butterfly and pearl necklace jewellery set. A lovely accessory set for everyday styling and gifting.",
    price: "₹268.99",
    rating: "3.5/5",
    ratingCount: "1,069 ratings",
    ratingStar: true,
    image: "shining-diva-necklace-set.avif",
    imageAlt: "Shining Diva heart, butterfly and pearl necklace jewellery set",
    showImageTag: false,
    imageFit: "contain",
    url: "https://www.amazon.in/Shining-Diva-Fashion-Butterfly-16476np/dp/B0DYVPP86H?psc=1&ascsubtag=srctok-2ede6dbc47864097&btn_type=ss&btn_ref=srctok-2ede6dbc47864097&linkCode=ll2&tag=smartfind050b-21&linkId=f72267e7be2c14b076b799c3defa98dd&ref_=as_li_ss_tl"
  },
  {
    category: "Jewellery",
    title: "Shining Diva Fashion Latest Stylish Rose Gold Austrian Crystal Bracelet",
    description: "A rose gold bracelet with Austrian crystals.",
    price: "₹297",
    mrp: "₹1,999",
    rating: "4.1/5",
    ratingCount: "2,821 ratings",
    ratingStar: true,
    image: "shining-diva-jewellery.jpg",
    imageAlt: "Shining Diva Fashion Latest Stylish Rose Gold Austrian Crystal Bracelet",
    showImageTag: false,
    imageFit: "contain",
    url: "https://www.amazon.in/Shining-Diva-Fashion-Austrian-11942b/dp/B091MK45DB?pd_rd_w=nLXPM&content-id=amzn1.sym.2fa5ef78-d215-4b54-bdb7-fa3d3620b822&pf_rd_p=2fa5ef78-d215-4b54-bdb7-fa3d3620b822&pf_rd_r=DKQ9559WAM81KG0W219R&pd_rd_wg=9At40&pd_rd_r=09a5f26e-2aa4-475a-aa06-e7e9b67811e2&pd_rd_i=B091MK45DB&psc=1&ascsubtag=srctok-32c83e41bdb64de2&btn_type=ss&btn_ref=srctok-32c83e41bdb64de2&linkCode=ll2&tag=smartfind050b-21&linkId=229e2e54eb0a2ce2e6849fe921b9b728&ref_=as_li_ss_tl"
  },
  {
    category: "Fashion",
    subcategory: "Sling Bags",
    title: "Lyrovo Travel Crossbody Crescent Bag",
    description: "Stylish and practical half-moon sling bag made from soft, durable nylon. Features an adjustable shoulder strap, smooth zipper and spacious storage. Suitable for travel and everyday use.",
    price: "₹479",
    rating: "4.3/5",
    ratingCount: "1,162 ratings",
    ratingStar: true,
    image: "lyrovo-crescent-bag.avif",
    imageAlt: "Lyrovo travel crossbody crescent bag",
    showImageTag: false,
    imageFit: "contain",
    url: "https://www.amazon.in/Lyrovo-Travel-Crossbody-Crescent-Shoulder/dp/B0F5GS19M1?ascsubtag=srctok-168a0e84571064e3&btn_type=ss&btn_ref=srctok-168a0e84571064e3&th=1&linkCode=ll2&tag=smartfind050b-21&linkId=a04021068e1d8e82bd14acb4163c31a1&ref_=as_li_ss_tl"
  },
  {
    category: "Fashion",
    subcategory: "Watches",
    title: "Fossil Stainless Steel Women Karli Rose Gold Dial Analog Watch BQ3181",
    description: "Elevate your everyday style with this elegant Fossil Karli women's watch. Features a beautiful rose gold dial, stainless steel rose gold band and a sophisticated crystal-detail bezel.",
    price: "₹7,362.74",
    rating: "4.5/5",
    ratingCount: "3,556 ratings",
    ratingStar: true,
    image: "fossil-rose-gold-watch.avif",
    imageAlt: "Fossil Karli rose gold women's watch",
    showImageTag: false,
    imageFit: "contain",
    url: "https://www.amazon.in/Fossil-Analog-Rose-Womens-Watch-BQ3181/dp/B078Y2PJL4?crid=2ZV59RYY57H9O&dib=eyJ2IjoiMSJ9.0rjGjn-EfvNMwk21goTG8MBh4p-jYN2FlGZjq5FV1gzRm2TTBt5dObIRb42lGHlv1yTMUDLpxFRrDJ7cwPbzH4niqklFHh4Y5l5kq9yiaxXYbKfjool43VdxDzirs7Pb9J-7MP1T33ikV2AlEXI7t5H8yYWro5g99FqBPKHO3TNXwMY_Z8EAwl7tcvSYUiOnaGqZkP3CP6TwG_gCEq5rjJ2kyWfvs4RY9IchiMzPi9nwWn8JneVKEBwMKPqpH3xZUk88u3D2_vXJAW_7lPF2XeRDddRT-g24BAKTgdCtEoo.fFqDqLKwlxHQ6VeYewzz8rTtlO-DD5_njcZwJiQruOo&dib_tag=se&keywords=watches+for+woman&qid=1794111920&sprefix=watches%2Caps%2C478&sr=8-33&ascsubtag=srctok-1ad2701d640e531f&btn_type=ss&btn_ref=srctok-1ad2701d640e531f&linkCode=ll2&tag=smartfind050b-21&linkId=6604712470d54362c5800a71d45786a3&ref_=as_li_ss_tl"
  },
  {
    category: "Fashion",
    subcategory: "Women's Clothing",
    title: "Mehrang Polycotton Skirt with Shorts for Women's & Girls",
    description: "Stylish high-waist flared skater mini skirt with built-in shorts. Made from polycotton, this versatile skirt combines comfort and style for casual everyday outfits.",
    price: "₹379",
    rating: "4.2/5",
    ratingCount: "1,170 ratings",
    ratingStar: true,
    image: "mehrang-skater-skirt.jpg",
    imageAlt: "Mehrang polycotton skater skirt with shorts",
    showImageTag: false,
    imageFit: "contain",
    url: "https://www.amazon.in/Mehrang-Shorts-Womens-Flared-Skater/dp/B0DJRD1RC7?content-id=amzn1.sym.e56084ea-0096-4303-b5e6-9e157bd6cb3b%3Aamzn1.sym.e56084ea-0096-4303-b5e6-9e157bd6cb3b&crid=1BFD412Y5YCW9&cv_ct_cx=pencil%2Bskirts%2Bfor%2Bwomen&keywords=pencil%2Bskirts%2Bfor%2Bwomen&pd_rd_i=B0DJRD1RC7&pd_rd_r=f3124199-2eec-46d1-a96b-acef3f28e61c&pd_rd_w=VikJZ&pd_rd_wg=YO7zJ&pf_rd_p=e56084ea-0096-4303-b5e6-9e157bd6cb3b&pf_rd_r=6HVHT0NEBET1DB59F84Y&qid=1794064187&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=pencil%2Bski%2Caps%2C335&sr=1-4-883a54c7-f466-4d42-997c-6d482a360a1a-spons&aref=YEkOOzYhcI&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM&th=1&ascsubtag=srctok-113896cb3c3a1c89&btn_type=ss&btn_ref=srctok-113896cb3c3a1c89&psc=1&linkCode=ll2&tag=smartfind050b-21&linkId=415ae2ebc87f7441dc0732fd6ecd4edc&ref_=as_li_ss_tl"
  },
  {
    category: "Jewellery",
    title: "Shining Diva Fashion Rose Gold Austrian Crystal Bracelet",
    description: "Elegant rose gold bracelet featuring colourful Austrian crystals. A beautiful accessory for everyday wear and gifting.",
    price: "₹297",
    mrp: "₹1,999",
    rating: "4.1/5",
    ratingCount: "2,821 ratings",
    ratingStar: true,
    image: "shining-diva-jewellery.jpg",
    imageAlt: "Shining Diva Fashion Rose Gold Austrian Crystal Bracelet",
    showImageTag: false,
    imageFit: "contain",
    url: "https://www.amazon.in/Shining-Diva-Fashion-Austrian-11942b/dp/B091MK45DB?pd_rd_w=nLXPM&content-id=amzn1.sym.2fa5ef78-d215-4b54-bdb7-fa3d3620b822&pf_rd_p=2fa5ef78-d215-4b54-bdb7-fa3d3620b822&pf_rd_r=DKQ9559WAM81KG0W219R&pd_rd_wg=9At40&pd_rd_r=09a5f26e-2aa4-475a-aa06-e7e9b67811e2&pd_rd_i=B091MK45DB&psc=1&ascsubtag=srctok-32c83e41bdb64de2&btn_type=ss&btn_ref=srctok-32c83e41bdb64de2&linkCode=ll2&tag=smartfind050b-21&linkId=229e2e54eb0a2ce2e6849fe921b9b728&ref_=as_li_ss_tl"
  },
  {
    category: "Home and lifestyle",
    subcategory: "Lighting",
    title: "Motion Sensor Light for Home – MAZ-TEK",
    description: "Brighten your home with these USB rechargeable wireless motion sensor LED lights. Self-adhesive design, ideal for wardrobes, cupboards, stairs, kitchens and bedrooms. Pack of 2 round lights.",
    price: "₹299",
    rating: "4.6/5",
    ratingCount: "16,022 ratings",
    ratingStar: true,
    image: "maztek-motion-sensor-light.avif",
    imageAlt: "MAZ-TEK motion sensor LED lights",
    showImageTag: false,
    imageFit: "contain",
    url: "https://www.amazon.in/Rechargeable-Wireless-Adhesive-Induction-Wardrobe/dp/B0H7MK5V2F?pd_rd_w=nfiUE&content-id=amzn1.sym.7edc8fe7-49c8-4837-acf4-779a8e8647e2&pf_rd_p=7edc8fe7-49c8-4837-acf4-779a8e8647e2&pf_rd_r=9X0RB999F8ZW7W2TKY7K&pd_rd_wg=lIVSF&pd_rd_r=f74514ed-0acc-4a6d-a713-0609b760183b&pd_rd_i=B0H7MK5V2F&th=1&ascsubtag=srctok-1e04200b38cdf0dd&btn_type=ss&btn_ref=srctok-1e04200b38cdf0dd&linkCode=ll2&tag=smartfind050b-21&linkId=ce1d8cb7ea98591c5ff0f868a29a8f7c&ref_=as_li_ss_tl"
  }
];

const catalogs = [
  {
    name: "digital",
    products: digitalProducts,
    grid: document.querySelector("#digital-product-grid"),
    emptyMessage: document.querySelector("#digital-empty"),
    buttonLabel: "Buy Now",
    linkPlaceholder: "Add the Gumroad product URL in script.js to activate."
  },
  {
    name: "affiliate",
    products: affiliateProducts,
    grid: document.querySelector("#affiliate-product-grid"),
    emptyMessage: document.querySelector("#affiliate-empty"),
    buttonLabel: "Shop Now",
    linkPlaceholder: "Add the affiliate URL in script.js to activate."
  }
];

const activeFilters = { digital: "All", affiliate: "All" };
const searchInput = document.querySelector("#product-search");
const clearSearchButton = document.querySelector("#clear-search");
const filterButtons = document.querySelectorAll(".filter-button");
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

function createProductCard(product, catalog) {
  const card = document.createElement("article");
  card.className = "product-card";
  card.dataset.category = product.category;

  const media = document.createElement("div");
  media.className = "product-image";

  if (product.image) {
    const image = document.createElement("img");
    image.src = product.image;
    image.alt = product.imageAlt;
    image.loading = product.imageFit === "contain" ? "eager" : "lazy";
    if (product.imageFit === "contain") {
      image.classList.add("product-image-contain");
    }
    image.addEventListener("error", () => {
      media.classList.add("image-unavailable");
      image.remove();
    }, { once: true });
    media.append(image);
  } else {
    media.classList.add("image-unavailable", "cover-unavailable");
    media.setAttribute("role", "img");
    media.setAttribute("aria-label", product.imageAlt);
  }

  if (product.showImageTag !== false) {
    const imageLabel = document.createElement("span");
    imageLabel.className = "product-tag";
    imageLabel.textContent = product.image ? "IMAGE PLACEHOLDER" : "COVER IMAGE NEEDED";
    media.append(imageLabel);
  }

  if (product.badgeText) {
    const badge = document.createElement("span");
    badge.className = "product-tag product-tag-free";
    badge.textContent = product.badgeText;
    media.append(badge);
  }

  const details = document.createElement("div");
  details.className = "product-info";

  const text = document.createElement("div");
  const category = document.createElement("p");
  category.className = "product-category";
  category.textContent = product.subcategory
    ? `${product.category} – ${product.subcategory}`
    : product.category;

  const title = document.createElement("h3");
  title.textContent = product.title;

  const description = document.createElement("p");
  description.className = "product-description";
  description.textContent = product.description;
  if (product.freeVersionUrl) {
    const freeVersionLink = document.createElement("a");
    freeVersionLink.className = "product-description-link";
    freeVersionLink.href = product.freeVersionUrl;
    freeVersionLink.target = "_blank";
    freeVersionLink.rel = "noopener noreferrer";
    freeVersionLink.textContent = "Get the free version";
    description.append(" A free version is also available: ", freeVersionLink, ".");
  }
  text.append(category, title, description);
  if (product.rating) {
    const rating = document.createElement("p");
    rating.className = "product-rating";
    if (product.ratingStar) {
      const star = document.createElement("span");
      star.className = "product-rating-star";
      star.setAttribute("aria-hidden", "true");
      star.textContent = "★";
      rating.append(star, document.createTextNode(` ${product.rating} · ${product.ratingCount}`));
    } else {
      rating.textContent = product.rating;
    }
    text.append(rating);
  }

  details.append(text);
  if (product.price) {
    const price = document.createElement("p");
    price.className = "product-price";
    if (product.mrp) {
      price.classList.add("product-price-with-mrp");
      const currentPrice = document.createElement("span");
      currentPrice.className = "product-price-current";
      currentPrice.textContent = product.price;
      const mrp = document.createElement("span");
      mrp.className = "product-price-mrp";
      mrp.textContent = product.mrp;
      price.append(currentPrice, mrp);
    } else {
      price.textContent = product.price;
    }
    details.append(price);
  }

  const action = product.url
    ? document.createElement("a")
    : document.createElement("button");
  const actionLabel = product.buttonText || catalog.buttonLabel;
  action.className = "product-link product-action";
  action.textContent = actionLabel;
  action.setAttribute("aria-label", `${actionLabel}: ${product.title}`);

  if (product.url) {
    action.href = product.url;
    action.target = "_blank";
    action.rel = "noopener noreferrer";
  } else {
    action.type = "button";
    action.disabled = true;
    action.title = catalog.linkPlaceholder;
  }

  const linkStatus = document.createElement("p");
  linkStatus.className = "product-link-status";
  linkStatus.textContent = product.url ? "Opens in a new tab" : catalog.linkPlaceholder;

  card.append(media, details, action, linkStatus);
  return card;
}

function renderCatalog(catalog) {
  const fragment = document.createDocumentFragment();
  catalog.products.forEach((product) => {
    fragment.append(createProductCard(product, catalog));
  });
  catalog.grid.replaceChildren(fragment);
}

function updateCatalogVisibility() {
  const query = searchInput.value.trim().toLocaleLowerCase();
  clearSearchButton.hidden = query.length === 0;

  catalogs.forEach((catalog) => {
    let visibleCount = 0;
    const selectedCategory = activeFilters[catalog.name];
    const hasCategoryProducts = selectedCategory === "All"
      || catalog.products.some((product) => product.category === selectedCategory);

    catalog.grid.querySelectorAll(".product-card").forEach((card, index) => {
      const product = catalog.products[index];
      const matchesCategory = selectedCategory === "All"
        || product.category === activeFilters[catalog.name];
      const searchableText = [
        product.title,
        product.description,
        product.category,
        product.subcategory
      ].join(" ").toLocaleLowerCase();
      const matchesSearch = searchableText.includes(query);
      card.hidden = !matchesCategory || !matchesSearch;
      if (!card.hidden) visibleCount += 1;
    });

    if (catalog.name === "digital") {
      catalog.emptyMessage.textContent = selectedCategory !== "All" && !hasCategoryProducts
        ? "No products in this category just yet. Check back soon!"
        : "No digital products match your search yet.";
    }
    catalog.emptyMessage.hidden = visibleCount > 0;
  });
}

catalogs.forEach(renderCatalog);

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const catalogName = button.dataset.catalog;
    activeFilters[catalogName] = button.dataset.filter;

    filterButtons.forEach((candidate) => {
      if (candidate.dataset.catalog === catalogName) {
        const isActive = candidate === button;
        candidate.classList.toggle("active", isActive);
        candidate.setAttribute("aria-pressed", String(isActive));
      }
    });

    updateCatalogVisibility();
  });
});

searchInput.addEventListener("input", updateCatalogVisibility);
clearSearchButton.addEventListener("click", () => {
  searchInput.value = "";
  searchInput.focus();
  updateCatalogVisibility();
});

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  menuToggle.setAttribute("aria-label", isExpanded ? "Open navigation" : "Close navigation");
  mainNav.classList.toggle("open", !isExpanded);
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    mainNav.classList.remove("open");
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();
