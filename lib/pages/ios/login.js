module.exports = {
  url: function () {
    return "http://www.walmart.com";
  },

  elements: {
    username: {
      locateStrategy: "xpath",
      selector: '//XCUIElementTypeTextField[@value="Email"]'
    },
    password: {
      locateStrategy: "xpath",
      selector: '//XCUIElementTypeSecureTextField[@value="Password"]'
    },
    submit:{
      locateStrategy: "accessibility id",
      selector: 'susi_cta_button'
    }
  },

  commands: [{
    login: function (username, password) {
      return this;

      // const elements = this.elements;

      // return this
      //   .api.pause(5000) // Set to 5000
      //   .setMobileElValue(elements.username.locateStrategy, elements.username.selector, username)
      //   .setMobileElValue(elements.password.locateStrategy, elements.password.selector, password)
      //   .clickMobileEl(elements.submit.locateStrategy, elements.submit.selector);

    },

    searchForWelcomeMessage: function () {
      return this;

      // var welcomeMsg = '//XCUIElementTypeStaticText[@name="Welcome,"]';
      // var welcomeName = '//XCUIElementTypeStaticText[@name="MG"]';

      // return this
      // .getMobileEl('xpath', welcomeMsg)
      // .getMobileEl('xpath', welcomeName);
    }

  }]
};