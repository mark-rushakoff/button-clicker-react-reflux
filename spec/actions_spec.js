describe('app actions', function() {
  var actions;
  Given(function() {
    actions = App.Factories.Actions.make();
  });

  Then('the expected actions exist', function() {
    expect(actions.mainButtonClicked).toBeDefined();
  });
});
