// Generated by CoffeeScript 1.4.0
(function() {

  describe("App.util.MessageBus", function() {
    var messageBus;
    messageBus = null;
    beforeEach(function() {
      return messageBus = Ext.create("App.util.MessageBus");
    });
    afterEach(function() {
      return messageBus = null;
    });
    it("is defined", function() {
      return expect(messageBus).toBeDefined();
    });
    it("has the Ext.util.Observable mixin", function() {
      return expect(messageBus.mixins.observable.$className).toBe('Ext.util.Observable');
    });
    it("is observable", function() {
      return expect(messageBus.isObservable).toBe(true);
    });
    it("has .fireEvent()", function() {
      return expect(typeof messageBus.fireEvent).toBe("function");
    });
    return it("can fire a 'noteselected' event", function() {
      var testListener;
      testListener = sinon.spy();
      messageBus.addListener('noteselected', testListener);
      messageBus.fireEvent('noteselected');
      return expect(testListener.calledOnce).toBe(true);
    });
  });

}).call(this);
