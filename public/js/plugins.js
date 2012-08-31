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

// sharres.js
/*
 *  Sharrre.com - Make your sharing widget!
 *  Version: beta 1.3.2 
 *  Author: Julien Hany
 *  License: MIT http://en.wikipedia.org/wiki/MIT_License or GPLv2 http://en.wikipedia.org/wiki/GNU_General_Public_License
 */
eval(function(p, a, c, k, e, r) {
    e = function(c) {
        return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
    };
    if (!''.replace(/^/, String)) {
        while (c--) r[e(c)] = k[c] || e(c);
        k = [function(e) {
            return r[e]
        }];
        e = function() {
            return '\\w+'
        };
        c = 1
    };
    while (c--) if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
    return p
}(';(4($,g,h,i){l j=\'1X\',1Y={2u:\'1X\',L:{N:B,C:B,y:B,H:B,o:B,I:B,J:B,A:B},1Z:0,1a:\'\',Y:\'\',3:h.2v.14,w:h.Y,1g:\'1X.2w\',x:{},1h:0,1r:r,2x:r,2y:r,20:B,21:4(){},2z:4(){},1C:4(){},22:4(){},8:{N:{3:\'\',15:B,1i:\'2A\',Z:\'2B-3f\',23:\'\'},C:{3:\'\',15:B,R:\'1D\',11:\'3g\',F:\'\',1s:\'B\',24:\'B\',25:\'\',1t:\'\',Z:\'3h\'},y:{3:\'\',15:B,x:\'2C\',26:\'\',16:\'\',1E:\'\',Z:\'2B\'},H:{3:\'\',15:B,P:\'3i\'},o:{3:\'\',15:B,1i:\'2A\'},I:{3:\'\',15:B,11:\'1\'},J:{3:\'\',15:B,27:\'\'},A:{3:\'\',1u:\'\',1v:\'\',11:\'2C\'}}},1j={N:"",C:"Q://3j.C.p/?28={3}&1w=?",y:"Q://3k.3l.y.p/1/3m/x.2D?3={3}&1w=?",H:"Q://3n.H.p/2.0/3o.3p?3q={3}&P=1b&1w=?",o:\'Q://3r.o.p/3s/2D/3t/n?3={3}&1w=?\',I:"",J:"Q://1k.J.p/3u/x/L?3v=3w&3={3}&1w=?",A:""},2E={N:4(b){l c=b.6.8.N;$(b.q).V(\'.8\').12(\'<m G="S 3x"><m G="g-1F" n-1i="\'+c.1i+\'" n-14="\'+(c.3!==\'\'?c.3:b.6.3)+\'" n-23="\'+c.23+\'"></m></m>\');g.3y={Z:b.6.8.N.Z};l d=0;9(z 2F===\'E\'&&d==0){d=1;(4(){l a=h.1c(\'O\');a.P=\'w/1b\';a.1l=r;a.17=\'//3z.2G.p/W/1F.W\';l s=h.1d(\'O\')[0];s.1e.1f(a,s)})()}K{2F.1F.3A()}},C:4(c){l e=c.6.8.C;$(c.q).V(\'.8\').12(\'<m G="S C"><m 28="1G-3B"></m><m G="1G-1D" n-14="\'+(e.3!==\'\'?e.3:c.6.3)+\'" n-1s="\'+e.1s+\'" n-11="\'+e.11+\'" n-F="\'+e.F+\'" n-3C-24="\'+e.24+\'" n-R="\'+e.R+\'" n-25="\'+e.25+\'" n-1t="\'+e.1t+\'" n-16="\'+e.16+\'"></m></m>\');l f=0;9(z 1m===\'E\'&&f==0){f=1;(4(d,s,a){l b,29=d.1d(s)[0];9(d.3D(a)){1x}b=d.1c(s);b.28=a;b.17=\'//3E.C.3F/\'+e.Z+\'/3G.W#3H=1\';29.1e.1f(b,29)}(h,\'O\',\'C-3I\'))}K{1m.3J.3K()}},y:4(b){l c=b.6.8.y;$(b.q).V(\'.8\').12(\'<m G="S y"><a 14="1H://y.p/L" G="y-L-S" n-3="\'+(c.3!==\'\'?c.3:b.6.3)+\'" n-x="\'+c.x+\'" n-w="\'+b.6.w+\'" n-16="\'+c.16+\'" n-26="\'+c.26+\'" n-1E="\'+c.1E+\'" n-Z="\'+c.Z+\'">3L</a></m>\');l d=0;9(z 2a===\'E\'&&d==0){d=1;(4(){l a=h.1c(\'O\');a.P=\'w/1b\';a.1l=r;a.17=\'//1I.y.p/1J.W\';l s=h.1d(\'O\')[0];s.1e.1f(a,s)})()}K{$.3M({3:\'//1I.y.p/1J.W\',3N:\'O\',3O:r})}},H:4(a){l b=a.6.8.H;$(a.q).V(\'.8\').12(\'<m G="S H"><a G="3P \'+b.P+\'" 3Q="3R 3S" 14="Q://H.p/2H?3=\'+T((b.3!==\'\'?b.3:a.6.3))+\'"></a></m>\');l c=0;9(z 3T===\'E\'&&c==0){c=1;(4(){l s=h.1c(\'2I\'),2b=h.1d(\'2I\')[0];s.P=\'w/1b\';s.1l=r;s.17=\'//1J.H.p/8.W\';2b.1e.1f(s,2b)})()}},o:4(a){9(a.6.8.o.1i==\'3U\'){l b=\'F:2c;\',2d=\'D:2J;F:2c;1t-1i:3V;1y-D:2J;\',2e=\'D:2K;1y-D:2K;2f-3W:1K;\'}K{l b=\'F:3X;\',2d=\'2g:3Y;2h:0 1K;D:1z;F:3Z;1y-D:1z;\',2e=\'2g:40;D:1z;1y-D:1z;\'}l c=a.1r(a.6.x.o);9(z c==="E"){c=0}$(a.q).V(\'.8\').12(\'<m G="S o"><m 1L="\'+b+\'1t:41 42,43,44-45;46:47;1M:#48;2L:49-2M;2g:2N;D:1z;1y-D:4a;2f:0;2h:0;w-4b:0;4c-2i:4d;">\'+\'<m 1L="\'+2d+\'2O-1M:#2P;2f-4e:4f;4g:4h;w-2i:2Q;1N:2R 2S #4i;1N-2T:1K;">\'+c+\'</m>\'+\'<m 1L="\'+2e+\'2L:2M;2h:0;w-2i:2Q;w-4j:2N;F:2c;2O-1M:#4k;1N:2R 2S #4l;1N-2T:1K;1M:#2P;">\'+\'<2U 17="Q://1k.o.p/4m/2U/o.4n.4o" D="10" F="10" 4p="4q" /> 4r</m></m></m>\');$(a.q).V(\'.o\').4s(\'1C\',4(){a.2V(\'o\')})},I:4(b){l c=b.6.8.I;$(b.q).V(\'.8\').12(\'<m G="S I"><2W:2j 11="\'+c.11+\'" 2v="\'+(c.3!==\'\'?c.3:b.6.3)+\'"></2W:2j></m>\');l d=0;9(z 1O===\'E\'&&d==0){d=1;(4(){l a=h.1c(\'O\');a.P=\'w/1b\';a.1l=r;a.17=\'//1I.I.p/1/1J.W\';l s=h.1d(\'O\')[0];s.1e.1f(a,s)})();s=g.4t(4(){9(z 1O!==\'E\'){1O.2X();2k(s)}},2l)}K{1O.2X()}},J:4(b){l c=b.6.8.J;$(b.q).V(\'.8\').12(\'<m G="S J"><O P="2m/L" n-3="\'+(c.3!==\'\'?c.3:b.6.3)+\'" n-27="\'+c.27+\'"></O></m>\');l d=0;9(z g.2Y===\'E\'&&d==0){d=1;(4(){l a=h.1c(\'O\');a.P=\'w/1b\';a.1l=r;a.17=\'//1I.J.p/2m.W\';l s=h.1d(\'O\')[0];s.1e.1f(a,s)})()}K{g.2Y.1P()}},A:4(b){l c=b.6.8.A;$(b.q).V(\'.8\').12(\'<m G="S A"><a 14="Q://A.p/1Q/2n/S/?3=\'+(c.3!==\'\'?c.3:b.6.3)+\'&1u=\'+c.1u+\'&1v=\'+c.1v+\'" G="1Q-4u-S" x-11="\'+c.11+\'">4v 4w</a></m>\');(4(){l a=h.1c(\'O\');a.P=\'w/1b\';a.1l=r;a.17=\'//4x.A.p/W/4y.W\';l s=h.1d(\'O\')[0];s.1e.1f(a,s)})()}},2Z={N:4(){},C:4(){1G=g.30(4(){9(z 1m!==\'E\'){1m.2o.2p(\'31.2n\',4(a){1n.1o([\'1p\',\'C\',\'1D\',a])});1m.2o.2p(\'31.4z\',4(a){1n.1o([\'1p\',\'C\',\'4A\',a])});1m.2o.2p(\'4B.1s\',4(a){1n.1o([\'1p\',\'C\',\'1s\',a])});2k(1G)}},32)},y:4(){33=g.30(4(){9(z 2a!==\'E\'){2a.4C.4D(\'1R\',4(a){9(a){1n.1o([\'1p\',\'y\',\'1R\'])}});2k(33)}},32)},H:4(){},o:4(){},I:4(){},J:4(){4 4E(){1n.1o([\'1p\',\'J\',\'L\'])}},A:4(){}},34={N:4(a){g.18("1H://1F.2G.p/35/+1/4F?4G="+a.8.N.Z+"&3="+T((a.8.N.3!==\'\'?a.8.N.3:a.3)),"","19=0, 1S=0, F=36, D=2l")},C:4(a){g.18("Q://1k.C.p/4H.2w?u="+T((a.8.C.3!==\'\'?a.8.C.3:a.3))+"&t="+a.w+"","","19=0, 1S=0, F=36, D=2l")},y:4(a){g.18("1H://y.p/4I/1R?w="+T(a.w)+"&3="+T((a.8.y.3!==\'\'?a.8.y.3:a.3))+(a.8.y.16!==\'\'?\'&16=\'+a.8.y.16:\'\'),"","19=0, 1S=0, F=37, D=38")},H:4(a){g.18("Q://H.p/4J/4K/2H?3="+T((a.8.H.3!==\'\'?a.8.H.3:a.3))+"&Y="+a.w+"&1E=r&1L=r","","19=0, 1S=0, F=37, D=38")},o:4(a){g.18(\'Q://1k.o.p/4L?v=5&4M&4N=4O&3=\'+T((a.8.o.3!==\'\'?a.8.o.3:a.3))+\'&Y=\'+a.w,\'o\',\'19=1T,F=1q,D=1q\')},I:4(a){g.18(\'Q://1k.I.p/2j/?3=\'+T((a.8.o.3!==\'\'?a.8.o.3:a.3)),\'I\',\'19=1T,F=1q,D=1q\')},J:4(a){g.18(\'1H://1k.J.p/4P/L?3=\'+T((a.8.o.3!==\'\'?a.8.o.3:a.3))+\'&4Q=&4R=r\',\'J\',\'19=1T,F=1q,D=1q\')},A:4(a){g.18(\'Q://A.p/1Q/2n/S/?3=\'+T((a.8.A.3!==\'\'?a.8.A.3:a.3))+\'&1u=\'+T(a.8.A.1u)+\'&1v=\'+a.8.A.1v,\'A\',\'19=1T,F=4S,D=4T\')}};4 U(a,b){7.q=a;7.6=$.4U(r,{},1Y,b);7.6.L=b.L;7.4V=1Y;7.4W=j;7.1P()};U.X.1P=4(){l c=7;9(7.6.1g!==\'\'){1j.N=7.6.1g+\'?3={3}&P=N\';1j.I=7.6.1g+\'?3={3}&P=I\';1j.A=7.6.1g+\'?3={3}&P=A\'}$(7.q).4X(7.6.2u);9(z $(7.q).n(\'Y\')!==\'E\'){7.6.Y=$(7.q).4Y(\'n-Y\')}9(z $(7.q).n(\'3\')!==\'E\'){7.6.3=$(7.q).n(\'3\')}9(z $(7.q).n(\'w\')!==\'E\'){7.6.w=$(7.q).n(\'w\')}$.1A(7.6.L,4(a,b){9(b===r){c.6.1Z++}});9(c.6.2y===r){$.1A(7.6.L,4(a,b){9(b===r){4Z{c.39(a)}50(e){}}})}K{7.2q();7.6.22(7,7.6)}$(7.q).21(4(){9($(7).V(\'.8\').51===0&&c.6.2x===r){c.2q()}c.6.21(c,c.6)},4(){c.6.2z(c,c.6)});$(7.q).1C(4(){c.6.1C(c,c.6);1x B})};U.X.2q=4(){l c=7;$(7.q).12(\'<m G="8"></m>\');$.1A(c.6.L,4(a,b){9(b==r){2E[a](c);9(c.6.20===r){2Z[a]()}}})};U.X.39=4(c){l d=7,x=0,3=1j[c].1B(\'{3}\',T(7.6.3));9(7.6.8[c].15===r&&7.6.8[c].3!==\'\'){3=1j[c].1B(\'{3}\',7.6.8[c].3)}9(3!=\'\'&&d.6.1g!==\'\'){$.52(3,4(a){9(z a.x!=="E"){l b=a.x+\'\';b=b.1B(\'\\53\\54\',\'\');x+=1U(b,10)}K 9(z a.3a!=="E"){x+=1U(a.3a,10)}K 9(z a.3b!=="E"){x+=1U(a.3b,10)}K 9(z a[0]!=="E"){x+=1U(a[0].55,10)}K 9(z a[0]!=="E"){}d.6.x[c]=x;d.6.1h+=x;d.2r();d.1V()}).56(4(){d.6.x[c]=0;d.1V()})}K{d.2r();d.6.x[c]=0;d.1V()}};U.X.1V=4(){l a=0;57(e 2m 7.6.x){a++}9(a===7.6.1Z){7.6.22(7,7.6)}};U.X.2r=4(){l a=7.6.1h,1a=7.6.1a;9(7.6.1r===r){a=7.1r(a)}9(1a!==\'\'){1a=1a.1B(\'{1h}\',a);$(7.q).1W(1a)}K{$(7.q).1W(\'<m G="58"><a G="x" 14="#">\'+a+\'</a>\'+(7.6.Y!==\'\'?\'<a G="L" 14="#">\'+7.6.Y+\'</a>\':\'\')+\'</m>\')}};U.X.1r=4(a){9(a>=3c){a=(a/3c).3d(2)+"M"}K 9(a>=3e){a=(a/3e).3d(1)+"k"}1x a};U.X.2V=4(a){34[a](7.6);9(7.6.20===r){l b={N:{13:\'59\',R:\'+1\'},C:{13:\'C\',R:\'1D\'},y:{13:\'y\',R:\'1R\'},H:{13:\'H\',R:\'2s\'},o:{13:\'o\',R:\'2s\'},I:{13:\'I\',R:\'2s\'},J:{13:\'J\',R:\'L\'},A:{13:\'A\',R:\'1Q\'}};1n.1o([\'1p\',b[a].13,b[a].R])}};U.X.5a=4(){l a=$(7.q).1W();$(7.q).1W(a.1B(7.6.1h,7.6.1h+1))};U.X.5b=4(a,b){9(a!==\'\'){7.6.3=a}9(b!==\'\'){7.6.w=b}};$.5c[j]=4(b){l c=5d;9(b===i||z b===\'5e\'){1x 7.1A(4(){9(!$.n(7,\'2t\'+j)){$.n(7,\'2t\'+j,5f U(7,b))}})}K 9(z b===\'5g\'&&b[0]!==\'35\'&&b!==\'1P\'){1x 7.1A(4(){l a=$.n(7,\'2t\'+j);9(a 5h U&&z a[b]===\'4\'){a[b].5i(a,5j.X.5k.5l(c,1))}})}}})(5m,5n,5o);', 62, 335, '|||url|function||options|this|buttons|if||||||||||||var|div|data|delicious|com|element|true|||||text|count|twitter|typeof|pinterest|false|facebook|height|undefined|width|class|digg|stumbleupon|linkedin|else|share||googlePlus|script|type|http|action|button|encodeURIComponent|Plugin|find|js|prototype|title|lang||layout|append|site|href|urlCount|via|src|open|toolbar|template|javascript|createElement|getElementsByTagName|parentNode|insertBefore|urlCurl|total|size|urlJson|www|async|FB|_gaq|push|_trackSocial|550|shorterTotal|send|font|media|description|callback|return|line|20px|each|replace|click|like|related|plusone|fb|https|platform|widgets|3px|style|color|border|STMBLPN|init|pin|tweet|status|no|parseInt|rendererPerso|html|sharrre|defaults|shareTotal|enableTracking|hover|render|annotation|faces|colorscheme|hashtags|counter|id|fjs|twttr|s1|50px|cssCount|cssShare|margin|float|padding|align|badge|clearInterval|500|in|create|Event|subscribe|loadButtons|renderer|add|plugin_|className|location|php|enableHover|enableCounter|hide|medium|en|horizontal|json|loadButton|gapi|google|submit|SCRIPT|35px|18px|display|block|none|background|fff|center|1px|solid|radius|img|openPopup|su|processWidgets|IN|tracking|setInterval|edge|1000|tw|popup|_|900|650|360|getSocialJson|likes|shares|1e6|toFixed|1e3|US|button_count|en_US|DiggCompact|graph|cdn|api|urls|services|story|getInfo|links|feeds|v2|urlinfo|countserv|format|jsonp|googleplus|___gcfg|apis|go|root|show|getElementById|connect|net|all|xfbml|jssdk|XFBML|parse|Tweet|ajax|dataType|cache|DiggThisButton|rel|nofollow|external|__DBW|tall|15px|top|93px|right|26px|left|12px|Arial|Helvetica|sans|serif|cursor|pointer|666666|inline|normal|indent|vertical|baseline|bottom|5px|overflow|hidden|ccc|decoration|7EACEE|40679C|static|small|gif|alt|Delicious|Add|on|setTimeout|it|Pin|It|assets|pinit|remove|unlike|message|events|bind|LinkedInShare|confirm|hl|sharer|intent|tools|diggthis|save|noui|jump|close|cws|token|isFramed|700|300|extend|_defaults|_name|addClass|attr|try|catch|length|getJSON|u00c2|u00a0|total_posts|error|for|box|Google|simulateClick|update|fn|arguments|object|new|string|instanceof|apply|Array|slice|call|jQuery|window|document'.split('|'), 0, {}));
 $('#shareme').sharrre({
              share: {
                twitter: true,
                facebook: true,
                googlePlus: true
              },
              template: '<div class="box"><div class="left">Share</div><div class="middle"><a href="#" class="facebook">f</a><a href="#" class="twitter">t</a><a href="#" class="googleplus">+1</a></div><div class="right">{total}</div></div>',
              enableHover: false,
              enableTracking: true,
              render: function(api, options){
                $(api.element).on('click', '.twitter', function() {
                  api.openPopup('twitter');
                });
                $(api.element).on('click', '.facebook', function() {
                  api.openPopup('facebook');
                });
                $(api.element).on('click', '.googleplus', function() {
                  api.openPopup('googlePlus');
                });
              }
            });
// goBtn
(function() {
	$('button#goBtn').click(function() {
		$(this).text('please wait...');
	});
})();
/*!
 * forkit.js 0.2
 * http://lab.hakim.se/forkit-js
 * MIT licensed
 *
 * Created by Hakim El Hattab, http://hakim.se
 */
(function(){

  var STATE_CLOSED = 0,
    STATE_DETACHED = 1,
    STATE_OPENED = 2,

    TAG_HEIGHT = 30,
    TAG_WIDTH = 200,
    MAX_STRAIN = 40,

    // Factor of page height that needs to be dragged for the 
    // curtain to fall
    DRAG_THRESHOLD = 0.36;

    VENDORS = [ 'Webkit', 'Moz', 'O', 'ms' ];

  var dom = {
      ribbon: null,
      ribbonString: null,
      ribbonTag: null,
      curtain: null,
      closeButton: null
    },

    // The current state of the ribbon
    state = STATE_CLOSED,

    // Ribbon text, correlates to states
    closedText = '',
    detachedText = '',

    friction = 1.04;
    gravity = 1.5,

    // Resting position of the ribbon when curtain is closed
    closedX = TAG_WIDTH * 0.4,
    closedY = -TAG_HEIGHT * 0.5,

    // Resting position of the ribbon when curtain is opened
    openedX = TAG_WIDTH * 0.4,
    openedY = TAG_HEIGHT,

    velocity = 0,
    rotation = 45,

    curtainTargetY = 0,
    curtainCurrentY = 0,

    dragging = false,
    dragTime = 0,
    dragY = 0,

    anchorA = new Point( closedX, closedY ),
    anchorB = new Point( closedX, closedY ),

    mouse = new Point();

  function initialize() {

    dom.ribbon = document.querySelector( '.forkit' );
    dom.curtain = document.querySelector( '.forkit-curtain' );
    dom.closeButton = document.querySelector( '.forkit-curtain .close-button' );

    if( dom.ribbon ) {

      // Fetch label texts from DOM
      closedText = dom.ribbon.getAttribute( 'data-text' ) || '';
      detachedText = dom.ribbon.getAttribute( 'data-text-detached' ) || closedText;

      // Construct the sub-elements required to represent the 
      // tag and string that it hangs from
      dom.ribbon.innerHTML = '<span class="string"></span><span class="tag">' + closedText + '</span>';
      dom.ribbonString = dom.ribbon.querySelector( '.string' );
      dom.ribbonTag = dom.ribbon.querySelector( '.tag' );

      // Bind events
      dom.ribbon.addEventListener( 'click', onRibbonClick, false );
      document.addEventListener( 'mousemove', onMouseMove, false );
      document.addEventListener( 'mousedown', onMouseDown, false );
      document.addEventListener( 'mouseup', onMouseUp, false );
      window.addEventListener( 'resize', layout, false );

      if( dom.closeButton ) {
        dom.closeButton.addEventListener( 'click', onCloseClick, false );
      }

      // Start the animation loop
      animate();

    }

  }

  function onMouseDown( event ) {
    if( dom.curtain && state === STATE_DETACHED ) {
      event.preventDefault();

      dragY = event.clientY;
      dragTime = Date.now();
      dragging = true;

    }
  }

  function onMouseMove( event ) {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
  }

  function onMouseUp( event ) {
    if( state !== STATE_OPENED ) {
      state = STATE_CLOSED;
      dragging = false;
    }
  }

  function onRibbonClick( event ) {
    if( dom.curtain ) {
      event.preventDefault();

      if( state === STATE_OPENED ) {
        close();
      }
      else if( Date.now() - dragTime < 300 ) {
        open();
      }
    }
  }

  function onCloseClick( event ) {
    event.preventDefault();
    close();
  }

  function layout() {
    if( state === STATE_OPENED ) {
      curtainTargetY = window.innerHeight;
      curtainCurrentY = curtainTargetY;
    }
  }

  function open() {
    dragging = false;
    state = STATE_OPENED;
  }

  function close() {
    dragging = false;
    state = STATE_CLOSED;
    dom.ribbonTag.innerHTML = closedText;
  }

  function detach() {
    state = STATE_DETACHED;
    dom.ribbonTag.innerHTML = detachedText;
  }

  function animate() {
    update();
    render();

    requestAnimFrame( animate );
  }

  function update() {
    // Distance between mouse and top right corner
    var distance = distanceBetween( mouse.x, mouse.y, window.innerWidth, 0 );

    // If we're OPENED the curtainTargetY should ease towards page bottom
    if( state === STATE_OPENED ) {
      curtainTargetY = Math.min( curtainTargetY + ( window.innerHeight - curtainTargetY ) * 0.2, window.innerHeight );
    }
    else {

      // Detach the tag when hovering close enough
      if( distance < TAG_WIDTH * 1.5 ) {
        detach();
      }
      // Re-attach the tag if the user moved away
      else if( !dragging && state === STATE_DETACHED && distance > TAG_WIDTH * 2 ) {
        close();
      }

      if( dragging ) {
        // Updat the curtain position while dragging
        curtainTargetY = Math.max( mouse.y - dragY, 0 );

        // If the threshold is crossed, open the curtain
        if( curtainTargetY > window.innerHeight * DRAG_THRESHOLD ) {
          open();
        }
      }
      else {
        curtainTargetY *= 0.8;
      }

    }

    // Ease towards the target position of the curtain
    curtainCurrentY += ( curtainTargetY - curtainCurrentY ) * 0.3;

    // If we're dragging or detached we need to simulate 
    // the physical behavior of the ribbon
    if( dragging || state === STATE_DETACHED ) {

      // Apply forces
      velocity /= friction;
      velocity += gravity;

      var containerOffsetX = dom.ribbon.offsetLeft;

      var offsetX = Math.max( ( ( mouse.x - containerOffsetX ) - closedX ) * 0.2, -MAX_STRAIN );
      
      anchorB.x += ( ( closedX + offsetX ) - anchorB.x ) * 0.1;
      anchorB.y += velocity;

      var strain = distanceBetween( anchorA.x, anchorA.y, anchorB.x, anchorB.y );

      if( strain > MAX_STRAIN ) {
        velocity -= Math.abs( strain ) / ( MAX_STRAIN * 1.25 );
      }

      var dy = Math.max( mouse.y - anchorB.y, 0 ),
        dx = mouse.x - ( containerOffsetX + anchorB.x );

      // Angle the ribbon towards the mouse but limit it avoid extremes
      var angle = Math.min( 130, Math.max( 50, Math.atan2( dy, dx ) * 180 / Math.PI ) );

      rotation += ( angle - rotation ) * 0.1;
    }
    // Ease ribbon towards the OPENED state
    else if( state === STATE_OPENED ) {
      anchorB.x += ( openedX - anchorB.x ) * 0.2;
      anchorB.y += ( openedY - anchorB.y ) * 0.2;

      rotation += ( 90 - rotation ) * 0.02;
    }
    // Ease ribbon towards the CLOSED state
    else {
      anchorB.x += ( anchorA.x - anchorB.x ) * 0.2;
      anchorB.y += ( anchorA.y - anchorB.y ) * 0.2;

      rotation += ( 45 - rotation ) * 0.2;
    }
  }

  function render() {

    if( dom.curtain ) {
      dom.curtain.style.top = - 100 + Math.min( ( curtainCurrentY / window.innerHeight ) * 100, 100 ) + '%';
    }

    dom.ribbon.style[ prefix( 'transform' ) ] = transform( 0, curtainCurrentY, 0 );
    dom.ribbonTag.style[ prefix( 'transform' ) ] = transform( anchorB.x, anchorB.y, rotation );

    var dy = anchorB.y - anchorA.y,
      dx = anchorB.x - anchorA.x;

    var angle = Math.atan2( dy, dx ) * 180 / Math.PI;

    dom.ribbonString.style.width = anchorB.y + 'px';
    dom.ribbonString.style[ prefix( 'transform' ) ] = transform( anchorA.x, 0, angle );

  }

  function prefix( property, el ) {
    var propertyUC = property.slice( 0, 1 ).toUpperCase() + property.slice( 1 );

    for( var i = 0, len = VENDORS.length; i < len; i++ ) {
      var vendor = VENDORS[i];

      if( typeof ( el || document.body ).style[ vendor + propertyUC ] !== 'undefined' ) {
        return vendor + propertyUC;
      }
    }

    return property;
  }

  function transform( x, y, r ) {
    return 'translate('+x+'px,'+y+'px) rotate('+r+'deg)';
  }

  function distanceBetween( x1, y1, x2, y2 ) {
    var dx = x1-x2;
    var dy = y1-y2;
    return Math.sqrt(dx*dx + dy*dy);
  }

  /**
   * Defines a 2D position.
   */
  function Point( x, y ) {
    this.x = x || 0; 
    this.y = y || 0;
  }

  Point.prototype.distanceTo = function( x, y ) {
    var dx = x-this.x;
    var dy = y-this.y;
    return Math.sqrt(dx*dx + dy*dy);
  };

  Point.prototype.clone = function() {
    return new Point( this.x, this.y );
  };

  Point.prototype.interpolate = function( x, y, amp ) {
    this.x += ( x - this.x ) * amp;
    this.y += ( y - this.y ) * amp;
  };

  window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame    ||
        window.webkitRequestAnimationFrame  ||
        window.mozRequestAnimationFrame   ||
        window.oRequestAnimationFrame   ||
        window.msRequestAnimationFrame    ||
        function( callback ){
          window.setTimeout(callback, 1000 / 60);
        };
  })();

  initialize();

})();
/*!
 * @mekwall's .vangogh() for Syntax Highlighting
 *
 * All code is open source and dual licensed under GPL and MIT. 
 * Check the individual licenses for more information.
 * https://github.com/mekwall/jquery-vangogh/blob/master/GPL-LICENSE.txt
 * https://github.com/mekwall/jquery-vangogh/blob/master/MIT-LICENSE.txt
 */
(function($,a,b){var c=1,d=!1,e=!1,f={get:function(b){var c=a.location.hash;if(c.length>0){var d=c.match(new RegExp(b+":{([a-zA-Z0-9,-]*)}"));if(d)return d[1].split(",")}return[]},set:function(b,c){var d=a.location.hash,e,f=b+":{"+c.join(",")+"}",g=d.indexOf(b+":{");if(c.length===0)return this.remove(b);g!==-1?e=d.replace(new RegExp("("+b+":{[a-zA-Z0-9,-]*})"),f):e=d.length>0?d+","+f:f,a.location.hash=e},remove:function(b){a.location.hash=a.location.hash.replace(new RegExp("([,]?"+b+":{[a-zA-Z0-9,-]*}[,]?)"),"")}},g={numberRange:/^([0-9]+)-([0-9]+)$/,pageNumber:/-([0-9]+)$/,multilineBegin:/<span class="([\w-_][^"]+)">(?:.[^<]*(?!<\/span>)|)$/ig,multilineEnd:/(<span class="([\w-_][^"]+)">)?(?:.[^<]*)?(<\/span>)/ig};$.fn.vanGogh=function(h){function n(){if(d||e)setTimeout(n,100);else{k++;if(k>=10)return;if(h.source&&!l){e=!0,$.ajax({url:h.source,crossDomain:!0,dataType:"text",success:function(a){l=a},error:function(a,b){l="ERROR: "+b},complete:function(){e=!1,n()}});return}b=b||a.hljs;if(!b){d=!0,$.getScript(h.autoload,function(){d=!1,n()});return}j.filter("pre,code").each(function(){function r(b,c,e){var h=!1,i=a.find(".vg-line");c&&(a.find(".vg-highlight").removeClass("vg-highlight"),f.remove(d),k=[]),b=$.type(b)==="array"?b:[b],$.each(b,function(b,c){if(k.indexOf(c)<=-1){!isNaN(parseFloat(c,10))&&isFinite(c)&&(c=parseInt(c,10));if($.type(c)==="string"){var e=g.numberRange.exec(c);if(e){var f=e[1],h=e[2],j="";for(var b=f;b<=h;b++)j+=",#"+d+"-"+b,k.push(b);i.filter(j.substring(1)).addClass("vg-highlight")}else a.find(".vg-line:contains("+c+")").each(function(){var a=$(this).addClass("vg-highlight");a.html(a.html().replace(c,'<span class="vg-highlight">'+c+"</span>"))}),k.push(c)}else{var l=d+"-"+this,m=i.filter("#"+l);m.length&&(m.addClass("vg-highlight"),k.push(c))}}}),!e&&f.set(d,k)}var a=$(this).addClass("vg-container").attr("id",this.id||"vg-"+c++),d=this.id,e=a.find("code"),i=!1,j=!1,k=[];e.length||(e=a,i=!0),h.source&&l&&e.text(l);var n=e.text();b.highlightBlock(e[0],h.tab);var o=e.html().split("\n"),p="",q="";if(!i){var s={},t=0;$.each(o,function(a,b){var c=a+h.firstLine,e=d+"-"+c,f=b;h.numbers&&(p+='<a class="vg-number" rel="#'+e+'">'+c+"</a>");if(s[t]){var i=g.multilineEnd.exec(b);i&&!i[1]?(f='<span class="'+s[t]+'">'+f,delete s[t],t--):f='<span class="'+s[t]+'">'+f+"</span>"}var j=g.multilineBegin.exec(b);j&&(t++,s[t]=j[1]),q+='<div class="vg-line" id="'+e+'">'+f+"</div>"}),q='<code class="vg-code">'+q+"</code>",h.numbers&&(q='<div class="vg-gutter">'+p+"</div>"+q),a.html(q),e=a.find("code"),a.find(".vg-number").click(function(b){var c=$(this),e=c.attr("rel"),h=a.find(e);if(h.hasClass("vg-highlight")){h.removeClass("vg-highlight"),k.splice(k.indexOf(c.text()),1),f.set(d,k),j=!1;return!1}var i=j;j=parseInt(g.pageNumber.exec(e)[1],10),b.shiftKey&&j?r(i<j?i+"-"+j:j+"-"+i,!0):r(j,b.ctrlKey?!1:!0);return!1});var u=a.find(".vg-gutter"),v=u.outerWidth(),w=0,x=!1;h.animateGutter&&a.scroll(function(a){if(this.scrollLeft!==w)if(this.scrollLeft>v){if(this.scrollLeft<w)w=this.scrollLeft,u.hide();else if(this.scrollLeft!==w){if(x)return;var b=this;w=this.scrollLeft,x=setTimeout(function(){x=!1;var a=b.scrollLeft;e.css("marginLeft",v),u.css({"float":"none",position:"absolute",left:a-v}).show().stop().animate({left:a})},500)}}else w=this.scrollLeft,clearTimeout(x),x=!1,u.css({"float":"",position:"",left:""}).show()})}else i&&a.addClass("vg-code");e.dblclick(function(){m(e[0]);return!1});if(h.maxLines>0){var y=a.find(".vg-line").height(),z=parseInt(e.css("paddingTop")),A=y*(h.maxLines+1)+z;a.css({minHeight:y+z,maxHeight:A})}h.highlight&&r(h.highlight,!0,!0);var B=f.get(d);B.length&&r(B,!1,!0)})}}function m(b){var c=a,d=a.document;if(d.body.createTextRange){var e=d.body.createTextRange();e.moveToElementText(b),e.select()}else if(d.createRange){var f=c.getSelection(),e=d.createRange();e.selectNodeContents(b),f.removeAllRanges(),f.addRange(e)}}var i={language:"auto",firstLine:1,maxLines:0,numbers:!0,highlight:null,animateGutter:!0,autoload:"http://softwaremaniacs.org/media/soft/highlight/highlight.pack.js",tab:"    "};h=$.extend({},i,h);var j=this,k=0,l;n();return j}})(jQuery,this,typeof this.hljs!="undefined"?this.hljs:!1);

/*!
 * Repo.js
 * @author Darcy Clarke
 *
 * Copyright (c) 2012 Darcy Clarke
 * Dual licensed under the MIT and GPL licenses.
 * http://darcyclarke.me/
 */
 (function(a){a.fn.repo=function(c){var g=this,e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",d=function(t){t=escape(t);var s="";var r,q,p="";var o,n,m,l="";var k=0;do{r=t.charCodeAt(k++);q=t.charCodeAt(k++);p=t.charCodeAt(k++);o=r>>2;n=(r&3)<<4|q>>4;m=(q&15)<<2|p>>6;l=p&63;if(isNaN(q)){m=l=64}else{if(isNaN(p)){l=64}}s=s+e.charAt(o)+e.charAt(n)+e.charAt(m)+e.charAt(l);r=q=p="";o=n=m=l=""}while(k<t.length);return s},b=function(v){var u="";var t,s,r="";var q,p,o,n="";var m=0;var l=/[^A-Za-z0-9\+\/\=]/g;if(l.exec(v)){}v=v.replace(/[^A-Za-z0-9\+\/\=]/g,"");do{q=e.indexOf(v.charAt(m++));p=e.indexOf(v.charAt(m++));o=e.indexOf(v.charAt(m++));n=e.indexOf(v.charAt(m++));t=q<<2|p>>4;s=(p&15)<<4|o>>2;r=(o&3)<<6|n;u=u+String.fromCharCode(t);if(o!=64){u=u+String.fromCharCode(s)}if(n!=64){u=u+String.fromCharCode(r)}t=s=r="";q=p=o=n=""}while(m<v.length);return unescape(u)},f=function(h,j,k){var i=(j==="left")?"":"left";height=h.outerHeight(true)+g.container.find("h1").outerHeight(true)+parseInt(g.container.css("padding-top"))+parseInt(g.container.css("padding-bottom"));if(k){h.addClass("active");g.container.css({height:height+"px"})}else{g.container.find(".page.active").css("position","absolute").addClass(j).removeClass("active").end().css({height:height+"px"});h.addClass("active").removeClass(i).delay(250).queue(function(){a(this).css("position","relative").dequeue()})}};g.settings=a.extend({user:"",name:"",branch:"master",css:'@font-face{font-family:"Octicons Regular";src:url("https://a248.e.akamai.net/assets.github.com/fonts/octicons/octicons-regular-webfont.eot?639c50d4");src:url("https://a248.e.akamai.net/assets.github.com/fonts/octicons/octicons-regular-webfont.eot?639c50d4#iefix") format("embedded-opentype"),url("https://a248.e.akamai.net/assets.github.com/assets/octicons/octicons-regular-webfont-ea227ee7505207ebf76244f0ec61db5f93884daf.woff?0605b255") format("woff"),url("https://a248.e.akamai.net/assets.github.com/fonts/octicons/octicons-regular-webfont.ttf?f82fcba7") format("truetype"),url("https://a248.e.akamai.net/assets.github.com/fonts/octicons/octicons-regular-webfont.svg?1f7afa21#newFontRegular") format("svg");font-weight:normal;font-style:normal}.repo,.repo *{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;-ms-box-sizing:border-box;box-sizing:border-box}.repo ul *{display:block;font-family:sans-serif;font-size:13px;line-height:18px}.repo{width:100%;margin:0 0 15px 0;position:relative;padding-bottom:1px;color:#555;overflow:hidden;height:300px;-webkit-transition:height .25s;-moz-transition:height .25s;-o-transition:height .25s;-ms-transition:height .25s;transition:height .25s}.repo .page{background:#f8f8f8;border:4px solid rgba(0,0,0,0.08);border-radius:3px;-ms-filter:"alpha(opacity=0)";filter:alpha(opacity=0);opacity:0;left:100%;width:98%;position:absolute;-webkit-transition:all .25s;-moz-transition:all .25s;-o-transition:all .25s;-ms-transition:all .25s;transition:all .25s}.repo .page.active{left:1%!important;-ms-filter:"alpha(opacity=100)";filter:alpha(opacity=100);opacity:1;display:block}.repo .page.left{left:-100%}.repo .loader{position:absolute;display:block;width:100%;height:300px;top:0;left:0;background:url(/img/octocat-spinner-64.gif) no-repeat center 50%}.repo.loaded .loader{display:none}.repo h1{padding:0 0 0 10px;font-family:sans-serif;font-size:20px;line-height:26px;color:#000;font-weight:normal}.repo h1 a:nth-of-type(1),.repo h1 a.active{font-weight:bold}.repo h1 a.active,.repo h1 a.active:active,.repo h1 a.active:visited,.repo h1 a.active:hover{color:#000}.repo h1 a,.repo h1 a:active,.repo h1 a:visited,.repo h1 a:hover{color:#4183c4;text-decoration:none}.repo h1 a:after{content:"/";color:#999;padding:0 5px;font-weight:normal}.repo h1 a:last-child:after{content:""}.repo .page,.repo ul{zoom:1}.repo .page:before,.repo .page:after,.repo ul:before,.repo ul:after{content:"";display:table}.repo .page:after,.repo ul:after{clear:both}.repo ul{border:1px solid rgba(0,0,0,0.25);margin:0;padding:0}.repo li{width:100%;margin:0;padding:0;float:left;border-bottom:1px solid #ccc;position:relative;white-space:nowrap}.repo li.titles{background:-webkit-linear-gradient(#fafafa,#eaeaea);background:-moz-linear-gradient(#fafafa,#eaeaea);background:-o-linear-gradient(#fafafa,#eaeaea);background:-ms-linear-gradient(#fafafa,#eaeaea);background:linear-gradient(#fafafa,#eaeaea);font-weight:bold;padding:10px 10px 8px 36px;text-shadow:0 1px 0 #fff}.repo li:before{content:" ";font-family:"Octicons Regular";position:absolute;top:10px;left:10px;font-size:18px;-webkit-font-smoothing:antialiased}.repo li.dir:before{content:" ";color:#80a6cd}.repo li.titles:before,.repo li.back:before{content:""}.repo li:last-child{border:0;padding-bottom:none;margin:0}.repo li a,.repo li a:visited,.repo li a:active{color:#4183c4;width:100%;padding:10px 10px 8px 36px;display:block;text-decoration:none}.repo li a:hover{text-decoration:underline}.repo li span{display:inline-block}.repo li span:nth-of-type(1){width:30%}.repo li span:nth-of-type(2){width:20%}.repo li span:nth-of-type(3){width:40%}.repo .vg-container{position:relative;overflow:auto;white-space:pre!important;word-wrap:normal!important}.repo .vg-container,.repo .vg-code{border:0;margin:0;overflow:auto}.repo .vg-code .vg-line,.repo .vg-gutter .vg-number{display:block;height:1.5em;line-height:1.5em!important}.repo .vg-gutter{float:left;min-width:20px;width:auto;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.repo .vg-number{cursor:pointer}.repo .vg-container{font-family:"Bitstream Vera Sans Mono","Courier New",monospace;font-size:13px;border:1px solid #ddd}.repo .vg-gutter{background-color:#ececec;border-right:1px solid #ddd;text-align:right;color:#aaa;padding:1em .5em;margin-right:.5em}.repo .vg-code *::-moz-selection,.repo .vg-code *::-webkit-selection,.repo .vg-code *::selection,.repo .vg-line.vg-highlight{background-color:#ffc}.repo .vg-line span.vg-highlight{color:blue;font-weight:bold;text-decoration:underline}.repo .vg-container .vg-code{display:block;padding:1em .5em;background:#fff}.repo .vg-code{color:#000;background:#f8f8ff;border:0;padding:.4em}.repo .vg-code .comment,.repo .vg-code .template_comment,.repo .vg-code .diff .header,.repo .vg-code .javadoc{color:#998;font-style:italic}.repo .vg-code .keyword,.repo .vg-code .css .rule .keyword,.repo .vg-code .winutils,.repo .vg-code .javascript .title,.repo .vg-code .lisp .title,.repo .vg-code .subst{color:#000;font-weight:bold}.vg-code .number,.vg-code .hexcolor{color:#40a070}.vg-code .string,.repo .vg-code .tag .value,.repo .vg-code .phpdoc,.repo .vg-code .tex .formula{color:#d14}.repo .vg-code .title,.repo .vg-code .id{color:#900;font-weight:bold}.repo .vg-code .javascript .title,.repo .vg-code .lisp .title,.repo .vg-code .subst{font-weight:normal}.repo .vg-code .class .title,.repo .vg-code .haskell .label,.repo .vg-code .tex .command{color:#458;font-weight:bold}.repo .vg-code .tag,.repo .vg-code .tag .title,.repo .vg-code .rules .property,.repo .vg-code .django .tag .keyword{color:#000080;font-weight:normal}.repo .vg-code .attribute,.repo .vg-code .variable,.repo .vg-code .instancevar,.repo .vg-code .lisp .body{color:#008080}.repo .vg-code .regexp{color:#009926}.repo .vg-code .class{color:#458;font-weight:bold}.repo .vg-code .symbol,.repo .vg-code .ruby .symbol .string,.repo .vg-code .ruby .symbol .keyword,.repo .vg-code .ruby .symbol .keymethods,.repo .vg-code .lisp .keyword,.repo .vg-code .tex .special,.repo .vg-code .input_number{color:#990073}.repo .vg-code .builtin,.repo .vg-code .built_in,.repo .vg-code .lisp .title{color:#0086b3}.repo .vg-code .codeprocessor,.repo .vg-code .pi,.repo .vg-code .doctype,.repo .vg-code .shebang,.repo .vg-code .cdata{color:#999;font-weight:bold}.repo .vg-code .deletion{background:#fdd}.repo .vg-code .addition{background:#dfd}.repo .vg-code .diff .change{background:#0086b3}.repo .vg-code .chunk{color:#aaa}.repo .vg-code .tex .formula{-ms-filter:"alpha(opacity=50)";filter:alpha(opacity=50);opacity:.5}'},c);g.extensions={as:"actionscript",coffee:"coffeescript",css:"css",html:"html",js:"javascript",md:"markdown",php:"php",py:"python",rb:"ruby",};g.repo={name:"default",folders:[],files:[]};g.namespace=g.settings.name.toLowerCase();if(typeof g.settings.css!="undefined"&&g.settings.css!==""&&a("#repojs_css").length<=0){a("body").prepend(a('<style id="repojs_css">').html(g.settings.css))}a.ajax({url:"https://api.github.com/repos/"+g.settings.user+"/"+g.settings.name+"/git/trees/"+g.settings.branch+"?recursive=1",type:"GET",data:{},dataType:"jsonp",success:function(h){a.each(h.data.tree,function(j){if(!--h.data.tree.length){g.container.addClass("loaded");f(g.container.find(".page").first(),"left",true)}if(this.type!="blob"){return}var k=g.container.find(".page").first();ctx=g.repo,output=k,path=this.path,arr=path.split("/"),file=arr[(arr.length-1)],id="";arr=arr.slice(0,-1);id=g.namespace;a.each(arr,function(n){var m=String(this),l=0,o=false;id=id+"_split_"+m.replace(".","_dot_");a.each(ctx.folders,function(p){if(this.name==m){l=p;o=true}});if(!o){if(output!==k){output.find("ul li.back").after(a('<li class="dir"><a href="#" data-id="'+id+'">'+m+"</a></li>"))}else{output.find("ul li").first().after(a('<li class="dir"><a href="#" data-id="'+id+'">'+m+"</a></li>"))}ctx.folders.push({name:m,folders:[],files:[],element:a('<div class="page" id="'+id+'"><ul><li class="titles"><span>name</span></li><li class="back"><a href="#">..</a></li></ul></page>').appendTo(g.container)[0]});l=ctx.folders.length-1}output=a(ctx.folders[l].element);ctx=ctx.folders[l]});output.find("ul").append(a('<li class="file"><a href="#" data-path="'+path+'" data-id="'+id+'">'+file+"</a></li>"));ctx.files.push(file)});g.container.on("click","a",function(n){n.preventDefault();var l=a(this),k=l.parents("li"),m=l.parents(".page"),i=l.parents(".repo"),j=a("#"+l.data("id"));if(k.hasClass("file")){j=a("#"+l.data("id"));if(j.legnth>0){j.addClass("active")}else{a.ajax({url:"https://api.github.com/repos/"+g.settings.user+"/"+g.settings.name+"/contents/"+l.data("path")+"?ref="+g.settings.branch,type:"GET",data:{},dataType:"jsonp",success:function(o){j=a('<div class="file page" id="'+l.data("id")+'"><pre><code></code></pre></div>').appendTo(i);var p=j.text().split(".").pop();if(typeof g.extensions[p]!="undefined"){file.find("code").addClass(g.extensions[p])}j.find("code").html(String(b(o.data.content)).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"));j.find("pre").vanGogh();f(j,"left")},error:function(o){if(console&&console.log){console.log("Request Error:",n)}}})}}else{if(k.hasClass("dir")){g.container.find("h1").find(".active").removeClass("active").end().append('<a href="#" data-id="'+l.data("id")+'" class="active">'+l.text()+"</a>");f(j,"left")}else{if(k.hasClass("back")){g.container.find("h1 a").last().remove();j=m[0].id.split("_split_").slice(0,-1).join("_split_");j=(j==g.namespace)?g.container.find(".page").first():a("#"+j);f(j,"right")}else{if(l[0]!==g.container.find("h1 a")[0]){l.addClass("active")}g.container.find("h1 a").slice((l.index()+1),g.container.find("h1 a").length).remove();f(j,"right")}}}})},error:function(h){if(console&&console.log){console.log("Request Error:",h)}}});return this.each(function(){g.container=a('<div class="repo"><h1><a href="#" data-id="'+g.namespace+'_split_default">'+g.settings.name+'</a></h1><div class="loader"></div><div class="page" id="'+g.namespace+'_split_default"><ul><li class="titles"><span>name</span></li></ul></div></div>').appendTo(a(this))})}})(jQuery);
 $('#repo').repo({ user: 'vinhnx', name: 'twit-buddy' });