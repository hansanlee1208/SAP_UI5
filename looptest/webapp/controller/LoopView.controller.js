sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
   "sap/m/MessageToast",
   "sap/ui/core/TextAlign"
],
function (Controller,JSONModel,MessageToast,TextAlign) {
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

            for(let i =0; i<5; i++){
                if(i == 2){
                    break;
                }
                console.log('a',i)
            }
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
        },
        btn_dan: function(){
            var i = parseInt(this.byId("input_dan").getValue());
            var result = ""
            // for(let k = 1; k<10; k++){
            //     result += i +" x " + k + " = " + (i * k) + "\n";
            //     //console.log(i +' x '+ k,"=",i*k);
            // }
            
            var ll = 2
            while(ll <=i){
                var kk = 1
                while(kk<10){
                    console.log(ll +' x '+ kk,"=",ll*kk);
                    result += ll +" x " + kk + " = " + (ll * kk) + "\n";
                    kk++;  
                }
                ll++;
                if(ll ==3){ll++;}
            }
            //console.log(result)
            this.byId("d").setText(result)
        },
        btn_val: function(){
            var score = parseInt(this.byId("input_val").getValue());
            var i=0;
            var sc ;
            if(0<=score && score <=60){
                sc = 'F';
            } 
            else if(61<= score && score <=70){
                   sc = 'D';
                } else if(71 <= score && score <=80){
                        sc = 'C';
                    } else if(81<=score && score <=90){
                           sc = 'B';
                      } else if (91<=score && score <=100){
                              sc = 'A';
                          }else{
                            i=1
                            MessageToast.show("올바른 점수를 입력하세요")

                          }
            if(i == 0){
                MessageToast.show(score + "점의 학점은 "+sc+"입니다")
            }
        },
        btn_check: function(){
            var n = parseInt(this.byId("input_num").getValue());
            var l_list = [10, 20, 30, 40, 50]

            if(l_list.includes(n)){
                alert("Match");
            }else{
                alert("UnMatch")
            }

            var k =0
            for(let i of l_list){
                if(i == n){
                    alert("Match")
                    k =1;
                    break;
                }
            }
            if(k==0){
                alert("unmatch")
            }

            // for(let i in l_list){
            //     if(l_list[i] == n){
            //         alert("Match")
            //     }
            // }

            // for(let i=0;i<l_list.length; i++){
            //     if(l_list[i] == n){
            //         alert("Match")
            //     }
            // }
        },
        btn_conti: function(){
            var i = 1
            while(i<21){
            //     if([2, 5, 12, 17].includes(i)){
            //         i++;
            //         continue;
            //     }
            //     console.log(i)
            //     i++
                switch(i){
                    case 2 || 5 || 12 || 17 : i++; break;
                    default:console.log(i);i++;break;
                }
            }

            
        },
        btn_conti2: function(){
            var i = 1
            while(i<21){
                if(i%2 ==1){
                    console.log('홀수', i)
                    
                }
                i++;
            }

            
        },
        btn_msg: function(){
            var a = this.byId("input_msg").getValue();
            this.byId("id_msg").setText(a)
            this.byId("id_lbl").setText(a)
            
        },
        btn_sort: function(i){
            this.byId('id_msg').setTextAlign(i);
            // switch(i){
            //     case 'L': this.byId('id_msg').setTextAlign("Left"); break;
            //     case 'M': this.byId('id_msg').setTextAlign("Center"); break;
            //     case 'R': this.byId('id_msg').setTextAlign(TextAlign.Right); break;
            // }
        },
        btn_design: function(i){
            this.byId('id_lbl').setDesign(i);
           
        }
    });
});
