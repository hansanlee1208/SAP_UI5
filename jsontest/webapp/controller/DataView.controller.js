sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
   "sap/m/MessageToast"

],
function (Controller, JSONModel, MessageToast) {
    "use strict";

    return Controller.extend("sync5.cl3.jsontest.controller.DataView", {
        onInit: function () {

            var gt_scarr = [
                
                {
                    Carrid : "AA",
                    Carrname : "America airline",
                    Currcode : "USD"
                },
                {
                    Carrid : "LH",
                    Carrname : "Luft Hanza",
                    Currcode : "EUR"
                }
            ];
            for (var index in gt_scarr){
                console.log("index", index);
                console.log("gt_scarr["+index+"]" ,gt_scarr[index]);
            }
            
            
            const oData = {
                gs_company: {
                    Bukrs : "1000",
                    Butxt : "HP package"
                },
                gs_type : {
                    Tcode : "SA",
                    Tname : "General type",
                    Post  : "Y"
                }
            };
            const gs_material = {
                Matnr : "PT015",
                Mktxt : "Bike"
            }
            
            const oModel1 = new JSONModel(oData);
            this.getView().setModel(oModel1);

            const oModel2 = new JSONModel(gs_material);
            this.getView().setModel(oModel2, "material");

            const oModel = new JSONModel("/info.json");
            this.getView().setModel(oModel, "info");
        
            var lv_item = "A";

            if(lv_item === "A"){
                console.log("A");
            }else if(lv_item === "B"){
                console.log("B");
            } else{
                console.log("Else")

            }
        
        },
        p: function(){
            var iii = this.getView().byId("ii").getValue();
            var d;
            // if (iii === 'A'){
            //     d ="APPLE"
            // } else if(iii === 'B'){
            //     d ="Banana"
            // }else if(iii === 'C'){
            //     d ="Choco"
            // }else if(iii === 'D'){
            //     d ="Delecious"
            // }
            // else{
            //     alert("올바른 값 입력해주세요");
            // }
            switch(iii){
                case "A": d ="APPLE"; break;
                case "B": d ="Banana"; break;
                case "C": d ="Choco"; break;
                case "D": d ="Delecious"; break;
                
                default:alert("올바른 값 입력해주세요");break;
            }
            this.byId("ii").setValue(d);
           },

           d: function(){
            let ke;
            
            var a = parseInt(this.byId("won").getValue());
            var b = parseInt(this.byId("disc").getValue());
            var c = a-a * (b/100);

            this.byId("result").setValue(c);
           },
           n: function(){
            
            var nName = "이준석";
            var vClass = "3";
            var vNumber = "25";

            if (nName == this.byId("n").getValue()){
                if (vClass == this.byId("c").getValue()){
                    if (vNumber == this.byId("cn").getValue()){
                        alert("다 잘 입력했네")
                    }else{
                        alert("NUMBER 다시 입력해");
                    }
                }else{
                    alert("Class 다시 입력해");
                }
            }else{
                alert("이름 다시 입력해");
            }
            this.byId("result").setValue(c);
           },
        c: function(){
            var eo = this.byId("EO").getValue();
            var e = eo %2
            // if (eo %2 ==0){
            //     MessageToast.show("Even");
            // }else{
            //     MessageToast.show("Odd");
            // }

            switch(e){
                case 0:MessageToast.show("Even");break;
                default:MessageToast.show("Odd");break;
            }
        },
        s:function(){
            var ik = this.byId("M").getValue();
            if (ik<=11 && ik>=9){
                alert("야장에서 좋은 가을")
            }else if(ik >=6 && ik<=8){
                alert("쓰러지는 여름")
            }else if(ik >= 3 && ik<=5){
                alert("좋은 봄0");
            }else{
                alert("입돌아가 겨울")
            }
        },
        k:function(){
            var ii = this.byId("iid").getValue();
            var kk = this.byId("ppw").getValue();
            
            if(ii == "freeman" && kk == 11111){
                var aa;
                alert("로그인 성공")
            }else{
                alert("로그인 실패")
            }
            
        }

    });
});
