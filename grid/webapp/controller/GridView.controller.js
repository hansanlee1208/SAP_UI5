sap.ui.define([
    "sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
],
function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("sync5.grid.grid.controller.GridView", {
        onInit: function () {
            var oData ={
                GridSet : [
                {
                    Bukrs : "1000",
                    Gjahr : "2024",
                    Bktxt : "(유)가승개발",
                    Anln1 : 48952
                },{
                    Bukrs : "2000",
                    Gjahr : "2024",
                    Bktxt : "(유)그린에너지",
                    Anln1 : 5031
                },{
                    Bukrs : "3000",
                    Gjahr : "2024",
                    Bktxt : "(유)Logi Soft",
                    Anln1 : 47189
                },{
                    Bukrs : "4000",
                    Gjahr : "2024",
                    Bktxt : "(유)로터스원",
                    Anln1 : 19147
                },{
                    Bukrs : "5000",
                    Gjahr : "2024",
                    Bktxt : "(유)문피아 웹툰",
                    Anln1 : 1421
                }
                ],
                ProductSet :[
                    {
                        Lifnr : "SamSung",
                        Stock : 157
                    },{
                        Lifnr : "LG",
                        Stock : 127
                    },{
                        Lifnr : "DB",
                        Stock : 357
                    },{
                        Lifnr : "SK",
                        Stock : 257
                    },{
                        Lifnr : "TSMC",
                        Stock : 407
                    }
                ]
            }
            const oModel = new JSONModel(oData);
            this.getView().setModel(oModel);
            const oModel2 = new JSONModel("/movie.json");
            this.getView().setModel(oModel2, "mov");


        }
    });
});
