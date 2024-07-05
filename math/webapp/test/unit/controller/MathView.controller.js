/*global QUnit*/

sap.ui.define([
	"cl3math/math/controller/MathView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("MathView Controller");

	QUnit.test("I should test the MathView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
