var app = new Vue ({
  el: '#app',
  data: {
    product: 'Socks',
    description: 'A pair of warm, fuzzy socks',
    aTag: 'https://www.w3schools.com/',
    imageSource: 'asset/vmSocks-green.png',
    imageAlt: 'green-socks',
    inStock: true,
    inventory: 5,
    show: false,
    onSale: true,
  }
})