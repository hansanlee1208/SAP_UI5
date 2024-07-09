/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sync5cl3/jsontest/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
