webpackJsonp([26],{"5CcW":function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("header",[e("h1",[t._v("\n      "+t._s(t.data.title)+"\n    ")])]),e("section",{staticClass:"container"},[e("p",[t._v("\n      "+t._s(t.data.description)+"\n    ")]),t._l(t.data.resources,function(a,i){return e("div",{key:i},[e("h2",[t._v(t._s(a.title))]),e("div",{staticClass:"card-container"},t._l(a.cards,function(a,i){return e("div",{key:i,staticClass:"item"},[a.img?e("img",{attrs:{src:a.img,alt:"img"}}):t._e(),e("h3",[t._v(t._s(a.title))]),e("p",[t._v(t._s(a.description))])])}))])}),e("button",{staticClass:"btn btn-outline-primary btn-large btn-sm",on:{click:function(a){t.$router.go(-1)}}},[t._v("Regresar")])],2)])};i._withStripped=!0;var n={render:i,staticRenderFns:[]};a.a=n},F6Qp:function(t,a,e){"use strict";var i=e("Xxa5"),n=e.n(i),r=e("exGp"),o=e.n(r),d=e("mtWM"),s=e.n(d);a.a={asyncData:function(){var t=o()(n.a.mark(function t(){var a,e;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("https://innovaciondocente-utpl.firebaseio.com/observatorio-edutendencias/recursos-digitales.json");case 2:return a=t.sent,e=a.data,t.abrupt("return",{data:e});case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),head:function(){return{title:this.data.title,meta:[{hid:"description",name:"description",content:this.data.description}]}}}},WSPl:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e("F6Qp"),n=e("5CcW"),r=!1;var o=function(t){r||e("uxjE")},d=e("VU/8")(i.a,n.a,!1,o,"data-v-1896a5ae",null);d.options.__file="pages/formacion-docente/desarrollo-asignatura/recursos.vue",a.default=d.exports},sXRq:function(t,a,e){(t.exports=e("FZ+f")(!1)).push([t.i,"header[data-v-1896a5ae]{background:#044a80;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:center;align-content:center;min-height:200px}header h1[data-v-1896a5ae]{font-weight:700;text-align:center;color:#fff;font-size:28px;margin:0}h2[data-v-1896a5ae]{color:#044a80}.html[data-v-1896a5ae] img{width:auto}.html[data-v-1896a5ae] blockquote,.html[data-v-1896a5ae] img{display:block;margin-left:auto;margin-right:auto;padding-top:20px;padding-bottom:20px}.html[data-v-1896a5ae] blockquote{width:100%;text-align:center}.html[data-v-1896a5ae] .embed-container{position:relative;margin:20px auto;width:100%;padding-bottom:56.25%;height:0;overflow:hidden}.html[data-v-1896a5ae] .embed-container iframe{position:absolute;top:0;left:0;width:100%;height:100%}.html[data-v-1896a5ae] [class^=col]{padding:0;margin:0}@media (max-width:768px){.html[data-v-1896a5ae] img{width:100%}}@media (min-width:768px){.html[data-v-1896a5ae] img{height:80vh}.html[data-v-1896a5ae] blockquote{width:80%}.html[data-v-1896a5ae] .embed-container{width:80%;padding-bottom:45%}}.html[data-v-1896a5ae] table{border-collapse:collapse;width:100%;border:2px solid #044a80;border-radius:5px;margin-bottom:25px}.html[data-v-1896a5ae] table td,.html[data-v-1896a5ae] table th{text-align:center;border:1px solid #044a80;padding:8px}.html[data-v-1896a5ae] table tr:nth-child(odd){background-color:#a0d4fc}.html[data-v-1896a5ae] table th{background-color:#044a80;color:#fff}.card-container[data-v-1896a5ae]{display:grid;grid-gap:10px;grid-template-columns:repeat(auto-fill,minmax(300px,1fr))}.item[data-v-1896a5ae]{border-radius:5px;padding:10px;grid-row-end:span 6;border:1px solid #044a80}",""])},uxjE:function(t,a,e){var i=e("sXRq");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("rjj0")("5ed170fd",i,!1,{sourceMap:!1})}});