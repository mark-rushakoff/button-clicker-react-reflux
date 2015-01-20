describe('the progress store', function() {
  var actions, store, progressChangedListener, unsub;
  Given(function() {
    progressChangedListener = jasmine.createSpy('progressChangedListener');
    actions = App.Factories.Actions.make();
    store = App.Factories.Stores.makeProgress(actions);
    unsub = store.listen(progressChangedListener);
  });

  afterEach(function() {
    unsub();
  });

  describe('on the mainButtonClicked action', function() {
    When(function() {
      actions.mainButtonClicked.trigger();
    });

    Then('the currency store increases its clicks', function() {
      expect(progressChangedListener).toHaveBeenCalledWith({totalClicks: 1});
    });
  });

  describe('on the appStateLoaded action', function() {
    When(function() {
      actions.appStateLoaded.trigger({
        progress: {
          totalClicks: 42
        }
      });
    });

    Then('the progress store reflects the loaded app state', function() {
      expect(progressChangedListener).toHaveBeenCalledWith({totalClicks: 42});
    });

    describe('followed by mainButtonClicked action', function() {
      When(function() {
        actions.mainButtonClicked.trigger();
      });

      Then('the currency store increases its clicks', function() {
        expect(progressChangedListener).toHaveBeenCalledWith({totalClicks: 43});
      });
    });
  });
});
