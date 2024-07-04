/*global QUnit*/

sap.ui.define([
	"cl3json/jsonedu/controller/JsonView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("JsonView Controller");

	QUnit.test("I should test the JsonView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
