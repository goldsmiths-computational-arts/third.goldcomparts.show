import{_ as t,r as n,a as e,b as r,c as a,d as s,i as o,s as i,e as u,S as l,h as c,t as f,m as h,n as v,o as d,k as m,w as g,x as p,D as _,g as E,l as y,p as x,u as b,H as w,I,J as O,K as R,q as T,L as N,M as C,C as D,N as P,O as S,y as j,z as k,A as V,P as $,Q as L,R as M,T as A,U as B,V as H}from"./client.21108fa2.js";import{t as Y}from"./tsv.c906c42a.js";import{s as q}from"./helpers.3b26ddc2.js";import{f as z,a as F}from"./index.eb36e105.js";function J(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,s=r(t);if(n){var o=r(this).constructor;e=Reflect.construct(s,arguments,o)}else e=s.apply(this,arguments);return a(this,e)}}function K(t,n,e){var r=t.slice();return r[13]=n[e],r[15]=e,r}function Q(t,n,e){var r=t.slice();return r[4]=n[e],r}function U(t,n,e){var r=t.slice();return r[3]=n[e],r}function G(t,n,e){var r=t.slice();return r[2]=n[e],r}function W(t){var n,e,r,a=t[2]+"";return{c:function(){n=c("option"),e=f(a),this.h()},l:function(t){n=h(t,"OPTION",{value:!0});var r=v(n);e=d(r,a),r.forEach(m),this.h()},h:function(){n.__value=r=t[2],n.value=n.__value},m:function(t,r){g(t,n,r),p(n,e)},p:function(t,s){1&s&&a!==(a=t[2]+"")&&_(e,a),1&s&&r!==(r=t[2])&&(n.__value=r,n.value=n.__value)},d:function(t){t&&m(n)}}}function X(t){var n,e,r,a=t[3]+"";return{c:function(){n=c("option"),e=f(a),this.h()},l:function(t){n=h(t,"OPTION",{value:!0});var r=v(n);e=d(r,a),r.forEach(m),this.h()},h:function(){n.__value=r=t[3],n.value=n.__value},m:function(t,r){g(t,n,r),p(n,e)},p:function(t,s){1&s&&a!==(a=t[3]+"")&&_(e,a),1&s&&r!==(r=t[3])&&(n.__value=r,n.value=n.__value)},d:function(t){t&&m(n)}}}function Z(t){var n,e,r,a=t[4]+"";return{c:function(){n=c("option"),e=f(a),this.h()},l:function(t){n=h(t,"OPTION",{value:!0});var r=v(n);e=d(r,a),r.forEach(m),this.h()},h:function(){n.__value=r=t[4],n.value=n.__value},m:function(t,r){g(t,n,r),p(n,e)},p:function(t,s){1&s&&a!==(a=t[4]+"")&&_(e,a),1&s&&r!==(r=t[4])&&(n.__value=r,n.value=n.__value)},d:function(t){t&&m(n)}}}function tt(t){var n,e,r,a,s,o,i,u,l;return{c:function(){n=c("div"),e=f("Sorry your filter return no results\n\t\t\t\t"),r=c("br"),a=E(),s=c("div"),o=f("Click here to remove filters"),i=E(),this.h()},l:function(t){n=h(t,"DIV",{});var u=v(n);e=d(u,"Sorry your filter return no results\n\t\t\t\t"),r=h(u,"BR",{}),a=y(u),s=h(u,"DIV",{class:!0});var l=v(s);o=d(l,"Click here to remove filters"),l.forEach(m),i=y(u),u.forEach(m),this.h()},h:function(){x(s,"class","button")},m:function(c,f){g(c,n,f),p(n,e),p(n,r),p(n,a),p(n,s),p(s,o),p(n,i),u||(l=C(s,"click",t[9]),u=!0)},p:j,d:function(t){t&&m(n),u=!1,l()}}}function nt(t,n){var e,r,a,s,o,i,u,l,T,N,C,D,P,S,k,V,$=n[13].name+"",L=(n[13].otherName?"  (".concat(n[13].otherName,")"):"")+"",A=n[13].title+"",B=j;return{key:t,first:null,c:function(){e=c("div"),r=c("a"),a=c("div"),s=E(),o=c("h6"),i=f($),u=E(),l=f(L),T=E(),N=c("p"),C=f(A),P=E(),this.h()},l:function(t){e=h(t,"DIV",{class:!0});var n=v(e);r=h(n,"A",{href:!0});var c=v(r);a=h(c,"DIV",{class:!0,style:!0}),v(a).forEach(m),s=y(c),o=h(c,"H6",{class:!0});var f=v(o);i=d(f,$),u=y(f),l=d(f,L),f.forEach(m),T=y(c),N=h(c,"P",{class:!0});var g=v(N);C=d(g,A),g.forEach(m),c.forEach(m),P=y(n),n.forEach(m),this.h()},h:function(){x(a,"class","bio-photo svelte-13uxwrx"),b(a,"background-image","url(img/bios/"+n[13].username+".jpeg)"),x(o,"class","svelte-13uxwrx"),x(N,"class","svelte-13uxwrx"),x(r,"href",D="artists/"+q(n[13].name)),x(e,"class","bio-box svelte-13uxwrx"),this.first=e},m:function(t,n){g(t,e,n),p(e,r),p(r,a),p(r,s),p(r,o),p(o,i),p(o,u),p(o,l),p(r,T),p(r,N),p(N,C),p(e,P),V=!0},p:function(t,n){(!V||2&n)&&b(a,"background-image","url(img/bios/"+t[13].username+".jpeg)"),(!V||2&n)&&$!==($=t[13].name+"")&&_(i,$),(!V||2&n)&&L!==(L=(t[13].otherName?"  (".concat(t[13].otherName,")"):"")+"")&&_(l,L),(!V||2&n)&&A!==(A=t[13].title+"")&&_(C,A),(!V||2&n&&D!==(D="artists/"+q(t[13].name)))&&x(r,"href",D)},r:function(){k=e.getBoundingClientRect()},f:function(){w(e),B(),I(e,k)},a:function(){B(),B=O(e,k,z,{delay:10*n[15],duration:400})},i:function(t){V||(M((function(){S||(S=R(e,F,{duration:300,y:200},!0)),S.run(1)})),V=!0)},o:function(t){S||(S=R(e,F,{duration:300,y:200},!1)),S.run(0),V=!1},d:function(t){t&&m(e),t&&S&&S.end()}}}function et(t){for(var n,e,r,a,s,o,i,u,l,_,b,w,I,O,R,j,H,Y,q,z,F=[],J=new Map,et=t[0].themes,rt=[],at=0;at<et.length;at+=1)rt[at]=W(G(t,et,at));for(var st=t[0].media,ot=[],it=0;it<st.length;it+=1)ot[it]=X(U(t,st,it));for(var ut=t[0].years,lt=[],ct=0;ct<ut.length;ct+=1)lt[ct]=Z(Q(t,ut,ct));for(var ft=t[1],ht=function(t){return t[13].username},vt=0;vt<ft.length;vt+=1){var dt=K(t,ft,vt),mt=ht(dt);J.set(mt,F[vt]=nt(mt,dt))}var gt=null;return ft.length||(gt=tt(t)),{c:function(){n=E(),e=c("section"),r=c("div"),a=c("div"),s=c("select"),o=c("option"),i=f("Theme");for(var t=0;t<rt.length;t+=1)rt[t].c();u=E(),l=c("select"),_=c("option"),b=f("Media");for(var h=0;h<ot.length;h+=1)ot[h].c();w=E(),I=c("select"),O=c("option"),R=f("Year");for(var v=0;v<lt.length;v+=1)lt[v].c();j=E(),H=c("div");for(var d=0;d<F.length;d+=1)F[d].c();gt&&gt.c(),this.h()},l:function(t){T('[data-svelte="svelte-1mylat4"]',document.head).forEach(m),n=y(t),e=h(t,"SECTION",{class:!0});var c=v(e);r=h(c,"DIV",{class:!0});var f=v(r);a=h(f,"DIV",{class:!0});var g=v(a);s=h(g,"SELECT",{});var p=v(s);o=h(p,"OPTION",{value:!0,selected:!0,hidden:!0});var E=v(o);i=d(E,"Theme"),E.forEach(m);for(var x=0;x<rt.length;x+=1)rt[x].l(p);p.forEach(m),u=y(g),l=h(g,"SELECT",{});var N=v(l);_=h(N,"OPTION",{value:!0,selected:!0,hidden:!0});var C=v(_);b=d(C,"Media"),C.forEach(m);for(var D=0;D<ot.length;D+=1)ot[D].l(N);N.forEach(m),w=y(g),I=h(g,"SELECT",{});var P=v(I);O=h(P,"OPTION",{value:!0,selected:!0,hidden:!0});var S=v(O);R=d(S,"Year"),S.forEach(m);for(var k=0;k<lt.length;k+=1)lt[k].l(P);P.forEach(m),j=y(g),H=h(g,"DIV",{class:!0});for(var V=v(H),$=0;$<F.length;$+=1)F[$].l(V);gt&&gt.l(V),V.forEach(m),g.forEach(m),f.forEach(m),c.forEach(m),this.h()},h:function(){document.title="Final Show - 2021",o.__value=null,o.value=o.__value,o.selected=!0,o.hidden=!0,void 0===t[2]&&M((function(){return t[6].call(s)})),_.__value=null,_.value=_.__value,_.selected=!0,_.hidden=!0,void 0===t[3]&&M((function(){return t[7].call(l)})),O.__value=null,O.value=O.__value,O.selected=!0,O.hidden=!0,void 0===t[4]&&M((function(){return t[8].call(I)})),x(H,"class","bio-boxes svelte-13uxwrx"),x(a,"class","content"),x(r,"class","container page-max-width artists-container svelte-13uxwrx"),x(e,"class","section bg-col-7")},m:function(c,f){g(c,n,f),g(c,e,f),p(e,r),p(r,a),p(a,s),p(s,o),p(o,i);for(var h=0;h<rt.length;h+=1)rt[h].m(s,null);N(s,t[2]),p(a,u),p(a,l),p(l,_),p(_,b);for(var v=0;v<ot.length;v+=1)ot[v].m(l,null);N(l,t[3]),p(a,w),p(a,I),p(I,O),p(O,R);for(var d=0;d<lt.length;d+=1)lt[d].m(I,null);N(I,t[4]),p(a,j),p(a,H);for(var m=0;m<F.length;m+=1)F[m].m(H,null);gt&&gt.m(H,null),Y=!0,q||(z=[C(s,"change",t[6]),C(l,"change",t[7]),C(I,"change",t[8])],q=!0)},p:function(t,n){var e=D(n,1)[0];if(1&e){var r;for(et=t[0].themes,r=0;r<et.length;r+=1){var a=G(t,et,r);rt[r]?rt[r].p(a,e):(rt[r]=W(a),rt[r].c(),rt[r].m(s,null))}for(;r<rt.length;r+=1)rt[r].d(1);rt.length=et.length}if(5&e&&N(s,t[2]),1&e){var o;for(st=t[0].media,o=0;o<st.length;o+=1){var i=U(t,st,o);ot[o]?ot[o].p(i,e):(ot[o]=X(i),ot[o].c(),ot[o].m(l,null))}for(;o<ot.length;o+=1)ot[o].d(1);ot.length=st.length}if(9&e&&N(l,t[3]),1&e){var u;for(ut=t[0].years,u=0;u<ut.length;u+=1){var c=Q(t,ut,u);lt[u]?lt[u].p(c,e):(lt[u]=Z(c),lt[u].c(),lt[u].m(I,null))}for(;u<lt.length;u+=1)lt[u].d(1);lt.length=ut.length}if(17&e&&N(I,t[4]),30&e){var f=t[1];A();for(var h=0;h<F.length;h+=1)F[h].r();F=P(F,e,ht,1,t,f,J,H,B,nt,null,K);for(var v=0;v<F.length;v+=1)F[v].a();S(),!f.length&&gt?gt.p(t,e):f.length?gt&&(gt.d(1),gt=null):((gt=tt(t)).c(),gt.m(H,null))}},i:function(t){if(!Y){for(var n=0;n<ft.length;n+=1)k(F[n]);Y=!0}},o:function(t){for(var n=0;n<F.length;n+=1)V(F[n]);Y=!1},d:function(t){t&&m(n),t&&m(e),$(rt,t),$(ot,t),$(lt,t);for(var r=0;r<F.length;r+=1)F[r].d();gt&&gt.d(),q=!1,L(z)}}}function rt(t){return at.apply(this,arguments)}function at(){return(at=t(n.mark((function t(e){var r,a;return n.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.params,t.next=3,this.fetch("artists.tsv").then((function(t){return t.text()}));case 3:return r=t.sent,t.next=6,this.fetch("/artists/tags.json").then((function(t){return t.json()}));case 6:return a=t.sent,t.abrupt("return",{artistsRows:r,tags:a});case 8:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function st(t,n,e){var r=n.artistsRows,a=n.tags,s=null,o=null,i=null;var u,l,c;return t.$$set=function(t){"artistsRows"in t&&e(5,r=t.artistsRows),"tags"in t&&e(0,a=t.tags)},t.$$.update=function(){32&t.$$.dirty&&e(10,u=Y(r).sort((function(t,n){return t.name.localeCompare(n.name,"en",{sensitivity:"base"})}))),3100&t.$$.dirty&&e(1,c=u.filter((function(t){return(!o||t.media&&t.media.includes(o))&&(!s||t.themes&&t.themes.includes(s))&&(!i||t.years&&t.years.includes(i))})).sort(l.fn))},e(11,l={title:"Artist",fn:function(t,n){return t.name.localeCompare(n.name,"en",{sensitivity:"base"})}}),[a,c,s,o,i,r,function(){s=H(this),e(2,s),e(0,a)},function(){o=H(this),e(3,o),e(0,a)},function(){i=H(this),e(4,i),e(0,a)},function(){return e(2,s=e(3,o=e(4,i=null)))}]}var ot=function(t){e(r,l);var n=J(r);function r(t){var e;return s(this,r),e=n.call(this),o(u(e),t,st,et,i,{artistsRows:5,tags:0}),e}return r}();export default ot;export{rt as preload};
