(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[3],{104:function(t,n,i){var e=i(131);"string"==typeof e&&(e=[[t.i,e,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};i(16)(e,a);e.locals&&(t.exports=e.locals)},130:function(t,n,i){"use strict";var e=i(104);i.n(e).a},131:function(t,n,i){(t.exports=i(15)(!1)).push([t.i,"\n.equip[data-v-4284ca61] {\r\n    overflow-y: auto;\r\n    display: grid; grid-template-columns: repeat( auto-fill, minmax(220px,1fr)); grid-gap: var(--sm-gap); padding: var(--tiny-gap);\n}\n.equip .equip-slot[data-v-4284ca61] {\r\n     display: flex;height: unset; flex-flow: column; margin: 0; padding: var(--sm-gap);\n}\n.equip .equip-slot .slot-item[data-v-4284ca61] {\r\n    display:flex;\n}\n.equip-slot .subslots[data-v-4284ca61] {\r\n\tdisplay: flex; flex-flow: column; text-indent: 1em;\n}\n.equip-slot[data-v-4284ca61] {\r\n\tdisplay:flex;\r\n\tmargin: 2px 0px;\n}\n.equip-slot button[data-v-4284ca61] {\r\n\tmargin-left: 10px;\r\n\tpadding: 6px;\n}\ntd.slot-name[data-v-4284ca61] {\r\n\tfont-weight: bold;\n}\r\n\r\n",""])},172:function(t,n,i){"use strict";i.r(n);var e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"equip"},t._l(t.equip.slots,(function(n,e){return i("div",{key:e,staticClass:"equip-slot"},[i("td",{staticClass:"slot-name"},[t._v(t._s(n.name+":"))]),t._v(" "),n.empty()?i("td",{staticClass:"slot-item"}):n.multi?i("td",{staticClass:"sub-slots"},t._l(n.item,(function(e){return i("div",{key:e.id,staticClass:"slot-item",on:{"!mouseenter":function(n){return n.stopPropagation(),t.emit("itemover",n,e)}}},[i("button",{on:{click:function(i){return t.emit("unequip",n,e)}}},[t._v("Unequip")]),i("span",{staticClass:"item-name"},[t._v(t._s(e.name))])])})),0):i("td",{staticClass:"slot-item"},[i("div",{on:{"!mouseenter":function(i){return i.stopPropagation(),t.emit("itemover",i,n.item)}}},[i("button",{on:{click:function(i){return t.emit("unequip",n,n.item)}}},[t._v("Unequip")]),i("span",{staticClass:"item-name"},[t._v(t._s(n.item.name))])])])])})),0)};e._withStripped=!0;var a={props:["equip"]},s=(i(130),i(5)),o=Object(s.a)(a,e,[],!1,null,"4284ca61",null);o.options.__file="src/ui/sections/equip.vue";n.default=o.exports}}]);