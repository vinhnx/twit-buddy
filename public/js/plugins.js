// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function f(){ log.history = log.history || []; log.history.push(arguments); if(this.console) { var args = arguments, newarr; args.callee = args.callee.caller; newarr = [].slice.call(args); if (typeof console.log === 'object') log.apply.call(console.log, console, newarr); else console.log.apply(console, newarr);}};

// make it safe to use console.log always
(function(a){function b(){}for(var c="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),d;!!(d=c.pop());){a[d]=a[d]||b;}})
(function(){try{console.log();return window.console;}catch(a){return (window.console={});}}());


// place any jQuery/helper plugins in here, instead of separate, slower script files.
// 
// fittext.js
(function($){$.fn.fitText=function(kompressor,options){var settings={"minFontSize":Number.NEGATIVE_INFINITY,"maxFontSize":Number.POSITIVE_INFINITY};return this.each(function(){var $this=$(this);var compressor=kompressor||1;if(options)$.extend(settings,options);var resizer=function(){$this.css("font-size",Math.max(Math.min($this.width()/(compressor*10),parseFloat(settings.maxFontSize)),parseFloat(settings.minFontSize)))};resizer();$(window).resize(resizer)})}})(jQuery);
// // trigger fittext
$("#main-container > h2").fitText(1.3, { minFontSize: '25px', maxFontSize: '60px' });

// media queires debugger
(function(){var rx=/(&|\?)(\w+)=true/gi,str=window.location.href,m,s="",gup={};while(m=rx.exec(str)){s+=" "+m[2];gup[m[2]]=true}if(gup.mqdebug===true&&typeof window.innerWidth!="undefined"){var head=document.head,style=document.createElement("style"),rules=document.createTextNode("body[data-mqd]:before {background: rgba(16,91,99,.7);border-radius: 5px;color:#FFFAD5;font-weight: bold;content:attr(data-mqd);font-size: 10px;left: 2px; top: 2px; padding: 0 4px;width: 5em;text-align: center; line-height: 15px;position:fixed;z-index:9999;}");style.type="text/css";if(style.styleSheet)style.styleSheet.cssText=rules.nodeValue;else style.appendChild(rules);head.appendChild(style);document.body.setAttribute("data-mqd",window.innerWidth+" x "+window.innerHeight);window.onresize=function(event){document.body.setAttribute("data-mqd",window.innerWidth+" x "+window.innerHeight)}}})();

//tweet btn
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
//g+ btn
(function() {    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;    po.src = 'https://apis.google.com/js/plusone.js';    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s); })();
//like btn
(function(d, s, id) {var js, fjs = d.getElementsByTagName(s)[0];if (d.getElementById(id)) return;js = d.createElement(s); js.id = id;js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=298879206805081";fjs.parentNode.insertBefore(js, fjs);}(document, 'script', 'facebook-jssdk'));