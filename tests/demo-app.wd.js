var Test = require("../lib/example-base-test-class");
var wd = require("wd");
var dpro = require("dpro");

module.exports = new Test({
  tags: ["app", "wd"],

  "Disable notification": function (client) {
    client
      .wdElement('accessibility id', 'Don’t Allow', (el) => {
        client
          .wdClickElement(el, (msg) => {
            console.log(msg)
          });
      })
  },

  "Go to account": function (client) {
    client
      .pause(3000)
      .wdElement('accessibility id', 'Account', (el) => {
        client
          .wdClickElement(el);
      });
  },

  "Go to signin": function (client) {
    client
      .pause(3000)
      .wdElement('accessibility id', 'Sign In or Create an Account', (el) => {
        client
          .wdClickElement(el);
      });
  },

  "Login": function (client) {
    client
      .pause(3000)
      .wdElement('xpath', '//XCUIElementTypeTextField[@value="Email"]', (nel) => {
        client
          .wdType(nel, '')
          .pause(3000)
          .wdElement('xpath', '//XCUIElementTypeSecureTextField[@value="Password"]', (pel) => {
            client
              .wdType(pel, '<password>')
              .pause(3000)
              .wdKeys('\uE006')
              .pause(3000)
              .wdElement('xpath', '//XCUIElementTypeButton[@name="Shop"]', (sel) => {
                client
                  .wdClickElement(sel);
              });
          });
      });
  },

  "Search for ketchup": function (client) {
    client
      .pause(3000)
      .wdElement('accessibility id', 'home_search_cell', (el) => {
        client
          .wdType(el, 'ketchup')
          .pause(4000)
          .wdElement('accessibility id', 'heinz ketchup', (searchel) => {
            client
              .wdClickElement(searchel)
              .pause(5000);
          });
      });
  },

  "Go to second item in search result": function (client) {
    client
      .pause(3000)
      .wdElement('xpath', '//XCUIElementTypeTable[@name="shelf_table"]/XCUIElementTypeCell[2]/XCUIElementTypeStaticText[@name="Name"]', (el) => {
        client
          .wdClickElement(el);
      });
  },

  "Add to cart": function (client) {
    client
      .pause(5000)
      .wdElement('accessibility id', 'item_details_price_cell', (el) => {
        var action = new wd.TouchAction();
        action
          .press({ el })
          .wait({ ms: 800 })
          .moveTo({ x: 0, y: -200 })
          .release();
        client
          .wdPerformTouchAction(action)
          .wdElement('accessibility id', 'Add to Cart');;
      });
  },

  "Pause here": function (client) {
    client.pause(5000);
  }
});
