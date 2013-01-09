/**
 * Created with IntelliJ IDEA.
 * User: chad
 * Date: 1/1/13
 * Time: 4:07 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('App.controller.NotePanelViewController', {
    extend: 'Deft.mvc.ViewController',
//    inject: ['noteStore'],

    setTitle: function (title) {
        this.getView().title = title
    }
});