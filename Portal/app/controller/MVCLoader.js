/**
 * Puts a Preprocessor on  Ext.Class that loads any controller existing in the "controllers" array.
 * This makes it possible to make any renderable component to load controllers without the need for an Ext.Application.
 *
 */
Ext.define('Portal.controller.MVCLoader', {
    extend:'Ext.app.Controller',
    init:function () {
        var me = this;
        me.addedClasses = Ext.create('Ext.util.MixedCollection');

        Ext.iterate(Ext.ClassManager.classes, function (key, value) {
            if (Ext.isArray(value.controllers)) {
                me.mvloadExternalControllers(value.controllers);
            }
        }, this);

        Ext.Class.registerPreprocessor('mvcloader',
            function (cls, data) {
                if (Ext.isArray(data.controllers) && !me.addedClasses.get(data.$className)) {
                        me.addedClasses.add(data.$className, data.$className);
                        me.mvloadExternalControllers(data.controllers);
                }
            }, true);

        Ext.Class.setDefaultPreprocessorPosition('mvcloader', 'last');
    },
    mvloadExternalControllers:function (controllers) {
        var APPINSTANCE = this.application;
        Ext.each(controllers, function (control) {
            var controller = APPINSTANCE.controllers.get(control);
            if (!controller) {
                controller = Ext.create(control, {
                    application:APPINSTANCE,
                    id:control
                });
                APPINSTANCE.controllers.add(controller);
                controller.init();
            }
        }, this);
    }
});




