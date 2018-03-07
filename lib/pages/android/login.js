module.exports = {
  url: function () {
    return "http://www.walmart.com";
  },

  elements: {
    username: {
      locateStrategy: "id",
      selector: 'com.walmart.android:id/email'
    },
    password: {
      locateStrategy: "id",
      selector: 'com.walmart.android:id/password'
    },
    submit:{
      locateStrategy: "id",
      selector: 'com.walmart.android:id/signin_button'
    }
  },

  commands: [{
    login: function (username, password) {
      // const elements = this.elements;

      // return this
      //   .setMobileElValue(elements.username.locateStrategy, elements.username.selector, username)
      //   .setMobileElValue(elements.password.locateStrategy, elements.password.selector, password)
      //   // .hideKeyboard()
      //   .clickMobileEl(elements.submit.locateStrategy, elements.submit.selector);

      return this;
    },

    searchForWelcomeMessage: function () {
      return this;
    }
  }]
};