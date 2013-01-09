/**
 * Created with IntelliJ IDEA.
 * User: chad
 * Date: 1/2/13
 * Time: 2:13 PM
 * To change this template use File | Settings | File Templates.
 */

Ext.define('App.model.Note', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'id',
            type: 'int'
        },
        {
            name: 'text',
            type: 'string'
        },
        {
            name: 'title',
            type: 'string'
        },
        {
            name: 'body',
            type: 'string'
        }
    ]
});