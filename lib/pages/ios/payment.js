module.exports = {
  url: function () {
    return "http://www.walmart.com";
  },

  elements: {
    morePaymentOptions: {
      locateStrategy: "accessibility id",
      selector: "More Payment Options"
    },
    visaCheckout: {
      locateStrategy: "accessibility id",
      selector: "Visa Checkout"
    },
    payWithCash: {
      locateStrategy: "accessibility id",
      selector: "Pay With Cash"
    },
    reviewOrder: {
      locateStrategy: "accessibility id",
      selector: "Review Order"
    }
  },

  commands: [{
    selectPayByCash: function () {
      const selectors = this.elements;

      this
        .clickMobileEl(selectors.morePaymentOptions.locateStrategy, selectors.morePaymentOptions.selector)
        .swipeMobileElTo(selectors.visaCheckout.locateStrategy, selectors.visaCheckout.selector, 0, -50)
        .api.pause(3000)
        .clickMobileEl(selectors.payWithCash.locateStrategy, selectors.payWithCash.selector);

      return this;
    },

    reviewOrder: function () {
      const reviewOrder = this.elements.reviewOrder;

      return this
        .clickMobileEl(reviewOrder.locateStrategy, reviewOrder.selector);
    }
  }]
};
