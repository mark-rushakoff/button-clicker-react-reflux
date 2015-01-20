;(function(ns) {
  ns.makeProgress = function(appActions) {
    var progress = {
      totalClicks: 0
    };

    return Reflux.createStore({
      listenables: appActions,
      onMainButtonClicked: function() {
        progress.totalClicks += 1;
        this.trigger(progress);
      },
      onAppStateLoaded: function(appState) {
        progress = appState.progress;
        this.trigger(progress);
      }
    });
  };
})(App.Factories.Stores);
