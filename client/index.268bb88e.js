import{S as e,i as t,s as l,e as a,t as s,g as r,h as n,j as o,d as c,n as h,o as i,r as u,a as f,f as v,k as m,l as g,C as d,D as p,E as _,F as E,q as w,G as y,p as I,H as b,I as k,y as O,u as N,v as T,J as D,x as C,K as V,L as $,M as j,N as x}from"./client.38296041.js";import{t as S}from"./tsv.6a7ced64.js";import{s as P}from"./helpers.b84b4fdd.js";import{f as R,a as L}from"./index.765b443a.js";function M(e,t,l){const a=e.slice();return a[13]=t[l],a[15]=l,a}function B(e,t,l){const a=e.slice();return a[4]=t[l],a}function A(e,t,l){const a=e.slice();return a[3]=t[l],a}function F(e,t,l){const a=e.slice();return a[2]=t[l],a}function G(e){let t,l,f,v=e[2]+"";return{c(){t=a("option"),l=s(v),this.h()},l(e){t=r(e,"OPTION",{value:!0});var a=n(t);l=o(a,v),a.forEach(c),this.h()},h(){t.__value=f=e[2],t.value=t.__value},m(e,a){h(e,t,a),i(t,l)},p(e,a){1&a&&v!==(v=e[2]+"")&&u(l,v),1&a&&f!==(f=e[2])&&(t.__value=f,t.value=t.__value)},d(e){e&&c(t)}}}function H(e){let t,l,f,v=e[3]+"";return{c(){t=a("option"),l=s(v),this.h()},l(e){t=r(e,"OPTION",{value:!0});var a=n(t);l=o(a,v),a.forEach(c),this.h()},h(){t.__value=f=e[3],t.value=t.__value},m(e,a){h(e,t,a),i(t,l)},p(e,a){1&a&&v!==(v=e[3]+"")&&u(l,v),1&a&&f!==(f=e[3])&&(t.__value=f,t.value=t.__value)},d(e){e&&c(t)}}}function Y(e){let t,l,f,v=e[4]+"";return{c(){t=a("option"),l=s(v),this.h()},l(e){t=r(e,"OPTION",{value:!0});var a=n(t);l=o(a,v),a.forEach(c),this.h()},h(){t.__value=f=e[4],t.value=t.__value},m(e,a){h(e,t,a),i(t,l)},p(e,a){1&a&&v!==(v=e[4]+"")&&u(l,v),1&a&&f!==(f=e[4])&&(t.__value=f,t.value=t.__value)},d(e){e&&c(t)}}}function q(e){let t,l,u,g,d,p,_,E,w;return{c(){t=a("div"),l=s("Sorry your filter return no results\n        "),u=a("br"),g=f(),d=a("div"),p=s("Click here to remove filters"),_=f(),this.h()},l(e){t=r(e,"DIV",{});var a=n(t);l=o(a,"Sorry your filter return no results\n        "),u=r(a,"BR",{}),g=v(a),d=r(a,"DIV",{class:!0});var s=n(d);p=o(s,"Click here to remove filters"),s.forEach(c),_=v(a),a.forEach(c),this.h()},h(){m(d,"class","button")},m(a,s){h(a,t,s),i(t,l),i(t,u),i(t,g),i(t,d),i(d,p),i(t,_),E||(w=I(d,"click",e[9]),E=!0)},p:O,d(e){e&&c(t),E=!1,w()}}}function J(e,t){let l,w,y,I,b,k,N,T,D,C,$,j,x,S,M,B,A,F,G,H=t[13].title+"",Y=t[13].name+"",q=t[13].otherName?`  (${t[13].otherName})`:"",J=O;return{key:e,first:null,c(){l=a("div"),w=a("a"),y=a("div"),I=a("div"),b=f(),k=a("div"),N=f(),T=a("h6"),D=s(H),C=f(),$=a("p"),j=s(Y),x=f(),S=s(q),B=f(),this.h()},l(e){l=r(e,"DIV",{class:!0});var t=n(l);w=r(t,"A",{href:!0});var a=n(w);y=r(a,"DIV",{class:!0});var s=n(y);I=r(s,"DIV",{class:!0}),n(I).forEach(c),b=v(s),k=r(s,"DIV",{class:!0,style:!0}),n(k).forEach(c),s.forEach(c),N=v(a),T=r(a,"H6",{class:!0});var h=n(T);D=o(h,H),h.forEach(c),C=v(a),$=r(a,"P",{class:!0});var i=n($);j=o(i,Y),x=v(i),S=o(i,q),i.forEach(c),a.forEach(c),B=v(t),t.forEach(c),this.h()},h(){m(I,"class","artwork-photo-BG svelte-1400whm"),m(k,"class","artwork-photo svelte-1400whm"),g(k,"background-image","url(img/artworks/"+t[13].username+"-thumb.jpeg),url(img/grain400.png)"),m(y,"class","artwork-photo-container svelte-1400whm"),m(T,"class","svelte-1400whm"),m($,"class","svelte-1400whm"),m(w,"href",M="artists/"+P(t[13].name)),m(l,"class","art-box svelte-1400whm"),this.first=l},m(e,t){h(e,l,t),i(l,w),i(w,y),i(y,I),i(y,b),i(y,k),i(w,N),i(w,T),i(T,D),i(w,C),i(w,$),i($,j),i($,x),i($,S),i(l,B),G=!0},p(e,t){(!G||2&t)&&g(k,"background-image","url(img/artworks/"+e[13].username+"-thumb.jpeg),url(img/grain400.png)"),(!G||2&t)&&H!==(H=e[13].title+"")&&u(D,H),(!G||2&t)&&Y!==(Y=e[13].name+"")&&u(j,Y),(!G||2&t)&&q!==(q=e[13].otherName?`  (${e[13].otherName})`:"")&&u(S,q),(!G||2&t&&M!==(M="artists/"+P(e[13].name)))&&m(w,"href",M)},r(){F=l.getBoundingClientRect()},f(){d(l),J(),p(l,F)},a(){J(),J=_(l,F,R,{delay:10*t[15],duration:400})},i(e){G||(V(()=>{A||(A=E(l,L,{duration:300,y:200},!0)),A.run(1)}),G=!0)},o(e){A||(A=E(l,L,{duration:300,y:200},!1)),A.run(0),G=!1},d(e){e&&c(l),e&&A&&A.end()}}}function K(e){let t,l,u,g,d,p,_,E,O,x,S,P,R,L,K,z,Q,U,W,X,Z,ee,te,le,ae=[],se=new Map,re=e[0].themes,ne=[];for(let t=0;t<re.length;t+=1)ne[t]=G(F(e,re,t));let oe=e[0].media,ce=[];for(let t=0;t<oe.length;t+=1)ce[t]=H(A(e,oe,t));let he=e[0].years.reverse(),ie=[];for(let t=0;t<he.length;t+=1)ie[t]=Y(B(e,he,t));let ue=e[1];const fe=e=>e[13].username;for(let t=0;t<ue.length;t+=1){let l=M(e,ue,t),a=fe(l);se.set(a,ae[t]=J(a,l))}let ve=null;return ue.length||(ve=q(e)),{c(){t=f(),l=a("section"),u=a("div"),g=a("div"),d=a("div"),p=a("select"),_=a("option"),E=s("Theme");for(let e=0;e<ne.length;e+=1)ne[e].c();x=f(),S=a("select"),P=a("option"),R=s("Media");for(let e=0;e<ce.length;e+=1)ce[e].c();K=f(),z=a("select"),Q=a("option"),U=s("Year");for(let e=0;e<ie.length;e+=1)ie[e].c();X=f(),Z=a("div");for(let e=0;e<ae.length;e+=1)ae[e].c();ve&&ve.c(),this.h()},l(e){w('[data-svelte="svelte-3guknf"]',document.head).forEach(c),t=v(e),l=r(e,"SECTION",{class:!0});var a=n(l);u=r(a,"DIV",{class:!0});var s=n(u);g=r(s,"DIV",{class:!0});var h=n(g);d=r(h,"DIV",{class:!0});var i=n(d);p=r(i,"SELECT",{class:!0});var f=n(p);_=r(f,"OPTION",{value:!0,selected:!0});var m=n(_);E=o(m,"Theme"),m.forEach(c);for(let e=0;e<ne.length;e+=1)ne[e].l(f);f.forEach(c),x=v(i),S=r(i,"SELECT",{class:!0});var y=n(S);P=r(y,"OPTION",{value:!0,selected:!0});var I=n(P);R=o(I,"Media"),I.forEach(c);for(let e=0;e<ce.length;e+=1)ce[e].l(y);y.forEach(c),K=v(i),z=r(i,"SELECT",{class:!0});var b=n(z);Q=r(b,"OPTION",{value:!0,selected:!0});var k=n(Q);U=o(k,"Year"),k.forEach(c);for(let e=0;e<ie.length;e+=1)ie[e].l(b);b.forEach(c),i.forEach(c),X=v(h),Z=r(h,"DIV",{class:!0});var O=n(Z);for(let e=0;e<ae.length;e+=1)ae[e].l(O);ve&&ve.l(O),O.forEach(c),h.forEach(c),s.forEach(c),a.forEach(c),this.h()},h(){document.title="Final Show - 2020",_.__value=O=null,_.value=_.__value,_.selected=!0,m(p,"class","svelte-1400whm"),void 0===e[2]&&V(()=>e[6].call(p)),P.__value=L=null,P.value=P.__value,P.selected=!0,m(S,"class","svelte-1400whm"),void 0===e[3]&&V(()=>e[7].call(S)),Q.__value=W=null,Q.value=Q.__value,Q.selected=!0,m(z,"class","svelte-1400whm"),void 0===e[4]&&V(()=>e[8].call(z)),m(d,"class","selectors svelte-1400whm"),m(Z,"class","art-boxes svelte-1400whm"),m(g,"class","content"),m(u,"class","container page-max-width artists-container svelte-1400whm"),m(l,"class","section bg-col-7")},m(a,s){h(a,t,s),h(a,l,s),i(l,u),i(u,g),i(g,d),i(d,p),i(p,_),i(_,E);for(let e=0;e<ne.length;e+=1)ne[e].m(p,null);y(p,e[2]),i(d,x),i(d,S),i(S,P),i(P,R);for(let e=0;e<ce.length;e+=1)ce[e].m(S,null);y(S,e[3]),i(d,K),i(d,z),i(z,Q),i(Q,U);for(let e=0;e<ie.length;e+=1)ie[e].m(z,null);y(z,e[4]),i(g,X),i(g,Z);for(let e=0;e<ae.length;e+=1)ae[e].m(Z,null);ve&&ve.m(Z,null),ee=!0,te||(le=[I(p,"change",e[6]),I(S,"change",e[7]),I(z,"change",e[8])],te=!0)},p(e,[t]){if(1&t){let l;for(re=e[0].themes,l=0;l<re.length;l+=1){const a=F(e,re,l);ne[l]?ne[l].p(a,t):(ne[l]=G(a),ne[l].c(),ne[l].m(p,null))}for(;l<ne.length;l+=1)ne[l].d(1);ne.length=re.length}if(5&t&&y(p,e[2]),1&t){let l;for(oe=e[0].media,l=0;l<oe.length;l+=1){const a=A(e,oe,l);ce[l]?ce[l].p(a,t):(ce[l]=H(a),ce[l].c(),ce[l].m(S,null))}for(;l<ce.length;l+=1)ce[l].d(1);ce.length=oe.length}if(9&t&&y(S,e[3]),1&t){let l;for(he=e[0].years.reverse(),l=0;l<he.length;l+=1){const a=B(e,he,l);ie[l]?ie[l].p(a,t):(ie[l]=Y(a),ie[l].c(),ie[l].m(z,null))}for(;l<ie.length;l+=1)ie[l].d(1);ie.length=he.length}if(17&t&&y(z,e[4]),30&t){const l=e[1];$();for(let e=0;e<ae.length;e+=1)ae[e].r();ae=b(ae,t,fe,1,e,l,se,Z,j,J,null,M);for(let e=0;e<ae.length;e+=1)ae[e].a();k(),!l.length&&ve?ve.p(e,t):l.length?ve&&(ve.d(1),ve=null):(ve=q(e),ve.c(),ve.m(Z,null))}},i(e){if(!ee){for(let e=0;e<ue.length;e+=1)N(ae[e]);ee=!0}},o(e){for(let e=0;e<ae.length;e+=1)T(ae[e]);ee=!1},d(e){e&&c(t),e&&c(l),D(ne,e),D(ce,e),D(ie,e);for(let e=0;e<ae.length;e+=1)ae[e].d();ve&&ve.d(),te=!1,C(le)}}}async function z({params:e}){return{artistsRows:await this.fetch("artists.tsv").then(e=>e.text()),tags:await this.fetch("/artists/tags.json").then(e=>e.json())}}function Q(e,t,l){let{artistsRows:a}=t,{tags:s}=t,r={title:"Artist",fn:(e,t)=>e.name.localeCompare(t.name,"en",{sensitivity:"base"})},n=null,o=null,c=null;let h,i;return e.$$set=e=>{"artistsRows"in e&&l(5,a=e.artistsRows),"tags"in e&&l(0,s=e.tags)},e.$$.update=()=>{32&e.$$.dirty&&l(10,h=S(a).sort((e,t)=>e.name.localeCompare(t.name,"en",{sensitivity:"base"}))),1052&e.$$.dirty&&l(1,i=h.filter(e=>e.title).filter(e=>(!o||e.media&&e.media.includes(o))&&(!n||e.themes&&e.themes.includes(n))&&(!c||e.years&&e.years.includes(c))).sort(r.fn))},[s,i,n,o,c,a,function(){n=x(this),l(2,n),l(0,s)},function(){o=x(this),l(3,o),l(0,s)},function(){c=x(this),l(4,c),l(0,s)},()=>l(2,n=l(3,o=l(4,c=null)))]}export default class extends e{constructor(e){super(),t(this,e,Q,K,l,{artistsRows:5,tags:0})}}export{z as preload};