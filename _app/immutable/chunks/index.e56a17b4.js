import{i as r}from"./scheduler.c6aca17a.js";function g(t){return--t*t*((1.70158+1)*t+1.70158)+1}function _(t){const n=t-1;return n*n*n+1}function O(t,{delay:n=0,duration:a=400,easing:e=_,x:i=0,y:u=0,opacity:f=0}={}){const s=getComputedStyle(t),o=+s.opacity,y=s.transform==="none"?"":s.transform,l=o*(1-f),[m,p]=r(i),[$,b]=r(u);return{delay:n,duration:a,easing:e,css:(c,x)=>`
			transform: ${y} translate(${(1-c)*m}${p}, ${(1-c)*$}${b});
			opacity: ${o-l*x}`}}export{g as b,O as f};
