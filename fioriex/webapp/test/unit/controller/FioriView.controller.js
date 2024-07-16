/*global QUnit*/

sap.ui.define([
	"fiorins/fioriex/controller/FioriView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("FioriView Controller");

	QUnit.test("I should test the FioriView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
