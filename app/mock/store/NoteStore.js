/**
 * Created with IntelliJ IDEA.
 * User: chad
 * Date: 1/2/13
 * Time: 3:10 PM
 * To change this template use File | Settings | File Templates.
 */

Ext.define('App.mock.store.NoteStore', {
    extend: 'Ext.data.Store',
    model: 'App.model.Note',
    autoLoad: true,
    data: [
        {
            "id": 1,
            "title": "first post!",
            "body": "hello world"
        },
        {
            "id": 2,
            "title": "hello world",
            "body": "second post"
        }
    ]
});