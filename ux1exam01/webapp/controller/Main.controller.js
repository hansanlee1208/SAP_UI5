sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
   "sap/m/MessageToast"
],
function (Controller, JSONModel, MessageToast) {
    "use strict";
    var cnt = 0;

    return Controller.extend("sync5.cl3.ux1exam01.controller.Main", {
        onInit: function () {
            var oModel = new JSONModel({
                random_num: []
            });
            this.getView().setModel(oModel);
        },
        onRandomPress: function(){
            cnt +=1
            if(cnt >= 9){
                MessageToast.show("8개 이상 랜덤 생성 불가입니다.")
            }else{
                var random = Math.floor(Math.random() * 100) +1;
                var oModel = this.getView().getModel();
                var aRandom = oModel.getProperty("/random_num")

                aRandom.push({num: random});
                oModel.setProperty("/random_num", aRandom);
            }
            
        }
    });
});
