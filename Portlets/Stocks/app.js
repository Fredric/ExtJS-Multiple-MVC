Ext.require([
    'Ext.*'
]);

Ext.application({
    name:'Stocks',
    controllers:['StocksController'],
    launch:function () {

        Ext.createByAlias('widget.stockchartportlet',{
            renderTo:Ext.getBody(),
            width:300
        });

    }
});






