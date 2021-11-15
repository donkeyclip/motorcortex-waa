import t from"@donkeyclip/motorcortex";var e,n,r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},o=function(t){try{return!!t()}catch(t){return!0}},i=!o((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),a=Function.prototype,u=a.bind,c=a.call,s=u&&u.bind(c),l=u?function(t){return t&&s(c,t)}:function(t){return t&&function(){return c.apply(t,arguments)}},f=function(t){return t&&t.Math==Math&&t},p=f("object"==typeof globalThis&&globalThis)||f("object"==typeof window&&window)||f("object"==typeof self&&self)||f("object"==typeof r&&r)||function(){return this}()||Function("return this")(),h=p.TypeError,y=function(t){if(null==t)throw h("Can't call method on "+t);return t},d=y,v=p.Object,g=function(t){return v(d(t))},b=g,m=l({}.hasOwnProperty),x=Object.hasOwn||function(t,e){return m(b(t),e)},w=i,S=x,O=Function.prototype,j=w&&Object.getOwnPropertyDescriptor,E=S(O,"name"),A={EXISTS:E,PROPER:E&&"something"===function(){}.name,CONFIGURABLE:E&&(!w||w&&j(O,"name").configurable)},I={},P=function(t){return"function"==typeof t},R=P,T=function(t){return"object"==typeof t?null!==t:R(t)},C=T,k=p.document,_=C(k)&&C(k.createElement),M=function(t){return _?k.createElement(t):{}},K=M,F=!i&&!o((function(){return 7!=Object.defineProperty(K("div"),"a",{get:function(){return 7}}).a})),L=p,N=T,Y=L.String,U=L.TypeError,X=function(t){if(N(t))return t;throw U(Y(t)+" is not an object")},D=Function.prototype.call,z=D.bind?D.bind(D):function(){return D.apply(D,arguments)},B=p,G=P,V=function(t){return G(t)?t:void 0},W=function(t,e){return arguments.length<2?V(B[t]):B[t]&&B[t][e]},$=l({}.isPrototypeOf),q=p,Z=W("navigator","userAgent")||"",H=q.process,J=q.Deno,Q=H&&H.versions||J&&J.version,tt=Q&&Q.v8;tt&&(n=(e=tt.split("."))[0]>0&&e[0]<4?1:+(e[0]+e[1])),!n&&Z&&(!(e=Z.match(/Edge\/(\d+)/))||e[1]>=74)&&(e=Z.match(/Chrome\/(\d+)/))&&(n=+e[1]);var et=n,nt=et,rt=o,ot=!!Object.getOwnPropertySymbols&&!rt((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&nt&&nt<41})),it=ot&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,at=W,ut=P,ct=$,st=it,lt=p.Object,ft=st?function(t){return"symbol"==typeof t}:function(t){var e=at("Symbol");return ut(e)&&ct(e.prototype,lt(t))},pt=p.String,ht=function(t){try{return pt(t)}catch(t){return"Object"}},yt=P,dt=ht,vt=p.TypeError,gt=function(t){if(yt(t))return t;throw vt(dt(t)+" is not a function")},bt=function(t,e){var n=t[e];return null==n?void 0:gt(n)},mt=z,xt=P,wt=T,St=p.TypeError,Ot={exports:{}},jt=p,Et=Object.defineProperty,At=function(t,e){try{Et(jt,t,{value:e,configurable:!0,writable:!0})}catch(n){jt[t]=e}return e},It=At,Pt=p["__core-js_shared__"]||It("__core-js_shared__",{}),Rt=Pt;(Ot.exports=function(t,e){return Rt[t]||(Rt[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.19.1",mode:"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"});var Tt=l,Ct=0,kt=Math.random(),_t=Tt(1..toString),Mt=function(t){return"Symbol("+(void 0===t?"":t)+")_"+_t(++Ct+kt,36)},Kt=p,Ft=Ot.exports,Lt=x,Nt=Mt,Yt=ot,Ut=it,Xt=Ft("wks"),Dt=Kt.Symbol,zt=Dt&&Dt.for,Bt=Ut?Dt:Dt&&Dt.withoutSetter||Nt,Gt=function(t){if(!Lt(Xt,t)||!Yt&&"string"!=typeof Xt[t]){var e="Symbol."+t;Yt&&Lt(Dt,t)?Xt[t]=Dt[t]:Xt[t]=Ut&&zt?zt(e):Bt(e)}return Xt[t]},Vt=z,Wt=T,$t=ft,qt=bt,Zt=function(t,e){var n,r;if("string"===e&&xt(n=t.toString)&&!wt(r=mt(n,t)))return r;if(xt(n=t.valueOf)&&!wt(r=mt(n,t)))return r;if("string"!==e&&xt(n=t.toString)&&!wt(r=mt(n,t)))return r;throw St("Can't convert object to primitive value")},Ht=Gt,Jt=p.TypeError,Qt=Ht("toPrimitive"),te=function(t,e){if(!Wt(t)||$t(t))return t;var n,r=qt(t,Qt);if(r){if(void 0===e&&(e="default"),n=Vt(r,t,e),!Wt(n)||$t(n))return n;throw Jt("Can't convert object to primitive value")}return void 0===e&&(e="number"),Zt(t,e)},ee=ft,ne=function(t){var e=te(t,"string");return ee(e)?e:e+""},re=i,oe=F,ie=X,ae=ne,ue=p.TypeError,ce=Object.defineProperty;I.f=re?ce:function(t,e,n){if(ie(t),e=ae(e),ie(n),oe)try{return ce(t,e,n)}catch(t){}if("get"in n||"set"in n)throw ue("Accessors not supported");return"value"in n&&(t[e]=n.value),t};var se=i,le=A.EXISTS,fe=l,pe=I.f,he=Function.prototype,ye=fe(he.toString),de=/^\s*function ([^ (]*)/,ve=fe(de.exec);function ge(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function be(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function me(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function xe(t){return(xe=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function we(t,e){return(we=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function Se(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function Oe(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=xe(t);if(e){var o=xe(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Se(this,n)}}function je(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Ee(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return je(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?je(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){u=!0,i=t},f:function(){try{a||null==n.return||n.return()}finally{if(u)throw i}}}}se&&!le&&pe(he,"name",{configurable:!0,get:function(){try{return ve(de,ye(this))[1]}catch(t){return""}}});var Ae={},Ie={},Pe={}.propertyIsEnumerable,Re=Object.getOwnPropertyDescriptor,Te=Re&&!Pe.call({1:2},1);Ie.f=Te?function(t){var e=Re(this,t);return!!e&&e.enumerable}:Pe;var Ce=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},ke=l,_e=ke({}.toString),Me=ke("".slice),Ke=function(t){return Me(_e(t),8,-1)},Fe=l,Le=o,Ne=Ke,Ye=p.Object,Ue=Fe("".split),Xe=Le((function(){return!Ye("z").propertyIsEnumerable(0)}))?function(t){return"String"==Ne(t)?Ue(t,""):Ye(t)}:Ye,De=y,ze=function(t){return Xe(De(t))},Be=i,Ge=z,Ve=Ie,We=Ce,$e=ze,qe=ne,Ze=x,He=F,Je=Object.getOwnPropertyDescriptor;Ae.f=Be?Je:function(t,e){if(t=$e(t),e=qe(e),He)try{return Je(t,e)}catch(t){}if(Ze(t,e))return We(!Ge(Ve.f,t,e),t[e])};var Qe=I,tn=Ce,en=i?function(t,e,n){return Qe.f(t,e,tn(1,n))}:function(t,e,n){return t[e]=n,t},nn={exports:{}},rn=P,on=Pt,an=l(Function.toString);rn(on.inspectSource)||(on.inspectSource=function(t){return an(t)});var un,cn,sn,ln=on.inspectSource,fn=P,pn=ln,hn=p.WeakMap,yn=fn(hn)&&/native code/.test(pn(hn)),dn=Ot.exports,vn=Mt,gn=dn("keys"),bn=function(t){return gn[t]||(gn[t]=vn(t))},mn={},xn=yn,wn=p,Sn=l,On=T,jn=en,En=x,An=Pt,In=bn,Pn=mn,Rn=wn.TypeError,Tn=wn.WeakMap;if(xn||An.state){var Cn=An.state||(An.state=new Tn),kn=Sn(Cn.get),_n=Sn(Cn.has),Mn=Sn(Cn.set);un=function(t,e){if(_n(Cn,t))throw new Rn("Object already initialized");return e.facade=t,Mn(Cn,t,e),e},cn=function(t){return kn(Cn,t)||{}},sn=function(t){return _n(Cn,t)}}else{var Kn=In("state");Pn[Kn]=!0,un=function(t,e){if(En(t,Kn))throw new Rn("Object already initialized");return e.facade=t,jn(t,Kn,e),e},cn=function(t){return En(t,Kn)?t[Kn]:{}},sn=function(t){return En(t,Kn)}}var Fn={set:un,get:cn,has:sn,enforce:function(t){return sn(t)?cn(t):un(t,{})},getterFor:function(t){return function(e){var n;if(!On(e)||(n=cn(e)).type!==t)throw Rn("Incompatible receiver, "+t+" required");return n}}},Ln=p,Nn=P,Yn=x,Un=en,Xn=At,Dn=ln,zn=A.CONFIGURABLE,Bn=Fn.get,Gn=Fn.enforce,Vn=String(String).split("String");(nn.exports=function(t,e,n,r){var o,i=!!r&&!!r.unsafe,a=!!r&&!!r.enumerable,u=!!r&&!!r.noTargetGet,c=r&&void 0!==r.name?r.name:e;Nn(n)&&("Symbol("===String(c).slice(0,7)&&(c="["+String(c).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!Yn(n,"name")||zn&&n.name!==c)&&Un(n,"name",c),(o=Gn(n)).source||(o.source=Vn.join("string"==typeof c?c:""))),t!==Ln?(i?!u&&t[e]&&(a=!0):delete t[e],a?t[e]=n:Un(t,e,n)):a?t[e]=n:Xn(e,n)})(Function.prototype,"toString",(function(){return Nn(this)&&Bn(this).source||Dn(this)}));var Wn={},$n=Math.ceil,qn=Math.floor,Zn=function(t){var e=+t;return e!=e||0===e?0:(e>0?qn:$n)(e)},Hn=Zn,Jn=Math.max,Qn=Math.min,tr=Zn,er=Math.min,nr=function(t){return t>0?er(tr(t),9007199254740991):0},rr=nr,or=function(t){return rr(t.length)},ir=ze,ar=function(t,e){var n=Hn(t);return n<0?Jn(n+e,0):Qn(n,e)},ur=or,cr=function(t){return function(e,n,r){var o,i=ir(e),a=ur(i),u=ar(r,a);if(t&&n!=n){for(;a>u;)if((o=i[u++])!=o)return!0}else for(;a>u;u++)if((t||u in i)&&i[u]===n)return t||u||0;return!t&&-1}},sr={includes:cr(!0),indexOf:cr(!1)},lr=x,fr=ze,pr=sr.indexOf,hr=mn,yr=l([].push),dr=function(t,e){var n,r=fr(t),o=0,i=[];for(n in r)!lr(hr,n)&&lr(r,n)&&yr(i,n);for(;e.length>o;)lr(r,n=e[o++])&&(~pr(i,n)||yr(i,n));return i},vr=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],gr=dr,br=vr.concat("length","prototype");Wn.f=Object.getOwnPropertyNames||function(t){return gr(t,br)};var mr={};mr.f=Object.getOwnPropertySymbols;var xr=W,wr=Wn,Sr=mr,Or=X,jr=l([].concat),Er=xr("Reflect","ownKeys")||function(t){var e=wr.f(Or(t)),n=Sr.f;return n?jr(e,n(t)):e},Ar=x,Ir=Er,Pr=Ae,Rr=I,Tr=o,Cr=P,kr=/#|\.prototype\./,_r=function(t,e){var n=Kr[Mr(t)];return n==Lr||n!=Fr&&(Cr(e)?Tr(e):!!e)},Mr=_r.normalize=function(t){return String(t).replace(kr,".").toLowerCase()},Kr=_r.data={},Fr=_r.NATIVE="N",Lr=_r.POLYFILL="P",Nr=_r,Yr=p,Ur=Ae.f,Xr=en,Dr=nn.exports,zr=At,Br=function(t,e){for(var n=Ir(e),r=Rr.f,o=Pr.f,i=0;i<n.length;i++){var a=n[i];Ar(t,a)||r(t,a,o(e,a))}},Gr=Nr,Vr=function(t,e){var n,r,o,i,a,u=t.target,c=t.global,s=t.stat;if(n=c?Yr:s?Yr[u]||zr(u,{}):(Yr[u]||{}).prototype)for(r in e){if(i=e[r],o=t.noTargetGet?(a=Ur(n,r))&&a.value:n[r],!Gr(c?r:u+(s?".":"#")+r,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;Br(i,o)}(t.sham||o&&o.sham)&&Xr(i,"sham",!0),Dr(n,r,i,t)}},Wr=Ke,$r=Array.isArray||function(t){return"Array"==Wr(t)},qr=ne,Zr=I,Hr=Ce,Jr={};Jr[Gt("toStringTag")]="z";var Qr=p,to="[object z]"===String(Jr),eo=P,no=Ke,ro=Gt("toStringTag"),oo=Qr.Object,io="Arguments"==no(function(){return arguments}()),ao=to?no:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=oo(t),ro))?n:io?no(e):"Object"==(r=no(e))&&eo(e.callee)?"Arguments":r},uo=l,co=o,so=P,lo=ao,fo=ln,po=function(){},ho=[],yo=W("Reflect","construct"),vo=/^\s*(?:class|function)\b/,go=uo(vo.exec),bo=!vo.exec(po),mo=function(t){if(!so(t))return!1;try{return yo(po,ho,t),!0}catch(t){return!1}},xo=!yo||co((function(){var t;return mo(mo.call)||!mo(Object)||!mo((function(){t=!0}))||t}))?function(t){if(!so(t))return!1;switch(lo(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}return bo||!!go(vo,fo(t))}:mo,wo=p,So=$r,Oo=xo,jo=T,Eo=Gt("species"),Ao=wo.Array,Io=function(t){var e;return So(t)&&(e=t.constructor,(Oo(e)&&(e===Ao||So(e.prototype))||jo(e)&&null===(e=e[Eo]))&&(e=void 0)),void 0===e?Ao:e},Po=o,Ro=et,To=Gt("species"),Co=Vr,ko=p,_o=o,Mo=$r,Ko=T,Fo=g,Lo=or,No=function(t,e,n){var r=qr(e);r in t?Zr.f(t,r,Hr(0,n)):t[r]=n},Yo=function(t,e){return new(Io(t))(0===e?0:e)},Uo=function(t){return Ro>=51||!Po((function(){var e=[];return(e.constructor={})[To]=function(){return{foo:1}},1!==e[t](Boolean).foo}))},Xo=et,Do=Gt("isConcatSpreadable"),zo=ko.TypeError,Bo=Xo>=51||!_o((function(){var t=[];return t[Do]=!1,t.concat()[0]!==t})),Go=Uo("concat"),Vo=function(t){if(!Ko(t))return!1;var e=t[Do];return void 0!==e?!!e:Mo(t)};Co({target:"Array",proto:!0,forced:!Bo||!Go},{concat:function(t){var e,n,r,o,i,a=Fo(this),u=Yo(a,0),c=0;for(e=-1,r=arguments.length;e<r;e++)if(Vo(i=-1===e?a:arguments[e])){if(c+(o=Lo(i))>9007199254740991)throw zo("Maximum allowed index exceeded");for(n=0;n<o;n++,c++)n in i&&No(u,c,i[n])}else{if(c>=9007199254740991)throw zo("Maximum allowed index exceeded");No(u,c++,i)}return u.length=c,u}});var Wo={transform:["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skewX","skewY","perspective"]},$o=ao,qo=p.String,Zo=function(t){if("Symbol"===$o(t))throw TypeError("Cannot convert a Symbol value to a string");return qo(t)},Ho=X,Jo={},Qo=o,ti=p.RegExp;Jo.UNSUPPORTED_Y=Qo((function(){var t=ti("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),Jo.BROKEN_CARET=Qo((function(){var t=ti("^r","gy");return t.lastIndex=2,null!=t.exec("str")}));var ei,ni=dr,ri=vr,oi=Object.keys||function(t){return ni(t,ri)},ii=I,ai=X,ui=ze,ci=oi,si=i?Object.defineProperties:function(t,e){ai(t);for(var n,r=ui(e),o=ci(e),i=o.length,a=0;i>a;)ii.f(t,n=o[a++],r[n]);return t},li=W("document","documentElement"),fi=X,pi=si,hi=vr,yi=mn,di=li,vi=M,gi=bn("IE_PROTO"),bi=function(){},mi=function(t){return"<script>"+t+"<\/script>"},xi=function(t){t.write(mi("")),t.close();var e=t.parentWindow.Object;return t=null,e},wi=function(){try{ei=new ActiveXObject("htmlfile")}catch(t){}var t,e;wi="undefined"!=typeof document?document.domain&&ei?xi(ei):((e=vi("iframe")).style.display="none",di.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(mi("document.F=Object")),t.close(),t.F):xi(ei);for(var n=hi.length;n--;)delete wi.prototype[hi[n]];return wi()};yi[gi]=!0;var Si,Oi,ji=Object.create||function(t,e){var n;return null!==t?(bi.prototype=fi(t),n=new bi,bi.prototype=null,n[gi]=t):n=wi(),void 0===e?n:pi(n,e)},Ei=o,Ai=p.RegExp,Ii=Ei((function(){var t=Ai(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)})),Pi=o,Ri=p.RegExp,Ti=Pi((function(){var t=Ri("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")})),Ci=z,ki=l,_i=Zo,Mi=function(){var t=Ho(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e},Ki=Jo,Fi=Ot.exports,Li=ji,Ni=Fn.get,Yi=Ii,Ui=Ti,Xi=Fi("native-string-replace",String.prototype.replace),Di=RegExp.prototype.exec,zi=Di,Bi=ki("".charAt),Gi=ki("".indexOf),Vi=ki("".replace),Wi=ki("".slice),$i=(Oi=/b*/g,Ci(Di,Si=/a/,"a"),Ci(Di,Oi,"a"),0!==Si.lastIndex||0!==Oi.lastIndex),qi=Ki.UNSUPPORTED_Y||Ki.BROKEN_CARET,Zi=void 0!==/()??/.exec("")[1];($i||Zi||qi||Yi||Ui)&&(zi=function(t){var e,n,r,o,i,a,u,c=this,s=Ni(c),l=_i(t),f=s.raw;if(f)return f.lastIndex=c.lastIndex,e=Ci(zi,f,l),c.lastIndex=f.lastIndex,e;var p=s.groups,h=qi&&c.sticky,y=Ci(Mi,c),d=c.source,v=0,g=l;if(h&&(y=Vi(y,"y",""),-1===Gi(y,"g")&&(y+="g"),g=Wi(l,c.lastIndex),c.lastIndex>0&&(!c.multiline||c.multiline&&"\n"!==Bi(l,c.lastIndex-1))&&(d="(?: "+d+")",g=" "+g,v++),n=new RegExp("^(?:"+d+")",y)),Zi&&(n=new RegExp("^"+d+"$(?!\\s)",y)),$i&&(r=c.lastIndex),o=Ci(Di,h?n:c,g),h?o?(o.input=Wi(o.input,v),o[0]=Wi(o[0],v),o.index=c.lastIndex,c.lastIndex+=o[0].length):c.lastIndex=0:$i&&o&&(c.lastIndex=c.global?o.index+o[0].length:r),Zi&&o&&o.length>1&&Ci(Xi,o[0],n,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(o[i]=void 0)})),o&&p)for(o.groups=a=Li(null),i=0;i<p.length;i++)a[(u=p[i])[0]]=o[u[1]];return o});var Hi=zi;Vr({target:"RegExp",proto:!0,forced:/./.exec!==Hi},{exec:Hi});var Ji=Function.prototype,Qi=Ji.apply,ta=Ji.bind,ea=Ji.call,na="object"==typeof Reflect&&Reflect.apply||(ta?ea.bind(Qi):function(){return ea.apply(Qi,arguments)}),ra=l,oa=nn.exports,ia=Hi,aa=o,ua=Gt,ca=en,sa=ua("species"),la=RegExp.prototype,fa=T,pa=Ke,ha=Gt("match"),ya=xo,da=ht,va=p.TypeError,ga=X,ba=function(t){if(ya(t))return t;throw va(da(t)+" is not a constructor")},ma=Gt("species"),xa=l,wa=Zn,Sa=Zo,Oa=y,ja=xa("".charAt),Ea=xa("".charCodeAt),Aa=xa("".slice),Ia=function(t){return function(e,n){var r,o,i=Sa(Oa(e)),a=wa(n),u=i.length;return a<0||a>=u?t?"":void 0:(r=Ea(i,a))<55296||r>56319||a+1===u||(o=Ea(i,a+1))<56320||o>57343?t?ja(i,a):r:t?Aa(i,a,a+2):o-56320+(r-55296<<10)+65536}},Pa={codeAt:Ia(!1),charAt:Ia(!0)}.charAt,Ra=l([].slice),Ta=z,Ca=X,ka=P,_a=Ke,Ma=Hi,Ka=p.TypeError,Fa=na,La=z,Na=l,Ya=function(t,e,n,r){var o=ua(t),i=!aa((function(){var e={};return e[o]=function(){return 7},7!=""[t](e)})),a=i&&!aa((function(){var e=!1,n=/a/;return"split"===t&&((n={}).constructor={},n.constructor[sa]=function(){return n},n.flags="",n[o]=/./[o]),n.exec=function(){return e=!0,null},n[o](""),!e}));if(!i||!a||n){var u=ra(/./[o]),c=e(o,""[t],(function(t,e,n,r,o){var a=ra(t),c=e.exec;return c===ia||c===la.exec?i&&!o?{done:!0,value:u(e,n,r)}:{done:!0,value:a(n,e,r)}:{done:!1}}));oa(String.prototype,t,c[0]),oa(la,o,c[1])}r&&ca(la[o],"sham",!0)},Ua=function(t){var e;return fa(t)&&(void 0!==(e=t[ha])?!!e:"RegExp"==pa(t))},Xa=X,Da=y,za=function(t,e){var n,r=ga(t).constructor;return void 0===r||null==(n=ga(r)[ma])?e:ba(n)},Ba=function(t,e,n){return e+(n?Pa(t,e).length:1)},Ga=nr,Va=Zo,Wa=bt,$a=Ra,qa=function(t,e){var n=t.exec;if(ka(n)){var r=Ta(n,t,e);return null!==r&&Ca(r),r}if("RegExp"===_a(t))return Ta(Ma,t,e);throw Ka("RegExp#exec called on incompatible receiver")},Za=Hi,Ha=o,Ja=Jo.UNSUPPORTED_Y,Qa=Math.min,tu=[].push,eu=Na(/./.exec),nu=Na(tu),ru=Na("".slice);Ya("split",(function(t,e,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var r=Va(Da(this)),o=void 0===n?4294967295:n>>>0;if(0===o)return[];if(void 0===t)return[r];if(!Ua(t))return La(e,r,t,o);for(var i,a,u,c=[],s=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),l=0,f=new RegExp(t.source,s+"g");(i=La(Za,f,r))&&!((a=f.lastIndex)>l&&(nu(c,ru(r,l,i.index)),i.length>1&&i.index<r.length&&Fa(tu,c,$a(i,1)),u=i[0].length,l=a,c.length>=o));)f.lastIndex===i.index&&f.lastIndex++;return l===r.length?!u&&eu(f,"")||nu(c,""):nu(c,ru(r,l)),c.length>o?$a(c,0,o):c}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:La(e,this,t,n)}:e,[function(e,n){var o=Da(this),i=null==e?void 0:Wa(e,t);return i?La(i,e,o,n):La(r,Va(o),e,n)},function(t,o){var i=Xa(this),a=Va(t),u=n(r,i,a,o,r!==e);if(u.done)return u.value;var c=za(i,RegExp),s=i.unicode,l=(i.ignoreCase?"i":"")+(i.multiline?"m":"")+(i.unicode?"u":"")+(Ja?"g":"y"),f=new c(Ja?"^(?:"+i.source+")":i,l),p=void 0===o?4294967295:o>>>0;if(0===p)return[];if(0===a.length)return null===qa(f,a)?[a]:[];for(var h=0,y=0,d=[];y<a.length;){f.lastIndex=Ja?0:y;var v,g=qa(f,Ja?ru(a,y):a);if(null===g||(v=Qa(Ga(f.lastIndex+(Ja?y:0)),a.length))===h)y=Ba(a,y,s);else{if(nu(d,ru(a,h,y)),d.length===p)return d;for(var b=1;b<=g.length-1;b++)if(nu(d,g[b]),d.length===p)return d;y=h=v}}return nu(d,ru(a,h)),d}]}),!!Ha((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]})),Ja);var ou=Object.prototype.hasOwnProperty,iu=function(e){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&we(t,e)}(a,t.Effect);var n,r,o,i=Oe(a);function a(){return ge(this,a),i.apply(this,arguments)}return n=a,(r=[{key:"getScratchValue",value:function(){var t=this.context.window.getComputedStyle;if("transform"!==this.attributeKey)return t(this.element)[this.attributeKey];var e,n={},r=function(t,e){var n=t.getComputedStyle(e).transform;if(""===n||"none"===n)return{};var r,o,i,a,u,c,s,l,f=n.split("(")[1].split(")")[0].split(",");return r=f,o=Math.atan2(r[1],r[0]),i=Math.pow(r[0],2)+Math.pow(r[1],2),a=Math.pow(r[2],2)+Math.pow(r[3],2),u=Math.sqrt(i),c=(r[0]*r[3]-r[2]*r[1])/u,s=Math.atan2(r[0]*r[2]+r[1]*r[3],i),l=Math.atan2(r[1]*r[3]+r[0]*r[2],a),{rotate:o/(Math.PI/180)+"deg",scaleX:u,scaleY:c,skewX:(1===i?s/(Math.PI/180):0)+"deg",skewY:(1===a?l/(Math.PI/180):0)+"deg",translateX:r[4]+"px",translateY:r[5]+"px"}}(this.context.window,this.element),o=Ee(Wo[this.attributeKey]);try{for(o.s();!(e=o.n()).done;){var i=e.value;n[i]=ou.call(r,i)?r[i]:t(this.element)[i]}}catch(t){o.e(t)}finally{o.f()}return n}},{key:"onGetContext",value:function(){var t,e,n,r,o;if(this.options={},ou.call(Wo,this.attributeKey)){var i,a=Ee(Wo[this.attributeKey]);try{for(a.s();!(i=a.n()).done;){var u,c,s,l,f=i.value;ou.call(this.targetValue,f)&&(this.options.transform=[],null!==(c=(u=this.options.transform)[0])&&void 0!==c||(u[0]=""),null!==(l=(s=this.options.transform)[1])&&void 0!==l||(s[1]=""),this.options.transform[0]+=" ".concat([f],"(").concat(this.initialValue[f],")"),this.options.transform[1]+=" ".concat([f],"(").concat(this.targetValue[f],")"))}}catch(t){a.e(t)}finally{a.f()}}else this.options[this.attributeKey]=[this.initialValue,this.targetValue];null!==(e=(t=this.context).CSSAnimationLayer)&&void 0!==e||(t.CSSAnimationLayer={}),null!==(o=(n=this.context.CSSAnimationLayer)[r=this.element.dataset.motorcortex2Id])&&void 0!==o||(n[r]={}),this.context.CSSAnimationLayer[this.element.dataset.motorcortex2Id][this.attributeKey]={start:this.options[this.attributeKey][0],end:this.options[this.attributeKey][1]},this.checkAnimation()}},{key:"createAnimation",value:function(){this.creating=!0,this.target&&(this.target.startTime=document.timeline.currentTime-this.target.currentTime*this.target.playbackRate),this.target=this.element.animate([me({},this.attributeKey,this.options[this.attributeKey][0]),me({},this.attributeKey,this.options[this.attributeKey][1])],{duration:this.props.duration,fill:"forwards",easing:"linear"}),this.target.pause(),this.context.CSSAnimationLayer[this.element.dataset.motorcortex2Id][this.attributeKey]={start:this.options[this.attributeKey][0],end:this.options[this.attributeKey][1]},this.creating=!1}},{key:"checkAnimation",value:function(){var t=this.context.CSSAnimationLayer[this.element.dataset.motorcortex2Id][this.attributeKey],e=t.start,n=t.end;e===this.options[this.attributeKey][0]&&n===this.options[this.attributeKey][1]&&this.target||this.createAnimation()}},{key:"onProgress",value:function(t){this.creating||(this.checkAnimation(),this.target.currentTime=this.props.duration*t)}}])&&be(n.prototype,r),o&&be(n,o),a}(),au=require("../package.json"),uu={npm_name:au.name,version:au.version,incidents:[{exportable:iu,name:"WAA"}]};export{uu as default};
