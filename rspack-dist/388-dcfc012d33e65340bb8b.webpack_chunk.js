(self['webpackChunkrspack_repro'] = self['webpackChunkrspack_repro'] || []).push([["388"], {
"970": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  K: function() { return getLocale; }
});
/* harmony import */var date_fns_locale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns/locale */"69");
/* harmony import */var date_fns_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns/locale */"493");

function getLocale() {
    var locale = window.locale;
    switch(locale){
        case 'fr_CA':
            return date_fns_locale__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */.Z;
        default:
            return date_fns_locale__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */.Z;
    }
}
}),
"677": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  render: function() { return render; }
});
/* harmony import */var _render_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render.css */"445");
/* harmony import */var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */"642");
/* harmony import */var _getLocale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getLocale */"970");



function render() {
    var el = document.createElement('div');
    el.id = 'root';
    var time = (0, date_fns__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */.Z)(new Date('2024-10-11T00:00:00'), new Date(), {
        locale: (0, _getLocale__WEBPACK_IMPORTED_MODULE_2__/* .getLocale */.K)()
    });
    el.innerHTML = time;
    document.getElementsByTagName('body')[0].appendChild(el);
}
}),
"445": (function (module) {
"use strict";
}),

}]);
//# sourceMappingURL=388-dcfc012d33e65340bb8b.webpack_chunk.js.map