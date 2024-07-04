/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"cl3work/cl3.module/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
