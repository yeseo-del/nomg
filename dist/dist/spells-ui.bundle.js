(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[12],{115:function(t,e,i){var s=i(147);"string"==typeof s&&(s=[[t.i,s,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};i(15)(s,l);s.locals&&(t.exports=s.locals)},116:function(t,e,i){var s=i(149);"string"==typeof s&&(s=[[t.i,s,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};i(15)(s,l);s.locals&&(t.exports=s.locals)},146:function(t,e,i){"use strict";var s=i(115);i.n(s).a},147:function(t,e,i){(t.exports=i(14)(!1)).push([t.i,"\n.spellbook[data-v-6adcb0a2] {\r\n\tpadding: 4px;\r\n\toverflow-y: auto;\r\n\theight:100%;\r\n\tmargin-bottom: 20px;\n}\n.spellbook table[data-v-6adcb0a2] { display: flex; flex-flow: row wrap; justify-content: space-between;\n}\n.spellbook table tr[data-v-6adcb0a2] { display:flex; flex-basis: 48%;\n}\n.spellbook table tr td[data-v-6adcb0a2]:nth-child(1), .spellbook table tr td[data-v-6adcb0a2]:nth-child(3) {\r\n\tflex-basis: 20%; order: 3;\n}\n.spellbook table tr td[data-v-6adcb0a2]:nth-child(2) { flex: 1; order: 1;}\n.spellbook table tr td[data-v-6adcb0a2]:nth-child(3) { flex-basis: 20%; order: 2;\n}\n.spellbook table td[data-v-6adcb0a2] { display: flex;\n}\ndiv.spellbook[data-v-6adcb0a2] { flex-direction: column; padding: 0;\n}\ndiv.spellbook[data-v-6adcb0a2] { margin: 0; padding: var(--md-gap);\n}\ndiv.spellbook table[data-v-6adcb0a2] {\r\n        display: grid; grid-template-columns: minmax( 256px, 1fr ) repeat( auto-fit, minmax( 256px, 1fr ));\r\n        grid-auto-rows:  1fr;\n}\ndiv.spellbook  table tr[data-v-6adcb0a2] { padding: var(--sm-gap); display:flex; align-items:center;\n}\ndiv.spellbook  table tr td[data-v-6adcb0a2]:nth-child(1),\r\n    div.spellbook  table tr td[data-v-6adcb0a2]:nth-child(2){ flex: 1;\n}\ndiv.spellbook  table tr td[data-v-6adcb0a2]:nth-child(2){ flex: 2;\n}\ndiv.spellbook button[data-v-6adcb0a2] { flex: 1; font-size: var(--compact-small-font); margin: 0;\n}\r\n\r\n\r\n",""])},148:function(t,e,i){"use strict";var s=i(116);i.n(s).a},149:function(t,e,i){(t.exports=i(14)(!1)).push([t.i,"\ndiv.spells[data-v-1967362c] {\r\n\r\n\tdisplay:flex;\r\n\tflex-flow: column nowrap;\r\n\tpadding: 8px 14px;\r\n\theight:100%;\n}\ndiv.spells .bottom[data-v-1967362c] {\r\n\tdisplay:flex;\r\n\tflex-flow: row nowrap;\n}\ndiv.spells .spellbook[data-v-1967362c] {\r\n\tflex-grow:1;\n}\ndiv.spells .spelllist[data-v-1967362c] {\r\n\tborder-left: 1px solid var( --separator-color );\r\n\twidth:140px;\r\n\tpadding: var( --tiny-gap );\r\n\tflex-shrink: 1;\n}\ndiv.spells div.filters div[data-v-1967362c] { box-sizing: border-box; margin: 0;\n}\ndiv.spells div.filters div[data-v-1967362c]:nth-child(1),\r\ndiv.spells div.filters div[data-v-1967362c]:nth-child(2) {\r\n        flex-basis: 50%;\n}\ndiv.spells div.filters > div input[type=text][data-v-1967362c],\r\ndiv.spells div.filters > div input[type=number][data-v-1967362c] {\r\n\r\n\t\tflex: 1;\r\n\t\tmargin-right: 1em;\r\n\t\tmargin-left: 1em;\r\n\t\tmin-width: unset;\r\n\t\tmax-width: unset;\r\n\t\tpadding: 4px 0;\r\n\t\tfont-size: 105%;\n}\ndiv.spells div.filters > div input[data-v-1967362c] { min-width: 0; padding: 0; text-indent: var(--sm-gap);\n}\ndiv.spells .filters[data-v-1967362c] {\r\n        flex-flow: row wrap; display: flex; text-align: center;\r\n        border-bottom: 1px solid var(--separator-color);\r\n        margin: 0; padding: var(--sm-gap); line-height: 2em; justify-content: flex-start;\n}\ndiv.spells div.filters div.checks[data-v-1967362c] { margin: 0; padding: 0 0.5em; flex-basis: unset;\n}\r\n\r\n\r\n\r\n",""])},165:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"spells"},[i("div",{staticClass:"filters"},[i("filterbox",{attrs:{items:t.spells},model:{value:t.filtered,callback:function(e){t.filtered=e},expression:"filtered"}}),t._v(" "),i("div",[i("label",{staticClass:"level-lbl",attrs:{for:t.elmId("level")}},[t._v("Level")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.minLevel,expression:"minLevel"}],staticClass:"level",attrs:{id:t.elmId("level"),type:"number",min:"0",size:"5"},domProps:{value:t.minLevel},on:{input:function(e){e.target.composing||(t.minLevel=e.target.value)}}})]),t._v(" "),t._l(t.allSchools,(function(e,s){return i("div",{key:s,staticClass:"checks"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.viewSchools,expression:"viewSchools"}],attrs:{type:"checkbox",id:t.elmId("chk"+s)},domProps:{value:s,checked:Array.isArray(t.viewSchools)?t._i(t.viewSchools,s)>-1:t.viewSchools},on:{change:function(e){var i=t.viewSchools,l=e.target,n=!!l.checked;if(Array.isArray(i)){var a=s,r=t._i(i,a);l.checked?r<0&&(t.viewSchools=i.concat([a])):r>-1&&(t.viewSchools=i.slice(0,r).concat(i.slice(r+1)))}else t.viewSchools=n}}}),t._v(" "),i("label",{attrs:{for:t.elmId("chk"+s)}},[t._v(t._s(s))])])})),t._v(" "),i("button",{on:{click:t.toggle}},[t._v("Memorized")])],2),t._v(" "),i("div",{staticClass:"bottom"},[i("book",{staticClass:"spellbook",attrs:{viewing:t.viewing}}),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.showList,expression:"showList"}]},[i("spelllist",{staticClass:"spelllist",attrs:{list:t.list}})],1)],1)])};s._withStripped=!0;var l=i(1),n=i(10),a=(i(4),i(12)),r=i(97),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"spellbook"},[i("table",t._l(t.viewing,(function(e){return i("tr",{key:e.id,on:{"!mouseenter":function(i){return i.stopPropagation(),t.emit("itemover",i,e)}}},[i("td",[e.owned&&t.list.canAdd(e)?i("button",{on:{click:function(i){return t.list.add(e)}}},[t._v("Memorize")]):t._e()]),t._v(" "),i("td",[t._v(t._s(e.name))]),t._v(" "),i("td",[e.owned?i("button",{attrs:{disabled:!e.canUse(t.game)},on:{click:function(i){return t.emit("spell",e)}}},[t._v("Cast")]):i("button",{attrs:{disabled:!e.canUse(t.game)},on:{click:function(i){return t.emit("buy",e)}}},[t._v("Learn")])])])})),0)])};o._withStripped=!0;var d={props:["viewing"],mixins:[a.a],created(){this.game=l.c},computed:{state:()=>l.c.state,list:()=>l.c.state.spelllist}},c=(i(146),i(5)),v=Object(c.a)(d,o,[],!1,null,"6adcb0a2",null);v.options.__file="src/ui/spellbook.vue";var p=v.exports,u=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"spelllist",attrs:{functional:""}},[i("span",[t._v("Max Levels: "+t._s(t.list.used+" / "+Math.floor(t.list.max.value)))]),t._v(" "),t.list.full()?i("span",{staticClass:"warn-text"},[t._v("Spelllist is Full")]):t._e(),t._v(" "),t._l(t.list.items,(function(e,s){return i("div",{key:s,on:{"!mouseenter":function(i){return i.stopPropagation(),t.emit("itemover",i,e)}}},[i("span",[t._v(t._s(e.name))]),i("button",{on:{click:function(i){return t.list.remove(e)}}},[t._v("Remove")])])}))],2)};u._withStripped=!0;var m={props:["list"]},f=Object(c.a)(m,u,[],!1,null,"b96b8a38",null);f.options.__file="src/ui/spelllist.vue";var h=f.exports,b={data(){let t=n.a.getSubVars("spells");return Object.assign({showList:!1,filtered:null,schools:[],min:null,max:null},t)},mixins:[a.a],components:{filterbox:r.a,book:p,spelllist:h},methods:{toggle(){this.showList=n.a.setSubVar("spells","showList",!this.showList)}},computed:{state:()=>l.c.state,list:()=>l.c.state.spelllist,minLevel:{get(){return this.min},set(t){this.min=n.a.setSubVar("spells","min",Number(t))}},viewSchools:{get(){return this.schools},set(t){this.schools=t,n.a.setSubVar("spells","schools",this.schools.concat())}},allSchools(){let t={},e=this.spells;for(let s=e.length-1;s>=0;s--){var i=e[s];i.school&&(t[i.school]=!0)}return t},viewing(){let t=this.filtered||this.spells,e=this.schools,i=this.minLevel;return e.length>0||i?t.filter(t=>(0===e.length||e.includes(t.school))&&(!i||t.level===i)):t},spells(){return this.state.filterItems(t=>"spell"===t.type&&!this.locked(t))}}},x=(i(148),Object(c.a)(b,s,[],!1,null,"1967362c",null));x.options.__file="src/ui/sections/spells.vue";e.default=x.exports},94:function(t,e,i){var s=i(96);"string"==typeof s&&(s=[[t.i,s,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};i(15)(s,l);s.locals&&(t.exports=s.locals)},95:function(t,e,i){"use strict";var s=i(94);i.n(s).a},96:function(t,e,i){(t.exports=i(14)(!1)).push([t.i,"\nlabel[data-v-6d0e0bec] {\r\n\tmargin-right:8px;\n}\ndiv.filter-box[data-v-6d0e0bec] {\r\n\tfont-size: 105%;\r\n\tvertical-align: middle;\r\n\tline-height: 1.2em;\r\n\tmargin: 8px 4px 8px 12px;\n}\n.filter-box input[type=text][data-v-6d0e0bec] {\r\n\tpadding: 4px;\r\n\tfont-size: 105%;\n}\r\n",""])},97:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return!this.minItems||t.text||this.items.length>=this.minItems?i("div",{staticClass:"filter-box"},[i("label",{attrs:{for:t.elmId("filter")}},[t._v("Find")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.findText,expression:"findText"}],attrs:{id:t.elmId("filter"),type:"text"},domProps:{value:t.findText},on:{input:function(e){e.target.composing||(t.findText=e.target.value)}}})]):t._e()};s._withStripped=!0;var l={props:["value","items","prop","minItems"],data(){return{text:"",pprop:this.prop||"name"}},watch:{items(t,e){this.findText=this.findText}},created(){this.findText=this.text},methods:{clear(){this.text=""}},computed:{findText:{get(){return this.text},set(t){this.text=t;let e=this.pprop;t||this.$emit("input",this.items);var i=t.toLowerCase();"function"==typeof e?this.$emit("input",this.items.filter(t=>e(t,i))):this.$emit("input",this.items.filter(t=>"object"==typeof t&&"string"==typeof t[e]&&t[e].toLowerCase().includes(i)))}}}},n=(i(95),i(5)),a=Object(n.a)(l,s,[],!1,null,"6d0e0bec",null);a.options.__file="src/ui/components/filterbox.vue";e.a=a.exports}}]);