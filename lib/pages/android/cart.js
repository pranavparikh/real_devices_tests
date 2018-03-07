module.exports = {
  url: function () {
    return "http://www.walmart.com";
  },

  elements: {
    description: {
      locateStrategy: "xpath",
      selector: '//XCUIElementTypeLink[contains(@name, "headerCheckout")]'
    },

    checkout: {
      locateStrategy: "xpath",
      selector: '//android.view.View[@content-desc="Check Out"]'
    }
  },

  commands: [{
    verifyDescription: function (des) {
      const description = this.elements.description;

      return this
        .getMobileEl(description.locateStrategy, description.selector);
    },

    beginCheckout: function () {
      const checkout = this.elements.checkout;

      return this
        .clickMobileEl(checkout.locateStrategy, checkout.selector);
    }
  }]
};