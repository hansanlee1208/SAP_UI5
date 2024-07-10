/*global QUnit*/

sap.ui.define([
	"sync5cl3/looptest/controller/LoopView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("LoopView Controller");

	QUnit.test("I should test the LoopView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
