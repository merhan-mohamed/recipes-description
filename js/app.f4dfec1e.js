(function(e){function t(t){for(var o,r,u=t[0],a=t[1],l=t[2],d=0,p=[];d<u.length;d++)r=u[d],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&p.push(c[r][0]),c[r]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);s&&s(t);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,r=1;r<n.length;r++){var u=n[r];0!==c[u]&&(o=!1)}o&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={app:0},c={app:0},i=[];function u(e){return a.p+"js/"+({}[e]||e)+"."+{"chunk-3afcb33e":"a7f13255"}[e]+".js"}function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(e){var t=[],n={"chunk-3afcb33e":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({}[e]||e)+"."+{"chunk-3afcb33e":"ac4f71e7"}[e]+".css",c=a.p+o,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var l=i[u],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===o||d===c))return t()}var p=document.getElementsByTagName("style");for(u=0;u<p.length;u++){l=p[u],d=l.getAttribute("data-href");if(d===o||d===c)return t()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=t,s.onerror=function(t){var o=t&&t.target&&t.target.src||c,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete r[e],s.parentNode.removeChild(s),n(i)},s.href=c;var b=document.getElementsByTagName("head")[0];b.appendChild(s)})).then((function(){r[e]=0})));var o=c[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise((function(t,n){o=c[e]=[t,n]}));t.push(o[2]=i);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,a.nc&&d.setAttribute("nonce",a.nc),d.src=u(e);var p=new Error;l=function(t){d.onerror=d.onload=null,clearTimeout(s);var n=c[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",p.name="ChunkLoadError",p.type=o,p.request=r,n[1](p)}c[e]=void 0}};var s=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(t)},a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var p=0;p<l.length;p++)t(l[p]);var s=d;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2987:function(e,t,n){"use strict";n("6235")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23");function r(e,t){var n=Object(o["w"])("router-view");return Object(o["r"])(),Object(o["d"])(n)}n("2987");var c=n("6b0d"),i=n.n(c);const u={},a=i()(u,[["render",r]]);var l=a,d=(n("09c2"),n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),p=(n("a4d3"),n("e01a"),{class:"home"}),s=Object(o["g"])("h1",null,"My Recipes",-1),b={class:"recipes"},g=Object(o["g"])("button",null,"View Recipe",-1),f={key:0,class:"add-recipe-popup"},h={class:"popup-content"},O=Object(o["g"])("h2",null,"Add new recipe",-1),m={class:"group"},j=Object(o["g"])("label",null,"Title",-1),v={class:"group"},w=Object(o["g"])("label",null,"Description",-1),y={class:"group"},k=Object(o["g"])("label",null,"Ingredients",-1),R=["onUpdate:modelValue"],A={class:"group"},P=Object(o["g"])("label",null,"Method",-1),C=["onUpdate:modelValue"],N=Object(o["g"])("button",{type:"submit"},"Add Recipe",-1);function S(e,t,n,r,c,i){var u=Object(o["w"])("router-link");return Object(o["r"])(),Object(o["f"])("div",p,[s,Object(o["g"])("button",{onClick:t[0]||(t[0]=function(){return r.togglePopup&&r.togglePopup.apply(r,arguments)})},"Add new Recipe"),Object(o["g"])("div",b,[(Object(o["r"])(!0),Object(o["f"])(o["a"],null,Object(o["v"])(e.$store.state.recipes,(function(e){return Object(o["r"])(),Object(o["f"])("div",{class:"card",key:e.slug},[Object(o["g"])("h2",null,Object(o["y"])(e.title),1),Object(o["g"])("p",null,Object(o["y"])(e.description),1),Object(o["i"])(u,{to:"/recipe/".concat(e.slug)},{default:Object(o["C"])((function(){return[g]})),_:2},1032,["to"])])})),128))]),r.popupOpen?(Object(o["r"])(),Object(o["f"])("div",f,[Object(o["g"])("div",h,[O,Object(o["g"])("form",{onSubmit:t[6]||(t[6]=Object(o["E"])((function(){return r.addNewRecipe&&r.addNewRecipe.apply(r,arguments)}),["prevent"]))},[Object(o["g"])("div",m,[j,Object(o["D"])(Object(o["g"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return r.newRecipe.title=e})},null,512),[[o["A"],r.newRecipe.title]])]),Object(o["g"])("div",v,[w,Object(o["D"])(Object(o["g"])("textarea",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return r.newRecipe.description=e})},null,512),[[o["A"],r.newRecipe.description]])]),Object(o["g"])("div",y,[k,(Object(o["r"])(!0),Object(o["f"])(o["a"],null,Object(o["v"])(r.newRecipe.ingredientRows,(function(e){return Object(o["r"])(),Object(o["f"])("div",{class:"ingredient",key:e},[Object(o["D"])(Object(o["g"])("input",{type:"text","onUpdate:modelValue":function(t){return r.newRecipe.ingredients[e-1]=t}},null,8,R),[[o["A"],r.newRecipe.ingredients[e-1]]])])})),128)),Object(o["g"])("button",{type:"button",onClick:t[3]||(t[3]=function(){return r.addNewIngredient&&r.addNewIngredient.apply(r,arguments)})}," Add Ingredient ")]),Object(o["g"])("div",A,[P,(Object(o["r"])(!0),Object(o["f"])(o["a"],null,Object(o["v"])(r.newRecipe.methodRows,(function(e){return Object(o["r"])(),Object(o["f"])("div",{class:"method",key:e},[Object(o["D"])(Object(o["g"])("textarea",{"onUpdate:modelValue":function(t){return r.newRecipe.method[e-1]=t}},null,8,C),[[o["A"],r.newRecipe.method[e-1]]])])})),128)),Object(o["g"])("button",{type:"button",onClick:t[4]||(t[4]=function(){return r.addNewStep&&r.addNewStep.apply(r,arguments)})},"Add step")]),N,Object(o["g"])("button",{type:"button",onClick:t[5]||(t[5]=function(){return r.togglePopup&&r.togglePopup.apply(r,arguments)})},"Close")],32)])])):Object(o["e"])("",!0)])}var E=n("5530"),_=(n("ac1f"),n("5319"),n("5502")),x={name:"Home",setup:function(){var e=Object(o["u"])({title:"",description:"",ingredients:[],method:[],ingredientRows:1,methodRows:1}),t=Object(o["u"])(!1),n=Object(_["b"])(),r=function(){t.value=!t.value},c=function(){e.value.ingredientRows++},i=function(){e.value.methodRows++},u=function(){e.value.slug=e.value.title.toLowerCase().replace(/\s/g,"-"),e.value.slug?(n.commit("ADD_RECIPE",Object(E["a"])({},e.value)),e.value={title:"",description:"",ingredients:[],method:[],ingredientRows:1,methodRows:1},r()):alert("Please enter a title")};return{newRecipe:e,addNewRecipe:u,togglePopup:r,popupOpen:t,addNewStep:i,addNewIngredient:c}}};n("96d8");const D=i()(x,[["render",S]]);var T=D,I=[{path:"/",name:"Home",component:T},{path:"/recipe/:slug",name:"Recipe",component:function(){return n.e("chunk-3afcb33e").then(n.bind(null,"2d11"))}}],U=Object(d["a"])({history:Object(d["b"])(""),routes:I}),V=U,L=Object(_["a"])({state:{recipes:[{slug:"katsu-curry",Title:"Katsu Curry",description:"A delicious curry made with chicken, potatoes, and a special sauce",ingredients:["1 tablespoon olive oil","1 onion, chopped","2 cloves garlic, chopped","1 tablespoon curry powder"],method:["Heat oil in a large skillet over medium heat.","Add onion and garlic and cook, stirring often, until softened, about 5 minutes.","Add curry powder and cook, stirring, until fragrant, about 1 minute.","Add chicken and potatoes and cook, stirring, until heated through, about 5 minutes."]},{slug:"ramen-noodle-soup",Title:"Ramen noodle soup",description:"A delicious curry made with chicken, potatoes, and a special sauce",ingredients:["1 tablespoon olive oil","1 onion, chopped","2 cloves garlic, chopped","1 tablespoon curry powder"],method:["Heat oil in a large skillet over medium heat.","Add onion and garlic and cook, stirring often, until softened, about 5 minutes.","Add curry powder and cook, stirring, until fragrant, about 1 minute.","Add chicken and potatoes and cook, stirring, until heated through, about 5 minutes."]}]},mutations:{ADD_Recipe:function(e,t){e.recipes.push(t)}},actions:{},modules:{}});n("7b17"),n("ab8b");Object(o["c"])(l).use(L).use(V).mount("#app")},6235:function(e,t,n){},"96d8":function(e,t,n){"use strict";n("b5b8")},b5b8:function(e,t,n){}});
//# sourceMappingURL=app.f4dfec1e.js.map