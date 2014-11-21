/* global famous */
/* jshint unused:false */

'use strict';

console.log(famous);

var Engine    = famous.core.Engine;
var Context   = famous.core.Context;
var Modifier  = famous.core.Modifier;
var Surface   = famous.core.Surface;

var context = Engine.createContext();

var background = new Surface({
  properties: {
    background: 'black'
  }
});

context.add(background);
