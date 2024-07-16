sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("sync5.cl3.fiori17.controller.View", {
        onInit: function () {
            var vArray = [
                {
                    Player : "하트",
                    Team   : "NC"
                },
                {
                    Player : "네일",
                    Team   : "KIA"
                },
                {
                    Player : "헤이수스",
                    Team   : "키움"
                },
                {
                    Player : "원태인",
                    Team   : "삼성"
                },
                {
                    Player : "곽빈",
                    Team   : "두산"
                }
            ];
            var oData = {
                VizSet : [
                    {
                        Player : "박해민",
                        Assist : "1"
                    },
                    {
                        Player : "최지훈",
                        Assist : "3"
                    },
                    {
                        Player : "신민재",
                        Assist : "212"
                    },
                    {
                        Player : "문보경",
                        Assist : "118"
                    },
                    {
                        Player : "박성한",
                        Assist : "1228"
                    }
                ],
                MicroSet : [
                    {
                        Team     : "KIA",
                        Homerune : 101
                    },
                    {
                        Team     : "두산",
                        Homerune : 95
                    },
                    {
                        Team     : "롯데",
                        Homerune : 68
                    },
                    {
                        Team     : "LG",
                        Homerune : 66
                    },
                    {
                        Team     : "SSG",
                        Homerune : 83
                    },
                    {
                        Team     : "키움",
                        Homerune : 63
                    }
                ]
            };
            
            const oModel = new JSONModel(vArray);
            const oModel2 = new JSONModel("/json/Asset.json");
            const oModel3 = new JSONModel("/json/Company.json");
            const oModel4 = new JSONModel(oData);
            this.getView().setModel(oModel);
            this.getView().setModel(oModel2, "asset");
            this.getView().setModel(oModel3, "company");
            this.getView().setModel(oModel4, "Base");
            

        },
        btn_Q6: function(){
            // 다른 function에서 선언한 지역변수에 대해 접근하기 위하여 getView().getModel()을 통해 jsonmodel에 접근한 후 getData()함수를 이용해 안에 들어있는 json 데이터에 접근한다.
            var o = this.getView().getModel();
            var oo = o.getData();

            for(let i of oo){
                console.log(i);
            }
        }
    });
});
