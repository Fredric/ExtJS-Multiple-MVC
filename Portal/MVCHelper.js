Ext.Class.registerPreprocessor('mvchelper',
    function (cls, data) {
        if (Ext.isArray(data.controllers) && !Ext.isArray(cls.controllers)) {
            if (data.extend !== 'Ext.app.Application') {
                if (!(cls.superclass && cls.superclass.$className === "Ext.app.Application")) {
                    cls.controllers = data.controllers;//skip if its a Ext.Application
                }
            }
        }
    }, true);
Ext.Class.setDefaultPreprocessorPosition('mvchelper', 'first');