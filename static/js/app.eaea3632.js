(function(t){function e(e){for(var c,i,l=e[0],r=e[1],u=e[2],b=0,j=[];b<l.length;b++)i=l[b],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&j.push(a[i][0]),a[i]=0;for(c in r)Object.prototype.hasOwnProperty.call(r,c)&&(t[c]=r[c]);s&&s(e);while(j.length)j.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],c=!0,i=1;i<n.length;i++){var r=n[i];0!==a[r]&&(c=!1)}c&&(o.splice(e--,1),t=l(l.s=n[0]))}return t}var c={},a={app:0},o=[];function i(t){return l.p+"static/js/"+({about:"about"}[t]||t)+"."+{about:"06ba53a6"}[t]+".js"}function l(e){if(c[e])return c[e].exports;var n=c[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var c=new Promise((function(e,c){n=a[t]=[e,c]}));e.push(n[2]=c);var o,r=document.createElement("script");r.charset="utf-8",r.timeout=120,l.nc&&r.setAttribute("nonce",l.nc),r.src=i(t);var u=new Error;o=function(e){r.onerror=r.onload=null,clearTimeout(b);var n=a[t];if(0!==n){if(n){var c=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+c+": "+o+")",u.name="ChunkLoadError",u.type=c,u.request=o,n[1](u)}a[t]=void 0}};var b=setTimeout((function(){o({type:"timeout",target:r})}),12e4);r.onerror=r.onload=o,document.head.appendChild(r)}return Promise.all(e)},l.m=t,l.c=c,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)l.d(n,c,function(e){return t[e]}.bind(null,c));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="",l.oe=function(t){throw console.error(t),t};var r=window["webpackJsonp"]=window["webpackJsonp"]||[],u=r.push.bind(r);r.push=e,r=r.slice();for(var b=0;b<r.length;b++)e(r[b]);var s=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"185a":function(t,e,n){"use strict";var c=n("7a23"),a={class:"container mx-auto box-border m-10"};function o(t,e,n,o,i,l){return Object(c["u"])(),Object(c["g"])("div",a,[Object(c["z"])(t.$slots,"default")])}var i={name:"Container"},l=n("6b0d"),r=n.n(l);const u=r()(i,[["render",o]]);e["a"]=u},"1f35":function(t){t.exports=JSON.parse('{"navbar":{"home":"首頁","about":"關於我們","info":"本隊資訊","result":"競賽成績","event_list":"賽事列表","nfac":"新生盃","niac":"系際盃","chcw":"正興城灣盃","recruit":"招募資訊"}}')},"1ffb":function(t,e,n){"use strict";n("3e23")},"3e23":function(t,e,n){},"4bbe":function(t){t.exports=JSON.parse('{"navbar":{"home":"ホーム","about":"部紹介","info":"インフォ","result":"競技結果報告","event_list":"大会情報","nfac":"フレッシュマンカップ","niac":"学部間陸上競技交流大会","chcw":"正興城湾カップ","recruit":"入部案内"}}')},"669b":function(t){t.exports=JSON.parse('{"navbar":{"home":"Home","about":"About","info":"NSYSUA","result":"Results","event_list":"Event List","nfac":"NFAC","niac":"NIAC","chcw":"CHCW","recruit":"Join us"}}')},"80df":function(t,e,n){"use strict";n("afed")},a766:function(t,e,n){},afed:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23");function a(t,e,n,a,o,i){var l=Object(c["A"])("Navbar"),r=Object(c["A"])("router-view"),u=Object(c["A"])("Footer");return Object(c["u"])(),Object(c["g"])(c["a"],null,[Object(c["j"])(l),Object(c["h"])("div",null,[Object(c["j"])(r)]),Object(c["j"])(u)],64)}var o=n("f3ae"),i=n.n(o),l={class:"sticky top-0 z-10 w-full bg-yellow-600 flex flex-row justify-between justify-items-stretch text-white p-5 shadow"},r={class:"flex justify-items-stretch"},u=Object(c["h"])("img",{src:i.a,class:"h-14 inline-block"},null,-1),b={key:0,class:"mx-3 text-2xl text-white font-bold"},s={key:1,class:"mx-3 text-2xl text-white font-bold"},j=Object(c["h"])("div",{class:"mx-3 text-sm text-white font-medium"},"National Sun Yat-sen University Athletics Team",-1),d=Object(c["h"])("div",{class:"flex-grow"},null,-1),f={class:"hidden lg:inline-block text-center text-2xl links font-medium"},O={class:"relative inline-block"},h={class:"absolute bg-yellow-600 text-white top-20 right-0 p-5 rounded shadow duration-300",style:{width:"max-content"}},v={class:"relative inline-block"},p={class:"absolute bg-yellow-600 text-white top-20 right-0 p-5 rounded shadow duration-300",style:{width:"max-content"}},g={class:"relative inline-block"},_=Object(c["h"])("i",{class:"fas fa-globe"},null,-1),m=[_],w={class:"absolute bg-yellow-600 text-white w-auto right-0 top-20 p-5 rounded shadow duration-300",style:{width:"max-content"}},x={class:Object(c["p"])({"inline-block":!0,"lg:hidden":!0,"text-center":!0,"text-3xl":!0,"font-bold":!0,"m-auto":!0})},k=Object(c["h"])("i",{class:"fas fa-bars"},null,-1),y=[k],C={key:0,class:"block lg:hidden h-full w-full fixed z-10 top-0 left-0 bg-black opacity-80 overflow-x-hidden"},S=Object(c["h"])("i",{class:"fal fa-times"},null,-1),H=[S],A={class:"block lg:hidden text-center text-4xl font-cwt font-bold text-white links",style:{margin:"100px auto"}};function N(t,e,n,a,o,i){var _=Object(c["A"])("router-link");return Object(c["u"])(),Object(c["g"])(c["a"],null,[Object(c["h"])("div",l,[Object(c["j"])(_,{to:"/"},{default:Object(c["H"])((function(){return[Object(c["h"])("div",r,[u,Object(c["h"])("div",null,["ja_JP"!=a.lang_code?(Object(c["u"])(),Object(c["g"])("div",b,"國立中山大學田徑校隊")):(Object(c["u"])(),Object(c["g"])("div",s,"国立中山大学陸上競技部")),j])])]})),_:1}),d,Object(c["h"])("div",f,[Object(c["j"])(_,{to:"/"},{default:Object(c["H"])((function(){return[Object(c["i"])(Object(c["C"])(a.lang_dict.navbar.home),1)]})),_:1}),Object(c["h"])("div",O,[Object(c["h"])("a",{onClick:e[0]||(e[0]=function(t){return a.sub_nav=1==a.sub_nav?0:1})},Object(c["C"])(a.lang_dict.navbar.event_list),1),Object(c["I"])(Object(c["h"])("div",h,[Object(c["j"])(_,{class:"block",onClick:e[1]||(e[1]=function(t){return a.sub_nav=0}),to:""},{default:Object(c["H"])((function(){return[Object(c["i"])(Object(c["C"])(a.lang_dict.navbar.nfac),1)]})),_:1}),Object(c["j"])(_,{class:"block",onClick:e[2]||(e[2]=function(t){return a.sub_nav=0}),to:""},{default:Object(c["H"])((function(){return[Object(c["i"])(Object(c["C"])(a.lang_dict.navbar.niac),1)]})),_:1}),Object(c["j"])(_,{class:"block",onClick:e[3]||(e[3]=function(t){return a.sub_nav=0}),to:""},{default:Object(c["H"])((function(){return[Object(c["i"])(Object(c["C"])(a.lang_dict.navbar.chcw),1)]})),_:1})],512),[[c["E"],1==a.sub_nav]])]),Object(c["h"])("div",v,[Object(c["h"])("a",{onClick:e[4]||(e[4]=function(t){return a.sub_nav=2==a.sub_nav?0:2})},Object(c["C"])(a.lang_dict.navbar.info),1),Object(c["I"])(Object(c["h"])("div",p,[Object(c["j"])(_,{class:"block",onClick:e[5]||(e[5]=function(t){return a.sub_nav=0}),to:"/about"},{default:Object(c["H"])((function(){return[Object(c["i"])(Object(c["C"])(a.lang_dict.navbar.about),1)]})),_:1}),Object(c["j"])(_,{class:"block",onClick:e[6]||(e[6]=function(t){return a.sub_nav=0}),to:""},{default:Object(c["H"])((function(){return[Object(c["i"])(Object(c["C"])(a.lang_dict.navbar.result),1)]})),_:1})],512),[[c["E"],2==a.sub_nav]])]),Object(c["j"])(_,{to:""},{default:Object(c["H"])((function(){return[Object(c["i"])(Object(c["C"])(a.lang_dict.navbar.recruit),1)]})),_:1}),Object(c["h"])("div",g,[Object(c["h"])("a",{onClick:e[7]||(e[7]=function(t){return a.sub_nav=3==a.sub_nav?0:3})},m),Object(c["I"])(Object(c["h"])("div",w,[Object(c["h"])("a",{class:"block",onClick:e[8]||(e[8]=function(t){return a.lang_code="en_US"})},"English"),Object(c["h"])("a",{class:"block",onClick:e[9]||(e[9]=function(t){return a.lang_code="zh_TW"})},"中文"),Object(c["h"])("a",{class:"block",onClick:e[10]||(e[10]=function(t){return a.lang_code="ja_JP"})},"日本語")],512),[[c["E"],3==a.sub_nav]])])]),Object(c["h"])("div",x,[Object(c["h"])("a",{onClick:e[11]||(e[11]=function(){return a.mobileNav&&a.mobileNav.apply(a,arguments)})},y)])]),Object(c["j"])(c["b"],{name:"slide-fade"},{default:Object(c["H"])((function(){return[a.mobile_nav_open?(Object(c["u"])(),Object(c["g"])("div",C,[Object(c["h"])("a",{onClick:e[12]||(e[12]=function(t){return a.mobile_nav_open=!1}),class:"text-5xl text-white block float-right mt-10 mr-10"},H),Object(c["h"])("div",A,[Object(c["j"])(_,{onClick:e[13]||(e[13]=function(t){return a.mobile_nav_open=!1}),to:"/"},{default:Object(c["H"])((function(){return[Object(c["i"])(Object(c["C"])(a.lang_dict.navbar.home),1)]})),_:1}),Object(c["j"])(_,{onClick:e[14]||(e[14]=function(t){return a.mobile_nav_open=!1}),to:""},{default:Object(c["H"])((function(){return[Object(c["i"])(Object(c["C"])(a.lang_dict.navbar.nfac),1)]})),_:1}),Object(c["j"])(_,{onClick:e[15]||(e[15]=function(t){return a.mobile_nav_open=!1}),to:""},{default:Object(c["H"])((function(){return[Object(c["i"])(Object(c["C"])(a.lang_dict.navbar.niac),1)]})),_:1}),Object(c["j"])(_,{onClick:e[16]||(e[16]=function(t){return a.mobile_nav_open=!1}),to:""},{default:Object(c["H"])((function(){return[Object(c["i"])(Object(c["C"])(a.lang_dict.navbar.chcw),1)]})),_:1}),Object(c["j"])(_,{onClick:e[17]||(e[17]=function(t){return a.mobile_nav_open=!1}),to:"/about"},{default:Object(c["H"])((function(){return[Object(c["i"])(Object(c["C"])(a.lang_dict.navbar.about),1)]})),_:1}),Object(c["j"])(_,{onClick:e[18]||(e[18]=function(t){return a.mobile_nav_open=!1}),to:""},{default:Object(c["H"])((function(){return[Object(c["i"])(Object(c["C"])(a.lang_dict.navbar.result),1)]})),_:1}),Object(c["j"])(_,{onClick:e[19]||(e[19]=function(t){return a.mobile_nav_open=!1}),to:""},{default:Object(c["H"])((function(){return[Object(c["i"])(Object(c["C"])(a.lang_dict.navbar.recruit),1)]})),_:1}),Object(c["h"])("a",{onClick:e[20]||(e[20]=function(t){return a.lang_code="en_US"})},"English"),Object(c["h"])("a",{onClick:e[21]||(e[21]=function(t){return a.lang_code="zh_TW"})},"中文"),Object(c["h"])("a",{onClick:e[22]||(e[22]=function(t){return a.lang_code="ja_JP"})},"日本語")])])):Object(c["f"])("",!0)]})),_:1})],64)}var P=n("1f35"),J=n("669b"),T=n("4bbe"),U=function(t){switch(t){case"en_US":return J;case"zh_TW":return P;case"ja_JP":return T}},W=n("5502"),E={name:"Navbar",setup:function(){var t=Object(W["b"])(),e=Object(c["x"])(0),n=Object(c["x"])(!1),a=function(){n.value=!n.value},o=Object(c["x"])(t.state.lang_code),i=Object(c["x"])(U(o.value));return Object(c["F"])(o,(function(){i.value=U(o.value),t.commit("changeLang",o.value),e.value=0})),{lang_dict:i,lang_code:o,mobile_nav_open:n,mobileNav:a,sub_nav:e}}},z=(n("80df"),n("6b0d")),Y=n.n(z);const F=Y()(E,[["render",N]]);var L=F,q={class:"bg-yellow-600 text-left p-10"},D={class:"mx-auto w-full grid grid-cols-1 lg:grid-cols-3 items-stretch justify-items-center text-white"},I={class:"m-2 w-full flex flex-row justify-items-center content-center items-center"},M=Object(c["h"])("img",{src:i.a,class:"inline-block h-16"},null,-1),R={class:"ml-5"},K={key:0,class:"text-2xl font-bold"},$={key:1,class:"text-2xl font-bold"},B=Object(c["h"])("div",{class:"text-xs"},"National Sun Yat-sen University Athletics Team",-1),G={class:"m-2 block w-full"},Q={key:0},V=Object(c["i"])("804 高雄市鼓山區蓮海路70號"),X=Object(c["h"])("br",null,null,-1),Z=Object(c["i"])("中山大學田徑場西南側"),tt=[V,X,Z],et={key:1},nt=Object(c["i"])("National Sun Yat-sen University"),ct=Object(c["h"])("br",null,null,-1),at=Object(c["i"])(" No.70 Lianhai Rd., Kaohsiung City 804, Taiwan"),ot=[nt,ct,at],it={key:2},lt=Object(c["i"])("804 高雄市鼓山区蓮海路70号"),rt=Object(c["h"])("br",null,null,-1),ut=Object(c["i"])("中山大学トラックより南西側"),bt=[lt,rt,ut],st=Object(c["h"])("div",null,"(07)525-2000",-1),jt={class:"m-2 block w-full text-6xl"};function dt(t,e,n,a,o,i){return Object(c["u"])(),Object(c["g"])("div",q,[Object(c["h"])("div",D,[Object(c["h"])("div",I,[M,Object(c["h"])("div",R,["ja_JP"!=a.lang_code?(Object(c["u"])(),Object(c["g"])("div",K,"國立中山大學田徑校隊")):(Object(c["u"])(),Object(c["g"])("div",$,"国立中山大学陸上競技部")),B])]),Object(c["h"])("div",G,["zh_TW"==a.lang_code?(Object(c["u"])(),Object(c["g"])("div",Q,tt)):Object(c["f"])("",!0),"en_US"==a.lang_code?(Object(c["u"])(),Object(c["g"])("div",et,ot)):Object(c["f"])("",!0),"ja_JP"==a.lang_code?(Object(c["u"])(),Object(c["g"])("div",it,bt)):Object(c["f"])("",!0),st]),Object(c["h"])("div",jt,[Object(c["h"])("i",{class:"mr-5 fab fa-facebook-square cursor-pointer",onClick:e[0]||(e[0]=function(t){return a.newWindow("https://www.facebook.com/NSYSUAthletics")})}),Object(c["h"])("i",{class:"mr-5 fab fa-instagram cursor-pointer",onClick:e[1]||(e[1]=function(t){return a.newWindow("https://www.instagram.com/nsysu_athletics/")})}),Object(c["h"])("i",{class:"mr-5 fas fa-envelope-square cursor-pointer",onClick:e[2]||(e[2]=function(t){return a.newWindow("")})})])])])}var ft={name:"Footer",setup:function(){var t=Object(W["b"])();function e(t){window.open(t)}return{lang_code:Object(c["c"])((function(){return t.state.lang_code})),newWindow:e}}};const Ot=Y()(ft,[["render",dt]]);var ht=Ot,vt={name:"App",components:{Navbar:L,Footer:ht}};const pt=Y()(vt,[["render",a]]);var gt=pt,_t=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),mt=Object(c["h"])("div",{class:"grid grid-cols-1 lg:grid-cols-3 gap-4"},[Object(c["h"])("div",{class:"col-span-1 lg:col-span-2"},[Object(c["h"])("div",{class:"text-2xl"},"最新消息"),Object(c["h"])("hr"),Object(c["h"])("div",{class:"p-2 flex hover:bg-yellow-50 cursor-pointer items-center"},[Object(c["h"])("div",{class:"inline-block",style:{"white-space":"nowrap"}},[Object(c["h"])("div",{class:"py-0.5 px-1 border-2 border-yellow-600 text-yellow-600 rounded"},"類別")]),Object(c["h"])("div",{class:"inline-block ml-2",style:{"white-space":"nowrap"}},"0000-00-00"),Object(c["h"])("div",{class:"inline-block ml-0 lg:ml-2"},"公告內容")]),Object(c["h"])("hr",{class:"mx-2"}),Object(c["h"])("template")]),Object(c["h"])("div",null,[Object(c["h"])("div",{class:"text-2xl"},"Facebook 動態"),Object(c["h"])("hr"),Object(c["h"])("div",{class:"fb-page","data-href":"https://www.facebook.com/NSYSUAthletics","data-tabs":"timeline","data-width":"","data-height":"","data-small-header":"true","data-adapt-container-width":"true","data-hide-cover":"false","data-show-facepile":"true"},[Object(c["h"])("blockquote",{cite:"https://www.facebook.com/NSYSUAthletics",class:"fb-xfbml-parse-ignore"},[Object(c["h"])("a",{href:"https://www.facebook.com/NSYSUAthletics"},"國立中山大學田徑校隊")])])])],-1);function wt(t,e,n,a,o,i){var l=Object(c["A"])("SlideShow"),r=Object(c["A"])("Container");return Object(c["u"])(),Object(c["g"])(c["a"],null,[Object(c["j"])(l,{"slide-Data":t.slide_data},null,8,["slide-Data"]),Object(c["j"])(r,{class:"text-gray-700"},{default:Object(c["H"])((function(){return[mt]})),_:1})],64)}var xt={class:"carousel__item"},kt=["src"];function yt(t,e,n,a,o,i){var l=Object(c["A"])("Slide"),r=Object(c["A"])("Pagination"),u=Object(c["A"])("Carousel");return Object(c["u"])(),Object(c["e"])(u,{autoplay:3e3,"wrap-around":!0},{addons:Object(c["H"])((function(){return[Object(c["j"])(r)]})),default:Object(c["H"])((function(){return[(Object(c["u"])(!0),Object(c["g"])(c["a"],null,Object(c["y"])(t.slideData,(function(t){return Object(c["u"])(),Object(c["e"])(l,{key:t},{default:Object(c["H"])((function(){return[Object(c["h"])("div",xt,[Object(c["h"])("img",{class:"block",style:{width:"100%",height:"500px","object-position":"center, center","object-fit":"cover"},src:t},null,8,kt)])]})),_:2},1024)})),128))]})),_:1})}n("4001");var Ct=n("0b81"),St=Object(c["k"])({name:"SlideShow",props:["slideData"],components:{Carousel:Ct["a"],Slide:Ct["c"],Pagination:Ct["b"]}});n("1ffb");const Ht=Y()(St,[["render",yt]]);var At=Ht,Nt=n("185a"),Pt=Object(c["k"])({name:"Home",setup:function(){var t=["https://ryanxuan930.github.io/cdn/nsysu_athletics/slideshow/01.jpg","https://ryanxuan930.github.io/cdn/nsysu_athletics/slideshow/02.jpg","https://ryanxuan930.github.io/cdn/nsysu_athletics/slideshow/03.jpg","https://ryanxuan930.github.io/cdn/nsysu_athletics/slideshow/04.jpg","https://ryanxuan930.github.io/cdn/nsysu_athletics/slideshow/05.jpg","https://ryanxuan930.github.io/cdn/nsysu_athletics/slideshow/06.jpg","https://ryanxuan930.github.io/cdn/nsysu_athletics/slideshow/07.jpg"];return{slide_data:t}},components:{SlideShow:At,Container:Nt["a"]}});const Jt=Y()(Pt,[["render",wt]]);var Tt=Jt,Ut=[{path:"/",name:"Home",component:Tt},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],Wt=Object(_t["a"])({history:Object(_t["b"])(""),routes:Ut}),Et=Wt,zt=Object(W["a"])({state:{lang_code:"zh_TW"},mutations:{changeLang:function(t,e){t.lang_code=e}},actions:{},modules:{}});n("a766");Object(c["d"])(gt).use(zt).use(Et).mount("#app")},f3ae:function(t,e,n){t.exports=n.p+"static/img/logo_no_bg_white.4f65630c.png"}});
//# sourceMappingURL=app.eaea3632.js.map