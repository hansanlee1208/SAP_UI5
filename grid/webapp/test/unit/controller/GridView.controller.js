/*global QUnit*/

sap.ui.define([
	"sync5grid/grid/controller/GridView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("GridView Controller");

	QUnit.test("I should test the GridView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
