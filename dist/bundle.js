/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/src/imgs/bg@1x.png":
/*!*********************************!*\
  !*** ./dist/src/imgs/bg@1x.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/src/imgs/bg@1x.png";

/***/ }),

/***/ "./dist/src/imgs/bg@2x.png":
/*!*********************************!*\
  !*** ./dist/src/imgs/bg@2x.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/src/imgs/bg@2x.png";

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/sass/index.sass":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/sass/index.sass ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var urlEscape = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/url-escape.js */ "./node_modules/css-loader/dist/runtime/url-escape.js");
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ../../dist/src/imgs/bg@2x.png */ "./dist/src/imgs/bg@2x.png"));
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(/*! ../../dist/src/imgs/bg@1x.png */ "./dist/src/imgs/bg@1x.png"));
var ___CSS_LOADER_URL___2___ = urlEscape(__webpack_require__(/*! ../Icons/Arrow_Right/M_Copy@1x.svg */ "./src/Icons/Arrow_Right/M_Copy@1x.svg"));

// Module
exports.push([module.i, ".header {\n  border-bottom: 1px solid #f0f0f0;\n  height: 90px;\n  width: 100%; }\n  .header__ul {\n    display: flex;\n    flex-flow: nowrap row;\n    align-items: center;\n    height: 100%;\n    width: 450px; }\n  .header__li {\n    padding-right: 28px; }\n    .header__li_logo {\n      padding-right: 52px; }\n  .header__a {\n    font-weight: bold;\n    opacity: 0.5;\n    transition: .4s;\n    color: #333; }\n    .header__a_active {\n      opacity: 1; }\n\nmain {\n  flex: 1;\n  display: grid;\n  grid-template-columns: 630px 686px;\n  grid-template-rows: 400px auto;\n  grid-template-areas: \"main-block scripts\" \"devices devices\"; }\n\n.main-block {\n  grid-area: main-block; }\n  .main-block__title {\n    color: #333;\n    font-size: 18px;\n    line-height: 20px;\n    margin: 30px 0 20px 0; }\n  .main-block__content {\n    position: relative;\n    padding-left: 25px;\n    height: 330px;\n    background: url(" + ___CSS_LOADER_URL___0___ + ") 0 0 no-repeat;\n    background-size: cover;\n    border-radius: 20px; }\n  .main-block__greeting {\n    font-size: 27px;\n    color: #333333;\n    padding-top: 26px; }\n  .main-block__p_info {\n    font-size: 14px;\n    color: #333333;\n    padding-top: 10px; }\n  .main-block__temperature {\n    margin-top: 27px;\n    width: 200px;\n    display: grid;\n    grid-template-columns: 80px auto;\n    grid-template-rows: auto; }\n    .main-block__temperature_home-title, .main-block__temperature_outside-title {\n      font-size: 14px;\n      color: #858585; }\n    .main-block__temperature_home, .main-block__temperature_outside {\n      font-size: 36px;\n      line-height: 1.5; }\n  .main-block__blocks-container {\n    height: 330px;\n    position: absolute;\n    top: 0;\n    right: 20px;\n    width: 200px; }\n  .main-block__parent-scroller {\n    height: 100%;\n    width: 100%;\n    overflow: hidden; }\n  .main-block__block-list {\n    height: 100%;\n    width: 100%;\n    box-sizing: content-box;\n    overflow-y: scroll;\n    padding-right: 20px; }\n  .main-block__li {\n    background-color: #f7f7f7;\n    border-radius: 20px;\n    cursor: pointer;\n    display: flex;\n    flex-flow: nowrap column;\n    height: 90px;\n    justify-content: flex-end;\n    margin-top: 15px;\n    padding: 15px;\n    line-height: 18px;\n    font-weight: bold;\n    width: 170px;\n    font-size: 14px;\n    color: #333333; }\n    .main-block__li:hover {\n      background: #fff;\n      box-shadow: 0 2px 6px 0 rgba(197, 186, 186, 0.5); }\n    .main-block__li:first-child {\n      margin-top: 20px; }\n    .main-block__li:last-child {\n      margin-bottom: 20px; }\n    .main-block__li span {\n      font-family: ArialMT;\n      font-size: 12px;\n      font-weight: normal;\n      color: #858585;\n      letter-spacing: 0;\n      text-align: left; }\n    .main-block__li:nth-child(3) {\n      position: relative; }\n      .main-block__li:nth-child(3):before {\n        content: url(\"data:image/svg+xml;charset=utf8,%3Csvg width='16' height='16' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cdefs%3E%3Cpath d='M8 1c.412 0 .679.168 1.018.508l5.726 5.725a.875.875 0 1 1-1.238 1.238L8 2.964 2.494 8.471a.875.875 0 1 1-1.238-1.238l5.746-5.746C7.335 1.155 7.588 1 8 1zm0 6c.412 0 .679.168 1.018.508l5.726 5.725a.875.875 0 1 1-1.238 1.238L8 8.964l-5.506 5.507a.875.875 0 1 1-1.238-1.238l5.746-5.746C7.335 7.155 7.588 7 8 7z' id='a'/%3E%3C/defs%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath fill='%23F8F8F8' d='M-540-538H826v768H-540z'/%3E%3Cg opacity='.3'%3E%3Cpath d='M0 0h16v16H0z'/%3E%3Cmask id='b' fill='%23fff'%3E%3Cuse xlink:href='%23a'/%3E%3C/mask%3E%3Cuse fill='%23000' fill-rule='nonzero' xlink:href='%23a'/%3E%3Cg mask='url(%23b)' fill='%23333'%3E%3Cpath d='M-82-57H98V73H-82z'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");\n        opacity: 1;\n        position: absolute;\n        top: 12px;\n        text-align: center;\n        transition: .5s;\n        width: 165px; }\n      .main-block__li:nth-child(3).main-block__li_active:before {\n        opacity: 0; }\n\n.scripts {\n  grid-area: scripts;\n  display: flex;\n  flex-direction: row;\n  flex-flow: wrap;\n  align-items: center;\n  justify-content: space-between;\n  margin-left: 26px; }\n  .scripts__title {\n    flex: 1;\n    line-height: 20px;\n    font-size: 18px;\n    color: #333;\n    margin: 30px 0 20px 0; }\n  .scripts__scripts-btns {\n    flex: 0 auto;\n    transition: .5s;\n    margin: 7px 33px 0 0; }\n  .scripts__scripts-btn-prev, .scripts__scripts-btn-next {\n    cursor: pointer;\n    transition: .2s;\n    opacity: 1; }\n    .scripts__scripts-btn-prev:first-child, .scripts__scripts-btn-next:first-child {\n      margin-right: 17px; }\n    .scripts__scripts-btn-prev:last-child, .scripts__scripts-btn-next:last-child {\n      transform: rotate(180deg);\n      transform-origin: 50% 50%; }\n    .scripts__scripts-btn-prev_disabled, .scripts__scripts-btn-next_disabled {\n      cursor: default;\n      opacity: 0.3; }\n  .scripts__scripts-container {\n    flex: 670px;\n    overflow: hidden;\n    height: 350px;\n    margin: -7.5px -5px -7.5px -5px; }\n  .scripts__ul {\n    height: 100%;\n    width: 655px;\n    column-width: 645px;\n    transition: .5s;\n    column-gap: 15px;\n    column-fill: auto; }\n  .scripts__li {\n    background-color: #f7f7f7;\n    border-radius: 20px;\n    cursor: pointer;\n    display: inline-block;\n    vertical-align: top;\n    height: 70px;\n    padding: 15px;\n    margin: 7.5px 5px 7.5px 5px;\n    transition: .2s;\n    width: 170px;\n    color: #333;\n    font-size: 14px;\n    letter-spacing: 0;\n    text-align: left;\n    font-weight: bold;\n    position: relative; }\n    .scripts__li p {\n      position: absolute;\n      bottom: 15px;\n      line-height: 1.2; }\n      .scripts__li p span {\n        font-family: ArialMT;\n        font-size: 12px;\n        font-weight: normal;\n        color: #858585;\n        letter-spacing: 0;\n        text-align: left; }\n    .scripts__li:hover {\n      background: #fff;\n      box-shadow: 0 2px 6px 0 rgba(197, 186, 186, 0.5); }\n\n.devices {\n  grid-area: devices;\n  display: flex;\n  flex-direction: row;\n  flex-flow: wrap;\n  align-items: center;\n  margin: 30px 0 0 0; }\n  .devices__title {\n    flex: 0 0 auto;\n    color: #333;\n    font-size: 18px; }\n  .devices__filters-ul {\n    flex: 1;\n    display: flex;\n    flex-flow: row nowrap;\n    margin: 0 0 0 10px; }\n  .devices__filter-li {\n    background: #f7f7f7;\n    border-radius: 20px;\n    font-size: 13px;\n    font-weight: bold;\n    cursor: pointer;\n    margin: 0 5px;\n    padding: 7px 11px 8px 15px;\n    transition: .2s; }\n    .devices__filter-li_active {\n      background: #ffd93e; }\n  .devices__devices-btns {\n    flex: 0 auto;\n    opacity: 1;\n    transition: .5s;\n    margin: 7px 33px 0 0; }\n    .devices__devices-btns_previous, .devices__devices-btns_next {\n      cursor: pointer;\n      outline: none;\n      transition: .2s; }\n      .devices__devices-btns_previous:first-child, .devices__devices-btns_next:first-child {\n        margin-right: 18px; }\n      .devices__devices-btns_previous:last-child, .devices__devices-btns_next:last-child {\n        transform: rotate(180deg);\n        transform-origin: 50% 50%; }\n    .devices__devices-btns_disabled {\n      cursor: default;\n      opacity: 0.3; }\n  .devices .devices-list {\n    overflow: hidden;\n    margin-top: 20px;\n    height: 125px;\n    width: calc(100% + 80px);\n    display: flex;\n    flex-flow: row nowrap; }\n    .devices .devices-list__li {\n      background: #f7f7f7;\n      border-radius: 20px;\n      flex: 0 0 170px;\n      display: flex;\n      flex-flow: column nowrap;\n      justify-content: flex-end;\n      height: 90px;\n      margin-right: 15px;\n      padding: 15px;\n      transition: .2s;\n      cursor: pointer;\n      font-weight: bold;\n      color: #333;\n      font-size: 14px;\n      letter-spacing: 0;\n      text-align: left;\n      line-height: 1.3; }\n      .devices .devices-list__li:hover {\n        background: #fff;\n        box-shadow: 0 2px 6px 0 rgba(197, 186, 186, 0.5); }\n      .devices .devices-list__li span {\n        color: #858585;\n        font-size: 12px;\n        letter-spacing: 0;\n        font-weight: normal;\n        text-align: left; }\n      .devices .devices-list__li_hidden {\n        display: none; }\n      .devices .devices-list__li .modal-block-slider {\n        display: none; }\n\nfooter {\n  color: #858585;\n  font-size: 12px;\n  margin-bottom: 30px; }\n  footer .footer-list {\n    display: flex; }\n    footer .footer-list__li {\n      padding: 0 17px 0 0;\n      color: #858585; }\n      footer .footer-list__li:last-child {\n        cursor: default;\n        margin-left: auto;\n        padding: 0; }\n    footer .footer-list__a {\n      color: #858585;\n      outline: none;\n      text-decoration: none; }\n\n.modal-block {\n  display: none;\n  opacity: 0;\n  background: #f7f7f7;\n  border-radius: 20px;\n  height: 238px;\n  width: 630px;\n  position: absolute;\n  transition-timing-function: ease-in;\n  transform-origin: left top;\n  transition: .5s;\n  z-index: 1000;\n  transform: scale(0.1); }\n  .modal-block__li {\n    background: #F2F1F0;\n    border-radius: 20px;\n    cursor: pointer;\n    margin: 0 5px;\n    font-size: 13px;\n    font-weight: 700;\n    padding: 7px 11px 8px 15px;\n    transition: .2s; }\n    .modal-block__li:first-child {\n      margin-left: 20px; }\n    .modal-block__li_active {\n      background: #ffd93e; }\n  .modal-block__output_temp {\n    color: #333;\n    font-size: 36px;\n    letter-spacing: 0;\n    font-weight: 700;\n    position: absolute;\n    right: 67px;\n    text-align: left;\n    top: 30px; }\n  .modal-block_active {\n    display: block;\n    opacity: 1;\n    transform: translate(-50%, -50%) scale(1);\n    top: 50% !important;\n    left: 50% !important; }\n  .modal-block__modal-info {\n    display: block;\n    height: 100%;\n    opacity: 1;\n    transition: .2s; }\n  .modal-block__modal-btns {\n    display: flex;\n    flex-flow: wrap row;\n    justify-content: space-between;\n    font-weight: 700;\n    margin-top: 21px;\n    opacity: 1;\n    transition: .2s;\n    width: 100%; }\n    .modal-block__modal-btns_close {\n      background: #fff;\n      border-radius: 20px;\n      cursor: pointer;\n      height: 60px;\n      line-height: 60px;\n      text-align: center;\n      width: 307px; }\n    .modal-block__modal-btns_apply {\n      background: #ffd93e;\n      border-radius: 20px;\n      cursor: pointer;\n      height: 60px;\n      line-height: 60px;\n      text-align: center;\n      width: 304px; }\n  .modal-block .devices-list__info-title {\n    padding: 25px 0 20px 25px;\n    font-weight: bold;\n    font-size: 27px; }\n    .modal-block .devices-list__info-title span {\n      font-size: 14px;\n      font-weight: normal; }\n  .modal-block__ul {\n    margin-right: 10px;\n    display: flex; }\n  .modal-block__form_light {\n    position: relative; }\n  .modal-block__output_light {\n    color: #fff;\n    pointer-events: none;\n    background-image: url(\"data:image/svg+xml;charset=utf8,%3C?xml version='1.0' encoding='UTF-8'?%3E%3Csvg width='24px' height='24px' viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3C!-- Generator: Sketch 51 (57462) - http://www.bohemiancoding.com/sketch --%3E%3Ctitle%3Eicon_sun%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cdefs%3E%3C/defs%3E%3Cg id='Final' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='v1-2-1-home-dashboard' transform='translate(-464.000000, -404.000000)'%3E%3Cg id='status' transform='translate(39.000000, 195.000000)'%3E%3Cg id='Group' transform='translate(1.000000, 40.000000)'%3E%3Cg id='Widget-Copy' transform='translate(410.000000, 155.000000)'%3E%3Cg id='icon' transform='translate(14.000000, 14.000000)'%3E%3Cg id='sun' transform='translate(1.000000, 1.000000)' stroke='%23FFFFFF' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'%3E%3Ccircle id='Oval' stroke-opacity='1' cx='11' cy='11' r='5'%3E%3C/circle%3E%3Cpath d='M11,0 L11,2' id='Shape' stroke-opacity='1'%3E%3C/path%3E%3Cpath d='M11,20 L11,22' id='Shape' stroke-opacity='1'%3E%3C/path%3E%3Cpath d='M3.22,3.22 L4.64,4.64' id='Shape' stroke-opacity='1'%3E%3C/path%3E%3Cpath d='M17.36,17.36 L18.78,18.78' id='Shape' stroke-opacity='1'%3E%3C/path%3E%3Cpath d='M0,11 L2,11' id='Shape' stroke-opacity='1'%3E%3C/path%3E%3Cpath d='M20,11 L22,11' id='Shape' stroke-opacity='1'%3E%3C/path%3E%3Cpath d='M3.22,18.78 L4.64,17.36' id='Shape' stroke-opacity='1'%3E%3C/path%3E%3Cpath d='M17.36,4.64 L18.78,3.22' id='Shape' stroke-opacity='1'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");\n    background-size: 36px 36px;\n    height: 36px;\n    width: 36px; }\n\n.modal-block-slider-temperature__input, .modal-block-slider-light__input {\n  -webkit-appearance: none;\n  appearance: none;\n  cursor: pointer;\n  border-radius: 30px;\n  height: 60px;\n  margin: 25px;\n  outline: none;\n  width: 580px; }\n\n.modal-block-slider-temperature__input {\n  background-image: linear-gradient(90deg, #068fff 2%, #ffd800 51%, #f76b1c 100%); }\n\n.modal-block-slider-light__input {\n  background-image: linear-gradient(85deg, #ffe682 2%, #ff9e00 98%); }\n\n.modal-block-slider-temperature__input::-webkit-slider-thumb, .modal-block-slider-light__input::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  appearance: none;\n  background: transparent;\n  border: 3px solid rgba(51, 51, 51, 0.1);\n  border-radius: 50%;\n  box-shadow: 0 0 0 4px #fff;\n  cursor: pointer;\n  height: 60px;\n  width: 60px; }\n\n.modal-block-slider-temperature__input::-moz-range-thumb, .modal-block-slider-light__input::-moz-range-thumb {\n  -moz-appearance: none;\n  appearance: none;\n  background: transparent;\n  border: 3px solid rgba(51, 51, 51, 0.1);\n  box-shadow: 0 0 0 4px #fff;\n  border-radius: 50%;\n  cursor: pointer;\n  height: 60px;\n  width: 60px; }\n\n.modal-block-slider-temperature__input::-moz-range-track, .modal-block-slider-light__input::-moz-range-track {\n  opacity: 0; }\n\n.modal-block__output_temp-min {\n  color: #fff;\n  font-size: 18px;\n  left: 45px;\n  letter-spacing: 0;\n  line-height: 0;\n  pointer-events: none;\n  position: absolute;\n  text-align: left;\n  top: 182px; }\n\n.modal-block__output_light, .modal-block__output_light-max {\n  color: #fff;\n  font-size: 18px;\n  letter-spacing: 0;\n  line-height: 0;\n  pointer-events: none;\n  position: absolute;\n  text-align: left;\n  top: 36px;\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3C?xml version='1.0' encoding='UTF-8'?%3E%3Csvg width='24px' height='24px' viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3C!-- Generator: Sketch 51 (57462) - http://www.bohemiancoding.com/sketch --%3E%3Ctitle%3Eicon_sun%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cdefs%3E%3C/defs%3E%3Cg id='Final' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='v1-2-1-home-dashboard' transform='translate(-464.000000, -404.000000)'%3E%3Cg id='status' transform='translate(39.000000, 195.000000)'%3E%3Cg id='Group' transform='translate(1.000000, 40.000000)'%3E%3Cg id='Widget-Copy' transform='translate(410.000000, 155.000000)'%3E%3Cg id='icon' transform='translate(14.000000, 14.000000)'%3E%3Cg id='sun' transform='translate(1.000000, 1.000000)' stroke='%23FFFFFF' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'%3E%3Ccircle id='Oval' stroke-opacity='1' cx='11' cy='11' r='5'%3E%3C/circle%3E%3Cpath d='M11,1 L11,2' id='Shape' stroke-opacity='1'%3E%3C/path%3E%3Cpath d='M11,20 L11,21' id='Shape' stroke-opacity='1'%3E%3C/path%3E%3Cpath d='M3.92,3.92 L4.64,4.64' id='Shape' stroke-opacity='1'%3E%3C/path%3E%3Cpath d='M17.96,17.96 L18.78,18.78' id='Shape' stroke-opacity='1'%3E%3C/path%3E%3Cpath d='M0,11 L1,11' id='Shape' stroke-opacity='1'%3E%3C/path%3E%3Cpath d='M20,11 L21,11' id='Shape' stroke-opacity='1'%3E%3C/path%3E%3Cpath d='M3.82,18.08 L4.64,17.36' id='Shape' stroke-opacity='1'%3E%3C/path%3E%3Cpath d='M17.36,4.64 L18.08,3.82' id='Shape' stroke-opacity='1'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");\n  background-size: 36px 36px;\n  height: 36px;\n  width: 36px; }\n\n.modal-block__output_light {\n  left: 40px; }\n  .modal-block__output_light-max {\n    left: 560px; }\n\n.modal-block__output_temp-max {\n  color: #fff;\n  font-size: 18px;\n  letter-spacing: 0;\n  line-height: 0;\n  pointer-events: none;\n  position: absolute;\n  right: 45px;\n  text-align: left;\n  top: 182px; }\n\n.modal-block-slider-floor-temp__form {\n  display: flex;\n  height: 200px;\n  margin-top: 25px;\n  position: relative;\n  justify-content: center; }\n\n.modal-block-slider-floor-temp__svg {\n  position: absolute;\n  top: -23px;\n  pointer-events: none; }\n\n.svg-floor {\n  position: absolute;\n  top: 92px;\n  left: 205px; }\n\n.input-range-div {\n  align-items: center;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  overflow: hidden;\n  position: relative;\n  width: 200px; }\n\n.modal-block-slider-floor-temp__input {\n  -webkit-appearance: none;\n  appearance: none;\n  background: url(\"data:image/svg+xml;charset=utf8,%3C?xml version='1.0' encoding='UTF-8'?%3E%3Csvg width='186px' height='186px' viewBox='0 0 186 186' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3C!-- Generator: Sketch 51 (57462) - http://www.bohemiancoding.com/sketch --%3E%3Ctitle%3Ebackground%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cdefs%3E%3Ccircle id='path-1' cx='111' cy='111' r='89'%3E%3C/circle%3E%3Cfilter x='-3.9%25' y='-2.8%25' width='107.9%25' height='107.9%25' filterUnits='objectBoundingBox' id='filter-2'%3E%3CfeOffset dx='0' dy='2' in='SourceAlpha' result='shadowOffsetOuter1'%3E%3C/feOffset%3E%3CfeGaussianBlur stdDeviation='2' in='shadowOffsetOuter1' result='shadowBlurOuter1'%3E%3C/feGaussianBlur%3E%3CfeColorMatrix values='0 0 0 0 0.524208121 0 0 0 0 0.475951723 0 0 0 0 0.279116418 0 0 0 0.446388134 0' type='matrix' in='shadowBlurOuter1'%3E%3C/feColorMatrix%3E%3C/filter%3E%3C/defs%3E%3Cg id='Final' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='v1-1-4-mobile-floor' transform='translate(-95.000000, -250.000000)'%3E%3Cg id='Group' transform='translate(0.000000, -44.000000)'%3E%3Cg id='Group-5' transform='translate(20.000000, 111.000000)'%3E%3Cg id='Group-4'%3E%3Cg id='round' transform='translate(57.000000, 163.000000)'%3E%3Cg id='Screen'%3E%3Cg id='background'%3E%3Cuse fill='black' fill-opacity='1' filter='url(%23filter-2)' xlink:href='%23path-1'%3E%3C/use%3E%3Cuse fill='%23FEFEFE' fill-rule='evenodd' xlink:href='%23path-1'%3E%3C/use%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E\") no-repeat;\n  background-size: cover;\n  border-radius: 50%;\n  cursor: pointer;\n  height: 178px;\n  outline: none;\n  width: 178px; }\n\n.modal-block-slider-floor-temp__input::-webkit-slider-thumb {\n  opacity: 0; }\n\n.modal-block-slider-floor-temp__input::-moz-range-thumb, .input-range-floor::-moz-range-track {\n  opacity: 0; }\n\n.modal-block-slider-floor-temp__output-sub {\n  position: absolute;\n  top: -95px;\n  right: 67px;\n  color: #333333;\n  letter-spacing: 0;\n  text-align: left;\n  font-size: 36px;\n  font-weight: 700; }\n\n.modal-block-slider-floor-temp__output {\n  top: 49px;\n  right: 253px;\n  font-size: 66px;\n  font-weight: 700;\n  color: #333333;\n  letter-spacing: 0;\n  text-align: left;\n  position: absolute;\n  pointer-events: none; }\n\nbody {\n  font-family: \"Arial Rounded MT Bold\", Helvetica, Arial, sans-serif;\n  overflow: hidden;\n  width: 1366px;\n  margin: 0 auto; }\n\na {\n  color: #000;\n  outline: none;\n  text-decoration: none; }\n\n.wrapper {\n  margin: 0 40px;\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh; }\n\n.fixed-bg {\n  background: transparent;\n  height: 100vh;\n  left: 0;\n  position: fixed;\n  top: 0;\n  visibility: hidden;\n  width: 100vw;\n  z-index: 1000; }\n  .fixed-bg_active {\n    background: rgba(51, 51, 51, 0.5);\n    visibility: visible; }\n\n.wrapper_blur {\n  filter: blur(2px); }\n\n@media (max-width: 450px) {\n  body {\n    width: 100%;\n    display: flex;\n    flex-flow: nowrap column;\n    overflow-x: hidden;\n    overflow-y: auto; }\n  .wrapper {\n    margin: 0; }\n  .header {\n    background: #fff;\n    border: 0;\n    height: 64px;\n    position: fixed;\n    padding-left: 20px;\n    z-index: 1001; }\n    .header__burger-menu {\n      display: block; }\n    .header__ul {\n      transition: .5s;\n      width: 100%; }\n    .header__li {\n      opacity: 0; }\n    .header__li-logo {\n      position: absolute; }\n  main {\n    display: flex;\n    flex-flow: nowrap column; }\n    main .main-block {\n      flex: 1; }\n      main .main-block__content {\n        height: 282px;\n        background: url(" + ___CSS_LOADER_URL___1___ + ");\n        border-radius: 20px;\n        width: calc(100vw - 20px - 40px);\n        margin-left: 20px; }\n      main .main-block__blocks-container {\n        right: 0;\n        top: 150px;\n        height: 120px;\n        width: 335px; }\n      main .main-block__block-list {\n        display: flex;\n        flex-flow: nowrap row; }\n      main .main-block__li:first-child {\n        margin: 0 20px 0 0; }\n      main .main-block__li {\n        flex: 1 0 200px;\n        margin: 0 20px 0 0; }\n    main .scripts {\n      flex: 1;\n      margin-top: 30px;\n      overflow: hidden;\n      padding: 0;\n      align-items: normal;\n      height: 200px; }\n      main .scripts__scripts-btns {\n        display: none; }\n      main .scripts__scripts-container {\n        flex: 100%;\n        height: 100%;\n        margin: 0; }\n      main .scripts__ul {\n        column-width: auto;\n        height: 110px;\n        flex-flow: row nowrap;\n        overflow-x: scroll;\n        width: 100%; }\n        main .scripts__ul:before {\n          content: \"\";\n          margin-right: 20px; }\n    main .section-devices {\n      padding: 0; }\n      main .section-devices .filters .devices-btns {\n        display: none; }\n      main .section-devices .filters .titleNfilters .title {\n        color: #333;\n        padding-left: 20px; }\n        main .section-devices .filters .titleNfilters .title h3 {\n          font-size: 18px; }\n      main .section-devices .filters .titleNfilters #filters-ul {\n        flex-flow: nowrap column;\n        height: 30px;\n        overflow: hidden;\n        padding-left: 20px;\n        position: absolute; }\n        main .section-devices .filters .titleNfilters #filters-ul li {\n          background: #fff;\n          border-radius: 0; }\n        main .section-devices .filters .titleNfilters #filters-ul li.active {\n          -moz-border-radius: 20px;\n          -webkit-border-radius: 20px;\n          align-self: flex-start;\n          background: #ffd93e;\n          border-radius: 20px;\n          order: -1; }\n          main .section-devices .filters .titleNfilters #filters-ul li.active:after {\n            background: url(" + ___CSS_LOADER_URL___2___ + ") 0 0 no-repeat;\n            background-size: 10px 10px;\n            content: \"\";\n            display: inline-block;\n            height: 10px;\n            margin-left: 5px;\n            transform: rotate(-90deg);\n            transform-origin: center;\n            transition: .5s;\n            width: 10px; }\n        main .section-devices .filters .titleNfilters #filters-ul.active {\n          overflow: visible; }\n          main .section-devices .filters .titleNfilters #filters-ul.active li.active:after {\n            transform: rotate(90deg); }\n      main .section-devices .devices {\n        margin-left: 0;\n        overflow: hidden;\n        width: 100%; }\n        main .section-devices .devices .devices-ul {\n          height: 125px;\n          overflow: scroll; }\n          main .section-devices .devices .devices-ul:before {\n            margin: 0 20px 0 0; }\n          main .section-devices .devices .devices-ul:after {\n            content: \"1\";\n            display: block;\n            opacity: 0;\n            width: 20px; }\n  .modal-space .modal-block .form-range-floor {\n    margin-top: 80px; }\n    .modal-space .modal-block .form-range-floor .svg-floor {\n      top: 153px;\n      left: 57px; }\n  .modal-space .modal-block .modal-html img {\n    display: none; }\n  .modal-space .modal-block .modal-html .text {\n    padding: 20px 20px 15px 20px; }\n    .modal-space .modal-block .modal-html .text b {\n      color: #333;\n      font-size: 18px; }\n    .modal-space .modal-block .modal-html .text span {\n      color: #333;\n      font-size: 12px; }\n  .modal-space .modal-block .modal-html .slider .div-slider-filters {\n    overflow: hidden; }\n  .modal-space .modal-block .modal-html .slider .slider-filters-ul {\n    padding-left: 15px;\n    width: 100vw; }\n  .modal-space .modal-block .modal-html .slider .slider-filters-item.active {\n    background: #ffd93e; }\n  .modal-space .modal-block .modal-html .slider .last {\n    display: none; }\n  .modal-space .modal-block .modal-html .slider form .output-range {\n    display: none; }\n  .modal-space .modal-block .modal-html .slider form .output-min {\n    left: 152px;\n    top: 315px; }\n    .modal-space .modal-block .modal-html .slider form .output-min.output-light {\n      left: 150px; }\n  .modal-space .modal-block .modal-html .slider form .output-max {\n    bottom: 0;\n    left: 152px;\n    top: 36px; }\n    .modal-space .modal-block .modal-html .slider form .output-max.output-light {\n      left: 150px; }\n  .modal-space .modal-block .modal-html .slider form .range-temperature, .modal-space .modal-block .modal-html .slider form .range-light {\n    background-image: linear-gradient(90deg, #068fff 2%, #ffd800 51%, #f76b1c 100%);\n    transform: rotate(-90deg) translate3d(-140px, -25px, 0);\n    width: 336px; }\n  .modal-space .modal-block .modal-html .slider form .range-light {\n    background-image: linear-gradient(85deg, #ffe682 2%, #ff9e00 98%); }\n  .modal-space .modal-block .modal-html .slider form .range-floor {\n    margin-top: 0; }\n  .modal-space .modal-block .modal-btns {\n    flex-flow: wrap column; }\n    .modal-space .modal-block .modal-btns .close, .modal-space .modal-block .modal-btns .apply {\n      margin-top: 15px;\n      max-width: 334px;\n      width: 100%; }\n  .modal-space .modal-block.active {\n    height: 492px;\n    width: 334px; }\n    .modal-space .modal-block.active.range-floor {\n      height: 492px;\n      margin-top: 0; }\n    .modal-space .modal-block.active .modal-btns {\n      bottom: -150px; }\n  .fixed-bg {\n    transition-delay: 0s; }\n  footer {\n    position: static; }\n    footer .footer {\n      height: 80px; }\n      footer .footer .footer-links {\n        flex-flow: wrap row;\n        justify-content: center;\n        padding: 0 20px; }\n        footer .footer .footer-links li {\n          line-height: 20px; }\n          footer .footer .footer-links li:last-child {\n            line-height: 30px;\n            margin: 0 auto; } }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/reset/reset.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/reset/reset.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\r\n\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed,\r\nfigure, figcaption, footer, header, hgroup,\r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    vertical-align: baseline;\r\n}\r\n\r\n/* make sure to set some focus styles for accessibility */\r\n:focus {\r\n    outline: none;\r\n}\r\n\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure,\r\nfooter, header, hgroup, menu, nav, section {\r\n    display: block;\r\n}\r\n\r\nbody {\r\n    line-height: 1;\r\n}\r\n\r\nol, ul {\r\n    list-style: none;\r\n}\r\n\r\nblockquote, q {\r\n    quotes: none;\r\n}\r\n\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n    content: '';\r\n    content: none;\r\n}\r\n\r\ntable {\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n}\r\n\r\ninput[type=search]::-webkit-search-cancel-button,\r\ninput[type=search]::-webkit-search-decoration,\r\ninput[type=search]::-webkit-search-results-button,\r\ninput[type=search]::-webkit-search-results-decoration {\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n}\r\n\r\ninput[type=search] {\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n    -webkit-box-sizing: content-box;\r\n    -moz-box-sizing: content-box;\r\n    box-sizing: content-box;\r\n}\r\n\r\ntextarea {\r\n    overflow: auto;\r\n    vertical-align: top;\r\n    resize: vertical;\r\n}\r\n\r\n/**\r\n * Correct `inline-block` display not defined in IE 6/7/8/9 and Firefox 3.\r\n */\r\n\r\naudio,\r\ncanvas,\r\nvideo {\r\n    display: inline-block;\r\n    *display: inline;\r\n    *zoom: 1;\r\n    max-width: 100%;\r\n}\r\n\r\n/**\r\n * Prevent modern browsers from displaying `audio` without controls.\r\n * Remove excess height in iOS 5 devices.\r\n */\r\n\r\naudio:not([controls]) {\r\n    display: none;\r\n    height: 0;\r\n}\r\n\r\n/**\r\n * Address styling not present in IE 7/8/9, Firefox 3, and Safari 4.\r\n * Known issue: no IE 6 support.\r\n */\r\n\r\n[hidden] {\r\n    display: none;\r\n}\r\n\r\n/**\r\n * 1. Correct text resizing oddly in IE 6/7 when body `font-size` is set using\r\n *    `em` units.\r\n * 2. Prevent iOS text size adjust after orientation change, without disabling\r\n *    user zoom.\r\n */\r\n\r\nhtml {\r\n    font-size: 100%; /* 1 */\r\n    -webkit-text-size-adjust: 100%; /* 2 */\r\n    -ms-text-size-adjust: 100%; /* 2 */\r\n}\r\n\r\n/**\r\n * Address `outline` inconsistency between Chrome and other browsers.\r\n */\r\n\r\na:focus {\r\n    outline: none;\r\n}\r\n\r\n/**\r\n * Improve readability when focused and also mouse hovered in all browsers.\r\n */\r\n\r\na:active,\r\na:hover {\r\n    outline: none;\r\n}\r\n\r\n/**\r\n * 1. Remove border when inside `a` element in IE 6/7/8/9 and Firefox 3.\r\n * 2. Improve image quality when scaled in IE 7.\r\n */\r\n\r\nimg {\r\n    border: 0; /* 1 */\r\n    -ms-interpolation-mode: bicubic; /* 2 */\r\n}\r\n\r\n/**\r\n * Address margin not present in IE 6/7/8/9, Safari 5, and Opera 11.\r\n */\r\n\r\nfigure {\r\n    margin: 0;\r\n}\r\n\r\n/**\r\n * Correct margin displayed oddly in IE 6/7.\r\n */\r\n\r\nform {\r\n    margin: 0;\r\n}\r\n\r\n/**\r\n * Define consistent border, margin, and padding.\r\n */\r\n\r\nfieldset {\r\n    border: 1px solid #c0c0c0;\r\n    margin: 0 2px;\r\n    padding: 0.35em 0.625em 0.75em;\r\n}\r\n\r\n/**\r\n * 1. Correct color not being inherited in IE 6/7/8/9.\r\n * 2. Correct text not wrapping in Firefox 3.\r\n * 3. Correct alignment displayed oddly in IE 6/7.\r\n */\r\n\r\nlegend {\r\n    border: 0; /* 1 */\r\n    padding: 0;\r\n    white-space: normal; /* 2 */\r\n    *margin-left: -7px; /* 3 */\r\n}\r\n\r\n/**\r\n * 1. Correct font size not being inherited in all browsers.\r\n * 2. Address margins set differently in IE 6/7, Firefox 3+, Safari 5,\r\n *    and Chrome.\r\n * 3. Improve appearance and consistency in all browsers.\r\n */\r\n\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea {\r\n    font-size: 100%; /* 1 */\r\n    margin: 0; /* 2 */\r\n    vertical-align: baseline; /* 3 */\r\n    *vertical-align: middle; /* 3 */\r\n}\r\n\r\n/**\r\n * Address Firefox 3+ setting `line-height` on `input` using `!important` in\r\n * the UA stylesheet.\r\n */\r\n\r\nbutton,\r\ninput {\r\n    line-height: normal;\r\n}\r\n\r\n/**\r\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\r\n * All other form control elements do not inherit `text-transform` values.\r\n * Correct `button` style inheritance in Chrome, Safari 5+, and IE 6+.\r\n * Correct `select` style inheritance in Firefox 4+ and Opera.\r\n */\r\n\r\nbutton,\r\nselect {\r\n    text-transform: none;\r\n}\r\n\r\n/**\r\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\r\n *    and `video` controls.\r\n * 2. Correct inability to style clickable `input` types in iOS.\r\n * 3. Improve usability and consistency of cursor style between image-type\r\n *    `input` and others.\r\n * 4. Remove inner spacing in IE 7 without affecting normal text inputs.\r\n *    Known issue: inner spacing remains in IE 6.\r\n */\r\n\r\nbutton,\r\nhtml input[type=\"button\"], /* 1 */\r\ninput[type=\"reset\"],\r\ninput[type=\"submit\"] {\r\n    -webkit-appearance: button; /* 2 */\r\n    cursor: pointer; /* 3 */\r\n    *overflow: visible;  /* 4 */\r\n}\r\n\r\n/**\r\n * Re-set default cursor for disabled elements.\r\n */\r\n\r\nbutton[disabled],\r\nhtml input[disabled] {\r\n    cursor: default;\r\n}\r\n\r\n/**\r\n * 1. Address box sizing set to content-box in IE 8/9.\r\n * 2. Remove excess padding in IE 8/9.\r\n * 3. Remove excess padding in IE 7.\r\n *    Known issue: excess padding remains in IE 6.\r\n */\r\n\r\ninput[type=\"checkbox\"],\r\ninput[type=\"radio\"] {\r\n    box-sizing: border-box; /* 1 */\r\n    padding: 0; /* 2 */\r\n    *height: 13px; /* 3 */\r\n    *width: 13px; /* 3 */\r\n}\r\n\r\n/**\r\n * 1. Address `appearance` set to `searchfield` in Safari 5 and Chrome.\r\n * 2. Address `box-sizing` set to `border-box` in Safari 5 and Chrome\r\n *    (include `-moz` to future-proof).\r\n */\r\n\r\ninput[type=\"search\"] {\r\n    -webkit-appearance: textfield; /* 1 */\r\n    -moz-box-sizing: content-box;\r\n    -webkit-box-sizing: content-box; /* 2 */\r\n    box-sizing: content-box;\r\n}\r\n\r\n/**\r\n * Remove inner padding and search cancel button in Safari 5 and Chrome\r\n * on OS X.\r\n */\r\n\r\ninput[type=\"search\"]::-webkit-search-cancel-button,\r\ninput[type=\"search\"]::-webkit-search-decoration {\r\n    -webkit-appearance: none;\r\n}\r\n\r\n/**\r\n * Remove inner padding and border in Firefox 3+.\r\n */\r\n\r\nbutton::-moz-focus-inner,\r\ninput::-moz-focus-inner {\r\n    border: 0;\r\n    padding: 0;\r\n}\r\n\r\n/**\r\n * 1. Remove default vertical scrollbar in IE 6/7/8/9.\r\n * 2. Improve readability and alignment in all browsers.\r\n */\r\n\r\ntextarea {\r\n    overflow: auto; /* 1 */\r\n    vertical-align: top; /* 2 */\r\n}\r\n\r\n/**\r\n * Remove most spacing between table cells.\r\n */\r\n\r\ntable {\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n}\r\n\r\nhtml,\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea {\r\n    color: #222;\r\n}\r\n\r\n\r\n::-moz-selection {\r\n    background: #b3d4fc;\r\n    text-shadow: none;\r\n}\r\n\r\n::selection {\r\n    background: #b3d4fc;\r\n    text-shadow: none;\r\n}\r\n\r\nimg {\r\n    vertical-align: middle;\r\n}\r\n\r\nfieldset {\r\n    border: 0;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\ntextarea {\r\n    resize: vertical;\r\n}\r\n\r\n.chromeframe {\r\n    margin: 0.2em 0;\r\n    background: #ccc;\r\n    color: #000;\r\n    padding: 0.2em 0;\r\n}\r\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/url-escape.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/url-escape.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function escape(url, needQuotes) {
  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/Icons/Arrow_Right/M_Copy@1x.svg":
/*!*********************************************!*\
  !*** ./src/Icons/Arrow_Right/M_Copy@1x.svg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/Icons/Arrow_Right/M_Copy@1x.svg";

/***/ }),

/***/ "./src/js/entry.js":
/*!*************************!*\
  !*** ./src/js/entry.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reset_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reset/reset.css */ "./src/reset/reset.css");
/* harmony import */ var _reset_reset_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reset_reset_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sass_index_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sass/index.sass */ "./src/sass/index.sass");
/* harmony import */ var _sass_index_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sass_index_sass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./src/js/index.js");




/***/ }),

/***/ "./src/js/helpers/arrowsDevices.js":
/*!*****************************************!*\
  !*** ./src/js/helpers/arrowsDevices.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return arrowsDevices; });
function arrowsDevices() {
  var arrowPrev = document.querySelector('.devices__devices-btns_previous');
  var arrowNext = document.querySelector('.devices__devices-btns_next');
  var devices = document.querySelectorAll('.devices-list__li');
  var device = document.querySelector('.devices-list__li');
  device.style.marginLeft = window.getComputedStyle(device).getPropertyValue('margin-left');
  var count = 6; // изменить на динамически

  var width = device.getBoundingClientRect().width + 15;
  var hiddenDevices = document.querySelectorAll('.devices__devices-btns_disabled').length;
  arrowPrev.classList.add('devices__devices-btns_disabled');
  arrowNext.classList.add('devices__devices-btns_disabled');

  if (devices.length - hiddenDevices > 6) {
    arrowNext.classList.remove('devices__devices-btns_disabled');
  } // стрелка влево


  arrowPrev.addEventListener('click', function () {
    var positionDevicesCarousel = parseInt(device.style.marginLeft, 10);
    var hiddenBlocks = document.querySelectorAll('.devices-list__li_hidden').length;

    if (devices.length - hiddenBlocks > count) {
      positionDevicesCarousel = Math.min(positionDevicesCarousel + width * count, 0);
      arrowNext.classList.remove('devices__devices-btns_disabled');

      if (!positionDevicesCarousel) {
        this.classList.add('devices__devices-btns_disabled');
      }

      device.style.marginLeft = "".concat(positionDevicesCarousel, "px");
    }
  }); // стрелка вправо

  arrowNext.addEventListener('click', function () {
    var positionDevicesCarousel = parseInt(device.style.marginLeft, 10);
    var hiddenBlocks = document.querySelectorAll('.devices-list__li_hidden').length;

    if (devices.length - hiddenBlocks > count) {
      positionDevicesCarousel = Math.max(positionDevicesCarousel - width * count, -width * (devices.length - hiddenBlocks - count));
      arrowPrev.classList.remove('devices__devices-btns_disabled');

      if (positionDevicesCarousel === -width * (devices.length - (hiddenBlocks + count))) {
        this.classList.add('devices__devices-btns_disabled');
      }

      device.style.marginLeft = "".concat(positionDevicesCarousel, "px");
    }
  });
}

/***/ }),

/***/ "./src/js/helpers/arrowsScripts.js":
/*!*****************************************!*\
  !*** ./src/js/helpers/arrowsScripts.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return arrowsScripts; });
function arrowsScripts() {
  var scriptsContainer = document.querySelector('.scripts__ul');
  var scripts = document.querySelectorAll('.scripts__li');
  var btnPrev = document.querySelector('.scripts__scripts-btn-prev');
  var btnNext = document.querySelector('.scripts__scripts-btn-next');
  scriptsContainer.style.marginLeft = window.getComputedStyle(scriptsContainer).getPropertyValue('margin-left');
  btnPrev.classList.add('scripts__scripts-btn-prev_disabled');
  btnNext.classList.add('scripts__scripts-btn-next_disabled');

  if (scripts.length > 9) {
    btnNext.classList.remove('scripts__scripts-btn-next_disabled');
  }

  var widthScenariosDiv = 670;
  var positionScriptsCarousel = 0;

  btnPrev.onclick = function () {
    positionScriptsCarousel = Math.min(positionScriptsCarousel + widthScenariosDiv, 0);
    btnNext.classList.remove('scripts__scripts-btn-next_disabled');

    if (!positionScriptsCarousel) {
      this.classList.add('scripts__scripts-btn-prev_disabled');
    }

    scriptsContainer.style.marginLeft = "".concat(positionScriptsCarousel, "px");
  };

  btnNext.onclick = function () {
    positionScriptsCarousel = Math.max(positionScriptsCarousel - widthScenariosDiv, -widthScenariosDiv * Math.ceil(scripts.length / 9 - 1));
    btnPrev.classList.remove('scripts__scripts-btn-prev_disabled');

    if (positionScriptsCarousel === -widthScenariosDiv * Math.ceil(scripts.length / 9 - 1)) {
      this.classList.add('scripts__scripts-btn-next_disabled');
    }

    scriptsContainer.style.marginLeft = "".concat(positionScriptsCarousel, "px");
  };
}

/***/ }),

/***/ "./src/js/helpers/circlePopup.js":
/*!***************************************!*\
  !*** ./src/js/helpers/circlePopup.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return circlePopup; });
function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians)
  };
}

function describeArc(x, y, radius, startAngle, endAngle) {
  var start = polarToCartesian(x, y, radius, endAngle);
  var end = polarToCartesian(x, y, radius, startAngle);
  var largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
  return ['M', start.x, start.y, 'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y].join(' ');
}

function circlePopup(context) {
  var slider = context.querySelector('.modal-block-slider-floor-temp__input');

  if (slider) {
    var orangePartSlider = context.querySelector('.modal-block-slider-floor-temp__path_orange');
    var blackPartSlider = context.querySelector('.modal-block-slider-floor-temp__path_black');
    var dashArray = context.querySelector('.modal-block-slider-floor-temp__path_dasharray');
    var degree = 300 / (slider.max - slider.min);
    orangePartSlider.setAttribute('d', describeArc(110, 110, 98, 210, 210 + (slider.value - slider.min) * degree));
    blackPartSlider.setAttribute('d', describeArc(110, 110, 98, 210, 510));
    dashArray.setAttribute('d', describeArc(110, 110, 98, 210, 510));
    slider.addEventListener('input', function () {
      var output = context.querySelector('.modal-block-slider-floor-temp__output');
      var outputSub = context.querySelector('.modal-block-slider-floor-temp__output-sub');
      output.innerHTML = "+".concat(this.value);
      outputSub.innerHTML = "+".concat(this.value);
      degree = 300 / (this.max - this.min);
      var iteration = this.value - this.min;
      orangePartSlider.setAttribute('d', describeArc(110, 110, 98, 210, 210 + iteration * degree));
    });
  }
}

/***/ }),

/***/ "./src/js/helpers/filters.js":
/*!***********************************!*\
  !*** ./src/js/helpers/filters.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return filters; });
function hideElements(devicesList, id) {
  var hiddenDevices = 0;
  Object.values(devicesList).map(function (el) {
    if (!el.classList.contains("devices-list__li_".concat(id))) {
      el.classList.add('devices-list__li_hidden');
      hiddenDevices += 1;
    }
  });
  return hiddenDevices;
}

function filters() {
  var devices = document.querySelector('.devices');
  var devicesList = document.querySelectorAll('.devices-list__li');
  var arrowPrev = document.querySelector('.devices__devices-btns_previous');
  var arrowNext = document.querySelector('.devices__devices-btns_next');
  devices.addEventListener('click', function (e) {
    var _e$target = e.target,
        classList = _e$target.classList,
        id = _e$target.id;
    var hiddenDevicesCount;

    if (classList.contains('devices__filter-li')) {
      devicesList[0].style.marginLeft = '0'; // спорно

      document.querySelector('.devices__filter-li_active').classList.remove('devices__filter-li_active');
      classList.add('devices__filter-li_active');
      Object.values(devicesList).map(function (el) {
        el.classList.remove('devices-list__li_hidden');
      });

      if (id !== 'all') {
        hiddenDevicesCount = hideElements(devicesList, id);
      } else {
        hiddenDevicesCount = 0;
      }

      arrowPrev.classList.add('devices__devices-btns_disabled');
      arrowNext.classList.add('devices__devices-btns_disabled'); // если больше шести блоков - валидная карусель

      if (devicesList.length - hiddenDevicesCount > 6) {
        arrowNext.classList.remove('devices__devices-btns_disabled');
      }
    }
  });
}

/***/ }),

/***/ "./src/js/helpers/filtersInPopup.js":
/*!******************************************!*\
  !*** ./src/js/helpers/filtersInPopup.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return filtersInPopup; });
function filtersInPopup() {
  var filters = document.querySelector('.modal-block__ul');
  var sliderTemperature = document.querySelector('.modal-block-slider-temperature__input');
  var sliderLight = document.querySelector('.modal-block-slider-light__input');
  var label = document.querySelector('.modal-block__output_temp');
  var filterValues = {
    manually: '10',
    cold: '-2',
    warm: '23',
    hot: '28',
    'manually-light': '50',
    day: '16',
    evening: '87',
    sunrise: '45'
  };
  sliderTemperature.addEventListener('input', function () {
    document.querySelector('.modal-block__li_active').classList.remove('modal-block__li_active');
    document.querySelector('.modal-block-slider-temperature__li_manually').classList.add('modal-block__li_active');
    label.innerHTML = this.value > 0 ? "+".concat(this.value) : this.value;
  });
  sliderLight.addEventListener('input', function () {
    document.querySelector('.modal-block__li_active').classList.remove('modal-block__li_active');
    document.querySelector('.modal-block-slider-light__li_manually-light').classList.add('modal-block__li_active');
  });
  filters.addEventListener('click', function (e) {
    var classList = e.target.classList;
    var tempClassName = 'modal-block-slider-temperature__li_';
    var lightClassName = 'modal-block-slider-light__li_';
    var modes = Object.keys(filterValues);

    if (classList.contains('modal-block__li')) {
      document.querySelector('.modal-block__li_active').classList.remove('modal-block__li_active');
      classList.add('modal-block__li_active');
      modes.map(function (el) {
        if (classList.contains(tempClassName + el)) {
          var value = filterValues[el];
          sliderTemperature.value = value;

          if (value > 0) {
            label.innerHTML = "+".concat(value);
          } else {
            label.innerHTML = value;
          }
        } else if (classList.contains(lightClassName + el)) {
          sliderLight.value = filterValues[el];
        }
      });
    }
  });
}

/***/ }),

/***/ "./src/js/helpers/navbar.js":
/*!**********************************!*\
  !*** ./src/js/helpers/navbar.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return navbar; });
function navbar() {
  var navBar = document.querySelector('.header__ul');
  var links = document.querySelectorAll('.header__a');
  navBar.addEventListener('click', function (e) {
    var classList = e.target.classList;

    if (classList.contains('header__a')) {
      Object.values(links).map(function (el) {
        el.classList.remove('header__a_active');
      });
      classList.add('header__a_active');
    }
  });
}

/***/ }),

/***/ "./src/js/helpers/others.js":
/*!**********************************!*\
  !*** ./src/js/helpers/others.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return others; });
function others() {
  // скролл главного окна, тут просто плавно убираем иконку, если скролл начался
  document.querySelector('.main-block__block-list').onscroll = function () {
    // document.getElementById("with-icon").querySelector("img").style.opacity = "1";
    document.getElementById('withIcon').classList.add('main-block__li_active');
  }; // не закончено
  // //бургерное меню для мобилок
  // document.getElementById('burger-menu').onclick = function () {
  //     document.getElementById('nav-links').classList.toggle('active-menu');
  //     document.querySelector('.fixed-bg').classList.toggle('active');
  // };
  //
  // //меню фильтров для мобилок
  // document.getElementById('filters-ul').onclick = function () {
  //     this.classList.toggle('active');
  // };
  // //для мобилок разделим wrapper и header, так как header в мобилках fixed
  // document.querySelector('header').classList.add('blur');
  // //отдельно блюрим футер, так как он у нас fixed
  // document.querySelector('footer').classList.add('blur');
  // document.querySelector('body').style.overflow = "hidden";
  // modalBlock.setAttribute('style', "transform: translate(" + translateX + "px, " + translateY + "px)");
  //
  // };

}

/***/ }),

/***/ "./src/js/helpers/popups.js":
/*!**********************************!*\
  !*** ./src/js/helpers/popups.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return popups; });
/* harmony import */ var _filtersInPopup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filtersInPopup */ "./src/js/helpers/filtersInPopup.js");
/* harmony import */ var _circlePopup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./circlePopup */ "./src/js/helpers/circlePopup.js");


function popups() {
  var modalBlock = document.querySelector('.modal-block');
  var modalBlockContent = document.querySelector('.modal-block__modal-info');
  var wrapper = document.querySelector('.wrapper');
  var bg = document.querySelector('.fixed-bg');
  var sliderInputTemp = document.querySelector('.modal-block-slider-temperature__input');
  var labelTemp = document.querySelector('.modal-block__output_temp');
  wrapper.addEventListener('click', function (e) {
    var found = e.path.find(function (el) {
      return el.classList.contains('devices-list__li');
    });

    if (found) {
      var classList = found.classList,
          innerHTML = found.innerHTML;
      classList.add('devices-list__li_opened');
      bg.classList.add('fixed-bg_active');
      wrapper.classList.add('wrapper_blur');
      modalBlock.style.top = "".concat(e.y, "px");
      modalBlock.style.left = "".concat(e.x, "px");
      modalBlockContent.innerHTML = innerHTML;
      setTimeout(function () {
        modalBlock.style.display = 'block';
        setTimeout(function () {
          modalBlock.classList.add('modal-block_active');
        }, 100);
      }, 100); // Если попап крутилка, то обработчики на фильтры не нужны

      if (!modalBlockContent.querySelector('.modal-block-slider_floor-temp')) {
        Object(_filtersInPopup__WEBPACK_IMPORTED_MODULE_0__["default"])(modalBlockContent);
      } else {
        modalBlock.style.height = '343px';
        Object(_circlePopup__WEBPACK_IMPORTED_MODULE_1__["default"])(modalBlockContent);
      }
    }
  });
  var btnApply = document.querySelector('.modal-block__modal-btns_apply');
  btnApply.addEventListener('click', function () {
    var block = document.querySelector('.devices-list__li_opened');
    var input = document.querySelector('.modal-block__modal-info input');
    input.defaultValue = input.value;
    block.innerHTML = modalBlockContent.innerHTML;
    modalBlockContent.innerHTML = "";
    block.classList.remove('devices-list__li_opened');
    modalBlock.classList.remove('modal-block_active');
    modalBlock.style.height = '';
    setTimeout(function () {
      modalBlock.style.display = 'none';
      bg.classList.remove('fixed-bg_active');
      wrapper.classList.remove('wrapper_blur');
    }, 500);
  });
  var btnClose = document.querySelector('.modal-block__modal-btns_close');
  btnClose.addEventListener('click', function () {
    var block = document.querySelector('.devices-list__li_opened');
    block.classList.remove('devices-list__li_opened');
    modalBlock.classList.remove('modal-block_active');
    modalBlock.style.height = '';
    setTimeout(function () {
      modalBlock.style.display = 'none';
      bg.classList.remove('fixed-bg_active');
      wrapper.classList.remove('wrapper_blur');
    }, 500);
  });
  var sliderForm = document.querySelector('.modal-block__form');
  sliderForm.addEventListener('input', function () {
    labelTemp.value = sliderInputTemp.value;
  });
}

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/navbar */ "./src/js/helpers/navbar.js");
/* harmony import */ var _helpers_filters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/filters */ "./src/js/helpers/filters.js");
/* harmony import */ var _helpers_arrowsScripts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/arrowsScripts */ "./src/js/helpers/arrowsScripts.js");
/* harmony import */ var _helpers_arrowsDevices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/arrowsDevices */ "./src/js/helpers/arrowsDevices.js");
/* harmony import */ var _helpers_popups__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/popups */ "./src/js/helpers/popups.js");
/* harmony import */ var _helpers_others__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers/others */ "./src/js/helpers/others.js");






document.addEventListener('DOMContentLoaded', function () {
  Object(_helpers_navbar__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_helpers_filters__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(_helpers_arrowsScripts__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_helpers_arrowsDevices__WEBPACK_IMPORTED_MODULE_3__["default"])();
  Object(_helpers_popups__WEBPACK_IMPORTED_MODULE_4__["default"])();
  Object(_helpers_others__WEBPACK_IMPORTED_MODULE_5__["default"])();
});

/***/ }),

/***/ "./src/reset/reset.css":
/*!*****************************!*\
  !*** ./src/reset/reset.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/reset/reset.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/sass/index.sass":
/*!*****************************!*\
  !*** ./src/sass/index.sass ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!./index.sass */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/sass/index.sass");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map