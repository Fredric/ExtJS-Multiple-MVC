Ext.define('Companies.controller.Main', {
    extend:'Ext.app.Controller',
    stores:['Companies.store.Companies'],
    views:['Grid', 'Grid2'],
    refs:[
        {
            ref:'companyGrid',
            selector:'gridportlet'
        }
    ],
    init:function () {
        this.control({
            'gridportlet':{
                itemclick   :this.onCompanySelect,
                afterrender :this.onAfterRender,
                beforerender:this.onBeforeRender
            }
        });
    },
    onCompanySelect:function () {
        Ext.example.msg('Companies.controller.Main', 'Company clicked');
    },
    onAfterRender:function () {
        Ext.example.msg('Companies.controller.Main', 'Company Portlet is rendered');
    },
    onBeforeRender:function () {
        Ext.example.msg('Companies.controller.Main', 'Company Portlet will render');
    }
});