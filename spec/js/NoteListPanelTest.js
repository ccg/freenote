// Generated by CoffeeScript 1.4.0
(function() {

  describe("The NoteListPanel", function() {
    var createComponentTestArea, view, viewController;
    view = null;
    viewController = null;
    createComponentTestArea = function() {
      var node;
      if (Ext.get("componentTestArea") != null) {
        node = Ext.get("componentTestArea").dom;
        Ext.removeNode(node);
      }
      return Ext.DomHelper.append(Ext.getBody(), "<div id='componentTestArea' style='visibility: hidden'></div>");
    };
    beforeEach(function() {
      createComponentTestArea();
      view = Ext.create("App.view.NoteListPanel", {
        renderTo: "componentTestArea"
      });
      return viewController = view.getController();
    });
    afterEach(function() {
      view.destroy();
      view = null;
      return viewController = null;
    });
    describe("After a successful startup, the NoteListPanel view", function() {
      it("is defined", function() {
        return expect(view).toBeDefined();
      });
      it("has been rendered", function() {
        return expect(view.rendered).toBeTruthy();
      });
      return it("is an instance of App.view.NoteListPanel", function() {
        return expect(view instanceof App.view.NoteListPanel).toBeTruthy();
      });
    });
    describe("After a successful startup, the NoteListPanel ViewController", function() {
      it("is defined", function() {
        return expect(viewController).toBeDefined();
      });
      it("is an instance of App.controller.NoteListPanelViewController", function() {
        return expect(viewController instanceof App.controller.NoteListPanelViewController).toBeTruthy();
      });
      it("has a reference to the correct NoteListPanel view instance", function() {
        return expect(viewController.getView() === view).toBeTruthy();
      });
      return it("has a reference to the global message bus", function() {
        return expect(viewController.getMessageBus()).toBeTruthy();
      });
    });
    it("has a root node", function() {
      return expect(view.getRootNode()).not.toBeNull();
    });
    it("has a store that is an instance of TreeStore", function() {
      return expect(view.getStore() instanceof Ext.data.TreeStore).toBeTruthy();
    });
    it("has an underlying table with two rows (root node hidden)", function() {
      return expect(view.getView().getNodes().length).toEqual(2);
    });
    return describe("when a note (row) is selected", function() {
      var messageBus, selectionModel, testListener;
      testListener = null;
      messageBus = null;
      selectionModel = null;
      beforeEach(function() {
        testListener = sinon.spy();
        messageBus = viewController.getMessageBus();
        messageBus.addListener('noteselected', testListener);
        return selectionModel = view.getSelectionModel();
      });
      afterEach(function() {
        return messageBus.removeListener('noteselected', testListener);
      });
      it("fires a 'noteselected' event on the global message bus", function() {
        selectionModel.select(0);
        return expect(testListener.calledOnce).toBe(true);
      });
      return it("fires 'noteselected' with the note-model instance", function() {
        var note;
        note = selectionModel.getStore().getAt(0);
        selectionModel.select(0);
        return expect(testListener.calledWith(note)).toBeTruthy();
      });
    });
  });

}).call(this);
