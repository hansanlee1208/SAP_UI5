/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"quiz/quiz_02/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
