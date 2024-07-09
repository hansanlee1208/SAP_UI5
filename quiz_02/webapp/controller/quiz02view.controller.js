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

            aTodos.push({text: sTodoText});
            oModel.setProperty("/todos", aTodos);
            this.byId("inputTodo").setValue("");
        },
        onDeleteTodo: function(oEvent){
            // var oItem = oEvent.getSource().getParent();
            // var oTable = this.byId("todoTable");
            // var sPath = oItem.getBindingContext().getPath();
            // var oModel = oTable.getModel();
            // var aTodos = oModel.getProperty("/todos");
            // aTodos.splice(sPath.substring(sPath.lastIndexOf("/") + 1), 1);
            // oModel.setProperty("/todos", aTodos);
        },
        onDeleteRow: function(oEvent){
            // var oTable = oEvent.getSource();
            // var oModel = oTable.getModel();
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
