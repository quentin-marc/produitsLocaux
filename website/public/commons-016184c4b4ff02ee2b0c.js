(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{Fpzc:function(n,e,t){"use strict";var a=t("dI71"),r=t("q1tI"),o=t.n(r),i=function(n){function e(){for(var e,t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];return(e=n.call.apply(n,[this].concat(a))||this).render=function(){return o.a.createElement("div",{className:"footer-container"},o.a.createElement("a",{href:"https://lowympact.fr?from=website"},"Découvrir l'app"),o.a.createElement("p",null,"Lowympact © 2021"),o.a.createElement("a",{href:"mailto:corentin.branchereau@insa-lyon.fr"},"Nous contacter"))},e}return Object(a.a)(e,n),e}(o.a.Component);e.a=i},WyLL:function(n,e,t){"use strict";var a=t("dI71"),r=t("q1tI"),o=t.n(r);t("lSkK");function i(){return(i=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a])}return n}).apply(this,arguments)}function c(n){return"/"===n.charAt(0)}function s(n,e){for(var t=e,a=t+1,r=n.length;a<r;t+=1,a+=1)n[t]=n[a];n.pop()}var l=function(n,e){void 0===e&&(e="");var t,a=n&&n.split("/")||[],r=e&&e.split("/")||[],o=n&&c(n),i=e&&c(e),l=o||i;if(n&&c(n)?r=a:a.length&&(r.pop(),r=r.concat(a)),!r.length)return"/";if(r.length){var u=r[r.length-1];t="."===u||".."===u||""===u}else t=!1;for(var f=0,d=r.length;d>=0;d--){var h=r[d];"."===h?s(r,d):".."===h?(s(r,d),f++):f&&(s(r,d),f--)}if(!l)for(;f--;f)r.unshift("..");!l||""===r[0]||r[0]&&c(r[0])||r.unshift("");var m=r.join("/");return t&&"/"!==m.substr(-1)&&(m+="/"),m};var u=function(n,e){if(!n)throw new Error("Invariant failed")};function f(n){return"/"===n.charAt(0)?n:"/"+n}function d(n,e){return function(n,e){return 0===n.toLowerCase().indexOf(e.toLowerCase())&&-1!=="/?#".indexOf(n.charAt(e.length))}(n,e)?n.substr(e.length):n}function h(n){return"/"===n.charAt(n.length-1)?n.slice(0,-1):n}function m(n){var e=n.pathname,t=n.search,a=n.hash,r=e||"/";return t&&"?"!==t&&(r+="?"===t.charAt(0)?t:"?"+t),a&&"#"!==a&&(r+="#"===a.charAt(0)?a:"#"+a),r}function p(n,e,t,a){var r;"string"==typeof n?(r=function(n){var e=n||"/",t="",a="",r=e.indexOf("#");-1!==r&&(a=e.substr(r),e=e.substr(0,r));var o=e.indexOf("?");return-1!==o&&(t=e.substr(o),e=e.substr(0,o)),{pathname:e,search:"?"===t?"":t,hash:"#"===a?"":a}}(n)).state=e:(void 0===(r=i({},n)).pathname&&(r.pathname=""),r.search?"?"!==r.search.charAt(0)&&(r.search="?"+r.search):r.search="",r.hash?"#"!==r.hash.charAt(0)&&(r.hash="#"+r.hash):r.hash="",void 0!==e&&void 0===r.state&&(r.state=e));try{r.pathname=decodeURI(r.pathname)}catch(o){throw o instanceof URIError?new URIError('Pathname "'+r.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):o}return t&&(r.key=t),a?r.pathname?"/"!==r.pathname.charAt(0)&&(r.pathname=l(r.pathname,a.pathname)):r.pathname=a.pathname:r.pathname||(r.pathname="/"),r}function v(){var n=null;var e=[];return{setPrompt:function(e){return n=e,function(){n===e&&(n=null)}},confirmTransitionTo:function(e,t,a,r){if(null!=n){var o="function"==typeof n?n(e,t):n;"string"==typeof o?"function"==typeof a?a(o,r):r(!0):r(!1!==o)}else r(!0)},appendListener:function(n){var t=!0;function a(){t&&n.apply(void 0,arguments)}return e.push(a),function(){t=!1,e=e.filter((function(n){return n!==a}))}},notifyListeners:function(){for(var n=arguments.length,t=new Array(n),a=0;a<n;a++)t[a]=arguments[a];e.forEach((function(n){return n.apply(void 0,t)}))}}}var w=!("undefined"==typeof window||!window.document||!window.document.createElement);function g(n,e){e(window.confirm(n))}function y(){try{return window.history.state||{}}catch(n){return{}}}var E=function(n){void 0===n&&(n={}),w||u(!1);var e,t=window.history,a=(-1===(e=window.navigator.userAgent).indexOf("Android 2.")&&-1===e.indexOf("Android 4.0")||-1===e.indexOf("Mobile Safari")||-1!==e.indexOf("Chrome")||-1!==e.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history,r=!(-1===window.navigator.userAgent.indexOf("Trident")),o=n,c=o.forceRefresh,s=void 0!==c&&c,l=o.getUserConfirmation,E=void 0===l?g:l,b=o.keyLength,L=void 0===b?6:b,O=n.basename?h(f(n.basename)):"";function k(n){var e=n||{},t=e.key,a=e.state,r=window.location,o=r.pathname+r.search+r.hash;return O&&(o=d(o,O)),p(o,a,t)}function N(){return Math.random().toString(36).substr(2,L)}var A=v();function x(n){i(D,n),D.length=t.length,A.notifyListeners(D.location,D.action)}function M(n){(function(n){return void 0===n.state&&-1===navigator.userAgent.indexOf("CriOS")})(n)||T(k(n.state))}function P(){T(k(y()))}var S=!1;function T(n){if(S)S=!1,x();else{A.confirmTransitionTo(n,"POP",E,(function(e){e?x({action:"POP",location:n}):function(n){var e=D.location,t=I.indexOf(e.key);-1===t&&(t=0);var a=I.indexOf(n.key);-1===a&&(a=0);var r=t-a;r&&(S=!0,F(r))}(n)}))}}var C=k(y()),I=[C.key];function j(n){return O+m(n)}function F(n){t.go(n)}var W=0;function U(n){1===(W+=n)&&1===n?(window.addEventListener("popstate",M),r&&window.addEventListener("hashchange",P)):0===W&&(window.removeEventListener("popstate",M),r&&window.removeEventListener("hashchange",P))}var q=!1,D={length:t.length,action:"POP",location:C,createHref:j,push:function(n,e){var r=p(n,e,N(),D.location);A.confirmTransitionTo(r,"PUSH",E,(function(n){if(n){var e=j(r),o=r.key,i=r.state;if(a)if(t.pushState({key:o,state:i},null,e),s)window.location.href=e;else{var c=I.indexOf(D.location.key),l=I.slice(0,c+1);l.push(r.key),I=l,x({action:"PUSH",location:r})}else window.location.href=e}}))},replace:function(n,e){var r=p(n,e,N(),D.location);A.confirmTransitionTo(r,"REPLACE",E,(function(n){if(n){var e=j(r),o=r.key,i=r.state;if(a)if(t.replaceState({key:o,state:i},null,e),s)window.location.replace(e);else{var c=I.indexOf(D.location.key);-1!==c&&(I[c]=r.key),x({action:"REPLACE",location:r})}else window.location.replace(e)}}))},go:F,goBack:function(){F(-1)},goForward:function(){F(1)},block:function(n){void 0===n&&(n=!1);var e=A.setPrompt(n);return q||(U(1),q=!0),function(){return q&&(q=!1,U(-1)),e()}},listen:function(n){var e=A.appendListener(n);return U(1),function(){U(-1),e()}}};return D}(),b=function(n){function e(){for(var e,t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];return(e=n.call.apply(n,[this].concat(a))||this).state={width:0,displayMenu:void 0},e.updateWindowDimensions=function(){e.setState({width:window.innerWidth})},e.handleMenu=function(){e.setState({displayMenu:!e.state.displayMenu})},e.handleTeam=function(){E.push("/equipe"),E.go()},e.displayFullMenu=function(){return o.a.createElement("div",{className:"navbar-container"},o.a.createElement("div",{className:"navbar-logo-container"},o.a.createElement("img",{className:"navbar-logo",src:"logo.png",alt:"logo"}),o.a.createElement("div",{className:"navbar-app-name"},"Lowympact")),o.a.createElement("div",{className:"navbar-link-container"},o.a.createElement("a",{href:"/",className:"button"},"Le projet"),o.a.createElement("a",{href:"/equipe",className:"button"},"L'équipe"),o.a.createElement("a",{className:"button button-blue",href:"https://lowympact.fr?from=website"},"Installer")))},e.displayBurgerMenu=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"navbar-logo-container"},o.a.createElement("img",{className:"navbar-logo",src:"logo.png",alt:"logo"}),o.a.createElement("div",{className:"navbar-app-name"},"Lowympact")),o.a.createElement("div",{className:"burger-icon",onClick:e.handleMenu},o.a.createElement("div",{id:"nav-icon3",className:e.state.displayMenu?"open":""},o.a.createElement("span",null),o.a.createElement("span",null),o.a.createElement("span",null),o.a.createElement("span",null))),o.a.createElement("div",{className:void 0===e.state.displayMenu?"hidden":e.state.displayMenu?"sliding-menu-container menu-visible":"sliding-menu-container menu-hidden"},o.a.createElement("div",{className:"sliding-menu-items"},o.a.createElement("button",null,"Le projet"),o.a.createElement("button",null,"L'équipe"),o.a.createElement("a",{className:"button button-blue",href:"https://lowympact.fr?from=website"},"Installer")),o.a.createElement("div",{className:"sliding-menu-logo"},o.a.createElement("img",{className:"navbar-logo",src:"logo.png",alt:"logo"}),o.a.createElement("div",{className:"navbar-app-name"},"Lowympact"))))},e.render=function(){return e.state.width<900?o.a.createElement(o.a.Fragment,null,e.displayBurgerMenu()):o.a.createElement(o.a.Fragment,null,e.displayFullMenu())},e}Object(a.a)(e,n);var t=e.prototype;return t.componentDidMount=function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)},t.componentWillUnmount=function(){window.removeEventListener("resize",this.updateWindowDimensions)},e}(o.a.Component);e.a=b},lSkK:function(n,e,t){},yLpj:function(n,e){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(a){"object"==typeof window&&(t=window)}n.exports=t}}]);
//# sourceMappingURL=commons-016184c4b4ff02ee2b0c.js.map