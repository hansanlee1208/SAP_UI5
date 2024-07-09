sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("quiz.quiz01.controller.quiz01view", {
        onInit: function () {
            
        },
        
        onCalc: function(i){
            var first_input = parseInt(this.getView().byId("input_1").getValue());
            var second_input =parseInt(this.getView().byId("input_2").getValue());

            var result_output;
            switch(i){
                case "+": result_output = first_input + second_input; break;
                case "-": result_output = first_input - second_input; break;
                case "*": result_output = first_input * second_input; break;
                case "/": result_output = first_input / second_input; break;

                default: this.getView().byId("input_1").setValue();
                         this.getView().byId("input_2").setValue();
                         this.getView().byId("output_1").setValue();break;
            }
            this.getView().byId("output_1").setValue(result_output);   
        }

    });
});
