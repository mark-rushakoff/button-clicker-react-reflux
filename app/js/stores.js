;(function(ns) {
  ns.make = function(actions) {
    return {
      currency: ns.makeCurrency(actions),
      progress: ns.makeProgress(actions)
    };
  };
})(App.Factories.Stores);
