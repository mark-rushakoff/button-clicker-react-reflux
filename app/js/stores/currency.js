;(function(ns) {
  ns.makeCurrency = function(appActions) {
    var currency = {
      clicks: 0
    };

    return Reflux.createStore({
      listenables: appActions,
      onMainButtonClicked: function() {
        currency.clicks += 1;
        this.trigger(currency);
      }
    });
  };
})(App.Factories.Stores);
