sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("Dev.odata.controller.View1", {
            onInit: function () {
                
            },
            onPress:function(){
                var oModel1 = new sap.ui.model.json.JSONModel();
                var oModel = new sap.ui.model.odata.v2.ODataModel("/v2/northwind/northwind.svc/");
                oModel.read("/Sales_by_Categories?$format=json",{
                    success:function(data){
                        oModel1.setSizeLimit(data.results.length);
                        oModel1.setData(data.results);
                        console.log();
                    }
                });

            }
        });
    });
