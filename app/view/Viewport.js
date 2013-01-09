/**
 * Created with IntelliJ IDEA.
 * User: chad
 * Date: 1/2/13
 * Time: 4:15 PM
 * To change this template use File | Settings | File Templates.
 */

Ext.define('App.view.Viewport', {
    extend: 'Ext.container.Viewport',

    requires: [
        'App.view.NoteListPanel',
        'App.view.NotePanel'
    ],

    layout: {
        type: 'border'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'notelistpanel',
                    region: 'west',
                    split: true
                },
                {
                    xtype: 'container',
                    region: 'north',
                    height: 32,
                    html: '<h1>FreeNote</h1>',
                    id: 'title-panel'
                },
                {
                    xtype: 'notepanel',
                    region: 'center'
                }
            ]
        });

        me.callParent(arguments);
    }

});