module.exports = {
  url: function () {
    return "http://www.walmart.com";
  },

  elements: {
    price: {
      locateStrategy: "id",
      selector: "com.walmart.android:id/online_price"
    },
    addToCartButton: {
      locateStrategy: "id",
      selector: "com.walmart.android:id/add_to_cart_button"
    }
  },

  commands: [{
    addToCart: function () {
      const selectors = this.elements;

      return this
        .swipeMobileElTo(selectors.price.locateStrategy, selectors.price.selector, 0, -500)
        // .scrollScreen("up")
        // .getMobileEl("-android uiautomator",
        // 'new UiScrollable(new UiSelector().scrollable(true).instance(0)).scrollIntoView(new UiSelector().resourceId("'
        // + selectors.addToCartButton.selector
        // + '").instance(0));')
        .clickMobileEl(selectors.addToCartButton.locateStrategy, selectors.addToCartButton.selector);
    }
  }]
};
