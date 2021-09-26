!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).window=t.window||{})}(this,function(e){function _inheritsLoose(t,e){t.prototype=Object.create(e.prototype),(t.prototype.constructor=t).__proto__=e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function o(t){return"string"==typeof t}function p(t){return"function"==typeof t}function q(t){return"number"==typeof t}function r(t){return void 0===t}function s(t){return"object"==typeof t}function t(t){return!1!==t}function u(){return"undefined"!=typeof window}function v(t){return p(t)||o(t)}function M(t){return(h=mt(t,ot))&&oe}function N(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")}function O(t,e){return!e&&console.warn(t)}function P(t,e){return t&&(ot[t]=e)&&h&&(h[t]=e)||ot}function Q(){return 0}function $(t){var e,r,i=t[0];if(s(i)||p(i)||(t=[t]),!(e=(i._gsap||{}).harness)){for(r=pt.length;r--&&!pt[r].targetTest(i););e=pt[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new Lt(t[r],e)))||t.splice(r,1);return t}function _(t){return t._gsap||$(xt(t))[0]._gsap}function aa(t,e,i){return(i=t[e])&&p(i)?t[e]():r(i)&&t.getAttribute&&t.getAttribute(e)||i}function ba(t,e){return(t=t.split(",")).forEach(e)||t}function ca(t){return Math.round(1e5*t)/1e5||0}function da(t,e){for(var r=e.length,i=0;t.indexOf(e[i])<0&&++i<r;);return i<r}function ea(){var t,e,r=ht.length,i=ht.slice(0);for(lt={},t=ht.length=0;t<r;t++)(e=i[t])&&e._lazy&&(e.render(e._lazy[0],e._lazy[1],!0)._lazy=0)}function fa(t,e,r,i){ht.length&&ea(),t.render(e,r,i),ht.length&&ea()}function ga(t){var e=parseFloat(t);return(e||0===e)&&(t+"").match(at).length<2?e:o(t)?t.trim():t}function ha(t){return t}function ia(t,e){for(var r in e)r in t||(t[r]=e[r]);return t}function ja(t,e){for(var r in e)r in t||"duration"===r||"ease"===r||(t[r]=e[r])}function la(t,e){for(var r in e)"__proto__"!==r&&"constructor"!==r&&"prototype"!==r&&(t[r]=s(e[r])?la(t[r]||(t[r]={}),e[r]):e[r]);return t}function ma(t,e){var r,i={};for(r in t)r in e||(i[r]=t[r]);return i}function na(e){var r=e.parent||R,i=e.keyframes?ja:ia;if(t(e.inherit))for(;r;)i(e,r.vars.defaults),r=r.parent||r._dp;return e}function qa(t,e,r,i){void 0===r&&(r="_first"),void 0===i&&(i="_last");var n=e._prev,a=e._next;n?n._next=a:t[r]===e&&(t[r]=a),a?a._prev=n:t[i]===e&&(t[i]=n),e._next=e._prev=e.parent=null}function ra(t,e){!t.parent||e&&!t.parent.autoRemoveChildren||t.parent.remove(t),t._act=0}function sa(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var r=t;r;)r._dirty=1,r=r.parent;return t}function va(t){return t._repeat?gt(t._tTime,t=t.duration()+t._rDelay)*t:0}function xa(t,e){return(t-e._start)*e._ts+(0<=e._ts?0:e._dirty?e.totalDuration():e._tDur)}function ya(t){return t._end=ca(t._start+(t._tDur/Math.abs(t._ts||t._rts||U)||0))}function za(t,e){var r=t._dp;return r&&r.smoothChildTiming&&t._ts&&(t._start=ca(r._time-(0<t._ts?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),ya(t),r._dirty||sa(r,t)),t}function Aa(t,e){var r;if((e._time||e._initted&&!e._dur)&&(r=xa(t.rawTime(),e),(!e._dur||Tt(0,e.totalDuration(),r)-e._tTime>U)&&e.render(r,!0)),sa(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(r=t;r._dp;)0<=r.rawTime()&&r.totalTime(r._tTime),r=r._dp;t._zTime=-U}}function Ba(t,e,r,i){return e.parent&&ra(e),e._start=ca((q(r)?r:r||t!==R?bt(t,r,e):t._time)+e._delay),e._end=ca(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),function _addLinkedListItem(t,e,r,i,n){void 0===r&&(r="_first"),void 0===i&&(i="_last");var a,s=t[i];if(n)for(a=e[n];s&&s[n]>a;)s=s._prev;s?(e._next=s._next,s._next=e):(e._next=t[r],t[r]=e),e._next?e._next._prev=e:t[i]=e,e._prev=s,e.parent=e._dp=t}(t,e,"_first","_last",t._sort?"_start":0),vt(e)||(t._recent=e),i||Aa(t,e),t}function Ca(t,e){return(ot.ScrollTrigger||N("scrollTrigger",e))&&ot.ScrollTrigger.create(e,t)}function Da(t,e,r,i){return Ut(t,e),t._initted?!r&&t._pt&&(t._dur&&!1!==t.vars.lazy||!t._dur&&t.vars.lazy)&&f!==St.frame?(ht.push(t),t._lazy=[e,i],1):void 0:1}function Ia(t,e,r,i){var n=t._repeat,a=ca(e)||0,s=t._tTime/t._tDur;return s&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=n?n<0?1e10:ca(a*(n+1)+t._rDelay*n):a,s&&!i?za(t,t._tTime=t._tDur*s):t.parent&&ya(t),r||sa(t.parent,t),t}function Ja(t){return t instanceof qt?sa(t):Ia(t,t._dur)}function Ma(e,r,i){var n,a,s=q(r[1]),o=(s?2:1)+(e<2?0:1),u=r[o];if(s&&(u.duration=r[1]),u.parent=i,e){for(n=u,a=i;a&&!("immediateRender"in n);)n=a.vars.defaults||{},a=t(a.vars.inherit)&&a.parent;u.immediateRender=t(n.immediateRender),e<2?u.runBackwards=1:u.startAt=r[o-1]}return new Qt(r[0],u,r[1+o])}function Na(t,e){return t||0===t?e(t):e}function Pa(t){if("string"!=typeof t)return"";var e=st.exec(t);return e?t.substr(e.index+e[0].length):""}function Sa(t,e){return t&&s(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&s(t[0]))&&!t.nodeType&&t!==i}function Wa(t){return t.sort(function(){return.5-Math.random()})}function Xa(t){if(p(t))return t;var _=s(t)?t:{each:t},m=Ft(_.ease),g=_.from||0,v=parseFloat(_.base)||0,y={},e=0<g&&g<1,b=isNaN(g)||e,T=_.axis,w=g,x=g;return o(g)?w=x={center:.5,edges:.5,end:1}[g]||0:!e&&b&&(w=g[0],x=g[1]),function(t,e,r){var i,n,a,s,o,u,h,l,f,d=(r||_).length,c=y[d];if(!c){if(!(f="auto"===_.grid?0:(_.grid||[1,X])[1])){for(h=-X;h<(h=r[f++].getBoundingClientRect().left)&&f<d;);f--}for(c=y[d]=[],i=b?Math.min(f,d)*w-.5:g%f,n=b?d*x/f-.5:g/f|0,l=X,u=h=0;u<d;u++)a=u%f-i,s=n-(u/f|0),c[u]=o=T?Math.abs("y"===T?s:a):G(a*a+s*s),h<o&&(h=o),o<l&&(l=o);"random"===g&&Wa(c),c.max=h-l,c.min=l,c.v=d=(parseFloat(_.amount)||parseFloat(_.each)*(d<f?d-1:T?"y"===T?d/f:f:Math.max(f,d/f))||0)*("edges"===g?-1:1),c.b=d<0?v-d:v,c.u=Pa(_.amount||_.each)||0,m=m&&d<0?Bt(m):m}return d=(c[t]-c.min)/c.max||0,ca(c.b+(m?m(d):d)*c.v)+c.u}}function Ya(r){var i=r<1?Math.pow(10,(r+"").length-2):1;return function(t){var e=Math.round(parseFloat(t)/r)*r*i;return(e-e%1)/i+(q(t)?0:Pa(t))}}function Za(u,t){var h,l,e=H(u);return!e&&s(u)&&(h=e=u.radius||X,u.values?(u=xt(u.values),(l=!q(u[0]))&&(h*=h)):u=Ya(u.increment)),Na(t,e?p(u)?function(t){return l=u(t),Math.abs(l-t)<=h?l:t}:function(t){for(var e,r,i=parseFloat(l?t.x:t),n=parseFloat(l?t.y:0),a=X,s=0,o=u.length;o--;)(e=l?(e=u[o].x-i)*e+(r=u[o].y-n)*r:Math.abs(u[o]-i))<a&&(a=e,s=o);return s=!h||a<=h?u[s]:t,l||s===t||q(t)?s:s+Pa(t)}:Ya(u))}function $a(t,e,r,i){return Na(H(t)?!e:!0===r?!!(r=0):!i,function(){return H(t)?t[~~(Math.random()*t.length)]:(r=r||1e-5)&&(i=r<1?Math.pow(10,(r+"").length-2):1)&&Math.floor(Math.round((t-r/2+Math.random()*(e-t+.99*r))/r)*r*i)/i})}function cb(e,r,t){return Na(t,function(t){return e[~~r(t)]})}function fb(t){for(var e,r,i,n,a=0,s="";~(e=t.indexOf("random(",a));)i=t.indexOf(")",e),n="["===t.charAt(e+7),r=t.substr(e+7,i-e-7).match(n?at:tt),s+=t.substr(a,e-a)+$a(n?r:+r[0],n?0:+r[1],+r[2]||1e-5),a=i+1;return s+t.substr(a,t.length-a)}function ib(t,e,r){var i,n,a,s=t.labels,o=X;for(i in s)(n=s[i]-e)<0==!!r&&n&&o>(n=Math.abs(n))&&(a=i,o=n);return a}function kb(t){return ra(t),t.scrollTrigger&&t.scrollTrigger.kill(!1),t.progress()<1&&Pt(t,"onInterrupt"),t}function pb(t,e,r){return(6*(t=t<0?t+1:1<t?t-1:t)<1?e+(r-e)*t*6:t<.5?r:3*t<2?e+(r-e)*(2/3-t)*6:e)*kt+.5|0}function qb(t,e,r){var i,n,a,s,o,u,h,l,f,d,c=t?q(t)?[t>>16,t>>8&kt,t&kt]:0:Mt.black;if(!c){if(","===t.substr(-1)&&(t=t.substr(0,t.length-1)),Mt[t])c=Mt[t];else if("#"===t.charAt(0)){if(t.length<6&&(t="#"+(i=t.charAt(1))+i+(n=t.charAt(2))+n+(a=t.charAt(3))+a+(5===t.length?t.charAt(4)+t.charAt(4):"")),9===t.length)return[(c=parseInt(t.substr(1,6),16))>>16,c>>8&kt,c&kt,parseInt(t.substr(7),16)/255];c=[(t=parseInt(t.substr(1),16))>>16,t>>8&kt,t&kt]}else if("hsl"===t.substr(0,3))if(c=d=t.match(tt),e){if(~t.indexOf("="))return c=t.match(et),r&&c.length<4&&(c[3]=1),c}else s=+c[0]%360/360,o=c[1]/100,i=2*(u=c[2]/100)-(n=u<=.5?u*(o+1):u+o-u*o),3<c.length&&(c[3]*=1),c[0]=pb(s+1/3,i,n),c[1]=pb(s,i,n),c[2]=pb(s-1/3,i,n);else c=t.match(tt)||Mt.transparent;c=c.map(Number)}return e&&!d&&(i=c[0]/kt,n=c[1]/kt,a=c[2]/kt,u=((h=Math.max(i,n,a))+(l=Math.min(i,n,a)))/2,h===l?s=o=0:(f=h-l,o=.5<u?f/(2-h-l):f/(h+l),s=h===i?(n-a)/f+(n<a?6:0):h===n?(a-i)/f+2:(i-n)/f+4,s*=60),c[0]=~~(s+.5),c[1]=~~(100*o+.5),c[2]=~~(100*u+.5)),r&&c.length<4&&(c[3]=1),c}function rb(t){var r=[],i=[],n=-1;return t.split(At).forEach(function(t){var e=t.match(rt)||[];r.push.apply(r,e),i.push(n+=e.length+1)}),r.c=i,r}function sb(t,e,r){var i,n,a,s,o="",u=(t+o).match(At),h=e?"hsla(":"rgba(",l=0;if(!u)return t;if(u=u.map(function(t){return(t=qb(t,e,1))&&h+(e?t[0]+","+t[1]+"%,"+t[2]+"%,"+t[3]:t.join(","))+")"}),r&&(a=rb(t),(i=r.c).join(o)!==a.c.join(o)))for(s=(n=t.replace(At,"1").split(rt)).length-1;l<s;l++)o+=n[l]+(~i.indexOf(l)?u.shift()||h+"0,0,0,0)":(a.length?a:u.length?u:r).shift());if(!n)for(s=(n=t.split(At)).length-1;l<s;l++)o+=n[l]+u[l];return o+n[s]}function vb(t){var e,r=t.join(" ");if(At.lastIndex=0,At.test(r))return e=Ct.test(r),t[1]=sb(t[1],e),t[0]=sb(t[0],e,rb(t[1])),!0}function Eb(t){var e=(t+"").split("("),r=zt[e[0]];return r&&1<e.length&&r.config?r.config.apply(null,~t.indexOf("{")?[function _parseObjectInString(t){for(var e,r,i,n={},a=t.substr(1,t.length-3).split(":"),s=a[0],o=1,u=a.length;o<u;o++)r=a[o],e=o!==u-1?r.lastIndexOf(","):r.length,i=r.substr(0,e),n[s]=isNaN(i)?i.replace(Et,"").trim():+i,s=r.substr(e+1).trim();return n}(e[1])]:function _valueInParentheses(t){var e=t.indexOf("(")+1,r=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<r?t.indexOf(")",r+1):r)}(t).split(",").map(ga)):zt._CE&&It.test(t)?zt._CE("",t):r}function Gb(t,e){for(var r,i=t._first;i;)i instanceof qt?Gb(i,e):!i.vars.yoyoEase||i._yoyo&&i._repeat||i._yoyo===e||(i.timeline?Gb(i.timeline,e):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=e)),i=i._next}function Ib(t,e,r,i){void 0===r&&(r=function easeOut(t){return 1-e(1-t)}),void 0===i&&(i=function easeInOut(t){return t<.5?e(2*t)/2:1-e(2*(1-t))/2});var n,a={easeIn:e,easeOut:r,easeInOut:i};return ba(t,function(t){for(var e in zt[t]=ot[t]=a,zt[n=t.toLowerCase()]=r,a)zt[n+("easeIn"===e?".in":"easeOut"===e?".out":".inOut")]=zt[t+"."+e]=a[e]}),a}function Jb(e){return function(t){return t<.5?(1-e(1-2*t))/2:.5+e(2*(t-.5))/2}}function Kb(r,t,e){function Ol(t){return 1===t?1:i*Math.pow(2,-10*t)*J((t-a)*n)+1}var i=1<=t?t:1,n=(e||(r?.3:.45))/(t<1?t:1),a=n/V*(Math.asin(1/i)||0),s="out"===r?Ol:"in"===r?function(t){return 1-Ol(1-t)}:Jb(Ol);return n=V/n,s.config=function(t,e){return Kb(r,t,e)},s}function Lb(e,r){function Wl(t){return t?--t*t*((r+1)*t+r)+1:0}void 0===r&&(r=1.70158);var t="out"===e?Wl:"in"===e?function(t){return 1-Wl(1-t)}:Jb(Wl);return t.config=function(t){return Lb(e,t)},t}var F,R,i,n,a,h,l,f,d,c,m,g,y,b,T,w,x,k,A,C,S,D,z,I,E,B,Y={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},L={duration:.5,overwrite:!1,delay:0},X=1e8,U=1/X,V=2*Math.PI,j=V/4,W=0,G=Math.sqrt,K=Math.cos,J=Math.sin,Z="function"==typeof ArrayBuffer&&ArrayBuffer.isView||function(){},H=Array.isArray,tt=/(?:-?\.?\d|\.)+/gi,et=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,rt=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,it=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,nt=/[+-]=-?[.\d]+/,at=/[^,'"\[\]\s]+/gi,st=/[\d.+\-=]+(?:e[-+]\d*)*/i,ot={},ut={},ht=[],lt={},ft={},dt={},ct=30,pt=[],_t="",mt=function _merge(t,e){for(var r in e)t[r]=e[r];return t},gt=function _animationCycle(t,e){var r=Math.floor(t/=e);return t&&r===t?r-1:r},vt=function _isFromOrFromStart(t){var e=t.data;return"isFromStart"===e||"isStart"===e},yt={_start:0,endTime:Q,totalDuration:Q},bt=function _parsePosition(t,e,r){var i,n,a,s=t.labels,u=t._recent||yt,h=t.duration()>=X?u.endTime(!1):t._dur;return o(e)&&(isNaN(e)||e in s)?(n=e.charAt(0),a="%"===e.substr(-1),i=e.indexOf("="),"<"===n||">"===n?(0<=i&&(e=e.replace(/=/,"")),("<"===n?u._start:u.endTime(0<=u._repeat))+(parseFloat(e.substr(1))||0)*(a?(i<0?u:r).totalDuration()/100:1)):i<0?(e in s||(s[e]=h),s[e]):(n=parseFloat(e.charAt(i-1)+e.substr(i+1)),a&&r&&(n=n/100*(H(r)?r[0]:r).totalDuration()),1<i?_parsePosition(t,e.substr(0,i-1),r)+n:h+n)):null==e?h:+e},Tt=function _clamp(t,e,r){return r<t?t:e<r?e:r},wt=[].slice,xt=function toArray(t,e,r){return!o(t)||r||!n&&Dt()?H(t)?function _flatten(t,e,r){return void 0===r&&(r=[]),t.forEach(function(t){return o(t)&&!e||Sa(t,1)?r.push.apply(r,xt(t)):r.push(t)})||r}(t,r):Sa(t)?wt.call(t,0):t?[t]:[]:wt.call((e||a).querySelectorAll(t),0)},Ot=function mapRange(e,t,r,i,n){var a=t-e,s=i-r;return Na(n,function(t){return r+((t-e)/a*s||0)})},Pt=function _callback(t,e,r){var i,n,a=t.vars,s=a[e];if(s)return i=a[e+"Params"],n=a.callbackScope||t,r&&ht.length&&ea(),i?s.apply(n,i):s.call(n)},kt=255,Mt={aqua:[0,kt,kt],lime:[0,kt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,kt],navy:[0,0,128],white:[kt,kt,kt],olive:[128,128,0],yellow:[kt,kt,0],orange:[kt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[kt,0,0],pink:[kt,192,203],cyan:[0,kt,kt],transparent:[kt,kt,kt,0]},At=function(){var t,e="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";for(t in Mt)e+="|"+t+"\\b";return new RegExp(e+")","gi")}(),Ct=/hsl[a]?\(/,St=(x=Date.now,k=500,A=33,C=x(),S=C,z=D=1e3/240,b={time:0,frame:0,tick:function tick(){Kk(!0)},deltaRatio:function deltaRatio(t){return T/(1e3/(t||60))},wake:function wake(){l&&(!n&&u()&&(i=n=window,a=i.document||{},ot.gsap=oe,(i.gsapVersions||(i.gsapVersions=[])).push(oe.version),M(h||i.GreenSockGlobals||!i.gsap&&i||{}),y=i.requestAnimationFrame),m&&b.sleep(),g=y||function(t){return setTimeout(t,z-1e3*b.time+1|0)},c=1,Kk(2))},sleep:function sleep(){(y?i.cancelAnimationFrame:clearTimeout)(m),c=0,g=Q},lagSmoothing:function lagSmoothing(t,e){k=t||1e8,A=Math.min(e,k,0)},fps:function fps(t){D=1e3/(t||240),z=1e3*b.time+D},add:function add(t){I.indexOf(t)<0&&I.push(t),Dt()},remove:function remove(t){var e;~(e=I.indexOf(t))&&I.splice(e,1)&&e<=w&&w--},_listeners:I=[]}),Dt=function _wake(){return!c&&St.wake()},zt={},It=/^[\d.\-M][\d.\-,\s]/,Et=/["']/g,Bt=function _invertEase(e){return function(t){return 1-e(1-t)}},Ft=function _parseEase(t,e){return t&&(p(t)?t:zt[t]||Eb(t))||e};function Kk(t){var e,r,i,n,a=x()-S,s=!0===t;if(k<a&&(C+=a-A),(0<(e=(i=(S+=a)-C)-z)||s)&&(n=++b.frame,T=i-1e3*b.time,b.time=i/=1e3,z+=e+(D<=e?4:D-e),r=1),s||(m=g(Kk)),r)for(w=0;w<I.length;w++)I[w](i,T,n,t)}function lm(t){return t<B?E*t*t:t<.7272727272727273?E*Math.pow(t-1.5/2.75,2)+.75:t<.9090909090909092?E*(t-=2.25/2.75)*t+.9375:E*Math.pow(t-2.625/2.75,2)+.984375}ba("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,e){var r=e<5?e+1:e;Ib(t+",Power"+(r-1),e?function(t){return Math.pow(t,r)}:function(t){return t},function(t){return 1-Math.pow(1-t,r)},function(t){return t<.5?Math.pow(2*t,r)/2:1-Math.pow(2*(1-t),r)/2})}),zt.Linear.easeNone=zt.none=zt.Linear.easeIn,Ib("Elastic",Kb("in"),Kb("out"),Kb()),E=7.5625,B=1/2.75,Ib("Bounce",function(t){return 1-lm(1-t)},lm),Ib("Expo",function(t){return t?Math.pow(2,10*(t-1)):0}),Ib("Circ",function(t){return-(G(1-t*t)-1)}),Ib("Sine",function(t){return 1===t?1:1-K(t*j)}),Ib("Back",Lb("in"),Lb("out"),Lb()),zt.SteppedEase=zt.steps=ot.SteppedEase={config:function config(t,e){void 0===t&&(t=1);var r=1/t,i=t+(e?0:1),n=e?1:0;return function(t){return((i*Tt(0,.99999999,t)|0)+n)*r}}},L.ease=zt["quad.out"],ba("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(t){return _t+=t+","+t+"Params,"});var Rt,Lt=function GSCache(t,e){this.id=W++,(t._gsap=this).target=t,this.harness=e,this.get=e?e.get:aa,this.set=e?e.getSetter:Jt},Nt=((Rt=Animation.prototype).delay=function delay(t){return t||0===t?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+t-this._delay),this._delay=t,this):this._delay},Rt.duration=function duration(t){return arguments.length?this.totalDuration(0<this._repeat?t+(t+this._rDelay)*this._repeat:t):this.totalDuration()&&this._dur},Rt.totalDuration=function totalDuration(t){return arguments.length?(this._dirty=0,Ia(this,this._repeat<0?t:(t-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},Rt.totalTime=function totalTime(t,e){if(Dt(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(za(this,t),!r._dp||r.parent||Aa(r,this);r.parent;)r.parent._time!==r._start+(0<=r._ts?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(0<this._ts&&t<this._tDur||this._ts<0&&0<t||!this._tDur&&!t)&&Ba(this._dp,this,this._start-this._delay)}return(this._tTime!==t||!this._dur&&!e||this._initted&&Math.abs(this._zTime)===U||!t&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=t),fa(this,t,e)),this},Rt.time=function time(t,e){return arguments.length?this.totalTime(Math.min(this.totalDuration(),t+va(this))%(this._dur+this._rDelay)||(t?this._dur:0),e):this._time},Rt.totalProgress=function totalProgress(t,e){return arguments.length?this.totalTime(this.totalDuration()*t,e):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},Rt.progress=function progress(t,e){return arguments.length?this.totalTime(this.duration()*(!this._yoyo||1&this.iteration()?t:1-t)+va(this),e):this.duration()?Math.min(1,this._time/this._dur):this.ratio},Rt.iteration=function iteration(t,e){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(t-1)*r,e):this._repeat?gt(this._tTime,r)+1:1},Rt.timeScale=function timeScale(t){if(!arguments.length)return this._rts===-U?0:this._rts;if(this._rts===t)return this;var e=this.parent&&this._ts?xa(this.parent._time,this):this._tTime;return this._rts=+t||0,this._ts=this._ps||t===-U?0:this._rts,function _recacheAncestors(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t}(this.totalTime(Tt(-this._delay,this._tDur,e),!0))},Rt.paused=function paused(t){return arguments.length?(this._ps!==t&&((this._ps=t)?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Dt(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,1===this.progress()&&Math.abs(this._zTime)!==U&&(this._tTime-=U)))),this):this._ps},Rt.startTime=function startTime(t){if(arguments.length){this._start=t;var e=this.parent||this._dp;return!e||!e._sort&&this.parent||Ba(e,this,t-this._delay),this}return this._start},Rt.endTime=function endTime(e){return this._start+(t(e)?this.totalDuration():this.duration())/Math.abs(this._ts)},Rt.rawTime=function rawTime(t){var e=this.parent||this._dp;return e?t&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?xa(e.rawTime(t),this):this._tTime:this._tTime},Rt.globalTime=function globalTime(t){for(var e=this,r=arguments.length?t:e.rawTime();e;)r=e._start+r/(e._ts||1),e=e._dp;return r},Rt.repeat=function repeat(t){return arguments.length?(this._repeat=t===1/0?-2:t,Ja(this)):-2===this._repeat?1/0:this._repeat},Rt.repeatDelay=function repeatDelay(t){if(arguments.length){var e=this._time;return this._rDelay=t,Ja(this),e?this.time(e):this}return this._rDelay},Rt.yoyo=function yoyo(t){return arguments.length?(this._yoyo=t,this):this._yoyo},Rt.seek=function seek(e,r){return this.totalTime(bt(this,e),t(r))},Rt.restart=function restart(e,r){return this.play().totalTime(e?-this._delay:0,t(r))},Rt.play=function play(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},Rt.reverse=function reverse(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},Rt.pause=function pause(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},Rt.resume=function resume(){return this.paused(!1)},Rt.reversed=function reversed(t){return arguments.length?(!!t!==this.reversed()&&this.timeScale(-this._rts||(t?-U:0)),this):this._rts<0},Rt.invalidate=function invalidate(){return this._initted=this._act=0,this._zTime=-U,this},Rt.isActive=function isActive(){var t,e=this.parent||this._dp,r=this._start;return!(e&&!(this._ts&&this._initted&&e.isActive()&&(t=e.rawTime(!0))>=r&&t<this.endTime(!0)-U))},Rt.eventCallback=function eventCallback(t,e,r){var i=this.vars;return 1<arguments.length?(e?(i[t]=e,r&&(i[t+"Params"]=r),"onUpdate"===t&&(this._onUpdate=e)):delete i[t],this):i[t]},Rt.then=function then(t){var i=this;return new Promise(function(e){function Cn(){var t=i.then;i.then=null,p(r)&&(r=r(i))&&(r.then||r===i)&&(i.then=t),e(r),i.then=t}var r=p(t)?t:ha;i._initted&&1===i.totalProgress()&&0<=i._ts||!i._tTime&&i._ts<0?Cn():i._prom=Cn})},Rt.kill=function kill(){kb(this)},Animation);function Animation(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ia(this,+t.duration,1,1),this.data=t.data,c||St.wake()}ia(Nt.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-U,_prom:0,_ps:!1,_rts:1});var qt=function(n){function Timeline(e,r){var i;return void 0===e&&(e={}),(i=n.call(this,e)||this).labels={},i.smoothChildTiming=!!e.smoothChildTiming,i.autoRemoveChildren=!!e.autoRemoveChildren,i._sort=t(e.sortChildren),R&&Ba(e.parent||R,_assertThisInitialized(i),r),e.reversed&&i.reverse(),e.paused&&i.paused(!0),e.scrollTrigger&&Ca(_assertThisInitialized(i),e.scrollTrigger),i}_inheritsLoose(Timeline,n);var e=Timeline.prototype;return e.to=function to(t,e,r){return Ma(0,arguments,this),this},e.from=function from(t,e,r){return Ma(1,arguments,this),this},e.fromTo=function fromTo(t,e,r,i){return Ma(2,arguments,this),this},e.set=function set(t,e,r){return e.duration=0,e.parent=this,na(e).repeatDelay||(e.repeat=0),e.immediateRender=!!e.immediateRender,new Qt(t,e,bt(this,r),1),this},e.call=function call(t,e,r){return Ba(this,Qt.delayedCall(0,t,e),r)},e.staggerTo=function staggerTo(t,e,r,i,n,a,s){return r.duration=e,r.stagger=r.stagger||i,r.onComplete=a,r.onCompleteParams=s,r.parent=this,new Qt(t,r,bt(this,n)),this},e.staggerFrom=function staggerFrom(e,r,i,n,a,s,o){return i.runBackwards=1,na(i).immediateRender=t(i.immediateRender),this.staggerTo(e,r,i,n,a,s,o)},e.staggerFromTo=function staggerFromTo(e,r,i,n,a,s,o,u){return n.startAt=i,na(n).immediateRender=t(n.immediateRender),this.staggerTo(e,r,n,a,s,o,u)},e.render=function render(t,e,r){var i,n,a,s,o,u,h,l,f,d,c,p,_=this._time,m=this._dirty?this.totalDuration():this._tDur,g=this._dur,v=this!==R&&m-U<t&&0<=t?m:t<U?0:t,y=this._zTime<0!=t<0&&(this._initted||!g);if(v!==this._tTime||r||y){if(_!==this._time&&g&&(v+=this._time-_,t+=this._time-_),i=v,f=this._start,u=!(l=this._ts),y&&(g||(_=this._zTime),!t&&e||(this._zTime=t)),this._repeat){if(c=this._yoyo,o=g+this._rDelay,this._repeat<-1&&t<0)return this.totalTime(100*o+t,e,r);if(i=ca(v%o),v===m?(s=this._repeat,i=g):((s=~~(v/o))&&s===v/o&&(i=g,s--),g<i&&(i=g)),d=gt(this._tTime,o),!_&&this._tTime&&d!==s&&(d=s),c&&1&s&&(i=g-i,p=1),s!==d&&!this._lock){var b=c&&1&d,T=b===(c&&1&s);if(s<d&&(b=!b),_=b?0:g,this._lock=1,this.render(_||(p?0:ca(s*o)),e,!g)._lock=0,this._tTime=v,!e&&this.parent&&Pt(this,"onRepeat"),this.vars.repeatRefresh&&!p&&(this.invalidate()._lock=1),_&&_!==this._time||u!=!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(g=this._dur,m=this._tDur,T&&(this._lock=2,_=b?g:-1e-4,this.render(_,!0),this.vars.repeatRefresh&&!p&&this.invalidate()),this._lock=0,!this._ts&&!u)return this;Gb(this,p)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(h=function _findNextPauseTween(t,e,r){var i;if(e<r)for(i=t._first;i&&i._start<=r;){if(!i._dur&&"isPause"===i.data&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=r;){if(!i._dur&&"isPause"===i.data&&i._start<e)return i;i=i._prev}}(this,ca(_),ca(i)))&&(v-=i-(i=h._start)),this._tTime=v,this._time=i,this._act=!l,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=t,_=0),!_&&i&&!e&&(Pt(this,"onStart"),this._tTime!==v))return this;if(_<=i&&0<=t)for(n=this._first;n;){if(a=n._next,(n._act||i>=n._start)&&n._ts&&h!==n){if(n.parent!==this)return this.render(t,e,r);if(n.render(0<n._ts?(i-n._start)*n._ts:(n._dirty?n.totalDuration():n._tDur)+(i-n._start)*n._ts,e,r),i!==this._time||!this._ts&&!u){h=0,a&&(v+=this._zTime=-U);break}}n=a}else{n=this._last;for(var w=t<0?t:i;n;){if(a=n._prev,(n._act||w<=n._end)&&n._ts&&h!==n){if(n.parent!==this)return this.render(t,e,r);if(n.render(0<n._ts?(w-n._start)*n._ts:(n._dirty?n.totalDuration():n._tDur)+(w-n._start)*n._ts,e,r),i!==this._time||!this._ts&&!u){h=0,a&&(v+=this._zTime=w?-U:U);break}}n=a}}if(h&&!e&&(this.pause(),h.render(_<=i?0:-U)._zTime=_<=i?1:-1,this._ts))return this._start=f,ya(this),this.render(t,e,r);this._onUpdate&&!e&&Pt(this,"onUpdate",!0),(v===m&&m>=this.totalDuration()||!v&&_)&&(f!==this._start&&Math.abs(l)===Math.abs(this._ts)||this._lock||(!t&&g||!(v===m&&0<this._ts||!v&&this._ts<0)||ra(this,1),e||t<0&&!_||!v&&!_&&m||(Pt(this,v===m&&0<=t?"onComplete":"onReverseComplete",!0),!this._prom||v<m&&0<this.timeScale()||this._prom())))}return this},e.add=function add(t,e){var r=this;if(q(e)||(e=bt(this,e,t)),!(t instanceof Nt)){if(H(t))return t.forEach(function(t){return r.add(t,e)}),this;if(o(t))return this.addLabel(t,e);if(!p(t))return this;t=Qt.delayedCall(0,t)}return this!==t?Ba(this,t,e):this},e.getChildren=function getChildren(t,e,r,i){void 0===t&&(t=!0),void 0===e&&(e=!0),void 0===r&&(r=!0),void 0===i&&(i=-X);for(var n=[],a=this._first;a;)a._start>=i&&(a instanceof Qt?e&&n.push(a):(r&&n.push(a),t&&n.push.apply(n,a.getChildren(!0,e,r)))),a=a._next;return n},e.getById=function getById(t){for(var e=this.getChildren(1,1,1),r=e.length;r--;)if(e[r].vars.id===t)return e[r]},e.remove=function remove(t){return o(t)?this.removeLabel(t):p(t)?this.killTweensOf(t):(qa(this,t),t===this._recent&&(this._recent=this._last),sa(this))},e.totalTime=function totalTime(t,e){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ca(St.time-(0<this._ts?t/this._ts:(this.totalDuration()-t)/-this._ts))),n.prototype.totalTime.call(this,t,e),this._forcing=0,this):this._tTime},e.addLabel=function addLabel(t,e){return this.labels[t]=bt(this,e),this},e.removeLabel=function removeLabel(t){return delete this.labels[t],this},e.addPause=function addPause(t,e,r){var i=Qt.delayedCall(0,e||Q,r);return i.data="isPause",this._hasPause=1,Ba(this,i,bt(this,t))},e.removePause=function removePause(t){var e=this._first;for(t=bt(this,t);e;)e._start===t&&"isPause"===e.data&&ra(e),e=e._next},e.killTweensOf=function killTweensOf(t,e,r){for(var i=this.getTweensOf(t,r),n=i.length;n--;)Yt!==i[n]&&i[n].kill(t,e);return this},e.getTweensOf=function getTweensOf(t,e){for(var r,i=[],n=xt(t),a=this._first,s=q(e);a;)a instanceof Qt?da(a._targets,n)&&(s?(!Yt||a._initted&&a._ts)&&a.globalTime(0)<=e&&a.globalTime(a.totalDuration())>e:!e||a.isActive())&&i.push(a):(r=a.getTweensOf(n,e)).length&&i.push.apply(i,r),a=a._next;return i},e.tweenTo=function tweenTo(t,e){e=e||{};var r,i=this,n=bt(i,t),a=e.startAt,s=e.onStart,o=e.onStartParams,u=e.immediateRender,h=Qt.to(i,ia({ease:e.ease||"none",lazy:!1,immediateRender:!1,time:n,overwrite:"auto",duration:e.duration||Math.abs((n-(a&&"time"in a?a.time:i._time))/i.timeScale())||U,onStart:function onStart(){if(i.pause(),!r){var t=e.duration||Math.abs((n-(a&&"time"in a?a.time:i._time))/i.timeScale());h._dur!==t&&Ia(h,t,0,1).render(h._time,!0,!0),r=1}s&&s.apply(h,o||[])}},e));return u?h.render(0):h},e.tweenFromTo=function tweenFromTo(t,e,r){return this.tweenTo(e,ia({startAt:{time:bt(this,t)}},r))},e.recent=function recent(){return this._recent},e.nextLabel=function nextLabel(t){return void 0===t&&(t=this._time),ib(this,bt(this,t))},e.previousLabel=function previousLabel(t){return void 0===t&&(t=this._time),ib(this,bt(this,t),1)},e.currentLabel=function currentLabel(t){return arguments.length?this.seek(t,!0):this.previousLabel(this._time+U)},e.shiftChildren=function shiftChildren(t,e,r){void 0===r&&(r=0);for(var i,n=this._first,a=this.labels;n;)n._start>=r&&(n._start+=t,n._end+=t),n=n._next;if(e)for(i in a)a[i]>=r&&(a[i]+=t);return sa(this)},e.invalidate=function invalidate(){var t=this._first;for(this._lock=0;t;)t.invalidate(),t=t._next;return n.prototype.invalidate.call(this)},e.clear=function clear(t){void 0===t&&(t=!0);for(var e,r=this._first;r;)e=r._next,this.remove(r),r=e;return this._dp&&(this._time=this._tTime=this._pTime=0),t&&(this.labels={}),sa(this)},e.totalDuration=function totalDuration(t){var e,r,i,n=0,a=this,s=a._last,o=X;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-t:t));if(a._dirty){for(i=a.parent;s;)e=s._prev,s._dirty&&s.totalDuration(),o<(r=s._start)&&a._sort&&s._ts&&!a._lock?(a._lock=1,Ba(a,s,r-s._delay,1)._lock=0):o=r,r<0&&s._ts&&(n-=r,(!i&&!a._dp||i&&i.smoothChildTiming)&&(a._start+=r/a._ts,a._time-=r,a._tTime-=r),a.shiftChildren(-r,!1,-Infinity),o=0),s._end>n&&s._ts&&(n=s._end),s=e;Ia(a,a===R&&a._time>n?a._time:n,1,1),a._dirty=0}return a._tDur},Timeline.updateRoot=function updateRoot(t){if(R._ts&&(fa(R,xa(t,R)),f=St.frame),St.frame>=ct){ct+=Y.autoSleep||120;var e=R._first;if((!e||!e._ts)&&Y.autoSleep&&St._listeners.length<2){for(;e&&!e._ts;)e=e._next;e||St.sleep()}}},Timeline}(Nt);ia(qt.prototype,{_lock:0,_hasPause:0,_forcing:0});function Sb(t,e,r,i,n,a){var u,h,l,f;if(ft[t]&&!1!==(u=new ft[t]).init(n,u.rawVars?e[t]:function _processVars(t,e,r,i,n){if(p(t)&&(t=Vt(t,n,e,r,i)),!s(t)||t.style&&t.nodeType||H(t)||Z(t))return o(t)?Vt(t,n,e,r,i):t;var a,u={};for(a in t)u[a]=Vt(t[a],n,e,r,i);return u}(e[t],i,n,a,r),r,i,a)&&(r._pt=h=new ae(r._pt,n,t,0,1,u.render,u,0,u.priority),r!==d))for(l=r._ptLookup[r._targets.indexOf(n)],f=u._props.length;f--;)l[u._props[f]]=h;return u}var Yt,Xt=function _addPropTween(t,e,r,i,n,a,s,u,h){p(i)&&(i=i(n||0,t,a));var l,f=t[e],d="get"!==r?r:p(f)?h?t[e.indexOf("set")||!p(t["get"+e.substr(3)])?e:"get"+e.substr(3)](h):t[e]():f,c=p(f)?h?$t:Kt:Gt;if(o(i)&&(~i.indexOf("random(")&&(i=fb(i)),"="===i.charAt(1)&&(!(l=parseFloat(d)+parseFloat(i.substr(2))*("-"===i.charAt(0)?-1:1)+(Pa(d)||0))&&0!==l||(i=l))),d!==i)return isNaN(d*i)||""===i?(f||e in t||N(e,i),function _addComplexStringPropTween(t,e,r,i,n,a,s){var o,u,h,l,f,d,c,p,_=new ae(this._pt,t,e,0,1,te,null,n),m=0,g=0;for(_.b=r,_.e=i,r+="",(c=~(i+="").indexOf("random("))&&(i=fb(i)),a&&(a(p=[r,i],t,e),r=p[0],i=p[1]),u=r.match(it)||[];o=it.exec(i);)l=o[0],f=i.substring(m,o.index),h?h=(h+1)%5:"rgba("===f.substr(-5)&&(h=1),l!==u[g++]&&(d=parseFloat(u[g-1])||0,_._pt={_next:_._pt,p:f||1===g?f:",",s:d,c:"="===l.charAt(1)?parseFloat(l.substr(2))*("-"===l.charAt(0)?-1:1):parseFloat(l)-d,m:h&&h<4?Math.round:0},m=it.lastIndex);return _.c=m<i.length?i.substring(m,i.length):"",_.fp=s,(nt.test(i)||c)&&(_.e=0),this._pt=_}.call(this,t,e,d,i,c,u||Y.stringFilter,h)):(l=new ae(this._pt,t,e,+d||0,i-(d||0),"boolean"==typeof f?Ht:Zt,0,c),h&&(l.fp=h),s&&l.modifier(s,this,t),this._pt=l)},Ut=function _initTween(e,r){var i,n,a,s,o,u,h,l,f,d,c,p,m,g=e.vars,v=g.ease,y=g.startAt,b=g.immediateRender,T=g.lazy,w=g.onUpdate,x=g.onUpdateParams,O=g.callbackScope,P=g.runBackwards,k=g.yoyoEase,M=g.keyframes,A=g.autoRevert,C=e._dur,S=e._startAt,D=e._targets,z=e.parent,I=z&&"nested"===z.data?z.parent._targets:D,E="auto"===e._overwrite&&!F,B=e.timeline;if(!B||M&&v||(v="none"),e._ease=Ft(v,L.ease),e._yEase=k?Bt(Ft(!0===k?v:k,L.ease)):0,k&&e._yoyo&&!e._repeat&&(k=e._yEase,e._yEase=e._ease,e._ease=k),e._from=!B&&!!g.runBackwards,!B){if(p=(l=D[0]?_(D[0]).harness:0)&&g[l.prop],i=ma(g,ut),S&&S.render(-1,!0).kill(),y)if(ra(e._startAt=Qt.set(D,ia({data:"isStart",overwrite:!1,parent:z,immediateRender:!0,lazy:t(T),startAt:null,delay:0,onUpdate:w,onUpdateParams:x,callbackScope:O,stagger:0},y))),r<0&&!b&&!A&&e._startAt.render(-1,!0),b){if(0<r&&!A&&(e._startAt=0),C&&r<=0)return void(r&&(e._zTime=r))}else!1===A&&(e._startAt=0);else if(P&&C)if(S)A||(e._startAt=0);else if(r&&(b=!1),a=ia({overwrite:!1,data:"isFromStart",lazy:b&&t(T),immediateRender:b,stagger:0,parent:z},i),p&&(a[l.prop]=p),ra(e._startAt=Qt.set(D,a)),r<0&&e._startAt.render(-1,!0),b){if(!r)return}else _initTween(e._startAt,U);for(e._pt=0,T=C&&t(T)||T&&!C,n=0;n<D.length;n++){if(h=(o=D[n])._gsap||$(D)[n]._gsap,e._ptLookup[n]=d={},lt[h.id]&&ht.length&&ea(),c=I===D?n:I.indexOf(o),l&&!1!==(f=new l).init(o,p||i,e,c,I)&&(e._pt=s=new ae(e._pt,o,f.name,0,1,f.render,f,0,f.priority),f._props.forEach(function(t){d[t]=s}),f.priority&&(u=1)),!l||p)for(a in i)ft[a]&&(f=Sb(a,i,e,c,o,I))?f.priority&&(u=1):d[a]=s=Xt.call(e,o,a,"get",i[a],c,I,0,g.stringFilter);e._op&&e._op[n]&&e.kill(o,e._op[n]),E&&e._pt&&(Yt=e,R.killTweensOf(o,d,e.globalTime(0)),m=!e.parent,Yt=0),e._pt&&T&&(lt[h.id]=1)}u&&ne(e),e._onInit&&e._onInit(e)}e._onUpdate=w,e._initted=(!e._op||e._pt)&&!m},Vt=function _parseFuncOrString(t,e,r,i,n){return p(t)?t.call(e,r,i,n):o(t)&&~t.indexOf("random(")?fb(t):t},jt=_t+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",Wt=(jt+",id,stagger,delay,duration,paused,scrollTrigger").split(","),Qt=function(C){function Tween(e,r,i,n){var a;"number"==typeof r&&(i.duration=r,r=i,i=null);var o,u,h,l,f,d,c,p,_=(a=C.call(this,n?r:na(r))||this).vars,m=_.duration,g=_.delay,y=_.immediateRender,b=_.stagger,T=_.overwrite,w=_.keyframes,x=_.defaults,P=_.scrollTrigger,k=_.yoyoEase,M=r.parent||R,A=(H(e)||Z(e)?q(e[0]):"length"in r)?[e]:xt(e);if(a._targets=A.length?$(A):O("GSAP target "+e+" not found. https://greensock.com",!Y.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=T,w||b||v(m)||v(g)){if(r=a.vars,(o=a.timeline=new qt({data:"nested",defaults:x||{}})).kill(),o.parent=o._dp=_assertThisInitialized(a),o._start=0,w)ia(o.vars.defaults,{ease:"none"}),b?A.forEach(function(r,i){return w.forEach(function(t,e){return o.to(r,t,e?">":i*b)})}):w.forEach(function(t){return o.to(A,t,">")});else{if(l=A.length,c=b?Xa(b):Q,s(b))for(f in b)~jt.indexOf(f)&&((p=p||{})[f]=b[f]);for(u=0;u<l;u++){for(f in h={},r)Wt.indexOf(f)<0&&(h[f]=r[f]);h.stagger=0,k&&(h.yoyoEase=k),p&&mt(h,p),d=A[u],h.duration=+Vt(m,_assertThisInitialized(a),u,d,A),h.delay=(+Vt(g,_assertThisInitialized(a),u,d,A)||0)-a._delay,!b&&1===l&&h.delay&&(a._delay=g=h.delay,a._start+=g,h.delay=0),o.to(d,h,c(u,d,A))}o.duration()?m=g=0:a.timeline=0}m||a.duration(m=o.duration())}else a.timeline=0;return!0!==T||F||(Yt=_assertThisInitialized(a),R.killTweensOf(A),Yt=0),Ba(M,_assertThisInitialized(a),i),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(y||!m&&!w&&a._start===ca(M._time)&&t(y)&&function _hasNoPausedAncestors(t){return!t||t._ts&&_hasNoPausedAncestors(t.parent)}(_assertThisInitialized(a))&&"nested"!==M.data)&&(a._tTime=-U,a.render(Math.max(0,-g))),P&&Ca(_assertThisInitialized(a),P),a}_inheritsLoose(Tween,C);var e=Tween.prototype;return e.render=function render(t,e,r){var i,n,a,s,o,u,h,l,f,d=this._time,c=this._tDur,p=this._dur,_=c-U<t&&0<=t?c:t<U?0:t;if(p){if(_!==this._tTime||!t||r||!this._initted&&this._tTime||this._startAt&&this._zTime<0!=t<0){if(i=_,l=this.timeline,this._repeat){if(s=p+this._rDelay,this._repeat<-1&&t<0)return this.totalTime(100*s+t,e,r);if(i=ca(_%s),_===c?(a=this._repeat,i=p):((a=~~(_/s))&&a===_/s&&(i=p,a--),p<i&&(i=p)),(u=this._yoyo&&1&a)&&(f=this._yEase,i=p-i),o=gt(this._tTime,s),i===d&&!r&&this._initted)return this;a!==o&&(l&&this._yEase&&Gb(l,u),!this.vars.repeatRefresh||u||this._lock||(this._lock=r=1,this.render(ca(s*a),!0).invalidate()._lock=0))}if(!this._initted){if(Da(this,t<0?t:i,r,e))return this._tTime=0,this;if(p!==this._dur)return this.render(t,e,r)}if(this._tTime=_,this._time=i,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=h=(f||this._ease)(i/p),this._from&&(this.ratio=h=1-h),i&&!d&&!e&&(Pt(this,"onStart"),this._tTime!==_))return this;for(n=this._pt;n;)n.r(h,n.d),n=n._next;l&&l.render(t<0?t:!i&&u?-U:l._dur*h,e,r)||this._startAt&&(this._zTime=t),this._onUpdate&&!e&&(t<0&&this._startAt&&this._startAt.render(t,!0,r),Pt(this,"onUpdate")),this._repeat&&a!==o&&this.vars.onRepeat&&!e&&this.parent&&Pt(this,"onRepeat"),_!==this._tDur&&_||this._tTime!==_||(t<0&&this._startAt&&!this._onUpdate&&this._startAt.render(t,!0,!0),!t&&p||!(_===this._tDur&&0<this._ts||!_&&this._ts<0)||ra(this,1),e||t<0&&!d||!_&&!d||(Pt(this,_===c?"onComplete":"onReverseComplete",!0),!this._prom||_<c&&0<this.timeScale()||this._prom()))}}else!function _renderZeroDurationTween(t,e,r,i){var n,a,s,o=t.ratio,u=e<0||!e&&(!t._start&&function _parentPlayheadIsBeforeStart(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||_parentPlayheadIsBeforeStart(e))}(t)&&(t._initted||!vt(t))||(t._ts<0||t._dp._ts<0)&&!vt(t))?0:1,h=t._rDelay,l=0;if(h&&t._repeat&&(l=Tt(0,t._tDur,e),a=gt(l,h),s=gt(t._tTime,h),t._yoyo&&1&a&&(u=1-u),a!==s&&(o=1-u,t.vars.repeatRefresh&&t._initted&&t.invalidate())),u!==o||i||t._zTime===U||!e&&t._zTime){if(!t._initted&&Da(t,e,i,r))return;for(s=t._zTime,t._zTime=e||(r?U:0),r=r||e&&!s,t.ratio=u,t._from&&(u=1-u),t._time=0,t._tTime=l,n=t._pt;n;)n.r(u,n.d),n=n._next;t._startAt&&e<0&&t._startAt.render(e,!0,!0),t._onUpdate&&!r&&Pt(t,"onUpdate"),l&&t._repeat&&!r&&t.parent&&Pt(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===u&&(u&&ra(t,1),r||(Pt(t,u?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)}(this,t,e,r);return this},e.targets=function targets(){return this._targets},e.invalidate=function invalidate(){return this._pt=this._op=this._startAt=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(),C.prototype.invalidate.call(this)},e.kill=function kill(t,e){if(void 0===e&&(e="all"),!(t||e&&"all"!==e))return this._lazy=this._pt=0,this.parent?kb(this):this;if(this.timeline){var r=this.timeline.totalDuration();return this.timeline.killTweensOf(t,e,Yt&&!0!==Yt.vars.overwrite)._first||kb(this),this.parent&&r!==this.timeline.totalDuration()&&Ia(this,this._dur*this.timeline._tDur/r,0,1),this}var i,n,a,s,u,h,l,f=this._targets,d=t?xt(t):f,c=this._ptLookup,p=this._pt;if((!e||"all"===e)&&function _arraysMatch(t,e){for(var r=t.length,i=r===e.length;i&&r--&&t[r]===e[r];);return r<0}(f,d))return"all"===e&&(this._pt=0),kb(this);for(i=this._op=this._op||[],"all"!==e&&(o(e)&&(u={},ba(e,function(t){return u[t]=1}),e=u),e=function _addAliasesToVars(t,e){var r,i,n,a,s=t[0]?_(t[0]).harness:0,o=s&&s.aliases;if(!o)return e;for(i in r=mt({},e),o)if(i in r)for(n=(a=o[i].split(",")).length;n--;)r[a[n]]=r[i];return r}(f,e)),l=f.length;l--;)if(~d.indexOf(f[l]))for(u in n=c[l],"all"===e?(i[l]=e,s=n,a={}):(a=i[l]=i[l]||{},s=e),s)(h=n&&n[u])&&("kill"in h.d&&!0!==h.d.kill(u)||qa(this,h,"_pt"),delete n[u]),"all"!==a&&(a[u]=1);return this._initted&&!this._pt&&p&&kb(this),this},Tween.to=function to(t,e,r){return new Tween(t,e,r)},Tween.from=function from(t,e){return Ma(1,arguments)},Tween.delayedCall=function delayedCall(t,e,r,i){return new Tween(e,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:t,onComplete:e,onReverseComplete:e,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:i})},Tween.fromTo=function fromTo(t,e,r){return Ma(2,arguments)},Tween.set=function set(t,e){return e.duration=0,e.repeatDelay||(e.repeat=0),new Tween(t,e)},Tween.killTweensOf=function killTweensOf(t,e,r){return R.killTweensOf(t,e,r)},Tween}(Nt);ia(Qt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),ba("staggerTo,staggerFrom,staggerFromTo",function(r){Qt[r]=function(){var t=new qt,e=wt.call(arguments,0);return e.splice("staggerFromTo"===r?5:4,0,0),t[r].apply(t,e)}});function bc(t,e,r){return t.setAttribute(e,r)}function jc(t,e,r,i){i.mSet(t,e,i.m.call(i.tween,r,i.mt),i)}var Gt=function _setterPlain(t,e,r){return t[e]=r},Kt=function _setterFunc(t,e,r){return t[e](r)},$t=function _setterFuncWithParam(t,e,r,i){return t[e](i.fp,r)},Jt=function _getSetter(t,e){return p(t[e])?Kt:r(t[e])&&t.setAttribute?bc:Gt},Zt=function _renderPlain(t,e){return e.set(e.t,e.p,Math.round(1e6*(e.s+e.c*t))/1e6,e)},Ht=function _renderBoolean(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},te=function _renderComplexString(t,e){var r=e._pt,i="";if(!t&&e.b)i=e.b;else if(1===t&&e.e)i=e.e;else{for(;r;)i=r.p+(r.m?r.m(r.s+r.c*t):Math.round(1e4*(r.s+r.c*t))/1e4)+i,r=r._next;i+=e.c}e.set(e.t,e.p,i,e)},ee=function _renderPropTweens(t,e){for(var r=e._pt;r;)r.r(t,r.d),r=r._next},re=function _addPluginModifier(t,e,r,i){for(var n,a=this._pt;a;)n=a._next,a.p===i&&a.modifier(t,e,r),a=n},ie=function _killPropTweensOf(t){for(var e,r,i=this._pt;i;)r=i._next,i.p===t&&!i.op||i.op===t?qa(this,i,"_pt"):i.dep||(e=1),i=r;return!e},ne=function _sortPropTweensByPriority(t){for(var e,r,i,n,a=t._pt;a;){for(e=a._next,r=i;r&&r.pr>a.pr;)r=r._next;(a._prev=r?r._prev:n)?a._prev._next=a:i=a,(a._next=r)?r._prev=a:n=a,a=e}t._pt=i},ae=(PropTween.prototype.modifier=function modifier(t,e,r){this.mSet=this.mSet||this.set,this.set=jc,this.m=t,this.mt=r,this.tween=e},PropTween);function PropTween(t,e,r,i,n,a,s,o,u){this.t=e,this.s=i,this.c=n,this.p=r,this.r=a||Zt,this.d=s||this,this.set=o||Gt,this.pr=u||0,(this._next=t)&&(t._prev=this)}ba(_t+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(t){return ut[t]=1}),ot.TweenMax=ot.TweenLite=Qt,ot.TimelineLite=ot.TimelineMax=qt,R=new qt({sortChildren:!1,defaults:L,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0}),Y.stringFilter=vb;var se={registerPlugin:function registerPlugin(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];e.forEach(function(t){return function _createPlugin(t){var e=(t=!t.name&&t.default||t).name,r=p(t),i=e&&!r&&t.init?function(){this._props=[]}:t,n={init:Q,render:ee,add:Xt,kill:ie,modifier:re,rawVars:0},a={targetTest:0,get:0,getSetter:Jt,aliases:{},register:0};if(Dt(),t!==i){if(ft[e])return;ia(i,ia(ma(t,n),a)),mt(i.prototype,mt(n,ma(t,a))),ft[i.prop=e]=i,t.targetTest&&(pt.push(i),ut[e]=1),e=("css"===e?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}P(e,i),t.register&&t.register(oe,i,ae)}(t)})},timeline:function timeline(t){return new qt(t)},getTweensOf:function getTweensOf(t,e){return R.getTweensOf(t,e)},getProperty:function getProperty(i,t,e,r){o(i)&&(i=xt(i)[0]);var n=_(i||{}).get,a=e?ha:ga;return"native"===e&&(e=""),i?t?a((ft[t]&&ft[t].get||n)(i,t,e,r)):function(t,e,r){return a((ft[t]&&ft[t].get||n)(i,t,e,r))}:i},quickSetter:function quickSetter(r,e,i){if(1<(r=xt(r)).length){var n=r.map(function(t){return oe.quickSetter(t,e,i)}),a=n.length;return function(t){for(var e=a;e--;)n[e](t)}}r=r[0]||{};var s=ft[e],o=_(r),u=o.harness&&(o.harness.aliases||{})[e]||e,h=s?function(t){var e=new s;d._pt=0,e.init(r,i?t+i:t,d,0,[r]),e.render(1,e),d._pt&&ee(1,d)}:o.set(r,u);return s?h:function(t){return h(r,u,i?t+i:t,o,1)}},isTweening:function isTweening(t){return 0<R.getTweensOf(t,!0).length},defaults:function defaults(t){return t&&t.ease&&(t.ease=Ft(t.ease,L.ease)),la(L,t||{})},config:function config(t){return la(Y,t||{})},registerEffect:function registerEffect(t){var i=t.name,n=t.effect,e=t.plugins,a=t.defaults,r=t.extendTimeline;(e||"").split(",").forEach(function(t){return t&&!ft[t]&&!ot[t]&&O(i+" effect requires "+t+" plugin.")}),dt[i]=function(t,e,r){return n(xt(t),ia(e||{},a),r)},r&&(qt.prototype[i]=function(t,e,r){return this.add(dt[i](t,s(e)?e:(r=e)&&{},this),r)})},registerEase:function registerEase(t,e){zt[t]=Ft(e)},parseEase:function parseEase(t,e){return arguments.length?Ft(t,e):zt},getById:function getById(t){return R.getById(t)},exportRoot:function exportRoot(e,r){void 0===e&&(e={});var i,n,a=new qt(e);for(a.smoothChildTiming=t(e.smoothChildTiming),R.remove(a),a._dp=0,a._time=a._tTime=R._time,i=R._first;i;)n=i._next,!r&&!i._dur&&i instanceof Qt&&i.vars.onComplete===i._targets[0]||Ba(a,i,i._start-i._delay),i=n;return Ba(R,a,0),a},utils:{wrap:function wrap(e,t,r){var i=t-e;return H(e)?cb(e,wrap(0,e.length),t):Na(r,function(t){return(i+(t-e)%i)%i+e})},wrapYoyo:function wrapYoyo(e,t,r){var i=t-e,n=2*i;return H(e)?cb(e,wrapYoyo(0,e.length-1),t):Na(r,function(t){return e+(i<(t=(n+(t-e)%n)%n||0)?n-t:t)})},distribute:Xa,random:$a,snap:Za,normalize:function normalize(t,e,r){return Ot(t,e,0,1,r)},getUnit:Pa,clamp:function clamp(e,r,t){return Na(t,function(t){return Tt(e,r,t)})},splitColor:qb,toArray:xt,selector:function selector(r){return r=xt(r)[0]||O("Invalid scope")||{},function(t){var e=r.current||r.nativeElement||r;return xt(t,e.querySelectorAll?e:e===r?O("Invalid scope")||a.createElement("div"):r)}},mapRange:Ot,pipe:function pipe(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return function(t){return e.reduce(function(t,e){return e(t)},t)}},unitize:function unitize(e,r){return function(t){return e(parseFloat(t))+(r||Pa(t))}},interpolate:function interpolate(e,r,t,i){var n=isNaN(e+r)?0:function(t){return(1-t)*e+t*r};if(!n){var a,s,u,h,l,f=o(e),d={};if(!0===t&&(i=1)&&(t=null),f)e={p:e},r={p:r};else if(H(e)&&!H(r)){for(u=[],h=e.length,l=h-2,s=1;s<h;s++)u.push(interpolate(e[s-1],e[s]));h--,n=function func(t){t*=h;var e=Math.min(l,~~t);return u[e](t-e)},t=r}else i||(e=mt(H(e)?[]:{},e));if(!u){for(a in r)Xt.call(d,e,a,"get",r[a]);n=function func(t){return ee(t,d)||(f?e.p:e)}}}return Na(t,n)},shuffle:Wa},install:M,effects:dt,ticker:St,updateRoot:qt.updateRoot,plugins:ft,globalTimeline:R,core:{PropTween:ae,globals:P,Tween:Qt,Timeline:qt,Animation:Nt,getCache:_,_removeLinkedListItem:qa,suppressOverwrites:function suppressOverwrites(t){return F=t}}};ba("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return se[t]=Qt[t]}),St.add(qt.updateRoot),d=se.to({},{duration:0});function nc(t,e){for(var r=t._pt;r&&r.p!==e&&r.op!==e&&r.fp!==e;)r=r._next;return r}function pc(t,n){return{name:t,rawVars:1,init:function init(t,i,e){e._onInit=function(t){var e,r;if(o(i)&&(e={},ba(i,function(t){return e[t]=1}),i=e),n){for(r in e={},i)e[r]=n(i[r]);i=e}!function _addModifiers(t,e){var r,i,n,a=t._targets;for(r in e)for(i=a.length;i--;)(n=(n=t._ptLookup[i][r])&&n.d)&&(n._pt&&(n=nc(n,r)),n&&n.modifier&&n.modifier(e[r],t,a[i],r))}(t,i)}}}}var oe=se.registerPlugin({name:"attr",init:function init(t,e,r,i,n){var a,s;for(a in e)(s=this.add(t,"setAttribute",(t.getAttribute(a)||0)+"",e[a],i,n,0,0,a))&&(s.op=a),this._props.push(a)}},{name:"endArray",init:function init(t,e){for(var r=e.length;r--;)this.add(t,r,t[r]||0,e[r])}},pc("roundProps",Ya),pc("modifiers"),pc("snap",Za))||se;Qt.version=qt.version=oe.version="3.7.1",l=1,u()&&Dt();function $c(t,e){return e.set(e.t,e.p,Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)}function _c(t,e){return e.set(e.t,e.p,1===t?e.e:Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)}function ad(t,e){return e.set(e.t,e.p,t?Math.round(1e4*(e.s+e.c*t))/1e4+e.u:e.b,e)}function bd(t,e){var r=e.s+e.c*t;e.set(e.t,e.p,~~(r+(r<0?-.5:.5))+e.u,e)}function cd(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)}function dd(t,e){return e.set(e.t,e.p,1!==t?e.b:e.e,e)}function ed(t,e,r){return t.style[e]=r}function fd(t,e,r){return t.style.setProperty(e,r)}function gd(t,e,r){return t._gsap[e]=r}function hd(t,e,r){return t._gsap.scaleX=t._gsap.scaleY=r}function id(t,e,r,i,n){var a=t._gsap;a.scaleX=a.scaleY=r,a.renderTransform(n,a)}function jd(t,e,r,i,n){var a=t._gsap;a[e]=r,a.renderTransform(n,a)}function nd(t,e){var r=he.createElementNS?he.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):he.createElement(t);return r.style?r:he.createElement(t)}function od(t,e,r){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Re,"-$1").toLowerCase())||i.getPropertyValue(e)||!r&&od(t,Ve(e)||e,1)||""}function rd(){(function _windowExists(){return"undefined"!=typeof window})()&&window.document&&(ue=window,he=ue.document,le=he.documentElement,de=nd("div")||{style:{}},nd("div"),Ye=Ve(Ye),Xe=Ye+"Origin",de.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",pe=!!Ve("perspective"),fe=1)}function sd(t){var e,r=nd("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,n=this.nextSibling,a=this.style.cssText;if(le.appendChild(r),r.appendChild(this),this.style.display="block",t)try{e=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=sd}catch(t){}else this._gsapBBox&&(e=this._gsapBBox());return i&&(n?i.insertBefore(this,n):i.appendChild(this)),le.removeChild(r),this.style.cssText=a,e}function td(t,e){for(var r=e.length;r--;)if(t.hasAttribute(e[r]))return t.getAttribute(e[r])}function ud(e){var r;try{r=e.getBBox()}catch(t){r=sd.call(e,!0)}return r&&(r.width||r.height)||e.getBBox===sd||(r=sd.call(e,!0)),!r||r.width||r.x||r.y?r:{x:+td(e,["x","cx","x1"])||0,y:+td(e,["y","cy","y1"])||0,width:0,height:0}}function vd(t){return!(!t.getCTM||t.parentNode&&!t.ownerSVGElement||!ud(t))}function wd(t,e){if(e){var r=t.style;e in Ie&&e!==Xe&&(e=Ye),r.removeProperty?("ms"!==e.substr(0,2)&&"webkit"!==e.substr(0,6)||(e="-"+e),r.removeProperty(e.replace(Re,"-$1").toLowerCase())):r.removeAttribute(e)}}function xd(t,e,r,i,n,a){var s=new ae(t._pt,e,r,0,1,a?dd:cd);return(t._pt=s).b=i,s.e=n,t._props.push(r),s}function zd(t,e,r,i){var n,a,s,o,u=parseFloat(r)||0,h=(r+"").trim().substr((u+"").length)||"px",l=de.style,f=Le.test(e),d="svg"===t.tagName.toLowerCase(),c=(d?"client":"offset")+(f?"Width":"Height"),p="px"===i,m="%"===i;return i===h||!u||je[i]||je[h]?u:("px"===h||p||(u=zd(t,e,r,"px")),o=t.getCTM&&vd(t),!m&&"%"!==h||!Ie[e]&&!~e.indexOf("adius")?(l[f?"width":"height"]=100+(p?h:i),a=~e.indexOf("adius")||"em"===i&&t.appendChild&&!d?t:t.parentNode,o&&(a=(t.ownerSVGElement||{}).parentNode),a&&a!==he&&a.appendChild||(a=he.body),(s=a._gsap)&&m&&s.width&&f&&s.time===St.time?ca(u/s.width*100):(!m&&"%"!==h||(l.position=od(t,"position")),a===t&&(l.position="static"),a.appendChild(de),n=de[c],a.removeChild(de),l.position="absolute",f&&m&&((s=_(a)).time=St.time,s.width=a[c]),ca(p?n*u/100:n&&u?100/n*u:0))):(n=o?t.getBBox()[f?"width":"height"]:t[c],ca(m?u/n*100:u/100*n)))}function Ad(t,e,r,i){var n;return fe||rd(),e in qe&&"transform"!==e&&~(e=qe[e]).indexOf(",")&&(e=e.split(",")[0]),Ie[e]&&"transform"!==e?(n=$e(t,i),n="transformOrigin"!==e?n[e]:n.svg?n.origin:Je(od(t,Xe))+" "+n.zOrigin+"px"):(n=t.style[e])&&"auto"!==n&&!i&&!~(n+"").indexOf("calc(")||(n=Qe[e]&&Qe[e](t,e,r)||od(t,e)||aa(t,e)||("opacity"===e?1:0)),r&&!~(n+"").trim().indexOf(" ")?zd(t,e,n,r)+r:n}function Bd(t,e,r,i){if(!r||"none"===r){var n=Ve(e,t,1),a=n&&od(t,n,1);a&&a!==r?(e=n,r=a):"borderColor"===e&&(r=od(t,"borderTopColor"))}var s,o,u,h,l,f,d,c,p,_,m,g,v=new ae(this._pt,t.style,e,0,1,te),y=0,b=0;if(v.b=r,v.e=i,r+="","auto"===(i+="")&&(t.style[e]=i,i=od(t,e)||i,t.style[e]=r),vb(s=[r,i]),i=s[1],u=(r=s[0]).match(rt)||[],(i.match(rt)||[]).length){for(;o=rt.exec(i);)d=o[0],p=i.substring(y,o.index),l?l=(l+1)%5:"rgba("!==p.substr(-5)&&"hsla("!==p.substr(-5)||(l=1),d!==(f=u[b++]||"")&&(h=parseFloat(f)||0,m=f.substr((h+"").length),(g="="===d.charAt(1)?+(d.charAt(0)+"1"):0)&&(d=d.substr(2)),c=parseFloat(d),_=d.substr((c+"").length),y=rt.lastIndex-_.length,_||(_=_||Y.units[e]||m,y===i.length&&(i+=_,v.e+=_)),m!==_&&(h=zd(t,e,f,_)||0),v._pt={_next:v._pt,p:p||1===b?p:",",s:h,c:g?g*c:c-h,m:l&&l<4||"zIndex"===e?Math.round:0});v.c=y<i.length?i.substring(y,i.length):""}else v.r="display"===e&&"none"===i?dd:cd;return nt.test(i)&&(v.e=0),this._pt=v}function Dd(t){var e=t.split(" "),r=e[0],i=e[1]||"50%";return"top"!==r&&"bottom"!==r&&"left"!==i&&"right"!==i||(t=r,r=i,i=t),e[0]=We[r]||r,e[1]=We[i]||i,e.join(" ")}function Ed(t,e){if(e.tween&&e.tween._time===e.tween._dur){var r,i,n,a=e.t,s=a.style,o=e.u,u=a._gsap;if("all"===o||!0===o)s.cssText="",i=1;else for(n=(o=o.split(",")).length;-1<--n;)r=o[n],Ie[r]&&(i=1,r="transformOrigin"===r?Xe:Ye),wd(a,r);i&&(wd(a,Ye),u&&(u.svg&&a.removeAttribute("transform"),$e(a,1),u.uncache=1))}}function Id(t){return"matrix(1, 0, 0, 1, 0, 0)"===t||"none"===t||!t}function Jd(t){var e=od(t,Ye);return Id(e)?Ge:e.substr(7).match(et).map(ca)}function Kd(t,e){var r,i,n,a,s=t._gsap||_(t),o=t.style,u=Jd(t);return s.svg&&t.getAttribute("transform")?"1,0,0,1,0,0"===(u=[(n=t.transform.baseVal.consolidate().matrix).a,n.b,n.c,n.d,n.e,n.f]).join(",")?Ge:u:(u!==Ge||t.offsetParent||t===le||s.svg||(n=o.display,o.display="block",(r=t.parentNode)&&t.offsetParent||(a=1,i=t.nextSibling,le.appendChild(t)),u=Jd(t),n?o.display=n:wd(t,"display"),a&&(i?r.insertBefore(t,i):r?r.appendChild(t):le.removeChild(t))),e&&6<u.length?[u[0],u[1],u[4],u[5],u[12],u[13]]:u)}function Ld(t,e,r,i,n,a){var s,o,u,h=t._gsap,l=n||Kd(t,!0),f=h.xOrigin||0,d=h.yOrigin||0,c=h.xOffset||0,p=h.yOffset||0,_=l[0],m=l[1],g=l[2],v=l[3],y=l[4],b=l[5],T=e.split(" "),w=parseFloat(T[0])||0,x=parseFloat(T[1])||0;r?l!==Ge&&(o=_*v-m*g)&&(u=w*(-m/o)+x*(_/o)-(_*b-m*y)/o,w=w*(v/o)+x*(-g/o)+(g*b-v*y)/o,x=u):(w=(s=ud(t)).x+(~T[0].indexOf("%")?w/100*s.width:w),x=s.y+(~(T[1]||T[0]).indexOf("%")?x/100*s.height:x)),i||!1!==i&&h.smooth?(y=w-f,b=x-d,h.xOffset=c+(y*_+b*g)-y,h.yOffset=p+(y*m+b*v)-b):h.xOffset=h.yOffset=0,h.xOrigin=w,h.yOrigin=x,h.smooth=!!i,h.origin=e,h.originIsAbsolute=!!r,t.style[Xe]="0px 0px",a&&(xd(a,h,"xOrigin",f,w),xd(a,h,"yOrigin",d,x),xd(a,h,"xOffset",c,h.xOffset),xd(a,h,"yOffset",p,h.yOffset)),t.setAttribute("data-svg-origin",w+" "+x)}function Od(t,e,r){var i=Pa(e);return ca(parseFloat(e)+parseFloat(zd(t,"x",r+"px",i)))+i}function Vd(t,e,r,i,n,a){var s,u,h=360,l=o(n),f=parseFloat(n)*(l&&~n.indexOf("rad")?Ee:1),d=a?f*a:f-i,c=i+d+"deg";return l&&("short"===(s=n.split("_")[1])&&(d%=h)!==d%180&&(d+=d<0?h:-h),"cw"===s&&d<0?d=(d+36e9)%h-~~(d/h)*h:"ccw"===s&&0<d&&(d=(d-36e9)%h-~~(d/h)*h)),t._pt=u=new ae(t._pt,e,r,i,d,_c),u.e=c,u.u="deg",t._props.push(r),u}function Wd(t,e){for(var r in e)t[r]=e[r];return t}function Xd(t,e,r){var i,n,a,s,o,u,h,l=Wd({},r._gsap),f=r.style;for(n in l.svg?(a=r.getAttribute("transform"),r.setAttribute("transform",""),f[Ye]=e,i=$e(r,1),wd(r,Ye),r.setAttribute("transform",a)):(a=getComputedStyle(r)[Ye],f[Ye]=e,i=$e(r,1),f[Ye]=a),Ie)(a=l[n])!==(s=i[n])&&"perspective,force3D,transformOrigin,svgOrigin".indexOf(n)<0&&(o=Pa(a)!==(h=Pa(s))?zd(r,n,a,h):parseFloat(a),u=parseFloat(s),t._pt=new ae(t._pt,i,n,o,u-o,$c),t._pt.u=h||0,t._props.push(n));Wd(i,l)}var ue,he,le,fe,de,ce,pe,_e=zt.Power0,me=zt.Power1,ge=zt.Power2,ve=zt.Power3,ye=zt.Power4,be=zt.Linear,Te=zt.Quad,we=zt.Cubic,xe=zt.Quart,Oe=zt.Quint,Pe=zt.Strong,ke=zt.Elastic,Me=zt.Back,Ae=zt.SteppedEase,Ce=zt.Bounce,Se=zt.Sine,De=zt.Expo,ze=zt.Circ,Ie={},Ee=180/Math.PI,Be=Math.PI/180,Fe=Math.atan2,Re=/([A-Z])/g,Le=/(?:left|right|width|margin|padding|x)/i,Ne=/[\s,\(]\S/,qe={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ye="transform",Xe=Ye+"Origin",Ue="O,Moz,ms,Ms,Webkit".split(","),Ve=function _checkPropPrefix(t,e,r){var i=(e||de).style,n=5;if(t in i&&!r)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);n--&&!(Ue[n]+t in i););return n<0?null:(3===n?"ms":0<=n?Ue[n]:"")+t},je={deg:1,rad:1,turn:1},We={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Qe={clearProps:function clearProps(t,e,r,i,n){if("isFromStart"!==n.data){var a=t._pt=new ae(t._pt,e,r,0,0,Ed);return a.u=i,a.pr=-10,a.tween=n,t._props.push(r),1}}},Ge=[1,0,0,1,0,0],Ke={},$e=function _parseTransform(t,e){var r=t._gsap||new Lt(t);if("x"in r&&!e&&!r.uncache)return r;var i,n,a,s,o,u,h,l,f,d,c,p,_,m,g,v,y,b,T,w,x,O,P,k,M,A,C,S,D,z,I,E,B=t.style,F=r.scaleX<0,R="deg",L=od(t,Xe)||"0";return i=n=a=u=h=l=f=d=c=0,s=o=1,r.svg=!(!t.getCTM||!vd(t)),m=Kd(t,r.svg),r.svg&&(k=(!r.uncache||"0px 0px"===L)&&!e&&t.getAttribute("data-svg-origin"),Ld(t,k||L,!!k||r.originIsAbsolute,!1!==r.smooth,m)),p=r.xOrigin||0,_=r.yOrigin||0,m!==Ge&&(b=m[0],T=m[1],w=m[2],x=m[3],i=O=m[4],n=P=m[5],6===m.length?(s=Math.sqrt(b*b+T*T),o=Math.sqrt(x*x+w*w),u=b||T?Fe(T,b)*Ee:0,(f=w||x?Fe(w,x)*Ee+u:0)&&(o*=Math.abs(Math.cos(f*Be))),r.svg&&(i-=p-(p*b+_*w),n-=_-(p*T+_*x))):(E=m[6],z=m[7],C=m[8],S=m[9],D=m[10],I=m[11],i=m[12],n=m[13],a=m[14],h=(g=Fe(E,D))*Ee,g&&(k=O*(v=Math.cos(-g))+C*(y=Math.sin(-g)),M=P*v+S*y,A=E*v+D*y,C=O*-y+C*v,S=P*-y+S*v,D=E*-y+D*v,I=z*-y+I*v,O=k,P=M,E=A),l=(g=Fe(-w,D))*Ee,g&&(v=Math.cos(-g),I=x*(y=Math.sin(-g))+I*v,b=k=b*v-C*y,T=M=T*v-S*y,w=A=w*v-D*y),u=(g=Fe(T,b))*Ee,g&&(k=b*(v=Math.cos(g))+T*(y=Math.sin(g)),M=O*v+P*y,T=T*v-b*y,P=P*v-O*y,b=k,O=M),h&&359.9<Math.abs(h)+Math.abs(u)&&(h=u=0,l=180-l),s=ca(Math.sqrt(b*b+T*T+w*w)),o=ca(Math.sqrt(P*P+E*E)),g=Fe(O,P),f=2e-4<Math.abs(g)?g*Ee:0,c=I?1/(I<0?-I:I):0),r.svg&&(k=t.getAttribute("transform"),r.forceCSS=t.setAttribute("transform","")||!Id(od(t,Ye)),k&&t.setAttribute("transform",k))),90<Math.abs(f)&&Math.abs(f)<270&&(F?(s*=-1,f+=u<=0?180:-180,u+=u<=0?180:-180):(o*=-1,f+=f<=0?180:-180)),r.x=i-((r.xPercent=i&&(r.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-i)?-50:0)))?t.offsetWidth*r.xPercent/100:0)+"px",r.y=n-((r.yPercent=n&&(r.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-n)?-50:0)))?t.offsetHeight*r.yPercent/100:0)+"px",r.z=a+"px",r.scaleX=ca(s),r.scaleY=ca(o),r.rotation=ca(u)+R,r.rotationX=ca(h)+R,r.rotationY=ca(l)+R,r.skewX=f+R,r.skewY=d+R,r.transformPerspective=c+"px",(r.zOrigin=parseFloat(L.split(" ")[2])||0)&&(B[Xe]=Je(L)),r.xOffset=r.yOffset=0,r.force3D=Y.force3D,r.renderTransform=r.svg?ir:pe?rr:Ze,r.uncache=0,r},Je=function _firstTwoOnly(t){return(t=t.split(" "))[0]+" "+t[1]},Ze=function _renderNon3DTransforms(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,rr(t,e)},He="0deg",tr="0px",er=") ",rr=function _renderCSSTransforms(t,e){var r=e||this,i=r.xPercent,n=r.yPercent,a=r.x,s=r.y,o=r.z,u=r.rotation,h=r.rotationY,l=r.rotationX,f=r.skewX,d=r.skewY,c=r.scaleX,p=r.scaleY,_=r.transformPerspective,m=r.force3D,g=r.target,v=r.zOrigin,y="",b="auto"===m&&t&&1!==t||!0===m;if(v&&(l!==He||h!==He)){var T,w=parseFloat(h)*Be,x=Math.sin(w),O=Math.cos(w);w=parseFloat(l)*Be,T=Math.cos(w),a=Od(g,a,x*T*-v),s=Od(g,s,-Math.sin(w)*-v),o=Od(g,o,O*T*-v+v)}_!==tr&&(y+="perspective("+_+er),(i||n)&&(y+="translate("+i+"%, "+n+"%) "),!b&&a===tr&&s===tr&&o===tr||(y+=o!==tr||b?"translate3d("+a+", "+s+", "+o+") ":"translate("+a+", "+s+er),u!==He&&(y+="rotate("+u+er),h!==He&&(y+="rotateY("+h+er),l!==He&&(y+="rotateX("+l+er),f===He&&d===He||(y+="skew("+f+", "+d+er),1===c&&1===p||(y+="scale("+c+", "+p+er),g.style[Ye]=y||"translate(0, 0)"},ir=function _renderSVGTransforms(t,e){var r,i,n,a,s,o=e||this,u=o.xPercent,h=o.yPercent,l=o.x,f=o.y,d=o.rotation,c=o.skewX,p=o.skewY,_=o.scaleX,m=o.scaleY,g=o.target,v=o.xOrigin,y=o.yOrigin,b=o.xOffset,T=o.yOffset,w=o.forceCSS,x=parseFloat(l),O=parseFloat(f);d=parseFloat(d),c=parseFloat(c),(p=parseFloat(p))&&(c+=p=parseFloat(p),d+=p),d||c?(d*=Be,c*=Be,r=Math.cos(d)*_,i=Math.sin(d)*_,n=Math.sin(d-c)*-m,a=Math.cos(d-c)*m,c&&(p*=Be,s=Math.tan(c-p),n*=s=Math.sqrt(1+s*s),a*=s,p&&(s=Math.tan(p),r*=s=Math.sqrt(1+s*s),i*=s)),r=ca(r),i=ca(i),n=ca(n),a=ca(a)):(r=_,a=m,i=n=0),(x&&!~(l+"").indexOf("px")||O&&!~(f+"").indexOf("px"))&&(x=zd(g,"x",l,"px"),O=zd(g,"y",f,"px")),(v||y||b||T)&&(x=ca(x+v-(v*r+y*n)+b),O=ca(O+y-(v*i+y*a)+T)),(u||h)&&(s=g.getBBox(),x=ca(x+u/100*s.width),O=ca(O+h/100*s.height)),s="matrix("+r+","+i+","+n+","+a+","+x+","+O+")",g.setAttribute("transform",s),w&&(g.style[Ye]=s)};ba("padding,margin,Width,Radius",function(e,r){var t="Right",i="Bottom",n="Left",o=(r<3?["Top",t,i,n]:["Top"+n,"Top"+t,i+t,i+n]).map(function(t){return r<2?e+t:"border"+t+e});Qe[1<r?"border"+e:e]=function(e,t,r,i,n){var a,s;if(arguments.length<4)return a=o.map(function(t){return Ad(e,t,r)}),5===(s=a.join(" ")).split(a[0]).length?a[0]:s;a=(i+"").split(" "),s={},o.forEach(function(t,e){return s[t]=a[e]=a[e]||a[(e-1)/2|0]}),e.init(t,s,n)}});var nr,ar,sr,or={name:"css",register:rd,targetTest:function targetTest(t){return t.style&&t.nodeType},init:function init(t,e,r,i,n){var a,s,o,u,h,l,f,d,c,p,_,m,g,v,y,b=this._props,T=t.style,w=r.vars.startAt;for(f in fe||rd(),e)if("autoRound"!==f&&(s=e[f],!ft[f]||!Sb(f,e,r,i,t,n)))if(h=typeof s,l=Qe[f],"function"===h&&(h=typeof(s=s.call(r,i,t,n))),"string"===h&&~s.indexOf("random(")&&(s=fb(s)),l)l(this,t,f,s,r)&&(y=1);else if("--"===f.substr(0,2))a=(getComputedStyle(t).getPropertyValue(f)+"").trim(),s+="",At.lastIndex=0,At.test(a)||(d=Pa(a),c=Pa(s)),c?d!==c&&(a=zd(t,f,a,c)+c):d&&(s+=d),this.add(T,"setProperty",a,s,i,n,0,0,f),b.push(f);else if("undefined"!==h){if(w&&f in w?(a="function"==typeof w[f]?w[f].call(r,i,t,n):w[f],f in Y.units&&!Pa(a)&&(a+=Y.units[f]),"="===(a+"").charAt(1)&&(a=Ad(t,f))):a=Ad(t,f),u=parseFloat(a),(p="string"===h&&"="===s.charAt(1)?+(s.charAt(0)+"1"):0)&&(s=s.substr(2)),o=parseFloat(s),f in qe&&("autoAlpha"===f&&(1===u&&"hidden"===Ad(t,"visibility")&&o&&(u=0),xd(this,T,"visibility",u?"inherit":"hidden",o?"inherit":"hidden",!o)),"scale"!==f&&"transform"!==f&&~(f=qe[f]).indexOf(",")&&(f=f.split(",")[0])),_=f in Ie)if(m||((g=t._gsap).renderTransform&&!e.parseTransform||$e(t,e.parseTransform),v=!1!==e.smoothOrigin&&g.smooth,(m=this._pt=new ae(this._pt,T,Ye,0,1,g.renderTransform,g,0,-1)).dep=1),"scale"===f)this._pt=new ae(this._pt,g,"scaleY",g.scaleY,(p?p*o:o-g.scaleY)||0),b.push("scaleY",f),f+="X";else{if("transformOrigin"===f){s=Dd(s),g.svg?Ld(t,s,0,v,0,this):((c=parseFloat(s.split(" ")[2])||0)!==g.zOrigin&&xd(this,g,"zOrigin",g.zOrigin,c),xd(this,T,f,Je(a),Je(s)));continue}if("svgOrigin"===f){Ld(t,s,1,v,0,this);continue}if(f in Ke){Vd(this,g,f,u,s,p);continue}if("smoothOrigin"===f){xd(this,g,"smooth",g.smooth,s);continue}if("force3D"===f){g[f]=s;continue}if("transform"===f){Xd(this,s,t);continue}}else f in T||(f=Ve(f)||f);if(_||(o||0===o)&&(u||0===u)&&!Ne.test(s)&&f in T)o=o||0,(d=(a+"").substr((u+"").length))!==(c=Pa(s)||(f in Y.units?Y.units[f]:d))&&(u=zd(t,f,a,c)),this._pt=new ae(this._pt,_?g:T,f,u,p?p*o:o-u,_||"px"!==c&&"zIndex"!==f||!1===e.autoRound?$c:bd),this._pt.u=c||0,d!==c&&(this._pt.b=a,this._pt.r=ad);else if(f in T)Bd.call(this,t,f,a,s);else{if(!(f in t)){N(f,s);continue}this.add(t,f,a||t[f],s,i,n)}b.push(f)}y&&ne(this)},get:Ad,aliases:qe,getSetter:function getSetter(t,e,i){var n=qe[e];return n&&n.indexOf(",")<0&&(e=n),e in Ie&&e!==Xe&&(t._gsap.x||Ad(t,"x"))?i&&ce===i?"scale"===e?hd:gd:(ce=i||{})&&("scale"===e?id:jd):t.style&&!r(t.style[e])?ed:~e.indexOf("-")?fd:Jt(t,e)},core:{_removeProperty:wd,_getMatrix:Kd}};oe.utils.checkPrefix=Ve,sr=ba((nr="x,y,z,scale,scaleX,scaleY,xPercent,yPercent")+","+(ar="rotation,rotationX,rotationY,skewX,skewY")+",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",function(t){Ie[t]=1}),ba(ar,function(t){Y.units[t]="deg",Ke[t]=1}),qe[sr[13]]=nr+","+ar,ba("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",function(t){var e=t.split(":");qe[e[1]]=sr[e[0]]}),ba("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){Y.units[t]="px"}),oe.registerPlugin(or);var ur=oe.registerPlugin(or)||oe,hr=ur.core.Tween;e.Back=Me,e.Bounce=Ce,e.CSSPlugin=or,e.Circ=ze,e.Cubic=we,e.Elastic=ke,e.Expo=De,e.Linear=be,e.Power0=_e,e.Power1=me,e.Power2=ge,e.Power3=ve,e.Power4=ye,e.Quad=Te,e.Quart=xe,e.Quint=Oe,e.Sine=Se,e.SteppedEase=Ae,e.Strong=Pe,e.TimelineLite=qt,e.TimelineMax=qt,e.TweenLite=Qt,e.TweenMax=hr,e.default=ur,e.gsap=ur;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).window=e.window||{})}(this,function(e){function k(){return"undefined"!=typeof window}function l(){return u||k()&&(u=window.gsap)&&u.registerPlugin&&u}function m(e){return"string"==typeof e}function n(e){return"function"==typeof e}function o(e,t){var o="x"===t?"Width":"Height",n="scroll"+o,r="client"+o;return e===T||e===i||e===c?Math.max(i[n],c[n])-(T["inner"+o]||i[r]||c[r]):e[n]-e["offset"+o]}function p(e,t){var o="scroll"+("x"===t?"Left":"Top");return e===T&&(null!=e.pageXOffset?o="page"+t.toUpperCase()+"Offset":e=null!=i[o]?i:c),function(){return e[o]}}function r(e,t){if(!(e=f(e)[0])||!e.getBoundingClientRect)return console.warn("scrollTo target doesn't exist. Using 0")||{x:0,y:0};var o=e.getBoundingClientRect(),n=!t||t===T||t===c,r=n?{top:i.clientTop-(T.pageYOffset||i.scrollTop||c.scrollTop||0),left:i.clientLeft-(T.pageXOffset||i.scrollLeft||c.scrollLeft||0)}:t.getBoundingClientRect(),l={x:o.left-r.left,y:o.top-r.top};return!n&&t&&(l.x+=p(t,"x")(),l.y+=p(t,"y")()),l}function s(e,t,n,l,i){return isNaN(e)||"object"==typeof e?m(e)&&"="===e.charAt(1)?parseFloat(e.substr(2))*("-"===e.charAt(0)?-1:1)+l-i:"max"===e?o(t,n)-i:Math.min(o(t,n),r(e,t)[n]-i):parseFloat(e)-i}function t(){u=l(),k()&&u&&document.body&&(T=window,c=document.body,i=document.documentElement,f=u.utils.toArray,u.config({autoKillThreshold:7}),v=u.config(),a=1)}var u,a,T,i,c,f,v,y={version:"3.7.1",name:"scrollTo",rawVars:1,register:function register(e){u=e,t()},init:function init(e,o,r,l,i){a||t();var c=this,f=u.getProperty(e,"scrollSnapType");c.isWin=e===T,c.target=e,c.tween=r,o=function _clean(e,t,o,r){if(n(e)&&(e=e(t,o,r)),"object"!=typeof e)return m(e)&&"max"!==e&&"="!==e.charAt(1)?{x:e,y:e}:{y:e};if(e.nodeType)return{y:e,x:e};var l,i={};for(l in e)i[l]="onAutoKill"!==l&&n(e[l])?e[l](t,o,r):e[l];return i}(o,l,e,i),c.vars=o,c.autoKill=!!o.autoKill,c.getX=p(e,"x"),c.getY=p(e,"y"),c.x=c.xPrev=c.getX(),c.y=c.yPrev=c.getY(),f&&"none"!==f&&(c.snap=1,c.snapInline=e.style.scrollSnapType,e.style.scrollSnapType="none"),null!=o.x?(c.add(c,"x",c.x,s(o.x,e,"x",c.x,o.offsetX||0),l,i),c._props.push("scrollTo_x")):c.skipX=1,null!=o.y?(c.add(c,"y",c.y,s(o.y,e,"y",c.y,o.offsetY||0),l,i),c._props.push("scrollTo_y")):c.skipY=1},render:function render(e,t){for(var n,r,l,i,s,p=t._pt,c=t.target,f=t.tween,u=t.autoKill,a=t.xPrev,y=t.yPrev,d=t.isWin,x=t.snap,g=t.snapInline;p;)p.r(e,p.d),p=p._next;n=d||!t.skipX?t.getX():a,l=(r=d||!t.skipY?t.getY():y)-y,i=n-a,s=v.autoKillThreshold,t.x<0&&(t.x=0),t.y<0&&(t.y=0),u&&(!t.skipX&&(s<i||i<-s)&&n<o(c,"x")&&(t.skipX=1),!t.skipY&&(s<l||l<-s)&&r<o(c,"y")&&(t.skipY=1),t.skipX&&t.skipY&&(f.kill(),t.vars.onAutoKill&&t.vars.onAutoKill.apply(f,t.vars.onAutoKillParams||[]))),d?T.scrollTo(t.skipX?n:t.x,t.skipY?r:t.y):(t.skipY||(c.scrollTop=t.y),t.skipX||(c.scrollLeft=t.x)),!x||1!==e&&0!==e||(r=c.scrollTop,n=c.scrollLeft,g?c.style.scrollSnapType=g:c.style.removeProperty("scroll-snap-type"),c.scrollTop=r+1,c.scrollLeft=n+1,c.scrollTop=r,c.scrollLeft=n),t.xPrev=t.x,t.yPrev=t.y},kill:function kill(e){var t="scrollTo"===e;!t&&"scrollTo_x"!==e||(this.skipX=1),!t&&"scrollTo_y"!==e||(this.skipY=1)}};y.max=o,y.getOffset=r,y.buildGetter=p,l()&&u.registerPlugin(y),e.ScrollToPlugin=y,e.default=y;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = global || self, factory(global.window = global.window || {}));
}(this, (function (exports) {
	var gsap,
	    _coreInitted,
	    _win,
	    _doc,
	    _docEl,
	    _body,
	    _root,
	    _resizeDelay,
	    _raf,
	    _request,
	    _toArray,
	    _clamp,
	    _time2,
	    _syncInterval,
	    _refreshing,
	    _pointerIsDown,
	    _transformProp,
	    _i,
	    _prevWidth,
	    _prevHeight,
	    _autoRefresh,
	    _sort,
	    _suppressOverwrites,
	    _ignoreResize,
	    _limitCallbacks,
	    _startup = 1,
	    _proxies = [],
	    _scrollers = [],
	    _getTime = Date.now,
	    _time1 = _getTime(),
	    _lastScrollTime = 0,
	    _enabled = 1,
	    _passThrough = function _passThrough(v) {
	  return v;
	},
	    _round = function _round(value) {
	  return Math.round(value * 100000) / 100000 || 0;
	},
	    _windowExists = function _windowExists() {
	  return typeof window !== "undefined";
	},
	    _getGSAP = function _getGSAP() {
	  return gsap || _windowExists() && (gsap = window.gsap) && gsap.registerPlugin && gsap;
	},
	    _isViewport = function _isViewport(e) {
	  return !!~_root.indexOf(e);
	},
	    _getProxyProp = function _getProxyProp(element, property) {
	  return ~_proxies.indexOf(element) && _proxies[_proxies.indexOf(element) + 1][property];
	},
	    _getScrollFunc = function _getScrollFunc(element, _ref) {
	  var s = _ref.s,
	      sc = _ref.sc;

	  var i = _scrollers.indexOf(element),
	      offset = sc === _vertical.sc ? 1 : 2;

	  !~i && (i = _scrollers.push(element) - 1);
	  return _scrollers[i + offset] || (_scrollers[i + offset] = _getProxyProp(element, s) || (_isViewport(element) ? sc : function (value) {
	    return arguments.length ? element[s] = value : element[s];
	  }));
	},
	    _getBoundsFunc = function _getBoundsFunc(element) {
	  return _getProxyProp(element, "getBoundingClientRect") || (_isViewport(element) ? function () {
	    _winOffsets.width = _win.innerWidth;
	    _winOffsets.height = _win.innerHeight;
	    return _winOffsets;
	  } : function () {
	    return _getBounds(element);
	  });
	},
	    _getSizeFunc = function _getSizeFunc(scroller, isViewport, _ref2) {
	  var d = _ref2.d,
	      d2 = _ref2.d2,
	      a = _ref2.a;
	  return (a = _getProxyProp(scroller, "getBoundingClientRect")) ? function () {
	    return a()[d];
	  } : function () {
	    return (isViewport ? _win["inner" + d2] : scroller["client" + d2]) || 0;
	  };
	},
	    _getOffsetsFunc = function _getOffsetsFunc(element, isViewport) {
	  return !isViewport || ~_proxies.indexOf(element) ? _getBoundsFunc(element) : function () {
	    return _winOffsets;
	  };
	},
	    _maxScroll = function _maxScroll(element, _ref3) {
	  var s = _ref3.s,
	      d2 = _ref3.d2,
	      d = _ref3.d,
	      a = _ref3.a;
	  return (s = "scroll" + d2) && (a = _getProxyProp(element, s)) ? a() - _getBoundsFunc(element)()[d] : _isViewport(element) ? Math.max(_docEl[s], _body[s]) - (_win["inner" + d2] || _docEl["client" + d2] || _body["client" + d2]) : element[s] - element["offset" + d2];
	},
	    _iterateAutoRefresh = function _iterateAutoRefresh(func, events) {
	  for (var i = 0; i < _autoRefresh.length; i += 3) {
	    (!events || ~events.indexOf(_autoRefresh[i + 1])) && func(_autoRefresh[i], _autoRefresh[i + 1], _autoRefresh[i + 2]);
	  }
	},
	    _isString = function _isString(value) {
	  return typeof value === "string";
	},
	    _isFunction = function _isFunction(value) {
	  return typeof value === "function";
	},
	    _isNumber = function _isNumber(value) {
	  return typeof value === "number";
	},
	    _isObject = function _isObject(value) {
	  return typeof value === "object";
	},
	    _callIfFunc = function _callIfFunc(value) {
	  return _isFunction(value) && value();
	},
	    _combineFunc = function _combineFunc(f1, f2) {
	  return function () {
	    var result1 = _callIfFunc(f1),
	        result2 = _callIfFunc(f2);

	    return function () {
	      _callIfFunc(result1);

	      _callIfFunc(result2);
	    };
	  };
	},
	    _abs = Math.abs,
	    _scrollLeft = "scrollLeft",
	    _scrollTop = "scrollTop",
	    _left = "left",
	    _top = "top",
	    _right = "right",
	    _bottom = "bottom",
	    _width = "width",
	    _height = "height",
	    _Right = "Right",
	    _Left = "Left",
	    _Top = "Top",
	    _Bottom = "Bottom",
	    _padding = "padding",
	    _margin = "margin",
	    _Width = "Width",
	    _Height = "Height",
	    _px = "px",
	    _horizontal = {
	  s: _scrollLeft,
	  p: _left,
	  p2: _Left,
	  os: _right,
	  os2: _Right,
	  d: _width,
	  d2: _Width,
	  a: "x",
	  sc: function sc(value) {
	    return arguments.length ? _win.scrollTo(value, _vertical.sc()) : _win.pageXOffset || _doc[_scrollLeft] || _docEl[_scrollLeft] || _body[_scrollLeft] || 0;
	  }
	},
	    _vertical = {
	  s: _scrollTop,
	  p: _top,
	  p2: _Top,
	  os: _bottom,
	  os2: _Bottom,
	  d: _height,
	  d2: _Height,
	  a: "y",
	  op: _horizontal,
	  sc: function sc(value) {
	    return arguments.length ? _win.scrollTo(_horizontal.sc(), value) : _win.pageYOffset || _doc[_scrollTop] || _docEl[_scrollTop] || _body[_scrollTop] || 0;
	  }
	},
	    _getComputedStyle = function _getComputedStyle(element) {
	  return _win.getComputedStyle(element);
	},
	    _makePositionable = function _makePositionable(element) {
	  var position = _getComputedStyle(element).position;

	  element.style.position = position === "absolute" || position === "fixed" ? position : "relative";
	},
	    _setDefaults = function _setDefaults(obj, defaults) {
	  for (var p in defaults) {
	    p in obj || (obj[p] = defaults[p]);
	  }

	  return obj;
	},
	    _getBounds = function _getBounds(element, withoutTransforms) {
	  var tween = withoutTransforms && _getComputedStyle(element)[_transformProp] !== "matrix(1, 0, 0, 1, 0, 0)" && gsap.to(element, {
	    x: 0,
	    y: 0,
	    xPercent: 0,
	    yPercent: 0,
	    rotation: 0,
	    rotationX: 0,
	    rotationY: 0,
	    scale: 1,
	    skewX: 0,
	    skewY: 0
	  }).progress(1),
	      bounds = element.getBoundingClientRect();
	  tween && tween.progress(0).kill();
	  return bounds;
	},
	    _getSize = function _getSize(element, _ref4) {
	  var d2 = _ref4.d2;
	  return element["offset" + d2] || element["client" + d2] || 0;
	},
	    _getLabelRatioArray = function _getLabelRatioArray(timeline) {
	  var a = [],
	      labels = timeline.labels,
	      duration = timeline.duration(),
	      p;

	  for (p in labels) {
	    a.push(labels[p] / duration);
	  }

	  return a;
	},
	    _getClosestLabel = function _getClosestLabel(animation) {
	  return function (value) {
	    return gsap.utils.snap(_getLabelRatioArray(animation), value);
	  };
	},
	    _getLabelAtDirection = function _getLabelAtDirection(timeline) {
	  return function (value, st) {
	    var a = _getLabelRatioArray(timeline),
	        i;

	    a.sort(function (a, b) {
	      return a - b;
	    });

	    if (st.direction > 0) {
	      value -= 1e-4;

	      for (i = 0; i < a.length; i++) {
	        if (a[i] >= value) {
	          return a[i];
	        }
	      }

	      return a.pop();
	    } else {
	      i = a.length;
	      value += 1e-4;

	      while (i--) {
	        if (a[i] <= value) {
	          return a[i];
	        }
	      }
	    }

	    return a[0];
	  };
	},
	    _multiListener = function _multiListener(func, element, types, callback) {
	  return types.split(",").forEach(function (type) {
	    return func(element, type, callback);
	  });
	},
	    _addListener = function _addListener(element, type, func) {
	  return element.addEventListener(type, func, {
	    passive: true
	  });
	},
	    _removeListener = function _removeListener(element, type, func) {
	  return element.removeEventListener(type, func);
	},
	    _markerDefaults = {
	  startColor: "green",
	  endColor: "red",
	  indent: 0,
	  fontSize: "16px",
	  fontWeight: "normal"
	},
	    _defaults = {
	  toggleActions: "play",
	  anticipatePin: 0
	},
	    _keywords = {
	  top: 0,
	  left: 0,
	  center: 0.5,
	  bottom: 1,
	  right: 1
	},
	    _offsetToPx = function _offsetToPx(value, size) {
	  if (_isString(value)) {
	    var eqIndex = value.indexOf("="),
	        relative = ~eqIndex ? +(value.charAt(eqIndex - 1) + 1) * parseFloat(value.substr(eqIndex + 1)) : 0;

	    if (~eqIndex) {
	      value.indexOf("%") > eqIndex && (relative *= size / 100);
	      value = value.substr(0, eqIndex - 1);
	    }

	    value = relative + (value in _keywords ? _keywords[value] * size : ~value.indexOf("%") ? parseFloat(value) * size / 100 : parseFloat(value) || 0);
	  }

	  return value;
	},
	    _createMarker = function _createMarker(type, name, container, direction, _ref5, offset, matchWidthEl) {
	  var startColor = _ref5.startColor,
	      endColor = _ref5.endColor,
	      fontSize = _ref5.fontSize,
	      indent = _ref5.indent,
	      fontWeight = _ref5.fontWeight;

	  var e = _doc.createElement("div"),
	      useFixedPosition = _isViewport(container) || _getProxyProp(container, "pinType") === "fixed",
	      isScroller = type.indexOf("scroller") !== -1,
	      parent = useFixedPosition ? _body : container,
	      isStart = type.indexOf("start") !== -1,
	      color = isStart ? startColor : endColor,
	      css = "border-color:" + color + ";font-size:" + fontSize + ";color:" + color + ";font-weight:" + fontWeight + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";

	  css += "position:" + (isScroller && useFixedPosition ? "fixed;" : "absolute;");
	  (isScroller || !useFixedPosition) && (css += (direction === _vertical ? _right : _bottom) + ":" + (offset + parseFloat(indent)) + "px;");
	  matchWidthEl && (css += "box-sizing:border-box;text-align:left;width:" + matchWidthEl.offsetWidth + "px;");
	  e._isStart = isStart;
	  e.setAttribute("class", "gsap-marker-" + type);
	  e.style.cssText = css;
	  e.innerText = name || name === 0 ? type + "-" + name : type;
	  parent.children[0] ? parent.insertBefore(e, parent.children[0]) : parent.appendChild(e);
	  e._offset = e["offset" + direction.op.d2];

	  _positionMarker(e, 0, direction, isStart);

	  return e;
	},
	    _positionMarker = function _positionMarker(marker, start, direction, flipped) {
	  var vars = {
	    display: "block"
	  },
	      side = direction[flipped ? "os2" : "p2"],
	      oppositeSide = direction[flipped ? "p2" : "os2"];
	  marker._isFlipped = flipped;
	  vars[direction.a + "Percent"] = flipped ? -100 : 0;
	  vars[direction.a] = flipped ? "1px" : 0;
	  vars["border" + side + _Width] = 1;
	  vars["border" + oppositeSide + _Width] = 0;
	  vars[direction.p] = start + "px";
	  gsap.set(marker, vars);
	},
	    _triggers = [],
	    _ids = {},
	    _sync = function _sync() {
	  return _request || (_request = _raf(_updateAll));
	},
	    _onScroll = function _onScroll() {
	  if (!_request) {
	    _request = _raf(_updateAll);
	    _lastScrollTime || _dispatch("scrollStart");
	    _lastScrollTime = _getTime();
	  }
	},
	    _onResize = function _onResize() {
	  return !_refreshing && !_ignoreResize && !_doc.fullscreenElement && _resizeDelay.restart(true);
	},
	    _listeners = {},
	    _emptyArray = [],
	    _media = [],
	    _creatingMedia,
	    _lastMediaTick,
	    _onMediaChange = function _onMediaChange(e) {
	  var tick = gsap.ticker.frame,
	      matches = [],
	      i = 0,
	      index;

	  if (_lastMediaTick !== tick || _startup) {
	    _revertAll();

	    for (; i < _media.length; i += 4) {
	      index = _win.matchMedia(_media[i]).matches;

	      if (index !== _media[i + 3]) {
	        _media[i + 3] = index;
	        index ? matches.push(i) : _revertAll(1, _media[i]) || _isFunction(_media[i + 2]) && _media[i + 2]();
	      }
	    }

	    _revertRecorded();

	    for (i = 0; i < matches.length; i++) {
	      index = matches[i];
	      _creatingMedia = _media[index];
	      _media[index + 2] = _media[index + 1](e);
	    }

	    _creatingMedia = 0;
	    _coreInitted && _refreshAll(0, 1);
	    _lastMediaTick = tick;

	    _dispatch("matchMedia");
	  }
	},
	    _softRefresh = function _softRefresh() {
	  return _removeListener(ScrollTrigger, "scrollEnd", _softRefresh) || _refreshAll(true);
	},
	    _dispatch = function _dispatch(type) {
	  return _listeners[type] && _listeners[type].map(function (f) {
	    return f();
	  }) || _emptyArray;
	},
	    _savedStyles = [],
	    _revertRecorded = function _revertRecorded(media) {
	  for (var i = 0; i < _savedStyles.length; i += 5) {
	    if (!media || _savedStyles[i + 4] === media) {
	      _savedStyles[i].style.cssText = _savedStyles[i + 1];
	      _savedStyles[i].getBBox && _savedStyles[i].setAttribute("transform", _savedStyles[i + 2] || "");
	      _savedStyles[i + 3].uncache = 1;
	    }
	  }
	},
	    _revertAll = function _revertAll(kill, media) {
	  var trigger;

	  for (_i = 0; _i < _triggers.length; _i++) {
	    trigger = _triggers[_i];

	    if (!media || trigger.media === media) {
	      if (kill) {
	        trigger.kill(1);
	      } else {
	        trigger.revert();
	      }
	    }
	  }

	  media && _revertRecorded(media);
	  media || _dispatch("revert");
	},
	    _refreshingAll,
	    _refreshAll = function _refreshAll(force, skipRevert) {
	  if (_lastScrollTime && !force) {
	    _addListener(ScrollTrigger, "scrollEnd", _softRefresh);

	    return;
	  }

	  _refreshingAll = true;

	  var refreshInits = _dispatch("refreshInit");

	  _sort && ScrollTrigger.sort();
	  skipRevert || _revertAll();

	  _triggers.forEach(function (t) {
	    return t.refresh();
	  });

	  refreshInits.forEach(function (result) {
	    return result && result.render && result.render(-1);
	  });

	  _scrollers.forEach(function (obj) {
	    return typeof obj === "function" && (obj.rec = 0);
	  });

	  _resizeDelay.pause();

	  _refreshingAll = false;

	  _dispatch("refresh");
	},
	    _lastScroll = 0,
	    _direction = 1,
	    _updateAll = function _updateAll() {
	  if (!_refreshingAll) {
	    var l = _triggers.length,
	        time = _getTime(),
	        recordVelocity = time - _time1 >= 50,
	        scroll = l && _triggers[0].scroll();

	    _direction = _lastScroll > scroll ? -1 : 1;
	    _lastScroll = scroll;

	    if (recordVelocity) {
	      if (_lastScrollTime && time - _lastScrollTime > 200) {
	        _lastScrollTime = 0;

	        _dispatch("scrollEnd");
	      }

	      _time2 = _time1;
	      _time1 = time;
	    }

	    if (_direction < 0) {
	      _i = l;

	      while (_i-- > 0) {
	        _triggers[_i] && _triggers[_i].update(0, recordVelocity);
	      }

	      _direction = 1;
	    } else {
	      for (_i = 0; _i < l; _i++) {
	        _triggers[_i] && _triggers[_i].update(0, recordVelocity);
	      }
	    }

	    _request = 0;
	  }
	},
	    _propNamesToCopy = [_left, _top, _bottom, _right, _margin + _Bottom, _margin + _Right, _margin + _Top, _margin + _Left, "display", "flexShrink", "float", "zIndex", "grid-column-start", "grid-column-end", "grid-row-start", "grid-row-end", "grid-area", "justify-self", "align-self", "place-self"],
	    _stateProps = _propNamesToCopy.concat([_width, _height, "boxSizing", "max" + _Width, "max" + _Height, "position", _margin, _padding, _padding + _Top, _padding + _Right, _padding + _Bottom, _padding + _Left]),
	    _swapPinOut = function _swapPinOut(pin, spacer, state) {
	  _setState(state);

	  if (pin.parentNode === spacer) {
	    var parent = spacer.parentNode;

	    if (parent) {
	      parent.insertBefore(pin, spacer);
	      parent.removeChild(spacer);
	    }
	  }
	},
	    _swapPinIn = function _swapPinIn(pin, spacer, cs, spacerState) {
	  if (pin.parentNode !== spacer) {
	    var i = _propNamesToCopy.length,
	        spacerStyle = spacer.style,
	        pinStyle = pin.style,
	        p;

	    while (i--) {
	      p = _propNamesToCopy[i];
	      spacerStyle[p] = cs[p];
	    }

	    spacerStyle.position = cs.position === "absolute" ? "absolute" : "relative";
	    cs.display === "inline" && (spacerStyle.display = "inline-block");
	    pinStyle[_bottom] = pinStyle[_right] = "auto";
	    spacerStyle.overflow = "visible";
	    spacerStyle.boxSizing = "border-box";
	    spacerStyle[_width] = _getSize(pin, _horizontal) + _px;
	    spacerStyle[_height] = _getSize(pin, _vertical) + _px;
	    spacerStyle[_padding] = pinStyle[_margin] = pinStyle[_top] = pinStyle[_left] = "0";

	    _setState(spacerState);

	    pinStyle[_width] = pinStyle["max" + _Width] = cs[_width];
	    pinStyle[_height] = pinStyle["max" + _Height] = cs[_height];
	    pinStyle[_padding] = cs[_padding];
	    pin.parentNode.insertBefore(spacer, pin);
	    spacer.appendChild(pin);
	  }
	},
	    _capsExp = /([A-Z])/g,
	    _setState = function _setState(state) {
	  if (state) {
	    var style = state.t.style,
	        l = state.length,
	        i = 0,
	        p,
	        value;
	    (state.t._gsap || gsap.core.getCache(state.t)).uncache = 1;

	    for (; i < l; i += 2) {
	      value = state[i + 1];
	      p = state[i];

	      if (value) {
	        style[p] = value;
	      } else if (style[p]) {
	        style.removeProperty(p.replace(_capsExp, "-$1").toLowerCase());
	      }
	    }
	  }
	},
	    _getState = function _getState(element) {
	  var l = _stateProps.length,
	      style = element.style,
	      state = [],
	      i = 0;

	  for (; i < l; i++) {
	    state.push(_stateProps[i], style[_stateProps[i]]);
	  }

	  state.t = element;
	  return state;
	},
	    _copyState = function _copyState(state, override, omitOffsets) {
	  var result = [],
	      l = state.length,
	      i = omitOffsets ? 8 : 0,
	      p;

	  for (; i < l; i += 2) {
	    p = state[i];
	    result.push(p, p in override ? override[p] : state[i + 1]);
	  }

	  result.t = state.t;
	  return result;
	},
	    _winOffsets = {
	  left: 0,
	  top: 0
	},
	    _parsePosition = function _parsePosition(value, trigger, scrollerSize, direction, scroll, marker, markerScroller, self, scrollerBounds, borderWidth, useFixedPosition, scrollerMax) {
	  _isFunction(value) && (value = value(self));

	  if (_isString(value) && value.substr(0, 3) === "max") {
	    value = scrollerMax + (value.charAt(4) === "=" ? _offsetToPx("0" + value.substr(3), scrollerSize) : 0);
	  }

	  if (!_isNumber(value)) {
	    _isFunction(trigger) && (trigger = trigger(self));

	    var element = _toArray(trigger)[0] || _body,
	        bounds = _getBounds(element) || {},
	        offsets = value.split(" "),
	        localOffset,
	        globalOffset,
	        display;

	    if ((!bounds || !bounds.left && !bounds.top) && _getComputedStyle(element).display === "none") {
	      display = element.style.display;
	      element.style.display = "block";
	      bounds = _getBounds(element);
	      display ? element.style.display = display : element.style.removeProperty("display");
	    }

	    localOffset = _offsetToPx(offsets[0], bounds[direction.d]);
	    globalOffset = _offsetToPx(offsets[1] || "0", scrollerSize);
	    value = bounds[direction.p] - scrollerBounds[direction.p] - borderWidth + localOffset + scroll - globalOffset;
	    markerScroller && _positionMarker(markerScroller, globalOffset, direction, scrollerSize - globalOffset < 20 || markerScroller._isStart && globalOffset > 20);
	    scrollerSize -= scrollerSize - globalOffset;
	  } else if (markerScroller) {
	    _positionMarker(markerScroller, scrollerSize, direction, true);
	  }

	  if (marker) {
	    var position = value + scrollerSize,
	        isStart = marker._isStart;
	    scrollerMax = "scroll" + direction.d2;

	    _positionMarker(marker, position, direction, isStart && position > 20 || !isStart && (useFixedPosition ? Math.max(_body[scrollerMax], _docEl[scrollerMax]) : marker.parentNode[scrollerMax]) <= position + 1);

	    if (useFixedPosition) {
	      scrollerBounds = _getBounds(markerScroller);
	      useFixedPosition && (marker.style[direction.op.p] = scrollerBounds[direction.op.p] - direction.op.m - marker._offset + _px);
	    }
	  }

	  return Math.round(value);
	},
	    _prefixExp = /(?:webkit|moz|length|cssText|inset)/i,
	    _reparent = function _reparent(element, parent, top, left) {
	  if (element.parentNode !== parent) {
	    var style = element.style,
	        p,
	        cs;

	    if (parent === _body) {
	      element._stOrig = style.cssText;
	      cs = _getComputedStyle(element);

	      for (p in cs) {
	        if (!+p && !_prefixExp.test(p) && cs[p] && typeof style[p] === "string" && p !== "0") {
	          style[p] = cs[p];
	        }
	      }

	      style.top = top;
	      style.left = left;
	    } else {
	      style.cssText = element._stOrig;
	    }

	    gsap.core.getCache(element).uncache = 1;
	    parent.appendChild(element);
	  }
	},
	    _getTweenCreator = function _getTweenCreator(scroller, direction) {
	  var getScroll = _getScrollFunc(scroller, direction),
	      prop = "_scroll" + direction.p2,
	      lastScroll1,
	      lastScroll2,
	      getTween = function getTween(scrollTo, vars, initialValue, change1, change2) {
	    var tween = getTween.tween,
	        onComplete = vars.onComplete,
	        modifiers = {};
	    tween && tween.kill();
	    lastScroll1 = Math.round(initialValue);
	    vars[prop] = scrollTo;
	    vars.modifiers = modifiers;

	    modifiers[prop] = function (value) {
	      value = _round(getScroll());

	      if (value !== lastScroll1 && value !== lastScroll2 && Math.abs(value - lastScroll1) > 2) {
	        tween.kill();
	        getTween.tween = 0;
	      } else {
	        value = initialValue + change1 * tween.ratio + change2 * tween.ratio * tween.ratio;
	      }

	      lastScroll2 = lastScroll1;
	      return lastScroll1 = _round(value);
	    };

	    vars.onComplete = function () {
	      getTween.tween = 0;
	      onComplete && onComplete.call(tween);
	    };

	    tween = getTween.tween = gsap.to(scroller, vars);
	    return tween;
	  };

	  scroller[prop] = getScroll;
	  scroller.addEventListener("wheel", function () {
	    return getTween.tween && getTween.tween.kill() && (getTween.tween = 0);
	  }, {
	    passive: true
	  });
	  return getTween;
	};

	_horizontal.op = _vertical;
	var ScrollTrigger = function () {
	  function ScrollTrigger(vars, animation) {
	    _coreInitted || ScrollTrigger.register(gsap) || console.warn("Please gsap.registerPlugin(ScrollTrigger)");
	    this.init(vars, animation);
	  }

	  var _proto = ScrollTrigger.prototype;

	  _proto.init = function init(vars, animation) {
	    this.progress = this.start = 0;
	    this.vars && this.kill(1);

	    if (!_enabled) {
	      this.update = this.refresh = this.kill = _passThrough;
	      return;
	    }

	    vars = _setDefaults(_isString(vars) || _isNumber(vars) || vars.nodeType ? {
	      trigger: vars
	    } : vars, _defaults);

	    var direction = vars.horizontal ? _horizontal : _vertical,
	        _vars = vars,
	        onUpdate = _vars.onUpdate,
	        toggleClass = _vars.toggleClass,
	        id = _vars.id,
	        onToggle = _vars.onToggle,
	        onRefresh = _vars.onRefresh,
	        scrub = _vars.scrub,
	        trigger = _vars.trigger,
	        pin = _vars.pin,
	        pinSpacing = _vars.pinSpacing,
	        invalidateOnRefresh = _vars.invalidateOnRefresh,
	        anticipatePin = _vars.anticipatePin,
	        onScrubComplete = _vars.onScrubComplete,
	        onSnapComplete = _vars.onSnapComplete,
	        once = _vars.once,
	        snap = _vars.snap,
	        pinReparent = _vars.pinReparent,
	        isToggle = !scrub && scrub !== 0,
	        scroller = _toArray(vars.scroller || _win)[0],
	        scrollerCache = gsap.core.getCache(scroller),
	        isViewport = _isViewport(scroller),
	        useFixedPosition = "pinType" in vars ? vars.pinType === "fixed" : isViewport || _getProxyProp(scroller, "pinType") === "fixed",
	        callbacks = [vars.onEnter, vars.onLeave, vars.onEnterBack, vars.onLeaveBack],
	        toggleActions = isToggle && vars.toggleActions.split(" "),
	        markers = "markers" in vars ? vars.markers : _defaults.markers,
	        borderWidth = isViewport ? 0 : parseFloat(_getComputedStyle(scroller)["border" + direction.p2 + _Width]) || 0,
	        self = this,
	        onRefreshInit = vars.onRefreshInit && function () {
	      return vars.onRefreshInit(self);
	    },
	        getScrollerSize = _getSizeFunc(scroller, isViewport, direction),
	        getScrollerOffsets = _getOffsetsFunc(scroller, isViewport),
	        lastSnap = 0,
	        tweenTo,
	        pinCache,
	        snapFunc,
	        scroll1,
	        scroll2,
	        start,
	        end,
	        markerStart,
	        markerEnd,
	        markerStartTrigger,
	        markerEndTrigger,
	        markerVars,
	        change,
	        pinOriginalState,
	        pinActiveState,
	        pinState,
	        spacer,
	        offset,
	        pinGetter,
	        pinSetter,
	        pinStart,
	        pinChange,
	        spacingStart,
	        spacerState,
	        markerStartSetter,
	        markerEndSetter,
	        cs,
	        snap1,
	        snap2,
	        scrubTween,
	        scrubSmooth,
	        snapDurClamp,
	        snapDelayedCall,
	        prevProgress,
	        prevScroll,
	        prevAnimProgress;

	    self.media = _creatingMedia;
	    anticipatePin *= 45;
	    self.scroller = scroller;
	    self.scroll = _getScrollFunc(scroller, direction);
	    scroll1 = self.scroll();
	    self.vars = vars;
	    animation = animation || vars.animation;
	    "refreshPriority" in vars && (_sort = 1);
	    scrollerCache.tweenScroll = scrollerCache.tweenScroll || {
	      top: _getTweenCreator(scroller, _vertical),
	      left: _getTweenCreator(scroller, _horizontal)
	    };
	    self.tweenTo = tweenTo = scrollerCache.tweenScroll[direction.p];

	    if (animation) {
	      animation.vars.lazy = false;
	      animation._initted || animation.vars.immediateRender !== false && vars.immediateRender !== false && animation.render(0, true, true);
	      self.animation = animation.pause();
	      animation.scrollTrigger = self;
	      scrubSmooth = _isNumber(scrub) && scrub;
	      scrubSmooth && (scrubTween = gsap.to(animation, {
	        ease: "power3",
	        duration: scrubSmooth,
	        onComplete: function onComplete() {
	          return onScrubComplete && onScrubComplete(self);
	        }
	      }));
	      snap1 = 0;
	      id || (id = animation.vars.id);
	    }

	    _triggers.push(self);

	    if (snap) {
	      if (!_isObject(snap) || snap.push) {
	        snap = {
	          snapTo: snap
	        };
	      }

	      "scrollBehavior" in _body.style && gsap.set(isViewport ? [_body, _docEl] : scroller, {
	        scrollBehavior: "auto"
	      });
	      snapFunc = _isFunction(snap.snapTo) ? snap.snapTo : snap.snapTo === "labels" ? _getClosestLabel(animation) : snap.snapTo === "labelsDirectional" ? _getLabelAtDirection(animation) : gsap.utils.snap(snap.snapTo);
	      snapDurClamp = snap.duration || {
	        min: 0.1,
	        max: 2
	      };
	      snapDurClamp = _isObject(snapDurClamp) ? _clamp(snapDurClamp.min, snapDurClamp.max) : _clamp(snapDurClamp, snapDurClamp);
	      snapDelayedCall = gsap.delayedCall(snap.delay || scrubSmooth / 2 || 0.1, function () {
	        if (Math.abs(self.getVelocity()) < 10 && !_pointerIsDown && lastSnap !== self.scroll()) {
	          var totalProgress = animation && !isToggle ? animation.totalProgress() : self.progress,
	              velocity = (totalProgress - snap2) / (_getTime() - _time2) * 1000 || 0,
	              change1 = gsap.utils.clamp(-self.progress, 1 - self.progress, _abs(velocity / 2) * velocity / 0.185),
	              naturalEnd = self.progress + (snap.inertia === false ? 0 : change1),
	              endValue = _clamp(0, 1, snapFunc(naturalEnd, self)),
	              scroll = self.scroll(),
	              endScroll = Math.round(start + endValue * change),
	              _snap = snap,
	              onStart = _snap.onStart,
	              _onInterrupt = _snap.onInterrupt,
	              _onComplete = _snap.onComplete,
	              tween = tweenTo.tween;

	          if (scroll <= end && scroll >= start && endScroll !== scroll) {
	            if (tween && !tween._initted && tween.data <= Math.abs(endScroll - scroll)) {
	              return;
	            }

	            if (snap.inertia === false) {
	              change1 = endValue - self.progress;
	            }

	            tweenTo(endScroll, {
	              duration: snapDurClamp(_abs(Math.max(_abs(naturalEnd - totalProgress), _abs(endValue - totalProgress)) * 0.185 / velocity / 0.05 || 0)),
	              ease: snap.ease || "power3",
	              data: Math.abs(endScroll - scroll),
	              onInterrupt: function onInterrupt() {
	                return snapDelayedCall.restart(true) && _onInterrupt && _onInterrupt(self);
	              },
	              onComplete: function onComplete() {
	                lastSnap = self.scroll();
	                snap1 = snap2 = animation && !isToggle ? animation.totalProgress() : self.progress;
	                onSnapComplete && onSnapComplete(self);
	                _onComplete && _onComplete(self);
	              }
	            }, scroll, change1 * change, endScroll - scroll - change1 * change);
	            onStart && onStart(self, tweenTo.tween);
	          }
	        } else if (self.isActive) {
	          snapDelayedCall.restart(true);
	        }
	      }).pause();
	    }

	    id && (_ids[id] = self);
	    trigger = self.trigger = _toArray(trigger || pin)[0];
	    pin = pin === true ? trigger : _toArray(pin)[0];
	    _isString(toggleClass) && (toggleClass = {
	      targets: trigger,
	      className: toggleClass
	    });

	    if (pin) {
	      pinSpacing === false || pinSpacing === _margin || (pinSpacing = !pinSpacing && _getComputedStyle(pin.parentNode).display === "flex" ? false : _padding);
	      self.pin = pin;
	      vars.force3D !== false && gsap.set(pin, {
	        force3D: true
	      });
	      pinCache = gsap.core.getCache(pin);

	      if (!pinCache.spacer) {
	        pinCache.spacer = spacer = _doc.createElement("div");
	        spacer.setAttribute("class", "pin-spacer" + (id ? " pin-spacer-" + id : ""));
	        pinCache.pinState = pinOriginalState = _getState(pin);
	      } else {
	        pinOriginalState = pinCache.pinState;
	      }

	      self.spacer = spacer = pinCache.spacer;
	      cs = _getComputedStyle(pin);
	      spacingStart = cs[pinSpacing + direction.os2];
	      pinGetter = gsap.getProperty(pin);
	      pinSetter = gsap.quickSetter(pin, direction.a, _px);

	      _swapPinIn(pin, spacer, cs);

	      pinState = _getState(pin);
	    }

	    if (markers) {
	      markerVars = _isObject(markers) ? _setDefaults(markers, _markerDefaults) : _markerDefaults;
	      markerStartTrigger = _createMarker("scroller-start", id, scroller, direction, markerVars, 0);
	      markerEndTrigger = _createMarker("scroller-end", id, scroller, direction, markerVars, 0, markerStartTrigger);
	      offset = markerStartTrigger["offset" + direction.op.d2];
	      markerStart = _createMarker("start", id, scroller, direction, markerVars, offset);
	      markerEnd = _createMarker("end", id, scroller, direction, markerVars, offset);

	      if (!useFixedPosition && !(_proxies.length && _getProxyProp(scroller, "fixedMarkers") === true)) {
	        _makePositionable(isViewport ? _body : scroller);

	        gsap.set([markerStartTrigger, markerEndTrigger], {
	          force3D: true
	        });
	        markerStartSetter = gsap.quickSetter(markerStartTrigger, direction.a, _px);
	        markerEndSetter = gsap.quickSetter(markerEndTrigger, direction.a, _px);
	      }
	    }

	    self.revert = function (revert) {
	      var r = revert !== false || !self.enabled,
	          prevRefreshing = _refreshing;

	      if (r !== self.isReverted) {
	        if (r) {
	          self.scroll.rec || (self.scroll.rec = self.scroll());
	          prevScroll = Math.max(self.scroll(), self.scroll.rec || 0);
	          prevProgress = self.progress;
	          prevAnimProgress = animation && animation.progress();
	        }

	        markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function (m) {
	          return m.style.display = r ? "none" : "block";
	        });
	        r && (_refreshing = 1);
	        self.update(r);
	        _refreshing = prevRefreshing;
	        pin && (r ? _swapPinOut(pin, spacer, pinOriginalState) : (!pinReparent || !self.isActive) && _swapPinIn(pin, spacer, _getComputedStyle(pin), spacerState));
	        self.isReverted = r;
	      }
	    };

	    self.refresh = function (soft, force) {
	      if ((_refreshing || !self.enabled) && !force) {
	        return;
	      }

	      if (pin && soft && _lastScrollTime) {
	        _addListener(ScrollTrigger, "scrollEnd", _softRefresh);

	        return;
	      }

	      _refreshing = 1;
	      scrubTween && scrubTween.pause();
	      invalidateOnRefresh && animation && animation.progress(0).invalidate();
	      self.isReverted || self.revert();

	      var size = getScrollerSize(),
	          scrollerBounds = getScrollerOffsets(),
	          max = _maxScroll(scroller, direction),
	          offset = 0,
	          otherPinOffset = 0,
	          parsedEnd = vars.end,
	          parsedEndTrigger = vars.endTrigger || trigger,
	          parsedStart = vars.start || (vars.start === 0 || !trigger ? 0 : pin ? "0 0" : "0 100%"),
	          pinnedContainer = vars.pinnedContainer && _toArray(vars.pinnedContainer)[0],
	          triggerIndex = trigger && Math.max(0, _triggers.indexOf(self)) || 0,
	          i = triggerIndex,
	          cs,
	          bounds,
	          scroll,
	          isVertical,
	          override,
	          curTrigger,
	          curPin,
	          oppositeScroll,
	          initted,
	          revertedPins;

	      while (i--) {
	        curTrigger = _triggers[i];
	        curTrigger.end || curTrigger.refresh(0, 1) || (_refreshing = 1);
	        curPin = curTrigger.pin;

	        if (curPin && (curPin === trigger || curPin === pin) && !curTrigger.isReverted) {
	          revertedPins || (revertedPins = []);
	          revertedPins.unshift(curTrigger);
	          curTrigger.revert();
	        }
	      }

	      start = _parsePosition(parsedStart, trigger, size, direction, self.scroll(), markerStart, markerStartTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max) || (pin ? -0.001 : 0);
	      _isFunction(parsedEnd) && (parsedEnd = parsedEnd(self));

	      if (_isString(parsedEnd) && !parsedEnd.indexOf("+=")) {
	        if (~parsedEnd.indexOf(" ")) {
	          parsedEnd = (_isString(parsedStart) ? parsedStart.split(" ")[0] : "") + parsedEnd;
	        } else {
	          offset = _offsetToPx(parsedEnd.substr(2), size);
	          parsedEnd = _isString(parsedStart) ? parsedStart : start + offset;
	          parsedEndTrigger = trigger;
	        }
	      }

	      end = Math.max(start, _parsePosition(parsedEnd || (parsedEndTrigger ? "100% 0" : max), parsedEndTrigger, size, direction, self.scroll() + offset, markerEnd, markerEndTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max)) || -0.001;
	      change = end - start || (start -= 0.01) && 0.001;
	      offset = 0;
	      i = triggerIndex;

	      while (i--) {
	        curTrigger = _triggers[i];
	        curPin = curTrigger.pin;

	        if (curPin && curTrigger.start - curTrigger._pinPush < start) {
	          cs = curTrigger.end - curTrigger.start;
	          (curPin === trigger || curPin === pinnedContainer) && (offset += cs);
	          curPin === pin && (otherPinOffset += cs);
	        }
	      }

	      start += offset;
	      end += offset;
	      self._pinPush = otherPinOffset;

	      if (markerStart && offset) {
	        cs = {};
	        cs[direction.a] = "+=" + offset;
	        pinnedContainer && (cs[direction.p] = "-=" + self.scroll());
	        gsap.set([markerStart, markerEnd], cs);
	      }

	      if (pin) {
	        cs = _getComputedStyle(pin);
	        isVertical = direction === _vertical;
	        scroll = self.scroll();
	        pinStart = parseFloat(pinGetter(direction.a)) + otherPinOffset;
	        !max && end > 1 && ((isViewport ? _body : scroller).style["overflow-" + direction.a] = "scroll");

	        _swapPinIn(pin, spacer, cs);

	        pinState = _getState(pin);
	        bounds = _getBounds(pin, true);
	        oppositeScroll = useFixedPosition && _getScrollFunc(scroller, isVertical ? _horizontal : _vertical)();

	        if (pinSpacing) {
	          spacerState = [pinSpacing + direction.os2, change + otherPinOffset + _px];
	          spacerState.t = spacer;
	          i = pinSpacing === _padding ? _getSize(pin, direction) + change + otherPinOffset : 0;
	          i && spacerState.push(direction.d, i + _px);

	          _setState(spacerState);

	          useFixedPosition && self.scroll(prevScroll);
	        }

	        if (useFixedPosition) {
	          override = {
	            top: bounds.top + (isVertical ? scroll - start : oppositeScroll) + _px,
	            left: bounds.left + (isVertical ? oppositeScroll : scroll - start) + _px,
	            boxSizing: "border-box",
	            position: "fixed"
	          };
	          override[_width] = override["max" + _Width] = Math.ceil(bounds.width) + _px;
	          override[_height] = override["max" + _Height] = Math.ceil(bounds.height) + _px;
	          override[_margin] = override[_margin + _Top] = override[_margin + _Right] = override[_margin + _Bottom] = override[_margin + _Left] = "0";
	          override[_padding] = cs[_padding];
	          override[_padding + _Top] = cs[_padding + _Top];
	          override[_padding + _Right] = cs[_padding + _Right];
	          override[_padding + _Bottom] = cs[_padding + _Bottom];
	          override[_padding + _Left] = cs[_padding + _Left];
	          pinActiveState = _copyState(pinOriginalState, override, pinReparent);
	        }

	        if (animation) {
	          initted = animation._initted;

	          _suppressOverwrites(1);

	          animation.render(animation.duration(), true, true);
	          pinChange = pinGetter(direction.a) - pinStart + change + otherPinOffset;
	          change !== pinChange && pinActiveState.splice(pinActiveState.length - 2, 2);
	          animation.render(0, true, true);
	          initted || animation.invalidate();

	          _suppressOverwrites(0);
	        } else {
	          pinChange = change;
	        }
	      } else if (trigger && self.scroll()) {
	        bounds = trigger.parentNode;

	        while (bounds && bounds !== _body) {
	          if (bounds._pinOffset) {
	            start -= bounds._pinOffset;
	            end -= bounds._pinOffset;
	          }

	          bounds = bounds.parentNode;
	        }
	      }

	      revertedPins && revertedPins.forEach(function (t) {
	        return t.revert(false);
	      });
	      self.start = start;
	      self.end = end;
	      scroll1 = scroll2 = self.scroll();
	      scroll1 < prevScroll && self.scroll(prevScroll);
	      self.revert(false);
	      _refreshing = 0;
	      animation && isToggle && animation._initted && animation.progress() !== prevAnimProgress && animation.progress(prevAnimProgress, true).render(animation.time(), true, true);

	      if (prevProgress !== self.progress) {
	        scrubTween && animation.totalProgress(prevProgress, true);
	        self.progress = prevProgress;
	        self.update();
	      }

	      pin && pinSpacing && (spacer._pinOffset = Math.round(self.progress * pinChange));
	      onRefresh && onRefresh(self);
	    };

	    self.getVelocity = function () {
	      return (self.scroll() - scroll2) / (_getTime() - _time2) * 1000 || 0;
	    };

	    self.update = function (reset, recordVelocity) {
	      var scroll = self.scroll(),
	          p = reset ? 0 : (scroll - start) / change,
	          clipped = p < 0 ? 0 : p > 1 ? 1 : p || 0,
	          prevProgress = self.progress,
	          isActive,
	          wasActive,
	          toggleState,
	          action,
	          stateChanged,
	          toggled;

	      if (recordVelocity) {
	        scroll2 = scroll1;
	        scroll1 = scroll;

	        if (snap) {
	          snap2 = snap1;
	          snap1 = animation && !isToggle ? animation.totalProgress() : clipped;
	        }
	      }

	      anticipatePin && !clipped && pin && !_refreshing && !_startup && _lastScrollTime && start < scroll + (scroll - scroll2) / (_getTime() - _time2) * anticipatePin && (clipped = 0.0001);

	      if (clipped !== prevProgress && self.enabled) {
	        isActive = self.isActive = !!clipped && clipped < 1;
	        wasActive = !!prevProgress && prevProgress < 1;
	        toggled = isActive !== wasActive;
	        stateChanged = toggled || !!clipped !== !!prevProgress;
	        self.direction = clipped > prevProgress ? 1 : -1;
	        self.progress = clipped;

	        if (!isToggle) {
	          if (scrubTween && !_refreshing && !_startup) {
	            scrubTween.vars.totalProgress = clipped;
	            scrubTween.invalidate().restart();
	          } else if (animation) {
	            animation.totalProgress(clipped, !!_refreshing);
	          }
	        }

	        if (pin) {
	          reset && pinSpacing && (spacer.style[pinSpacing + direction.os2] = spacingStart);

	          if (!useFixedPosition) {
	            pinSetter(pinStart + pinChange * clipped);
	          } else if (stateChanged) {
	            action = !reset && clipped > prevProgress && end + 1 > scroll && scroll + 1 >= _maxScroll(scroller, direction);

	            if (pinReparent) {
	              if (!reset && (isActive || action)) {
	                var bounds = _getBounds(pin, true),
	                    _offset = scroll - start;

	                _reparent(pin, _body, bounds.top + (direction === _vertical ? _offset : 0) + _px, bounds.left + (direction === _vertical ? 0 : _offset) + _px);
	              } else {
	                _reparent(pin, spacer);
	              }
	            }

	            _setState(isActive || action ? pinActiveState : pinState);

	            pinChange !== change && clipped < 1 && isActive || pinSetter(pinStart + (clipped === 1 && !action ? pinChange : 0));
	          }
	        }

	        snap && !tweenTo.tween && !_refreshing && !_startup && snapDelayedCall.restart(true);
	        toggleClass && (toggled || once && clipped && (clipped < 1 || !_limitCallbacks)) && _toArray(toggleClass.targets).forEach(function (el) {
	          return el.classList[isActive || once ? "add" : "remove"](toggleClass.className);
	        });
	        onUpdate && !isToggle && !reset && onUpdate(self);

	        if (stateChanged && !_refreshing) {
	          toggleState = clipped && !prevProgress ? 0 : clipped === 1 ? 1 : prevProgress === 1 ? 2 : 3;

	          if (isToggle) {
	            action = !toggled && toggleActions[toggleState + 1] !== "none" && toggleActions[toggleState + 1] || toggleActions[toggleState];

	            if (animation && (action === "complete" || action === "reset" || action in animation)) {
	              if (action === "complete") {
	                animation.pause().totalProgress(1);
	              } else if (action === "reset") {
	                animation.restart(true).pause();
	              } else if (action === "restart") {
	                animation.restart(true);
	              } else {
	                animation[action]();
	              }
	            }

	            onUpdate && onUpdate(self);
	          }

	          if (toggled || !_limitCallbacks) {
	            onToggle && toggled && onToggle(self);
	            callbacks[toggleState] && callbacks[toggleState](self);
	            once && (clipped === 1 ? self.kill(false, 1) : callbacks[toggleState] = 0);

	            if (!toggled) {
	              toggleState = clipped === 1 ? 1 : 3;
	              callbacks[toggleState] && callbacks[toggleState](self);
	            }
	          }
	        } else if (isToggle && onUpdate && !_refreshing) {
	          onUpdate(self);
	        }
	      }

	      if (markerEndSetter) {
	        markerStartSetter(scroll + (markerStartTrigger._isFlipped ? 1 : 0));
	        markerEndSetter(scroll);
	      }
	    };

	    self.enable = function (reset, refresh) {
	      if (!self.enabled) {
	        self.enabled = true;

	        _addListener(scroller, "resize", _onResize);

	        _addListener(scroller, "scroll", _onScroll);

	        onRefreshInit && _addListener(ScrollTrigger, "refreshInit", onRefreshInit);

	        if (reset !== false) {
	          self.progress = prevProgress = 0;
	          scroll1 = scroll2 = lastSnap = self.scroll();
	        }

	        refresh !== false && self.refresh();
	      }
	    };

	    self.getTween = function (snap) {
	      return snap && tweenTo ? tweenTo.tween : scrubTween;
	    };

	    self.disable = function (reset, allowAnimation) {
	      if (self.enabled) {
	        reset !== false && self.revert();
	        self.enabled = self.isActive = false;
	        allowAnimation || scrubTween && scrubTween.pause();
	        prevScroll = 0;
	        pinCache && (pinCache.uncache = 1);
	        onRefreshInit && _removeListener(ScrollTrigger, "refreshInit", onRefreshInit);

	        if (snapDelayedCall) {
	          snapDelayedCall.pause();
	          tweenTo.tween && tweenTo.tween.kill() && (tweenTo.tween = 0);
	        }

	        if (!isViewport) {
	          var i = _triggers.length;

	          while (i--) {
	            if (_triggers[i].scroller === scroller && _triggers[i] !== self) {
	              return;
	            }
	          }

	          _removeListener(scroller, "resize", _onResize);

	          _removeListener(scroller, "scroll", _onScroll);
	        }
	      }
	    };

	    self.kill = function (revert, allowAnimation) {
	      self.disable(revert, allowAnimation);
	      id && delete _ids[id];

	      var i = _triggers.indexOf(self);

	      _triggers.splice(i, 1);

	      i === _i && _direction > 0 && _i--;
	      i = 0;

	      _triggers.forEach(function (t) {
	        return t.scroller === self.scroller && (i = 1);
	      });

	      i || (self.scroll.rec = 0);

	      if (animation) {
	        animation.scrollTrigger = null;
	        revert && animation.render(-1);
	        allowAnimation || animation.kill();
	      }

	      markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function (m) {
	        return m.parentNode && m.parentNode.removeChild(m);
	      });

	      if (pin) {
	        pinCache && (pinCache.uncache = 1);
	        i = 0;

	        _triggers.forEach(function (t) {
	          return t.pin === pin && i++;
	        });

	        i || (pinCache.spacer = 0);
	      }
	    };

	    self.enable(false, false);
	    !animation || !animation.add || change ? self.refresh() : gsap.delayedCall(0.01, function () {
	      return start || end || self.refresh();
	    }) && (change = 0.01) && (start = end = 0);
	  };

	  ScrollTrigger.register = function register(core) {
	    if (!_coreInitted) {
	      gsap = core || _getGSAP();

	      if (_windowExists() && window.document) {
	        _win = window;
	        _doc = document;
	        _docEl = _doc.documentElement;
	        _body = _doc.body;
	      }

	      if (gsap) {
	        _toArray = gsap.utils.toArray;
	        _clamp = gsap.utils.clamp;
	        _suppressOverwrites = gsap.core.suppressOverwrites || _passThrough;
	        gsap.core.globals("ScrollTrigger", ScrollTrigger);

	        if (_body) {
	          _raf = _win.requestAnimationFrame || function (f) {
	            return setTimeout(f, 16);
	          };

	          _addListener(_win, "wheel", _onScroll);

	          _root = [_win, _doc, _docEl, _body];

	          _addListener(_doc, "scroll", _onScroll);

	          var bodyStyle = _body.style,
	              border = bodyStyle.borderTop,
	              bounds;
	          bodyStyle.borderTop = "1px solid #000";
	          bounds = _getBounds(_body);
	          _vertical.m = Math.round(bounds.top + _vertical.sc()) || 0;
	          _horizontal.m = Math.round(bounds.left + _horizontal.sc()) || 0;
	          border ? bodyStyle.borderTop = border : bodyStyle.removeProperty("border-top");
	          _syncInterval = setInterval(_sync, 200);
	          gsap.delayedCall(0.5, function () {
	            return _startup = 0;
	          });

	          _addListener(_doc, "touchcancel", _passThrough);

	          _addListener(_body, "touchstart", _passThrough);

	          _multiListener(_addListener, _doc, "pointerdown,touchstart,mousedown", function () {
	            return _pointerIsDown = 1;
	          });

	          _multiListener(_addListener, _doc, "pointerup,touchend,mouseup", function () {
	            return _pointerIsDown = 0;
	          });

	          _transformProp = gsap.utils.checkPrefix("transform");

	          _stateProps.push(_transformProp);

	          _coreInitted = _getTime();
	          _resizeDelay = gsap.delayedCall(0.2, _refreshAll).pause();
	          _autoRefresh = [_doc, "visibilitychange", function () {
	            var w = _win.innerWidth,
	                h = _win.innerHeight;

	            if (_doc.hidden) {
	              _prevWidth = w;
	              _prevHeight = h;
	            } else if (_prevWidth !== w || _prevHeight !== h) {
	              _onResize();
	            }
	          }, _doc, "DOMContentLoaded", _refreshAll, _win, "load", function () {
	            return _lastScrollTime || _refreshAll();
	          }, _win, "resize", _onResize];

	          _iterateAutoRefresh(_addListener);
	        }
	      }
	    }

	    return _coreInitted;
	  };

	  ScrollTrigger.defaults = function defaults(config) {
	    for (var p in config) {
	      _defaults[p] = config[p];
	    }
	  };

	  ScrollTrigger.kill = function kill() {
	    _enabled = 0;

	    _triggers.slice(0).forEach(function (trigger) {
	      return trigger.kill(1);
	    });
	  };

	  ScrollTrigger.config = function config(vars) {
	    "limitCallbacks" in vars && (_limitCallbacks = !!vars.limitCallbacks);
	    var ms = vars.syncInterval;
	    ms && clearInterval(_syncInterval) || (_syncInterval = ms) && setInterval(_sync, ms);

	    if ("autoRefreshEvents" in vars) {
	      _iterateAutoRefresh(_removeListener) || _iterateAutoRefresh(_addListener, vars.autoRefreshEvents || "none");
	      _ignoreResize = (vars.autoRefreshEvents + "").indexOf("resize") === -1;
	    }
	  };

	  ScrollTrigger.scrollerProxy = function scrollerProxy(target, vars) {
	    var t = _toArray(target)[0],
	        i = _scrollers.indexOf(t),
	        isViewport = _isViewport(t);

	    if (~i) {
	      _scrollers.splice(i, isViewport ? 6 : 2);
	    }

	    isViewport ? _proxies.unshift(_win, vars, _body, vars, _docEl, vars) : _proxies.unshift(t, vars);
	  };

	  ScrollTrigger.matchMedia = function matchMedia(vars) {
	    var mq, p, i, func, result;

	    for (p in vars) {
	      i = _media.indexOf(p);
	      func = vars[p];
	      _creatingMedia = p;

	      if (p === "all") {
	        func();
	      } else {
	        mq = _win.matchMedia(p);

	        if (mq) {
	          mq.matches && (result = func());

	          if (~i) {
	            _media[i + 1] = _combineFunc(_media[i + 1], func);
	            _media[i + 2] = _combineFunc(_media[i + 2], result);
	          } else {
	            i = _media.length;

	            _media.push(p, func, result);

	            mq.addListener ? mq.addListener(_onMediaChange) : mq.addEventListener("change", _onMediaChange);
	          }

	          _media[i + 3] = mq.matches;
	        }
	      }

	      _creatingMedia = 0;
	    }

	    return _media;
	  };

	  ScrollTrigger.clearMatchMedia = function clearMatchMedia(query) {
	    query || (_media.length = 0);
	    query = _media.indexOf(query);
	    query >= 0 && _media.splice(query, 4);
	  };

	  return ScrollTrigger;
	}();
	ScrollTrigger.version = "3.7.1";

	ScrollTrigger.saveStyles = function (targets) {
	  return targets ? _toArray(targets).forEach(function (target) {
	    if (target && target.style) {
	      var i = _savedStyles.indexOf(target);

	      i >= 0 && _savedStyles.splice(i, 5);

	      _savedStyles.push(target, target.style.cssText, target.getBBox && target.getAttribute("transform"), gsap.core.getCache(target), _creatingMedia);
	    }
	  }) : _savedStyles;
	};

	ScrollTrigger.revert = function (soft, media) {
	  return _revertAll(!soft, media);
	};

	ScrollTrigger.create = function (vars, animation) {
	  return new ScrollTrigger(vars, animation);
	};

	ScrollTrigger.refresh = function (safe) {
	  return safe ? _onResize() : _refreshAll(true);
	};

	ScrollTrigger.update = _updateAll;

	ScrollTrigger.maxScroll = function (element, horizontal) {
	  return _maxScroll(element, horizontal ? _horizontal : _vertical);
	};

	ScrollTrigger.getScrollFunc = function (element, horizontal) {
	  return _getScrollFunc(_toArray(element)[0], horizontal ? _horizontal : _vertical);
	};

	ScrollTrigger.getById = function (id) {
	  return _ids[id];
	};

	ScrollTrigger.getAll = function () {
	  return _triggers.slice(0);
	};

	ScrollTrigger.isScrolling = function () {
	  return !!_lastScrollTime;
	};

	ScrollTrigger.addEventListener = function (type, callback) {
	  var a = _listeners[type] || (_listeners[type] = []);
	  ~a.indexOf(callback) || a.push(callback);
	};

	ScrollTrigger.removeEventListener = function (type, callback) {
	  var a = _listeners[type],
	      i = a && a.indexOf(callback);
	  i >= 0 && a.splice(i, 1);
	};

	ScrollTrigger.batch = function (targets, vars) {
	  var result = [],
	      varsCopy = {},
	      interval = vars.interval || 0.016,
	      batchMax = vars.batchMax || 1e9,
	      proxyCallback = function proxyCallback(type, callback) {
	    var elements = [],
	        triggers = [],
	        delay = gsap.delayedCall(interval, function () {
	      callback(elements, triggers);
	      elements = [];
	      triggers = [];
	    }).pause();
	    return function (self) {
	      elements.length || delay.restart(true);
	      elements.push(self.trigger);
	      triggers.push(self);
	      batchMax <= elements.length && delay.progress(1);
	    };
	  },
	      p;

	  for (p in vars) {
	    varsCopy[p] = p.substr(0, 2) === "on" && _isFunction(vars[p]) && p !== "onRefreshInit" ? proxyCallback(p, vars[p]) : vars[p];
	  }

	  if (_isFunction(batchMax)) {
	    batchMax = batchMax();

	    _addListener(ScrollTrigger, "refresh", function () {
	      return batchMax = vars.batchMax();
	    });
	  }

	  _toArray(targets).forEach(function (target) {
	    var config = {};

	    for (p in varsCopy) {
	      config[p] = varsCopy[p];
	    }

	    config.trigger = target;
	    result.push(ScrollTrigger.create(config));
	  });

	  return result;
	};

	ScrollTrigger.sort = function (func) {
	  return _triggers.sort(func || function (a, b) {
	    return (a.vars.refreshPriority || 0) * -1e6 + a.start - (b.start + (b.vars.refreshPriority || 0) * -1e6);
	  });
	};

	_getGSAP() && gsap.registerPlugin(ScrollTrigger);

	exports.ScrollTrigger = ScrollTrigger;
	exports.default = ScrollTrigger;

	Object.defineProperty(exports, '__esModule', { value: true });

})));

function _get(e, t, i) {
	return (_get =
	  "undefined" != typeof Reflect && Reflect.get
		? Reflect.get
		: function (e, t, i) {
			var r = _superPropBase(e, t);
			if (r) {
			  var s = Object.getOwnPropertyDescriptor(r, t);
			  return s.get ? s.get.call(i) : s.value;
			}
		  })(e, t, i || e);
  }
  function _superPropBase(e, t) {
	for (
	  ;
	  !Object.prototype.hasOwnProperty.call(e, t) &&
	  null !== (e = _getPrototypeOf(e));
  
	);
	return e;
  }
  function _inherits(e, t) {
	if ("function" != typeof t && null !== t)
	  throw new TypeError("Super expression must either be null or a function");
	(e.prototype = Object.create(t && t.prototype, {
	  constructor: { value: e, writable: !0, configurable: !0 },
	})),
	  t && _setPrototypeOf(e, t);
  }
  function _setPrototypeOf(e, t) {
	return (_setPrototypeOf =
	  Object.setPrototypeOf ||
	  function (e, t) {
		return (e.__proto__ = t), e;
	  })(e, t);
  }
  function _createSuper(e) {
	var t = _isNativeReflectConstruct();
	return function () {
	  var i,
		r = _getPrototypeOf(e);
	  if (t) {
		var s = _getPrototypeOf(this).constructor;
		i = Reflect.construct(r, arguments, s);
	  } else i = r.apply(this, arguments);
	  return _possibleConstructorReturn(this, i);
	};
  }
  function _possibleConstructorReturn(e, t) {
	return !t || ("object" !== _typeof(t) && "function" != typeof t)
	  ? _assertThisInitialized(e)
	  : t;
  }
  function _assertThisInitialized(e) {
	if (void 0 === e)
	  throw new ReferenceError(
		"this hasn't been initialised - super() hasn't been called"
	  );
	return e;
  }
  function _isNativeReflectConstruct() {
	if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
	if (Reflect.construct.sham) return !1;
	if ("function" == typeof Proxy) return !0;
	try {
	  return (
		Date.prototype.toString.call(Reflect.construct(Date, [], function () {})),
		!0
	  );
	} catch (e) {
	  return !1;
	}
  }
  function _getPrototypeOf(e) {
	return (_getPrototypeOf = Object.setPrototypeOf
	  ? Object.getPrototypeOf
	  : function (e) {
		  return e.__proto__ || Object.getPrototypeOf(e);
		})(e);
  }
  function _classCallCheck(e, t) {
	if (!(e instanceof t))
	  throw new TypeError("Cannot call a class as a function");
  }
  function _defineProperties(e, t) {
	for (var i = 0; i < t.length; i++) {
	  var r = t[i];
	  (r.enumerable = r.enumerable || !1),
		(r.configurable = !0),
		"value" in r && (r.writable = !0),
		Object.defineProperty(e, r.key, r);
	}
  }
  function _createClass(e, t, i) {
	return (
	  t && _defineProperties(e.prototype, t), i && _defineProperties(e, i), e
	);
  }
  function _typeof(e) {
	return (_typeof =
	  "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
		? function (e) {
			return typeof e;
		  }
		: function (e) {
			return e &&
			  "function" == typeof Symbol &&
			  e.constructor === Symbol &&
			  e !== Symbol.prototype
			  ? "symbol"
			  : typeof e;
		  })(e);
  }
  !(function (e, t) {
	"object" ===
	  ("undefined" == typeof exports ? "undefined" : _typeof(exports)) &&
	"undefined" != typeof module
	  ? t(exports)
	  : "function" == typeof define && define.amd
	  ? define(["exports"], t)
	  : t(((e = e || self).window = e.window || {}));
  })(this, function (e) {
	var t = 0;
	function i() {
	  if (!(t > 100)) {
		if (100 === t)
		  console.warn("Curtains: too many warnings thrown, stop logging.");
		else {
		  var e = Array.prototype.slice.call(arguments);
		  console.warn.apply(console, e);
		}
		t++;
	  }
	}
	function r() {
	  var e = Array.prototype.slice.call(arguments);
	  console.error.apply(console, e);
	}
	function s() {
	  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
		/[xy]/g,
		function (e) {
		  var t = (16 * Math.random()) | 0;
		  return ("x" === e ? t : (3 & t) | 8).toString(16).toUpperCase();
		}
	  );
	}
	function n(e) {
	  return 0 == (e & (e - 1));
	}
	var a = (function () {
		function e(t) {
		  if (
			(_classCallCheck(this, e),
			(this.type = "Scene"),
			t && "Renderer" === t.type)
		  ) {
			if (!t.gl)
			  return void r(
				this.type + ": Renderer WebGL context is undefined",
				t
			  );
		  } else r(this.type + ": Renderer not passed as first argument", t);
		  (this.renderer = t), (this.gl = t.gl), this.initStacks();
		}
		return (
		  _createClass(e, [
			{
			  key: "initStacks",
			  value: function () {
				this.stacks = {
				  pingPong: [],
				  renderTargets: [],
				  opaque: [],
				  transparent: [],
				  renderPasses: [],
				  scenePasses: [],
				};
			  },
			},
			{
			  key: "resetPlaneStacks",
			  value: function () {
				(this.stacks.pingPong = []),
				  (this.stacks.renderTargets = []),
				  (this.stacks.opaque = []),
				  (this.stacks.transparent = []);
				for (var e = 0; e < this.renderer.planes.length; e++)
				  this.addPlane(this.renderer.planes[e]);
			  },
			},
			{
			  key: "resetShaderPassStacks",
			  value: function () {
				(this.stacks.scenePasses = []), (this.stacks.renderPasses = []);
				for (var e = 0; e < this.renderer.shaderPasses.length; e++)
				  (this.renderer.shaderPasses[e].index = e),
					this.renderer.shaderPasses[e]._isScenePass
					  ? this.stacks.scenePasses.push(
						  this.renderer.shaderPasses[e]
						)
					  : this.stacks.renderPasses.push(
						  this.renderer.shaderPasses[e]
						);
				0 === this.stacks.scenePasses.length &&
				  (this.renderer.state.scenePassIndex = null);
			  },
			},
			{
			  key: "addToRenderTargetsStack",
			  value: function (e) {
				var t = this.renderer.planes.filter(function (t) {
					return (
					  "PingPongPlane" !== t.type && t.target && t.uuid !== e.uuid
					);
				  }),
				  i = -1;
				if (e.target._depth) {
				  for (var r = t.length - 1; r >= 0; r--)
					if (t[r].target.uuid === e.target.uuid) {
					  i = r + 1;
					  break;
					}
				} else
				  i = t.findIndex(function (t) {
					return t.target.uuid === e.target.uuid;
				  });
				(i = Math.max(0, i)),
				  t.splice(i, 0, e),
				  e.target._depth
					? (t.sort(function (e, t) {
						return e.index - t.index;
					  }),
					  t.sort(function (e, t) {
						return t.renderOrder - e.renderOrder;
					  }))
					: (t.sort(function (e, t) {
						return t.index - e.index;
					  }),
					  t.sort(function (e, t) {
						return e.renderOrder - t.renderOrder;
					  })),
				  t.sort(function (e, t) {
					return e.target.index - t.target.index;
				  }),
				  (this.stacks.renderTargets = t);
			  },
			},
			{
			  key: "addToRegularPlaneStack",
			  value: function (e) {
				for (
				  var t = this.renderer.planes.filter(function (t) {
					  return (
						"PingPongPlane" !== t.type &&
						!t.target &&
						t._transparent === e._transparent &&
						t.uuid !== e.uuid
					  );
					}),
					i = -1,
					r = t.length - 1;
				  r >= 0;
				  r--
				)
				  if (
					t[r]._geometry.definition.id === e._geometry.definition.id
				  ) {
					i = r + 1;
					break;
				  }
				return (
				  (i = Math.max(0, i)),
				  t.splice(i, 0, e),
				  t.sort(function (e, t) {
					return e.index - t.index;
				  }),
				  t
				);
			  },
			},
			{
			  key: "addPlane",
			  value: function (e) {
				if ("PingPongPlane" === e.type) this.stacks.pingPong.push(e);
				else if (e.target) this.addToRenderTargetsStack(e);
				else if (e._transparent) {
				  var t = this.addToRegularPlaneStack(e);
				  t.sort(function (e, t) {
					return t.relativeTranslation.z - e.relativeTranslation.z;
				  }),
					t.sort(function (e, t) {
					  return t.renderOrder - e.renderOrder;
					}),
					(this.stacks.transparent = t);
				} else {
				  var i = this.addToRegularPlaneStack(e);
				  i.sort(function (e, t) {
					return t.renderOrder - e.renderOrder;
				  }),
					(this.stacks.opaque = i);
				}
			  },
			},
			{
			  key: "removePlane",
			  value: function (e) {
				"PingPongPlane" === e.type
				  ? (this.stacks.pingPong = this.stacks.pingPong.filter(function (
					  t
					) {
					  return t.uuid !== e.uuid;
					}))
				  : e.target
				  ? (this.stacks.renderTargets = this.stacks.renderTargets.filter(
					  function (t) {
						return t.uuid !== e.uuid;
					  }
					))
				  : e._transparent
				  ? (this.stacks.transparent = this.stacks.transparent.filter(
					  function (t) {
						return t.uuid !== e.uuid;
					  }
					))
				  : (this.stacks.opaque = this.stacks.opaque.filter(function (t) {
					  return t.uuid !== e.uuid;
					}));
			  },
			},
			{
			  key: "setPlaneRenderOrder",
			  value: function (e) {
				if ("ShaderPass" === e.type)
				  this.sortShaderPassStack(
					e._isScenePass
					  ? this.stacks.scenePasses
					  : this.stacks.renderPasses
				  );
				else if ("PingPongPlane" === e.type) return;
				if (e.target)
				  e.target._depth
					? (this.stacks.renderTargets.sort(function (e, t) {
						return e.index - t.index;
					  }),
					  this.stacks.renderTargets.sort(function (e, t) {
						return t.renderOrder - e.renderOrder;
					  }))
					: (this.stacks.renderTargets.sort(function (e, t) {
						return t.index - e.index;
					  }),
					  this.stacks.renderTargets.sort(function (e, t) {
						return e.renderOrder - t.renderOrder;
					  })),
					this.stacks.renderTargets.sort(function (e, t) {
					  return e.target.index - t.target.index;
					});
				else {
				  var t = e._transparent
					  ? this.stacks.transparent
					  : this.stacks.opaque,
					i = this.stacks.scenePasses.find(function (e, t) {
					  return e._isScenePass && !e._depth && 0 === t;
					});
				  !this.renderer.depth || i
					? (t.sort(function (e, t) {
						return t.index - e.index;
					  }),
					  e._transparent &&
						t.sort(function (e, t) {
						  return (
							e.relativeTranslation.z - t.relativeTranslation.z
						  );
						}),
					  t.sort(function (e, t) {
						return e.renderOrder - t.renderOrder;
					  }))
					: (t.sort(function (e, t) {
						return e.index - t.index;
					  }),
					  e._transparent &&
						t.sort(function (e, t) {
						  return (
							t.relativeTranslation.z - e.relativeTranslation.z
						  );
						}),
					  t.sort(function (e, t) {
						return t.renderOrder - e.renderOrder;
					  }));
				}
			  },
			},
			{
			  key: "addShaderPass",
			  value: function (e) {
				e._isScenePass
				  ? (this.stacks.scenePasses.push(e),
					this.sortShaderPassStack(this.stacks.scenePasses))
				  : (this.stacks.renderPasses.push(e),
					this.sortShaderPassStack(this.stacks.renderPasses));
			  },
			},
			{
			  key: "removeShaderPass",
			  value: function (e) {
				this.resetShaderPassStacks();
			  },
			},
			{
			  key: "sortShaderPassStack",
			  value: function (e) {
				e.sort(function (e, t) {
				  return e.index - t.index;
				}),
				  e.sort(function (e, t) {
					return e.renderOrder - t.renderOrder;
				  });
			  },
			},
			{
			  key: "enableShaderPass",
			  value: function () {
				this.stacks.scenePasses.length &&
				  0 === this.stacks.renderPasses.length &&
				  this.renderer.planes.length &&
				  ((this.renderer.state.scenePassIndex = 0),
				  this.renderer.bindFrameBuffer(
					this.stacks.scenePasses[0].target
				  ));
			  },
			},
			{
			  key: "drawRenderPasses",
			  value: function () {
				this.stacks.scenePasses.length &&
				  this.stacks.renderPasses.length &&
				  this.renderer.planes.length &&
				  ((this.renderer.state.scenePassIndex = 0),
				  this.renderer.bindFrameBuffer(
					this.stacks.scenePasses[0].target
				  ));
				for (var e = 0; e < this.stacks.renderPasses.length; e++)
				  this.stacks.renderPasses[e]._startDrawing(),
					this.renderer.clearDepth();
			  },
			},
			{
			  key: "drawScenePasses",
			  value: function () {
				for (var e = 0; e < this.stacks.scenePasses.length; e++)
				  this.stacks.scenePasses[e]._startDrawing();
			  },
			},
			{
			  key: "drawPingPongStack",
			  value: function () {
				for (var e = 0; e < this.stacks.pingPong.length; e++) {
				  var t = this.stacks.pingPong[e];
				  t && t._startDrawing();
				}
			  },
			},
			{
			  key: "drawStack",
			  value: function (e) {
				for (var t = 0; t < this.stacks[e].length; t++) {
				  var i = this.stacks[e][t];
				  i && i._startDrawing();
				}
			  },
			},
			{
			  key: "draw",
			  value: function () {
				this.drawPingPongStack(),
				  this.enableShaderPass(),
				  this.drawStack("renderTargets"),
				  this.drawRenderPasses(),
				  this.renderer.setBlending(!1),
				  this.drawStack("opaque"),
				  this.stacks.transparent.length &&
					(this.renderer.setBlending(!0),
					this.drawStack("transparent")),
				  this.drawScenePasses();
			  },
			},
		  ]),
		  e
		);
	  })(),
	  o = (function () {
		function e() {
		  _classCallCheck(this, e), (this.geometries = []), this.clear();
		}
		return (
		  _createClass(e, [
			{
			  key: "clear",
			  value: function () {
				(this.textures = []), (this.programs = []);
			  },
			},
			{
			  key: "getGeometryFromID",
			  value: function (e) {
				return this.geometries.find(function (t) {
				  return t.id === e;
				});
			  },
			},
			{
			  key: "addGeometry",
			  value: function (e, t, i) {
				this.geometries.push({ id: e, vertices: t, uvs: i });
			  },
			},
			{
			  key: "isSameShader",
			  value: function (e, t) {
				return 0 === e.localeCompare(t);
			  },
			},
			{
			  key: "getProgramFromShaders",
			  value: function (e, t) {
				var i = this;
				return this.programs.find(function (r) {
				  return (
					i.isSameShader(r.vsCode, e) && i.isSameShader(r.fsCode, t)
				  );
				});
			  },
			},
			{
			  key: "addProgram",
			  value: function (e) {
				this.programs.push(e);
			  },
			},
			{
			  key: "getTextureFromSource",
			  value: function (e) {
				var t = "string" == typeof e ? e : e.src;
				return this.textures.find(function (e) {
				  return e.source && e.source.src === t;
				});
			  },
			},
			{
			  key: "addTexture",
			  value: function (e) {
				this.getTextureFromSource(e.source) || this.textures.push(e);
			  },
			},
			{
			  key: "removeTexture",
			  value: function (e) {
				this.textures = this.textures.filter(function (t) {
				  return t.uuid !== e.uuid;
				});
			  },
			},
		  ]),
		  e
		);
	  })(),
	  h = (function () {
		function e() {
		  _classCallCheck(this, e), this.clear();
		}
		return (
		  _createClass(e, [
			{
			  key: "clear",
			  value: function () {
				this.queue = [];
			  },
			},
			{
			  key: "add",
			  value: function (e) {
				var t = this,
				  i =
					arguments.length > 1 &&
					void 0 !== arguments[1] &&
					arguments[1],
				  r = { callback: e, keep: i, timeout: null };
				return (
				  (r.timeout = setTimeout(function () {
					t.queue.push(r);
				  }, 0)),
				  r
				);
			  },
			},
			{
			  key: "execute",
			  value: function () {
				var e = this;
				this.queue.map(function (t) {
				  t.callback && t.callback(), clearTimeout(e.queue.timeout);
				}),
				  (this.queue = this.queue.filter(function (e) {
					return e.keep;
				  }));
			  },
			},
		  ]),
		  e
		);
	  })(),
	  l = (function () {
		function e(t) {
		  var r = t.alpha,
			s = t.antialias,
			n = t.premultipliedAlpha,
			a = t.depth,
			o = t.failIfMajorPerformanceCaveat,
			h = t.preserveDrawingBuffer,
			l = t.stencil,
			u = t.container,
			d = t.pixelRatio,
			c = t.renderingScale,
			p = t.production,
			f = t.onError,
			g = t.onSuccess,
			_ = t.onContextLost,
			m = t.onContextRestored,
			v = t.onDisposed,
			y = t.onSceneChange;
		  _classCallCheck(this, e),
			(this.type = "Renderer"),
			(this.alpha = r),
			(this.antialias = s),
			(this.premultipliedAlpha = n),
			(this.depth = a),
			(this.failIfMajorPerformanceCaveat = o),
			(this.preserveDrawingBuffer = h),
			(this.stencil = l),
			(this.container = u),
			(this.pixelRatio = d),
			(this._renderingScale = c),
			(this.production = p),
			(this.onError = f),
			(this.onSuccess = g),
			(this.onContextLost = _),
			(this.onContextRestored = m),
			(this.onDisposed = v),
			(this.onSceneChange = y),
			this.initState(),
			(this.canvas = document.createElement("canvas"));
		  var x = {
			alpha: this.alpha,
			premultipliedAlpha: this.premultipliedAlpha,
			antialias: this.antialias,
			depth: this.depth,
			failIfMajorPerformanceCaveat: this.failIfMajorPerformanceCaveat,
			preserveDrawingBuffer: this.preserveDrawingBuffer,
			stencil: this.stencil,
		  };
		  if (
			((this.gl = this.canvas.getContext("webgl2", x)),
			(this._isWebGL2 = !!this.gl),
			this.gl ||
			  (this.gl =
				this.canvas.getContext("webgl", x) ||
				this.canvas.getContext("experimental-webgl", x)),
			!this.gl)
		  )
			return (
			  this.production ||
				i(this.type + ": WebGL context could not be created"),
			  (this.state.isActive = !1),
			  void (this.onError && this.onError())
			);
		  this.onSuccess && this.onSuccess(), this.initRenderer();
		}
		return (
		  _createClass(e, [
			{
			  key: "initState",
			  value: function () {
				this.state = {
				  isActive: !0,
				  isContextLost: !0,
				  drawingEnabled: !0,
				  forceRender: !1,
				  currentProgramID: null,
				  currentGeometryID: null,
				  forceBufferUpdate: !1,
				  depthTest: null,
				  blending: null,
				  cullFace: null,
				  frameBufferID: null,
				  scenePassIndex: null,
				  activeTexture: null,
				  unpackAlignment: null,
				  flipY: null,
				  premultiplyAlpha: null,
				};
			  },
			},
			{
			  key: "initCallbackQueueManager",
			  value: function () {
				this.nextRender = new h();
			  },
			},
			{
			  key: "initRenderer",
			  value: function () {
				(this.planes = []),
				  (this.renderTargets = []),
				  (this.shaderPasses = []),
				  (this.state.isContextLost = !1),
				  this.initCallbackQueueManager(),
				  this.setBlendFunc(),
				  this.setDepthFunc(),
				  this.setDepthTest(!0),
				  (this.cache = new o()),
				  (this.scene = new a(this)),
				  this.getExtensions(),
				  (this._contextLostHandler = this.contextLost.bind(this)),
				  this.canvas.addEventListener(
					"webglcontextlost",
					this._contextLostHandler,
					!1
				  ),
				  (this._contextRestoredHandler =
					this.contextRestored.bind(this)),
				  this.canvas.addEventListener(
					"webglcontextrestored",
					this._contextRestoredHandler,
					!1
				  );
			  },
			},
			{
			  key: "getExtensions",
			  value: function () {
				(this.extensions = []),
				  this._isWebGL2
					? ((this.extensions.EXT_color_buffer_float =
						this.gl.getExtension("EXT_color_buffer_float")),
					  (this.extensions.OES_texture_float_linear =
						this.gl.getExtension("OES_texture_float_linear")),
					  (this.extensions.EXT_texture_filter_anisotropic =
						this.gl.getExtension("EXT_texture_filter_anisotropic")),
					  (this.extensions.WEBGL_lose_context =
						this.gl.getExtension("WEBGL_lose_context")))
					: ((this.extensions.OES_vertex_array_object =
						this.gl.getExtension("OES_vertex_array_object")),
					  (this.extensions.OES_texture_float =
						this.gl.getExtension("OES_texture_float")),
					  (this.extensions.OES_texture_float_linear =
						this.gl.getExtension("OES_texture_float_linear")),
					  (this.extensions.OES_texture_half_float =
						this.gl.getExtension("OES_texture_half_float")),
					  (this.extensions.OES_texture_half_float_linear =
						this.gl.getExtension("OES_texture_half_float_linear")),
					  (this.extensions.EXT_texture_filter_anisotropic =
						this.gl.getExtension("EXT_texture_filter_anisotropic")),
					  (this.extensions.OES_element_index_uint =
						this.gl.getExtension("OES_element_index_uint")),
					  (this.extensions.OES_standard_derivatives =
						this.gl.getExtension("OES_standard_derivatives")),
					  (this.extensions.EXT_sRGB =
						this.gl.getExtension("EXT_sRGB")),
					  (this.extensions.WEBGL_depth_texture = this.gl.getExtension(
						"WEBGL_depth_texture"
					  )),
					  (this.extensions.WEBGL_draw_buffers =
						this.gl.getExtension("WEBGL_draw_buffers")),
					  (this.extensions.WEBGL_lose_context =
						this.gl.getExtension("WEBGL_lose_context")));
			  },
			},
			{
			  key: "contextLost",
			  value: function (e) {
				var t = this;
				(this.state.isContextLost = !0),
				  this.state.isActive &&
					(e.preventDefault(),
					this.nextRender.add(function () {
					  return t.onContextLost && t.onContextLost();
					}));
			  },
			},
			{
			  key: "restoreContext",
			  value: function () {
				this.state.isActive &&
				  (this.initState(),
				  this.gl && this.extensions.WEBGL_lose_context
					? this.extensions.WEBGL_lose_context.restoreContext()
					: (this.gl || this.production
						? this.extensions.WEBGL_lose_context ||
						  this.production ||
						  i(
							this.type +
							  ": Could not restore the context because the restore context extension is not defined"
						  )
						: i(
							this.type +
							  ": Could not restore the context because the context is not defined"
						  ),
					  this.onError && this.onError()));
			  },
			},
			{
			  key: "isContextexFullyRestored",
			  value: function () {
				for (var e = !0, t = 0; t < this.renderTargets.length; t++) {
				  this.renderTargets[t].textures[0]._canDraw || (e = !1);
				  break;
				}
				if (e)
				  for (var i = 0; i < this.planes.length; i++) {
					if (!this.planes[i]._canDraw) {
					  e = !1;
					  break;
					}
					for (var r = 0; r < this.planes[i].textures.length; r++)
					  if (!this.planes[i].textures[r]._canDraw) {
						e = !1;
						break;
					  }
				  }
				if (e)
				  for (var s = 0; s < this.shaderPasses.length; s++) {
					if (!this.shaderPasses[s]._canDraw) {
					  e = !1;
					  break;
					}
					for (var n = 0; n < this.shaderPasses[s].textures.length; n++)
					  if (!this.shaderPasses[s].textures[n]._canDraw) {
						e = !1;
						break;
					  }
				  }
				return e;
			  },
			},
			{
			  key: "contextRestored",
			  value: function () {
				var e = this;
				this.getExtensions(),
				  this.setBlendFunc(),
				  this.setDepthFunc(),
				  this.setDepthTest(!0),
				  this.cache.clear(),
				  this.scene.initStacks();
				for (var t = 0; t < this.renderTargets.length; t++)
				  this.renderTargets[t]._restoreContext();
				for (var i = 0; i < this.planes.length; i++)
				  this.planes[i]._restoreContext();
				for (var r = 0; r < this.shaderPasses.length; r++)
				  this.shaderPasses[r]._restoreContext();
				var s = this.nextRender.add(function () {
				  e.isContextexFullyRestored() &&
					((s.keep = !1),
					(e.state.isContextLost = !1),
					e.onContextRestored && e.onContextRestored(),
					e.onSceneChange(),
					e.needRender());
				}, !0);
			  },
			},
			{
			  key: "setPixelRatio",
			  value: function (e) {
				this.pixelRatio = e;
			  },
			},
			{
			  key: "setSize",
			  value: function () {
				if (this.gl) {
				  var e = this.container.getBoundingClientRect();
				  this._boundingRect = {
					width: e.width * this.pixelRatio,
					height: e.height * this.pixelRatio,
					top: e.top * this.pixelRatio,
					left: e.left * this.pixelRatio,
				  };
				  var t = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/),
					i =
					  /iPad|iPhone|iPod/.test(navigator.userAgent) &&
					  !window.MSStream;
				  if (t && i) {
					this._boundingRect.top =
					  (function (e) {
						for (var t = 0; e && !isNaN(e.offsetTop); )
						  (t += e.offsetTop - e.scrollTop), (e = e.offsetParent);
						return t;
					  })(this.container) * this.pixelRatio;
				  }
				  (this.canvas.style.width =
					Math.floor(this._boundingRect.width / this.pixelRatio) +
					"px"),
					(this.canvas.style.height =
					  Math.floor(this._boundingRect.height / this.pixelRatio) +
					  "px"),
					(this.canvas.width = Math.floor(
					  this._boundingRect.width * this._renderingScale
					)),
					(this.canvas.height = Math.floor(
					  this._boundingRect.height * this._renderingScale
					)),
					this.gl.viewport(
					  0,
					  0,
					  this.gl.drawingBufferWidth,
					  this.gl.drawingBufferHeight
					);
				}
			  },
			},
			{
			  key: "resize",
			  value: function () {
				for (var e = 0; e < this.planes.length; e++)
				  this.planes[e]._canDraw && this.planes[e].resize();
				for (var t = 0; t < this.shaderPasses.length; t++)
				  this.shaderPasses[t]._canDraw && this.shaderPasses[t].resize();
				for (var i = 0; i < this.renderTargets.length; i++)
				  this.renderTargets[i].resize();
				this.needRender();
			  },
			},
			{
			  key: "clear",
			  value: function () {
				this.gl.clear(
				  this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT
				);
			  },
			},
			{
			  key: "clearDepth",
			  value: function () {
				this.gl.clear(this.gl.DEPTH_BUFFER_BIT);
			  },
			},
			{
			  key: "clearColor",
			  value: function () {
				this.gl.clear(this.gl.COLOR_BUFFER_BIT);
			  },
			},
			{
			  key: "bindFrameBuffer",
			  value: function (e, t) {
				var i = null;
				e
				  ? (i = e.index) !== this.state.frameBufferID &&
					(this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, e._frameBuffer),
					this.gl.viewport(0, 0, e._size.width, e._size.height),
					e._shouldClear && !t && this.clear())
				  : null !== this.state.frameBufferID &&
					(this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null),
					this.gl.viewport(
					  0,
					  0,
					  this.gl.drawingBufferWidth,
					  this.gl.drawingBufferHeight
					)),
				  (this.state.frameBufferID = i);
			  },
			},
			{
			  key: "setDepthTest",
			  value: function (e) {
				e && !this.state.depthTest
				  ? ((this.state.depthTest = e),
					this.gl.enable(this.gl.DEPTH_TEST))
				  : !e &&
					this.state.depthTest &&
					((this.state.depthTest = e),
					this.gl.disable(this.gl.DEPTH_TEST));
			  },
			},
			{
			  key: "setDepthFunc",
			  value: function () {
				this.gl.depthFunc(this.gl.LEQUAL);
			  },
			},
			{
			  key: "setBlending",
			  value: function () {
				var e =
				  arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
				e && !this.state.blending
				  ? ((this.state.blending = e), this.gl.enable(this.gl.BLEND))
				  : !e &&
					this.state.blending &&
					((this.state.blending = e), this.gl.disable(this.gl.BLEND));
			  },
			},
			{
			  key: "setBlendFunc",
			  value: function () {
				this.gl.enable(this.gl.BLEND),
				  this.premultipliedAlpha
					? this.gl.blendFuncSeparate(
						this.gl.ONE,
						this.gl.ONE_MINUS_SRC_ALPHA,
						this.gl.ONE,
						this.gl.ONE_MINUS_SRC_ALPHA
					  )
					: this.gl.blendFuncSeparate(
						this.gl.SRC_ALPHA,
						this.gl.ONE_MINUS_SRC_ALPHA,
						this.gl.ONE,
						this.gl.ONE_MINUS_SRC_ALPHA
					  );
			  },
			},
			{
			  key: "setFaceCulling",
			  value: function (e) {
				if (this.state.cullFace !== e)
				  if (((this.state.cullFace = e), "none" === e))
					this.gl.disable(this.gl.CULL_FACE);
				  else {
					var t = "front" === e ? this.gl.FRONT : this.gl.BACK;
					this.gl.enable(this.gl.CULL_FACE), this.gl.cullFace(t);
				  }
			  },
			},
			{
			  key: "useProgram",
			  value: function (e) {
				(null !== this.state.currentProgramID &&
				  this.state.currentProgramID === e.id) ||
				  (this.gl.useProgram(e.program),
				  (this.state.currentProgramID = e.id));
			  },
			},
			{
			  key: "removePlane",
			  value: function (e) {
				this.gl &&
				  ((this.planes = this.planes.filter(function (t) {
					return t.uuid !== e.uuid;
				  })),
				  this.scene.removePlane(e),
				  (e = null),
				  this.gl && this.clear(),
				  this.onSceneChange());
			  },
			},
			{
			  key: "removeRenderTarget",
			  value: function (e) {
				if (this.gl) {
				  for (
					var t = this.planes.find(function (t) {
						return (
						  "PingPongPlane" !== t.type &&
						  t.target &&
						  t.target.uuid === e.uuid
						);
					  }),
					  i = 0;
					i < this.planes.length;
					i++
				  )
					this.planes[i].target &&
					  this.planes[i].target.uuid === e.uuid &&
					  (this.planes[i].target = null);
				  this.renderTargets = this.renderTargets.filter(function (t) {
					return t.uuid !== e.uuid;
				  });
				  for (var r = 0; r < this.renderTargets.length; r++)
					this.renderTargets[r].index = r;
				  (e = null),
					this.gl && this.clear(),
					t && this.scene.resetPlaneStacks(),
					this.onSceneChange();
				}
			  },
			},
			{
			  key: "removeShaderPass",
			  value: function (e) {
				this.gl &&
				  ((this.shaderPasses = this.shaderPasses.filter(function (t) {
					return t.uuid !== e.uuid;
				  })),
				  this.scene.removeShaderPass(e),
				  (e = null),
				  this.gl && this.clear(),
				  this.onSceneChange());
			  },
			},
			{
			  key: "enableDrawing",
			  value: function () {
				this.state.drawingEnabled = !0;
			  },
			},
			{
			  key: "disableDrawing",
			  value: function () {
				this.state.drawingEnabled = !1;
			  },
			},
			{
			  key: "needRender",
			  value: function () {
				this.state.forceRender = !0;
			  },
			},
			{
			  key: "render",
			  value: function () {
				this.gl &&
				  (this.clear(),
				  (this.state.currentGeometryID = null),
				  this.scene.draw());
			  },
			},
			{
			  key: "deletePrograms",
			  value: function () {
				for (var e = 0; e < this.cache.programs.length; e++) {
				  var t = this.cache.programs[e];
				  this.gl.deleteProgram(t.program);
				}
			  },
			},
			{
			  key: "dispose",
			  value: function () {
				var e = this;
				if (this.gl) {
				  for (this.state.isActive = !1; this.planes.length > 0; )
					this.removePlane(this.planes[0]);
				  for (; this.shaderPasses.length > 0; )
					this.removeShaderPass(this.shaderPasses[0]);
				  for (; this.renderTargets.length > 0; )
					this.removeRenderTarget(this.renderTargets[0]);
				  var t = this.nextRender.add(function () {
					0 === e.planes.length &&
					  0 === e.shaderPasses.length &&
					  0 === e.renderTargets.length &&
					  ((t.keep = !1),
					  e.deletePrograms(),
					  e.clear(),
					  e.canvas.removeEventListener(
						"webgllost",
						e._contextLostHandler,
						!1
					  ),
					  e.canvas.removeEventListener(
						"webglrestored",
						e._contextRestoredHandler,
						!1
					  ),
					  e.gl &&
						e.extensions.WEBGL_lose_context &&
						e.extensions.WEBGL_lose_context.loseContext(),
					  (e.canvas.width = e.canvas.width),
					  (e.gl = null),
					  e.container.removeChild(e.canvas),
					  (e.container = null),
					  (e.canvas = null),
					  e.onDisposed && e.onDisposed());
				  }, !0);
				}
			  },
			},
		  ]),
		  e
		);
	  })(),
	  u = (function () {
		function e() {
		  var t =
			  arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
			i = t.xOffset,
			r = void 0 === i ? 0 : i,
			s = t.yOffset,
			n = void 0 === s ? 0 : s,
			a = t.lastXDelta,
			o = void 0 === a ? 0 : a,
			h = t.lastYDelta,
			l = void 0 === h ? 0 : h,
			u = t.shouldWatch,
			d = void 0 === u || u,
			c = t.onScroll,
			p = void 0 === c ? function () {} : c;
		  _classCallCheck(this, e),
			(this.xOffset = r),
			(this.yOffset = n),
			(this.lastXDelta = o),
			(this.lastYDelta = l),
			(this.shouldWatch = d),
			(this.onScroll = p),
			(this.handler = this.scroll.bind(this, !0)),
			this.shouldWatch &&
			  window.addEventListener("scroll", this.handler, { passive: !0 });
		}
		return (
		  _createClass(e, [
			{
			  key: "scroll",
			  value: function () {
				this.updateScrollValues(window.pageXOffset, window.pageYOffset);
			  },
			},
			{
			  key: "updateScrollValues",
			  value: function (e, t) {
				var i = this.xOffset;
				(this.xOffset = e), (this.lastXDelta = i - this.xOffset);
				var r = this.yOffset;
				(this.yOffset = t),
				  (this.lastYDelta = r - this.yOffset),
				  this.onScroll &&
					this.onScroll(this.lastXDelta, this.lastYDelta);
			  },
			},
			{
			  key: "dispose",
			  value: function () {
				this.shouldWatch &&
				  window.removeEventListener("scroll", this.handler, {
					passive: !0,
				  });
			  },
			},
		  ]),
		  e
		);
	  })(),
	  d = (function () {
		function e() {
		  var t =
			  arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
			r = t.container,
			s = t.alpha,
			n = void 0 === s || s,
			a = t.premultipliedAlpha,
			o = void 0 !== a && a,
			h = t.antialias,
			l = void 0 === h || h,
			u = t.depth,
			d = void 0 === u || u,
			c = t.failIfMajorPerformanceCaveat,
			p = void 0 === c || c,
			f = t.preserveDrawingBuffer,
			g = void 0 !== f && f,
			_ = t.stencil,
			m = void 0 !== _ && _,
			v = t.autoResize,
			y = void 0 === v || v,
			x = t.autoRender,
			b = void 0 === x || x,
			k = t.watchScroll,
			R = void 0 === k || k,
			P = t.pixelRatio,
			w = void 0 === P ? window.devicePixelRatio || 1 : P,
			T = t.renderingScale,
			S = void 0 === T ? 1 : T,
			C = t.production,
			E = void 0 !== C && C;
		  _classCallCheck(this, e),
			(this.type = "Curtains"),
			(this._autoResize = y),
			(this._autoRender = b),
			(this._watchScroll = R),
			(this.pixelRatio = w),
			(S = isNaN(S) ? 1 : parseFloat(S)),
			(this._renderingScale = Math.max(0.25, Math.min(1, S))),
			(this.premultipliedAlpha = o),
			(this.alpha = n),
			(this.antialias = l),
			(this.depth = d),
			(this.failIfMajorPerformanceCaveat = p),
			(this.preserveDrawingBuffer = g),
			(this.stencil = m),
			(this.production = E),
			(this.errors = !1),
			r
			  ? this.setContainer(r)
			  : this.production ||
				i(
				  this.type +
					": no container provided in the initial parameters. Use setContainer() method to set one later and initialize the WebGL context"
				);
		}
		return (
		  _createClass(e, [
			{
			  key: "setContainer",
			  value: function (e) {
				if (e)
				  if ("string" == typeof e)
					if ((e = document.getElementById(e))) this.container = e;
					else {
					  var t = document.createElement("div");
					  t.setAttribute("id", "curtains-canvas"),
						document.body.appendChild(t),
						(this.container = t),
						this.production ||
						  i(
							'Curtains: no valid container HTML element or ID provided, created a div with "curtains-canvas" ID instead'
						  );
					}
				  else e instanceof Element && (this.container = e);
				else {
				  var r = document.createElement("div");
				  r.setAttribute("id", "curtains-canvas"),
					document.body.appendChild(r),
					(this.container = r),
					this.production ||
					  i(
						'Curtains: no valid container HTML element or ID provided, created a div with "curtains-canvas" ID instead'
					  );
				}
				this._initCurtains();
			  },
			},
			{
			  key: "_initCurtains",
			  value: function () {
				(this.planes = []),
				  (this.renderTargets = []),
				  (this.shaderPasses = []),
				  this._initRenderer(),
				  this.gl &&
					(this._initScroll(),
					this._setSize(),
					this._addListeners(),
					this.container.appendChild(this.canvas),
					(this._animationFrameID = null),
					this._autoRender && this._animate());
			  },
			},
			{
			  key: "_initRenderer",
			  value: function () {
				var e = this;
				(this.renderer = new l({
				  alpha: this.alpha,
				  antialias: this.antialias,
				  premultipliedAlpha: this.premultipliedAlpha,
				  depth: this.depth,
				  failIfMajorPerformanceCaveat: this.failIfMajorPerformanceCaveat,
				  preserveDrawingBuffer: this.preserveDrawingBuffer,
				  stencil: this.stencil,
				  container: this.container,
				  pixelRatio: this.pixelRatio,
				  renderingScale: this._renderingScale,
				  production: this.production,
				  onError: function () {
					return e._onRendererError();
				  },
				  onSuccess: function () {
					return e._onRendererSuccess();
				  },
				  onContextLost: function () {
					return e._onRendererContextLost();
				  },
				  onContextRestored: function () {
					return e._onRendererContextRestored();
				  },
				  onDisposed: function () {
					return e._onRendererDisposed();
				  },
				  onSceneChange: function () {
					return e._keepSync();
				  },
				})),
				  (this.gl = this.renderer.gl),
				  (this.canvas = this.renderer.canvas);
			  },
			},
			{
			  key: "restoreContext",
			  value: function () {
				this.renderer.restoreContext();
			  },
			},
			{
			  key: "_animate",
			  value: function () {
				this.render(),
				  (this._animationFrameID = window.requestAnimationFrame(
					this._animate.bind(this)
				  ));
			  },
			},
			{
			  key: "enableDrawing",
			  value: function () {
				this.renderer.enableDrawing();
			  },
			},
			{
			  key: "disableDrawing",
			  value: function () {
				this.renderer.disableDrawing();
			  },
			},
			{
			  key: "needRender",
			  value: function () {
				this.renderer.needRender();
			  },
			},
			{
			  key: "nextRender",
			  value: function (e) {
				var t =
				  arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
				return this.renderer.nextRender.add(e, t);
			  },
			},
			{
			  key: "clear",
			  value: function () {
				this.renderer && this.renderer.clear();
			  },
			},
			{
			  key: "clearDepth",
			  value: function () {
				this.renderer && this.renderer.clearDepth();
			  },
			},
			{
			  key: "clearColor",
			  value: function () {
				this.renderer && this.renderer.clearColor();
			  },
			},
			{
			  key: "isWebGL2",
			  value: function () {
				return !!this.gl && this.renderer._isWebGL2;
			  },
			},
			{
			  key: "render",
			  value: function () {
				this.renderer.nextRender.execute(),
				  (this.renderer.state.drawingEnabled ||
					this.renderer.state.forceRender) &&
					(this.renderer.state.forceRender &&
					  (this.renderer.state.forceRender = !1),
					this._onRenderCallback && this._onRenderCallback(),
					this.renderer.render());
			  },
			},
			{
			  key: "_addListeners",
			  value: function () {
				(this._resizeHandler = null),
				  this._autoResize &&
					((this._resizeHandler = this.resize.bind(this, !0)),
					window.addEventListener("resize", this._resizeHandler, !1));
			  },
			},
			{
			  key: "setPixelRatio",
			  value: function (e, t) {
				(this.pixelRatio = parseFloat(Math.max(e, 1)) || 1),
				  this.renderer.setPixelRatio(e),
				  this.resize(t);
			  },
			},
			{
			  key: "_setSize",
			  value: function () {
				this.renderer.setSize(),
				  this._scrollManager.shouldWatch &&
					((this._scrollManager.xOffset = window.pageXOffset),
					(this._scrollManager.yOffset = window.pageYOffset));
			  },
			},
			{
			  key: "getBoundingRect",
			  value: function () {
				return this.renderer._boundingRect;
			  },
			},
			{
			  key: "resize",
			  value: function (e) {
				var t = this;
				this.gl &&
				  (this._setSize(),
				  this.renderer.resize(),
				  this.nextRender(function () {
					t._onAfterResizeCallback && e && t._onAfterResizeCallback();
				  }));
			  },
			},
			{
			  key: "_initScroll",
			  value: function () {
				var e = this;
				this._scrollManager = new u({
				  xOffset: window.pageXOffset,
				  yOffset: window.pageYOffset,
				  lastXDelta: 0,
				  lastYDelta: 0,
				  shouldWatch: this._watchScroll,
				  onScroll: function (t, i) {
					return e._updateScroll(t, i);
				  },
				});
			  },
			},
			{
			  key: "_updateScroll",
			  value: function (e, t) {
				for (var i = 0; i < this.planes.length; i++)
				  this.planes[i].watchScroll &&
					this.planes[i].updateScrollPosition(e, t);
				this.renderer.needRender(),
				  this._onScrollCallback && this._onScrollCallback();
			  },
			},
			{
			  key: "updateScrollValues",
			  value: function (e, t) {
				this._scrollManager.updateScrollValues(e, t);
			  },
			},
			{
			  key: "getScrollDeltas",
			  value: function () {
				return {
				  x: this._scrollManager.lastXDelta,
				  y: this._scrollManager.lastYDelta,
				};
			  },
			},
			{
			  key: "getScrollValues",
			  value: function () {
				return {
				  x: this._scrollManager.xOffset,
				  y: this._scrollManager.yOffset,
				};
			  },
			},
			{
			  key: "_keepSync",
			  value: function () {
				(this.planes = this.renderer.planes),
				  (this.shaderPasses = this.renderer.shaderPasses),
				  (this.renderTargets = this.renderer.renderTargets);
			  },
			},
			{
			  key: "lerp",
			  value: function (e, t, i) {
				return (function (e, t, i) {
				  return (1 - i) * e + i * t;
				})(e, t, i);
			  },
			},
			{
			  key: "onAfterResize",
			  value: function (e) {
				return e && (this._onAfterResizeCallback = e), this;
			  },
			},
			{
			  key: "onError",
			  value: function (e) {
				return e && (this._onErrorCallback = e), this;
			  },
			},
			{
			  key: "_onRendererError",
			  value: function () {
				var e = this;
				setTimeout(function () {
				  e._onErrorCallback && !e.errors && e._onErrorCallback(),
					(e.errors = !0);
				}, 0);
			  },
			},
			{
			  key: "onSuccess",
			  value: function (e) {
				return e && (this._onSuccessCallback = e), this;
			  },
			},
			{
			  key: "_onRendererSuccess",
			  value: function () {
				var e = this;
				setTimeout(function () {
				  e._onSuccessCallback && e._onSuccessCallback();
				}, 0);
			  },
			},
			{
			  key: "onContextLost",
			  value: function (e) {
				return e && (this._onContextLostCallback = e), this;
			  },
			},
			{
			  key: "_onRendererContextLost",
			  value: function () {
				this._onContextLostCallback && this._onContextLostCallback();
			  },
			},
			{
			  key: "onContextRestored",
			  value: function (e) {
				return e && (this._onContextRestoredCallback = e), this;
			  },
			},
			{
			  key: "_onRendererContextRestored",
			  value: function () {
				this._onContextRestoredCallback &&
				  this._onContextRestoredCallback();
			  },
			},
			{
			  key: "onRender",
			  value: function (e) {
				return e && (this._onRenderCallback = e), this;
			  },
			},
			{
			  key: "onScroll",
			  value: function (e) {
				return e && (this._onScrollCallback = e), this;
			  },
			},
			{
			  key: "dispose",
			  value: function () {
				this.renderer.dispose();
			  },
			},
			{
			  key: "_onRendererDisposed",
			  value: function () {
				this._animationFrameID &&
				  window.cancelAnimationFrame(this._animationFrameID),
				  this._resizeHandler &&
					window.removeEventListener("resize", this._resizeHandler, !1),
				  this._scrollManager && this._scrollManager.dispose();
			  },
			},
		  ]),
		  e
		);
	  })(),
	  c = (function () {
		function e(t, i, s) {
		  if (
			(_classCallCheck(this, e),
			(this.type = "Uniforms"),
			t && "Renderer" === t.type)
		  ) {
			if (!t.gl)
			  return void r(
				this.type + ": Renderer WebGL context is undefined",
				t
			  );
		  } else r(this.type + ": Renderer not passed as first argument", t);
		  if (
			((this.renderer = t),
			(this.gl = t.gl),
			(this.program = i),
			(this.uniforms = {}),
			s)
		  )
			for (var n in s) {
			  var a = s[n];
			  this.uniforms[n] = {
				name: a.name,
				type: a.type,
				value:
				  a.value.clone && "function" == typeof a.value.clone
					? a.value.clone()
					: a.value,
				update: null,
			  };
			}
		}
		return (
		  _createClass(e, [
			{
			  key: "handleUniformSetting",
			  value: function (e) {
				switch (e.type) {
				  case "1i":
					e.update = this.setUniform1i.bind(this);
					break;
				  case "1iv":
					e.update = this.setUniform1iv.bind(this);
					break;
				  case "1f":
					e.update = this.setUniform1f.bind(this);
					break;
				  case "1fv":
					e.update = this.setUniform1fv.bind(this);
					break;
				  case "2i":
					e.update = this.setUniform2i.bind(this);
					break;
				  case "2iv":
					e.update = this.setUniform2iv.bind(this);
					break;
				  case "2f":
					e.update = this.setUniform2f.bind(this);
					break;
				  case "2fv":
					e.update = this.setUniform2fv.bind(this);
					break;
				  case "3i":
					e.update = this.setUniform3i.bind(this);
					break;
				  case "3iv":
					e.update = this.setUniform3iv.bind(this);
					break;
				  case "3f":
					e.update = this.setUniform3f.bind(this);
					break;
				  case "3fv":
					e.update = this.setUniform3fv.bind(this);
					break;
				  case "4i":
					e.update = this.setUniform4i.bind(this);
					break;
				  case "4iv":
					e.update = this.setUniform4iv.bind(this);
					break;
				  case "4f":
					e.update = this.setUniform4f.bind(this);
					break;
				  case "4fv":
					e.update = this.setUniform4fv.bind(this);
					break;
				  case "mat2":
					e.update = this.setUniformMatrix2fv.bind(this);
					break;
				  case "mat3":
					e.update = this.setUniformMatrix3fv.bind(this);
					break;
				  case "mat4":
					e.update = this.setUniformMatrix4fv.bind(this);
					break;
				  default:
					this.renderer.production ||
					  i(
						this.type + ": This uniform type is not handled : ",
						e.type
					  );
				}
			  },
			},
			{
			  key: "setInternalFormat",
			  value: function (e) {
				"Vec2" === e.value.type
				  ? ((e._internalFormat = "Vec2"),
					(e.lastValue = e.value.clone()))
				  : "Vec3" === e.value.type
				  ? ((e._internalFormat = "Vec3"),
					(e.lastValue = e.value.clone()))
				  : "Mat4" === e.value.type
				  ? ((e._internalFormat = "Mat4"),
					(e.lastValue = e.value.clone()))
				  : "Quat" === e.value.type
				  ? ((e._internalFormat = "Quat"),
					(e.lastValue = e.value.clone()))
				  : Array.isArray(e.value)
				  ? ((e._internalFormat = "array"),
					(e.lastValue = Array.from(e.value)))
				  : e.value.constructor === Float32Array
				  ? ((e._internalFormat = "mat"), (e.lastValue = e.value))
				  : ((e._internalFormat = "float"), (e.lastValue = e.value));
			  },
			},
			{
			  key: "setUniforms",
			  value: function () {
				if (this.uniforms)
				  for (var e in this.uniforms) {
					var t = this.uniforms[e];
					(t.location = this.gl.getUniformLocation(
					  this.program,
					  t.name
					)),
					  t._internalFormat || this.setInternalFormat(t),
					  t.type ||
						("Vec2" === t._internalFormat
						  ? (t.type = "2f")
						  : "Vec3" === t._internalFormat
						  ? (t.type = "3f")
						  : "Mat4" === t._internalFormat
						  ? (t.type = "mat4")
						  : "array" === t._internalFormat
						  ? 4 === t.value.length
							? ((t.type = "4f"),
							  this.renderer.production ||
								i(
								  this.type +
									": No uniform type declared for " +
									t.name +
									", applied a 4f (array of 4 floats) uniform type"
								))
							: 3 === t.value.length
							? ((t.type = "3f"),
							  this.renderer.production ||
								i(
								  this.type +
									": No uniform type declared for " +
									t.name +
									", applied a 3f (array of 3 floats) uniform type"
								))
							: 2 === t.value.length &&
							  ((t.type = "2f"),
							  this.renderer.production ||
								i(
								  this.type +
									": No uniform type declared for " +
									t.name +
									", applied a 2f (array of 2 floats) uniform type"
								))
						  : "mat" === t._internalFormat
						  ? 16 === t.value.length
							? ((t.type = "mat4"),
							  this.renderer.production ||
								i(
								  this.type +
									": No uniform type declared for " +
									t.name +
									", applied a mat4 (4x4 matrix array) uniform type"
								))
							: 9 === t.value.length
							? ((t.type = "mat3"),
							  this.renderer.production ||
								i(
								  this.type +
									": No uniform type declared for " +
									t.name +
									", applied a mat3 (3x3 matrix array) uniform type"
								))
							: 4 === t.value.length &&
							  ((t.type = "mat2"),
							  this.renderer.production ||
								i(
								  this.type +
									": No uniform type declared for " +
									t.name +
									", applied a mat2 (2x2 matrix array) uniform type"
								))
						  : ((t.type = "1f"),
							this.renderer.production ||
							  i(
								this.type +
								  ": No uniform type declared for " +
								  t.name +
								  ", applied a 1f (float) uniform type"
							  ))),
					  this.handleUniformSetting(t),
					  t.update && t.update(t);
				  }
			  },
			},
			{
			  key: "updateUniforms",
			  value: function () {
				if (this.uniforms)
				  for (var e in this.uniforms) {
					var t = this.uniforms[e],
					  i = !1;
					"Vec2" === t._internalFormat ||
					"Vec3" === t._internalFormat ||
					"Quat" === t._internalFormat
					  ? t.value.equals(t.lastValue) ||
						((i = !0), t.lastValue.copy(t.value))
					  : t.value.length
					  ? JSON.stringify(t.value) !== JSON.stringify(t.lastValue) &&
						((i = !0), (t.lastValue = Array.from(t.value)))
					  : t.value !== t.lastValue &&
						((i = !0), (t.lastValue = t.value)),
					  i && t.update && t.update(t);
				  }
			  },
			},
			{
			  key: "setUniform1i",
			  value: function (e) {
				this.gl.uniform1i(e.location, e.value);
			  },
			},
			{
			  key: "setUniform1iv",
			  value: function (e) {
				this.gl.uniform1iv(e.location, e.value);
			  },
			},
			{
			  key: "setUniform1f",
			  value: function (e) {
				this.gl.uniform1f(e.location, e.value);
			  },
			},
			{
			  key: "setUniform1fv",
			  value: function (e) {
				this.gl.uniform1fv(e.location, e.value);
			  },
			},
			{
			  key: "setUniform2i",
			  value: function (e) {
				"Vec2" === e._internalFormat
				  ? this.gl.uniform2i(e.location, e.value.x, e.value.y)
				  : this.gl.uniform2i(e.location, e.value[0], e.value[1]);
			  },
			},
			{
			  key: "setUniform2iv",
			  value: function (e) {
				"Vec2" === e._internalFormat
				  ? this.gl.uniform2iv(e.location, [e.value.x, e.value.y])
				  : this.gl.uniform2iv(e.location, e.value);
			  },
			},
			{
			  key: "setUniform2f",
			  value: function (e) {
				"Vec2" === e._internalFormat
				  ? this.gl.uniform2f(e.location, e.value.x, e.value.y)
				  : this.gl.uniform2f(e.location, e.value[0], e.value[1]);
			  },
			},
			{
			  key: "setUniform2fv",
			  value: function (e) {
				"Vec2" === e._internalFormat
				  ? this.gl.uniform2fv(e.location, [e.value.x, e.value.y])
				  : this.gl.uniform2fv(e.location, e.value);
			  },
			},
			{
			  key: "setUniform3i",
			  value: function (e) {
				"Vec3" === e._internalFormat
				  ? this.gl.uniform3i(e.location, e.value.x, e.value.y, e.value.z)
				  : this.gl.uniform3i(
					  e.location,
					  e.value[0],
					  e.value[1],
					  e.value[2]
					);
			  },
			},
			{
			  key: "setUniform3iv",
			  value: function (e) {
				"Vec3" === e._internalFormat
				  ? this.gl.uniform3iv(e.location, [
					  e.value.x,
					  e.value.y,
					  e.value.z,
					])
				  : this.gl.uniform3iv(e.location, e.value);
			  },
			},
			{
			  key: "setUniform3f",
			  value: function (e) {
				"Vec3" === e._internalFormat
				  ? this.gl.uniform3f(e.location, e.value.x, e.value.y, e.value.z)
				  : this.gl.uniform3f(
					  e.location,
					  e.value[0],
					  e.value[1],
					  e.value[2]
					);
			  },
			},
			{
			  key: "setUniform3fv",
			  value: function (e) {
				"Vec3" === e._internalFormat
				  ? this.gl.uniform3fv(e.location, [
					  e.value.x,
					  e.value.y,
					  e.value.z,
					])
				  : this.gl.uniform3fv(e.location, e.value);
			  },
			},
			{
			  key: "setUniform4i",
			  value: function (e) {
				"Quat" === e._internalFormat
				  ? this.gl.uniform4i(
					  e.location,
					  e.value.elements[0],
					  e.value.elements[1],
					  e.value.elements[2],
					  e.value[3]
					)
				  : this.gl.uniform4i(
					  e.location,
					  e.value[0],
					  e.value[1],
					  e.value[2],
					  e.value[3]
					);
			  },
			},
			{
			  key: "setUniform4iv",
			  value: function (e) {
				"Quat" === e._internalFormat
				  ? this.gl.uniform4iv(e.location, [
					  e.value.elements[0],
					  e.value.elements[1],
					  e.value.elements[2],
					  e.value[3],
					])
				  : this.gl.uniform4iv(e.location, e.value);
			  },
			},
			{
			  key: "setUniform4f",
			  value: function (e) {
				"Quat" === e._internalFormat
				  ? this.gl.uniform4f(
					  e.location,
					  e.value.elements[0],
					  e.value.elements[1],
					  e.value.elements[2],
					  e.value[3]
					)
				  : this.gl.uniform4f(
					  e.location,
					  e.value[0],
					  e.value[1],
					  e.value[2],
					  e.value[3]
					);
			  },
			},
			{
			  key: "setUniform4fv",
			  value: function (e) {
				"Quat" === e._internalFormat
				  ? this.gl.uniform4fv(e.location, [
					  e.value.elements[0],
					  e.value.elements[1],
					  e.value.elements[2],
					  e.value[3],
					])
				  : this.gl.uniform4fv(e.location, e.value);
			  },
			},
			{
			  key: "setUniformMatrix2fv",
			  value: function (e) {
				this.gl.uniformMatrix2fv(e.location, !1, e.value);
			  },
			},
			{
			  key: "setUniformMatrix3fv",
			  value: function (e) {
				this.gl.uniformMatrix3fv(e.location, !1, e.value);
			  },
			},
			{
			  key: "setUniformMatrix4fv",
			  value: function (e) {
				"Mat4" === e._internalFormat
				  ? this.gl.uniformMatrix4fv(e.location, !1, e.value.elements)
				  : this.gl.uniformMatrix4fv(e.location, !1, e.value);
			  },
			},
		  ]),
		  e
		);
	  })(),
	  p = "\nprecision mediump float;\n".replace(/\n/g, ""),
	  f =
		"\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\n".replace(
		  /\n/g,
		  ""
		),
	  g =
		"\nvarying vec3 vVertexPosition;\nvarying vec2 vTextureCoord;\n".replace(
		  /\n/g,
		  ""
		),
	  _ = (
		p +
		f +
		g +
		"\nuniform mat4 uMVMatrix;\nuniform mat4 uPMatrix;\n\nvoid main() {\n    vTextureCoord = aTextureCoord;\n    vVertexPosition = aVertexPosition;\n    \n    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\n}\n"
	  ).replace(/\n/g, ""),
	  m = (
		p +
		g +
		"\nvoid main() {\n    gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n}\n"
	  ).replace(/\n/g, ""),
	  v = (
		p +
		f +
		g +
		"\nvoid main() {\n    vTextureCoord = aTextureCoord;\n    vVertexPosition = aVertexPosition;\n    \n    gl_Position = vec4(aVertexPosition, 1.0);\n}\n"
	  ).replace(/\n/g, ""),
	  y = (
		p +
		g +
		"\nuniform sampler2D uRenderTexture;\n\nvoid main() {\n    gl_FragColor = texture2D(uRenderTexture, vTextureCoord);\n}\n"
	  ).replace(/\n/g, ""),
	  x = 0,
	  b = (function () {
		function e(t) {
		  var s =
			  arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
			n = s.parent,
			a = s.vertexShader,
			o = s.fragmentShader;
		  if (
			(_classCallCheck(this, e),
			(this.type = "Program"),
			t && "Renderer" === t.type)
		  ) {
			if (!t.gl)
			  return void r(
				this.type + ": Renderer WebGL context is undefined",
				t
			  );
		  } else r(this.type + ": Renderer not passed as first argument", t);
		  (this.renderer = t),
			(this.gl = this.renderer.gl),
			(this.parent = n),
			(this.defaultVsCode = "Plane" === this.parent.type ? _ : v),
			(this.defaultFsCode = "Plane" === this.parent.type ? m : y),
			a
			  ? (this.vsCode = a)
			  : (this.renderer.production ||
				  "Plane" !== this.parent.type ||
				  i(
					this.parent.type +
					  ": No vertex shader provided, will use a default one"
				  ),
				(this.vsCode = this.defaultVsCode)),
			o
			  ? (this.fsCode = o)
			  : (this.renderer.production ||
				  i(
					this.parent.type +
					  ": No fragment shader provided, will use a default one"
				  ),
				(this.fsCode = this.defaultFsCode)),
			(this.compiled = !0),
			this.setupProgram();
		}
		return (
		  _createClass(e, [
			{
			  key: "createShader",
			  value: function (e, t) {
				var s = this.gl.createShader(t);
				if (
				  (this.gl.shaderSource(s, e),
				  this.gl.compileShader(s),
				  !this.renderer.production &&
					!this.gl.getShaderParameter(s, this.gl.COMPILE_STATUS))
				) {
				  for (
					var n =
						t === this.gl.VERTEX_SHADER
						  ? "vertex shader"
						  : "fragment shader",
					  a = this.gl.getShaderSource(s).split("\n"),
					  o = 0;
					o < a.length;
					o++
				  )
					a[o] = o + 1 + ": " + a[o];
				  return (
					(a = a.join("\n")),
					i(
					  this.type + ": Errors occurred while compiling the",
					  n,
					  ":\n",
					  this.gl.getShaderInfoLog(s)
					),
					r(a),
					i(this.type + ": Will use a default", n),
					this.createShader(
					  t === this.gl.VERTEX_SHADER
						? this.defaultVsCode
						: this.defaultFsCode,
					  t
					)
				  );
				}
				return s;
			  },
			},
			{
			  key: "useNewShaders",
			  value: function () {
				(this.vertexShader = this.createShader(
				  this.vsCode,
				  this.gl.VERTEX_SHADER
				)),
				  (this.fragmentShader = this.createShader(
					this.fsCode,
					this.gl.FRAGMENT_SHADER
				  )),
				  (this.vertexShader && this.fragmentShader) ||
					this.renderer.production ||
					i(
					  this.type +
						": Unable to find or compile the vertex or fragment shader"
					);
			  },
			},
			{
			  key: "setupProgram",
			  value: function () {
				var e = this.renderer.cache.getProgramFromShaders(
				  this.vsCode,
				  this.fsCode
				);
				e
				  ? ((this.vertexShader = e.vertexShader),
					(this.fragmentShader = e.fragmentShader),
					(this.activeUniforms = e.activeUniforms),
					(this.activeAttributes = e.activeAttributes),
					this.createProgram())
				  : (this.useNewShaders(),
					this.compiled &&
					  (this.createProgram(),
					  this.renderer.cache.addProgram(this)));
			  },
			},
			{
			  key: "createProgram",
			  value: function () {
				if (
				  (x++,
				  (this.id = x),
				  (this.program = this.gl.createProgram()),
				  this.gl.attachShader(this.program, this.vertexShader),
				  this.gl.attachShader(this.program, this.fragmentShader),
				  this.gl.linkProgram(this.program),
				  !this.renderer.production &&
					!this.gl.getProgramParameter(
					  this.program,
					  this.gl.LINK_STATUS
					))
				)
				  return (
					i(
					  this.type +
						": Unable to initialize the shader program: " +
						this.gl.getProgramInfoLog(this.program)
					),
					i(
					  this.type + ": Will use default vertex and fragment shaders"
					),
					(this.vertexShader = this.createShader(
					  this.defaultVsCode,
					  this.gl.VERTEX_SHADER
					)),
					(this.fragmentShader = this.createShader(
					  this.defaultFsCode,
					  this.gl.FRAGMENT_SHADER
					)),
					void this.createProgram()
				  );
				if (
				  (this.gl.deleteShader(this.vertexShader),
				  this.gl.deleteShader(this.fragmentShader),
				  !this.activeUniforms || !this.activeAttributes)
				) {
				  this.activeUniforms = { textures: [], textureMatrices: [] };
				  for (
					var e = this.gl.getProgramParameter(
						this.program,
						this.gl.ACTIVE_UNIFORMS
					  ),
					  t = 0;
					t < e;
					t++
				  ) {
					var r = this.gl.getActiveUniform(this.program, t);
					r.type === this.gl.SAMPLER_2D &&
					  this.activeUniforms.textures.push(r.name),
					  r.type === this.gl.FLOAT_MAT4 &&
						"uMVMatrix" !== r.name &&
						"uPMatrix" !== r.name &&
						this.activeUniforms.textureMatrices.push(r.name);
				  }
				  this.activeAttributes = [];
				  for (
					var s = this.gl.getProgramParameter(
						this.program,
						this.gl.ACTIVE_ATTRIBUTES
					  ),
					  n = 0;
					n < s;
					n++
				  ) {
					var a = this.gl.getActiveAttrib(this.program, n);
					this.activeAttributes.push(a.name);
				  }
				}
			  },
			},
			{
			  key: "createUniforms",
			  value: function (e) {
				(this.uniformsManager = new c(this.renderer, this.program, e)),
				  this.setUniforms();
			  },
			},
			{
			  key: "setUniforms",
			  value: function () {
				this.renderer.useProgram(this),
				  this.uniformsManager.setUniforms();
			  },
			},
			{
			  key: "updateUniforms",
			  value: function () {
				this.renderer.useProgram(this),
				  this.uniformsManager.updateUniforms();
			  },
			},
		  ]),
		  e
		);
	  })(),
	  k = (function () {
		function e(t) {
		  var i =
			  arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
			s = (i.program, i.width),
			n = void 0 === s ? 1 : s,
			a = i.height,
			o = void 0 === a ? 1 : a;
		  if (
			(_classCallCheck(this, e),
			(this.type = "Geometry"),
			t && "Renderer" === t.type)
		  ) {
			if (!t.gl)
			  return void r(
				this.type + ": Renderer WebGL context is undefined",
				t
			  );
		  } else r(this.type + ": Renderer not passed as first argument", t);
		  (this.renderer = t),
			(this.gl = this.renderer.gl),
			(this.definition = { id: n * o + n, width: n, height: o }),
			this.setDefaultAttributes(),
			this.setVerticesUVs();
		}
		return (
		  _createClass(e, [
			{
			  key: "restoreContext",
			  value: function (e) {
				(this.program = null),
				  this.setDefaultAttributes(),
				  this.setVerticesUVs(),
				  this.setProgram(e);
			  },
			},
			{
			  key: "setDefaultAttributes",
			  value: function () {
				this.attributes = {
				  vertexPosition: {
					name: "aVertexPosition",
					size: 3,
					isActive: !1,
				  },
				  textureCoord: { name: "aTextureCoord", size: 3, isActive: !1 },
				};
			  },
			},
			{
			  key: "setVerticesUVs",
			  value: function () {
				var e = this.renderer.cache.getGeometryFromID(this.definition.id);
				e
				  ? ((this.attributes.vertexPosition.array = e.vertices),
					(this.attributes.textureCoord.array = e.uvs))
				  : (this.computeVerticesUVs(),
					this.renderer.cache.addGeometry(
					  this.definition.id,
					  this.attributes.vertexPosition.array,
					  this.attributes.textureCoord.array
					));
			  },
			},
			{
			  key: "setProgram",
			  value: function (e) {
				(this.program = e),
				  this.initAttributes(),
				  this.renderer._isWebGL2
					? ((this._vao = this.gl.createVertexArray()),
					  this.gl.bindVertexArray(this._vao))
					: this.renderer.extensions.OES_vertex_array_object &&
					  ((this._vao =
						this.renderer.extensions.OES_vertex_array_object.createVertexArrayOES()),
					  this.renderer.extensions.OES_vertex_array_object.bindVertexArrayOES(
						this._vao
					  )),
				  this.initializeBuffers();
			  },
			},
			{
			  key: "initAttributes",
			  value: function () {
				for (var e in this.attributes) {
				  if (
					((this.attributes[e].isActive =
					  this.program.activeAttributes.includes(
						this.attributes[e].name
					  )),
					!this.attributes[e].isActive)
				  )
					return;
				  (this.attributes[e].location = this.gl.getAttribLocation(
					this.program.program,
					this.attributes[e].name
				  )),
					(this.attributes[e].buffer = this.gl.createBuffer()),
					(this.attributes[e].numberOfItems =
					  this.definition.width *
					  this.definition.height *
					  this.attributes[e].size *
					  2);
				}
			  },
			},
			{
			  key: "computeVerticesUVs",
			  value: function () {
				(this.attributes.vertexPosition.array = []),
				  (this.attributes.textureCoord.array = []);
				for (
				  var e = this.attributes.vertexPosition.array,
					t = this.attributes.textureCoord.array,
					i = 0;
				  i < this.definition.height;
				  i++
				)
				  for (
					var r = i / this.definition.height, s = 0;
					s < this.definition.width;
					s++
				  ) {
					var n = s / this.definition.width;
					t.push(n),
					  t.push(r),
					  t.push(0),
					  e.push(2 * (n - 0.5)),
					  e.push(2 * (r - 0.5)),
					  e.push(0),
					  t.push(n + 1 / this.definition.width),
					  t.push(r),
					  t.push(0),
					  e.push(2 * (n + 1 / this.definition.width - 0.5)),
					  e.push(2 * (r - 0.5)),
					  e.push(0),
					  t.push(n),
					  t.push(r + 1 / this.definition.height),
					  t.push(0),
					  e.push(2 * (n - 0.5)),
					  e.push(2 * (r + 1 / this.definition.height - 0.5)),
					  e.push(0),
					  t.push(n),
					  t.push(r + 1 / this.definition.height),
					  t.push(0),
					  e.push(2 * (n - 0.5)),
					  e.push(2 * (r + 1 / this.definition.height - 0.5)),
					  e.push(0),
					  t.push(n + 1 / this.definition.width),
					  t.push(r),
					  t.push(0),
					  e.push(2 * (n + 1 / this.definition.width - 0.5)),
					  e.push(2 * (r - 0.5)),
					  e.push(0),
					  t.push(n + 1 / this.definition.width),
					  t.push(r + 1 / this.definition.height),
					  t.push(0),
					  e.push(2 * (n + 1 / this.definition.width - 0.5)),
					  e.push(2 * (r + 1 / this.definition.height - 0.5)),
					  e.push(0);
				  }
			  },
			},
			{
			  key: "initializeBuffers",
			  value: function () {
				if (this.attributes) {
				  for (var e in this.attributes) {
					if (!this.attributes[e].isActive) return;
					this.gl.enableVertexAttribArray(this.attributes[e].location),
					  this.gl.bindBuffer(
						this.gl.ARRAY_BUFFER,
						this.attributes[e].buffer
					  ),
					  this.gl.bufferData(
						this.gl.ARRAY_BUFFER,
						new Float32Array(this.attributes[e].array),
						this.gl.STATIC_DRAW
					  ),
					  this.gl.vertexAttribPointer(
						this.attributes[e].location,
						this.attributes[e].size,
						this.gl.FLOAT,
						!1,
						0,
						0
					  );
				  }
				  this.renderer.state.currentGeometryID = this.definition.id;
				}
			  },
			},
			{
			  key: "bindBuffers",
			  value: function () {
				if (this._vao)
				  this.renderer._isWebGL2
					? this.gl.bindVertexArray(this._vao)
					: this.renderer.extensions.OES_vertex_array_object.bindVertexArrayOES(
						this._vao
					  );
				else
				  for (var e in this.attributes) {
					if (!this.attributes[e].isActive) return;
					this.gl.enableVertexAttribArray(this.attributes[e].location),
					  this.gl.bindBuffer(
						this.gl.ARRAY_BUFFER,
						this.attributes[e].buffer
					  ),
					  this.gl.vertexAttribPointer(
						this.attributes[e].location,
						this.attributes[e].size,
						this.gl.FLOAT,
						!1,
						0,
						0
					  );
				  }
				this.renderer.state.currentGeometryID = this.definition.id;
			  },
			},
			{
			  key: "draw",
			  value: function () {
				this.gl.drawArrays(
				  this.gl.TRIANGLES,
				  0,
				  this.attributes.vertexPosition.numberOfItems
				);
			  },
			},
			{
			  key: "dispose",
			  value: function () {
				for (var e in (this._vao &&
				  (this.renderer._isWebGL2
					? this.gl.deleteVertexArray(this._vao)
					: this.renderer.extensions.OES_vertex_array_object.deleteVertexArrayOES(
						this._vao
					  )),
				this.attributes)) {
				  if (!this.attributes[e].isActive) return;
				  this.gl.bindBuffer(
					this.gl.ARRAY_BUFFER,
					this.attributes[e].buffer
				  ),
					this.gl.bufferData(
					  this.gl.ARRAY_BUFFER,
					  1,
					  this.gl.STATIC_DRAW
					),
					this.gl.deleteBuffer(this.attributes[e].buffer);
				}
				(this.attributes = null),
				  (this.renderer.state.currentGeometryID = null);
			  },
			},
		  ]),
		  e
		);
	  })(),
	  R = (function () {
		function e() {
		  var t =
			arguments.length > 0 && void 0 !== arguments[0]
			  ? arguments[0]
			  : new Float32Array([
				  1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1,
				]);
		  _classCallCheck(this, e), (this.type = "Mat4"), (this.elements = t);
		}
		return (
		  _createClass(e, [
			{
			  key: "setFromArray",
			  value: function (e) {
				for (var t = 0; t < this.elements.length; t++)
				  this.elements[t] = e[t];
				return this;
			  },
			},
			{
			  key: "copy",
			  value: function (e) {
				var t = e.elements;
				return (
				  (this.elements[0] = t[0]),
				  (this.elements[1] = t[1]),
				  (this.elements[2] = t[2]),
				  (this.elements[3] = t[3]),
				  (this.elements[4] = t[4]),
				  (this.elements[5] = t[5]),
				  (this.elements[6] = t[6]),
				  (this.elements[7] = t[7]),
				  (this.elements[8] = t[8]),
				  (this.elements[9] = t[9]),
				  (this.elements[10] = t[10]),
				  (this.elements[11] = t[11]),
				  (this.elements[12] = t[12]),
				  (this.elements[13] = t[13]),
				  (this.elements[14] = t[14]),
				  (this.elements[15] = t[15]),
				  this
				);
			  },
			},
			{
			  key: "clone",
			  value: function () {
				return new e().copy(this);
			  },
			},
			{
			  key: "multiply",
			  value: function (t) {
				var i = this.elements,
				  r = t.elements,
				  s = new e();
				return (
				  (s.elements[0] =
					r[0] * i[0] + r[1] * i[4] + r[2] * i[8] + r[3] * i[12]),
				  (s.elements[1] =
					r[0] * i[1] + r[1] * i[5] + r[2] * i[9] + r[3] * i[13]),
				  (s.elements[2] =
					r[0] * i[2] + r[1] * i[6] + r[2] * i[10] + r[3] * i[14]),
				  (s.elements[3] =
					r[0] * i[3] + r[1] * i[7] + r[2] * i[11] + r[3] * i[15]),
				  (s.elements[4] =
					r[4] * i[0] + r[5] * i[4] + r[6] * i[8] + r[7] * i[12]),
				  (s.elements[5] =
					r[4] * i[1] + r[5] * i[5] + r[6] * i[9] + r[7] * i[13]),
				  (s.elements[6] =
					r[4] * i[2] + r[5] * i[6] + r[6] * i[10] + r[7] * i[14]),
				  (s.elements[7] =
					r[4] * i[3] + r[5] * i[7] + r[6] * i[11] + r[7] * i[15]),
				  (s.elements[8] =
					r[8] * i[0] + r[9] * i[4] + r[10] * i[8] + r[11] * i[12]),
				  (s.elements[9] =
					r[8] * i[1] + r[9] * i[5] + r[10] * i[9] + r[11] * i[13]),
				  (s.elements[10] =
					r[8] * i[2] + r[9] * i[6] + r[10] * i[10] + r[11] * i[14]),
				  (s.elements[11] =
					r[8] * i[3] + r[9] * i[7] + r[10] * i[11] + r[11] * i[15]),
				  (s.elements[12] =
					r[12] * i[0] + r[13] * i[4] + r[14] * i[8] + r[15] * i[12]),
				  (s.elements[13] =
					r[12] * i[1] + r[13] * i[5] + r[14] * i[9] + r[15] * i[13]),
				  (s.elements[14] =
					r[12] * i[2] + r[13] * i[6] + r[14] * i[10] + r[15] * i[14]),
				  (s.elements[15] =
					r[12] * i[3] + r[13] * i[7] + r[14] * i[11] + r[15] * i[15]),
				  s
				);
			  },
			},
			{
			  key: "getInverse",
			  value: function () {
				var t = this.elements,
				  i = new e(),
				  r = i.elements,
				  s = t[0],
				  n = t[1],
				  a = t[2],
				  o = t[3],
				  h = t[4],
				  l = t[5],
				  u = t[6],
				  d = t[7],
				  c = t[8],
				  p = t[9],
				  f = t[10],
				  g = t[11],
				  _ = t[12],
				  m = t[13],
				  v = t[14],
				  y = t[15],
				  x = s * l - n * h,
				  b = s * u - a * h,
				  k = s * d - o * h,
				  R = n * u - a * l,
				  P = n * d - o * l,
				  w = a * d - o * u,
				  T = c * m - p * _,
				  S = c * v - f * _,
				  C = c * y - g * _,
				  E = p * v - f * m,
				  M = p * y - g * m,
				  A = f * y - g * v,
				  F = x * A - b * M + k * E + R * C - P * S + w * T;
				return F
				  ? ((F = 1 / F),
					(r[0] = (l * A - u * M + d * E) * F),
					(r[1] = (a * M - n * A - o * E) * F),
					(r[2] = (m * w - v * P + y * R) * F),
					(r[3] = (f * P - p * w - g * R) * F),
					(r[4] = (u * C - h * A - d * S) * F),
					(r[5] = (s * A - a * C + o * S) * F),
					(r[6] = (v * k - _ * w - y * b) * F),
					(r[7] = (c * w - f * k + g * b) * F),
					(r[8] = (h * M - l * C + d * T) * F),
					(r[9] = (n * C - s * M - o * T) * F),
					(r[10] = (_ * P - m * k + y * x) * F),
					(r[11] = (p * k - c * P - g * x) * F),
					(r[12] = (l * S - h * E - u * T) * F),
					(r[13] = (s * E - n * S + a * T) * F),
					(r[14] = (m * b - _ * R - v * x) * F),
					(r[15] = (c * R - p * b + f * x) * F),
					i)
				  : null;
			  },
			},
			{
			  key: "scale",
			  value: function (e) {
				var t = this.elements;
				return (
				  (t[0] *= e.x),
				  (t[1] *= e.x),
				  (t[2] *= e.x),
				  (t[3] *= e.x),
				  (t[4] *= e.y),
				  (t[5] *= e.y),
				  (t[6] *= e.y),
				  (t[7] *= e.y),
				  (t[8] *= e.z),
				  (t[9] *= e.z),
				  (t[10] *= e.z),
				  (t[11] *= e.z),
				  this
				);
			  },
			},
			{
			  key: "compose",
			  value: function (e, t, i) {
				var r = this.elements,
				  s = t.elements[0],
				  n = t.elements[1],
				  a = t.elements[2],
				  o = t.elements[3],
				  h = s + s,
				  l = n + n,
				  u = a + a,
				  d = s * h,
				  c = s * l,
				  p = s * u,
				  f = n * l,
				  g = n * u,
				  _ = a * u,
				  m = o * h,
				  v = o * l,
				  y = o * u,
				  x = i.x,
				  b = i.y,
				  k = i.z;
				return (
				  (r[0] = (1 - (f + _)) * x),
				  (r[1] = (c + y) * x),
				  (r[2] = (p - v) * x),
				  (r[3] = 0),
				  (r[4] = (c - y) * b),
				  (r[5] = (1 - (d + _)) * b),
				  (r[6] = (g + m) * b),
				  (r[7] = 0),
				  (r[8] = (p + v) * k),
				  (r[9] = (g - m) * k),
				  (r[10] = (1 - (d + f)) * k),
				  (r[11] = 0),
				  (r[12] = e.x),
				  (r[13] = e.y),
				  (r[14] = e.z),
				  (r[15] = 1),
				  this
				);
			  },
			},
			{
			  key: "composeFromOrigin",
			  value: function (e, t, i, r) {
				var s = this.elements,
				  n = t.elements[0],
				  a = t.elements[1],
				  o = t.elements[2],
				  h = t.elements[3],
				  l = n + n,
				  u = a + a,
				  d = o + o,
				  c = n * l,
				  p = n * u,
				  f = n * d,
				  g = a * u,
				  _ = a * d,
				  m = o * d,
				  v = h * l,
				  y = h * u,
				  x = h * d,
				  b = i.x,
				  k = i.y,
				  R = i.z,
				  P = r.x,
				  w = r.y,
				  T = r.z,
				  S = (1 - (g + m)) * b,
				  C = (p + x) * b,
				  E = (f - y) * b,
				  M = (p - x) * k,
				  A = (1 - (c + m)) * k,
				  F = (_ + v) * k,
				  O = (f + y) * R,
				  D = (_ - v) * R,
				  L = (1 - (c + g)) * R;
				return (
				  (s[0] = S),
				  (s[1] = C),
				  (s[2] = E),
				  (s[3] = 0),
				  (s[4] = M),
				  (s[5] = A),
				  (s[6] = F),
				  (s[7] = 0),
				  (s[8] = O),
				  (s[9] = D),
				  (s[10] = L),
				  (s[11] = 0),
				  (s[12] = e.x + P - (S * P + M * w + O * T)),
				  (s[13] = e.y + w - (C * P + A * w + D * T)),
				  (s[14] = e.z + T - (E * P + F * w + L * T)),
				  (s[15] = 1),
				  this
				);
			  },
			},
		  ]),
		  e
		);
	  })(),
	  P = (function () {
		function e() {
		  var t =
			  arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
			i =
			  arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t;
		  _classCallCheck(this, e),
			(this.type = "Vec2"),
			(this._x = t),
			(this._y = i);
		}
		return (
		  _createClass(e, [
			{
			  key: "onChange",
			  value: function (e) {
				return e && (this._onChangeCallback = e), this;
			  },
			},
			{
			  key: "set",
			  value: function (e, t) {
				return (this._x = e), (this._y = t), this;
			  },
			},
			{
			  key: "add",
			  value: function (e) {
				return (this._x += e.x), (this._y += e.y), this;
			  },
			},
			{
			  key: "addScalar",
			  value: function (e) {
				return (this._x += e), (this._y += e), this;
			  },
			},
			{
			  key: "sub",
			  value: function (e) {
				return (this._x -= e.x), (this._y -= e.y), this;
			  },
			},
			{
			  key: "subScalar",
			  value: function (e) {
				return (this._x -= e), (this._y -= e), this;
			  },
			},
			{
			  key: "multiply",
			  value: function (e) {
				return (this._x *= e.x), (this._y *= e.y), this;
			  },
			},
			{
			  key: "multiplyScalar",
			  value: function (e) {
				return (this._x *= e), (this._y *= e), this;
			  },
			},
			{
			  key: "copy",
			  value: function (e) {
				return (this._x = e.x), (this._y = e.y), this;
			  },
			},
			{
			  key: "clone",
			  value: function () {
				return new e(this._x, this._y);
			  },
			},
			{
			  key: "sanitizeNaNValuesWith",
			  value: function (e) {
				return (
				  (this._x = isNaN(this._x) ? e.x : parseFloat(this._x)),
				  (this._y = isNaN(this._y) ? e.y : parseFloat(this._y)),
				  this
				);
			  },
			},
			{
			  key: "max",
			  value: function (e) {
				return (
				  (this._x = Math.max(this._x, e.x)),
				  (this._y = Math.max(this._y, e.y)),
				  this
				);
			  },
			},
			{
			  key: "min",
			  value: function (e) {
				return (
				  (this._x = Math.min(this._x, e.x)),
				  (this._y = Math.min(this._y, e.y)),
				  this
				);
			  },
			},
			{
			  key: "equals",
			  value: function (e) {
				return this._x === e.x && this._y === e.y;
			  },
			},
			{
			  key: "normalize",
			  value: function () {
				var e = this._x * this._x + this._y * this._y;
				return (
				  e > 0 && (e = 1 / Math.sqrt(e)),
				  (this._x *= e),
				  (this._y *= e),
				  this
				);
			  },
			},
			{
			  key: "dot",
			  value: function (e) {
				return this._x * e.x + this._y * e.y;
			  },
			},
			{
			  key: "x",
			  get: function () {
				return this._x;
			  },
			  set: function (e) {
				var t = e !== this._x;
				(this._x = e),
				  t && this._onChangeCallback && this._onChangeCallback();
			  },
			},
			{
			  key: "y",
			  get: function () {
				return this._y;
			  },
			  set: function (e) {
				var t = e !== this._y;
				(this._y = e),
				  t && this._onChangeCallback && this._onChangeCallback();
			  },
			},
		  ]),
		  e
		);
	  })(),
	  w = (function () {
		function e() {
		  var t =
			  arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
			i =
			  arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t,
			r =
			  arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t;
		  _classCallCheck(this, e),
			(this.type = "Vec3"),
			(this._x = t),
			(this._y = i),
			(this._z = r);
		}
		return (
		  _createClass(e, [
			{
			  key: "onChange",
			  value: function (e) {
				return e && (this._onChangeCallback = e), this;
			  },
			},
			{
			  key: "set",
			  value: function (e, t, i) {
				return (this._x = e), (this._y = t), (this._z = i), this;
			  },
			},
			{
			  key: "add",
			  value: function (e) {
				return (this._x += e.x), (this._y += e.y), (this._z += e.z), this;
			  },
			},
			{
			  key: "addScalar",
			  value: function (e) {
				return (this._x += e), (this._y += e), (this._z += e), this;
			  },
			},
			{
			  key: "sub",
			  value: function (e) {
				return (this._x -= e.x), (this._y -= e.y), (this._z -= e.z), this;
			  },
			},
			{
			  key: "subScalar",
			  value: function (e) {
				return (this._x -= e), (this._y -= e), (this._z -= e), this;
			  },
			},
			{
			  key: "multiply",
			  value: function (e) {
				return (this._x *= e.x), (this._y *= e.y), (this._z *= e.z), this;
			  },
			},
			{
			  key: "multiplyScalar",
			  value: function (e) {
				return (this._x *= e), (this._y *= e), (this._z *= e), this;
			  },
			},
			{
			  key: "copy",
			  value: function (e) {
				return (this._x = e.x), (this._y = e.y), (this._z = e.z), this;
			  },
			},
			{
			  key: "clone",
			  value: function () {
				return new e(this._x, this._y, this._z);
			  },
			},
			{
			  key: "sanitizeNaNValuesWith",
			  value: function (e) {
				return (
				  (this._x = isNaN(this._x) ? e.x : parseFloat(this._x)),
				  (this._y = isNaN(this._y) ? e.y : parseFloat(this._y)),
				  (this._z = isNaN(this._z) ? e.z : parseFloat(this._z)),
				  this
				);
			  },
			},
			{
			  key: "max",
			  value: function (e) {
				return (
				  (this._x = Math.max(this._x, e.x)),
				  (this._y = Math.max(this._y, e.y)),
				  (this._z = Math.max(this._z, e.z)),
				  this
				);
			  },
			},
			{
			  key: "min",
			  value: function (e) {
				return (
				  (this._x = Math.min(this._x, e.x)),
				  (this._y = Math.min(this._y, e.y)),
				  (this._z = Math.min(this._z, e.z)),
				  this
				);
			  },
			},
			{
			  key: "equals",
			  value: function (e) {
				return this._x === e.x && this._y === e.y && this._z === e.z;
			  },
			},
			{
			  key: "normalize",
			  value: function () {
				var e = this._x * this._x + this._y * this._y + this._z * this._z;
				return (
				  e > 0 && (e = 1 / Math.sqrt(e)),
				  (this._x *= e),
				  (this._y *= e),
				  (this._z *= e),
				  this
				);
			  },
			},
			{
			  key: "dot",
			  value: function (e) {
				return this._x * e.x + this._y * e.y + this._z * e.z;
			  },
			},
			{
			  key: "applyMat4",
			  value: function (e) {
				var t = this._x,
				  i = this._y,
				  r = this._z,
				  s = e.elements,
				  n = s[3] * t + s[7] * i + s[11] * r + s[15];
				return (
				  (n = n || 1),
				  (this._x = (s[0] * t + s[4] * i + s[8] * r + s[12]) / n),
				  (this._y = (s[1] * t + s[5] * i + s[9] * r + s[13]) / n),
				  (this._z = (s[2] * t + s[6] * i + s[10] * r + s[14]) / n),
				  this
				);
			  },
			},
			{
			  key: "applyQuat",
			  value: function (e) {
				var t = this._x,
				  i = this._y,
				  r = this._z,
				  s = e.elements[0],
				  n = e.elements[1],
				  a = e.elements[2],
				  o = e.elements[3],
				  h = o * t + n * r - a * i,
				  l = o * i + a * t - s * r,
				  u = o * r + s * i - n * t,
				  d = -s * t - n * i - a * r;
				return (
				  (this._x = h * o + d * -s + l * -a - u * -n),
				  (this._y = l * o + d * -n + u * -s - h * -a),
				  (this._z = u * o + d * -a + h * -n - l * -s),
				  this
				);
			  },
			},
			{
			  key: "project",
			  value: function (e) {
				return (
				  this.applyMat4(e.viewMatrix).applyMat4(e.projectionMatrix), this
				);
			  },
			},
			{
			  key: "unproject",
			  value: function (e) {
				return (
				  this.applyMat4(e.projectionMatrix.getInverse()).applyMat4(
					e.worldMatrix
				  ),
				  this
				);
			  },
			},
			{
			  key: "x",
			  get: function () {
				return this._x;
			  },
			  set: function (e) {
				var t = e !== this._x;
				(this._x = e),
				  t && this._onChangeCallback && this._onChangeCallback();
			  },
			},
			{
			  key: "y",
			  get: function () {
				return this._y;
			  },
			  set: function (e) {
				var t = e !== this._y;
				(this._y = e),
				  t && this._onChangeCallback && this._onChangeCallback();
			  },
			},
			{
			  key: "z",
			  get: function () {
				return this._z;
			  },
			  set: function (e) {
				var t = e !== this._z;
				(this._z = e),
				  t && this._onChangeCallback && this._onChangeCallback();
			  },
			},
		  ]),
		  e
		);
	  })(),
	  T = new P(),
	  S = new w(),
	  C = new R(),
	  E = (function () {
		function e(t) {
		  var i = this,
			n =
			  arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
			a = n.isFBOTexture,
			o = void 0 !== a && a,
			h = n.fromTexture,
			l = void 0 !== h && h,
			u = n.loader,
			d = n.sampler,
			c = n.floatingPoint,
			p = void 0 === c ? "none" : c,
			f = n.premultiplyAlpha,
			g = void 0 !== f && f,
			_ = n.anisotropy,
			m = void 0 === _ ? 1 : _,
			v = n.generateMipmap,
			y = void 0 === v ? null : v,
			x = n.wrapS,
			b = n.wrapT,
			k = n.minFilter,
			w = n.magFilter;
		  if (
			(_classCallCheck(this, e),
			(this.type = "Texture"),
			(t = (t && t.renderer) || t) && "Renderer" === t.type)
		  ) {
			if (!t.gl)
			  return void (
				t.production ||
				r(
				  this.type +
					": Unable to create a " +
					this.type +
					" because the Renderer WebGL context is not defined"
				)
			  );
		  } else r(this.type + ": Renderer not passed as first argument", t);
		  if (
			((this.renderer = t),
			(this.gl = this.renderer.gl),
			(this.uuid = s()),
			(this._globalParameters = {
			  unpackAlignment: 4,
			  flipY: !o,
			  premultiplyAlpha: !1,
			  shouldPremultiplyAlpha: g,
			  floatingPoint: p,
			  type: this.gl.UNSIGNED_BYTE,
			  internalFormat: this.gl.RGBA,
			  format: this.gl.RGBA,
			}),
			(this.parameters = {
			  anisotropy: m,
			  generateMipmap: y,
			  wrapS: x || this.gl.CLAMP_TO_EDGE,
			  wrapT: b || this.gl.CLAMP_TO_EDGE,
			  minFilter: k || this.gl.LINEAR,
			  magFilter: w || this.gl.LINEAR,
			  _shouldUpdate: !0,
			}),
			this._initState(),
			(this.sourceType = o ? "fbo" : "empty"),
			(this._useCache = !0),
			(this._samplerName = d),
			(this._sampler = {
			  isActive: !1,
			  isTextureBound: !1,
			  texture: this.gl.createTexture(),
			}),
			(this._textureMatrix = { matrix: new R(), isActive: !1 }),
			(this._size = { width: 1, height: 1 }),
			(this.scale = new P(1)),
			this.scale.onChange(function () {
			  return i.resize();
			}),
			(this.offset = new P()),
			this.offset.onChange(function () {
			  return i.resize();
			}),
			(this._loader = u),
			(this._sourceLoaded = !1),
			(this._uploaded = !1),
			(this._willUpdate = !1),
			(this.shouldUpdate = !1),
			(this._forceUpdate = !1),
			(this.userData = {}),
			(this._canDraw = !1),
			l)
		  )
			return (this._copyOnInit = !0), void (this._copiedFrom = l);
		  (this._copyOnInit = !1), this._initTexture();
		}
		return (
		  _createClass(e, [
			{
			  key: "_initState",
			  value: function () {
				this._state = {
				  anisotropy: 1,
				  generateMipmap: !1,
				  wrapS: null,
				  wrapT: null,
				  minFilter: null,
				  magFilter: this.gl.LINEAR,
				};
			  },
			},
			{
			  key: "_initTexture",
			  value: function () {
				this.gl.bindTexture(this.gl.TEXTURE_2D, this._sampler.texture),
				  "empty" === this.sourceType &&
					((this._globalParameters.flipY = !1),
					this._updateGlobalTexParameters(),
					this.gl.texImage2D(
					  this.gl.TEXTURE_2D,
					  0,
					  this.gl.RGBA,
					  1,
					  1,
					  0,
					  this.gl.RGBA,
					  this.gl.UNSIGNED_BYTE,
					  new Uint8Array([0, 0, 0, 255])
					),
					(this._canDraw = !0));
			  },
			},
			{
			  key: "_restoreFromTexture",
			  value: function () {
				this._copyOnInit || this._initTexture(),
				  this._parent && (this._setTextureUniforms(), this._setSize()),
				  this.copy(this._copiedFrom),
				  (this._canDraw = !0);
			  },
			},
			{
			  key: "_restoreContext",
			  value: function () {
				var e = this;
				if (
				  ((this._canDraw = !1),
				  (this._sampler.texture = this.gl.createTexture()),
				  (this._sampler.isActive = !1),
				  (this._sampler.isTextureBound = !1),
				  (this._textureMatrix.isActive = !1),
				  this._initState(),
				  (this._state.generateMipmap = !1),
				  (this.parameters._shouldUpdate = !0),
				  this._copiedFrom)
				)
				  var t = this.renderer.nextRender.add(function () {
					e._copiedFrom._canDraw &&
					  (e._restoreFromTexture(), (t.keep = !1));
				  }, !0);
				else
				  this._initTexture(),
					this._parent && this._setParent(),
					this.source &&
					  (this.setSource(this.source),
					  "image" === this.sourceType
						? this.renderer.cache.addTexture(this)
						: this.needUpdate()),
					(this._canDraw = !0);
			  },
			},
			{
			  key: "addParent",
			  value: function (e) {
				!e ||
				("Plane" !== e.type &&
				  "PingPongPlane" !== e.type &&
				  "ShaderPass" !== e.type &&
				  "RenderTarget" !== e.type)
				  ? this.renderer.production ||
					i(
					  this.type + ": cannot add texture as a child of ",
					  e,
					  " because it is not a valid parent"
					)
				  : ((this._parent = e),
					(this.index = this._parent.textures.length),
					this._parent.textures.push(this),
					this._setParent());
			  },
			},
			{
			  key: "_setParent",
			  value: function () {
				var e = this;
				if (
				  ((this._sampler.name =
					this._samplerName || "uSampler" + this.index),
				  (this._textureMatrix.name = this._samplerName
					? this._samplerName + "Matrix"
					: "uTextureMatrix" + this.index),
				  this._parent._program)
				) {
				  if (!this._parent._program.compiled)
					return void (
					  this.renderer.production ||
					  i(
						this.type +
						  ": Unable to create the texture because the program is not valid"
					  )
					);
				  if ((this._setTextureUniforms(), this._copyOnInit)) {
					var t = this.renderer.nextRender.add(function () {
					  e._copiedFrom._canDraw &&
						e._copiedFrom._uploaded &&
						(e.copy(e._copiedFrom), (t.keep = !1));
					}, !0);
					return;
				  }
				  this.source
					? this._parent.loader &&
					  this._parent.loader._addSourceToParent(
						this.source,
						this.sourceType
					  )
					: (this._size = {
						width: this._parent._boundingRect.document.width,
						height: this._parent._boundingRect.document.height,
					  }),
					this._setSize();
				} else
				  "RenderTarget" === this._parent.type &&
					((this._size = {
					  width:
						(this._parent._size && this._parent._size.width) ||
						this.renderer._boundingRect.width,
					  height:
						(this._parent._size && this._parent._size.height) ||
						this.renderer._boundingRect.height,
					}),
					this._upload(),
					this._updateTexParameters(),
					(this._canDraw = !0));
			  },
			},
			{
			  key: "hasParent",
			  value: function () {
				return !!this._parent;
			  },
			},
			{
			  key: "_setTextureUniforms",
			  value: function () {
				for (
				  var e = this, t = this._parent._program.activeUniforms, i = 0;
				  i < t.textures.length;
				  i++
				) {
				  if (t.textures[i] === this._sampler.name)
					(this._sampler.isActive = !0),
					  this.renderer.useProgram(this._parent._program),
					  (this._sampler.location = this.gl.getUniformLocation(
						this._parent._program.program,
						this._sampler.name
					  )),
					  t.textureMatrices.find(function (t) {
						return t === e._textureMatrix.name;
					  }) &&
						((this._textureMatrix.isActive = !0),
						(this._textureMatrix.location =
						  this.gl.getUniformLocation(
							this._parent._program.program,
							this._textureMatrix.name
						  ))),
					  this.gl.uniform1i(this._sampler.location, this.index);
				}
			  },
			},
			{
			  key: "copy",
			  value: function (e) {
				e && "Texture" === e.type
				  ? ((this._globalParameters = e._globalParameters),
					(this._state = e._state),
					(this._size = e._size),
					!this._sourceLoaded &&
					  e._sourceLoaded &&
					  this._onSourceLoadedCallback &&
					  this._onSourceLoadedCallback(),
					(this._sourceLoaded = e._sourceLoaded),
					!this._uploaded &&
					  e._uploaded &&
					  this._onSourceUploadedCallback &&
					  this._onSourceUploadedCallback(),
					(this._uploaded = e._uploaded),
					(this.sourceType = e.sourceType),
					(this.source = e.source),
					(this._videoFrameCallbackID = e._videoFrameCallbackID),
					(this._sampler.texture = e._sampler.texture),
					(this._copiedFrom = e),
					!this._parent ||
					  !this._parent._program ||
					  (this._canDraw && this._textureMatrix.matrix) ||
					  (this._setSize(), (this._canDraw = !0)),
					this.renderer.needRender())
				  : this.renderer.production ||
					i(this.type + ": Unable to set the texture from texture:", e);
			  },
			},
			{
			  key: "setSource",
			  value: function (e) {
				var t = this;
				this._sourceLoaded ||
				  this.renderer.nextRender.add(function () {
					return (
					  t._onSourceLoadedCallback && t._onSourceLoadedCallback()
					);
				  });
				var r =
				  "IMG" === e.tagName.toUpperCase()
					? "image"
					: e.tagName.toLowerCase();
				if (
				  (("video" !== r && "canvas" !== r) || (this._useCache = !1),
				  this._useCache)
				) {
				  var s = this.renderer.cache.getTextureFromSource(e);
				  if (s && s.uuid !== this.uuid)
					return (
					  this._uploaded ||
						(this.renderer.nextRender.add(function () {
						  return (
							t._onSourceUploadedCallback &&
							t._onSourceUploadedCallback()
						  );
						}),
						(this._uploaded = !0)),
					  this.copy(s),
					  void this.resize()
					);
				}
				if ("empty" === this.sourceType || this.sourceType !== r)
				  if ("video" === r)
					(this._willUpdate = !1), (this.shouldUpdate = !0);
				  else if ("canvas" === r)
					(this._willUpdate = !0), (this.shouldUpdate = !0);
				  else {
					if ("image" !== r)
					  return void (
						this.renderer.production ||
						i(
						  this.type +
							": this HTML tag could not be converted into a texture:",
						  e.tagName
						)
					  );
					(this._willUpdate = !1), (this.shouldUpdate = !1);
				  }
				(this.source = e),
				  (this.sourceType = r),
				  (this._size = {
					width:
					  this.source.naturalWidth ||
					  this.source.width ||
					  this.source.videoWidth,
					height:
					  this.source.naturalHeight ||
					  this.source.height ||
					  this.source.videoHeight,
				  }),
				  (this._sourceLoaded = !0),
				  this.gl.bindTexture(this.gl.TEXTURE_2D, this._sampler.texture),
				  this.resize(),
				  (this._globalParameters.flipY = !0),
				  (this._globalParameters.premultiplyAlpha =
					this._globalParameters.shouldPremultiplyAlpha),
				  "image" === this.sourceType &&
					((this.parameters.generateMipmap =
					  this.parameters.generateMipmap ||
					  null === this.parameters.generateMipmap),
					(this.parameters._shouldUpdate =
					  this.parameters.generateMipmap),
					(this._state.generateMipmap = !1),
					this._upload()),
				  this.renderer.needRender();
			  },
			},
			{
			  key: "_updateGlobalTexParameters",
			  value: function () {
				this.renderer.state.unpackAlignment !==
				  this._globalParameters.unpackAlignment &&
				  (this.gl.pixelStorei(
					this.gl.UNPACK_ALIGNMENT,
					this._globalParameters.unpackAlignment
				  ),
				  (this.renderer.state.unpackAlignment =
					this._globalParameters.unpackAlignment)),
				  this.renderer.state.flipY !== this._globalParameters.flipY &&
					(this.gl.pixelStorei(
					  this.gl.UNPACK_FLIP_Y_WEBGL,
					  this._globalParameters.flipY
					),
					(this.renderer.state.flipY = this._globalParameters.flipY)),
				  this.renderer.state.premultiplyAlpha !==
					this._globalParameters.premultiplyAlpha &&
					(this.gl.pixelStorei(
					  this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
					  this._globalParameters.premultiplyAlpha
					),
					(this.renderer.state.premultiplyAlpha =
					  this._globalParameters.premultiplyAlpha)),
				  "half-float" === this._globalParameters.floatingPoint
					? this.renderer._isWebGL2 &&
					  this.renderer.extensions.EXT_color_buffer_float
					  ? ((this._globalParameters.internalFormat =
						  this.gl.RGBA16F),
						(this._globalParameters.type = this.gl.HALF_FLOAT))
					  : this.renderer.extensions.OES_texture_half_float
					  ? (this._globalParameters.type =
						  this.renderer.extensions.OES_texture_half_float.HALF_FLOAT_OES)
					  : this.renderer.production ||
						i(
						  this.type +
							": could not use half-float textures because the extension is not available"
						)
					: "float" === this._globalParameters.floatingPoint &&
					  (this.renderer._isWebGL2 &&
					  this.renderer.extensions.EXT_color_buffer_float
						? ((this._globalParameters.internalFormat =
							this.gl.RGBA16F),
						  (this._globalParameters.type = this.gl.FLOAT))
						: this.renderer.extensions.OES_texture_float
						? (this._globalParameters.type =
							this.renderer.extensions.OES_texture_half_float.FLOAT)
						: this.renderer.production ||
						  i(
							this.type +
							  ": could not use float textures because the extension is not available"
						  ));
			  },
			},
			{
			  key: "_updateTexParameters",
			  value: function () {
				this.index &&
				  this.renderer.state.activeTexture !== this.index &&
				  this._bindTexture(),
				  this.parameters.wrapS !== this._state.wrapS &&
					(this.renderer._isWebGL2 ||
					  (n(this._size.width) && n(this._size.height)) ||
					  (this.parameters.wrapS = this.gl.CLAMP_TO_EDGE),
					this.parameters.wrapS !== this.gl.REPEAT &&
					  this.parameters.wrapS !== this.gl.CLAMP_TO_EDGE &&
					  this.parameters.wrapS !== this.gl.MIRRORED_REPEAT &&
					  (this.renderer.production ||
						i(
						  this.type + ": Wrong wrapS value",
						  this.parameters.wrapS,
						  "for this texture:",
						  this,
						  "\ngl.CLAMP_TO_EDGE wrapping will be used instead"
						),
					  (this.parameters.wrapS = this.gl.CLAMP_TO_EDGE)),
					this.gl.texParameteri(
					  this.gl.TEXTURE_2D,
					  this.gl.TEXTURE_WRAP_S,
					  this.parameters.wrapS
					),
					(this._state.wrapS = this.parameters.wrapS)),
				  this.parameters.wrapT !== this._state.wrapT &&
					(this.renderer._isWebGL2 ||
					  (n(this._size.width) && n(this._size.height)) ||
					  (this.parameters.wrapT = this.gl.CLAMP_TO_EDGE),
					this.parameters.wrapT !== this.gl.REPEAT &&
					  this.parameters.wrapT !== this.gl.CLAMP_TO_EDGE &&
					  this.parameters.wrapT !== this.gl.MIRRORED_REPEAT &&
					  (this.renderer.production ||
						i(
						  this.type + ": Wrong wrapT value",
						  this.parameters.wrapT,
						  "for this texture:",
						  this,
						  "\ngl.CLAMP_TO_EDGE wrapping will be used instead"
						),
					  (this.parameters.wrapT = this.gl.CLAMP_TO_EDGE)),
					this.gl.texParameteri(
					  this.gl.TEXTURE_2D,
					  this.gl.TEXTURE_WRAP_T,
					  this.parameters.wrapT
					),
					(this._state.wrapT = this.parameters.wrapT)),
				  this.parameters.generateMipmap &&
					!this._state.generateMipmap &&
					this.source &&
					(this.renderer._isWebGL2 ||
					(n(this._size.width) && n(this._size.height))
					  ? this.gl.generateMipmap(this.gl.TEXTURE_2D)
					  : (this.parameters.generateMipmap = !1),
					(this._state.generateMipmap =
					  this.parameters.generateMipmap)),
				  this.parameters.minFilter !== this._state.minFilter &&
					(this.renderer._isWebGL2 ||
					  (n(this._size.width) && n(this._size.height)) ||
					  (this.parameters.minFilter = this.gl.LINEAR),
					this.parameters.generateMipmap ||
					  null === this.parameters.generateMipmap ||
					  (this.parameters.minFilter = this.gl.LINEAR),
					this.parameters.minFilter !== this.gl.LINEAR &&
					  this.parameters.minFilter !== this.gl.NEAREST &&
					  this.parameters.minFilter !==
						this.gl.NEAREST_MIPMAP_NEAREST &&
					  this.parameters.minFilter !==
						this.gl.LINEAR_MIPMAP_NEAREST &&
					  this.parameters.minFilter !==
						this.gl.NEAREST_MIPMAP_LINEAR &&
					  this.parameters.minFilter !==
						this.gl.LINEAR_MIPMAP_LINEAR &&
					  (this.renderer.production ||
						i(
						  this.type + ": Wrong minFilter value",
						  this.parameters.minFilter,
						  "for this texture:",
						  this,
						  "\ngl.LINEAR filtering will be used instead"
						),
					  (this.parameters.minFilter = this.gl.LINEAR)),
					this.gl.texParameteri(
					  this.gl.TEXTURE_2D,
					  this.gl.TEXTURE_MIN_FILTER,
					  this.parameters.minFilter
					),
					(this._state.minFilter = this.parameters.minFilter)),
				  this.parameters.magFilter !== this._state.magFilter &&
					(this.renderer._isWebGL2 ||
					  (n(this._size.width) && n(this._size.height)) ||
					  (this.parameters.magFilter = this.gl.LINEAR),
					this.parameters.magFilter !== this.gl.LINEAR &&
					  this.parameters.magFilter !== this.gl.NEAREST &&
					  (this.renderer.production ||
						i(
						  this.type + ": Wrong magFilter value",
						  this.parameters.magFilter,
						  "for this texture:",
						  this,
						  "\ngl.LINEAR filtering will be used instead"
						),
					  (this.parameters.magFilter = this.gl.LINEAR)),
					this.gl.texParameteri(
					  this.gl.TEXTURE_2D,
					  this.gl.TEXTURE_MAG_FILTER,
					  this.parameters.magFilter
					),
					(this._state.magFilter = this.parameters.magFilter));
				var e = this.renderer.extensions.EXT_texture_filter_anisotropic;
				if (e && this.parameters.anisotropy !== this._state.anisotropy) {
				  var t = this.gl.getParameter(e.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
				  (this.parameters.anisotropy = Math.max(
					1,
					Math.min(this.parameters.anisotropy, t)
				  )),
					this.gl.texParameterf(
					  this.gl.TEXTURE_2D,
					  e.TEXTURE_MAX_ANISOTROPY_EXT,
					  this.parameters.anisotropy
					),
					(this._state.anisotropy = this.parameters.anisotropy);
				}
			  },
			},
			{
			  key: "setWrapS",
			  value: function (e) {
				this.parameters.wrapS !== e &&
				  ((this.parameters.wrapS = e),
				  (this.parameters._shouldUpdate = !0));
			  },
			},
			{
			  key: "setWrapT",
			  value: function (e) {
				this.parameters.wrapT !== e &&
				  ((this.parameters.wrapT = e),
				  (this.parameters._shouldUpdate = !0));
			  },
			},
			{
			  key: "setMinFilter",
			  value: function (e) {
				this.parameters.minFilter !== e &&
				  ((this.parameters.minFilter = e),
				  (this.parameters._shouldUpdate = !0));
			  },
			},
			{
			  key: "setMagFilter",
			  value: function (e) {
				this.parameters.magFilter !== e &&
				  ((this.parameters.magFilter = e),
				  (this.parameters._shouldUpdate = !0));
			  },
			},
			{
			  key: "setAnisotropy",
			  value: function (e) {
				(e = isNaN(e) ? this.parameters.anisotropy : e),
				  this.parameters.anisotropy !== e &&
					((this.parameters.anisotropy = e),
					(this.parameters._shouldUpdate = !0));
			  },
			},
			{
			  key: "needUpdate",
			  value: function () {
				this._forceUpdate = !0;
			  },
			},
			{
			  key: "_videoFrameCallback",
			  value: function () {
				var e = this;
				(this._willUpdate = !0),
				  this.source.requestVideoFrameCallback(function () {
					return e._videoFrameCallback();
				  });
			  },
			},
			{
			  key: "_upload",
			  value: function () {
				var e = this;
				this._updateGlobalTexParameters(),
				  this.source
					? this.gl.texImage2D(
						this.gl.TEXTURE_2D,
						0,
						this._globalParameters.internalFormat,
						this._globalParameters.format,
						this._globalParameters.type,
						this.source
					  )
					: "fbo" === this.sourceType &&
					  this.gl.texImage2D(
						this.gl.TEXTURE_2D,
						0,
						this._globalParameters.internalFormat,
						this._size.width,
						this._size.height,
						0,
						this._globalParameters.format,
						this._globalParameters.type,
						this.source || null
					  ),
				  this._uploaded ||
					(this.renderer.nextRender.add(function () {
					  return (
						e._onSourceUploadedCallback &&
						e._onSourceUploadedCallback()
					  );
					}),
					(this._uploaded = !0));
			  },
			},
			{
			  key: "_getSizes",
			  value: function () {
				if ("fbo" === this.sourceType)
				  return {
					parentWidth: this._parent._boundingRect.document.width,
					parentHeight: this._parent._boundingRect.document.height,
					sourceWidth: this._parent._boundingRect.document.width,
					sourceHeight: this._parent._boundingRect.document.height,
					xOffset: 0,
					yOffset: 0,
				  };
				var e = this._parent.scale
					? T.set(this._parent.scale.x, this._parent.scale.y)
					: T.set(1, 1),
				  t = this._parent._boundingRect.document.width * e.x,
				  i = this._parent._boundingRect.document.height * e.y,
				  r = this._size.width,
				  s = this._size.height,
				  n = r / s,
				  a = t / i,
				  o = 0,
				  h = 0;
				return (
				  a > n
					? (h = Math.min(0, i - t * (1 / n)))
					: a < n && (o = Math.min(0, t - i * n)),
				  {
					parentWidth: t,
					parentHeight: i,
					sourceWidth: r,
					sourceHeight: s,
					xOffset: o,
					yOffset: h,
				  }
				);
			  },
			},
			{
			  key: "setScale",
			  value: function (e) {
				e.type && "Vec2" === e.type
				  ? (e.sanitizeNaNValuesWith(this.scale).max(T.set(0.001, 0.001)),
					e.equals(this.scale) || (this.scale.copy(e), this.resize()))
				  : this.renderer.production ||
					i(
					  this.type +
						": Cannot set scale because the parameter passed is not of Vec2 type:",
					  e
					);
			  },
			},
			{
			  key: "setOffset",
			  value: function (e) {
				e.type && "Vec2" === e.type
				  ? (e.sanitizeNaNValuesWith(this.offset),
					e.equals(this.offset) || (this.offset.copy(e), this.resize()))
				  : this.renderer.production ||
					i(
					  this.type +
						": Cannot set offset because the parameter passed is not of Vec2 type:",
					  scale
					);
			  },
			},
			{
			  key: "_setSize",
			  value: function () {
				if (this._parent && this._parent._program) {
				  var e = this._getSizes();
				  this._updateTextureMatrix(e);
				}
			  },
			},
			{
			  key: "resize",
			  value: function () {
				"fbo" === this.sourceType
				  ? ((this._size = {
					  width:
						(this._parent._size && this._parent._size.width) ||
						this._parent._boundingRect.document.width,
					  height:
						(this._parent._size && this._parent._size.height) ||
						this._parent._boundingRect.document.height,
					}),
					this._copiedFrom ||
					  (this.gl.bindTexture(
						this.gl.TEXTURE_2D,
						this._sampler.texture
					  ),
					  this.gl.texImage2D(
						this.gl.TEXTURE_2D,
						0,
						this._globalParameters.internalFormat,
						this._size.width,
						this._size.height,
						0,
						this._globalParameters.format,
						this._globalParameters.type,
						null
					  )))
				  : this.source &&
					(this._size = {
					  width:
						this.source.naturalWidth ||
						this.source.width ||
						this.source.videoWidth,
					  height:
						this.source.naturalHeight ||
						this.source.height ||
						this.source.videoHeight,
					}),
				  this._setSize();
			  },
			},
			{
			  key: "_updateTextureMatrix",
			  value: function (e) {
				var t = S.set(
				  e.parentWidth / (e.parentWidth - e.xOffset),
				  e.parentHeight / (e.parentHeight - e.yOffset),
				  1
				);
				(t.x /= this.scale.x),
				  (t.y /= this.scale.y),
				  (this._textureMatrix.matrix = C.setFromArray([
					t.x,
					0,
					0,
					0,
					0,
					t.y,
					0,
					0,
					0,
					0,
					1,
					0,
					(1 - t.x) / 2 + this.offset.x,
					(1 - t.y) / 2 + this.offset.y,
					0,
					1,
				  ])),
				  this._updateMatrixUniform();
			  },
			},
			{
			  key: "_updateMatrixUniform",
			  value: function () {
				this._textureMatrix.isActive &&
				  (this.renderer.useProgram(this._parent._program),
				  this.gl.uniformMatrix4fv(
					this._textureMatrix.location,
					!1,
					this._textureMatrix.matrix.elements
				  ));
			  },
			},
			{
			  key: "_onSourceLoaded",
			  value: function (e) {
				this.setSource(e),
				  "image" === this.sourceType &&
					this.renderer.cache.addTexture(this);
			  },
			},
			{
			  key: "_bindTexture",
			  value: function () {
				this._canDraw &&
				  (this.renderer.state.activeTexture !== this.index &&
					(this.gl.activeTexture(this.gl.TEXTURE0 + this.index),
					(this.renderer.state.activeTexture = this.index)),
				  this.gl.bindTexture(this.gl.TEXTURE_2D, this._sampler.texture),
				  this._sampler.isTextureBound ||
					((this._sampler.isTextureBound = !!this.gl.getParameter(
					  this.gl.TEXTURE_BINDING_2D
					)),
					this._sampler.isTextureBound && this.renderer.needRender()));
			  },
			},
			{
			  key: "_draw",
			  value: function () {
				this._sampler.isActive &&
				  (this._bindTexture(),
				  "video" === this.sourceType &&
					this.source &&
					!this._videoFrameCallbackID &&
					this.source.readyState >= this.source.HAVE_CURRENT_DATA &&
					!this.source.paused &&
					(this._willUpdate = !0),
				  (this._forceUpdate ||
					(this._willUpdate && this.shouldUpdate)) &&
					((this._state.generateMipmap = !1), this._upload()),
				  "video" === this.sourceType && (this._willUpdate = !1),
				  (this._forceUpdate = !1)),
				  this.parameters._shouldUpdate &&
					(this._updateTexParameters(),
					(this.parameters._shouldUpdate = !1));
			  },
			},
			{
			  key: "onSourceLoaded",
			  value: function (e) {
				return e && (this._onSourceLoadedCallback = e), this;
			  },
			},
			{
			  key: "onSourceUploaded",
			  value: function (e) {
				return e && (this._onSourceUploadedCallback = e), this;
			  },
			},
			{
			  key: "_dispose",
			  value: function () {
				var e =
				  arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
				"video" === this.sourceType ||
				("image" === this.sourceType && !this.renderer.state.isActive)
				  ? (this._loader && this._loader._removeSource(this),
					(this.source = null))
				  : "canvas" === this.sourceType &&
					((this.source.width = this.source.width),
					(this.source = null)),
				  (this._parent = null);
				var t =
				  this.gl &&
				  !this._copiedFrom &&
				  (e ||
					"image" !== this.sourceType ||
					!this.renderer.state.isActive);
				t &&
				  ((this._canDraw = !1),
				  this.renderer.cache.removeTexture(this),
				  this.gl.activeTexture(this.gl.TEXTURE0 + this.index),
				  this.gl.bindTexture(this.gl.TEXTURE_2D, null),
				  this.gl.deleteTexture(this._sampler.texture));
			  },
			},
		  ]),
		  e
		);
	  })(),
	  M = (function () {
		function e(t) {
		  var i =
			arguments.length > 1 && void 0 !== arguments[1]
			  ? arguments[1]
			  : "anonymous";
		  if (
			(_classCallCheck(this, e),
			(this.type = "TextureLoader"),
			(t = (t && t.renderer) || t) && "Renderer" === t.type)
		  ) {
			if (!t.gl)
			  return void r(
				this.type + ": Renderer WebGL context is undefined",
				t
			  );
		  } else r(this.type + ": Renderer not passed as first argument", t);
		  (this.renderer = t),
			(this.gl = this.renderer.gl),
			(this.crossOrigin = i),
			(this.elements = []);
		}
		return (
		  _createClass(e, [
			{
			  key: "_addElement",
			  value: function (e, t, i, r) {
				var s = {
				  source: e,
				  texture: t,
				  load: this._sourceLoaded.bind(this, e, t, i),
				  error: this._sourceLoadError.bind(this, e, r),
				};
				return this.elements.push(s), s;
			  },
			},
			{
			  key: "_sourceLoadError",
			  value: function (e, t, i) {
				t && t(e, i);
			  },
			},
			{
			  key: "_sourceLoaded",
			  value: function (e, t, i) {
				var r = this;
				t._sourceLoaded ||
				  (t._onSourceLoaded(e),
				  this._parent &&
					(this._increment && this._increment(),
					this.renderer.nextRender.add(function () {
					  return (
						r._parent._onLoadingCallback &&
						r._parent._onLoadingCallback(t)
					  );
					})),
				  i && i(t));
			  },
			},
			{
			  key: "_getSourceType",
			  value: function (e) {
				var t;
				return (
				  "string" == typeof e
					? null !==
					  e.match(
						/\.(jpeg|jpg|jfif|pjpeg|pjp|gif|bmp|png|webp|svg|avif|apng)$/
					  )
					  ? (t = "image")
					  : null !==
						  e.match(
							/\.(webm|mp4|mpg|mpeg|avi|ogg|ogm|ogv|mov|av1)$/
						  ) && (t = "video")
					: "IMG" === e.tagName.toUpperCase()
					? (t = "image")
					: "VIDEO" === e.tagName.toUpperCase()
					? (t = "video")
					: "CANVAS" === e.tagName.toUpperCase() && (t = "canvas"),
				  t
				);
			  },
			},
			{
			  key: "_createImage",
			  value: function (e) {
				if ("string" != typeof e && e.hasAttribute("crossOrigin"))
				  return e;
				var t = new Image();
				return (
				  (t.crossOrigin = this.crossOrigin),
				  "string" == typeof e
					? (t.src = e)
					: ((t.src = e.src),
					  e.hasAttribute("data-sampler") &&
						t.setAttribute(
						  "data-sampler",
						  e.getAttribute("data-sampler")
						)),
				  t
				);
			  },
			},
			{
			  key: "_createVideo",
			  value: function (e) {
				if (
				  "string" == typeof e ||
				  null === e.getAttribute("crossOrigin")
				) {
				  var t = document.createElement("video");
				  return (
					(t.crossOrigin = this.crossOrigin),
					"string" == typeof e
					  ? (t.src = e)
					  : ((t.src = e.src),
						e.hasAttribute("data-sampler") &&
						  t.setAttribute(
							"data-sampler",
							e.getAttribute("data-sampler")
						  )),
					t
				  );
				}
				return e;
			  },
			},
			{
			  key: "loadSource",
			  value: function (e, t, i, r) {
				switch (this._getSourceType(e)) {
				  case "image":
					this.loadImage(e, t, i, r);
					break;
				  case "video":
					this.loadVideo(e, t, i, r);
					break;
				  case "canvas":
					this.loadCanvas(e, t, i);
					break;
				  default:
					this._sourceLoadError(
					  e,
					  r,
					  "this source could not be converted into a texture: " + e
					);
				}
			  },
			},
			{
			  key: "loadSources",
			  value: function (e, t, i, r) {
				for (var s = 0; s < e.length; s++) this.loadSource(e[s], t, i, r);
			  },
			},
			{
			  key: "loadImage",
			  value: function (e) {
				var t =
					arguments.length > 1 && void 0 !== arguments[1]
					  ? arguments[1]
					  : {},
				  i = arguments.length > 2 ? arguments[2] : void 0,
				  r = arguments.length > 3 ? arguments[3] : void 0,
				  s = this.renderer.cache.getTextureFromSource(e),
				  n = Object.assign({}, t);
				if (
				  (this._parent &&
					(n = Object.assign(n, this._parent._texturesOptions)),
				  (n.loader = this),
				  s)
				) {
				  (n.sampler =
					"string" != typeof e && e.hasAttribute("data-sampler")
					  ? e.getAttribute("data-sampler")
					  : n.sampler),
					(n.fromTexture = s);
				  var a = new E(this.renderer, n);
				  return (
					this._sourceLoaded(s.source, a, i),
					void (this._parent && this._addToParent(a, s.source, "image"))
				  );
				}
				var o = this._createImage(e);
				n.sampler = o.hasAttribute("data-sampler")
				  ? o.getAttribute("data-sampler")
				  : n.sampler;
				var h = new E(this.renderer, n),
				  l = this._addElement(o, h, i, r);
				o.complete
				  ? this._sourceLoaded(o, h, i)
				  : o.decode
				  ? o
					  .decode()
					  .then(this._sourceLoaded.bind(this, o, h, i))
					  .catch(function () {
						o.addEventListener("load", l.load, !1),
						  o.addEventListener("error", l.error, !1);
					  })
				  : (o.addEventListener("load", l.load, !1),
					o.addEventListener("error", l.error, !1)),
				  this._parent && this._addToParent(h, o, "image");
			  },
			},
			{
			  key: "loadImages",
			  value: function (e, t, i, r) {
				for (var s = 0; s < e.length; s++) this.loadImage(e[s], t, i, r);
			  },
			},
			{
			  key: "loadVideo",
			  value: function (e) {
				var t =
					arguments.length > 1 && void 0 !== arguments[1]
					  ? arguments[1]
					  : {},
				  i = arguments.length > 2 ? arguments[2] : void 0,
				  r = arguments.length > 3 ? arguments[3] : void 0,
				  s = this._createVideo(e);
				(s.preload = !0),
				  (s.muted = !0),
				  (s.loop = !0),
				  s.setAttribute("playsinline", ""),
				  (s.crossOrigin = this.crossOrigin);
				var n = Object.assign({}, t);
				this._parent &&
				  (n = Object.assign(t, this._parent._texturesOptions)),
				  (n.loader = this),
				  (n.sampler = s.hasAttribute("data-sampler")
					? s.getAttribute("data-sampler")
					: n.sampler);
				var a = new E(this.renderer, n),
				  o = this._addElement(s, a, i, r);
				s.addEventListener("canplaythrough", o.load, !1),
				  s.addEventListener("error", o.error, !1),
				  s.readyState >= s.HAVE_FUTURE_DATA &&
					i &&
					this._sourceLoaded(s, a, i),
				  s.load(),
				  this._addToParent && this._addToParent(a, s, "video"),
				  "requestVideoFrameCallback" in HTMLVideoElement.prototype &&
					((o.videoFrameCallback = a._videoFrameCallback.bind(a)),
					(a._videoFrameCallbackID = s.requestVideoFrameCallback(
					  o.videoFrameCallback
					)));
			  },
			},
			{
			  key: "loadVideos",
			  value: function (e, t, i, r) {
				for (var s = 0; s < e.length; s++) this.loadVideo(e[s], t, i, r);
			  },
			},
			{
			  key: "loadCanvas",
			  value: function (e) {
				var t =
					arguments.length > 1 && void 0 !== arguments[1]
					  ? arguments[1]
					  : {},
				  i = arguments.length > 2 ? arguments[2] : void 0,
				  r = Object.assign({}, t);
				this._parent &&
				  (r = Object.assign(t, this._parent._texturesOptions)),
				  (r.loader = this),
				  (r.sampler = e.hasAttribute("data-sampler")
					? e.getAttribute("data-sampler")
					: r.sampler);
				var s = new E(this.renderer, r);
				this._addElement(e, s, i, null),
				  this._sourceLoaded(e, s, i),
				  this._parent && this._addToParent(s, e, "canvas");
			  },
			},
			{
			  key: "loadCanvases",
			  value: function (e, t, i) {
				for (var r = 0; r < e.length; r++) this.loadCanvas(e[r], t, i);
			  },
			},
			{
			  key: "_removeSource",
			  value: function (e) {
				var t = this.elements.find(function (t) {
				  return t.texture.uuid === e.uuid;
				});
				t &&
				  ("image" === e.sourceType
					? t.source.removeEventListener("load", t.load, !1)
					: "video" === e.sourceType &&
					  (t.videoFrameCallback &&
						e._videoFrameCallbackID &&
						t.source.cancelVideoFrameCallback(
						  e._videoFrameCallbackID
						),
					  t.source.removeEventListener("canplaythrough", t.load, !1),
					  t.source.pause(),
					  t.source.removeAttribute("src"),
					  t.source.load()),
				  t.source.removeEventListener("error", t.error, !1));
			  },
			},
		  ]),
		  e
		);
	  })(),
	  A = (function (e) {
		_inherits(r, e);
		var t = _createSuper(r);
		function r(e, s) {
		  var n,
			a =
			  arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
			o = a.sourcesLoaded,
			h = void 0 === o ? 0 : o,
			l = a.sourcesToLoad,
			u = void 0 === l ? 0 : l,
			d = a.complete,
			c = void 0 !== d && d,
			p = a.onComplete,
			f = void 0 === p ? function () {} : p;
		  return (
			_classCallCheck(this, r),
			((n = t.call(this, e, s.crossOrigin)).type = "PlaneTextureLoader"),
			(n._parent = s),
			"Plane" !== n._parent.type &&
			  "PingPongPlane" !== n._parent.type &&
			  "ShaderPass" !== n._parent.type &&
			  (i(n.type + ": Wrong parent type assigned to this loader"),
			  (n._parent = null)),
			(n.sourcesLoaded = h),
			(n.sourcesToLoad = u),
			(n.complete = c),
			(n.onComplete = f),
			n
		  );
		}
		return (
		  _createClass(r, [
			{
			  key: "_setLoaderSize",
			  value: function (e) {
				var t = this;
				(this.sourcesToLoad = e),
				  0 === this.sourcesToLoad &&
					((this.complete = !0),
					this.renderer.nextRender.add(function () {
					  return t.onComplete && t.onComplete();
					}));
			  },
			},
			{
			  key: "_increment",
			  value: function () {
				var e = this;
				this.sourcesLoaded++,
				  this.sourcesLoaded >= this.sourcesToLoad &&
					!this.complete &&
					((this.complete = !0),
					this.renderer.nextRender.add(function () {
					  return e.onComplete && e.onComplete();
					}));
			  },
			},
			{
			  key: "_addSourceToParent",
			  value: function (e, t) {
				if ("image" === t) {
				  var i = this._parent.images;
				  !i.find(function (t) {
					return t.src === e.src;
				  }) && i.push(e);
				} else if ("video" === t) {
				  var r = this._parent.videos;
				  !r.find(function (t) {
					return t.src === e.src;
				  }) && r.push(e);
				} else if ("canvas" === t) {
				  var s = this._parent.canvases;
				  !s.find(function (t) {
					return t.isSameNode(e);
				  }) && s.push(e);
				}
			  },
			},
			{
			  key: "_addToParent",
			  value: function (e, t, i) {
				this._addSourceToParent(t, i),
				  this._parent && e.addParent(this._parent);
			  },
			},
		  ]),
		  r
		);
	  })(M),
	  F = (function () {
		function e(t) {
		  var i = this,
			s =
			  arguments.length > 1 && void 0 !== arguments[1]
				? arguments[1]
				: "Mesh",
			n =
			  arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
			a = n.vertexShaderID,
			o = n.fragmentShaderID,
			h = n.vertexShader,
			l = n.fragmentShader,
			u = n.uniforms,
			d = void 0 === u ? {} : u,
			c = n.widthSegments,
			p = void 0 === c ? 1 : c,
			f = n.heightSegments,
			g = void 0 === f ? 1 : f,
			_ = n.renderOrder,
			m = void 0 === _ ? 0 : _,
			v = n.depthTest,
			y = void 0 === v || v,
			x = n.cullFace,
			R = void 0 === x ? "back" : x,
			P = n.texturesOptions,
			w = void 0 === P ? {} : P,
			T = n.crossOrigin,
			S = void 0 === T ? "anonymous" : T;
		  if (
			(_classCallCheck(this, e),
			(this.type = s),
			((t = (t && t.renderer) || t) && "Renderer" === t.type) ||
			  (r(
				this.type +
				  ": Curtains not passed as first argument or Curtains Renderer is missing",
				t
			  ),
			  setTimeout(function () {
				i._onErrorCallback && i._onErrorCallback();
			  }, 0)),
			(this.renderer = t),
			(this.gl = this.renderer.gl),
			!this.gl)
		  )
			return (
			  this.renderer.production ||
				r(
				  this.type +
					": Unable to create a " +
					this.type +
					" because the Renderer WebGL context is not defined"
				),
			  void setTimeout(function () {
				i._onErrorCallback && i._onErrorCallback();
			  }, 0)
			);
		  (this._canDraw = !1),
			(this.renderOrder = m),
			(this._depthTest = y),
			(this.cullFace = R),
			"back" !== this.cullFace &&
			  "front" !== this.cullFace &&
			  "none" !== this.cullFace &&
			  (this.cullFace = "back"),
			(this.textures = []),
			(this._texturesOptions = Object.assign(
			  {
				premultiplyAlpha: !1,
				anisotropy: 1,
				floatingPoint: "none",
				wrapS: this.gl.CLAMP_TO_EDGE,
				wrapT: this.gl.CLAMP_TO_EDGE,
				minFilter: this.gl.LINEAR,
				magFilter: this.gl.LINEAR,
			  },
			  w
			)),
			(this.crossOrigin = S),
			!h &&
			  a &&
			  document.getElementById(a) &&
			  (h = document.getElementById(a).innerHTML),
			!l &&
			  o &&
			  document.getElementById(o) &&
			  (l = document.getElementById(o).innerHTML),
			this._initMesh(),
			(p = parseInt(p)),
			(g = parseInt(g)),
			(this._geometry = new k(this.renderer, { width: p, height: g })),
			(this._program = new b(this.renderer, {
			  parent: this,
			  vertexShader: h,
			  fragmentShader: l,
			})),
			this._program.compiled
			  ? (this._program.createUniforms(d),
				(this.uniforms = this._program.uniformsManager.uniforms),
				this._geometry.setProgram(this._program),
				this.renderer.onSceneChange())
			  : this.renderer.nextRender.add(function () {
				  return i._onErrorCallback && i._onErrorCallback();
				});
		}
		return (
		  _createClass(e, [
			{
			  key: "_initMesh",
			  value: function () {
				var e = this;
				(this.uuid = s()),
				  (this.loader = new A(this.renderer, this, {
					sourcesLoaded: 0,
					initSourcesToLoad: 0,
					complete: !1,
					onComplete: function () {
					  e._onReadyCallback && e._onReadyCallback(),
						e.renderer.needRender();
					},
				  })),
				  (this.images = []),
				  (this.videos = []),
				  (this.canvases = []),
				  (this.userData = {}),
				  (this._canDraw = !0);
			  },
			},
			{
			  key: "_restoreContext",
			  value: function () {
				(this._canDraw = !1),
				  this._matrices && (this._matrices = null),
				  (this._program = new b(this.renderer, {
					parent: this,
					vertexShader: this._program.vsCode,
					fragmentShader: this._program.fsCode,
				  })),
				  this._program.compiled &&
					(this._geometry.restoreContext(this._program),
					this._program.createUniforms(this.uniforms),
					(this.uniforms = this._program.uniformsManager.uniforms),
					this._programRestored());
			  },
			},
			{
			  key: "setRenderTarget",
			  value: function (e) {
				e && "RenderTarget" === e.type
				  ? ("Plane" === this.type &&
					  this.renderer.scene.removePlane(this),
					(this.target = e),
					"Plane" === this.type && this.renderer.scene.addPlane(this))
				  : this.renderer.production ||
					i(
					  this.type +
						": Could not set the render target because the argument passed is not a RenderTarget class object",
					  e
					);
			  },
			},
			{
			  key: "setRenderOrder",
			  value: function () {
				var e =
				  arguments.length > 0 && void 0 !== arguments[0]
					? arguments[0]
					: 0;
				(e = isNaN(e) ? this.renderOrder : parseInt(e)) !==
				  this.renderOrder &&
				  ((this.renderOrder = e),
				  this.renderer.scene.setPlaneRenderOrder(this));
			  },
			},
			{
			  key: "createTexture",
			  value: function () {
				var e =
					arguments.length > 0 && void 0 !== arguments[0]
					  ? arguments[0]
					  : {},
				  t = new E(
					this.renderer,
					Object.assign(this._texturesOptions, e)
				  );
				return t.addParent(this), t;
			  },
			},
			{
			  key: "addTexture",
			  value: function (e) {
				e && "Texture" === e.type
				  ? e.addParent(this)
				  : this.renderer.production ||
					i(
					  this.type + ": cannot add ",
					  e,
					  " to this " +
						this.type +
						" because it is not a valid texture"
					);
			  },
			},
			{
			  key: "loadSources",
			  value: function (e) {
				for (
				  var t =
					  arguments.length > 1 && void 0 !== arguments[1]
						? arguments[1]
						: {},
					i = arguments.length > 2 ? arguments[2] : void 0,
					r = arguments.length > 3 ? arguments[3] : void 0,
					s = 0;
				  s < e.length;
				  s++
				)
				  this.loadSource(e[s], t, i, r);
			  },
			},
			{
			  key: "loadSource",
			  value: function (e) {
				var t = this,
				  r =
					arguments.length > 1 && void 0 !== arguments[1]
					  ? arguments[1]
					  : {},
				  s = arguments.length > 2 ? arguments[2] : void 0,
				  n = arguments.length > 3 ? arguments[3] : void 0;
				this.loader.loadSource(
				  e,
				  Object.assign(r, this._texturesOptions),
				  function (e) {
					s && s(e);
				  },
				  function (e, r) {
					t.renderer.production ||
					  i(
						t.type +
						  ": this HTML tag could not be converted into a texture:",
						e.tagName
					  ),
					  n && n(e, r);
				  }
				);
			  },
			},
			{
			  key: "loadImage",
			  value: function (e) {
				var t = this,
				  r =
					arguments.length > 1 && void 0 !== arguments[1]
					  ? arguments[1]
					  : {},
				  s = arguments.length > 2 ? arguments[2] : void 0,
				  n = arguments.length > 3 ? arguments[3] : void 0;
				this.loader.loadImage(
				  e,
				  Object.assign(r, this._texturesOptions),
				  function (e) {
					s && s(e);
				  },
				  function (e, r) {
					t.renderer.production ||
					  i(
						t.type + ": There has been an error:\n",
						r,
						"\nwhile loading this image:\n",
						e
					  ),
					  n && n(e, r);
				  }
				);
			  },
			},
			{
			  key: "loadVideo",
			  value: function (e) {
				var t = this,
				  r =
					arguments.length > 1 && void 0 !== arguments[1]
					  ? arguments[1]
					  : {},
				  s = arguments.length > 2 ? arguments[2] : void 0,
				  n = arguments.length > 3 ? arguments[3] : void 0;
				this.loader.loadVideo(
				  e,
				  Object.assign(r, this._texturesOptions),
				  function (e) {
					s && s(e);
				  },
				  function (e, r) {
					t.renderer.production ||
					  i(
						t.type + ": There has been an error:\n",
						r,
						"\nwhile loading this video:\n",
						e
					  ),
					  n && n(e, r);
				  }
				);
			  },
			},
			{
			  key: "loadCanvas",
			  value: function (e) {
				var t =
					arguments.length > 1 && void 0 !== arguments[1]
					  ? arguments[1]
					  : {},
				  i = arguments.length > 2 ? arguments[2] : void 0;
				this.loader.loadCanvas(
				  e,
				  Object.assign(t, this._texturesOptions),
				  function (e) {
					i && i(e);
				  }
				);
			  },
			},
			{
			  key: "loadImages",
			  value: function (e) {
				for (
				  var t =
					  arguments.length > 1 && void 0 !== arguments[1]
						? arguments[1]
						: {},
					i = arguments.length > 2 ? arguments[2] : void 0,
					r = arguments.length > 3 ? arguments[3] : void 0,
					s = 0;
				  s < e.length;
				  s++
				)
				  this.loadImage(e[s], t, i, r);
			  },
			},
			{
			  key: "loadVideos",
			  value: function (e) {
				for (
				  var t =
					  arguments.length > 1 && void 0 !== arguments[1]
						? arguments[1]
						: {},
					i = arguments.length > 2 ? arguments[2] : void 0,
					r = arguments.length > 3 ? arguments[3] : void 0,
					s = 0;
				  s < e.length;
				  s++
				)
				  this.loadVideo(e[s], t, i, r);
			  },
			},
			{
			  key: "loadCanvases",
			  value: function (e) {
				for (
				  var t =
					  arguments.length > 1 && void 0 !== arguments[1]
						? arguments[1]
						: {},
					i = arguments.length > 2 ? arguments[2] : void 0,
					r = 0;
				  r < e.length;
				  r++
				)
				  this.loadCanvas(e[r], t, i);
			  },
			},
			{
			  key: "playVideos",
			  value: function () {
				for (var e = this, t = 0; t < this.textures.length; t++) {
				  var r = this.textures[t];
				  if ("video" === r.sourceType) {
					var s = r.source.play();
					void 0 !== s &&
					  s.catch(function (t) {
						e.renderer.production ||
						  i(e.type + ": Could not play the video : ", t);
					  });
				  }
				}
			  },
			},
			{
			  key: "_draw",
			  value: function () {
				this.renderer.setDepthTest(this._depthTest),
				  this.renderer.setFaceCulling(this.cullFace),
				  this._program.updateUniforms(),
				  this._geometry.bindBuffers(),
				  (this.renderer.state.forceBufferUpdate = !1);
				for (var e = 0; e < this.textures.length; e++)
				  if (
					(this.textures[e]._draw(),
					this.textures[e]._sampler.isActive &&
					  !this.textures[e]._sampler.isTextureBound)
				  )
					return;
				this._geometry.draw(),
				  (this.renderer.state.activeTexture = null),
				  this._onAfterRenderCallback && this._onAfterRenderCallback();
			  },
			},
			{
			  key: "onError",
			  value: function (e) {
				return e && (this._onErrorCallback = e), this;
			  },
			},
			{
			  key: "onLoading",
			  value: function (e) {
				return e && (this._onLoadingCallback = e), this;
			  },
			},
			{
			  key: "onReady",
			  value: function (e) {
				return e && (this._onReadyCallback = e), this;
			  },
			},
			{
			  key: "onRender",
			  value: function (e) {
				return e && (this._onRenderCallback = e), this;
			  },
			},
			{
			  key: "onAfterRender",
			  value: function (e) {
				return e && (this._onAfterRenderCallback = e), this;
			  },
			},
			{
			  key: "remove",
			  value: function () {
				(this._canDraw = !1),
				  this.target && this.renderer.bindFrameBuffer(null),
				  this._dispose(),
				  "Plane" === this.type
					? this.renderer.removePlane(this)
					: "ShaderPass" === this.type &&
					  (this.target &&
						((this.target._shaderPass = null),
						this.target.remove(),
						(this.target = null)),
					  this.renderer.removeShaderPass(this));
			  },
			},
			{
			  key: "_dispose",
			  value: function () {
				if (this.gl) {
				  this._geometry && this._geometry.dispose(),
					this.target &&
					  "ShaderPass" === this.type &&
					  (this.renderer.removeRenderTarget(this.target),
					  this.textures.shift());
				  for (var e = 0; e < this.textures.length; e++)
					this.textures[e]._dispose();
				  this.textures = [];
				}
			  },
			},
		  ]),
		  e
		);
	  })(),
	  O = new P(),
	  D = new P(),
	  L = (function (e) {
		_inherits(r, e);
		var t = _createSuper(r);
		function r(e, s) {
		  var n,
			a =
			  arguments.length > 2 && void 0 !== arguments[2]
				? arguments[2]
				: "DOMMesh",
			o =
			  arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
			h = o.widthSegments,
			l = o.heightSegments,
			u = o.renderOrder,
			d = o.depthTest,
			c = o.cullFace,
			p = o.uniforms,
			f = o.vertexShaderID,
			g = o.fragmentShaderID,
			_ = o.vertexShader,
			m = o.fragmentShader,
			v = o.texturesOptions,
			y = o.crossOrigin;
		  return (
			_classCallCheck(this, r),
			(f = f || (s && s.getAttribute("data-vs-id"))),
			(g = g || (s && s.getAttribute("data-fs-id"))),
			(n = t.call(this, e, a, {
			  widthSegments: h,
			  heightSegments: l,
			  renderOrder: u,
			  depthTest: d,
			  cullFace: c,
			  uniforms: p,
			  vertexShaderID: f,
			  fragmentShaderID: g,
			  vertexShader: _,
			  fragmentShader: m,
			  texturesOptions: v,
			  crossOrigin: y,
			})).gl
			  ? ((n.htmlElement = s),
				(n.htmlElement && 0 !== n.htmlElement.length) ||
				  n.renderer.production ||
				  i(
					n.type +
					  ": The HTML element you specified does not currently exists in the DOM"
				  ),
				n._setDocumentSizes(),
				n)
			  : _possibleConstructorReturn(n)
		  );
		}
		return (
		  _createClass(r, [
			{
			  key: "_setDocumentSizes",
			  value: function () {
				var e = this.htmlElement.getBoundingClientRect();
				this._boundingRect || (this._boundingRect = {}),
				  (this._boundingRect.document = {
					width: e.width * this.renderer.pixelRatio,
					height: e.height * this.renderer.pixelRatio,
					top: e.top * this.renderer.pixelRatio,
					left: e.left * this.renderer.pixelRatio,
				  });
			  },
			},
			{
			  key: "getBoundingRect",
			  value: function () {
				return {
				  width: this._boundingRect.document.width,
				  height: this._boundingRect.document.height,
				  top: this._boundingRect.document.top,
				  left: this._boundingRect.document.left,
				  right:
					this._boundingRect.document.left +
					this._boundingRect.document.width,
				  bottom:
					this._boundingRect.document.top +
					this._boundingRect.document.height,
				};
			  },
			},
			{
			  key: "resize",
			  value: function () {
				var e = this;
				this._setDocumentSizes(),
				  "Plane" === this.type &&
					(this.setPerspective(
					  this.camera.fov,
					  this.camera.near,
					  this.camera.far
					),
					this._setWorldSizes(),
					this._applyWorldPositions());
				for (var t = 0; t < this.textures.length; t++)
				  this.textures[t].resize();
				this.renderer.nextRender.add(function () {
				  return e._onAfterResizeCallback && e._onAfterResizeCallback();
				});
			  },
			},
			{
			  key: "mouseToPlaneCoords",
			  value: function (e) {
				var t = this.scale ? this.scale : D.set(1, 1),
				  i = O.set(
					(this._boundingRect.document.width -
					  this._boundingRect.document.width * t.x) /
					  2,
					(this._boundingRect.document.height -
					  this._boundingRect.document.height * t.y) /
					  2
				  ),
				  r =
					(this._boundingRect.document.width * t.x) /
					this.renderer.pixelRatio,
				  s =
					(this._boundingRect.document.height * t.y) /
					this.renderer.pixelRatio,
				  n =
					(this._boundingRect.document.top + i.y) /
					this.renderer.pixelRatio,
				  a =
					(this._boundingRect.document.left + i.x) /
					this.renderer.pixelRatio;
				return O.set(((e.x - a) / r) * 2 - 1, 1 - ((e.y - n) / s) * 2);
			  },
			},
			{
			  key: "onAfterResize",
			  value: function (e) {
				return e && (this._onAfterResizeCallback = e), this;
			  },
			},
		  ]),
		  r
		);
	  })(F),
	  z = (function () {
		function e() {
		  var t =
			  arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
			i = t.fov,
			r = void 0 === i ? 50 : i,
			s = t.near,
			n = void 0 === s ? 0.1 : s,
			a = t.far,
			o = void 0 === a ? 150 : a,
			h = t.width,
			l = t.height,
			u = t.pixelRatio,
			d = void 0 === u ? 1 : u;
		  _classCallCheck(this, e),
			(this.position = new w()),
			(this.projectionMatrix = new R()),
			(this.worldMatrix = new R()),
			(this.viewMatrix = new R()),
			(this._shouldUpdate = !1),
			this.setSize(),
			this.setPerspective(r, n, o, h, l, d);
		}
		return (
		  _createClass(e, [
			{
			  key: "setFov",
			  value: function (e) {
				(e = isNaN(e) ? this.fov : parseFloat(e)),
				  (e = Math.max(1, Math.min(e, 179))) !== this.fov &&
					((this.fov = e),
					this.setPosition(),
					(this._shouldUpdate = !0)),
				  this.setCSSPerspective();
			  },
			},
			{
			  key: "setNear",
			  value: function (e) {
				(e = isNaN(e) ? this.near : parseFloat(e)),
				  (e = Math.max(e, 0.01)) !== this.near &&
					((this.near = e), (this._shouldUpdate = !0));
			  },
			},
			{
			  key: "setFar",
			  value: function (e) {
				(e = isNaN(e) ? this.far : parseFloat(e)),
				  (e = Math.max(e, 50)) !== this.far &&
					((this.far = e), (this._shouldUpdate = !0));
			  },
			},
			{
			  key: "setPixelRatio",
			  value: function (e) {
				e !== this.pixelRatio && (this._shouldUpdate = !0),
				  (this.pixelRatio = e);
			  },
			},
			{
			  key: "setSize",
			  value: function (e, t) {
				(e === this.width && t === this.height) ||
				  (this._shouldUpdate = !0),
				  (this.width = e),
				  (this.height = t);
			  },
			},
			{
			  key: "setPerspective",
			  value: function (e, t, i, r, s, n) {
				this.setPixelRatio(n),
				  this.setSize(r, s),
				  this.setFov(e),
				  this.setNear(t),
				  this.setFar(i),
				  this._shouldUpdate && this.updateProjectionMatrix();
			  },
			},
			{
			  key: "setPosition",
			  value: function () {
				this.position.set(0, 0, 1),
				  this.worldMatrix.setFromArray([
					1,
					0,
					0,
					0,
					0,
					1,
					0,
					0,
					0,
					0,
					1,
					0,
					this.position.x,
					this.position.y,
					this.position.z,
					1,
				  ]),
				  (this.viewMatrix = this.viewMatrix
					.copy(this.worldMatrix)
					.getInverse());
			  },
			},
			{
			  key: "setCSSPerspective",
			  value: function () {
				this.CSSPerspective =
				  Math.pow(
					Math.pow(this.width / (2 * this.pixelRatio), 2) +
					  Math.pow(this.height / (2 * this.pixelRatio), 2),
					0.5
				  ) / Math.tan((0.5 * this.fov * Math.PI) / 180);
			  },
			},
			{
			  key: "getScreenRatiosFromFov",
			  value: function () {
				var e =
					arguments.length > 0 && void 0 !== arguments[0]
					  ? arguments[0]
					  : 0,
				  t = this.position.z;
				e < t ? (e -= t) : (e += t);
				var i = (this.fov * Math.PI) / 180,
				  r = 2 * Math.tan(i / 2) * Math.abs(e);
				return { width: (r * this.width) / this.height, height: r };
			  },
			},
			{
			  key: "updateProjectionMatrix",
			  value: function () {
				var e = this.width / this.height,
				  t = this.near * Math.tan((Math.PI / 180) * 0.5 * this.fov),
				  i = 2 * t,
				  r = e * i,
				  s = -0.5 * r,
				  n = s + r,
				  a = t - i,
				  o = (2 * this.near) / (n - s),
				  h = (2 * this.near) / (t - a),
				  l = (n + s) / (n - s),
				  u = (t + a) / (t - a),
				  d = -(this.far + this.near) / (this.far - this.near),
				  c = (-2 * this.far * this.near) / (this.far - this.near);
				this.projectionMatrix.setFromArray([
				  o,
				  0,
				  0,
				  0,
				  0,
				  h,
				  0,
				  0,
				  l,
				  u,
				  d,
				  -1,
				  0,
				  0,
				  c,
				  0,
				]);
			  },
			},
			{
			  key: "forceUpdate",
			  value: function () {
				this._shouldUpdate = !0;
			  },
			},
			{
			  key: "cancelUpdate",
			  value: function () {
				this._shouldUpdate = !1;
			  },
			},
		  ]),
		  e
		);
	  })(),
	  U = (function () {
		function e() {
		  var t =
			  arguments.length > 0 && void 0 !== arguments[0]
				? arguments[0]
				: new Float32Array([0, 0, 0, 1]),
			i =
			  arguments.length > 1 && void 0 !== arguments[1]
				? arguments[1]
				: "XYZ";
		  _classCallCheck(this, e),
			(this.type = "Quat"),
			(this.elements = t),
			(this.axisOrder = i);
		}
		return (
		  _createClass(e, [
			{
			  key: "setFromArray",
			  value: function (e) {
				return (
				  (this.elements[0] = e[0]),
				  (this.elements[1] = e[1]),
				  (this.elements[2] = e[2]),
				  (this.elements[3] = e[3]),
				  this
				);
			  },
			},
			{
			  key: "setAxisOrder",
			  value: function (e) {
				switch ((e = e.toUpperCase())) {
				  case "XYZ":
				  case "YXZ":
				  case "ZXY":
				  case "ZYX":
				  case "YZX":
				  case "XZY":
					this.axisOrder = e;
					break;
				  default:
					this.axisOrder = "XYZ";
				}
				return this;
			  },
			},
			{
			  key: "copy",
			  value: function (e) {
				return (
				  (this.elements = e.elements),
				  (this.axisOrder = e.axisOrder),
				  this
				);
			  },
			},
			{
			  key: "clone",
			  value: function () {
				return new e().copy(this);
			  },
			},
			{
			  key: "equals",
			  value: function (e) {
				return (
				  this.elements[0] === e.elements[0] &&
				  this.elements[1] === e.elements[1] &&
				  this.elements[2] === e.elements[2] &&
				  this.elements[3] === e.elements[3] &&
				  this.axisOrder === e.axisOrder
				);
			  },
			},
			{
			  key: "setFromVec3",
			  value: function (e) {
				var t = 0.5 * e.x,
				  i = 0.5 * e.y,
				  r = 0.5 * e.z,
				  s = Math.cos(t),
				  n = Math.cos(i),
				  a = Math.cos(r),
				  o = Math.sin(t),
				  h = Math.sin(i),
				  l = Math.sin(r);
				return (
				  "XYZ" === this.axisOrder
					? ((this.elements[0] = o * n * a + s * h * l),
					  (this.elements[1] = s * h * a - o * n * l),
					  (this.elements[2] = s * n * l + o * h * a),
					  (this.elements[3] = s * n * a - o * h * l))
					: "YXZ" === this.axisOrder
					? ((this.elements[0] = o * n * a + s * h * l),
					  (this.elements[1] = s * h * a - o * n * l),
					  (this.elements[2] = s * n * l - o * h * a),
					  (this.elements[3] = s * n * a + o * h * l))
					: "ZXY" === this.axisOrder
					? ((this.elements[0] = o * n * a - s * h * l),
					  (this.elements[1] = s * h * a + o * n * l),
					  (this.elements[2] = s * n * l + o * h * a),
					  (this.elements[3] = s * n * a - o * h * l))
					: "ZYX" === this.axisOrder
					? ((this.elements[0] = o * n * a - s * h * l),
					  (this.elements[1] = s * h * a + o * n * l),
					  (this.elements[2] = s * n * l - o * h * a),
					  (this.elements[3] = s * n * a + o * h * l))
					: "YZX" === this.axisOrder
					? ((this.elements[0] = o * n * a + s * h * l),
					  (this.elements[1] = s * h * a + o * n * l),
					  (this.elements[2] = s * n * l - o * h * a),
					  (this.elements[3] = s * n * a - o * h * l))
					: "XZY" === this.axisOrder &&
					  ((this.elements[0] = o * n * a - s * h * l),
					  (this.elements[1] = s * h * a - o * n * l),
					  (this.elements[2] = s * n * l + o * h * a),
					  (this.elements[3] = s * n * a + o * h * l)),
				  this
				);
			  },
			},
		  ]),
		  e
		);
	  })(),
	  I = new P(),
	  N = new w(),
	  V = new w(),
	  B = new w(),
	  W = new w(),
	  G = new w(),
	  X = new w(),
	  j = new w(),
	  H = new w(),
	  Y = new U(),
	  q = new w(0.5, 0.5, 0),
	  Q = new w(),
	  Z = new w(),
	  K = new w(),
	  J = new w(),
	  $ = new P(),
	  ee = (function (e) {
		_inherits(r, e);
		var t = _createSuper(r);
		function r(e, i) {
		  var s,
			n =
			  arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
			a = n.widthSegments,
			o = n.heightSegments,
			h = n.renderOrder,
			l = n.depthTest,
			u = n.cullFace,
			d = n.uniforms,
			c = n.vertexShaderID,
			p = n.fragmentShaderID,
			f = n.vertexShader,
			g = n.fragmentShader,
			_ = n.texturesOptions,
			m = n.crossOrigin,
			v = n.alwaysDraw,
			y = void 0 !== v && v,
			x = n.visible,
			b = void 0 === x || x,
			k = n.transparent,
			R = void 0 !== k && k,
			P = n.drawCheckMargins,
			w = void 0 === P ? { top: 0, right: 0, bottom: 0, left: 0 } : P,
			T = n.autoloadSources,
			S = void 0 === T || T,
			C = n.watchScroll,
			E = void 0 === C || C,
			M = n.fov,
			A = void 0 === M ? 50 : M;
		  return (
			_classCallCheck(this, r),
			(s = t.call(this, e, i, "Plane", {
			  widthSegments: a,
			  heightSegments: o,
			  renderOrder: h,
			  depthTest: l,
			  cullFace: u,
			  uniforms: d,
			  vertexShaderID: c,
			  fragmentShaderID: p,
			  vertexShader: f,
			  fragmentShader: g,
			  texturesOptions: _,
			  crossOrigin: m,
			})).gl
			  ? ((s.index = s.renderer.planes.length),
				(s.target = null),
				(s.alwaysDraw = y),
				(s._shouldDraw = !0),
				(s.visible = b),
				(s._transparent = R),
				(s.drawCheckMargins = w),
				(s.autoloadSources = S),
				(s.watchScroll = E),
				(s._updateMVMatrix = !1),
				(s.camera = new z({
				  fov: A,
				  width: s.renderer._boundingRect.width,
				  height: s.renderer._boundingRect.height,
				  pixelRatio: s.renderer.pixelRatio,
				})),
				s._program.compiled &&
				  (s._initPlane(),
				  s.renderer.scene.addPlane(_assertThisInitialized(s)),
				  s.renderer.planes.push(_assertThisInitialized(s))),
				s)
			  : _possibleConstructorReturn(s)
		  );
		}
		return (
		  _createClass(r, [
			{
			  key: "_programRestored",
			  value: function () {
				this.target &&
				  this.setRenderTarget(
					this.renderer.renderTargets[this.target.index]
				  ),
				  this._initMatrices(),
				  this.setPerspective(
					this.camera.fov,
					this.camera.near,
					this.camera.far
				  ),
				  this._setWorldSizes(),
				  this._applyWorldPositions(),
				  this.renderer.scene.addPlane(this);
				for (var e = 0; e < this.textures.length; e++)
				  (this.textures[e]._parent = this),
					this.textures[e]._restoreContext();
				this._canDraw = !0;
			  },
			},
			{
			  key: "_initPlane",
			  value: function () {
				this._initTransformValues(),
				  this._initPositions(),
				  this.setPerspective(
					this.camera.fov,
					this.camera.near,
					this.camera.far
				  ),
				  this._initSources();
			  },
			},
			{
			  key: "_initTransformValues",
			  value: function () {
				var e = this;
				(this.rotation = new w()),
				  this.rotation.onChange(function () {
					return e._applyRotation();
				  }),
				  (this.quaternion = new U()),
				  (this.relativeTranslation = new w()),
				  this.relativeTranslation.onChange(function () {
					return e._setTranslation();
				  }),
				  (this._translation = new w()),
				  (this.scale = new w(1)),
				  this.scale.onChange(function () {
					(e.scale.z = 1), e._applyScale();
				  }),
				  (this.transformOrigin = new w(0.5, 0.5, 0)),
				  this.transformOrigin.onChange(function () {
					e._setWorldTransformOrigin(), (e._updateMVMatrix = !0);
				  });
			  },
			},
			{
			  key: "resetPlane",
			  value: function (e) {
				this._initTransformValues(),
				  this._setWorldTransformOrigin(),
				  null !== e && e
					? ((this.htmlElement = e), this.resize())
					: e ||
					  this.renderer.production ||
					  i(
						this.type +
						  ": You are trying to reset a plane with a HTML element that does not exist. The old HTML element will be kept instead."
					  );
			  },
			},
			{
			  key: "removeRenderTarget",
			  value: function () {
				this.target &&
				  (this.renderer.scene.removePlane(this),
				  (this.target = null),
				  this.renderer.scene.addPlane(this));
			  },
			},
			{
			  key: "_initPositions",
			  value: function () {
				this._initMatrices(),
				  this._setWorldSizes(),
				  this._applyWorldPositions();
			  },
			},
			{
			  key: "_initMatrices",
			  value: function () {
				var e = new R();
				this._matrices = {
				  world: { matrix: e },
				  modelView: {
					name: "uMVMatrix",
					matrix: e,
					location: this.gl.getUniformLocation(
					  this._program.program,
					  "uMVMatrix"
					),
				  },
				  projection: {
					name: "uPMatrix",
					matrix: e,
					location: this.gl.getUniformLocation(
					  this._program.program,
					  "uPMatrix"
					),
				  },
				  modelViewProjection: { matrix: e },
				};
			  },
			},
			{
			  key: "_setPerspectiveMatrix",
			  value: function () {
				this.camera._shouldUpdate &&
				  (this.renderer.useProgram(this._program),
				  this.gl.uniformMatrix4fv(
					this._matrices.projection.location,
					!1,
					this._matrices.projection.matrix.elements
				  )),
				  this.camera.cancelUpdate();
			  },
			},
			{
			  key: "setPerspective",
			  value: function (e, t, i) {
				this.camera.setPerspective(
				  e,
				  t,
				  i,
				  this.renderer._boundingRect.width,
				  this.renderer._boundingRect.height,
				  this.renderer.pixelRatio
				),
				  this.renderer.state.isContextLost && this.camera.forceUpdate(),
				  (this._matrices.projection.matrix =
					this.camera.projectionMatrix),
				  this.camera._shouldUpdate &&
					(this._setWorldSizes(),
					this._applyWorldPositions(),
					(this._translation.z =
					  this.relativeTranslation.z / this.camera.CSSPerspective)),
				  (this._updateMVMatrix = this.camera._shouldUpdate);
			  },
			},
			{
			  key: "_setMVMatrix",
			  value: function () {
				this._updateMVMatrix &&
				  ((this._matrices.world.matrix =
					this._matrices.world.matrix.composeFromOrigin(
					  this._translation,
					  this.quaternion,
					  this.scale,
					  this._boundingRect.world.transformOrigin
					)),
				  this._matrices.world.matrix.scale({
					x: this._boundingRect.world.width,
					y: this._boundingRect.world.height,
					z: 1,
				  }),
				  this._matrices.modelView.matrix.copy(
					this._matrices.world.matrix
				  ),
				  (this._matrices.modelView.matrix.elements[14] -=
					this.camera.position.z),
				  (this._matrices.modelViewProjection.matrix =
					this._matrices.projection.matrix.multiply(
					  this._matrices.modelView.matrix
					)),
				  this.alwaysDraw || this._shouldDrawCheck(),
				  this.renderer.useProgram(this._program),
				  this.gl.uniformMatrix4fv(
					this._matrices.modelView.location,
					!1,
					this._matrices.modelView.matrix.elements
				  )),
				  (this._updateMVMatrix = !1);
			  },
			},
			{
			  key: "_setWorldTransformOrigin",
			  value: function () {
				this._boundingRect.world.transformOrigin = new w(
				  (2 * this.transformOrigin.x - 1) *
					this._boundingRect.world.width,
				  -(2 * this.transformOrigin.y - 1) *
					this._boundingRect.world.height,
				  this.transformOrigin.z
				);
			  },
			},
			{
			  key: "_documentToWorldSpace",
			  value: function (e) {
				return V.set(
				  ((e.x * this.renderer.pixelRatio) /
					this.renderer._boundingRect.width) *
					this._boundingRect.world.ratios.width,
				  ((-e.y * this.renderer.pixelRatio) /
					this.renderer._boundingRect.height) *
					this._boundingRect.world.ratios.height,
				  e.z
				);
			  },
			},
			{
			  key: "_setWorldSizes",
			  value: function () {
				var e = this.camera.getScreenRatiosFromFov();
				(this._boundingRect.world = {
				  width:
					((this._boundingRect.document.width /
					  this.renderer._boundingRect.width) *
					  e.width) /
					2,
				  height:
					((this._boundingRect.document.height /
					  this.renderer._boundingRect.height) *
					  e.height) /
					2,
				  ratios: e,
				}),
				  this._setWorldTransformOrigin();
			  },
			},
			{
			  key: "_setWorldPosition",
			  value: function () {
				var e =
					this._boundingRect.document.width / 2 +
					this._boundingRect.document.left,
				  t =
					this._boundingRect.document.height / 2 +
					this._boundingRect.document.top,
				  i =
					this.renderer._boundingRect.width / 2 +
					this.renderer._boundingRect.left,
				  r =
					this.renderer._boundingRect.height / 2 +
					this.renderer._boundingRect.top;
				(this._boundingRect.world.top =
				  ((r - t) / this.renderer._boundingRect.height) *
				  this._boundingRect.world.ratios.height),
				  (this._boundingRect.world.left =
					((e - i) / this.renderer._boundingRect.width) *
					this._boundingRect.world.ratios.width);
			  },
			},
			{
			  key: "setScale",
			  value: function (e) {
				e.type && "Vec2" === e.type
				  ? (e.sanitizeNaNValuesWith(this.scale).max(I.set(0.001, 0.001)),
					(e.x === this.scale.x && e.y === this.scale.y) ||
					  (this.scale.set(e.x, e.y, 1), this._applyScale()))
				  : this.renderer.production ||
					i(
					  this.type +
						": Cannot set scale because the parameter passed is not of Vec2 type:",
					  e
					);
			  },
			},
			{
			  key: "_applyScale",
			  value: function () {
				for (var e = 0; e < this.textures.length; e++)
				  this.textures[e].resize();
				this._updateMVMatrix = !0;
			  },
			},
			{
			  key: "setRotation",
			  value: function (e) {
				e.type && "Vec3" === e.type
				  ? (e.sanitizeNaNValuesWith(this.rotation),
					e.equals(this.rotation) ||
					  (this.rotation.copy(e), this._applyRotation()))
				  : this.renderer.production ||
					i(
					  this.type +
						": Cannot set rotation because the parameter passed is not of Vec3 type:",
					  e
					);
			  },
			},
			{
			  key: "_applyRotation",
			  value: function () {
				this.quaternion.setFromVec3(this.rotation),
				  (this._updateMVMatrix = !0);
			  },
			},
			{
			  key: "setTransformOrigin",
			  value: function (e) {
				e.type && "Vec3" === e.type
				  ? (e.sanitizeNaNValuesWith(this.transformOrigin),
					e.equals(this.transformOrigin) ||
					  (this.transformOrigin.copy(e),
					  this._setWorldTransformOrigin(),
					  (this._updateMVMatrix = !0)))
				  : this.renderer.production ||
					i(
					  this.type +
						": Cannot set transform origin because the parameter passed is not of Vec3 type:",
					  e
					);
			  },
			},
			{
			  key: "_setTranslation",
			  value: function () {
				var e = N.set(0, 0, 0);
				this.relativeTranslation.equals(e) ||
				  (e = this._documentToWorldSpace(this.relativeTranslation)),
				  this._translation.set(
					this._boundingRect.world.left + e.x,
					this._boundingRect.world.top + e.y,
					this.relativeTranslation.z / this.camera.CSSPerspective
				  ),
				  (this._updateMVMatrix = !0);
			  },
			},
			{
			  key: "setRelativeTranslation",
			  value: function (e) {
				e.type && "Vec3" === e.type
				  ? (e.sanitizeNaNValuesWith(this.relativeTranslation),
					e.equals(this.relativeTranslation) ||
					  (this.relativeTranslation.copy(e), this._setTranslation()))
				  : this.renderer.production ||
					i(
					  this.type +
						": Cannot set translation because the parameter passed is not of Vec3 type:",
					  e
					);
			  },
			},
			{
			  key: "_applyWorldPositions",
			  value: function () {
				this._setWorldPosition(), this._setTranslation();
			  },
			},
			{
			  key: "updatePosition",
			  value: function () {
				this._setDocumentSizes(), this._applyWorldPositions();
			  },
			},
			{
			  key: "updateScrollPosition",
			  value: function (e, t) {
				(e || t) &&
				  ((this._boundingRect.document.top +=
					t * this.renderer.pixelRatio),
				  (this._boundingRect.document.left +=
					e * this.renderer.pixelRatio),
				  this._applyWorldPositions());
			  },
			},
			{
			  key: "_getIntersection",
			  value: function (e, t) {
				for (var i = t.clone().sub(e), r = e.clone(); r.z > -1; )
				  r.add(i);
				return r;
			  },
			},
			{
			  key: "_getNearPlaneIntersections",
			  value: function (e, t, i) {
				var r = this._matrices.modelViewProjection.matrix;
				if (1 === i.length)
				  0 === i[0]
					? ((t[0] = this._getIntersection(
						t[1],
						j.set(0.95, 1, 0).applyMat4(r)
					  )),
					  t.push(
						this._getIntersection(
						  t[3],
						  H.set(-1, -0.95, 0).applyMat4(r)
						)
					  ))
					: 1 === i[0]
					? ((t[1] = this._getIntersection(
						t[0],
						j.set(-0.95, 1, 0).applyMat4(r)
					  )),
					  t.push(
						this._getIntersection(
						  t[2],
						  H.set(1, -0.95, 0).applyMat4(r)
						)
					  ))
					: 2 === i[0]
					? ((t[2] = this._getIntersection(
						t[3],
						j.set(-0.95, -1, 0).applyMat4(r)
					  )),
					  t.push(
						this._getIntersection(
						  t[1],
						  H.set(1, 0.95, 0).applyMat4(r)
						)
					  ))
					: 3 === i[0] &&
					  ((t[3] = this._getIntersection(
						t[2],
						j.set(0.95, -1, 0).applyMat4(r)
					  )),
					  t.push(
						this._getIntersection(
						  t[0],
						  H.set(-1, 0.95, 0).applyMat4(r)
						)
					  ));
				else if (2 === i.length)
				  0 === i[0] && 1 === i[1]
					? ((t[0] = this._getIntersection(
						t[3],
						j.set(-1, -0.95, 0).applyMat4(r)
					  )),
					  (t[1] = this._getIntersection(
						t[2],
						H.set(1, -0.95, 0).applyMat4(r)
					  )))
					: 1 === i[0] && 2 === i[1]
					? ((t[1] = this._getIntersection(
						t[0],
						j.set(-0.95, 1, 0).applyMat4(r)
					  )),
					  (t[2] = this._getIntersection(
						t[3],
						H.set(-0.95, -1, 0).applyMat4(r)
					  )))
					: 2 === i[0] && 3 === i[1]
					? ((t[2] = this._getIntersection(
						t[1],
						j.set(1, 0.95, 0).applyMat4(r)
					  )),
					  (t[3] = this._getIntersection(
						t[0],
						H.set(-1, 0.95, 0).applyMat4(r)
					  )))
					: 0 === i[0] &&
					  3 === i[1] &&
					  ((t[0] = this._getIntersection(
						t[1],
						j.set(0.95, 1, 0).applyMat4(r)
					  )),
					  (t[3] = this._getIntersection(
						t[2],
						H.set(0.95, -1, 0).applyMat4(r)
					  )));
				else if (3 === i.length) {
				  for (var s = 0, n = 0; n < e.length; n++)
					i.includes(n) || (s = n);
				  (t = [t[s]]),
					0 === s
					  ? (t.push(
						  this._getIntersection(
							t[0],
							j.set(-0.95, 1, 0).applyMat4(r)
						  )
						),
						t.push(
						  this._getIntersection(
							t[0],
							H.set(-1, 0.95, 0).applyMat4(r)
						  )
						))
					  : 1 === s
					  ? (t.push(
						  this._getIntersection(
							t[0],
							j.set(0.95, 1, 0).applyMat4(r)
						  )
						),
						t.push(
						  this._getIntersection(
							t[0],
							H.set(1, 0.95, 0).applyMat4(r)
						  )
						))
					  : 2 === s
					  ? (t.push(
						  this._getIntersection(
							t[0],
							j.set(0.95, -1, 0).applyMat4(r)
						  )
						),
						t.push(
						  this._getIntersection(
							t[0],
							H.set(1, -0.95, 0).applyMat4(r)
						  )
						))
					  : 3 === s &&
						(t.push(
						  this._getIntersection(
							t[0],
							j.set(-0.95, -1, 0).applyMat4(r)
						  )
						),
						t.push(
						  this._getIntersection(
							t[0],
							H.set(-1.95, 0).applyMat4(r)
						  )
						));
				} else
				  for (var a = 0; a < e.length; a++)
					(t[a][0] = 1e4), (t[a][1] = 1e4);
				return t;
			  },
			},
			{
			  key: "_getWorldCoords",
			  value: function () {
				for (
				  var e = [
					  B.set(-1, 1, 0),
					  W.set(1, 1, 0),
					  G.set(1, -1, 0),
					  X.set(-1, -1, 0),
					],
					t = [],
					i = [],
					r = 0;
				  r < e.length;
				  r++
				) {
				  var s = e[r].applyMat4(
					this._matrices.modelViewProjection.matrix
				  );
				  t.push(s), Math.abs(s.z) > 1 && i.push(r);
				}
				i.length && (t = this._getNearPlaneIntersections(e, t, i));
				for (
				  var n = 1 / 0, a = -1 / 0, o = 1 / 0, h = -1 / 0, l = 0;
				  l < t.length;
				  l++
				) {
				  var u = t[l];
				  u.x < n && (n = u.x),
					u.x > a && (a = u.x),
					u.y < o && (o = u.y),
					u.y > h && (h = u.y);
				}
				return { top: h, right: a, bottom: o, left: n };
			  },
			},
			{
			  key: "_computeWebGLBoundingRect",
			  value: function () {
				var e = this._getWorldCoords(),
				  t = {
					top: 1 - (e.top + 1) / 2,
					right: (e.right + 1) / 2,
					bottom: 1 - (e.bottom + 1) / 2,
					left: (e.left + 1) / 2,
				  };
				(t.width = t.right - t.left),
				  (t.height = t.bottom - t.top),
				  (this._boundingRect.worldToDocument = {
					width: t.width * this.renderer._boundingRect.width,
					height: t.height * this.renderer._boundingRect.height,
					top:
					  t.top * this.renderer._boundingRect.height +
					  this.renderer._boundingRect.top,
					left:
					  t.left * this.renderer._boundingRect.width +
					  this.renderer._boundingRect.left,
					right:
					  t.left * this.renderer._boundingRect.width +
					  this.renderer._boundingRect.left +
					  t.width * this.renderer._boundingRect.width,
					bottom:
					  t.top * this.renderer._boundingRect.height +
					  this.renderer._boundingRect.top +
					  t.height * this.renderer._boundingRect.height,
				  });
			  },
			},
			{
			  key: "getWebGLBoundingRect",
			  value: function () {
				return this._matrices.modelViewProjection
				  ? ((this._boundingRect.worldToDocument && !this.alwaysDraw) ||
					  this._computeWebGLBoundingRect(),
					this._boundingRect.worldToDocument)
				  : this._boundingRect.document;
			  },
			},
			{
			  key: "_getWebGLDrawRect",
			  value: function () {
				return (
				  this._computeWebGLBoundingRect(),
				  {
					top:
					  this._boundingRect.worldToDocument.top -
					  this.drawCheckMargins.top,
					right:
					  this._boundingRect.worldToDocument.right +
					  this.drawCheckMargins.right,
					bottom:
					  this._boundingRect.worldToDocument.bottom +
					  this.drawCheckMargins.bottom,
					left:
					  this._boundingRect.worldToDocument.left -
					  this.drawCheckMargins.left,
				  }
				);
			  },
			},
			{
			  key: "_shouldDrawCheck",
			  value: function () {
				var e = this,
				  t = this._getWebGLDrawRect();
				Math.round(t.right) <= this.renderer._boundingRect.left ||
				Math.round(t.left) >=
				  this.renderer._boundingRect.left +
					this.renderer._boundingRect.width ||
				Math.round(t.bottom) <= this.renderer._boundingRect.top ||
				Math.round(t.top) >=
				  this.renderer._boundingRect.top +
					this.renderer._boundingRect.height
				  ? this._shouldDraw &&
					((this._shouldDraw = !1),
					this.renderer.nextRender.add(function () {
					  return e._onLeaveViewCallback && e._onLeaveViewCallback();
					}))
				  : (this._shouldDraw ||
					  this.renderer.nextRender.add(function () {
						return (
						  e._onReEnterViewCallback && e._onReEnterViewCallback()
						);
					  }),
					(this._shouldDraw = !0));
			  },
			},
			{
			  key: "isDrawn",
			  value: function () {
				return (
				  this._canDraw &&
				  this.visible &&
				  (this._shouldDraw || this.alwaysDraw)
				);
			  },
			},
			{
			  key: "enableDepthTest",
			  value: function (e) {
				this._depthTest = e;
			  },
			},
			{
			  key: "_initSources",
			  value: function () {
				var e = 0;
				if (this.autoloadSources) {
				  var t = this.htmlElement.getElementsByTagName("img"),
					i = this.htmlElement.getElementsByTagName("video"),
					r = this.htmlElement.getElementsByTagName("canvas");
				  t.length && this.loadImages(t),
					i.length && this.loadVideos(i),
					r.length && this.loadCanvases(r),
					(e = t.length + i.length + r.length);
				}
				this.loader._setLoaderSize(e), (this._canDraw = !0);
			  },
			},
			{
			  key: "_startDrawing",
			  value: function () {
				this._canDraw &&
				  (this._onRenderCallback && this._onRenderCallback(),
				  this.target
					? this.renderer.bindFrameBuffer(this.target)
					: null === this.renderer.state.scenePassIndex &&
					  this.renderer.bindFrameBuffer(null),
				  this._setPerspectiveMatrix(),
				  this._setMVMatrix(),
				  (this.alwaysDraw || this._shouldDraw) &&
					this.visible &&
					this._draw());
			  },
			},
			{
			  key: "mouseToPlaneCoords",
			  value: function (e) {
				if (
				  (Y.setAxisOrder(this.quaternion.axisOrder),
				  Y.equals(this.quaternion) && q.equals(this.transformOrigin))
				)
				  return _get(
					_getPrototypeOf(r.prototype),
					"mouseToPlaneCoords",
					this
				  ).call(this, e);
				var t = {
					x:
					  (e.x /
						(this.renderer._boundingRect.width /
						  this.renderer.pixelRatio)) *
						2 -
					  1,
					y:
					  2 *
						(1 -
						  e.y /
							(this.renderer._boundingRect.height /
							  this.renderer.pixelRatio)) -
					  1,
				  },
				  i = this.camera.position.clone(),
				  s = Q.set(t.x, t.y, -0.5);
				s.unproject(this.camera), s.sub(i).normalize();
				var n = Z.set(0, 0, -1);
				n.applyQuat(this.quaternion).normalize();
				var a = J.set(0, 0, 0),
				  o = n.dot(s);
				if (Math.abs(o) >= 1e-4) {
				  var h = this._matrices.world.matrix
					  .getInverse()
					  .multiply(this.camera.viewMatrix),
					l = this._boundingRect.world.transformOrigin
					  .clone()
					  .add(this._translation),
					u = K.set(
					  this._translation.x - l.x,
					  this._translation.y - l.y,
					  this._translation.z - l.z
					);
				  u.applyQuat(this.quaternion), l.add(u);
				  var d = n.dot(l.clone().sub(i)) / o;
				  a.copy(i.add(s.multiplyScalar(d))), a.applyMat4(h);
				} else a.set(1 / 0, 1 / 0, 1 / 0);
				return $.set(a.x, a.y);
			  },
			},
			{
			  key: "onReEnterView",
			  value: function (e) {
				return e && (this._onReEnterViewCallback = e), this;
			  },
			},
			{
			  key: "onLeaveView",
			  value: function (e) {
				return e && (this._onLeaveViewCallback = e), this;
			  },
			},
		  ]),
		  r
		);
	  })(L),
	  te = (function () {
		function e(t) {
		  var i =
			  arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
			n = i.shaderPass,
			a = i.depth,
			o = void 0 !== a && a,
			h = i.clear,
			l = void 0 === h || h,
			u = i.minWidth,
			d = void 0 === u ? 1024 : u,
			c = i.minHeight,
			p = void 0 === c ? 1024 : c,
			f = i.texturesOptions,
			g = void 0 === f ? {} : f;
		  if (
			(_classCallCheck(this, e),
			(this.type = "RenderTarget"),
			(t = (t && t.renderer) || t) && "Renderer" === t.type)
		  ) {
			if (!t.gl)
			  return void (
				t.production ||
				r(
				  this.type +
					": Unable to create a " +
					this.type +
					" because the Renderer WebGL context is not defined"
				)
			  );
		  } else r(this.type + ": Renderer not passed as first argument", t);
		  (this.renderer = t),
			(this.gl = this.renderer.gl),
			(this.index = this.renderer.renderTargets.length),
			(this._shaderPass = n),
			(this._depth = o),
			(this._shouldClear = l),
			(this._minSize = {
			  width: d * this.renderer.pixelRatio,
			  height: p * this.renderer.pixelRatio,
			}),
			(g = Object.assign(
			  {
				sampler: "uRenderTexture",
				isFBOTexture: !0,
				premultiplyAlpha: !1,
				anisotropy: 1,
				generateMipmap: !1,
				floatingPoint: "none",
				wrapS: this.gl.CLAMP_TO_EDGE,
				wrapT: this.gl.CLAMP_TO_EDGE,
				minFilter: this.gl.LINEAR,
				magFilter: this.gl.LINEAR,
			  },
			  g
			)),
			(this._texturesOptions = g),
			(this.userData = {}),
			(this.uuid = s()),
			this.renderer.renderTargets.push(this),
			this.renderer.onSceneChange(),
			this._initRenderTarget();
		}
		return (
		  _createClass(e, [
			{
			  key: "_initRenderTarget",
			  value: function () {
				this._setSize(), (this.textures = []), this._createFrameBuffer();
			  },
			},
			{
			  key: "_restoreContext",
			  value: function () {
				this._setSize(), this._createFrameBuffer();
			  },
			},
			{
			  key: "_setSize",
			  value: function () {
				this._shaderPass && this._shaderPass._isScenePass
				  ? (this._size = {
					  width: this.renderer._boundingRect.width,
					  height: this.renderer._boundingRect.height,
					})
				  : (this._size = {
					  width: Math.max(
						this._minSize.width,
						this.renderer._boundingRect.width
					  ),
					  height: Math.max(
						this._minSize.height,
						this.renderer._boundingRect.height
					  ),
					});
			  },
			},
			{
			  key: "resize",
			  value: function () {
				this._shaderPass &&
				  (this._setSize(),
				  this.textures[0].resize(),
				  this.renderer.bindFrameBuffer(this, !0),
				  this._depth && this._bindDepthBuffer(),
				  this.renderer.bindFrameBuffer(null));
			  },
			},
			{
			  key: "_bindDepthBuffer",
			  value: function () {
				this._depthBuffer &&
				  (this.gl.bindRenderbuffer(
					this.gl.RENDERBUFFER,
					this._depthBuffer
				  ),
				  this.gl.renderbufferStorage(
					this.gl.RENDERBUFFER,
					this.gl.DEPTH_COMPONENT16,
					this._size.width,
					this._size.height
				  ),
				  this.gl.framebufferRenderbuffer(
					this.gl.FRAMEBUFFER,
					this.gl.DEPTH_ATTACHMENT,
					this.gl.RENDERBUFFER,
					this._depthBuffer
				  ));
			  },
			},
			{
			  key: "_createFrameBuffer",
			  value: function () {
				((this._frameBuffer = this.gl.createFramebuffer()),
				this.renderer.bindFrameBuffer(this, !0),
				this.textures.length)
				  ? ((this.textures[0]._parent = this),
					this.textures[0]._restoreContext())
				  : new E(this.renderer, this._texturesOptions).addParent(this);
				this.gl.framebufferTexture2D(
				  this.gl.FRAMEBUFFER,
				  this.gl.COLOR_ATTACHMENT0,
				  this.gl.TEXTURE_2D,
				  this.textures[0]._sampler.texture,
				  0
				),
				  this._depth &&
					((this._depthBuffer = this.gl.createRenderbuffer()),
					this._bindDepthBuffer()),
				  this.renderer.bindFrameBuffer(null);
			  },
			},
			{
			  key: "getTexture",
			  value: function () {
				return this.textures[0];
			  },
			},
			{
			  key: "remove",
			  value: function () {
				this._shaderPass
				  ? this.renderer.production ||
					i(
					  this.type +
						": You're trying to remove a RenderTarget attached to a ShaderPass. You should remove that ShaderPass instead:",
					  this._shaderPass
					)
				  : (this._dispose(), this.renderer.removeRenderTarget(this));
			  },
			},
			{
			  key: "_dispose",
			  value: function () {
				this._frameBuffer &&
				  (this.gl.deleteFramebuffer(this._frameBuffer),
				  (this._frameBuffer = null)),
				  this._depthBuffer &&
					(this.gl.deleteRenderbuffer(this._depthBuffer),
					(this._depthBuffer = null)),
				  this.textures[0]._dispose(),
				  (this.textures = []);
			  },
			},
		  ]),
		  e
		);
	  })(),
	  ie = (function (e) {
		_inherits(i, e);
		var t = _createSuper(i);
		function i(e) {
		  var r,
			s =
			  arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
			n = s.widthSegments,
			a = s.heightSegments,
			o = s.renderOrder,
			h = s.depthTest,
			l = s.cullFace,
			u = s.uniforms,
			d = s.vertexShaderID,
			c = s.fragmentShaderID,
			p = s.vertexShader,
			f = s.fragmentShader,
			g = s.texturesOptions,
			_ = s.crossOrigin,
			m = s.depth,
			v = void 0 !== m && m,
			y = s.clear,
			x = void 0 === y || y,
			b = s.renderTarget;
		  return (
			_classCallCheck(this, i),
			(n = 1),
			(a = 1),
			(l = "back"),
			(r = t.call(this, e, e.container, "ShaderPass", {
			  widthSegments: n,
			  heightSegments: a,
			  renderOrder: o,
			  depthTest: h,
			  cullFace: l,
			  uniforms: u,
			  vertexShaderID: d,
			  fragmentShaderID: c,
			  vertexShader: p,
			  fragmentShader: f,
			  texturesOptions: g,
			  crossOrigin: _,
			})).gl
			  ? ((r._isScenePass = !0),
				(r.index = r.renderer.shaderPasses.length),
				(r._depth = v),
				(r._shouldClear = x),
				(r.target = b),
				r.target &&
				  ((r._isScenePass = !1),
				  (r._shouldClear = r.target._shouldClear)),
				r._program.compiled &&
				  (r._initShaderPass(),
				  r.renderer.shaderPasses.push(_assertThisInitialized(r)),
				  r.renderer.nextRender.add(function () {
					r.renderer.scene.addShaderPass(_assertThisInitialized(r));
				  })),
				r)
			  : _possibleConstructorReturn(r)
		  );
		}
		return (
		  _createClass(i, [
			{
			  key: "_programRestored",
			  value: function () {
				this.renderer.scene.addShaderPass(this);
				for (var e = 0; e < this.textures.length; e++)
				  (this.textures[e]._parent = this),
					this.textures[e]._restoreContext();
				this._canDraw = !0;
			  },
			},
			{
			  key: "_initShaderPass",
			  value: function () {
				this.target
				  ? (this.setRenderTarget(this.target),
					(this.target._shaderPass = this))
				  : this._createFrameBuffer(),
				  new E(this.renderer, {
					sampler: "uRenderTexture",
					isFBOTexture: !0,
					fromTexture: this.target.getTexture(),
				  }).addParent(this),
				  this.loader._setLoaderSize(0),
				  (this._canDraw = !0),
				  this.renderer.needRender();
			  },
			},
			{
			  key: "_createFrameBuffer",
			  value: function () {
				var e = new te(this.renderer, {
				  shaderPass: this,
				  clear: this._shouldClear,
				  depth: this._depth,
				  texturesOptions: this._texturesOptions,
				});
				this.setRenderTarget(e);
			  },
			},
			{
			  key: "_startDrawing",
			  value: function () {
				this._canDraw &&
				  (this._onRenderCallback && this._onRenderCallback(),
				  this._isScenePass
					? this.renderer.state.scenePassIndex + 1 <
					  this.renderer.scene.stacks.scenePasses.length
					  ? (this.renderer.bindFrameBuffer(
						  this.renderer.scene.stacks.scenePasses[
							this.renderer.state.scenePassIndex + 1
						  ].target
						),
						this.renderer.state.scenePassIndex++)
					  : this.renderer.bindFrameBuffer(null)
					: null === this.renderer.state.scenePassIndex &&
					  this.renderer.bindFrameBuffer(null),
				  (this.renderer.state.forceBufferUpdate = !0),
				  this._draw());
			  },
			},
		  ]),
		  i
		);
	  })(L),
	  re = (function (e) {
		_inherits(i, e);
		var t = _createSuper(i);
		function i(e, r) {
		  var s,
			n =
			  arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
			a = n.sampler,
			o = void 0 === a ? "uPingPongTexture" : a,
			h = n.widthSegments,
			l = n.heightSegments,
			u = n.renderOrder,
			d = n.depthTest,
			c = n.cullFace,
			p = n.uniforms,
			f = n.vertexShaderID,
			g = n.fragmentShaderID,
			_ = n.vertexShader,
			m = n.fragmentShader,
			v = n.texturesOptions,
			y = n.crossOrigin,
			x = n.alwaysDraw,
			b = n.visible,
			k = n.transparent,
			R = n.drawCheckMargins,
			P = n.autoloadSources,
			w = n.watchScroll,
			T = n.fov;
		  if (
			(_classCallCheck(this, i),
			(d = !1),
			(P = !1),
			!(s = t.call(this, e, r, {
			  widthSegments: h,
			  heightSegments: l,
			  renderOrder: u,
			  depthTest: d,
			  cullFace: c,
			  uniforms: p,
			  vertexShaderID: f,
			  fragmentShaderID: g,
			  vertexShader: _,
			  fragmentShader: m,
			  texturesOptions: v,
			  crossOrigin: y,
			  alwaysDraw: x,
			  visible: b,
			  transparent: k,
			  drawCheckMargins: R,
			  autoloadSources: P,
			  watchScroll: w,
			  fov: T,
			})).gl)
		  )
			return _possibleConstructorReturn(s);
		  s.renderer.scene.removePlane(_assertThisInitialized(s)),
			(s.type = "PingPongPlane"),
			s.renderer.scene.addPlane(_assertThisInitialized(s)),
			(s.readPass = new te(e, {
			  depth: !1,
			  clear: !1,
			  texturesOptions: v,
			})),
			(s.writePass = new te(e, {
			  depth: !1,
			  clear: !1,
			  texturesOptions: v,
			}));
		  s.createTexture({ sampler: o });
		  var S = 0;
		  return (
			s.readPass.getTexture().onSourceUploaded(function () {
			  S++, s._checkIfReady(S);
			}),
			s.writePass.getTexture().onSourceUploaded(function () {
			  S++, s._checkIfReady(S);
			}),
			s.setRenderTarget(s.readPass),
			(s._onRenderCallback = function () {
			  s.readPass &&
				s.writePass &&
				s.textures[0] &&
				s.textures[0]._uploaded &&
				s.setRenderTarget(s.writePass),
				s._onPingPongRenderCallback && s._onPingPongRenderCallback();
			}),
			(s._onAfterRenderCallback = function () {
			  s.readPass &&
				s.writePass &&
				s.textures[0] &&
				s.textures[0]._uploaded &&
				s._swapPasses(),
				s._onPingPongAfterRenderCallback &&
				  s._onPingPongAfterRenderCallback();
			}),
			s
		  );
		}
		return (
		  _createClass(i, [
			{
			  key: "_checkIfReady",
			  value: function (e) {
				var t = this;
				2 === e &&
				  this.renderer.nextRender.add(function () {
					t.textures[0].copy(t.target.getTexture());
				  });
			  },
			},
			{
			  key: "_swapPasses",
			  value: function () {
				var e = this.readPass;
				(this.readPass = this.writePass),
				  (this.writePass = e),
				  this.textures[0].copy(this.readPass.getTexture());
			  },
			},
			{
			  key: "getTexture",
			  value: function () {
				return this.textures[0];
			  },
			},
			{
			  key: "onRender",
			  value: function (e) {
				return e && (this._onPingPongRenderCallback = e), this;
			  },
			},
			{
			  key: "onAfterRender",
			  value: function (e) {
				return e && (this._onPingPongAfterRenderCallback = e), this;
			  },
			},
			{
			  key: "remove",
			  value: function () {
				(this.target = null),
				  this.renderer.bindFrameBuffer(null),
				  this.writePass &&
					(this.writePass.remove(), (this.writePass = null)),
				  this.readPass &&
					(this.readPass.remove(), (this.readPass = null)),
				  _get(_getPrototypeOf(i.prototype), "remove", this).call(this);
			  },
			},
		  ]),
		  i
		);
	  })(ee),
	  se = (function (e) {
		_inherits(i, e);
		var t = _createSuper(i);
		function i(e) {
		  var r,
			s =
			  arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
			n = s.renderOrder,
			a = s.depthTest,
			o = s.texturesOptions,
			h = s.crossOrigin,
			l = s.depth,
			u = s.clear,
			d = s.renderTarget;
		  _classCallCheck(this, i);
		  var c =
			  "\n            precision mediump float;\n            \n            varying vec3 vVertexPosition;\n            varying vec2 vTextureCoord;\n        \n            uniform sampler2D uRenderTexture;\n            \n            uniform vec2 uResolution;\n            \n            #define FXAA_REDUCE_MIN   (1.0/128.0)\n            #define FXAA_REDUCE_MUL   (1.0/8.0)\n            #define FXAA_SPAN_MAX     8.0\n            \n            void main() {\n                vec2 res = 1.0 / uResolution;\n            \n                vec3 rgbNW = texture2D(uRenderTexture, (vTextureCoord.xy + vec2(-1.0, -1.0) * res)).xyz;\n                vec3 rgbNE = texture2D(uRenderTexture, (vTextureCoord.xy + vec2(1.0, -1.0) * res)).xyz;\n                vec3 rgbSW = texture2D(uRenderTexture, (vTextureCoord.xy + vec2(-1.0, 1.0) * res)).xyz;\n                vec3 rgbSE = texture2D(uRenderTexture, (vTextureCoord.xy + vec2(1.0, 1.0) * res)).xyz;\n                vec4 rgbaM = texture2D(uRenderTexture, vTextureCoord.xy * res);\n                vec3 rgbM = rgbaM.xyz;\n                vec3 luma = vec3(0.299, 0.587, 0.114);\n            \n                float lumaNW = dot(rgbNW, luma);\n                float lumaNE = dot(rgbNE, luma);\n                float lumaSW = dot(rgbSW, luma);\n                float lumaSE = dot(rgbSE, luma);\n                float lumaM  = dot(rgbM,  luma);\n                float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));\n                float lumaMax = max(lumaM, max(max(lumaNW, lumaNE) , max(lumaSW, lumaSE)));\n            \n                vec2 dir;\n                dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));\n                dir.y = ((lumaNW + lumaSW) - (lumaNE + lumaSE));\n            \n                float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) * (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);\n            \n                float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);\n                dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),\n                      max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),\n                            dir * rcpDirMin)) * res;\n                vec4 rgbA = (1.0/2.0) * (\n                texture2D(uRenderTexture, vTextureCoord.xy + dir * (1.0/3.0 - 0.5)) +\n                texture2D(uRenderTexture, vTextureCoord.xy + dir * (2.0/3.0 - 0.5)));\n                vec4 rgbB = rgbA * (1.0/2.0) + (1.0/4.0) * (\n                texture2D(uRenderTexture, vTextureCoord.xy + dir * (0.0/3.0 - 0.5)) +\n                texture2D(uRenderTexture, vTextureCoord.xy + dir * (3.0/3.0 - 0.5)));\n                float lumaB = dot(rgbB, vec4(luma, 0.0));\n            \n                if ((lumaB < lumaMin) || (lumaB > lumaMax)) {\n                    gl_FragColor = rgbA;\n                } else {\n                    gl_FragColor = rgbB;\n                }\n            }\n        ",
			p = {
			  resolution: { name: "uResolution", type: "2f", value: [0, 0] },
			};
		  return (r = t.call(this, e, {
			fragmentShader: c,
			uniforms: p,
			renderOrder: n,
			depthTest: a,
			texturesOptions: o,
			crossOrigin: h,
			depth: l,
			clear: u,
			renderTarget: d,
		  })).gl
			? ((r.uniforms.resolution.value = [
				r.renderer._boundingRect.width,
				r.renderer._boundingRect.height,
			  ]),
			  (r._onAfterResizeCallback = function () {
				(r.uniforms.resolution.value = [
				  r.renderer._boundingRect.width,
				  r.renderer._boundingRect.height,
				]),
				  r._onFXAAPassAfterResizeCallback &&
					r._onFXAAPassAfterResizeCallback();
			  }),
			  r)
			: _possibleConstructorReturn(r);
		}
		return (
		  _createClass(i, [
			{
			  key: "onAfterResize",
			  value: function (e) {
				return e && (this._onFXAAPassAfterResizeCallback = e), this;
			  },
			},
		  ]),
		  i
		);
	  })(ie);
	(e.Curtains = d),
	  (e.FXAAPass = se),
	  (e.Mat4 = R),
	  (e.PingPongPlane = re),
	  (e.Plane = ee),
	  (e.Quat = U),
	  (e.RenderTarget = te),
	  (e.ShaderPass = ie),
	  (e.Texture = E),
	  (e.TextureLoader = M),
	  (e.Vec2 = P),
	  (e.Vec3 = w),
	  Object.defineProperty(e, "__esModule", { value: !0 });
  });