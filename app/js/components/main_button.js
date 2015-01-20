;(function(ns) {
  ns.MainButton = React.createClass({
    displayName: 'MainButton',
    propTypes: {
      actions: React.PropTypes.shape({
        mainButtonClicked: React.PropTypes.func.isRequired
      }).isRequired
    },
    render: function() {
      return React.DOM.p({className: 'main-button', onClick: this.props.actions.mainButtonClicked}, 'Click here');
    }
  });
})(App.Components);
