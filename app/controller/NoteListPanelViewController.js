/**
 * Created with IntelliJ IDEA.
 * User: chad
 * Date: 1/2/13
 * Time: 3:03 PM
 * To change this template use File | Settings | File Templates.
 */

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