Ext.define('Companies.controller.Main', {
    extend:'Ext.app.Controller',
    stores:['Companies.store.Companies'],
    views:['Companies.view.Grid'],
    refs:[
        {
            ref:'companyGrid',
            selector:'gridportlet'
        }
    ],
    init:function () {
        this.control({
            'gridportlet':{
                onCompanySelected   :this.showSelectedMessage
            }
        });
    },
    showSelectedMessage:function (gridInstance, record) {
        Ext.example.msg('Companies.controller.Main', 'Company Selected');
    }
});