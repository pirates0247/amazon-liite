class Product {
  id;
  image;
  name;
  rating;
  rupees;

  constructor(productDetails) {
    this.id = productDetails.id;
    this.image = productDetails.image;
    this.name = productDetails.name;
    this.rating = productDetails.rating;
    this.rupees = productDetails.rupees;
  }

  getRatingsUrl() {
    return `ratings/rating-${this.rating.stars*10}.png`;
  }

  getPrice() {
    return `₹${this.rupees.toFixed(2)}`;
  }

  extraInfoHTML() {
    return '';
  }
};

class Clothing extends Product {
  sizeChartLink;

  constructor(productDetails) {
    super(productDetails);
    this.sizeChartLink = productDetails.sizeChartLink;
  }

  extraInfoHTML() {
    return `
      <a href="${this.sizeChartLink}" target="_blank">
        Size chart
      </a>
    `;
  }
};

class Girl extends Product {
  sizeChartLink;

  constructor(productDetails) {
    super(productDetails);
    this.sizeChartLink = productDetails.sizeChartLink;
  }

  extraInfoHTML() {
    return `
      <a href="${this.sizeChartLink}" target="_blank">
        Size chart
      </a>
    `;
  }
}

export function getProduct(productId) {

  let matchingProduct;

  products.forEach((product) => {
    if(product.id === productId){
      matchingProduct = product;
    }
  });
  
  return matchingProduct;
}

export let products = [
  {
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    image: "products/athletic-cotton-socks-6-pairs.jpg",
    name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
    rating: {
      stars: 4.5,
      count: 87
    },
    rupees: 700,
    keywords: [
      "socks",
      "sports",
      "apparel"
    ]
  },
  {
    id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    image: "products/intermediate-composite-basketball.jpg",
    name: "Intermediate Size Basketball",
    rating: {
      stars: 4,
      count: 127
    },
    rupees: 1600,
    keywords: [
      "sports",
      "basketballs"
    ]
  },
  {
    id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
    image: "products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
    name: "Adults Plain Cotton T-Shirt - 2 Pack",
    rating: {
      stars: 4.5,
      count: 56
    },
    rupees: 560,
    keywords: [
      "tshirts",
      "apparel",
      "mens"
    ],
    type: "clothing",
    sizeChartLink: "clothing-size-chart.png"
  },
  {
    id: "e43638ce-6aa0-4b85-b27f-e1d07ab98452",
    image: "products/variations/child abuse.webp",
    name: "Buy girl",
    rating: {
      stars: 4.5,
      count: 87
    },
    rupees: 6900,
    keywords: [
      "socks",
      "sports",
      "apparel"
    ],
    type: "girl",
    sizeChartLink: "clothing-size-chart.png"
  }
].map((productDetails) => {
  if(productDetails.type === 'clothing') {
    return new Clothing(productDetails);
  }
  else if(productDetails.type === 'girl'){
    return new Girl(productDetails);
  }
  else{
    return new Product(productDetails);
  }
});
