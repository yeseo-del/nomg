(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[16],{123:function(t,e,s){var n=s(125);"string"==typeof n&&(n=[[t.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};s(18)(n,i);n.locals&&(t.exports=n.locals)},124:function(t,e,s){"use strict";s(123)},125:function(t,e,s){(e=s(17)(!1)).push([t.i,"\nlabel[data-v-6d0e0bec] {\n\tmargin-right:var(--md-gap);\n}\n",""]),t.exports=e},126:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return!this.minItems||t.text||this.items.length>=this.minItems?s("div",{staticClass:"filter-box"},[s("label",{attrs:{for:t.elmId("filter")}},[t._v("Find")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.findText,expression:"findText"}],attrs:{id:t.elmId("filter"),type:"text"},domProps:{value:t.findText},on:{input:function(e){e.target.composing||(t.findText=e.target.value)}}})]):t._e()};n._withStripped=!0;var i={props:["value","items","prop","minItems"],data(){return{text:"",pprop:this.prop||"name"}},watch:{items(t,e){this.findText=this.findText}},created(){this.findText=this.text},methods:{clear(){this.text=""}},computed:{findText:{get(){return this.text},set(t){this.text=t;let e=this.pprop;t||this.$emit("input",this.items);var s=t.toLowerCase();"function"==typeof e?this.$emit("input",this.items.filter(t=>e(t,s))):this.$emit("input",this.items.filter(t=>"object"==typeof t&&"string"==typeof t[e]&&t[e].toLowerCase().includes(s)))}}}},l=(s(124),s(6)),o=Object(l.a)(i,n,[],!1,null,"6d0e0bec",null);o.options.__file="src/ui/components/filterbox.vue";e.a=o.exports},145:function(t,e,s){var n=s(187);"string"==typeof n&&(n=[[t.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};s(18)(n,i);n.locals&&(t.exports=n.locals)},146:function(t,e,s){var n=s(189);"string"==typeof n&&(n=[[t.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};s(18)(n,i);n.locals&&(t.exports=n.locals)},147:function(t,e,s){var n=s(191);"string"==typeof n&&(n=[[t.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};s(18)(n,i);n.locals&&(t.exports=n.locals)},186:function(t,e,s){"use strict";s(145)},187:function(t,e,s){(e=s(17)(!1)).push([t.i,"\n.spellbook[data-v-6adcb0a2] {\n\tpadding: var(--sm-gap);\n\toverflow-y: auto;\n\theight:100%;\n\tmargin-bottom: 1.2rem;\n}\ndiv.spellbook table[data-v-6adcb0a2] { display: flex; flex-flow: row wrap; justify-content: space-between;\n}\n.spellbook table tr[data-v-6adcb0a2] { display:flex; flex-basis: 48%;\n}\n.spellbook table tr td[data-v-6adcb0a2]:nth-child(1), .spellbook table tr td[data-v-6adcb0a2]:nth-child(3) {\n\tflex-basis: 20%; order: 3;\n}\n.spellbook table tr td[data-v-6adcb0a2]:nth-child(2) { flex: 1; order: 1;}\n.spellbook table tr td[data-v-6adcb0a2]:nth-child(3) { flex-basis: 20%; order: 2;\n}\n.spellbook table td[data-v-6adcb0a2] { display: flex;\n}\ndiv.spellbook[data-v-6adcb0a2] { flex-direction: column; padding: 0;\n}\ndiv.spellbook[data-v-6adcb0a2] { margin: 0; padding: var(--md-gap);\n}\ndiv.spellbook  table tr[data-v-6adcb0a2] { padding: var(--sm-gap); display:flex; align-items:center;\n}\ndiv.spellbook  table tr td[data-v-6adcb0a2]:nth-child(1),\n    div.spellbook  table tr td[data-v-6adcb0a2]:nth-child(2){ flex: 1;\n}\ndiv.spellbook  table tr td[data-v-6adcb0a2]:nth-child(2){ flex: 2;\n}\ndiv.spellbook button[data-v-6adcb0a2] { flex: 1; font-size: var(--compact-small-font); margin: 0;\n}\n\n\n",""]),t.exports=e},188:function(t,e,s){"use strict";s(146)},189:function(t,e,s){(e=s(17)(!1)).push([t.i,"\n.spelllist span[data-v-b96b8a38]:first-child {\n\tborder-bottom: 1px solid var(--separator-color);\n\tmargin-bottom: var(--sm-gap);\n}\n\n",""]),t.exports=e},190:function(t,e,s){"use strict";s(147)},191:function(t,e,s){(e=s(17)(!1)).push([t.i,"\ndiv.spells[data-v-1967362c] {\n\n\tdisplay:flex;\n\tflex-flow: column nowrap;\n\tpadding: var(--sm-gap) var(--md-gap);\n\theight:100%;\n}\ndiv.spells .bottom[data-v-1967362c] {\n\tdisplay:flex;\n\tflex-flow: row nowrap;\n}\ndiv.spells .spellbook[data-v-1967362c] {\n\tflex-basis: 80%;\n\tflex-grow: 1;\n}\ndiv.spells .spelllist[data-v-1967362c] {\n\tborder-left: 1px solid var( --separator-color );\n\tpadding: var( --sm-gap );\n}\ndiv.spells div.filters div[data-v-1967362c] { box-sizing: border-box; margin: 0;\n}\ndiv.spells div.filters div[data-v-1967362c]:nth-child(1),\ndiv.spells div.filters div[data-v-1967362c]:nth-child(2) {\n        flex-basis: 50%;\n}\ndiv.spells div.filters > div input[type=text][data-v-1967362c],\ndiv.spells div.filters > div input[type=number][data-v-1967362c] {\n\n\t\tflex: 1;\n\t\tmargin-right: 1em;\n\t\tmargin-left: 1em;\n\t\tmin-width: unset;\n\t\tmax-width: unset;\n\t\tpadding:var(--tiny-gap) 0;\n\t\tfont-size: 105%;\n}\ndiv.spells div.filters > div input[data-v-1967362c] { min-width: 0; padding: 0; text-indent: var(--sm-gap);\n}\ndiv.spells .filters[data-v-1967362c] {\n        flex-flow: row wrap; display: flex; text-align: center;\n        border-bottom: 1px solid var(--separator-color);\n        margin: 0; padding: var(--sm-gap); line-height: 2em; justify-content: flex-start;\n}\ndiv.spells div.filters div.checks[data-v-1967362c] { margin: 0; padding: 0 0.5em; flex-basis: unset;\n}\n\n\n\n",""]),t.exports=e},214:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"spells"},[s("div",{staticClass:"filters"},[s("filterbox",{attrs:{items:t.spells},model:{value:t.filtered,callback:function(e){t.filtered=e},expression:"filtered"}}),t._v(" "),s("div",[s("label",{staticClass:"level-lbl",attrs:{for:t.elmId("level")}},[t._v("Level")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.minLevel,expression:"minLevel"}],staticClass:"level",attrs:{id:t.elmId("level"),type:"number",min:"0",size:"5"},domProps:{value:t.minLevel},on:{input:function(e){e.target.composing||(t.minLevel=e.target.value)}}})]),t._v(" "),s("div",[s("span",{staticClass:"opt"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.chkShowOwned,expression:"chkShowOwned"}],attrs:{id:t.elmId("showOwned"),type:"checkbox"},domProps:{checked:Array.isArray(t.chkShowOwned)?t._i(t.chkShowOwned,null)>-1:t.chkShowOwned},on:{change:function(e){var s=t.chkShowOwned,n=e.target,i=!!n.checked;if(Array.isArray(s)){var l=t._i(s,null);n.checked?l<0&&(t.chkShowOwned=s.concat([null])):l>-1&&(t.chkShowOwned=s.slice(0,l).concat(s.slice(l+1)))}else t.chkShowOwned=i}}}),t._v(" "),s("label",{attrs:{for:t.elmId("showDone")}},[t._v("Learned")])]),t._v(" "),s("span",{staticClass:"opt"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.chkShowUnowned,expression:"chkShowUnowned"}],attrs:{id:t.elmId("showUnowned"),type:"checkbox"},domProps:{checked:Array.isArray(t.chkShowUnowned)?t._i(t.chkShowUnowned,null)>-1:t.chkShowUnowned},on:{change:function(e){var s=t.chkShowUnowned,n=e.target,i=!!n.checked;if(Array.isArray(s)){var l=t._i(s,null);n.checked?l<0&&(t.chkShowUnowned=s.concat([null])):l>-1&&(t.chkShowUnowned=s.slice(0,l).concat(s.slice(l+1)))}else t.chkShowUnowned=i}}}),t._v(" "),s("label",{attrs:{for:t.elmId("showRaid")}},[t._v("Unlearned")])])]),t._v(" "),t._l(t.allSchools,(function(e,n){return s("div",{key:n,staticClass:"checks"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.viewSchools,expression:"viewSchools"}],attrs:{type:"checkbox",id:t.elmId("chk"+n)},domProps:{value:n,checked:Array.isArray(t.viewSchools)?t._i(t.viewSchools,n)>-1:t.viewSchools},on:{change:function(e){var s=t.viewSchools,i=e.target,l=!!i.checked;if(Array.isArray(s)){var o=n,a=t._i(s,o);i.checked?a<0&&(t.viewSchools=s.concat([o])):a>-1&&(t.viewSchools=s.slice(0,a).concat(s.slice(a+1)))}else t.viewSchools=l}}}),t._v(" "),s("label",{attrs:{for:t.elmId("chk"+n)}},[t._v(t._s(n))])])})),t._v(" "),s("button",{on:{click:t.toggle}},[t._v("Memorized")])],2),t._v(" "),s("div",{staticClass:"bottom"},[s("book",{staticClass:"spellbook",attrs:{viewing:t.viewing}}),t._v(" "),s("spelllist",{directives:[{name:"show",rawName:"v-show",value:t.showList,expression:"showList"}],staticClass:"spelllist",attrs:{list:t.list}})],1)])};n._withStripped=!0;var i=s(2),l=s(14),o=s(19),a=s(126),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"spellbook"},[s("table",t._l(t.viewing,(function(e){return s("tr",{key:e.id,on:{"!mouseenter":function(s){return s.stopPropagation(),t.itemOver(s,e)}}},[s("td",[e.owned&&t.list.canAdd(e)?s("button",{on:{click:function(s){return t.list.add(e)}}},[t._v("Memorize")]):t._e()]),t._v(" "),s("td",[t._v(t._s(e.name))]),t._v(" "),s("td",[e.owned?s("button",{attrs:{disabled:!e.canUse(t.game)},on:{click:function(s){return t.emit("spell",e)}}},[t._v("Cast")]):s("button",{attrs:{disabled:!e.canBuy(t.game)},on:{click:function(s){return t.emit("buy",e)}}},[t._v("Learn")])])])})),0)])};r._withStripped=!0;var d={props:["viewing"],mixins:[o.a],created(){this.game=i.c},computed:{state:()=>i.c.state,list:()=>i.c.state.spelllist}},c=(s(186),s(6)),v=Object(c.a)(d,r,[],!1,null,"6adcb0a2",null);v.options.__file="src/ui/spellbook.vue";var h=v.exports,p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"spelllist",attrs:{functional:""}},[s("span",[t._v("Max Levels: "+t._s(t.list.used+" / "+Math.floor(t.list.max.value))+"\n\t\t"),t.list.full()?s("div",{staticClass:"warn-text note-text"},[t._v("Spelllist is Full")]):t._e()]),t._v(" "),t._l(t.list.items,(function(e,n){return s("div",{key:n,on:{"!mouseenter":function(s){return s.stopPropagation(),t.itemOver(s,e)}}},[s("button",{staticClass:"stop",on:{click:function(e){return t.list.removeAt(n)}}},[t._v("X")]),s("span",[t._v(t._s(e.name))])])}))],2)};p._withStripped=!0;var u={props:["list"]},m=(s(188),Object(c.a)(u,p,[],!1,null,"b96b8a38",null));m.options.__file="src/ui/spelllist.vue";var w=m.exports,f={data(){let t=l.a.getSubVars("spells");return Object.assign({showList:!1,filtered:null,schools:[],showOwned:!t.hasOwnProperty("showOwned")||t.showOwned,showUnowned:!t.hasOwnProperty("showUnowned")||t.showUnowned,min:null,max:null},t)},mixins:[o.a],components:{filterbox:a.a,book:h,spelllist:w},created(){let t=this.allSchools,e=[];for(let s=this.schools.length-1;s>=0;s--)t[this.schools[s]]&&e.push(this.schools[s]);this.schools=e},methods:{toggle(){this.showList=l.a.setSubVar("spells","showList",!this.showList)}},computed:{state:()=>i.c.state,list:()=>i.c.state.spelllist,minLevel:{get(){return this.min},set(t){this.min=l.a.setSubVar("spells","min",Number(t))}},viewSchools:{get(){return this.schools},set(t){this.schools=t,l.a.setSubVar("spells","schools",this.schools.concat())}},chkShowOwned:{get(){return this.showOwned},set(t){this.showOwned=l.a.setSubVar("spells","showOwned",t)}},chkShowUnowned:{get(){return this.showUnowned},set(t){this.showUnowned=l.a.setSubVar("spells","showUnowned",t)}},allSchools(){let t={},e=this.spells;for(let n=e.length-1;n>=0;n--){var s=e[n];s.school&&(t[s.school]=!0)}return t},viewing(){let t=this.filtered||this.spells,e=this.schools,s=this.minLevel,n=this.showOwned,i=this.showUnowned;return e.length>0||s||!n||!i?t.filter(t=>(0===e.length||e.includes(t.school))&&(!s||t.level===s)&&(n||!1===t.owned)&&(i||!0===t.owned)):t},spells(){return this.state.filterItems(t=>"spell"===t.type&&!this.locked(t))}}},b=(s(190),Object(c.a)(f,n,[],!1,null,"1967362c",null));b.options.__file="src/ui/sections/spells.vue";e.default=b.exports}}]);