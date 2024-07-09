/*global QUnit*/

sap.ui.define([
	"quiz/quiz_02/controller/quiz02view.controller"
], function (Controller) {
	"use strict";

	QUnit.module("quiz02view Controller");

	QUnit.test("I should test the quiz02view controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
