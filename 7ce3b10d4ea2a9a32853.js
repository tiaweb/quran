(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{215:function(t,e,r){var content=r(254);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(34).default)("2c7d1ea8",content,!0,{sourceMap:!1})},253:function(t,e,r){"use strict";var n=r(215);r.n(n).a},254:function(t,e,r){(e=r(33)(!1)).push([t.i,'.surah_nav[data-v-be031e42]{position:fixed;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;bottom:0;left:auto;z-index:10;margin:0;height:60px;text-align:center;width:100%;max-width:500px;background:var(--bg-card-color)}.surah_nav[data-v-be031e42],.surah_nav_item[data-v-be031e42]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:var(--text-color)}.surah_nav_title[data-v-be031e42]{font-size:2rem}.surah_nav_next[data-v-be031e42],.surah_nav_prev[data-v-be031e42]{text-decoration:none}.surah_nav_next span[data-v-be031e42],.surah_nav_prev span[data-v-be031e42]{padding:0 .25em;font-size:2rem}.select[data-v-be031e42]{-webkit-appearance:none;padding:.5em 1.5rem .5em .5rem;outline:none;border:none;font-size:1rem;border-radius:4px;margin-left:.5em;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAGCAYAAAARx7TFAAAAAXNSR0IArs4c6QAAAJ1JREFUCB1jzMnJCWdkZBSdPHnyFAYk0NDQwPbmzZuVTExMk5iA4p7//v2bDFScC1OzatUqZqCC5f////cHyikwiYiIJAFNWgIUmARSCKQZDx48OAdIBwJNSZ8yZcp8RpBuoNFMQJ0LgRIxQO4hILYFKsgEOmEmSJ4ZRBw4cOC/l5fXxu/fvysDub5Ak3OAJswAyWEAkIm5ublu6BIADTRHW7YWzxEAAAAASUVORK5CYII=");background-position:right 7px center;background-repeat:no-repeat;color:var(--bg-color);background-color:var(--text-color);border:1px solid var(--bg-color)}@media screen and (max-width:480px){.text-nav[data-v-be031e42]{display:none}}',""]),t.exports=e},259:function(t,e,r){var content=r(324);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(34).default)("0f5fd10c",content,!0,{sourceMap:!1})},262:function(t,e,r){"use strict";r(21),r(22),r(15),r(55),r(209),r(57),r(56);var n=r(26),c=r(35),o=r(27),d=r(28),l=r(16),h=r(3),v=r(17),m=r(112),f=r.n(m),_=r(217),y=r.n(_);function x(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var A=function(t){Object(o.a)(h,t);var e,r=(e=h,function(){var t,r=Object(l.a)(e);if(x()){var n=Object(l.a)(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return Object(d.a)(this,t)});function h(){return Object(n.a)(this,h),r.apply(this,arguments)}return Object(c.a)(h,[{key:"isHavePrev",get:function(){return this.verseId>1}},{key:"isHaveNext",get:function(){return this.verseId<this.verseCount}},{key:"arrayAyah",get:function(){return Array.from({length:this.verseCount},(function(t,e){return e+1}))}}]),h}(v.Vue);Object(h.a)([Object(v.Prop)({type:Number,default:1})],A.prototype,"surahId",void 0),Object(h.a)([Object(v.Prop)({type:Number,default:1})],A.prototype,"verseId",void 0),Object(h.a)([Object(v.Prop)({type:Number,default:0})],A.prototype,"verseCount",void 0),Object(h.a)([Object(v.Prop)({type:Function,default:function(){}})],A.prototype,"onChangeVerse",void 0);var j=A=Object(h.a)([Object(v.Component)({components:{MdArrowBackIcon:f.a,MdArrowForwardIcon:y.a}})],A),O=(r(253),r(5)),component=Object(O.a)(j,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"surah_nav"},[r("nuxt-link",{staticClass:"surah_nav_item surah_nav_prev",attrs:{to:"/"+t.surahId+"/"+(t.verseId-1)+"/"}},[t.isHavePrev?r("MdArrowBackIcon",{attrs:{w:"30px",h:"30px"}}):t._e(),t._v(" "),t.isHavePrev?r("span",{staticClass:"text-nav"},[t._v("\n      "+t._s(t.verseId-1)+"\n    ")]):t._e()],1),t._v(" "),r("div",{staticClass:"surah_nav_item surah_nav_center"},[r("select",{staticClass:"select",attrs:{name:"verse-select"},domProps:{value:t.verseId},on:{change:t.onChangeVerse}},t._l(t.arrayAyah,(function(e){return r("option",{key:e,domProps:{value:e}},[t._v("\n        "+t._s(e)+"\n      ")])})),0)]),t._v(" "),r("nuxt-link",{staticClass:"surah_nav_item surah_nav_next",attrs:{to:"/"+t.surahId+"/"+(t.verseId+1)+"/"}},[t.isHaveNext?r("span",{staticClass:"text-nav"},[t._v("\n      "+t._s(t.verseId+1)+"\n    ")]):t._e(),t._v(" "),t.isHaveNext?r("MdArrowForwardIcon",{attrs:{w:"30px",h:"30px"}}):t._e()],1)],1)}),[],!1,null,"be031e42",null);e.a=component.exports},323:function(t,e,r){"use strict";var n=r(259);r.n(n).a},324:function(t,e,r){(e=r(33)(!1)).push([t.i,".detail__content[data-v-b4f6a11c]{width:90%;margin:0 auto;padding-bottom:2em}",""]),t.exports=e},467:function(t,e,r){"use strict";r.r(e);r(21),r(22),r(15),r(55),r(209),r(44),r(40);var n=r(6),c=r(26),o=r(35),d=r(27),l=r(28),h=r(16),v=r(3),m=r(17),f=r(9),_=r(220),y=r(221),x=r(222),A=r(262),j=r(218),O=r(66);function I(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var S=function(t){Object(d.a)(n,t);var e,r=(e=n,function(){var t,r=Object(h.a)(e);if(I()){var n=Object(h.a)(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return Object(l.a)(this,t)});function n(){var t;return Object(c.a)(this,n),(t=r.apply(this,arguments)).loading=!0,t}return Object(o.a)(n,[{key:"onChangeVerse",value:function(t){var e=t.target.value;this.$router.push("/".concat(this.surahId,"/").concat(e,"/"))}},{key:"head",value:function(){return this.metaHead}},{key:"mounted",value:function(){this.setHeaderTitle("".concat(this.surahId,":").concat(this.verseId," ").concat(this.currentSurah.name_latin)),this.setPage("verse-detail")}},{key:"activated",value:function(){this.setHeaderTitle("".concat(this.surahId,":").concat(this.verseId," ").concat(this.currentSurah.name_latin)),this.setPage("verse-detail")}},{key:"metaHead",get:function(){return{title:this.metaTitle,meta:[{hid:"description",name:"description",content:this.metaDesc},{hid:"og:title",property:"og:title",content:this.metaTitle},{hid:"twitter:title",name:"twitter:title",content:this.metaTitle},{hid:"twitter:label1",name:"twitter:label1",content:"Surat"},{hid:"twitter:label2",name:"twitter:label2",content:this.currentSurah.name_latin},{hid:"theme-color",name:"theme-color",content:this.settingActiveTheme.bgColor},{hid:"article:tag",name:"article:tag",content:this.currentSurah.name_latin}],link:[{rel:"amphtml",href:"".concat(O.a.PATH,"amp/").concat(this.surahId,"/").concat(this.verseId,"/")}],script:[{id:"ld-breadcrumb",innerHTML:JSON.stringify(this.jsonldBreadcrumb),type:"application/ld+json",body:!0},{id:"ld-article",innerHTML:JSON.stringify(this.jsonLdArticle),type:"application/ld+json",body:!0}],__dangerouslyDisableSanitizers:["script"]}}},{key:"isValidSurah",get:function(){return this.surahId>0&&this.surahId<=114}}]),n}(m.Vue);Object(v.a)([f.State],S.prototype,"settingActiveTheme",void 0),Object(v.a)([f.Mutation],S.prototype,"setHeaderTitle",void 0),Object(v.a)([f.Mutation],S.prototype,"setPage",void 0);var w=S=Object(v.a)([Object(m.Component)({components:{Breadcrumb:_.a,SingleVerse:y.a,SurahHeader:x.a,VerseNavigation:A.a},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var n,c,title,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.params,e.next=3,r(219)("./".concat(n.surahid,".json"));case 3:return c=e.sent,title=Object(O.o)("".concat(n.verseid),"".concat(c[n.surahid].name_latin," ").concat(c[n.surahid].name," (").concat(c[n.surahid].translations.id.name,")")),o=Object(O.e)("".concat(n.verseid),"".concat(c[n.surahid].name_latin," ").concat(c[n.surahid].name," (").concat(c[n.surahid].translations.id.name,")")),e.abrupt("return",{metaTitle:title,metaDesc:o,verseId:Number(n.verseid)||1,surahId:Number(n.surahid)||1,currentSurah:c[n.surahid],jsonldBreadcrumb:Object(j.b)({categoryTitle:"QS ".concat(n.surahid),categorySlug:"".concat(n.surahid),title:"QS ".concat(n.surahid,":").concat(n.verseid),slug:"".concat(n.surahid,"/").concat(n.verseid)}),jsonLdArticle:Object(j.a)({desc:"".concat(o),cover:"meta-image.png",title:"".concat(title),slug:"".concat(n.surahid,"/").concat(n.verseid)})});case 7:case"end":return e.stop()}}),e)})))()}})],S),k=(r(323),r(5)),component=Object(k.a)(w,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"container"},[r("div",{staticClass:"detail"},[r("Breadcrumb",{attrs:{"surah-name":t.currentSurah.name_latin,"surah-link":String(t.currentSurah.number),"verse-name":String(t.verseId)}}),t._v(" "),r("SurahHeader",{attrs:{"surah-number":Number(t.currentSurah.number),"surah-name":t.currentSurah.name,"surah-latin":t.currentSurah.name_latin,"surah-translation":t.currentSurah.translations.id.name,source:"verse","show-settings":!1}}),t._v(" "),r("div",{staticClass:"detail__content"},[r("SingleVerse",{attrs:{verse:t.currentSurah.text[String(t.verseId)],"verse-index":String(t.verseId),"surah-id":t.surahId,translations:t.currentSurah.translations,tafsir:t.currentSurah.tafsir,source:"verse","show-settings":!1}})],1),t._v(" "),r("VerseNavigation",{attrs:{"surah-id":t.surahId,"verse-id":t.verseId,"verse-count":Number(t.currentSurah.number_of_ayah),"on-change-verse":t.onChangeVerse}})],1),t._v(" "),t._m(0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footnote"},[this._v("\n    Dibuat oleh "),e("a",{attrs:{href:"https://mazipan.space/",target:"_blank",rel:"noopener noreferrer"}},[this._v("Irfan Maulana")])])}],!1,null,"b4f6a11c",null);e.default=component.exports}}]);