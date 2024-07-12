/*global QUnit*/

sap.ui.define([
	"tablens/table/controller/TableView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("TableView Controller");

	QUnit.test("I should test the TableView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
