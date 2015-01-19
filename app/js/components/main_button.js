;(function(ns) {
  ns.MainButton = React.createClass({
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
