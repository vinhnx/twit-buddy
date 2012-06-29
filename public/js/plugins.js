// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function f(){ log.history = log.history || []; log.history.push(arguments); if(this.console) { var args = arguments, newarr; args.callee = args.callee.caller; newarr = [].slice.call(args); if (typeof console.log === 'object') log.apply.call(console.log, console, newarr); else console.log.apply(console, newarr);}};

// make it safe to use console.log always
(function(a){function b(){}for(var c="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),d;!!(d=c.pop());){a[d]=a[d]||b;}})
(function(){try{console.log();return window.console;}catch(a){return (window.console={});}}());


// place any jQuery/helper plugins in here, instead of separate, slower script files.
// 
// fittext.js
// (function($){$.fn.fitText=function(kompressor,options){var settings={"minFontSize":Number.NEGATIVE_INFINITY,"maxFontSize":Number.POSITIVE_INFINITY};return this.each(function(){var $this=$(this);var compressor=kompressor||1;if(options)$.extend(settings,options);var resizer=function(){$this.css("font-size",Math.max(Math.min($this.width()/(compressor*10),parseFloat(settings.maxFontSize)),parseFloat(settings.minFontSize)))};resizer();$(window).resize(resizer)})}})(jQuery);
// // trigger fittext
// // $("#main-container > h2").fitText(1.3, { minFontSize: '25px', maxFontSize: '60px' });

// media queires debugger
(function(){var rx=/(&|\?)(\w+)=true/gi,str=window.location.href,m,s="",gup={};while(m=rx.exec(str)){s+=" "+m[2];gup[m[2]]=true}if(gup.mqdebug===true&&typeof window.innerWidth!="undefined"){var head=document.head,style=document.createElement("style"),rules=document.createTextNode("body[data-mqd]:before {background: rgba(16,91,99,.7);border-radius: 5px;color:#FFFAD5;font-weight: bold;content:attr(data-mqd);font-size: 10px;left: 2px; top: 2px; padding: 0 4px;width: 5em;text-align: center; line-height: 15px;position:fixed;z-index:9999;}");style.type="text/css";if(style.styleSheet)style.styleSheet.cssText=rules.nodeValue;else style.appendChild(rules);head.appendChild(style);document.body.setAttribute("data-mqd",window.innerWidth+" x "+window.innerHeight);window.onresize=function(event){document.body.setAttribute("data-mqd",window.innerWidth+" x "+window.innerHeight)}}})();

/*!
 * Real Shadow v1.0.1
 * https://github.com/Indamix/real-shadow
 *
 * Copyright 2012, Ivan Indamix
 * Licensed under the MIT license
 * https://raw.github.com/Indamix/real-shadow/master/license.txt
 */
(function(g,j,c){var d={followMouse:true,},h=Math.PI,f=[];g.fn.realshadow=function(l){g.extend(d,l);if(!f.length&&d.followMouse){g(document.body).mousemove(b)}g(j).resize(i);k(this);b({pageX:d.pageX!==c?d.pageX:g(j).width()>>1,pageY:d.pageY!==c?d.pageY:0})};function k(l){g.each(l,function(n,o){var m=g(o),r=m.offset(),s=m.attr("rel"),q={dom:o,x:r.left+(m.outerWidth()>>1),y:r.top+(m.outerHeight()>>1)};if(s){q.c={r:s.indexOf("r")!==-1,g:s.indexOf("g")!==-1,b:s.indexOf("b")!==-1}}else{if(d.c){q.c=d.c}}f.push(q)})}function i(){var l=f.length,n,m;while(l--){m=f[l];n=g(m.dom).offset();m.x=n.left;m.y=n.top}}function a(m,p,o,v){v=v||7;var q=[],u=Math.cos(p),t=Math.sin(p),l;for(var s=1;s<v;++s){l=Math.pow(s,o);q.push((l*t>>0)+"px "+(l*u>>0)+"px "+(Math.pow(s,1.7)>>0)+"px rgba("+(m.c?(m.c.r?100:0)+","+(m.c.g?100:0)+","+(m.c.b?100:0)+",":"0,0,0,")+".05)")}m.dom.style.boxShadow=q.join(",")}var e={nMax:2.3,pow:0.8,div:1500};function b(p){var m=f.length,o;while(m--){o=f[m];var l=p.pageX-f[m].x,r=p.pageY-f[m].y,q=Math.pow(l*l+r*r,e.pow);q=q/e.div+1;if(q>e.nMax){q=e.nMax}a(o,Math.atan2(l,r)-h,q)}}})(jQuery,this);$(function(){$("#main-container, #goBtn").realshadow({pageY:190})});
//tweet btn
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
//g+ btn
(function() {    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;    po.src = 'https://apis.google.com/js/plusone.js';    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s); })();
//like btn
(function(d, s, id) {var js, fjs = d.getElementsByTagName(s)[0];if (d.getElementById(id)) return;js = d.createElement(s); js.id = id;js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=298879206805081";fjs.parentNode.insertBefore(js, fjs);}(document, 'script', 'facebook-jssdk'));