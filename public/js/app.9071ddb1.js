(function(){"use strict";var a={146:function(a,t,e){var n=e(538),r=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{attrs:{id:"main-container"}},[e("router-view")],1)},s=[],o=e(345);n["default"].use(o.Z);var l={name:"main-container"},i=l,u=e(1),g=(0,u.Z)(i,r,s,!1,null,null,null),c=g.exports,p=e(32),v=e(669),d=e.n(v),m=e(152),_={lv:{lang_var_name:"Tulkojuma atslēgvārds",lang_var_lv_translation:"Latviskais tulkojums"},eng:{lang_var_name:"Translation keyword",lang_var_lv_translation:"Latvian translations "},ru:{lang_var_name:"Ключевое слово перевода",lang_var_lv_translation:"Латышские переводы"}},f=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("user-form")},h=[],b=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"user-form__wrapper"},[e("form",{staticClass:"user-form"},[e("label",[a._v(" E-mail "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.user.email,expression:"user.email"}],attrs:{type:"email"},domProps:{value:a.user.email},on:{input:function(t){t.target.composing||a.$set(a.user,"email",t.target.value)}}})]),e("label",[a._v(" Password "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.user.password,expression:"user.password"}],attrs:{type:"password"},domProps:{value:a.user.password},on:{input:function(t){t.target.composing||a.$set(a.user,"password",t.target.value)}}})]),a.isRegisterForm?e("label",[a._v(" Repeat password "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.user.repeatPassword,expression:"user.repeatPassword"}],attrs:{type:"password"},domProps:{value:a.user.repeatPassword},on:{input:function(t){t.target.composing||a.$set(a.user,"repeatPassword",t.target.value)}}})]):a._e(),e("div",{staticClass:"user-form__actions"},[e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:a.saveForm}},[a._v(" Save ")])])])])},V=[],w={name:"user-form",data:function(){const a="register"===this.formType,t={email:"",password:""};return a&&(t.repeatPassword=""),{user:t,isRegisterForm:a}},props:{formType:{type:String,default:"login"}},methods:{saveForm:function(){this.isRegisterForm?d().post("/api/user/save",this.user):d().post("/api/user/login",this.user).then((()=>{this.$router.push("/")}))}}},y=w,$=(0,u.Z)(y,b,V,!1,null,"69f85c18",null),x=$.exports,P={name:"page-login",components:{"user-form":x}},k=P,C=(0,u.Z)(k,f,h,!1,null,null,null),O=C.exports,j=function(){var a=this,t=a.$createElement;a._self._c;return a._m(0)},L=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"page"},[e("div",{staticClass:"page__container"},[a._v(" Hell Im the main page ")])])}],S={name:"page-index"},E=S,T=(0,u.Z)(E,j,L,!1,null,"ac0e24ae",null),Z=T.exports,N=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("div",{staticClass:"langVar-form__wrapper"},[e("form",{staticClass:"langVar-form"},[e("label",[a._v(" "+a._s(a.$t("lang_var_name"))+" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.langVar.name,expression:"langVar.name"}],attrs:{disavled:a.langVar.id},domProps:{value:a.langVar.name},on:{input:function(t){t.target.composing||a.$set(a.langVar,"name",t.target.value)}}})]),!a.langVar.id||a.langVar.id&&a.langVar.lv_translation?e("label",[a._v(" "+a._s(a.$t("lang_var_lv_translation"))+" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:a.langVar.lv_translation,expression:"langVar.lv_translation"}],domProps:{value:a.langVar.lv_translation},on:{input:function(t){t.target.composing||a.$set(a.langVar,"lv_translation",t.target.value)}}})]):a._e(),!a.langVar.id||a.langVar.id&&a.langVar.ru_translation?e("label",[a._v(" "+a._s(a.$t("lang_var_ru_translation"))+" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:a.langVar.ru_translation,expression:"langVar.ru_translation"}],domProps:{value:a.langVar.ru_translation},on:{input:function(t){t.target.composing||a.$set(a.langVar,"ru_translation",t.target.value)}}})]):a._e(),!a.langVar.id||a.langVar.id&&a.langVar.eng_translation?e("label",[a._v(" "+a._s(a.$t("lang_var_eng_translation"))+" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:a.langVar.eng_translation,expression:"langVar.eng_translation"}],domProps:{value:a.langVar.eng_translation},on:{input:function(t){t.target.composing||a.$set(a.langVar,"eng_translation",t.target.value)}}})]):a._e(),e("div",{staticClass:"langVar-form__actions"},[e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(t){return a.saveLangVar()}}},[a._v(" "+a._s(a.$t("save"))+" ")])])])]),e("table",a._l(a.langVars,(function(t,n){return e("tr",{key:n},[e("td",[a._v(" "+a._s(t.name)+" ")]),e("td",[e("div",[e("strong",[a._v(a._s(a._f("uppercase")(t.language))+":")]),e("span",[a._v(a._s(t.text))])])]),e("td",[e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return a.editLangVar(t.id)}}},[a._v(" "+a._s(a.$t("edit"))+" ")]),e("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){return a.deleteLangVar(t.id)}}},[a._v(" "+a._s(a.$t("delete"))+" ")])])])})),0)])},F=[],M={name:"page-lang-vars",data(){return{langVars:[],langVar:{name:"",id:null,lv_translation:"",ru_translation:"",eng_translation:""}}},created(){this.loadLangVars()},methods:{loadLangVars(){this.$axios.get("/api/lang-var/list").then((a=>{console.log(a),this.langVars=a.data.content}))},saveLangVar(){this.$axios.post("/api/lang-var/save",this.langVar).then((()=>{location.reload()}))},editLangVar(a){this.$axios.get(`/api/lang-var/get/${a}`).then((a=>{const t=a.data.content;this.langVar.id=t.id,this.langVar[`${t.language}_translation`]=t.text,this.langVar.name=t.name}))},deleteLangVar(a){this.$axios.get(`/api/lang-var/delete/${a}`).then((()=>{}))}}},R=M,q=(0,u.Z)(R,N,F,!1,null,"6dd1ead4",null),U=q.exports,G=[{path:"/login",component:O},{path:"/",component:Z},{path:"/lang-vars",component:U},{id:"page-index",path:"*",component:Z}];console.log(_),n["default"].config.productionTip=!1,n["default"].use(p.XG7),n["default"].use(m.Z),n["default"].prototype.$axios=d();const H=[],I=new o.Z({routes:G,mode:"history"});n["default"].filter("uppercase",(function(a){return a.toUpperCase()}));const X=new m.Z({locale:localStorage.language||"lv",fallbackLocale:"eng",messages:_});function z(a){return!!Object.keys(a.query).length}I.beforeEach(((a,t,e)=>{!z(a)&&z(t)?e({path:a.path,query:t.query}):e()}));const A=d().post("/api/language/list").then((a=>{n["default"].prototype.$languages=a.data.content}));H.push(A),Promise.all(H).then((()=>{new n["default"]({i18n:X,router:I,render:a=>a(c)}).$mount("#app")}))}},t={};function e(n){var r=t[n];if(void 0!==r)return r.exports;var s=t[n]={exports:{}};return a[n](s,s.exports,e),s.exports}e.m=a,function(){var a=[];e.O=function(t,n,r,s){if(!n){var o=1/0;for(g=0;g<a.length;g++){n=a[g][0],r=a[g][1],s=a[g][2];for(var l=!0,i=0;i<n.length;i++)(!1&s||o>=s)&&Object.keys(e.O).every((function(a){return e.O[a](n[i])}))?n.splice(i--,1):(l=!1,s<o&&(o=s));if(l){a.splice(g--,1);var u=r();void 0!==u&&(t=u)}}return t}s=s||0;for(var g=a.length;g>0&&a[g-1][2]>s;g--)a[g]=a[g-1];a[g]=[n,r,s]}}(),function(){e.n=function(a){var t=a&&a.__esModule?function(){return a["default"]}:function(){return a};return e.d(t,{a:t}),t}}(),function(){e.d=function(a,t){for(var n in t)e.o(t,n)&&!e.o(a,n)&&Object.defineProperty(a,n,{enumerable:!0,get:t[n]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){e.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)}}(),function(){e.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})}}(),function(){var a={143:0};e.O.j=function(t){return 0===a[t]};var t=function(t,n){var r,s,o=n[0],l=n[1],i=n[2],u=0;if(o.some((function(t){return 0!==a[t]}))){for(r in l)e.o(l,r)&&(e.m[r]=l[r]);if(i)var g=i(e)}for(t&&t(n);u<o.length;u++)s=o[u],e.o(a,s)&&a[s]&&a[s][0](),a[s]=0;return e.O(g)},n=self["webpackChunkUMS"]=self["webpackChunkUMS"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=e.O(void 0,[998],(function(){return e(146)}));n=e.O(n)})();
//# sourceMappingURL=app.9071ddb1.js.map