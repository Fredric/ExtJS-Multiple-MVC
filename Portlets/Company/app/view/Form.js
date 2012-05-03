Ext.define('Company.view.Form', {
    extend:'Ext.form.Panel',
    alias:'widget.companyportlet',
    controllers:['Company.controller.Main'],
    height:170,
    border:false,
    padding:'8 8 8 8',
    defaults:{
        labelAlign:'top',
        xtype:'textfield'
    },
    config:{
      company:null
    },
    items:[
        {name:'company',    fieldLabel:'Name', width:'100%' },
        {name:'change',     fieldLabel:'Change'             },
        {name:'pctChange',  fieldLabel:'% Change'           }
    ],
    applyCompany:function(company){
        this.loadRecord(company);
        return company;
    }

});
