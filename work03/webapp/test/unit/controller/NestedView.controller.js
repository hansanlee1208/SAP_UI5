/*global QUnit*/

sap.ui.define([
	"cl3ns/work03/controller/NestedView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("NestedView Controller");

	QUnit.test("I should test the NestedView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
