Ext.Loader.setPath('Stocks', '../Portlets/Stocks/app');
Ext.Loader.setPath('Companies', '../Portlets/Companies/app');
Ext.Loader.setPath('Company', '../Portlets/Company/app');


Ext.require([
    'Ext.*'
    /*
    ,'Companies.controller.Main'
    ,'Stocks.controller.StocksController'
    ,'Company.controller.Main'
    */
]);

Ext.application({
    name:'Portal',
    autoCreateViewport:true,
    controllers:['MVCLoader', 'Main','PortletCommunicationsSample']
});






