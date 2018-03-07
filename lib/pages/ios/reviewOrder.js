module.exports = {
  url: function () {
    return "http://www.walmart.com";
  },

  elements: {
    continue: {
      locateStrategy: "accessibility id",
      selector: "Continue"
    }
  },

  commands: [{
    placeOrder: function () {
      const carryon = this.elements.continue;

      return this
        .clickMobileEl(carryon.locateStrategy, carryon.selector);
    }
  }]
};
