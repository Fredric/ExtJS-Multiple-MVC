Ext.define('Portal.controller.PortletCommunicationsSample', {
    extend:'Ext.app.Controller',
    refs:[
        {
            ref:'companyPortlet',
            selector:'companyportlet'
        }
    ],

    init:function () {
        this.control({
            'gridportlet':{
                onCompanySelected:this.updateCompanyPortlet
            }
        });
    },

    updateCompanyPortlet:function(companyRecord){

        this.getCompanyPortlet().loadRecord(companyRecord);

    }
});

