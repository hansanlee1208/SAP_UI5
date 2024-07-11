sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("quiz.quiz02.controller.quiz02view", {
        onInit: function () {
            var oModel = new JSONModel({
                todos: []
            });
            this.getView().setModel(oModel);
        },
        onAddTodo: function(){
            var sTodoText = this.byId("inputTodo").getValue();
            var oModel = this.getView().getModel();
            var aTodos = oModel.getProperty("/todos")
            console.log(aTodos)

            aTodos.push({text: sTodoText});
            oModel.setProperty("/todos", aTodos);
            this.byId("inputTodo").setValue("");
        },
        onDeleteRow: function(oEvent){
            console.log("Event",oEvent)
            var oTable = oEvent.getSource();
            console.log("source", oTable)
            var oModel = oTable.getModel();
            console.log("Model", oModel)
            // var aSelectedItems = oTable.getSelectedItems();
            // for (var i = 0; i < aSelectedItems.length; i++) {
            //     var sPath = aSelectedItems[i].getBindingContext().getPath();
            //     var aTodos = oModel.getProperty("/todos");
            //     aTodos.splice(sPath.substring(sPath.lastIndexOf("/") + 1), 1);
            //     oModel.setProperty("/todos", aTodos);
            // }
            // oTable.removeSelections();
        }
    });
});
