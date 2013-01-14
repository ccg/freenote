Ext.define('App.util.MessageBus', {
    mixins: {
        observable: 'Ext.util.Observable'
    },
//    singleton: true // actually not necessary; deft injects singletons by default

    constructor: function (config) {
        // Copied from Ext JS docs:
        // The Observable constructor copies all of the properties of `config` on
        // to `this` using Ext.apply. Further, the `listeners` property is
        // processed to add listeners.
        this.mixins.observable.constructor.call(this, config);

//        this.addEvents('noteSelected');
    }
});
