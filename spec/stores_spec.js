describe('app stores', function() {
  var stores;
  Given(function() {
    var actions = App.Factories.Actions.make();
    stores = App.Factories.Stores.make(actions);
  });

  Then('the expected stores exist', function() {
    expect(stores.currency).toBeDefined();
    expect(stores.progress).toBeDefined();
  });
});
