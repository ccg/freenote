describe "The Note Panel", ->

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
    view = Ext.create("App.view.NotePanel", renderTo: "componentTestArea")

    # Save a reference to the view instance's viewController.
    viewController = view.getController()
  )

  afterEach( ->
    # After each test, destroy the view and clean up.
    view.destroy()
    view = null
    viewController = null
  )

  describe "After a successful startup, the Note panel view", ->
    it "is defined", ->
      expect(view).toBeDefined()

    it "has been rendered", ->
      expect(view.rendered).toBeTruthy()

    it "is an instance of App.view.NotePanel", ->
      expect(view instanceof App.view.NotePanel).toBeTruthy();


  describe "After a successful startup, the Note Panel View Controller", ->

    it "is defined", ->
      expect(viewController).toBeDefined();

    it "is an instance of App.controller.NotePanelViewController", ->
      expect(viewController instanceof App.controller.NotePanelViewController).
        toBeTruthy();

    it "has a reference to the correct Note Panel view instance", ->
      expect(viewController.getView() is view).toBeTruthy();

    it "has a reference to the global messageBus", ->
      expect(viewController.getMessageBus()).toBeTruthy()


  describe "the Note Panel View Controller", ->

    it "can change the Note Panel's title", ->
      testTitle = "New Test Title"
      expect(view.title).not.toEqual(testTitle)
      viewController.setTitle(testTitle)
      expect(view.title).toEqual(testTitle)


  describe "when it hears a 'noteselected' event on the message bus", ->

    messageBus = null
    noteListStore = null

    beforeEach( ->
      messageBus = viewController.getMessageBus()
      noteListStore = Deft.Injector.resolve('noteListStore')
    )

    it "changes the title to the note's title", ->
      noteRecord = noteListStore.getById(1)
      noteTitle = noteRecord.get('title')
      expect(view.title).not.toEqual(noteTitle)
      messageBus.fireEvent('noteselected', noteRecord)
      expect(view.title).toEqual(noteTitle)

#    it "changes the content of the textarea to the note's body", ->
#      noteRecord = noteListStore.getById(1)
#      noteBody = noteRecord.get('body')
#      expect(view.) # TODO: left off here...
