describe "Ext JS", ->
  it "has loaded", ->
    expect(Ext).toBeDefined()
  it "has a version", ->
    expect(Ext.getVersion()).toBeTruthy()
  it "has version number 4.x", ->
    expect(Ext.getVersion().major).toEqual(4)

describe "During initialization and setup, the application", ->
  it "has loaded Application with expected Application name", ->
    expect(window.Application).toBeDefined()
    expect(window.Application.name).toEqual("App")
  it "has created DeftJS IoC items", ->
    expect(Deft.ioc.Injector.canResolve("noteStore")).toBeTruthy()
    expect(Deft.ioc.Injector.canResolve("some$Unknown$Alias")).toBeFalsy()
