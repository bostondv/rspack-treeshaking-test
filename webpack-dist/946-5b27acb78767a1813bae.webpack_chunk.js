"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([[946],{

/***/ 946:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  render: () => (/* binding */ render_render)
});

// EXTERNAL MODULE: css ./src/render.css
var render = __webpack_require__(427);
// EXTERNAL MODULE: ./node_modules/date-fns/esm/formatRelative/index.js + 28 modules
var formatRelative = __webpack_require__(586);
// EXTERNAL MODULE: ./node_modules/date-fns/esm/locale/fr-CA/index.js + 5 modules
var fr_CA = __webpack_require__(822);
// EXTERNAL MODULE: ./node_modules/date-fns/esm/locale/en-US/index.js + 5 modules
var en_US = __webpack_require__(695);
;// CONCATENATED MODULE: ./src/getLocale.ts

function getLocale() {
  var locale = window.locale;
  switch (locale) {
    case 'fr_CA':
      return fr_CA/* default */.Z;
    default:
      return en_US/* default */.Z;
  }
}
;// CONCATENATED MODULE: ./src/render.tsx



function render_render() {
  var el = document.createElement('div');
  el.id = 'root';
  var time = (0,formatRelative/* default */.Z)(new Date('2024-10-11T00:00:00'), new Date(), {
    locale: getLocale()
  });
  el.innerHTML = time;
  document.getElementsByTagName('body')[0].appendChild(el);
}

/***/ })

}]);