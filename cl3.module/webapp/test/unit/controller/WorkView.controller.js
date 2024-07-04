/*global QUnit*/

sap.ui.define([
	"cl3work/cl3.module/controller/WorkView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("WorkView Controller");

	QUnit.test("I should test the WorkView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
