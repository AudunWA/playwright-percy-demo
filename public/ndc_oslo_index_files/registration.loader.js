var isIE = navigator.userAgent.indexOf("MSIE ") > -1 || navigator.userAgent.indexOf("Trident/") > -1;
if(!isIE) {
!function(e){function r(r){for(var n,i,l=r[0],a=r[1],c=r[2],p=0,s=[];p<l.length;p++)i=l[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&s.push(o[i][0]),o[i]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(f&&f(r);s.length;)s.shift()();return u.push.apply(u,c||[]),t()}function t(){for(var e,r=0;r<u.length;r++){for(var t=u[r],n=!0,l=1;l<t.length;l++){var a=t[l];0!==o[a]&&(n=!1)}n&&(u.splice(r--,1),e=i(i.s=t[0]))}return e}var n={},o={1:0},u=[];function i(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=n,i.d=function(e,r,t){i.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,r){if(1&r&&(e=i(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)i.d(t,n,function(r){return e[r]}.bind(null,n));return t},i.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(r,"a",r),r},i.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},i.p="/";var l=this["webpackJsonp@checkin.no/registration"]=this["webpackJsonp@checkin.no/registration"]||[],a=l.push.bind(l);l.push=r,l=l.slice();for(var c=0;c<l.length;c++)r(l[c]);var f=a;t()}([])
var headTag = document.getElementsByTagName('head')[0];
var script1 = document.createElement('script');
script1.src = 'https://registration.checkin.no/static/js/2.e9deab53.chunk.js';
script1.async = 1;
script1.crossOrigin = 1;
headTag.appendChild(script1);

var script2 = document.createElement('script');
script2.src = 'https://registration.checkin.no/static/js/main.0176837d.chunk.js';
script2.async = 1;
script2.crossOrigin = 1;
headTag.appendChild(script2);

var style1 = document.createElement('link');
style1.href = 'https://registration.checkin.no/static/css/2.8b82e96c.chunk.css';
style1.rel = 'stylesheet';
headTag.appendChild(style1);

var style2 = document.createElement('link');
style2.href = 'https://registration.checkin.no/static/css/main.8cca554a.chunk.css';
style2.rel = 'stylesheet';
headTag.appendChild(style2);

} else {
var message = document.createElement("P");var box = document.createElement('div');box.style = "font-family: sans-serif; border: 1px solid rgba(0, 0, 0, 0.3); border-radius: 5px; display: flex; justify-content: center; max-width: 600px; padding: 16px; background: darkgray;";message.innerText += 'Registration is not available in Internet Explorer. To get access to the registration, please use a different browser.';box.appendChild(message);var registration = document.getElementById("checkin_registration");registration.appendChild(box);}
