import{a as t,b as e,c as n,d as r,i as o,s as i,e as c,S as a,h as s,g as u,t as l,m as p,l as f,n as m,o as h,k as g,p as d,w as y,x as v,z as A,A as E,F as M,G as T,H as k,I as H}from"./client.0cc44cbf.js";import{B as R}from"./constants.4cde9e8e.js";function S(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,i=e(t);if(r){var c=e(this).constructor;o=Reflect.construct(i,arguments,c)}else o=i.apply(this,arguments);return n(this,o)}}function b(t){var e,n,r,o,i,c,a,T,k,H,S,b,x,I,W,j,q,L,w,D,K;return{c:function(){e=s("link"),n=u(),r=s("title"),o=l(t[1]),i=u(),c=s("link"),T=u(),k=s("meta"),H=u(),S=s("meta"),x=u(),I=s("meta"),W=u(),j=s("meta"),L=u(),w=s("meta"),D=u(),K=s("meta"),this.h()},l:function(a){e=p(a,"LINK",{rel:!0,href:!0}),n=f(a),r=p(a,"TITLE",{});var s=m(r);o=h(s,t[1]),s.forEach(g),i=f(a),c=p(a,"LINK",{rel:!0,href:!0}),T=f(a),k=p(a,"META",{property:!0,content:!0}),H=f(a),S=p(a,"META",{property:!0,content:!0}),x=f(a),I=p(a,"META",{property:!0,content:!0}),W=f(a),j=p(a,"META",{property:!0,content:!0}),L=f(a),w=p(a,"META",{property:!0,content:!0}),D=f(a),K=p(a,"META",{property:!0,content:!0}),this.h()},h:function(){d(e,"rel","stylesheet"),d(e,"href","css/global.css"),d(c,"rel","canonical"),d(c,"href",a=R+t[0]+"/"),d(k,"property","og:title"),d(k,"content",t[1]),d(S,"property","og:url"),d(S,"content",b=R+t[0]+"/"),d(I,"property","og:description"),d(I,"content",t[2]),d(j,"property","og:image"),d(j,"content",q=R+t[3]),d(w,"property","og:image:width"),d(w,"content",t[4]),d(K,"property","og:image:height"),d(K,"content",t[5])},m:function(t,a){y(t,e,a),y(t,n,a),y(t,r,a),v(r,o),y(t,i,a),y(t,c,a),y(t,T,a),y(t,k,a),y(t,H,a),y(t,S,a),y(t,x,a),y(t,I,a),y(t,W,a),y(t,j,a),y(t,L,a),y(t,w,a),y(t,D,a),y(t,K,a)},p:function(t,e){var n=A(e,1)[0];2&n&&E(o,t[1]),1&n&&a!==(a=R+t[0]+"/")&&d(c,"href",a),2&n&&d(k,"content",t[1]),1&n&&b!==(b=R+t[0]+"/")&&d(S,"content",b),4&n&&d(I,"content",t[2]),8&n&&q!==(q=R+t[3])&&d(j,"content",q),16&n&&d(w,"content",t[4]),32&n&&d(K,"content",t[5])},i:M,o:M,d:function(t){t&&g(e),t&&g(n),t&&g(r),t&&g(i),t&&g(c),t&&g(T),t&&g(k),t&&g(H),t&&g(S),t&&g(x),t&&g(I),t&&g(W),t&&g(j),t&&g(L),t&&g(w),t&&g(D),t&&g(K)}}}function x(t,e,n){var r,o=T().page;k(t,o,(function(t){return n(7,r=t)}));var i=e.url,c=void 0===i?r.path:i,a=e.title,s=e.description,u=void 0===s?"6 May 2021":s,l=e.image,p=void 0===l?"/img/social/facebook_1200x630.jpg":l,f=e.imageWidth,m=void 0===f?1200:f,h=e.imageHeight,g=void 0===h?630:h;return H((function(){return function(){document.head.querySelector("title").remove(),document.head.querySelector('link[rel="canonical"').remove(),Array.from(document.head.querySelectorAll('meta[property*="og"')).forEach((function(t){return t.remove()}))}})),t.$$set=function(t){"url"in t&&n(0,c=t.url),"title"in t&&n(1,a=t.title),"description"in t&&n(2,u=t.description),"image"in t&&n(3,p=t.image),"imageWidth"in t&&n(4,m=t.imageWidth),"imageHeight"in t&&n(5,g=t.imageHeight)},[c,a,u,p,m,g,o]}var I=function(e){t(s,a);var n=S(s);function s(t){var e;return r(this,s),e=n.call(this),o(c(e),t,x,b,i,{url:0,title:1,description:2,image:3,imageWidth:4,imageHeight:5}),e}return s}();export{I as M};