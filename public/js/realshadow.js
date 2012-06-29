/*!
 * Real Shadow v1.0.1
 * https://github.com/Indamix/real-shadow
 *
 * Copyright 2012, Ivan Indamix
 * Licensed under the MIT license
 * https://raw.github.com/Indamix/real-shadow/master/license.txt
 */
(function(g,j,c){var d={followMouse:true,},h=Math.PI,f=[];g.fn.realshadow=function(l){g.extend(d,l);if(!f.length&&d.followMouse){g(document.body).mousemove(b)}g(j).resize(i);k(this);b({pageX:d.pageX!==c?d.pageX:g(j).width()>>1,pageY:d.pageY!==c?d.pageY:0})};function k(l){g.each(l,function(n,o){var m=g(o),r=m.offset(),s=m.attr("rel"),q={dom:o,x:r.left+(m.outerWidth()>>1),y:r.top+(m.outerHeight()>>1)};if(s){q.c={r:s.indexOf("r")!==-1,g:s.indexOf("g")!==-1,b:s.indexOf("b")!==-1}}else{if(d.c){q.c=d.c}}f.push(q)})}function i(){var l=f.length,n,m;while(l--){m=f[l];n=g(m.dom).offset();m.x=n.left;m.y=n.top}}function a(m,p,o,v){v=v||7;var q=[],u=Math.cos(p),t=Math.sin(p),l;for(var s=1;s<v;++s){l=Math.pow(s,o);q.push((l*t>>0)+"px "+(l*u>>0)+"px "+(Math.pow(s,1.7)>>0)+"px rgba("+(m.c?(m.c.r?100:0)+","+(m.c.g?100:0)+","+(m.c.b?100:0)+",":"0,0,0,")+".05)")}m.dom.style.boxShadow=q.join(",")}var e={nMax:2.3,pow:0.8,div:1500};function b(p){var m=f.length,o;while(m--){o=f[m];var l=p.pageX-f[m].x,r=p.pageY-f[m].y,q=Math.pow(l*l+r*r,e.pow);q=q/e.div+1;if(q>e.nMax){q=e.nMax}a(o,Math.atan2(l,r)-h,q)}}})(jQuery,this);$(function(){$("#main-container, #goBtn").realshadow({pageY:190})});