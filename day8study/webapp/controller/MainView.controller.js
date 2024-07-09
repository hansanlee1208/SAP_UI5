sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
],
function (Controller, JSONModel) {
    "use strict";
    var gv_Data;

    return Controller.extend("sync5.cl3.day8study.controller.MainView", {
        onInit: function () {

            var gt_data = [

                {
                    Carrid : "AA",
                    Carrname : "America airline",
                    Url : "www.america.com"
                },
                {
                    Carrid : "LH",
                    Carrname : "Luft Hanza",
                    Url : "www.lufthanza.de"
                }

            ];

            var oData = {

                gs_kostl : {
                    kostl : "KS001",
                    ktext : "Jongro center"
                },
                gs_prctr : {
                    Prctr : "PR01007",
                    Gtext : "Sales attribute"
                },

                gs_button : {
                    Text : "Train",
                    Icon : "sap-icon://accessibility"
                }
            };

            var gs_busa = {
                Gsber : "P100",
                Gtext : "Electric Phone"
            }

            var gs_info = {
                Name : "이준석"
            }
            
            var gs_bell = {
                IC : "sap-icon://biometric-thumb",
                RR : "딩동댕",
                R: "Bell"
            }

            var ttt = {
                t1 : "입력창 1",
                t2 : "설명 1 입니다.",
                t3 : "ST_01",
                t4 : "Helmet",
                t5 : "50rem",
                t6 : "100px",
            }

            var oModel = new JSONModel(oData);
            var oModel2 = new JSONModel(gs_busa);
            var o = new JSONModel(gs_info);
            var ii = new JSONModel(gs_bell);
            var t = new JSONModel(ttt);

            this.getView().setModel(oModel);
            this.getView().setModel(oModel2, "oo");
            this.getView().setModel(o, "o");
            this.getView().setModel(ii, "i");
            this.getView().setModel(t, "t");


            const oMode = new JSONModel(gt_data); 
            this.getView().setModel(oMode, "gt");
        },
        
        OP : function(){
            var sRR = this.getView().getModel("i").getProperty("/RR");
            alert(sRR)
            
        }
    });
});
