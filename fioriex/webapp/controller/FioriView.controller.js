sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("fiorins.fioriex.controller.FioriView", {
        onInit: function () {
            var vData = [10, 20, 30, 40, 50];

            var vArray = [
                {
                    Team : "기아 타이거즈",
                    Area : "광주"
                },
                {
                    Team : "삼성 라이온즈",
                    Area : "대구"
                },
                {
                    Team : "NC 다이노스",
                    Area : "창원"
                },
                {
                    Team : "두산 베어스",
                    Area : "서울"
                },
                {
                    Team : "LG 트윈스",
                    Area : "서울"
                }
            ];
            var oData ={
                popul : [
                    {
                        Year : 2018,    //지표
                        home : 20499543 //가구수
                    },
                    {
                        Year : 2019,    //지표
                        home : 20891348 //가구수
                    },
                    {
                        Year : 2020,    //지표
                        home : 21484785 //가구수
                    },
                    {
                        Year : 2021,    //지표
                        home : 22022753 //가구수
                    },
                    {
                        Year : 2022,    //지표
                        home : 22383187 //가구수
                    }
                ],
                //출생아수
                born : [
                    {
                        Year : 2018,    //지표
                        Birth : 326822 //가구수
                    },
                    {
                        Year : 2019,    //지표
                        Birth : 302676 //가구수
                    },
                    {
                        Year : 2020,    //지표
                        Birth : 272337 //가구수
                    },
                    {
                        Year : 2021,    //지표
                        Birth : 260562 //가구수
                    },
                    {
                        Year : 2022,    //지표
                        Birth : 249186 //가구수
                    }
                ]
            }

            const oModel = new JSONModel(vData);
            const oModel2 = new JSONModel(vArray);
            const oModel3 = new JSONModel("/json/Base.json");
            const oModel4 = new JSONModel("/json/Old.json");
            const oModel5 = new JSONModel(oData);

            this.getView().setModel(oModel);
            this.getView().setModel(oModel2, "vA");
            this.getView().setModel(oModel3, "Base");
            this.getView().setModel(oModel4, "Old");
            this.getView().setModel(oModel5, "oD");     
        },

        btn_Q1:function(){
            //입력받은 단의 구구단 console.log 출력
            // 입력 값 없을 시 "단 을 입력 하세요" 라는 메시지를 띄워 준다

            const num = this.byId("Q1_id").getValue();

            if(num === ""){
                alert("단을 입력 하세요")
            }else{
                for(let i = 1; i <10; i++){
                    console.log(num, ' x ', i, '= ', num*i)
                }
            }
        },
        btn_Q2: function(i){
            switch(i){
                case '0':
                    for(let i = 2; i<10; i++){
                        for(let j =1; j<10; j++){
                            console.log(i+ ' x '+ j+ ' = '+ j*i);
                        }
                    }
                    break;
                case '1':
                    var k = 2
                    while(k<10){
                        var l =1;
                        while(l<10){
                            console.log(k+ " x "+ l+ " = "+ k*l);
                            l++;
                        }
                        k++;
                    }
                    break;
                default:
                    var o = 2
                    while(o<10){
                        for(let j =1; j<10; j++){
                            console.log(o+ " x "+ j+ " = "+ j*o);
                        }
                        o++;
                    }
                    break;
            }
        },
        btn_Q3: function(){
            const num = this.byId("Q3_id").getValue();
            var k = 2
            while(k<10){
                var l =1;
                if(k == num){
                    k++;
                }
                while(l<10){
                    console.log(k+ " x "+ l+ " = "+ k*l);
                    l++;
                }
                k++;
            }
        },
        btn_Q4:function(){
            var k = 2
            while(k<10){
                var l =1;
                if(k%2 == 0){
                    k++;
                }
                while(l<10){
                    console.log(k+ " x "+ l+ " = "+ k*l);
                    l++;
                }
                k++;
            }
        },
        btn_Q5:function(){
            var oo = this.getView().getModel();
            console.log(oo)
            var o = oo.getData();
            var s_sum = 0;

            for(let i =0; i<o.length; i++){
                s_sum += o[i]
            }
            this.byId("txt_5").setText(s_sum);
        },
        btn_Q6:function(){
            var oo = this.getView().getModel("vA");
            var o = oo.getData();

            for(let i of o){
                console.log(i);
            }
        }

    });
});
