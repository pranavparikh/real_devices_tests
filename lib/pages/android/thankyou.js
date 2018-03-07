module.exports = {
  url: function () {
    return "http://www.walmart.com";
  },

  elements: {
    description: {
      locateStrategy: "accessibility id",
      selector: 'Continue Shopping'
    }
  },

  commands: [{
    confirmOrder: function () {
      const description = this.elements.description;

      return this
        .api.pause(3000)
        // .getMobileEl(description.locateStrategy, description.selector);
    }
  }]
};