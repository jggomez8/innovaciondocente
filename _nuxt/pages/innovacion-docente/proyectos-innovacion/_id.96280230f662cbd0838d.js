webpackJsonp([3],{"/NCj":function(a,e,t){"use strict";e.a={data:function(){return{seletedID:null}},props:["videoID","maxRes"],computed:{getImage:function(){var a=null===this.maxRes?"hqdefault":"maxresdefault";return"https://i.ytimg.com/vi/"+this.videoID+"/"+a+".jpg"}},methods:{openImage:function(){this.seletedID=this.videoID,this.$refs.modal.style.display="block",document.documentElement.style.overflow="hidden"},close:function(){this.$refs.modal.style.display="none",this.seletedID=null,document.documentElement.style.overflow="auto"}}}},"251O":function(a,e,t){var o=t("BlJL");"string"==typeof o&&(o=[[a.i,o,""]]),o.locals&&(a.exports=o.locals);t("rjj0")("04def8be",o,!1,{sourceMap:!1})},BlJL:function(a,e,t){(a.exports=t("FZ+f")(!1)).push([a.i,".chips[data-v-2e841942]{display:-webkit-flex;-webkit-flex-wrap:wrap;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.chips-detail[data-v-2e841942]{border-radius:3px;padding:3px 7px;margin-bottom:8px;margin-right:8px;border-style:solid;border-width:3px;letter-spacing:.5px;cursor:pointer}.area-tecnica[data-v-2e841942]{border-color:#ffd76b;background-color:#ffd76b;color:#000}.area-sociohumanistica[data-v-2e841942]{border-color:#34d4ea;background-color:#34d4ea;color:#fff}.area-administrativa[data-v-2e841942]{border-color:#979797;background-color:#979797;color:#fff}.area-biologica[data-v-2e841942]{border-color:#00981c;background-color:#00981c;color:#fff}",""])},EYc5:function(a,e,t){"use strict";e.a={props:["img"],methods:{openImage:function(){document.querySelector("body");this.$refs.modal.style.display="block",document.documentElement.style.overflow="hidden"},close:function(){document.querySelector("body");this.$refs.modal.style.display="none",document.documentElement.style.overflow="auto"}}}},FEKe:function(a,e,t){"use strict";var o=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",[t("header",[t("h1",[a._v("\n      "+a._s(a.proyecto.name)+"\n    ")])]),t("section",{staticClass:"container"},[a.proyecto.img?t("div",[t("div",{staticClass:"banner"},[t("div",{staticClass:"banner-img",style:a.getBannerPath(a.proyecto.img)})]),t("div",{staticClass:"spacer"})]):a._e(),t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-4"},[t("h2",[a._v(a._s(a._f("proyectoInnovacionType")(a.proyecto.type)))]),t("h3",[t("b",[a._v("Modalidad: ")]),a._v(" "+a._s(a.proyecto.modality))]),t("div",{staticClass:"spacer"}),a.proyecto.area.administrativa||a.proyecto.area.biologica||a.proyecto.area.sociohumanistica||a.proyecto.area.tecnica?t("span",{staticClass:"areas"},[t("h3",[a._v("Areas")]),t("AreasChips",{attrs:{area:a.proyecto.area,queryType:a.proyecto.type}}),t("div",{staticClass:"spacer"})],1):a._e(),a.proyecto.participants.length>0?t("span",[t("h3",[a._v("Carreras Participantes")]),t("ul",a._l(a.getProjectCarreers(a.proyecto.participants),function(e,o){return t("li",{key:o},[a._v(a._s(e))])})),t("div",{staticClass:"spacer"})]):a._e(),a.proyecto.documents.length>0?t("span",[t("h3",[a._v("Descargables")]),t("ul",a._l(a.proyecto.documents,function(e,o){return t("li",{key:o},[a._v(a._s(e))])}))]):a._e(),t("br"),a.proyecto.infografic?t("div",[t("ImageModal",{attrs:{img:a.proyecto.infografic}}),t("div",{staticClass:"spacer"})],1):a._e()]),t("div",{staticClass:"col-md-8"},[t("h3",[a._v("Coordinador de la propuesta")]),t("span",{staticClass:"data-field"},[a._v(a._s(a.proyecto.coordinator))]),t("div",{staticClass:"spacer"}),a.proyecto.periods.length>0?t("span",[t("h3",[a._v("Período académico de ejecución")]),t("span",{staticClass:"data-field"},[a._v("\n            "+a._s(a.getProjectPeriods(a.proyecto.periods))+"\n          ")])]):a._e(),t("div",{staticClass:"spacer"}),t("span",[t("h3",[a._v("Línea estratégica que se desarrollará en la propuesta")]),t("span",{staticClass:"data-field"},[a._v("\n            "+a._s(a.proyecto.strategicLine)+"\n          ")])]),t("div",{staticClass:"spacer"}),a.proyecto.subject?t("span",[t("h3",[a._v("Asignatura ")]),t("span",{staticClass:"data-field"},[a._v("\n            "+a._s(a.proyecto.subject)+"\n          ")])]):a._e(),t("div",{staticClass:"spacer"}),a.proyecto.participants.length>0?t("span",[t("h3",[a._v("Docentes que participan en la propuesta ")]),t("ul",a._l(a.proyecto.participants,function(e,o){return t("li",{key:o},[a._v(a._s(e.name))])}))]):a._e(),t("br"),a.proyecto.videoID?t("VideoModal",{attrs:{videoID:a.proyecto.videoID,maxRes:"true"}}):a._e()],1)])])])};o._withStripped=!0;var i={render:o,staticRenderFns:[]};e.a=i},JFdW:function(a,e,t){var o=t("K1jw");"string"==typeof o&&(o=[[a.i,o,""]]),o.locals&&(a.exports=o.locals);t("rjj0")("ed1f11a0",o,!1,{sourceMap:!1})},K1jw:function(a,e,t){(a.exports=t("FZ+f")(!1)).push([a.i,".img[data-v-07ca086b]{width:100%;cursor:pointer;-webkit-transition:.3s;transition:.3s;display:block}.img[data-v-07ca086b]:hover{opacity:.7}.modal[data-v-07ca086b]{display:none;position:fixed;z-index:2000;padding-top:130px;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:#000;background-color:rgba(0,0,0,.95);cursor:auto}.modal-embed-container[data-v-07ca086b]{width:80%;max-width:1200px;height:675px;position:relative;overflow:hidden;margin:auto;-webkit-animation-name:zoom-data-v-07ca086b;-webkit-animation-duration:.6s;animation-name:zoom-data-v-07ca086b;animation-duration:.6s}@media only screen and (max-width:1200px){.modal-embed-container[data-v-07ca086b]{padding-top:130px;width:100%}}.modal-embed-container iframe[data-v-07ca086b]{position:absolute;top:0;left:0;width:100%;height:100%}.modal-close[data-v-07ca086b]{position:absolute;top:15px;right:35px;color:#f1f1f1;font-size:45px;font-weight:700;-webkit-transition:.3s;transition:.3s}.modal-close[data-v-07ca086b]:focus,.modal-close[data-v-07ca086b]:hover{color:#bbb;text-decoration:none;cursor:pointer}@-webkit-keyframes zoom-data-v-07ca086b{0%{-webkit-transform:scale(0)}to{-webkit-transform:scale(1)}}@keyframes zoom-data-v-07ca086b{0%{-webkit-transform:scale(.1);transform:scale(.1)}to{-webkit-transform:scale(1);transform:scale(1)}}",""])},OFry:function(a,e,t){var o=t("fa84");"string"==typeof o&&(o=[[a.i,o,""]]),o.locals&&(a.exports=o.locals);t("rjj0")("b840aab2",o,!1,{sourceMap:!1})},PGpR:function(a,e,t){"use strict";var o=t("EYc5"),i=t("b41J"),n=!1;var r=function(a){n||t("xf6x")},s=t("VU/8")(o.a,i.a,!1,r,"data-v-5d2e20ea",null);s.options.__file="components/utils/ImageModal.vue",e.a=s.exports},UiGL:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=t("evdE"),i=t("FEKe"),n=!1;var r=function(a){n||t("OFry")},s=t("VU/8")(o.a,i.a,!1,r,"data-v-05fc4baa",null);s.options.__file="pages/innovacion-docente/proyectos-innovacion/_id.vue",e.default=s.exports},V26r:function(a,e,t){(a.exports=t("FZ+f")(!1)).push([a.i,".img[data-v-5d2e20ea]{width:100%;cursor:pointer;-webkit-transition:.3s;transition:.3s;display:block}.img[data-v-5d2e20ea]:hover{opacity:.7}.modal[data-v-5d2e20ea]{display:none;position:fixed;z-index:2000;padding-top:20px;padding-bottom:20px;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:#000;background-color:rgba(0,0,0,.95);cursor:auto}.modal-img[data-v-5d2e20ea]{margin:auto;display:block;width:80%;max-width:700px;-webkit-animation-name:zoom-data-v-5d2e20ea;-webkit-animation-duration:.6s;animation-name:zoom-data-v-5d2e20ea;animation-duration:.6s}@media only screen and (max-width:700px){.modal-img[data-v-5d2e20ea]{padding-top:80px;padding-bottom:0;width:100%}}.modal-close[data-v-5d2e20ea]{position:absolute;top:15px;right:35px;color:#f1f1f1;font-size:45px;font-weight:700;-webkit-transition:.3s;transition:.3s}.modal-close[data-v-5d2e20ea]:focus,.modal-close[data-v-5d2e20ea]:hover{color:#bbb;text-decoration:none;cursor:pointer}@-webkit-keyframes zoom-data-v-5d2e20ea{0%{-webkit-transform:scale(0)}to{-webkit-transform:scale(1)}}@keyframes zoom-data-v-5d2e20ea{0%{-webkit-transform:scale(.1);transform:scale(.1)}to{-webkit-transform:scale(1);transform:scale(1)}}",""])},b41J:function(a,e,t){"use strict";var o=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",[t("img",{staticClass:"img",attrs:{id:"img",src:a.img,alt:"Img"},on:{click:a.openImage}}),t("div",{ref:"modal",staticClass:"modal",on:{keyup:function(e){return"button"in e||!a._k(e.keyCode,"esc",27,e.key,"Escape")?a.close(e):null}}},[t("span",{ref:"close",staticClass:"modal-close",on:{click:a.close}},[a._v("×")]),t("img",{ref:"modalImg",staticClass:"modal-img",attrs:{src:a.img,id:"img01"}})])])};o._withStripped=!0;var i={render:o,staticRenderFns:[]};e.a=i},evdE:function(a,e,t){"use strict";var o=t("Xxa5"),i=t.n(o),n=t("Dd8w"),r=t.n(n),s=t("exGp"),c=t.n(s),d=t("2we2"),l=t("vo0C"),p=t("PGpR"),u=t("uX9e");e.a={asyncData:function(){var a=c()(i.a.mark(function a(e){var t,o,n=e.params;return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t=null,a.prev=1,a.next=4,d.a.collection("/innovacion-docente/proyectos-innovacion/proyectos").doc(n.id).get();case 4:(o=a.sent).exists&&(t=r()({},o.data(),{id:o.id})),a.next=10;break;case 8:a.prev=8,a.t0=a.catch(1);case 10:return a.abrupt("return",{proyecto:t});case 11:case"end":return a.stop()}},a,this,[[1,8]])}));return function(e){return a.apply(this,arguments)}}(),methods:{getBannerPath:function(a){return"background-image: url("+a+");"},getProjectPeriods:function(a){for(var e="",t=0;t<a.length;t++)e+=a[t].name,t<a.length-1&&(e+=" / ");return e},getProjectCarreers:function(a){for(var e=[],t=0;t<a.length;t++)e.push(a[t].department);return e.filter(function(a,t){return e.indexOf(a)==t})}},components:{AreasChips:l.a,ImageModal:p.a,VideoModal:u.a},head:function(){return{title:this.proyecto?this.proyecto.name:"No se encontro el proyecto"}}}},fa84:function(a,e,t){var o=t("kxFB");(a.exports=t("FZ+f")(!1)).push([a.i,"header[data-v-05fc4baa]{background:#044a80;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:center;align-content:center;min-height:200px}header h1[data-v-05fc4baa]{font-weight:700;text-align:center;color:#fff;font-size:28px;margin:0}.banner[data-v-05fc4baa]{height:40vh;width:100%;overflow:hidden}.banner-img[data-v-05fc4baa]{background-image:url("+o(t("w5nn"))+");height:100%;width:100%;background-color:#044a80;background-position:50%;background-size:cover;background-repeat:no-repeat;overflow:hidden}h1[data-v-05fc4baa]{font-size:26px;font-weight:600;padding-bottom:15px}.spacer[data-v-05fc4baa]{margin-bottom:20px!important;margin-top:20px!important}ul[data-v-05fc4baa]{margin-bottom:20px}h2[data-v-05fc4baa]{font-size:28px;font-weight:400;margin-bottom:20px;color:#044a80}h3[data-v-05fc4baa]{font-size:23px;font-weight:400}.data-field[data-v-05fc4baa]{margin-left:15px}",""])},kxFB:function(a,e){a.exports=function(a){return"string"!=typeof a?a:(/^['"].*['"]$/.test(a)&&(a=a.slice(1,-1)),/["'() \t\n]/.test(a)?'"'+a.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':a)}},m3ZX:function(a,e,t){"use strict";e.a={props:["area","queryType"]}},s5gV:function(a,e,t){"use strict";var o=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",[t("img",{staticClass:"img",attrs:{id:"img",src:this.getImage,alt:"Imagen Video "+a.videoID},on:{click:a.openImage}}),t("div",{ref:"modal",staticClass:"modal",on:{keyup:function(e){return"button"in e||!a._k(e.keyCode,"esc",27,e.key,"Escape")?a.close(e):null}}},[t("span",{staticClass:"modal-close",on:{click:a.close}},[a._v("×")]),a.seletedID?t("div",{staticClass:"modal-embed-container"},[t("iframe",{attrs:{src:"https://www.youtube.com/embed/"+a.seletedID+"?enablejsapi=1&html5=1",frameborder:"0",title:"Video "+a.videoID,allow:"autoplay; encrypted-media",allowfullscreen:""}})]):a._e()])])};o._withStripped=!0;var i={render:o,staticRenderFns:[]};e.a=i},uX9e:function(a,e,t){"use strict";var o=t("/NCj"),i=t("s5gV"),n=!1;var r=function(a){n||t("JFdW")},s=t("VU/8")(o.a,i.a,!1,r,"data-v-07ca086b",null);s.options.__file="components/utils/VideoModal.vue",e.a=s.exports},vo0C:function(a,e,t){"use strict";var o=t("m3ZX"),i=t("yRaa"),n=!1;var r=function(a){n||t("251O")},s=t("VU/8")(o.a,i.a,!1,r,"data-v-2e841942",null);s.options.__file="components/innovacion-docente/proyectos-innovacion/AreasChips.vue",e.a=s.exports},w5nn:function(a,e,t){a.exports=t.p+"img/default.b986ab7.png"},xf6x:function(a,e,t){var o=t("V26r");"string"==typeof o&&(o=[[a.i,o,""]]),o.locals&&(a.exports=o.locals);t("rjj0")("3f8c2d9a",o,!1,{sourceMap:!1})},yRaa:function(a,e,t){"use strict";var o=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"chips"},[a.area.administrativa?t("nuxt-link",{staticClass:"chips-detail area-administrativa",attrs:{tag:"span",to:{name:"innovacion-docente-proyectos-innovacion",query:{view:"normal",type:a.queryType,area:"administrativa"}}}},[a._v("Área Administrativa")]):a._e(),a.area.biologica?t("nuxt-link",{staticClass:"chips-detail area-biologica",attrs:{tag:"span",to:{name:"innovacion-docente-proyectos-innovacion",query:{view:"normal",type:a.queryType,area:"biologica"}}}},[a._v("Área Biológica y Biomédica")]):a._e(),a.area.sociohumanistica?t("nuxt-link",{staticClass:"chips-detail area-sociohumanistica",attrs:{tag:"span",to:{name:"innovacion-docente-proyectos-innovacion",query:{view:"normal",type:a.queryType,area:"sociohumanistica"}}}},[a._v("Área Sociohumanística")]):a._e(),a.area.tecnica?t("nuxt-link",{staticClass:"chips-detail area-tecnica",attrs:{tag:"span",to:{name:"innovacion-docente-proyectos-innovacion",query:{view:"normal",type:a.queryType,area:"tecnica"}}}},[a._v("Área Técnica")]):a._e()],1)};o._withStripped=!0;var i={render:o,staticRenderFns:[]};e.a=i}});