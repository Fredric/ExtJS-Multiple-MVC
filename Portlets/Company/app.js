Ext.require([
    'Ext.*'
]);

Ext.application({
    name:'Company',
    controllers:['Main'],
    launch:function () {

        Ext.createByAlias('widget.companyportlet',{
            renderTo:Ext.getBody(),
            width:300
        });
    }
});






