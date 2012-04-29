/**
 * @class Portal.lib.container.Column
 * @extends Ext.container.Container
 * A layout column class used internally be {@link Portal.lib.panel.Columns}.
 */
Ext.define('Portal.lib.container.Column', {
    extend: 'Ext.container.Container',
    alias: 'widget.portalcolumn',

    requires: [
        'Ext.layout.container.Anchor',
        'Portal.lib.panel.Portlet'
    ],

    layout: 'anchor',
    defaultType: 'portlet',
    cls: 'x-portal-column'

});