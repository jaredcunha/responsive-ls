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

function setSource() {
  var label = getBreakpoint();
  document.getElementById("demo").innerHTML = label.current;
  if ( label.current === "default" ) {
    console.log("List Loaded");
  }
  if ( label.current === "expansionA" || label.current === "expansionB" ) {
    console.log("List and Map Loaded");
  }
}

document.addEventListener("DOMContentLoaded", setSource);
window.onresize = setSource;