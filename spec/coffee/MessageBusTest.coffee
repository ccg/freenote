describe "App.util.MessageBus", ->

  messageBus = null

  beforeEach( ->
    messageBus = Ext.create("App.util.MessageBus")
  )

  afterEach( ->
    messageBus = null
  )

  it "is defined", ->
    expect(messageBus).toBeDefined()

  it "has the Ext.util.Observable mixin", ->
    # TODO figure out why the following is false:
    # expect(messageBus.mixins.observable instanceof Ext.util.Observable).toBeTruthy()
    expect(messageBus.mixins.observable.$className).toBe('Ext.util.Observable')


  it "is observable", ->
    expect(messageBus.isObservable).toBe(true)

  it "has .fireEvent()", ->
    expect(typeof messageBus.fireEvent).toBe("function")

  it "can fire a 'noteselected' event", ->
    testListener = sinon.spy()
    messageBus.addListener('noteselected', testListener)
    messageBus.fireEvent('noteselected')
    expect(testListener.calledOnce).toBe(true)
