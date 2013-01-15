Ext.define('App.controller.NotePanelViewController', {
    extend: 'Deft.mvc.ViewController',
    inject: ['messageBus'],

    config: {
      messageBus: null
    },

    observe: {
        messageBus: {
            noteselected: '_onNoteSelected'
        }
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