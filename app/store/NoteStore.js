/**
 * Created with IntelliJ IDEA.
 * User: chad
 * Date: 1/2/13
 * Time: 2:08 PM
 * To change this template use File | Settings | File Templates.
 */

Ext.define('App.store.NoteStore', {
    extend: 'Ext.data.Store',
    model: 'App.model.Note',
    autoLoad: true,
    proxy: {
        type: 'ajax',
//        url: '/api/v1/notes',
        url: './notes.json',
        reader: {
            type: 'json'
        }
    }
});