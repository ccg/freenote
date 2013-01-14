Ext.define('App.controller.NoteListPanelViewController', {
    extend: 'Deft.mvc.ViewController',
    inject: ['messageBus'],

    config: {
        messageBus: null
    },

    control: {
        view: {
            select: '_onSelect'
        }
    },

    _onSelect: function (rowModel, record, index, eOpts) {
        this.getMessageBus().fireEvent('noteselected', record);
    }
});