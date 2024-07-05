sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/Text",
    "sap/ui/core/mvc/XMLView",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
    "../model/formatter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
],
function (Controller, Text, XMLView, MessageToast, JSONModel, ResourceModel, formatter, Filter, FilterOperator) {
    "use strict";
    return Controller.extend("cl3.work.cl3.module.controller.WorkView", {
        formater : formatter,
        onInit: function () {
            // alert("UI5 is ready")
            // new Text({
            //     text: "Hello World"
            // }).placeAt("content");
            // XMLView.create({
            //     viewName: "cl3.work.cl3.module.WorkView"
            // }).then((oView) => oView.placeAt("content"));
            // set data model on view
            const oData = {
                recipient : {
                    name : "World",
                    city : "Seoul"
                },
                info: {
                    id : "Sync5",
                    year : "2024"
                },
                desk: {
                    things1: "Note",
                    things2: "Pencil"

                }
            };
            const oModel = new JSONModel(oData);
            this.getView().setModel(oModel);

            
            // set i18n model on view
            const i18nModel = new ResourceModel({
                bundleName: "cl3.work.cl3.module.i18n.i18n"
            });

            this.getView().setModel(i18nModel, "i18n");

            // Data type for currency
            const oViewModel = new JSONModel({
				currency: "EUR"
			});
			this.getView().setModel(oViewModel, "view");

            const oinvoice = new JSONModel("/Invoices.json");
            this.getView().setModel(oinvoice, "invo");
        },

        onHello: function(){
           // read msg from i18n model
           const oBundle = this.getView().getModel("i18n").getResourceBundle();
           const sRecipient = this.getView().getModel().getProperty("/info/id");
           const sMsg = oBundle.getText("helloMsg",[sRecipient, sRecipient]);

           MessageToast.show(sMsg);
        },

        async onOpenDialog() {
            // create dialog lazily
            this.oDialog ??= await this.loadFragment({
                name: "cl3.work.cl3.module.view.HelloDialog"
            });
            this.oDialog.open();
        },
        onCloseDialog() {
			// note: We don't need to chain to the pDialog promise, since this event handler
			// is only called from within the loaded dialog itself.
			this.byId("helloDialog").close();
		},

		onFilterInvoices(oEvent) {
			// build filter array
			const aFilter = [];
			const sQuery = oEvent.getParameter("query");
			if (sQuery) {
				aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
			}

			// filter binding
			const oList = this.byId("invoiceList");
			const oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);
		}
    });
});
