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
      expect(viewController.getMessageBus()).toBeTruthy()

  # The mock Store has two items in it.
  it "has a root node", ->
    expect(view.getRootNode()).not.toBeNull()

  it "has a store that is an instance of TreeStore", ->
    expect(view.getStore() instanceof Ext.data.TreeStore).toBeTruthy()

  it "has an underlying table with two rows (root node hidden)", ->
    expect(view.getView().getNodes().length).toEqual(2)


  describe "when a note (row) is selected", ->

    testListener = null
    messageBus = null
    selectionModel = null

    beforeEach( ->
      testListener = sinon.spy()
      messageBus = viewController.getMessageBus()
      messageBus.addListener('noteselected', testListener)
      selectionModel = view.getSelectionModel()
    )

    afterEach( ->
      messageBus.removeListener('noteselected', testListener)
    )

    it "fires a 'noteselected' event on the global message bus", ->
      selectionModel.select(0)
      expect(testListener.calledOnce).toBe(true)

    it "fires 'noteselected' with the note-model instance", ->
      note = selectionModel.getStore().getAt(0)
      selectionModel.select(0)
      expect(testListener.calledWith(note)).toBeTruthy()
