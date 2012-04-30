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
    items:[
        {name:'company',    fieldLabel:'Name', width:'100%' },
        {name:'change',     fieldLabel:'Change'             },
        {name:'pctChange',  fieldLabel:'% Change'           }
    ]

});
