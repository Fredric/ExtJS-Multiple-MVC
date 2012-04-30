Ext.require([
    'Ext.*'
]);

Ext.application({
    name:'Companies',
    controllers:['Main'],
    launch:function () {

        Ext.createByAlias('widget.gridportlet',{
            renderTo:Ext.getBody(),
            width:300
        });
    }
});






