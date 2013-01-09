/**
 * Created with IntelliJ IDEA.
 * User: chad
 * Date: 1/2/13
 * Time: 2:59 PM
 * To change this template use File | Settings | File Templates.
 */

Ext.define('App.view.NoteListPanel', {
    extend: 'Ext.tree.Panel',
    alias: 'widget.notelistpanel',
    controller: 'App.controller.NoteListPanelViewController',
    inject: ['noteListStore'],

    config: {
        noteListStore: null
    },

    width: 150,
    collapsible: true,
    rootVisible: false,
    title: 'Notes',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            store: me.getNoteListStore(),
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    items: [
                        {
                            xtype: 'button',
                            icon: './img/icons/add.png'
                        },
                        {
                            xtype: 'button',
                            icon: './img/icons/delete.png'
                        },
                        {
                            xtype: 'button',
                            icon: './img/icons/cog.png'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }
});