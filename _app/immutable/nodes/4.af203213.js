import{_ as j}from"../chunks/preload-helper.581031b9.js";import{H as nt}from"../chunks/control.f5b05b5f.js";import{s as rt}from"../chunks/scheduler.56bea676.js";import{S as st,i as lt,q as Q,g as p,s as H,m as I,r as W,z as it,h as d,f as _,c as L,j as b,n as O,u as ct,k as v,y as c,a as F,v as X,o as G,t as Y,b as ut,d as Z,A as mt,w as x,p as _t}from"../chunks/index.840832d2.js";import{e as tt}from"../chunks/each.e59479a4.js";const ft=(o,t)=>{const n=o[t];return n?typeof n=="function"?n():Promise.resolve(n):new Promise((r,u)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(u.bind(null,new Error("Unknown variable dynamic import: "+t)))})};function pt(o,t){return new nt(o,t)}new TextEncoder;const dt=!0;async function ht({params:o}){try{const t=await ft(Object.assign({"../../posts/banking.md":()=>j(()=>import("../chunks/banking.51a8ac6d.js"),["_app/immutable/chunks/banking.51a8ac6d.js","_app/immutable/chunks/scheduler.56bea676.js","_app/immutable/chunks/index.840832d2.js"]),"../../posts/fourth-post.md":()=>j(()=>import("../chunks/fourth-post.429c4292.js"),["_app/immutable/chunks/fourth-post.429c4292.js","_app/immutable/chunks/scheduler.56bea676.js","_app/immutable/chunks/index.840832d2.js"]),"../../posts/second-post.md":()=>j(()=>import("../chunks/second-post.2354477d.js"),["_app/immutable/chunks/second-post.2354477d.js","_app/immutable/chunks/scheduler.56bea676.js","_app/immutable/chunks/index.840832d2.js"]),"../../posts/third-post.md":()=>j(()=>import("../chunks/third-post.dd4fc4d9.js"),["_app/immutable/chunks/third-post.dd4fc4d9.js","_app/immutable/chunks/scheduler.56bea676.js","_app/immutable/chunks/index.840832d2.js"])}),`../../posts/${o.slug}.md`);return{content:t.default,meta:t.metadata}}catch{throw pt(404,`Could not find ${o.slug}`)}}const yt=Object.freeze(Object.defineProperty({__proto__:null,load:ht,prerender:dt},Symbol.toStringTag,{value:"Module"}));function et(o,t="medium",n="en"){return new Intl.DateTimeFormat(n,{dateStyle:t}).format(new Date(o))}function at(o,t,n){const r=o.slice();return r[1]=t[n],r}function ot(o){let t,n,r=o[1]+"",u;return{c(){t=p("span"),n=I("#"),u=I(r),this.h()},l(f){t=d(f,"SPAN",{class:!0});var l=b(t);n=O(l,"#"),u=O(l,r),l.forEach(_),this.h()},h(){v(t,"class","surface-4")},m(f,l){F(f,t,l),c(t,n),c(t,u)},p(f,l){l&1&&r!==(r=f[1]+"")&&G(u,r)},d(f){f&&_(t)}}}function vt(o){let t,n,r,u,f,l,g,D,k=o[0].meta.title+"",R,M,w,S,A=et(o[0].meta.date)+"",V,q,E,z,$,s,h;document.title=t=o[0].meta.title;let y=tt(o[0].meta.categories),i=[];for(let e=0;e<y.length;e+=1)i[e]=ot(at(o,y,e));var T=o[0].content;function N(e){return{}}return T&&(s=Q(T,N())),{c(){n=p("meta"),r=p("meta"),f=H(),l=p("article"),g=p("hgroup"),D=p("h1"),R=I(k),M=H(),w=p("p"),S=I("Published at "),V=I(A),q=H(),E=p("div");for(let e=0;e<i.length;e+=1)i[e].c();z=H(),$=p("div"),s&&W(s.$$.fragment),this.h()},l(e){const m=it("svelte-1fzsjrp",document.head);n=d(m,"META",{property:!0,content:!0}),r=d(m,"META",{property:!0,content:!0}),m.forEach(_),f=L(e),l=d(e,"ARTICLE",{});var a=b(l);g=d(a,"HGROUP",{});var P=b(g);D=d(P,"H1",{});var B=b(D);R=O(B,k),B.forEach(_),M=L(P),w=d(P,"P",{});var C=b(w);S=O(C,"Published at "),V=O(C,A),C.forEach(_),P.forEach(_),q=L(a),E=d(a,"DIV",{class:!0});var J=b(E);for(let U=0;U<i.length;U+=1)i[U].l(J);J.forEach(_),z=L(a),$=d(a,"DIV",{class:!0});var K=b($);s&&ct(s.$$.fragment,K),K.forEach(_),a.forEach(_),this.h()},h(){v(n,"property","og:type"),v(n,"content","article"),v(r,"property","og:title"),v(r,"content",u=o[0].meta.title),v(E,"class","tags"),v($,"class","prose")},m(e,m){c(document.head,n),c(document.head,r),F(e,f,m),F(e,l,m),c(l,g),c(g,D),c(D,R),c(g,M),c(g,w),c(w,S),c(w,V),c(l,q),c(l,E);for(let a=0;a<i.length;a+=1)i[a]&&i[a].m(E,null);c(l,z),c(l,$),s&&X(s,$,null),h=!0},p(e,[m]){if((!h||m&1)&&t!==(t=e[0].meta.title)&&(document.title=t),(!h||m&1&&u!==(u=e[0].meta.title))&&v(r,"content",u),(!h||m&1)&&k!==(k=e[0].meta.title+"")&&G(R,k),(!h||m&1)&&A!==(A=et(e[0].meta.date)+"")&&G(V,A),m&1){y=tt(e[0].meta.categories);let a;for(a=0;a<y.length;a+=1){const P=at(e,y,a);i[a]?i[a].p(P,m):(i[a]=ot(P),i[a].c(),i[a].m(E,null))}for(;a<i.length;a+=1)i[a].d(1);i.length=y.length}if(m&1&&T!==(T=e[0].content)){if(s){_t();const a=s;Y(a.$$.fragment,1,0,()=>{x(a,1)}),ut()}T?(s=Q(T,N()),W(s.$$.fragment),Z(s.$$.fragment,1),X(s,$,null)):s=null}},i(e){h||(s&&Z(s.$$.fragment,e),h=!0)},o(e){s&&Y(s.$$.fragment,e),h=!1},d(e){e&&(_(f),_(l)),_(n),_(r),mt(i,e),s&&x(s)}}}function gt(o,t,n){let{data:r}=t;return o.$$set=u=>{"data"in u&&n(0,r=u.data)},[r]}class Tt extends st{constructor(t){super(),lt(this,t,gt,vt,rt,{data:0})}}export{Tt as component,yt as universal};
