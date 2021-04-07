import{P as e,S as t,i as s,s as r,e as a,t as n,a as l,Q as o,g as i,h as c,j as h,d as f,f as u,k as d,n as m,o as v,r as g,l as p,J as w,q as E,y,R as b}from"./client.e12956cd.js";import{t as A}from"./tsv.6a7ced64.js";import{f as I,a as N,b as D,s as S}from"./helpers.b84b4fdd.js";import{E as $}from"./constants.11e4a587.js";function k(e){for(var t in e){var s,r,a=e[t].trim();if(a)if("true"===a)a=!0;else if("false"===a)a=!1;else if("NaN"===a)a=NaN;else if(isNaN(s=+a)){if(!(r=a.match(/^([-+]\d{2})?\d{4}(-\d{2}(-\d{2})?)?(T\d{2}:\d{2}(:\d{2}(\.\d{3})?)?(Z|[-+]\d{2}:\d{2})?)?$/)))continue;C&&r[4]&&!r[7]&&(a=a.replace(/-/g,"/").replace(/T/," ")),a=new Date(a)}else a=s;else a=null;e[t]=a}return e}var C=new Date("2019-01-01T00:00").getHours()||new Date("2019-07-01T00:00").getHours();function H(e){return e}function R(e,...t){return function(e,t,s,r){return function e(a,n){if(n>=r.length)return s(a);const l=new Map,o=r[n++];let i=-1;for(const e of a){const t=o(e,++i,a),s=l.get(t);s?s.push(e):l.set(t,[e])}for(const[t,s]of l)l.set(t,e(s,n));return t(l)}(e,0)}(e,H,H,t)}const V=e(null,e=>{e(new Date);const t=setInterval(()=>{e(new Date)},1e3);return()=>clearInterval(t)}),{document:T}=b;function x(e,t,s){const r=e.slice();return r[17]=t[s],r}function j(e,t,s){const r=e.slice();return r[17]=t[s],r}function J(e,t,s){const r=e.slice();return r[14]=t[s],r[16]=s,r}function L(e,t,s){const r=e.slice();return r[11]=t[s][0],r[1]=t[s][1],r}function O(e){let t,s;return{c(){t=a("a"),s=n("ONLINE"),this.h()},l(e){t=i(e,"A",{href:!0,class:!0});var r=c(t);s=h(r,"ONLINE"),r.forEach(f),this.h()},h(){d(t,"href","/live"),d(t,"class","rounded-link bd-col-1 col-1 svelte-17r5wn5")},m(e,r){m(e,t,r),v(t,s)},d(e){e&&f(t)}}}function B(e){let t,s;return{c(){t=a("a"),s=n("ONLINE"),this.h()},l(e){t=i(e,"A",{href:!0,class:!0});var r=c(t);s=h(r,"ONLINE"),r.forEach(f),this.h()},h(){d(t,"href","/getting-there"),d(t,"class","rounded-link bd-col-1 col-1 svelte-17r5wn5")},m(e,r){m(e,t,r),v(t,s)},d(e){e&&f(t)}}}function P(e){let t,s,r,o,p=e[17].name+"";return{c(){t=a("a"),s=n(p),r=l(),this.h()},l(e){t=i(e,"A",{href:!0,class:!0});var a=c(t);s=h(a,p),r=u(a),a.forEach(f),this.h()},h(){d(t,"href",o="artists/"+e[17].slug),d(t,"class","artist-name col-5 svelte-17r5wn5")},m(e,a){m(e,t,a),v(t,s),v(t,r)},p(e,r){1&r&&p!==(p=e[17].name+"")&&g(s,p),1&r&&o!==(o="artists/"+e[17].slug)&&d(t,"href",o)},d(e){e&&f(t)}}}function F(e){let t,s,r,n;return{c(){t=a("a"),s=a("span"),r=l(),this.h()},l(e){t=i(e,"A",{href:!0});var a=c(t);s=i(a,"SPAN",{class:!0,style:!0}),c(s).forEach(f),r=u(a),a.forEach(f),this.h()},h(){d(s,"class","bio-photo svelte-17r5wn5"),p(s,"background-image","url(img/bios/"+e[17].username+".jpeg)"),d(t,"href",n="artists/"+e[17].slug)},m(e,a){m(e,t,a),v(t,s),v(t,r)},p(e,r){1&r&&p(s,"background-image","url(img/bios/"+e[17].username+".jpeg)"),1&r&&n!==(n="artists/"+e[17].slug)&&d(t,"href",n)},d(e){e&&f(t)}}}function G(e){let t,s,r,o,p,E,y,b,A,N,S,$,k,C,H,R,V,T,J,L,G,M,Y,q,Q=D(e[14].startsAt)+"",Z=I(e[14].startsAt)+"",_=e[14].title+"",z=e[14].desc+"",K=e[14].livestream&&O(),U=e[14].physical&&B(),W=e[14].artists,X=[];for(let t=0;t<W.length;t+=1)X[t]=P(j(e,W,t));let ee=e[14].artists,te=[];for(let t=0;t<ee.length;t+=1)te[t]=F(x(e,ee,t));return{c(){t=a("div"),s=a("div"),r=a("div"),K&&K.c(),o=l(),U&&U.c(),p=l(),E=a("div"),y=a("div"),b=n(Q),A=l(),N=n(Z),S=l(),$=a("div"),k=n(_),C=l(),H=a("div"),R=n(z),V=l();for(let e=0;e<X.length;e+=1)X[e].c();T=l(),J=a("div");for(let e=0;e<te.length;e+=1)te[e].c();L=l(),this.h()},l(e){t=i(e,"DIV",{id:!0,class:!0,live:!0,physical:!0});var a=c(t);s=i(a,"DIV",{class:!0});var n=c(s);r=i(n,"DIV",{class:!0});var l=c(r);K&&K.l(l),o=u(l),U&&U.l(l),l.forEach(f),p=u(n),E=i(n,"DIV",{class:!0});var d=c(E);y=i(d,"DIV",{class:!0});var m=c(y);b=h(m,Q),A=u(m),N=h(m,Z),m.forEach(f),S=u(d),$=i(d,"DIV",{class:!0});var v=c($);k=h(v,_),v.forEach(f),C=u(d),H=i(d,"DIV",{class:!0});var g=c(H);R=h(g,z),g.forEach(f),V=u(d);for(let e=0;e<X.length;e+=1)X[e].l(d);d.forEach(f),T=u(n),J=i(n,"DIV",{class:!0});var w=c(J);for(let e=0;e<te.length;e+=1)te[e].l(w);w.forEach(f),n.forEach(f),L=u(a),a.forEach(f),this.h()},h(){d(r,"class","column is-1 location-data svelte-17r5wn5"),d(y,"class","event-time col-3 svelte-17r5wn5"),d($,"class","event-title svelte-17r5wn5"),d(H,"class","event-description svelte-17r5wn5"),d(E,"class","column is-9"),d(J,"class","column text-align-right svelte-17r5wn5"),d(s,"class","columns"),d(t,"id",G=e[14].id),d(t,"class",M=" event "+e[2](e[14])+" svelte-17r5wn5"),d(t,"live",Y=e[14].livestream),d(t,"physical",q=e[14].physical)},m(e,a){m(e,t,a),v(t,s),v(s,r),K&&K.m(r,null),v(r,o),U&&U.m(r,null),v(s,p),v(s,E),v(E,y),v(y,b),v(y,A),v(y,N),v(E,S),v(E,$),v($,k),v(E,C),v(E,H),v(H,R),v(E,V);for(let e=0;e<X.length;e+=1)X[e].m(E,null);v(s,T),v(s,J);for(let e=0;e<te.length;e+=1)te[e].m(J,null);v(t,L)},p(e,s){if(e[14].livestream?K||(K=O(),K.c(),K.m(r,o)):K&&(K.d(1),K=null),e[14].physical?U||(U=B(),U.c(),U.m(r,null)):U&&(U.d(1),U=null),1&s&&Q!==(Q=D(e[14].startsAt)+"")&&g(b,Q),1&s&&Z!==(Z=I(e[14].startsAt)+"")&&g(N,Z),1&s&&_!==(_=e[14].title+"")&&g(k,_),1&s&&z!==(z=e[14].desc+"")&&g(R,z),1&s){let t;for(W=e[14].artists,t=0;t<W.length;t+=1){const r=j(e,W,t);X[t]?X[t].p(r,s):(X[t]=P(r),X[t].c(),X[t].m(E,null))}for(;t<X.length;t+=1)X[t].d(1);X.length=W.length}if(1&s){let t;for(ee=e[14].artists,t=0;t<ee.length;t+=1){const r=x(e,ee,t);te[t]?te[t].p(r,s):(te[t]=F(r),te[t].c(),te[t].m(J,null))}for(;t<te.length;t+=1)te[t].d(1);te.length=ee.length}1&s&&G!==(G=e[14].id)&&d(t,"id",G),1&s&&M!==(M=" event "+e[2](e[14])+" svelte-17r5wn5")&&d(t,"class",M),1&s&&Y!==(Y=e[14].livestream)&&d(t,"live",Y),1&s&&q!==(q=e[14].physical)&&d(t,"physical",q)},d(e){e&&f(t),K&&K.d(),U&&U.d(),w(X,e),w(te,e)}}}function M(e){let t,s,r,p,E,y=N(e[1][0].startsAt)+"",b=e[1],A=[];for(let t=0;t<b.length;t+=1)A[t]=G(J(e,b,t));return{c(){t=a("h2"),s=n(y),p=l();for(let e=0;e<A.length;e+=1)A[e].c();E=o(),this.h()},l(e){t=i(e,"H2",{id:!0,class:!0});var r=c(t);s=h(r,y),r.forEach(f),p=u(e);for(let t=0;t<A.length;t+=1)A[t].l(e);E=o(),this.h()},h(){d(t,"id",r=I(e[1][0].startsAt).toLowerCase()),d(t,"class","svelte-17r5wn5")},m(e,r){m(e,t,r),v(t,s),m(e,p,r);for(let t=0;t<A.length;t+=1)A[t].m(e,r);m(e,E,r)},p(e,a){if(1&a&&y!==(y=N(e[1][0].startsAt)+"")&&g(s,y),1&a&&r!==(r=I(e[1][0].startsAt).toLowerCase())&&d(t,"id",r),5&a){let t;for(b=e[1],t=0;t<b.length;t+=1){const s=J(e,b,t);A[t]?A[t].p(s,a):(A[t]=G(s),A[t].c(),A[t].m(E.parentNode,E))}for(;t<A.length;t+=1)A[t].d(1);A.length=b.length}},d(e){e&&f(t),e&&f(p),w(A,e),e&&f(E)}}}function Y(e){let t,s,r,o,g,p,b,A,I,N,D,S,k,C,H,R,V,x,j,J,O,B,P,F,G,Y,q=e[0],Q=[];for(let t=0;t<q.length;t+=1)Q[t]=M(L(e,q,t));return{c(){t=l(),s=a("section"),r=a("div"),o=a("div"),g=a("h2"),p=n("Events"),b=l(),A=a("p"),I=n("The online component of Chimera Garden features a mixture of live\n        performance, discussion and demonstrations, streamed directly from St\n        James Hatcham Church and remote artists’ locations. You will be able to\n        catch the online stream "),N=a("a"),D=n("here on our website"),S=n(" during the\n        show."),k=l(),C=a("p"),H=n("Below you can find the line up of events, some that will be happening\n        physically in St James Hatcham Church and those that will be streaming\n        online. Below you can register for free tickets for the online events.\n        If you would like to visit us at St James Hatcham Church please read our\n        "),R=a("a"),V=n("safety guidelines and register here."),x=l(),j=a("h2"),J=n("Schedule"),O=l(),B=a("div"),P=l(),F=a("a"),G=n("Free online tickets"),Y=l();for(let e=0;e<Q.length;e+=1)Q[e].c();this.h()},l(e){E('[data-svelte="svelte-r6sydc"]',T.head).forEach(f),t=u(e),s=i(e,"SECTION",{class:!0});var a=c(s);r=i(a,"DIV",{class:!0});var n=c(r);o=i(n,"DIV",{class:!0});var l=c(o);g=i(l,"H2",{class:!0});var d=c(g);p=h(d,"Events"),d.forEach(f),b=u(l),A=i(l,"P",{});var m=c(A);I=h(m,"The online component of Chimera Garden features a mixture of live\n        performance, discussion and demonstrations, streamed directly from St\n        James Hatcham Church and remote artists’ locations. You will be able to\n        catch the online stream "),N=i(m,"A",{href:!0});var v=c(N);D=h(v,"here on our website"),v.forEach(f),S=h(m," during the\n        show."),m.forEach(f),k=u(l),C=i(l,"P",{});var w=c(C);H=h(w,"Below you can find the line up of events, some that will be happening\n        physically in St James Hatcham Church and those that will be streaming\n        online. Below you can register for free tickets for the online events.\n        If you would like to visit us at St James Hatcham Church please read our\n        "),R=i(w,"A",{href:!0});var y=c(R);V=h(y,"safety guidelines and register here."),y.forEach(f),w.forEach(f),x=u(l),j=i(l,"H2",{class:!0});var $=c(j);J=h($,"Schedule"),$.forEach(f),O=u(l),B=i(l,"DIV",{});var L=c(B);P=u(L),F=i(L,"A",{class:!0,href:!0,target:!0});var M=c(F);G=h(M,"Free online tickets"),M.forEach(f),L.forEach(f),Y=u(l);for(let e=0;e<Q.length;e+=1)Q[e].l(l);l.forEach(f),n.forEach(f),a.forEach(f),this.h()},h(){T.title="Schedule - Final Show - 2021",d(g,"class","svelte-17r5wn5"),d(N,"href","/live"),d(R,"href","/getting-there"),d(j,"class","svelte-17r5wn5"),d(F,"class","rounded-link bd-col-2 col-2"),d(F,"href",$),d(F,"target","_blank"),d(o,"class","content"),d(r,"class","container page-max-width"),d(s,"class","section bg-col-7")},m(e,a){m(e,t,a),m(e,s,a),v(s,r),v(r,o),v(o,g),v(g,p),v(o,b),v(o,A),v(A,I),v(A,N),v(N,D),v(A,S),v(o,k),v(o,C),v(C,H),v(C,R),v(R,V),v(o,x),v(o,j),v(j,J),v(o,O),v(o,B),v(B,P),v(B,F),v(F,G),v(o,Y);for(let e=0;e<Q.length;e+=1)Q[e].m(o,null)},p(e,[t]){if(5&t){let s;for(q=e[0],s=0;s<q.length;s+=1){const r=L(e,q,s);Q[s]?Q[s].p(r,t):(Q[s]=M(r),Q[s].c(),Q[s].m(o,null))}for(;s<Q.length;s+=1)Q[s].d(1);Q.length=q.length}},i:y,o:y,d(e){e&&f(t),e&&f(s),w(Q,e)}}}async function q({params:e}){return{scheduleRows:await this.fetch("schedule.tsv").then(e=>e.text()),artistsRows:await this.fetch("artists.tsv").then(e=>e.text())}}function Q(e,t,s){let r,a,n,l,o,{scheduleRows:i}=t,{artistsRows:c}=t,h=new Map;return e.$$set=e=>{"scheduleRows"in e&&s(3,i=e.scheduleRows),"artistsRows"in e&&s(4,c=e.artistsRows)},e.$$.update=()=>{56&e.$$.dirty&&(s(5,r=A(c)),r.forEach(e=>{h.set(e.username,e),e.slug=S(e.name)}),s(1,a=A(i,k).map(e=>(e.artists=[],e.username&&e.username.trim()&&e.username.split(/,\s*/).forEach(t=>{const s=h.get(t);s?e.artists.push(s):console.log(`Couldn't find "${t}"`)}),e.startsAt=new Date(e.startTime),e)).filter(e=>e.startTime))),2&e.$$.dirty&&s(6,n=a.filter(e=>!0)),64&e.$$.dirty&&s(7,l=R(n,e=>e.startTime.toISOString().slice(0,10))),128&e.$$.dirty&&s(0,o=Array.from(l.entries()).sort((e,t)=>function(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}(e[0],t[0])).map(([e,t])=>(t.sort((e,t)=>e.startsAt-t.startsAt),[e,t])))},[o,a,function(e){return function(e){return e.endsAt<V}(e)?"bd-col-7":function(e){return e.startsAt>=V&&e.endsAt<V}(e.startsAt)?"bd-col-1":void 0},i,c]}export default class extends t{constructor(e){super(),s(this,e,Q,Y,r,{scheduleRows:3,artistsRows:4})}}export{q as preload};
