(function(){function a(a,b){for(var c=0,d=a.length;c<d;++c)b(a[c])}function b(a,b){if(!Array.prototype.indexOf){var c=a.length;while(c--)if(a[c]===b)return!0;return!1}return a.indexOf(b)!=-1}function c(a,b,c){var d=a.getCursor(),e=c(a,d),f=e;/^[\w$_]*$/.test(e.string)||(e=f={start:d.ch,end:d.ch,string:"",state:e.state,className:e.string=="."?"property":null});while(f.className=="property"){f=c(a,{line:d.line,ch:f.start});if(f.string!=".")return;f=c(a,{line:d.line,ch:f.start});if(f.string==")"){var g=1;do{f=c(a,{line:d.line,ch:f.start});switch(f.string){case")":g++;break;case"(":g--;break;default:}}while(g>0);f=c(a,{line:d.line,ch:f.start});if(f.className!="variable")return;f.className="function"}if(!h)var h=[];h.push(f)}return{list:j(e,h,b),from:{line:d.line,ch:e.start},to:{line:d.line,ch:e.end}}}function d(a,b){var c=a.getTokenAt(b);return b.ch==c.start+1&&c.string.charAt(0)=="."?(c.end=c.start,c.string=".",c.className="property"):/^\.[\w$_]*$/.test(c.string)&&(c.className="property",c.start++,c.string=c.string.replace(/\./,"")),c}function j(c,d,h){function k(a){a.indexOf(j)==0&&!b(i,a)&&i.push(a)}function l(b){typeof b=="string"?a(e,k):b instanceof Array?a(f,k):b instanceof Function&&a(g,k);for(var c in b)k(c)}var i=[],j=c.string;if(d){var m=d.pop(),n;m.className=="variable"?n=window[m.string]:m.className=="string"?n="":m.className=="atom"?n=1:m.className=="function"&&(window.jQuery==null||m.string!="$"&&m.string!="jQuery"||typeof jQuery!="function"?window._!=null&&m.string=="_"&&typeof _=="function"&&(n=_()):n=jQuery());while(n!=null&&d.length)n=n[d.pop().string];n!=null&&l(n)}else{for(var o=c.state.localVars;o;o=o.next)k(o.name);l(window),a(h,k)}return i}CodeMirror.javascriptHint=function(a){return c(a,h,function(a,b){return a.getTokenAt(b)})},CodeMirror.coffeescriptHint=function(a){return c(a,i,d)};var e="charAt charCodeAt indexOf lastIndexOf substring substr slice trim trimLeft trimRight toUpperCase toLowerCase split concat match replace search".split(" "),f="length concat join splice push pop shift unshift slice reverse sort indexOf lastIndexOf every some filter forEach map reduce reduceRight ".split(" "),g="prototype apply call bind".split(" "),h="break case catch continue debugger default delete do else false finally for function if in instanceof new null return switch throw true try typeof var void while with".split(" "),i="and break catch class continue delete do else extends false finally for if in instanceof isnt new no not null of off on or return switch then throw true try typeof until void while with yes".split(" ")})();