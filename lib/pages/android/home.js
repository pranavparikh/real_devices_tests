module.exports = {
  url: function () {
    return "http://www.walmart.com";
  },

  elements: {
    navigateHome: {
      locateStrategy: "accessibility id",
      selector: "Navigate home"
    },
    dismiss: {
      locateStrategy: "accessibility id",
      selector: "Don’t Allow"
    },
    search: {
      locateStrategy: "id",
      selector: "com.walmart.android:id/search_src_text"
    },
    signin: {
      locateStrategy: "id",
      selector: "com.walmart.android:id/app_nav_header_sign_in"
    }
  },

  commands: [{
    disableNotification: function () {
      return this;
    },

    searchForTerm: function (term) {
      const selectors = this.elements;

      return this
        // .api.pause(5000)
        // .clickMobileEl(selectors.search.locateStrategy, selectors.search.selector)
        .setMobileElValue(selectors.search.locateStrategy, selectors.search.selector, "heinz "+term) 
        .pressKeycode(66);
    },

    signin: function () {
      const selectors = this.elements;
      return this;

      // return this
      //   .clickMobileEl(selectors.navigateHome.locateStrategy, selectors.navigateHome.selector)
      //   .api.pause(5000)
      //   .clickMobileEl(selectors.signin.locateStrategy, selectors.signin.selector);
    }
  }]
};