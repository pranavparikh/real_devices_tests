module.exports = {
  url: function () {
    return "http://www.walmart.com";
  },

  elements: {
    secondItem: {
      locateStrategy: "xpath",
      selector: '//XCUIElementTypeTable[@name="shelf_table"]/XCUIElementTypeAny[3]/XCUIElementTypeOther[1]'
    }
  },

  commands: [{
    goToResult: function (index) {
      const item = this.elements.secondItem;

      return this
         .api.pause(5000) // Set to 5000
      // .scrollScreen("down")
        .swipeScreenTo(30, 450, 0, -50)
        .clickMobileEl(item.locateStrategy, item.selector);
    }
  }]
};
