sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
function (Controller,JSONModel) {
    "use strict";
    var GT_LIST 
    return Controller.extend("sync5.cl3.looptest.controller.LoopView", {
        onInit: function () {

            var gt_kostl = [
                {
                    Kostl : "KS1770",
                    Ktext : "Chemical manage"
                },{
                    Kostl : "KS1880",
                    Ktext : "Natural manage"
                }
            ];
            GT_LIST = [
                {
                    Matnr : "ST_01",
                    Mktxt : "Steel",
                    Werks : "1010",
                    Lgort : "L1000"
                },{
                    Matnr : "RPX321",
                    Mktxt : "Road Steel",
                    Werks : "1020",
                    Lgort : "L2000"
                },{
                    Matnr : "EL_GANG",
                    Mktxt : "Strong Steel",
                    Werks : "1030",
                    Lgort : "L3000"
                }
            ]
            const oModel = new JSONModel(GT_LIST);
            this.getView().setModel(oModel, "aaa");
            //console.log("djkdk", gt_kostl.length)
            // for(let index in gt_kostl){
            //     if(gt_kostl[index].Kostl == "KS1770"){
            //             console.log(gt_kostl[index].Ktext)
            //     }else if(gt_kostl[index].Kostl == "KS1880"){
            //             console.log(gt_kostl[index].Ktext)
            //     }
            //     //console.log(gt_kostl[index])
            // }
            // for(let index of gt_kostl){
            //     switch(index.Kostl){
            //         case "KS1770":console.log(index.Ktext);break;
            //         case "KS1880":console.log(index.Ktext);break;

            //     }
            //     // console.log(index)
            // }
            // for(let i = 0; i < gt_kostl.length; i++){
            //     if(gt_kostl[i].Kostl == "KS1770"){
            //         console.log(gt_kostl[i].Ktext)
            //     }else if(gt_kostl[i].Kostl == "KS1880"){
            //         console.log(gt_kostl[i].Ktext)
            //     }
            // }
        },
        onPrint: function(){
            // const a = this.getView().getModel().oData;
            const a = this.getView().getModel("aaa")
            var d = a.getData();
            console.log(d);


            for(let i in d){
                        console.log("in", GT_LIST[i].Matnr, GT_LIST[i].Mktxt, GT_LIST[i].Werks, GT_LIST[i].Lgort)
            }
            // for(let i in GT_LIST){
            //        console.log("in", GT_LIST[i].Matnr, GT_LIST[i].Mktxt, GT_LIST[i].Werks, GT_LIST[i].Lgort)
            //     }

            // for(let i of GT_LIST){
            //     console.log("of", i.Matnr, i.Mktxt, i.Werks, i.Lgort)
            // }
            // for(let i = 0; i < GT_LIST.length; i++){
            //     console.log(";;;", GT_LIST[i].Matnr, GT_LIST[i].Mktxt, GT_LIST[i].Werks, GT_LIST[i].Lgort)
            // }
        }
    });
});
