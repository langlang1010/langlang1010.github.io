(function(t){function n(n){for(var i,r,o=n[0],u=n[1],c=n[2],d=0,p=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&p.push(a[r][0]),a[r]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(t[i]=u[i]);l&&l(n);while(p.length)p.shift()();return s.push.apply(s,c||[]),e()}function e(){for(var t,n=0;n<s.length;n++){for(var e=s[n],i=!0,o=1;o<e.length;o++){var u=e[o];0!==a[u]&&(i=!1)}i&&(s.splice(n--,1),t=r(r.s=e[0]))}return t}var i={},a={app:0},s=[];function r(n){if(i[n])return i[n].exports;var e=i[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=i,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)r.d(e,i,function(n){return t[n]}.bind(null,i));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=n,o=o.slice();for(var c=0;c<o.length;c++)n(o[c]);var l=u;s.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"034f":function(t,n,e){"use strict";var i=e("ee1a"),a=e.n(i);a.a},"1f5b":function(t,n,e){},5042:function(t,n,e){"use strict";var i=e("992f"),a=e.n(i);a.a},"56d7":function(t,n,e){"use strict";e.r(n);e("a133"),e("ed0d"),e("f09c"),e("e117");var i=e("0261"),a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("router-view")],1)},s=[],r={name:"App"},o=r,u=(e("034f"),e("e90a")),c=Object(u["a"])(o,a,s,!1,null,null,null),l=c.exports,d=e("b220"),p=e("ad6d"),m=(e("d52a"),e("8730"),e("1bee")),f=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"record",attrs:{id:"record"}},[e("b-alert",{staticClass:"successAlert",attrs:{show:t.dismissCountDown,dismissible:"",variant:"success"},on:{dismissed:function(n){t.dismissCountDown=0},"dismiss-count-down":t.countDownChanged}},[t._v("记账成功")]),e("div",t._l(t.list,(function(n,i){return e("ul",{key:i,staticClass:"ulstyle"},[e("li",{class:{biaostyle:n.isactive,biaotwostyle:n.isactive2},on:{click:function(e){return t.everytag(n)}}},[t._v(t._s(n.content))])])})),0),e("div",[e("b-form-input",{attrs:{placeholder:"备注"},model:{value:t.text,callback:function(n){t.text=n},expression:"text"}})],1),e("div",[e("div",[e("b-tabs",{attrs:{"content-class":"mt-3",justified:""}},[e("b-tab",{attrs:{title:"支出",active:""},on:{click:function(n){t.tab_in=!1}}},[e("div",[e("b-icon",{attrs:{icon:"wallet"}}),e("span",{staticStyle:{float:"right"}},[t._v(t._s(t.input_num))])],1)]),e("b-tab",{attrs:{title:"收入"},on:{click:function(n){t.tab_in=!0}}},[e("div",[e("b-icon",{attrs:{icon:"wallet"}}),e("span",{staticStyle:{float:"right"}},[t._v(t._s(t.input_num))])],1)])],1)],1)]),e("div",[e("b-button",{staticClass:"num-button",attrs:{squared:"",variant:"secondary"},on:{click:function(n){return t.input(1)}}},[t._v("1")]),e("b-button",{staticClass:"num-button",attrs:{squared:"",variant:"secondary"},on:{click:function(n){return t.input(2)}}},[t._v("2")]),e("b-button",{staticClass:"num-button",attrs:{squared:"",variant:"secondary"},on:{click:function(n){return t.input(3)}}},[t._v("3")]),e("b-button",{staticClass:"num-button",attrs:{squared:"",variant:"secondary"},on:{click:function(n){return t.del()}}},[t._v("删除")]),e("b-button",{staticClass:"num-button",attrs:{squared:"",variant:"secondary"},on:{click:function(n){return t.input(4)}}},[t._v("4")]),e("b-button",{staticClass:"num-button",attrs:{squared:"",variant:"secondary"},on:{click:function(n){return t.input(5)}}},[t._v("5")]),e("b-button",{staticClass:"num-button",attrs:{squared:"",variant:"secondary"},on:{click:function(n){return t.input(6)}}},[t._v("6")]),e("b-button",{staticClass:"num-button",attrs:{squared:"",variant:"secondary"},on:{click:function(n){return t.clear()}}},[t._v("清空")]),e("b-button",{staticClass:"num-button",attrs:{squared:"",variant:"secondary"},on:{click:function(n){return t.input(7)}}},[t._v("7")]),e("b-button",{staticClass:"num-button",attrs:{squared:"",variant:"secondary"},on:{click:function(n){return t.input(8)}}},[t._v("8")]),e("b-button",{staticClass:"num-button",attrs:{squared:"",variant:"secondary"},on:{click:function(n){return t.input(9)}}},[t._v("9")]),e("b-button",{staticClass:"num-button-ok",attrs:{squared:"",variant:"secondary"},on:{click:function(n){return t.pushmoney()}}},[t._v("OK")]),e("b-button",{staticClass:"num-button-zero",attrs:{squared:"",variant:"secondary"},on:{click:function(n){return t.input(0)}}},[t._v("0")]),e("b-button",{staticClass:"num-button",attrs:{squared:"",variant:"secondary"},on:{click:function(n){return t.add_point()}}},[t._v(".")])],1)],1),e("b-nav",{staticClass:"bg-light fixed-bottom",attrs:{justified:""}},[e("b-nav-item",[e("b-icon",{attrs:{icon:"plus-circle-fill"}}),e("br"),e("small",[t._v("记账")])],1),e("b-nav-item",{on:{click:function(n){return t.$router.push({path:"/tag"})}}},[e("b-icon",{attrs:{icon:"tag"}}),e("br"),e("small",[t._v("标签")])],1),e("b-nav-item",{on:{click:function(n){return t.$router.push({path:"/stastic"})}}},[e("b-icon",{attrs:{icon:"bar-chart"}}),e("br"),e("small",[t._v("统计")])],1)],1)],1)},v=[],b=(e("ecb4"),e("e18c"),e("84c2"),e("e35a"),e("1c2e"),e("898e"),e("5e9f"),{data:function(){return{input_num:"0",point:!1,tag:["衣","食","住","行"],income:"",outcome:"",text:"",list:"",tab_in:!1,choosetag:[],dismissSecs:3,dismissCountDown:0}},mounted:function(){var t=localStorage.getItem("tags"),n=null;void 0===t||null===t?(n=this.tag,window.localStorage.tags=JSON.stringify(n)):n=JSON.parse(t);for(var e=n.length,i=0;i<e;++i){var a=n[i];n[i]={isactive:!0,isactive2:!1,content:a}}this.list=n,window.scrollTo(0,400)},methods:{input:function(t){"0"===this.input_num?this.input_num=t+"":this.input_num+=t},add_point:function(){this.point||(this.point=!0,this.input_num+=".")},clear:function(){this.input_num="0",this.point=!1},del:function(){var t=this.input_num.length;"."===this.input_num.charAt(t-1)&&(this.point=!1),this.input_num=this.input_num.substr(0,this.input_num.length-1)},countDownChanged:function(t){this.dismissCountDown=t},showAlert:function(){this.dismissCountDown=this.dismissSecs},pushmoney:function(){if("0"!==this.input_num){var t=this.input_num.indexOf("."),n=this.input_num.length,e=this.input_num.substr(t+1,n),i=e.length;if(i>2&&-1!==t)return alert("请输入正确金额"),void(this.input_num="0");this.income=parseFloat(this.input_num),this.point=!1;for(var a=this.list.length,s=0;s<a;s++)this.list[s].isactive=!0,this.list[s].isactive2=!1;var r={};r.tags=this.choosetag,r.remark=this.text,r.money=this.input_num;var o=new Date;if(r.date=this.dateFormat("YYYY-mm-dd",o),!0===this.tab_in&&"0"!==this.input_num){var u=[];void 0===window.localStorage.inmoney?(u=[r],window.localStorage.inmoney=JSON.stringify(u)):(u=JSON.parse(window.localStorage.inmoney),u.push(r),window.localStorage.inmoney=JSON.stringify(u)),this.choosetag=[]}else if(!1===this.tab_in&&"0"!==this.input_num){var c=[];void 0===window.localStorage.output?(c=[r],window.localStorage.output=JSON.stringify(c)):(c=JSON.parse(window.localStorage.output),c.push(r),window.localStorage.output=JSON.stringify(c))}this.input_num="0",this.choosetag=[],this.showAlert()}},everytag:function(t){t.isactive=!t.isactive,t.isactive2=!t.isactive2,!0===t.isactive2?this.choosetag.push(t.content):!1===t.isactive2&&this.choosetag.pop(t.content)},dateFormat:function(t,n){var e,i={"Y+":n.getFullYear().toString(),"m+":(n.getMonth()+1).toString(),"d+":n.getDate().toString(),"H+":n.getHours().toString(),"M+":n.getMinutes().toString(),"S+":n.getSeconds().toString()};for(var a in i)e=new RegExp("("+a+")").exec(t),e&&(t=t.replace(e[1],1==e[1].length?i[a]:i[a].padStart(e[1].length,"0")));return t}}}),h=b,g=(e("5974"),Object(u["a"])(h,f,v,!1,null,null,null)),_=g.exports,y=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"tagstyle"},[e("b-list-group",t._l(t.list,(function(n,i){return e("b-list-group-item",{key:i,attrs:{button:""},on:{click:function(n){return t.bianji(i)}}},[t._v(t._s(n))])})),1),e("div",{staticStyle:{display:"flex","justify-content":"center"}},[e("b-button",{attrs:{variant:"outline-primary"},on:{click:t.click}},[t._v("新增标签")])],1)],1),e("b-nav",{staticClass:"fixed-bottom bg-light",attrs:{justified:""}},[e("b-nav-item",{on:{click:function(n){return t.$router.push({path:"/"})}}},[e("b-icon",{attrs:{icon:"plus-circle"}}),e("br"),e("small",[t._v("记账")])],1),e("b-nav-item",[e("b-icon",{attrs:{icon:"tag-fill"}}),e("br"),e("small",[t._v("标签")])],1),e("b-nav-item",{on:{click:function(n){return t.$router.push({path:"/stastic"})}}},[e("b-icon",{attrs:{icon:"bar-chart"}}),e("br"),e("small",[t._v("统计")])],1)],1)],1)},w=[],S={data:function(){return{list:["衣","食","住","行"]}},mounted:function(){this.list=JSON.parse(localStorage.getItem("tags"))},methods:{bianji:function(t){this.$router.push({path:"/edit",query:{id:t}})},click:function(){for(var t=prompt("请输入标签"),n=this.list.length,e=!0,i=0;i<n;i++)if(t===this.list[i]){alert("您输入的标签已经存在"),e=!1;break}t&&!0===e&&(this.list.push(t),window.localStorage.setItem("tags",JSON.stringify(this.list)),window.scrollTo(9999999,9999999))}}},k=S,C=(e("67ae"),Object(u["a"])(k,y,w,!1,null,"70c090c8",null)),O=C.exports,x=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("p",{staticStyle:{width:"100%","text-align":"center",height:"50px","background-color":"rgb(141, 141, 141)"}},[t._v("编辑标签")]),e("b-form-input",{model:{value:t.editmessage,callback:function(n){t.editmessage=n},expression:"editmessage"}}),e("div",{staticStyle:{display:"flex","justify-content":"space-around"}},[e("b-button",{attrs:{variant:"danger"},on:{click:t.demessage}},[t._v("删除")]),e("b-button",{attrs:{variant:"success"},on:{click:t.postmessage}},[t._v("确认")])],1)],1)},j=[],J=(e("ea69"),{data:function(){return{editmessage:""}},mounted:function(){var t=this.$route.query.id,n=JSON.parse(localStorage.getItem("tags"));this.editmessage=n[t]},methods:{demessage:function(){var t=this.$route.query.id,n=JSON.parse(localStorage.getItem("tags"));n.splice(t,1),window.localStorage.setItem("tags",JSON.stringify(n)),alert("删除"+this.editmessage+"成功"),this.$router.push({path:"/tag"})},postmessage:function(){for(var t=this.$route.query.id,n=JSON.parse(localStorage.getItem("tags")),e=n.length,i=!0,a=0;a<e;a++)if(this.editmessage===n[a]){alert("您输入的标签已存在"),i=!1;break}!0===i&&(n.splice(t,1,this.editmessage),window.localStorage.setItem("tags",JSON.stringify(n)),alert("添加"+this.editmessage+"成功")),this.$router.push({path:"/tag"})}}}),q=J,N=Object(u["a"])(q,x,j,!1,null,null,null),$=N.exports,A=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"stastic"},[e("b-tabs",{attrs:{"content-class":"mt-3",justified:""}},[e("b-tab",{attrs:{title:"支出",active:""}},[e("b-list-group",[t._l(t.output,(function(n,i){return[e("b-list-group-item",{key:i,staticClass:"d-flex justify-content-between align-items-center",attrs:{variant:"secondary"}},[t._v(" "+t._s(n.date)+" "),e("b-badge",{attrs:{variant:"light"}},[t._v("-￥"+t._s(n.sum))])],1),t._l(n.infoAry,(function(n,i){return e("b-list-group-item",{key:i,staticClass:"d-flex justify-content-between align-items-center"},[e("small",[t._v(" "+t._s(t.aryToString(n.tags))+" "),e("span",{staticClass:"text-muted"},[t._v(t._s(n.note))])]),e("b-badge",{attrs:{variant:"primary",pill:""}},[e("small",[t._v("-"+t._s(n.money))])])],1)}))]}))],2)],1),e("b-tab",{attrs:{title:"收入"}},[e("b-list-group",[t._l(t.income,(function(n,i){return[e("b-list-group-item",{key:i,staticClass:"d-flex justify-content-between align-items-center",attrs:{variant:"secondary"}},[t._v(" "+t._s(n.date)+" "),e("b-badge",{attrs:{variant:"light"}},[t._v("+￥"+t._s(n.sum))])],1),t._l(n.infoAry,(function(n,i){return e("b-list-group-item",{key:i,staticClass:"d-flex justify-content-between align-items-center"},[e("small",[t._v(" "+t._s(t.aryToString(n.tags))+" "),e("span",{staticClass:"text-muted"},[t._v(t._s(n.note))])]),e("b-badge",{staticStyle:{"background-color":"green"},attrs:{variant:"primary",pill:""}},[e("small",[t._v("+"+t._s(n.money))])])],1)}))]}))],2)],1)],1),e("b-nav",{staticClass:"fixed-bottom bg-light",attrs:{justified:""}},[e("b-nav-item",{on:{click:function(n){return t.$router.push({path:"/"})}}},[e("b-icon",{attrs:{icon:"plus-circle"}}),e("br"),e("small",[t._v("记账")])],1),e("b-nav-item",{on:{click:function(n){return t.$router.push({path:"/tag"})}}},[e("b-icon",{attrs:{icon:"tag"}}),e("br"),e("small",[t._v("标签")])],1),e("b-nav-item",[e("b-icon",{attrs:{icon:"bar-chart-fill"}}),e("br"),e("small",[t._v("统计")])],1)],1)],1)},T=[],D={data:function(){return{income:[],output:[]}},mounted:function(){var t=window.localStorage.inmoney,n=window.localStorage.output;if(void 0===t||null===t)this.income=null;else{var e=JSON.parse(t);this.income=this.merge(e),this.income=this.income.reverse()}if(void 0===n||null===n)this.output=null;else{var i=JSON.parse(n);this.output=this.merge(i),this.output=this.output.reverse()}},methods:{merge:function(t){var n=[],e=t[0].date,i={};i.date=e,i.sum=0,i.infoAry=[];var a={};a.tags=t[0].tags,a.money=t[0].money,a.note=t[0].remark,i.sum+=parseFloat(a.money),i.infoAry.push(a);for(var s=1;s<t.length;s++){var r=t[s].date;if(r===e){var o={};o.tags=t[s].tags,o.money=t[s].money,o.note=t[s].remark,i.sum+=parseFloat(o.money),i.infoAry.push(o)}else{n.push(i),i={},e=t[s].date,i.date=e,i.sum=0,i.infoAry=[];var u={};u.tags=t[s].tags,u.money=t[s].money,u.note=t[s].remark,i.sum+=parseFloat(u.money),i.infoAry.push(u)}}return n.push(i),n},aryToString:function(t){if(void 0===t||null===t||0===t.length)return"未添加标签";for(var n="",e=0;e<t.length-1;e++)n+=t[e],n+=",";return n+=t[t.length-1],n}}},I=D,E=(e("5042"),Object(u["a"])(I,A,T,!1,null,"72aef2b3",null)),F=E.exports;i["default"].use(m["a"]);var M=new m["a"]({routes:[{path:"/",name:"Record",component:_},{path:"/tag",name:"Tag",component:O},{path:"/stastic",name:"Stastic",component:F},{path:"/edit",name:"Edit",component:$}]}),P=e("8876");i["default"].use(P["a"]);var Y=new P["a"].Store({state:{tags:""},mutations:{setTagNew:function(t,n){t.tags=n}}}),H=Y;i["default"].use(d["a"]),i["default"].use(p["a"]),i["default"].use(H),i["default"].config.productionTip=!1,new i["default"]({store:H,router:M,render:function(t){return t(l)}}).$mount("#app")},5974:function(t,n,e){"use strict";var i=e("b623"),a=e.n(i);a.a},"67ae":function(t,n,e){"use strict";var i=e("1f5b"),a=e.n(i);a.a},"992f":function(t,n,e){},b623:function(t,n,e){},ee1a:function(t,n,e){}});
//# sourceMappingURL=app.16830a8c.js.map