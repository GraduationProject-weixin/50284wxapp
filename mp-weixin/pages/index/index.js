(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"179c":function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(t("a34a")),r=a(t("93fc"));function a(n){return n&&n.__esModule?n:{default:n}}function o(n,e){var t;if("undefined"===typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(t=u(n))||e&&n&&"number"===typeof n.length){t&&(n=t);var i=0,r=function(){};return{s:r,n:function(){return i>=n.length?{done:!0}:{done:!1,value:n[i++]}},e:function(n){throw n},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,c=!1;return{s:function(){t=n[Symbol.iterator]()},n:function(){var n=t.next();return o=n.done,n},e:function(n){c=!0,a=n},f:function(){try{o||null==t.return||t.return()}finally{if(c)throw a}}}}function u(n,e){if(n){if("string"===typeof n)return c(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?c(n,e):void 0}}function c(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function l(n,e,t,i,r,a,o){try{var u=n[a](o),c=u.value}catch(l){return void t(l)}u.done?e(c):Promise.resolve(c).then(i,r)}function s(n){return function(){var e=this,t=arguments;return new Promise((function(i,r){var a=n.apply(e,t);function o(n){l(a,i,r,o,u,"next",n)}function u(n){l(a,i,r,o,u,"throw",n)}o(void 0)}))}}t("3e92");var f=function(){Promise.all([t.e("common/vendor"),t.e("components/uni-ui/lib/uni-icons/uni-icons")]).then(function(){return resolve(t("3702"))}.bind(null,t)).catch(t.oe)},d={components:{uniIcons:f},data:function(){return{rows:2,column:4,iconArr:["cuIcon-same","cuIcon-deliver","cuIcon-evaluate","cuIcon-shop","cuIcon-ticket","cuIcon-cascades","cuIcon-discover","cuIcon-question","cuIcon-pic","cuIcon-filter","cuIcon-footprint","cuIcon-pulldown","cuIcon-pullup","cuIcon-moreandroid","cuIcon-refund","cuIcon-qrcode","cuIcon-remind","cuIcon-profile","cuIcon-home","cuIcon-message","cuIcon-link","cuIcon-lock","cuIcon-unlock","cuIcon-vip","cuIcon-weibo","cuIcon-activity","cuIcon-friendadd","cuIcon-friendfamous","cuIcon-friend","cuIcon-goods","cuIcon-selection"],role:"",menuList:[],swiperMenuList:[],user:{},tableName:"",autoplaySwiper:!0,intervalSwiper:5e3,swiperList:[],jiazhengrenyuanlist:[],homejiazhengrenyuanlist:[],news:[]}},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var e=this;return s(i.default.mark((function t(){var a,o,u;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.role=n.getStorageSync("role"),a=n.getStorageSync("nowTable"),t.next=4,e.$api.session(a);case 4:o=t.sent,e.user=o.data,e.tableName=a,u=r.default.list(),e.menuList=u,e.menuList.forEach((function(n,t){e.role==n.roleName&&n.frontMenu.forEach((function(n,t){n.child[0].buttons.indexOf("查看")>-1&&e.swiperMenuList.push(n)}))}));case 10:case"end":return t.stop()}}),t)})))()},onShow:function(){var n=this;return s(i.default.mark((function e(){var t,r,a,u,c;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=[],e.next=3,n.$api.page("config",{page:1,limit:5});case 3:r=e.sent,a=o(r.data.list);try{for(a.s();!(u=a.n()).done;)c=u.value,c.name.indexOf("picture")>=0&&c.value&&""!=c.value&&null!=c.value&&t.push({img:c.value,title:c.name})}catch(i){a.e(i)}finally{a.f()}return t&&(n.swiperList=t),e.next=9,n.$api.list("news",{page:1,limit:6});case 9:return r=e.sent,n.news=r.data.list,e.next=13,n.$api.recommend("jiazhengrenyuan",1,4);case 13:return r=e.sent,n.jiazhengrenyuanlist=r.data.list,e.next=17,n.$api.list("jiazhengrenyuan",{page:1,limit:4});case 17:r=e.sent,n.homejiazhengrenyuanlist=r.data.list;case 19:case"end":return e.stop()}}),e)})))()},methods:{onSwiperTap:function(n){},onNewsDetailTap:function(n){this.$utils.jump("../news-detail/news-detail?id=".concat(n))},onDetailTap:function(n,e){this.$utils.jump("../".concat(n,"/detail?id=").concat(e))},onPageTap:function(e){n.navigateTo({url:"../".concat(e,"/list"),fail:function(){n.switchTab({url:"../".concat(e,"/list")})}})},onPageTap2:function(e){n.setStorageSync("useridTag",0),n.navigateTo({url:e,fail:function(){n.switchTab({url:e})}})}}};e.default=d}).call(this,t("543d")["default"])},4813:function(n,e,t){},"4ed6":function(n,e,t){"use strict";(function(n){t("af21");i(t("66fd"));var e=i(t("5d62"));function i(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("543d")["createPage"])},5004:function(n,e,t){"use strict";t.r(e);var i=t("179c"),r=t.n(i);for(var a in i)"default"!==a&&function(n){t.d(e,n,(function(){return i[n]}))}(a);e["default"]=r.a},"5d62":function(n,e,t){"use strict";t.r(e);var i=t("7b39"),r=t("5004");for(var a in r)"default"!==a&&function(n){t.d(e,n,(function(){return r[n]}))}(a);t("c8b5");var o,u=t("f0c5"),c=Object(u["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],o);e["default"]=c.exports},"7b39":function(n,e,t){"use strict";var i;t.d(e,"b",(function(){return r})),t.d(e,"c",(function(){return a})),t.d(e,"a",(function(){return i}));var r=function(){var n=this,e=n.$createElement,t=(n._self._c,n.__map(n.menuList,(function(e,t){var i=n.__get_orig(e),r=n.__map(e.frontMenu,(function(t,i){var r=n.__get_orig(t),a=n.role==e.roleName?n.__map(t.child,(function(e,t){var i=n.__get_orig(e),r=n.__map(e.buttons,(function(t,i){var r=n.__get_orig(t),a="查看"==t&&"yifahuodingdan"!=e.tableName&&"yituikuandingdan"!=e.tableName&&"yiquxiaodingdan"!=e.tableName&&"weizhifudingdan"!=e.tableName&&"yizhifudingdan"!=e.tableName&&"yiwanchengdingdan"!=e.tableName?e.menu.split("列表"):null;return{$orig:r,g0:a}}));return{$orig:i,l0:r}})):null;return{$orig:r,l1:a}}));return{$orig:i,l2:r}}))),i=n.__map(n.jiazhengrenyuanlist,(function(e,t){var i=n.__get_orig(e),r=e.tupian?e.tupian.split(","):null;return{$orig:i,g1:r}})),r=n.__map(n.news,(function(e,t){var i=n.__get_orig(e),r=e.addtime.split(" ");return{$orig:i,g2:r}})),a=n.__map(n.homejiazhengrenyuanlist,(function(e,t){var i=n.__get_orig(e),r=e.tupian?e.tupian.split(","):null;return{$orig:i,g3:r}}));n.$mp.data=Object.assign({},{$root:{l3:t,l4:i,l5:r,l6:a}})},a=[]},c8b5:function(n,e,t){"use strict";var i=t("4813"),r=t.n(i);r.a}},[["4ed6","common/runtime","common/vendor"]]]);