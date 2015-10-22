function removeQuotes(string) {
    if (typeof string === 'string' || string instanceof String) {
        string = string.replace(/^['"]+|\s+|\\|(;\s?})+|['"]$/g, '');
    }
    return string;
}

function getBreakpoint() {
    var style = null;
    if ( window.getComputedStyle && window.getComputedStyle(document.body, '::before') ) {
        style = window.getComputedStyle(document.body, '::before');
        style = style.content;
    }
    return JSON.parse( removeQuotes(style) );
}

var defaultFired = false;
var expansionAFired = false;

function setSource() {
  var label = getBreakpoint();
  document.getElementById("demo").innerHTML = label.current;
  if ( label.current === "default" && defaultFired === false) {
    console.log("List Loaded");
    defaultFired = true;
  }
  if ( (label.current === "expansionA" || label.current === "expansionB") && expansionAFired === false ) {
    console.log("List and Map Loaded");
    expansionAFired = true;
  }
}

document.addEventListener("DOMContentLoaded", setSource);
window.onresize = setSource;