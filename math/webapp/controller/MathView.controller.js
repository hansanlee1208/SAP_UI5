sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
function (Controller, JSONModel) {
    "use strict";
    var getIndex=0;

    return Controller.extend("cl3.math.math.controller.MathView", {
        
        onInit: function () {
            
        },
        onCalc: function(){
            // const oA = this.byId("A_id");
            // const oB = this.byId("B_id");

            // const oAData = oA.getValue();
            // const oBData = oB.getValue();

            var oA = this.getView().byId("A_id").getValue();
            var oB = this.getView().byId("B_id").getValue();

            var R
            if(getIndex == 0) {
                R = parseInt(oA) + parseInt(oB);
            } else if(getIndex ==1){
                R = parseInt(oA) * parseInt(oB);
            } else{
                R = parseInt(oA) / parseInt(oB);
            }
            const R_V = new JSONModel({
                RV: R
                //RV_M : parseInt(oA) * parseInt(oB),
                //RV_A : parseInt(oA) + parseInt(oB)
            }) 
            this.getView().setModel(R_V)

            //var RV : parseInt(oA) * parseInt(oB)
            //this.getView().byId("RS").setValue(RV)
        },
        rBtnPress: function(oEvent){
            getIndex = oEvent.getParameters().selectedIndex;
        },
        onCalcul: function(){
            

            var oH = this.getView().byId("h1").getValue();
            var oV = this.getView().byId("v1").getValue();

            
            const R_V = new JSONModel({
                HV: parseInt(oH)*parseInt(oV)
                
            }) 
            this.getView().setModel(R_V)

            //var RV : parseInt(oA) * parseInt(oB)
            //this.getView().byId("RS").setValue(RV)
        }
    });
});
