/* This Source Code Form is subject to the terms of the MIT license
 * If a copy of the MIT license was not distributed with this file, you can
 * obtain one at http://www.mozillapopcorn.org/butter-license.txt */

/**
 * Module: Embedded CoffeeScript class test.
 *
 * Test for CoffeeScript class integration.
 */
 
/**
 * CoffeeScript class _Foo.
 */

var __Foo,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

__Foo = (function() {


  function __Foo(butter) {
      console.log("ctor");
  }
  

  __Foo.prototype.test = function(){
	console.log("Hello world!");
  };

  return __Foo;

})();
 
/**
 * RequireJS Module definition.
 */ 
  
define([], function() {

  // @param butter The actual butter instance initializing the module.
  var Foo = function(butter){
	return new __Foo(butter);
  };
  Foo.__moduleName = "coffeetest";
 
  return Foo;
});