var app = new Vue({
  el: "#app",
  data: {
    product: "Socks",
    description: "A pair of warm, fuzzy socks",
    aTag: "https://www.w3schools.com/",
    imageSource: "asset/vmSocks-green.png",
    imageAlt: "green-socks",
    inStock: false,
    inventory: 5,
    show: false,
    onSale: true,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantId: 2233,
        variantColor: "green",
        variantImage: "asset/vmSocks-green.png",
      },
      {
        variantId: 2234,
        variantColor: "blue",
        variantImage: "asset/vmSocks-blue.png",
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
    updatePtoduct: function (variantImage) {
      this.imageSource = variantImage;
    },
  },
});
