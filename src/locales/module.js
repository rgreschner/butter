/* This Source Code Form is subject to the terms of the MIT license
 * If a copy of the MIT license was not distributed with this file, you can
 * obtain one at http://www.mozillapopcorn.org/butter-license.txt */

/**
 * Module: EditorModule
 *
 * Butter Module for Editors
 */

function getRequiredLocale(){
	return ["text!locales/de-DE.json"];
}

define( getRequiredLocale(),
  function( CurrentLocaleText ){

  function LocalizationManager(  ){
	this._locale = JSON.parse(CurrentLocaleText);
	this.getLocalizedText = function(name){
		return this._locale[name];
	}
  }

  LocalizationManager.__moduleName = "locales";

  return LocalizationManager;

}); //define
