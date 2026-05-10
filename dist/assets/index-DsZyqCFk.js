(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var yd={exports:{}},Wo={};var o_;function Ny(){if(o_)return Wo;o_=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:f,ref:l!==void 0?l:null,props:c}}return Wo.Fragment=e,Wo.jsx=i,Wo.jsxs=i,Wo}var l_;function Ly(){return l_||(l_=1,yd.exports=Ny()),yd.exports}var Q=Ly(),Md={exports:{}},qo={},Ed={exports:{}},bd={};var c_;function Oy(){return c_||(c_=1,(function(s){function e(I,B){var le=I.length;I.push(B);e:for(;0<le;){var ge=le-1>>>1,Ee=I[ge];if(0<l(Ee,B))I[ge]=B,I[le]=Ee,le=ge;else break e}}function i(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var B=I[0],le=I.pop();if(le!==B){I[0]=le;e:for(var ge=0,Ee=I.length,F=Ee>>>1;ge<F;){var $=2*(ge+1)-1,Se=I[$],Re=$+1,Ue=I[Re];if(0>l(Se,le))Re<Ee&&0>l(Ue,Se)?(I[ge]=Ue,I[Re]=le,ge=Re):(I[ge]=Se,I[$]=le,ge=$);else if(Re<Ee&&0>l(Ue,le))I[ge]=Ue,I[Re]=le,ge=Re;else break e}}return B}function l(I,B){var le=I.sortIndex-B.sortIndex;return le!==0?le:I.id-B.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();s.unstable_now=function(){return f.now()-h}}var m=[],p=[],v=1,_=null,g=3,M=!1,A=!1,w=!1,x=!1,y=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function U(I){for(var B=i(p);B!==null;){if(B.callback===null)r(p);else if(B.startTime<=I)r(p),B.sortIndex=B.expirationTime,e(m,B);else break;B=i(p)}}function H(I){if(w=!1,U(I),!A)if(i(m)!==null)A=!0,L||(L=!0,Z());else{var B=i(p);B!==null&&X(H,B.startTime-I)}}var L=!1,O=-1,b=5,P=-1;function W(){return x?!0:!(s.unstable_now()-P<b)}function z(){if(x=!1,L){var I=s.unstable_now();P=I;var B=!0;try{e:{A=!1,w&&(w=!1,T(O),O=-1),M=!0;var le=g;try{t:{for(U(I),_=i(m);_!==null&&!(_.expirationTime>I&&W());){var ge=_.callback;if(typeof ge=="function"){_.callback=null,g=_.priorityLevel;var Ee=ge(_.expirationTime<=I);if(I=s.unstable_now(),typeof Ee=="function"){_.callback=Ee,U(I),B=!0;break t}_===i(m)&&r(m),U(I)}else r(m);_=i(m)}if(_!==null)B=!0;else{var F=i(p);F!==null&&X(H,F.startTime-I),B=!1}}break e}finally{_=null,g=le,M=!1}B=void 0}}finally{B?Z():L=!1}}}var Z;if(typeof D=="function")Z=function(){D(z)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,pe=ue.port2;ue.port1.onmessage=z,Z=function(){pe.postMessage(null)}}else Z=function(){y(z,0)};function X(I,B){O=y(function(){I(s.unstable_now())},B)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(I){I.callback=null},s.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<I?Math.floor(1e3/I):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_next=function(I){switch(g){case 1:case 2:case 3:var B=3;break;default:B=g}var le=g;g=B;try{return I()}finally{g=le}},s.unstable_requestPaint=function(){x=!0},s.unstable_runWithPriority=function(I,B){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var le=g;g=I;try{return B()}finally{g=le}},s.unstable_scheduleCallback=function(I,B,le){var ge=s.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?ge+le:ge):le=ge,I){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=le+Ee,I={id:v++,callback:B,priorityLevel:I,startTime:le,expirationTime:Ee,sortIndex:-1},le>ge?(I.sortIndex=le,e(p,I),i(m)===null&&I===i(p)&&(w?(T(O),O=-1):w=!0,X(H,le-ge))):(I.sortIndex=Ee,e(m,I),A||M||(A=!0,L||(L=!0,Z()))),I},s.unstable_shouldYield=W,s.unstable_wrapCallback=function(I){var B=g;return function(){var le=g;g=B;try{return I.apply(this,arguments)}finally{g=le}}}})(bd)),bd}var u_;function Py(){return u_||(u_=1,Ed.exports=Oy()),Ed.exports}var Ad={exports:{}},rt={};var f_;function Iy(){if(f_)return rt;f_=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),g=Symbol.iterator;function M(F){return F===null||typeof F!="object"?null:(F=g&&F[g]||F["@@iterator"],typeof F=="function"?F:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,x={};function y(F,$,Se){this.props=F,this.context=$,this.refs=x,this.updater=Se||A}y.prototype.isReactComponent={},y.prototype.setState=function(F,$){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,$,"setState")},y.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function T(){}T.prototype=y.prototype;function D(F,$,Se){this.props=F,this.context=$,this.refs=x,this.updater=Se||A}var U=D.prototype=new T;U.constructor=D,w(U,y.prototype),U.isPureReactComponent=!0;var H=Array.isArray;function L(){}var O={H:null,A:null,T:null,S:null},b=Object.prototype.hasOwnProperty;function P(F,$,Se){var Re=Se.ref;return{$$typeof:s,type:F,key:$,ref:Re!==void 0?Re:null,props:Se}}function W(F,$){return P(F.type,$,F.props)}function z(F){return typeof F=="object"&&F!==null&&F.$$typeof===s}function Z(F){var $={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(Se){return $[Se]})}var ue=/\/+/g;function pe(F,$){return typeof F=="object"&&F!==null&&F.key!=null?Z(""+F.key):$.toString(36)}function X(F){switch(F.status){case"fulfilled":return F.value;case"rejected":throw F.reason;default:switch(typeof F.status=="string"?F.then(L,L):(F.status="pending",F.then(function($){F.status==="pending"&&(F.status="fulfilled",F.value=$)},function($){F.status==="pending"&&(F.status="rejected",F.reason=$)})),F.status){case"fulfilled":return F.value;case"rejected":throw F.reason}}throw F}function I(F,$,Se,Re,Ue){var oe=typeof F;(oe==="undefined"||oe==="boolean")&&(F=null);var ye=!1;if(F===null)ye=!0;else switch(oe){case"bigint":case"string":case"number":ye=!0;break;case"object":switch(F.$$typeof){case s:case e:ye=!0;break;case v:return ye=F._init,I(ye(F._payload),$,Se,Re,Ue)}}if(ye)return Ue=Ue(F),ye=Re===""?"."+pe(F,0):Re,H(Ue)?(Se="",ye!=null&&(Se=ye.replace(ue,"$&/")+"/"),I(Ue,$,Se,"",function(et){return et})):Ue!=null&&(z(Ue)&&(Ue=W(Ue,Se+(Ue.key==null||F&&F.key===Ue.key?"":(""+Ue.key).replace(ue,"$&/")+"/")+ye)),$.push(Ue)),1;ye=0;var Ae=Re===""?".":Re+":";if(H(F))for(var Ge=0;Ge<F.length;Ge++)Re=F[Ge],oe=Ae+pe(Re,Ge),ye+=I(Re,$,Se,oe,Ue);else if(Ge=M(F),typeof Ge=="function")for(F=Ge.call(F),Ge=0;!(Re=F.next()).done;)Re=Re.value,oe=Ae+pe(Re,Ge++),ye+=I(Re,$,Se,oe,Ue);else if(oe==="object"){if(typeof F.then=="function")return I(X(F),$,Se,Re,Ue);throw $=String(F),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return ye}function B(F,$,Se){if(F==null)return F;var Re=[],Ue=0;return I(F,Re,"","",function(oe){return $.call(Se,oe,Ue++)}),Re}function le(F){if(F._status===-1){var $=F._result;$=$(),$.then(function(Se){(F._status===0||F._status===-1)&&(F._status=1,F._result=Se)},function(Se){(F._status===0||F._status===-1)&&(F._status=2,F._result=Se)}),F._status===-1&&(F._status=0,F._result=$)}if(F._status===1)return F._result.default;throw F._result}var ge=typeof reportError=="function"?reportError:function(F){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof F=="object"&&F!==null&&typeof F.message=="string"?String(F.message):String(F),error:F});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",F);return}console.error(F)},Ee={map:B,forEach:function(F,$,Se){B(F,function(){$.apply(this,arguments)},Se)},count:function(F){var $=0;return B(F,function(){$++}),$},toArray:function(F){return B(F,function($){return $})||[]},only:function(F){if(!z(F))throw Error("React.Children.only expected to receive a single React element child.");return F}};return rt.Activity=_,rt.Children=Ee,rt.Component=y,rt.Fragment=i,rt.Profiler=l,rt.PureComponent=D,rt.StrictMode=r,rt.Suspense=m,rt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,rt.__COMPILER_RUNTIME={__proto__:null,c:function(F){return O.H.useMemoCache(F)}},rt.cache=function(F){return function(){return F.apply(null,arguments)}},rt.cacheSignal=function(){return null},rt.cloneElement=function(F,$,Se){if(F==null)throw Error("The argument must be a React element, but you passed "+F+".");var Re=w({},F.props),Ue=F.key;if($!=null)for(oe in $.key!==void 0&&(Ue=""+$.key),$)!b.call($,oe)||oe==="key"||oe==="__self"||oe==="__source"||oe==="ref"&&$.ref===void 0||(Re[oe]=$[oe]);var oe=arguments.length-2;if(oe===1)Re.children=Se;else if(1<oe){for(var ye=Array(oe),Ae=0;Ae<oe;Ae++)ye[Ae]=arguments[Ae+2];Re.children=ye}return P(F.type,Ue,Re)},rt.createContext=function(F){return F={$$typeof:f,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null},F.Provider=F,F.Consumer={$$typeof:c,_context:F},F},rt.createElement=function(F,$,Se){var Re,Ue={},oe=null;if($!=null)for(Re in $.key!==void 0&&(oe=""+$.key),$)b.call($,Re)&&Re!=="key"&&Re!=="__self"&&Re!=="__source"&&(Ue[Re]=$[Re]);var ye=arguments.length-2;if(ye===1)Ue.children=Se;else if(1<ye){for(var Ae=Array(ye),Ge=0;Ge<ye;Ge++)Ae[Ge]=arguments[Ge+2];Ue.children=Ae}if(F&&F.defaultProps)for(Re in ye=F.defaultProps,ye)Ue[Re]===void 0&&(Ue[Re]=ye[Re]);return P(F,oe,Ue)},rt.createRef=function(){return{current:null}},rt.forwardRef=function(F){return{$$typeof:h,render:F}},rt.isValidElement=z,rt.lazy=function(F){return{$$typeof:v,_payload:{_status:-1,_result:F},_init:le}},rt.memo=function(F,$){return{$$typeof:p,type:F,compare:$===void 0?null:$}},rt.startTransition=function(F){var $=O.T,Se={};O.T=Se;try{var Re=F(),Ue=O.S;Ue!==null&&Ue(Se,Re),typeof Re=="object"&&Re!==null&&typeof Re.then=="function"&&Re.then(L,ge)}catch(oe){ge(oe)}finally{$!==null&&Se.types!==null&&($.types=Se.types),O.T=$}},rt.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},rt.use=function(F){return O.H.use(F)},rt.useActionState=function(F,$,Se){return O.H.useActionState(F,$,Se)},rt.useCallback=function(F,$){return O.H.useCallback(F,$)},rt.useContext=function(F){return O.H.useContext(F)},rt.useDebugValue=function(){},rt.useDeferredValue=function(F,$){return O.H.useDeferredValue(F,$)},rt.useEffect=function(F,$){return O.H.useEffect(F,$)},rt.useEffectEvent=function(F){return O.H.useEffectEvent(F)},rt.useId=function(){return O.H.useId()},rt.useImperativeHandle=function(F,$,Se){return O.H.useImperativeHandle(F,$,Se)},rt.useInsertionEffect=function(F,$){return O.H.useInsertionEffect(F,$)},rt.useLayoutEffect=function(F,$){return O.H.useLayoutEffect(F,$)},rt.useMemo=function(F,$){return O.H.useMemo(F,$)},rt.useOptimistic=function(F,$){return O.H.useOptimistic(F,$)},rt.useReducer=function(F,$,Se){return O.H.useReducer(F,$,Se)},rt.useRef=function(F){return O.H.useRef(F)},rt.useState=function(F){return O.H.useState(F)},rt.useSyncExternalStore=function(F,$,Se){return O.H.useSyncExternalStore(F,$,Se)},rt.useTransition=function(){return O.H.useTransition()},rt.version="19.2.3",rt}var d_;function np(){return d_||(d_=1,Ad.exports=Iy()),Ad.exports}var Td={exports:{}},Ln={};var h_;function Fy(){if(h_)return Ln;h_=1;var s=np();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,v){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:v}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Ln.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Ln.createPortal=function(m,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,v)},Ln.flushSync=function(m){var p=f.T,v=r.p;try{if(f.T=null,r.p=2,m)return m()}finally{f.T=p,r.p=v,r.d.f()}},Ln.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Ln.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Ln.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var v=p.as,_=h(v,p.crossOrigin),g=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:g,fetchPriority:M}):v==="script"&&r.d.X(m,{crossOrigin:_,integrity:g,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Ln.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Ln.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,_=h(v,p.crossOrigin);r.d.L(m,v,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Ln.preloadModule=function(m,p){if(typeof m=="string")if(p){var v=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Ln.requestFormReset=function(m){r.d.r(m)},Ln.unstable_batchedUpdates=function(m,p){return m(p)},Ln.useFormState=function(m,p,v){return f.H.useFormState(m,p,v)},Ln.useFormStatus=function(){return f.H.useHostTransitionStatus()},Ln.version="19.2.3",Ln}var p_;function zy(){if(p_)return Td.exports;p_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Td.exports=Fy(),Td.exports}var m_;function By(){if(m_)return qo;m_=1;var s=Py(),e=np(),i=zy();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return m(u),t;if(d===o)return m(u),n;d=d.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=d;else{for(var S=!1,C=u.child;C;){if(C===a){S=!0,a=u,o=d;break}if(C===o){S=!0,o=u,a=d;break}C=C.sibling}if(!S){for(C=d.child;C;){if(C===a){S=!0,a=d,o=u;break}if(C===o){S=!0,o=d,a=u;break}C=C.sibling}if(!S)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}var _=Object.assign,g=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),x=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),T=Symbol.for("react.consumer"),D=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),P=Symbol.for("react.activity"),W=Symbol.for("react.memo_cache_sentinel"),z=Symbol.iterator;function Z(t){return t===null||typeof t!="object"?null:(t=z&&t[z]||t["@@iterator"],typeof t=="function"?t:null)}var ue=Symbol.for("react.client.reference");function pe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ue?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case w:return"Fragment";case y:return"Profiler";case x:return"StrictMode";case H:return"Suspense";case L:return"SuspenseList";case P:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case A:return"Portal";case D:return t.displayName||"Context";case T:return(t._context.displayName||"Context")+".Consumer";case U:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case O:return n=t.displayName||null,n!==null?n:pe(t.type)||"Memo";case b:n=t._payload,t=t._init;try{return pe(t(n))}catch{}}return null}var X=Array.isArray,I=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,le={pending:!1,data:null,method:null,action:null},ge=[],Ee=-1;function F(t){return{current:t}}function $(t){0>Ee||(t.current=ge[Ee],ge[Ee]=null,Ee--)}function Se(t,n){Ee++,ge[Ee]=t.current,t.current=n}var Re=F(null),Ue=F(null),oe=F(null),ye=F(null);function Ae(t,n){switch(Se(oe,n),Se(Ue,t),Se(Re,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Dg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Dg(n),t=Ug(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}$(Re),Se(Re,t)}function Ge(){$(Re),$(Ue),$(oe)}function et(t){t.memoizedState!==null&&Se(ye,t);var n=Re.current,a=Ug(n,t.type);n!==a&&(Se(Ue,t),Se(Re,a))}function Je(t){Ue.current===t&&($(Re),$(Ue)),ye.current===t&&($(ye),Go._currentValue=le)}var Xt,dt;function vt(t){if(Xt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Xt=n&&n[1]||"",dt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Xt+t+dt}var Lt=!1;function ct(t,n){if(!t||Lt)return"";Lt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var xe=function(){throw Error()};if(Object.defineProperty(xe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xe,[])}catch(ce){var se=ce}Reflect.construct(t,[],xe)}else{try{xe.call()}catch(ce){se=ce}t.call(xe.prototype)}}else{try{throw Error()}catch(ce){se=ce}(xe=t())&&typeof xe.catch=="function"&&xe.catch(function(){})}}catch(ce){if(ce&&se&&typeof ce.stack=="string")return[ce.stack,se.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),S=d[0],C=d[1];if(S&&C){var G=S.split(`
`),te=C.split(`
`);for(u=o=0;o<G.length&&!G[o].includes("DetermineComponentFrameRoot");)o++;for(;u<te.length&&!te[u].includes("DetermineComponentFrameRoot");)u++;if(o===G.length||u===te.length)for(o=G.length-1,u=te.length-1;1<=o&&0<=u&&G[o]!==te[u];)u--;for(;1<=o&&0<=u;o--,u--)if(G[o]!==te[u]){if(o!==1||u!==1)do if(o--,u--,0>u||G[o]!==te[u]){var he=`
`+G[o].replace(" at new "," at ");return t.displayName&&he.includes("<anonymous>")&&(he=he.replace("<anonymous>",t.displayName)),he}while(1<=o&&0<=u);break}}}finally{Lt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?vt(a):""}function sn(t,n){switch(t.tag){case 26:case 27:case 5:return vt(t.type);case 16:return vt("Lazy");case 13:return t.child!==n&&n!==null?vt("Suspense Fallback"):vt("Suspense");case 19:return vt("SuspenseList");case 0:case 15:return ct(t.type,!1);case 11:return ct(t.type.render,!1);case 1:return ct(t.type,!0);case 31:return vt("Activity");default:return""}}function Yt(t){try{var n="",a=null;do n+=sn(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var bn=Object.prototype.hasOwnProperty,q=s.unstable_scheduleCallback,en=s.unstable_cancelCallback,ht=s.unstable_shouldYield,Ht=s.unstable_requestPaint,Ce=s.unstable_now,Kt=s.unstable_getCurrentPriorityLevel,N=s.unstable_ImmediatePriority,E=s.unstable_UserBlockingPriority,J=s.unstable_NormalPriority,ve=s.unstable_LowPriority,be=s.unstable_IdlePriority,we=s.log,Oe=s.unstable_setDisableYieldValue,fe=null,de=null;function Pe(t){if(typeof we=="function"&&Oe(t),de&&typeof de.setStrictMode=="function")try{de.setStrictMode(fe,t)}catch{}}var Ie=Math.clz32?Math.clz32:it,Ne=Math.log,De=Math.LN2;function it(t){return t>>>=0,t===0?32:31-(Ne(t)/De|0)|0}var at=256,pt=262144,V=4194304;function Te(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function me(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,d=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var C=o&134217727;return C!==0?(o=C&~d,o!==0?u=Te(o):(S&=C,S!==0?u=Te(S):a||(a=C&~t,a!==0&&(u=Te(a))))):(C=o&~d,C!==0?u=Te(C):S!==0?u=Te(S):a||(a=o&~t,a!==0&&(u=Te(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function Be(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Le(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Me(){var t=V;return V<<=1,(V&62914560)===0&&(V=4194304),t}function Ye(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function tt(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function tn(t,n,a,o,u,d){var S=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var C=t.entanglements,G=t.expirationTimes,te=t.hiddenUpdates;for(a=S&~a;0<a;){var he=31-Ie(a),xe=1<<he;C[he]=0,G[he]=-1;var se=te[he];if(se!==null)for(te[he]=null,he=0;he<se.length;he++){var ce=se[he];ce!==null&&(ce.lane&=-536870913)}a&=~xe}o!==0&&Ct(t,o,0),d!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=d&~(S&~n))}function Ct(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Ie(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function li(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Ie(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function jn(t,n){var a=n&-n;return a=(a&42)!==0?1:pr(a),(a&(t.suspendedLanes|n))!==0?0:a}function pr(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Js(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function $s(){var t=B.p;return t!==0?t:(t=window.event,t===void 0?32:e_(t.type))}function eo(t,n){var a=B.p;try{return B.p=t,n()}finally{B.p=a}}var Un=Math.random().toString(36).slice(2),on="__reactFiber$"+Un,An="__reactProps$"+Un,Ji="__reactContainer$"+Un,Da="__reactEvents$"+Un,dl="__reactListeners$"+Un,Yr="__reactHandles$"+Un,to="__reactResources$"+Un,Ua="__reactMarker$"+Un;function no(t){delete t[on],delete t[An],delete t[Da],delete t[dl],delete t[Yr]}function Na(t){var n=t[on];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Ji]||a[on]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=zg(t);t!==null;){if(a=t[on])return a;t=zg(t)}return n}t=a,a=t.parentNode}return null}function La(t){if(t=t[on]||t[Ji]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function mr(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Oa(t){var n=t[to];return n||(n=t[to]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function fn(t){t[Ua]=!0}var hl=new Set,R={};function Y(t,n){re(t,n),re(t+"Capture",n)}function re(t,n){for(R[t]=n,t=0;t<n.length;t++)hl.add(n[t])}var ie=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ae={},ze={};function ke(t){return bn.call(ze,t)?!0:bn.call(ae,t)?!1:ie.test(t)?ze[t]=!0:(ae[t]=!0,!1)}function Fe(t,n,a){if(ke(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function We(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Xe(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function Ke(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ot(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ze(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(S){a=""+S,d.call(this,S)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(S){a=""+S},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function At(t){if(!t._valueTracker){var n=ot(t)?"checked":"value";t._valueTracker=Ze(t,n,""+t[n])}}function Qt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=ot(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function Wt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ot=/[\n"\\]/g;function Pt(t){return t.replace(Ot,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ve(t,n,a,o,u,d,S,C){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),n!=null?S==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Ke(n)):t.value!==""+Ke(n)&&(t.value=""+Ke(n)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),n!=null?mt(t,S,Ke(n)):a!=null?mt(t,S,Ke(a)):o!=null&&t.removeAttribute("value"),u==null&&d!=null&&(t.defaultChecked=!!d),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?t.name=""+Ke(C):t.removeAttribute("name")}function Nn(t,n,a,o,u,d,S,C){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){At(t);return}a=a!=null?""+Ke(a):"",n=n!=null?""+Ke(n):a,C||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=C?t.checked:!!o,t.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S),At(t)}function mt(t,n,a){n==="number"&&Wt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function _n(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+Ke(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Zn(t,n,a){if(n!=null&&(n=""+Ke(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Ke(a):""}function Ei(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(X(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Ke(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),At(t)}function Kn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var It=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Jt(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||It.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function bi(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Jt(t,u,o)}else for(var d in n)n.hasOwnProperty(d)&&Jt(t,d,n[d])}function Nt(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Pa=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function gr(t){return Pa.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function $i(){}var _u=null;function vu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var jr=null,Zr=null;function wp(t){var n=La(t);if(n&&(t=n.stateNode)){var a=t[An]||null;e:switch(t=n.stateNode,n.type){case"input":if(Ve(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Pt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[An]||null;if(!u)throw Error(r(90));Ve(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&Qt(o)}break e;case"textarea":Zn(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&_n(t,!!a.multiple,n,!1)}}}var xu=!1;function Dp(t,n,a){if(xu)return t(n,a);xu=!0;try{var o=t(n);return o}finally{if(xu=!1,(jr!==null||Zr!==null)&&(ec(),jr&&(n=jr,t=Zr,Zr=jr=null,wp(n),t)))for(n=0;n<t.length;n++)wp(t[n])}}function io(t,n){var a=t.stateNode;if(a===null)return null;var o=a[An]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var ea=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Su=!1;if(ea)try{var ao={};Object.defineProperty(ao,"passive",{get:function(){Su=!0}}),window.addEventListener("test",ao,ao),window.removeEventListener("test",ao,ao)}catch{Su=!1}var Ia=null,yu=null,pl=null;function Up(){if(pl)return pl;var t,n=yu,a=n.length,o,u="value"in Ia?Ia.value:Ia.textContent,d=u.length;for(t=0;t<a&&n[t]===u[t];t++);var S=a-t;for(o=1;o<=S&&n[a-o]===u[d-o];o++);return pl=u.slice(t,1<o?1-o:void 0)}function ml(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function gl(){return!0}function Np(){return!1}function Hn(t){function n(a,o,u,d,S){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=S,this.currentTarget=null;for(var C in t)t.hasOwnProperty(C)&&(a=t[C],this[C]=a?a(d):d[C]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?gl:Np,this.isPropagationStopped=Np,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=gl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=gl)},persist:function(){},isPersistent:gl}),n}var _r={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_l=Hn(_r),ro=_({},_r,{view:0,detail:0}),Dx=Hn(ro),Mu,Eu,so,vl=_({},ro,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Au,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==so&&(so&&t.type==="mousemove"?(Mu=t.screenX-so.screenX,Eu=t.screenY-so.screenY):Eu=Mu=0,so=t),Mu)},movementY:function(t){return"movementY"in t?t.movementY:Eu}}),Lp=Hn(vl),Ux=_({},vl,{dataTransfer:0}),Nx=Hn(Ux),Lx=_({},ro,{relatedTarget:0}),bu=Hn(Lx),Ox=_({},_r,{animationName:0,elapsedTime:0,pseudoElement:0}),Px=Hn(Ox),Ix=_({},_r,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Fx=Hn(Ix),zx=_({},_r,{data:0}),Op=Hn(zx),Bx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vx(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Gx[t])?!!n[t]:!1}function Au(){return Vx}var kx=_({},ro,{key:function(t){if(t.key){var n=Bx[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=ml(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Hx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Au,charCode:function(t){return t.type==="keypress"?ml(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ml(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Xx=Hn(kx),Wx=_({},vl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pp=Hn(Wx),qx=_({},ro,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Au}),Yx=Hn(qx),jx=_({},_r,{propertyName:0,elapsedTime:0,pseudoElement:0}),Zx=Hn(jx),Kx=_({},vl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Qx=Hn(Kx),Jx=_({},_r,{newState:0,oldState:0}),$x=Hn(Jx),eS=[9,13,27,32],Tu=ea&&"CompositionEvent"in window,oo=null;ea&&"documentMode"in document&&(oo=document.documentMode);var tS=ea&&"TextEvent"in window&&!oo,Ip=ea&&(!Tu||oo&&8<oo&&11>=oo),Fp=" ",zp=!1;function Bp(t,n){switch(t){case"keyup":return eS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Kr=!1;function nS(t,n){switch(t){case"compositionend":return Hp(n);case"keypress":return n.which!==32?null:(zp=!0,Fp);case"textInput":return t=n.data,t===Fp&&zp?null:t;default:return null}}function iS(t,n){if(Kr)return t==="compositionend"||!Tu&&Bp(t,n)?(t=Up(),pl=yu=Ia=null,Kr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ip&&n.locale!=="ko"?null:n.data;default:return null}}var aS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!aS[t.type]:n==="textarea"}function Vp(t,n,a,o){jr?Zr?Zr.push(o):Zr=[o]:jr=o,n=oc(n,"onChange"),0<n.length&&(a=new _l("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var lo=null,co=null;function rS(t){bg(t,0)}function xl(t){var n=mr(t);if(Qt(n))return t}function kp(t,n){if(t==="change")return n}var Xp=!1;if(ea){var Ru;if(ea){var Cu="oninput"in document;if(!Cu){var Wp=document.createElement("div");Wp.setAttribute("oninput","return;"),Cu=typeof Wp.oninput=="function"}Ru=Cu}else Ru=!1;Xp=Ru&&(!document.documentMode||9<document.documentMode)}function qp(){lo&&(lo.detachEvent("onpropertychange",Yp),co=lo=null)}function Yp(t){if(t.propertyName==="value"&&xl(co)){var n=[];Vp(n,co,t,vu(t)),Dp(rS,n)}}function sS(t,n,a){t==="focusin"?(qp(),lo=n,co=a,lo.attachEvent("onpropertychange",Yp)):t==="focusout"&&qp()}function oS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return xl(co)}function lS(t,n){if(t==="click")return xl(n)}function cS(t,n){if(t==="input"||t==="change")return xl(n)}function uS(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Qn=typeof Object.is=="function"?Object.is:uS;function uo(t,n){if(Qn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!bn.call(n,u)||!Qn(t[u],n[u]))return!1}return!0}function jp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Zp(t,n){var a=jp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=jp(a)}}function Kp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Kp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Qp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Wt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Wt(t.document)}return n}function wu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var fS=ea&&"documentMode"in document&&11>=document.documentMode,Qr=null,Du=null,fo=null,Uu=!1;function Jp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Uu||Qr==null||Qr!==Wt(o)||(o=Qr,"selectionStart"in o&&wu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),fo&&uo(fo,o)||(fo=o,o=oc(Du,"onSelect"),0<o.length&&(n=new _l("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Qr)))}function vr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Jr={animationend:vr("Animation","AnimationEnd"),animationiteration:vr("Animation","AnimationIteration"),animationstart:vr("Animation","AnimationStart"),transitionrun:vr("Transition","TransitionRun"),transitionstart:vr("Transition","TransitionStart"),transitioncancel:vr("Transition","TransitionCancel"),transitionend:vr("Transition","TransitionEnd")},Nu={},$p={};ea&&($p=document.createElement("div").style,"AnimationEvent"in window||(delete Jr.animationend.animation,delete Jr.animationiteration.animation,delete Jr.animationstart.animation),"TransitionEvent"in window||delete Jr.transitionend.transition);function xr(t){if(Nu[t])return Nu[t];if(!Jr[t])return t;var n=Jr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in $p)return Nu[t]=n[a];return t}var em=xr("animationend"),tm=xr("animationiteration"),nm=xr("animationstart"),dS=xr("transitionrun"),hS=xr("transitionstart"),pS=xr("transitioncancel"),im=xr("transitionend"),am=new Map,Lu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Lu.push("scrollEnd");function Ai(t,n){am.set(t,n),Y(n,[t])}var Sl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ci=[],$r=0,Ou=0;function yl(){for(var t=$r,n=Ou=$r=0;n<t;){var a=ci[n];ci[n++]=null;var o=ci[n];ci[n++]=null;var u=ci[n];ci[n++]=null;var d=ci[n];if(ci[n++]=null,o!==null&&u!==null){var S=o.pending;S===null?u.next=u:(u.next=S.next,S.next=u),o.pending=u}d!==0&&rm(a,u,d)}}function Ml(t,n,a,o){ci[$r++]=t,ci[$r++]=n,ci[$r++]=a,ci[$r++]=o,Ou|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Pu(t,n,a,o){return Ml(t,n,a,o),El(t)}function Sr(t,n){return Ml(t,null,null,n),El(t)}function rm(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=t.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(u=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,u&&n!==null&&(u=31-Ie(a),t=d.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),d):null}function El(t){if(50<Oo)throw Oo=0,Wf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var es={};function mS(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jn(t,n,a,o){return new mS(t,n,a,o)}function Iu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ta(t,n){var a=t.alternate;return a===null?(a=Jn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function sm(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function bl(t,n,a,o,u,d){var S=0;if(o=t,typeof t=="function")Iu(t)&&(S=1);else if(typeof t=="string")S=Sy(t,a,Re.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case P:return t=Jn(31,a,n,u),t.elementType=P,t.lanes=d,t;case w:return yr(a.children,u,d,n);case x:S=8,u|=24;break;case y:return t=Jn(12,a,n,u|2),t.elementType=y,t.lanes=d,t;case H:return t=Jn(13,a,n,u),t.elementType=H,t.lanes=d,t;case L:return t=Jn(19,a,n,u),t.elementType=L,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case D:S=10;break e;case T:S=9;break e;case U:S=11;break e;case O:S=14;break e;case b:S=16,o=null;break e}S=29,a=Error(r(130,t===null?"null":typeof t,"")),o=null}return n=Jn(S,a,n,u),n.elementType=t,n.type=o,n.lanes=d,n}function yr(t,n,a,o){return t=Jn(7,t,o,n),t.lanes=a,t}function Fu(t,n,a){return t=Jn(6,t,null,n),t.lanes=a,t}function om(t){var n=Jn(18,null,null,0);return n.stateNode=t,n}function zu(t,n,a){return n=Jn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var lm=new WeakMap;function ui(t,n){if(typeof t=="object"&&t!==null){var a=lm.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Yt(n)},lm.set(t,n),n)}return{value:t,source:n,stack:Yt(n)}}var ts=[],ns=0,Al=null,ho=0,fi=[],di=0,Fa=null,Ii=1,Fi="";function na(t,n){ts[ns++]=ho,ts[ns++]=Al,Al=t,ho=n}function cm(t,n,a){fi[di++]=Ii,fi[di++]=Fi,fi[di++]=Fa,Fa=t;var o=Ii;t=Fi;var u=32-Ie(o)-1;o&=~(1<<u),a+=1;var d=32-Ie(n)+u;if(30<d){var S=u-u%5;d=(o&(1<<S)-1).toString(32),o>>=S,u-=S,Ii=1<<32-Ie(n)+u|a<<u|o,Fi=d+t}else Ii=1<<d|a<<u|o,Fi=t}function Bu(t){t.return!==null&&(na(t,1),cm(t,1,0))}function Hu(t){for(;t===Al;)Al=ts[--ns],ts[ns]=null,ho=ts[--ns],ts[ns]=null;for(;t===Fa;)Fa=fi[--di],fi[di]=null,Fi=fi[--di],fi[di]=null,Ii=fi[--di],fi[di]=null}function um(t,n){fi[di++]=Ii,fi[di++]=Fi,fi[di++]=Fa,Ii=n.id,Fi=n.overflow,Fa=t}var Tn=null,jt=null,yt=!1,za=null,hi=!1,Gu=Error(r(519));function Ba(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw po(ui(n,t)),Gu}function fm(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[on]=t,n[An]=o,a){case"dialog":_t("cancel",n),_t("close",n);break;case"iframe":case"object":case"embed":_t("load",n);break;case"video":case"audio":for(a=0;a<Io.length;a++)_t(Io[a],n);break;case"source":_t("error",n);break;case"img":case"image":case"link":_t("error",n),_t("load",n);break;case"details":_t("toggle",n);break;case"input":_t("invalid",n),Nn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":_t("invalid",n);break;case"textarea":_t("invalid",n),Ei(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Cg(n.textContent,a)?(o.popover!=null&&(_t("beforetoggle",n),_t("toggle",n)),o.onScroll!=null&&_t("scroll",n),o.onScrollEnd!=null&&_t("scrollend",n),o.onClick!=null&&(n.onclick=$i),n=!0):n=!1,n||Ba(t,!0)}function dm(t){for(Tn=t.return;Tn;)switch(Tn.tag){case 5:case 31:case 13:hi=!1;return;case 27:case 3:hi=!0;return;default:Tn=Tn.return}}function is(t){if(t!==Tn)return!1;if(!yt)return dm(t),yt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||sd(t.type,t.memoizedProps)),a=!a),a&&jt&&Ba(t),dm(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));jt=Fg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));jt=Fg(t)}else n===27?(n=jt,$a(t.type)?(t=fd,fd=null,jt=t):jt=n):jt=Tn?mi(t.stateNode.nextSibling):null;return!0}function Mr(){jt=Tn=null,yt=!1}function Vu(){var t=za;return t!==null&&(Xn===null?Xn=t:Xn.push.apply(Xn,t),za=null),t}function po(t){za===null?za=[t]:za.push(t)}var ku=F(null),Er=null,ia=null;function Ha(t,n,a){Se(ku,n._currentValue),n._currentValue=a}function aa(t){t._currentValue=ku.current,$(ku)}function Xu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Wu(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var d=u.dependencies;if(d!==null){var S=u.child;d=d.firstContext;e:for(;d!==null;){var C=d;d=u;for(var G=0;G<n.length;G++)if(C.context===n[G]){d.lanes|=a,C=d.alternate,C!==null&&(C.lanes|=a),Xu(d.return,a,t),o||(S=null);break e}d=C.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(r(341));S.lanes|=a,d=S.alternate,d!==null&&(d.lanes|=a),Xu(S,a,t),S=null}else S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===t){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function as(t,n,a,o){t=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var C=u.type;Qn(u.pendingProps.value,S.value)||(t!==null?t.push(C):t=[C])}}else if(u===ye.current){if(S=u.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Go):t=[Go])}u=u.return}t!==null&&Wu(n,t,a,o),n.flags|=262144}function Tl(t){for(t=t.firstContext;t!==null;){if(!Qn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function br(t){Er=t,ia=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Rn(t){return hm(Er,t)}function Rl(t,n){return Er===null&&br(t),hm(t,n)}function hm(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ia===null){if(t===null)throw Error(r(308));ia=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ia=ia.next=n;return a}var gS=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},_S=s.unstable_scheduleCallback,vS=s.unstable_NormalPriority,dn={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function qu(){return{controller:new gS,data:new Map,refCount:0}}function mo(t){t.refCount--,t.refCount===0&&_S(vS,function(){t.controller.abort()})}var go=null,Yu=0,rs=0,ss=null;function xS(t,n){if(go===null){var a=go=[];Yu=0,rs=Qf(),ss={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Yu++,n.then(pm,pm),n}function pm(){if(--Yu===0&&go!==null){ss!==null&&(ss.status="fulfilled");var t=go;go=null,rs=0,ss=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function SS(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var mm=I.S;I.S=function(t,n){J0=Ce(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&xS(t,n),mm!==null&&mm(t,n)};var Ar=F(null);function ju(){var t=Ar.current;return t!==null?t:qt.pooledCache}function Cl(t,n){n===null?Se(Ar,Ar.current):Se(Ar,n.pool)}function gm(){var t=ju();return t===null?null:{parent:dn._currentValue,pool:t}}var os=Error(r(460)),Zu=Error(r(474)),wl=Error(r(542)),Dl={then:function(){}};function _m(t){return t=t.status,t==="fulfilled"||t==="rejected"}function vm(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then($i,$i),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Sm(t),t;default:if(typeof n.status=="string")n.then($i,$i);else{if(t=qt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Sm(t),t}throw Rr=n,os}}function Tr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Rr=a,os):a}}var Rr=null;function xm(){if(Rr===null)throw Error(r(459));var t=Rr;return Rr=null,t}function Sm(t){if(t===os||t===wl)throw Error(r(483))}var ls=null,_o=0;function Ul(t){var n=_o;return _o+=1,ls===null&&(ls=[]),vm(ls,t,n)}function vo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Nl(t,n){throw n.$$typeof===g?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function ym(t){function n(j,k){if(t){var ee=j.deletions;ee===null?(j.deletions=[k],j.flags|=16):ee.push(k)}}function a(j,k){if(!t)return null;for(;k!==null;)n(j,k),k=k.sibling;return null}function o(j){for(var k=new Map;j!==null;)j.key!==null?k.set(j.key,j):k.set(j.index,j),j=j.sibling;return k}function u(j,k){return j=ta(j,k),j.index=0,j.sibling=null,j}function d(j,k,ee){return j.index=ee,t?(ee=j.alternate,ee!==null?(ee=ee.index,ee<k?(j.flags|=67108866,k):ee):(j.flags|=67108866,k)):(j.flags|=1048576,k)}function S(j){return t&&j.alternate===null&&(j.flags|=67108866),j}function C(j,k,ee,_e){return k===null||k.tag!==6?(k=Fu(ee,j.mode,_e),k.return=j,k):(k=u(k,ee),k.return=j,k)}function G(j,k,ee,_e){var Qe=ee.type;return Qe===w?he(j,k,ee.props.children,_e,ee.key):k!==null&&(k.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===b&&Tr(Qe)===k.type)?(k=u(k,ee.props),vo(k,ee),k.return=j,k):(k=bl(ee.type,ee.key,ee.props,null,j.mode,_e),vo(k,ee),k.return=j,k)}function te(j,k,ee,_e){return k===null||k.tag!==4||k.stateNode.containerInfo!==ee.containerInfo||k.stateNode.implementation!==ee.implementation?(k=zu(ee,j.mode,_e),k.return=j,k):(k=u(k,ee.children||[]),k.return=j,k)}function he(j,k,ee,_e,Qe){return k===null||k.tag!==7?(k=yr(ee,j.mode,_e,Qe),k.return=j,k):(k=u(k,ee),k.return=j,k)}function xe(j,k,ee){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Fu(""+k,j.mode,ee),k.return=j,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case M:return ee=bl(k.type,k.key,k.props,null,j.mode,ee),vo(ee,k),ee.return=j,ee;case A:return k=zu(k,j.mode,ee),k.return=j,k;case b:return k=Tr(k),xe(j,k,ee)}if(X(k)||Z(k))return k=yr(k,j.mode,ee,null),k.return=j,k;if(typeof k.then=="function")return xe(j,Ul(k),ee);if(k.$$typeof===D)return xe(j,Rl(j,k),ee);Nl(j,k)}return null}function se(j,k,ee,_e){var Qe=k!==null?k.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint")return Qe!==null?null:C(j,k,""+ee,_e);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case M:return ee.key===Qe?G(j,k,ee,_e):null;case A:return ee.key===Qe?te(j,k,ee,_e):null;case b:return ee=Tr(ee),se(j,k,ee,_e)}if(X(ee)||Z(ee))return Qe!==null?null:he(j,k,ee,_e,null);if(typeof ee.then=="function")return se(j,k,Ul(ee),_e);if(ee.$$typeof===D)return se(j,k,Rl(j,ee),_e);Nl(j,ee)}return null}function ce(j,k,ee,_e,Qe){if(typeof _e=="string"&&_e!==""||typeof _e=="number"||typeof _e=="bigint")return j=j.get(ee)||null,C(k,j,""+_e,Qe);if(typeof _e=="object"&&_e!==null){switch(_e.$$typeof){case M:return j=j.get(_e.key===null?ee:_e.key)||null,G(k,j,_e,Qe);case A:return j=j.get(_e.key===null?ee:_e.key)||null,te(k,j,_e,Qe);case b:return _e=Tr(_e),ce(j,k,ee,_e,Qe)}if(X(_e)||Z(_e))return j=j.get(ee)||null,he(k,j,_e,Qe,null);if(typeof _e.then=="function")return ce(j,k,ee,Ul(_e),Qe);if(_e.$$typeof===D)return ce(j,k,ee,Rl(k,_e),Qe);Nl(k,_e)}return null}function qe(j,k,ee,_e){for(var Qe=null,Tt=null,je=k,ut=k=0,St=null;je!==null&&ut<ee.length;ut++){je.index>ut?(St=je,je=null):St=je.sibling;var Rt=se(j,je,ee[ut],_e);if(Rt===null){je===null&&(je=St);break}t&&je&&Rt.alternate===null&&n(j,je),k=d(Rt,k,ut),Tt===null?Qe=Rt:Tt.sibling=Rt,Tt=Rt,je=St}if(ut===ee.length)return a(j,je),yt&&na(j,ut),Qe;if(je===null){for(;ut<ee.length;ut++)je=xe(j,ee[ut],_e),je!==null&&(k=d(je,k,ut),Tt===null?Qe=je:Tt.sibling=je,Tt=je);return yt&&na(j,ut),Qe}for(je=o(je);ut<ee.length;ut++)St=ce(je,j,ut,ee[ut],_e),St!==null&&(t&&St.alternate!==null&&je.delete(St.key===null?ut:St.key),k=d(St,k,ut),Tt===null?Qe=St:Tt.sibling=St,Tt=St);return t&&je.forEach(function(ar){return n(j,ar)}),yt&&na(j,ut),Qe}function $e(j,k,ee,_e){if(ee==null)throw Error(r(151));for(var Qe=null,Tt=null,je=k,ut=k=0,St=null,Rt=ee.next();je!==null&&!Rt.done;ut++,Rt=ee.next()){je.index>ut?(St=je,je=null):St=je.sibling;var ar=se(j,je,Rt.value,_e);if(ar===null){je===null&&(je=St);break}t&&je&&ar.alternate===null&&n(j,je),k=d(ar,k,ut),Tt===null?Qe=ar:Tt.sibling=ar,Tt=ar,je=St}if(Rt.done)return a(j,je),yt&&na(j,ut),Qe;if(je===null){for(;!Rt.done;ut++,Rt=ee.next())Rt=xe(j,Rt.value,_e),Rt!==null&&(k=d(Rt,k,ut),Tt===null?Qe=Rt:Tt.sibling=Rt,Tt=Rt);return yt&&na(j,ut),Qe}for(je=o(je);!Rt.done;ut++,Rt=ee.next())Rt=ce(je,j,ut,Rt.value,_e),Rt!==null&&(t&&Rt.alternate!==null&&je.delete(Rt.key===null?ut:Rt.key),k=d(Rt,k,ut),Tt===null?Qe=Rt:Tt.sibling=Rt,Tt=Rt);return t&&je.forEach(function(Uy){return n(j,Uy)}),yt&&na(j,ut),Qe}function kt(j,k,ee,_e){if(typeof ee=="object"&&ee!==null&&ee.type===w&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case M:e:{for(var Qe=ee.key;k!==null;){if(k.key===Qe){if(Qe=ee.type,Qe===w){if(k.tag===7){a(j,k.sibling),_e=u(k,ee.props.children),_e.return=j,j=_e;break e}}else if(k.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===b&&Tr(Qe)===k.type){a(j,k.sibling),_e=u(k,ee.props),vo(_e,ee),_e.return=j,j=_e;break e}a(j,k);break}else n(j,k);k=k.sibling}ee.type===w?(_e=yr(ee.props.children,j.mode,_e,ee.key),_e.return=j,j=_e):(_e=bl(ee.type,ee.key,ee.props,null,j.mode,_e),vo(_e,ee),_e.return=j,j=_e)}return S(j);case A:e:{for(Qe=ee.key;k!==null;){if(k.key===Qe)if(k.tag===4&&k.stateNode.containerInfo===ee.containerInfo&&k.stateNode.implementation===ee.implementation){a(j,k.sibling),_e=u(k,ee.children||[]),_e.return=j,j=_e;break e}else{a(j,k);break}else n(j,k);k=k.sibling}_e=zu(ee,j.mode,_e),_e.return=j,j=_e}return S(j);case b:return ee=Tr(ee),kt(j,k,ee,_e)}if(X(ee))return qe(j,k,ee,_e);if(Z(ee)){if(Qe=Z(ee),typeof Qe!="function")throw Error(r(150));return ee=Qe.call(ee),$e(j,k,ee,_e)}if(typeof ee.then=="function")return kt(j,k,Ul(ee),_e);if(ee.$$typeof===D)return kt(j,k,Rl(j,ee),_e);Nl(j,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint"?(ee=""+ee,k!==null&&k.tag===6?(a(j,k.sibling),_e=u(k,ee),_e.return=j,j=_e):(a(j,k),_e=Fu(ee,j.mode,_e),_e.return=j,j=_e),S(j)):a(j,k)}return function(j,k,ee,_e){try{_o=0;var Qe=kt(j,k,ee,_e);return ls=null,Qe}catch(je){if(je===os||je===wl)throw je;var Tt=Jn(29,je,null,j.mode);return Tt.lanes=_e,Tt.return=j,Tt}}}var Cr=ym(!0),Mm=ym(!1),Ga=!1;function Ku(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Qu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Va(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ka(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(wt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=El(t),rm(t,null,a),n}return Ml(t,o,n,a),El(t)}function xo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,li(t,a)}}function Ju(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=S:d=d.next=S,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var $u=!1;function So(){if($u){var t=ss;if(t!==null)throw t}}function yo(t,n,a,o){$u=!1;var u=t.updateQueue;Ga=!1;var d=u.firstBaseUpdate,S=u.lastBaseUpdate,C=u.shared.pending;if(C!==null){u.shared.pending=null;var G=C,te=G.next;G.next=null,S===null?d=te:S.next=te,S=G;var he=t.alternate;he!==null&&(he=he.updateQueue,C=he.lastBaseUpdate,C!==S&&(C===null?he.firstBaseUpdate=te:C.next=te,he.lastBaseUpdate=G))}if(d!==null){var xe=u.baseState;S=0,he=te=G=null,C=d;do{var se=C.lane&-536870913,ce=se!==C.lane;if(ce?(xt&se)===se:(o&se)===se){se!==0&&se===rs&&($u=!0),he!==null&&(he=he.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});e:{var qe=t,$e=C;se=n;var kt=a;switch($e.tag){case 1:if(qe=$e.payload,typeof qe=="function"){xe=qe.call(kt,xe,se);break e}xe=qe;break e;case 3:qe.flags=qe.flags&-65537|128;case 0:if(qe=$e.payload,se=typeof qe=="function"?qe.call(kt,xe,se):qe,se==null)break e;xe=_({},xe,se);break e;case 2:Ga=!0}}se=C.callback,se!==null&&(t.flags|=64,ce&&(t.flags|=8192),ce=u.callbacks,ce===null?u.callbacks=[se]:ce.push(se))}else ce={lane:se,tag:C.tag,payload:C.payload,callback:C.callback,next:null},he===null?(te=he=ce,G=xe):he=he.next=ce,S|=se;if(C=C.next,C===null){if(C=u.shared.pending,C===null)break;ce=C,C=ce.next,ce.next=null,u.lastBaseUpdate=ce,u.shared.pending=null}}while(!0);he===null&&(G=xe),u.baseState=G,u.firstBaseUpdate=te,u.lastBaseUpdate=he,d===null&&(u.shared.lanes=0),ja|=S,t.lanes=S,t.memoizedState=xe}}function Em(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function bm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Em(a[t],n)}var cs=F(null),Ll=F(0);function Am(t,n){t=ha,Se(Ll,t),Se(cs,n),ha=t|n.baseLanes}function ef(){Se(Ll,ha),Se(cs,cs.current)}function tf(){ha=Ll.current,$(cs),$(Ll)}var $n=F(null),pi=null;function Xa(t){var n=t.alternate;Se(ln,ln.current&1),Se($n,t),pi===null&&(n===null||cs.current!==null||n.memoizedState!==null)&&(pi=t)}function nf(t){Se(ln,ln.current),Se($n,t),pi===null&&(pi=t)}function Tm(t){t.tag===22?(Se(ln,ln.current),Se($n,t),pi===null&&(pi=t)):Wa()}function Wa(){Se(ln,ln.current),Se($n,$n.current)}function ei(t){$($n),pi===t&&(pi=null),$(ln)}var ln=F(0);function Ol(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||cd(a)||ud(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ra=0,lt=null,Gt=null,hn=null,Pl=!1,us=!1,wr=!1,Il=0,Mo=0,fs=null,yS=0;function an(){throw Error(r(321))}function af(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Qn(t[a],n[a]))return!1;return!0}function rf(t,n,a,o,u,d){return ra=d,lt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,I.H=t===null||t.memoizedState===null?c0:Sf,wr=!1,d=a(o,u),wr=!1,us&&(d=Cm(n,a,o,u)),Rm(t),d}function Rm(t){I.H=Ao;var n=Gt!==null&&Gt.next!==null;if(ra=0,hn=Gt=lt=null,Pl=!1,Mo=0,fs=null,n)throw Error(r(300));t===null||pn||(t=t.dependencies,t!==null&&Tl(t)&&(pn=!0))}function Cm(t,n,a,o){lt=t;var u=0;do{if(us&&(fs=null),Mo=0,us=!1,25<=u)throw Error(r(301));if(u+=1,hn=Gt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}I.H=u0,d=n(a,o)}while(us);return d}function MS(){var t=I.H,n=t.useState()[0];return n=typeof n.then=="function"?Eo(n):n,t=t.useState()[0],(Gt!==null?Gt.memoizedState:null)!==t&&(lt.flags|=1024),n}function sf(){var t=Il!==0;return Il=0,t}function of(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function lf(t){if(Pl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Pl=!1}ra=0,hn=Gt=lt=null,us=!1,Mo=Il=0,fs=null}function Fn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?lt.memoizedState=hn=t:hn=hn.next=t,hn}function cn(){if(Gt===null){var t=lt.alternate;t=t!==null?t.memoizedState:null}else t=Gt.next;var n=hn===null?lt.memoizedState:hn.next;if(n!==null)hn=n,Gt=t;else{if(t===null)throw lt.alternate===null?Error(r(467)):Error(r(310));Gt=t,t={memoizedState:Gt.memoizedState,baseState:Gt.baseState,baseQueue:Gt.baseQueue,queue:Gt.queue,next:null},hn===null?lt.memoizedState=hn=t:hn=hn.next=t}return hn}function Fl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Eo(t){var n=Mo;return Mo+=1,fs===null&&(fs=[]),t=vm(fs,t,n),n=lt,(hn===null?n.memoizedState:hn.next)===null&&(n=n.alternate,I.H=n===null||n.memoizedState===null?c0:Sf),t}function zl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Eo(t);if(t.$$typeof===D)return Rn(t)}throw Error(r(438,String(t)))}function cf(t){var n=null,a=lt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=lt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Fl(),lt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=W;return n.index++,a}function sa(t,n){return typeof n=="function"?n(t):n}function Bl(t){var n=cn();return uf(n,Gt,t)}function uf(t,n,a){var o=t.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=t.baseQueue,d=o.pending;if(d!==null){if(u!==null){var S=u.next;u.next=d.next,d.next=S}n.baseQueue=u=d,o.pending=null}if(d=t.baseState,u===null)t.memoizedState=d;else{n=u.next;var C=S=null,G=null,te=n,he=!1;do{var xe=te.lane&-536870913;if(xe!==te.lane?(xt&xe)===xe:(ra&xe)===xe){var se=te.revertLane;if(se===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),xe===rs&&(he=!0);else if((ra&se)===se){te=te.next,se===rs&&(he=!0);continue}else xe={lane:0,revertLane:te.revertLane,gesture:null,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},G===null?(C=G=xe,S=d):G=G.next=xe,lt.lanes|=se,ja|=se;xe=te.action,wr&&a(d,xe),d=te.hasEagerState?te.eagerState:a(d,xe)}else se={lane:xe,revertLane:te.revertLane,gesture:te.gesture,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},G===null?(C=G=se,S=d):G=G.next=se,lt.lanes|=xe,ja|=xe;te=te.next}while(te!==null&&te!==n);if(G===null?S=d:G.next=C,!Qn(d,t.memoizedState)&&(pn=!0,he&&(a=ss,a!==null)))throw a;t.memoizedState=d,t.baseState=S,t.baseQueue=G,o.lastRenderedState=d}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function ff(t){var n=cn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var S=u=u.next;do d=t(d,S.action),S=S.next;while(S!==u);Qn(d,n.memoizedState)||(pn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function wm(t,n,a){var o=lt,u=cn(),d=yt;if(d){if(a===void 0)throw Error(r(407));a=a()}else a=n();var S=!Qn((Gt||u).memoizedState,a);if(S&&(u.memoizedState=a,pn=!0),u=u.queue,pf(Nm.bind(null,o,u,t),[t]),u.getSnapshot!==n||S||hn!==null&&hn.memoizedState.tag&1){if(o.flags|=2048,ds(9,{destroy:void 0},Um.bind(null,o,u,a,n),null),qt===null)throw Error(r(349));d||(ra&127)!==0||Dm(o,n,a)}return a}function Dm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=lt.updateQueue,n===null?(n=Fl(),lt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Um(t,n,a,o){n.value=a,n.getSnapshot=o,Lm(n)&&Om(t)}function Nm(t,n,a){return a(function(){Lm(n)&&Om(t)})}function Lm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Qn(t,a)}catch{return!0}}function Om(t){var n=Sr(t,2);n!==null&&Wn(n,t,2)}function df(t){var n=Fn();if(typeof t=="function"){var a=t;if(t=a(),wr){Pe(!0);try{a()}finally{Pe(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:t},n}function Pm(t,n,a,o){return t.baseState=a,uf(t,Gt,typeof o=="function"?o:sa)}function ES(t,n,a,o,u){if(Vl(t))throw Error(r(485));if(t=n.action,t!==null){var d={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){d.listeners.push(S)}};I.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,Im(n,d)):(d.next=a.next,n.pending=a.next=d)}}function Im(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var d=I.T,S={};I.T=S;try{var C=a(u,o),G=I.S;G!==null&&G(S,C),Fm(t,n,C)}catch(te){hf(t,n,te)}finally{d!==null&&S.types!==null&&(d.types=S.types),I.T=d}}else try{d=a(u,o),Fm(t,n,d)}catch(te){hf(t,n,te)}}function Fm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){zm(t,n,o)},function(o){return hf(t,n,o)}):zm(t,n,a)}function zm(t,n,a){n.status="fulfilled",n.value=a,Bm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Im(t,a)))}function hf(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Bm(n),n=n.next;while(n!==o)}t.action=null}function Bm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Hm(t,n){return n}function Gm(t,n){if(yt){var a=qt.formState;if(a!==null){e:{var o=lt;if(yt){if(jt){t:{for(var u=jt,d=hi;u.nodeType!==8;){if(!d){u=null;break t}if(u=mi(u.nextSibling),u===null){u=null;break t}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){jt=mi(u.nextSibling),o=u.data==="F!";break e}}Ba(o)}o=!1}o&&(n=a[0])}}return a=Fn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hm,lastRenderedState:n},a.queue=o,a=s0.bind(null,lt,o),o.dispatch=a,o=df(!1),d=xf.bind(null,lt,!1,o.queue),o=Fn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=ES.bind(null,lt,u,d,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function Vm(t){var n=cn();return km(n,Gt,t)}function km(t,n,a){if(n=uf(t,n,Hm)[0],t=Bl(sa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Eo(n)}catch(S){throw S===os?wl:S}else o=n;n=cn();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(lt.flags|=2048,ds(9,{destroy:void 0},bS.bind(null,u,a),null)),[o,d,t]}function bS(t,n){t.action=n}function Xm(t){var n=cn(),a=Gt;if(a!==null)return km(n,a,t);cn(),n=n.memoizedState,a=cn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function ds(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=lt.updateQueue,n===null&&(n=Fl(),lt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Wm(){return cn().memoizedState}function Hl(t,n,a,o){var u=Fn();lt.flags|=t,u.memoizedState=ds(1|n,{destroy:void 0},a,o===void 0?null:o)}function Gl(t,n,a,o){var u=cn();o=o===void 0?null:o;var d=u.memoizedState.inst;Gt!==null&&o!==null&&af(o,Gt.memoizedState.deps)?u.memoizedState=ds(n,d,a,o):(lt.flags|=t,u.memoizedState=ds(1|n,d,a,o))}function qm(t,n){Hl(8390656,8,t,n)}function pf(t,n){Gl(2048,8,t,n)}function AS(t){lt.flags|=4;var n=lt.updateQueue;if(n===null)n=Fl(),lt.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Ym(t){var n=cn().memoizedState;return AS({ref:n,nextImpl:t}),function(){if((wt&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function jm(t,n){return Gl(4,2,t,n)}function Zm(t,n){return Gl(4,4,t,n)}function Km(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Qm(t,n,a){a=a!=null?a.concat([t]):null,Gl(4,4,Km.bind(null,n,t),a)}function mf(){}function Jm(t,n){var a=cn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&af(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function $m(t,n){var a=cn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&af(n,o[1]))return o[0];if(o=t(),wr){Pe(!0);try{t()}finally{Pe(!1)}}return a.memoizedState=[o,n],o}function gf(t,n,a){return a===void 0||(ra&1073741824)!==0&&(xt&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=eg(),lt.lanes|=t,ja|=t,a)}function e0(t,n,a,o){return Qn(a,n)?a:cs.current!==null?(t=gf(t,a,o),Qn(t,n)||(pn=!0),t):(ra&42)===0||(ra&1073741824)!==0&&(xt&261930)===0?(pn=!0,t.memoizedState=a):(t=eg(),lt.lanes|=t,ja|=t,n)}function t0(t,n,a,o,u){var d=B.p;B.p=d!==0&&8>d?d:8;var S=I.T,C={};I.T=C,xf(t,!1,n,a);try{var G=u(),te=I.S;if(te!==null&&te(C,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var he=SS(G,o);bo(t,n,he,ii(t))}else bo(t,n,o,ii(t))}catch(xe){bo(t,n,{then:function(){},status:"rejected",reason:xe},ii())}finally{B.p=d,S!==null&&C.types!==null&&(S.types=C.types),I.T=S}}function TS(){}function _f(t,n,a,o){if(t.tag!==5)throw Error(r(476));var u=n0(t).queue;t0(t,u,n,le,a===null?TS:function(){return i0(t),a(o)})}function n0(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:le,baseState:le,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:le},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function i0(t){var n=n0(t);n.next===null&&(n=t.alternate.memoizedState),bo(t,n.next.queue,{},ii())}function vf(){return Rn(Go)}function a0(){return cn().memoizedState}function r0(){return cn().memoizedState}function RS(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ii();t=Va(a);var o=ka(n,t,a);o!==null&&(Wn(o,n,a),xo(o,n,a)),n={cache:qu()},t.payload=n;return}n=n.return}}function CS(t,n,a){var o=ii();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Vl(t)?o0(n,a):(a=Pu(t,n,a,o),a!==null&&(Wn(a,t,o),l0(a,n,o)))}function s0(t,n,a){var o=ii();bo(t,n,a,o)}function bo(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Vl(t))o0(n,u);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var S=n.lastRenderedState,C=d(S,a);if(u.hasEagerState=!0,u.eagerState=C,Qn(C,S))return Ml(t,n,u,0),qt===null&&yl(),!1}catch{}if(a=Pu(t,n,u,o),a!==null)return Wn(a,t,o),l0(a,n,o),!0}return!1}function xf(t,n,a,o){if(o={lane:2,revertLane:Qf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Vl(t)){if(n)throw Error(r(479))}else n=Pu(t,a,o,2),n!==null&&Wn(n,t,2)}function Vl(t){var n=t.alternate;return t===lt||n!==null&&n===lt}function o0(t,n){us=Pl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function l0(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,li(t,a)}}var Ao={readContext:Rn,use:zl,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useLayoutEffect:an,useInsertionEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useSyncExternalStore:an,useId:an,useHostTransitionStatus:an,useFormState:an,useActionState:an,useOptimistic:an,useMemoCache:an,useCacheRefresh:an};Ao.useEffectEvent=an;var c0={readContext:Rn,use:zl,useCallback:function(t,n){return Fn().memoizedState=[t,n===void 0?null:n],t},useContext:Rn,useEffect:qm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Hl(4194308,4,Km.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Hl(4194308,4,t,n)},useInsertionEffect:function(t,n){Hl(4,2,t,n)},useMemo:function(t,n){var a=Fn();n=n===void 0?null:n;var o=t();if(wr){Pe(!0);try{t()}finally{Pe(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Fn();if(a!==void 0){var u=a(n);if(wr){Pe(!0);try{a(n)}finally{Pe(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=CS.bind(null,lt,t),[o.memoizedState,t]},useRef:function(t){var n=Fn();return t={current:t},n.memoizedState=t},useState:function(t){t=df(t);var n=t.queue,a=s0.bind(null,lt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:mf,useDeferredValue:function(t,n){var a=Fn();return gf(a,t,n)},useTransition:function(){var t=df(!1);return t=t0.bind(null,lt,t.queue,!0,!1),Fn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=lt,u=Fn();if(yt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),qt===null)throw Error(r(349));(xt&127)!==0||Dm(o,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,qm(Nm.bind(null,o,d,t),[t]),o.flags|=2048,ds(9,{destroy:void 0},Um.bind(null,o,d,a,n),null),a},useId:function(){var t=Fn(),n=qt.identifierPrefix;if(yt){var a=Fi,o=Ii;a=(o&~(1<<32-Ie(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Il++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=yS++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:vf,useFormState:Gm,useActionState:Gm,useOptimistic:function(t){var n=Fn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=xf.bind(null,lt,!0,a),a.dispatch=n,[t,n]},useMemoCache:cf,useCacheRefresh:function(){return Fn().memoizedState=RS.bind(null,lt)},useEffectEvent:function(t){var n=Fn(),a={impl:t};return n.memoizedState=a,function(){if((wt&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Sf={readContext:Rn,use:zl,useCallback:Jm,useContext:Rn,useEffect:pf,useImperativeHandle:Qm,useInsertionEffect:jm,useLayoutEffect:Zm,useMemo:$m,useReducer:Bl,useRef:Wm,useState:function(){return Bl(sa)},useDebugValue:mf,useDeferredValue:function(t,n){var a=cn();return e0(a,Gt.memoizedState,t,n)},useTransition:function(){var t=Bl(sa)[0],n=cn().memoizedState;return[typeof t=="boolean"?t:Eo(t),n]},useSyncExternalStore:wm,useId:a0,useHostTransitionStatus:vf,useFormState:Vm,useActionState:Vm,useOptimistic:function(t,n){var a=cn();return Pm(a,Gt,t,n)},useMemoCache:cf,useCacheRefresh:r0};Sf.useEffectEvent=Ym;var u0={readContext:Rn,use:zl,useCallback:Jm,useContext:Rn,useEffect:pf,useImperativeHandle:Qm,useInsertionEffect:jm,useLayoutEffect:Zm,useMemo:$m,useReducer:ff,useRef:Wm,useState:function(){return ff(sa)},useDebugValue:mf,useDeferredValue:function(t,n){var a=cn();return Gt===null?gf(a,t,n):e0(a,Gt.memoizedState,t,n)},useTransition:function(){var t=ff(sa)[0],n=cn().memoizedState;return[typeof t=="boolean"?t:Eo(t),n]},useSyncExternalStore:wm,useId:a0,useHostTransitionStatus:vf,useFormState:Xm,useActionState:Xm,useOptimistic:function(t,n){var a=cn();return Gt!==null?Pm(a,Gt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:cf,useCacheRefresh:r0};u0.useEffectEvent=Ym;function yf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Mf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=ii(),u=Va(o);u.payload=n,a!=null&&(u.callback=a),n=ka(t,u,o),n!==null&&(Wn(n,t,o),xo(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=ii(),u=Va(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=ka(t,u,o),n!==null&&(Wn(n,t,o),xo(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ii(),o=Va(a);o.tag=2,n!=null&&(o.callback=n),n=ka(t,o,a),n!==null&&(Wn(n,t,a),xo(n,t,a))}};function f0(t,n,a,o,u,d,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,d,S):n.prototype&&n.prototype.isPureReactComponent?!uo(a,o)||!uo(u,d):!0}function d0(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&Mf.enqueueReplaceState(n,n.state,null)}function Dr(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=_({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function h0(t){Sl(t)}function p0(t){console.error(t)}function m0(t){Sl(t)}function kl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function g0(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Ef(t,n,a){return a=Va(a),a.tag=3,a.payload={element:null},a.callback=function(){kl(t,n)},a}function _0(t){return t=Va(t),t.tag=3,t}function v0(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;t.payload=function(){return u(d)},t.callback=function(){g0(n,a,o)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){g0(n,a,o),typeof u!="function"&&(Za===null?Za=new Set([this]):Za.add(this));var C=o.stack;this.componentDidCatch(o.value,{componentStack:C!==null?C:""})})}function wS(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&as(n,a,u,!0),a=$n.current,a!==null){switch(a.tag){case 31:case 13:return pi===null?tc():a.alternate===null&&rn===0&&(rn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Dl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),jf(t,o,u)),!1;case 22:return a.flags|=65536,o===Dl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),jf(t,o,u)),!1}throw Error(r(435,a.tag))}return jf(t,o,u),tc(),!1}if(yt)return n=$n.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Gu&&(t=Error(r(422),{cause:o}),po(ui(t,a)))):(o!==Gu&&(n=Error(r(423),{cause:o}),po(ui(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=ui(o,a),u=Ef(t.stateNode,o,u),Ju(t,u),rn!==4&&(rn=2)),!1;var d=Error(r(520),{cause:o});if(d=ui(d,a),Lo===null?Lo=[d]:Lo.push(d),rn!==4&&(rn=2),n===null)return!0;o=ui(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Ef(a.stateNode,o,t),Ju(a,t),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Za===null||!Za.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=_0(u),v0(u,t,a,o),Ju(a,u),!1}a=a.return}while(a!==null);return!1}var bf=Error(r(461)),pn=!1;function Cn(t,n,a,o){n.child=t===null?Mm(n,null,a,o):Cr(n,t.child,a,o)}function x0(t,n,a,o,u){a=a.render;var d=n.ref;if("ref"in o){var S={};for(var C in o)C!=="ref"&&(S[C]=o[C])}else S=o;return br(n),o=rf(t,n,a,S,d,u),C=sf(),t!==null&&!pn?(of(t,n,u),oa(t,n,u)):(yt&&C&&Bu(n),n.flags|=1,Cn(t,n,o,u),n.child)}function S0(t,n,a,o,u){if(t===null){var d=a.type;return typeof d=="function"&&!Iu(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,y0(t,n,d,o,u)):(t=bl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(d=t.child,!Nf(t,u)){var S=d.memoizedProps;if(a=a.compare,a=a!==null?a:uo,a(S,o)&&t.ref===n.ref)return oa(t,n,u)}return n.flags|=1,t=ta(d,o),t.ref=n.ref,t.return=n,n.child=t}function y0(t,n,a,o,u){if(t!==null){var d=t.memoizedProps;if(uo(d,o)&&t.ref===n.ref)if(pn=!1,n.pendingProps=o=d,Nf(t,u))(t.flags&131072)!==0&&(pn=!0);else return n.lanes=t.lanes,oa(t,n,u)}return Af(t,n,a,o,u)}function M0(t,n,a,o){var u=o.children,d=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,n.child=null;return E0(t,n,d,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Cl(n,d!==null?d.cachePool:null),d!==null?Am(n,d):ef(),Tm(n);else return o=n.lanes=536870912,E0(t,n,d!==null?d.baseLanes|a:a,a,o)}else d!==null?(Cl(n,d.cachePool),Am(n,d),Wa(),n.memoizedState=null):(t!==null&&Cl(n,null),ef(),Wa());return Cn(t,n,u,a),n.child}function To(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function E0(t,n,a,o,u){var d=ju();return d=d===null?null:{parent:dn._currentValue,pool:d},n.memoizedState={baseLanes:a,cachePool:d},t!==null&&Cl(n,null),ef(),Tm(n),t!==null&&as(t,n,o,!0),n.childLanes=u,null}function Xl(t,n){return n=ql({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function b0(t,n,a){return Cr(n,t.child,null,a),t=Xl(n,n.pendingProps),t.flags|=2,ei(n),n.memoizedState=null,t}function DS(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(yt){if(o.mode==="hidden")return t=Xl(n,o),n.lanes=536870912,To(null,t);if(nf(n),(t=jt)?(t=Ig(t,hi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Fa!==null?{id:Ii,overflow:Fi}:null,retryLane:536870912,hydrationErrors:null},a=om(t),a.return=n,n.child=a,Tn=n,jt=null)):t=null,t===null)throw Ba(n);return n.lanes=536870912,null}return Xl(n,o)}var d=t.memoizedState;if(d!==null){var S=d.dehydrated;if(nf(n),u)if(n.flags&256)n.flags&=-257,n=b0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(pn||as(t,n,a,!1),u=(a&t.childLanes)!==0,pn||u){if(o=qt,o!==null&&(S=jn(o,a),S!==0&&S!==d.retryLane))throw d.retryLane=S,Sr(t,S),Wn(o,t,S),bf;tc(),n=b0(t,n,a)}else t=d.treeContext,jt=mi(S.nextSibling),Tn=n,yt=!0,za=null,hi=!1,t!==null&&um(n,t),n=Xl(n,o),n.flags|=4096;return n}return t=ta(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Wl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Af(t,n,a,o,u){return br(n),a=rf(t,n,a,o,void 0,u),o=sf(),t!==null&&!pn?(of(t,n,u),oa(t,n,u)):(yt&&o&&Bu(n),n.flags|=1,Cn(t,n,a,u),n.child)}function A0(t,n,a,o,u,d){return br(n),n.updateQueue=null,a=Cm(n,o,a,u),Rm(t),o=sf(),t!==null&&!pn?(of(t,n,d),oa(t,n,d)):(yt&&o&&Bu(n),n.flags|=1,Cn(t,n,a,d),n.child)}function T0(t,n,a,o,u){if(br(n),n.stateNode===null){var d=es,S=a.contextType;typeof S=="object"&&S!==null&&(d=Rn(S)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Mf,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},Ku(n),S=a.contextType,d.context=typeof S=="object"&&S!==null?Rn(S):es,d.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(yf(n,a,S,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(S=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),S!==d.state&&Mf.enqueueReplaceState(d,d.state,null),yo(n,o,d,u),So(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){d=n.stateNode;var C=n.memoizedProps,G=Dr(a,C);d.props=G;var te=d.context,he=a.contextType;S=es,typeof he=="object"&&he!==null&&(S=Rn(he));var xe=a.getDerivedStateFromProps;he=typeof xe=="function"||typeof d.getSnapshotBeforeUpdate=="function",C=n.pendingProps!==C,he||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(C||te!==S)&&d0(n,d,o,S),Ga=!1;var se=n.memoizedState;d.state=se,yo(n,o,d,u),So(),te=n.memoizedState,C||se!==te||Ga?(typeof xe=="function"&&(yf(n,a,xe,o),te=n.memoizedState),(G=Ga||f0(n,a,G,o,se,te,S))?(he||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=te),d.props=o,d.state=te,d.context=S,o=G):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,Qu(t,n),S=n.memoizedProps,he=Dr(a,S),d.props=he,xe=n.pendingProps,se=d.context,te=a.contextType,G=es,typeof te=="object"&&te!==null&&(G=Rn(te)),C=a.getDerivedStateFromProps,(te=typeof C=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(S!==xe||se!==G)&&d0(n,d,o,G),Ga=!1,se=n.memoizedState,d.state=se,yo(n,o,d,u),So();var ce=n.memoizedState;S!==xe||se!==ce||Ga||t!==null&&t.dependencies!==null&&Tl(t.dependencies)?(typeof C=="function"&&(yf(n,a,C,o),ce=n.memoizedState),(he=Ga||f0(n,a,he,o,se,ce,G)||t!==null&&t.dependencies!==null&&Tl(t.dependencies))?(te||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,ce,G),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,ce,G)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||S===t.memoizedProps&&se===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&se===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ce),d.props=o,d.state=ce,d.context=G,o=he):(typeof d.componentDidUpdate!="function"||S===t.memoizedProps&&se===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&se===t.memoizedState||(n.flags|=1024),o=!1)}return d=o,Wl(t,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,t!==null&&o?(n.child=Cr(n,t.child,null,u),n.child=Cr(n,null,a,u)):Cn(t,n,a,u),n.memoizedState=d.state,t=n.child):t=oa(t,n,u),t}function R0(t,n,a,o){return Mr(),n.flags|=256,Cn(t,n,a,o),n.child}var Tf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Rf(t){return{baseLanes:t,cachePool:gm()}}function Cf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ni),t}function C0(t,n,a){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,S;if((S=d)||(S=t!==null&&t.memoizedState===null?!1:(ln.current&2)!==0),S&&(u=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,t===null){if(yt){if(u?Xa(n):Wa(),(t=jt)?(t=Ig(t,hi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Fa!==null?{id:Ii,overflow:Fi}:null,retryLane:536870912,hydrationErrors:null},a=om(t),a.return=n,n.child=a,Tn=n,jt=null)):t=null,t===null)throw Ba(n);return ud(t)?n.lanes=32:n.lanes=536870912,null}var C=o.children;return o=o.fallback,u?(Wa(),u=n.mode,C=ql({mode:"hidden",children:C},u),o=yr(o,u,a,null),C.return=n,o.return=n,C.sibling=o,n.child=C,o=n.child,o.memoizedState=Rf(a),o.childLanes=Cf(t,S,a),n.memoizedState=Tf,To(null,o)):(Xa(n),wf(n,C))}var G=t.memoizedState;if(G!==null&&(C=G.dehydrated,C!==null)){if(d)n.flags&256?(Xa(n),n.flags&=-257,n=Df(t,n,a)):n.memoizedState!==null?(Wa(),n.child=t.child,n.flags|=128,n=null):(Wa(),C=o.fallback,u=n.mode,o=ql({mode:"visible",children:o.children},u),C=yr(C,u,a,null),C.flags|=2,o.return=n,C.return=n,o.sibling=C,n.child=o,Cr(n,t.child,null,a),o=n.child,o.memoizedState=Rf(a),o.childLanes=Cf(t,S,a),n.memoizedState=Tf,n=To(null,o));else if(Xa(n),ud(C)){if(S=C.nextSibling&&C.nextSibling.dataset,S)var te=S.dgst;S=te,o=Error(r(419)),o.stack="",o.digest=S,po({value:o,source:null,stack:null}),n=Df(t,n,a)}else if(pn||as(t,n,a,!1),S=(a&t.childLanes)!==0,pn||S){if(S=qt,S!==null&&(o=jn(S,a),o!==0&&o!==G.retryLane))throw G.retryLane=o,Sr(t,o),Wn(S,t,o),bf;cd(C)||tc(),n=Df(t,n,a)}else cd(C)?(n.flags|=192,n.child=t.child,n=null):(t=G.treeContext,jt=mi(C.nextSibling),Tn=n,yt=!0,za=null,hi=!1,t!==null&&um(n,t),n=wf(n,o.children),n.flags|=4096);return n}return u?(Wa(),C=o.fallback,u=n.mode,G=t.child,te=G.sibling,o=ta(G,{mode:"hidden",children:o.children}),o.subtreeFlags=G.subtreeFlags&65011712,te!==null?C=ta(te,C):(C=yr(C,u,a,null),C.flags|=2),C.return=n,o.return=n,o.sibling=C,n.child=o,To(null,o),o=n.child,C=t.child.memoizedState,C===null?C=Rf(a):(u=C.cachePool,u!==null?(G=dn._currentValue,u=u.parent!==G?{parent:G,pool:G}:u):u=gm(),C={baseLanes:C.baseLanes|a,cachePool:u}),o.memoizedState=C,o.childLanes=Cf(t,S,a),n.memoizedState=Tf,To(t.child,o)):(Xa(n),a=t.child,t=a.sibling,a=ta(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(S=n.deletions,S===null?(n.deletions=[t],n.flags|=16):S.push(t)),n.child=a,n.memoizedState=null,a)}function wf(t,n){return n=ql({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function ql(t,n){return t=Jn(22,t,null,n),t.lanes=0,t}function Df(t,n,a){return Cr(n,t.child,null,a),t=wf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function w0(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Xu(t.return,n,a)}function Uf(t,n,a,o,u,d){var S=t.memoizedState;S===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:d}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=o,S.tail=a,S.tailMode=u,S.treeForkCount=d)}function D0(t,n,a){var o=n.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var S=ln.current,C=(S&2)!==0;if(C?(S=S&1|2,n.flags|=128):S&=1,Se(ln,S),Cn(t,n,o,a),o=yt?ho:0,!C&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&w0(t,a,n);else if(t.tag===19)w0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Ol(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Uf(n,!1,u,a,d,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Ol(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Uf(n,!0,a,null,d,o);break;case"together":Uf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function oa(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),ja|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(as(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=ta(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=ta(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Nf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Tl(t)))}function US(t,n,a){switch(n.tag){case 3:Ae(n,n.stateNode.containerInfo),Ha(n,dn,t.memoizedState.cache),Mr();break;case 27:case 5:et(n);break;case 4:Ae(n,n.stateNode.containerInfo);break;case 10:Ha(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,nf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Xa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?C0(t,n,a):(Xa(n),t=oa(t,n,a),t!==null?t.sibling:null);Xa(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(as(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return D0(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Se(ln,ln.current),o)break;return null;case 22:return n.lanes=0,M0(t,n,a,n.pendingProps);case 24:Ha(n,dn,t.memoizedState.cache)}return oa(t,n,a)}function U0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)pn=!0;else{if(!Nf(t,a)&&(n.flags&128)===0)return pn=!1,US(t,n,a);pn=(t.flags&131072)!==0}else pn=!1,yt&&(n.flags&1048576)!==0&&cm(n,ho,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=Tr(n.elementType),n.type=t,typeof t=="function")Iu(t)?(o=Dr(t,o),n.tag=1,n=T0(null,n,t,o,a)):(n.tag=0,n=Af(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===U){n.tag=11,n=x0(null,n,t,o,a);break e}else if(u===O){n.tag=14,n=S0(null,n,t,o,a);break e}}throw n=pe(t)||t,Error(r(306,n,""))}}return n;case 0:return Af(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Dr(o,n.pendingProps),T0(t,n,o,u,a);case 3:e:{if(Ae(n,n.stateNode.containerInfo),t===null)throw Error(r(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,Qu(t,n),yo(n,o,null,a);var S=n.memoizedState;if(o=S.cache,Ha(n,dn,o),o!==d.cache&&Wu(n,[dn],a,!0),So(),o=S.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=R0(t,n,o,a);break e}else if(o!==u){u=ui(Error(r(424)),n),po(u),n=R0(t,n,o,a);break e}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,jt=mi(t.firstChild),Tn=n,yt=!0,za=null,hi=!0,a=Mm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Mr(),o===u){n=oa(t,n,a);break e}Cn(t,n,o,a)}n=n.child}return n;case 26:return Wl(t,n),t===null?(a=Vg(n.type,null,n.pendingProps,null))?n.memoizedState=a:yt||(a=n.type,t=n.pendingProps,o=lc(oe.current).createElement(a),o[on]=n,o[An]=t,wn(o,a,t),fn(o),n.stateNode=o):n.memoizedState=Vg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return et(n),t===null&&yt&&(o=n.stateNode=Bg(n.type,n.pendingProps,oe.current),Tn=n,hi=!0,u=jt,$a(n.type)?(fd=u,jt=mi(o.firstChild)):jt=u),Cn(t,n,n.pendingProps.children,a),Wl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&yt&&((u=o=jt)&&(o=oy(o,n.type,n.pendingProps,hi),o!==null?(n.stateNode=o,Tn=n,jt=mi(o.firstChild),hi=!1,u=!0):u=!1),u||Ba(n)),et(n),u=n.type,d=n.pendingProps,S=t!==null?t.memoizedProps:null,o=d.children,sd(u,d)?o=null:S!==null&&sd(u,S)&&(n.flags|=32),n.memoizedState!==null&&(u=rf(t,n,MS,null,null,a),Go._currentValue=u),Wl(t,n),Cn(t,n,o,a),n.child;case 6:return t===null&&yt&&((t=a=jt)&&(a=ly(a,n.pendingProps,hi),a!==null?(n.stateNode=a,Tn=n,jt=null,t=!0):t=!1),t||Ba(n)),null;case 13:return C0(t,n,a);case 4:return Ae(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Cr(n,null,o,a):Cn(t,n,o,a),n.child;case 11:return x0(t,n,n.type,n.pendingProps,a);case 7:return Cn(t,n,n.pendingProps,a),n.child;case 8:return Cn(t,n,n.pendingProps.children,a),n.child;case 12:return Cn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ha(n,n.type,o.value),Cn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,br(n),u=Rn(u),o=o(u),n.flags|=1,Cn(t,n,o,a),n.child;case 14:return S0(t,n,n.type,n.pendingProps,a);case 15:return y0(t,n,n.type,n.pendingProps,a);case 19:return D0(t,n,a);case 31:return DS(t,n,a);case 22:return M0(t,n,a,n.pendingProps);case 24:return br(n),o=Rn(dn),t===null?(u=ju(),u===null&&(u=qt,d=qu(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:o,cache:u},Ku(n),Ha(n,dn,u)):((t.lanes&a)!==0&&(Qu(t,n),yo(n,null,null,a),So()),u=t.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ha(n,dn,o)):(o=d.cache,Ha(n,dn,o),o!==u.cache&&Wu(n,[dn],a,!0))),Cn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function la(t){t.flags|=4}function Lf(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(ag())t.flags|=8192;else throw Rr=Dl,Zu}else t.flags&=-16777217}function N0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Yg(n))if(ag())t.flags|=8192;else throw Rr=Dl,Zu}function Yl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Me():536870912,t.lanes|=n,gs|=n)}function Ro(t,n){if(!yt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Zt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function NS(t,n,a){var o=n.pendingProps;switch(Hu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Zt(n),null;case 1:return Zt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),aa(dn),Ge(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(is(n)?la(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Vu())),Zt(n),null;case 26:var u=n.type,d=n.memoizedState;return t===null?(la(n),d!==null?(Zt(n),N0(n,d)):(Zt(n),Lf(n,u,null,o,a))):d?d!==t.memoizedState?(la(n),Zt(n),N0(n,d)):(Zt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&la(n),Zt(n),Lf(n,u,t,o,a)),null;case 27:if(Je(n),a=oe.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&la(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Zt(n),null}t=Re.current,is(n)?fm(n):(t=Bg(u,o,a),n.stateNode=t,la(n))}return Zt(n),null;case 5:if(Je(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&la(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Zt(n),null}if(d=Re.current,is(n))fm(n);else{var S=lc(oe.current);switch(d){case 1:d=S.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=S.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=S.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?S.createElement("select",{is:o.is}):S.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?S.createElement(u,{is:o.is}):S.createElement(u)}}d[on]=n,d[An]=o;e:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)d.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break e;for(;S.sibling===null;){if(S.return===null||S.return===n)break e;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=d;e:switch(wn(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&la(n)}}return Zt(n),Lf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&la(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(t=oe.current,is(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=Tn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[on]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Cg(t.nodeValue,a)),t||Ba(n,!0)}else t=lc(t).createTextNode(o),t[on]=n,n.stateNode=t}return Zt(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=is(n),a!==null){if(t===null){if(!o)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[on]=n}else Mr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Zt(n),t=!1}else a=Vu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ei(n),n):(ei(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Zt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=is(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[on]=n}else Mr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Zt(n),u=!1}else u=Vu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ei(n),n):(ei(n),null)}return ei(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Yl(n,n.updateQueue),Zt(n),null);case 4:return Ge(),t===null&&td(n.stateNode.containerInfo),Zt(n),null;case 10:return aa(n.type),Zt(n),null;case 19:if($(ln),o=n.memoizedState,o===null)return Zt(n),null;if(u=(n.flags&128)!==0,d=o.rendering,d===null)if(u)Ro(o,!1);else{if(rn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(d=Ol(t),d!==null){for(n.flags|=128,Ro(o,!1),t=d.updateQueue,n.updateQueue=t,Yl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)sm(a,t),a=a.sibling;return Se(ln,ln.current&1|2),yt&&na(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&Ce()>Jl&&(n.flags|=128,u=!0,Ro(o,!1),n.lanes=4194304)}else{if(!u)if(t=Ol(d),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Yl(n,t),Ro(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!yt)return Zt(n),null}else 2*Ce()-o.renderingStartTime>Jl&&a!==536870912&&(n.flags|=128,u=!0,Ro(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(t=o.last,t!==null?t.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ce(),t.sibling=null,a=ln.current,Se(ln,u?a&1|2:a&1),yt&&na(n,o.treeForkCount),t):(Zt(n),null);case 22:case 23:return ei(n),tf(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Zt(n),n.subtreeFlags&6&&(n.flags|=8192)):Zt(n),a=n.updateQueue,a!==null&&Yl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&$(Ar),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),aa(dn),Zt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function LS(t,n){switch(Hu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return aa(dn),Ge(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Je(n),null;case 31:if(n.memoizedState!==null){if(ei(n),n.alternate===null)throw Error(r(340));Mr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ei(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Mr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return $(ln),null;case 4:return Ge(),null;case 10:return aa(n.type),null;case 22:case 23:return ei(n),tf(),t!==null&&$(Ar),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return aa(dn),null;case 25:return null;default:return null}}function L0(t,n){switch(Hu(n),n.tag){case 3:aa(dn),Ge();break;case 26:case 27:case 5:Je(n);break;case 4:Ge();break;case 31:n.memoizedState!==null&&ei(n);break;case 13:ei(n);break;case 19:$(ln);break;case 10:aa(n.type);break;case 22:case 23:ei(n),tf(),t!==null&&$(Ar);break;case 24:aa(dn)}}function Co(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var d=a.create,S=a.inst;o=d(),S.destroy=o}a=a.next}while(a!==u)}}catch(C){zt(n,n.return,C)}}function qa(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&t)===t){var S=o.inst,C=S.destroy;if(C!==void 0){S.destroy=void 0,u=n;var G=a,te=C;try{te()}catch(he){zt(u,G,he)}}}o=o.next}while(o!==d)}}catch(he){zt(n,n.return,he)}}function O0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{bm(n,a)}catch(o){zt(t,t.return,o)}}}function P0(t,n,a){a.props=Dr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){zt(t,n,o)}}function wo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){zt(t,n,u)}}function zi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){zt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){zt(t,n,u)}else a.current=null}function I0(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){zt(t,t.return,u)}}function Of(t,n,a){try{var o=t.stateNode;ty(o,t.type,a,n),o[An]=n}catch(u){zt(t,t.return,u)}}function F0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&$a(t.type)||t.tag===4}function Pf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||F0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&$a(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function If(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=$i));else if(o!==4&&(o===27&&$a(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(If(t,n,a),t=t.sibling;t!==null;)If(t,n,a),t=t.sibling}function jl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&$a(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(jl(t,n,a),t=t.sibling;t!==null;)jl(t,n,a),t=t.sibling}function z0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);wn(n,o,a),n[on]=t,n[An]=a}catch(d){zt(t,t.return,d)}}var ca=!1,mn=!1,Ff=!1,B0=typeof WeakSet=="function"?WeakSet:Set,Mn=null;function OS(t,n){if(t=t.containerInfo,ad=mc,t=Qp(t),wu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var S=0,C=-1,G=-1,te=0,he=0,xe=t,se=null;t:for(;;){for(var ce;xe!==a||u!==0&&xe.nodeType!==3||(C=S+u),xe!==d||o!==0&&xe.nodeType!==3||(G=S+o),xe.nodeType===3&&(S+=xe.nodeValue.length),(ce=xe.firstChild)!==null;)se=xe,xe=ce;for(;;){if(xe===t)break t;if(se===a&&++te===u&&(C=S),se===d&&++he===o&&(G=S),(ce=xe.nextSibling)!==null)break;xe=se,se=xe.parentNode}xe=ce}a=C===-1||G===-1?null:{start:C,end:G}}else a=null}a=a||{start:0,end:0}}else a=null;for(rd={focusedElem:t,selectionRange:a},mc=!1,Mn=n;Mn!==null;)if(n=Mn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Mn=t;else for(;Mn!==null;){switch(n=Mn,d=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var qe=Dr(a.type,u);t=o.getSnapshotBeforeUpdate(qe,d),o.__reactInternalSnapshotBeforeUpdate=t}catch($e){zt(a,a.return,$e)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)ld(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":ld(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,Mn=t;break}Mn=n.return}}function H0(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:fa(t,a),o&4&&Co(5,a);break;case 1:if(fa(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(S){zt(a,a.return,S)}else{var u=Dr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(S){zt(a,a.return,S)}}o&64&&O0(a),o&512&&wo(a,a.return);break;case 3:if(fa(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{bm(t,n)}catch(S){zt(a,a.return,S)}}break;case 27:n===null&&o&4&&z0(a);case 26:case 5:fa(t,a),n===null&&o&4&&I0(a),o&512&&wo(a,a.return);break;case 12:fa(t,a);break;case 31:fa(t,a),o&4&&k0(t,a);break;case 13:fa(t,a),o&4&&X0(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=kS.bind(null,a),cy(t,a))));break;case 22:if(o=a.memoizedState!==null||ca,!o){n=n!==null&&n.memoizedState!==null||mn,u=ca;var d=mn;ca=o,(mn=n)&&!d?da(t,a,(a.subtreeFlags&8772)!==0):fa(t,a),ca=u,mn=d}break;case 30:break;default:fa(t,a)}}function G0(t){var n=t.alternate;n!==null&&(t.alternate=null,G0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&no(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var $t=null,Gn=!1;function ua(t,n,a){for(a=a.child;a!==null;)V0(t,n,a),a=a.sibling}function V0(t,n,a){if(de&&typeof de.onCommitFiberUnmount=="function")try{de.onCommitFiberUnmount(fe,a)}catch{}switch(a.tag){case 26:mn||zi(a,n),ua(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:mn||zi(a,n);var o=$t,u=Gn;$a(a.type)&&($t=a.stateNode,Gn=!1),ua(t,n,a),zo(a.stateNode),$t=o,Gn=u;break;case 5:mn||zi(a,n);case 6:if(o=$t,u=Gn,$t=null,ua(t,n,a),$t=o,Gn=u,$t!==null)if(Gn)try{($t.nodeType===9?$t.body:$t.nodeName==="HTML"?$t.ownerDocument.body:$t).removeChild(a.stateNode)}catch(d){zt(a,n,d)}else try{$t.removeChild(a.stateNode)}catch(d){zt(a,n,d)}break;case 18:$t!==null&&(Gn?(t=$t,Og(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),bs(t)):Og($t,a.stateNode));break;case 4:o=$t,u=Gn,$t=a.stateNode.containerInfo,Gn=!0,ua(t,n,a),$t=o,Gn=u;break;case 0:case 11:case 14:case 15:qa(2,a,n),mn||qa(4,a,n),ua(t,n,a);break;case 1:mn||(zi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&P0(a,n,o)),ua(t,n,a);break;case 21:ua(t,n,a);break;case 22:mn=(o=mn)||a.memoizedState!==null,ua(t,n,a),mn=o;break;default:ua(t,n,a)}}function k0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{bs(t)}catch(a){zt(n,n.return,a)}}}function X0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{bs(t)}catch(a){zt(n,n.return,a)}}function PS(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new B0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new B0),n;default:throw Error(r(435,t.tag))}}function Zl(t,n){var a=PS(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=XS.bind(null,t,o);o.then(u,u)}})}function Vn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=t,S=n,C=S;e:for(;C!==null;){switch(C.tag){case 27:if($a(C.type)){$t=C.stateNode,Gn=!1;break e}break;case 5:$t=C.stateNode,Gn=!1;break e;case 3:case 4:$t=C.stateNode.containerInfo,Gn=!0;break e}C=C.return}if($t===null)throw Error(r(160));V0(d,S,u),$t=null,Gn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)W0(n,t),n=n.sibling}var Ti=null;function W0(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Vn(n,t),kn(t),o&4&&(qa(3,t,t.return),Co(3,t),qa(5,t,t.return));break;case 1:Vn(n,t),kn(t),o&512&&(mn||a===null||zi(a,a.return)),o&64&&ca&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ti;if(Vn(n,t),kn(t),o&512&&(mn||a===null||zi(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[Ua]||d[on]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),wn(d,o,a),d[on]=t,fn(d),o=d;break e;case"link":var S=Wg("link","href",u).get(o+(a.href||""));if(S){for(var C=0;C<S.length;C++)if(d=S[C],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(C,1);break t}}d=u.createElement(o),wn(d,o,a),u.head.appendChild(d);break;case"meta":if(S=Wg("meta","content",u).get(o+(a.content||""))){for(C=0;C<S.length;C++)if(d=S[C],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(C,1);break t}}d=u.createElement(o),wn(d,o,a),u.head.appendChild(d);break;default:throw Error(r(468,o))}d[on]=t,fn(d),o=d}t.stateNode=o}else qg(u,t.type,t.stateNode);else t.stateNode=Xg(u,o,t.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?qg(u,t.type,t.stateNode):Xg(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Of(t,t.memoizedProps,a.memoizedProps)}break;case 27:Vn(n,t),kn(t),o&512&&(mn||a===null||zi(a,a.return)),a!==null&&o&4&&Of(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Vn(n,t),kn(t),o&512&&(mn||a===null||zi(a,a.return)),t.flags&32){u=t.stateNode;try{Kn(u,"")}catch(qe){zt(t,t.return,qe)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Of(t,u,a!==null?a.memoizedProps:u)),o&1024&&(Ff=!0);break;case 6:if(Vn(n,t),kn(t),o&4){if(t.stateNode===null)throw Error(r(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(qe){zt(t,t.return,qe)}}break;case 3:if(fc=null,u=Ti,Ti=cc(n.containerInfo),Vn(n,t),Ti=u,kn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{bs(n.containerInfo)}catch(qe){zt(t,t.return,qe)}Ff&&(Ff=!1,q0(t));break;case 4:o=Ti,Ti=cc(t.stateNode.containerInfo),Vn(n,t),kn(t),Ti=o;break;case 12:Vn(n,t),kn(t);break;case 31:Vn(n,t),kn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Zl(t,o)));break;case 13:Vn(n,t),kn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ql=Ce()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Zl(t,o)));break;case 22:u=t.memoizedState!==null;var G=a!==null&&a.memoizedState!==null,te=ca,he=mn;if(ca=te||u,mn=he||G,Vn(n,t),mn=he,ca=te,kn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||G||ca||mn||Ur(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){G=a=n;try{if(d=G.stateNode,u)S=d.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{C=G.stateNode;var xe=G.memoizedProps.style,se=xe!=null&&xe.hasOwnProperty("display")?xe.display:null;C.style.display=se==null||typeof se=="boolean"?"":(""+se).trim()}}catch(qe){zt(G,G.return,qe)}}}else if(n.tag===6){if(a===null){G=n;try{G.stateNode.nodeValue=u?"":G.memoizedProps}catch(qe){zt(G,G.return,qe)}}}else if(n.tag===18){if(a===null){G=n;try{var ce=G.stateNode;u?Pg(ce,!0):Pg(G.stateNode,!1)}catch(qe){zt(G,G.return,qe)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Zl(t,a))));break;case 19:Vn(n,t),kn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Zl(t,o)));break;case 30:break;case 21:break;default:Vn(n,t),kn(t)}}function kn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(F0(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,d=Pf(t);jl(t,d,u);break;case 5:var S=a.stateNode;a.flags&32&&(Kn(S,""),a.flags&=-33);var C=Pf(t);jl(t,C,S);break;case 3:case 4:var G=a.stateNode.containerInfo,te=Pf(t);If(t,te,G);break;default:throw Error(r(161))}}catch(he){zt(t,t.return,he)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function q0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;q0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function fa(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)H0(t,n.alternate,n),n=n.sibling}function Ur(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:qa(4,n,n.return),Ur(n);break;case 1:zi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&P0(n,n.return,a),Ur(n);break;case 27:zo(n.stateNode);case 26:case 5:zi(n,n.return),Ur(n);break;case 22:n.memoizedState===null&&Ur(n);break;case 30:Ur(n);break;default:Ur(n)}t=t.sibling}}function da(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,d=n,S=d.flags;switch(d.tag){case 0:case 11:case 15:da(u,d,a),Co(4,d);break;case 1:if(da(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(te){zt(o,o.return,te)}if(o=d,u=o.updateQueue,u!==null){var C=o.stateNode;try{var G=u.shared.hiddenCallbacks;if(G!==null)for(u.shared.hiddenCallbacks=null,u=0;u<G.length;u++)Em(G[u],C)}catch(te){zt(o,o.return,te)}}a&&S&64&&O0(d),wo(d,d.return);break;case 27:z0(d);case 26:case 5:da(u,d,a),a&&o===null&&S&4&&I0(d),wo(d,d.return);break;case 12:da(u,d,a);break;case 31:da(u,d,a),a&&S&4&&k0(u,d);break;case 13:da(u,d,a),a&&S&4&&X0(u,d);break;case 22:d.memoizedState===null&&da(u,d,a),wo(d,d.return);break;case 30:break;default:da(u,d,a)}n=n.sibling}}function zf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&mo(a))}function Bf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&mo(t))}function Ri(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Y0(t,n,a,o),n=n.sibling}function Y0(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ri(t,n,a,o),u&2048&&Co(9,n);break;case 1:Ri(t,n,a,o);break;case 3:Ri(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&mo(t)));break;case 12:if(u&2048){Ri(t,n,a,o),t=n.stateNode;try{var d=n.memoizedProps,S=d.id,C=d.onPostCommit;typeof C=="function"&&C(S,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(G){zt(n,n.return,G)}}else Ri(t,n,a,o);break;case 31:Ri(t,n,a,o);break;case 13:Ri(t,n,a,o);break;case 23:break;case 22:d=n.stateNode,S=n.alternate,n.memoizedState!==null?d._visibility&2?Ri(t,n,a,o):Do(t,n):d._visibility&2?Ri(t,n,a,o):(d._visibility|=2,hs(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&zf(S,n);break;case 24:Ri(t,n,a,o),u&2048&&Bf(n.alternate,n);break;default:Ri(t,n,a,o)}}function hs(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=t,S=n,C=a,G=o,te=S.flags;switch(S.tag){case 0:case 11:case 15:hs(d,S,C,G,u),Co(8,S);break;case 23:break;case 22:var he=S.stateNode;S.memoizedState!==null?he._visibility&2?hs(d,S,C,G,u):Do(d,S):(he._visibility|=2,hs(d,S,C,G,u)),u&&te&2048&&zf(S.alternate,S);break;case 24:hs(d,S,C,G,u),u&&te&2048&&Bf(S.alternate,S);break;default:hs(d,S,C,G,u)}n=n.sibling}}function Do(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:Do(a,o),u&2048&&zf(o.alternate,o);break;case 24:Do(a,o),u&2048&&Bf(o.alternate,o);break;default:Do(a,o)}n=n.sibling}}var Uo=8192;function ps(t,n,a){if(t.subtreeFlags&Uo)for(t=t.child;t!==null;)j0(t,n,a),t=t.sibling}function j0(t,n,a){switch(t.tag){case 26:ps(t,n,a),t.flags&Uo&&t.memoizedState!==null&&yy(a,Ti,t.memoizedState,t.memoizedProps);break;case 5:ps(t,n,a);break;case 3:case 4:var o=Ti;Ti=cc(t.stateNode.containerInfo),ps(t,n,a),Ti=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Uo,Uo=16777216,ps(t,n,a),Uo=o):ps(t,n,a));break;default:ps(t,n,a)}}function Z0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function No(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Mn=o,Q0(o,t)}Z0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)K0(t),t=t.sibling}function K0(t){switch(t.tag){case 0:case 11:case 15:No(t),t.flags&2048&&qa(9,t,t.return);break;case 3:No(t);break;case 12:No(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Kl(t)):No(t);break;default:No(t)}}function Kl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Mn=o,Q0(o,t)}Z0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:qa(8,n,n.return),Kl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Kl(n));break;default:Kl(n)}t=t.sibling}}function Q0(t,n){for(;Mn!==null;){var a=Mn;switch(a.tag){case 0:case 11:case 15:qa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:mo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Mn=o;else e:for(a=t;Mn!==null;){o=Mn;var u=o.sibling,d=o.return;if(G0(o),o===a){Mn=null;break e}if(u!==null){u.return=d,Mn=u;break e}Mn=d}}}var IS={getCacheForType:function(t){var n=Rn(dn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Rn(dn).controller.signal}},FS=typeof WeakMap=="function"?WeakMap:Map,wt=0,qt=null,gt=null,xt=0,Ft=0,ti=null,Ya=!1,ms=!1,Hf=!1,ha=0,rn=0,ja=0,Nr=0,Gf=0,ni=0,gs=0,Lo=null,Xn=null,Vf=!1,Ql=0,J0=0,Jl=1/0,$l=null,Za=null,vn=0,Ka=null,_s=null,pa=0,kf=0,Xf=null,$0=null,Oo=0,Wf=null;function ii(){return(wt&2)!==0&&xt!==0?xt&-xt:I.T!==null?Qf():$s()}function eg(){if(ni===0)if((xt&536870912)===0||yt){var t=pt;pt<<=1,(pt&3932160)===0&&(pt=262144),ni=t}else ni=536870912;return t=$n.current,t!==null&&(t.flags|=32),ni}function Wn(t,n,a){(t===qt&&(Ft===2||Ft===9)||t.cancelPendingCommit!==null)&&(vs(t,0),Qa(t,xt,ni,!1)),tt(t,a),((wt&2)===0||t!==qt)&&(t===qt&&((wt&2)===0&&(Nr|=a),rn===4&&Qa(t,xt,ni,!1)),Bi(t))}function tg(t,n,a){if((wt&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Be(t,n),u=o?HS(t,n):Yf(t,n,!0),d=o;do{if(u===0){ms&&!o&&Qa(t,n,0,!1);break}else{if(a=t.current.alternate,d&&!zS(a)){u=Yf(t,n,!1),d=!1;continue}if(u===2){if(d=n,t.errorRecoveryDisabledLanes&d)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;e:{var C=t;u=Lo;var G=C.current.memoizedState.isDehydrated;if(G&&(vs(C,S).flags|=256),S=Yf(C,S,!1),S!==2){if(Hf&&!G){C.errorRecoveryDisabledLanes|=d,Nr|=d,u=4;break e}d=Xn,Xn=u,d!==null&&(Xn===null?Xn=d:Xn.push.apply(Xn,d))}u=S}if(d=!1,u!==2)continue}}if(u===1){vs(t,0),Qa(t,n,0,!0);break}e:{switch(o=t,d=u,d){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Qa(o,n,ni,!Ya);break e;case 2:Xn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Ql+300-Ce(),10<u)){if(Qa(o,n,ni,!Ya),me(o,0,!0)!==0)break e;pa=n,o.timeoutHandle=Ng(ng.bind(null,o,a,Xn,$l,Vf,n,ni,Nr,gs,Ya,d,"Throttled",-0,0),u);break e}ng(o,a,Xn,$l,Vf,n,ni,Nr,gs,Ya,d,null,-0,0)}}break}while(!0);Bi(t)}function ng(t,n,a,o,u,d,S,C,G,te,he,xe,se,ce){if(t.timeoutHandle=-1,xe=n.subtreeFlags,xe&8192||(xe&16785408)===16785408){xe={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:$i},j0(n,d,xe);var qe=(d&62914560)===d?Ql-Ce():(d&4194048)===d?J0-Ce():0;if(qe=My(xe,qe),qe!==null){pa=d,t.cancelPendingCommit=qe(ug.bind(null,t,n,d,a,o,u,S,C,G,he,xe,null,se,ce)),Qa(t,d,S,!te);return}}ug(t,n,d,a,o,u,S,C,G)}function zS(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!Qn(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Qa(t,n,a,o){n&=~Gf,n&=~Nr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var d=31-Ie(u),S=1<<d;o[d]=-1,u&=~S}a!==0&&Ct(t,a,n)}function ec(){return(wt&6)===0?(Po(0),!1):!0}function qf(){if(gt!==null){if(Ft===0)var t=gt.return;else t=gt,ia=Er=null,lf(t),ls=null,_o=0,t=gt;for(;t!==null;)L0(t.alternate,t),t=t.return;gt=null}}function vs(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,ay(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),pa=0,qf(),qt=t,gt=a=ta(t.current,null),xt=n,Ft=0,ti=null,Ya=!1,ms=Be(t,n),Hf=!1,gs=ni=Gf=Nr=ja=rn=0,Xn=Lo=null,Vf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Ie(o),d=1<<u;n|=t[u],o&=~d}return ha=n,yl(),a}function ig(t,n){lt=null,I.H=Ao,n===os||n===wl?(n=xm(),Ft=3):n===Zu?(n=xm(),Ft=4):Ft=n===bf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ti=n,gt===null&&(rn=1,kl(t,ui(n,t.current)))}function ag(){var t=$n.current;return t===null?!0:(xt&4194048)===xt?pi===null:(xt&62914560)===xt||(xt&536870912)!==0?t===pi:!1}function rg(){var t=I.H;return I.H=Ao,t===null?Ao:t}function sg(){var t=I.A;return I.A=IS,t}function tc(){rn=4,Ya||(xt&4194048)!==xt&&$n.current!==null||(ms=!0),(ja&134217727)===0&&(Nr&134217727)===0||qt===null||Qa(qt,xt,ni,!1)}function Yf(t,n,a){var o=wt;wt|=2;var u=rg(),d=sg();(qt!==t||xt!==n)&&($l=null,vs(t,n)),n=!1;var S=rn;e:do try{if(Ft!==0&&gt!==null){var C=gt,G=ti;switch(Ft){case 8:qf(),S=6;break e;case 3:case 2:case 9:case 6:$n.current===null&&(n=!0);var te=Ft;if(Ft=0,ti=null,xs(t,C,G,te),a&&ms){S=0;break e}break;default:te=Ft,Ft=0,ti=null,xs(t,C,G,te)}}BS(),S=rn;break}catch(he){ig(t,he)}while(!0);return n&&t.shellSuspendCounter++,ia=Er=null,wt=o,I.H=u,I.A=d,gt===null&&(qt=null,xt=0,yl()),S}function BS(){for(;gt!==null;)og(gt)}function HS(t,n){var a=wt;wt|=2;var o=rg(),u=sg();qt!==t||xt!==n?($l=null,Jl=Ce()+500,vs(t,n)):ms=Be(t,n);e:do try{if(Ft!==0&&gt!==null){n=gt;var d=ti;t:switch(Ft){case 1:Ft=0,ti=null,xs(t,n,d,1);break;case 2:case 9:if(_m(d)){Ft=0,ti=null,lg(n);break}n=function(){Ft!==2&&Ft!==9||qt!==t||(Ft=7),Bi(t)},d.then(n,n);break e;case 3:Ft=7;break e;case 4:Ft=5;break e;case 7:_m(d)?(Ft=0,ti=null,lg(n)):(Ft=0,ti=null,xs(t,n,d,7));break;case 5:var S=null;switch(gt.tag){case 26:S=gt.memoizedState;case 5:case 27:var C=gt;if(S?Yg(S):C.stateNode.complete){Ft=0,ti=null;var G=C.sibling;if(G!==null)gt=G;else{var te=C.return;te!==null?(gt=te,nc(te)):gt=null}break t}}Ft=0,ti=null,xs(t,n,d,5);break;case 6:Ft=0,ti=null,xs(t,n,d,6);break;case 8:qf(),rn=6;break e;default:throw Error(r(462))}}GS();break}catch(he){ig(t,he)}while(!0);return ia=Er=null,I.H=o,I.A=u,wt=a,gt!==null?0:(qt=null,xt=0,yl(),rn)}function GS(){for(;gt!==null&&!ht();)og(gt)}function og(t){var n=U0(t.alternate,t,ha);t.memoizedProps=t.pendingProps,n===null?nc(t):gt=n}function lg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=A0(a,n,n.pendingProps,n.type,void 0,xt);break;case 11:n=A0(a,n,n.pendingProps,n.type.render,n.ref,xt);break;case 5:lf(n);default:L0(a,n),n=gt=sm(n,ha),n=U0(a,n,ha)}t.memoizedProps=t.pendingProps,n===null?nc(t):gt=n}function xs(t,n,a,o){ia=Er=null,lf(n),ls=null,_o=0;var u=n.return;try{if(wS(t,u,n,a,xt)){rn=1,kl(t,ui(a,t.current)),gt=null;return}}catch(d){if(u!==null)throw gt=u,d;rn=1,kl(t,ui(a,t.current)),gt=null;return}n.flags&32768?(yt||o===1?t=!0:ms||(xt&536870912)!==0?t=!1:(Ya=t=!0,(o===2||o===9||o===3||o===6)&&(o=$n.current,o!==null&&o.tag===13&&(o.flags|=16384))),cg(n,t)):nc(n)}function nc(t){var n=t;do{if((n.flags&32768)!==0){cg(n,Ya);return}t=n.return;var a=NS(n.alternate,n,ha);if(a!==null){gt=a;return}if(n=n.sibling,n!==null){gt=n;return}gt=n=t}while(n!==null);rn===0&&(rn=5)}function cg(t,n){do{var a=LS(t.alternate,t);if(a!==null){a.flags&=32767,gt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){gt=t;return}gt=t=a}while(t!==null);rn=6,gt=null}function ug(t,n,a,o,u,d,S,C,G){t.cancelPendingCommit=null;do ic();while(vn!==0);if((wt&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(d=n.lanes|n.childLanes,d|=Ou,tn(t,a,d,S,C,G),t===qt&&(gt=qt=null,xt=0),_s=n,Ka=t,pa=a,kf=d,Xf=u,$0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,WS(J,function(){return mg(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=I.T,I.T=null,u=B.p,B.p=2,S=wt,wt|=4;try{OS(t,n,a)}finally{wt=S,B.p=u,I.T=o}}vn=1,fg(),dg(),hg()}}function fg(){if(vn===1){vn=0;var t=Ka,n=_s,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=I.T,I.T=null;var o=B.p;B.p=2;var u=wt;wt|=4;try{W0(n,t);var d=rd,S=Qp(t.containerInfo),C=d.focusedElem,G=d.selectionRange;if(S!==C&&C&&C.ownerDocument&&Kp(C.ownerDocument.documentElement,C)){if(G!==null&&wu(C)){var te=G.start,he=G.end;if(he===void 0&&(he=te),"selectionStart"in C)C.selectionStart=te,C.selectionEnd=Math.min(he,C.value.length);else{var xe=C.ownerDocument||document,se=xe&&xe.defaultView||window;if(se.getSelection){var ce=se.getSelection(),qe=C.textContent.length,$e=Math.min(G.start,qe),kt=G.end===void 0?$e:Math.min(G.end,qe);!ce.extend&&$e>kt&&(S=kt,kt=$e,$e=S);var j=Zp(C,$e),k=Zp(C,kt);if(j&&k&&(ce.rangeCount!==1||ce.anchorNode!==j.node||ce.anchorOffset!==j.offset||ce.focusNode!==k.node||ce.focusOffset!==k.offset)){var ee=xe.createRange();ee.setStart(j.node,j.offset),ce.removeAllRanges(),$e>kt?(ce.addRange(ee),ce.extend(k.node,k.offset)):(ee.setEnd(k.node,k.offset),ce.addRange(ee))}}}}for(xe=[],ce=C;ce=ce.parentNode;)ce.nodeType===1&&xe.push({element:ce,left:ce.scrollLeft,top:ce.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<xe.length;C++){var _e=xe[C];_e.element.scrollLeft=_e.left,_e.element.scrollTop=_e.top}}mc=!!ad,rd=ad=null}finally{wt=u,B.p=o,I.T=a}}t.current=n,vn=2}}function dg(){if(vn===2){vn=0;var t=Ka,n=_s,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=I.T,I.T=null;var o=B.p;B.p=2;var u=wt;wt|=4;try{H0(t,n.alternate,n)}finally{wt=u,B.p=o,I.T=a}}vn=3}}function hg(){if(vn===4||vn===3){vn=0,Ht();var t=Ka,n=_s,a=pa,o=$0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?vn=5:(vn=0,_s=Ka=null,pg(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Za=null),Js(a),n=n.stateNode,de&&typeof de.onCommitFiberRoot=="function")try{de.onCommitFiberRoot(fe,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=I.T,u=B.p,B.p=2,I.T=null;try{for(var d=t.onRecoverableError,S=0;S<o.length;S++){var C=o[S];d(C.value,{componentStack:C.stack})}}finally{I.T=n,B.p=u}}(pa&3)!==0&&ic(),Bi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Wf?Oo++:(Oo=0,Wf=t):Oo=0,Po(0)}}function pg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,mo(n)))}function ic(){return fg(),dg(),hg(),mg()}function mg(){if(vn!==5)return!1;var t=Ka,n=kf;kf=0;var a=Js(pa),o=I.T,u=B.p;try{B.p=32>a?32:a,I.T=null,a=Xf,Xf=null;var d=Ka,S=pa;if(vn=0,_s=Ka=null,pa=0,(wt&6)!==0)throw Error(r(331));var C=wt;if(wt|=4,K0(d.current),Y0(d,d.current,S,a),wt=C,Po(0,!1),de&&typeof de.onPostCommitFiberRoot=="function")try{de.onPostCommitFiberRoot(fe,d)}catch{}return!0}finally{B.p=u,I.T=o,pg(t,n)}}function gg(t,n,a){n=ui(a,n),n=Ef(t.stateNode,n,2),t=ka(t,n,2),t!==null&&(tt(t,2),Bi(t))}function zt(t,n,a){if(t.tag===3)gg(t,t,a);else for(;n!==null;){if(n.tag===3){gg(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Za===null||!Za.has(o))){t=ui(a,t),a=_0(2),o=ka(n,a,2),o!==null&&(v0(a,o,n,t),tt(o,2),Bi(o));break}}n=n.return}}function jf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new FS;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Hf=!0,u.add(a),t=VS.bind(null,t,n,a),n.then(t,t))}function VS(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,qt===t&&(xt&a)===a&&(rn===4||rn===3&&(xt&62914560)===xt&&300>Ce()-Ql?(wt&2)===0&&vs(t,0):Gf|=a,gs===xt&&(gs=0)),Bi(t)}function _g(t,n){n===0&&(n=Me()),t=Sr(t,n),t!==null&&(tt(t,n),Bi(t))}function kS(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),_g(t,a)}function XS(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),_g(t,a)}function WS(t,n){return q(t,n)}var ac=null,Ss=null,Zf=!1,rc=!1,Kf=!1,Ja=0;function Bi(t){t!==Ss&&t.next===null&&(Ss===null?ac=Ss=t:Ss=Ss.next=t),rc=!0,Zf||(Zf=!0,YS())}function Po(t,n){if(!Kf&&rc){Kf=!0;do for(var a=!1,o=ac;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var S=o.suspendedLanes,C=o.pingedLanes;d=(1<<31-Ie(42|t)+1)-1,d&=u&~(S&~C),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,yg(o,d))}else d=xt,d=me(o,o===qt?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Be(o,d)||(a=!0,yg(o,d));o=o.next}while(a);Kf=!1}}function qS(){vg()}function vg(){rc=Zf=!1;var t=0;Ja!==0&&iy()&&(t=Ja);for(var n=Ce(),a=null,o=ac;o!==null;){var u=o.next,d=xg(o,n);d===0?(o.next=null,a===null?ac=u:a.next=u,u===null&&(Ss=a)):(a=o,(t!==0||(d&3)!==0)&&(rc=!0)),o=u}vn!==0&&vn!==5||Po(t),Ja!==0&&(Ja=0)}function xg(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var S=31-Ie(d),C=1<<S,G=u[S];G===-1?((C&a)===0||(C&o)!==0)&&(u[S]=Le(C,n)):G<=n&&(t.expiredLanes|=C),d&=~C}if(n=qt,a=xt,a=me(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Ft===2||Ft===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&en(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Be(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&en(o),Js(a)){case 2:case 8:a=E;break;case 32:a=J;break;case 268435456:a=be;break;default:a=J}return o=Sg.bind(null,t),a=q(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&en(o),t.callbackPriority=2,t.callbackNode=null,2}function Sg(t,n){if(vn!==0&&vn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(ic()&&t.callbackNode!==a)return null;var o=xt;return o=me(t,t===qt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(tg(t,o,n),xg(t,Ce()),t.callbackNode!=null&&t.callbackNode===a?Sg.bind(null,t):null)}function yg(t,n){if(ic())return null;tg(t,n,!0)}function YS(){ry(function(){(wt&6)!==0?q(N,qS):vg()})}function Qf(){if(Ja===0){var t=rs;t===0&&(t=at,at<<=1,(at&261888)===0&&(at=256)),Ja=t}return Ja}function Mg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:gr(""+t)}function Eg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function jS(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var d=Mg((u[An]||null).action),S=o.submitter;S&&(n=(n=S[An]||null)?Mg(n.formAction):S.getAttribute("formAction"),n!==null&&(d=n,S=null));var C=new _l("action","action",null,o,u);t.push({event:C,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ja!==0){var G=S?Eg(u,S):new FormData(u);_f(a,{pending:!0,data:G,method:u.method,action:d},null,G)}}else typeof d=="function"&&(C.preventDefault(),G=S?Eg(u,S):new FormData(u),_f(a,{pending:!0,data:G,method:u.method,action:d},d,G))},currentTarget:u}]})}}for(var Jf=0;Jf<Lu.length;Jf++){var $f=Lu[Jf],ZS=$f.toLowerCase(),KS=$f[0].toUpperCase()+$f.slice(1);Ai(ZS,"on"+KS)}Ai(em,"onAnimationEnd"),Ai(tm,"onAnimationIteration"),Ai(nm,"onAnimationStart"),Ai("dblclick","onDoubleClick"),Ai("focusin","onFocus"),Ai("focusout","onBlur"),Ai(dS,"onTransitionRun"),Ai(hS,"onTransitionStart"),Ai(pS,"onTransitionCancel"),Ai(im,"onTransitionEnd"),re("onMouseEnter",["mouseout","mouseover"]),re("onMouseLeave",["mouseout","mouseover"]),re("onPointerEnter",["pointerout","pointerover"]),re("onPointerLeave",["pointerout","pointerover"]),Y("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Y("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Y("onBeforeInput",["compositionend","keypress","textInput","paste"]),Y("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Y("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Y("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Io="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),QS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Io));function bg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var d=void 0;if(n)for(var S=o.length-1;0<=S;S--){var C=o[S],G=C.instance,te=C.currentTarget;if(C=C.listener,G!==d&&u.isPropagationStopped())break e;d=C,u.currentTarget=te;try{d(u)}catch(he){Sl(he)}u.currentTarget=null,d=G}else for(S=0;S<o.length;S++){if(C=o[S],G=C.instance,te=C.currentTarget,C=C.listener,G!==d&&u.isPropagationStopped())break e;d=C,u.currentTarget=te;try{d(u)}catch(he){Sl(he)}u.currentTarget=null,d=G}}}}function _t(t,n){var a=n[Da];a===void 0&&(a=n[Da]=new Set);var o=t+"__bubble";a.has(o)||(Ag(n,t,2,!1),a.add(o))}function ed(t,n,a){var o=0;n&&(o|=4),Ag(a,t,o,n)}var sc="_reactListening"+Math.random().toString(36).slice(2);function td(t){if(!t[sc]){t[sc]=!0,hl.forEach(function(a){a!=="selectionchange"&&(QS.has(a)||ed(a,!1,t),ed(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[sc]||(n[sc]=!0,ed("selectionchange",!1,n))}}function Ag(t,n,a,o){switch(e_(n)){case 2:var u=Ay;break;case 8:u=Ty;break;default:u=gd}a=u.bind(null,n,a,t),u=void 0,!Su||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function nd(t,n,a,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var C=o.stateNode.containerInfo;if(C===u)break;if(S===4)for(S=o.return;S!==null;){var G=S.tag;if((G===3||G===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;C!==null;){if(S=Na(C),S===null)return;if(G=S.tag,G===5||G===6||G===26||G===27){o=d=S;continue e}C=C.parentNode}}o=o.return}Dp(function(){var te=d,he=vu(a),xe=[];e:{var se=am.get(t);if(se!==void 0){var ce=_l,qe=t;switch(t){case"keypress":if(ml(a)===0)break e;case"keydown":case"keyup":ce=Xx;break;case"focusin":qe="focus",ce=bu;break;case"focusout":qe="blur",ce=bu;break;case"beforeblur":case"afterblur":ce=bu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ce=Lp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ce=Nx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ce=Yx;break;case em:case tm:case nm:ce=Px;break;case im:ce=Zx;break;case"scroll":case"scrollend":ce=Dx;break;case"wheel":ce=Qx;break;case"copy":case"cut":case"paste":ce=Fx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ce=Pp;break;case"toggle":case"beforetoggle":ce=$x}var $e=(n&4)!==0,kt=!$e&&(t==="scroll"||t==="scrollend"),j=$e?se!==null?se+"Capture":null:se;$e=[];for(var k=te,ee;k!==null;){var _e=k;if(ee=_e.stateNode,_e=_e.tag,_e!==5&&_e!==26&&_e!==27||ee===null||j===null||(_e=io(k,j),_e!=null&&$e.push(Fo(k,_e,ee))),kt)break;k=k.return}0<$e.length&&(se=new ce(se,qe,null,a,he),xe.push({event:se,listeners:$e}))}}if((n&7)===0){e:{if(se=t==="mouseover"||t==="pointerover",ce=t==="mouseout"||t==="pointerout",se&&a!==_u&&(qe=a.relatedTarget||a.fromElement)&&(Na(qe)||qe[Ji]))break e;if((ce||se)&&(se=he.window===he?he:(se=he.ownerDocument)?se.defaultView||se.parentWindow:window,ce?(qe=a.relatedTarget||a.toElement,ce=te,qe=qe?Na(qe):null,qe!==null&&(kt=c(qe),$e=qe.tag,qe!==kt||$e!==5&&$e!==27&&$e!==6)&&(qe=null)):(ce=null,qe=te),ce!==qe)){if($e=Lp,_e="onMouseLeave",j="onMouseEnter",k="mouse",(t==="pointerout"||t==="pointerover")&&($e=Pp,_e="onPointerLeave",j="onPointerEnter",k="pointer"),kt=ce==null?se:mr(ce),ee=qe==null?se:mr(qe),se=new $e(_e,k+"leave",ce,a,he),se.target=kt,se.relatedTarget=ee,_e=null,Na(he)===te&&($e=new $e(j,k+"enter",qe,a,he),$e.target=ee,$e.relatedTarget=kt,_e=$e),kt=_e,ce&&qe)t:{for($e=JS,j=ce,k=qe,ee=0,_e=j;_e;_e=$e(_e))ee++;_e=0;for(var Qe=k;Qe;Qe=$e(Qe))_e++;for(;0<ee-_e;)j=$e(j),ee--;for(;0<_e-ee;)k=$e(k),_e--;for(;ee--;){if(j===k||k!==null&&j===k.alternate){$e=j;break t}j=$e(j),k=$e(k)}$e=null}else $e=null;ce!==null&&Tg(xe,se,ce,$e,!1),qe!==null&&kt!==null&&Tg(xe,kt,qe,$e,!0)}}e:{if(se=te?mr(te):window,ce=se.nodeName&&se.nodeName.toLowerCase(),ce==="select"||ce==="input"&&se.type==="file")var Tt=kp;else if(Gp(se))if(Xp)Tt=cS;else{Tt=oS;var je=sS}else ce=se.nodeName,!ce||ce.toLowerCase()!=="input"||se.type!=="checkbox"&&se.type!=="radio"?te&&Nt(te.elementType)&&(Tt=kp):Tt=lS;if(Tt&&(Tt=Tt(t,te))){Vp(xe,Tt,a,he);break e}je&&je(t,se,te),t==="focusout"&&te&&se.type==="number"&&te.memoizedProps.value!=null&&mt(se,"number",se.value)}switch(je=te?mr(te):window,t){case"focusin":(Gp(je)||je.contentEditable==="true")&&(Qr=je,Du=te,fo=null);break;case"focusout":fo=Du=Qr=null;break;case"mousedown":Uu=!0;break;case"contextmenu":case"mouseup":case"dragend":Uu=!1,Jp(xe,a,he);break;case"selectionchange":if(fS)break;case"keydown":case"keyup":Jp(xe,a,he)}var ut;if(Tu)e:{switch(t){case"compositionstart":var St="onCompositionStart";break e;case"compositionend":St="onCompositionEnd";break e;case"compositionupdate":St="onCompositionUpdate";break e}St=void 0}else Kr?Bp(t,a)&&(St="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(St="onCompositionStart");St&&(Ip&&a.locale!=="ko"&&(Kr||St!=="onCompositionStart"?St==="onCompositionEnd"&&Kr&&(ut=Up()):(Ia=he,yu="value"in Ia?Ia.value:Ia.textContent,Kr=!0)),je=oc(te,St),0<je.length&&(St=new Op(St,t,null,a,he),xe.push({event:St,listeners:je}),ut?St.data=ut:(ut=Hp(a),ut!==null&&(St.data=ut)))),(ut=tS?nS(t,a):iS(t,a))&&(St=oc(te,"onBeforeInput"),0<St.length&&(je=new Op("onBeforeInput","beforeinput",null,a,he),xe.push({event:je,listeners:St}),je.data=ut)),jS(xe,t,te,a,he)}bg(xe,n)})}function Fo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function oc(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=io(t,a),u!=null&&o.unshift(Fo(t,u,d)),u=io(t,n),u!=null&&o.push(Fo(t,u,d))),t.tag===3)return o;t=t.return}return[]}function JS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Tg(t,n,a,o,u){for(var d=n._reactName,S=[];a!==null&&a!==o;){var C=a,G=C.alternate,te=C.stateNode;if(C=C.tag,G!==null&&G===o)break;C!==5&&C!==26&&C!==27||te===null||(G=te,u?(te=io(a,d),te!=null&&S.unshift(Fo(a,te,G))):u||(te=io(a,d),te!=null&&S.push(Fo(a,te,G)))),a=a.return}S.length!==0&&t.push({event:n,listeners:S})}var $S=/\r\n?/g,ey=/\u0000|\uFFFD/g;function Rg(t){return(typeof t=="string"?t:""+t).replace($S,`
`).replace(ey,"")}function Cg(t,n){return n=Rg(n),Rg(t)===n}function Vt(t,n,a,o,u,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Kn(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Kn(t,""+o);break;case"className":We(t,"class",o);break;case"tabIndex":We(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":We(t,a,o);break;case"style":bi(t,o,d);break;case"data":if(n!=="object"){We(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=gr(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&Vt(t,n,"name",u.name,u,null),Vt(t,n,"formEncType",u.formEncType,u,null),Vt(t,n,"formMethod",u.formMethod,u,null),Vt(t,n,"formTarget",u.formTarget,u,null)):(Vt(t,n,"encType",u.encType,u,null),Vt(t,n,"method",u.method,u,null),Vt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=gr(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=$i);break;case"onScroll":o!=null&&_t("scroll",t);break;case"onScrollEnd":o!=null&&_t("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=gr(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":_t("beforetoggle",t),_t("toggle",t),Fe(t,"popover",o);break;case"xlinkActuate":Xe(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Xe(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Xe(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Xe(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Xe(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Xe(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Xe(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Xe(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Xe(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Fe(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Pi.get(a)||a,Fe(t,a,o))}}function id(t,n,a,o,u,d){switch(a){case"style":bi(t,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof o=="string"?Kn(t,o):(typeof o=="number"||typeof o=="bigint")&&Kn(t,""+o);break;case"onScroll":o!=null&&_t("scroll",t);break;case"onScrollEnd":o!=null&&_t("scrollend",t);break;case"onClick":o!=null&&(t.onclick=$i);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!R.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=t[An]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):Fe(t,a,o)}}}function wn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_t("error",t),_t("load",t);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var S=a[d];if(S!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Vt(t,n,d,S,a,null)}}u&&Vt(t,n,"srcSet",a.srcSet,a,null),o&&Vt(t,n,"src",a.src,a,null);return;case"input":_t("invalid",t);var C=d=S=u=null,G=null,te=null;for(o in a)if(a.hasOwnProperty(o)){var he=a[o];if(he!=null)switch(o){case"name":u=he;break;case"type":S=he;break;case"checked":G=he;break;case"defaultChecked":te=he;break;case"value":d=he;break;case"defaultValue":C=he;break;case"children":case"dangerouslySetInnerHTML":if(he!=null)throw Error(r(137,n));break;default:Vt(t,n,o,he,a,null)}}Nn(t,d,C,G,te,S,u,!1);return;case"select":_t("invalid",t),o=S=d=null;for(u in a)if(a.hasOwnProperty(u)&&(C=a[u],C!=null))switch(u){case"value":d=C;break;case"defaultValue":S=C;break;case"multiple":o=C;default:Vt(t,n,u,C,a,null)}n=d,a=S,t.multiple=!!o,n!=null?_n(t,!!o,n,!1):a!=null&&_n(t,!!o,a,!0);return;case"textarea":_t("invalid",t),d=u=o=null;for(S in a)if(a.hasOwnProperty(S)&&(C=a[S],C!=null))switch(S){case"value":o=C;break;case"defaultValue":u=C;break;case"children":d=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(r(91));break;default:Vt(t,n,S,C,a,null)}Ei(t,o,u,d);return;case"option":for(G in a)a.hasOwnProperty(G)&&(o=a[G],o!=null)&&(G==="selected"?t.selected=o&&typeof o!="function"&&typeof o!="symbol":Vt(t,n,G,o,a,null));return;case"dialog":_t("beforetoggle",t),_t("toggle",t),_t("cancel",t),_t("close",t);break;case"iframe":case"object":_t("load",t);break;case"video":case"audio":for(o=0;o<Io.length;o++)_t(Io[o],t);break;case"image":_t("error",t),_t("load",t);break;case"details":_t("toggle",t);break;case"embed":case"source":case"link":_t("error",t),_t("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(te in a)if(a.hasOwnProperty(te)&&(o=a[te],o!=null))switch(te){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Vt(t,n,te,o,a,null)}return;default:if(Nt(n)){for(he in a)a.hasOwnProperty(he)&&(o=a[he],o!==void 0&&id(t,n,he,o,a,void 0));return}}for(C in a)a.hasOwnProperty(C)&&(o=a[C],o!=null&&Vt(t,n,C,o,a,null))}function ty(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,S=null,C=null,G=null,te=null,he=null;for(ce in a){var xe=a[ce];if(a.hasOwnProperty(ce)&&xe!=null)switch(ce){case"checked":break;case"value":break;case"defaultValue":G=xe;default:o.hasOwnProperty(ce)||Vt(t,n,ce,null,o,xe)}}for(var se in o){var ce=o[se];if(xe=a[se],o.hasOwnProperty(se)&&(ce!=null||xe!=null))switch(se){case"type":d=ce;break;case"name":u=ce;break;case"checked":te=ce;break;case"defaultChecked":he=ce;break;case"value":S=ce;break;case"defaultValue":C=ce;break;case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(r(137,n));break;default:ce!==xe&&Vt(t,n,se,ce,o,xe)}}Ve(t,S,C,G,te,he,d,u);return;case"select":ce=S=C=se=null;for(d in a)if(G=a[d],a.hasOwnProperty(d)&&G!=null)switch(d){case"value":break;case"multiple":ce=G;default:o.hasOwnProperty(d)||Vt(t,n,d,null,o,G)}for(u in o)if(d=o[u],G=a[u],o.hasOwnProperty(u)&&(d!=null||G!=null))switch(u){case"value":se=d;break;case"defaultValue":C=d;break;case"multiple":S=d;default:d!==G&&Vt(t,n,u,d,o,G)}n=C,a=S,o=ce,se!=null?_n(t,!!a,se,!1):!!o!=!!a&&(n!=null?_n(t,!!a,n,!0):_n(t,!!a,a?[]:"",!1));return;case"textarea":ce=se=null;for(C in a)if(u=a[C],a.hasOwnProperty(C)&&u!=null&&!o.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:Vt(t,n,C,null,o,u)}for(S in o)if(u=o[S],d=a[S],o.hasOwnProperty(S)&&(u!=null||d!=null))switch(S){case"value":se=u;break;case"defaultValue":ce=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==d&&Vt(t,n,S,u,o,d)}Zn(t,se,ce);return;case"option":for(var qe in a)se=a[qe],a.hasOwnProperty(qe)&&se!=null&&!o.hasOwnProperty(qe)&&(qe==="selected"?t.selected=!1:Vt(t,n,qe,null,o,se));for(G in o)se=o[G],ce=a[G],o.hasOwnProperty(G)&&se!==ce&&(se!=null||ce!=null)&&(G==="selected"?t.selected=se&&typeof se!="function"&&typeof se!="symbol":Vt(t,n,G,se,o,ce));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $e in a)se=a[$e],a.hasOwnProperty($e)&&se!=null&&!o.hasOwnProperty($e)&&Vt(t,n,$e,null,o,se);for(te in o)if(se=o[te],ce=a[te],o.hasOwnProperty(te)&&se!==ce&&(se!=null||ce!=null))switch(te){case"children":case"dangerouslySetInnerHTML":if(se!=null)throw Error(r(137,n));break;default:Vt(t,n,te,se,o,ce)}return;default:if(Nt(n)){for(var kt in a)se=a[kt],a.hasOwnProperty(kt)&&se!==void 0&&!o.hasOwnProperty(kt)&&id(t,n,kt,void 0,o,se);for(he in o)se=o[he],ce=a[he],!o.hasOwnProperty(he)||se===ce||se===void 0&&ce===void 0||id(t,n,he,se,o,ce);return}}for(var j in a)se=a[j],a.hasOwnProperty(j)&&se!=null&&!o.hasOwnProperty(j)&&Vt(t,n,j,null,o,se);for(xe in o)se=o[xe],ce=a[xe],!o.hasOwnProperty(xe)||se===ce||se==null&&ce==null||Vt(t,n,xe,se,o,ce)}function wg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ny(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],d=u.transferSize,S=u.initiatorType,C=u.duration;if(d&&C&&wg(S)){for(S=0,C=u.responseEnd,o+=1;o<a.length;o++){var G=a[o],te=G.startTime;if(te>C)break;var he=G.transferSize,xe=G.initiatorType;he&&wg(xe)&&(G=G.responseEnd,S+=he*(G<C?1:(C-te)/(G-te)))}if(--o,n+=8*(d+S)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var ad=null,rd=null;function lc(t){return t.nodeType===9?t:t.ownerDocument}function Dg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ug(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function sd(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var od=null;function iy(){var t=window.event;return t&&t.type==="popstate"?t===od?!1:(od=t,!0):(od=null,!1)}var Ng=typeof setTimeout=="function"?setTimeout:void 0,ay=typeof clearTimeout=="function"?clearTimeout:void 0,Lg=typeof Promise=="function"?Promise:void 0,ry=typeof queueMicrotask=="function"?queueMicrotask:typeof Lg<"u"?function(t){return Lg.resolve(null).then(t).catch(sy)}:Ng;function sy(t){setTimeout(function(){throw t})}function $a(t){return t==="head"}function Og(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),bs(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")zo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,zo(a);for(var d=a.firstChild;d;){var S=d.nextSibling,C=d.nodeName;d[Ua]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=S}}else a==="body"&&zo(t.ownerDocument.body);a=u}while(a);bs(n)}function Pg(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function ld(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ld(a),no(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function oy(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Ua])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=mi(t.nextSibling),t===null)break}return null}function ly(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=mi(t.nextSibling),t===null))return null;return t}function Ig(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=mi(t.nextSibling),t===null))return null;return t}function cd(t){return t.data==="$?"||t.data==="$~"}function ud(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function cy(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function mi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var fd=null;function Fg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return mi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function zg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Bg(t,n,a){switch(n=lc(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function zo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);no(t)}var gi=new Map,Hg=new Set;function cc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ma=B.d;B.d={f:uy,r:fy,D:dy,C:hy,L:py,m:my,X:_y,S:gy,M:vy};function uy(){var t=ma.f(),n=ec();return t||n}function fy(t){var n=La(t);n!==null&&n.tag===5&&n.type==="form"?i0(n):ma.r(t)}var ys=typeof document>"u"?null:document;function Gg(t,n,a){var o=ys;if(o&&typeof n=="string"&&n){var u=Pt(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Hg.has(u)||(Hg.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),wn(n,"link",t),fn(n),o.head.appendChild(n)))}}function dy(t){ma.D(t),Gg("dns-prefetch",t,null)}function hy(t,n){ma.C(t,n),Gg("preconnect",t,n)}function py(t,n,a){ma.L(t,n,a);var o=ys;if(o&&t&&n){var u='link[rel="preload"][as="'+Pt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Pt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Pt(a.imageSizes)+'"]')):u+='[href="'+Pt(t)+'"]';var d=u;switch(n){case"style":d=Ms(t);break;case"script":d=Es(t)}gi.has(d)||(t=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),gi.set(d,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Bo(d))||n==="script"&&o.querySelector(Ho(d))||(n=o.createElement("link"),wn(n,"link",t),fn(n),o.head.appendChild(n)))}}function my(t,n){ma.m(t,n);var a=ys;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Pt(o)+'"][href="'+Pt(t)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Es(t)}if(!gi.has(d)&&(t=_({rel:"modulepreload",href:t},n),gi.set(d,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ho(d)))return}o=a.createElement("link"),wn(o,"link",t),fn(o),a.head.appendChild(o)}}}function gy(t,n,a){ma.S(t,n,a);var o=ys;if(o&&t){var u=Oa(o).hoistableStyles,d=Ms(t);n=n||"default";var S=u.get(d);if(!S){var C={loading:0,preload:null};if(S=o.querySelector(Bo(d)))C.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":n},a),(a=gi.get(d))&&dd(t,a);var G=S=o.createElement("link");fn(G),wn(G,"link",t),G._p=new Promise(function(te,he){G.onload=te,G.onerror=he}),G.addEventListener("load",function(){C.loading|=1}),G.addEventListener("error",function(){C.loading|=2}),C.loading|=4,uc(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:C},u.set(d,S)}}}function _y(t,n){ma.X(t,n);var a=ys;if(a&&t){var o=Oa(a).hoistableScripts,u=Es(t),d=o.get(u);d||(d=a.querySelector(Ho(u)),d||(t=_({src:t,async:!0},n),(n=gi.get(u))&&hd(t,n),d=a.createElement("script"),fn(d),wn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function vy(t,n){ma.M(t,n);var a=ys;if(a&&t){var o=Oa(a).hoistableScripts,u=Es(t),d=o.get(u);d||(d=a.querySelector(Ho(u)),d||(t=_({src:t,async:!0,type:"module"},n),(n=gi.get(u))&&hd(t,n),d=a.createElement("script"),fn(d),wn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function Vg(t,n,a,o){var u=(u=oe.current)?cc(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Ms(a.href),a=Oa(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Ms(a.href);var d=Oa(u).hoistableStyles,S=d.get(t);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,S),(d=u.querySelector(Bo(t)))&&!d._p&&(S.instance=d,S.state.loading=5),gi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},gi.set(t,a),d||xy(u,t,a,S.state))),n&&o===null)throw Error(r(528,""));return S}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Es(a),a=Oa(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Ms(t){return'href="'+Pt(t)+'"'}function Bo(t){return'link[rel="stylesheet"]['+t+"]"}function kg(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function xy(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),wn(n,"link",a),fn(n),t.head.appendChild(n))}function Es(t){return'[src="'+Pt(t)+'"]'}function Ho(t){return"script[async]"+t}function Xg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+Pt(a.href)+'"]');if(o)return n.instance=o,fn(o),o;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),fn(o),wn(o,"style",u),uc(o,a.precedence,t),n.instance=o;case"stylesheet":u=Ms(a.href);var d=t.querySelector(Bo(u));if(d)return n.state.loading|=4,n.instance=d,fn(d),d;o=kg(a),(u=gi.get(u))&&dd(o,u),d=(t.ownerDocument||t).createElement("link"),fn(d);var S=d;return S._p=new Promise(function(C,G){S.onload=C,S.onerror=G}),wn(d,"link",o),n.state.loading|=4,uc(d,a.precedence,t),n.instance=d;case"script":return d=Es(a.src),(u=t.querySelector(Ho(d)))?(n.instance=u,fn(u),u):(o=a,(u=gi.get(d))&&(o=_({},a),hd(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),fn(u),wn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,uc(o,a.precedence,t));return n.instance}function uc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,S=0;S<o.length;S++){var C=o[S];if(C.dataset.precedence===n)d=C;else if(d!==u)break}d?d.parentNode.insertBefore(t,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function dd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function hd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var fc=null;function Wg(t,n,a){if(fc===null){var o=new Map,u=fc=new Map;u.set(a,o)}else u=fc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var d=a[u];if(!(d[Ua]||d[on]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var S=d.getAttribute(n)||"";S=t+S;var C=o.get(S);C?C.push(d):o.set(S,[d])}}return o}function qg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Sy(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Yg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function yy(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Ms(o.href),d=n.querySelector(Bo(u));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=dc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=d,fn(d);return}d=n.ownerDocument||n,o=kg(o),(u=gi.get(u))&&dd(o,u),d=d.createElement("link"),fn(d);var S=d;S._p=new Promise(function(C,G){S.onload=C,S.onerror=G}),wn(d,"link",o),a.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=dc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var pd=0;function My(t,n){return t.stylesheets&&t.count===0&&pc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&pc(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+n);0<t.imgBytes&&pd===0&&(pd=62500*ny());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&pc(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>pd?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function dc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)pc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var hc=null;function pc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,hc=new Map,n.forEach(Ey,t),hc=null,dc.call(t))}function Ey(t,n){if(!(n.state.loading&4)){var a=hc.get(t);if(a)var o=a.get(null);else{a=new Map,hc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var S=u[d];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),o=S)}o&&a.set(null,o)}u=n.instance,S=u.getAttribute("data-precedence"),d=a.get(S)||o,d===o&&a.set(null,u),a.set(S,u),this.count++,o=dc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Go={$$typeof:D,Provider:null,Consumer:null,_currentValue:le,_currentValue2:le,_threadCount:0};function by(t,n,a,o,u,d,S,C,G){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ye(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ye(0),this.hiddenUpdates=Ye(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function jg(t,n,a,o,u,d,S,C,G,te,he,xe){return t=new by(t,n,a,S,G,te,he,xe,C),n=1,d===!0&&(n|=24),d=Jn(3,null,null,n),t.current=d,d.stateNode=t,n=qu(),n.refCount++,t.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},Ku(d),t}function Zg(t){return t?(t=es,t):es}function Kg(t,n,a,o,u,d){u=Zg(u),o.context===null?o.context=u:o.pendingContext=u,o=Va(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=ka(t,o,n),a!==null&&(Wn(a,t,n),xo(a,t,n))}function Qg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function md(t,n){Qg(t,n),(t=t.alternate)&&Qg(t,n)}function Jg(t){if(t.tag===13||t.tag===31){var n=Sr(t,67108864);n!==null&&Wn(n,t,67108864),md(t,67108864)}}function $g(t){if(t.tag===13||t.tag===31){var n=ii();n=pr(n);var a=Sr(t,n);a!==null&&Wn(a,t,n),md(t,n)}}var mc=!0;function Ay(t,n,a,o){var u=I.T;I.T=null;var d=B.p;try{B.p=2,gd(t,n,a,o)}finally{B.p=d,I.T=u}}function Ty(t,n,a,o){var u=I.T;I.T=null;var d=B.p;try{B.p=8,gd(t,n,a,o)}finally{B.p=d,I.T=u}}function gd(t,n,a,o){if(mc){var u=_d(o);if(u===null)nd(t,n,o,gc,a),t_(t,o);else if(Cy(u,t,n,a,o))o.stopPropagation();else if(t_(t,o),n&4&&-1<Ry.indexOf(t)){for(;u!==null;){var d=La(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var S=Te(d.pendingLanes);if(S!==0){var C=d;for(C.pendingLanes|=2,C.entangledLanes|=2;S;){var G=1<<31-Ie(S);C.entanglements[1]|=G,S&=~G}Bi(d),(wt&6)===0&&(Jl=Ce()+500,Po(0))}}break;case 31:case 13:C=Sr(d,2),C!==null&&Wn(C,d,2),ec(),md(d,2)}if(d=_d(o),d===null&&nd(t,n,o,gc,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else nd(t,n,o,null,a)}}function _d(t){return t=vu(t),vd(t)}var gc=null;function vd(t){if(gc=null,t=Na(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=f(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return gc=t,null}function e_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Kt()){case N:return 2;case E:return 8;case J:case ve:return 32;case be:return 268435456;default:return 32}default:return 32}}var xd=!1,er=null,tr=null,nr=null,Vo=new Map,ko=new Map,ir=[],Ry="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function t_(t,n){switch(t){case"focusin":case"focusout":er=null;break;case"dragenter":case"dragleave":tr=null;break;case"mouseover":case"mouseout":nr=null;break;case"pointerover":case"pointerout":Vo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ko.delete(n.pointerId)}}function Xo(t,n,a,o,u,d){return t===null||t.nativeEvent!==d?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=La(n),n!==null&&Jg(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function Cy(t,n,a,o,u){switch(n){case"focusin":return er=Xo(er,t,n,a,o,u),!0;case"dragenter":return tr=Xo(tr,t,n,a,o,u),!0;case"mouseover":return nr=Xo(nr,t,n,a,o,u),!0;case"pointerover":var d=u.pointerId;return Vo.set(d,Xo(Vo.get(d)||null,t,n,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,ko.set(d,Xo(ko.get(d)||null,t,n,a,o,u)),!0}return!1}function n_(t){var n=Na(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){t.blockedOn=n,eo(t.priority,function(){$g(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,eo(t.priority,function(){$g(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function _c(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=_d(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);_u=o,a.target.dispatchEvent(o),_u=null}else return n=La(a),n!==null&&Jg(n),t.blockedOn=a,!1;n.shift()}return!0}function i_(t,n,a){_c(t)&&a.delete(n)}function wy(){xd=!1,er!==null&&_c(er)&&(er=null),tr!==null&&_c(tr)&&(tr=null),nr!==null&&_c(nr)&&(nr=null),Vo.forEach(i_),ko.forEach(i_)}function vc(t,n){t.blockedOn===n&&(t.blockedOn=null,xd||(xd=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,wy)))}var xc=null;function a_(t){xc!==t&&(xc=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){xc===t&&(xc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(vd(o||a)===null)continue;break}var d=La(a);d!==null&&(t.splice(n,3),n-=3,_f(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function bs(t){function n(G){return vc(G,t)}er!==null&&vc(er,t),tr!==null&&vc(tr,t),nr!==null&&vc(nr,t),Vo.forEach(n),ko.forEach(n);for(var a=0;a<ir.length;a++){var o=ir[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<ir.length&&(a=ir[0],a.blockedOn===null);)n_(a),a.blockedOn===null&&ir.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],S=u[An]||null;if(typeof d=="function")S||a_(a);else if(S){var C=null;if(d&&d.hasAttribute("formAction")){if(u=d,S=d[An]||null)C=S.formAction;else if(vd(u)!==null)continue}else C=S.action;typeof C=="function"?a[o+1]=C:(a.splice(o,3),o-=3),a_(a)}}}function r_(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(S){return u=S})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Sd(t){this._internalRoot=t}Sc.prototype.render=Sd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=ii();Kg(a,o,t,n,null,null)},Sc.prototype.unmount=Sd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Kg(t.current,2,null,t,null,null),ec(),n[Ji]=null}};function Sc(t){this._internalRoot=t}Sc.prototype.unstable_scheduleHydration=function(t){if(t){var n=$s();t={blockedOn:null,target:t,priority:n};for(var a=0;a<ir.length&&n!==0&&n<ir[a].priority;a++);ir.splice(a,0,t),a===0&&n_(t)}};var s_=e.version;if(s_!=="19.2.3")throw Error(r(527,s_,"19.2.3"));B.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var Dy={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yc.isDisabled&&yc.supportsFiber)try{fe=yc.inject(Dy),de=yc}catch{}}return qo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,o="",u=h0,d=p0,S=m0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=jg(t,1,!1,null,null,a,o,null,u,d,S,r_),t[Ji]=n.current,td(t),new Sd(n)},qo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var o=!1,u="",d=h0,S=p0,C=m0,G=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(C=a.onRecoverableError),a.formState!==void 0&&(G=a.formState)),n=jg(t,1,!0,n,a??null,o,u,G,d,S,C,r_),n.context=Zg(null),a=n.current,o=ii(),o=pr(o),u=Va(o),u.callback=null,ka(a,u,o),a=o,n.current.lanes=a,tt(n,a),Bi(n),t[Ji]=n.current,td(t),new Sc(n)},qo.version="19.2.3",qo}var g_;function Hy(){if(g_)return Md.exports;g_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Md.exports=By(),Md.exports}var Gy=Hy(),K=np();var __="popstate";function v_(s){return typeof s=="object"&&s!=null&&"pathname"in s&&"search"in s&&"hash"in s&&"state"in s&&"key"in s}function Vy(s={}){function e(r,l){let c=l.state?.masked,{pathname:f,search:h,hash:m}=c||r.location;return ch("",{pathname:f,search:h,hash:m},l.state&&l.state.usr||null,l.state&&l.state.key||"default",c?{pathname:r.location.pathname,search:r.location.search,hash:r.location.hash}:void 0)}function i(r,l){return typeof l=="string"?l:il(l)}return Xy(e,i,null,s)}function nn(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function ji(s,e){if(!s){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function ky(){return Math.random().toString(36).substring(2,10)}function x_(s,e){return{usr:s.state,key:s.key,idx:e,masked:s.mask?{pathname:s.pathname,search:s.search,hash:s.hash}:void 0}}function ch(s,e,i=null,r,l){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof e=="string"?js(e):e,state:i,key:e&&e.key||r||ky(),mask:l}}function il({pathname:s="/",search:e="",hash:i=""}){return e&&e!=="?"&&(s+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(s+=i.charAt(0)==="#"?i:"#"+i),s}function js(s){let e={};if(s){let i=s.indexOf("#");i>=0&&(e.hash=s.substring(i),s=s.substring(0,i));let r=s.indexOf("?");r>=0&&(e.search=s.substring(r),s=s.substring(0,r)),s&&(e.pathname=s)}return e}function Xy(s,e,i,r={}){let{window:l=document.defaultView,v5Compat:c=!1}=r,f=l.history,h="POP",m=null,p=v();p==null&&(p=0,f.replaceState({...f.state,idx:p},""));function v(){return(f.state||{idx:null}).idx}function _(){h="POP";let x=v(),y=x==null?null:x-p;p=x,m&&m({action:h,location:w.location,delta:y})}function g(x,y){h="PUSH";let T=v_(x)?x:ch(w.location,x,y);p=v()+1;let D=x_(T,p),U=w.createHref(T.mask||T);try{f.pushState(D,"",U)}catch(H){if(H instanceof DOMException&&H.name==="DataCloneError")throw H;l.location.assign(U)}c&&m&&m({action:h,location:w.location,delta:1})}function M(x,y){h="REPLACE";let T=v_(x)?x:ch(w.location,x,y);p=v();let D=x_(T,p),U=w.createHref(T.mask||T);f.replaceState(D,"",U),c&&m&&m({action:h,location:w.location,delta:0})}function A(x){return Wy(x)}let w={get action(){return h},get location(){return s(l,f)},listen(x){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(__,_),m=x,()=>{l.removeEventListener(__,_),m=null}},createHref(x){return e(l,x)},createURL:A,encodeLocation(x){let y=A(x);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:g,replace:M,go(x){return f.go(x)}};return w}function Wy(s,e=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),nn(i,"No window.location.(origin|href) available to create URL");let r=typeof s=="string"?s:il(s);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=i+r),new URL(r,i)}function bv(s,e,i="/"){return qy(s,e,i,!1)}function qy(s,e,i,r,l){let c=typeof e=="string"?js(e):e,f=Aa(c.pathname||"/",i);if(f==null)return null;let h=Yy(s),m=null,p=rM(f);for(let v=0;m==null&&v<h.length;++v)m=iM(h[v],p,r);return m}function Yy(s){let e=Av(s);return jy(e),e}function Av(s,e=[],i=[],r="",l=!1){let c=(f,h,m=l,p)=>{let v={relativePath:p===void 0?f.path||"":p,caseSensitive:f.caseSensitive===!0,childrenIndex:h,route:f};if(v.relativePath.startsWith("/")){if(!v.relativePath.startsWith(r)&&m)return;nn(v.relativePath.startsWith(r),`Absolute route path "${v.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(r.length)}let _=Li([r,v.relativePath]),g=i.concat(v);f.children&&f.children.length>0&&(nn(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${_}".`),Av(f.children,e,g,_,m)),!(f.path==null&&!f.index)&&e.push({path:_,score:tM(_,f.index),routesMeta:g})};return s.forEach((f,h)=>{if(f.path===""||!f.path?.includes("?"))c(f,h);else for(let m of Tv(f.path))c(f,h,!0,m)}),e}function Tv(s){let e=s.split("/");if(e.length===0)return[];let[i,...r]=e,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(r.length===0)return l?[c,""]:[c];let f=Tv(r.join("/")),h=[];return h.push(...f.map(m=>m===""?c:[c,m].join("/"))),l&&h.push(...f),h.map(m=>s.startsWith("/")&&m===""?"/":m)}function jy(s){s.sort((e,i)=>e.score!==i.score?i.score-e.score:nM(e.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}var Zy=/^:[\w-]+$/,Ky=3,Qy=2,Jy=1,$y=10,eM=-2,S_=s=>s==="*";function tM(s,e){let i=s.split("/"),r=i.length;return i.some(S_)&&(r+=eM),e&&(r+=Qy),i.filter(l=>!S_(l)).reduce((l,c)=>l+(Zy.test(c)?Ky:c===""?Jy:$y),r)}function nM(s,e){return s.length===e.length&&s.slice(0,-1).every((r,l)=>r===e[l])?s[s.length-1]-e[e.length-1]:0}function iM(s,e,i=!1){let{routesMeta:r}=s,l={},c="/",f=[];for(let h=0;h<r.length;++h){let m=r[h],p=h===r.length-1,v=c==="/"?e:e.slice(c.length)||"/",_=tu({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},v),g=m.route;if(!_&&p&&i&&!r[r.length-1].route.index&&(_=tu({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},v)),!_)return null;Object.assign(l,_.params),f.push({params:l,pathname:Li([c,_.pathname]),pathnameBase:cM(Li([c,_.pathnameBase])),route:g}),_.pathnameBase!=="/"&&(c=Li([c,_.pathnameBase]))}return f}function tu(s,e){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[i,r]=aM(s.path,s.caseSensitive,s.end),l=e.match(i);if(!l)return null;let c=l[0],f=c.replace(/(.)\/+$/,"$1"),h=l.slice(1);return{params:r.reduce((p,{paramName:v,isOptional:_},g)=>{if(v==="*"){let A=h[g]||"";f=c.slice(0,c.length-A.length).replace(/(.)\/+$/,"$1")}const M=h[g];return _&&!M?p[v]=void 0:p[v]=(M||"").replace(/%2F/g,"/"),p},{}),pathname:c,pathnameBase:f,pattern:s}}function aM(s,e=!1,i=!0){ji(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let r=[],l="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,h,m,p,v)=>{if(r.push({paramName:h,isOptional:m!=null}),m){let _=v.charAt(p+f.length);return _&&_!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(r.push({paramName:"*"}),l+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":s!==""&&s!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),r]}function rM(s){try{return s.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ji(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),s}}function Aa(s,e){if(e==="/")return s;if(!s.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,r=s.charAt(i);return r&&r!=="/"?null:s.slice(i)||"/"}var sM=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function oM(s,e="/"){let{pathname:i,search:r="",hash:l=""}=typeof s=="string"?js(s):s,c;return i?(i=Cv(i),i.startsWith("/")?c=y_(i.substring(1),"/"):c=y_(i,e)):c=e,{pathname:c,search:uM(r),hash:fM(l)}}function y_(s,e){let i=nu(e).split("/");return s.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function Rd(s,e,i,r){return`Cannot include a '${s}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function lM(s){return s.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function Rv(s){let e=lM(s);return e.map((i,r)=>r===e.length-1?i.pathname:i.pathnameBase)}function ip(s,e,i,r=!1){let l;typeof s=="string"?l=js(s):(l={...s},nn(!l.pathname||!l.pathname.includes("?"),Rd("?","pathname","search",l)),nn(!l.pathname||!l.pathname.includes("#"),Rd("#","pathname","hash",l)),nn(!l.search||!l.search.includes("#"),Rd("#","search","hash",l)));let c=s===""||l.pathname==="",f=c?"/":l.pathname,h;if(f==null)h=i;else{let _=e.length-1;if(!r&&f.startsWith("..")){let g=f.split("/");for(;g[0]==="..";)g.shift(),_-=1;l.pathname=g.join("/")}h=_>=0?e[_]:"/"}let m=oM(l,h),p=f&&f!=="/"&&f.endsWith("/"),v=(c||f===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(p||v)&&(m.pathname+="/"),m}var Cv=s=>s.replace(/\/\/+/g,"/"),Li=s=>Cv(s.join("/")),nu=s=>s.replace(/\/+$/,""),cM=s=>nu(s).replace(/^\/*/,"/"),uM=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,fM=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s,dM=class{constructor(s,e,i,r=!1){this.status=s,this.statusText=e||"",this.internal=r,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}};function hM(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}function pM(s){let e=s.map(i=>i.route.path).filter(Boolean);return Li(e)||"/"}var wv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Dv(s,e){let i=s;if(typeof i!="string"||!sM.test(i))return{absoluteURL:void 0,isExternal:!1,to:i};let r=i,l=!1;if(wv)try{let c=new URL(window.location.href),f=i.startsWith("//")?new URL(c.protocol+i):new URL(i),h=Aa(f.pathname,e);f.origin===c.origin&&h!=null?i=h+f.search+f.hash:l=!0}catch{ji(!1,`<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:l,to:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Uv=["POST","PUT","PATCH","DELETE"];new Set(Uv);var mM=["GET",...Uv];new Set(mM);var Zs=K.createContext(null);Zs.displayName="DataRouter";var uu=K.createContext(null);uu.displayName="DataRouterState";var Nv=K.createContext(!1);function gM(){return K.useContext(Nv)}var Lv=K.createContext({isTransitioning:!1});Lv.displayName="ViewTransition";var _M=K.createContext(new Map);_M.displayName="Fetchers";var vM=K.createContext(null);vM.displayName="Await";var Mi=K.createContext(null);Mi.displayName="Navigation";var sl=K.createContext(null);sl.displayName="Location";var Ca=K.createContext({outlet:null,matches:[],isDataRoute:!1});Ca.displayName="Route";var ap=K.createContext(null);ap.displayName="RouteError";var Ov="REACT_ROUTER_ERROR",xM="REDIRECT",SM="ROUTE_ERROR_RESPONSE";function yM(s){if(s.startsWith(`${Ov}:${xM}:{`))try{let e=JSON.parse(s.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function MM(s){if(s.startsWith(`${Ov}:${SM}:{`))try{let e=JSON.parse(s.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new dM(e.status,e.statusText,e.data)}catch{}}function EM(s,{relative:e}={}){nn(ol(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:r}=K.useContext(Mi),{hash:l,pathname:c,search:f}=ll(s,{relative:e}),h=c;return i!=="/"&&(h=c==="/"?i:Li([i,c])),r.createHref({pathname:h,search:f,hash:l})}function ol(){return K.useContext(sl)!=null}function wa(){return nn(ol(),"useLocation() may be used only in the context of a <Router> component."),K.useContext(sl).location}var Pv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Iv(s){K.useContext(Mi).static||K.useLayoutEffect(s)}function bM(){let{isDataRoute:s}=K.useContext(Ca);return s?FM():AM()}function AM(){nn(ol(),"useNavigate() may be used only in the context of a <Router> component.");let s=K.useContext(Zs),{basename:e,navigator:i}=K.useContext(Mi),{matches:r}=K.useContext(Ca),{pathname:l}=wa(),c=JSON.stringify(Rv(r)),f=K.useRef(!1);return Iv(()=>{f.current=!0}),K.useCallback((m,p={})=>{if(ji(f.current,Pv),!f.current)return;if(typeof m=="number"){i.go(m);return}let v=ip(m,JSON.parse(c),l,p.relative==="path");s==null&&e!=="/"&&(v.pathname=v.pathname==="/"?e:Li([e,v.pathname])),(p.replace?i.replace:i.push)(v,p.state,p)},[e,i,c,l,s])}K.createContext(null);function ll(s,{relative:e}={}){let{matches:i}=K.useContext(Ca),{pathname:r}=wa(),l=JSON.stringify(Rv(i));return K.useMemo(()=>ip(s,JSON.parse(l),r,e==="path"),[s,l,r,e])}function TM(s,e){return Fv(s,e)}function Fv(s,e,i){nn(ol(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=K.useContext(Mi),{matches:l}=K.useContext(Ca),c=l[l.length-1],f=c?c.params:{},h=c?c.pathname:"/",m=c?c.pathnameBase:"/",p=c&&c.route;{let x=p&&p.path||"";Bv(h,!p||x.endsWith("*")||x.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${x}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${x}"> to <Route path="${x==="/"?"*":`${x}/*`}">.`)}let v=wa(),_;if(e){let x=typeof e=="string"?js(e):e;nn(m==="/"||x.pathname?.startsWith(m),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${x.pathname}" was given in the \`location\` prop.`),_=x}else _=v;let g=_.pathname||"/",M=g;if(m!=="/"){let x=m.replace(/^\//,"").split("/");M="/"+g.replace(/^\//,"").split("/").slice(x.length).join("/")}let A=i&&i.state.matches.length?i.state.matches.map(x=>Object.assign(x,{route:i.manifest[x.route.id]||x.route})):bv(s,{pathname:M});ji(p||A!=null,`No routes matched location "${_.pathname}${_.search}${_.hash}" `),ji(A==null||A[A.length-1].route.element!==void 0||A[A.length-1].route.Component!==void 0||A[A.length-1].route.lazy!==void 0,`Matched leaf route at location "${_.pathname}${_.search}${_.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let w=UM(A&&A.map(x=>Object.assign({},x,{params:Object.assign({},f,x.params),pathname:Li([m,r.encodeLocation?r.encodeLocation(x.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?m:Li([m,r.encodeLocation?r.encodeLocation(x.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:x.pathnameBase])})),l,i);return e&&w?K.createElement(sl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,..._},navigationType:"POP"}},w):w}function RM(){let s=IM(),e=hM(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),i=s instanceof Error?s.stack:null,r="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:r},c={padding:"2px 4px",backgroundColor:r},f=null;return console.error("Error handled by React Router default ErrorBoundary:",s),f=K.createElement(K.Fragment,null,K.createElement("p",null,"💿 Hey developer 👋"),K.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",K.createElement("code",{style:c},"ErrorBoundary")," or"," ",K.createElement("code",{style:c},"errorElement")," prop on your route.")),K.createElement(K.Fragment,null,K.createElement("h2",null,"Unexpected Application Error!"),K.createElement("h3",{style:{fontStyle:"italic"}},e),i?K.createElement("pre",{style:l},i):null,f)}var CM=K.createElement(RM,null),zv=class extends K.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,e){return e.location!==s.location||e.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:e.error,location:e.location,revalidation:s.revalidation||e.revalidation}}componentDidCatch(s,e){this.props.onError?this.props.onError(s,e):console.error("React Router caught the following error during render",s)}render(){let s=this.state.error;if(this.context&&typeof s=="object"&&s&&"digest"in s&&typeof s.digest=="string"){const i=MM(s.digest);i&&(s=i)}let e=s!==void 0?K.createElement(Ca.Provider,{value:this.props.routeContext},K.createElement(ap.Provider,{value:s,children:this.props.component})):this.props.children;return this.context?K.createElement(wM,{error:s},e):e}};zv.contextType=Nv;var Cd=new WeakMap;function wM({children:s,error:e}){let{basename:i}=K.useContext(Mi);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let r=yM(e.digest);if(r){let l=Cd.get(e);if(l)throw l;let c=Dv(r.location,i);if(wv&&!Cd.get(e))if(c.isExternal||r.reloadDocument)window.location.href=c.absoluteURL||c.to;else{const f=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(c.to,{replace:r.replace}));throw Cd.set(e,f),f}return K.createElement("meta",{httpEquiv:"refresh",content:`0;url=${c.absoluteURL||c.to}`})}}return s}function DM({routeContext:s,match:e,children:i}){let r=K.useContext(Zs);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),K.createElement(Ca.Provider,{value:s},i)}function UM(s,e=[],i){let r=i?.state;if(s==null){if(!r)return null;if(r.errors)s=r.matches;else if(e.length===0&&!r.initialized&&r.matches.length>0)s=r.matches;else return null}let l=s,c=r?.errors;if(c!=null){let v=l.findIndex(_=>_.route.id&&c?.[_.route.id]!==void 0);nn(v>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),l=l.slice(0,Math.min(l.length,v+1))}let f=!1,h=-1;if(i&&r){f=r.renderFallback;for(let v=0;v<l.length;v++){let _=l[v];if((_.route.HydrateFallback||_.route.hydrateFallbackElement)&&(h=v),_.route.id){let{loaderData:g,errors:M}=r,A=_.route.loader&&!g.hasOwnProperty(_.route.id)&&(!M||M[_.route.id]===void 0);if(_.route.lazy||A){i.isStatic&&(f=!0),h>=0?l=l.slice(0,h+1):l=[l[0]];break}}}}let m=i?.onError,p=r&&m?(v,_)=>{m(v,{location:r.location,params:r.matches?.[0]?.params??{},pattern:pM(r.matches),errorInfo:_})}:void 0;return l.reduceRight((v,_,g)=>{let M,A=!1,w=null,x=null;r&&(M=c&&_.route.id?c[_.route.id]:void 0,w=_.route.errorElement||CM,f&&(h<0&&g===0?(Bv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),A=!0,x=null):h===g&&(A=!0,x=_.route.hydrateFallbackElement||null)));let y=e.concat(l.slice(0,g+1)),T=()=>{let D;return M?D=w:A?D=x:_.route.Component?D=K.createElement(_.route.Component,null):_.route.element?D=_.route.element:D=v,K.createElement(DM,{match:_,routeContext:{outlet:v,matches:y,isDataRoute:r!=null},children:D})};return r&&(_.route.ErrorBoundary||_.route.errorElement||g===0)?K.createElement(zv,{location:r.location,revalidation:r.revalidation,component:w,error:M,children:T(),routeContext:{outlet:null,matches:y,isDataRoute:!0},onError:p}):T()},null)}function rp(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function NM(s){let e=K.useContext(Zs);return nn(e,rp(s)),e}function LM(s){let e=K.useContext(uu);return nn(e,rp(s)),e}function OM(s){let e=K.useContext(Ca);return nn(e,rp(s)),e}function sp(s){let e=OM(s),i=e.matches[e.matches.length-1];return nn(i.route.id,`${s} can only be used on routes that contain a unique "id"`),i.route.id}function PM(){return sp("useRouteId")}function IM(){let s=K.useContext(ap),e=LM("useRouteError"),i=sp("useRouteError");return s!==void 0?s:e.errors?.[i]}function FM(){let{router:s}=NM("useNavigate"),e=sp("useNavigate"),i=K.useRef(!1);return Iv(()=>{i.current=!0}),K.useCallback(async(l,c={})=>{ji(i.current,Pv),i.current&&(typeof l=="number"?await s.navigate(l):await s.navigate(l,{fromRouteId:e,...c}))},[s,e])}var M_={};function Bv(s,e,i){!e&&!M_[s]&&(M_[s]=!0,ji(!1,i))}K.memo(zM);function zM({routes:s,manifest:e,future:i,state:r,isStatic:l,onError:c}){return Fv(s,void 0,{manifest:e,state:r,isStatic:l,onError:c})}function Hv(s){nn(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function BM({basename:s="/",children:e=null,location:i,navigationType:r="POP",navigator:l,static:c=!1,useTransitions:f}){nn(!ol(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=s.replace(/^\/*/,"/"),m=K.useMemo(()=>({basename:h,navigator:l,static:c,useTransitions:f,future:{}}),[h,l,c,f]);typeof i=="string"&&(i=js(i));let{pathname:p="/",search:v="",hash:_="",state:g=null,key:M="default",mask:A}=i,w=K.useMemo(()=>{let x=Aa(p,h);return x==null?null:{location:{pathname:x,search:v,hash:_,state:g,key:M,mask:A},navigationType:r}},[h,p,v,_,g,M,r,A]);return ji(w!=null,`<Router basename="${h}"> is not able to match the URL "${p}${v}${_}" because it does not start with the basename, so the <Router> won't render anything.`),w==null?null:K.createElement(Mi.Provider,{value:m},K.createElement(sl.Provider,{children:e,value:w}))}function HM({children:s,location:e}){return TM(uh(s),e)}function uh(s,e=[]){let i=[];return K.Children.forEach(s,(r,l)=>{if(!K.isValidElement(r))return;let c=[...e,l];if(r.type===K.Fragment){i.push.apply(i,uh(r.props.children,c));return}nn(r.type===Hv,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),nn(!r.props.index||!r.props.children,"An index route cannot have child routes.");let f={id:r.props.id||c.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(f.children=uh(r.props.children,c)),i.push(f)}),i}var Yc="get",jc="application/x-www-form-urlencoded";function fu(s){return typeof HTMLElement<"u"&&s instanceof HTMLElement}function GM(s){return fu(s)&&s.tagName.toLowerCase()==="button"}function VM(s){return fu(s)&&s.tagName.toLowerCase()==="form"}function kM(s){return fu(s)&&s.tagName.toLowerCase()==="input"}function XM(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function WM(s,e){return s.button===0&&(!e||e==="_self")&&!XM(s)}var Mc=null;function qM(){if(Mc===null)try{new FormData(document.createElement("form"),0),Mc=!1}catch{Mc=!0}return Mc}var YM=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function wd(s){return s!=null&&!YM.has(s)?(ji(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${jc}"`),null):s}function jM(s,e){let i,r,l,c,f;if(VM(s)){let h=s.getAttribute("action");r=h?Aa(h,e):null,i=s.getAttribute("method")||Yc,l=wd(s.getAttribute("enctype"))||jc,c=new FormData(s)}else if(GM(s)||kM(s)&&(s.type==="submit"||s.type==="image")){let h=s.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=s.getAttribute("formaction")||h.getAttribute("action");if(r=m?Aa(m,e):null,i=s.getAttribute("formmethod")||h.getAttribute("method")||Yc,l=wd(s.getAttribute("formenctype"))||wd(h.getAttribute("enctype"))||jc,c=new FormData(h,s),!qM()){let{name:p,type:v,value:_}=s;if(v==="image"){let g=p?`${p}.`:"";c.append(`${g}x`,"0"),c.append(`${g}y`,"0")}else p&&c.append(p,_)}}else{if(fu(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Yc,r=null,l=jc,f=s}return c&&l==="text/plain"&&(f=c,c=void 0),{action:r,method:i.toLowerCase(),encType:l,formData:c,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function op(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function Gv(s,e,i,r){let l=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return i?l.pathname.endsWith("/")?l.pathname=`${l.pathname}_.${r}`:l.pathname=`${l.pathname}.${r}`:l.pathname==="/"?l.pathname=`_root.${r}`:e&&Aa(l.pathname,e)==="/"?l.pathname=`${nu(e)}/_root.${r}`:l.pathname=`${nu(l.pathname)}.${r}`,l}async function ZM(s,e){if(s.id in e)return e[s.id];try{let i=await import(s.module);return e[s.id]=i,i}catch(i){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function KM(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function QM(s,e,i){let r=await Promise.all(s.map(async l=>{let c=e.routes[l.route.id];if(c){let f=await ZM(c,i);return f.links?f.links():[]}return[]}));return tE(r.flat(1).filter(KM).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function E_(s,e,i,r,l,c){let f=(m,p)=>i[p]?m.route.id!==i[p].route.id:!0,h=(m,p)=>i[p].pathname!==m.pathname||i[p].route.path?.endsWith("*")&&i[p].params["*"]!==m.params["*"];return c==="assets"?e.filter((m,p)=>f(m,p)||h(m,p)):c==="data"?e.filter((m,p)=>{let v=r.routes[m.route.id];if(!v||!v.hasLoader)return!1;if(f(m,p)||h(m,p))return!0;if(m.route.shouldRevalidate){let _=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(s,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof _=="boolean")return _}return!0}):[]}function JM(s,e,{includeHydrateFallback:i}={}){return $M(s.map(r=>{let l=e.routes[r.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function $M(s){return[...new Set(s)]}function eE(s){let e={},i=Object.keys(s).sort();for(let r of i)e[r]=s[r];return e}function tE(s,e){let i=new Set;return new Set(e),s.reduce((r,l)=>{let c=JSON.stringify(eE(l));return i.has(c)||(i.add(c),r.push({key:c,link:l})),r},[])}function lp(){let s=K.useContext(Zs);return op(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function nE(){let s=K.useContext(uu);return op(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var cp=K.createContext(void 0);cp.displayName="FrameworkContext";function up(){let s=K.useContext(cp);return op(s,"You must render this element inside a <HydratedRouter> element"),s}function iE(s,e){let i=K.useContext(cp),[r,l]=K.useState(!1),[c,f]=K.useState(!1),{onFocus:h,onBlur:m,onMouseEnter:p,onMouseLeave:v,onTouchStart:_}=e,g=K.useRef(null);K.useEffect(()=>{if(s==="render"&&f(!0),s==="viewport"){let w=y=>{y.forEach(T=>{f(T.isIntersecting)})},x=new IntersectionObserver(w,{threshold:.5});return g.current&&x.observe(g.current),()=>{x.disconnect()}}},[s]),K.useEffect(()=>{if(r){let w=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(w)}}},[r]);let M=()=>{l(!0)},A=()=>{l(!1),f(!1)};return i?s!=="intent"?[c,g,{}]:[c,g,{onFocus:Yo(h,M),onBlur:Yo(m,A),onMouseEnter:Yo(p,M),onMouseLeave:Yo(v,A),onTouchStart:Yo(_,M)}]:[!1,g,{}]}function Yo(s,e){return i=>{s&&s(i),i.defaultPrevented||e(i)}}function aE({page:s,...e}){let i=gM(),{router:r}=lp(),l=K.useMemo(()=>bv(r.routes,s,r.basename),[r.routes,s,r.basename]);return l?i?K.createElement(sE,{page:s,matches:l,...e}):K.createElement(oE,{page:s,matches:l,...e}):null}function rE(s){let{manifest:e,routeModules:i}=up(),[r,l]=K.useState([]);return K.useEffect(()=>{let c=!1;return QM(s,e,i).then(f=>{c||l(f)}),()=>{c=!0}},[s,e,i]),r}function sE({page:s,matches:e,...i}){let r=wa(),{future:l}=up(),{basename:c}=lp(),f=K.useMemo(()=>{if(s===r.pathname+r.search+r.hash)return[];let h=Gv(s,c,l.unstable_trailingSlashAwareDataRequests,"rsc"),m=!1,p=[];for(let v of e)typeof v.route.shouldRevalidate=="function"?m=!0:p.push(v.route.id);return m&&p.length>0&&h.searchParams.set("_routes",p.join(",")),[h.pathname+h.search]},[c,l.unstable_trailingSlashAwareDataRequests,s,r,e]);return K.createElement(K.Fragment,null,f.map(h=>K.createElement("link",{key:h,rel:"prefetch",as:"fetch",href:h,...i})))}function oE({page:s,matches:e,...i}){let r=wa(),{future:l,manifest:c,routeModules:f}=up(),{basename:h}=lp(),{loaderData:m,matches:p}=nE(),v=K.useMemo(()=>E_(s,e,p,c,r,"data"),[s,e,p,c,r]),_=K.useMemo(()=>E_(s,e,p,c,r,"assets"),[s,e,p,c,r]),g=K.useMemo(()=>{if(s===r.pathname+r.search+r.hash)return[];let w=new Set,x=!1;if(e.forEach(T=>{let D=c.routes[T.route.id];!D||!D.hasLoader||(!v.some(U=>U.route.id===T.route.id)&&T.route.id in m&&f[T.route.id]?.shouldRevalidate||D.hasClientLoader?x=!0:w.add(T.route.id))}),w.size===0)return[];let y=Gv(s,h,l.unstable_trailingSlashAwareDataRequests,"data");return x&&w.size>0&&y.searchParams.set("_routes",e.filter(T=>w.has(T.route.id)).map(T=>T.route.id).join(",")),[y.pathname+y.search]},[h,l.unstable_trailingSlashAwareDataRequests,m,r,c,v,e,s,f]),M=K.useMemo(()=>JM(_,c),[_,c]),A=rE(_);return K.createElement(K.Fragment,null,g.map(w=>K.createElement("link",{key:w,rel:"prefetch",as:"fetch",href:w,...i})),M.map(w=>K.createElement("link",{key:w,rel:"modulepreload",href:w,...i})),A.map(({key:w,link:x})=>K.createElement("link",{key:w,nonce:i.nonce,...x,crossOrigin:x.crossOrigin??i.crossOrigin})))}function lE(...s){return e=>{s.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var cE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{cE&&(window.__reactRouterVersion="7.15.0")}catch{}function uE({basename:s,children:e,useTransitions:i,window:r}){let l=K.useRef();l.current==null&&(l.current=Vy({window:r,v5Compat:!0}));let c=l.current,[f,h]=K.useState({action:c.action,location:c.location}),m=K.useCallback(p=>{i===!1?h(p):K.startTransition(()=>h(p))},[i]);return K.useLayoutEffect(()=>c.listen(m),[c,m]),K.createElement(BM,{basename:s,children:e,location:f.location,navigationType:f.action,navigator:c,useTransitions:i})}var Vv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,kv=K.forwardRef(function({onClick:e,discover:i="render",prefetch:r="none",relative:l,reloadDocument:c,replace:f,mask:h,state:m,target:p,to:v,preventScrollReset:_,viewTransition:g,defaultShouldRevalidate:M,...A},w){let{basename:x,navigator:y,useTransitions:T}=K.useContext(Mi),D=typeof v=="string"&&Vv.test(v),U=Dv(v,x);v=U.to;let H=EM(v,{relative:l}),L=wa(),O=null;if(h){let X=ip(h,[],L.mask?L.mask.pathname:"/",!0);x!=="/"&&(X.pathname=X.pathname==="/"?x:Li([x,X.pathname])),O=y.createHref(X)}let[b,P,W]=iE(r,A),z=pE(v,{replace:f,mask:h,state:m,target:p,preventScrollReset:_,relative:l,viewTransition:g,defaultShouldRevalidate:M,useTransitions:T});function Z(X){e&&e(X),X.defaultPrevented||z(X)}let ue=!(U.isExternal||c),pe=K.createElement("a",{...A,...W,href:(ue?O:void 0)||U.absoluteURL||H,onClick:ue?Z:e,ref:lE(w,P),target:p,"data-discover":!D&&i==="render"?"true":void 0});return b&&!D?K.createElement(K.Fragment,null,pe,K.createElement(aE,{page:H})):pe});kv.displayName="Link";var fE=K.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:r="",end:l=!1,style:c,to:f,viewTransition:h,children:m,...p},v){let _=ll(f,{relative:p.relative}),g=wa(),M=K.useContext(uu),{navigator:A,basename:w}=K.useContext(Mi),x=M!=null&&xE(_)&&h===!0,y=A.encodeLocation?A.encodeLocation(_).pathname:_.pathname,T=g.pathname,D=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;i||(T=T.toLowerCase(),D=D?D.toLowerCase():null,y=y.toLowerCase()),D&&w&&(D=Aa(D,w)||D);const U=y!=="/"&&y.endsWith("/")?y.length-1:y.length;let H=T===y||!l&&T.startsWith(y)&&T.charAt(U)==="/",L=D!=null&&(D===y||!l&&D.startsWith(y)&&D.charAt(y.length)==="/"),O={isActive:H,isPending:L,isTransitioning:x},b=H?e:void 0,P;typeof r=="function"?P=r(O):P=[r,H?"active":null,L?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let W=typeof c=="function"?c(O):c;return K.createElement(kv,{...p,"aria-current":b,className:P,ref:v,style:W,to:f,viewTransition:h},typeof m=="function"?m(O):m)});fE.displayName="NavLink";var dE=K.forwardRef(({discover:s="render",fetcherKey:e,navigate:i,reloadDocument:r,replace:l,state:c,method:f=Yc,action:h,onSubmit:m,relative:p,preventScrollReset:v,viewTransition:_,defaultShouldRevalidate:g,...M},A)=>{let{useTransitions:w}=K.useContext(Mi),x=_E(),y=vE(h,{relative:p}),T=f.toLowerCase()==="get"?"get":"post",D=typeof h=="string"&&Vv.test(h),U=H=>{if(m&&m(H),H.defaultPrevented)return;H.preventDefault();let L=H.nativeEvent.submitter,O=L?.getAttribute("formmethod")||f,b=()=>x(L||H.currentTarget,{fetcherKey:e,method:O,navigate:i,replace:l,state:c,relative:p,preventScrollReset:v,viewTransition:_,defaultShouldRevalidate:g});w&&i!==!1?K.startTransition(()=>b()):b()};return K.createElement("form",{ref:A,method:T,action:y,onSubmit:r?m:U,...M,"data-discover":!D&&s==="render"?"true":void 0})});dE.displayName="Form";function hE(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Xv(s){let e=K.useContext(Zs);return nn(e,hE(s)),e}function pE(s,{target:e,replace:i,mask:r,state:l,preventScrollReset:c,relative:f,viewTransition:h,defaultShouldRevalidate:m,useTransitions:p}={}){let v=bM(),_=wa(),g=ll(s,{relative:f});return K.useCallback(M=>{if(WM(M,e)){M.preventDefault();let A=i!==void 0?i:il(_)===il(g),w=()=>v(s,{replace:A,mask:r,state:l,preventScrollReset:c,relative:f,viewTransition:h,defaultShouldRevalidate:m});p?K.startTransition(()=>w()):w()}},[_,v,g,i,r,l,e,s,c,f,h,m,p])}var mE=0,gE=()=>`__${String(++mE)}__`;function _E(){let{router:s}=Xv("useSubmit"),{basename:e}=K.useContext(Mi),i=PM(),r=s.fetch,l=s.navigate;return K.useCallback(async(c,f={})=>{let{action:h,method:m,encType:p,formData:v,body:_}=jM(c,e);if(f.navigate===!1){let g=f.fetcherKey||gE();await r(g,i,f.action||h,{defaultShouldRevalidate:f.defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:v,body:_,formMethod:f.method||m,formEncType:f.encType||p,flushSync:f.flushSync})}else await l(f.action||h,{defaultShouldRevalidate:f.defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:v,body:_,formMethod:f.method||m,formEncType:f.encType||p,replace:f.replace,state:f.state,fromRouteId:i,flushSync:f.flushSync,viewTransition:f.viewTransition})},[r,l,e,i])}function vE(s,{relative:e}={}){let{basename:i}=K.useContext(Mi),r=K.useContext(Ca);nn(r,"useFormAction must be used inside a RouteContext");let[l]=r.matches.slice(-1),c={...ll(s||".",{relative:e})},f=wa();if(s==null){c.search=f.search;let h=new URLSearchParams(c.search),m=h.getAll("index");if(m.some(v=>v==="")){h.delete("index"),m.filter(_=>_).forEach(_=>h.append("index",_));let v=h.toString();c.search=v?`?${v}`:""}}return(!s||s===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:Li([i,c.pathname])),il(c)}function xE(s,{relative:e}={}){let i=K.useContext(Lv);nn(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Xv("useViewTransitionState"),l=ll(s,{relative:e});if(!i.isTransitioning)return!1;let c=Aa(i.currentLocation.pathname,r)||i.currentLocation.pathname,f=Aa(i.nextLocation.pathname,r)||i.nextLocation.pathname;return tu(l.pathname,f)!=null||tu(l.pathname,c)!=null}const SE=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),yE=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,r)=>r?r.toUpperCase():i.toLowerCase()),b_=s=>{const e=yE(s);return e.charAt(0).toUpperCase()+e.slice(1)},Wv=(...s)=>s.filter((e,i,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===i).join(" ").trim(),ME=s=>{for(const e in s)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};var EE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const bE=K.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:r,className:l="",children:c,iconNode:f,...h},m)=>K.createElement("svg",{ref:m,...EE,width:e,height:e,stroke:s,strokeWidth:r?Number(i)*24/Number(e):i,className:Wv("lucide",l),...!c&&!ME(h)&&{"aria-hidden":"true"},...h},[...f.map(([p,v])=>K.createElement(p,v)),...Array.isArray(c)?c:[c]]));const Wr=(s,e)=>{const i=K.forwardRef(({className:r,...l},c)=>K.createElement(bE,{ref:c,iconNode:e,className:Wv(`lucide-${SE(b_(s))}`,`lucide-${s}`,r),...l}));return i.displayName=b_(s),i};const AE=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],TE=Wr("chevron-down",AE);const RE=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Bs=Wr("external-link",RE);const CE=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],wE=Wr("mail",CE);const DE=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],UE=Wr("map-pin",DE);const NE=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],LE=Wr("menu",NE);const OE=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],PE=Wr("phone",OE);const IE=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],FE=Wr("x",IE),A_=[{label:"Research",href:"#research"},{label:"Publications",href:"#publications"},{label:"Experience",href:"#experience"},{label:"Contact",href:"#contact"}];function zE(){const[s,e]=K.useState(!1),[i,r]=K.useState(!1);K.useEffect(()=>{const c=()=>{e(window.scrollY>window.innerHeight*.5)};return window.addEventListener("scroll",c,{passive:!0}),()=>window.removeEventListener("scroll",c)},[]);const l=K.useCallback((c,f)=>{c.preventDefault(),r(!1);const h=document.querySelector(f);h&&h.scrollIntoView({behavior:"smooth"})},[]);return Q.jsxs(Q.Fragment,{children:[Q.jsx("nav",{className:"fixed top-0 left-0 w-full z-50 transition-all duration-500",style:{backgroundColor:s?"rgba(10, 10, 11, 0.85)":"transparent",backdropFilter:s?"blur(12px)":"none",WebkitBackdropFilter:s?"blur(12px)":"none",borderBottom:s?"1px solid #222222":"1px solid transparent"},children:Q.jsxs("div",{className:"flex items-center justify-between mx-auto",style:{maxWidth:1200,height:64,padding:"0 2rem"},children:[Q.jsx("a",{href:"#",onClick:c=>{c.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})},className:"font-body text-sm tracking-widest uppercase",style:{color:"#F5F5F0",fontWeight:500,textDecoration:"none"},children:"N. Mourad"}),Q.jsxs("div",{className:"hidden md:flex items-center gap-8",children:[A_.map(c=>Q.jsx("a",{href:c.href,onClick:f=>l(f,c.href),className:"font-body text-sm transition-colors duration-300 hover:text-[#C4956A]",style:{color:"#8A8A8A",textDecoration:"none",fontWeight:400},children:c.label},c.href)),Q.jsx("div",{className:"w-px h-4 bg-[#222222]"}),Q.jsx("a",{href:"https://scholar.google.com/citations?user=tEKyL0UAAAAJ",target:"_blank",rel:"noopener noreferrer",className:"font-mono text-xs transition-colors duration-300 hover:text-[#C4956A]",style:{color:"#555555",textDecoration:"none"},children:"Scholar"}),Q.jsx("a",{href:"https://www.linkedin.com/in/mourad-nouioua",target:"_blank",rel:"noopener noreferrer",className:"font-mono text-xs transition-colors duration-300 hover:text-[#C4956A]",style:{color:"#555555",textDecoration:"none"},children:"LinkedIn"}),Q.jsx("a",{href:"https://orcid.org/0000-0003-0439-2112",target:"_blank",rel:"noopener noreferrer",className:"font-mono text-xs transition-colors duration-300 hover:text-[#C4956A]",style:{color:"#555555",textDecoration:"none"},children:"ORCID"})]}),Q.jsx("button",{className:"md:hidden flex items-center justify-center",onClick:()=>r(!i),style:{color:"#F5F5F0"},"aria-label":"Toggle menu",children:i?Q.jsx(FE,{size:24}):Q.jsx(LE,{size:24})})]})}),i&&Q.jsx("div",{className:"fixed inset-0 z-40 flex flex-col items-center justify-center md:hidden",style:{backgroundColor:"rgba(10, 10, 11, 0.97)",backdropFilter:"blur(20px)"},children:Q.jsx("div",{className:"flex flex-col items-center gap-8",children:A_.map(c=>Q.jsx("a",{href:c.href,onClick:f=>l(f,c.href),className:"font-body text-2xl transition-colors duration-300 hover:text-[#C4956A]",style:{color:"#F5F5F0",textDecoration:"none",fontWeight:400},children:c.label},c.href))})})]})}const fp="184",BE=0,T_=1,HE=2,Zc=1,GE=2,tl=3,hr=0,Yn=1,ya=2,Ea=0,Hs=1,R_=2,C_=3,w_=4,VE=5,zr=100,kE=101,XE=102,WE=103,qE=104,YE=200,jE=201,ZE=202,KE=203,fh=204,dh=205,QE=206,JE=207,$E=208,eb=209,tb=210,nb=211,ib=212,ab=213,rb=214,hh=0,ph=1,mh=2,Vs=3,gh=4,_h=5,vh=6,xh=7,qv=0,sb=1,ob=2,Wi=0,Yv=1,jv=2,Zv=3,Kv=4,Qv=5,Jv=6,$v=7,ex=300,Vr=301,ks=302,Dd=303,Ud=304,du=306,Sh=1e3,Ma=1001,yh=1002,Dn=1003,lb=1004,Ec=1005,In=1006,Nd=1007,Hr=1008,Si=1009,tx=1010,nx=1011,al=1012,dp=1013,Zi=1014,ki=1015,Ta=1016,hp=1017,pp=1018,rl=1020,ix=35902,ax=35899,rx=1021,sx=1022,Ni=1023,Ra=1026,Gr=1027,ox=1028,mp=1029,kr=1030,gp=1031,_p=1033,Kc=33776,Qc=33777,Jc=33778,$c=33779,Mh=35840,Eh=35841,bh=35842,Ah=35843,Th=36196,Rh=37492,Ch=37496,wh=37488,Dh=37489,iu=37490,Uh=37491,Nh=37808,Lh=37809,Oh=37810,Ph=37811,Ih=37812,Fh=37813,zh=37814,Bh=37815,Hh=37816,Gh=37817,Vh=37818,kh=37819,Xh=37820,Wh=37821,qh=36492,Yh=36494,jh=36495,Zh=36283,Kh=36284,au=36285,Qh=36286,cb=3200,D_=0,ub=1,fr="",vi="srgb",ru="srgb-linear",su="linear",Bt="srgb",As=7680,U_=519,fb=512,db=513,hb=514,vp=515,pb=516,mb=517,xp=518,gb=519,N_=35044,L_="300 es",Xi=2e3,ou=2001;function _b(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function lu(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function vb(){const s=lu("canvas");return s.style.display="block",s}const O_={};function P_(...s){const e="THREE."+s.shift();console.log(e,...s)}function lx(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=s[1];i&&i.isStackTrace?s[0]+=" "+i.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function nt(...s){s=lx(s);const e="THREE."+s.shift();{const i=s[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...s)}}function bt(...s){s=lx(s);const e="THREE."+s.shift();{const i=s[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...s)}}function Jh(...s){const e=s.join(" ");e in O_||(O_[e]=!0,nt(...s))}function xb(s,e,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const Sb={[hh]:ph,[mh]:vh,[gh]:xh,[Vs]:_h,[ph]:hh,[vh]:mh,[xh]:gh,[_h]:Vs};class qr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ld=Math.PI/180,$h=180/Math.PI;function cl(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(On[s&255]+On[s>>8&255]+On[s>>16&255]+On[s>>24&255]+"-"+On[e&255]+On[e>>8&255]+"-"+On[e>>16&15|64]+On[e>>24&255]+"-"+On[i&63|128]+On[i>>8&255]+"-"+On[i>>16&255]+On[i>>24&255]+On[r&255]+On[r>>8&255]+On[r>>16&255]+On[r>>24&255]).toLowerCase()}function Et(s,e,i){return Math.max(e,Math.min(i,s))}function yb(s,e){return(s%e+e)%e}function Od(s,e,i){return(1-i)*s+i*e}function jo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function qn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const bp=class bp{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Et(this.x,e.x,i.x),this.y=Et(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Et(this.x,e,i),this.y=Et(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Et(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,f=this.y-e.y;return this.x=c*r-f*l+e.x,this.y=c*l+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};bp.prototype.isVector2=!0;let Ut=bp;class Ks{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,f,h){let m=r[l+0],p=r[l+1],v=r[l+2],_=r[l+3],g=c[f+0],M=c[f+1],A=c[f+2],w=c[f+3];if(_!==w||m!==g||p!==M||v!==A){let x=m*g+p*M+v*A+_*w;x<0&&(g=-g,M=-M,A=-A,w=-w,x=-x);let y=1-h;if(x<.9995){const T=Math.acos(x),D=Math.sin(T);y=Math.sin(y*T)/D,h=Math.sin(h*T)/D,m=m*y+g*h,p=p*y+M*h,v=v*y+A*h,_=_*y+w*h}else{m=m*y+g*h,p=p*y+M*h,v=v*y+A*h,_=_*y+w*h;const T=1/Math.sqrt(m*m+p*p+v*v+_*_);m*=T,p*=T,v*=T,_*=T}}e[i]=m,e[i+1]=p,e[i+2]=v,e[i+3]=_}static multiplyQuaternionsFlat(e,i,r,l,c,f){const h=r[l],m=r[l+1],p=r[l+2],v=r[l+3],_=c[f],g=c[f+1],M=c[f+2],A=c[f+3];return e[i]=h*A+v*_+m*M-p*g,e[i+1]=m*A+v*g+p*_-h*M,e[i+2]=p*A+v*M+h*g-m*_,e[i+3]=v*A-h*_-m*g-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,f=e._order,h=Math.cos,m=Math.sin,p=h(r/2),v=h(l/2),_=h(c/2),g=m(r/2),M=m(l/2),A=m(c/2);switch(f){case"XYZ":this._x=g*v*_+p*M*A,this._y=p*M*_-g*v*A,this._z=p*v*A+g*M*_,this._w=p*v*_-g*M*A;break;case"YXZ":this._x=g*v*_+p*M*A,this._y=p*M*_-g*v*A,this._z=p*v*A-g*M*_,this._w=p*v*_+g*M*A;break;case"ZXY":this._x=g*v*_-p*M*A,this._y=p*M*_+g*v*A,this._z=p*v*A+g*M*_,this._w=p*v*_-g*M*A;break;case"ZYX":this._x=g*v*_-p*M*A,this._y=p*M*_+g*v*A,this._z=p*v*A-g*M*_,this._w=p*v*_+g*M*A;break;case"YZX":this._x=g*v*_+p*M*A,this._y=p*M*_+g*v*A,this._z=p*v*A-g*M*_,this._w=p*v*_-g*M*A;break;case"XZY":this._x=g*v*_-p*M*A,this._y=p*M*_-g*v*A,this._z=p*v*A+g*M*_,this._w=p*v*_+g*M*A;break;default:nt("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],f=i[1],h=i[5],m=i[9],p=i[2],v=i[6],_=i[10],g=r+h+_;if(g>0){const M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(v-m)*M,this._y=(c-p)*M,this._z=(f-l)*M}else if(r>h&&r>_){const M=2*Math.sqrt(1+r-h-_);this._w=(v-m)/M,this._x=.25*M,this._y=(l+f)/M,this._z=(c+p)/M}else if(h>_){const M=2*Math.sqrt(1+h-r-_);this._w=(c-p)/M,this._x=(l+f)/M,this._y=.25*M,this._z=(m+v)/M}else{const M=2*Math.sqrt(1+_-r-h);this._w=(f-l)/M,this._x=(c+p)/M,this._y=(m+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,f=e._w,h=i._x,m=i._y,p=i._z,v=i._w;return this._x=r*v+f*h+l*p-c*m,this._y=l*v+f*m+c*h-r*p,this._z=c*v+f*p+r*m-l*h,this._w=f*v-r*h-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){let r=e._x,l=e._y,c=e._z,f=e._w,h=this.dot(e);h<0&&(r=-r,l=-l,c=-c,f=-f,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),v=Math.sin(p);m=Math.sin(m*p)/v,i=Math.sin(i*p)/v,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Ap=class Ap{constructor(e=0,i=0,r=0){this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(I_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(I_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,f=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*f,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,f=e.y,h=e.z,m=e.w,p=2*(f*l-h*r),v=2*(h*i-c*l),_=2*(c*r-f*i);return this.x=i+m*p+f*_-h*v,this.y=r+m*v+h*p-c*_,this.z=l+m*_+c*v-f*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Et(this.x,e.x,i.x),this.y=Et(this.y,e.y,i.y),this.z=Et(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Et(this.x,e,i),this.y=Et(this.y,e,i),this.z=Et(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,f=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*f-r*m,this.z=r*h-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Pd.copy(this).projectOnVector(e),this.sub(Pd)}reflect(e){return this.sub(Pd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Et(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ap.prototype.isVector3=!0;let ne=Ap;const Pd=new ne,I_=new Ks,Tp=class Tp{constructor(e,i,r,l,c,f,h,m,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,f,h,m,p)}set(e,i,r,l,c,f,h,m,p){const v=this.elements;return v[0]=e,v[1]=l,v[2]=h,v[3]=i,v[4]=c,v[5]=m,v[6]=r,v[7]=f,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,f=r[0],h=r[3],m=r[6],p=r[1],v=r[4],_=r[7],g=r[2],M=r[5],A=r[8],w=l[0],x=l[3],y=l[6],T=l[1],D=l[4],U=l[7],H=l[2],L=l[5],O=l[8];return c[0]=f*w+h*T+m*H,c[3]=f*x+h*D+m*L,c[6]=f*y+h*U+m*O,c[1]=p*w+v*T+_*H,c[4]=p*x+v*D+_*L,c[7]=p*y+v*U+_*O,c[2]=g*w+M*T+A*H,c[5]=g*x+M*D+A*L,c[8]=g*y+M*U+A*O,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],v=e[8];return i*f*v-i*h*p-r*c*v+r*h*m+l*c*p-l*f*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],v=e[8],_=v*f-h*p,g=h*m-v*c,M=p*c-f*m,A=i*_+r*g+l*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=_*w,e[1]=(l*p-v*r)*w,e[2]=(h*r-l*f)*w,e[3]=g*w,e[4]=(v*i-l*m)*w,e[5]=(l*c-h*i)*w,e[6]=M*w,e[7]=(r*m-p*i)*w,e[8]=(f*i-r*c)*w,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,f,h){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*f+p*h)+f+e,-l*p,l*m,-l*(-p*f+m*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(Id.makeScale(e,i)),this}rotate(e){return this.premultiply(Id.makeRotation(-e)),this}translate(e,i){return this.premultiply(Id.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Tp.prototype.isMatrix3=!0;let st=Tp;const Id=new st,F_=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),z_=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Mb(){const s={enabled:!0,workingColorSpace:ru,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Bt&&(l.r=ba(l.r),l.g=ba(l.g),l.b=ba(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Bt&&(l.r=Gs(l.r),l.g=Gs(l.g),l.b=Gs(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===fr?su:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Jh("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Jh("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[ru]:{primaries:e,whitePoint:r,transfer:su,toXYZ:F_,fromXYZ:z_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:vi},outputColorSpaceConfig:{drawingBufferColorSpace:vi}},[vi]:{primaries:e,whitePoint:r,transfer:Bt,toXYZ:F_,fromXYZ:z_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:vi}}}),s}const Mt=Mb();function ba(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Gs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ts;class Eb{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Ts===void 0&&(Ts=lu("canvas")),Ts.width=e.width,Ts.height=e.height;const l=Ts.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=Ts}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=lu("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=ba(c[f]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ba(i[r]/255)*255):i[r]=ba(i[r]);return{data:i,width:e.width,height:e.height}}else return nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let bb=0;class Sp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bb++}),this.uuid=cl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(Fd(l[f].image)):c.push(Fd(l[f]))}else c=Fd(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function Fd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Eb.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(nt("Texture: Unable to serialize Texture."),{})}let Ab=0;const zd=new ne;class Bn extends qr{constructor(e=Bn.DEFAULT_IMAGE,i=Bn.DEFAULT_MAPPING,r=Ma,l=Ma,c=In,f=Hr,h=Ni,m=Si,p=Bn.DEFAULT_ANISOTROPY,v=fr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ab++}),this.uuid=cl(),this.name="",this.source=new Sp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Ut(0,0),this.repeat=new Ut(1,1),this.center=new Ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(zd).x}get height(){return this.source.getSize(zd).y}get depth(){return this.source.getSize(zd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){nt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){nt(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ex)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Sh:e.x=e.x-Math.floor(e.x);break;case Ma:e.x=e.x<0?0:1;break;case yh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Sh:e.y=e.y-Math.floor(e.y);break;case Ma:e.y=e.y<0?0:1;break;case yh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=ex;Bn.DEFAULT_ANISOTROPY=1;const Rp=class Rp{constructor(e=0,i=0,r=0,l=1){this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*i+f[4]*r+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*r+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*r+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*r+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const m=e.elements,p=m[0],v=m[4],_=m[8],g=m[1],M=m[5],A=m[9],w=m[2],x=m[6],y=m[10];if(Math.abs(v-g)<.01&&Math.abs(_-w)<.01&&Math.abs(A-x)<.01){if(Math.abs(v+g)<.1&&Math.abs(_+w)<.1&&Math.abs(A+x)<.1&&Math.abs(p+M+y-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const D=(p+1)/2,U=(M+1)/2,H=(y+1)/2,L=(v+g)/4,O=(_+w)/4,b=(A+x)/4;return D>U&&D>H?D<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(D),l=L/r,c=O/r):U>H?U<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(U),r=L/l,c=b/l):H<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(H),r=O/c,l=b/c),this.set(r,l,c,i),this}let T=Math.sqrt((x-A)*(x-A)+(_-w)*(_-w)+(g-v)*(g-v));return Math.abs(T)<.001&&(T=1),this.x=(x-A)/T,this.y=(_-w)/T,this.z=(g-v)/T,this.w=Math.acos((p+M+y-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Et(this.x,e.x,i.x),this.y=Et(this.y,e.y,i.y),this.z=Et(this.z,e.z,i.z),this.w=Et(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Et(this.x,e,i),this.y=Et(this.y,e,i),this.z=Et(this.z,e,i),this.w=Et(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Rp.prototype.isVector4=!0;let un=Rp;class Tb extends qr{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new un(0,0,e,i),this.scissorTest=!1,this.viewport=new un(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:r.depth},c=new Bn(l),f=r.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:In,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Sp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qi extends Tb{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class cx extends Bn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Ma,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Rb extends Bn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Ma,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const cu=class cu{constructor(e,i,r,l,c,f,h,m,p,v,_,g,M,A,w,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,f,h,m,p,v,_,g,M,A,w,x)}set(e,i,r,l,c,f,h,m,p,v,_,g,M,A,w,x){const y=this.elements;return y[0]=e,y[4]=i,y[8]=r,y[12]=l,y[1]=c,y[5]=f,y[9]=h,y[13]=m,y[2]=p,y[6]=v,y[10]=_,y[14]=g,y[3]=M,y[7]=A,y[11]=w,y[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new cu().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,r=e.elements,l=1/Rs.setFromMatrixColumn(e,0).length(),c=1/Rs.setFromMatrixColumn(e,1).length(),f=1/Rs.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*f,i[9]=r[9]*f,i[10]=r[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,f=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),v=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const g=f*v,M=f*_,A=h*v,w=h*_;i[0]=m*v,i[4]=-m*_,i[8]=p,i[1]=M+A*p,i[5]=g-w*p,i[9]=-h*m,i[2]=w-g*p,i[6]=A+M*p,i[10]=f*m}else if(e.order==="YXZ"){const g=m*v,M=m*_,A=p*v,w=p*_;i[0]=g+w*h,i[4]=A*h-M,i[8]=f*p,i[1]=f*_,i[5]=f*v,i[9]=-h,i[2]=M*h-A,i[6]=w+g*h,i[10]=f*m}else if(e.order==="ZXY"){const g=m*v,M=m*_,A=p*v,w=p*_;i[0]=g-w*h,i[4]=-f*_,i[8]=A+M*h,i[1]=M+A*h,i[5]=f*v,i[9]=w-g*h,i[2]=-f*p,i[6]=h,i[10]=f*m}else if(e.order==="ZYX"){const g=f*v,M=f*_,A=h*v,w=h*_;i[0]=m*v,i[4]=A*p-M,i[8]=g*p+w,i[1]=m*_,i[5]=w*p+g,i[9]=M*p-A,i[2]=-p,i[6]=h*m,i[10]=f*m}else if(e.order==="YZX"){const g=f*m,M=f*p,A=h*m,w=h*p;i[0]=m*v,i[4]=w-g*_,i[8]=A*_+M,i[1]=_,i[5]=f*v,i[9]=-h*v,i[2]=-p*v,i[6]=M*_+A,i[10]=g-w*_}else if(e.order==="XZY"){const g=f*m,M=f*p,A=h*m,w=h*p;i[0]=m*v,i[4]=-_,i[8]=p*v,i[1]=g*_+w,i[5]=f*v,i[9]=M*_-A,i[2]=A*_-M,i[6]=h*v,i[10]=w*_+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Cb,e,wb)}lookAt(e,i,r){const l=this.elements;return ai.subVectors(e,i),ai.lengthSq()===0&&(ai.z=1),ai.normalize(),rr.crossVectors(r,ai),rr.lengthSq()===0&&(Math.abs(r.z)===1?ai.x+=1e-4:ai.z+=1e-4,ai.normalize(),rr.crossVectors(r,ai)),rr.normalize(),bc.crossVectors(ai,rr),l[0]=rr.x,l[4]=bc.x,l[8]=ai.x,l[1]=rr.y,l[5]=bc.y,l[9]=ai.y,l[2]=rr.z,l[6]=bc.z,l[10]=ai.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,f=r[0],h=r[4],m=r[8],p=r[12],v=r[1],_=r[5],g=r[9],M=r[13],A=r[2],w=r[6],x=r[10],y=r[14],T=r[3],D=r[7],U=r[11],H=r[15],L=l[0],O=l[4],b=l[8],P=l[12],W=l[1],z=l[5],Z=l[9],ue=l[13],pe=l[2],X=l[6],I=l[10],B=l[14],le=l[3],ge=l[7],Ee=l[11],F=l[15];return c[0]=f*L+h*W+m*pe+p*le,c[4]=f*O+h*z+m*X+p*ge,c[8]=f*b+h*Z+m*I+p*Ee,c[12]=f*P+h*ue+m*B+p*F,c[1]=v*L+_*W+g*pe+M*le,c[5]=v*O+_*z+g*X+M*ge,c[9]=v*b+_*Z+g*I+M*Ee,c[13]=v*P+_*ue+g*B+M*F,c[2]=A*L+w*W+x*pe+y*le,c[6]=A*O+w*z+x*X+y*ge,c[10]=A*b+w*Z+x*I+y*Ee,c[14]=A*P+w*ue+x*B+y*F,c[3]=T*L+D*W+U*pe+H*le,c[7]=T*O+D*z+U*X+H*ge,c[11]=T*b+D*Z+U*I+H*Ee,c[15]=T*P+D*ue+U*B+H*F,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],f=e[1],h=e[5],m=e[9],p=e[13],v=e[2],_=e[6],g=e[10],M=e[14],A=e[3],w=e[7],x=e[11],y=e[15],T=m*M-p*g,D=h*M-p*_,U=h*g-m*_,H=f*M-p*v,L=f*g-m*v,O=f*_-h*v;return i*(w*T-x*D+y*U)-r*(A*T-x*H+y*L)+l*(A*D-w*H+y*O)-c*(A*U-w*L+x*O)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],v=e[8],_=e[9],g=e[10],M=e[11],A=e[12],w=e[13],x=e[14],y=e[15],T=i*h-r*f,D=i*m-l*f,U=i*p-c*f,H=r*m-l*h,L=r*p-c*h,O=l*p-c*m,b=v*w-_*A,P=v*x-g*A,W=v*y-M*A,z=_*x-g*w,Z=_*y-M*w,ue=g*y-M*x,pe=T*ue-D*Z+U*z+H*W-L*P+O*b;if(pe===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const X=1/pe;return e[0]=(h*ue-m*Z+p*z)*X,e[1]=(l*Z-r*ue-c*z)*X,e[2]=(w*O-x*L+y*H)*X,e[3]=(g*L-_*O-M*H)*X,e[4]=(m*W-f*ue-p*P)*X,e[5]=(i*ue-l*W+c*P)*X,e[6]=(x*U-A*O-y*D)*X,e[7]=(v*O-g*U+M*D)*X,e[8]=(f*Z-h*W+p*b)*X,e[9]=(r*W-i*Z-c*b)*X,e[10]=(A*L-w*U+y*T)*X,e[11]=(_*U-v*L-M*T)*X,e[12]=(h*P-f*z-m*b)*X,e[13]=(i*z-r*P+l*b)*X,e[14]=(w*D-A*H-x*T)*X,e[15]=(v*H-_*D+g*T)*X,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,f=e.x,h=e.y,m=e.z,p=c*f,v=c*h;return this.set(p*f+r,p*h-l*m,p*m+l*h,0,p*h+l*m,v*h+r,v*m-l*f,0,p*m-l*h,v*m+l*f,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,f){return this.set(1,r,c,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,f=i._y,h=i._z,m=i._w,p=c+c,v=f+f,_=h+h,g=c*p,M=c*v,A=c*_,w=f*v,x=f*_,y=h*_,T=m*p,D=m*v,U=m*_,H=r.x,L=r.y,O=r.z;return l[0]=(1-(w+y))*H,l[1]=(M+U)*H,l[2]=(A-D)*H,l[3]=0,l[4]=(M-U)*L,l[5]=(1-(g+y))*L,l[6]=(x+T)*L,l[7]=0,l[8]=(A+D)*O,l[9]=(x-T)*O,l[10]=(1-(g+w))*O,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinant();if(c===0)return r.set(1,1,1),i.identity(),this;let f=Rs.set(l[0],l[1],l[2]).length();const h=Rs.set(l[4],l[5],l[6]).length(),m=Rs.set(l[8],l[9],l[10]).length();c<0&&(f=-f),Ci.copy(this);const p=1/f,v=1/h,_=1/m;return Ci.elements[0]*=p,Ci.elements[1]*=p,Ci.elements[2]*=p,Ci.elements[4]*=v,Ci.elements[5]*=v,Ci.elements[6]*=v,Ci.elements[8]*=_,Ci.elements[9]*=_,Ci.elements[10]*=_,i.setFromRotationMatrix(Ci),r.x=f,r.y=h,r.z=m,this}makePerspective(e,i,r,l,c,f,h=Xi,m=!1){const p=this.elements,v=2*c/(i-e),_=2*c/(r-l),g=(i+e)/(i-e),M=(r+l)/(r-l);let A,w;if(m)A=c/(f-c),w=f*c/(f-c);else if(h===Xi)A=-(f+c)/(f-c),w=-2*f*c/(f-c);else if(h===ou)A=-f/(f-c),w=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=_,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=A,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,c,f,h=Xi,m=!1){const p=this.elements,v=2/(i-e),_=2/(r-l),g=-(i+e)/(i-e),M=-(r+l)/(r-l);let A,w;if(m)A=1/(f-c),w=f/(f-c);else if(h===Xi)A=-2/(f-c),w=-(f+c)/(f-c);else if(h===ou)A=-1/(f-c),w=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=_,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=A,p[14]=w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}};cu.prototype.isMatrix4=!0;let xn=cu;const Rs=new ne,Ci=new xn,Cb=new ne(0,0,0),wb=new ne(1,1,1),rr=new ne,bc=new ne,ai=new ne,B_=new xn,H_=new Ks;class Xr{constructor(e=0,i=0,r=0,l=Xr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],f=l[4],h=l[8],m=l[1],p=l[5],v=l[9],_=l[2],g=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Et(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(Et(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Et(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(Et(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-Et(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-v,M),this._y=0);break;default:nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return B_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(B_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return H_.setFromEuler(this),this.setFromQuaternion(H_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xr.DEFAULT_ORDER="XYZ";class ux{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Db=0;const G_=new ne,Cs=new Ks,ga=new xn,Ac=new ne,Zo=new ne,Ub=new ne,Nb=new Ks,V_=new ne(1,0,0),k_=new ne(0,1,0),X_=new ne(0,0,1),W_={type:"added"},Lb={type:"removed"},ws={type:"childadded",child:null},Bd={type:"childremoved",child:null};class si extends qr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Db++}),this.uuid=cl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=si.DEFAULT_UP.clone();const e=new ne,i=new Xr,r=new Ks,l=new ne(1,1,1);function c(){r.setFromEuler(i,!1)}function f(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new xn},normalMatrix:{value:new st}}),this.matrix=new xn,this.matrixWorld=new xn,this.matrixAutoUpdate=si.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=si.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ux,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Cs.setFromAxisAngle(e,i),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(e,i){return Cs.setFromAxisAngle(e,i),this.quaternion.premultiply(Cs),this}rotateX(e){return this.rotateOnAxis(V_,e)}rotateY(e){return this.rotateOnAxis(k_,e)}rotateZ(e){return this.rotateOnAxis(X_,e)}translateOnAxis(e,i){return G_.copy(e).applyQuaternion(this.quaternion),this.position.add(G_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(V_,e)}translateY(e){return this.translateOnAxis(k_,e)}translateZ(e){return this.translateOnAxis(X_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ga.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Ac.copy(e):Ac.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ga.lookAt(Zo,Ac,this.up):ga.lookAt(Ac,Zo,this.up),this.quaternion.setFromRotationMatrix(ga),l&&(ga.extractRotation(l.matrixWorld),Cs.setFromRotationMatrix(ga),this.quaternion.premultiply(Cs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(bt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(W_),ws.child=e,this.dispatchEvent(ws),ws.child=null):bt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(Lb),Bd.child=e,this.dispatchEvent(Bd),Bd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ga.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ga.multiply(e.parent.matrixWorld)),e.applyMatrix4(ga),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(W_),ws.child=e,this.dispatchEvent(ws),ws.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const f=this.children[r].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,e,Ub),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,Nb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,r=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*r-c[8]*l,c[13]+=r-c[1]*i-c[5]*r-c[9]*l,c[14]+=l-c[2]*i-c[6]*r-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const _=m[p];c(e.shapes,_)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(e.materials,this.material[m]));l.material=h}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(e.animations,m))}}if(i){const h=f(e.geometries),m=f(e.materials),p=f(e.textures),v=f(e.images),_=f(e.shapes),g=f(e.skeletons),M=f(e.animations),A=f(e.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),v.length>0&&(r.images=v),_.length>0&&(r.shapes=_),g.length>0&&(r.skeletons=g),M.length>0&&(r.animations=M),A.length>0&&(r.nodes=A)}return r.object=l,r;function f(h){const m=[];for(const p in h){const v=h[p];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}si.DEFAULT_UP=new ne(0,1,0);si.DEFAULT_MATRIX_AUTO_UPDATE=!0;si.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Tc extends si{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ob={type:"move"};class Hd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ne,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ne),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ne,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ne,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,f=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){f=!0;for(const w of e.hand.values()){const x=i.getJointPose(w,r),y=this._getHandJoint(p,w);x!==null&&(y.matrix.fromArray(x.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=x.radius),y.visible=x!==null}const v=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],g=v.position.distanceTo(_.position),M=.02,A=.005;p.inputState.pinching&&g>M+A?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&g<=M-A&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(Ob)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Tc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const fx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},sr={h:0,s:0,l:0},Rc={h:0,s:0,l:0};function Gd(s,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(e-s)*6*i:i<1/2?e:i<2/3?s+(e-s)*6*(2/3-i):s}class Dt{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=vi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Mt.workingColorSpace){return this.r=e,this.g=i,this.b=r,Mt.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Mt.workingColorSpace){if(e=yb(e,1),i=Et(i,0,1),r=Et(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,f=2*r-c;this.r=Gd(f,c,e+1/3),this.g=Gd(f,c,e),this.b=Gd(f,c,e-1/3)}return Mt.colorSpaceToWorking(this,l),this}setStyle(e,i=vi){function r(c){c!==void 0&&parseFloat(c)<1&&nt("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:nt("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);nt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=vi){const r=fx[e.toLowerCase()];return r!==void 0?this.setHex(r,i):nt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ba(e.r),this.g=ba(e.g),this.b=ba(e.b),this}copyLinearToSRGB(e){return this.r=Gs(e.r),this.g=Gs(e.g),this.b=Gs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vi){return Mt.workingToColorSpace(Pn.copy(this),e),Math.round(Et(Pn.r*255,0,255))*65536+Math.round(Et(Pn.g*255,0,255))*256+Math.round(Et(Pn.b*255,0,255))}getHexString(e=vi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Mt.workingColorSpace){Mt.workingToColorSpace(Pn.copy(this),i);const r=Pn.r,l=Pn.g,c=Pn.b,f=Math.max(r,l,c),h=Math.min(r,l,c);let m,p;const v=(h+f)/2;if(h===f)m=0,p=0;else{const _=f-h;switch(p=v<=.5?_/(f+h):_/(2-f-h),f){case r:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-r)/_+2;break;case c:m=(r-l)/_+4;break}m/=6}return e.h=m,e.s=p,e.l=v,e}getRGB(e,i=Mt.workingColorSpace){return Mt.workingToColorSpace(Pn.copy(this),i),e.r=Pn.r,e.g=Pn.g,e.b=Pn.b,e}getStyle(e=vi){Mt.workingToColorSpace(Pn.copy(this),e);const i=Pn.r,r=Pn.g,l=Pn.b;return e!==vi?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(sr),this.setHSL(sr.h+e,sr.s+i,sr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(sr),e.getHSL(Rc);const r=Od(sr.h,Rc.h,i),l=Od(sr.s,Rc.s,i),c=Od(sr.l,Rc.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new Dt;Dt.NAMES=fx;class dx extends si{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xr,this.environmentIntensity=1,this.environmentRotation=new Xr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const wi=new ne,_a=new ne,Vd=new ne,va=new ne,Ds=new ne,Us=new ne,q_=new ne,kd=new ne,Xd=new ne,Wd=new ne,qd=new un,Yd=new un,jd=new un;class Ui{constructor(e=new ne,i=new ne,r=new ne){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),wi.subVectors(e,i),l.cross(wi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){wi.subVectors(l,i),_a.subVectors(r,i),Vd.subVectors(e,i);const f=wi.dot(wi),h=wi.dot(_a),m=wi.dot(Vd),p=_a.dot(_a),v=_a.dot(Vd),_=f*p-h*h;if(_===0)return c.set(0,0,0),null;const g=1/_,M=(p*m-h*v)*g,A=(f*v-h*m)*g;return c.set(1-M-A,A,M)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,va)===null?!1:va.x>=0&&va.y>=0&&va.x+va.y<=1}static getInterpolation(e,i,r,l,c,f,h,m){return this.getBarycoord(e,i,r,l,va)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,va.x),m.addScaledVector(f,va.y),m.addScaledVector(h,va.z),m)}static getInterpolatedAttribute(e,i,r,l,c,f){return qd.setScalar(0),Yd.setScalar(0),jd.setScalar(0),qd.fromBufferAttribute(e,i),Yd.fromBufferAttribute(e,r),jd.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(qd,c.x),f.addScaledVector(Yd,c.y),f.addScaledVector(jd,c.z),f}static isFrontFacing(e,i,r,l){return wi.subVectors(r,i),_a.subVectors(e,i),wi.cross(_a).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wi.subVectors(this.c,this.b),_a.subVectors(this.a,this.b),wi.cross(_a).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ui.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return Ui.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return Ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let f,h;Ds.subVectors(l,r),Us.subVectors(c,r),kd.subVectors(e,r);const m=Ds.dot(kd),p=Us.dot(kd);if(m<=0&&p<=0)return i.copy(r);Xd.subVectors(e,l);const v=Ds.dot(Xd),_=Us.dot(Xd);if(v>=0&&_<=v)return i.copy(l);const g=m*_-v*p;if(g<=0&&m>=0&&v<=0)return f=m/(m-v),i.copy(r).addScaledVector(Ds,f);Wd.subVectors(e,c);const M=Ds.dot(Wd),A=Us.dot(Wd);if(A>=0&&M<=A)return i.copy(c);const w=M*p-m*A;if(w<=0&&p>=0&&A<=0)return h=p/(p-A),i.copy(r).addScaledVector(Us,h);const x=v*A-M*_;if(x<=0&&_-v>=0&&M-A>=0)return q_.subVectors(c,l),h=(_-v)/(_-v+(M-A)),i.copy(l).addScaledVector(q_,h);const y=1/(x+w+g);return f=w*y,h=g*y,i.copy(r).addScaledVector(Ds,f).addScaledVector(Us,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ul{constructor(e=new ne(1/0,1/0,1/0),i=new ne(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Di.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Di.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Di.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)e.isMesh===!0?e.getVertexPosition(f,Di):Di.fromBufferAttribute(c,f),Di.applyMatrix4(e.matrixWorld),this.expandByPoint(Di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Cc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Cc.copy(r.boundingBox)),Cc.applyMatrix4(e.matrixWorld),this.union(Cc)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Di),Di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ko),wc.subVectors(this.max,Ko),Ns.subVectors(e.a,Ko),Ls.subVectors(e.b,Ko),Os.subVectors(e.c,Ko),or.subVectors(Ls,Ns),lr.subVectors(Os,Ls),Lr.subVectors(Ns,Os);let i=[0,-or.z,or.y,0,-lr.z,lr.y,0,-Lr.z,Lr.y,or.z,0,-or.x,lr.z,0,-lr.x,Lr.z,0,-Lr.x,-or.y,or.x,0,-lr.y,lr.x,0,-Lr.y,Lr.x,0];return!Zd(i,Ns,Ls,Os,wc)||(i=[1,0,0,0,1,0,0,0,1],!Zd(i,Ns,Ls,Os,wc))?!1:(Dc.crossVectors(or,lr),i=[Dc.x,Dc.y,Dc.z],Zd(i,Ns,Ls,Os,wc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const xa=[new ne,new ne,new ne,new ne,new ne,new ne,new ne,new ne],Di=new ne,Cc=new ul,Ns=new ne,Ls=new ne,Os=new ne,or=new ne,lr=new ne,Lr=new ne,Ko=new ne,wc=new ne,Dc=new ne,Or=new ne;function Zd(s,e,i,r,l){for(let c=0,f=s.length-3;c<=f;c+=3){Or.fromArray(s,c);const h=l.x*Math.abs(Or.x)+l.y*Math.abs(Or.y)+l.z*Math.abs(Or.z),m=e.dot(Or),p=i.dot(Or),v=r.dot(Or);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>h)return!1}return!0}const gn=new ne,Uc=new Ut;let Pb=0;class Yi extends qr{constructor(e,i,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Pb++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=N_,this.updateRanges=[],this.gpuType=ki,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Uc.fromBufferAttribute(this,i),Uc.applyMatrix3(e),this.setXY(i,Uc.x,Uc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)gn.fromBufferAttribute(this,i),gn.applyMatrix3(e),this.setXYZ(i,gn.x,gn.y,gn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)gn.fromBufferAttribute(this,i),gn.applyMatrix4(e),this.setXYZ(i,gn.x,gn.y,gn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)gn.fromBufferAttribute(this,i),gn.applyNormalMatrix(e),this.setXYZ(i,gn.x,gn.y,gn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)gn.fromBufferAttribute(this,i),gn.transformDirection(e),this.setXYZ(i,gn.x,gn.y,gn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=jo(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=qn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=jo(i,this.array)),i}setX(e,i){return this.normalized&&(i=qn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=jo(i,this.array)),i}setY(e,i){return this.normalized&&(i=qn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=jo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=qn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=jo(i,this.array)),i}setW(e,i){return this.normalized&&(i=qn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=qn(i,this.array),r=qn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=qn(i,this.array),r=qn(r,this.array),l=qn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=qn(i,this.array),r=qn(r,this.array),l=qn(l,this.array),c=qn(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==N_&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class hx extends Yi{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class px extends Yi{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class yi extends Yi{constructor(e,i,r){super(new Float32Array(e),i,r)}}const Ib=new ul,Qo=new ne,Kd=new ne;class yp{constructor(e=new ne,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):Ib.setFromPoints(e).getCenter(r);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qo.subVectors(e,this.center);const i=Qo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Qo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Kd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qo.copy(e.center).add(Kd)),this.expandByPoint(Qo.copy(e.center).sub(Kd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Fb=0;const _i=new xn,Qd=new si,Ps=new ne,ri=new ul,Jo=new ul,En=new ne;class Qi extends qr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fb++}),this.uuid=cl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_b(e)?px:hx)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new st().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _i.makeRotationFromQuaternion(e),this.applyMatrix4(_i),this}rotateX(e){return _i.makeRotationX(e),this.applyMatrix4(_i),this}rotateY(e){return _i.makeRotationY(e),this.applyMatrix4(_i),this}rotateZ(e){return _i.makeRotationZ(e),this.applyMatrix4(_i),this}translate(e,i,r){return _i.makeTranslation(e,i,r),this.applyMatrix4(_i),this}scale(e,i,r){return _i.makeScale(e,i,r),this.applyMatrix4(_i),this}lookAt(e){return Qd.lookAt(e),Qd.updateMatrix(),this.applyMatrix4(Qd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ps).negate(),this.translate(Ps.x,Ps.y,Ps.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new yi(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ul);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){bt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ne(-1/0,-1/0,-1/0),new ne(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];ri.setFromBufferAttribute(c),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&bt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yp);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){bt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ne,1/0);return}if(e){const r=this.boundingSphere.center;if(ri.setFromBufferAttribute(e),i)for(let c=0,f=i.length;c<f;c++){const h=i[c];Jo.setFromBufferAttribute(h),this.morphTargetsRelative?(En.addVectors(ri.min,Jo.min),ri.expandByPoint(En),En.addVectors(ri.max,Jo.max),ri.expandByPoint(En)):(ri.expandByPoint(Jo.min),ri.expandByPoint(Jo.max))}ri.getCenter(r);let l=0;for(let c=0,f=e.count;c<f;c++)En.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(En));if(i)for(let c=0,f=i.length;c<f;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,v=h.count;p<v;p++)En.fromBufferAttribute(h,p),m&&(Ps.fromBufferAttribute(e,p),En.add(Ps)),l=Math.max(l,r.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&bt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){bt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yi(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),h=[],m=[];for(let b=0;b<r.count;b++)h[b]=new ne,m[b]=new ne;const p=new ne,v=new ne,_=new ne,g=new Ut,M=new Ut,A=new Ut,w=new ne,x=new ne;function y(b,P,W){p.fromBufferAttribute(r,b),v.fromBufferAttribute(r,P),_.fromBufferAttribute(r,W),g.fromBufferAttribute(c,b),M.fromBufferAttribute(c,P),A.fromBufferAttribute(c,W),v.sub(p),_.sub(p),M.sub(g),A.sub(g);const z=1/(M.x*A.y-A.x*M.y);isFinite(z)&&(w.copy(v).multiplyScalar(A.y).addScaledVector(_,-M.y).multiplyScalar(z),x.copy(_).multiplyScalar(M.x).addScaledVector(v,-A.x).multiplyScalar(z),h[b].add(w),h[P].add(w),h[W].add(w),m[b].add(x),m[P].add(x),m[W].add(x))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let b=0,P=T.length;b<P;++b){const W=T[b],z=W.start,Z=W.count;for(let ue=z,pe=z+Z;ue<pe;ue+=3)y(e.getX(ue+0),e.getX(ue+1),e.getX(ue+2))}const D=new ne,U=new ne,H=new ne,L=new ne;function O(b){H.fromBufferAttribute(l,b),L.copy(H);const P=h[b];D.copy(P),D.sub(H.multiplyScalar(H.dot(P))).normalize(),U.crossVectors(L,P);const z=U.dot(m[b])<0?-1:1;f.setXYZW(b,D.x,D.y,D.z,z)}for(let b=0,P=T.length;b<P;++b){const W=T[b],z=W.start,Z=W.count;for(let ue=z,pe=z+Z;ue<pe;ue+=3)O(e.getX(ue+0)),O(e.getX(ue+1)),O(e.getX(ue+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Yi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let g=0,M=r.count;g<M;g++)r.setXYZ(g,0,0,0);const l=new ne,c=new ne,f=new ne,h=new ne,m=new ne,p=new ne,v=new ne,_=new ne;if(e)for(let g=0,M=e.count;g<M;g+=3){const A=e.getX(g+0),w=e.getX(g+1),x=e.getX(g+2);l.fromBufferAttribute(i,A),c.fromBufferAttribute(i,w),f.fromBufferAttribute(i,x),v.subVectors(f,c),_.subVectors(l,c),v.cross(_),h.fromBufferAttribute(r,A),m.fromBufferAttribute(r,w),p.fromBufferAttribute(r,x),h.add(v),m.add(v),p.add(v),r.setXYZ(A,h.x,h.y,h.z),r.setXYZ(w,m.x,m.y,m.z),r.setXYZ(x,p.x,p.y,p.z)}else for(let g=0,M=i.count;g<M;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),f.fromBufferAttribute(i,g+2),v.subVectors(f,c),_.subVectors(l,c),v.cross(_),r.setXYZ(g+0,v.x,v.y,v.z),r.setXYZ(g+1,v.x,v.y,v.z),r.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)En.fromBufferAttribute(e,i),En.normalize(),e.setXYZ(i,En.x,En.y,En.z)}toNonIndexed(){function e(h,m){const p=h.array,v=h.itemSize,_=h.normalized,g=new p.constructor(m.length*v);let M=0,A=0;for(let w=0,x=m.length;w<x;w++){h.isInterleavedBufferAttribute?M=m[w]*h.data.stride+h.offset:M=m[w]*v;for(let y=0;y<v;y++)g[A++]=p[M++]}return new Yi(g,v,_)}if(this.index===null)return nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Qi,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,r);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let v=0,_=p.length;v<_;v++){const g=p[v],M=e(g,r);m.push(M)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,m=f.length;h<m;h++){const p=f[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let _=0,g=p.length;_<g;_++){const M=p[_];v.push(M.toJSON(e.data))}v.length>0&&(l[m]=v,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(i))}const c=e.morphAttributes;for(const p in c){const v=[],_=c[p];for(let g=0,M=_.length;g<M;g++)v.push(_[g].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let p=0,v=f.length;p<v;p++){const _=f[p];this.addGroup(_.start,_.count,_.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let zb=0;class hu extends qr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zb++}),this.uuid=cl(),this.name="",this.type="Material",this.blending=Hs,this.side=hr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fh,this.blendDst=dh,this.blendEquation=zr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Dt(0,0,0),this.blendAlpha=0,this.depthFunc=Vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=U_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=As,this.stencilZFail=As,this.stencilZPass=As,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){nt(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){nt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Hs&&(r.blending=this.blending),this.side!==hr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==fh&&(r.blendSrc=this.blendSrc),this.blendDst!==dh&&(r.blendDst=this.blendDst),this.blendEquation!==zr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Vs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==U_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==As&&(r.stencilFail=this.stencilFail),this.stencilZFail!==As&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==As&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const f=[];for(const h in c){const m=c[h];delete m.metadata,f.push(m)}return f}if(i){const c=l(e.textures),f=l(e.images);c.length>0&&(r.textures=c),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Sa=new ne,Jd=new ne,Nc=new ne,cr=new ne,$d=new ne,Lc=new ne,eh=new ne;class Bb{constructor(e=new ne,i=new ne(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Sa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Sa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Sa.copy(this.origin).addScaledVector(this.direction,i),Sa.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Jd.copy(e).add(i).multiplyScalar(.5),Nc.copy(i).sub(e).normalize(),cr.copy(this.origin).sub(Jd);const c=e.distanceTo(i)*.5,f=-this.direction.dot(Nc),h=cr.dot(this.direction),m=-cr.dot(Nc),p=cr.lengthSq(),v=Math.abs(1-f*f);let _,g,M,A;if(v>0)if(_=f*m-h,g=f*h-m,A=c*v,_>=0)if(g>=-A)if(g<=A){const w=1/v;_*=w,g*=w,M=_*(_+f*g+2*h)+g*(f*_+g+2*m)+p}else g=c,_=Math.max(0,-(f*g+h)),M=-_*_+g*(g+2*m)+p;else g=-c,_=Math.max(0,-(f*g+h)),M=-_*_+g*(g+2*m)+p;else g<=-A?(_=Math.max(0,-(-f*c+h)),g=_>0?-c:Math.min(Math.max(-c,-m),c),M=-_*_+g*(g+2*m)+p):g<=A?(_=0,g=Math.min(Math.max(-c,-m),c),M=g*(g+2*m)+p):(_=Math.max(0,-(f*c+h)),g=_>0?c:Math.min(Math.max(-c,-m),c),M=-_*_+g*(g+2*m)+p);else g=f>0?-c:c,_=Math.max(0,-(f*g+h)),M=-_*_+g*(g+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Jd).addScaledVector(Nc,g),M}intersectSphere(e,i){Sa.subVectors(e.center,this.origin);const r=Sa.dot(this.direction),l=Sa.dot(Sa)-r*r,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=r-f,m=r+f;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,f,h,m;const p=1/this.direction.x,v=1/this.direction.y,_=1/this.direction.z,g=this.origin;return p>=0?(r=(e.min.x-g.x)*p,l=(e.max.x-g.x)*p):(r=(e.max.x-g.x)*p,l=(e.min.x-g.x)*p),v>=0?(c=(e.min.y-g.y)*v,f=(e.max.y-g.y)*v):(c=(e.max.y-g.y)*v,f=(e.min.y-g.y)*v),r>f||c>l||((c>r||isNaN(r))&&(r=c),(f<l||isNaN(l))&&(l=f),_>=0?(h=(e.min.z-g.z)*_,m=(e.max.z-g.z)*_):(h=(e.max.z-g.z)*_,m=(e.min.z-g.z)*_),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Sa)!==null}intersectTriangle(e,i,r,l,c){$d.subVectors(i,e),Lc.subVectors(r,e),eh.crossVectors($d,Lc);let f=this.direction.dot(eh),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;cr.subVectors(this.origin,e);const m=h*this.direction.dot(Lc.crossVectors(cr,Lc));if(m<0)return null;const p=h*this.direction.dot($d.cross(cr));if(p<0||m+p>f)return null;const v=-h*cr.dot(eh);return v<0?null:this.at(v/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xs extends hu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xr,this.combine=qv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Y_=new xn,Pr=new Bb,Oc=new yp,j_=new ne,Pc=new ne,Ic=new ne,Fc=new ne,th=new ne,zc=new ne,Z_=new ne,Bc=new ne;class oi extends si{constructor(e=new Qi,i=new Xs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,f=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(c&&h){zc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const v=h[m],_=c[m];v!==0&&(th.fromBufferAttribute(_,e),f?zc.addScaledVector(th,v):zc.addScaledVector(th.sub(i),v))}i.add(zc)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Oc.copy(r.boundingSphere),Oc.applyMatrix4(c),Pr.copy(e.ray).recast(e.near),!(Oc.containsPoint(Pr.origin)===!1&&(Pr.intersectSphere(Oc,j_)===null||Pr.origin.distanceToSquared(j_)>(e.far-e.near)**2))&&(Y_.copy(c).invert(),Pr.copy(e.ray).applyMatrix4(Y_),!(r.boundingBox!==null&&Pr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Pr)))}_computeIntersections(e,i,r){let l;const c=this.geometry,f=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,v=c.attributes.uv1,_=c.attributes.normal,g=c.groups,M=c.drawRange;if(h!==null)if(Array.isArray(f))for(let A=0,w=g.length;A<w;A++){const x=g[A],y=f[x.materialIndex],T=Math.max(x.start,M.start),D=Math.min(h.count,Math.min(x.start+x.count,M.start+M.count));for(let U=T,H=D;U<H;U+=3){const L=h.getX(U),O=h.getX(U+1),b=h.getX(U+2);l=Hc(this,y,e,r,p,v,_,L,O,b),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),w=Math.min(h.count,M.start+M.count);for(let x=A,y=w;x<y;x+=3){const T=h.getX(x),D=h.getX(x+1),U=h.getX(x+2);l=Hc(this,f,e,r,p,v,_,T,D,U),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let A=0,w=g.length;A<w;A++){const x=g[A],y=f[x.materialIndex],T=Math.max(x.start,M.start),D=Math.min(m.count,Math.min(x.start+x.count,M.start+M.count));for(let U=T,H=D;U<H;U+=3){const L=U,O=U+1,b=U+2;l=Hc(this,y,e,r,p,v,_,L,O,b),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),w=Math.min(m.count,M.start+M.count);for(let x=A,y=w;x<y;x+=3){const T=x,D=x+1,U=x+2;l=Hc(this,f,e,r,p,v,_,T,D,U),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}}}function Hb(s,e,i,r,l,c,f,h){let m;if(e.side===Yn?m=r.intersectTriangle(f,c,l,!0,h):m=r.intersectTriangle(l,c,f,e.side===hr,h),m===null)return null;Bc.copy(h),Bc.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(Bc);return p<i.near||p>i.far?null:{distance:p,point:Bc.clone(),object:s}}function Hc(s,e,i,r,l,c,f,h,m,p){s.getVertexPosition(h,Pc),s.getVertexPosition(m,Ic),s.getVertexPosition(p,Fc);const v=Hb(s,e,i,r,Pc,Ic,Fc,Z_);if(v){const _=new ne;Ui.getBarycoord(Z_,Pc,Ic,Fc,_),l&&(v.uv=Ui.getInterpolatedAttribute(l,h,m,p,_,new Ut)),c&&(v.uv1=Ui.getInterpolatedAttribute(c,h,m,p,_,new Ut)),f&&(v.normal=Ui.getInterpolatedAttribute(f,h,m,p,_,new ne),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const g={a:h,b:m,c:p,normal:new ne,materialIndex:0};Ui.getNormal(Pc,Ic,Fc,g.normal),v.face=g,v.barycoord=_}return v}class Gb extends Bn{constructor(e=null,i=1,r=1,l,c,f,h,m,p=Dn,v=Dn,_,g){super(null,f,h,m,p,v,l,c,_,g),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const nh=new ne,Vb=new ne,kb=new st;class Fr{constructor(e=new ne(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=nh.subVectors(r,i).cross(Vb.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,r=!0){const l=e.delta(nh),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const f=-(e.start.dot(this.normal)+this.constant)/c;return r===!0&&(f<0||f>1)?null:i.copy(e.start).addScaledVector(l,f)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||kb.getNormalMatrix(e),l=this.coplanarPoint(nh).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ir=new yp,Xb=new Ut(.5,.5),Gc=new ne;class mx{constructor(e=new Fr,i=new Fr,r=new Fr,l=new Fr,c=new Fr,f=new Fr){this.planes=[e,i,r,l,c,f]}set(e,i,r,l,c,f){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Xi,r=!1){const l=this.planes,c=e.elements,f=c[0],h=c[1],m=c[2],p=c[3],v=c[4],_=c[5],g=c[6],M=c[7],A=c[8],w=c[9],x=c[10],y=c[11],T=c[12],D=c[13],U=c[14],H=c[15];if(l[0].setComponents(p-f,M-v,y-A,H-T).normalize(),l[1].setComponents(p+f,M+v,y+A,H+T).normalize(),l[2].setComponents(p+h,M+_,y+w,H+D).normalize(),l[3].setComponents(p-h,M-_,y-w,H-D).normalize(),r)l[4].setComponents(m,g,x,U).normalize(),l[5].setComponents(p-m,M-g,y-x,H-U).normalize();else if(l[4].setComponents(p-m,M-g,y-x,H-U).normalize(),i===Xi)l[5].setComponents(p+m,M+g,y+x,H+U).normalize();else if(i===ou)l[5].setComponents(m,g,x,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ir.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ir.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ir)}intersectsSprite(e){Ir.center.set(0,0,0);const i=Xb.distanceTo(e.center);return Ir.radius=.7071067811865476+i,Ir.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ir)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Gc.x=l.normal.x>0?e.max.x:e.min.x,Gc.y=l.normal.y>0?e.max.y:e.min.y,Gc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Gc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class gx extends Bn{constructor(e=[],i=Vr,r,l,c,f,h,m,p,v){super(e,i,r,l,c,f,h,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ws extends Bn{constructor(e,i,r=Zi,l,c,f,h=Dn,m=Dn,p,v=Ra,_=1){if(v!==Ra&&v!==Gr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:i,depth:_};super(g,l,c,f,h,m,v,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Sp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Wb extends Ws{constructor(e,i=Zi,r=Vr,l,c,f=Dn,h=Dn,m,p=Ra){const v={width:e,height:e,depth:1},_=[v,v,v,v,v,v];super(e,e,i,r,l,c,f,h,m,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class _x extends Bn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class fl extends Qi{constructor(e=1,i=1,r=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],v=[],_=[];let g=0,M=0;A("z","y","x",-1,-1,r,i,e,f,c,0),A("z","y","x",1,-1,r,i,-e,f,c,1),A("x","z","y",1,1,e,r,i,l,f,2),A("x","z","y",1,-1,e,r,-i,l,f,3),A("x","y","z",1,-1,e,i,r,l,c,4),A("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new yi(p,3)),this.setAttribute("normal",new yi(v,3)),this.setAttribute("uv",new yi(_,2));function A(w,x,y,T,D,U,H,L,O,b,P){const W=U/O,z=H/b,Z=U/2,ue=H/2,pe=L/2,X=O+1,I=b+1;let B=0,le=0;const ge=new ne;for(let Ee=0;Ee<I;Ee++){const F=Ee*z-ue;for(let $=0;$<X;$++){const Se=$*W-Z;ge[w]=Se*T,ge[x]=F*D,ge[y]=pe,p.push(ge.x,ge.y,ge.z),ge[w]=0,ge[x]=0,ge[y]=L>0?1:-1,v.push(ge.x,ge.y,ge.z),_.push($/O),_.push(1-Ee/b),B+=1}}for(let Ee=0;Ee<b;Ee++)for(let F=0;F<O;F++){const $=g+F+X*Ee,Se=g+F+X*(Ee+1),Re=g+(F+1)+X*(Ee+1),Ue=g+(F+1)+X*Ee;m.push($,Se,Ue),m.push(Se,Re,Ue),le+=6}h.addGroup(M,le,P),M+=le,g+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Mp extends Qi{constructor(e=[],i=[],r=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:i,radius:r,detail:l};const c=[],f=[];h(l),p(r),v(),this.setAttribute("position",new yi(c,3)),this.setAttribute("normal",new yi(c.slice(),3)),this.setAttribute("uv",new yi(f,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function h(T){const D=new ne,U=new ne,H=new ne;for(let L=0;L<i.length;L+=3)M(i[L+0],D),M(i[L+1],U),M(i[L+2],H),m(D,U,H,T)}function m(T,D,U,H){const L=H+1,O=[];for(let b=0;b<=L;b++){O[b]=[];const P=T.clone().lerp(U,b/L),W=D.clone().lerp(U,b/L),z=L-b;for(let Z=0;Z<=z;Z++)Z===0&&b===L?O[b][Z]=P:O[b][Z]=P.clone().lerp(W,Z/z)}for(let b=0;b<L;b++)for(let P=0;P<2*(L-b)-1;P++){const W=Math.floor(P/2);P%2===0?(g(O[b][W+1]),g(O[b+1][W]),g(O[b][W])):(g(O[b][W+1]),g(O[b+1][W+1]),g(O[b+1][W]))}}function p(T){const D=new ne;for(let U=0;U<c.length;U+=3)D.x=c[U+0],D.y=c[U+1],D.z=c[U+2],D.normalize().multiplyScalar(T),c[U+0]=D.x,c[U+1]=D.y,c[U+2]=D.z}function v(){const T=new ne;for(let D=0;D<c.length;D+=3){T.x=c[D+0],T.y=c[D+1],T.z=c[D+2];const U=x(T)/2/Math.PI+.5,H=y(T)/Math.PI+.5;f.push(U,1-H)}A(),_()}function _(){for(let T=0;T<f.length;T+=6){const D=f[T+0],U=f[T+2],H=f[T+4],L=Math.max(D,U,H),O=Math.min(D,U,H);L>.9&&O<.1&&(D<.2&&(f[T+0]+=1),U<.2&&(f[T+2]+=1),H<.2&&(f[T+4]+=1))}}function g(T){c.push(T.x,T.y,T.z)}function M(T,D){const U=T*3;D.x=e[U+0],D.y=e[U+1],D.z=e[U+2]}function A(){const T=new ne,D=new ne,U=new ne,H=new ne,L=new Ut,O=new Ut,b=new Ut;for(let P=0,W=0;P<c.length;P+=9,W+=6){T.set(c[P+0],c[P+1],c[P+2]),D.set(c[P+3],c[P+4],c[P+5]),U.set(c[P+6],c[P+7],c[P+8]),L.set(f[W+0],f[W+1]),O.set(f[W+2],f[W+3]),b.set(f[W+4],f[W+5]),H.copy(T).add(D).add(U).divideScalar(3);const z=x(H);w(L,W+0,T,z),w(O,W+2,D,z),w(b,W+4,U,z)}}function w(T,D,U,H){H<0&&T.x===1&&(f[D]=T.x-1),U.x===0&&U.z===0&&(f[D]=H/2/Math.PI+.5)}function x(T){return Math.atan2(T.z,-T.x)}function y(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mp(e.vertices,e.indices,e.radius,e.detail)}}class qs extends Mp{constructor(e=1,i=0){const r=(1+Math.sqrt(5))/2,l=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],c=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,c,e,i),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new qs(e.radius,e.detail)}}class pu extends Qi{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,f=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,v=m+1,_=e/h,g=i/m,M=[],A=[],w=[],x=[];for(let y=0;y<v;y++){const T=y*g-f;for(let D=0;D<p;D++){const U=D*_-c;A.push(U,-T,0),w.push(0,0,1),x.push(D/h),x.push(1-y/m)}}for(let y=0;y<m;y++)for(let T=0;T<h;T++){const D=T+p*y,U=T+p*(y+1),H=T+1+p*(y+1),L=T+1+p*y;M.push(D,U,L),M.push(U,H,L)}this.setIndex(M),this.setAttribute("position",new yi(A,3)),this.setAttribute("normal",new yi(w,3)),this.setAttribute("uv",new yi(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pu(e.width,e.height,e.widthSegments,e.heightSegments)}}function Ys(s){const e={};for(const i in s){e[i]={};for(const r in s[i]){const l=s[i][r];if(K_(l))l.isRenderTargetTexture?(nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone();else if(Array.isArray(l))if(K_(l[0])){const c=[];for(let f=0,h=l.length;f<h;f++)c[f]=l[f].clone();e[i][r]=c}else e[i][r]=l.slice();else e[i][r]=l}}return e}function zn(s){const e={};for(let i=0;i<s.length;i++){const r=Ys(s[i]);for(const l in r)e[l]=r[l]}return e}function K_(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function qb(s){const e=[];for(let i=0;i<s.length;i++)e.push(s[i].clone());return e}function vx(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}const Yb={clone:Ys,merge:zn};var jb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ki extends hu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jb,this.fragmentShader=Zb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ys(e.uniforms),this.uniformsGroups=qb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Kb extends Ki{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Qb extends hu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Jb extends hu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Vc=new ne,kc=new Ks,Hi=new ne;class xx extends si{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xn,this.projectionMatrix=new xn,this.projectionMatrixInverse=new xn,this.coordinateSystem=Xi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Vc,kc,Hi),Hi.x===1&&Hi.y===1&&Hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vc,kc,Hi.set(1,1,1)).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorld.decompose(Vc,kc,Hi),Hi.x===1&&Hi.y===1&&Hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vc,kc,Hi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ur=new ne,Q_=new Ut,J_=new Ut;class xi extends xx{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=$h*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ld*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $h*2*Math.atan(Math.tan(Ld*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){ur.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ur.x,ur.y).multiplyScalar(-e/ur.z),ur.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(ur.x,ur.y).multiplyScalar(-e/ur.z)}getViewSize(e,i){return this.getViewBounds(e,Q_,J_),i.subVectors(J_,Q_)}setViewOffset(e,i,r,l,c,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Ld*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*r/p,l*=f.width/m,r*=f.height/p}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Ep extends xx{constructor(e=-1,i=1,r=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,f=r+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,h-=v*this.view.offsetY,m=h-v*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Is=-90,Fs=1;class $b extends si{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new xi(Is,Fs,e,i);l.layers=this.layers,this.add(l);const c=new xi(Is,Fs,e,i);c.layers=this.layers,this.add(c);const f=new xi(Is,Fs,e,i);f.layers=this.layers,this.add(f);const h=new xi(Is,Fs,e,i);h.layers=this.layers,this.add(h);const m=new xi(Is,Fs,e,i);m.layers=this.layers,this.add(m);const p=new xi(Is,Fs,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,f,h,m]=i;for(const p of i)this.remove(p);if(e===Xi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===ou)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,m,p,v]=this.children,_=e.getRenderTarget(),g=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(r,0,l),x&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(r,1,l),x&&e.autoClear===!1&&e.clearDepth(),e.render(i,f),e.setRenderTarget(r,2,l),x&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),e.setRenderTarget(r,3,l),x&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(r,4,l),x&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,l),x&&e.autoClear===!1&&e.clearDepth(),e.render(i,v),e.setRenderTarget(_,g,M),e.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class e1 extends xi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Cp=class Cp{constructor(e,i,r,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,r,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let r=0;r<4;r++)this.elements[r]=e[r+i];return this}set(e,i,r,l){const c=this.elements;return c[0]=e,c[2]=i,c[1]=r,c[3]=l,this}};Cp.prototype.isMatrix2=!0;let $_=Cp;function ev(s,e,i,r){const l=t1(r);switch(i){case rx:return s*e;case ox:return s*e/l.components*l.byteLength;case mp:return s*e/l.components*l.byteLength;case kr:return s*e*2/l.components*l.byteLength;case gp:return s*e*2/l.components*l.byteLength;case sx:return s*e*3/l.components*l.byteLength;case Ni:return s*e*4/l.components*l.byteLength;case _p:return s*e*4/l.components*l.byteLength;case Kc:case Qc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Jc:case $c:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Eh:case Ah:return Math.max(s,16)*Math.max(e,8)/4;case Mh:case bh:return Math.max(s,8)*Math.max(e,8)/2;case Th:case Rh:case wh:case Dh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ch:case iu:case Uh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Nh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Lh:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Oh:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Ph:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Ih:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Fh:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case zh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Bh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Hh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Gh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Vh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case kh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Xh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Wh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case qh:case Yh:case jh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Zh:case Kh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case au:case Qh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function t1(s){switch(s){case Si:case tx:return{byteLength:1,components:1};case al:case nx:case Ta:return{byteLength:2,components:1};case hp:case pp:return{byteLength:2,components:4};case Zi:case dp:case ki:return{byteLength:4,components:1};case ix:case ax:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fp}}));typeof window<"u"&&(window.__THREE__?nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fp);function Sx(){let s=null,e=!1,i=null,r=null;function l(c,f){i(c,f),r=s.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&s!==null&&(r=s.requestAnimationFrame(l),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function n1(s){const e=new WeakMap;function i(h,m){const p=h.array,v=h.usage,_=p.byteLength,g=s.createBuffer();s.bindBuffer(m,g),s.bufferData(m,p,v),h.onUploadCallback();let M;if(p instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=s.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=s.SHORT;else if(p instanceof Uint32Array)M=s.UNSIGNED_INT;else if(p instanceof Int32Array)M=s.INT;else if(p instanceof Int8Array)M=s.BYTE;else if(p instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:_}}function r(h,m,p){const v=m.array,_=m.updateRanges;if(s.bindBuffer(p,h),_.length===0)s.bufferSubData(p,0,v);else{_.sort((M,A)=>M.start-A.start);let g=0;for(let M=1;M<_.length;M++){const A=_[g],w=_[M];w.start<=A.start+A.count+1?A.count=Math.max(A.count,w.start+w.count-A.start):(++g,_[g]=w)}_.length=g+1;for(let M=0,A=_.length;M<A;M++){const w=_[M];s.bufferSubData(p,w.start*v.BYTES_PER_ELEMENT,v,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(s.deleteBuffer(m.buffer),e.delete(h))}function f(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const v=e.get(h);(!v||v.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:f}}var i1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,a1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,r1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,s1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,o1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,l1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,c1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,u1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,f1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,d1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,h1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,p1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,m1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,g1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,_1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,v1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,x1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,S1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,y1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,M1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,E1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,b1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,A1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,T1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,R1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,C1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,w1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,D1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,U1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,N1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,L1="gl_FragColor = linearToOutputTexel( gl_FragColor );",O1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,P1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,I1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,F1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,z1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,B1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,H1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,G1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,V1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,k1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,X1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,W1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,q1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Y1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,j1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Z1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,K1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Q1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,J1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,eA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,tA=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,nA=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,iA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,aA=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rA=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,sA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,oA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,uA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,hA=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_A=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,SA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,MA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,EA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,AA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,TA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,RA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,CA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,DA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,UA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,NA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,LA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,OA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,PA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,IA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,FA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,BA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,HA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,GA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,VA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,kA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,XA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,WA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,YA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ZA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,KA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,QA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,JA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,$A=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,eT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,nT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const iT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,aT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,uT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,fT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,dT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,hT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_T=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,vT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ST=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,MT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ET=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,bT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,AT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,TT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,CT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,DT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,NT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,LT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,OT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,PT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,IT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ft={alphahash_fragment:i1,alphahash_pars_fragment:a1,alphamap_fragment:r1,alphamap_pars_fragment:s1,alphatest_fragment:o1,alphatest_pars_fragment:l1,aomap_fragment:c1,aomap_pars_fragment:u1,batching_pars_vertex:f1,batching_vertex:d1,begin_vertex:h1,beginnormal_vertex:p1,bsdfs:m1,iridescence_fragment:g1,bumpmap_pars_fragment:_1,clipping_planes_fragment:v1,clipping_planes_pars_fragment:x1,clipping_planes_pars_vertex:S1,clipping_planes_vertex:y1,color_fragment:M1,color_pars_fragment:E1,color_pars_vertex:b1,color_vertex:A1,common:T1,cube_uv_reflection_fragment:R1,defaultnormal_vertex:C1,displacementmap_pars_vertex:w1,displacementmap_vertex:D1,emissivemap_fragment:U1,emissivemap_pars_fragment:N1,colorspace_fragment:L1,colorspace_pars_fragment:O1,envmap_fragment:P1,envmap_common_pars_fragment:I1,envmap_pars_fragment:F1,envmap_pars_vertex:z1,envmap_physical_pars_fragment:Z1,envmap_vertex:B1,fog_vertex:H1,fog_pars_vertex:G1,fog_fragment:V1,fog_pars_fragment:k1,gradientmap_pars_fragment:X1,lightmap_pars_fragment:W1,lights_lambert_fragment:q1,lights_lambert_pars_fragment:Y1,lights_pars_begin:j1,lights_toon_fragment:K1,lights_toon_pars_fragment:Q1,lights_phong_fragment:J1,lights_phong_pars_fragment:$1,lights_physical_fragment:eA,lights_physical_pars_fragment:tA,lights_fragment_begin:nA,lights_fragment_maps:iA,lights_fragment_end:aA,lightprobes_pars_fragment:rA,logdepthbuf_fragment:sA,logdepthbuf_pars_fragment:oA,logdepthbuf_pars_vertex:lA,logdepthbuf_vertex:cA,map_fragment:uA,map_pars_fragment:fA,map_particle_fragment:dA,map_particle_pars_fragment:hA,metalnessmap_fragment:pA,metalnessmap_pars_fragment:mA,morphinstance_vertex:gA,morphcolor_vertex:_A,morphnormal_vertex:vA,morphtarget_pars_vertex:xA,morphtarget_vertex:SA,normal_fragment_begin:yA,normal_fragment_maps:MA,normal_pars_fragment:EA,normal_pars_vertex:bA,normal_vertex:AA,normalmap_pars_fragment:TA,clearcoat_normal_fragment_begin:RA,clearcoat_normal_fragment_maps:CA,clearcoat_pars_fragment:wA,iridescence_pars_fragment:DA,opaque_fragment:UA,packing:NA,premultiplied_alpha_fragment:LA,project_vertex:OA,dithering_fragment:PA,dithering_pars_fragment:IA,roughnessmap_fragment:FA,roughnessmap_pars_fragment:zA,shadowmap_pars_fragment:BA,shadowmap_pars_vertex:HA,shadowmap_vertex:GA,shadowmask_pars_fragment:VA,skinbase_vertex:kA,skinning_pars_vertex:XA,skinning_vertex:WA,skinnormal_vertex:qA,specularmap_fragment:YA,specularmap_pars_fragment:jA,tonemapping_fragment:ZA,tonemapping_pars_fragment:KA,transmission_fragment:QA,transmission_pars_fragment:JA,uv_pars_fragment:$A,uv_pars_vertex:eT,uv_vertex:tT,worldpos_vertex:nT,background_vert:iT,background_frag:aT,backgroundCube_vert:rT,backgroundCube_frag:sT,cube_vert:oT,cube_frag:lT,depth_vert:cT,depth_frag:uT,distance_vert:fT,distance_frag:dT,equirect_vert:hT,equirect_frag:pT,linedashed_vert:mT,linedashed_frag:gT,meshbasic_vert:_T,meshbasic_frag:vT,meshlambert_vert:xT,meshlambert_frag:ST,meshmatcap_vert:yT,meshmatcap_frag:MT,meshnormal_vert:ET,meshnormal_frag:bT,meshphong_vert:AT,meshphong_frag:TT,meshphysical_vert:RT,meshphysical_frag:CT,meshtoon_vert:wT,meshtoon_frag:DT,points_vert:UT,points_frag:NT,shadow_vert:LT,shadow_frag:OT,sprite_vert:PT,sprite_frag:IT},He={common:{diffuse:{value:new Dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new Ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ne},probesMax:{value:new ne},probesResolution:{value:new ne}},points:{diffuse:{value:new Dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new Dt(16777215)},opacity:{value:1},center:{value:new Ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},Vi={basic:{uniforms:zn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:zn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new Dt(0)},envMapIntensity:{value:1}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:zn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new Dt(0)},specular:{value:new Dt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:zn([He.common,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.roughnessmap,He.metalnessmap,He.fog,He.lights,{emissive:{value:new Dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:zn([He.common,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.gradientmap,He.fog,He.lights,{emissive:{value:new Dt(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:zn([He.common,He.bumpmap,He.normalmap,He.displacementmap,He.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:zn([He.points,He.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:zn([He.common,He.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:zn([He.common,He.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:zn([He.common,He.bumpmap,He.normalmap,He.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:zn([He.sprite,He.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distance:{uniforms:zn([He.common,He.displacementmap,{referencePosition:{value:new ne},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distance_vert,fragmentShader:ft.distance_frag},shadow:{uniforms:zn([He.lights,He.fog,{color:{value:new Dt(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};Vi.physical={uniforms:zn([Vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new Ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new Dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new Ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new Dt(0)},specularColor:{value:new Dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new Ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const Xc={r:0,b:0,g:0},FT=new xn,yx=new st;yx.set(-1,0,0,0,1,0,0,0,1);function zT(s,e,i,r,l,c){const f=new Dt(0);let h=l===!0?0:1,m,p,v=null,_=0,g=null;function M(T){let D=T.isScene===!0?T.background:null;if(D&&D.isTexture){const U=T.backgroundBlurriness>0;D=e.get(D,U)}return D}function A(T){let D=!1;const U=M(T);U===null?x(f,h):U&&U.isColor&&(x(U,1),D=!0);const H=s.xr.getEnvironmentBlendMode();H==="additive"?i.buffers.color.setClear(0,0,0,1,c):H==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(s.autoClear||D)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function w(T,D){const U=M(D);U&&(U.isCubeTexture||U.mapping===du)?(p===void 0&&(p=new oi(new fl(1,1,1),new Ki({name:"BackgroundCubeMaterial",uniforms:Ys(Vi.backgroundCube.uniforms),vertexShader:Vi.backgroundCube.vertexShader,fragmentShader:Vi.backgroundCube.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(H,L,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),p.material.uniforms.envMap.value=U,p.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(FT.makeRotationFromEuler(D.backgroundRotation)).transpose(),U.isCubeTexture&&U.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(yx),p.material.toneMapped=Mt.getTransfer(U.colorSpace)!==Bt,(v!==U||_!==U.version||g!==s.toneMapping)&&(p.material.needsUpdate=!0,v=U,_=U.version,g=s.toneMapping),p.layers.enableAll(),T.unshift(p,p.geometry,p.material,0,0,null)):U&&U.isTexture&&(m===void 0&&(m=new oi(new pu(2,2),new Ki({name:"BackgroundMaterial",uniforms:Ys(Vi.background.uniforms),vertexShader:Vi.background.vertexShader,fragmentShader:Vi.background.fragmentShader,side:hr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=U,m.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,m.material.toneMapped=Mt.getTransfer(U.colorSpace)!==Bt,U.matrixAutoUpdate===!0&&U.updateMatrix(),m.material.uniforms.uvTransform.value.copy(U.matrix),(v!==U||_!==U.version||g!==s.toneMapping)&&(m.material.needsUpdate=!0,v=U,_=U.version,g=s.toneMapping),m.layers.enableAll(),T.unshift(m,m.geometry,m.material,0,0,null))}function x(T,D){T.getRGB(Xc,vx(s)),i.buffers.color.setClear(Xc.r,Xc.g,Xc.b,D,c)}function y(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(T,D=1){f.set(T),h=D,x(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(T){h=T,x(f,h)},render:A,addToRenderList:w,dispose:y}}function BT(s,e){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=g(null);let c=l,f=!1;function h(z,Z,ue,pe,X){let I=!1;const B=_(z,pe,ue,Z);c!==B&&(c=B,p(c.object)),I=M(z,pe,ue,X),I&&A(z,pe,ue,X),X!==null&&e.update(X,s.ELEMENT_ARRAY_BUFFER),(I||f)&&(f=!1,U(z,Z,ue,pe),X!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function m(){return s.createVertexArray()}function p(z){return s.bindVertexArray(z)}function v(z){return s.deleteVertexArray(z)}function _(z,Z,ue,pe){const X=pe.wireframe===!0;let I=r[Z.id];I===void 0&&(I={},r[Z.id]=I);const B=z.isInstancedMesh===!0?z.id:0;let le=I[B];le===void 0&&(le={},I[B]=le);let ge=le[ue.id];ge===void 0&&(ge={},le[ue.id]=ge);let Ee=ge[X];return Ee===void 0&&(Ee=g(m()),ge[X]=Ee),Ee}function g(z){const Z=[],ue=[],pe=[];for(let X=0;X<i;X++)Z[X]=0,ue[X]=0,pe[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:ue,attributeDivisors:pe,object:z,attributes:{},index:null}}function M(z,Z,ue,pe){const X=c.attributes,I=Z.attributes;let B=0;const le=ue.getAttributes();for(const ge in le)if(le[ge].location>=0){const F=X[ge];let $=I[ge];if($===void 0&&(ge==="instanceMatrix"&&z.instanceMatrix&&($=z.instanceMatrix),ge==="instanceColor"&&z.instanceColor&&($=z.instanceColor)),F===void 0||F.attribute!==$||$&&F.data!==$.data)return!0;B++}return c.attributesNum!==B||c.index!==pe}function A(z,Z,ue,pe){const X={},I=Z.attributes;let B=0;const le=ue.getAttributes();for(const ge in le)if(le[ge].location>=0){let F=I[ge];F===void 0&&(ge==="instanceMatrix"&&z.instanceMatrix&&(F=z.instanceMatrix),ge==="instanceColor"&&z.instanceColor&&(F=z.instanceColor));const $={};$.attribute=F,F&&F.data&&($.data=F.data),X[ge]=$,B++}c.attributes=X,c.attributesNum=B,c.index=pe}function w(){const z=c.newAttributes;for(let Z=0,ue=z.length;Z<ue;Z++)z[Z]=0}function x(z){y(z,0)}function y(z,Z){const ue=c.newAttributes,pe=c.enabledAttributes,X=c.attributeDivisors;ue[z]=1,pe[z]===0&&(s.enableVertexAttribArray(z),pe[z]=1),X[z]!==Z&&(s.vertexAttribDivisor(z,Z),X[z]=Z)}function T(){const z=c.newAttributes,Z=c.enabledAttributes;for(let ue=0,pe=Z.length;ue<pe;ue++)Z[ue]!==z[ue]&&(s.disableVertexAttribArray(ue),Z[ue]=0)}function D(z,Z,ue,pe,X,I,B){B===!0?s.vertexAttribIPointer(z,Z,ue,X,I):s.vertexAttribPointer(z,Z,ue,pe,X,I)}function U(z,Z,ue,pe){w();const X=pe.attributes,I=ue.getAttributes(),B=Z.defaultAttributeValues;for(const le in I){const ge=I[le];if(ge.location>=0){let Ee=X[le];if(Ee===void 0&&(le==="instanceMatrix"&&z.instanceMatrix&&(Ee=z.instanceMatrix),le==="instanceColor"&&z.instanceColor&&(Ee=z.instanceColor)),Ee!==void 0){const F=Ee.normalized,$=Ee.itemSize,Se=e.get(Ee);if(Se===void 0)continue;const Re=Se.buffer,Ue=Se.type,oe=Se.bytesPerElement,ye=Ue===s.INT||Ue===s.UNSIGNED_INT||Ee.gpuType===dp;if(Ee.isInterleavedBufferAttribute){const Ae=Ee.data,Ge=Ae.stride,et=Ee.offset;if(Ae.isInstancedInterleavedBuffer){for(let Je=0;Je<ge.locationSize;Je++)y(ge.location+Je,Ae.meshPerAttribute);z.isInstancedMesh!==!0&&pe._maxInstanceCount===void 0&&(pe._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let Je=0;Je<ge.locationSize;Je++)x(ge.location+Je);s.bindBuffer(s.ARRAY_BUFFER,Re);for(let Je=0;Je<ge.locationSize;Je++)D(ge.location+Je,$/ge.locationSize,Ue,F,Ge*oe,(et+$/ge.locationSize*Je)*oe,ye)}else{if(Ee.isInstancedBufferAttribute){for(let Ae=0;Ae<ge.locationSize;Ae++)y(ge.location+Ae,Ee.meshPerAttribute);z.isInstancedMesh!==!0&&pe._maxInstanceCount===void 0&&(pe._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let Ae=0;Ae<ge.locationSize;Ae++)x(ge.location+Ae);s.bindBuffer(s.ARRAY_BUFFER,Re);for(let Ae=0;Ae<ge.locationSize;Ae++)D(ge.location+Ae,$/ge.locationSize,Ue,F,$*oe,$/ge.locationSize*Ae*oe,ye)}}else if(B!==void 0){const F=B[le];if(F!==void 0)switch(F.length){case 2:s.vertexAttrib2fv(ge.location,F);break;case 3:s.vertexAttrib3fv(ge.location,F);break;case 4:s.vertexAttrib4fv(ge.location,F);break;default:s.vertexAttrib1fv(ge.location,F)}}}}T()}function H(){P();for(const z in r){const Z=r[z];for(const ue in Z){const pe=Z[ue];for(const X in pe){const I=pe[X];for(const B in I)v(I[B].object),delete I[B];delete pe[X]}}delete r[z]}}function L(z){if(r[z.id]===void 0)return;const Z=r[z.id];for(const ue in Z){const pe=Z[ue];for(const X in pe){const I=pe[X];for(const B in I)v(I[B].object),delete I[B];delete pe[X]}}delete r[z.id]}function O(z){for(const Z in r){const ue=r[Z];for(const pe in ue){const X=ue[pe];if(X[z.id]===void 0)continue;const I=X[z.id];for(const B in I)v(I[B].object),delete I[B];delete X[z.id]}}}function b(z){for(const Z in r){const ue=r[Z],pe=z.isInstancedMesh===!0?z.id:0,X=ue[pe];if(X!==void 0){for(const I in X){const B=X[I];for(const le in B)v(B[le].object),delete B[le];delete X[I]}delete ue[pe],Object.keys(ue).length===0&&delete r[Z]}}}function P(){W(),f=!0,c!==l&&(c=l,p(c.object))}function W(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:P,resetDefaultState:W,dispose:H,releaseStatesOfGeometry:L,releaseStatesOfObject:b,releaseStatesOfProgram:O,initAttributes:w,enableAttribute:x,disableUnusedAttributes:T}}function HT(s,e,i){let r;function l(m){r=m}function c(m,p){s.drawArrays(r,m,p),i.update(p,r,1)}function f(m,p,v){v!==0&&(s.drawArraysInstanced(r,m,p,v),i.update(p,r,v))}function h(m,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,p,0,v);let g=0;for(let M=0;M<v;M++)g+=p[M];i.update(g,r,1)}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h}function GT(s,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(O){return!(O!==Ni&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(O){const b=O===Ta&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==Si&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==ki&&!b)}function m(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const v=m(p);v!==p&&(nt("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const _=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&nt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),y=s.getParameter(s.MAX_VERTEX_ATTRIBS),T=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),D=s.getParameter(s.MAX_VARYING_VECTORS),U=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),H=s.getParameter(s.MAX_SAMPLES),L=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:g,maxTextures:M,maxVertexTextures:A,maxTextureSize:w,maxCubemapSize:x,maxAttributes:y,maxVertexUniforms:T,maxVaryings:D,maxFragmentUniforms:U,maxSamples:H,samples:L}}function VT(s){const e=this;let i=null,r=0,l=!1,c=!1;const f=new Fr,h=new st,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,g){const M=_.length!==0||g||r!==0||l;return l=g,r=_.length,M},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,g){i=v(_,g,0)},this.setState=function(_,g,M){const A=_.clippingPlanes,w=_.clipIntersection,x=_.clipShadows,y=s.get(_);if(!l||A===null||A.length===0||c&&!x)c?v(null):p();else{const T=c?0:r,D=T*4;let U=y.clippingState||null;m.value=U,U=v(A,g,D,M);for(let H=0;H!==D;++H)U[H]=i[H];y.clippingState=U,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=T}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(_,g,M,A){const w=_!==null?_.length:0;let x=null;if(w!==0){if(x=m.value,A!==!0||x===null){const y=M+w*4,T=g.matrixWorldInverse;h.getNormalMatrix(T),(x===null||x.length<y)&&(x=new Float32Array(y));for(let D=0,U=M;D!==w;++D,U+=4)f.copy(_[D]).applyMatrix4(T,h),f.normal.toArray(x,U),x[U+3]=f.constant}m.value=x,m.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,x}}const dr=4,tv=[.125,.215,.35,.446,.526,.582],Br=20,kT=256,$o=new Ep,nv=new Dt;let ih=null,ah=0,rh=0,sh=!1;const XT=new ne;class iv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,c={}){const{size:f=256,position:h=XT}=c;ih=this._renderer.getRenderTarget(),ah=this._renderer.getActiveCubeFace(),rh=this._renderer.getActiveMipmapLevel(),sh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ih,ah,rh),this._renderer.xr.enabled=sh,e.scissorTest=!1,zs(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Vr||e.mapping===ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ih=this._renderer.getRenderTarget(),ah=this._renderer.getActiveCubeFace(),rh=this._renderer.getActiveMipmapLevel(),sh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:In,minFilter:In,generateMipmaps:!1,type:Ta,format:Ni,colorSpace:ru,depthBuffer:!1},l=av(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=av(e,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=WT(c)),this._blurMaterial=YT(c,e,i),this._ggxMaterial=qT(c,e,i)}return l}_compileMaterial(e){const i=new oi(new Qi,e);this._renderer.compile(i,$o)}_sceneToCubeUV(e,i,r,l,c){const m=new xi(90,1,i,r),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],_=this._renderer,g=_.autoClear,M=_.toneMapping;_.getClearColor(nv),_.toneMapping=Wi,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new oi(new fl,new Xs({name:"PMREM.Background",side:Yn,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,x=w.material;let y=!1;const T=e.background;T?T.isColor&&(x.color.copy(T),e.background=null,y=!0):(x.color.copy(nv),y=!0);for(let D=0;D<6;D++){const U=D%3;U===0?(m.up.set(0,p[D],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+v[D],c.y,c.z)):U===1?(m.up.set(0,0,p[D]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+v[D],c.z)):(m.up.set(0,p[D],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+v[D]));const H=this._cubeSize;zs(l,U*H,D>2?H:0,H,H),_.setRenderTarget(l),y&&_.render(w,m),_.render(e,m)}_.toneMapping=M,_.autoClear=g,e.background=T}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Vr||e.mapping===ks;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=sv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rv());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const h=c.uniforms;h.envMap.value=e;const m=this._cubeSize;zs(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(f,$o)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,h=this._lodMeshes[r];h.material=f;const m=f.uniforms,p=r/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),_=Math.sqrt(p*p-v*v),g=0+p*1.25,M=_*g,{_lodMax:A}=this,w=this._sizeLods[r],x=3*w*(r>A-dr?r-A+dr:0),y=4*(this._cubeSize-w);m.envMap.value=e.texture,m.roughness.value=M,m.mipInt.value=A-i,zs(c,x,y,3*w,2*w),l.setRenderTarget(c),l.render(h,$o),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=A-r,zs(e,x,y,3*w,2*w),l.setRenderTarget(e),l.render(h,$o)}_blur(e,i,r,l,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,r,l,"latitudinal",c),this._halfBlur(f,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,f,h){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&bt("blur direction must be either latitudinal or longitudinal!");const v=3,_=this._lodMeshes[l];_.material=p;const g=p.uniforms,M=this._sizeLods[r]-1,A=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Br-1),w=c/A,x=isFinite(c)?1+Math.floor(v*w):Br;x>Br&&nt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Br}`);const y=[];let T=0;for(let O=0;O<Br;++O){const b=O/w,P=Math.exp(-b*b/2);y.push(P),O===0?T+=P:O<x&&(T+=2*P)}for(let O=0;O<y.length;O++)y[O]=y[O]/T;g.envMap.value=e.texture,g.samples.value=x,g.weights.value=y,g.latitudinal.value=f==="latitudinal",h&&(g.poleAxis.value=h);const{_lodMax:D}=this;g.dTheta.value=A,g.mipInt.value=D-r;const U=this._sizeLods[l],H=3*U*(l>D-dr?l-D+dr:0),L=4*(this._cubeSize-U);zs(i,H,L,3*U,2*U),m.setRenderTarget(i),m.render(_,$o)}}function WT(s){const e=[],i=[],r=[];let l=s;const c=s-dr+1+tv.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);e.push(h);let m=1/h;f>s-dr?m=tv[f-s+dr-1]:f===0&&(m=0),i.push(m);const p=1/(h-2),v=-p,_=1+p,g=[v,v,_,v,_,_,v,v,_,_,v,_],M=6,A=6,w=3,x=2,y=1,T=new Float32Array(w*A*M),D=new Float32Array(x*A*M),U=new Float32Array(y*A*M);for(let L=0;L<M;L++){const O=L%3*2/3-1,b=L>2?0:-1,P=[O,b,0,O+2/3,b,0,O+2/3,b+1,0,O,b,0,O+2/3,b+1,0,O,b+1,0];T.set(P,w*A*L),D.set(g,x*A*L);const W=[L,L,L,L,L,L];U.set(W,y*A*L)}const H=new Qi;H.setAttribute("position",new Yi(T,w)),H.setAttribute("uv",new Yi(D,x)),H.setAttribute("faceIndex",new Yi(U,y)),r.push(new oi(H,null)),l>dr&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function av(s,e,i){const r=new qi(s,e,i);return r.texture.mapping=du,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function zs(s,e,i,r,l){s.viewport.set(e,i,r,l),s.scissor.set(e,i,r,l)}function qT(s,e,i){return new Ki({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:kT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:mu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function YT(s,e,i){const r=new Float32Array(Br),l=new ne(0,1,0);return new Ki({name:"SphericalGaussianBlur",defines:{n:Br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function rv(){return new Ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function sv(){return new Ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function mu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Mx extends qi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new gx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new fl(5,5,5),c=new Ki({name:"CubemapFromEquirect",uniforms:Ys(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Yn,blending:Ea});c.uniforms.tEquirect.value=i;const f=new oi(l,c),h=i.minFilter;return i.minFilter===Hr&&(i.minFilter=In),new $b(1,10,this).update(e,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,r,l);e.setRenderTarget(c)}}function jT(s){let e=new WeakMap,i=new WeakMap,r=null;function l(g,M=!1){return g==null?null:M?f(g):c(g)}function c(g){if(g&&g.isTexture){const M=g.mapping;if(M===Dd||M===Ud)if(e.has(g)){const A=e.get(g).texture;return h(A,g.mapping)}else{const A=g.image;if(A&&A.height>0){const w=new Mx(A.height);return w.fromEquirectangularTexture(s,g),e.set(g,w),g.addEventListener("dispose",p),h(w.texture,g.mapping)}else return null}}return g}function f(g){if(g&&g.isTexture){const M=g.mapping,A=M===Dd||M===Ud,w=M===Vr||M===ks;if(A||w){let x=i.get(g);const y=x!==void 0?x.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==y)return r===null&&(r=new iv(s)),x=A?r.fromEquirectangular(g,x):r.fromCubemap(g,x),x.texture.pmremVersion=g.pmremVersion,i.set(g,x),x.texture;if(x!==void 0)return x.texture;{const T=g.image;return A&&T&&T.height>0||w&&T&&m(T)?(r===null&&(r=new iv(s)),x=A?r.fromEquirectangular(g):r.fromCubemap(g),x.texture.pmremVersion=g.pmremVersion,i.set(g,x),g.addEventListener("dispose",v),x.texture):null}}}return g}function h(g,M){return M===Dd?g.mapping=Vr:M===Ud&&(g.mapping=ks),g}function m(g){let M=0;const A=6;for(let w=0;w<A;w++)g[w]!==void 0&&M++;return M===A}function p(g){const M=g.target;M.removeEventListener("dispose",p);const A=e.get(M);A!==void 0&&(e.delete(M),A.dispose())}function v(g){const M=g.target;M.removeEventListener("dispose",v);const A=i.get(M);A!==void 0&&(i.delete(M),A.dispose())}function _(){e=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:l,dispose:_}}function ZT(s){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=s.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Jh("WebGLRenderer: "+r+" extension not supported."),l}}}function KT(s,e,i,r){const l={},c=new WeakMap;function f(_){const g=_.target;g.index!==null&&e.remove(g.index);for(const A in g.attributes)e.remove(g.attributes[A]);g.removeEventListener("dispose",f),delete l[g.id];const M=c.get(g);M&&(e.remove(M),c.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function h(_,g){return l[g.id]===!0||(g.addEventListener("dispose",f),l[g.id]=!0,i.memory.geometries++),g}function m(_){const g=_.attributes;for(const M in g)e.update(g[M],s.ARRAY_BUFFER)}function p(_){const g=[],M=_.index,A=_.attributes.position;let w=0;if(A===void 0)return;if(M!==null){const T=M.array;w=M.version;for(let D=0,U=T.length;D<U;D+=3){const H=T[D+0],L=T[D+1],O=T[D+2];g.push(H,L,L,O,O,H)}}else{const T=A.array;w=A.version;for(let D=0,U=T.length/3-1;D<U;D+=3){const H=D+0,L=D+1,O=D+2;g.push(H,L,L,O,O,H)}}const x=new(A.count>=65535?px:hx)(g,1);x.version=w;const y=c.get(_);y&&e.remove(y),c.set(_,x)}function v(_){const g=c.get(_);if(g){const M=_.index;M!==null&&g.version<M.version&&p(_)}else p(_);return c.get(_)}return{get:h,update:m,getWireframeAttribute:v}}function QT(s,e,i){let r;function l(_){r=_}let c,f;function h(_){c=_.type,f=_.bytesPerElement}function m(_,g){s.drawElements(r,g,c,_*f),i.update(g,r,1)}function p(_,g,M){M!==0&&(s.drawElementsInstanced(r,g,c,_*f,M),i.update(g,r,M))}function v(_,g,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,c,_,0,M);let w=0;for(let x=0;x<M;x++)w+=g[x];i.update(w,r,1)}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=v}function JT(s){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,f,h){switch(i.calls++,f){case s.TRIANGLES:i.triangles+=h*(c/3);break;case s.LINES:i.lines+=h*(c/2);break;case s.LINE_STRIP:i.lines+=h*(c-1);break;case s.LINE_LOOP:i.lines+=h*c;break;case s.POINTS:i.points+=h*c;break;default:bt("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function $T(s,e,i){const r=new WeakMap,l=new un;function c(f,h,m){const p=f.morphTargetInfluences,v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=v!==void 0?v.length:0;let g=r.get(h);if(g===void 0||g.count!==_){let W=function(){b.dispose(),r.delete(h),h.removeEventListener("dispose",W)};var M=W;g!==void 0&&g.texture.dispose();const A=h.morphAttributes.position!==void 0,w=h.morphAttributes.normal!==void 0,x=h.morphAttributes.color!==void 0,y=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],D=h.morphAttributes.color||[];let U=0;A===!0&&(U=1),w===!0&&(U=2),x===!0&&(U=3);let H=h.attributes.position.count*U,L=1;H>e.maxTextureSize&&(L=Math.ceil(H/e.maxTextureSize),H=e.maxTextureSize);const O=new Float32Array(H*L*4*_),b=new cx(O,H,L,_);b.type=ki,b.needsUpdate=!0;const P=U*4;for(let z=0;z<_;z++){const Z=y[z],ue=T[z],pe=D[z],X=H*L*4*z;for(let I=0;I<Z.count;I++){const B=I*P;A===!0&&(l.fromBufferAttribute(Z,I),O[X+B+0]=l.x,O[X+B+1]=l.y,O[X+B+2]=l.z,O[X+B+3]=0),w===!0&&(l.fromBufferAttribute(ue,I),O[X+B+4]=l.x,O[X+B+5]=l.y,O[X+B+6]=l.z,O[X+B+7]=0),x===!0&&(l.fromBufferAttribute(pe,I),O[X+B+8]=l.x,O[X+B+9]=l.y,O[X+B+10]=l.z,O[X+B+11]=pe.itemSize===4?l.w:1)}}g={count:_,texture:b,size:new Ut(H,L)},r.set(h,g),h.addEventListener("dispose",W)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",f.morphTexture,i);else{let A=0;for(let x=0;x<p.length;x++)A+=p[x];const w=h.morphTargetsRelative?1:1-A;m.getUniforms().setValue(s,"morphTargetBaseInfluence",w),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:c}}function eR(s,e,i,r,l){let c=new WeakMap;function f(p){const v=l.render.frame,_=p.geometry,g=e.get(p,_);if(c.get(g)!==v&&(e.update(g),c.set(g,v)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),c.get(p)!==v&&(i.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,s.ARRAY_BUFFER),c.set(p,v))),p.isSkinnedMesh){const M=p.skeleton;c.get(M)!==v&&(M.update(),c.set(M,v))}return g}function h(){c=new WeakMap}function m(p){const v=p.target;v.removeEventListener("dispose",m),r.releaseStatesOfObject(v),i.remove(v.instanceMatrix),v.instanceColor!==null&&i.remove(v.instanceColor)}return{update:f,dispose:h}}const tR={[Yv]:"LINEAR_TONE_MAPPING",[jv]:"REINHARD_TONE_MAPPING",[Zv]:"CINEON_TONE_MAPPING",[Kv]:"ACES_FILMIC_TONE_MAPPING",[Jv]:"AGX_TONE_MAPPING",[$v]:"NEUTRAL_TONE_MAPPING",[Qv]:"CUSTOM_TONE_MAPPING"};function nR(s,e,i,r,l){const c=new qi(e,i,{type:s,depthBuffer:r,stencilBuffer:l,depthTexture:r?new Ws(e,i):void 0}),f=new qi(e,i,{type:Ta,depthBuffer:!1,stencilBuffer:!1}),h=new Qi;h.setAttribute("position",new yi([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new yi([0,2,0,0,2,0],2));const m=new Kb({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new oi(h,m),v=new Ep(-1,1,1,-1,0,1);let _=null,g=null,M=!1,A,w=null,x=[],y=!1;this.setSize=function(T,D){c.setSize(T,D),f.setSize(T,D);for(let U=0;U<x.length;U++){const H=x[U];H.setSize&&H.setSize(T,D)}},this.setEffects=function(T){x=T,y=x.length>0&&x[0].isRenderPass===!0;const D=c.width,U=c.height;for(let H=0;H<x.length;H++){const L=x[H];L.setSize&&L.setSize(D,U)}},this.begin=function(T,D){if(M||T.toneMapping===Wi&&x.length===0)return!1;if(w=D,D!==null){const U=D.width,H=D.height;(c.width!==U||c.height!==H)&&this.setSize(U,H)}return y===!1&&T.setRenderTarget(c),A=T.toneMapping,T.toneMapping=Wi,!0},this.hasRenderPass=function(){return y},this.end=function(T,D){T.toneMapping=A,M=!0;let U=c,H=f;for(let L=0;L<x.length;L++){const O=x[L];if(O.enabled!==!1&&(O.render(T,H,U,D),O.needsSwap!==!1)){const b=U;U=H,H=b}}if(_!==T.outputColorSpace||g!==T.toneMapping){_=T.outputColorSpace,g=T.toneMapping,m.defines={},Mt.getTransfer(_)===Bt&&(m.defines.SRGB_TRANSFER="");const L=tR[g];L&&(m.defines[L]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=U.texture,T.setRenderTarget(w),T.render(p,v),w=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){c.depthTexture&&c.depthTexture.dispose(),c.dispose(),f.dispose(),h.dispose(),m.dispose()}}const Ex=new Bn,ep=new Ws(1,1),bx=new cx,Ax=new Rb,Tx=new gx,ov=[],lv=[],cv=new Float32Array(16),uv=new Float32Array(9),fv=new Float32Array(4);function Qs(s,e,i){const r=s[0];if(r<=0||r>0)return s;const l=e*i;let c=ov[l];if(c===void 0&&(c=new Float32Array(l),ov[l]=c),e!==0){r.toArray(c,0);for(let f=1,h=0;f!==e;++f)h+=i,s[f].toArray(c,h)}return c}function Sn(s,e){if(s.length!==e.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==e[i])return!1;return!0}function yn(s,e){for(let i=0,r=e.length;i<r;i++)s[i]=e[i]}function gu(s,e){let i=lv[e];i===void 0&&(i=new Int32Array(e),lv[e]=i);for(let r=0;r!==e;++r)i[r]=s.allocateTextureUnit();return i}function iR(s,e){const i=this.cache;i[0]!==e&&(s.uniform1f(this.addr,e),i[0]=e)}function aR(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;s.uniform2fv(this.addr,e),yn(i,e)}}function rR(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Sn(i,e))return;s.uniform3fv(this.addr,e),yn(i,e)}}function sR(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;s.uniform4fv(this.addr,e),yn(i,e)}}function oR(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(Sn(i,e))return;s.uniformMatrix2fv(this.addr,!1,e),yn(i,e)}else{if(Sn(i,r))return;fv.set(r),s.uniformMatrix2fv(this.addr,!1,fv),yn(i,r)}}function lR(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(Sn(i,e))return;s.uniformMatrix3fv(this.addr,!1,e),yn(i,e)}else{if(Sn(i,r))return;uv.set(r),s.uniformMatrix3fv(this.addr,!1,uv),yn(i,r)}}function cR(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(Sn(i,e))return;s.uniformMatrix4fv(this.addr,!1,e),yn(i,e)}else{if(Sn(i,r))return;cv.set(r),s.uniformMatrix4fv(this.addr,!1,cv),yn(i,r)}}function uR(s,e){const i=this.cache;i[0]!==e&&(s.uniform1i(this.addr,e),i[0]=e)}function fR(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;s.uniform2iv(this.addr,e),yn(i,e)}}function dR(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Sn(i,e))return;s.uniform3iv(this.addr,e),yn(i,e)}}function hR(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;s.uniform4iv(this.addr,e),yn(i,e)}}function pR(s,e){const i=this.cache;i[0]!==e&&(s.uniform1ui(this.addr,e),i[0]=e)}function mR(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;s.uniform2uiv(this.addr,e),yn(i,e)}}function gR(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Sn(i,e))return;s.uniform3uiv(this.addr,e),yn(i,e)}}function _R(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;s.uniform4uiv(this.addr,e),yn(i,e)}}function vR(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(ep.compareFunction=i.isReversedDepthBuffer()?xp:vp,c=ep):c=Ex,i.setTexture2D(e||c,l)}function xR(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||Ax,l)}function SR(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||Tx,l)}function yR(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||bx,l)}function MR(s){switch(s){case 5126:return iR;case 35664:return aR;case 35665:return rR;case 35666:return sR;case 35674:return oR;case 35675:return lR;case 35676:return cR;case 5124:case 35670:return uR;case 35667:case 35671:return fR;case 35668:case 35672:return dR;case 35669:case 35673:return hR;case 5125:return pR;case 36294:return mR;case 36295:return gR;case 36296:return _R;case 35678:case 36198:case 36298:case 36306:case 35682:return vR;case 35679:case 36299:case 36307:return xR;case 35680:case 36300:case 36308:case 36293:return SR;case 36289:case 36303:case 36311:case 36292:return yR}}function ER(s,e){s.uniform1fv(this.addr,e)}function bR(s,e){const i=Qs(e,this.size,2);s.uniform2fv(this.addr,i)}function AR(s,e){const i=Qs(e,this.size,3);s.uniform3fv(this.addr,i)}function TR(s,e){const i=Qs(e,this.size,4);s.uniform4fv(this.addr,i)}function RR(s,e){const i=Qs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function CR(s,e){const i=Qs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function wR(s,e){const i=Qs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function DR(s,e){s.uniform1iv(this.addr,e)}function UR(s,e){s.uniform2iv(this.addr,e)}function NR(s,e){s.uniform3iv(this.addr,e)}function LR(s,e){s.uniform4iv(this.addr,e)}function OR(s,e){s.uniform1uiv(this.addr,e)}function PR(s,e){s.uniform2uiv(this.addr,e)}function IR(s,e){s.uniform3uiv(this.addr,e)}function FR(s,e){s.uniform4uiv(this.addr,e)}function zR(s,e,i){const r=this.cache,l=e.length,c=gu(i,l);Sn(r,c)||(s.uniform1iv(this.addr,c),yn(r,c));let f;this.type===s.SAMPLER_2D_SHADOW?f=ep:f=Ex;for(let h=0;h!==l;++h)i.setTexture2D(e[h]||f,c[h])}function BR(s,e,i){const r=this.cache,l=e.length,c=gu(i,l);Sn(r,c)||(s.uniform1iv(this.addr,c),yn(r,c));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||Ax,c[f])}function HR(s,e,i){const r=this.cache,l=e.length,c=gu(i,l);Sn(r,c)||(s.uniform1iv(this.addr,c),yn(r,c));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||Tx,c[f])}function GR(s,e,i){const r=this.cache,l=e.length,c=gu(i,l);Sn(r,c)||(s.uniform1iv(this.addr,c),yn(r,c));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||bx,c[f])}function VR(s){switch(s){case 5126:return ER;case 35664:return bR;case 35665:return AR;case 35666:return TR;case 35674:return RR;case 35675:return CR;case 35676:return wR;case 5124:case 35670:return DR;case 35667:case 35671:return UR;case 35668:case 35672:return NR;case 35669:case 35673:return LR;case 5125:return OR;case 36294:return PR;case 36295:return IR;case 36296:return FR;case 35678:case 36198:case 36298:case 36306:case 35682:return zR;case 35679:case 36299:case 36307:return BR;case 35680:case 36300:case 36308:case 36293:return HR;case 36289:case 36303:case 36311:case 36292:return GR}}class kR{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=MR(i.type)}}class XR{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=VR(i.type)}}class WR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(e,i[h.id],r)}}}const oh=/(\w+)(\])?(\[|\.)?/g;function dv(s,e){s.seq.push(e),s.map[e.id]=e}function qR(s,e,i){const r=s.name,l=r.length;for(oh.lastIndex=0;;){const c=oh.exec(r),f=oh.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&f+2===l){dv(i,p===void 0?new kR(h,s,e):new XR(h,s,e));break}else{let _=i.map[h];_===void 0&&(_=new WR(h),dv(i,_)),i=_}}}class eu{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let f=0;f<r;++f){const h=e.getActiveUniform(i,f),m=e.getUniformLocation(i,h.name);qR(h,m,this)}const l=[],c=[];for(const f of this.seq)f.type===e.SAMPLER_2D_SHADOW||f.type===e.SAMPLER_CUBE_SHADOW||f.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,f=i.length;c!==f;++c){const h=i[c],m=r[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in i&&r.push(f)}return r}}function hv(s,e,i){const r=s.createShader(e);return s.shaderSource(r,i),s.compileShader(r),r}const YR=37297;let jR=0;function ZR(s,e){const i=s.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let f=l;f<c;f++){const h=f+1;r.push(`${h===e?">":" "} ${h}: ${i[f]}`)}return r.join(`
`)}const pv=new st;function KR(s){Mt._getMatrix(pv,Mt.workingColorSpace,s);const e=`mat3( ${pv.elements.map(i=>i.toFixed(4))} )`;switch(Mt.getTransfer(s)){case su:return[e,"LinearTransferOETF"];case Bt:return[e,"sRGBTransferOETF"];default:return nt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function mv(s,e,i){const r=s.getShaderParameter(e,s.COMPILE_STATUS),c=(s.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const h=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+ZR(s.getShaderSource(e),h)}else return c}function QR(s,e){const i=KR(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const JR={[Yv]:"Linear",[jv]:"Reinhard",[Zv]:"Cineon",[Kv]:"ACESFilmic",[Jv]:"AgX",[$v]:"Neutral",[Qv]:"Custom"};function $R(s,e){const i=JR[e];return i===void 0?(nt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Wc=new ne;function e2(){Mt.getLuminanceCoefficients(Wc);const s=Wc.x.toFixed(4),e=Wc.y.toFixed(4),i=Wc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function t2(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(nl).join(`
`)}function n2(s){const e=[];for(const i in s){const r=s[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function i2(s,e){const i={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(e,l),f=c.name;let h=1;c.type===s.FLOAT_MAT2&&(h=2),c.type===s.FLOAT_MAT3&&(h=3),c.type===s.FLOAT_MAT4&&(h=4),i[f]={type:c.type,location:s.getAttribLocation(e,f),locationSize:h}}return i}function nl(s){return s!==""}function gv(s,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _v(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const a2=/^[ \t]*#include +<([\w\d./]+)>/gm;function tp(s){return s.replace(a2,s2)}const r2=new Map;function s2(s,e){let i=ft[e];if(i===void 0){const r=r2.get(e);if(r!==void 0)i=ft[r],nt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return tp(i)}const o2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vv(s){return s.replace(o2,l2)}function l2(s,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function xv(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const c2={[Zc]:"SHADOWMAP_TYPE_PCF",[tl]:"SHADOWMAP_TYPE_VSM"};function u2(s){return c2[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const f2={[Vr]:"ENVMAP_TYPE_CUBE",[ks]:"ENVMAP_TYPE_CUBE",[du]:"ENVMAP_TYPE_CUBE_UV"};function d2(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":f2[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const h2={[ks]:"ENVMAP_MODE_REFRACTION"};function p2(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":h2[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const m2={[qv]:"ENVMAP_BLENDING_MULTIPLY",[sb]:"ENVMAP_BLENDING_MIX",[ob]:"ENVMAP_BLENDING_ADD"};function g2(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":m2[s.combine]||"ENVMAP_BLENDING_NONE"}function _2(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function v2(s,e,i,r){const l=s.getContext(),c=i.defines;let f=i.vertexShader,h=i.fragmentShader;const m=u2(i),p=d2(i),v=p2(i),_=g2(i),g=_2(i),M=t2(i),A=n2(c),w=l.createProgram();let x,y,T=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(nl).join(`
`),x.length>0&&(x+=`
`),y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(nl).join(`
`),y.length>0&&(y+=`
`)):(x=[xv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(nl).join(`
`),y=[xv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+_:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Wi?"#define TONE_MAPPING":"",i.toneMapping!==Wi?ft.tonemapping_pars_fragment:"",i.toneMapping!==Wi?$R("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,QR("linearToOutputTexel",i.outputColorSpace),e2(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(nl).join(`
`)),f=tp(f),f=gv(f,i),f=_v(f,i),h=tp(h),h=gv(h,i),h=_v(h,i),f=vv(f),h=vv(h),i.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,x=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,y=["#define varying in",i.glslVersion===L_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===L_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const D=T+x+f,U=T+y+h,H=hv(l,l.VERTEX_SHADER,D),L=hv(l,l.FRAGMENT_SHADER,U);l.attachShader(w,H),l.attachShader(w,L),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function O(z){if(s.debug.checkShaderErrors){const Z=l.getProgramInfoLog(w)||"",ue=l.getShaderInfoLog(H)||"",pe=l.getShaderInfoLog(L)||"",X=Z.trim(),I=ue.trim(),B=pe.trim();let le=!0,ge=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(le=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,w,H,L);else{const Ee=mv(l,H,"vertex"),F=mv(l,L,"fragment");bt("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+X+`
`+Ee+`
`+F)}else X!==""?nt("WebGLProgram: Program Info Log:",X):(I===""||B==="")&&(ge=!1);ge&&(z.diagnostics={runnable:le,programLog:X,vertexShader:{log:I,prefix:x},fragmentShader:{log:B,prefix:y}})}l.deleteShader(H),l.deleteShader(L),b=new eu(l,w),P=i2(l,w)}let b;this.getUniforms=function(){return b===void 0&&O(this),b};let P;this.getAttributes=function(){return P===void 0&&O(this),P};let W=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return W===!1&&(W=l.getProgramParameter(w,YR)),W},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=jR++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=H,this.fragmentShader=L,this}let x2=0;class S2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new y2(e),i.set(e,r)),r}}class y2{constructor(e){this.id=x2++,this.code=e,this.usedTimes=0}}function M2(s){return s===kr||s===iu||s===au}function E2(s,e,i,r,l,c){const f=new ux,h=new S2,m=new Set,p=[],v=new Map,_=r.logarithmicDepthBuffer;let g=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(b){return m.add(b),b===0?"uv":`uv${b}`}function w(b,P,W,z,Z,ue){const pe=z.fog,X=Z.geometry,I=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?z.environment:null,B=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,le=e.get(b.envMap||I,B),ge=le&&le.mapping===du?le.image.height:null,Ee=M[b.type];b.precision!==null&&(g=r.getMaxPrecision(b.precision),g!==b.precision&&nt("WebGLProgram.getParameters:",b.precision,"not supported, using",g,"instead."));const F=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,$=F!==void 0?F.length:0;let Se=0;X.morphAttributes.position!==void 0&&(Se=1),X.morphAttributes.normal!==void 0&&(Se=2),X.morphAttributes.color!==void 0&&(Se=3);let Re,Ue,oe,ye;if(Ee){const tt=Vi[Ee];Re=tt.vertexShader,Ue=tt.fragmentShader}else Re=b.vertexShader,Ue=b.fragmentShader,h.update(b),oe=h.getVertexShaderID(b),ye=h.getFragmentShaderID(b);const Ae=s.getRenderTarget(),Ge=s.state.buffers.depth.getReversed(),et=Z.isInstancedMesh===!0,Je=Z.isBatchedMesh===!0,Xt=!!b.map,dt=!!b.matcap,vt=!!le,Lt=!!b.aoMap,ct=!!b.lightMap,sn=!!b.bumpMap,Yt=!!b.normalMap,bn=!!b.displacementMap,q=!!b.emissiveMap,en=!!b.metalnessMap,ht=!!b.roughnessMap,Ht=b.anisotropy>0,Ce=b.clearcoat>0,Kt=b.dispersion>0,N=b.iridescence>0,E=b.sheen>0,J=b.transmission>0,ve=Ht&&!!b.anisotropyMap,be=Ce&&!!b.clearcoatMap,we=Ce&&!!b.clearcoatNormalMap,Oe=Ce&&!!b.clearcoatRoughnessMap,fe=N&&!!b.iridescenceMap,de=N&&!!b.iridescenceThicknessMap,Pe=E&&!!b.sheenColorMap,Ie=E&&!!b.sheenRoughnessMap,Ne=!!b.specularMap,De=!!b.specularColorMap,it=!!b.specularIntensityMap,at=J&&!!b.transmissionMap,pt=J&&!!b.thicknessMap,V=!!b.gradientMap,Te=!!b.alphaMap,me=b.alphaTest>0,Be=!!b.alphaHash,Le=!!b.extensions;let Me=Wi;b.toneMapped&&(Ae===null||Ae.isXRRenderTarget===!0)&&(Me=s.toneMapping);const Ye={shaderID:Ee,shaderType:b.type,shaderName:b.name,vertexShader:Re,fragmentShader:Ue,defines:b.defines,customVertexShaderID:oe,customFragmentShaderID:ye,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:g,batching:Je,batchingColor:Je&&Z._colorsTexture!==null,instancing:et,instancingColor:et&&Z.instanceColor!==null,instancingMorph:et&&Z.morphTexture!==null,outputColorSpace:Ae===null?s.outputColorSpace:Ae.isXRRenderTarget===!0?Ae.texture.colorSpace:Mt.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:Xt,matcap:dt,envMap:vt,envMapMode:vt&&le.mapping,envMapCubeUVHeight:ge,aoMap:Lt,lightMap:ct,bumpMap:sn,normalMap:Yt,displacementMap:bn,emissiveMap:q,normalMapObjectSpace:Yt&&b.normalMapType===ub,normalMapTangentSpace:Yt&&b.normalMapType===D_,packedNormalMap:Yt&&b.normalMapType===D_&&M2(b.normalMap.format),metalnessMap:en,roughnessMap:ht,anisotropy:Ht,anisotropyMap:ve,clearcoat:Ce,clearcoatMap:be,clearcoatNormalMap:we,clearcoatRoughnessMap:Oe,dispersion:Kt,iridescence:N,iridescenceMap:fe,iridescenceThicknessMap:de,sheen:E,sheenColorMap:Pe,sheenRoughnessMap:Ie,specularMap:Ne,specularColorMap:De,specularIntensityMap:it,transmission:J,transmissionMap:at,thicknessMap:pt,gradientMap:V,opaque:b.transparent===!1&&b.blending===Hs&&b.alphaToCoverage===!1,alphaMap:Te,alphaTest:me,alphaHash:Be,combine:b.combine,mapUv:Xt&&A(b.map.channel),aoMapUv:Lt&&A(b.aoMap.channel),lightMapUv:ct&&A(b.lightMap.channel),bumpMapUv:sn&&A(b.bumpMap.channel),normalMapUv:Yt&&A(b.normalMap.channel),displacementMapUv:bn&&A(b.displacementMap.channel),emissiveMapUv:q&&A(b.emissiveMap.channel),metalnessMapUv:en&&A(b.metalnessMap.channel),roughnessMapUv:ht&&A(b.roughnessMap.channel),anisotropyMapUv:ve&&A(b.anisotropyMap.channel),clearcoatMapUv:be&&A(b.clearcoatMap.channel),clearcoatNormalMapUv:we&&A(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Oe&&A(b.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&A(b.iridescenceMap.channel),iridescenceThicknessMapUv:de&&A(b.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&A(b.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&A(b.sheenRoughnessMap.channel),specularMapUv:Ne&&A(b.specularMap.channel),specularColorMapUv:De&&A(b.specularColorMap.channel),specularIntensityMapUv:it&&A(b.specularIntensityMap.channel),transmissionMapUv:at&&A(b.transmissionMap.channel),thicknessMapUv:pt&&A(b.thicknessMap.channel),alphaMapUv:Te&&A(b.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Yt||Ht),vertexNormals:!!X.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!X.attributes.uv&&(Xt||Te),fog:!!pe,useFog:b.fog===!0,fogExp2:!!pe&&pe.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||X.attributes.normal===void 0&&Yt===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Ge,skinning:Z.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:Se,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numLightProbeGrids:ue.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&W.length>0,shadowMapType:s.shadowMap.type,toneMapping:Me,decodeVideoTexture:Xt&&b.map.isVideoTexture===!0&&Mt.getTransfer(b.map.colorSpace)===Bt,decodeVideoTextureEmissive:q&&b.emissiveMap.isVideoTexture===!0&&Mt.getTransfer(b.emissiveMap.colorSpace)===Bt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===ya,flipSided:b.side===Yn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Le&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&b.extensions.multiDraw===!0||Je)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ye.vertexUv1s=m.has(1),Ye.vertexUv2s=m.has(2),Ye.vertexUv3s=m.has(3),m.clear(),Ye}function x(b){const P=[];if(b.shaderID?P.push(b.shaderID):(P.push(b.customVertexShaderID),P.push(b.customFragmentShaderID)),b.defines!==void 0)for(const W in b.defines)P.push(W),P.push(b.defines[W]);return b.isRawShaderMaterial===!1&&(y(P,b),T(P,b),P.push(s.outputColorSpace)),P.push(b.customProgramCacheKey),P.join()}function y(b,P){b.push(P.precision),b.push(P.outputColorSpace),b.push(P.envMapMode),b.push(P.envMapCubeUVHeight),b.push(P.mapUv),b.push(P.alphaMapUv),b.push(P.lightMapUv),b.push(P.aoMapUv),b.push(P.bumpMapUv),b.push(P.normalMapUv),b.push(P.displacementMapUv),b.push(P.emissiveMapUv),b.push(P.metalnessMapUv),b.push(P.roughnessMapUv),b.push(P.anisotropyMapUv),b.push(P.clearcoatMapUv),b.push(P.clearcoatNormalMapUv),b.push(P.clearcoatRoughnessMapUv),b.push(P.iridescenceMapUv),b.push(P.iridescenceThicknessMapUv),b.push(P.sheenColorMapUv),b.push(P.sheenRoughnessMapUv),b.push(P.specularMapUv),b.push(P.specularColorMapUv),b.push(P.specularIntensityMapUv),b.push(P.transmissionMapUv),b.push(P.thicknessMapUv),b.push(P.combine),b.push(P.fogExp2),b.push(P.sizeAttenuation),b.push(P.morphTargetsCount),b.push(P.morphAttributeCount),b.push(P.numDirLights),b.push(P.numPointLights),b.push(P.numSpotLights),b.push(P.numSpotLightMaps),b.push(P.numHemiLights),b.push(P.numRectAreaLights),b.push(P.numDirLightShadows),b.push(P.numPointLightShadows),b.push(P.numSpotLightShadows),b.push(P.numSpotLightShadowsWithMaps),b.push(P.numLightProbes),b.push(P.shadowMapType),b.push(P.toneMapping),b.push(P.numClippingPlanes),b.push(P.numClipIntersection),b.push(P.depthPacking)}function T(b,P){f.disableAll(),P.instancing&&f.enable(0),P.instancingColor&&f.enable(1),P.instancingMorph&&f.enable(2),P.matcap&&f.enable(3),P.envMap&&f.enable(4),P.normalMapObjectSpace&&f.enable(5),P.normalMapTangentSpace&&f.enable(6),P.clearcoat&&f.enable(7),P.iridescence&&f.enable(8),P.alphaTest&&f.enable(9),P.vertexColors&&f.enable(10),P.vertexAlphas&&f.enable(11),P.vertexUv1s&&f.enable(12),P.vertexUv2s&&f.enable(13),P.vertexUv3s&&f.enable(14),P.vertexTangents&&f.enable(15),P.anisotropy&&f.enable(16),P.alphaHash&&f.enable(17),P.batching&&f.enable(18),P.dispersion&&f.enable(19),P.batchingColor&&f.enable(20),P.gradientMap&&f.enable(21),P.packedNormalMap&&f.enable(22),P.vertexNormals&&f.enable(23),b.push(f.mask),f.disableAll(),P.fog&&f.enable(0),P.useFog&&f.enable(1),P.flatShading&&f.enable(2),P.logarithmicDepthBuffer&&f.enable(3),P.reversedDepthBuffer&&f.enable(4),P.skinning&&f.enable(5),P.morphTargets&&f.enable(6),P.morphNormals&&f.enable(7),P.morphColors&&f.enable(8),P.premultipliedAlpha&&f.enable(9),P.shadowMapEnabled&&f.enable(10),P.doubleSided&&f.enable(11),P.flipSided&&f.enable(12),P.useDepthPacking&&f.enable(13),P.dithering&&f.enable(14),P.transmission&&f.enable(15),P.sheen&&f.enable(16),P.opaque&&f.enable(17),P.pointsUvs&&f.enable(18),P.decodeVideoTexture&&f.enable(19),P.decodeVideoTextureEmissive&&f.enable(20),P.alphaToCoverage&&f.enable(21),P.numLightProbeGrids>0&&f.enable(22),b.push(f.mask)}function D(b){const P=M[b.type];let W;if(P){const z=Vi[P];W=Yb.clone(z.uniforms)}else W=b.uniforms;return W}function U(b,P){let W=v.get(P);return W!==void 0?++W.usedTimes:(W=new v2(s,P,b,l),p.push(W),v.set(P,W)),W}function H(b){if(--b.usedTimes===0){const P=p.indexOf(b);p[P]=p[p.length-1],p.pop(),v.delete(b.cacheKey),b.destroy()}}function L(b){h.remove(b)}function O(){h.dispose()}return{getParameters:w,getProgramCacheKey:x,getUniforms:D,acquireProgram:U,releaseProgram:H,releaseShaderCache:L,programs:p,dispose:O}}function b2(){let s=new WeakMap;function e(f){return s.has(f)}function i(f){let h=s.get(f);return h===void 0&&(h={},s.set(f,h)),h}function r(f){s.delete(f)}function l(f,h,m){s.get(f)[h]=m}function c(){s=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function A2(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Sv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function yv(){const s=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function f(g){let M=0;return g.isInstancedMesh&&(M+=2),g.isSkinnedMesh&&(M+=1),M}function h(g,M,A,w,x,y){let T=s[e];return T===void 0?(T={id:g.id,object:g,geometry:M,material:A,materialVariant:f(g),groupOrder:w,renderOrder:g.renderOrder,z:x,group:y},s[e]=T):(T.id=g.id,T.object=g,T.geometry=M,T.material=A,T.materialVariant=f(g),T.groupOrder=w,T.renderOrder=g.renderOrder,T.z=x,T.group=y),e++,T}function m(g,M,A,w,x,y){const T=h(g,M,A,w,x,y);A.transmission>0?r.push(T):A.transparent===!0?l.push(T):i.push(T)}function p(g,M,A,w,x,y){const T=h(g,M,A,w,x,y);A.transmission>0?r.unshift(T):A.transparent===!0?l.unshift(T):i.unshift(T)}function v(g,M){i.length>1&&i.sort(g||A2),r.length>1&&r.sort(M||Sv),l.length>1&&l.sort(M||Sv)}function _(){for(let g=e,M=s.length;g<M;g++){const A=s[g];if(A.id===null)break;A.id=null,A.object=null,A.geometry=null,A.material=null,A.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:m,unshift:p,finish:_,sort:v}}function T2(){let s=new WeakMap;function e(r,l){const c=s.get(r);let f;return c===void 0?(f=new yv,s.set(r,[f])):l>=c.length?(f=new yv,c.push(f)):f=c[l],f}function i(){s=new WeakMap}return{get:e,dispose:i}}function R2(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ne,color:new Dt};break;case"SpotLight":i={position:new ne,direction:new ne,color:new Dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ne,color:new Dt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ne,skyColor:new Dt,groundColor:new Dt};break;case"RectAreaLight":i={color:new Dt,position:new ne,halfWidth:new ne,halfHeight:new ne};break}return s[e.id]=i,i}}}function C2(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=i,i}}}let w2=0;function D2(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function U2(s){const e=new R2,i=C2(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new ne);const l=new ne,c=new xn,f=new xn;function h(p){let v=0,_=0,g=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let M=0,A=0,w=0,x=0,y=0,T=0,D=0,U=0,H=0,L=0,O=0;p.sort(D2);for(let P=0,W=p.length;P<W;P++){const z=p[P],Z=z.color,ue=z.intensity,pe=z.distance;let X=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===kr?X=z.shadow.map.texture:X=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)v+=Z.r*ue,_+=Z.g*ue,g+=Z.b*ue;else if(z.isLightProbe){for(let I=0;I<9;I++)r.probe[I].addScaledVector(z.sh.coefficients[I],ue);O++}else if(z.isDirectionalLight){const I=e.get(z);if(I.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const B=z.shadow,le=i.get(z);le.shadowIntensity=B.intensity,le.shadowBias=B.bias,le.shadowNormalBias=B.normalBias,le.shadowRadius=B.radius,le.shadowMapSize=B.mapSize,r.directionalShadow[M]=le,r.directionalShadowMap[M]=X,r.directionalShadowMatrix[M]=z.shadow.matrix,T++}r.directional[M]=I,M++}else if(z.isSpotLight){const I=e.get(z);I.position.setFromMatrixPosition(z.matrixWorld),I.color.copy(Z).multiplyScalar(ue),I.distance=pe,I.coneCos=Math.cos(z.angle),I.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),I.decay=z.decay,r.spot[w]=I;const B=z.shadow;if(z.map&&(r.spotLightMap[H]=z.map,H++,B.updateMatrices(z),z.castShadow&&L++),r.spotLightMatrix[w]=B.matrix,z.castShadow){const le=i.get(z);le.shadowIntensity=B.intensity,le.shadowBias=B.bias,le.shadowNormalBias=B.normalBias,le.shadowRadius=B.radius,le.shadowMapSize=B.mapSize,r.spotShadow[w]=le,r.spotShadowMap[w]=X,U++}w++}else if(z.isRectAreaLight){const I=e.get(z);I.color.copy(Z).multiplyScalar(ue),I.halfWidth.set(z.width*.5,0,0),I.halfHeight.set(0,z.height*.5,0),r.rectArea[x]=I,x++}else if(z.isPointLight){const I=e.get(z);if(I.color.copy(z.color).multiplyScalar(z.intensity),I.distance=z.distance,I.decay=z.decay,z.castShadow){const B=z.shadow,le=i.get(z);le.shadowIntensity=B.intensity,le.shadowBias=B.bias,le.shadowNormalBias=B.normalBias,le.shadowRadius=B.radius,le.shadowMapSize=B.mapSize,le.shadowCameraNear=B.camera.near,le.shadowCameraFar=B.camera.far,r.pointShadow[A]=le,r.pointShadowMap[A]=X,r.pointShadowMatrix[A]=z.shadow.matrix,D++}r.point[A]=I,A++}else if(z.isHemisphereLight){const I=e.get(z);I.skyColor.copy(z.color).multiplyScalar(ue),I.groundColor.copy(z.groundColor).multiplyScalar(ue),r.hemi[y]=I,y++}}x>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=He.LTC_FLOAT_1,r.rectAreaLTC2=He.LTC_FLOAT_2):(r.rectAreaLTC1=He.LTC_HALF_1,r.rectAreaLTC2=He.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=_,r.ambient[2]=g;const b=r.hash;(b.directionalLength!==M||b.pointLength!==A||b.spotLength!==w||b.rectAreaLength!==x||b.hemiLength!==y||b.numDirectionalShadows!==T||b.numPointShadows!==D||b.numSpotShadows!==U||b.numSpotMaps!==H||b.numLightProbes!==O)&&(r.directional.length=M,r.spot.length=w,r.rectArea.length=x,r.point.length=A,r.hemi.length=y,r.directionalShadow.length=T,r.directionalShadowMap.length=T,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=U,r.spotShadowMap.length=U,r.directionalShadowMatrix.length=T,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=U+H-L,r.spotLightMap.length=H,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=O,b.directionalLength=M,b.pointLength=A,b.spotLength=w,b.rectAreaLength=x,b.hemiLength=y,b.numDirectionalShadows=T,b.numPointShadows=D,b.numSpotShadows=U,b.numSpotMaps=H,b.numLightProbes=O,r.version=w2++)}function m(p,v){let _=0,g=0,M=0,A=0,w=0;const x=v.matrixWorldInverse;for(let y=0,T=p.length;y<T;y++){const D=p[y];if(D.isDirectionalLight){const U=r.directional[_];U.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(x),_++}else if(D.isSpotLight){const U=r.spot[M];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(x),U.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(x),M++}else if(D.isRectAreaLight){const U=r.rectArea[A];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(x),f.identity(),c.copy(D.matrixWorld),c.premultiply(x),f.extractRotation(c),U.halfWidth.set(D.width*.5,0,0),U.halfHeight.set(0,D.height*.5,0),U.halfWidth.applyMatrix4(f),U.halfHeight.applyMatrix4(f),A++}else if(D.isPointLight){const U=r.point[g];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(x),g++}else if(D.isHemisphereLight){const U=r.hemi[w];U.direction.setFromMatrixPosition(D.matrixWorld),U.direction.transformDirection(x),w++}}}return{setup:h,setupView:m,state:r}}function Mv(s){const e=new U2(s),i=[],r=[],l=[];function c(g){_.camera=g,i.length=0,r.length=0,l.length=0}function f(g){i.push(g)}function h(g){r.push(g)}function m(g){l.push(g)}function p(){e.setup(i)}function v(g){e.setupView(i,g)}const _={lightsArray:i,shadowsArray:r,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:_,setupLights:p,setupLightsView:v,pushLight:f,pushShadow:h,pushLightProbeGrid:m}}function N2(s){let e=new WeakMap;function i(l,c=0){const f=e.get(l);let h;return f===void 0?(h=new Mv(s),e.set(l,[h])):c>=f.length?(h=new Mv(s),f.push(h)):h=f[c],h}function r(){e=new WeakMap}return{get:i,dispose:r}}const L2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,O2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,P2=[new ne(1,0,0),new ne(-1,0,0),new ne(0,1,0),new ne(0,-1,0),new ne(0,0,1),new ne(0,0,-1)],I2=[new ne(0,-1,0),new ne(0,-1,0),new ne(0,0,1),new ne(0,0,-1),new ne(0,-1,0),new ne(0,-1,0)],Ev=new xn,el=new ne,lh=new ne;function F2(s,e,i){let r=new mx;const l=new Ut,c=new Ut,f=new un,h=new Qb,m=new Jb,p={},v=i.maxTextureSize,_={[hr]:Yn,[Yn]:hr,[ya]:ya},g=new Ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ut},radius:{value:4}},vertexShader:L2,fragmentShader:O2}),M=g.clone();M.defines.HORIZONTAL_PASS=1;const A=new Qi;A.setAttribute("position",new Yi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new oi(A,g),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zc;let y=this.type;this.render=function(L,O,b){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||L.length===0)return;this.type===GE&&(nt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Zc);const P=s.getRenderTarget(),W=s.getActiveCubeFace(),z=s.getActiveMipmapLevel(),Z=s.state;Z.setBlending(Ea),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const ue=y!==this.type;ue&&O.traverse(function(pe){pe.material&&(Array.isArray(pe.material)?pe.material.forEach(X=>X.needsUpdate=!0):pe.material.needsUpdate=!0)});for(let pe=0,X=L.length;pe<X;pe++){const I=L[pe],B=I.shadow;if(B===void 0){nt("WebGLShadowMap:",I,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;l.copy(B.mapSize);const le=B.getFrameExtents();l.multiply(le),c.copy(B.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/le.x),l.x=c.x*le.x,B.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/le.y),l.y=c.y*le.y,B.mapSize.y=c.y));const ge=s.state.buffers.depth.getReversed();if(B.camera._reversedDepth=ge,B.map===null||ue===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===tl){if(I.isPointLight){nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new qi(l.x,l.y,{format:kr,type:Ta,minFilter:In,magFilter:In,generateMipmaps:!1}),B.map.texture.name=I.name+".shadowMap",B.map.depthTexture=new Ws(l.x,l.y,ki),B.map.depthTexture.name=I.name+".shadowMapDepth",B.map.depthTexture.format=Ra,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Dn,B.map.depthTexture.magFilter=Dn}else I.isPointLight?(B.map=new Mx(l.x),B.map.depthTexture=new Wb(l.x,Zi)):(B.map=new qi(l.x,l.y),B.map.depthTexture=new Ws(l.x,l.y,Zi)),B.map.depthTexture.name=I.name+".shadowMap",B.map.depthTexture.format=Ra,this.type===Zc?(B.map.depthTexture.compareFunction=ge?xp:vp,B.map.depthTexture.minFilter=In,B.map.depthTexture.magFilter=In):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Dn,B.map.depthTexture.magFilter=Dn);B.camera.updateProjectionMatrix()}const Ee=B.map.isWebGLCubeRenderTarget?6:1;for(let F=0;F<Ee;F++){if(B.map.isWebGLCubeRenderTarget)s.setRenderTarget(B.map,F),s.clear();else{F===0&&(s.setRenderTarget(B.map),s.clear());const $=B.getViewport(F);f.set(c.x*$.x,c.y*$.y,c.x*$.z,c.y*$.w),Z.viewport(f)}if(I.isPointLight){const $=B.camera,Se=B.matrix,Re=I.distance||$.far;Re!==$.far&&($.far=Re,$.updateProjectionMatrix()),el.setFromMatrixPosition(I.matrixWorld),$.position.copy(el),lh.copy($.position),lh.add(P2[F]),$.up.copy(I2[F]),$.lookAt(lh),$.updateMatrixWorld(),Se.makeTranslation(-el.x,-el.y,-el.z),Ev.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Ev,$.coordinateSystem,$.reversedDepth)}else B.updateMatrices(I);r=B.getFrustum(),U(O,b,B.camera,I,this.type)}B.isPointLightShadow!==!0&&this.type===tl&&T(B,b),B.needsUpdate=!1}y=this.type,x.needsUpdate=!1,s.setRenderTarget(P,W,z)};function T(L,O){const b=e.update(w);g.defines.VSM_SAMPLES!==L.blurSamples&&(g.defines.VSM_SAMPLES=L.blurSamples,M.defines.VSM_SAMPLES=L.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new qi(l.x,l.y,{format:kr,type:Ta})),g.uniforms.shadow_pass.value=L.map.depthTexture,g.uniforms.resolution.value=L.mapSize,g.uniforms.radius.value=L.radius,s.setRenderTarget(L.mapPass),s.clear(),s.renderBufferDirect(O,null,b,g,w,null),M.uniforms.shadow_pass.value=L.mapPass.texture,M.uniforms.resolution.value=L.mapSize,M.uniforms.radius.value=L.radius,s.setRenderTarget(L.map),s.clear(),s.renderBufferDirect(O,null,b,M,w,null)}function D(L,O,b,P){let W=null;const z=b.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(z!==void 0)W=z;else if(W=b.isPointLight===!0?m:h,s.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const Z=W.uuid,ue=O.uuid;let pe=p[Z];pe===void 0&&(pe={},p[Z]=pe);let X=pe[ue];X===void 0&&(X=W.clone(),pe[ue]=X,O.addEventListener("dispose",H)),W=X}if(W.visible=O.visible,W.wireframe=O.wireframe,P===tl?W.side=O.shadowSide!==null?O.shadowSide:O.side:W.side=O.shadowSide!==null?O.shadowSide:_[O.side],W.alphaMap=O.alphaMap,W.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,W.map=O.map,W.clipShadows=O.clipShadows,W.clippingPlanes=O.clippingPlanes,W.clipIntersection=O.clipIntersection,W.displacementMap=O.displacementMap,W.displacementScale=O.displacementScale,W.displacementBias=O.displacementBias,W.wireframeLinewidth=O.wireframeLinewidth,W.linewidth=O.linewidth,b.isPointLight===!0&&W.isMeshDistanceMaterial===!0){const Z=s.properties.get(W);Z.light=b}return W}function U(L,O,b,P,W){if(L.visible===!1)return;if(L.layers.test(O.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&W===tl)&&(!L.frustumCulled||r.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,L.matrixWorld);const ue=e.update(L),pe=L.material;if(Array.isArray(pe)){const X=ue.groups;for(let I=0,B=X.length;I<B;I++){const le=X[I],ge=pe[le.materialIndex];if(ge&&ge.visible){const Ee=D(L,ge,P,W);L.onBeforeShadow(s,L,O,b,ue,Ee,le),s.renderBufferDirect(b,null,ue,Ee,L,le),L.onAfterShadow(s,L,O,b,ue,Ee,le)}}}else if(pe.visible){const X=D(L,pe,P,W);L.onBeforeShadow(s,L,O,b,ue,X,null),s.renderBufferDirect(b,null,ue,X,L,null),L.onAfterShadow(s,L,O,b,ue,X,null)}}const Z=L.children;for(let ue=0,pe=Z.length;ue<pe;ue++)U(Z[ue],O,b,P,W)}function H(L){L.target.removeEventListener("dispose",H);for(const b in p){const P=p[b],W=L.target.uuid;W in P&&(P[W].dispose(),delete P[W])}}}function z2(s,e){function i(){let V=!1;const Te=new un;let me=null;const Be=new un(0,0,0,0);return{setMask:function(Le){me!==Le&&!V&&(s.colorMask(Le,Le,Le,Le),me=Le)},setLocked:function(Le){V=Le},setClear:function(Le,Me,Ye,tt,tn){tn===!0&&(Le*=tt,Me*=tt,Ye*=tt),Te.set(Le,Me,Ye,tt),Be.equals(Te)===!1&&(s.clearColor(Le,Me,Ye,tt),Be.copy(Te))},reset:function(){V=!1,me=null,Be.set(-1,0,0,0)}}}function r(){let V=!1,Te=!1,me=null,Be=null,Le=null;return{setReversed:function(Me){if(Te!==Me){const Ye=e.get("EXT_clip_control");Me?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT),Te=Me;const tt=Le;Le=null,this.setClear(tt)}},getReversed:function(){return Te},setTest:function(Me){Me?Ae(s.DEPTH_TEST):Ge(s.DEPTH_TEST)},setMask:function(Me){me!==Me&&!V&&(s.depthMask(Me),me=Me)},setFunc:function(Me){if(Te&&(Me=Sb[Me]),Be!==Me){switch(Me){case hh:s.depthFunc(s.NEVER);break;case ph:s.depthFunc(s.ALWAYS);break;case mh:s.depthFunc(s.LESS);break;case Vs:s.depthFunc(s.LEQUAL);break;case gh:s.depthFunc(s.EQUAL);break;case _h:s.depthFunc(s.GEQUAL);break;case vh:s.depthFunc(s.GREATER);break;case xh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Be=Me}},setLocked:function(Me){V=Me},setClear:function(Me){Le!==Me&&(Le=Me,Te&&(Me=1-Me),s.clearDepth(Me))},reset:function(){V=!1,me=null,Be=null,Le=null,Te=!1}}}function l(){let V=!1,Te=null,me=null,Be=null,Le=null,Me=null,Ye=null,tt=null,tn=null;return{setTest:function(Ct){V||(Ct?Ae(s.STENCIL_TEST):Ge(s.STENCIL_TEST))},setMask:function(Ct){Te!==Ct&&!V&&(s.stencilMask(Ct),Te=Ct)},setFunc:function(Ct,li,jn){(me!==Ct||Be!==li||Le!==jn)&&(s.stencilFunc(Ct,li,jn),me=Ct,Be=li,Le=jn)},setOp:function(Ct,li,jn){(Me!==Ct||Ye!==li||tt!==jn)&&(s.stencilOp(Ct,li,jn),Me=Ct,Ye=li,tt=jn)},setLocked:function(Ct){V=Ct},setClear:function(Ct){tn!==Ct&&(s.clearStencil(Ct),tn=Ct)},reset:function(){V=!1,Te=null,me=null,Be=null,Le=null,Me=null,Ye=null,tt=null,tn=null}}}const c=new i,f=new r,h=new l,m=new WeakMap,p=new WeakMap;let v={},_={},g={},M=new WeakMap,A=[],w=null,x=!1,y=null,T=null,D=null,U=null,H=null,L=null,O=null,b=new Dt(0,0,0),P=0,W=!1,z=null,Z=null,ue=null,pe=null,X=null;const I=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,le=0;const ge=s.getParameter(s.VERSION);ge.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(ge)[1]),B=le>=1):ge.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(ge)[1]),B=le>=2);let Ee=null,F={};const $=s.getParameter(s.SCISSOR_BOX),Se=s.getParameter(s.VIEWPORT),Re=new un().fromArray($),Ue=new un().fromArray(Se);function oe(V,Te,me,Be){const Le=new Uint8Array(4),Me=s.createTexture();s.bindTexture(V,Me),s.texParameteri(V,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(V,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ye=0;Ye<me;Ye++)V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY?s.texImage3D(Te,0,s.RGBA,1,1,Be,0,s.RGBA,s.UNSIGNED_BYTE,Le):s.texImage2D(Te+Ye,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Le);return Me}const ye={};ye[s.TEXTURE_2D]=oe(s.TEXTURE_2D,s.TEXTURE_2D,1),ye[s.TEXTURE_CUBE_MAP]=oe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[s.TEXTURE_2D_ARRAY]=oe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ye[s.TEXTURE_3D]=oe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),Ae(s.DEPTH_TEST),f.setFunc(Vs),sn(!1),Yt(T_),Ae(s.CULL_FACE),Lt(Ea);function Ae(V){v[V]!==!0&&(s.enable(V),v[V]=!0)}function Ge(V){v[V]!==!1&&(s.disable(V),v[V]=!1)}function et(V,Te){return g[V]!==Te?(s.bindFramebuffer(V,Te),g[V]=Te,V===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Te),V===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Te),!0):!1}function Je(V,Te){let me=A,Be=!1;if(V){me=M.get(Te),me===void 0&&(me=[],M.set(Te,me));const Le=V.textures;if(me.length!==Le.length||me[0]!==s.COLOR_ATTACHMENT0){for(let Me=0,Ye=Le.length;Me<Ye;Me++)me[Me]=s.COLOR_ATTACHMENT0+Me;me.length=Le.length,Be=!0}}else me[0]!==s.BACK&&(me[0]=s.BACK,Be=!0);Be&&s.drawBuffers(me)}function Xt(V){return w!==V?(s.useProgram(V),w=V,!0):!1}const dt={[zr]:s.FUNC_ADD,[kE]:s.FUNC_SUBTRACT,[XE]:s.FUNC_REVERSE_SUBTRACT};dt[WE]=s.MIN,dt[qE]=s.MAX;const vt={[YE]:s.ZERO,[jE]:s.ONE,[ZE]:s.SRC_COLOR,[fh]:s.SRC_ALPHA,[tb]:s.SRC_ALPHA_SATURATE,[$E]:s.DST_COLOR,[QE]:s.DST_ALPHA,[KE]:s.ONE_MINUS_SRC_COLOR,[dh]:s.ONE_MINUS_SRC_ALPHA,[eb]:s.ONE_MINUS_DST_COLOR,[JE]:s.ONE_MINUS_DST_ALPHA,[nb]:s.CONSTANT_COLOR,[ib]:s.ONE_MINUS_CONSTANT_COLOR,[ab]:s.CONSTANT_ALPHA,[rb]:s.ONE_MINUS_CONSTANT_ALPHA};function Lt(V,Te,me,Be,Le,Me,Ye,tt,tn,Ct){if(V===Ea){x===!0&&(Ge(s.BLEND),x=!1);return}if(x===!1&&(Ae(s.BLEND),x=!0),V!==VE){if(V!==y||Ct!==W){if((T!==zr||H!==zr)&&(s.blendEquation(s.FUNC_ADD),T=zr,H=zr),Ct)switch(V){case Hs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case R_:s.blendFunc(s.ONE,s.ONE);break;case C_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case w_:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:bt("WebGLState: Invalid blending: ",V);break}else switch(V){case Hs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case R_:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case C_:bt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case w_:bt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:bt("WebGLState: Invalid blending: ",V);break}D=null,U=null,L=null,O=null,b.set(0,0,0),P=0,y=V,W=Ct}return}Le=Le||Te,Me=Me||me,Ye=Ye||Be,(Te!==T||Le!==H)&&(s.blendEquationSeparate(dt[Te],dt[Le]),T=Te,H=Le),(me!==D||Be!==U||Me!==L||Ye!==O)&&(s.blendFuncSeparate(vt[me],vt[Be],vt[Me],vt[Ye]),D=me,U=Be,L=Me,O=Ye),(tt.equals(b)===!1||tn!==P)&&(s.blendColor(tt.r,tt.g,tt.b,tn),b.copy(tt),P=tn),y=V,W=!1}function ct(V,Te){V.side===ya?Ge(s.CULL_FACE):Ae(s.CULL_FACE);let me=V.side===Yn;Te&&(me=!me),sn(me),V.blending===Hs&&V.transparent===!1?Lt(Ea):Lt(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),f.setFunc(V.depthFunc),f.setTest(V.depthTest),f.setMask(V.depthWrite),c.setMask(V.colorWrite);const Be=V.stencilWrite;h.setTest(Be),Be&&(h.setMask(V.stencilWriteMask),h.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),h.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),q(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?Ae(s.SAMPLE_ALPHA_TO_COVERAGE):Ge(s.SAMPLE_ALPHA_TO_COVERAGE)}function sn(V){z!==V&&(V?s.frontFace(s.CW):s.frontFace(s.CCW),z=V)}function Yt(V){V!==BE?(Ae(s.CULL_FACE),V!==Z&&(V===T_?s.cullFace(s.BACK):V===HE?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ge(s.CULL_FACE),Z=V}function bn(V){V!==ue&&(B&&s.lineWidth(V),ue=V)}function q(V,Te,me){V?(Ae(s.POLYGON_OFFSET_FILL),(pe!==Te||X!==me)&&(pe=Te,X=me,f.getReversed()&&(Te=-Te),s.polygonOffset(Te,me))):Ge(s.POLYGON_OFFSET_FILL)}function en(V){V?Ae(s.SCISSOR_TEST):Ge(s.SCISSOR_TEST)}function ht(V){V===void 0&&(V=s.TEXTURE0+I-1),Ee!==V&&(s.activeTexture(V),Ee=V)}function Ht(V,Te,me){me===void 0&&(Ee===null?me=s.TEXTURE0+I-1:me=Ee);let Be=F[me];Be===void 0&&(Be={type:void 0,texture:void 0},F[me]=Be),(Be.type!==V||Be.texture!==Te)&&(Ee!==me&&(s.activeTexture(me),Ee=me),s.bindTexture(V,Te||ye[V]),Be.type=V,Be.texture=Te)}function Ce(){const V=F[Ee];V!==void 0&&V.type!==void 0&&(s.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function Kt(){try{s.compressedTexImage2D(...arguments)}catch(V){bt("WebGLState:",V)}}function N(){try{s.compressedTexImage3D(...arguments)}catch(V){bt("WebGLState:",V)}}function E(){try{s.texSubImage2D(...arguments)}catch(V){bt("WebGLState:",V)}}function J(){try{s.texSubImage3D(...arguments)}catch(V){bt("WebGLState:",V)}}function ve(){try{s.compressedTexSubImage2D(...arguments)}catch(V){bt("WebGLState:",V)}}function be(){try{s.compressedTexSubImage3D(...arguments)}catch(V){bt("WebGLState:",V)}}function we(){try{s.texStorage2D(...arguments)}catch(V){bt("WebGLState:",V)}}function Oe(){try{s.texStorage3D(...arguments)}catch(V){bt("WebGLState:",V)}}function fe(){try{s.texImage2D(...arguments)}catch(V){bt("WebGLState:",V)}}function de(){try{s.texImage3D(...arguments)}catch(V){bt("WebGLState:",V)}}function Pe(V){return _[V]!==void 0?_[V]:s.getParameter(V)}function Ie(V,Te){_[V]!==Te&&(s.pixelStorei(V,Te),_[V]=Te)}function Ne(V){Re.equals(V)===!1&&(s.scissor(V.x,V.y,V.z,V.w),Re.copy(V))}function De(V){Ue.equals(V)===!1&&(s.viewport(V.x,V.y,V.z,V.w),Ue.copy(V))}function it(V,Te){let me=p.get(Te);me===void 0&&(me=new WeakMap,p.set(Te,me));let Be=me.get(V);Be===void 0&&(Be=s.getUniformBlockIndex(Te,V.name),me.set(V,Be))}function at(V,Te){const Be=p.get(Te).get(V);m.get(Te)!==Be&&(s.uniformBlockBinding(Te,Be,V.__bindingPointIndex),m.set(Te,Be))}function pt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),v={},_={},Ee=null,F={},g={},M=new WeakMap,A=[],w=null,x=!1,y=null,T=null,D=null,U=null,H=null,L=null,O=null,b=new Dt(0,0,0),P=0,W=!1,z=null,Z=null,ue=null,pe=null,X=null,Re.set(0,0,s.canvas.width,s.canvas.height),Ue.set(0,0,s.canvas.width,s.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:Ae,disable:Ge,bindFramebuffer:et,drawBuffers:Je,useProgram:Xt,setBlending:Lt,setMaterial:ct,setFlipSided:sn,setCullFace:Yt,setLineWidth:bn,setPolygonOffset:q,setScissorTest:en,activeTexture:ht,bindTexture:Ht,unbindTexture:Ce,compressedTexImage2D:Kt,compressedTexImage3D:N,texImage2D:fe,texImage3D:de,pixelStorei:Ie,getParameter:Pe,updateUBOMapping:it,uniformBlockBinding:at,texStorage2D:we,texStorage3D:Oe,texSubImage2D:E,texSubImage3D:J,compressedTexSubImage2D:ve,compressedTexSubImage3D:be,scissor:Ne,viewport:De,reset:pt}}function B2(s,e,i,r,l,c,f){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ut,v=new WeakMap,_=new Set;let g;const M=new WeakMap;let A=!1;try{A=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(N,E){return A?new OffscreenCanvas(N,E):lu("canvas")}function x(N,E,J){let ve=1;const be=Kt(N);if((be.width>J||be.height>J)&&(ve=J/Math.max(be.width,be.height)),ve<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const we=Math.floor(ve*be.width),Oe=Math.floor(ve*be.height);g===void 0&&(g=w(we,Oe));const fe=E?w(we,Oe):g;return fe.width=we,fe.height=Oe,fe.getContext("2d").drawImage(N,0,0,we,Oe),nt("WebGLRenderer: Texture has been resized from ("+be.width+"x"+be.height+") to ("+we+"x"+Oe+")."),fe}else return"data"in N&&nt("WebGLRenderer: Image in DataTexture is too big ("+be.width+"x"+be.height+")."),N;return N}function y(N){return N.generateMipmaps}function T(N){s.generateMipmap(N)}function D(N){return N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?s.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function U(N,E,J,ve,be,we=!1){if(N!==null){if(s[N]!==void 0)return s[N];nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let Oe;ve&&(Oe=e.get("EXT_texture_norm16"),Oe||nt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let fe=E;if(E===s.RED&&(J===s.FLOAT&&(fe=s.R32F),J===s.HALF_FLOAT&&(fe=s.R16F),J===s.UNSIGNED_BYTE&&(fe=s.R8),J===s.UNSIGNED_SHORT&&Oe&&(fe=Oe.R16_EXT),J===s.SHORT&&Oe&&(fe=Oe.R16_SNORM_EXT)),E===s.RED_INTEGER&&(J===s.UNSIGNED_BYTE&&(fe=s.R8UI),J===s.UNSIGNED_SHORT&&(fe=s.R16UI),J===s.UNSIGNED_INT&&(fe=s.R32UI),J===s.BYTE&&(fe=s.R8I),J===s.SHORT&&(fe=s.R16I),J===s.INT&&(fe=s.R32I)),E===s.RG&&(J===s.FLOAT&&(fe=s.RG32F),J===s.HALF_FLOAT&&(fe=s.RG16F),J===s.UNSIGNED_BYTE&&(fe=s.RG8),J===s.UNSIGNED_SHORT&&Oe&&(fe=Oe.RG16_EXT),J===s.SHORT&&Oe&&(fe=Oe.RG16_SNORM_EXT)),E===s.RG_INTEGER&&(J===s.UNSIGNED_BYTE&&(fe=s.RG8UI),J===s.UNSIGNED_SHORT&&(fe=s.RG16UI),J===s.UNSIGNED_INT&&(fe=s.RG32UI),J===s.BYTE&&(fe=s.RG8I),J===s.SHORT&&(fe=s.RG16I),J===s.INT&&(fe=s.RG32I)),E===s.RGB_INTEGER&&(J===s.UNSIGNED_BYTE&&(fe=s.RGB8UI),J===s.UNSIGNED_SHORT&&(fe=s.RGB16UI),J===s.UNSIGNED_INT&&(fe=s.RGB32UI),J===s.BYTE&&(fe=s.RGB8I),J===s.SHORT&&(fe=s.RGB16I),J===s.INT&&(fe=s.RGB32I)),E===s.RGBA_INTEGER&&(J===s.UNSIGNED_BYTE&&(fe=s.RGBA8UI),J===s.UNSIGNED_SHORT&&(fe=s.RGBA16UI),J===s.UNSIGNED_INT&&(fe=s.RGBA32UI),J===s.BYTE&&(fe=s.RGBA8I),J===s.SHORT&&(fe=s.RGBA16I),J===s.INT&&(fe=s.RGBA32I)),E===s.RGB&&(J===s.UNSIGNED_SHORT&&Oe&&(fe=Oe.RGB16_EXT),J===s.SHORT&&Oe&&(fe=Oe.RGB16_SNORM_EXT),J===s.UNSIGNED_INT_5_9_9_9_REV&&(fe=s.RGB9_E5),J===s.UNSIGNED_INT_10F_11F_11F_REV&&(fe=s.R11F_G11F_B10F)),E===s.RGBA){const de=we?su:Mt.getTransfer(be);J===s.FLOAT&&(fe=s.RGBA32F),J===s.HALF_FLOAT&&(fe=s.RGBA16F),J===s.UNSIGNED_BYTE&&(fe=de===Bt?s.SRGB8_ALPHA8:s.RGBA8),J===s.UNSIGNED_SHORT&&Oe&&(fe=Oe.RGBA16_EXT),J===s.SHORT&&Oe&&(fe=Oe.RGBA16_SNORM_EXT),J===s.UNSIGNED_SHORT_4_4_4_4&&(fe=s.RGBA4),J===s.UNSIGNED_SHORT_5_5_5_1&&(fe=s.RGB5_A1)}return(fe===s.R16F||fe===s.R32F||fe===s.RG16F||fe===s.RG32F||fe===s.RGBA16F||fe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function H(N,E){let J;return N?E===null||E===Zi||E===rl?J=s.DEPTH24_STENCIL8:E===ki?J=s.DEPTH32F_STENCIL8:E===al&&(J=s.DEPTH24_STENCIL8,nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Zi||E===rl?J=s.DEPTH_COMPONENT24:E===ki?J=s.DEPTH_COMPONENT32F:E===al&&(J=s.DEPTH_COMPONENT16),J}function L(N,E){return y(N)===!0||N.isFramebufferTexture&&N.minFilter!==Dn&&N.minFilter!==In?Math.log2(Math.max(E.width,E.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?E.mipmaps.length:1}function O(N){const E=N.target;E.removeEventListener("dispose",O),P(E),E.isVideoTexture&&v.delete(E),E.isHTMLTexture&&_.delete(E)}function b(N){const E=N.target;E.removeEventListener("dispose",b),z(E)}function P(N){const E=r.get(N);if(E.__webglInit===void 0)return;const J=N.source,ve=M.get(J);if(ve){const be=ve[E.__cacheKey];be.usedTimes--,be.usedTimes===0&&W(N),Object.keys(ve).length===0&&M.delete(J)}r.remove(N)}function W(N){const E=r.get(N);s.deleteTexture(E.__webglTexture);const J=N.source,ve=M.get(J);delete ve[E.__cacheKey],f.memory.textures--}function z(N){const E=r.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),r.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let ve=0;ve<6;ve++){if(Array.isArray(E.__webglFramebuffer[ve]))for(let be=0;be<E.__webglFramebuffer[ve].length;be++)s.deleteFramebuffer(E.__webglFramebuffer[ve][be]);else s.deleteFramebuffer(E.__webglFramebuffer[ve]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[ve])}else{if(Array.isArray(E.__webglFramebuffer))for(let ve=0;ve<E.__webglFramebuffer.length;ve++)s.deleteFramebuffer(E.__webglFramebuffer[ve]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ve=0;ve<E.__webglColorRenderbuffer.length;ve++)E.__webglColorRenderbuffer[ve]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[ve]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const J=N.textures;for(let ve=0,be=J.length;ve<be;ve++){const we=r.get(J[ve]);we.__webglTexture&&(s.deleteTexture(we.__webglTexture),f.memory.textures--),r.remove(J[ve])}r.remove(N)}let Z=0;function ue(){Z=0}function pe(){return Z}function X(N){Z=N}function I(){const N=Z;return N>=l.maxTextures&&nt("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),Z+=1,N}function B(N){const E=[];return E.push(N.wrapS),E.push(N.wrapT),E.push(N.wrapR||0),E.push(N.magFilter),E.push(N.minFilter),E.push(N.anisotropy),E.push(N.internalFormat),E.push(N.format),E.push(N.type),E.push(N.generateMipmaps),E.push(N.premultiplyAlpha),E.push(N.flipY),E.push(N.unpackAlignment),E.push(N.colorSpace),E.join()}function le(N,E){const J=r.get(N);if(N.isVideoTexture&&Ht(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&J.__version!==N.version){const ve=N.image;if(ve===null)nt("WebGLRenderer: Texture marked for update but no image data found.");else if(ve.complete===!1)nt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ge(J,N,E);return}}else N.isExternalTexture&&(J.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,J.__webglTexture,s.TEXTURE0+E)}function ge(N,E){const J=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&J.__version!==N.version){Ge(J,N,E);return}else N.isExternalTexture&&(J.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(s.TEXTURE_2D_ARRAY,J.__webglTexture,s.TEXTURE0+E)}function Ee(N,E){const J=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&J.__version!==N.version){Ge(J,N,E);return}i.bindTexture(s.TEXTURE_3D,J.__webglTexture,s.TEXTURE0+E)}function F(N,E){const J=r.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&J.__version!==N.version){et(J,N,E);return}i.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture,s.TEXTURE0+E)}const $={[Sh]:s.REPEAT,[Ma]:s.CLAMP_TO_EDGE,[yh]:s.MIRRORED_REPEAT},Se={[Dn]:s.NEAREST,[lb]:s.NEAREST_MIPMAP_NEAREST,[Ec]:s.NEAREST_MIPMAP_LINEAR,[In]:s.LINEAR,[Nd]:s.LINEAR_MIPMAP_NEAREST,[Hr]:s.LINEAR_MIPMAP_LINEAR},Re={[fb]:s.NEVER,[gb]:s.ALWAYS,[db]:s.LESS,[vp]:s.LEQUAL,[hb]:s.EQUAL,[xp]:s.GEQUAL,[pb]:s.GREATER,[mb]:s.NOTEQUAL};function Ue(N,E){if(E.type===ki&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===In||E.magFilter===Nd||E.magFilter===Ec||E.magFilter===Hr||E.minFilter===In||E.minFilter===Nd||E.minFilter===Ec||E.minFilter===Hr)&&nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(N,s.TEXTURE_WRAP_S,$[E.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,$[E.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,$[E.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,Se[E.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,Se[E.minFilter]),E.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,Re[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Dn||E.minFilter!==Ec&&E.minFilter!==Hr||E.type===ki&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");s.texParameterf(N,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function oe(N,E){let J=!1;N.__webglInit===void 0&&(N.__webglInit=!0,E.addEventListener("dispose",O));const ve=E.source;let be=M.get(ve);be===void 0&&(be={},M.set(ve,be));const we=B(E);if(we!==N.__cacheKey){be[we]===void 0&&(be[we]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,J=!0),be[we].usedTimes++;const Oe=be[N.__cacheKey];Oe!==void 0&&(be[N.__cacheKey].usedTimes--,Oe.usedTimes===0&&W(E)),N.__cacheKey=we,N.__webglTexture=be[we].texture}return J}function ye(N,E,J){return Math.floor(Math.floor(N/J)/E)}function Ae(N,E,J,ve){const we=N.updateRanges;if(we.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,J,ve,E.data);else{we.sort((Ie,Ne)=>Ie.start-Ne.start);let Oe=0;for(let Ie=1;Ie<we.length;Ie++){const Ne=we[Oe],De=we[Ie],it=Ne.start+Ne.count,at=ye(De.start,E.width,4),pt=ye(Ne.start,E.width,4);De.start<=it+1&&at===pt&&ye(De.start+De.count-1,E.width,4)===at?Ne.count=Math.max(Ne.count,De.start+De.count-Ne.start):(++Oe,we[Oe]=De)}we.length=Oe+1;const fe=i.getParameter(s.UNPACK_ROW_LENGTH),de=i.getParameter(s.UNPACK_SKIP_PIXELS),Pe=i.getParameter(s.UNPACK_SKIP_ROWS);i.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let Ie=0,Ne=we.length;Ie<Ne;Ie++){const De=we[Ie],it=Math.floor(De.start/4),at=Math.ceil(De.count/4),pt=it%E.width,V=Math.floor(it/E.width),Te=at,me=1;i.pixelStorei(s.UNPACK_SKIP_PIXELS,pt),i.pixelStorei(s.UNPACK_SKIP_ROWS,V),i.texSubImage2D(s.TEXTURE_2D,0,pt,V,Te,me,J,ve,E.data)}N.clearUpdateRanges(),i.pixelStorei(s.UNPACK_ROW_LENGTH,fe),i.pixelStorei(s.UNPACK_SKIP_PIXELS,de),i.pixelStorei(s.UNPACK_SKIP_ROWS,Pe)}}function Ge(N,E,J){let ve=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ve=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ve=s.TEXTURE_3D);const be=oe(N,E),we=E.source;i.bindTexture(ve,N.__webglTexture,s.TEXTURE0+J);const Oe=r.get(we);if(we.version!==Oe.__version||be===!0){if(i.activeTexture(s.TEXTURE0+J),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const me=Mt.getPrimaries(Mt.workingColorSpace),Be=E.colorSpace===fr?null:Mt.getPrimaries(E.colorSpace),Le=E.colorSpace===fr||me===Be?s.NONE:s.BROWSER_DEFAULT_WEBGL;i.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le)}i.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment);let de=x(E.image,!1,l.maxTextureSize);de=Ce(E,de);const Pe=c.convert(E.format,E.colorSpace),Ie=c.convert(E.type);let Ne=U(E.internalFormat,Pe,Ie,E.normalized,E.colorSpace,E.isVideoTexture);Ue(ve,E);let De;const it=E.mipmaps,at=E.isVideoTexture!==!0,pt=Oe.__version===void 0||be===!0,V=we.dataReady,Te=L(E,de);if(E.isDepthTexture)Ne=H(E.format===Gr,E.type),pt&&(at?i.texStorage2D(s.TEXTURE_2D,1,Ne,de.width,de.height):i.texImage2D(s.TEXTURE_2D,0,Ne,de.width,de.height,0,Pe,Ie,null));else if(E.isDataTexture)if(it.length>0){at&&pt&&i.texStorage2D(s.TEXTURE_2D,Te,Ne,it[0].width,it[0].height);for(let me=0,Be=it.length;me<Be;me++)De=it[me],at?V&&i.texSubImage2D(s.TEXTURE_2D,me,0,0,De.width,De.height,Pe,Ie,De.data):i.texImage2D(s.TEXTURE_2D,me,Ne,De.width,De.height,0,Pe,Ie,De.data);E.generateMipmaps=!1}else at?(pt&&i.texStorage2D(s.TEXTURE_2D,Te,Ne,de.width,de.height),V&&Ae(E,de,Pe,Ie)):i.texImage2D(s.TEXTURE_2D,0,Ne,de.width,de.height,0,Pe,Ie,de.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){at&&pt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Te,Ne,it[0].width,it[0].height,de.depth);for(let me=0,Be=it.length;me<Be;me++)if(De=it[me],E.format!==Ni)if(Pe!==null)if(at){if(V)if(E.layerUpdates.size>0){const Le=ev(De.width,De.height,E.format,E.type);for(const Me of E.layerUpdates){const Ye=De.data.subarray(Me*Le/De.data.BYTES_PER_ELEMENT,(Me+1)*Le/De.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,Me,De.width,De.height,1,Pe,Ye)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,0,De.width,De.height,de.depth,Pe,De.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,me,Ne,De.width,De.height,de.depth,0,De.data,0,0);else nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?V&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,0,De.width,De.height,de.depth,Pe,Ie,De.data):i.texImage3D(s.TEXTURE_2D_ARRAY,me,Ne,De.width,De.height,de.depth,0,Pe,Ie,De.data)}else{at&&pt&&i.texStorage2D(s.TEXTURE_2D,Te,Ne,it[0].width,it[0].height);for(let me=0,Be=it.length;me<Be;me++)De=it[me],E.format!==Ni?Pe!==null?at?V&&i.compressedTexSubImage2D(s.TEXTURE_2D,me,0,0,De.width,De.height,Pe,De.data):i.compressedTexImage2D(s.TEXTURE_2D,me,Ne,De.width,De.height,0,De.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?V&&i.texSubImage2D(s.TEXTURE_2D,me,0,0,De.width,De.height,Pe,Ie,De.data):i.texImage2D(s.TEXTURE_2D,me,Ne,De.width,De.height,0,Pe,Ie,De.data)}else if(E.isDataArrayTexture)if(at){if(pt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Te,Ne,de.width,de.height,de.depth),V)if(E.layerUpdates.size>0){const me=ev(de.width,de.height,E.format,E.type);for(const Be of E.layerUpdates){const Le=de.data.subarray(Be*me/de.data.BYTES_PER_ELEMENT,(Be+1)*me/de.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Be,de.width,de.height,1,Pe,Ie,Le)}E.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Pe,Ie,de.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Ne,de.width,de.height,de.depth,0,Pe,Ie,de.data);else if(E.isData3DTexture)at?(pt&&i.texStorage3D(s.TEXTURE_3D,Te,Ne,de.width,de.height,de.depth),V&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Pe,Ie,de.data)):i.texImage3D(s.TEXTURE_3D,0,Ne,de.width,de.height,de.depth,0,Pe,Ie,de.data);else if(E.isFramebufferTexture){if(pt)if(at)i.texStorage2D(s.TEXTURE_2D,Te,Ne,de.width,de.height);else{let me=de.width,Be=de.height;for(let Le=0;Le<Te;Le++)i.texImage2D(s.TEXTURE_2D,Le,Ne,me,Be,0,Pe,Ie,null),me>>=1,Be>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in s){const me=s.canvas;if(me.hasAttribute("layoutsubtree")||me.setAttribute("layoutsubtree","true"),de.parentNode!==me){me.appendChild(de),_.add(E),me.onpaint=tt=>{const tn=tt.changedElements;for(const Ct of _)tn.includes(Ct.image)&&(Ct.needsUpdate=!0)},me.requestPaint();return}const Be=0,Le=s.RGBA,Me=s.RGBA,Ye=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,Be,Le,Me,Ye,de),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(it.length>0){if(at&&pt){const me=Kt(it[0]);i.texStorage2D(s.TEXTURE_2D,Te,Ne,me.width,me.height)}for(let me=0,Be=it.length;me<Be;me++)De=it[me],at?V&&i.texSubImage2D(s.TEXTURE_2D,me,0,0,Pe,Ie,De):i.texImage2D(s.TEXTURE_2D,me,Ne,Pe,Ie,De);E.generateMipmaps=!1}else if(at){if(pt){const me=Kt(de);i.texStorage2D(s.TEXTURE_2D,Te,Ne,me.width,me.height)}V&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Pe,Ie,de)}else i.texImage2D(s.TEXTURE_2D,0,Ne,Pe,Ie,de);y(E)&&T(ve),Oe.__version=we.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function et(N,E,J){if(E.image.length!==6)return;const ve=oe(N,E),be=E.source;i.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+J);const we=r.get(be);if(be.version!==we.__version||ve===!0){i.activeTexture(s.TEXTURE0+J);const Oe=Mt.getPrimaries(Mt.workingColorSpace),fe=E.colorSpace===fr?null:Mt.getPrimaries(E.colorSpace),de=E.colorSpace===fr||Oe===fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;i.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const Pe=E.isCompressedTexture||E.image[0].isCompressedTexture,Ie=E.image[0]&&E.image[0].isDataTexture,Ne=[];for(let Me=0;Me<6;Me++)!Pe&&!Ie?Ne[Me]=x(E.image[Me],!0,l.maxCubemapSize):Ne[Me]=Ie?E.image[Me].image:E.image[Me],Ne[Me]=Ce(E,Ne[Me]);const De=Ne[0],it=c.convert(E.format,E.colorSpace),at=c.convert(E.type),pt=U(E.internalFormat,it,at,E.normalized,E.colorSpace),V=E.isVideoTexture!==!0,Te=we.__version===void 0||ve===!0,me=be.dataReady;let Be=L(E,De);Ue(s.TEXTURE_CUBE_MAP,E);let Le;if(Pe){V&&Te&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Be,pt,De.width,De.height);for(let Me=0;Me<6;Me++){Le=Ne[Me].mipmaps;for(let Ye=0;Ye<Le.length;Ye++){const tt=Le[Ye];E.format!==Ni?it!==null?V?me&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ye,0,0,tt.width,tt.height,it,tt.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ye,pt,tt.width,tt.height,0,tt.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?me&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ye,0,0,tt.width,tt.height,it,at,tt.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ye,pt,tt.width,tt.height,0,it,at,tt.data)}}}else{if(Le=E.mipmaps,V&&Te){Le.length>0&&Be++;const Me=Kt(Ne[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Be,pt,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(Ie){V?me&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,Ne[Me].width,Ne[Me].height,it,at,Ne[Me].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,pt,Ne[Me].width,Ne[Me].height,0,it,at,Ne[Me].data);for(let Ye=0;Ye<Le.length;Ye++){const tn=Le[Ye].image[Me].image;V?me&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ye+1,0,0,tn.width,tn.height,it,at,tn.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ye+1,pt,tn.width,tn.height,0,it,at,tn.data)}}else{V?me&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,it,at,Ne[Me]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,pt,it,at,Ne[Me]);for(let Ye=0;Ye<Le.length;Ye++){const tt=Le[Ye];V?me&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ye+1,0,0,it,at,tt.image[Me]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ye+1,pt,it,at,tt.image[Me])}}}y(E)&&T(s.TEXTURE_CUBE_MAP),we.__version=be.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function Je(N,E,J,ve,be,we){const Oe=c.convert(J.format,J.colorSpace),fe=c.convert(J.type),de=U(J.internalFormat,Oe,fe,J.normalized,J.colorSpace),Pe=r.get(E),Ie=r.get(J);if(Ie.__renderTarget=E,!Pe.__hasExternalTextures){const Ne=Math.max(1,E.width>>we),De=Math.max(1,E.height>>we);be===s.TEXTURE_3D||be===s.TEXTURE_2D_ARRAY?i.texImage3D(be,we,de,Ne,De,E.depth,0,Oe,fe,null):i.texImage2D(be,we,de,Ne,De,0,Oe,fe,null)}i.bindFramebuffer(s.FRAMEBUFFER,N),ht(E)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ve,be,Ie.__webglTexture,0,en(E)):(be===s.TEXTURE_2D||be>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&be<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ve,be,Ie.__webglTexture,we),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Xt(N,E,J){if(s.bindRenderbuffer(s.RENDERBUFFER,N),E.depthBuffer){const ve=E.depthTexture,be=ve&&ve.isDepthTexture?ve.type:null,we=H(E.stencilBuffer,be),Oe=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;ht(E)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,en(E),we,E.width,E.height):J?s.renderbufferStorageMultisample(s.RENDERBUFFER,en(E),we,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,we,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Oe,s.RENDERBUFFER,N)}else{const ve=E.textures;for(let be=0;be<ve.length;be++){const we=ve[be],Oe=c.convert(we.format,we.colorSpace),fe=c.convert(we.type),de=U(we.internalFormat,Oe,fe,we.normalized,we.colorSpace);ht(E)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,en(E),de,E.width,E.height):J?s.renderbufferStorageMultisample(s.RENDERBUFFER,en(E),de,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,de,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function dt(N,E,J){const ve=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(s.FRAMEBUFFER,N),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const be=r.get(E.depthTexture);if(be.__renderTarget=E,(!be.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ve){if(be.__webglInit===void 0&&(be.__webglInit=!0,E.depthTexture.addEventListener("dispose",O)),be.__webglTexture===void 0){be.__webglTexture=s.createTexture(),i.bindTexture(s.TEXTURE_CUBE_MAP,be.__webglTexture),Ue(s.TEXTURE_CUBE_MAP,E.depthTexture);const Pe=c.convert(E.depthTexture.format),Ie=c.convert(E.depthTexture.type);let Ne;E.depthTexture.format===Ra?Ne=s.DEPTH_COMPONENT24:E.depthTexture.format===Gr&&(Ne=s.DEPTH24_STENCIL8);for(let De=0;De<6;De++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,Ne,E.width,E.height,0,Pe,Ie,null)}}else le(E.depthTexture,0);const we=be.__webglTexture,Oe=en(E),fe=ve?s.TEXTURE_CUBE_MAP_POSITIVE_X+J:s.TEXTURE_2D,de=E.depthTexture.format===Gr?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ra)ht(E)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,de,fe,we,0,Oe):s.framebufferTexture2D(s.FRAMEBUFFER,de,fe,we,0);else if(E.depthTexture.format===Gr)ht(E)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,de,fe,we,0,Oe):s.framebufferTexture2D(s.FRAMEBUFFER,de,fe,we,0);else throw new Error("Unknown depthTexture format")}function vt(N){const E=r.get(N),J=N.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==N.depthTexture){const ve=N.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ve){const be=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ve.removeEventListener("dispose",be)};ve.addEventListener("dispose",be),E.__depthDisposeCallback=be}E.__boundDepthTexture=ve}if(N.depthTexture&&!E.__autoAllocateDepthBuffer)if(J)for(let ve=0;ve<6;ve++)dt(E.__webglFramebuffer[ve],N,ve);else{const ve=N.texture.mipmaps;ve&&ve.length>0?dt(E.__webglFramebuffer[0],N,0):dt(E.__webglFramebuffer,N,0)}else if(J){E.__webglDepthbuffer=[];for(let ve=0;ve<6;ve++)if(i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[ve]),E.__webglDepthbuffer[ve]===void 0)E.__webglDepthbuffer[ve]=s.createRenderbuffer(),Xt(E.__webglDepthbuffer[ve],N,!1);else{const be=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,we=E.__webglDepthbuffer[ve];s.bindRenderbuffer(s.RENDERBUFFER,we),s.framebufferRenderbuffer(s.FRAMEBUFFER,be,s.RENDERBUFFER,we)}}else{const ve=N.texture.mipmaps;if(ve&&ve.length>0?i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),Xt(E.__webglDepthbuffer,N,!1);else{const be=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,we=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,we),s.framebufferRenderbuffer(s.FRAMEBUFFER,be,s.RENDERBUFFER,we)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function Lt(N,E,J){const ve=r.get(N);E!==void 0&&Je(ve.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),J!==void 0&&vt(N)}function ct(N){const E=N.texture,J=r.get(N),ve=r.get(E);N.addEventListener("dispose",b);const be=N.textures,we=N.isWebGLCubeRenderTarget===!0,Oe=be.length>1;if(Oe||(ve.__webglTexture===void 0&&(ve.__webglTexture=s.createTexture()),ve.__version=E.version,f.memory.textures++),we){J.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(E.mipmaps&&E.mipmaps.length>0){J.__webglFramebuffer[fe]=[];for(let de=0;de<E.mipmaps.length;de++)J.__webglFramebuffer[fe][de]=s.createFramebuffer()}else J.__webglFramebuffer[fe]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){J.__webglFramebuffer=[];for(let fe=0;fe<E.mipmaps.length;fe++)J.__webglFramebuffer[fe]=s.createFramebuffer()}else J.__webglFramebuffer=s.createFramebuffer();if(Oe)for(let fe=0,de=be.length;fe<de;fe++){const Pe=r.get(be[fe]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=s.createTexture(),f.memory.textures++)}if(N.samples>0&&ht(N)===!1){J.__webglMultisampledFramebuffer=s.createFramebuffer(),J.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let fe=0;fe<be.length;fe++){const de=be[fe];J.__webglColorRenderbuffer[fe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,J.__webglColorRenderbuffer[fe]);const Pe=c.convert(de.format,de.colorSpace),Ie=c.convert(de.type),Ne=U(de.internalFormat,Pe,Ie,de.normalized,de.colorSpace,N.isXRRenderTarget===!0),De=en(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,De,Ne,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,J.__webglColorRenderbuffer[fe])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&(J.__webglDepthRenderbuffer=s.createRenderbuffer(),Xt(J.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(we){i.bindTexture(s.TEXTURE_CUBE_MAP,ve.__webglTexture),Ue(s.TEXTURE_CUBE_MAP,E);for(let fe=0;fe<6;fe++)if(E.mipmaps&&E.mipmaps.length>0)for(let de=0;de<E.mipmaps.length;de++)Je(J.__webglFramebuffer[fe][de],N,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,de);else Je(J.__webglFramebuffer[fe],N,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);y(E)&&T(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Oe){for(let fe=0,de=be.length;fe<de;fe++){const Pe=be[fe],Ie=r.get(Pe);let Ne=s.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ne=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Ne,Ie.__webglTexture),Ue(Ne,Pe),Je(J.__webglFramebuffer,N,Pe,s.COLOR_ATTACHMENT0+fe,Ne,0),y(Pe)&&T(Ne)}i.unbindTexture()}else{let fe=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(fe=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(fe,ve.__webglTexture),Ue(fe,E),E.mipmaps&&E.mipmaps.length>0)for(let de=0;de<E.mipmaps.length;de++)Je(J.__webglFramebuffer[de],N,E,s.COLOR_ATTACHMENT0,fe,de);else Je(J.__webglFramebuffer,N,E,s.COLOR_ATTACHMENT0,fe,0);y(E)&&T(fe),i.unbindTexture()}N.depthBuffer&&vt(N)}function sn(N){const E=N.textures;for(let J=0,ve=E.length;J<ve;J++){const be=E[J];if(y(be)){const we=D(N),Oe=r.get(be).__webglTexture;i.bindTexture(we,Oe),T(we),i.unbindTexture()}}}const Yt=[],bn=[];function q(N){if(N.samples>0){if(ht(N)===!1){const E=N.textures,J=N.width,ve=N.height;let be=s.COLOR_BUFFER_BIT;const we=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Oe=r.get(N),fe=E.length>1;if(fe)for(let Pe=0;Pe<E.length;Pe++)i.bindFramebuffer(s.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Oe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer);const de=N.texture.mipmaps;de&&de.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let Pe=0;Pe<E.length;Pe++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(be|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(be|=s.STENCIL_BUFFER_BIT)),fe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Oe.__webglColorRenderbuffer[Pe]);const Ie=r.get(E[Pe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ie,0)}s.blitFramebuffer(0,0,J,ve,0,0,J,ve,be,s.NEAREST),m===!0&&(Yt.length=0,bn.length=0,Yt.push(s.COLOR_ATTACHMENT0+Pe),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Yt.push(we),bn.push(we),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,bn)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Yt))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),fe)for(let Pe=0;Pe<E.length;Pe++){i.bindFramebuffer(s.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.RENDERBUFFER,Oe.__webglColorRenderbuffer[Pe]);const Ie=r.get(E[Pe]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Oe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.TEXTURE_2D,Ie,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const E=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function en(N){return Math.min(l.maxSamples,N.samples)}function ht(N){const E=r.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ht(N){const E=f.render.frame;v.get(N)!==E&&(v.set(N,E),N.update())}function Ce(N,E){const J=N.colorSpace,ve=N.format,be=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||J!==ru&&J!==fr&&(Mt.getTransfer(J)===Bt?(ve!==Ni||be!==Si)&&nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):bt("WebGLTextures: Unsupported texture color space:",J)),E}function Kt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=I,this.resetTextureUnits=ue,this.getTextureUnits=pe,this.setTextureUnits=X,this.setTexture2D=le,this.setTexture2DArray=ge,this.setTexture3D=Ee,this.setTextureCube=F,this.rebindTextures=Lt,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=sn,this.updateMultisampleRenderTarget=q,this.setupDepthRenderbuffer=vt,this.setupFrameBufferTexture=Je,this.useMultisampledRTT=ht,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function H2(s,e){function i(r,l=fr){let c;const f=Mt.getTransfer(l);if(r===Si)return s.UNSIGNED_BYTE;if(r===hp)return s.UNSIGNED_SHORT_4_4_4_4;if(r===pp)return s.UNSIGNED_SHORT_5_5_5_1;if(r===ix)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===ax)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===tx)return s.BYTE;if(r===nx)return s.SHORT;if(r===al)return s.UNSIGNED_SHORT;if(r===dp)return s.INT;if(r===Zi)return s.UNSIGNED_INT;if(r===ki)return s.FLOAT;if(r===Ta)return s.HALF_FLOAT;if(r===rx)return s.ALPHA;if(r===sx)return s.RGB;if(r===Ni)return s.RGBA;if(r===Ra)return s.DEPTH_COMPONENT;if(r===Gr)return s.DEPTH_STENCIL;if(r===ox)return s.RED;if(r===mp)return s.RED_INTEGER;if(r===kr)return s.RG;if(r===gp)return s.RG_INTEGER;if(r===_p)return s.RGBA_INTEGER;if(r===Kc||r===Qc||r===Jc||r===$c)if(f===Bt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Kc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Qc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===$c)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Kc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Qc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Jc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===$c)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Mh||r===Eh||r===bh||r===Ah)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Mh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Eh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===bh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ah)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Th||r===Rh||r===Ch||r===wh||r===Dh||r===iu||r===Uh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Th||r===Rh)return f===Bt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Ch)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===wh)return c.COMPRESSED_R11_EAC;if(r===Dh)return c.COMPRESSED_SIGNED_R11_EAC;if(r===iu)return c.COMPRESSED_RG11_EAC;if(r===Uh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Nh||r===Lh||r===Oh||r===Ph||r===Ih||r===Fh||r===zh||r===Bh||r===Hh||r===Gh||r===Vh||r===kh||r===Xh||r===Wh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Nh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Lh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Oh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ph)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ih)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Fh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===zh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Bh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Hh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Gh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Vh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===kh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Xh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Wh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===qh||r===Yh||r===jh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===qh)return f===Bt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Yh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===jh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Zh||r===Kh||r===au||r===Qh)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Zh)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Kh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===au)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Qh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===rl?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const G2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,V2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class k2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new _x(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Ki({vertexShader:G2,fragmentShader:V2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new oi(new pu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class X2 extends qr{constructor(e,i){super();const r=this;let l=null,c=1,f=null,h="local-floor",m=1,p=null,v=null,_=null,g=null,M=null,A=null;const w=typeof XRWebGLBinding<"u",x=new k2,y={},T=i.getContextAttributes();let D=null,U=null;const H=[],L=[],O=new Ut;let b=null;const P=new xi;P.viewport=new un;const W=new xi;W.viewport=new un;const z=[P,W],Z=new e1;let ue=null,pe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let ye=H[oe];return ye===void 0&&(ye=new Hd,H[oe]=ye),ye.getTargetRaySpace()},this.getControllerGrip=function(oe){let ye=H[oe];return ye===void 0&&(ye=new Hd,H[oe]=ye),ye.getGripSpace()},this.getHand=function(oe){let ye=H[oe];return ye===void 0&&(ye=new Hd,H[oe]=ye),ye.getHandSpace()};function X(oe){const ye=L.indexOf(oe.inputSource);if(ye===-1)return;const Ae=H[ye];Ae!==void 0&&(Ae.update(oe.inputSource,oe.frame,p||f),Ae.dispatchEvent({type:oe.type,data:oe.inputSource}))}function I(){l.removeEventListener("select",X),l.removeEventListener("selectstart",X),l.removeEventListener("selectend",X),l.removeEventListener("squeeze",X),l.removeEventListener("squeezestart",X),l.removeEventListener("squeezeend",X),l.removeEventListener("end",I),l.removeEventListener("inputsourceschange",B);for(let oe=0;oe<H.length;oe++){const ye=L[oe];ye!==null&&(L[oe]=null,H[oe].disconnect(ye))}ue=null,pe=null,x.reset();for(const oe in y)delete y[oe];e.setRenderTarget(D),M=null,g=null,_=null,l=null,U=null,Ue.stop(),r.isPresenting=!1,e.setPixelRatio(b),e.setSize(O.width,O.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){c=oe,r.isPresenting===!0&&nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){h=oe,r.isPresenting===!0&&nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(oe){p=oe},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return _===null&&w&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(oe){if(l=oe,l!==null){if(D=e.getRenderTarget(),l.addEventListener("select",X),l.addEventListener("selectstart",X),l.addEventListener("selectend",X),l.addEventListener("squeeze",X),l.addEventListener("squeezestart",X),l.addEventListener("squeezeend",X),l.addEventListener("end",I),l.addEventListener("inputsourceschange",B),T.xrCompatible!==!0&&await i.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(O),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ae=null,Ge=null,et=null;T.depth&&(et=T.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ae=T.stencil?Gr:Ra,Ge=T.stencil?rl:Zi);const Je={colorFormat:i.RGBA8,depthFormat:et,scaleFactor:c};_=this.getBinding(),g=_.createProjectionLayer(Je),l.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),U=new qi(g.textureWidth,g.textureHeight,{format:Ni,type:Si,depthTexture:new Ws(g.textureWidth,g.textureHeight,Ge,void 0,void 0,void 0,void 0,void 0,void 0,Ae),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Ae={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,Ae),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),U=new qi(M.framebufferWidth,M.framebufferHeight,{format:Ni,type:Si,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(h),Ue.setContext(l),Ue.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function B(oe){for(let ye=0;ye<oe.removed.length;ye++){const Ae=oe.removed[ye],Ge=L.indexOf(Ae);Ge>=0&&(L[Ge]=null,H[Ge].disconnect(Ae))}for(let ye=0;ye<oe.added.length;ye++){const Ae=oe.added[ye];let Ge=L.indexOf(Ae);if(Ge===-1){for(let Je=0;Je<H.length;Je++)if(Je>=L.length){L.push(Ae),Ge=Je;break}else if(L[Je]===null){L[Je]=Ae,Ge=Je;break}if(Ge===-1)break}const et=H[Ge];et&&et.connect(Ae)}}const le=new ne,ge=new ne;function Ee(oe,ye,Ae){le.setFromMatrixPosition(ye.matrixWorld),ge.setFromMatrixPosition(Ae.matrixWorld);const Ge=le.distanceTo(ge),et=ye.projectionMatrix.elements,Je=Ae.projectionMatrix.elements,Xt=et[14]/(et[10]-1),dt=et[14]/(et[10]+1),vt=(et[9]+1)/et[5],Lt=(et[9]-1)/et[5],ct=(et[8]-1)/et[0],sn=(Je[8]+1)/Je[0],Yt=Xt*ct,bn=Xt*sn,q=Ge/(-ct+sn),en=q*-ct;if(ye.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(en),oe.translateZ(q),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert(),et[10]===-1)oe.projectionMatrix.copy(ye.projectionMatrix),oe.projectionMatrixInverse.copy(ye.projectionMatrixInverse);else{const ht=Xt+q,Ht=dt+q,Ce=Yt-en,Kt=bn+(Ge-en),N=vt*dt/Ht*ht,E=Lt*dt/Ht*ht;oe.projectionMatrix.makePerspective(Ce,Kt,N,E,ht,Ht),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}}function F(oe,ye){ye===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(ye.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(l===null)return;let ye=oe.near,Ae=oe.far;x.texture!==null&&(x.depthNear>0&&(ye=x.depthNear),x.depthFar>0&&(Ae=x.depthFar)),Z.near=W.near=P.near=ye,Z.far=W.far=P.far=Ae,(ue!==Z.near||pe!==Z.far)&&(l.updateRenderState({depthNear:Z.near,depthFar:Z.far}),ue=Z.near,pe=Z.far),Z.layers.mask=oe.layers.mask|6,P.layers.mask=Z.layers.mask&-5,W.layers.mask=Z.layers.mask&-3;const Ge=oe.parent,et=Z.cameras;F(Z,Ge);for(let Je=0;Je<et.length;Je++)F(et[Je],Ge);et.length===2?Ee(Z,P,W):Z.projectionMatrix.copy(P.projectionMatrix),$(oe,Z,Ge)};function $(oe,ye,Ae){Ae===null?oe.matrix.copy(ye.matrixWorld):(oe.matrix.copy(Ae.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(ye.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(ye.projectionMatrix),oe.projectionMatrixInverse.copy(ye.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=$h*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(g===null&&M===null))return m},this.setFoveation=function(oe){m=oe,g!==null&&(g.fixedFoveation=oe),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=oe)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(Z)},this.getCameraTexture=function(oe){return y[oe]};let Se=null;function Re(oe,ye){if(v=ye.getViewerPose(p||f),A=ye,v!==null){const Ae=v.views;M!==null&&(e.setRenderTargetFramebuffer(U,M.framebuffer),e.setRenderTarget(U));let Ge=!1;Ae.length!==Z.cameras.length&&(Z.cameras.length=0,Ge=!0);for(let dt=0;dt<Ae.length;dt++){const vt=Ae[dt];let Lt=null;if(M!==null)Lt=M.getViewport(vt);else{const sn=_.getViewSubImage(g,vt);Lt=sn.viewport,dt===0&&(e.setRenderTargetTextures(U,sn.colorTexture,sn.depthStencilTexture),e.setRenderTarget(U))}let ct=z[dt];ct===void 0&&(ct=new xi,ct.layers.enable(dt),ct.viewport=new un,z[dt]=ct),ct.matrix.fromArray(vt.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(vt.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),dt===0&&(Z.matrix.copy(ct.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),Ge===!0&&Z.cameras.push(ct)}const et=l.enabledFeatures;if(et&&et.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&w){_=r.getBinding();const dt=_.getDepthInformation(Ae[0]);dt&&dt.isValid&&dt.texture&&x.init(dt,l.renderState)}if(et&&et.includes("camera-access")&&w){e.state.unbindTexture(),_=r.getBinding();for(let dt=0;dt<Ae.length;dt++){const vt=Ae[dt].camera;if(vt){let Lt=y[vt];Lt||(Lt=new _x,y[vt]=Lt);const ct=_.getCameraImage(vt);Lt.sourceTexture=ct}}}}for(let Ae=0;Ae<H.length;Ae++){const Ge=L[Ae],et=H[Ae];Ge!==null&&et!==void 0&&et.update(Ge,ye,p||f)}Se&&Se(oe,ye),ye.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ye}),A=null}const Ue=new Sx;Ue.setAnimationLoop(Re),this.setAnimationLoop=function(oe){Se=oe},this.dispose=function(){}}}const W2=new xn,Rx=new st;Rx.set(-1,0,0,0,1,0,0,0,1);function q2(s,e){function i(x,y){x.matrixAutoUpdate===!0&&x.updateMatrix(),y.value.copy(x.matrix)}function r(x,y){y.color.getRGB(x.fogColor.value,vx(s)),y.isFog?(x.fogNear.value=y.near,x.fogFar.value=y.far):y.isFogExp2&&(x.fogDensity.value=y.density)}function l(x,y,T,D,U){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?c(x,y):y.isMeshLambertMaterial?(c(x,y),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(c(x,y),_(x,y)):y.isMeshPhongMaterial?(c(x,y),v(x,y),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(c(x,y),g(x,y),y.isMeshPhysicalMaterial&&M(x,y,U)):y.isMeshMatcapMaterial?(c(x,y),A(x,y)):y.isMeshDepthMaterial?c(x,y):y.isMeshDistanceMaterial?(c(x,y),w(x,y)):y.isMeshNormalMaterial?c(x,y):y.isLineBasicMaterial?(f(x,y),y.isLineDashedMaterial&&h(x,y)):y.isPointsMaterial?m(x,y,T,D):y.isSpriteMaterial?p(x,y):y.isShadowMaterial?(x.color.value.copy(y.color),x.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(x,y){x.opacity.value=y.opacity,y.color&&x.diffuse.value.copy(y.color),y.emissive&&x.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(x.map.value=y.map,i(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,i(y.alphaMap,x.alphaMapTransform)),y.bumpMap&&(x.bumpMap.value=y.bumpMap,i(y.bumpMap,x.bumpMapTransform),x.bumpScale.value=y.bumpScale,y.side===Yn&&(x.bumpScale.value*=-1)),y.normalMap&&(x.normalMap.value=y.normalMap,i(y.normalMap,x.normalMapTransform),x.normalScale.value.copy(y.normalScale),y.side===Yn&&x.normalScale.value.negate()),y.displacementMap&&(x.displacementMap.value=y.displacementMap,i(y.displacementMap,x.displacementMapTransform),x.displacementScale.value=y.displacementScale,x.displacementBias.value=y.displacementBias),y.emissiveMap&&(x.emissiveMap.value=y.emissiveMap,i(y.emissiveMap,x.emissiveMapTransform)),y.specularMap&&(x.specularMap.value=y.specularMap,i(y.specularMap,x.specularMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest);const T=e.get(y),D=T.envMap,U=T.envMapRotation;D&&(x.envMap.value=D,x.envMapRotation.value.setFromMatrix4(W2.makeRotationFromEuler(U)).transpose(),D.isCubeTexture&&D.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(Rx),x.reflectivity.value=y.reflectivity,x.ior.value=y.ior,x.refractionRatio.value=y.refractionRatio),y.lightMap&&(x.lightMap.value=y.lightMap,x.lightMapIntensity.value=y.lightMapIntensity,i(y.lightMap,x.lightMapTransform)),y.aoMap&&(x.aoMap.value=y.aoMap,x.aoMapIntensity.value=y.aoMapIntensity,i(y.aoMap,x.aoMapTransform))}function f(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,y.map&&(x.map.value=y.map,i(y.map,x.mapTransform))}function h(x,y){x.dashSize.value=y.dashSize,x.totalSize.value=y.dashSize+y.gapSize,x.scale.value=y.scale}function m(x,y,T,D){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.size.value=y.size*T,x.scale.value=D*.5,y.map&&(x.map.value=y.map,i(y.map,x.uvTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,i(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function p(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.rotation.value=y.rotation,y.map&&(x.map.value=y.map,i(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,i(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function v(x,y){x.specular.value.copy(y.specular),x.shininess.value=Math.max(y.shininess,1e-4)}function _(x,y){y.gradientMap&&(x.gradientMap.value=y.gradientMap)}function g(x,y){x.metalness.value=y.metalness,y.metalnessMap&&(x.metalnessMap.value=y.metalnessMap,i(y.metalnessMap,x.metalnessMapTransform)),x.roughness.value=y.roughness,y.roughnessMap&&(x.roughnessMap.value=y.roughnessMap,i(y.roughnessMap,x.roughnessMapTransform)),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)}function M(x,y,T){x.ior.value=y.ior,y.sheen>0&&(x.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),x.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(x.sheenColorMap.value=y.sheenColorMap,i(y.sheenColorMap,x.sheenColorMapTransform)),y.sheenRoughnessMap&&(x.sheenRoughnessMap.value=y.sheenRoughnessMap,i(y.sheenRoughnessMap,x.sheenRoughnessMapTransform))),y.clearcoat>0&&(x.clearcoat.value=y.clearcoat,x.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(x.clearcoatMap.value=y.clearcoatMap,i(y.clearcoatMap,x.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,i(y.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(x.clearcoatNormalMap.value=y.clearcoatNormalMap,i(y.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Yn&&x.clearcoatNormalScale.value.negate())),y.dispersion>0&&(x.dispersion.value=y.dispersion),y.iridescence>0&&(x.iridescence.value=y.iridescence,x.iridescenceIOR.value=y.iridescenceIOR,x.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(x.iridescenceMap.value=y.iridescenceMap,i(y.iridescenceMap,x.iridescenceMapTransform)),y.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=y.iridescenceThicknessMap,i(y.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),y.transmission>0&&(x.transmission.value=y.transmission,x.transmissionSamplerMap.value=T.texture,x.transmissionSamplerSize.value.set(T.width,T.height),y.transmissionMap&&(x.transmissionMap.value=y.transmissionMap,i(y.transmissionMap,x.transmissionMapTransform)),x.thickness.value=y.thickness,y.thicknessMap&&(x.thicknessMap.value=y.thicknessMap,i(y.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=y.attenuationDistance,x.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(x.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(x.anisotropyMap.value=y.anisotropyMap,i(y.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=y.specularIntensity,x.specularColor.value.copy(y.specularColor),y.specularColorMap&&(x.specularColorMap.value=y.specularColorMap,i(y.specularColorMap,x.specularColorMapTransform)),y.specularIntensityMap&&(x.specularIntensityMap.value=y.specularIntensityMap,i(y.specularIntensityMap,x.specularIntensityMapTransform))}function A(x,y){y.matcap&&(x.matcap.value=y.matcap)}function w(x,y){const T=e.get(y).light;x.referencePosition.value.setFromMatrixPosition(T.matrixWorld),x.nearDistance.value=T.shadow.camera.near,x.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function Y2(s,e,i,r){let l={},c={},f=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(T,D){const U=D.program;r.uniformBlockBinding(T,U)}function p(T,D){let U=l[T.id];U===void 0&&(A(T),U=v(T),l[T.id]=U,T.addEventListener("dispose",x));const H=D.program;r.updateUBOMapping(T,H);const L=e.render.frame;c[T.id]!==L&&(g(T),c[T.id]=L)}function v(T){const D=_();T.__bindingPointIndex=D;const U=s.createBuffer(),H=T.__size,L=T.usage;return s.bindBuffer(s.UNIFORM_BUFFER,U),s.bufferData(s.UNIFORM_BUFFER,H,L),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,D,U),U}function _(){for(let T=0;T<h;T++)if(f.indexOf(T)===-1)return f.push(T),T;return bt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(T){const D=l[T.id],U=T.uniforms,H=T.__cache;s.bindBuffer(s.UNIFORM_BUFFER,D);for(let L=0,O=U.length;L<O;L++){const b=Array.isArray(U[L])?U[L]:[U[L]];for(let P=0,W=b.length;P<W;P++){const z=b[P];if(M(z,L,P,H)===!0){const Z=z.__offset,ue=Array.isArray(z.value)?z.value:[z.value];let pe=0;for(let X=0;X<ue.length;X++){const I=ue[X],B=w(I);typeof I=="number"||typeof I=="boolean"?(z.__data[0]=I,s.bufferSubData(s.UNIFORM_BUFFER,Z+pe,z.__data)):I.isMatrix3?(z.__data[0]=I.elements[0],z.__data[1]=I.elements[1],z.__data[2]=I.elements[2],z.__data[3]=0,z.__data[4]=I.elements[3],z.__data[5]=I.elements[4],z.__data[6]=I.elements[5],z.__data[7]=0,z.__data[8]=I.elements[6],z.__data[9]=I.elements[7],z.__data[10]=I.elements[8],z.__data[11]=0):ArrayBuffer.isView(I)?z.__data.set(new I.constructor(I.buffer,I.byteOffset,z.__data.length)):(I.toArray(z.__data,pe),pe+=B.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,Z,z.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(T,D,U,H){const L=T.value,O=D+"_"+U;if(H[O]===void 0)return typeof L=="number"||typeof L=="boolean"?H[O]=L:ArrayBuffer.isView(L)?H[O]=L.slice():H[O]=L.clone(),!0;{const b=H[O];if(typeof L=="number"||typeof L=="boolean"){if(b!==L)return H[O]=L,!0}else{if(ArrayBuffer.isView(L))return!0;if(b.equals(L)===!1)return b.copy(L),!0}}return!1}function A(T){const D=T.uniforms;let U=0;const H=16;for(let O=0,b=D.length;O<b;O++){const P=Array.isArray(D[O])?D[O]:[D[O]];for(let W=0,z=P.length;W<z;W++){const Z=P[W],ue=Array.isArray(Z.value)?Z.value:[Z.value];for(let pe=0,X=ue.length;pe<X;pe++){const I=ue[pe],B=w(I),le=U%H,ge=le%B.boundary,Ee=le+ge;U+=ge,Ee!==0&&H-Ee<B.storage&&(U+=H-Ee),Z.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=U,U+=B.storage}}}const L=U%H;return L>0&&(U+=H-L),T.__size=U,T.__cache={},this}function w(T){const D={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(D.boundary=4,D.storage=4):T.isVector2?(D.boundary=8,D.storage=8):T.isVector3||T.isColor?(D.boundary=16,D.storage=12):T.isVector4?(D.boundary=16,D.storage=16):T.isMatrix3?(D.boundary=48,D.storage=48):T.isMatrix4?(D.boundary=64,D.storage=64):T.isTexture?nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(T)?(D.boundary=16,D.storage=T.byteLength):nt("WebGLRenderer: Unsupported uniform value type.",T),D}function x(T){const D=T.target;D.removeEventListener("dispose",x);const U=f.indexOf(D.__bindingPointIndex);f.splice(U,1),s.deleteBuffer(l[D.id]),delete l[D.id],delete c[D.id]}function y(){for(const T in l)s.deleteBuffer(l[T]);f=[],l={},c={}}return{bind:m,update:p,dispose:y}}const j2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Gi=null;function Z2(){return Gi===null&&(Gi=new Gb(j2,16,16,kr,Ta),Gi.name="DFG_LUT",Gi.minFilter=In,Gi.magFilter=In,Gi.wrapS=Ma,Gi.wrapT=Ma,Gi.generateMipmaps=!1,Gi.needsUpdate=!0),Gi}class Cx{constructor(e={}){const{canvas:i=vb(),context:r=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:g=!1,outputBufferType:M=Si}=e;this.isWebGLRenderer=!0;let A;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");A=r.getContextAttributes().alpha}else A=f;const w=M,x=new Set([_p,gp,mp]),y=new Set([Si,Zi,al,rl,hp,pp]),T=new Uint32Array(4),D=new Int32Array(4),U=new ne;let H=null,L=null;const O=[],b=[];let P=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const W=this;let z=!1,Z=null;this._outputColorSpace=vi;let ue=0,pe=0,X=null,I=-1,B=null;const le=new un,ge=new un;let Ee=null;const F=new Dt(0);let $=0,Se=i.width,Re=i.height,Ue=1,oe=null,ye=null;const Ae=new un(0,0,Se,Re),Ge=new un(0,0,Se,Re);let et=!1;const Je=new mx;let Xt=!1,dt=!1;const vt=new xn,Lt=new ne,ct=new un,sn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Yt=!1;function bn(){return X===null?Ue:1}let q=r;function en(R,Y){return i.getContext(R,Y)}try{const R={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${fp}`),i.addEventListener("webglcontextlost",Me,!1),i.addEventListener("webglcontextrestored",Ye,!1),i.addEventListener("webglcontextcreationerror",tt,!1),q===null){const Y="webgl2";if(q=en(Y,R),q===null)throw en(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw bt("WebGLRenderer: "+R.message),R}let ht,Ht,Ce,Kt,N,E,J,ve,be,we,Oe,fe,de,Pe,Ie,Ne,De,it,at,pt,V,Te,me;function Be(){ht=new ZT(q),ht.init(),V=new H2(q,ht),Ht=new GT(q,ht,e,V),Ce=new z2(q,ht),Ht.reversedDepthBuffer&&g&&Ce.buffers.depth.setReversed(!0),Kt=new JT(q),N=new b2,E=new B2(q,ht,Ce,N,Ht,V,Kt),J=new jT(W),ve=new n1(q),Te=new BT(q,ve),be=new KT(q,ve,Kt,Te),we=new eR(q,be,ve,Te,Kt),it=new $T(q,Ht,E),Ie=new VT(N),Oe=new E2(W,J,ht,Ht,Te,Ie),fe=new q2(W,N),de=new T2,Pe=new N2(ht),De=new zT(W,J,Ce,we,A,m),Ne=new F2(W,we,Ht),me=new Y2(q,Kt,Ht,Ce),at=new HT(q,ht,Kt),pt=new QT(q,ht,Kt),Kt.programs=Oe.programs,W.capabilities=Ht,W.extensions=ht,W.properties=N,W.renderLists=de,W.shadowMap=Ne,W.state=Ce,W.info=Kt}Be(),w!==Si&&(P=new nR(w,i.width,i.height,l,c));const Le=new X2(W,q);this.xr=Le,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const R=ht.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ht.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Ue},this.setPixelRatio=function(R){R!==void 0&&(Ue=R,this.setSize(Se,Re,!1))},this.getSize=function(R){return R.set(Se,Re)},this.setSize=function(R,Y,re=!0){if(Le.isPresenting){nt("WebGLRenderer: Can't change size while VR device is presenting.");return}Se=R,Re=Y,i.width=Math.floor(R*Ue),i.height=Math.floor(Y*Ue),re===!0&&(i.style.width=R+"px",i.style.height=Y+"px"),P!==null&&P.setSize(i.width,i.height),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(Se*Ue,Re*Ue).floor()},this.setDrawingBufferSize=function(R,Y,re){Se=R,Re=Y,Ue=re,i.width=Math.floor(R*re),i.height=Math.floor(Y*re),this.setViewport(0,0,R,Y)},this.setEffects=function(R){if(w===Si){bt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let Y=0;Y<R.length;Y++)if(R[Y].isOutputPass===!0){nt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(le)},this.getViewport=function(R){return R.copy(Ae)},this.setViewport=function(R,Y,re,ie){R.isVector4?Ae.set(R.x,R.y,R.z,R.w):Ae.set(R,Y,re,ie),Ce.viewport(le.copy(Ae).multiplyScalar(Ue).round())},this.getScissor=function(R){return R.copy(Ge)},this.setScissor=function(R,Y,re,ie){R.isVector4?Ge.set(R.x,R.y,R.z,R.w):Ge.set(R,Y,re,ie),Ce.scissor(ge.copy(Ge).multiplyScalar(Ue).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(R){Ce.setScissorTest(et=R)},this.setOpaqueSort=function(R){oe=R},this.setTransparentSort=function(R){ye=R},this.getClearColor=function(R){return R.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor(...arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha(...arguments)},this.clear=function(R=!0,Y=!0,re=!0){let ie=0;if(R){let ae=!1;if(X!==null){const ze=X.texture.format;ae=x.has(ze)}if(ae){const ze=X.texture.type,ke=y.has(ze),Fe=De.getClearColor(),We=De.getClearAlpha(),Xe=Fe.r,Ke=Fe.g,ot=Fe.b;ke?(T[0]=Xe,T[1]=Ke,T[2]=ot,T[3]=We,q.clearBufferuiv(q.COLOR,0,T)):(D[0]=Xe,D[1]=Ke,D[2]=ot,D[3]=We,q.clearBufferiv(q.COLOR,0,D))}else ie|=q.COLOR_BUFFER_BIT}Y&&(ie|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),re&&(ie|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ie!==0&&q.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),Z=R},this.dispose=function(){i.removeEventListener("webglcontextlost",Me,!1),i.removeEventListener("webglcontextrestored",Ye,!1),i.removeEventListener("webglcontextcreationerror",tt,!1),De.dispose(),de.dispose(),Pe.dispose(),N.dispose(),J.dispose(),we.dispose(),Te.dispose(),me.dispose(),Oe.dispose(),Le.dispose(),Le.removeEventListener("sessionstart",$s),Le.removeEventListener("sessionend",eo),Un.stop()};function Me(R){R.preventDefault(),P_("WebGLRenderer: Context Lost."),z=!0}function Ye(){P_("WebGLRenderer: Context Restored."),z=!1;const R=Kt.autoReset,Y=Ne.enabled,re=Ne.autoUpdate,ie=Ne.needsUpdate,ae=Ne.type;Be(),Kt.autoReset=R,Ne.enabled=Y,Ne.autoUpdate=re,Ne.needsUpdate=ie,Ne.type=ae}function tt(R){bt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function tn(R){const Y=R.target;Y.removeEventListener("dispose",tn),Ct(Y)}function Ct(R){li(R),N.remove(R)}function li(R){const Y=N.get(R).programs;Y!==void 0&&(Y.forEach(function(re){Oe.releaseProgram(re)}),R.isShaderMaterial&&Oe.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,re,ie,ae,ze){Y===null&&(Y=sn);const ke=ae.isMesh&&ae.matrixWorld.determinant()<0,Fe=Na(R,Y,re,ie,ae);Ce.setMaterial(ie,ke);let We=re.index,Xe=1;if(ie.wireframe===!0){if(We=be.getWireframeAttribute(re),We===void 0)return;Xe=2}const Ke=re.drawRange,ot=re.attributes.position;let Ze=Ke.start*Xe,At=(Ke.start+Ke.count)*Xe;ze!==null&&(Ze=Math.max(Ze,ze.start*Xe),At=Math.min(At,(ze.start+ze.count)*Xe)),We!==null?(Ze=Math.max(Ze,0),At=Math.min(At,We.count)):ot!=null&&(Ze=Math.max(Ze,0),At=Math.min(At,ot.count));const Qt=At-Ze;if(Qt<0||Qt===1/0)return;Te.setup(ae,ie,Fe,re,We);let Wt,Ot=at;if(We!==null&&(Wt=ve.get(We),Ot=pt,Ot.setIndex(Wt)),ae.isMesh)ie.wireframe===!0?(Ce.setLineWidth(ie.wireframeLinewidth*bn()),Ot.setMode(q.LINES)):Ot.setMode(q.TRIANGLES);else if(ae.isLine){let Pt=ie.linewidth;Pt===void 0&&(Pt=1),Ce.setLineWidth(Pt*bn()),ae.isLineSegments?Ot.setMode(q.LINES):ae.isLineLoop?Ot.setMode(q.LINE_LOOP):Ot.setMode(q.LINE_STRIP)}else ae.isPoints?Ot.setMode(q.POINTS):ae.isSprite&&Ot.setMode(q.TRIANGLES);if(ae.isBatchedMesh)if(ht.get("WEBGL_multi_draw"))Ot.renderMultiDraw(ae._multiDrawStarts,ae._multiDrawCounts,ae._multiDrawCount);else{const Pt=ae._multiDrawStarts,Ve=ae._multiDrawCounts,Nn=ae._multiDrawCount,mt=We?ve.get(We).bytesPerElement:1,_n=N.get(ie).currentProgram.getUniforms();for(let Zn=0;Zn<Nn;Zn++)_n.setValue(q,"_gl_DrawID",Zn),Ot.render(Pt[Zn]/mt,Ve[Zn])}else if(ae.isInstancedMesh)Ot.renderInstances(Ze,Qt,ae.count);else if(re.isInstancedBufferGeometry){const Pt=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Ve=Math.min(re.instanceCount,Pt);Ot.renderInstances(Ze,Qt,Ve)}else Ot.render(Ze,Qt)};function jn(R,Y,re){R.transparent===!0&&R.side===ya&&R.forceSinglePass===!1?(R.side=Yn,R.needsUpdate=!0,Yr(R,Y,re),R.side=hr,R.needsUpdate=!0,Yr(R,Y,re),R.side=ya):Yr(R,Y,re)}this.compile=function(R,Y,re=null){re===null&&(re=R),L=Pe.get(re),L.init(Y),b.push(L),re.traverseVisible(function(ae){ae.isLight&&ae.layers.test(Y.layers)&&(L.pushLight(ae),ae.castShadow&&L.pushShadow(ae))}),R!==re&&R.traverseVisible(function(ae){ae.isLight&&ae.layers.test(Y.layers)&&(L.pushLight(ae),ae.castShadow&&L.pushShadow(ae))}),L.setupLights();const ie=new Set;return R.traverse(function(ae){if(!(ae.isMesh||ae.isPoints||ae.isLine||ae.isSprite))return;const ze=ae.material;if(ze)if(Array.isArray(ze))for(let ke=0;ke<ze.length;ke++){const Fe=ze[ke];jn(Fe,re,ae),ie.add(Fe)}else jn(ze,re,ae),ie.add(ze)}),L=b.pop(),ie},this.compileAsync=function(R,Y,re=null){const ie=this.compile(R,Y,re);return new Promise(ae=>{function ze(){if(ie.forEach(function(ke){N.get(ke).currentProgram.isReady()&&ie.delete(ke)}),ie.size===0){ae(R);return}setTimeout(ze,10)}ht.get("KHR_parallel_shader_compile")!==null?ze():setTimeout(ze,10)})};let pr=null;function Js(R){pr&&pr(R)}function $s(){Un.stop()}function eo(){Un.start()}const Un=new Sx;Un.setAnimationLoop(Js),typeof self<"u"&&Un.setContext(self),this.setAnimationLoop=function(R){pr=R,Le.setAnimationLoop(R),R===null?Un.stop():Un.start()},Le.addEventListener("sessionstart",$s),Le.addEventListener("sessionend",eo),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){bt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;Z!==null&&Z.renderStart(R,Y);const re=Le.enabled===!0&&Le.isPresenting===!0,ie=P!==null&&(X===null||re)&&P.begin(W,X);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Le.enabled===!0&&Le.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(Le.cameraAutoUpdate===!0&&Le.updateCamera(Y),Y=Le.getCamera()),R.isScene===!0&&R.onBeforeRender(W,R,Y,X),L=Pe.get(R,b.length),L.init(Y),L.state.textureUnits=E.getTextureUnits(),b.push(L),vt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Je.setFromProjectionMatrix(vt,Xi,Y.reversedDepth),dt=this.localClippingEnabled,Xt=Ie.init(this.clippingPlanes,dt),H=de.get(R,O.length),H.init(),O.push(H),Le.enabled===!0&&Le.isPresenting===!0){const ke=W.xr.getDepthSensingMesh();ke!==null&&on(ke,Y,-1/0,W.sortObjects)}on(R,Y,0,W.sortObjects),H.finish(),W.sortObjects===!0&&H.sort(oe,ye),Yt=Le.enabled===!1||Le.isPresenting===!1||Le.hasDepthSensing()===!1,Yt&&De.addToRenderList(H,R),this.info.render.frame++,Xt===!0&&Ie.beginShadows();const ae=L.state.shadowsArray;if(Ne.render(ae,R,Y),Xt===!0&&Ie.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ie&&P.hasRenderPass())===!1){const ke=H.opaque,Fe=H.transmissive;if(L.setupLights(),Y.isArrayCamera){const We=Y.cameras;if(Fe.length>0)for(let Xe=0,Ke=We.length;Xe<Ke;Xe++){const ot=We[Xe];Ji(ke,Fe,R,ot)}Yt&&De.render(R);for(let Xe=0,Ke=We.length;Xe<Ke;Xe++){const ot=We[Xe];An(H,R,ot,ot.viewport)}}else Fe.length>0&&Ji(ke,Fe,R,Y),Yt&&De.render(R),An(H,R,Y)}X!==null&&pe===0&&(E.updateMultisampleRenderTarget(X),E.updateRenderTargetMipmap(X)),ie&&P.end(W),R.isScene===!0&&R.onAfterRender(W,R,Y),Te.resetDefaultState(),I=-1,B=null,b.pop(),b.length>0?(L=b[b.length-1],E.setTextureUnits(L.state.textureUnits),Xt===!0&&Ie.setGlobalState(W.clippingPlanes,L.state.camera)):L=null,O.pop(),O.length>0?H=O[O.length-1]:H=null,Z!==null&&Z.renderEnd()};function on(R,Y,re,ie){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)re=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLightProbeGrid)L.pushLightProbeGrid(R);else if(R.isLight)L.pushLight(R),R.castShadow&&L.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Je.intersectsSprite(R)){ie&&ct.setFromMatrixPosition(R.matrixWorld).applyMatrix4(vt);const ke=we.update(R),Fe=R.material;Fe.visible&&H.push(R,ke,Fe,re,ct.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Je.intersectsObject(R))){const ke=we.update(R),Fe=R.material;if(ie&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ct.copy(R.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),ct.copy(ke.boundingSphere.center)),ct.applyMatrix4(R.matrixWorld).applyMatrix4(vt)),Array.isArray(Fe)){const We=ke.groups;for(let Xe=0,Ke=We.length;Xe<Ke;Xe++){const ot=We[Xe],Ze=Fe[ot.materialIndex];Ze&&Ze.visible&&H.push(R,ke,Ze,re,ct.z,ot)}}else Fe.visible&&H.push(R,ke,Fe,re,ct.z,null)}}const ze=R.children;for(let ke=0,Fe=ze.length;ke<Fe;ke++)on(ze[ke],Y,re,ie)}function An(R,Y,re,ie){const{opaque:ae,transmissive:ze,transparent:ke}=R;L.setupLightsView(re),Xt===!0&&Ie.setGlobalState(W.clippingPlanes,re),ie&&Ce.viewport(le.copy(ie)),ae.length>0&&Da(ae,Y,re),ze.length>0&&Da(ze,Y,re),ke.length>0&&Da(ke,Y,re),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function Ji(R,Y,re,ie){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[ie.id]===void 0){const Ze=ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[ie.id]=new qi(1,1,{generateMipmaps:!0,type:Ze?Ta:Si,minFilter:Hr,samples:Math.max(4,Ht.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Mt.workingColorSpace})}const ze=L.state.transmissionRenderTarget[ie.id],ke=ie.viewport||le;ze.setSize(ke.z*W.transmissionResolutionScale,ke.w*W.transmissionResolutionScale);const Fe=W.getRenderTarget(),We=W.getActiveCubeFace(),Xe=W.getActiveMipmapLevel();W.setRenderTarget(ze),W.getClearColor(F),$=W.getClearAlpha(),$<1&&W.setClearColor(16777215,.5),W.clear(),Yt&&De.render(re);const Ke=W.toneMapping;W.toneMapping=Wi;const ot=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),L.setupLightsView(ie),Xt===!0&&Ie.setGlobalState(W.clippingPlanes,ie),Da(R,re,ie),E.updateMultisampleRenderTarget(ze),E.updateRenderTargetMipmap(ze),ht.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let At=0,Qt=Y.length;At<Qt;At++){const Wt=Y[At],{object:Ot,geometry:Pt,material:Ve,group:Nn}=Wt;if(Ve.side===ya&&Ot.layers.test(ie.layers)){const mt=Ve.side;Ve.side=Yn,Ve.needsUpdate=!0,dl(Ot,re,ie,Pt,Ve,Nn),Ve.side=mt,Ve.needsUpdate=!0,Ze=!0}}Ze===!0&&(E.updateMultisampleRenderTarget(ze),E.updateRenderTargetMipmap(ze))}W.setRenderTarget(Fe,We,Xe),W.setClearColor(F,$),ot!==void 0&&(ie.viewport=ot),W.toneMapping=Ke}function Da(R,Y,re){const ie=Y.isScene===!0?Y.overrideMaterial:null;for(let ae=0,ze=R.length;ae<ze;ae++){const ke=R[ae],{object:Fe,geometry:We,group:Xe}=ke;let Ke=ke.material;Ke.allowOverride===!0&&ie!==null&&(Ke=ie),Fe.layers.test(re.layers)&&dl(Fe,Y,re,We,Ke,Xe)}}function dl(R,Y,re,ie,ae,ze){R.onBeforeRender(W,Y,re,ie,ae,ze),R.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),ae.onBeforeRender(W,Y,re,ie,R,ze),ae.transparent===!0&&ae.side===ya&&ae.forceSinglePass===!1?(ae.side=Yn,ae.needsUpdate=!0,W.renderBufferDirect(re,Y,ie,ae,R,ze),ae.side=hr,ae.needsUpdate=!0,W.renderBufferDirect(re,Y,ie,ae,R,ze),ae.side=ya):W.renderBufferDirect(re,Y,ie,ae,R,ze),R.onAfterRender(W,Y,re,ie,ae,ze)}function Yr(R,Y,re){Y.isScene!==!0&&(Y=sn);const ie=N.get(R),ae=L.state.lights,ze=L.state.shadowsArray,ke=ae.state.version,Fe=Oe.getParameters(R,ae.state,ze,Y,re,L.state.lightProbeGridArray),We=Oe.getProgramCacheKey(Fe);let Xe=ie.programs;ie.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?Y.environment:null,ie.fog=Y.fog;const Ke=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;ie.envMap=J.get(R.envMap||ie.environment,Ke),ie.envMapRotation=ie.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,Xe===void 0&&(R.addEventListener("dispose",tn),Xe=new Map,ie.programs=Xe);let ot=Xe.get(We);if(ot!==void 0){if(ie.currentProgram===ot&&ie.lightsStateVersion===ke)return Ua(R,Fe),ot}else Fe.uniforms=Oe.getUniforms(R),Z!==null&&R.isNodeMaterial&&Z.build(R,re,Fe),R.onBeforeCompile(Fe,W),ot=Oe.acquireProgram(Fe,We),Xe.set(We,ot),ie.uniforms=Fe.uniforms;const Ze=ie.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ze.clippingPlanes=Ie.uniform),Ua(R,Fe),ie.needsLights=mr(R),ie.lightsStateVersion=ke,ie.needsLights&&(Ze.ambientLightColor.value=ae.state.ambient,Ze.lightProbe.value=ae.state.probe,Ze.directionalLights.value=ae.state.directional,Ze.directionalLightShadows.value=ae.state.directionalShadow,Ze.spotLights.value=ae.state.spot,Ze.spotLightShadows.value=ae.state.spotShadow,Ze.rectAreaLights.value=ae.state.rectArea,Ze.ltc_1.value=ae.state.rectAreaLTC1,Ze.ltc_2.value=ae.state.rectAreaLTC2,Ze.pointLights.value=ae.state.point,Ze.pointLightShadows.value=ae.state.pointShadow,Ze.hemisphereLights.value=ae.state.hemi,Ze.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,Ze.spotLightMatrix.value=ae.state.spotLightMatrix,Ze.spotLightMap.value=ae.state.spotLightMap,Ze.pointShadowMatrix.value=ae.state.pointShadowMatrix),ie.lightProbeGrid=L.state.lightProbeGridArray.length>0,ie.currentProgram=ot,ie.uniformsList=null,ot}function to(R){if(R.uniformsList===null){const Y=R.currentProgram.getUniforms();R.uniformsList=eu.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function Ua(R,Y){const re=N.get(R);re.outputColorSpace=Y.outputColorSpace,re.batching=Y.batching,re.batchingColor=Y.batchingColor,re.instancing=Y.instancing,re.instancingColor=Y.instancingColor,re.instancingMorph=Y.instancingMorph,re.skinning=Y.skinning,re.morphTargets=Y.morphTargets,re.morphNormals=Y.morphNormals,re.morphColors=Y.morphColors,re.morphTargetsCount=Y.morphTargetsCount,re.numClippingPlanes=Y.numClippingPlanes,re.numIntersection=Y.numClipIntersection,re.vertexAlphas=Y.vertexAlphas,re.vertexTangents=Y.vertexTangents,re.toneMapping=Y.toneMapping}function no(R,Y){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;U.setFromMatrixPosition(Y.matrixWorld);for(let re=0,ie=R.length;re<ie;re++){const ae=R[re];if(ae.texture!==null&&ae.boundingBox.containsPoint(U))return ae}return null}function Na(R,Y,re,ie,ae){Y.isScene!==!0&&(Y=sn),E.resetTextureUnits();const ze=Y.fog,ke=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial?Y.environment:null,Fe=X===null?W.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Mt.workingColorSpace,We=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial&&!ie.envMap||ie.isMeshPhongMaterial&&!ie.envMap,Xe=J.get(ie.envMap||ke,We),Ke=ie.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,ot=!!re.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),Ze=!!re.morphAttributes.position,At=!!re.morphAttributes.normal,Qt=!!re.morphAttributes.color;let Wt=Wi;ie.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Wt=W.toneMapping);const Ot=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,Pt=Ot!==void 0?Ot.length:0,Ve=N.get(ie),Nn=L.state.lights;if(Xt===!0&&(dt===!0||R!==B)){const Nt=R===B&&ie.id===I;Ie.setState(ie,R,Nt)}let mt=!1;ie.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Nn.state.version||Ve.outputColorSpace!==Fe||ae.isBatchedMesh&&Ve.batching===!1||!ae.isBatchedMesh&&Ve.batching===!0||ae.isBatchedMesh&&Ve.batchingColor===!0&&ae.colorTexture===null||ae.isBatchedMesh&&Ve.batchingColor===!1&&ae.colorTexture!==null||ae.isInstancedMesh&&Ve.instancing===!1||!ae.isInstancedMesh&&Ve.instancing===!0||ae.isSkinnedMesh&&Ve.skinning===!1||!ae.isSkinnedMesh&&Ve.skinning===!0||ae.isInstancedMesh&&Ve.instancingColor===!0&&ae.instanceColor===null||ae.isInstancedMesh&&Ve.instancingColor===!1&&ae.instanceColor!==null||ae.isInstancedMesh&&Ve.instancingMorph===!0&&ae.morphTexture===null||ae.isInstancedMesh&&Ve.instancingMorph===!1&&ae.morphTexture!==null||Ve.envMap!==Xe||ie.fog===!0&&Ve.fog!==ze||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==Ie.numPlanes||Ve.numIntersection!==Ie.numIntersection)||Ve.vertexAlphas!==Ke||Ve.vertexTangents!==ot||Ve.morphTargets!==Ze||Ve.morphNormals!==At||Ve.morphColors!==Qt||Ve.toneMapping!==Wt||Ve.morphTargetsCount!==Pt||!!Ve.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(mt=!0):(mt=!0,Ve.__version=ie.version);let _n=Ve.currentProgram;mt===!0&&(_n=Yr(ie,Y,ae),Z&&ie.isNodeMaterial&&Z.onUpdateProgram(ie,_n,Ve));let Zn=!1,Ei=!1,Kn=!1;const It=_n.getUniforms(),Jt=Ve.uniforms;if(Ce.useProgram(_n.program)&&(Zn=!0,Ei=!0,Kn=!0),ie.id!==I&&(I=ie.id,Ei=!0),Ve.needsLights){const Nt=no(L.state.lightProbeGridArray,ae);Ve.lightProbeGrid!==Nt&&(Ve.lightProbeGrid=Nt,Ei=!0)}if(Zn||B!==R){Ce.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),It.setValue(q,"projectionMatrix",R.projectionMatrix),It.setValue(q,"viewMatrix",R.matrixWorldInverse);const Pi=It.map.cameraPosition;Pi!==void 0&&Pi.setValue(q,Lt.setFromMatrixPosition(R.matrixWorld)),Ht.logarithmicDepthBuffer&&It.setValue(q,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&It.setValue(q,"isOrthographic",R.isOrthographicCamera===!0),B!==R&&(B=R,Ei=!0,Kn=!0)}if(Ve.needsLights&&(Nn.state.directionalShadowMap.length>0&&It.setValue(q,"directionalShadowMap",Nn.state.directionalShadowMap,E),Nn.state.spotShadowMap.length>0&&It.setValue(q,"spotShadowMap",Nn.state.spotShadowMap,E),Nn.state.pointShadowMap.length>0&&It.setValue(q,"pointShadowMap",Nn.state.pointShadowMap,E)),ae.isSkinnedMesh){It.setOptional(q,ae,"bindMatrix"),It.setOptional(q,ae,"bindMatrixInverse");const Nt=ae.skeleton;Nt&&(Nt.boneTexture===null&&Nt.computeBoneTexture(),It.setValue(q,"boneTexture",Nt.boneTexture,E))}ae.isBatchedMesh&&(It.setOptional(q,ae,"batchingTexture"),It.setValue(q,"batchingTexture",ae._matricesTexture,E),It.setOptional(q,ae,"batchingIdTexture"),It.setValue(q,"batchingIdTexture",ae._indirectTexture,E),It.setOptional(q,ae,"batchingColorTexture"),ae._colorsTexture!==null&&It.setValue(q,"batchingColorTexture",ae._colorsTexture,E));const bi=re.morphAttributes;if((bi.position!==void 0||bi.normal!==void 0||bi.color!==void 0)&&it.update(ae,re,_n),(Ei||Ve.receiveShadow!==ae.receiveShadow)&&(Ve.receiveShadow=ae.receiveShadow,It.setValue(q,"receiveShadow",ae.receiveShadow)),(ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial)&&ie.envMap===null&&Y.environment!==null&&(Jt.envMapIntensity.value=Y.environmentIntensity),Jt.dfgLUT!==void 0&&(Jt.dfgLUT.value=Z2()),Ei){if(It.setValue(q,"toneMappingExposure",W.toneMappingExposure),Ve.needsLights&&La(Jt,Kn),ze&&ie.fog===!0&&fe.refreshFogUniforms(Jt,ze),fe.refreshMaterialUniforms(Jt,ie,Ue,Re,L.state.transmissionRenderTarget[R.id]),Ve.needsLights&&Ve.lightProbeGrid){const Nt=Ve.lightProbeGrid;Jt.probesSH.value=Nt.texture,Jt.probesMin.value.copy(Nt.boundingBox.min),Jt.probesMax.value.copy(Nt.boundingBox.max),Jt.probesResolution.value.copy(Nt.resolution)}eu.upload(q,to(Ve),Jt,E)}if(ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(eu.upload(q,to(Ve),Jt,E),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&It.setValue(q,"center",ae.center),It.setValue(q,"modelViewMatrix",ae.modelViewMatrix),It.setValue(q,"normalMatrix",ae.normalMatrix),It.setValue(q,"modelMatrix",ae.matrixWorld),ie.uniformsGroups!==void 0){const Nt=ie.uniformsGroups;for(let Pi=0,Pa=Nt.length;Pi<Pa;Pi++){const gr=Nt[Pi];me.update(gr,_n),me.bind(gr,_n)}}return _n}function La(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function mr(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return ue},this.getActiveMipmapLevel=function(){return pe},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(R,Y,re){const ie=N.get(R);ie.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),N.get(R.texture).__webglTexture=Y,N.get(R.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:re,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Y){const re=N.get(R);re.__webglFramebuffer=Y,re.__useDefaultFramebuffer=Y===void 0};const Oa=q.createFramebuffer();this.setRenderTarget=function(R,Y=0,re=0){X=R,ue=Y,pe=re;let ie=null,ae=!1,ze=!1;if(R){const Fe=N.get(R);if(Fe.__useDefaultFramebuffer!==void 0){Ce.bindFramebuffer(q.FRAMEBUFFER,Fe.__webglFramebuffer),le.copy(R.viewport),ge.copy(R.scissor),Ee=R.scissorTest,Ce.viewport(le),Ce.scissor(ge),Ce.setScissorTest(Ee),I=-1;return}else if(Fe.__webglFramebuffer===void 0)E.setupRenderTarget(R);else if(Fe.__hasExternalTextures)E.rebindTextures(R,N.get(R.texture).__webglTexture,N.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ke=R.depthTexture;if(Fe.__boundDepthTexture!==Ke){if(Ke!==null&&N.has(Ke)&&(R.width!==Ke.image.width||R.height!==Ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(R)}}const We=R.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(ze=!0);const Xe=N.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Xe[Y])?ie=Xe[Y][re]:ie=Xe[Y],ae=!0):R.samples>0&&E.useMultisampledRTT(R)===!1?ie=N.get(R).__webglMultisampledFramebuffer:Array.isArray(Xe)?ie=Xe[re]:ie=Xe,le.copy(R.viewport),ge.copy(R.scissor),Ee=R.scissorTest}else le.copy(Ae).multiplyScalar(Ue).floor(),ge.copy(Ge).multiplyScalar(Ue).floor(),Ee=et;if(re!==0&&(ie=Oa),Ce.bindFramebuffer(q.FRAMEBUFFER,ie)&&Ce.drawBuffers(R,ie),Ce.viewport(le),Ce.scissor(ge),Ce.setScissorTest(Ee),ae){const Fe=N.get(R.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Fe.__webglTexture,re)}else if(ze){const Fe=Y;for(let We=0;We<R.textures.length;We++){const Xe=N.get(R.textures[We]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+We,Xe.__webglTexture,re,Fe)}}else if(R!==null&&re!==0){const Fe=N.get(R.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Fe.__webglTexture,re)}I=-1},this.readRenderTargetPixels=function(R,Y,re,ie,ae,ze,ke,Fe=0){if(!(R&&R.isWebGLRenderTarget)){bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=N.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ke!==void 0&&(We=We[ke]),We){Ce.bindFramebuffer(q.FRAMEBUFFER,We);try{const Xe=R.textures[Fe],Ke=Xe.format,ot=Xe.type;if(R.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Fe),!Ht.textureFormatReadable(Ke)){bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ht.textureTypeReadable(ot)){bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-ie&&re>=0&&re<=R.height-ae&&q.readPixels(Y,re,ie,ae,V.convert(Ke),V.convert(ot),ze)}finally{const Xe=X!==null?N.get(X).__webglFramebuffer:null;Ce.bindFramebuffer(q.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(R,Y,re,ie,ae,ze,ke,Fe=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=N.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ke!==void 0&&(We=We[ke]),We)if(Y>=0&&Y<=R.width-ie&&re>=0&&re<=R.height-ae){Ce.bindFramebuffer(q.FRAMEBUFFER,We);const Xe=R.textures[Fe],Ke=Xe.format,ot=Xe.type;if(R.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Fe),!Ht.textureFormatReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ht.textureTypeReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ze=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,Ze),q.bufferData(q.PIXEL_PACK_BUFFER,ze.byteLength,q.STREAM_READ),q.readPixels(Y,re,ie,ae,V.convert(Ke),V.convert(ot),0);const At=X!==null?N.get(X).__webglFramebuffer:null;Ce.bindFramebuffer(q.FRAMEBUFFER,At);const Qt=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await xb(q,Qt,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,Ze),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,ze),q.deleteBuffer(Ze),q.deleteSync(Qt),ze}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Y=null,re=0){const ie=Math.pow(2,-re),ae=Math.floor(R.image.width*ie),ze=Math.floor(R.image.height*ie),ke=Y!==null?Y.x:0,Fe=Y!==null?Y.y:0;E.setTexture2D(R,0),q.copyTexSubImage2D(q.TEXTURE_2D,re,0,0,ke,Fe,ae,ze),Ce.unbindTexture()};const fn=q.createFramebuffer(),hl=q.createFramebuffer();this.copyTextureToTexture=function(R,Y,re=null,ie=null,ae=0,ze=0){let ke,Fe,We,Xe,Ke,ot,Ze,At,Qt;const Wt=R.isCompressedTexture?R.mipmaps[ze]:R.image;if(re!==null)ke=re.max.x-re.min.x,Fe=re.max.y-re.min.y,We=re.isBox3?re.max.z-re.min.z:1,Xe=re.min.x,Ke=re.min.y,ot=re.isBox3?re.min.z:0;else{const Jt=Math.pow(2,-ae);ke=Math.floor(Wt.width*Jt),Fe=Math.floor(Wt.height*Jt),R.isDataArrayTexture?We=Wt.depth:R.isData3DTexture?We=Math.floor(Wt.depth*Jt):We=1,Xe=0,Ke=0,ot=0}ie!==null?(Ze=ie.x,At=ie.y,Qt=ie.z):(Ze=0,At=0,Qt=0);const Ot=V.convert(Y.format),Pt=V.convert(Y.type);let Ve;Y.isData3DTexture?(E.setTexture3D(Y,0),Ve=q.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(E.setTexture2DArray(Y,0),Ve=q.TEXTURE_2D_ARRAY):(E.setTexture2D(Y,0),Ve=q.TEXTURE_2D),Ce.activeTexture(q.TEXTURE0),Ce.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,Y.flipY),Ce.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),Ce.pixelStorei(q.UNPACK_ALIGNMENT,Y.unpackAlignment);const Nn=Ce.getParameter(q.UNPACK_ROW_LENGTH),mt=Ce.getParameter(q.UNPACK_IMAGE_HEIGHT),_n=Ce.getParameter(q.UNPACK_SKIP_PIXELS),Zn=Ce.getParameter(q.UNPACK_SKIP_ROWS),Ei=Ce.getParameter(q.UNPACK_SKIP_IMAGES);Ce.pixelStorei(q.UNPACK_ROW_LENGTH,Wt.width),Ce.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Wt.height),Ce.pixelStorei(q.UNPACK_SKIP_PIXELS,Xe),Ce.pixelStorei(q.UNPACK_SKIP_ROWS,Ke),Ce.pixelStorei(q.UNPACK_SKIP_IMAGES,ot);const Kn=R.isDataArrayTexture||R.isData3DTexture,It=Y.isDataArrayTexture||Y.isData3DTexture;if(R.isDepthTexture){const Jt=N.get(R),bi=N.get(Y),Nt=N.get(Jt.__renderTarget),Pi=N.get(bi.__renderTarget);Ce.bindFramebuffer(q.READ_FRAMEBUFFER,Nt.__webglFramebuffer),Ce.bindFramebuffer(q.DRAW_FRAMEBUFFER,Pi.__webglFramebuffer);for(let Pa=0;Pa<We;Pa++)Kn&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,N.get(R).__webglTexture,ae,ot+Pa),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,N.get(Y).__webglTexture,ze,Qt+Pa)),q.blitFramebuffer(Xe,Ke,ke,Fe,Ze,At,ke,Fe,q.DEPTH_BUFFER_BIT,q.NEAREST);Ce.bindFramebuffer(q.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(ae!==0||R.isRenderTargetTexture||N.has(R)){const Jt=N.get(R),bi=N.get(Y);Ce.bindFramebuffer(q.READ_FRAMEBUFFER,fn),Ce.bindFramebuffer(q.DRAW_FRAMEBUFFER,hl);for(let Nt=0;Nt<We;Nt++)Kn?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Jt.__webglTexture,ae,ot+Nt):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Jt.__webglTexture,ae),It?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,bi.__webglTexture,ze,Qt+Nt):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,bi.__webglTexture,ze),ae!==0?q.blitFramebuffer(Xe,Ke,ke,Fe,Ze,At,ke,Fe,q.COLOR_BUFFER_BIT,q.NEAREST):It?q.copyTexSubImage3D(Ve,ze,Ze,At,Qt+Nt,Xe,Ke,ke,Fe):q.copyTexSubImage2D(Ve,ze,Ze,At,Xe,Ke,ke,Fe);Ce.bindFramebuffer(q.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else It?R.isDataTexture||R.isData3DTexture?q.texSubImage3D(Ve,ze,Ze,At,Qt,ke,Fe,We,Ot,Pt,Wt.data):Y.isCompressedArrayTexture?q.compressedTexSubImage3D(Ve,ze,Ze,At,Qt,ke,Fe,We,Ot,Wt.data):q.texSubImage3D(Ve,ze,Ze,At,Qt,ke,Fe,We,Ot,Pt,Wt):R.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,ze,Ze,At,ke,Fe,Ot,Pt,Wt.data):R.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,ze,Ze,At,Wt.width,Wt.height,Ot,Wt.data):q.texSubImage2D(q.TEXTURE_2D,ze,Ze,At,ke,Fe,Ot,Pt,Wt);Ce.pixelStorei(q.UNPACK_ROW_LENGTH,Nn),Ce.pixelStorei(q.UNPACK_IMAGE_HEIGHT,mt),Ce.pixelStorei(q.UNPACK_SKIP_PIXELS,_n),Ce.pixelStorei(q.UNPACK_SKIP_ROWS,Zn),Ce.pixelStorei(q.UNPACK_SKIP_IMAGES,Ei),ze===0&&Y.generateMipmaps&&q.generateMipmap(Ve),Ce.unbindTexture()},this.initRenderTarget=function(R){N.get(R).__webglFramebuffer===void 0&&E.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?E.setTextureCube(R,0):R.isData3DTexture?E.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?E.setTexture2DArray(R,0):E.setTexture2D(R,0),Ce.unbindTexture()},this.resetState=function(){ue=0,pe=0,X=null,Ce.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Mt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Mt._getUnpackColorSpace()}}function K2(){const s=K.useRef(null),e=K.useRef(null),i=K.useRef(null),r=K.useRef(null),l=K.useRef(null),c=K.useRef(null),f=K.useRef(0),h=K.useRef({x:0,y:0}),m=K.useRef({x:.001,y:.001}),p=.001,v=.015,_=typeof window<"u"&&window.innerWidth<768?15:20;return K.useEffect(()=>{const g=s.current;if(!g)return;const M=new dx;M.background=new Dt(657931),c.current=M;const A=window.innerWidth/window.innerHeight,w=50,x=new Ep(-w*A/2,w*A/2,w/2,-w/2,.1,1e3);x.position.z=50,l.current=x;const y=new Cx({antialias:!0,alpha:!0});y.setSize(window.innerWidth,window.innerHeight),y.setPixelRatio(Math.min(window.devicePixelRatio,2)),g.appendChild(y.domElement),r.current=y;const T=new qs(_,0),D=new Xs({color:5933722,wireframe:!0,transparent:!0,opacity:.8}),U=new oi(T,D);M.add(U),e.current=U;const H=new qs(_*1.1,0),L=new Xs({color:12883306,wireframe:!0,transparent:!0,opacity:.3}),O=new oi(H,L);M.add(O),i.current=O;const b=()=>{f.current=requestAnimationFrame(b);const z=window.scrollY/Math.max(document.body.scrollHeight-window.innerHeight,1),Z=p+z*v;m.current.x+=(Z-m.current.x)*.1,m.current.y+=(Z-m.current.y)*.1,U.rotation.x+=m.current.x,U.rotation.y+=m.current.y,O.rotation.x-=m.current.x*.5,O.rotation.y+=m.current.y*.8;const ue=h.current.y*.5,pe=h.current.x*.5;U.rotation.x+=(ue-U.rotation.x)*.05,U.rotation.y+=(pe-U.rotation.y)*.05,O.rotation.x+=(ue-O.rotation.x)*.03,O.rotation.y+=(pe-O.rotation.y)*.03;const X=z*10;U.position.y+=(X-U.position.y)*.1,O.position.y=U.position.y;const I=1-z*.5,B=U.scale.x+(I-U.scale.x)*.1;U.scale.setScalar(B),O.scale.setScalar(B);const le=1-z*2,ge=Math.max(.1,le);U.material.opacity+=(ge-U.material.opacity)*.1,O.material.opacity+=(ge*.3-O.material.opacity)*.1,y.render(M,x)};b();const P=z=>{h.current.x=z.clientX/window.innerWidth*2-1,h.current.y=-(z.clientY/window.innerHeight)*2+1},W=()=>{const z=window.innerWidth/window.innerHeight;x.left=-w*z/2,x.right=w*z/2,x.top=w/2,x.bottom=-w/2,x.updateProjectionMatrix(),y.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("mousemove",P),window.addEventListener("resize",W),()=>{cancelAnimationFrame(f.current),window.removeEventListener("mousemove",P),window.removeEventListener("resize",W),T.dispose(),D.dispose(),H.dispose(),L.dispose(),y.dispose(),g.contains(y.domElement)&&g.removeChild(y.domElement)}},[_]),Q.jsx("div",{ref:s,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",zIndex:0,pointerEvents:"none"}})}function Q2(){return Q.jsxs("section",{id:"hero",className:"relative w-full overflow-hidden",style:{height:"100vh",minHeight:600},children:[Q.jsx(K2,{}),Q.jsx("div",{className:"absolute inset-0",style:{zIndex:1,background:"linear-gradient(to bottom, rgba(10,10,11,0.3), rgba(10,10,11,0.7))",pointerEvents:"none"}}),Q.jsxs("div",{className:"relative flex flex-col items-center justify-center text-center px-4",style:{zIndex:2,height:"100%"},children:[Q.jsx("span",{className:"font-mono text-xs tracking-wider uppercase inline-block mb-6",style:{color:"#C4956A",border:"1px solid #222222",borderRadius:9999,padding:"0.25rem 0.75rem",letterSpacing:"0.08em"},children:"PhD · Mechanical Engineering · Predictive Maintenance"}),Q.jsx("h1",{className:"font-heading tracking-tight",style:{fontSize:"clamp(3rem, 6vw, 5rem)",color:"#F5F5F0",fontWeight:400,lineHeight:1.1,letterSpacing:"-0.02em",margin:0},children:"Nouioua Mourad"}),Q.jsx("div",{className:"mx-auto",style:{width:80,height:1,backgroundColor:"#C4956A",margin:"1.5rem auto"}}),Q.jsx("p",{className:"font-body uppercase tracking-widest",style:{fontSize:"1.5rem",color:"#8A8A8A",fontWeight:300,letterSpacing:"0.08em",margin:0},children:"Precision. Diagnostics. Intelligence."}),Q.jsx("p",{className:"font-body mx-auto",style:{fontSize:"0.875rem",color:"#555555",maxWidth:480,textAlign:"center",marginTop:"1.5rem",lineHeight:1.7},children:"Postdoctoral Researcher at KFUPM · 8+ Years in Industrial IoT, Vibration Diagnostics & Smart Manufacturing"})]}),Q.jsxs("div",{className:"absolute left-1/2 flex flex-col items-center gap-2",style:{bottom:"2rem",transform:"translateX(-50%)",zIndex:2},children:[Q.jsx("span",{className:"font-mono text-xs",style:{color:"#555555",letterSpacing:"0.05em"},children:"Scroll to explore"}),Q.jsx(TE,{size:20,className:"animate-bounce-slow",style:{color:"#555555"}})]})]})}function Oi({size:s=3,color:e="#C4956A",opacity:i=.15,speed:r=.003,left:l,top:c,right:f,bottom:h,wireframeDensity:m=0}){const p=K.useRef(null),v=K.useRef(0);K.useEffect(()=>{const g=p.current;if(!g)return;const M=new dx,A=new xi(50,1,.1,100);A.position.z=12;const w=new Cx({antialias:!0,alpha:!0}),x=s*30;w.setSize(x,x),w.setPixelRatio(Math.min(window.devicePixelRatio,2)),w.domElement.style.width="100%",w.domElement.style.height="100%",w.domElement.style.display="block",g.appendChild(w.domElement);const y=new qs(s,m),T=new Xs({color:new Dt(e),wireframe:!0,transparent:!0,opacity:i}),D=new oi(y,T);M.add(D);const U=new qs(s*.7,m),H=new Xs({color:new Dt(e),wireframe:!0,transparent:!0,opacity:i*.5}),L=new oi(U,H);M.add(L);const O=()=>{v.current=requestAnimationFrame(O),D.rotation.x+=r,D.rotation.y+=r*1.3,L.rotation.x-=r*.7,L.rotation.y+=r*.5,w.render(M,A)};return O(),()=>{cancelAnimationFrame(v.current),y.dispose(),T.dispose(),U.dispose(),H.dispose(),w.dispose(),g.contains(w.domElement)&&g.removeChild(w.domElement)}},[s,e,i,r,m]);const _={position:"absolute",width:s*30,height:s*30,pointerEvents:"none",zIndex:0,opacity:.6};return l!==void 0&&(_.left=l),c!==void 0&&(_.top=c),f!==void 0&&(_.right=f),h!==void 0&&(_.bottom=h),Q.jsx("div",{ref:p,style:_})}function J2(){const s=K.useRef(null),[e,i]=K.useState(!1);return K.useEffect(()=>{const r=new IntersectionObserver(([l])=>{l.isIntersecting&&(i(!0),r.unobserve(l.target))},{threshold:.15});return s.current&&r.observe(s.current),()=>r.disconnect()},[]),Q.jsxs("section",{id:"research",ref:s,className:"relative overflow-hidden",style:{backgroundColor:"#0A0A0B",padding:"8rem 2rem"},children:[Q.jsx(Oi,{size:2.5,color:"#C4956A",opacity:.07,speed:.002,right:"5%",top:"10%"}),Q.jsx(Oi,{size:1.8,color:"#5A8A9A",opacity:.06,speed:.003,left:"2%",top:"60%"}),Q.jsxs("div",{className:"mx-auto flex flex-col md:flex-row items-start gap-12 relative",style:{maxWidth:1200,zIndex:1},children:[Q.jsx("div",{className:"flex-1",style:{minWidth:0},children:Q.jsxs("div",{style:{opacity:e?1:0,transform:e?"translateY(0)":"translateY(30px)",transition:"opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)"},children:[Q.jsx("span",{className:"font-mono text-xs uppercase",style:{color:"#C4956A",letterSpacing:"0.15em"},children:"Research Focus"}),Q.jsx("h2",{className:"font-heading mt-4",style:{fontSize:"clamp(2rem, 4vw, 3rem)",color:"#F5F5F0",fontWeight:400,lineHeight:1.1},children:"Bridging Physical Machinery & Digital Intelligence"}),Q.jsx("p",{className:"font-body mt-6",style:{fontSize:"1rem",color:"#8A8A8A",lineHeight:1.8},children:"Mechanical Engineer with 8+ years of combined experience in maintenance engineering, vibration-based diagnostics, smart data acquisition, predictive maintenance, and advanced manufacturing."}),Q.jsx("p",{className:"font-body mt-4",style:{fontSize:"1rem",color:"#8A8A8A",lineHeight:1.8},children:"Skilled in rotating machinery analysis, signal processing, multi-sensor data fusion, and AI-driven fault detection for industrial systems. Experienced in developing and deploying machine-learning-based diagnostic tools that connect physical machines with sensors, data acquisition systems, edge-computing devices, and monitoring platforms."}),Q.jsxs("div",{className:"flex flex-wrap items-center gap-4 mt-6",children:[Q.jsx("a",{href:"#publications",onClick:r=>{r.preventDefault(),document.querySelector("#publications")?.scrollIntoView({behavior:"smooth"})},className:"inline-block font-body text-sm transition-colors duration-300 hover:text-[#D4AA7D]",style:{color:"#C4956A",textDecoration:"none",fontWeight:500},children:"View Publications →"}),Q.jsx("a",{href:"https://scholar.google.com/citations?user=tEKyL0UAAAAJ",target:"_blank",rel:"noopener noreferrer",className:"inline-block font-mono text-xs transition-colors duration-300 hover:text-[#D4AA7D]",style:{color:"#555555",textDecoration:"none"},children:"Google Scholar →"}),Q.jsx("a",{href:"https://pure.kfupm.edu.sa/en/persons/mourad-nouioua/",target:"_blank",rel:"noopener noreferrer",className:"inline-block font-mono text-xs transition-colors duration-300 hover:text-[#D4AA7D]",style:{color:"#555555",textDecoration:"none"},children:"KFUPM Profile →"})]})]})}),Q.jsx("div",{className:"flex-shrink-0 flex justify-center md:justify-end w-full md:w-auto",style:{minWidth:280},children:Q.jsxs("div",{style:{opacity:e?1:0,transform:e?"translateY(0)":"translateY(30px)",transition:"opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s"},children:[Q.jsx("div",{className:"absolute",style:{width:"100%",height:"100%",border:"2px solid rgba(196, 149, 106, 0.15)",borderRadius:12,transform:"rotate(-4deg) translate(16px, -16px)",top:0,left:0,zIndex:0}}),Q.jsx("img",{src:"/M-Nouioua.github/assets/portrait.png",alt:"Dr. Nouioua Mourad",className:"relative",style:{width:"100%",maxWidth:360,borderRadius:12,border:"1px solid #222222",boxShadow:"0 20px 60px rgba(0,0,0,0.5)",zIndex:1,display:"block"}})]})})]})]})}function qc({value:s,label:e,delay:i}){const r=K.useRef(null),[l,c]=K.useState(!1);return K.useEffect(()=>{const f=new IntersectionObserver(([h])=>{h.isIntersecting&&(c(!0),f.unobserve(h.target))},{threshold:.3});return r.current&&f.observe(r.current),()=>f.disconnect()},[]),Q.jsxs("div",{ref:r,className:"text-center relative",style:{opacity:l?1:0,transform:l?"translateY(0)":"translateY(30px)",transition:`opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${i}s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${i}s`},children:[Q.jsx("div",{className:"font-heading",style:{fontSize:"clamp(3rem, 6vw, 4.5rem)",color:"#C4956A",fontWeight:400,lineHeight:1},children:s}),Q.jsx("div",{className:"font-mono text-xs uppercase mt-3",style:{color:"#555555",letterSpacing:"0.1em"},children:e})]})}function $2(){const s=K.useRef(null),[e,i]=K.useState(!1);return K.useEffect(()=>{const r=new IntersectionObserver(([l])=>{l.isIntersecting&&(i(!0),r.unobserve(l.target))},{threshold:.15});return s.current&&r.observe(s.current),()=>r.disconnect()},[]),Q.jsxs("section",{ref:s,className:"relative overflow-hidden",style:{backgroundColor:"#0A0A0B",padding:"6rem 2rem",borderTop:"1px solid #222222",borderBottom:"1px solid #222222"},children:[Q.jsx(Oi,{size:2.5,color:"#C4956A",opacity:.08,speed:.002,left:"5%",top:"10%"}),Q.jsx(Oi,{size:1.8,color:"#5A8A9A",opacity:.06,speed:.003,right:"8%",top:"20%"}),Q.jsx(Oi,{size:2,color:"#C4956A",opacity:.05,speed:.0015,right:"20%",bottom:"10%"}),Q.jsxs("div",{className:"mx-auto relative",style:{maxWidth:1200,zIndex:1},children:[Q.jsx("div",{className:"text-center mb-12",style:{opacity:e?1:0,transform:e?"translateY(0)":"translateY(30px)",transition:"opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)"},children:Q.jsx("span",{className:"font-mono text-xs uppercase",style:{color:"#C4956A",letterSpacing:"0.15em"},children:"Google Scholar Metrics"})}),Q.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12",children:[Q.jsx(qc,{value:"1002+",label:"Citations",delay:0}),Q.jsx(qc,{value:"17",label:"h-index",delay:.1}),Q.jsx(qc,{value:"20",label:"i10-index",delay:.2}),Q.jsx(qc,{value:"50+",label:"Publications",delay:.3})]}),Q.jsx("div",{className:"text-center mt-8",children:Q.jsx("a",{href:"https://scholar.google.com/citations?user=tEKyL0UAAAAJ",target:"_blank",rel:"noopener noreferrer",className:"font-mono text-xs transition-colors duration-300 hover:text-[#D4AA7D]",style:{color:"#C4956A",textDecoration:"none",letterSpacing:"0.05em"},children:"View full profile on Google Scholar →"})})]})]})}const wx=[{date:"Sep 2024 – Present",title:"Postdoctoral Researcher",org:"King Fahd University of Petroleum and Minerals, Al-Khobar, Saudi Arabia",description:"Leading development of real-time vibration-based diagnostic systems for rotating and cutting machinery. Integrating multi-sensor data (vibration, force, vision) with AI-based diagnostic tools for Industrial IoT platforms and predictive maintenance frameworks."},{date:"Dec 2020 – Sep 2024",title:"Senior Researcher & Head of Machining Process Division",org:"Mechanics Research Centre, Constantine, Algeria",description:"Directed diagnostic studies on machining performance using vibration and acoustic emission sensors. Led Industry 4.0 research integrating smart sensing, signal processing, machine learning, and process optimization."},{date:"Mar 2017 – Dec 2020",title:"Maintenance Engineer",org:"HUPP-Pharmaceutical, Constantine, Algeria",description:"Performed preventive and corrective maintenance on pharmaceutical production equipment (Bosch, Marchesini, Romaco systems). Selected for maintenance activities at a site in collaboration with Jamjoom Pharma."}];function eC({item:s,index:e}){const i=K.useRef(null),[r,l]=K.useState(!1);return K.useEffect(()=>{const c=new IntersectionObserver(([f])=>{f.isIntersecting&&(l(!0),c.unobserve(f.target))},{threshold:.15});return i.current&&c.observe(i.current),()=>c.disconnect()},[]),Q.jsxs("div",{ref:i,className:"relative flex gap-6 md:gap-8",style:{opacity:r?1:0,transform:r?"translateY(0)":"translateY(30px)",transition:`opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${e*.15}s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${e*.15}s`},children:[Q.jsxs("div",{className:"flex flex-col items-center flex-shrink-0",children:[Q.jsx("div",{className:"rounded-full flex-shrink-0",style:{width:10,height:10,backgroundColor:"#C4956A",boxShadow:"0 0 12px rgba(196, 149, 106, 0.4)",marginTop:6}}),e<wx.length-1&&Q.jsx("div",{className:"w-px flex-grow",style:{backgroundColor:"#222222",minHeight:60}})]}),Q.jsxs("div",{className:"pb-10",children:[Q.jsx("span",{className:"font-mono text-xs",style:{color:"#555555"},children:s.date}),Q.jsx("h3",{className:"font-body mt-1",style:{fontSize:"1.25rem",color:"#F5F5F0",fontWeight:500},children:s.title}),Q.jsx("p",{className:"font-body mt-1",style:{fontSize:"0.875rem",color:"#8A8A8A"},children:s.org}),Q.jsx("p",{className:"font-body mt-3",style:{fontSize:"0.875rem",color:"#8A8A8A",lineHeight:1.7,maxWidth:640},children:s.description})]})]})}function tC(){const s=K.useRef(null),[e,i]=K.useState(!1),[r,l]=K.useState(!1),c=K.useRef(null);return K.useEffect(()=>{const f=new IntersectionObserver(([m])=>{m.isIntersecting&&(i(!0),f.unobserve(m.target))},{threshold:.15}),h=new IntersectionObserver(([m])=>{m.isIntersecting&&(l(!0),h.unobserve(m.target))},{threshold:.1});return s.current&&f.observe(s.current),c.current&&h.observe(c.current),()=>{f.disconnect(),h.disconnect()}},[]),Q.jsxs("section",{id:"experience",ref:s,className:"relative overflow-hidden",style:{backgroundColor:"#121214",padding:"8rem 2rem"},children:[Q.jsx(Oi,{size:2,color:"#C4956A",opacity:.07,speed:.002,right:"5%",top:"15%"}),Q.jsx(Oi,{size:1.5,color:"#5A8A9A",opacity:.06,speed:.003,left:"2%",top:"70%"}),Q.jsxs("div",{className:"mx-auto relative",style:{maxWidth:1200,zIndex:1},children:[Q.jsxs("div",{style:{opacity:e?1:0,transform:e?"translateY(0)":"translateY(30px)",transition:"opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)"},children:[Q.jsx("span",{className:"font-mono text-xs uppercase",style:{color:"#C4956A",letterSpacing:"0.15em"},children:"Experience"}),Q.jsx("h2",{className:"font-heading mt-4",style:{fontSize:"clamp(2rem, 4vw, 3rem)",color:"#F5F5F0",fontWeight:400,lineHeight:1.1},children:"Career Path"})]}),Q.jsxs("div",{className:"flex flex-col md:flex-row gap-12 mt-12 items-start",children:[Q.jsx("div",{className:"flex-1 min-w-0",children:wx.map((f,h)=>Q.jsx(eC,{item:f,index:h},h))}),Q.jsx("div",{ref:c,className:"flex-shrink-0 w-full md:w-auto flex justify-center md:justify-end",style:{opacity:r?1:0,transform:r?"translateY(0)":"translateY(40px)",transition:"opacity 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s, transform 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s"},children:Q.jsxs("div",{className:"relative md:sticky",style:{top:"8rem"},children:[Q.jsx("div",{style:{position:"absolute",inset:0,border:"1px solid rgba(196, 149, 106, 0.15)",borderRadius:12,transform:"rotate(3deg) translate(-14px, 14px)",zIndex:0}}),Q.jsx("div",{style:{position:"absolute",left:-20,top:"15%",width:2,height:"70%",background:"linear-gradient(to bottom, transparent, #C4956A, transparent)",borderRadius:2,zIndex:2}}),Q.jsx("img",{src:"/M-Nouioua.github/assets/walking.png",alt:"Mourad Nouioua",style:{width:300,maxWidth:"100%",borderRadius:12,border:"1px solid #222222",boxShadow:"0 24px 64px rgba(0,0,0,0.6)",display:"block",position:"relative",zIndex:1,objectFit:"cover"}}),Q.jsx("p",{className:"font-mono text-center mt-3",style:{fontSize:"0.6rem",color:"#555555",letterSpacing:"0.15em",textTransform:"uppercase"},children:"Al-Khobar · KFUPM · 2024–Present"})]})})]})]})]})}const nC=[{title:"Cloud-based collaborative CNC manufacturing framework integrating tool wear monitoring and scheduling support",journal:"Scientific Reports",year:"2026",authors:"Imran, Mourad Nouioua, Samir Mekid",citations:"New",link:"https://scholar.google.com/citations?view_op=view_citation&hl=en&user=tEKyL0UAAAAJ&citation_for_view=tEKyL0UAAAAJ:UeHWp8X0CEIC"},{title:"AI-Driven Decision Support for Multi-Objective Optimization of Turning Parameters in Grey Cast Iron Machining",journal:"Results in Engineering",year:"2026",authors:"Nouioua, Mourad, et al.",citations:"New",link:"https://scholar.google.com/citations?view_op=view_citation&hl=en&user=tEKyL0UAAAAJ&citation_for_view=tEKyL0UAAAAJ:WF5omc3nYNoC"},{title:"Vibration-Based Tool Wear Prediction via Ensemble Learning and AutoML-Guided VMD Mode Selection",journal:"Journal of Vibration Engineering & Technologies 14.1",year:"2026",authors:"Nouioua, Mourad, Samir Mekid",citations:"New",link:"https://scholar.google.com/citations?view_op=view_citation&hl=en&user=tEKyL0UAAAAJ&citation_for_view=tEKyL0UAAAAJ:YsMSGLbcyi4C"},{title:"Assessment of turning AISI 316L under MWCNT-reinforced nanofluid-assisted MQL and optimization by NSGA-II and TOPSIS",journal:"Int. J. of Advanced Manufacturing Technology 127 (7)",year:"2023",authors:"B Oussama, YF Yapan, A Uysal, C Abdelhakim, N Mourad",citations:"29",link:"https://scholar.google.com/citations?view_op=view_citation&hl=en&user=tEKyL0UAAAAJ&citation_for_view=tEKyL0UAAAAJ:R3hNpaxXUhUC"},{title:"The analysis of tool vibration signals by spectral kurtosis and ICEEMDAN modes energy for insert wear monitoring in turning",journal:"Int. J. of Advanced Manufacturing Technology 115 (9)",year:"2021",authors:"ML Bouhalais, M Nouioua",citations:"43",link:"https://scholar.google.com/citations?view_op=view_citation&hl=en&user=tEKyL0UAAAAJ&citation_for_view=tEKyL0UAAAAJ:ufrVoPGSRksC"},{title:"Vibration-based tool wear monitoring using ANN fed by spectral centroid indicator and RMS of CEEMDAN modes",journal:"Int. J. of Advanced Manufacturing Technology 115 (9)",year:"2021",authors:"M Nouioua, ML Bouhalais",citations:"32",link:"https://scholar.google.com/citations?view_op=view_citation&hl=en&user=tEKyL0UAAAAJ&citation_for_view=tEKyL0UAAAAJ:W7OEmFMy1HYC"},{title:"Predictive modeling and multi-response optimization in turning of POM C using RSM and desirability function",journal:"Measurement 95, 99-115",year:"2017",authors:"A Chabbi, MA Yallese, I Meddour, M Nouioua, T Mabrouki, F Girardin",citations:"158",link:"https://scholar.google.com/citations?view_op=view_citation&hl=en&user=tEKyL0UAAAAJ&citation_for_view=tEKyL0UAAAAJ:UeHWp8X0CEIC"},{title:"Investigation of MQL, dry, and wet turning by RSM and ANN",journal:"Int. J. of Advanced Manufacturing Technology 93 (5), 2485-2504",year:"2017",authors:"M Nouioua, MA Yallese, R Khettabi, S Belhadi, ML Bouhalais, F Girardin",citations:"115",link:"https://scholar.google.com/citations?view_op=view_citation&hl=en&user=tEKyL0UAAAAJ&citation_for_view=tEKyL0UAAAAJ:Tyk-4Ss8FVUC"},{title:"Machinability study and ANN-MOALO-based multi-response optimization during Eco-Friendly machining of EN-GJL-250 cast iron",journal:"Int. J. of Advanced Manufacturing Technology 117 (3), 1179-1203",year:"2021",authors:"A Laouissi, M Nouioua, MA Yallese, H Abderazek, H Maouche",citations:"29",link:"https://scholar.google.com/citations?view_op=view_citation&hl=en&user=tEKyL0UAAAAJ&citation_for_view=tEKyL0UAAAAJ:LkGwnXOMwfcC"}];function iC({pub:s,index:e}){const i=K.useRef(null),[r,l]=K.useState(!1);return K.useEffect(()=>{const c=new IntersectionObserver(([f])=>{f.isIntersecting&&(l(!0),c.unobserve(f.target))},{threshold:.1});return i.current&&c.observe(i.current),()=>c.disconnect()},[]),Q.jsxs("a",{ref:i,href:s.link,target:"_blank",rel:"noopener noreferrer",className:"group block",style:{backgroundColor:"#121214",border:"1px solid #222222",borderRadius:8,padding:"1.75rem",cursor:"pointer",textDecoration:"none",opacity:r?1:0,transform:r?"translateY(0)":"translateY(30px)",transition:`opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${e*.08}s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${e*.08}s, border-color 0.4s ease`},onMouseEnter:c=>{c.currentTarget.style.borderColor="#333333",c.currentTarget.style.transform="translateY(-4px)"},onMouseLeave:c=>{c.currentTarget.style.borderColor="#222222",c.currentTarget.style.transform="translateY(0)"},children:[Q.jsxs("div",{className:"flex items-start justify-between gap-3",children:[Q.jsx("h3",{className:"font-body",style:{fontSize:"0.9375rem",color:"#F5F5F0",fontWeight:500,lineHeight:1.5},children:s.title}),Q.jsx(Bs,{size:14,className:"flex-shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300",style:{color:"#C4956A"}})]}),Q.jsx("p",{className:"font-mono mt-2",style:{fontSize:"0.75rem",color:"#5A8A9A"},children:s.journal}),Q.jsxs("div",{className:"flex items-center justify-between mt-3",children:[Q.jsx("p",{className:"font-body",style:{fontSize:"0.75rem",color:"#555555"},children:s.authors}),Q.jsxs("div",{className:"flex items-center gap-3",children:[Q.jsx("span",{className:"font-mono",style:{fontSize:"0.6875rem",color:"#C4956A"},children:s.year}),Q.jsx("span",{className:"font-mono text-xs px-2 py-0.5 rounded-full",style:{fontSize:"0.6875rem",color:s.citations==="New"?"#5A8A9A":"#8A8A8A",backgroundColor:"#1A1A1D",border:"1px solid #222222"},children:s.citations==="New"?"2026":`${s.citations} cites`})]})]})]})}function aC(){const s=K.useRef(null),[e,i]=K.useState(!1);return K.useEffect(()=>{const r=new IntersectionObserver(([l])=>{l.isIntersecting&&(i(!0),r.unobserve(l.target))},{threshold:.15});return s.current&&r.observe(s.current),()=>r.disconnect()},[]),Q.jsx("section",{id:"publications",ref:s,className:"relative",style:{backgroundColor:"#0A0A0B",padding:"8rem 2rem"},children:Q.jsxs("div",{className:"mx-auto relative",style:{maxWidth:1200,zIndex:1},children:[Q.jsxs("div",{style:{opacity:e?1:0,transform:e?"translateY(0)":"translateY(30px)",transition:"opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)"},children:[Q.jsx("span",{className:"font-mono text-xs uppercase",style:{color:"#C4956A",letterSpacing:"0.15em"},children:"Publications"}),Q.jsx("h2",{className:"font-heading mt-4",style:{fontSize:"clamp(2rem, 4vw, 3rem)",color:"#F5F5F0",fontWeight:400,lineHeight:1.1},children:"Selected Papers"})]}),Q.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12",children:nC.map((r,l)=>Q.jsx(iC,{pub:r,index:l},l))}),Q.jsx("div",{className:"text-center mt-10",children:Q.jsxs("a",{href:"https://scholar.google.com/citations?user=tEKyL0UAAAAJ",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 font-body text-sm transition-colors duration-300 hover:text-[#D4AA7D]",style:{color:"#C4956A",textDecoration:"none"},children:["View all publications on Google Scholar",Q.jsx(Bs,{size:14})]})})]})})}const rC=[{label:"Diagnostics & Monitoring",skills:["Vibration Analysis","Condition Monitoring","Tool Wear Prediction","Fault Diagnosis","Acoustic Emission","Signal Processing"]},{label:"AI & Data",skills:["Machine Learning","Ensemble Learning","AutoML","Feature Extraction","Multi-sensor Fusion","Predictive Analytics"]},{label:"Industrial Systems",skills:["IIoT Platforms","Edge Computing","Cloud Monitoring","Smart Data Acquisition","Rotating Machinery"]},{label:"Engineering Tools",skills:["MATLAB","Python","SolidWorks","Minitab","ADRE 408 DSPi","Bently Nevada"]}];function sC({category:s,index:e}){const i=K.useRef(null),[r,l]=K.useState(!1);return K.useEffect(()=>{const c=new IntersectionObserver(([f])=>{f.isIntersecting&&(l(!0),c.unobserve(f.target))},{threshold:.15});return i.current&&c.observe(i.current),()=>c.disconnect()},[]),Q.jsxs("div",{ref:i,style:{opacity:r?1:0,transform:r?"translateY(0)":"translateY(30px)",transition:`opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${e*.1}s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${e*.1}s`},children:[Q.jsx("h3",{className:"font-mono text-xs uppercase mb-4",style:{color:"#555555",letterSpacing:"0.1em"},children:s.label}),Q.jsx("div",{className:"flex flex-wrap gap-2",children:s.skills.map(c=>Q.jsx("span",{className:"font-mono text-sm transition-all duration-300 cursor-default",style:{color:"#8A8A8A",border:"1px solid #222222",borderRadius:9999,padding:"0.4rem 1rem",fontSize:"0.875rem"},onMouseEnter:f=>{f.currentTarget.style.backgroundColor="#1A1A1D",f.currentTarget.style.borderColor="#333333",f.currentTarget.style.color="#F5F5F0"},onMouseLeave:f=>{f.currentTarget.style.backgroundColor="transparent",f.currentTarget.style.borderColor="#222222",f.currentTarget.style.color="#8A8A8A"},children:c},c))})]})}function oC(){const s=K.useRef(null),[e,i]=K.useState(!1);return K.useEffect(()=>{const r=new IntersectionObserver(([l])=>{l.isIntersecting&&(i(!0),r.unobserve(l.target))},{threshold:.15});return s.current&&r.observe(s.current),()=>r.disconnect()},[]),Q.jsxs("section",{id:"skills",ref:s,className:"relative overflow-hidden",style:{backgroundColor:"#121214",padding:"8rem 2rem"},children:[Q.jsx(Oi,{size:2.2,color:"#5A8A9A",opacity:.06,speed:.0025,right:"5%",top:"10%"}),Q.jsx(Oi,{size:1.6,color:"#C4956A",opacity:.05,speed:.0018,left:"3%",top:"60%"}),Q.jsxs("div",{className:"mx-auto relative",style:{maxWidth:1200,zIndex:1},children:[Q.jsxs("div",{style:{opacity:e?1:0,transform:e?"translateY(0)":"translateY(30px)",transition:"opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)"},children:[Q.jsx("span",{className:"font-mono text-xs uppercase",style:{color:"#C4956A",letterSpacing:"0.15em"},children:"Expertise"}),Q.jsx("h2",{className:"font-heading mt-4",style:{fontSize:"clamp(2rem, 4vw, 3rem)",color:"#F5F5F0",fontWeight:400,lineHeight:1.1},children:"Technical Competencies"})]}),Q.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-10 mt-12",children:rC.map((r,l)=>Q.jsx(sC,{category:r,index:l},l))})]})]})}function lC(){const s=K.useRef(null),[e,i]=K.useState(!1);return K.useEffect(()=>{const r=new IntersectionObserver(([l])=>{l.isIntersecting&&(i(!0),r.unobserve(l.target))},{threshold:.15});return s.current&&r.observe(s.current),()=>r.disconnect()},[]),Q.jsxs("section",{id:"contact",ref:s,className:"relative overflow-hidden",style:{backgroundColor:"#0A0A0B",padding:"6rem 2rem 0"},children:[Q.jsx(Oi,{size:2,color:"#C4956A",opacity:.06,speed:.002,right:"5%",top:"20%"}),Q.jsx(Oi,{size:1.5,color:"#5A8A9A",opacity:.05,speed:.003,left:"5%",top:"50%"}),Q.jsx("div",{className:"mx-auto relative",style:{maxWidth:1200,zIndex:1},children:Q.jsxs("div",{className:"flex flex-col md:flex-row gap-12 md:gap-16",style:{opacity:e?1:0,transform:e?"translateY(0)":"translateY(30px)",transition:"opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)"},children:[Q.jsxs("div",{className:"flex-1",children:[Q.jsx("span",{className:"font-mono text-xs uppercase",style:{color:"#C4956A",letterSpacing:"0.15em"},children:"Contact"}),Q.jsx("h2",{className:"font-heading mt-4",style:{fontSize:"clamp(2rem, 4vw, 3rem)",color:"#F5F5F0",fontWeight:400,lineHeight:1.1},children:"Let's Collaborate"}),Q.jsxs("div",{className:"flex flex-col gap-5 mt-8",children:[Q.jsxs("div",{className:"flex items-center gap-3",children:[Q.jsx(wE,{size:18,style:{color:"#C4956A",flexShrink:0}}),Q.jsx("span",{className:"font-mono",style:{color:"#F5F5F0",fontSize:"0.9375rem"},children:"nouioua.mo@gmail.com"})]}),Q.jsxs("div",{className:"flex items-center gap-3",children:[Q.jsx(PE,{size:18,style:{color:"#C4956A",flexShrink:0}}),Q.jsx("span",{className:"font-mono",style:{color:"#F5F5F0",fontSize:"0.9375rem"},children:"+966-542429198"})]}),Q.jsxs("div",{className:"flex items-center gap-3",children:[Q.jsx(UE,{size:18,style:{color:"#C4956A",flexShrink:0}}),Q.jsx("span",{className:"font-mono",style:{color:"#F5F5F0",fontSize:"0.9375rem"},children:"Al-Khobar, Saudi Arabia"})]})]}),Q.jsxs("div",{className:"flex flex-wrap items-center gap-4 mt-8",children:[Q.jsxs("a",{href:"https://www.linkedin.com/in/mourad-nouioua",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 font-body text-sm transition-colors duration-300 hover:text-[#D4AA7D]",style:{color:"#C4956A",textDecoration:"none"},children:["LinkedIn ",Q.jsx(Bs,{size:14})]}),Q.jsxs("a",{href:"https://scholar.google.com/citations?user=tEKyL0UAAAAJ",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 font-body text-sm transition-colors duration-300 hover:text-[#D4AA7D]",style:{color:"#C4956A",textDecoration:"none"},children:["Google Scholar ",Q.jsx(Bs,{size:14})]}),Q.jsxs("a",{href:"https://orcid.org/0000-0003-0439-2112",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 font-body text-sm transition-colors duration-300 hover:text-[#D4AA7D]",style:{color:"#C4956A",textDecoration:"none"},children:["ORCID ",Q.jsx(Bs,{size:14})]}),Q.jsxs("a",{href:"https://pure.kfupm.edu.sa/en/persons/mourad-nouioua/",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 font-body text-sm transition-colors duration-300 hover:text-[#D4AA7D]",style:{color:"#C4956A",textDecoration:"none"},children:["KFUPM Profile ",Q.jsx(Bs,{size:14})]})]})]}),Q.jsx("div",{className:"flex-1 flex items-start",children:Q.jsx("p",{className:"font-body",style:{fontSize:"1rem",color:"#8A8A8A",lineHeight:1.8},children:"Currently based at KFUPM, Al-Khobar. Open to research collaborations in predictive maintenance, smart manufacturing, and industrial AI."})})]})}),Q.jsxs("div",{className:"mx-auto mt-16 pb-8 flex flex-col sm:flex-row items-center justify-between gap-4",style:{maxWidth:1200,borderTop:"1px solid #222222",paddingTop:"2rem"},children:[Q.jsx("span",{className:"font-mono text-xs",style:{color:"#555555"},children:"© 2026 Nouioua Mourad. All rights reserved."}),Q.jsxs("div",{className:"flex items-center gap-4",children:[Q.jsx("a",{href:"https://www.linkedin.com/in/mourad-nouioua",target:"_blank",rel:"noopener noreferrer",className:"font-mono text-xs transition-colors duration-300 hover:text-[#C4956A]",style:{color:"#555555",textDecoration:"none"},children:"LinkedIn"}),Q.jsx("a",{href:"https://scholar.google.com/citations?user=tEKyL0UAAAAJ",target:"_blank",rel:"noopener noreferrer",className:"font-mono text-xs transition-colors duration-300 hover:text-[#C4956A]",style:{color:"#555555",textDecoration:"none"},children:"Scholar"}),Q.jsx("a",{href:"https://orcid.org/0000-0003-0439-2112",target:"_blank",rel:"noopener noreferrer",className:"font-mono text-xs transition-colors duration-300 hover:text-[#C4956A]",style:{color:"#555555",textDecoration:"none"},children:"ORCID"})]})]})]})}function cC(){return Q.jsxs("div",{style:{backgroundColor:"#0A0A0B",minHeight:"100vh"},children:[Q.jsx(zE,{}),Q.jsx(Q2,{}),Q.jsx(J2,{}),Q.jsx($2,{}),Q.jsx(tC,{}),Q.jsx(aC,{}),Q.jsx(oC,{}),Q.jsx(lC,{})]})}function uC(){return Q.jsx(HM,{children:Q.jsx(Hv,{path:"/",element:Q.jsx(cC,{})})})}const fC="/M-Nouioua.github/";Gy.createRoot(document.getElementById("root")).render(Q.jsx(uE,{basename:fC,children:Q.jsx(uC,{})}));
