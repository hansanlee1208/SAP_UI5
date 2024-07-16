sap.ui.define([
    "sap/ui/core/mvc/Controller",
  "sap/ui/model/odata/v2/ODataModel"
],
function (Controller, ODataModel) {
    "use strict";

    return Controller.extend("odata.url.odataurl.controller.oDataView", {
        onInit: function () {
            var sServiceUrl = "https://services.odata.org/V2/OData/OData.svc/";
            var oModel = new ODataModel(sServiceUrl, true);
            this.getView().setModel(oModel);

            var oTable = this.getView().byId("table_id");
            oTable.bindItems({
                path: "/Products",
                template: new sap.m.ColumListItem({
                    cells:[
                        new sap.m.Text({text: "Name"}),
                        new sap.m.Text({text: "Price"}),
                        new sap.m.Text({text: "Description"})
                    ]
                })
            })
        }
    });
});
