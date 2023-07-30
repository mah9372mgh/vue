var app = new Vue({
  el: "#app",
  data: {
    brand: "Vue Masterfull",
    product: "Boots",
    description: "A pair of warm, fuzzy socks",
    aTag: "https://www.w3schools.com/",
    // imageSource: "asset/vmSocks-green.png",
    selectedVariant: 0,
    imageAlt: "green-socks",
    // inStock: false,
    // inventory: 5,
    // show: false,
    onSale: true,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantId: 2233,
        variantColor: "green",
        variantImage: "asset/vmSocks-green.png",
        variantQuantity: 10,
      },
      {
        variantId: 2234,
        variantColor: "blue",
        variantImage: "asset/vmSocks-blue.png",
        variantQuantity: 0,
      },
    ],

    sizes: [
      {
        sizeId: 0,
        sizeNumber: "38",
      },
      {
        sizeId: 1,
        sizeNumber: "40",
      },
      {
        sizeId: 2,
        sizeNumber: "42",
      },
    ],
    cart: 0,
  },
  methods: {
    addToCart: function () {
      this.cart += 1;
    },
    removeFromCart: function () {
      this.cart -= 1;
    },
    updatePtoduct: function (index) {
      this.selectedVariant = index;
      console.log(index);
    },
  },
  computed: {
    title () {
      return this.brand + ' ' + this.product;
    },
    imageSource () {
      return this.variants[this.selectedVariant].variantImage
    },
    inStock () {
      return this.variants[this.selectedVariant].variantQuantity
    },
    onsale () {
      if (this.onSale) {
        return this.brand + ' ' + this.product + ' on sale!'
      }
      return  this.brand + ' ' + this.product + ' not on sale!'
    },
  }
});
