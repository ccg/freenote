Ext.define('App.view.NotePanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.notepanel',
    controller: 'App.controller.NotePanelViewController',

    layout: {
        type: 'fit'
    },

    title: 'Note',

    initComponent: function () {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'textareafield',
                    border: 0
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'button',
                            icon: './icons/disk.png',
                            text: 'Save Changes'
                        },
                        {
                            xtype: 'button',
                            icon: './icons/cross.png',
                            text: 'Discard Changes'
                        },
                        {
                            xtype: 'button',
                            icon: './icons/delete.png',
                            text: 'Delete Note'
                        }
                    ]
                }
            ]
        });

        this.callParent(arguments);
    }
});
