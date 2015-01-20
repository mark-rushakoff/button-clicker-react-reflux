describe('the progress component', function() {
  var totalClicksNode, progressStore;
  Given(function() {
    var actions = App.Factories.Actions.make();
    var stores = App.Factories.Stores.make(actions);
    progressStore = stores.progress;
    var el = React.createElement(App.Components.Progress, {stores: stores});
    var reactNode = React.addons.TestUtils.renderIntoDocument(el);
    totalClicksNode = React.addons.TestUtils.findRenderedDOMComponentWithClass(reactNode, 'total-clicks').getDOMNode();
  });

  Then('it defaults to 0 clicks', function() {
    expect(totalClicksNode.innerText).toEqual('0');
  });

  describe('updating the clicks', function() {
    When(function() {
      progressStore.trigger({totalClicks: 1001});
    });

    Then('the progress count increases', function() {
      expect(totalClicksNode.innerText).toEqual('1001');
    });
  });
});
