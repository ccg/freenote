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