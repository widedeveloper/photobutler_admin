webpackJsonp([1],{EmWy:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),n=i("fZjL"),o=i.n(n),a=i("zBcb"),r=i("mtWM"),l=i.n(r),d="JSON_GET",h="CONFIG_GET";var g={name:"app",data:function(){return{}},created:function(){this.addTipstorJson(),this.addStoreJson()},methods:{addStoreJson:function(){var t=this,e=this.$route.params.id;l.a.get("/app/ajax.php?method=getjson&param="+e).then(function(e){"noStream"!=e.data?t.$store.dispatch((i=e.data,{type:d,value:{images:i}})):setTimeout(t.addStoreJson,1e4);var i}).catch(function(t){console.log("PhotoStreamError",t)}),setTimeout(this.addStoreJson,1e5)},addTipstorJson:function(){var t=this,e=this.$route.params.id;l.a.get("/app/ajax.php?method=tipjson&param="+e).then(function(e){"noConfig"!=e.data?t.$store.dispatch((i=e.data,{type:h,value:{tipcontents:i.tipcontents,title:i.title,subtitle:i.subtitle,imgUrl:i.imageUrl,sidebarSetting:i.sidebarSetting,logoSetting:i.logoSetting,bottombarSetting:i.bottombarSetting,prebarSetting:i.preimageSetting}})):location.href="http://"+window.location.hostname+"/error.html";var i}).catch(function(t){console.log("TipContenterror",t)})}},checkparam:function(){if(o()(this.$route.params).length>0)var t=this.$route.params.id;else t="nokey";return t},redirectRouter:function(t){}},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var m=i("VU/8")(g,u,!1,function(t){i("EmWy")},null,null).exports,c=i("/ocq"),p={data:function(){return{}},props:["slide","animate","zIndex","sidebarMode"],updated:function(){},methods:{onload:function(t,e){var i=t.currentTarget;if("static"==this.sidebarMode)var s=window.innerHeight,n=window.innerWidth-300;else s=window.innerHeight,n=window.innerWidth;var o=i.naturalWidth,a=i.naturalHeight,r=this.scaleImage(o,a,n,s);i.style.width=r.width+"px",i.style.height=r.height+"px",i.style.top=r.targettop+"px",i.style.left=r.targetleft+"px";var l=i.parentNode;l.style.position="absolute",l.style.width=n+"px",l.style.height=s+"px",l.style.background="black"},scaleImage:function(t,e,i,s){var n={width:0,height:0,targetleft:0,targettop:0,portrait:!1};return t/e>i/s?(n.width=t*s/e,n.height=s):t>e?(n.width=i,n.height=e*i/t):(n.width=t*(s-100)/e,n.height=s-100,n.portrait=!0),n.targetleft=(i-n.width)/2,n.targettop=(s-n.height)/2,n}}},b={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{style:{"z-index":t.zIndex}},[i("img",{class:t.animate,attrs:{src:t.slide.src},on:{load:function(e){t.onload(e,t.zIndex)}}})])},staticRenderFns:[]};i("VU/8")(p,b,!1,function(t){i("qrT9")},null,null).exports;var f,v=i("bOdI"),I=i.n(v),y=i("6B26"),w=i("SEI3"),T=(f={name:"mt-swipe",data:function(){return{slideTips:{},totalCount:0}},beforeCreate:function(){var t=this;this.$store.subscribe(function(){var e=t.$store.getState().jsonStore.tipData;o()(e).length>0&&(t.slideTips=e,t.totalCount=e.length)})},created:function(){this.slideTips={},this.dragState={}},updated:function(){if(o()(this.slideTips).length>0){var t=document.querySelectorAll(".mint-swipe-indicator.is-active");if(t.length>0){for(var e=0;e<document.querySelectorAll(".mint-swipe-indicator").length;e++)document.querySelectorAll(".mint-swipe-indicator")[e].style.border="";t[0].style.borderColor=this.slideTips.sidebarSetting.indicatorColor,t[0].style.borderStyle="solid",t[0].style.borderWidth="2px"}}}},I()(f,"data",function(){return{ready:!1,dragging:!1,userScrolling:!1,animating:!1,index:0,pages:[],timer:null,reInitTimer:null,noDrag:!1}}),I()(f,"props",{speed:{type:Number,default:300},defaultIndex:{type:Number,default:0},disabled:{type:Boolean,default:!1},auto:{type:Number,default:3e3},continuous:{type:Boolean,default:!0},showIndicators:{type:Boolean,default:!0},noDragWhenSingle:{type:Boolean,default:!0},prevent:{type:Boolean,default:!1},propagation:{type:Boolean,default:!1}}),I()(f,"methods",{swipeItemCreated:function(){var t=this;this.ready&&(clearTimeout(this.reInitTimer),this.reInitTimer=setTimeout(function(){t.reInitPages()},100))},swipeItemDestroyed:function(){var t=this;this.ready&&(clearTimeout(this.reInitTimer),this.reInitTimer=setTimeout(function(){t.reInitPages()},100))},translate:function(t,e,i,s){var n=this,o=arguments;if(i){this.animating=!0,t.style.webkitTransition="-webkit-transform "+i+"ms ease-in-out",setTimeout(function(){t.style.webkitTransform="translate3d("+e+"px, 0, 0)"},50);var a=!1,r=function(){a||(a=!0,n.animating=!1,t.style.webkitTransition="",t.style.webkitTransform="",s&&s.apply(n,o))};Object(y.once)(t,"webkitTransitionEnd",r),setTimeout(r,i+100)}else t.style.webkitTransition="",t.style.webkitTransform="translate3d("+e+"px, 0, 0)"},reInitPages:function(){var t=this,e=this.$children;this.noDrag=1===e.length&&this.noDragWhenSingle;var i=[];this.index=this.defaultIndex,e.forEach(function(e,s){i.push(e.$el),Object(w.removeClass)(e.$el,"is-active"),s===t.defaultIndex&&Object(w.addClass)(e.$el,"is-active")}),this.pages=i},doAnimate:function(t,e){var i=this;if(0!==this.$children.length&&(e||!(this.$children.length<2))){for(var s,n,o,a,r,l=this.speed||300,d=this.index,h=this.pages,g=h.length,u=document.getElementsByClassName("mint-swipe-indicator"),m=0;m<u.length;m++)Object(w.removeClass)(u[m],"is-active");d==this.totalCount-1?Object(w.addClass)(u[0],"is-active"):Object(w.addClass)(u[d+1],"is-active"),e&&"goto"!==t?(s=e.prevPage,o=e.currentPage,n=e.nextPage,a=e.pageWidth,r=e.offsetLeft):(e=e||{},a=this.$el.clientWidth,o=h[d],"goto"===t?(s=e.prevPage,n=e.nextPage):(s=h[d-1],n=h[d+1]),this.continuous&&h.length>1&&(s||(s=h[h.length-1]),n||(n=h[0])),s&&(s.style.display="block",this.translate(s,-a)),n&&(n.style.display="block",this.translate(n,a)));var c,p=this.$children[d].$el;"prev"===t?(d>0&&(c=d-1),this.continuous&&0===d&&(c=g-1)):"next"===t?(d<g-1&&(c=d+1),this.continuous&&d===g-1&&(c=0)):"goto"===t&&e.newIndex>-1&&e.newIndex<g&&(c=e.newIndex);var b=function(){if(void 0!==c){var t=i.$children[c].$el;Object(w.removeClass)(p,"is-active"),Object(w.addClass)(t,"is-active"),i.index=c,i.$emit("change",c,d)}s&&(s.style.display=""),n&&(n.style.display="")};setTimeout(function(){"next"===t?(i.translate(o,-a,l,b),n&&i.translate(n,0,l)):"prev"===t?(i.translate(o,a,l,b),s&&i.translate(s,0,l)):"goto"===t?s?(i.translate(o,a,l,b),i.translate(s,0,l)):n&&(i.translate(o,-a,l,b),i.translate(n,0,l)):(i.translate(o,0,l,b),void 0!==r?(s&&r>0&&i.translate(s,-1*a,l),n&&r<0&&i.translate(n,a,l)):(s&&i.translate(s,-1*a,l),n&&i.translate(n,a,l)))},10)}},next:function(){this.doAnimate("next")},prev:function(){this.doAnimate("prev")},goto:function(t){this.index!==t&&(t<this.index?this.doAnimate("goto",{newIndex:t,prevPage:this.pages[t]}):this.doAnimate("goto",{newIndex:t,nextPage:this.pages[t]}))},doOnTouchStart:function(t){if(!this.noDrag&&!this.disabled){var e=this.$el,i=this.dragState,s=t.changedTouches?t.changedTouches[0]:t;i.startTime=new Date,i.startLeft=s.pageX,i.startTop=s.pageY,i.startTopAbsolute=s.clientY,i.pageWidth=e.offsetWidth,i.pageHeight=e.offsetHeight;var n=this.$children[this.index-1],o=this.$children[this.index],a=this.$children[this.index+1];this.continuous&&this.pages.length>1&&(n||(n=this.$children[this.$children.length-1]),a||(a=this.$children[0])),i.prevPage=n?n.$el:null,i.dragPage=o?o.$el:null,i.nextPage=a?a.$el:null,i.prevPage&&(i.prevPage.style.display="block"),i.nextPage&&(i.nextPage.style.display="block")}},doOnTouchMove:function(t){if(!this.noDrag&&!this.disabled){var e=this.dragState,i=t.changedTouches?t.changedTouches[0]:t;e.currentLeft=i.pageX,e.currentTop=i.pageY,e.currentTopAbsolute=i.clientY;var s=e.currentLeft-e.startLeft,n=e.currentTopAbsolute-e.startTopAbsolute,o=Math.abs(s),a=Math.abs(n);if(o<5||o>=5&&a>=1.73*o)this.userScrolling=!0;else{this.userScrolling=!1,t.preventDefault();var r=(s=Math.min(Math.max(1-e.pageWidth,s),e.pageWidth-1))<0?"next":"prev";e.prevPage&&"prev"===r&&this.translate(e.prevPage,s-e.pageWidth),this.translate(e.dragPage,s),e.nextPage&&"next"===r&&this.translate(e.nextPage,s+e.pageWidth)}}},doOnTouchEnd:function(){if(!this.noDrag&&!this.disabled){var t=this.dragState,e=new Date-t.startTime,i=null,s=t.currentLeft-t.startLeft,n=t.currentTop-t.startTop,o=t.pageWidth,a=this.index,r=this.pages.length;if(e<300){var l=Math.abs(s)<5&&Math.abs(n)<5;(isNaN(s)||isNaN(n))&&(l=!0),l&&this.$children[this.index].$emit("tap")}e<300&&void 0===t.currentLeft||((e<300||Math.abs(s)>o/2)&&(i=s<0?"next":"prev"),this.continuous||(0===a&&"prev"===i||a===r-1&&"next"===i)&&(i=null),this.$children.length<2&&(i=null),this.doAnimate(i,{offsetLeft:s,pageWidth:t.pageWidth,prevPage:t.prevPage,currentPage:t.dragPage,nextPage:t.nextPage}),this.dragState={})}},dragStartEvent:function(t){this.prevent&&t.preventDefault(),this.animating||(this.dragging=!0,this.userScrolling=!1,this.doOnTouchStart(t))},dragMoveEvent:function(t){this.dragging&&this.doOnTouchMove(t)},dragEndEvent:function(t){if(this.userScrolling)return this.dragging=!1,void(this.dragState={});this.dragging&&(this.doOnTouchEnd(t),this.dragging=!1)}}),I()(f,"destroyed",function(){this.timer&&(clearInterval(this.timer),this.timer=null),this.reInitTimer&&(clearTimeout(this.reInitTimer),this.reInitTimer=null)}),I()(f,"mounted",function(){var t=this;this.ready=!0,this.auto>0&&(this.timer=setInterval(function(){t.dragging||t.animating||t.next()},this.auto)),this.reInitPages();var e=this.$el;e.addEventListener("touchstart",function(e){t.prevent&&e.preventDefault(),t.propagation&&e.stopPropagation(),t.animating||(t.dragging=!0,t.userScrolling=!1,t.doOnTouchStart(e))}),e.addEventListener("touchmove",function(e){t.dragging&&t.doOnTouchMove(e)}),e.addEventListener("touchend",function(e){if(t.userScrolling)return t.dragging=!1,void(t.dragState={});t.dragging&&(t.doOnTouchEnd(e),t.dragging=!1)}),e.addEventListener("touchstart",this.dragStartEvent),e.addEventListener("touchmove",this.dragMoveEvent),e.addEventListener("touchend",this.dragEndEvent),e.addEventListener("mousedown",this.dragStartEvent),e.addEventListener("mousemove",this.dragMoveEvent),e.addEventListener("mouseup",this.dragEndEvent)}),f),S={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mint-swipe"},[i("div",{ref:"wrap",staticClass:"mint-swipe-items-wrap"},[t._t("default")],2),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.showIndicators,expression:"showIndicators"}],staticClass:"mint-swipe-indicators"},t._l(t.pages,function(e,s){return i("div",{key:s,staticClass:"mint-swipe-indicator",class:{"is-active":s==t.index}},[t._v(t._s(s+1))])}))])},staticRenderFns:[]};var x=i("VU/8")(T,S,!1,function(t){i("ifsq")},null,null).exports,C={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"mint-swipe-item"},[this._t("default")],2)},staticRenderFns:[]},E=i("VU/8")({name:"mt-swipe-item",mounted:function(){this.$parent&&this.$parent.swipeItemCreated(this)},destroyed:function(){this.$parent&&this.$parent.swipeItemDestroyed(this)}},C,!1,null,null,null).exports,B={data:function(){return{swipeOption:{startSlide:0,auto:6e3,speed:700}}},render:function(){var t=arguments[0];return t(x,{class:"my-swipe",attrs:{speed:this.swipeOption.speed,auto:this.swipeOption.auto}},[this.items.map(function(e,i){return t(E,{class:"tipItem"},[e])})])},props:["items","status"],mounted:function(){this.getFullHeight(),window.addEventListener("resize",this.getFullHeight)},methods:{getFullHeight:function(){console.log("resizing");var t=window.innerHeight,e=window.innerWidth,i=(document.getElementById("tiparea").clientWidth,document.getElementsByClassName("mint-swipe")[0]),s=document.getElementsByClassName("image-container")[0],n=document.getElementsByClassName("Tiptitle")[0];document.getElementById("photoarea").style.height=t+"px",document.getElementById("tiparea").style.height=t+"px";document.getElementsByClassName("logoImage")[0];i.style.height=e<441?t-s.clientHeight-n.clientHeight-30+"px":e>=441&&e<768?t-s.clientHeight-n.clientHeight-20+"px":t-s.clientHeight-n.clientHeight-70+"px"}}};var O=i("VU/8")(B,null,!1,function(t){i("g8lV")},null,null).exports,$=i("7QTg"),N=i.n($);function W(t,e){return t.classList?t.classList.contains(e):!!t.className.match(new RegExp("(\\s|^)"+e+"(\\s|$)"))}function k(t,e){t.classList?t.classList.add(e):W(t,e)||(t.className+=" "+e)}function P(t,e){if(t.classList)t.classList.remove(e);else if(W(t,e)){var i=new RegExp("(\\s|^)"+e+"(\\s|$)");t.className=t.className.replace(i," ")}}i("Boql");s.a.use(N.a);var M={data:function(){return{swiperOption:{slidesPerView:9,spaceBetween:20,loop:!0,slidePerGroup:1},slidepreImgs:[],tempDom:[]}},props:["currentNumber"],watch:{currentNumber:function(t,e){var i=[],s=[];if(this.slidepreImgs.length>0){for(var n=document.getElementsByClassName("prelist")[0].clientWidth/9,o=document.getElementsByClassName("prelist")[0].clientHeight,a=this.currentNumber+1;a<this.currentNumber+10;a++)s[a]=this.slidepreImgs[Math.abs(a)%this.slidepreImgs.length];var r=this;s.map(function(t,e){var s=new Image;s.src=t,s.style.position="absolute",s.style.zIndex="10000",s.onload=function(){var t=s.naturalWidth,e=s.naturalHeight,a=r.scaleImage(t,e,n,o);s.style.width=a.width+"px",s.style.height=a.height+"px",s.style.top=a.targettop+"px",s.style.left=a.targetleft+"px";var l=document.createElement("div");l.style.background="#000000",l.style.position="relative",l.style.width=n-5+"px",l.style.height=o+"px",l.setAttribute("class","animated slideInRight"),l.appendChild(s),i.push(l)}}),this.tempDom=i}}},methods:{scaleImage:function(t,e,i,s){var n={width:0,height:0,targetleft:0,targettop:0,portrait:!1};return t/e>i/s?(n.width=t*s/e,n.height=s):t>e?(n.width=i,n.height=e*i/t):(n.width=t*s/e,n.height=s,n.portrait=!0),n.targetleft=(i-n.width)/2,n.targettop=(s-n.height)/2,n}},beforeCreate:function(){var t=this;this.$store.subscribe(function(){var e=t.$store.getState().jsonStore.photoData;o()(e).length>0&&(t.slidepreImgs=e)})},mounted:function(){}},_={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("swiper",{staticStyle:{height:"100%"},attrs:{options:t.swiperOption}},t._l(t.tempDom,function(e,s){return i("swiper-slide",{key:s,domProps:{innerHTML:t._s(e.outerHTML)}})}))},staticRenderFns:[]},D=i("VU/8")(M,_,!1,null,null,null).exports,L={data:function(){return{}},props:["sidebarStatus","sidebarMode","length"],computed:{winsize:function(){if(0==this.lenght)var t=document.getElementById("tiparea").clientWidth;else t=300;if("on"==this.sidebarStatus)if("static"==this.sidebarMode){var e=window.innerHeight;if(window.innerWidth>441)var i=window.innerWidth-t;else i=window.innerWidth}else e=window.innerHeight,i=window.innerWidth;else e=window.innerHeight,i=window.innerWidth;return{width:i,height:e}}},updated:function(){}},A={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{style:{width:this.winsize.width+"px",height:this.winsize.height+"px"},attrs:{id:"wrap"}},[e("img",{attrs:{id:"branding",src:"/assets/photobutler-logo.png"}})])},staticRenderFns:[]};var H=i("VU/8")(L,A,!1,function(t){i("qCaK")},null,null).exports,U={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"initbottomOut",attrs:{id:"bottomarea"}},[e("div",{staticClass:"bottomImageDiv",style:{"background-color":this.bottomInfo.imgBackgroundColor}},[e("img",{staticClass:"btmImage",attrs:{src:this.bottomInfo.bottomImageUrl}})]),this._v(" "),e("div",{staticClass:"bottomtitle",style:{"background-color":this.bottomInfo.backgroundColor}},[e("div",{staticClass:"bottitle",style:{color:this.bottomInfo.titleColor}},[e("div",{staticClass:"bottitle_text"},[this._v("\n               EVENT SPONSORS:                    \n            ")]),this._v(" "),e("img",{staticClass:"bottitle_img",attrs:{src:"/assets/png1.png"}})]),this._v(" "),e("div",{staticClass:"subtitle",style:{color:this.bottomInfo.subColor}},[e("div",{staticClass:"subtitle_text"},[this._v("\n               EVENT PARTNER: \n            ")]),this._v(" "),e("img",{staticClass:"subtitle_img",attrs:{src:"/assets/png2.png"}})])])])},staticRenderFns:[]};var j=i("VU/8")({data:function(){return{}},props:["slideTips","bottomInfo"],updated:function(){},methods:{}},U,!1,function(t){i("z0Eh")},"data-v-0256c09a",null).exports,z=null;var R={data:function(){return{slideImages:{images:[],preimages:[],loadingFlag:!1,start:!1,currentNumber:0,timer:null,animates:["animated lightSpeedIn","animated fadeInLeft","animated slideInDown","animated zoomIn","animated bounceInRight","animated rotateInUpLeft","animated rollIn ","animated slideInLeft","animated zoomInLeft","animated flipInX","animated slideInUp","animated rotateInDownLeft","animated fadeInRight","animated zoomInDown"],loadDom:"",preloadImages:[]},slideTips:{tipcontents:[],sidebarTitle:"",sidebarSubTitle:"",imgUrl:"",sidebarStatus:"",sidebarMode:"",slidesIn:0,stays:0,slideOutTimer:null,slideInTimer:null,slideStatus:"in",flag:!1,titleColor:"",subColor:"",tipColor:"",bottomBackColor:"",topBackColor:"",logoWidth:""},logoInfo:{logoStatus:"",logoUrl:""},bottomInfo:{bottombarStatus:"",bottomImageUrl:"",imgBackgroundColor:"",titleColor:"",subColor:"",backgroundColor:"",slideStatus:"in",flag:!1},preImagebar:{prebarStatus:""}}},render:function(t){return t("main",{class:"main"},[t("section",{class:"section"},[t("div",{class:"container"},[t("div",{class:"row"},[t("div",{attrs:{id:"photoarea"}},[t("div",{class:"photoslide"},[0==this.slideImages.preimages.length?t(H,{attrs:{sidebarStatus:this.slideTips.sidebarStatus,sidebarMode:this.slideTips.sidebarMode,lengh:this.slideImages.preimages.length}},[]):""]),t("div",{class:"preslide"},[(s=t,n=this.preImagebar,o=this.slideImages,s("div",{class:"prelist",style:{display:"on"==n.prebarStatus?"block":"none"}},[s(D,{attrs:{currentNumber:o.currentNumber}},[])]))])]),t("div",{attrs:{id:"tiparea"},class:"slideInit"},[t("div",{attrs:{id:"slider"}},[t("div",{attrs:{id:"slides"}},[t("div",{attrs:{id:"overflow"}},[t("div",{class:"inner"},[(e=t,i=this.slideTips,e("article",{class:"tipslide"},[e("div",{class:"image-container"},[e("div",{class:"slideToparea",style:{"background-color":i.topBackColor}},[e("div",{class:"sidelogImage"},[e("img",{attrs:{src:i.imgUrl,alt:i.sidebarTitle},style:{width:i.logoWidth+"%"}},[])]),e("div",{class:"sidetitle",style:{color:i.titleColor}},[i.sidebarTitle]),e("div",{class:"subtitle",style:{color:i.subColor}},[i.sidebarSubTitle])])]),e("div",{class:"teaser",style:{"background-color":i.bottomBackColor}},[e("div",{class:"tipConarea"},[e("div",{class:"Tiptitle",style:{color:i.tipColor}},["Tips"]),e("div",{class:"tipcontent",style:{color:i.tipColor}},[e(O,{attrs:{items:i.tipcontents,status:i.slideStatus}},[])])])])]))])])])])]),"8335"==this.$route.params.id?t(j,{attrs:{slideTips:this.slideTips,bottomInfo:this.bottomInfo}},[]):t("div",{attrs:{id:"bottomarea"},class:"initbottomOut"},[t("div",{class:"bottomImageDiv",style:{"background-color":this.bottomInfo.imgBackgroundColor}},[t("img",{class:"btmImage",attrs:{src:this.bottomInfo.bottomImageUrl}},[])]),t("div",{class:"bottomtitle",style:{"background-color":this.bottomInfo.backgroundColor}},[t("div",{class:"bottitle",style:{color:this.bottomInfo.titleColor}},[t("div",{style:"display:table-cell;vertical-align:middle;"},[this.slideTips.sidebarTitle])]),t("div",{class:"subtitle",style:{color:this.bottomInfo.subColor}},[t("div",{style:"display:table-cell;vertical-align:middle;"},[this.slideTips.sidebarSubTitle])])])])])]),t("div",{class:"logo leftbottom logofadeIn",style:{width:window.innerWidth>442?this.logoInfo.mainlogoImgWidth*(window.innerWidth/1636*160)/100+"px":this.logoInfo.mainlogoImgWidth*(window.innerWidth/1636*350)/100+"px"}},[t("img",{class:"logoImage",attrs:{src:this.logoInfo.logoUrl}},[])])])]);var e,i,s,n,o},created:function(){var t=this;this.$store.subscribe(function(){var e=t.$store.getState(),i=e.jsonStore.photoData,s=e.jsonStore.tipData;o()(i).length>0&&(t.slideImages.preimages=i),o()(s).length>0&&(t.slideTips.tipcontents=s.tipcontents,t.slideTips.sidebarTitle=s.sidebarTitle,t.slideTips.sidebarSubTitle=s.sidebarSubTitle,t.slideTips.imgUrl=s.imgUrl,t.slideTips.sidebarStatus=s.sidebarSetting.sideStatus,t.slideTips.sidebarMode=s.sidebarSetting.mode,t.slideTips.slidesIn=s.sidebarSetting.slidesIn,t.slideTips.stays=s.sidebarSetting.stays,t.slideTips.titleColor=s.sidebarSetting.titleColor,t.slideTips.subColor=s.sidebarSetting.subColor,t.slideTips.tipColor=s.sidebarSetting.tipColor,t.slideTips.topBackColor=s.sidebarSetting.topBackColor,t.slideTips.logoWidth=s.sidebarSetting.logoWidth,t.slideTips.bottomBackColor=s.sidebarSetting.bottomBackColor,t.logoInfo.logoStatus=s.logoSetting.logoStatus,t.logoInfo.logoUrl=s.logoSetting.logoUrl,t.logoInfo.mainlogoImgWidth=s.logoSetting.mainlogoImgWidth,t.bottomInfo.bottombarStatus=s.bottombarSetting.bottombarStatus,t.bottomInfo.bottombarMode=s.bottombarSetting.bottombarMode,t.bottomInfo.bottomImageUrl=s.bottombarSetting.bottomUrl,t.bottomInfo.titleColor=s.bottombarSetting.titleColor,t.bottomInfo.subColor=s.bottombarSetting.subColor,t.bottomInfo.imgBackgroundColor=s.bottombarSetting.bottomlogoBackColor,t.bottomInfo.backgroundColor=s.bottombarSetting.backgroundColor,t.preImagebar.prebarStatus=s.prebarSetting.prebarStatus)})},updated:function(){var t=this;0==this.slideImages.preimages.length?this.$store.subscribe(function(){var e=t.$store.getState().jsonStore.photoData;o()(e).length>0&&!t.slideImages.start&&(t.slideImages.preimages=e,t.startAnimation())}):this.slideImages.start||this.startAnimation(),"on"==this.slideTips.sidebarStatus&&"static"==this.slideTips.sidebarMode?this.initSidebar():"on"==this.slideTips.sidebarStatus&&"dynamic"==this.slideTips.sidebarMode?(this.initSidebar(),"in"!=this.slideTips.slideStatus||this.slideTips.flag?"out"==this.slideTips.slideStatus&&this.slideTips.flag&&(this.slideTips.flag=!1,this.slideTips.slideInTimer=setTimeout(this.SlideInAnimation,1e3*this.slideTips.stays)):(this.slideTips.flag=!0,this.slideTips.slideOutTimer=setTimeout(this.SlideOutAnimation,1e3*this.slideTips.slidesIn))):"off"==this.slideTips.sidebarStatus&&("off"==this.bottomInfo.bottombarStatus?this.hiddenSidebar():"on"==this.bottomInfo.bottombarStatus&&"static"==this.bottomInfo.bottombarMode?this.initBottombar():"on"==this.bottomInfo.bottombarStatus&&"dynamic"==this.bottomInfo.bottombarMode&&this.dynmicOnlyBottom())},beforeDestroy:function(){},methods:{startAnimation:function(){this.replacePhotos(),this.slideImages.start=!0,this.slideImages.timer=this.addTimer()},addTimer:function(){this.nextAnimation(),clearTimeout(z),z=setTimeout(this.addTimer,3e3)},replacePhotos:function(){console.log("newstart"),this.slideImages.images=this.slideImages.preimages},scaleImage:function(t,e,i,s){var n={width:0,height:0,targetleft:0,targettop:0,portrait:!1};return t/e>i/s?(n.width=t*s/e,n.height=s):t>e?(n.width=i,n.height=e*i/t):(n.width=t*(s-100)/e,n.height=s-100,n.portrait=!0),n.targetleft=(i-n.width)/2,n.targettop=(s-n.height)/2,n},nextAnimation:function(){this.slideImages.currentNumber%this.slideImages.images.length==0?(this.slideImages.currentNumber+=1,this.replacePhotos()):this.slideImages.currentNumber+=1;var t=new Image,e=this.slideImages.images[Math.abs(this.slideImages.currentNumber)%this.slideImages.images.length];console.log(this.imageExists(e),e),t.src=e,t.setAttribute("class",this.slideImages.animates[Math.abs(this.slideImages.currentNumber)%this.slideImages.animates.length]),t.style.position="absolute";var i=document.getElementsByClassName("photoslide")[0],s=document.getElementById("tiparea").clientWidth,n=document.createElement("div");n.setAttribute("class","parentdiv"),n.appendChild(t);var o=this;t.onload=function(){var e=t;if("on"==o.slideTips.sidebarStatus)if("static"==o.slideTips.sidebarMode)var a=window.innerHeight,r=window.innerWidth-s;else a=window.innerHeight,r=window.innerWidth;else a=window.innerHeight,r=window.innerWidth;var l=e.naturalWidth,d=e.naturalHeight,h=o.scaleImage(l,d,r,a);e.style.width=h.width+"px",e.style.height=h.height+"px",n.style.position="absolute",h.portrait?(n.style.width=r+"px",n.style.height=a+"px",n.style.background="black"):(n.style.width="0px",n.style.height="0px",n.style.background="none"),e.style.top=h.targettop+"px",e.style.left=h.targetleft+"px",i.appendChild(n)};var a=document.getElementsByClassName("parentdiv");a.length>5&&a[0].parentNode.removeChild(a[0])},imageExists:function(t){var e=new XMLHttpRequest;return e.open("HEAD",t,!1),e.send(),e.status},getImageSize:function(){document.getElementsByClassName("container")[0].clientWidth,document.getElementById("photoarea").clientWidth,document.getElementById("tiparea").clientWidth,document.getElementById("slider").clientHeight,window.innerHeight},initSidebar:function(){P(document.getElementById("tiparea"),"slideInit")},hiddenSidebar:function(){k(document.getElementById("tiparea"),"slideInit")},initBottombar:function(){var t=document.getElementById("bottomarea"),e=document.getElementsByClassName("logo")[0];P(t,"bottomOut"),P(t,"initbottomOut"),k(t,"bottomIn"),P(e,"logofadeIn")},SlideOutAnimation:function(){var t=document.getElementById("tiparea");P(t,"slideIn"),k(t,"slideOut"),"on"==this.bottomInfo.bottombarStatus?setTimeout(this.BottomInAnimation,1e3*this.slideTips.stays):this.slideTips.slideStatus="out"},SlideInAnimation:function(){var t=document.getElementById("tiparea");setTimeout(function(){P(t,"slideOut"),k(t,"slideIn")},3e3),this.slideTips.slideStatus="in"},BottomInAnimation:function(){var t=this,e=document.getElementById("bottomarea"),i=document.getElementsByClassName("logo")[0];"on"==this.bottomInfo.bottombarStatus&&(P(i,"logofadeIn"),k(i,"logofadeOut")),setTimeout(function(){"on"==t.bottomInfo.bottombarStatus&&(P(e,"bottomOut"),k(e,"bottomIn"),setTimeout(t.BottomOutAnimation,1e3*t.slideTips.slidesIn)),P(e,"initbottomOut")},3e3)},BottomOutAnimation:function(){var t=this,e=document.getElementById("bottomarea"),i=document.getElementsByClassName("logo")[0];"on"==this.bottomInfo.bottombarStatus&&(P(i,"logofadeIn"),k(i,"logofadeOut"),k(e,"bottomOut"),P(e,"bottomIn")),setTimeout(function(){"on"==t.bottomInfo.bottombarStatus&&(P(i,"topright"),k(i,"leftbottom"),P(i,"logofadeOut"),k(i,"logofadeIn"))},3e3),this.slideTips.slideStatus="out"},dynmicOnlyBottom:function(){var t=this;"in"!=this.bottomInfo.slideStatus||this.bottomInfo.flag?"out"==this.bottomInfo.slideStatus&&this.bottomInfo.flag&&(this.bottomInfo.flag=!1,setTimeout(function(){var e=document.getElementById("bottomarea"),i=document.getElementsByClassName("logo")[0];P(i,"logofadeIn"),k(i,"logofadeOut"),P(e,"bottomOut"),k(e,"bottomIn"),t.bottomInfo.slideStatus="in"},1e3*this.slideTips.stays)):(this.initBottombar(),this.bottomInfo.flag=!0,setTimeout(function(){var e=document.getElementById("bottomarea"),i=document.getElementsByClassName("logo")[0];P(i,"logofadeOut"),k(i,"logofadeIn"),P(e,"bottomIn"),k(e,"bottomOut"),t.bottomInfo.slideStatus="out"},1e3*this.slideTips.slidesIn))}}},F=i("VU/8")(R,null,!1,null,null,null).exports;i("hvFc");s.a.use(c.a);var V=new c.a({mode:"history",routes:[{path:"/",name:"Main",component:F},{path:"/:id",name:"MainSlides",component:F}]}),q=i("4Yho"),J=i("2KeS"),G=i("Dd8w"),Y=i.n(G);var X=Object(J.b)({jsonStore:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{photoData:[],tipData:{}},e=arguments[1];switch(e.type){case"JSON_GET":t=Y()({},t,{photoData:e.value.images});break;case"CONFIG_GET":var i=e.value;t=Y()({},t,{tipData:Y()({},t.tipData,{tipcontents:i.tipcontents,sidebarTitle:i.title,sidebarSubTitle:i.subtitle,imgUrl:i.imgUrl,sidebarSetting:i.sidebarSetting,logoSetting:i.logoSetting,bottombarSetting:i.bottombarSetting,prebarSetting:i.prebarSetting})})}return t}}),K=(i("oSVy"),Object(J.a)()),Q=Object(J.c)(X,K);s.a.use(q.a),s.a.use(a.reduxStorePlugin),s.a.config.productionTip=!1,new s.a({el:"#app",store:Q,router:V,template:"<App/>",components:{App:m}})},g8lV:function(t,e){},hvFc:function(t,e){},ifsq:function(t,e){},qCaK:function(t,e){},qrT9:function(t,e){},z0Eh:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.fa25185fe12650fee31b.js.map