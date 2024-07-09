/*global QUnit*/

sap.ui.define([
	"quiz/quiz_01/controller/quiz01view.controller"
], function (Controller) {
	"use strict";

	QUnit.module("quiz01view Controller");

	QUnit.test("I should test the quiz01view controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
