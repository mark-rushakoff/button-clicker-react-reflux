;(function(ns) {
  ns.make = function() {
    return Reflux.createActions([
      'mainButtonClicked',
      'appStateLoaded'
    ]);
  };
})(App.Factories.Actions);
