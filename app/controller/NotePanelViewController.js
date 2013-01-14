Ext.define('App.controller.NotePanelViewController', {
    extend: 'Deft.mvc.ViewController',
    inject: ['messageBus'],

    config: {
      messageBus: null
    },

    init: function () {
        var messageBus = this.getMessageBus();
        // Need to pass 'this' as scope (third parameter) or else callback
        // will execute in messageBus's scope, i.e., this=messageBus.
        messageBus.addListener('noteselected', this._onNoteSelected, this);
        return this.callParent(arguments);
    },

    _onNoteSelected: function (note) {
        this.setTitle(note.get('title'));
    },

    setTitle: function (title) {
        this.getView().setTitle(title);
    }
});