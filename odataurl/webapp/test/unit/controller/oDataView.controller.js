/*global QUnit*/

sap.ui.define([
	"odataurl/odataurl/controller/oDataView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("oDataView Controller");

	QUnit.test("I should test the oDataView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
