Ext.Loader.setConfig(enabled: true)

Ext.application
  autoCreateViewport: true
  name: "App"

  launch: ->
    # Create a reference to the Ext JS Application object so we can perform
    # tests against it.
    window.Application = @

Ext.onReady ->
  Deft.Injector.configure
  #    companyStore: 'JasmineExample.store.CompanyStore'
  #    noteStore: 'App.store.NoteStore'
    noteStore: 'App.mock.store.NoteStore',
    noteListStore: 'App.mock.store.NoteListStore'
    messageBus: 'App.util.MessageBus'

