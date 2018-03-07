module.exports = {
  url: function () {
    return "http://www.walmart.com";
  },

  elements: {
    continue: {
      locateStrategy: "accessibility id",
      selector: "Continue to Shipping Address"
    }
  },

  commands: [{
    goToShippingAddress: function () {
      const carryon = this.elements.continue;

      return this
        .clickMobileEl(carryon.locateStrategy, carryon.selector);
    }
  }]
};
