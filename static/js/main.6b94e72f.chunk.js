/*! For license information please see main.6b94e72f.chunk.js.LICENSE.txt */
(this["webpackJsonpreact-flashcard-example"]=this["webpackJsonpreact-flashcard-example"]||[]).push([[0],{12:function(e,t,n){"use strict";n.r(t);n(4);var r=n(0),o=n.n(r),i=n(1),a=n.n(i),c=n(2),l=[{front:{text:"living outside, often in a tent",image:"https://o.quizlet.com/RWRdgDus.uuqNDUrJ0ernA.jpg"},back:{text:"Camping"}},{front:{text:"the cultivation of plants"},back:{text:"Gardening"}},{front:{text:"make 'kite' then show it floating around",image:"https://o.quizlet.com/DNSK53oa86VTpPMo18ov4A.jpg"},back:{text:"Flying a kite"}}],f=function(){return o.a.createElement(c.a,{dataSource:l,flipDirection:"vertical",onChange:function(e,t){return console.log(e,t)},onSound:function(e){return console.log(e)},onFinish:function(){return console.log("Finish!")}})};a.a.render(o.a.createElement(f,null),document.getElementById("root"))},2:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return W}));var r=n(0),o=n.n(r);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var a="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof e?e:"undefined"!==typeof self?self:{};function c(e,t){return e(t={exports:{}},t.exports),t.exports}var l="function"===typeof Symbol&&Symbol.for,f=l?Symbol.for("react.element"):60103,s=l?Symbol.for("react.portal"):60106,u=l?Symbol.for("react.fragment"):60107,d=l?Symbol.for("react.strict_mode"):60108,p=l?Symbol.for("react.profiler"):60114,m=l?Symbol.for("react.provider"):60109,y=l?Symbol.for("react.context"):60110,h=l?Symbol.for("react.async_mode"):60111,g=l?Symbol.for("react.concurrent_mode"):60111,b=l?Symbol.for("react.forward_ref"):60112,v=l?Symbol.for("react.suspense"):60113,S=l?Symbol.for("react.suspense_list"):60120,w=l?Symbol.for("react.memo"):60115,k=l?Symbol.for("react.lazy"):60116,x=l?Symbol.for("react.block"):60121,O=l?Symbol.for("react.fundamental"):60117,C=l?Symbol.for("react.responder"):60118,E=l?Symbol.for("react.scope"):60119;function j(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case f:switch(e=e.type){case h:case g:case u:case p:case d:case v:return e;default:switch(e=e&&e.$$typeof){case y:case b:case k:case w:case m:return e;default:return t}}case s:return t}}}function _(e){return j(e)===g}var P={AsyncMode:h,ConcurrentMode:g,ContextConsumer:y,ContextProvider:m,Element:f,ForwardRef:b,Fragment:u,Lazy:k,Memo:w,Portal:s,Profiler:p,StrictMode:d,Suspense:v,isAsyncMode:function(e){return _(e)||j(e)===h},isConcurrentMode:_,isContextConsumer:function(e){return j(e)===y},isContextProvider:function(e){return j(e)===m},isElement:function(e){return"object"===typeof e&&null!==e&&e.$$typeof===f},isForwardRef:function(e){return j(e)===b},isFragment:function(e){return j(e)===u},isLazy:function(e){return j(e)===k},isMemo:function(e){return j(e)===w},isPortal:function(e){return j(e)===s},isProfiler:function(e){return j(e)===p},isStrictMode:function(e){return j(e)===d},isSuspense:function(e){return j(e)===v},isValidElementType:function(e){return"string"===typeof e||"function"===typeof e||e===u||e===g||e===p||e===d||e===v||e===S||"object"===typeof e&&null!==e&&(e.$$typeof===k||e.$$typeof===w||e.$$typeof===m||e.$$typeof===y||e.$$typeof===b||e.$$typeof===O||e.$$typeof===C||e.$$typeof===E||e.$$typeof===x)},typeOf:j},F=(c((function(e,t){0})),c((function(e){e.exports=P})),Object.getOwnPropertySymbols),$=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;function B(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}})()&&Object.assign;var z="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function R(e,t,n,r,o){}R.resetWarningCache=function(){0};Function.call.bind(Object.prototype.hasOwnProperty);function D(){}function I(){}I.resetWarningCache=D;var M=c((function(e){e.exports=function(){function e(e,t,n,r,o,i){if(i!==z){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:I,resetWarningCache:D};return n.PropTypes=n,n}()})),N=function(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}(c((function(e,t){var n=a&&a.__assign||function(){return(n=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},r=a&&a.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=a&&a.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),c=a&&a.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&r(t,e,n);return i(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});var l=c(o.a),f=o.a,s=function(e){var t=e.cardStyles,r=t.back,o=t.front,i=e.cardZIndex,a=e.containerStyle,c=e.flipDirection,s=e.flipSpeedFrontToBack,u=e.flipSpeedBackToFront,d=e.infinite,p=f.useState(e.isFlipped),m=p[0],y=p[1],h=f.useState(0),g=h[0],b=h[1];f.useEffect((function(){e.isFlipped!==m&&(y(e.isFlipped),b((function(e){return e+180})))}),[e.isFlipped]);var v=function(t){if(2!==e.children.length)throw new Error("Component ReactCardFlip requires 2 children to function");return e.children[t]},S="rotateY("+(d?g:m?180:0)+"deg)",w="rotateX("+(d?g:m?180:0)+"deg)",k={back:n({WebkitBackfaceVisibility:"hidden",backfaceVisibility:"hidden",height:"100%",left:"0",position:m?"relative":"absolute",top:"0",transform:"horizontal"===c?"rotateY("+(d?g+180:m?0:-180)+"deg)":"rotateX("+(d?g+180:m?0:-180)+"deg)",transformStyle:"preserve-3d",transition:s+"s",width:"100%"},r),container:{perspective:"1000px",zIndex:""+i},flipper:{height:"100%",position:"relative",width:"100%"},front:n({WebkitBackfaceVisibility:"hidden",backfaceVisibility:"hidden",height:"100%",left:"0",position:m?"absolute":"relative",top:"0",transform:"horizontal"===c?S:w,transformStyle:"preserve-3d",transition:u+"s",width:"100%",zIndex:"2"},o)};return l.createElement("div",{className:"react-card-flip",style:n(n({},k.container),a)},l.createElement("div",{className:"react-card-flipper",style:k.flipper},l.createElement("div",{className:"react-card-front",style:k.front},v(0)),l.createElement("div",{className:"react-card-back",style:k.back},v(1))))};s.defaultProps={cardStyles:{back:{},front:{}},cardZIndex:"auto",containerStyle:{},flipDirection:"horizontal",flipSpeedBackToFront:.6,flipSpeedFrontToBack:.6,infinite:!1,isFlipped:!1},t.default=s}))),W=function(e){var t,n,a,c,l,f,s,u,d,p,m,y,h=e.dataSource,g=void 0===h?[]:h,b=e.flipDirection,v=e.onSound,S=e.onChange,w=e.onFinish,k=Object(r.useState)(1),x=k[0],O=k[1],C=Object(r.useState)("front"),E=C[0],j=C[1],_=Object(r.useState)(!1),P=_[0],F=_[1];return o.a.createElement("div",{style:q.container},P?o.a.createElement("div",{style:q.finishContainer},o.a.createElement("h2",{style:{marginTop:0,marginBottom:10}},"Nice work!"),o.a.createElement("p",{style:{margin:0}},"You just studied ",g.length," term!"),o.a.createElement("button",{style:q.startOverButton,onClick:function(){O(1),j("front"),F(!1)}},"Start over"),o.a.createElement("button",{style:q.startOverButton,onClick:w},"Finish")):o.a.createElement("div",null,o.a.createElement("div",{style:q.progress},o.a.createElement("div",{style:q.bar},o.a.createElement("span",{style:i({},q.complete,{width:x/g.length*100+"%"})})),o.a.createElement("div",{style:q.number},x+"/"+(null===g||void 0===g?void 0:g.length))),o.a.createElement("div",{style:q.card},o.a.createElement("img",{style:q.soundButton,src:"https://www.flaticon.com/svg/static/icons/svg/786/786272.svg",onClick:function(){var e=g[x-1][E].text,t=new SpeechSynthesisUtterance(e);window.speechSynthesis.speak(t),v(e)}}),o.a.createElement("div",{onClick:function(){var e="front"===E?"back":"front";j(e),S(x,e)},style:{height:"100%"}},o.a.createElement(N,{containerStyle:{height:"100%"},isFlipped:"back"===E,flipDirection:b},o.a.createElement("div",{style:q.cardContent},(null===(t=g[x-1])||void 0===t||null===(n=t.front)||void 0===n?void 0:n.image)&&o.a.createElement("img",{width:"40%",height:"40%",src:null===(a=g[x-1])||void 0===a||null===(c=a.front)||void 0===c?void 0:c.image}),o.a.createElement("p",null,null===(l=g[x-1])||void 0===l||null===(f=l.front)||void 0===f?void 0:f.text)),o.a.createElement("div",{style:q.cardContent},(null===(s=g[x-1])||void 0===s||null===(u=s.back)||void 0===u?void 0:u.image)&&o.a.createElement("img",{width:"40%",height:"40%",src:null===(d=g[x-1])||void 0===d||null===(p=d.back)||void 0===p?void 0:p.image}),o.a.createElement("p",null,null===(m=g[x-1])||void 0===m||null===(y=m.back)||void 0===y?void 0:y.text))))),o.a.createElement("div",{style:q.navigation},o.a.createElement("div",{style:q.prevButton,onClick:function(){var e=x>1?x-1:1;j("front"),O(e),S(e,"front")}},o.a.createElement("img",{width:"100%",height:"100%",src:"https://www.flaticon.com/svg/static/icons/svg/318/318276.svg"})),o.a.createElement("div",{style:q.nextButton,onClick:function(){var e=g.length;F(x+1>e);var t=x<e?x+1:e;j("front"),O(t),S(t,"front")}},o.a.createElement("img",{width:"100%",height:"100%",src:"https://www.flaticon.com/svg/static/icons/svg/467/467152.svg"})))))};W.propTypes={dataSource:M.array.isRequired,flipDirection:M.string,onChange:M.func,onSound:M.func,onFinish:M.func},W.defaultProps={flipDirection:"horizontal",onChange:function(e,t){},onSound:function(e){},onFinish:function(){}};var q={container:{backgroundColor:"#f6f7fb"},progress:{backgroundColor:"#ffffff",height:45,display:"flex",justifyContent:"space-between",alignItems:"center",paddingLeft:16,paddingRight:16},bar:{display:"flex",flex:3,backgroundColor:"#c5cfe8",height:"0.75rem",position:"relative"},complete:{backgroundColor:"#4257b2",bottom:0,display:"block",height:"0.75rem",left:0,maxWidth:"100%",position:"absolute",top:0,transition:"all .12s cubic-bezier(.47,0,.745,.715)"},number:{display:"flex",flex:1,justifyContent:"flex-end",fontSize:"0.625rem",letterSpacing:"0.0625rem",fontWeight:600},card:{height:400,padding:16,position:"relative"},cardContent:{backgroundColor:"#ffffff",width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center",fontSize:"1.5rem"},soundButton:{position:"absolute",zIndex:999,width:25,height:25,right:26,top:26,cursor:"pointer"},navigation:{display:"flex",justifyContent:"space-between",paddingBottom:16},prevButton:{width:30,height:30,marginLeft:16,backgroundColor:"#ffffff",borderRadius:"50%"},nextButton:{width:30,height:30,marginRight:16,backgroundColor:"#ffffff",borderRadius:"50%"},finishContainer:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",minHeight:"300px"},startOverButton:{backgroundColor:"#4257b2",width:"60%",height:"50px",border:"none",borderRadius:"5px",color:"#ffffff",fontWeight:"bold",fontSize:"16px",marginTop:30}}}).call(this,n(11))},3:function(e,t,n){e.exports=n(12)},4:function(e,t,n){}},[[3,1,2]]]);
//# sourceMappingURL=main.6b94e72f.chunk.js.map