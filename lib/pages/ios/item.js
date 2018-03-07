module.exports = {
  url: function () {
    return "http://www.walmart.com";
  },

  elements: {
    price: {
      locateStrategy: "accessibility id",
      selector: "item_details_price_cell"
    },
    addToCartButton: {
      locateStrategy: "accessibility id",
      selector: "Add to Cart"
    }
  },

  commands: [{
    addToCart: function () {
      const selectors = this.elements;

      return this
        .swipeMobileElTo(selectors.price.locateStrategy, selectors.price.selector, 0, -200)
        // .api.pause(3000)
        .clickMobileEl(selectors.addToCartButton.locateStrategy, selectors.addToCartButton.selector);
    }
  }]
};
