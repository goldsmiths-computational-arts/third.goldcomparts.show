import{W as t}from"./client.788dc82e.js";function n(t){var n=t-1;return n*n*n+1}function o(o,r,a){var i=getComputedStyle(o),e="none"===i.transform?"":i.transform,c=r.from.width/o.clientWidth,d=r.from.height/o.clientHeight,s=(r.from.left-r.to.left)/c,f=(r.from.top-r.to.top)/d,u=Math.sqrt(s*s+f*f),m=a.delay,l=void 0===m?0:m,p=a.duration,v=void 0===p?function(t){return 120*Math.sqrt(t)}:p,y=a.easing,g=void 0===y?n:y;return{delay:l,duration:t(v)?v(u):v,easing:g,css:function(t,n){return"transform: ".concat(e," translate(").concat(n*s,"px, ").concat(n*f,"px);")}}}function r(t,o){var r=o.delay,a=void 0===r?0:r,i=o.duration,e=void 0===i?400:i,c=o.easing,d=void 0===c?n:c,s=o.x,f=void 0===s?0:s,u=o.y,m=void 0===u?0:u,l=o.opacity,p=void 0===l?0:l,v=getComputedStyle(t),y=+v.opacity,g="none"===v.transform?"":v.transform,h=y*(1-p);return{delay:a,duration:e,easing:d,css:function(t,n){return"\n\t\t\ttransform: ".concat(g," translate(").concat((1-t)*f,"px, ").concat((1-t)*m,"px);\n\t\t\topacity: ").concat(y-h*n)}}}export{r as a,o as f};