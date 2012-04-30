Ext.define('Companies.view.Grid', {
    extend:'Ext.grid.Panel',
    alias:'widget.gridportlet',
    controllers:['Companies.controller.Main'],
    requires:[
        'Ext.data.ArrayStore',
        'Companies.model.Company'
    ],
    height:300,
    store:'Companies.store.Companies',

    initComponent:function () {

        Ext.apply(this, {
            height:this.height,
            stripeRows:true,
            columnLines:true,
            columns:[
                {
                    text:'Company',
                    flex:1,
                    sortable:true,
                    dataIndex:'company'
                },
                {
                    text:'Change',
                    width:75,
                    sortable:true,
                    renderer:this.change,
                    dataIndex:'change'
                },
                {
                    text:'% Change',
                    width:75,
                    sortable:true,
                    renderer:this.pctChange,
                    dataIndex:'pctChange'
                }
            ]
        });
        this.callParent(arguments);



    },
    /**
     * Custom function used for column renderer
     * @param {Object} val
     */
    change:function (val) {
        if (val > 0) {
            return '<span style="color:green;">' + val + '</span>';
        } else if (val < 0) {
            return '<span style="color:red;">' + val + '</span>';
        }
        return val;
    },

    /**
     * Custom function used for column renderer
     * @param {Object} val
     */
    pctChange:function (val) {
        if (val > 0) {
            return '<span style="color:green;">' + val + '%</span>';
        } else if (val < 0) {
            return '<span style="color:red;">' + val + '%</span>';
        }
        return val;
    }
});
