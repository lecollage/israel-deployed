!function(u){function t(t){for(var n,e,r=t[0],o=t[1],i=t[2],s=0,a=[];s<r.length;s++)e=r[s],Object.prototype.hasOwnProperty.call(c,e)&&c[e]&&a.push(c[e][0]),c[e]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(u[n]=o[n]);for(f&&f(t);a.length;)a.shift()();return p.push.apply(p,i||[]),l()}function l(){for(var t,n=0;n<p.length;n++){for(var e=p[n],r=!0,o=1;o<e.length;o++){var i=e[o];0!==c[i]&&(r=!1)}r&&(p.splice(n--,1),t=s(s.s=e[0]))}return t}var e={},c={0:0},p=[];function s(t){if(e[t])return e[t].exports;var n=e[t]={i:t,l:!1,exports:{}};return u[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=u,s.c=e,s.d=function(t,n,e){s.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(n,t){if(1&t&&(n=s(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var r in n)s.d(e,r,function(t){return n[t]}.bind(null,r));return e},s.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(n,"a",n),n},s.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},s.p="";var n=window.webpackJsonp=window.webpackJsonp||[],r=n.push.bind(n);n.push=t,n=n.slice();for(var o=0;o<n.length;o++)t(n[o]);var f=r;p.push([98,2]),l()}({98:function(t,n,e){"use strict";e.r(n);e(62),e(63),e(43),e(47),e(88);var r=(o.prototype.initPrograms=function(){var i=this;return new Promise(function(t,n){try{var e=document.getElementById("programs"),r=e&&e.getElementsByClassName(i.programsCommonClass)||null;if(r){i.showInitialContent(r);for(var o=0;o<r.length;o++)!function(t){r[t].addEventListener("click",function(){i.showOnlyOneContent(r,t)})}(o)}}catch(t){n(t)}t()})},o.prototype.showInitialContent=function(t){t[this.contentInitShowIndex].setAttribute("checked","true"),this.showOnlyOneContent(t,this.contentInitShowIndex)},o.prototype.showOnlyOneContent=function(t,n){this.hideAllContents(t),this.showButtonContent(t,n)},o.prototype.getProgramsContentById=function(t,n){var e=t[n]?t[n].id.match(/[0-9]+$/gm)[0]:"",r=""+this.contentCommonClass+e;return document.getElementById(r)},o.prototype.showButtonContent=function(t,n){var e=this.getProgramsContentById(t,n);e&&e.classList.remove("hidden")},o.prototype.hideAllContents=function(t){for(var n=0;n<t.length;n++){var e=this.getProgramsContentById(t,n);e&&e.classList.add("hidden")}},o);function o(){this.programsCommonClass="programs__input_radio",this.contentCommonClass="programs__content_item_",this.contentInitShowIndex=1}e(95);var i=e(100),s=(e(97),e(99)),a=function(e,r){var o;return void 0===r&&(r=100),function(){var t=this,n=arguments;o=o||setTimeout(function(){o=null,e.apply(t,n)},r)}},u=function(){return(u=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t}).apply(this,arguments)};i.a.use([s.a]);var l=(c.prototype.initSlider=function(t){void 0===t&&(t=null),this.swiper&&this.swiper.destroy(),(t=null!=t?t:window.innerWidth)<639?this.createSlider(1):this.createSlider(2)},c.prototype.createSlider=function(t){void 0===t&&(t=2);try{console.log("DEBUG >> optins",u(u({},this.swiperCommonOptions),{slidesPerView:t})),this.swiper=new i.a(".swiper-container",u(u({},this.swiperCommonOptions),{slidesPerView:t}))}catch(t){console.error("Slider creating error: ",t)}},c);function c(){var n=this;this.swiper=null,this.swiperCommonOptions={direction:"horizontal",loop:!0,slidesPerView:2,height:200,spaceBetween:120,centeredSlides:!0,updateOnWindowResize:!0,pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!0}},window.addEventListener("resize",a(function(){var t=window.innerWidth;console.log("DEBUG >> newWidth:",t),n.initSlider(t)},500))}var p=function(t,s,a,u){return new(a=a||Promise)(function(e,n){function r(t){try{i(u.next(t))}catch(t){n(t)}}function o(t){try{i(u.throw(t))}catch(t){n(t)}}function i(t){var n;t.done?e(t.value):((n=t.value)instanceof a?n:new a(function(t){t(n)})).then(r,o)}i((u=u.apply(t,s||[])).next())})},f=function(e,r){var o,i,s,a={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]},t={next:n(0),throw:n(1),return:n(2)};return"function"==typeof Symbol&&(t[Symbol.iterator]=function(){return this}),t;function n(n){return function(t){return function(n){if(o)throw new TypeError("Generator is already executing.");for(;a;)try{if(o=1,i&&(s=2&n[0]?i.return:n[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,n[1])).done)return s;switch(i=0,s&&(n=[2&n[0],s.value]),n[0]){case 0:case 1:s=n;break;case 4:return a.label++,{value:n[1],done:!1};case 5:a.label++,i=n[1],n=[0];continue;case 7:n=a.ops.pop(),a.trys.pop();continue;default:if(!(s=0<(s=a.trys).length&&s[s.length-1])&&(6===n[0]||2===n[0])){a=0;continue}if(3===n[0]&&(!s||n[1]>s[0]&&n[1]<s[3])){a.label=n[1];break}if(6===n[0]&&a.label<s[1]){a.label=s[1],s=n;break}if(s&&a.label<s[2]){a.label=s[2],a.ops.push(n);break}s[2]&&a.ops.pop(),a.trys.pop();continue}n=r.call(e,a)}catch(t){n=[6,t],i=0}finally{o=s=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}([n,t])}}};function h(){this.programs=new r,this.slider=new l}(new(h.prototype.run=function(){return p(this,void 0,void 0,function(){return f(this,function(t){switch(t.label){case 0:return[4,this.initApp()];case 1:return t.sent(),[2]}})})},h.prototype.initApp=function(){return p(this,void 0,void 0,function(){return f(this,function(t){switch(t.label){case 0:return[4,this.programs.initPrograms()];case 1:return t.sent(),this.slider.initSlider(),[2]}})})},h)).run()}});
//# sourceMappingURL=app.139ffdd9.js.map