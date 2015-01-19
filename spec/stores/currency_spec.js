describe('the currency store', function() {
  var actions, store, storeChangedListener, unsub;
  Given(function() {
    storeChangedListener = jasmine.createSpy('storeChangedListener');
    actions = App.Factories.Actions.make();
    store = App.Factories.Stores.makeCurrency(actions);
    unsub = store.listen(storeChangedListener);
  });

  afterEach(function() {
    unsub();
  });

  describe('on the buttonClickedAction', function() {
    When(function() {
      actions.mainButtonClicked.trigger();
    });

    Then('the currency store increases its clicks', function() {
      expect(storeChangedListener).toHaveBeenCalledWith({clicks: 1});
    });
  });
});
