(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5e3383be"],{"02ff":function(t,i,e){"use strict";e.r(i);var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"life"},[e("van-swipe",{staticClass:"taohui-swipe",attrs:{autoplay:2e3}},t._l(t.taohui[t.index].thumb,(function(t){return e("van-swipe-item",{key:t},[e("img",{attrs:{src:t,width:"100%",height:"500px"}})])})),1),e("van-progress",{attrs:{percentage:t.process}}),e("van-card",{attrs:{desc:t.taohui[t.index].desc,title:t.taohui[t.index].title}}),e("div",{staticClass:"foot"},[e("van-button",{attrs:{type:"info",color:"linear-gradient(to right, green, white)"},on:{click:t.onPre}},[t._v("上一篇")]),e("van-button",{attrs:{type:"info",color:"linear-gradient(to right, white, green)"},on:{click:t.onNext}},[t._v("下一篇")])],1)],1)},s=[],o=(e("e7e5"),e("d399")),a=e("ade3"),c=(e("68ef"),e("4fbc"),e("d282")),r=e("ea8e"),h=e("5fbe"),u=Object(c["a"])("progress"),l=u[0],f=u[1],d=l({mixins:[Object(h["a"])((function(t){t(window,"resize",this.resize,!0),t(window,"orientationchange",this.resize,!0)}))],props:{color:String,inactive:Boolean,pivotText:String,textColor:String,pivotColor:String,trackColor:String,strokeWidth:[Number,String],percentage:{type:[Number,String],required:!0,validator:function(t){return t>=0&&t<=100}},showPivot:{type:Boolean,default:!0}},data:function(){return{pivotWidth:0,progressWidth:0}},mounted:function(){this.resize()},watch:{showPivot:"resize",pivotText:"resize"},methods:{resize:function(){var t=this;this.$nextTick((function(){t.progressWidth=t.$el.offsetWidth,t.pivotWidth=t.$refs.pivot?t.$refs.pivot.offsetWidth:0}))}},render:function(){var t=arguments[0],i=this.pivotText,e=this.percentage,n=null!=i?i:e+"%",s=this.showPivot&&n,o=this.inactive?"#cacaca":this.color,a={color:this.textColor,left:(this.progressWidth-this.pivotWidth)*e/100+"px",background:this.pivotColor||o},c={background:o,width:this.progressWidth*e/100+"px"},h={background:this.trackColor,height:Object(r["a"])(this.strokeWidth)};return t("div",{class:f(),style:h},[t("span",{class:f("portion"),style:c},[s&&t("span",{ref:"pivot",style:a,class:f("pivot")},[n])])])}}),p=(e("9cb7"),e("66fd")),v=(e("786d"),e("c31d")),g=e("9884"),b=Object(c["a"])("swipe-item"),m=b[0],x=b[1],w=m({mixins:[Object(g["a"])("vanSwipe")],data:function(){return{offset:0,inited:!1,mounted:!1}},mounted:function(){var t=this;this.$nextTick((function(){t.mounted=!0}))},computed:{style:function(){var t={},i=this.parent,e=i.size,n=i.vertical;return e&&(t[n?"height":"width"]=e+"px"),this.offset&&(t.transform="translate"+(n?"Y":"X")+"("+this.offset+"px)"),t},shouldRender:function(){var t=this.index,i=this.inited,e=this.parent,n=this.mounted;if(!e.lazyRender||i)return!0;if(!n)return!1;var s=e.activeIndicator,o=e.count-1,a=0===s&&e.loop?o:s-1,c=s===o&&e.loop?0:s+1,r=t===s||t===a||t===c;return r&&(this.inited=!0),r}},render:function(){var t=arguments[0];return t("div",{class:x(),style:this.style,on:Object(v["a"])({},this.$listeners)},[this.shouldRender&&this.slots()])}});e("8270");function j(t){var i=window.getComputedStyle(t),e="none"===i.display,n=null===t.offsetParent&&"fixed"!==i.position;return e||n}var y=e("1325"),O=e("4598");function S(t,i,e){return Math.min(Math.max(t,i),e)}var k,C=e("3875"),z=Object(c["a"])("swipe"),_=z[0],T=z[1],P=_({mixins:[C["a"],Object(g["b"])("vanSwipe"),Object(h["a"])((function(t,i){t(window,"resize",this.resize,!0),t(window,"orientationchange",this.resize,!0),t(window,"visibilitychange",this.onVisibilityChange),i?this.initialize():this.clear()}))],props:{width:[Number,String],height:[Number,String],autoplay:[Number,String],vertical:Boolean,lazyRender:Boolean,indicatorColor:String,loop:{type:Boolean,default:!0},duration:{type:[Number,String],default:500},touchable:{type:Boolean,default:!0},initialSwipe:{type:[Number,String],default:0},showIndicators:{type:Boolean,default:!0},stopPropagation:{type:Boolean,default:!0}},data:function(){return{rect:null,offset:0,active:0,deltaX:0,deltaY:0,swiping:!1,computedWidth:0,computedHeight:0}},watch:{children:function(){this.initialize()},initialSwipe:function(){this.initialize()},autoplay:function(t){t>0?this.autoPlay():this.clear()}},computed:{count:function(){return this.children.length},maxCount:function(){return Math.ceil(Math.abs(this.minOffset)/this.size)},delta:function(){return this.vertical?this.deltaY:this.deltaX},size:function(){return this[this.vertical?"computedHeight":"computedWidth"]},trackSize:function(){return this.count*this.size},activeIndicator:function(){return(this.active+this.count)%this.count},isCorrectDirection:function(){var t=this.vertical?"vertical":"horizontal";return this.direction===t},trackStyle:function(){var t={transitionDuration:(this.swiping?0:this.duration)+"ms",transform:"translate"+(this.vertical?"Y":"X")+"("+this.offset+"px)"};if(this.size){var i=this.vertical?"height":"width",e=this.vertical?"width":"height";t[i]=this.trackSize+"px",t[e]=this[e]?this[e]+"px":""}return t},indicatorStyle:function(){return{backgroundColor:this.indicatorColor}},minOffset:function(){return(this.vertical?this.rect.height:this.rect.width)-this.size*this.count}},mounted:function(){this.bindTouchEvent(this.$refs.track)},methods:{initialize:function(t){if(void 0===t&&(t=+this.initialSwipe),this.$el&&!j(this.$el)){clearTimeout(this.timer);var i={width:this.$el.offsetWidth,height:this.$el.offsetHeight};this.rect=i,this.swiping=!0,this.active=t,this.computedWidth=+this.width||i.width,this.computedHeight=+this.height||i.height,this.offset=this.getTargetOffset(t),this.children.forEach((function(t){t.offset=0})),this.autoPlay()}},resize:function(){this.initialize(this.activeIndicator)},onVisibilityChange:function(){document.hidden?this.clear():this.autoPlay()},onTouchStart:function(t){this.touchable&&(this.clear(),this.touchStartTime=Date.now(),this.touchStart(t),this.correctPosition())},onTouchMove:function(t){this.touchable&&this.swiping&&(this.touchMove(t),this.isCorrectDirection&&(Object(y["c"])(t,this.stopPropagation),this.move({offset:this.delta})))},onTouchEnd:function(){if(this.touchable&&this.swiping){var t=this.size,i=this.delta,e=Date.now()-this.touchStartTime,n=i/e,s=Math.abs(n)>.25||Math.abs(i)>t/2;if(s&&this.isCorrectDirection){var o=this.vertical?this.offsetY:this.offsetX,a=0;a=this.loop?o>0?i>0?-1:1:0:-Math[i>0?"ceil":"floor"](i/t),this.move({pace:a,emitChange:!0})}else i&&this.move({pace:0});this.swiping=!1,this.autoPlay()}},getTargetActive:function(t){var i=this.active,e=this.count,n=this.maxCount;return t?this.loop?S(i+t,-1,e):S(i+t,0,n):i},getTargetOffset:function(t,i){void 0===i&&(i=0);var e=t*this.size;this.loop||(e=Math.min(e,-this.minOffset));var n=i-e;return this.loop||(n=S(n,this.minOffset,0)),n},move:function(t){var i=t.pace,e=void 0===i?0:i,n=t.offset,s=void 0===n?0:n,o=t.emitChange,a=this.loop,c=this.count,r=this.active,h=this.children,u=this.trackSize,l=this.minOffset;if(!(c<=1)){var f=this.getTargetActive(e),d=this.getTargetOffset(f,s);if(a){if(h[0]&&d!==l){var p=d<l;h[0].offset=p?u:0}if(h[c-1]&&0!==d){var v=d>0;h[c-1].offset=v?-u:0}}this.active=f,this.offset=d,o&&f!==r&&this.$emit("change",this.activeIndicator)}},prev:function(){var t=this;this.correctPosition(),this.resetTouchStatus(),Object(O["a"])((function(){t.swiping=!1,t.move({pace:-1,emitChange:!0})}))},next:function(){var t=this;this.correctPosition(),this.resetTouchStatus(),Object(O["a"])((function(){t.swiping=!1,t.move({pace:1,emitChange:!0})}))},swipeTo:function(t,i){var e=this;void 0===i&&(i={}),this.correctPosition(),this.resetTouchStatus(),Object(O["a"])((function(){var n;n=e.loop&&t===e.count?0===e.active?0:t:t%e.count,i.immediate?Object(O["a"])((function(){e.swiping=!1})):e.swiping=!1,e.move({pace:n-e.active,emitChange:!0})}))},correctPosition:function(){this.swiping=!0,this.active<=-1&&this.move({pace:this.count}),this.active>=this.count&&this.move({pace:-this.count})},clear:function(){clearTimeout(this.timer)},autoPlay:function(){var t=this,i=this.autoplay;i>0&&this.count>1&&(this.clear(),this.timer=setTimeout((function(){t.next(),t.autoPlay()}),i))},genIndicator:function(){var t=this,i=this.$createElement,e=this.count,n=this.activeIndicator,s=this.slots("indicator");return s||(this.showIndicators&&e>1?i("div",{class:T("indicators",{vertical:this.vertical})},[Array.apply(void 0,Array(e)).map((function(e,s){return i("i",{class:T("indicator",{active:s===n}),style:s===n?t.indicatorStyle:null})}))]):void 0)}},render:function(){var t=arguments[0];return t("div",{class:T()},[t("div",{ref:"track",style:this.trackStyle,class:T("track",{vertical:this.vertical})},[this.slots()]),this.genIndicator()])}}),B=(e("0653"),e("34e9")),W=(e("9d70"),e("3743"),e("e3b3"),e("bc1b"),e("b650")),$=(e("c194"),e("7744")),N=(e("c3a6"),e("ad06")),M=(e("81e6"),e("9ffb")),D=(e("9b7e"),e("a3e2")),I={components:(k={},Object(a["a"])(k,D["a"].name,D["a"]),Object(a["a"])(k,M["a"].name,M["a"]),Object(a["a"])(k,N["a"].name,N["a"]),Object(a["a"])(k,$["a"].name,$["a"]),Object(a["a"])(k,W["a"].name,W["a"]),Object(a["a"])(k,B["a"].name,B["a"]),Object(a["a"])(k,P.name,P),Object(a["a"])(k,w.name,w),Object(a["a"])(k,p["a"].name,p["a"]),Object(a["a"])(k,d.name,d),k),data:function(){return{index:0,process:10,taohui:[{thumb:[e("210e"),e("1568"),e("10a5")],title:"湖南·郴州",desc:"我们爬过湘南的山，逛过罗家井的街，坐过早上7点，晚上9点的公交，只为享受彼此的温暖，那时的懵懂，青涩，便是我们的青春."},{thumb:[e("e156"),e("f1af")],title:"湖南·株洲",desc:"那是炎热的夏天，你在广场上骑了小黄车，傍晚溜了学校旁的湖，那时你很瘦，似弱不禁风，却依然动我心."},{thumb:[e("0ea6"),e("9c6b")],title:"湖北·襄阳",desc:"我们在这座古城渡过愉快的三天，游唐城与戏剧表演，深刻了解大唐文化.唐城的古城风貌展现出无尽繁华，气宇非凡，叹此景此人，我很幸福."},{thumb:[e("9c29"),e("0e23")],title:"湖南·常德·枫林花海",desc:"自驾去桃源去看花，那是多少亩的花海，周杰伦花海的旋律还旋转在耳边，静止了，所有的花开...，不由得对你的思念更甚."},{thumb:[e("9c1b"),e("39ce")],title:"湖北·武汉",desc:"这是我们留下足迹最多的地方，武大，长江大桥，光谷，东湖...，每个地方都去了多次，是我们感情的见证，留下了太多美好的回忆."},{thumb:[e("d4b8"),e("036a"),e("ddee")],title:"上海",desc:"上海是我们去过的最大的都市，上海的海水并不像想象的那样湛蓝，但那天我们脱下鞋尽情的在沙滩上感受大海，并留下了xxx❥xx."},{thumb:[e("4b6b"),e("bcea")],title:"湖南·常德",desc:"我们拍了简单的艺术照，用照片记录了美好，那时你确实很美，尤其是戴上了婚纱般的头纱，仿佛在梦中，仿佛我们结婚了，非常甜蜜."},{thumb:[e("d2e0"),e("6041")],title:"湖南·常德",desc:"正是疫情期间，我们去拍了婚纱照，西装与婚纱配上路人羡慕与祝福的眼神，我们很幸福.婚纱照比艺术照更加好看了，更没想到上次的梦竟然成真了."},{thumb:[e("de5e"),e("bc02")],title:"湖南·常德",desc:"拍完婚纱照，人生中最重要的第一天到来，这天我最帅，你最美.感谢父母，感谢你，7年的感情自此进入新的阶段，携着你手拥抱生活，我们一起看细水长流."},{thumb:[e("dc7f"),e("a6ac")],title:"湖南·常德/长沙",desc:"2021年9月9日，老天爷非常眷顾我，母子平安，那天我成了世上最幸福的人.我多了一个需要倾尽全力去爱的人，我们一家在橘子洲头多么温馨.我们会一直拥有美好的幸福."}]}},methods:{onPre:function(){0!==this.index?(this.index=this.index-1,this.process=this.process-10):Object(o["a"])("到头了，这就是起点呢！")},onNext:function(){this.index!==this.taohui.length-1?(this.index=this.index+1,this.process=this.process+10):Object(o["a"])("感谢你见证了我们的爱情，未来更加可期！")}}},A=I,R=(e("c750"),e("2877")),q=Object(R["a"])(A,n,s,!1,null,"f79dff24",null);i["default"]=q.exports},"036a":function(t,i,e){t.exports=e.p+"img/6_2.c5d1c440.jpg"},"0653":function(t,i,e){"use strict";e("68ef"),e("5c56")},"0e23":function(t,i,e){t.exports=e.p+"img/4_2.a8ab9831.jpg"},"0ea6":function(t,i,e){t.exports=e.p+"img/3_1.f7e723f2.jpg"},"10a5":function(t,i,e){t.exports=e.p+"img/1_3.8fcf45fa.jpg"},1568:function(t,i,e){t.exports=e.p+"img/1_2.ee166721.jpg"},"1a04":function(t,i,e){},"210e":function(t,i,e){t.exports=e.p+"img/1_1.65a68430.jpg"},"34e9":function(t,i,e){"use strict";var n=e("2638"),s=e.n(n),o=e("d282"),a=e("ba31"),c=e("b1d2"),r=Object(o["a"])("cell-group"),h=r[0],u=r[1];function l(t,i,e,n){var o,r=t("div",s()([{class:[u({inset:i.inset}),(o={},o[c["b"]]=i.border,o)]},Object(a["b"])(n,!0)]),[null==e.default?void 0:e.default()]);return i.title||e.title?t("div",{key:n.data.key},[t("div",{class:u("title",{inset:i.inset})},[e.title?e.title():i.title]),r]):r}l.props={title:String,inset:Boolean,border:{type:Boolean,default:!0}},i["a"]=h(l)},"39ce":function(t,i,e){t.exports=e.p+"img/5_2.696e6885.jpg"},4598:function(t,i,e){"use strict";(function(t){e.d(i,"a",(function(){return h}));var n=e("a142"),s=Date.now();function o(t){var i=Date.now(),e=Math.max(0,16-(i-s)),n=setTimeout(t,e);return s=i+e,n}var a=n["f"]?t:window,c=a.requestAnimationFrame||o;a.cancelAnimationFrame||a.clearTimeout;function r(t){return c.call(a,t)}function h(t){r((function(){r(t)}))}}).call(this,e("c8ba"))},"4b6b":function(t,i,e){t.exports=e.p+"img/7_2.f184f0da.jpg"},"4fbc":function(t,i,e){},"57cd":function(t,i,e){},"5c56":function(t,i,e){},6041:function(t,i,e){t.exports=e.p+"img/8_2.7aa96a60.jpg"},7744:function(t,i,e){"use strict";var n=e("c31d"),s=e("2638"),o=e.n(s),a=e("d282"),c=e("a142"),r=e("ba31"),h=e("48f4"),u={icon:String,size:String,center:Boolean,isLink:Boolean,required:Boolean,iconPrefix:String,titleStyle:null,titleClass:null,valueClass:null,labelClass:null,title:[Number,String],value:[Number,String],label:[Number,String],arrowDirection:String,border:{type:Boolean,default:!0},clickable:{type:Boolean,default:null}},l=e("ad06"),f=Object(a["a"])("cell"),d=f[0],p=f[1];function v(t,i,e,n){var s,a=i.icon,u=i.size,f=i.title,d=i.label,v=i.value,g=i.isLink,b=e.title||Object(c["c"])(f);function m(){var n=e.label||Object(c["c"])(d);if(n)return t("div",{class:[p("label"),i.labelClass]},[e.label?e.label():d])}function x(){if(b)return t("div",{class:[p("title"),i.titleClass],style:i.titleStyle},[e.title?e.title():t("span",[f]),m()])}function w(){var n=e.default||Object(c["c"])(v);if(n)return t("div",{class:[p("value",{alone:!b}),i.valueClass]},[e.default?e.default():t("span",[v])])}function j(){return e.icon?e.icon():a?t(l["a"],{class:p("left-icon"),attrs:{name:a,classPrefix:i.iconPrefix}}):void 0}function y(){var n=e["right-icon"];if(n)return n();if(g){var s=i.arrowDirection;return t(l["a"],{class:p("right-icon"),attrs:{name:s?"arrow-"+s:"arrow"}})}}function O(t){Object(r["a"])(n,"click",t),Object(h["a"])(n)}var S=null!=(s=i.clickable)?s:g,k={clickable:S,center:i.center,required:i.required,borderless:!i.border};return u&&(k[u]=u),t("div",o()([{class:p(k),attrs:{role:S?"button":null,tabindex:S?0:null},on:{click:O}},Object(r["b"])(n)]),[j(),x(),w(),y(),null==e.extra?void 0:e.extra()])}v.props=Object(n["a"])({},u,h["b"]);i["a"]=d(v)},"786d":function(t,i,e){},"7b0a":function(t,i,e){},"81e6":function(t,i,e){"use strict";e("68ef"),e("7b0a")},8270:function(t,i,e){},"9c1b":function(t,i,e){t.exports=e.p+"img/5_1.e7a7350d.jpg"},"9c29":function(t,i,e){t.exports=e.p+"img/4_1.f53547ad.jpg"},"9c6b":function(t,i,e){t.exports=e.p+"img/3_2.76d70ae8.jpg"},"9ffb":function(t,i,e){"use strict";var n=e("d282"),s=e("9884"),o=Object(n["a"])("col"),a=o[0],c=o[1];i["a"]=a({mixins:[Object(s["a"])("vanRow")],props:{span:[Number,String],offset:[Number,String],tag:{type:String,default:"div"}},computed:{style:function(){var t=this.index,i=this.parent||{},e=i.spaces;if(e&&e[t]){var n=e[t],s=n.left,o=n.right;return{paddingLeft:s?s+"px":null,paddingRight:o?o+"px":null}}}},methods:{onClick:function(t){this.$emit("click",t)}},render:function(){var t,i=arguments[0],e=this.span,n=this.offset;return i(this.tag,{style:this.style,class:c((t={},t[e]=e,t["offset-"+n]=n,t)),on:{click:this.onClick}},[this.slots()])}})},a6ac:function(t,i,e){t.exports=e.p+"img/10_2.d97d9477.jpg"},bc02:function(t,i,e){t.exports=e.p+"img/9_2.f277e25e.jpg"},bcea:function(t,i,e){t.exports=e.p+"img/7_3.6dead958.jpg"},c194:function(t,i,e){"use strict";e("68ef"),e("9d70"),e("3743"),e("1a04")},c3a6:function(t,i,e){"use strict";e("68ef"),e("9d70"),e("3743")},c750:function(t,i,e){"use strict";e("57cd")},d2e0:function(t,i,e){t.exports=e.p+"img/8_1.8a97cf24.jpg"},d4b8:function(t,i,e){t.exports=e.p+"img/6_1.09bcc6ef.jpg"},dc7f:function(t,i,e){t.exports=e.p+"img/10_1.1a70c9ff.jpg"},ddee:function(t,i,e){t.exports=e.p+"img/6_3.1a251a62.jpg"},de5e:function(t,i,e){t.exports=e.p+"img/9_1.52bd1816.jpg"},e156:function(t,i,e){t.exports=e.p+"img/2_1.f0c4628c.jpg"},f1af:function(t,i,e){t.exports=e.p+"img/2_2.bf37d1e1.jpg"}}]);
//# sourceMappingURL=chunk-5e3383be.084b930e.js.map