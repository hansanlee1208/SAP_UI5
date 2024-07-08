/*global QUnit*/

sap.ui.define([
	"mentor01/day01/controller/MentView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("MentView Controller");

	QUnit.test("I should test the MentView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
