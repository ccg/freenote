Ext.define('App.mock.store.NoteListStore', {
    extend: 'Ext.data.TreeStore',
    model: 'App.model.Note',
    autoLoad: true,
    storeId: 'noteListStore',
    root: {
        expanded: true,
        text: "Root",
        children: [
            {
                "leaf": true,
                "id": 1,
                "text": "first post!",
                "title": "first post!",
                "body": "hello world"
            },
            {
                "leaf": true,
                "id": 2,
                "text": "hello world",
                "title": "hello world",
                "body": "second post"
            }
        ]
    }
});