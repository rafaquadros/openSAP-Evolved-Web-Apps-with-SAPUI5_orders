sap.ui.define([
	"./BaseController"
], function (BaseController) {
	"use strict";

	return BaseController.extend("opensap.orders.controller.Info", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf opensap.orders.view.Info
		 */
		onInit: function () {
			this.getRouter().getRoute("Info").attachPatternMatched(this._onInfoMatched, this);
		},
		
		_onInfoMatched : function (oEvent) {
			this.getModel("appView").setProperty("/layout", "ThreeColumnsMidExpanded");
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf opensap.orders.view.Info
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf opensap.orders.view.Info
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf opensap.orders.view.Info
		 */
		//	onExit: function() {
		//
		//	}

	});

});