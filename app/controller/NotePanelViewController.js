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
        this._setTitle(note.get('title'));
        this._getNoteBodyField().setValue(note.get('body'));
    },

    _getNoteBodyField: function () {
        var noteBodyField = this.getView().getComponent('notebodyfield');
        if (!noteBodyField) {
            console.warn('_getNoteBodyField problem! notebodyfield is:');
            console.warn(noteBodyField);
        }
        return noteBodyField;
    },

    _setTitle: function (title) {
        this.getView().setTitle(title);
    }
});