;(function(ns) {
  ns.Progress = React.createClass({
    mixins: [Reflux.ListenerMixin],
    propTypes: {
      stores: React.PropTypes.shape({
        progress: React.PropTypes.any.isRequired
      }).isRequired
    },
    componentDidMount: function() {
      this.listenTo(this.props.stores.progress, this.onProgressUpdated);
    },
    getInitialState: function() {
      return {totalClicks: 0};
    },
    onProgressUpdated: function(newProgress) {
      this.setState(newProgress);
    },
    render: function() {
      return React.DOM.p(null,
                         'Total clicks: ',
                         React.DOM.span({className: 'total-clicks'}, this.state.totalClicks)
                        );
    }
  });
})(App.Components);
