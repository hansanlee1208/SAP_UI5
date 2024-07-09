/*global QUnit*/

sap.ui.define([
	"sync5cl3/jsontest/controller/DataView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("DataView Controller");

	QUnit.test("I should test the DataView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
