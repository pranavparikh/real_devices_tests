module.exports = {
  url: function () {
    return "http://www.walmart.com";
  },

  elements: {
    goToCartButton: {
      locateStrategy: "accessibility id",
      selector: "Cart"
    }
  },

  commands: [{
    goToCart: function () {
      const button = this.elements.goToCartButton;

      return this
        .clickMobileEl(button.locateStrategy, button.selector);
    }
  }]
};