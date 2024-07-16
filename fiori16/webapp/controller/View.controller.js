sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("sync5.cl3.fiori16.controller.View", {
        onInit: function () {
            var vData = [10, 20, 30, 40, 50]

            //oninit에 선언한 배열을 다른 function에서 사용하기 위해 JSONModel을 사용하여 getView().setModel()로 뿌려준다
            var oModel = new JSONModel(vData);
            this.getView().setModel(oModel);
        },
        //2번 문제 각 버튼 for / while / for+while  사용
        btn_Q2: function(i){
            switch(i){
                // 매개변수 i에 0이 오면 이중 for문으로 구구단 출력
                case '0':
                    for(let i = 2; i<10; i++){
                        for(let j =1; j<10; j++){
                            console.log(i+ ' x '+ j+ ' = '+ j*i);
                        }
                    }
                    break;
                // 매개변수 i에 1이 오면 2중 while문으로 구구단 출력
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
                // 매개변수 i 없이 함수 실행되면 default 타서 for + while문 구구단 출력
                default:
                    for(let i = 2; i<10; i++){
                        var l =1;
                        while(l<10){
                            console.log(i+ " x "+ l+ " = "+ i*l);
                            l++;
                        }
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
                    //input에 입력된 값인 num값이 구구단 값과 동일시에는 k++을 이용해서 뛰어넘어준다 continue;랑 같은 역할(continue는 반복문을 다시 거쳐야하니 ++사용)
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
            while(k<9){
                var l =1;
                if(k%2 == 1){
                    //k가 2로 나누었을때 나머지가 1 즉 홀수 일때 k++을 이용하여 짝수로 만들어서 진행 continue와 동일(continue는 반복문을 다시 거쳐야하니 ++사용)
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
            //init에서 선언된 배열을 사용하기 위해 getView().setModel()로 뿌려줬던 데이터를 사용하기 위해 getModel()하여 가져와서 modl에 담는다.
            // console.log(modl)을 통해 모델의 키 벨류를 파악하여 oData를 직접 접근하여 사용하도 되지만 용이하지 않아 getData()함수 사용하여 배열 접근
            let modl = this.getView().getModel();
            var arr = modl.getData(); 
            var multi_result = 1;
            //배열 안에 담긴 값들을 for of 문을 통해 접근하여 1에 점차 곱해 나가서 출력
            for(let i of arr){
                multi_result *= i 
            }
            // 곱해서 나온 결과값을 Text 태그에 데이터를 바인딩 시켜준다. input이면 setValue / label,text 는 setText
            this.byId("txt_5").setText(multi_result);
        }
    });
});
