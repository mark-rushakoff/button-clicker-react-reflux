describe('the main button component', function() {
  var clickableNode, buttonClickedListener, unsub;
  Given(function() {
    var actions = App.Factories.Actions.make();
    var el = React.createElement(App.Components.MainButton, {actions: actions});
    var reactNode = React.addons.TestUtils.renderIntoDocument(el, {actions: actions});
    clickableNode = React.addons.TestUtils.findRenderedDOMComponentWithClass(reactNode, 'main-button');

    buttonClickedListener = jasmine.createSpy();

    unsub = actions.mainButtonClicked.listen(buttonClickedListener);
  });

  afterEach(function() {
    unsub();
  });

  describe('clicking it', function() {
    When(function() {
      React.addons.TestUtils.Simulate.click(clickableNode);
    });

    Then('the mainButtonClicked action is triggered', function(done) {
      setTimeout(function() {
        expect(buttonClickedListener).toHaveBeenCalled();
        done();
      }, 0);
    });
  });
});
