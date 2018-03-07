module.exports = {
  url: function () {
    return "http://www.walmart.com";
  },

  elements: {
    description: {
      locateStrategy: "accessibility id",
      selector: 'Your order has been reserved.'
    }
  },

  commands: [{
    confirmOrder: function () {
      const description = this.elements.description;

      return this
        .getMobileEl(description.locateStrategy, description.selector);
    }
  }]
};