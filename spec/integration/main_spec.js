describe('integration: main', function() {
  var reactNode;
  Given(function() {
    var controller = App.Factories.Controllers.makeMain();
    reactNode = React.addons.TestUtils.renderIntoDocument(controller);
  });

  Then('the total clicks initialize as 0', function() {
    var totalClicksNode = React.addons.TestUtils.findRenderedDOMComponentWithClass(reactNode, 'total-clicks').getDOMNode();
    expect(totalClicksNode.innerText).toEqual('0');
  });

  describe('clicking', function() {
    When(function() {
      var buttonNode = React.addons.TestUtils.findRenderedDOMComponentWithClass(reactNode, 'main-button').getDOMNode();
      for (var i = 0; i < 5; i++) {
        React.addons.TestUtils.Simulate.click(buttonNode);
      }
    });

    Then('increments the total clicks', function(done) {
      setTimeout(function() {
        var totalClicksNode = React.addons.TestUtils.findRenderedDOMComponentWithClass(reactNode, 'total-clicks').getDOMNode();
        expect(totalClicksNode.innerText).toEqual('5');
        done();
      }, 0);
    });
  });
});
