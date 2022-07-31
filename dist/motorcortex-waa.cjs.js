"use strict";var t=require("@donkeyclip/motorcortex");function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t){return o=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},o(t)}function i(t,e){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},i(t,e)}function a(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function u(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=o(t);if(e){var i=o(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return a(this,n)}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function l(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){u=!0,i=t},f:function(){try{a||null==n.return||n.return()}finally{if(u)throw i}}}}var f="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},s=function(t){return t&&t.Math==Math&&t},p=s("object"==typeof globalThis&&globalThis)||s("object"==typeof window&&window)||s("object"==typeof self&&self)||s("object"==typeof f&&f)||function(){return this}()||Function("return this")(),h={},y=function(t){try{return!!t()}catch(t){return!0}},d=!y((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),v=!y((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")})),b=v,g=Function.prototype.call,m=b?g.bind(g):function(){return g.apply(g,arguments)},w={},x={}.propertyIsEnumerable,O=Object.getOwnPropertyDescriptor,S=O&&!x.call({1:2},1);w.f=S?function(t){var e=O(this,t);return!!e&&e.enumerable}:x;var j,E,P=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},A=v,I=Function.prototype,R=I.bind,T=I.call,C=A&&R.bind(T,T),k=A?function(t){return t&&C(t)}:function(t){return t&&function(){return T.apply(t,arguments)}},M=k,_=M({}.toString),K=M("".slice),F=function(t){return K(_(t),8,-1)},L=k,N=y,Y=F,z=p.Object,D=L("".split),X=N((function(){return!z("z").propertyIsEnumerable(0)}))?function(t){return"String"==Y(t)?D(t,""):z(t)}:z,U=p.TypeError,B=function(t){if(null==t)throw U("Can't call method on "+t);return t},G=X,V=B,W=function(t){return G(V(t))},$=function(t){return"function"==typeof t},q=$,Z=function(t){return"object"==typeof t?null!==t:q(t)},H=p,J=$,Q=function(t){return J(t)?t:void 0},tt=function(t,e){return arguments.length<2?Q(H[t]):H[t]&&H[t][e]},et=k({}.isPrototypeOf),nt=p,rt=tt("navigator","userAgent")||"",ot=nt.process,it=nt.Deno,at=ot&&ot.versions||it&&it.version,ut=at&&at.v8;ut&&(E=(j=ut.split("."))[0]>0&&j[0]<4?1:+(j[0]+j[1])),!E&&rt&&(!(j=rt.match(/Edge\/(\d+)/))||j[1]>=74)&&(j=rt.match(/Chrome\/(\d+)/))&&(E=+j[1]);var ct=E,lt=ct,ft=y,st=!!Object.getOwnPropertySymbols&&!ft((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&lt&&lt<41})),pt=st&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,ht=tt,yt=$,dt=et,vt=pt,bt=p.Object,gt=vt?function(t){return"symbol"==typeof t}:function(t){var e=ht("Symbol");return yt(e)&&dt(e.prototype,bt(t))},mt=p.String,wt=function(t){try{return mt(t)}catch(t){return"Object"}},xt=$,Ot=wt,St=p.TypeError,jt=function(t){if(xt(t))return t;throw St(Ot(t)+" is not a function")},Et=function(t,e){var n=t[e];return null==n?void 0:jt(n)},Pt=m,At=$,It=Z,Rt=p.TypeError,Tt={exports:{}},Ct=p,kt=Object.defineProperty,Mt=function(t,e){try{kt(Ct,t,{value:e,configurable:!0,writable:!0})}catch(n){Ct[t]=e}return e},_t=Mt,Kt=p["__core-js_shared__"]||_t("__core-js_shared__",{}),Ft=Kt;(Tt.exports=function(t,e){return Ft[t]||(Ft[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.21.1",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE",source:"https://github.com/zloirock/core-js"});var Lt=B,Nt=p.Object,Yt=function(t){return Nt(Lt(t))},zt=Yt,Dt=k({}.hasOwnProperty),Xt=Object.hasOwn||function(t,e){return Dt(zt(t),e)},Ut=k,Bt=0,Gt=Math.random(),Vt=Ut(1..toString),Wt=function(t){return"Symbol("+(void 0===t?"":t)+")_"+Vt(++Bt+Gt,36)},$t=p,qt=Tt.exports,Zt=Xt,Ht=Wt,Jt=st,Qt=pt,te=qt("wks"),ee=$t.Symbol,ne=ee&&ee.for,re=Qt?ee:ee&&ee.withoutSetter||Ht,oe=function(t){if(!Zt(te,t)||!Jt&&"string"!=typeof te[t]){var e="Symbol."+t;Jt&&Zt(ee,t)?te[t]=ee[t]:te[t]=Qt&&ne?ne(e):re(e)}return te[t]},ie=m,ae=Z,ue=gt,ce=Et,le=function(t,e){var n,r;if("string"===e&&At(n=t.toString)&&!It(r=Pt(n,t)))return r;if(At(n=t.valueOf)&&!It(r=Pt(n,t)))return r;if("string"!==e&&At(n=t.toString)&&!It(r=Pt(n,t)))return r;throw Rt("Can't convert object to primitive value")},fe=oe,se=p.TypeError,pe=fe("toPrimitive"),he=function(t,e){if(!ae(t)||ue(t))return t;var n,r=ce(t,pe);if(r){if(void 0===e&&(e="default"),n=ie(r,t,e),!ae(n)||ue(n))return n;throw se("Can't convert object to primitive value")}return void 0===e&&(e="number"),le(t,e)},ye=gt,de=function(t){var e=he(t,"string");return ye(e)?e:e+""},ve=Z,be=p.document,ge=ve(be)&&ve(be.createElement),me=function(t){return ge?be.createElement(t):{}},we=me,xe=!d&&!y((function(){return 7!=Object.defineProperty(we("div"),"a",{get:function(){return 7}}).a})),Oe=d,Se=m,je=w,Ee=P,Pe=W,Ae=de,Ie=Xt,Re=xe,Te=Object.getOwnPropertyDescriptor;h.f=Oe?Te:function(t,e){if(t=Pe(t),e=Ae(e),Re)try{return Te(t,e)}catch(t){}if(Ie(t,e))return Ee(!Se(je.f,t,e),t[e])};var Ce={},ke=d&&y((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype})),Me=p,_e=Z,Ke=Me.String,Fe=Me.TypeError,Le=function(t){if(_e(t))return t;throw Fe(Ke(t)+" is not an object")},Ne=d,Ye=xe,ze=ke,De=Le,Xe=de,Ue=p.TypeError,Be=Object.defineProperty,Ge=Object.getOwnPropertyDescriptor;Ce.f=Ne?ze?function(t,e,n){if(De(t),e=Xe(e),De(n),"function"==typeof t&&"prototype"===e&&"value"in n&&"writable"in n&&!n.writable){var r=Ge(t,e);r&&r.writable&&(t[e]=n.value,n={configurable:"configurable"in n?n.configurable:r.configurable,enumerable:"enumerable"in n?n.enumerable:r.enumerable,writable:!1})}return Be(t,e,n)}:Be:function(t,e,n){if(De(t),e=Xe(e),De(n),Ye)try{return Be(t,e,n)}catch(t){}if("get"in n||"set"in n)throw Ue("Accessors not supported");return"value"in n&&(t[e]=n.value),t};var Ve=Ce,We=P,$e=d?function(t,e,n){return Ve.f(t,e,We(1,n))}:function(t,e,n){return t[e]=n,t},qe={exports:{}},Ze=$,He=Kt,Je=k(Function.toString);Ze(He.inspectSource)||(He.inspectSource=function(t){return Je(t)});var Qe,tn,en,nn=He.inspectSource,rn=$,on=nn,an=p.WeakMap,un=rn(an)&&/native code/.test(on(an)),cn=Tt.exports,ln=Wt,fn=cn("keys"),sn=function(t){return fn[t]||(fn[t]=ln(t))},pn={},hn=un,yn=p,dn=k,vn=Z,bn=$e,gn=Xt,mn=Kt,wn=sn,xn=pn,On=yn.TypeError,Sn=yn.WeakMap;if(hn||mn.state){var jn=mn.state||(mn.state=new Sn),En=dn(jn.get),Pn=dn(jn.has),An=dn(jn.set);Qe=function(t,e){if(Pn(jn,t))throw new On("Object already initialized");return e.facade=t,An(jn,t,e),e},tn=function(t){return En(jn,t)||{}},en=function(t){return Pn(jn,t)}}else{var In=wn("state");xn[In]=!0,Qe=function(t,e){if(gn(t,In))throw new On("Object already initialized");return e.facade=t,bn(t,In,e),e},tn=function(t){return gn(t,In)?t[In]:{}},en=function(t){return gn(t,In)}}var Rn={set:Qe,get:tn,has:en,enforce:function(t){return en(t)?tn(t):Qe(t,{})},getterFor:function(t){return function(e){var n;if(!vn(e)||(n=tn(e)).type!==t)throw On("Incompatible receiver, "+t+" required");return n}}},Tn=d,Cn=Xt,kn=Function.prototype,Mn=Tn&&Object.getOwnPropertyDescriptor,_n=Cn(kn,"name"),Kn=_n&&"something"===function(){}.name,Fn=_n&&(!Tn||Tn&&Mn(kn,"name").configurable),Ln=p,Nn=$,Yn=Xt,zn=$e,Dn=Mt,Xn=nn,Un={EXISTS:_n,PROPER:Kn,CONFIGURABLE:Fn}.CONFIGURABLE,Bn=Rn.get,Gn=Rn.enforce,Vn=String(String).split("String");(qe.exports=function(t,e,n,r){var o,i=!!r&&!!r.unsafe,a=!!r&&!!r.enumerable,u=!!r&&!!r.noTargetGet,c=r&&void 0!==r.name?r.name:e;Nn(n)&&("Symbol("===String(c).slice(0,7)&&(c="["+String(c).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!Yn(n,"name")||Un&&n.name!==c)&&zn(n,"name",c),(o=Gn(n)).source||(o.source=Vn.join("string"==typeof c?c:""))),t!==Ln?(i?!u&&t[e]&&(a=!0):delete t[e],a?t[e]=n:zn(t,e,n)):a?t[e]=n:Dn(e,n)})(Function.prototype,"toString",(function(){return Nn(this)&&Bn(this).source||Xn(this)}));var Wn={},$n=Math.ceil,qn=Math.floor,Zn=function(t){var e=+t;return e!=e||0===e?0:(e>0?qn:$n)(e)},Hn=Zn,Jn=Math.max,Qn=Math.min,tr=function(t,e){var n=Hn(t);return n<0?Jn(n+e,0):Qn(n,e)},er=Zn,nr=Math.min,rr=function(t){return t>0?nr(er(t),9007199254740991):0},or=rr,ir=function(t){return or(t.length)},ar=W,ur=tr,cr=ir,lr=function(t){return function(e,n,r){var o,i=ar(e),a=cr(i),u=ur(r,a);if(t&&n!=n){for(;a>u;)if((o=i[u++])!=o)return!0}else for(;a>u;u++)if((t||u in i)&&i[u]===n)return t||u||0;return!t&&-1}},fr={includes:lr(!0),indexOf:lr(!1)},sr=Xt,pr=W,hr=fr.indexOf,yr=pn,dr=k([].push),vr=function(t,e){var n,r=pr(t),o=0,i=[];for(n in r)!sr(yr,n)&&sr(r,n)&&dr(i,n);for(;e.length>o;)sr(r,n=e[o++])&&(~hr(i,n)||dr(i,n));return i},br=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],gr=vr,mr=br.concat("length","prototype");Wn.f=Object.getOwnPropertyNames||function(t){return gr(t,mr)};var wr={};wr.f=Object.getOwnPropertySymbols;var xr=tt,Or=Wn,Sr=wr,jr=Le,Er=k([].concat),Pr=xr("Reflect","ownKeys")||function(t){var e=Or.f(jr(t)),n=Sr.f;return n?Er(e,n(t)):e},Ar=Xt,Ir=Pr,Rr=h,Tr=Ce,Cr=y,kr=$,Mr=/#|\.prototype\./,_r=function(t,e){var n=Fr[Kr(t)];return n==Nr||n!=Lr&&(kr(e)?Cr(e):!!e)},Kr=_r.normalize=function(t){return String(t).replace(Mr,".").toLowerCase()},Fr=_r.data={},Lr=_r.NATIVE="N",Nr=_r.POLYFILL="P",Yr=_r,zr=p,Dr=h.f,Xr=$e,Ur=qe.exports,Br=Mt,Gr=function(t,e,n){for(var r=Ir(e),o=Tr.f,i=Rr.f,a=0;a<r.length;a++){var u=r[a];Ar(t,u)||n&&Ar(n,u)||o(t,u,i(e,u))}},Vr=Yr,Wr=function(t,e){var n,r,o,i,a,u=t.target,c=t.global,l=t.stat;if(n=c?zr:l?zr[u]||Br(u,{}):(zr[u]||{}).prototype)for(r in e){if(i=e[r],o=t.noTargetGet?(a=Dr(n,r))&&a.value:n[r],!Vr(c?r:u+(l?".":"#")+r,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;Gr(i,o)}(t.sham||o&&o.sham)&&Xr(i,"sham",!0),Ur(n,r,i,t)}},$r=F,qr=Array.isArray||function(t){return"Array"==$r(t)},Zr=de,Hr=Ce,Jr=P,Qr=function(t,e,n){var r=Zr(e);r in t?Hr.f(t,r,Jr(0,n)):t[r]=n},to={};to[oe("toStringTag")]="z";var eo=p,no="[object z]"===String(to),ro=$,oo=F,io=oe("toStringTag"),ao=eo.Object,uo="Arguments"==oo(function(){return arguments}()),co=no?oo:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=ao(t),io))?n:uo?oo(e):"Object"==(r=oo(e))&&ro(e.callee)?"Arguments":r},lo=k,fo=y,so=$,po=co,ho=nn,yo=function(){},vo=[],bo=tt("Reflect","construct"),go=/^\s*(?:class|function)\b/,mo=lo(go.exec),wo=!go.exec(yo),xo=function(t){if(!so(t))return!1;try{return bo(yo,vo,t),!0}catch(t){return!1}},Oo=function(t){if(!so(t))return!1;switch(po(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return wo||!!mo(go,ho(t))}catch(t){return!0}};Oo.sham=!0;var So=!bo||fo((function(){var t;return xo(xo.call)||!xo(Object)||!xo((function(){t=!0}))||t}))?Oo:xo,jo=p,Eo=qr,Po=So,Ao=Z,Io=oe("species"),Ro=jo.Array,To=function(t){var e;return Eo(t)&&(e=t.constructor,(Po(e)&&(e===Ro||Eo(e.prototype))||Ao(e)&&null===(e=e[Io]))&&(e=void 0)),void 0===e?Ro:e},Co=y,ko=ct,Mo=oe("species"),_o=Wr,Ko=p,Fo=y,Lo=qr,No=Z,Yo=Yt,zo=ir,Do=Qr,Xo=function(t,e){return new(To(t))(0===e?0:e)},Uo=function(t){return ko>=51||!Co((function(){var e=[];return(e.constructor={})[Mo]=function(){return{foo:1}},1!==e[t](Boolean).foo}))},Bo=ct,Go=oe("isConcatSpreadable"),Vo=Ko.TypeError,Wo=Bo>=51||!Fo((function(){var t=[];return t[Go]=!1,t.concat()[0]!==t})),$o=Uo("concat"),qo=function(t){if(!No(t))return!1;var e=t[Go];return void 0!==e?!!e:Lo(t)};_o({target:"Array",proto:!0,forced:!Wo||!$o},{concat:function(t){var e,n,r,o,i,a=Yo(this),u=Xo(a,0),c=0;for(e=-1,r=arguments.length;e<r;e++)if(qo(i=-1===e?a:arguments[e])){if(c+(o=zo(i))>9007199254740991)throw Vo("Maximum allowed index exceeded");for(n=0;n<o;n++,c++)n in i&&Do(u,c,i[n])}else{if(c>=9007199254740991)throw Vo("Maximum allowed index exceeded");Do(u,c++,i)}return u.length=c,u}});var Zo={transform:["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skewX","skewY","perspective"]},Ho=co,Jo=p.String,Qo=function(t){if("Symbol"===Ho(t))throw TypeError("Cannot convert a Symbol value to a string");return Jo(t)},ti=Le,ei=y,ni=p.RegExp,ri=ei((function(){var t=ni("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),oi=ri||ei((function(){return!ni("a","y").sticky})),ii={BROKEN_CARET:ri||ei((function(){var t=ni("^r","gy");return t.lastIndex=2,null!=t.exec("str")})),MISSED_STICKY:oi,UNSUPPORTED_Y:ri},ai={},ui=vr,ci=br,li=Object.keys||function(t){return ui(t,ci)},fi=d,si=ke,pi=Ce,hi=Le,yi=W,di=li;ai.f=fi&&!si?Object.defineProperties:function(t,e){hi(t);for(var n,r=yi(e),o=di(e),i=o.length,a=0;i>a;)pi.f(t,n=o[a++],r[n]);return t};var vi,bi=tt("document","documentElement"),gi=Le,mi=ai,wi=br,xi=pn,Oi=bi,Si=me,ji=sn("IE_PROTO"),Ei=function(){},Pi=function(t){return"<script>"+t+"<\/script>"},Ai=function(t){t.write(Pi("")),t.close();var e=t.parentWindow.Object;return t=null,e},Ii=function(){try{vi=new ActiveXObject("htmlfile")}catch(t){}var t,e;Ii="undefined"!=typeof document?document.domain&&vi?Ai(vi):((e=Si("iframe")).style.display="none",Oi.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(Pi("document.F=Object")),t.close(),t.F):Ai(vi);for(var n=wi.length;n--;)delete Ii.prototype[wi[n]];return Ii()};xi[ji]=!0;var Ri,Ti,Ci=Object.create||function(t,e){var n;return null!==t?(Ei.prototype=gi(t),n=new Ei,Ei.prototype=null,n[ji]=t):n=Ii(),void 0===e?n:mi.f(n,e)},ki=y,Mi=p.RegExp,_i=ki((function(){var t=Mi(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)})),Ki=y,Fi=p.RegExp,Li=Ki((function(){var t=Fi("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")})),Ni=m,Yi=k,zi=Qo,Di=function(){var t=ti(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e},Xi=ii,Ui=Tt.exports,Bi=Ci,Gi=Rn.get,Vi=_i,Wi=Li,$i=Ui("native-string-replace",String.prototype.replace),qi=RegExp.prototype.exec,Zi=qi,Hi=Yi("".charAt),Ji=Yi("".indexOf),Qi=Yi("".replace),ta=Yi("".slice),ea=(Ti=/b*/g,Ni(qi,Ri=/a/,"a"),Ni(qi,Ti,"a"),0!==Ri.lastIndex||0!==Ti.lastIndex),na=Xi.BROKEN_CARET,ra=void 0!==/()??/.exec("")[1];(ea||ra||na||Vi||Wi)&&(Zi=function(t){var e,n,r,o,i,a,u,c=this,l=Gi(c),f=zi(t),s=l.raw;if(s)return s.lastIndex=c.lastIndex,e=Ni(Zi,s,f),c.lastIndex=s.lastIndex,e;var p=l.groups,h=na&&c.sticky,y=Ni(Di,c),d=c.source,v=0,b=f;if(h&&(y=Qi(y,"y",""),-1===Ji(y,"g")&&(y+="g"),b=ta(f,c.lastIndex),c.lastIndex>0&&(!c.multiline||c.multiline&&"\n"!==Hi(f,c.lastIndex-1))&&(d="(?: "+d+")",b=" "+b,v++),n=new RegExp("^(?:"+d+")",y)),ra&&(n=new RegExp("^"+d+"$(?!\\s)",y)),ea&&(r=c.lastIndex),o=Ni(qi,h?n:c,b),h?o?(o.input=ta(o.input,v),o[0]=ta(o[0],v),o.index=c.lastIndex,c.lastIndex+=o[0].length):c.lastIndex=0:ea&&o&&(c.lastIndex=c.global?o.index+o[0].length:r),ra&&o&&o.length>1&&Ni($i,o[0],n,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(o[i]=void 0)})),o&&p)for(o.groups=a=Bi(null),i=0;i<p.length;i++)a[(u=p[i])[0]]=o[u[1]];return o});var oa=Zi;Wr({target:"RegExp",proto:!0,forced:/./.exec!==oa},{exec:oa});var ia=v,aa=Function.prototype,ua=aa.apply,ca=aa.call,la="object"==typeof Reflect&&Reflect.apply||(ia?ca.bind(ua):function(){return ca.apply(ua,arguments)}),fa=k,sa=qe.exports,pa=oa,ha=y,ya=oe,da=$e,va=ya("species"),ba=RegExp.prototype,ga=Z,ma=F,wa=oe("match"),xa=So,Oa=wt,Sa=p.TypeError,ja=Le,Ea=function(t){if(xa(t))return t;throw Sa(Oa(t)+" is not a constructor")},Pa=oe("species"),Aa=k,Ia=Zn,Ra=Qo,Ta=B,Ca=Aa("".charAt),ka=Aa("".charCodeAt),Ma=Aa("".slice),_a=function(t){return function(e,n){var r,o,i=Ra(Ta(e)),a=Ia(n),u=i.length;return a<0||a>=u?t?"":void 0:(r=ka(i,a))<55296||r>56319||a+1===u||(o=ka(i,a+1))<56320||o>57343?t?Ca(i,a):r:t?Ma(i,a,a+2):o-56320+(r-55296<<10)+65536}},Ka={codeAt:_a(!1),charAt:_a(!0)}.charAt,Fa=tr,La=ir,Na=Qr,Ya=p.Array,za=Math.max,Da=m,Xa=Le,Ua=$,Ba=F,Ga=oa,Va=p.TypeError,Wa=la,$a=m,qa=k,Za=function(t,e,n,r){var o=ya(t),i=!ha((function(){var e={};return e[o]=function(){return 7},7!=""[t](e)})),a=i&&!ha((function(){var e=!1,n=/a/;return"split"===t&&((n={}).constructor={},n.constructor[va]=function(){return n},n.flags="",n[o]=/./[o]),n.exec=function(){return e=!0,null},n[o](""),!e}));if(!i||!a||n){var u=fa(/./[o]),c=e(o,""[t],(function(t,e,n,r,o){var a=fa(t),c=e.exec;return c===pa||c===ba.exec?i&&!o?{done:!0,value:u(e,n,r)}:{done:!0,value:a(n,e,r)}:{done:!1}}));sa(String.prototype,t,c[0]),sa(ba,o,c[1])}r&&da(ba[o],"sham",!0)},Ha=function(t){var e;return ga(t)&&(void 0!==(e=t[wa])?!!e:"RegExp"==ma(t))},Ja=Le,Qa=B,tu=function(t,e){var n,r=ja(t).constructor;return void 0===r||null==(n=ja(r)[Pa])?e:Ea(n)},eu=function(t,e,n){return e+(n?Ka(t,e).length:1)},nu=rr,ru=Qo,ou=Et,iu=function(t,e,n){for(var r=La(t),o=Fa(e,r),i=Fa(void 0===n?r:n,r),a=Ya(za(i-o,0)),u=0;o<i;o++,u++)Na(a,u,t[o]);return a.length=u,a},au=function(t,e){var n=t.exec;if(Ua(n)){var r=Da(n,t,e);return null!==r&&Xa(r),r}if("RegExp"===Ba(t))return Da(Ga,t,e);throw Va("RegExp#exec called on incompatible receiver")},uu=oa,cu=y,lu=ii.UNSUPPORTED_Y,fu=Math.min,su=[].push,pu=qa(/./.exec),hu=qa(su),yu=qa("".slice);Za("split",(function(t,e,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var r=ru(Qa(this)),o=void 0===n?4294967295:n>>>0;if(0===o)return[];if(void 0===t)return[r];if(!Ha(t))return $a(e,r,t,o);for(var i,a,u,c=[],l=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,s=new RegExp(t.source,l+"g");(i=$a(uu,s,r))&&!((a=s.lastIndex)>f&&(hu(c,yu(r,f,i.index)),i.length>1&&i.index<r.length&&Wa(su,c,iu(i,1)),u=i[0].length,f=a,c.length>=o));)s.lastIndex===i.index&&s.lastIndex++;return f===r.length?!u&&pu(s,"")||hu(c,""):hu(c,yu(r,f)),c.length>o?iu(c,0,o):c}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:$a(e,this,t,n)}:e,[function(e,n){var o=Qa(this),i=null==e?void 0:ou(e,t);return i?$a(i,e,o,n):$a(r,ru(o),e,n)},function(t,o){var i=Ja(this),a=ru(t),u=n(r,i,a,o,r!==e);if(u.done)return u.value;var c=tu(i,RegExp),l=i.unicode,f=(i.ignoreCase?"i":"")+(i.multiline?"m":"")+(i.unicode?"u":"")+(lu?"g":"y"),s=new c(lu?"^(?:"+i.source+")":i,f),p=void 0===o?4294967295:o>>>0;if(0===p)return[];if(0===a.length)return null===au(s,a)?[a]:[];for(var h=0,y=0,d=[];y<a.length;){s.lastIndex=lu?0:y;var v,b=au(s,lu?yu(a,y):a);if(null===b||(v=fu(nu(s.lastIndex+(lu?y:0)),a.length))===h)y=eu(a,y,l);else{if(hu(d,yu(a,h,y)),d.length===p)return d;for(var g=1;g<=b.length-1;g++)if(hu(d,b[g]),d.length===p)return d;y=h=v}}return hu(d,yu(a,h)),d}]}),!!cu((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]})),lu);var du=Object.prototype.hasOwnProperty,vu=function(o){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&i(t,e)}(p,t.Effect);var a,c,f,s=u(p);function p(){return e(this,p),s.apply(this,arguments)}return a=p,c=[{key:"getScratchValue",value:function(){if("transform"!==this.attributeKey)return this.context.window.getComputedStyle(this.element)[this.attributeKey];for(var t={},e=Zo[this.attributeKey],n=function(t,e){var n=t.getComputedStyle(e).transform;if(""===n||"none"===n)return{};var r,o,i,a,u,c,l,f,s=n.split("(")[1].split(")")[0].split(",");return r=s,o=Math.atan2(r[1],r[0]),i=Math.pow(r[0],2)+Math.pow(r[1],2),a=Math.pow(r[2],2)+Math.pow(r[3],2),u=Math.sqrt(i),c=(r[0]*r[3]-r[2]*r[1])/u,l=Math.atan2(r[0]*r[2]+r[1]*r[3],i),f=Math.atan2(r[1]*r[3]+r[0]*r[2],a),{rotate:o/(Math.PI/180)+"deg",scaleX:u,scaleY:c,skewX:(1===i?l/(Math.PI/180):0)+"deg",skewY:(1===a?f/(Math.PI/180):0)+"deg",translateX:r[4]+"px",translateY:r[5]+"px"}}(this.context.window,this.element),r=0;r<e.length;r++)t[e[r]]=du.call(n,e[r])?n[e[r]]:this.context.window.getComputedStyle(this.element)[e[r]];return t}},{key:"onGetContext",value:function(){var t,e,n,r,o;if(this.initialized=!1,this.options={},du.call(Zo,this.attributeKey)){var i,a=l(Zo[this.attributeKey]);try{for(a.s();!(i=a.n()).done;){var u,c,f,s,p,h,y=i.value;du.call(this.targetValue,y)&&(null!==(c=(u=this.options).transform)&&void 0!==c||(u.transform=[]),null!==(s=(f=this.options.transform)[0])&&void 0!==s||(f[0]=""),null!==(h=(p=this.options.transform)[1])&&void 0!==h||(p[1]=""),this.options.transform[0]+=" ".concat([y],"(").concat(this.initialValue[y]||0,")"),this.options.transform[1]+=" ".concat([y],"(").concat(this.targetValue[y],")"))}}catch(t){a.e(t)}finally{a.f()}}else this.options[this.attributeKey]=[this.initialValue,this.targetValue];null!==(e=(t=this.context).CSSAnimationLayer)&&void 0!==e||(t.CSSAnimationLayer={}),null!==(o=(n=this.context.CSSAnimationLayer)[r=this.element.dataset.motorcortex2Id])&&void 0!==o||(n[r]={})}},{key:"createAnimation",value:function(){this.creating=!0,this.animation&&(this.animation.startTime=this.context.window.document.timeline.currentTime-this.animation.currentTime*this.animation.playbackRate),this.animation=this.element.animate([r({},this.attributeKey,this.options[this.attributeKey][0]),r({},this.attributeKey,this.options[this.attributeKey][1])],{duration:this.props.duration,fill:"forwards",easing:"linear"}),this.animation.pause(),this.context.CSSAnimationLayer[this.element.dataset.motorcortex2Id][this.attributeKey]={start:this.options[this.attributeKey][0],end:this.options[this.attributeKey][1]},this.creating=!1}},{key:"checkAnimation",value:function(){var t=this.context.CSSAnimationLayer[this.element.dataset.motorcortex2Id][this.attributeKey]||{},e=t.start,n=t.end;e===this.options[this.attributeKey][0]&&n===this.options[this.attributeKey][1]||this.createAnimation()}},{key:"onProgress",value:function(t){this.creating||(this.checkAnimation(),this.animation.currentTime=this.props.duration*t)}}],c&&n(a.prototype,c),f&&n(a,f),Object.defineProperty(a,"prototype",{writable:!1}),p}(),bu={npm_name:"@donkeyclip/motorcortex-waa",version:"1.0.4",incidents:[{exportable:vu,name:"WAA"}]};module.exports=bu;
