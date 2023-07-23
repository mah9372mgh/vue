var app = new Vue({
  el: "#app",
  data: {
    product: "Socks",
    description: "A pair of warm, fuzzy socks",
    aTag: "https://www.w3schools.com/",
    imageSource: "asset/vmSocks-green.png",
    imageAlt: "green-socks",
    inStock: true,
    inventory: 5,
    show: false,
    onSale: true,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantId: 2233,
        variantColor: "green",
      },
      {
        variantId: 2234,
        variantColor: "blue",
      },
    ],
    sizes: ["38", "40", "42"],
  },
});
