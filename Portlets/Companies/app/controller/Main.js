Ext.define('Companies.controller.Main', {
    extend:'Ext.app.Controller',
    stores:['Companies.store.Companies'],
    views:['Grid'],
    refs:[
        {
            ref:'companyGrid',
            selector:'gridportlet'
        }
    ],
    init:function () {
        this.control({
            'gridportlet':{
                itemclick   :this.onCompanySelect
            }
        });
    },
    onCompanySelect:function (view, record) {
        Ext.example.msg('Companies.controller.Main', 'Company Selected');
        this.getCompanyGrid().fireEvent('onCompanySelected',record);
    }
});