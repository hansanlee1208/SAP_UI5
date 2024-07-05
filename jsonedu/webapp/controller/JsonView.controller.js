sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast"
],
function (Controller, JSONModel,MessageToast) {
    "use strict";

    return Controller.extend("cl3.json.jsonedu.controller.JsonView", {
        onInit: function () {
            let oModel = new JSONModel("/json/Document.json");
            this.getView().setModel(oModel);
        },
        scarrPress: function(){
            var oInput = this.byId("scarr_id");
            var sValue = oInput.getValue();

            MessageToast.show(sValue)
        }
    });
});
