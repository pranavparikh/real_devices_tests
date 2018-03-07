module.exports = {
  url: function () {
    return "http://www.walmart.com";
  },

  elements: {
    secondItem: {
      locateStrategy: "xpath",
      selector: '//android.widget.FrameLayout[1]'
      + '/android.widget.RelativeLayout'
      + '/android.support.v7.widget.RecyclerView/'
      + 'android.widget.LinearLayout[2]'
    }
  },

  commands: [{
    goToResult: function (index) {
      const item = this.elements.secondItem;

      return this;
        // .clickMobileEl(item.locateStrategy, item.selector);
    }
  }]
};
