/* This Source Code Form is subject to the terms of the MIT license
 * If a copy of the MIT license was not distributed with this file, you can
 * obtain one at http://www.mozillapopcorn.org/butter-license.txt */

/**
 * Module: LocalizationManager
 *
 * Butter Module for Text Localization
 */

function getRequiredLocale(){
	var locale = window.navigator.userLanguage || window.navigator.language;
	return ["text!locales/"+locale+".json","text!locales/en-US.json"];
}

define( getRequiredLocale(),
  function( CurrentLocaleText, FallbackLocaleText ){

  function LocalizationManager(  ){
	this._locale = JSON.parse(CurrentLocaleText);
	this.getLocalizedText = function(name){
		var localizedText = this._locale[name];
		return localizedText;
	};
  }

  LocalizationManager.__moduleName = "locales";

  return LocalizationManager;

}); //define
