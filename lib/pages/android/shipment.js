module.exports = {
  url: function () {
    return "http://www.walmart.com";
  },

  elements: {
    continue: {
      locateStrategy: "accessibility id",
      selector: "Continue to Payment Options"
    }
  },

  commands: [{
    goToPayment: function () {
      const carryon = this.elements.continue;

      return this
        .clickMobileEl(carryon.locateStrategy, carryon.selector);
    }
  }]
};
