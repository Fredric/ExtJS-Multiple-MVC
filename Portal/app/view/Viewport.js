/**
 * @class Ext.app.Portal
 * @extends Object
 * A sample portal layout application class.
 */
Ext.define('Portal.view.Viewport', {
    extend:'Ext.container.Viewport',
    requires:['Portal.lib.panel.Columns', 'Portal.lib.container.Column'],

    initComponent:function () {
        var content = '<div class="portlet-content">' + Ext.example.shortBogusMarkup + '</div>';

        Ext.apply(this, {
            id:'app-viewport',
            layout:{
                type:'border',
                padding:'0 5 5 5' // pad the layout from the window edges
            },
            items:[
                {
                    id:'app-header',
                    xtype:'box',
                    region:'north',
                    height:40,
                    html:'Ext Portal MVC'
                },
                {
                    xtype:'container',
                    region:'center',
                    layout:'border',
                    items:[
                        {
                            id:'app-options',
                            title:'Options',
                            region:'west',
                            animCollapse:true,
                            width:200,
                            minWidth:150,
                            maxWidth:400,
                            split:true,
                            collapsible:true,
                            layout:{
                                type:'accordion',
                                animate:true
                            },
                            items:[
                                {
                                    html:content,
                                    title:'Navigation',
                                    autoScroll:true,
                                    border:false,
                                    iconCls:'nav'
                                },
                                {
                                    title:'Settings',
                                    html:content,
                                    border:false,
                                    autoScroll:true,
                                    iconCls:'settings'
                                }
                            ]
                        },
                        {
                            id:'app-portal',
                            xtype:'portalpanel',
                            region:'center',
                            items:[
                                {
                                    id:'col-1',
                                    items:[
                                        {
                                            title:'Grid Portlet',
                                            tools:this.getTools(),
                                            items:Ext.create('Companies.view.Grid')
                                        },
                                        {
                                            title:'Portlet 2',
                                            tools:this.getTools(),
                                            html:content
                                        }
                                    ]
                                },
                                {
                                    id:'col-2',
                                    items:[
                                        {
                                            tools:this.getTools(),
                                            html:'<div class="portlet-content">' + Ext.example.bogusMarkup + '</div>'
                                        },
                                        {
                                            title:'Company',
                                            tools:this.getTools(),
                                            items:Ext.create('Company.view.Form')

                                        }
                                    ]
                                },
                                {
                                    id:'col-3',
                                    items:[
                                        {
                                            title:'Stock Portlet',
                                            tools:this.getTools(),
                                            items:Ext.create('Stocks.view.Chart')
                                              //items:[{xtype:'stockchartportlet'}]

                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        });
        this.callParent(arguments);
    }, getTools:function () {
        return [
            {
                xtype:'tool',
                type:'gear',
                handler:function (e, target, panelHeader) {
                    var portlet = panelHeader.ownerCt;
                    portlet.fireEvent('toolClick', portlet);
                }
            }
        ];
    }


});
