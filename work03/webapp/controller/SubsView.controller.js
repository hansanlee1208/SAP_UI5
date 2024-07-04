sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
],
function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("cl3ns.work03.controller.SubsView", {
        onInit: function () {
            const oData = {
                recipient : {
                    name : "World",
                    city : "Seoul"
                },
                info: {
                    id : "Sync5",
                    year : "2024"
                },
                desk : {
                    things1: "note",
                    things2: "pencil"
                }
            };
            const oModel = new JSONModel(oData);
            this.getView().setModel(oModel);
        }
    });
});
