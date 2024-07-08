sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast"
],
function (Controller, JSONModel, MessageToast) {
    "use strict";

    return Controller.extend("mentor01.day01.controller.MentView", {
        onInit: function () {
            let oModel = new JSONModel("/Document.json");
            this.getView().setModel(oModel);
        },
        scarrPress: function(){
            var oInput = this.byId("input_id");
            var sValue = oInput.getValue();
            MessageToast.show(sValue)
        }
    });
});
