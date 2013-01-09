describe "The NoteListPanel", ->

  view = null
  viewController = null

  # A hidden div where we can add UI components to test them and their
  # dependencies.
  createComponentTestArea = ->
    if Ext.get("componentTestArea")?
      node = Ext.get("componentTestArea").dom
      Ext.removeNode(node)
    Ext.DomHelper.append(
      Ext.getBody(),
    "<div id='componentTestArea' style='visibility: hidden'></div>"
    )

  beforeEach( ->

    createComponentTestArea()

    # For each test, create a view instance and render it.
    view = Ext.create("App.view.NoteListPanel", renderTo: "componentTestArea")

    # Save a reference to the view instance's viewController.
    viewController = view.getController()
  )

  afterEach( ->
    # After each test, destroy the view and clean up.
    view.destroy()
    view = null
    viewController = null
  )

  describe "After a successful startup, the NoteListPanel view", ->

    it "is defined", ->
      expect(view).toBeDefined()

    it "has been rendered", ->
      expect(view.rendered).toBeTruthy()

    it "is an instance of App.view.NoteListPanel", ->
      expect(view instanceof App.view.NoteListPanel).toBeTruthy();

  describe "After a successful startup, the NoteListPanel ViewController", ->

    it "is defined", ->
      expect(viewController).toBeDefined();

    it "is an instance of App.controller.NoteListPanelViewController", ->
      expect(viewController instanceof App.controller.NoteListPanelViewController).
      toBeTruthy();

    it "has a reference to the correct NoteListPanel view instance", ->
      expect(viewController.getView() is view).toBeTruthy();

    it "has a reference to the global message bus", ->
      expect(viewController.getMessageBus()).toBeDefined()
      expect(viewController.getMessageBus()).toBeTruthy()

    describe "messageBus reference", ->
      it "has a noteSelected message", ->
        noteSelected = viewController.getMessageBus().noteSelected
        expect(noteSelected).toBeDefined()
        expect(typeof noteSelected).toEqual("function")

  # The mock Store has two items in it.
  it "has a root node", ->
    expect(view.getRootNode()).not.toBeNull()

  it "has a store that is an instance of TreeStore", ->
    expect(view.getStore() instanceof Ext.data.TreeStore).toBeTruthy()

  it "has an underlying table with two rows (root node hidden)", ->
    expect(view.getView().getNodes().length).toEqual(2)

  describe "when a note (row) is selected", ->

    it "calls noteSelected on the global messageBus", ->
      view.getSelectionModel().select(0)
      expect(viewController.getMessageBus().noteSelected.calledOnce).toBeTruthy()

    it "calls noteSelected with the note-model instance", ->
      selectionModel = view.getSelectionModel()
      note = selectionModel.getStore().getAt(0)
      selectionModel.select(0)
      # this jasmine-sinon matcher causes firefox to hang(!):
#      expect(viewController.getMessageBus().noteSelected).toHaveBeenCalledWith(note)
      expect(viewController.getMessageBus().noteSelected.calledWith(note)).toBeTruthy()

#
#  describe "the Note Panel View Controller", ->
#    it "can change the Note Panel's title", ->
#      testTitle = "New Test Title"
#      expect(view.title).not.toEqual(testTitle)
#      viewController.setTitle(testTitle)
#      expect(view.title).toEqual(testTitle)
