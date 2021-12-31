"use strict";function t(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var e,n,r=t(require("@donkeyclip/motorcortex")),o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},i=function(t){try{return!!t()}catch(t){return!0}},a=!i((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),u=Function.prototype,c=u.bind,l=u.call,f=c&&c.bind(l),s=c?function(t){return t&&f(l,t)}:function(t){return t&&function(){return l.apply(t,arguments)}},p=function(t){return t&&t.Math==Math&&t},h=p("object"==typeof globalThis&&globalThis)||p("object"==typeof window&&window)||p("object"==typeof self&&self)||p("object"==typeof o&&o)||function(){return this}()||Function("return this")(),y=h.TypeError,d=function(t){if(null==t)throw y("Can't call method on "+t);return t},v=d,g=h.Object,b=function(t){return g(v(t))},m=b,x=s({}.hasOwnProperty),w=Object.hasOwn||function(t,e){return x(m(t),e)},S=a,O=w,j=Function.prototype,E=S&&Object.getOwnPropertyDescriptor,A=O(j,"name"),I={EXISTS:A,PROPER:A&&"something"===function(){}.name,CONFIGURABLE:A&&(!S||S&&E(j,"name").configurable)},P={},T=function(t){return"function"==typeof t},R=T,C=function(t){return"object"==typeof t?null!==t:R(t)},M=C,k=h.document,_=M(k)&&M(k.createElement),K=function(t){return _?k.createElement(t):{}},F=K,L=!a&&!i((function(){return 7!=Object.defineProperty(F("div"),"a",{get:function(){return 7}}).a})),Y=h,N=C,X=Y.String,D=Y.TypeError,z=function(t){if(N(t))return t;throw D(X(t)+" is not an object")},U=Function.prototype.call,B=U.bind?U.bind(U):function(){return U.apply(U,arguments)},G=h,V=T,W=function(t){return V(t)?t:void 0},$=function(t,e){return arguments.length<2?W(G[t]):G[t]&&G[t][e]},q=s({}.isPrototypeOf),Z=h,H=$("navigator","userAgent")||"",J=Z.process,Q=Z.Deno,tt=J&&J.versions||Q&&Q.version,et=tt&&tt.v8;et&&(n=(e=et.split("."))[0]>0&&e[0]<4?1:+(e[0]+e[1])),!n&&H&&(!(e=H.match(/Edge\/(\d+)/))||e[1]>=74)&&(e=H.match(/Chrome\/(\d+)/))&&(n=+e[1]);var nt=n,rt=nt,ot=i,it=!!Object.getOwnPropertySymbols&&!ot((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&rt&&rt<41})),at=it&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,ut=$,ct=T,lt=q,ft=at,st=h.Object,pt=ft?function(t){return"symbol"==typeof t}:function(t){var e=ut("Symbol");return ct(e)&&lt(e.prototype,st(t))},ht=h.String,yt=function(t){try{return ht(t)}catch(t){return"Object"}},dt=T,vt=yt,gt=h.TypeError,bt=function(t){if(dt(t))return t;throw gt(vt(t)+" is not a function")},mt=function(t,e){var n=t[e];return null==n?void 0:bt(n)},xt=B,wt=T,St=C,Ot=h.TypeError,jt={exports:{}},Et=h,At=Object.defineProperty,It=function(t,e){try{At(Et,t,{value:e,configurable:!0,writable:!0})}catch(n){Et[t]=e}return e},Pt=It,Tt=h["__core-js_shared__"]||Pt("__core-js_shared__",{}),Rt=Tt;(jt.exports=function(t,e){return Rt[t]||(Rt[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.20.1",mode:"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"});var Ct=s,Mt=0,kt=Math.random(),_t=Ct(1..toString),Kt=function(t){return"Symbol("+(void 0===t?"":t)+")_"+_t(++Mt+kt,36)},Ft=h,Lt=jt.exports,Yt=w,Nt=Kt,Xt=it,Dt=at,zt=Lt("wks"),Ut=Ft.Symbol,Bt=Ut&&Ut.for,Gt=Dt?Ut:Ut&&Ut.withoutSetter||Nt,Vt=function(t){if(!Yt(zt,t)||!Xt&&"string"!=typeof zt[t]){var e="Symbol."+t;Xt&&Yt(Ut,t)?zt[t]=Ut[t]:zt[t]=Dt&&Bt?Bt(e):Gt(e)}return zt[t]},Wt=B,$t=C,qt=pt,Zt=mt,Ht=function(t,e){var n,r;if("string"===e&&wt(n=t.toString)&&!St(r=xt(n,t)))return r;if(wt(n=t.valueOf)&&!St(r=xt(n,t)))return r;if("string"!==e&&wt(n=t.toString)&&!St(r=xt(n,t)))return r;throw Ot("Can't convert object to primitive value")},Jt=Vt,Qt=h.TypeError,te=Jt("toPrimitive"),ee=function(t,e){if(!$t(t)||qt(t))return t;var n,r=Zt(t,te);if(r){if(void 0===e&&(e="default"),n=Wt(r,t,e),!$t(n)||qt(n))return n;throw Qt("Can't convert object to primitive value")}return void 0===e&&(e="number"),Ht(t,e)},ne=pt,re=function(t){var e=ee(t,"string");return ne(e)?e:e+""},oe=a,ie=L,ae=z,ue=re,ce=h.TypeError,le=Object.defineProperty;P.f=oe?le:function(t,e,n){if(ae(t),e=ue(e),ae(n),ie)try{return le(t,e,n)}catch(t){}if("get"in n||"set"in n)throw ce("Accessors not supported");return"value"in n&&(t[e]=n.value),t};var fe=a,se=I.EXISTS,pe=s,he=P.f,ye=Function.prototype,de=pe(ye.toString),ve=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,ge=pe(ve.exec);function be(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function me(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function xe(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function we(t){return we=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},we(t)}function Se(t,e){return Se=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},Se(t,e)}function Oe(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function je(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=we(t);if(e){var o=we(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Oe(this,n)}}function Ee(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Ae(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return Ee(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Ee(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){u=!0,i=t},f:function(){try{a||null==n.return||n.return()}finally{if(u)throw i}}}}fe&&!se&&he(ye,"name",{configurable:!0,get:function(){try{return ge(ve,de(this))[1]}catch(t){return""}}});var Ie={},Pe={},Te={}.propertyIsEnumerable,Re=Object.getOwnPropertyDescriptor,Ce=Re&&!Te.call({1:2},1);Pe.f=Ce?function(t){var e=Re(this,t);return!!e&&e.enumerable}:Te;var Me=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},ke=s,_e=ke({}.toString),Ke=ke("".slice),Fe=function(t){return Ke(_e(t),8,-1)},Le=s,Ye=i,Ne=Fe,Xe=h.Object,De=Le("".split),ze=Ye((function(){return!Xe("z").propertyIsEnumerable(0)}))?function(t){return"String"==Ne(t)?De(t,""):Xe(t)}:Xe,Ue=d,Be=function(t){return ze(Ue(t))},Ge=a,Ve=B,We=Pe,$e=Me,qe=Be,Ze=re,He=w,Je=L,Qe=Object.getOwnPropertyDescriptor;Ie.f=Ge?Qe:function(t,e){if(t=qe(t),e=Ze(e),Je)try{return Qe(t,e)}catch(t){}if(He(t,e))return $e(!Ve(We.f,t,e),t[e])};var tn=P,en=Me,nn=a?function(t,e,n){return tn.f(t,e,en(1,n))}:function(t,e,n){return t[e]=n,t},rn={exports:{}},on=T,an=Tt,un=s(Function.toString);on(an.inspectSource)||(an.inspectSource=function(t){return un(t)});var cn,ln,fn,sn=an.inspectSource,pn=T,hn=sn,yn=h.WeakMap,dn=pn(yn)&&/native code/.test(hn(yn)),vn=jt.exports,gn=Kt,bn=vn("keys"),mn=function(t){return bn[t]||(bn[t]=gn(t))},xn={},wn=dn,Sn=h,On=s,jn=C,En=nn,An=w,In=Tt,Pn=mn,Tn=xn,Rn=Sn.TypeError,Cn=Sn.WeakMap;if(wn||In.state){var Mn=In.state||(In.state=new Cn),kn=On(Mn.get),_n=On(Mn.has),Kn=On(Mn.set);cn=function(t,e){if(_n(Mn,t))throw new Rn("Object already initialized");return e.facade=t,Kn(Mn,t,e),e},ln=function(t){return kn(Mn,t)||{}},fn=function(t){return _n(Mn,t)}}else{var Fn=Pn("state");Tn[Fn]=!0,cn=function(t,e){if(An(t,Fn))throw new Rn("Object already initialized");return e.facade=t,En(t,Fn,e),e},ln=function(t){return An(t,Fn)?t[Fn]:{}},fn=function(t){return An(t,Fn)}}var Ln={set:cn,get:ln,has:fn,enforce:function(t){return fn(t)?ln(t):cn(t,{})},getterFor:function(t){return function(e){var n;if(!jn(e)||(n=ln(e)).type!==t)throw Rn("Incompatible receiver, "+t+" required");return n}}},Yn=h,Nn=T,Xn=w,Dn=nn,zn=It,Un=sn,Bn=I.CONFIGURABLE,Gn=Ln.get,Vn=Ln.enforce,Wn=String(String).split("String");(rn.exports=function(t,e,n,r){var o,i=!!r&&!!r.unsafe,a=!!r&&!!r.enumerable,u=!!r&&!!r.noTargetGet,c=r&&void 0!==r.name?r.name:e;Nn(n)&&("Symbol("===String(c).slice(0,7)&&(c="["+String(c).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!Xn(n,"name")||Bn&&n.name!==c)&&Dn(n,"name",c),(o=Vn(n)).source||(o.source=Wn.join("string"==typeof c?c:""))),t!==Yn?(i?!u&&t[e]&&(a=!0):delete t[e],a?t[e]=n:Dn(t,e,n)):a?t[e]=n:zn(e,n)})(Function.prototype,"toString",(function(){return Nn(this)&&Gn(this).source||Un(this)}));var $n={},qn=Math.ceil,Zn=Math.floor,Hn=function(t){var e=+t;return e!=e||0===e?0:(e>0?Zn:qn)(e)},Jn=Hn,Qn=Math.max,tr=Math.min,er=function(t,e){var n=Jn(t);return n<0?Qn(n+e,0):tr(n,e)},nr=Hn,rr=Math.min,or=function(t){return t>0?rr(nr(t),9007199254740991):0},ir=or,ar=function(t){return ir(t.length)},ur=Be,cr=er,lr=ar,fr=function(t){return function(e,n,r){var o,i=ur(e),a=lr(i),u=cr(r,a);if(t&&n!=n){for(;a>u;)if((o=i[u++])!=o)return!0}else for(;a>u;u++)if((t||u in i)&&i[u]===n)return t||u||0;return!t&&-1}},sr={includes:fr(!0),indexOf:fr(!1)},pr=w,hr=Be,yr=sr.indexOf,dr=xn,vr=s([].push),gr=function(t,e){var n,r=hr(t),o=0,i=[];for(n in r)!pr(dr,n)&&pr(r,n)&&vr(i,n);for(;e.length>o;)pr(r,n=e[o++])&&(~yr(i,n)||vr(i,n));return i},br=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],mr=gr,xr=br.concat("length","prototype");$n.f=Object.getOwnPropertyNames||function(t){return mr(t,xr)};var wr={};wr.f=Object.getOwnPropertySymbols;var Sr=$,Or=$n,jr=wr,Er=z,Ar=s([].concat),Ir=Sr("Reflect","ownKeys")||function(t){var e=Or.f(Er(t)),n=jr.f;return n?Ar(e,n(t)):e},Pr=w,Tr=Ir,Rr=Ie,Cr=P,Mr=i,kr=T,_r=/#|\.prototype\./,Kr=function(t,e){var n=Lr[Fr(t)];return n==Nr||n!=Yr&&(kr(e)?Mr(e):!!e)},Fr=Kr.normalize=function(t){return String(t).replace(_r,".").toLowerCase()},Lr=Kr.data={},Yr=Kr.NATIVE="N",Nr=Kr.POLYFILL="P",Xr=Kr,Dr=h,zr=Ie.f,Ur=nn,Br=rn.exports,Gr=It,Vr=function(t,e,n){for(var r=Tr(e),o=Cr.f,i=Rr.f,a=0;a<r.length;a++){var u=r[a];Pr(t,u)||n&&Pr(n,u)||o(t,u,i(e,u))}},Wr=Xr,$r=function(t,e){var n,r,o,i,a,u=t.target,c=t.global,l=t.stat;if(n=c?Dr:l?Dr[u]||Gr(u,{}):(Dr[u]||{}).prototype)for(r in e){if(i=e[r],o=t.noTargetGet?(a=zr(n,r))&&a.value:n[r],!Wr(c?r:u+(l?".":"#")+r,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;Vr(i,o)}(t.sham||o&&o.sham)&&Ur(i,"sham",!0),Br(n,r,i,t)}},qr=Fe,Zr=Array.isArray||function(t){return"Array"==qr(t)},Hr=re,Jr=P,Qr=Me,to=function(t,e,n){var r=Hr(e);r in t?Jr.f(t,r,Qr(0,n)):t[r]=n},eo={};eo[Vt("toStringTag")]="z";var no=h,ro="[object z]"===String(eo),oo=T,io=Fe,ao=Vt("toStringTag"),uo=no.Object,co="Arguments"==io(function(){return arguments}()),lo=ro?io:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=uo(t),ao))?n:co?io(e):"Object"==(r=io(e))&&oo(e.callee)?"Arguments":r},fo=s,so=i,po=T,ho=lo,yo=sn,vo=function(){},go=[],bo=$("Reflect","construct"),mo=/^\s*(?:class|function)\b/,xo=fo(mo.exec),wo=!mo.exec(vo),So=function(t){if(!po(t))return!1;try{return bo(vo,go,t),!0}catch(t){return!1}},Oo=function(t){if(!po(t))return!1;switch(ho(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return wo||!!xo(mo,yo(t))}catch(t){return!0}};Oo.sham=!0;var jo=!bo||so((function(){var t;return So(So.call)||!So(Object)||!So((function(){t=!0}))||t}))?Oo:So,Eo=h,Ao=Zr,Io=jo,Po=C,To=Vt("species"),Ro=Eo.Array,Co=function(t){var e;return Ao(t)&&(e=t.constructor,(Io(e)&&(e===Ro||Ao(e.prototype))||Po(e)&&null===(e=e[To]))&&(e=void 0)),void 0===e?Ro:e},Mo=i,ko=nt,_o=Vt("species"),Ko=$r,Fo=h,Lo=i,Yo=Zr,No=C,Xo=b,Do=ar,zo=to,Uo=function(t,e){return new(Co(t))(0===e?0:e)},Bo=function(t){return ko>=51||!Mo((function(){var e=[];return(e.constructor={})[_o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))},Go=nt,Vo=Vt("isConcatSpreadable"),Wo=Fo.TypeError,$o=Go>=51||!Lo((function(){var t=[];return t[Vo]=!1,t.concat()[0]!==t})),qo=Bo("concat"),Zo=function(t){if(!No(t))return!1;var e=t[Vo];return void 0!==e?!!e:Yo(t)};Ko({target:"Array",proto:!0,forced:!$o||!qo},{concat:function(t){var e,n,r,o,i,a=Xo(this),u=Uo(a,0),c=0;for(e=-1,r=arguments.length;e<r;e++)if(Zo(i=-1===e?a:arguments[e])){if(c+(o=Do(i))>9007199254740991)throw Wo("Maximum allowed index exceeded");for(n=0;n<o;n++,c++)n in i&&zo(u,c,i[n])}else{if(c>=9007199254740991)throw Wo("Maximum allowed index exceeded");zo(u,c++,i)}return u.length=c,u}});var Ho,Jo={transform:["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skewX","skewY","perspective"]},Qo=lo,ti=h.String,ei=function(t){if("Symbol"===Qo(t))throw TypeError("Cannot convert a Symbol value to a string");return ti(t)},ni=z,ri=i,oi=h.RegExp,ii=ri((function(){var t=oi("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),ai=ii||ri((function(){return!oi("a","y").sticky})),ui={BROKEN_CARET:ii||ri((function(){var t=oi("^r","gy");return t.lastIndex=2,null!=t.exec("str")})),MISSED_STICKY:ai,UNSUPPORTED_Y:ii},ci=gr,li=br,fi=Object.keys||function(t){return ci(t,li)},si=P,pi=z,hi=Be,yi=fi,di=a?Object.defineProperties:function(t,e){pi(t);for(var n,r=hi(e),o=yi(e),i=o.length,a=0;i>a;)si.f(t,n=o[a++],r[n]);return t},vi=$("document","documentElement"),gi=z,bi=di,mi=br,xi=xn,wi=vi,Si=K,Oi=mn("IE_PROTO"),ji=function(){},Ei=function(t){return"<script>"+t+"<\/script>"},Ai=function(t){t.write(Ei("")),t.close();var e=t.parentWindow.Object;return t=null,e},Ii=function(){try{Ho=new ActiveXObject("htmlfile")}catch(t){}var t,e;Ii="undefined"!=typeof document?document.domain&&Ho?Ai(Ho):((e=Si("iframe")).style.display="none",wi.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(Ei("document.F=Object")),t.close(),t.F):Ai(Ho);for(var n=mi.length;n--;)delete Ii.prototype[mi[n]];return Ii()};xi[Oi]=!0;var Pi,Ti,Ri=Object.create||function(t,e){var n;return null!==t?(ji.prototype=gi(t),n=new ji,ji.prototype=null,n[Oi]=t):n=Ii(),void 0===e?n:bi(n,e)},Ci=i,Mi=h.RegExp,ki=Ci((function(){var t=Mi(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)})),_i=i,Ki=h.RegExp,Fi=_i((function(){var t=Ki("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")})),Li=B,Yi=s,Ni=ei,Xi=function(){var t=ni(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e},Di=ui,zi=jt.exports,Ui=Ri,Bi=Ln.get,Gi=ki,Vi=Fi,Wi=zi("native-string-replace",String.prototype.replace),$i=RegExp.prototype.exec,qi=$i,Zi=Yi("".charAt),Hi=Yi("".indexOf),Ji=Yi("".replace),Qi=Yi("".slice),ta=(Ti=/b*/g,Li($i,Pi=/a/,"a"),Li($i,Ti,"a"),0!==Pi.lastIndex||0!==Ti.lastIndex),ea=Di.BROKEN_CARET,na=void 0!==/()??/.exec("")[1];(ta||na||ea||Gi||Vi)&&(qi=function(t){var e,n,r,o,i,a,u,c=this,l=Bi(c),f=Ni(t),s=l.raw;if(s)return s.lastIndex=c.lastIndex,e=Li(qi,s,f),c.lastIndex=s.lastIndex,e;var p=l.groups,h=ea&&c.sticky,y=Li(Xi,c),d=c.source,v=0,g=f;if(h&&(y=Ji(y,"y",""),-1===Hi(y,"g")&&(y+="g"),g=Qi(f,c.lastIndex),c.lastIndex>0&&(!c.multiline||c.multiline&&"\n"!==Zi(f,c.lastIndex-1))&&(d="(?: "+d+")",g=" "+g,v++),n=new RegExp("^(?:"+d+")",y)),na&&(n=new RegExp("^"+d+"$(?!\\s)",y)),ta&&(r=c.lastIndex),o=Li($i,h?n:c,g),h?o?(o.input=Qi(o.input,v),o[0]=Qi(o[0],v),o.index=c.lastIndex,c.lastIndex+=o[0].length):c.lastIndex=0:ta&&o&&(c.lastIndex=c.global?o.index+o[0].length:r),na&&o&&o.length>1&&Li(Wi,o[0],n,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(o[i]=void 0)})),o&&p)for(o.groups=a=Ui(null),i=0;i<p.length;i++)a[(u=p[i])[0]]=o[u[1]];return o});var ra=qi;$r({target:"RegExp",proto:!0,forced:/./.exec!==ra},{exec:ra});var oa=Function.prototype,ia=oa.apply,aa=oa.bind,ua=oa.call,ca="object"==typeof Reflect&&Reflect.apply||(aa?ua.bind(ia):function(){return ua.apply(ia,arguments)}),la=s,fa=rn.exports,sa=ra,pa=i,ha=Vt,ya=nn,da=ha("species"),va=RegExp.prototype,ga=C,ba=Fe,ma=Vt("match"),xa=jo,wa=yt,Sa=h.TypeError,Oa=z,ja=function(t){if(xa(t))return t;throw Sa(wa(t)+" is not a constructor")},Ea=Vt("species"),Aa=s,Ia=Hn,Pa=ei,Ta=d,Ra=Aa("".charAt),Ca=Aa("".charCodeAt),Ma=Aa("".slice),ka=function(t){return function(e,n){var r,o,i=Pa(Ta(e)),a=Ia(n),u=i.length;return a<0||a>=u?t?"":void 0:(r=Ca(i,a))<55296||r>56319||a+1===u||(o=Ca(i,a+1))<56320||o>57343?t?Ra(i,a):r:t?Ma(i,a,a+2):o-56320+(r-55296<<10)+65536}},_a={codeAt:ka(!1),charAt:ka(!0)}.charAt,Ka=er,Fa=ar,La=to,Ya=h.Array,Na=Math.max,Xa=B,Da=z,za=T,Ua=Fe,Ba=ra,Ga=h.TypeError,Va=ca,Wa=B,$a=s,qa=function(t,e,n,r){var o=ha(t),i=!pa((function(){var e={};return e[o]=function(){return 7},7!=""[t](e)})),a=i&&!pa((function(){var e=!1,n=/a/;return"split"===t&&((n={}).constructor={},n.constructor[da]=function(){return n},n.flags="",n[o]=/./[o]),n.exec=function(){return e=!0,null},n[o](""),!e}));if(!i||!a||n){var u=la(/./[o]),c=e(o,""[t],(function(t,e,n,r,o){var a=la(t),c=e.exec;return c===sa||c===va.exec?i&&!o?{done:!0,value:u(e,n,r)}:{done:!0,value:a(n,e,r)}:{done:!1}}));fa(String.prototype,t,c[0]),fa(va,o,c[1])}r&&ya(va[o],"sham",!0)},Za=function(t){var e;return ga(t)&&(void 0!==(e=t[ma])?!!e:"RegExp"==ba(t))},Ha=z,Ja=d,Qa=function(t,e){var n,r=Oa(t).constructor;return void 0===r||null==(n=Oa(r)[Ea])?e:ja(n)},tu=function(t,e,n){return e+(n?_a(t,e).length:1)},eu=or,nu=ei,ru=mt,ou=function(t,e,n){for(var r=Fa(t),o=Ka(e,r),i=Ka(void 0===n?r:n,r),a=Ya(Na(i-o,0)),u=0;o<i;o++,u++)La(a,u,t[o]);return a.length=u,a},iu=function(t,e){var n=t.exec;if(za(n)){var r=Xa(n,t,e);return null!==r&&Da(r),r}if("RegExp"===Ua(t))return Xa(Ba,t,e);throw Ga("RegExp#exec called on incompatible receiver")},au=ra,uu=i,cu=ui.UNSUPPORTED_Y,lu=Math.min,fu=[].push,su=$a(/./.exec),pu=$a(fu),hu=$a("".slice);qa("split",(function(t,e,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var r=nu(Ja(this)),o=void 0===n?4294967295:n>>>0;if(0===o)return[];if(void 0===t)return[r];if(!Za(t))return Wa(e,r,t,o);for(var i,a,u,c=[],l=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,s=new RegExp(t.source,l+"g");(i=Wa(au,s,r))&&!((a=s.lastIndex)>f&&(pu(c,hu(r,f,i.index)),i.length>1&&i.index<r.length&&Va(fu,c,ou(i,1)),u=i[0].length,f=a,c.length>=o));)s.lastIndex===i.index&&s.lastIndex++;return f===r.length?!u&&su(s,"")||pu(c,""):pu(c,hu(r,f)),c.length>o?ou(c,0,o):c}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:Wa(e,this,t,n)}:e,[function(e,n){var o=Ja(this),i=null==e?void 0:ru(e,t);return i?Wa(i,e,o,n):Wa(r,nu(o),e,n)},function(t,o){var i=Ha(this),a=nu(t),u=n(r,i,a,o,r!==e);if(u.done)return u.value;var c=Qa(i,RegExp),l=i.unicode,f=(i.ignoreCase?"i":"")+(i.multiline?"m":"")+(i.unicode?"u":"")+(cu?"g":"y"),s=new c(cu?"^(?:"+i.source+")":i,f),p=void 0===o?4294967295:o>>>0;if(0===p)return[];if(0===a.length)return null===iu(s,a)?[a]:[];for(var h=0,y=0,d=[];y<a.length;){s.lastIndex=cu?0:y;var v,g=iu(s,cu?hu(a,y):a);if(null===g||(v=lu(eu(s.lastIndex+(cu?y:0)),a.length))===h)y=tu(a,y,l);else{if(pu(d,hu(a,h,y)),d.length===p)return d;for(var b=1;b<=g.length-1;b++)if(pu(d,g[b]),d.length===p)return d;y=h=v}}return pu(d,hu(a,h)),d}]}),!!uu((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]})),cu);var yu=Object.prototype.hasOwnProperty,du=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Se(t,e)}(a,r["default"].Effect);var e,n,o,i=je(a);function a(){return be(this,a),i.apply(this,arguments)}return e=a,n=[{key:"getScratchValue",value:function(){if("transform"!==this.attributeKey)return this.context.window.getComputedStyle(this.element)[this.attributeKey];for(var t={},e=Jo[this.attributeKey],n=function(t,e){var n=t.getComputedStyle(e).transform;if(""===n||"none"===n)return{};var r,o,i,a,u,c,l,f,s=n.split("(")[1].split(")")[0].split(",");return r=s,o=Math.atan2(r[1],r[0]),i=Math.pow(r[0],2)+Math.pow(r[1],2),a=Math.pow(r[2],2)+Math.pow(r[3],2),u=Math.sqrt(i),c=(r[0]*r[3]-r[2]*r[1])/u,l=Math.atan2(r[0]*r[2]+r[1]*r[3],i),f=Math.atan2(r[1]*r[3]+r[0]*r[2],a),{rotate:o/(Math.PI/180)+"deg",scaleX:u,scaleY:c,skewX:(1===i?l/(Math.PI/180):0)+"deg",skewY:(1===a?f/(Math.PI/180):0)+"deg",translateX:r[4]+"px",translateY:r[5]+"px"}}(this.context.window,this.element),r=0;r<e.length;r++)t[e[r]]=yu.call(n,e[r])?n[e[r]]:this.context.window.getComputedStyle(this.element)[e[r]];return t}},{key:"onGetContext",value:function(){var t,e,n,r,o;if(this.initialized=!1,this.options={},yu.call(Jo,this.attributeKey)){var i,a=Ae(Jo[this.attributeKey]);try{for(a.s();!(i=a.n()).done;){var u,c,l,f,s,p,h=i.value;yu.call(this.targetValue,h)&&(null!==(c=(u=this.options).transform)&&void 0!==c||(u.transform=[]),null!==(f=(l=this.options.transform)[0])&&void 0!==f||(l[0]=""),null!==(p=(s=this.options.transform)[1])&&void 0!==p||(s[1]=""),this.options.transform[0]+=" ".concat([h],"(").concat(this.initialValue[h]||0,")"),this.options.transform[1]+=" ".concat([h],"(").concat(this.targetValue[h],")"))}}catch(t){a.e(t)}finally{a.f()}}else this.options[this.attributeKey]=[this.initialValue,this.targetValue];null!==(e=(t=this.context).CSSAnimationLayer)&&void 0!==e||(t.CSSAnimationLayer={}),null!==(o=(n=this.context.CSSAnimationLayer)[r=this.element.dataset.motorcortex2Id])&&void 0!==o||(n[r]={})}},{key:"createAnimation",value:function(){this.creating=!0,this.animation&&(this.animation.startTime=this.context.window.document.timeline.currentTime-this.animation.currentTime*this.animation.playbackRate),this.animation=this.element.animate([xe({},this.attributeKey,this.options[this.attributeKey][0]),xe({},this.attributeKey,this.options[this.attributeKey][1])],{duration:this.props.duration,fill:"forwards",easing:"linear"}),this.animation.pause(),this.context.CSSAnimationLayer[this.element.dataset.motorcortex2Id][this.attributeKey]={start:this.options[this.attributeKey][0],end:this.options[this.attributeKey][1]},this.creating=!1}},{key:"checkAnimation",value:function(){var t=this.context.CSSAnimationLayer[this.element.dataset.motorcortex2Id][this.attributeKey]||{},e=t.start,n=t.end;e===this.options[this.attributeKey][0]&&n===this.options[this.attributeKey][1]||this.createAnimation()}},{key:"onProgress",value:function(t){this.creating||(this.checkAnimation(),this.animation.currentTime=this.props.duration*t)}}],n&&me(e.prototype,n),o&&me(e,o),Object.defineProperty(e,"prototype",{writable:!1}),a}(),vu={npm_name:"@donkeyclip/motorcortex-waa",version:"1.0.3",incidents:[{exportable:du,name:"WAA"}]};module.exports=vu;
