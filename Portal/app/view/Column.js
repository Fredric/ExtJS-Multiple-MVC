/**
 * @class Portal.view.Column
 * @extends Ext.container.Container
 * A layout column class used internally be {@link Portal.view.Columns}.
 */
Ext.define('Portal.view.Column', {
    extend: 'Ext.container.Container',
    alias: 'widget.portalcolumn',

    requires: [
        'Ext.layout.container.Anchor',
        'Portal.view.Portlet'
    ],

    layout: 'anchor',
    defaultType: 'portlet',
    cls: 'x-portal-column'

});