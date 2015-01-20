;(function(ns, App) {
  ns.makeMain = function() {
    var actions = App.Factories.Actions.make();
    var stores = App.Factories.Stores.make(actions);
    var defaultProps = {
      actions: actions,
      stores: stores
    };

    var buttonComponent = React.createElement(App.Components.MainButton, defaultProps);
    var progressComponent = React.createElement(App.Components.Progress, defaultProps);

    return React.DOM.div(null,
                         buttonComponent,
                         progressComponent
                        );
  };
})(App.Factories.Controllers, App);
