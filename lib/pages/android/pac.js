module.exports = {
  url: function () {
    return "http://www.walmart.com";
  },

  elements: {
    goToCartButton: {
      locateStrategy: "id",
      selector: "com.walmart.android:id/online_cart_icon"
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