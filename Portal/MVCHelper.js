Ext.Class.registerPreprocessor('mvchelper',
    function (cls, data) {
        if (Ext.isArray(data.controllers) && !Ext.isArray(cls.controllers)) {

           if(data.extend !== 'Ext.app.Application'){

               if(cls.superclass && cls.superclass.$className === "Ext.app.Application"){
                   //skip if its a Ext.Application
               }else{
                   cls.controllers = data.controllers;
               }


           }
        }
    }, true);
Ext.Class.setDefaultPreprocessorPosition('mvchelper', 'first');