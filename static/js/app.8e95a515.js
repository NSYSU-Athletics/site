(function(t){function e(e){for(var c,a,l=e[0],r=e[1],u=e[2],b=0,s=[];b<l.length;b++)a=l[b],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&s.push(i[a][0]),i[a]=0;for(c in r)Object.prototype.hasOwnProperty.call(r,c)&&(t[c]=r[c]);d&&d(e);while(s.length)s.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],c=!0,a=1;a<n.length;a++){var l=n[a];0!==i[l]&&(c=!1)}c&&(o.splice(e--,1),t=r(r.s=n[0]))}return t}var c={},a={app:0},i={app:0},o=[];function l(t){return r.p+"static/js/"+({about:"about"}[t]||t)+"."+{about:"49a362b0","chunk-63069d4a":"485314f1"}[t]+".js"}function r(e){if(c[e])return c[e].exports;var n=c[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.e=function(t){var e=[],n={"chunk-63069d4a":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var c="static/css/"+({about:"about"}[t]||t)+"."+{about:"31d6cfe0","chunk-63069d4a":"b50b2572"}[t]+".css",i=r.p+c,o=document.getElementsByTagName("link"),l=0;l<o.length;l++){var u=o[l],b=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(b===c||b===i))return e()}var s=document.getElementsByTagName("style");for(l=0;l<s.length;l++){u=s[l],b=u.getAttribute("data-href");if(b===c||b===i)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var c=e&&e.target&&e.target.src||i,o=new Error("Loading CSS chunk "+t+" failed.\n("+c+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=c,delete a[t],d.parentNode.removeChild(d),n(o)},d.href=i;var j=document.getElementsByTagName("head")[0];j.appendChild(d)})).then((function(){a[t]=0})));var c=i[t];if(0!==c)if(c)e.push(c[2]);else{var o=new Promise((function(e,n){c=i[t]=[e,n]}));e.push(c[2]=o);var u,b=document.createElement("script");b.charset="utf-8",b.timeout=120,r.nc&&b.setAttribute("nonce",r.nc),b.src=l(t);var s=new Error;u=function(e){b.onerror=b.onload=null,clearTimeout(d);var n=i[t];if(0!==n){if(n){var c=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;s.message="Loading chunk "+t+" failed.\n("+c+": "+a+")",s.name="ChunkLoadError",s.type=c,s.request=a,n[1](s)}i[t]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:b})}),12e4);b.onerror=b.onload=u,document.head.appendChild(b)}return Promise.all(e)},r.m=t,r.c=c,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)r.d(n,c,function(e){return t[e]}.bind(null,c));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],b=u.push.bind(u);u.push=e,u=u.slice();for(var s=0;s<u.length;s++)e(u[s]);var d=b;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"0202":function(t,e,n){},"185a":function(t,e,n){"use strict";var c=n("7a23"),a={class:"container mx-auto box-border p-10"};function i(t,e,n,i,o,l){return Object(c["v"])(),Object(c["h"])("div",a,[Object(c["C"])(t.$slots,"default")])}var o={name:"Container"},l=n("6b0d"),r=n.n(l);const u=r()(o,[["render",i]]);e["a"]=u},"1f35":function(t){t.exports=JSON.parse('{"navbar":{"home":"首頁","about":"關於我們","info":"本隊資訊","result":"競賽成績","event_list":"賽事列表","nfac":"新生盃","niac":"系際盃","chcw":"正興城灣盃","siag":"南臺灣大學田徑交流賽","recruit":"招募資訊"},"homepage":{"news":"最新消息","fb_timeline":"Facebook 動態"}}')},"4bbe":function(t){t.exports=JSON.parse('{"navbar":{"home":"ホーム","about":"部紹介","info":"インフォ","result":"競技結果報告","event_list":"大会情報","nfac":"フレッシュマン陸上競技大会","niac":"学部間陸上競技交流大会","chcw":"正興城湾カップ","siac":"南台湾大学陸上競技大会","recruit":"入部案内"},"homepage":{"news":"ニュース","fb_timeline":"Facebookタイムライン"}}')},5331:function(t,e,n){},"669b":function(t){t.exports=JSON.parse('{"navbar":{"home":"Home","about":"About","info":"NSYSU Athletics","result":"Results","event_list":"Event List","nfac":"NFAC","niac":"NIAC","chcw":"CHCW","siac":"SIAC","recruit":"Join us"},"homepage":{"news":"Latest news","fb_timeline":"Facebook Timeline"}}')},"8bcf":function(t,e,n){},"8e7e":function(t,e,n){},"97f7":function(t,e,n){"use strict";n("5331")},a766:function(t,e,n){},b7d8:function(t,e,n){"use strict";n("8e7e")},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23");function a(t,e,n,a,i,o){var l=Object(c["D"])("Navbar"),r=Object(c["D"])("SlideShow"),u=Object(c["D"])("router-view"),b=Object(c["D"])("Footer");return Object(c["v"])(),Object(c["h"])(c["a"],null,[Object(c["k"])(l),(Object(c["v"])(),Object(c["f"])(c["b"],null,[Object(c["k"])(r,{"slide-Data":a.slide_data},null,8,["slide-Data"])],1024)),Object(c["i"])("div",null,[Object(c["k"])(u)]),Object(c["k"])(b)],64)}var i={class:"carousel__item"},o=["src"];function l(t,e,n,a,l,r){var u=Object(c["D"])("Slide"),b=Object(c["D"])("Pagination"),s=Object(c["D"])("Carousel");return Object(c["v"])(),Object(c["f"])(s,{autoplay:3e3,"wrap-around":!0},{addons:Object(c["K"])((function(){return[Object(c["k"])(b)]})),default:Object(c["K"])((function(){return[(Object(c["v"])(!0),Object(c["h"])(c["a"],null,Object(c["B"])(t.slideData,(function(t){return Object(c["v"])(),Object(c["f"])(u,{key:t},{default:Object(c["K"])((function(){return[Object(c["i"])("div",i,[Object(c["i"])("img",{class:"block",style:{width:"100%","object-position":"center, center","object-fit":"cover"},src:t},null,8,o)])]})),_:2},1024)})),128))]})),_:1})}n("4001");var r=n("0b81"),u=Object(c["l"])({name:"SlideShow",props:["slideData"],components:{Carousel:r["a"],Slide:r["c"],Pagination:r["b"]}}),b=(n("f672"),n("6b0d")),s=n.n(b);const d=s()(u,[["render",l]]);var j=d,f=n("f3ae"),O=n.n(f),v={class:"sticky top-0 z-10 w-full bg-yellow-600 flex flex-row justify-between justify-items-stretch text-white p-5 shadow"},h={class:"flex justify-items-stretch"},p=Object(c["i"])("img",{src:O.a,class:"h-14 inline-block"},null,-1),g={key:0,class:"mx-3 text-2xl text-white font-bold"},m={key:1,class:"mx-3 text-2xl text-white font-bold"},_=Object(c["i"])("div",{class:"mx-3 text-sm text-white font-medium"},"National Sun Yat-sen University Athletics Team",-1),w=Object(c["i"])("div",{class:"flex-grow"},null,-1),k={class:"hidden lg:inline-block text-center text-2xl links font-medium"},x={class:"relative inline-block"},y={class:"absolute bg-yellow-600 text-white top-20 right-0 p-5 rounded shadow duration-300",style:{width:"max-content"}},C={class:"relative inline-block"},S={class:"absolute bg-yellow-600 text-white top-20 right-0 p-5 rounded shadow duration-300",style:{width:"max-content"}},F={class:"relative inline-block"},A=Object(c["i"])("i",{class:"fas fa-globe"},null,-1),N=[A],K={class:"absolute bg-yellow-600 text-white w-auto right-0 top-20 p-5 rounded shadow duration-300",style:{width:"max-content"}},D={class:Object(c["q"])({"inline-block":!0,"lg:hidden":!0,"text-center":!0,"text-3xl":!0,"font-bold":!0,"m-auto":!0})},P=Object(c["i"])("i",{class:"fas fa-bars"},null,-1),T=[P],U={key:0,class:"block lg:hidden h-full w-full fixed z-10 top-0 left-0 bg-black opacity-80 overflow-x-hidden"},J=Object(c["i"])("i",{class:"fal fa-times"},null,-1),L=[J],E={class:"block lg:hidden text-center text-4xl font-cwt font-bold text-white links",style:{margin:"100px auto"}};function W(t,e,n,a,i,o){var l=Object(c["D"])("router-link");return Object(c["v"])(),Object(c["h"])(c["a"],null,[Object(c["i"])("div",v,[Object(c["k"])(l,{to:"/"},{default:Object(c["K"])((function(){return[Object(c["i"])("div",h,[p,Object(c["i"])("div",null,["ja_JP"!=a.lang_code?(Object(c["v"])(),Object(c["h"])("div",g,"國立中山大學田徑校隊")):(Object(c["v"])(),Object(c["h"])("div",m,"国立中山大学陸上競技部")),_])])]})),_:1}),w,Object(c["i"])("div",k,[Object(c["k"])(l,{to:"/"},{default:Object(c["K"])((function(){return[Object(c["j"])(Object(c["F"])(a.lang_dict.navbar.home),1)]})),_:1}),Object(c["i"])("div",x,[Object(c["i"])("a",{onClick:e[0]||(e[0]=function(t){return a.sub_nav=1==a.sub_nav?0:1})},Object(c["F"])(a.lang_dict.navbar.event_list),1),Object(c["L"])(Object(c["i"])("div",y,[Object(c["k"])(l,{class:"block",onClick:e[1]||(e[1]=function(t){return a.sub_nav=0}),to:"/nfac"},{default:Object(c["K"])((function(){return[Object(c["j"])(Object(c["F"])(a.lang_dict.navbar.nfac),1)]})),_:1}),Object(c["k"])(l,{class:"block",onClick:e[2]||(e[2]=function(t){return a.sub_nav=0}),to:""},{default:Object(c["K"])((function(){return[Object(c["j"])(Object(c["F"])(a.lang_dict.navbar.niac),1)]})),_:1}),Object(c["k"])(l,{class:"block",onClick:e[3]||(e[3]=function(t){return a.sub_nav=0}),to:""},{default:Object(c["K"])((function(){return[Object(c["j"])(Object(c["F"])(a.lang_dict.navbar.chcw),1)]})),_:1})],512),[[c["H"],1==a.sub_nav]])]),Object(c["i"])("div",C,[Object(c["i"])("a",{onClick:e[4]||(e[4]=function(t){return a.sub_nav=2==a.sub_nav?0:2})},Object(c["F"])(a.lang_dict.navbar.info),1),Object(c["L"])(Object(c["i"])("div",S,[Object(c["k"])(l,{class:"block",onClick:e[5]||(e[5]=function(t){return a.sub_nav=0}),to:"/about"},{default:Object(c["K"])((function(){return[Object(c["j"])(Object(c["F"])(a.lang_dict.navbar.about),1)]})),_:1}),Object(c["k"])(l,{class:"block",onClick:e[6]||(e[6]=function(t){return a.sub_nav=0}),to:""},{default:Object(c["K"])((function(){return[Object(c["j"])(Object(c["F"])(a.lang_dict.navbar.result),1)]})),_:1})],512),[[c["H"],2==a.sub_nav]])]),Object(c["k"])(l,{to:""},{default:Object(c["K"])((function(){return[Object(c["j"])(Object(c["F"])(a.lang_dict.navbar.recruit),1)]})),_:1}),Object(c["i"])("div",F,[Object(c["i"])("a",{onClick:e[7]||(e[7]=function(t){return a.sub_nav=3==a.sub_nav?0:3})},N),Object(c["L"])(Object(c["i"])("div",K,[Object(c["i"])("a",{class:"block",onClick:e[8]||(e[8]=function(t){return a.lang_code="en_US"})},"English"),Object(c["i"])("a",{class:"block",onClick:e[9]||(e[9]=function(t){return a.lang_code="zh_TW"})},"中文"),Object(c["i"])("a",{class:"block",onClick:e[10]||(e[10]=function(t){return a.lang_code="ja_JP"})},"日本語")],512),[[c["H"],3==a.sub_nav]])])]),Object(c["i"])("div",D,[Object(c["i"])("a",{onClick:e[11]||(e[11]=function(){return a.mobileNav&&a.mobileNav.apply(a,arguments)})},T)])]),Object(c["k"])(c["c"],{name:"slide-fade"},{default:Object(c["K"])((function(){return[a.mobile_nav_open?(Object(c["v"])(),Object(c["h"])("div",U,[Object(c["i"])("a",{onClick:e[12]||(e[12]=function(t){return a.mobile_nav_open=!1}),class:"text-5xl text-white block float-right mt-10 mr-10"},L),Object(c["i"])("div",E,[Object(c["k"])(l,{onClick:e[13]||(e[13]=function(t){return a.mobile_nav_open=!1}),to:"/"},{default:Object(c["K"])((function(){return[Object(c["j"])(Object(c["F"])(a.lang_dict.navbar.home),1)]})),_:1}),Object(c["k"])(l,{onClick:e[14]||(e[14]=function(t){return a.mobile_nav_open=!1}),to:"/nfac"},{default:Object(c["K"])((function(){return[Object(c["j"])(Object(c["F"])(a.lang_dict.navbar.nfac),1)]})),_:1}),Object(c["k"])(l,{onClick:e[15]||(e[15]=function(t){return a.mobile_nav_open=!1}),to:""},{default:Object(c["K"])((function(){return[Object(c["j"])(Object(c["F"])(a.lang_dict.navbar.niac),1)]})),_:1}),Object(c["k"])(l,{onClick:e[16]||(e[16]=function(t){return a.mobile_nav_open=!1}),to:""},{default:Object(c["K"])((function(){return[Object(c["j"])(Object(c["F"])(a.lang_dict.navbar.chcw),1)]})),_:1}),Object(c["k"])(l,{onClick:e[17]||(e[17]=function(t){return a.mobile_nav_open=!1}),to:"/about"},{default:Object(c["K"])((function(){return[Object(c["j"])(Object(c["F"])(a.lang_dict.navbar.about),1)]})),_:1}),Object(c["k"])(l,{onClick:e[18]||(e[18]=function(t){return a.mobile_nav_open=!1}),to:""},{default:Object(c["K"])((function(){return[Object(c["j"])(Object(c["F"])(a.lang_dict.navbar.result),1)]})),_:1}),Object(c["k"])(l,{onClick:e[19]||(e[19]=function(t){return a.mobile_nav_open=!1}),to:""},{default:Object(c["K"])((function(){return[Object(c["j"])(Object(c["F"])(a.lang_dict.navbar.recruit),1)]})),_:1}),Object(c["i"])("a",{onClick:e[20]||(e[20]=function(t){return a.lang_code="en_US"})},"English"),Object(c["i"])("a",{onClick:e[21]||(e[21]=function(t){return a.lang_code="zh_TW"})},"中文"),Object(c["i"])("a",{onClick:e[22]||(e[22]=function(t){return a.lang_code="ja_JP"})},"日本語")])])):Object(c["g"])("",!0)]})),_:1})],64)}var Y=n("1f35"),z=n("669b"),H=n("4bbe"),I=function(t){switch(t){case"en_US":return z;case"zh_TW":return Y;case"ja_JP":return H}},q=n("5502"),B={name:"Navbar",setup:function(){var t=Object(q["b"])(),e=Object(c["A"])(0),n=Object(c["A"])(!1),a=function(){n.value=!n.value},i=Object(c["A"])(t.state.lang_code),o=Object(c["A"])(I(i.value));return Object(c["I"])(i,(function(){o.value=I(i.value),t.commit("changeLang",i.value),e.value=0})),{lang_dict:o,lang_code:i,mobile_nav_open:n,mobileNav:a,sub_nav:e}}};n("97f7");const M=s()(B,[["render",W]]);var R=M,V={class:"bg-yellow-600 text-left p-10"},$={class:"mx-auto w-full grid grid-cols-1 lg:grid-cols-3 items-stretch justify-items-center text-white"},G={class:"m-2 w-full flex flex-row justify-items-center content-center items-center"},Q=Object(c["i"])("img",{src:O.a,class:"inline-block h-16"},null,-1),X={class:"ml-5"},Z={key:0,class:"text-2xl font-bold"},tt={key:1,class:"text-2xl font-bold"},et=Object(c["i"])("div",{class:"text-xs"},"National Sun Yat-sen University Athletics Team",-1),nt={class:"m-2 block w-full"},ct={key:0},at=Object(c["j"])("804 高雄市鼓山區蓮海路70號"),it=Object(c["i"])("br",null,null,-1),ot=Object(c["j"])("中山大學田徑場西南側"),lt=[at,it,ot],rt={key:1},ut=Object(c["j"])("National Sun Yat-sen University"),bt=Object(c["i"])("br",null,null,-1),st=Object(c["j"])(" No.70 Lianhai Rd., Kaohsiung City 804, Taiwan"),dt=[ut,bt,st],jt={key:2},ft=Object(c["j"])("804 高雄市鼓山区蓮海路70号"),Ot=Object(c["i"])("br",null,null,-1),vt=Object(c["j"])("中山大学トラックより南西側"),ht=[ft,Ot,vt],pt=Object(c["i"])("div",null,"(07)525-2000",-1),gt={class:"m-2 block w-full text-6xl"};function mt(t,e,n,a,i,o){return Object(c["v"])(),Object(c["h"])("div",V,[Object(c["i"])("div",$,[Object(c["i"])("div",G,[Q,Object(c["i"])("div",X,["ja_JP"!=a.lang_code?(Object(c["v"])(),Object(c["h"])("div",Z,"國立中山大學田徑校隊")):(Object(c["v"])(),Object(c["h"])("div",tt,"国立中山大学陸上競技部")),et])]),Object(c["i"])("div",nt,["zh_TW"==a.lang_code?(Object(c["v"])(),Object(c["h"])("div",ct,lt)):Object(c["g"])("",!0),"en_US"==a.lang_code?(Object(c["v"])(),Object(c["h"])("div",rt,dt)):Object(c["g"])("",!0),"ja_JP"==a.lang_code?(Object(c["v"])(),Object(c["h"])("div",jt,ht)):Object(c["g"])("",!0),pt]),Object(c["i"])("div",gt,[Object(c["i"])("i",{class:"mr-5 fab fa-facebook-square cursor-pointer",onClick:e[0]||(e[0]=function(t){return a.newWindow("https://www.facebook.com/NSYSUAthletics")})}),Object(c["i"])("i",{class:"mr-5 fab fa-instagram cursor-pointer",onClick:e[1]||(e[1]=function(t){return a.newWindow("https://www.instagram.com/nsysu_athletics/")})}),Object(c["i"])("i",{class:"mr-5 fas fa-envelope-square cursor-pointer",onClick:e[2]||(e[2]=function(t){return a.newWindow("")})})])])])}var _t={name:"Footer",setup:function(){var t=Object(q["b"])();function e(t){window.open(t)}return{lang_code:Object(c["d"])((function(){return t.state.lang_code})),newWindow:e}}};const wt=s()(_t,[["render",mt]]);var kt=wt,xt={name:"App",setup:function(){var t=["https://ryanxuan930.github.io/cdn/nsysu_athletics/slideshow/01.jpg","https://ryanxuan930.github.io/cdn/nsysu_athletics/slideshow/02.jpg","https://ryanxuan930.github.io/cdn/nsysu_athletics/slideshow/03.jpg","https://ryanxuan930.github.io/cdn/nsysu_athletics/slideshow/04.jpg","https://ryanxuan930.github.io/cdn/nsysu_athletics/slideshow/05.jpg","https://ryanxuan930.github.io/cdn/nsysu_athletics/slideshow/06.jpg","https://ryanxuan930.github.io/cdn/nsysu_athletics/slideshow/07.jpg"];return{slide_data:t}},components:{Navbar:R,Footer:kt,SlideShow:j}};const yt=s()(xt,[["render",a]]);var Ct=yt,St=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),Ft=function(t){return Object(c["y"])("data-v-1fe733c4"),t=t(),Object(c["w"])(),t},At={class:"grid grid-cols-1 lg:grid-cols-3 gap-4"},Nt={class:"col-span-1 lg:col-span-2"},Kt={id:"event_button"},Dt={class:"text-2xl"},Pt=Ft((function(){return Object(c["i"])("hr",null,null,-1)})),Tt=Ft((function(){return Object(c["i"])("div",{class:"p-2 flex hover:bg-yellow-50 cursor-pointer items-center"},[Object(c["i"])("div",{class:"inline-block",style:{"white-space":"nowrap"}},[Object(c["i"])("div",{class:"py-0.5 px-1 border-2 border-yellow-600 text-yellow-600 rounded"},"類別")]),Object(c["i"])("div",{class:"inline-block ml-2",style:{"white-space":"nowrap"}},"0000-00-00"),Object(c["i"])("div",{class:"inline-block ml-0 lg:ml-2"},"公告內容")],-1)})),Ut=Ft((function(){return Object(c["i"])("hr",{class:"mx-2"},null,-1)})),Jt=Ft((function(){return Object(c["i"])("template",null,null,-1)})),Lt={class:"text-2xl"},Et=Ft((function(){return Object(c["i"])("hr",null,null,-1)})),Wt=Ft((function(){return Object(c["i"])("div",{class:"fb-page","data-href":"https://www.facebook.com/NSYSUAthletics","data-tabs":"timeline","data-width":"","data-height":"","data-small-header":"true","data-adapt-container-width":"true","data-hide-cover":"false","data-show-facepile":"true"},[Object(c["i"])("blockquote",{cite:"https://www.facebook.com/NSYSUAthletics",class:"fb-xfbml-parse-ignore"},[Object(c["i"])("a",{href:"https://www.facebook.com/NSYSUAthletics"},"國立中山大學田徑校隊")])],-1)}));function Yt(t,e,n,a,i,o){var l=Object(c["D"])("Countdown"),r=Object(c["D"])("Container");return Object(c["v"])(),Object(c["f"])(r,{class:"text-gray-700"},{default:Object(c["K"])((function(){return[Object(c["i"])("div",At,[Object(c["i"])("div",Nt,[Object(c["k"])(l,{"lang-code":t.lang_code},null,8,["lang-code"]),Object(c["i"])("table",Kt,[Object(c["i"])("tr",null,[Object(c["i"])("td",null,[Object(c["i"])("div",{onClick:e[0]||(e[0]=function(e){return t.$router.push("/nfac")})},Object(c["F"])(t.lang_dict.navbar.nfac),1)]),Object(c["i"])("td",null,[Object(c["i"])("div",null,Object(c["F"])(t.lang_dict.navbar.niac),1)]),Object(c["i"])("td",null,[Object(c["i"])("div",null,Object(c["F"])(t.lang_dict.navbar.chcw),1)])])]),Object(c["i"])("div",Dt,Object(c["F"])(t.lang_dict.homepage.news),1),Pt,Tt,Ut,Jt]),Object(c["i"])("div",null,[Object(c["i"])("div",Lt,Object(c["F"])(t.lang_dict.homepage.fb_timeline),1),Et,Wt])])]})),_:1})}var zt=n("185a"),Ht=function(t){return Object(c["y"])("data-v-cd3d9e2a"),t=t(),Object(c["w"])(),t},It={class:"bg-yellow-500 py-2 px-5 w-full box-border"},qt={key:0,class:"bg-yellow-500 text-center text-black mb-2 text-2xl"},Bt={key:1,class:"bg-yellow-500 text-center text-black mb-2 text-2xl"},Mt={key:2,class:"bg-yellow-500 text-center text-black mb-2 text-2xl"},Rt={class:"w-full p-1 text-3xl lg:text-5xl text-center bg-black text-yellow-400"},Vt={style:{"font-family":"Digital"}},$t=Ht((function(){return Object(c["i"])("div",{class:"bg-yellow-500 text-center text-black mt-2 text-lg",style:{"font-family":"Audiowide-Regular"}},"TechNSport",-1)}));function Gt(t,e,n,a,i,o){var l=Object(c["D"])("VueCountdown");return Object(c["v"])(),Object(c["h"])("div",It,["en_US"==n.langCode?(Object(c["v"])(),Object(c["h"])("div",qt,"NSYSU Freshman Athletics Championship")):Object(c["g"])("",!0),"zh_TW"==n.langCode?(Object(c["v"])(),Object(c["h"])("div",Bt,"新生盃田徑錦標賽")):Object(c["g"])("",!0),"ja_JP"==n.langCode?(Object(c["v"])(),Object(c["h"])("div",Mt,"フレッシュマン陸上競技大会")):Object(c["g"])("",!0),Object(c["i"])("div",Rt,[Object(c["k"])(l,{time:a.time},{default:Object(c["K"])((function(t){var e=t.days,n=t.hours,a=t.minutes,i=t.seconds;return[Object(c["i"])("span",Vt,Object(c["F"])(e)+" day "+Object(c["F"])(n)+" hrs "+Object(c["F"])(a)+" min "+Object(c["F"])(i)+" sec ",1)]})),_:1},8,["time"])]),$t])}var Qt=n("73b7"),Xt={name:"Countdown",setup:function(){var t=new Date,e=new Date("2021-10-21 17:00:00"),n=e-t,a=Object(c["A"])(n);return{time:a}},props:["langCode"],components:{VueCountdown:Qt["a"]}};n("b7d8");const Zt=s()(Xt,[["render",Gt],["__scopeId","data-v-cd3d9e2a"]]);var te=Zt,ee=Object(c["l"])({name:"Home",setup:function(){var t=Object(q["b"])(),e=Object(c["d"])((function(){return t.state.lang_code})),n=Object(c["A"])(I(e.value));return Object(c["I"])(e,(function(){n.value=I(e.value)})),{lang_dict:n,lang_code:e}},components:{Container:zt["a"],Countdown:te}});n("f413");const ne=s()(ee,[["render",Yt],["__scopeId","data-v-1fe733c4"]]);var ce=ne,ae=[{path:"/",name:"Home",component:ce},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"5851"))}},{path:"/nfac",name:"NFAC",component:function(){return n.e("chunk-63069d4a").then(n.bind(null,"4f71"))}}],ie=Object(St["a"])({history:Object(St["b"])(),routes:ae}),oe=ie,le=Object(q["a"])({state:{lang_code:"zh_TW"},mutations:{changeLang:function(t,e){t.lang_code=e}},actions:{},modules:{}});n("a766");Object(c["e"])(Ct).use(le).use(oe).mount("#app")},f3ae:function(t,e,n){t.exports=n.p+"static/img/logo_no_bg_white.4f65630c.png"},f413:function(t,e,n){"use strict";n("0202")},f672:function(t,e,n){"use strict";n("8bcf")}});
//# sourceMappingURL=app.8e95a515.js.map