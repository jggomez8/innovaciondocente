webpackJsonp([24],{"3cL9":function(t,a,n){"use strict";var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-3"},[n("section",{staticClass:"sticky"},[n("nuxt-link",{staticClass:"btn btn-outline-primary btn-large",attrs:{to:{name:"formacion-docente-jornadas-de-reflexion-jornadas-anteriores"}}},[t._v("\n          JORNADAS "),n("br"),t._v(" DE REFLEXIÓN\n        ")]),t._l(t.data,function(a,e){return n("nuxt-link",{key:e,staticClass:"btn btn-outline-primary btn-large",attrs:{to:{name:"formacion-docente-jornadas-de-reflexion-jornadas-anteriores-id",params:{id:e}}}},[t._v("\n          "+t._s(a.periodo)+"\n        ")])}),n("nuxt-link",{staticClass:"btn btn-primary btn-large",attrs:{to:{name:"formacion-docente-jornadas-de-reflexion"}}},[t._v("\n          Jornada Actual\n        ")])],2)]),n("section",{staticClass:"col-lg-9"},[n("nuxt-child")],1)])])};e._withStripped=!0;var r={render:e,staticRenderFns:[]};a.a=r},"7H/5":function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=n("wDm2"),r=n("3cL9"),o=!1;var i=function(t){o||n("g7Ca")},s=n("VU/8")(e.a,r.a,!1,i,"data-v-6a4baa04",null);s.options.__file="pages/formacion-docente/jornadas-de-reflexion/jornadas-anteriores.vue",a.default=s.exports},DkQk:function(t,a,n){(t.exports=n("FZ+f")(!1)).push([t.i,"@supports ((position:-webkit-sticky) or (position:sticky)){.sticky[data-v-6a4baa04]{position:-webkit-sticky;position:sticky;top:0;z-index:3}}section[data-v-6a4baa04]{padding-bottom:0}",""])},g7Ca:function(t,a,n){var e=n("DkQk");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);n("rjj0")("2bb1b776",e,!1,{sourceMap:!1})},wDm2:function(t,a,n){"use strict";var e=n("Xxa5"),r=n.n(e),o=n("exGp"),i=n.n(o),s=n("mtWM"),c=n.n(s);a.a={asyncData:function(){var t=i()(r.a.mark(function t(){var a,n;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.get("https://innovaciondocente-utpl.firebaseio.com/formacion-docente/jornadas-de-reflexion.json");case 2:return a=t.sent,n=a.data,t.abrupt("return",{data:n});case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}}});