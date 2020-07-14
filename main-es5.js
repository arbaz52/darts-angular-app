function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js", "common", 0],
      "./ion-action-sheet-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js", "common", 1],
      "./ion-alert-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js", "common", 2],
      "./ion-alert-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js", "common", 3],
      "./ion-app_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js", "common", 4],
      "./ion-app_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js", "common", 5],
      "./ion-avatar_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js", "common", 6],
      "./ion-avatar_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js", "common", 7],
      "./ion-back-button-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js", "common", 8],
      "./ion-back-button-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js", "common", 9],
      "./ion-backdrop-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js", 10],
      "./ion-backdrop-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js", 11],
      "./ion-button_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js", "common", 12],
      "./ion-button_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js", "common", 13],
      "./ion-card_5-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js", "common", 14],
      "./ion-card_5-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js", "common", 15],
      "./ion-checkbox-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js", "common", 16],
      "./ion-checkbox-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js", "common", 17],
      "./ion-chip-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js", "common", 18],
      "./ion-chip-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js", "common", 19],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 20],
      "./ion-datetime_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js", "common", 21],
      "./ion-datetime_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js", "common", 22],
      "./ion-fab_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js", "common", 23],
      "./ion-fab_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js", "common", 24],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 25],
      "./ion-infinite-scroll_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js", "common", 26],
      "./ion-infinite-scroll_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js", "common", 27],
      "./ion-input-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js", "common", 28],
      "./ion-input-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js", "common", 29],
      "./ion-item-option_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js", "common", 30],
      "./ion-item-option_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js", "common", 31],
      "./ion-item_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js", "common", 32],
      "./ion-item_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js", "common", 33],
      "./ion-loading-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js", "common", 34],
      "./ion-loading-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js", "common", 35],
      "./ion-menu_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-ios.entry.js", "common", 36],
      "./ion-menu_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-md.entry.js", "common", 37],
      "./ion-modal-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js", "common", 38],
      "./ion-modal-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js", "common", 39],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 40],
      "./ion-popover-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js", "common", 41],
      "./ion-popover-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js", "common", 42],
      "./ion-progress-bar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js", "common", 43],
      "./ion-progress-bar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js", "common", 44],
      "./ion-radio_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js", "common", 45],
      "./ion-radio_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js", "common", 46],
      "./ion-range-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js", "common", 47],
      "./ion-range-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js", "common", 48],
      "./ion-refresher_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js", "common", 49],
      "./ion-refresher_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js", "common", 50],
      "./ion-reorder_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js", "common", 51],
      "./ion-reorder_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js", "common", 52],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 53],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 54],
      "./ion-searchbar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js", "common", 55],
      "./ion-searchbar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js", "common", 56],
      "./ion-segment_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js", "common", 57],
      "./ion-segment_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js", "common", 58],
      "./ion-select_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js", "common", 59],
      "./ion-select_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js", "common", 60],
      "./ion-slide_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js", 61],
      "./ion-slide_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js", 62],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 63],
      "./ion-split-pane-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js", 64],
      "./ion-split-pane-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js", 65],
      "./ion-tab-bar_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js", "common", 66],
      "./ion-tab-bar_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js", "common", 67],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 68],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 69],
      "./ion-textarea-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js", "common", 70],
      "./ion-textarea-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js", "common", 71],
      "./ion-toast-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js", "common", 72],
      "./ion-toast-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js", "common", 73],
      "./ion-toggle-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js", "common", 74],
      "./ion-toggle-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js", "common", 75],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 76]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/add-admin/add-admin.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-admin/add-admin.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAddAdminAddAdminComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id='container'>\n    <div class='wrapper'>\n        <!-- <p>add-admin works!</p> -->\n        <h1>Add an Admin</h1>\n        <h2>Select Person</h2>\n        <div>\n            <div id='available-admins'>\n                <h3 [class.done]=\"admin.personId != ''\" [class.ion-checkmark-circled]=\"admin.personId != ''\">Available People\n                </h3>\n                <div *ngIf=\"admin.personId == ''\">\n                    <p>Click to select the person</p>\n\n                    <div class='person-holder'>\n                        <!-- available people -->\n                        <div *ngFor=\"let p of people; let i = index\" (click)=\"selectPerson(p, i)\" title=\"p.fullName\">\n                            <!-- <img src=\"{{p.picture_url}}\" /> {{p._id}} {{p.fullName}} {{p.gender}} {{p.picture_url}} -->\n                            <app-person-details [person]=\"p\"></app-person-details>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div>\n                <h3 [class.done]=\"admin.personId != ''\" [class.ion-checkmark-circled]=\"admin.personId != ''\">Add a person\n                </h3>\n                <div *ngIf=\"admin.personId == ''\">\n                    <h2>Add A New Person</h2>\n                    <app-add-person [toaster]=\"toaster\" [url]=\"url\" (personAdded)=\"personAdded($event)\">\n                    </app-add-person>\n\n                </div>\n            </div>\n        </div>\n        <h2>Privileges</h2>\n        <div>\n            <div *ngFor=\"let p of priv; let i = index\">\n                <input type='checkbox' name=\"pri\" value=\"{{p.name}}\" (change)=\"priv[i].checked = $event.target.checked;\" /> - {{p.name}}\n            </div>\n        </div>\n\n        <h2>Login Credentials</h2>\n        <p>Password will be emailed to the owner of this account!</p>\n        <div>\n            <h4>Person Selected: {{personSelected.fullName}} <button class='button' (click)=\"resetSelection()\">Reset\n                    Selection</button></h4>\n        </div>\n        <div>\n            <label for=\"\">*Email Address</label>\n            <input type='email' placeholder=\"Email Address\" [(ngModel)]=\"admin.email\" />\n            <button class=\" button \" (click)=\"addAdmin() \">Add this admin</button>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/add-authoritative/add-authoritative.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-authoritative/add-authoritative.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAddAuthoritativeAddAuthoritativeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id='container'>\n    <div class='wrapper'>\n        <!-- <p>add-ap works!</p> -->\n        <h1>Add an Authoritative Person</h1>\n        <h2>Select Person</h2>\n        <div>\n            <div id='available-aps'>\n                <h3 [class.done]=\"ap.personId != ''\" [class.ion-checkmark-circled]=\"ap.personId != ''\">Available People\n                </h3>\n                <div *ngIf=\"ap.personId == ''\">\n                    <p>Click to select the person</p>\n\n                    <div class='person-holder'>\n                        <!-- available people -->\n                        <div *ngFor=\"let p of people; let i = index\" (click)=\"selectPerson(p, i)\" title=\"p.fullName\">\n                            <!-- <img src=\"{{p.picture_url}}\" /> {{p._id}} {{p.fullName}} {{p.gender}} {{p.picture_url}} -->\n                            <app-person-details [person]=\"p\"></app-person-details>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div>\n                <h3 [class.done]=\"ap.personId != ''\" [class.ion-checkmark-circled]=\"ap.personId != ''\">Add a person</h3>\n                <div *ngIf=\"ap.personId == ''\">\n                    <h2>Add A New Person</h2>\n                    <app-add-person [toaster]=\"toaster\" [url]=\"url\" (personAdded)=\"personAdded($event)\">\n                    </app-add-person>\n                </div>\n            </div>\n        </div>\n        <h2>Privileges</h2>\n        <div>\n            <div *ngFor=\"let p of priv; let i = index\">\n                <input type='checkbox' name=\"pri\" value=\"{{p.name}}\" (change)=\"priv[i].checked = $event.target.checked;\" /> - {{p.name}}\n            </div>\n        </div>\n\n        <h2>Login Credentials</h2>\n        <p>Password will be emailed to the owner of this account!</p>\n        <div>\n            <h4>Person Selected: {{personSelected.fullName}} <button class='button' (click)=\"resetSelection()\">Reset\n                    Selection</button></h4>\n        </div>\n        <div>\n            <label for=\"\">*Email Address</label>\n            <input type='email' placeholder=\"Email Address\" [(ngModel)]=\"ap.email\" />\n            <button class=\" button \" (click)=\"addAp() \">Add this Authoritative Person</button>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/add-camera/add-camera.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-camera/add-camera.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAddCameraAddCameraComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id='container'>\r\n    <div class='wrapper'>\r\n        <h1>Add a new camera </h1>\r\n        <p>(Double click on map to choose location)</p>\r\n        <div class='grid-form'>\r\n            <agm-map class='map' (mapClick)=\"choseThisLocation($event)\" [latitude]=\"comsats.latitude\" [longitude]=\"comsats.longitude\" [zoom]=\"16\">\r\n                <agm-marker [longitude]=\"locationCoords.longitude\" [latitude]=\"locationCoords.latitude\" *ngIf=\"locationSelected\"></agm-marker>\r\n            </agm-map>\r\n            <form>\r\n                <!-- for styling -->\r\n                <div>\r\n                    <label>Url: </label>\r\n                    <input type='url' [(ngModel)]=\"url\" name='url' />\r\n                    <label>Location </label>\r\n\r\n                    <!-- filler -->\r\n                    <label for=\"\"></label>\r\n\r\n                    <label>Longitude: </label>\r\n                    <input type='number' [(ngModel)]=\"locationCoords.longitude\" name='longitude' />\r\n                    <label>Latitude: </label>\r\n                    <input type='number' [(ngModel)]=\"locationCoords.latitude\" name='latitude' />\r\n\r\n                    <!-- filler -->\r\n                    <label></label>\r\n\r\n                    <button (click)=\"addCamera()\">Add Camera</button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/add-person/add-person.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-person/add-person.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAddPersonAddPersonComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class='add-person'>\n    <div class='image-holder'>\n        <label for=\"\" *ngIf=\"person.picture_url != null\">Selected Image</label>\n\n        <img *ngIf=\"person.picture_url != null\" [src]=\"person.picture_url\" alt=\"\" class='image'>\n        <label>Picture</label>\n        <input type='file' ng2FileSelect [uploader]=\"uploader\" name=\"picture\" (onFileSelected)=\"personPictureSelected($event)\" (change)=\"pictureChanged($event)\">\n    </div>\n    <div class='data-holder'>\n        <label>Full Name</label>\n        <input type='text' [(ngModel)]=\"person.fullName\" name=\"fullName\">\n        <label>Gender</label>\n        <select name=\"gender\" [(ngModel)]=\"person.gender\">\n            <option value=\"male\">Male</option>\n            <option value=\"female\">Female</option>\n            <option value=\"undisclosed\">Undisclosed</option>\n        </select>\n        <label for=\"\"></label>\n        <button (click)=\"addPerson()\">Add a new Person</button>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/add-qrunit/add-qrunit.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-qrunit/add-qrunit.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAddQrunitAddQrunitComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id='container'>\n    <div class='wrapper'>\n        <!-- <p>add-qrunit works!</p> -->\n        <h1>Add a new QR Unit </h1>\n        <form>\n            <label>QRUnit Name</label>\n            <input type='text' [(ngModel)]=\"qrunit.name\" name=\"name\" placeholder=\"QRUnit Name\" style=\"font-size:30px;\" />\n            <h2>Members ({{members.length}})</h2>\n            <div class='member-holder'>\n                <table border=\"1\" width=\"100%\">\n                    <tr>\n                        <th style='text-align: center' *ngFor=\"let c of col\">\n                            {{c}}\n                        </th>\n                    </tr>\n                    <tr class='member' *ngFor=\"let m of members; let i = index\">\n                        <td style='padding: 5px 10px;'>{{m._id}}</td>\n                        <td style='padding: 5px 10px;'>{{m.fullName}}</td>\n                        <td style='padding: 5px 10px;'>{{m.gender}}</td>\n                        <td style='padding: 5px 10px;'> <img src=\"{{m.picture_url}}\" /></td>\n                        <td style='padding: 5px 10px;'><button class='button red' (click)=\"removeMember(i, member)\">Remove</button></td>\n                    </tr>\n                </table>\n            </div>\n            <h2>Available People</h2>\n            <p>Click to select them as members</p>\n            <div class='person-holder'>\n                <!-- available people -->\n                <div *ngFor=\"let p of people; let i = index\" (click)=\"addAsMember(p, i)\" title=\"p.fullName\">\n                    <!-- <img src=\"{{p.picture_url}}\" /> {{p._id}} {{p.fullName}} {{p.gender}} {{p.picture_url}} -->\n                    <app-person-details [person]=\"p\"></app-person-details>\n                </div>\n            </div>\n            <h2>Add A New Person</h2>\n            <app-add-person [toaster]=\"toaster\" [url]=\"url\" (personAdded)=\"people.push($event)\"></app-add-person>\n\n            <h1>All Done</h1>\n            <button class='button green' (click)=\"addQRUnit()\">Add this QRUnit</button>\n        </form>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/add-server/add-server.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-server/add-server.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAddServerAddServerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id='container'>\n    <div class='wrapper'>\n        <h1>Add a new Server </h1>\n        <p>(Double click on map to choose location)</p>\n        <div class='grid-form'>\n            <agm-map class='map' (mapClick)=\"choseThisLocation($event)\" [latitude]=\"comsats.latitude\" [longitude]=\"comsats.longitude\" [zoom]=\"16\">\n                <agm-marker [longitude]=\"locationCoords.longitude\" [latitude]=\"locationCoords.latitude\" *ngIf=\"locationSelected\"></agm-marker>\n            </agm-map>\n            <form>\n                <!-- for styling -->\n                <div>\n                    <label>Name: </label>\n                    <input type='text' [(ngModel)]=\"name\" name='name' />\n                    <label>Url: </label>\n                    <input type='url' [(ngModel)]=\"url\" name='url' />\n                    <label>Location </label>\n\n                    <!-- filler -->\n                    <label for=\"\"></label>\n\n                    <label>Longitude: </label>\n                    <input type='number' [(ngModel)]=\"locationCoords.longitude\" name='longitude' />\n                    <label>Latitude: </label>\n                    <input type='number' [(ngModel)]=\"locationCoords.latitude\" name='latitude' />\n\n                    <!-- filler -->\n                    <label></label>\n\n                    <button (click)=\"addServer()\">Add Server</button>\n                </div>\n            </form>\n        </div>\n\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/add-suspect/add-suspect.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-suspect/add-suspect.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAddSuspectAddSuspectComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id='container'>\n    <div class='wrapper'>\n        <h1>Add a new Suspect </h1>\n        <form>\n            <label>Full Name: </label>\n            <input type='text' [(ngModel)]=\"suspect.fullName\" name='fullName' />\n\n\n            <label>Gender: </label>\n            <select [(ngModel)]=\"suspect.gender\" name=\"gender\">\n                <option value=\"Male\">Male</option>\n                <option value=\"Female\">Female</option>\n            </select>\n\n            <label>Tags (separated by commas): </label>\n            <textarea [(ngModel)]=\"suspect.tags\" name='tags'></textarea>\n\n\n\n            <!-- filler -->\n            <label></label>\n\n            <button (click)=\"addSuspect()\">Add Suspect</button>\n        </form>\n    </div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/adjust-preprocessing/adjust-preprocessing.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adjust-preprocessing/adjust-preprocessing.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdjustPreprocessingAdjustPreprocessingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"adjust-preprocessing\">\n    <h3>Preprocess CCTV footage </h3>\n    <div>\n        <label for=\"\">Brightness</label>\n        <mat-slider thumbLabel min=\"0\" max=\"4\" step=\"0.1\" [(ngModel)]=\"brightness\"></mat-slider>\n        <input type='number' [(ngModel)]=\"brightness\" />\n\n        <label for=\"\">De Noise (Reduce noise if any)</label>\n        <mat-slider thumbLabel min=\"0\" max=\"10\" step=\"1\" [(ngModel)]=\"denoise\"></mat-slider>\n        <input type='number' [(ngModel)]=\"denoise\" />\n\n        <label for=\"\">Sharpness</label>\n        <mat-slider thumbLabel min=\"-2\" max=\"4\" step=\"0.1\" [(ngModel)]=\"sharpness\"></mat-slider>\n        <input type='number' [(ngModel)]=\"sharpness\" />\n\n        <label for=\"\"></label>\n        <label for=\"\"></label>\n        <button (click)=\"updateCameraPreprocessingValues()\">Update</button>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-home/admin-home.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-home/admin-home.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminHomeAdminHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id='container'>\n    <div class='wrapper'>\n        <h1>Welcome to Admin Dashboard</h1>\n        <div class='bar'>\n            <h1>Manage QRUnits</h1>\n            <div class='buttons'>\n                <button routerLink=\"../qrunits/add\">Add QRUnit</button>\n            </div>\n        </div>\n        <div class='bar'>\n            <h1>Manage Cameras</h1>\n            <div class='buttons'>\n                <button routerLink=\"../cameras/autoassign\">Auto Assign Cameras > Servers</button>\n                <button routerLink=\"../cameras/add\">Add Camera</button>\n            </div>\n        </div>\n        <div class='search'>\n            <p>Search for cameras at location: </p>\n            <div class='search-bar'>\n                <input type='search' (focus)=\"toaster.info('Press enter to search!')\" [(ngModel)]=\"search.cameras.query\" (keyup.enter)=\"searchForCamerasAtLocation()\" placeholder=\"Type location name\" />\n                <button (click)=\"clearCamerasSearchQuery()\">Clear</button>\n            </div>\n        </div>\n        <div class='cameras'>\n            <div *ngIf=\"search.cameras.query != ''\">\n                <div *ngIf=\"search.cameras.location != null\">\n                    <h4>Cameras near location: </h4>\n                    <p>{{search.cameras.location.formatted}}</p>\n                    <div class='cameras-holder'>\n                        <app-camera-details *ngFor=\"let camera of search.cameras.cameras\" routerLink=\"../cameras/{{camera._id}}\" [camera]=\"camera\"></app-camera-details>\n                    </div>\n                </div>\n            </div>\n            <div *ngIf=\"search.cameras.query == ''\">\n                <div class='cameras-holder'>\n                    <app-camera-details *ngFor=\"let camera of cameras\" routerLink=\"../cameras/{{camera._id}}\" [camera]=\"camera\"></app-camera-details>\n                </div>\n            </div>\n        </div>\n        <div class='bar'>\n            <h1>Manage Servers</h1>\n            <div class='buttons'>\n                <button routerLink=\"../servers/add\">Add Server</button>\n            </div>\n        </div>\n        <div class='servers'>\n            <app-server-details *ngFor=\"let server of servers\" [server]=\"server\">\n            </app-server-details>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-login/admin-login.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-login/admin-login.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminLoginAdminLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id='container'>\n    <div class='wrapper'>\n        <h1>Login as Admin</h1>\n        <form>\n            <label>Email:</label>\n            <input type='email' name=\"email\" [(ngModel)]=\"email\" placeholder=\"Enter email here\"/>\n            <label>Password:</label>\n            <input type='password' name=\"password\" [(ngModel)]=\"password\" placeholder=\"Enter password here\" />\n            <button (click)=\"login()\">Login as admin</button>\n        </form>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header>\n    <div class='wrapper'>\n        <!-- <div class='title'>\n            DARTS\n        </div> -->\n        <div class='logo'>\n        </div>\n        <ul>\n            <li>\n                <a routerLink=\"\">Main Page</a>\n            </li>\n\n            <li *ngIf=\"didAdminLogin\">\n                <a routerLink=\"admin/home\">Admin Dashboard</a>\n            </li>\n\n            <li *ngIf=\"!didAdminLogin && !didAuthoritativeLogin\">\n                <a routerLink=\"admin/login\">Login as Admin</a>\n            </li>\n            <li *ngIf=\"didAdminLogin\">\n                <a (click)=\"adminLogout()\">\n                    Logout\n                </a>\n            </li>\n\n\n            <li *ngIf=\"!didAdminLogin && !didAuthoritativeLogin\">\n                <a routerLink=\"authoritative/login\">Login as Authoritative Person</a>\n            </li>\n\n            <li *ngIf=\"didAuthoritativeLogin\">\n                <a routerLink=\"authoritative/home\">Authoritative Dashboard</a>\n            </li>\n            <li *ngIf=\"didAuthoritativeLogin\">\n                <a (click)=\"authoritativeLogout()\">\n                    Logout\n                </a>\n            </li>\n\n        </ul>\n    </div>\n</header>\n\n<router-outlet (activate)='ngOnInit()'>\n</router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/authoritative-home/authoritative-home.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authoritative-home/authoritative-home.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthoritativeHomeAuthoritativeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id='container'>\n    <div class='wrapper'>\n        <h1>Welcome to Authoritative Dashboard</h1>\n        <div class='big-banner'>\n            <button class='button green' routerLink=\"./../map\">Open Map</button>\n            <button class='button green' routerLink=\"./../admins/add\">Add Admin</button>\n            <button class='button green' routerLink=\"./../authoritative/add\">Add Authoritative Person</button>\n        </div>\n\n\n        <!-- \n        <div class='bar'>\n            <h1>Cameras</h1>\n        </div>\n        <div class='cameras'>\n            <div *ngFor=\"let camera of cameras\" class='camera' routerLink=\"../cameras/{{camera._id}}\">\n                <p class='id'>ID: {{camera._id}}</p>\n                <p class='location'>Location: {{camera.latitude | number : '.2' }},{{camera.longitude| number : '1.1' }}</p>\n                <img src=\"{{camera.url}}\" />\n            </div>\n        </div>\n         -->\n        <div class='bar'>\n            <h1>Manage Suspects</h1>\n            <div class='buttons'>\n                <button routerLink=\"../suspects/add\">Add Suspect</button>\n            </div>\n        </div>\n\n        <div class='search' *ngIf=\"search.suspects.query != null\">\n            <p>Search for Suspects: </p>\n            <div class='search-bar'>\n                <input type='search' (focus)=\"toaster.info('Press enter to search!')\" [(ngModel)]=\"search.suspects.query\" (keyup.enter)=\"searchForSuspects()\" placeholder=\"Type search query\" />\n                <button (click)=\"clearSuspectsSearchQuery()\">Clear</button>\n            </div>\n        </div>\n\n        <div *ngIf=\"search.suspects.query != ''\">\n            <h4>Suspects fitting search query ' {{search.suspects.query}} ': </h4>\n            <div class='suspects'>\n                <app-suspect-details *ngFor=\"let suspect of search.suspects.suspects\" routerLink=\"../suspects/{{suspect._id}}\" [suspect]=\"suspect\"></app-suspect-details>\n            </div>\n        </div>\n        <div *ngIf=\"search.suspects.query == ''\" class='suspects'>\n            <div *ngFor=\"let suspect of suspects\" routerLink=\"../suspects/{{suspect._id}}\">\n                <app-suspect-details [suspect]=\"suspect\"></app-suspect-details>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/authoritative-login/authoritative-login.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authoritative-login/authoritative-login.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthoritativeLoginAuthoritativeLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id='container'>\n    <div class='wrapper'>\n        <h1>Login as Authoritative Person</h1>\n        <form>\n            <label>Email:</label>\n            <input type='email' name=\"email\" [(ngModel)]=\"email\" placeholder=\"Enter email here\" />\n            <label>Password:</label>\n            <input type='password' name=\"password\" [(ngModel)]=\"password\" placeholder=\"Enter password here\" />\n            <button (click)=\"loginx()\">Login as Authoritative Person</button>\n        </form>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/auto-assign-camera/auto-assign-camera.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auto-assign-camera/auto-assign-camera.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAutoAssignCameraAutoAssignCameraComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id='container'>\n    <div class='wrapper'>\n        <h1>Automatically Assign Cameras to nearest Servers</h1>\n        <h2 class='warning'>Warning</h2>\n        <p class='warning'>This will reset all the connections (cameras to servers) and will make new connections based on the location and to evenly distribute cameras to server in order to avoid bottleneck.</p>\n        <p class='warning'>Are you sure you want to continue?</p>\n        <div style='text-align: center;'>\n            <button class='green' (click)=\"autoAssign()\">Yes, I'm sure.</button>\n            <button class='red' routerLink=\"../../home/\">No, I'll reconsider.</button>\n        </div>\n        <p>{{result}}</p>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/camera-details/camera-details.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/camera-details/camera-details.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCameraDetailsCameraDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class='camera-details'>\n    <div class='image-holder'>\n        <img class='image' *ngIf=\"validImg\" src=\"{{camera.url}}\" (error)=\"validImg=false\" />\n        <div *ngIf=\"!validImg\">Streaming unavailable for this camera</div>\n    </div>\n    <div class='details-holder'>\n        <ion-icon name=\"wifi-outline\"></ion-icon>\n        <label> {{camera.url}}\n        </label>\n        <ion-icon name=\"location-outline\"></ion-icon>\n        <label>lat: {{camera.latitude | number: '2.4'}}, lng:\n            {{camera.longitude | number: '2.4'}}\n        </label>\n        <ion-icon name=\"videocam-outline\"></ion-icon>\n        <label> {{camera._id}}\n        </label>\n        <ion-icon name=\"server-outline\"></ion-icon>\n        <label> connected to: {{camera.serverId || \"No server\"}}\n        </label>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/chipper/chipper.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chipper/chipper.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppChipperChipperComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-form-field style=\"width: 100%\" class=\"example-chip-list\">\n    <mat-chip-list #chipList aria-label=\"Tags Selection\">\n        <mat-chip *ngFor=\"let item of items\" [selectable]=\"selectable\" [removable]=\"removable\" (removed)=\"remove(item)\">\n            {{item}}\n            <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n        </mat-chip>\n        <input placeholder=\"Tags for this suspect\" [matChipInputFor]=\"chipList\" [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\" [matChipInputAddOnBlur]=\"addOnBlur\" (matChipInputTokenEnd)=\"add($event)\">\n    </mat-chip-list>\n</mat-form-field>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main-home/main-home.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main-home/main-home.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainHomeMainHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id='container'>\n    <div class='wrapper'>\n        <h1 class='title'>DARTS</h1>\n        <p>Detection And Recognition with Tracking of Suspects</p>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/map-with-search/map-with-search.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/map-with-search/map-with-search.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMapWithSearchMapWithSearchComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"map-with-navigation\">\n    <div class=\"search-bar-holder\">\n        <div class='search-bar'>\n            <input type=\"search\" placeholder=\"Search location\" [(ngModel)]=\"query\" (keydown.enter)=\"search()\">\n            <button (click)=\"search()\">Search</button>\n        </div>\n        <ul class='results'>\n            <li *ngFor=\"let result of results; let i = index\" class='result' (click)=\"selectLocation(i)\">\n                {{result.formatted}}\n            </li>\n        </ul>\n    </div>\n    <div class=\"map-holder\">\n        <agm-map class='map' [latitude]=\"latitude\" [longitude]=\"longitude\" [zoom]=\"zoom\" (mapClick)=\"choseThisLocation($event)\">\n            <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\"></agm-marker>\n        </agm-map>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/person-details/person-details.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/person-details/person-details.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPersonDetailsPersonDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class='person-details'>\n    <div class='image-holder'>\n        <img class='image' src=\"{{person.picture_url}}\" />\n    </div>\n    <div class='details-holder'>\n        <label>Full Name: </label>\n        <label>{{person.fullName}}</label>\n        <label>Gender: </label>\n        <label>{{person.gender}}</label>\n        <!--\n        <label>ID: </label>\n        <label>{{person._id}}</label>\n        -->\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/qrunit-login-with-qrcode/qrunit-login-with-qrcode.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/qrunit-login-with-qrcode/qrunit-login-with-qrcode.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppQrunitLoginWithQrcodeQrunitLoginWithQrcodeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id='container'>\n    <div class='wrapper'>\n        <h1>Welcome to one-time login for QR Unit</h1>\n        <p>Please open the 'DARTS' app on the phone and scan the QR Code to login</p>\n        <div style='text-align: center;'>\n            <img style='width: 200px;' src=\"https://darts-web-server.herokuapp.com/images/{{authId}}\">\n        </div>\n        <div>When the app correctly scans the QR Code you can go back.</div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/server-details/server-details.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/server-details/server-details.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppServerDetailsServerDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class='server-details' routerLink=\"/admin/servers/{{server._id}}\">\n    <h3>{{server.name}}</h3>\n\n    <div class='details-holder'>\n        <ion-icon name=\"wifi-outline\"></ion-icon>\n        <label> {{server.url}}\n        </label>\n        <ion-icon name=\"location-outline\"></ion-icon>\n        <label>lat: {{server.latitude | number: '2.4'}}, lng:\n            {{server.longitude | number: '2.4'}}\n        </label>\n        <ion-icon name=\"server-outline\"></ion-icon>\n        <label> {{server._id}}\n        </label>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/suspect-details/suspect-details.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/suspect-details/suspect-details.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSuspectDetailsSuspectDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div title=\"Click to view details of {{suspect.fullName}}\" class='suspect-details' *ngIf=\"suspect != null\" routerLink=\"/authoritative/suspects/{{suspect._id}}\">\n    <div class='image-holder'>\n        <img class='image' *ngIf=\"suspect.pictures.length > 0\" src=\"{{suspect.pictures[0]}}\" />\n        <div class='no-image' *ngIf=\"suspect.pictures.length == 0\">No Image Available</div>\n    </div>\n    <div class='details-holder'>\n        <label>Full Name: </label>\n        <label class='fullName'>{{suspect.fullName}}</label>\n        <!--\n        <label>Gender: </label>\n        <label>{{suspect.gender}}</label>\n        <label>ID: </label>\n        <label>{{suspect._id}}</label>\n        -->\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/temp-dialog/temp-dialog.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/temp-dialog/temp-dialog.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTempDialogTempDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"dialog\">\n    <h1 class=\"title\">{{data.title}}</h1>\n    <p>{{data.description}}</p>\n    <div>\n        <button (click)=\"handleBtnYes()\" class=\"button green\">{{data.btnYes}}</button>\n        <button (click)=\"handleBtnNo()\" class=\"button red\">{{data.btnNo}}</button>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/test/test.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/test/test.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTestTestComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id='container'>\n    <div class='wrapper'>\n\n        <agm-map (mapClick)=\"choseThisLocation($event)\" class='location-on-map' [latitude]=\"comsats.latitude\" [longitude]=\"comsats.longitude\" [zoom]=\"16\">\n            <div *ngIf=\"filter.qrunits\">\n                <agm-marker class='qrunit-marker' *ngFor=\"let item of qrunits\" [longitude]=\"item.longitude\" [latitude]=\"item.latitude\" [iconUrl]=\"vehicle_icon\" [title]=\"'qrunit: ' + item._id\" [label]=\"item.name\">\n                </agm-marker>\n            </div>\n            <div *ngIf=\"filter.cameras\">\n                <agm-marker class='camera-marker' *ngFor=\"let item of cameras\" (markerClick)=\"viewLiveFeed(item)\" [longitude]=\"item.longitude\" [latitude]=\"item.latitude\" [iconUrl]=\"camera_icon\" [title]=\"'camera: ' + item._id\"></agm-marker>\n            </div>\n            <div *ngIf=\"filter.servers\">\n                <agm-marker class='server-marker' *ngFor=\"let item of servers\" [longitude]=\"item.longitude\" [latitude]=\"item.latitude\" [iconUrl]=\"server_icon\" [title]=\"'server: ' + item._id\" [label]=\"item.name\">\n                </agm-marker>\n            </div>\n            <div *ngIf=\"filter.alerts\">\n                <agm-marker class='alert-marker' *ngFor=\"let item of alerts\" (markerClick)=\"viewAlert(item)\" [longitude]=\"item.longitude\" [latitude]=\"item.latitude\" [iconUrl]=\"item.icon\" [title]=\"'alert: ' + item._id\" [label]=\"'Suspect:' + item.suspectId.fullName\"></agm-marker>\n            </div>\n            <!--\n            <div *ngIf=\"filter.paths\">\n                <agm-polyline *ngFor=\"let path of tpl\" [editable]=\"false\">\n                    <agm-polyline-point *ngFor=\"let p of path\" [latitude]=\"p[1]\" [longitude]=\"p[0]\">\n                    </agm-polyline-point>\n                </agm-polyline>\n            </div>\n            -->\n            <div *ngIf=\"filter.paths\">\n                <agm-polyline *ngFor=\"let suspectId of tpl_keys\" [editable]=\"false\">\n                    <agm-polyline-point *ngFor=\"let p of tpl[suspectId]\" [latitude]=\"p[1]\" [longitude]=\"p[0]\">\n                    </agm-polyline-point>\n                </agm-polyline>\n            </div>\n            <div *ngIf=\"showRealTimeOperations\">\n                <agm-polyline *ngFor=\"let alertId of onGoingOperationsPaths_keys\" [editable]=\"false\" [strokeColor]=\"'red'\">\n                    <agm-polyline-point *ngFor=\"let p of onGoingOperationsPaths[alertId]\" [latitude]=\"p[1]\" [longitude]=\"p[0]\">\n                    </agm-polyline-point>\n                </agm-polyline>\n            </div>\n        </agm-map>\n        <div>\n            <h2>Visible on map</h2>\n            <div class='filters-holder'>\n                <div *ngFor=\"let item of filter_keys\">\n                    <input type='checkbox' checked=\"Yes\" (change)=\"filter[item] = $event.target.checked\"> - {{item | titlecase}}\n                </div>\n                <div>\n                    <input type='checkbox' checked=\"Yes\" (change)=\"showRealTimeOperations = $event.target.checked\"> - Show ongoing operations\n                </div>\n            </div>\n            <h2>Search for locations</h2>\n            <div>\n                <p>Search for places</p>\n                <input type='search' [(ngModel)]=\"search.query\" (keyup.enter)=\"searchLocation(search.query)\" />\n                <button (click)=\"searchLocation(search.query)\">Search</button>\n                <ul class='search-suggestions-holder'>\n                    <li class='search-suggestion' *ngFor=\"let item of search.results\" (click)=\"moveMapOver(item.geometry)\">\n                        <div><b>{{item.formatted}}</b></div>\n                        <div>lat: {{item.geometry.lat}}, lng: {{item.geometry.lng}}</div>\n                    </li>\n                </ul>\n            </div>\n            <h2>Move map over:</h2>\n            <div>\n                <p>QRUnits: </p>\n                <select (change)=\"showQRUnit($event.target.value)\">\n                    <option value=\"\"></option>\n                    <option *ngFor=\"let item of qrunits\" value=\"{{item._id}}\">{{item.name}} - {{item._id}}</option>\n                </select>\n\n                <p>Cameras: </p>\n                <select (change)=\"showUnitOnMap($event.target.value, cameras)\">\n                    <option value=\"\"></option>\n                    <option *ngFor=\"let item of cameras\" value=\"{{item._id}}\">{{item._id}}</option>\n                </select>\n\n                <p>Servers: </p>\n                <select (change)=\"showUnitOnMap($event.target.value, servers)\">\n                    <option value=\"\"></option>\n                    <option *ngFor=\"let item of servers\" value=\"{{item._id}}\">{{item.name}} - {{item._id}}</option>\n                </select>\n\n                <p>Alerts: </p>\n                <select (change)=\"showUnitOnMap($event.target.value, alerts)\">\n                    <option value=\"\"></option>\n                    <option *ngFor=\"let item of alerts\" value=\"{{item._id}}\">{{item.suspectId.fullName}} - {{item.time}}\n                    </option>\n                </select>\n            </div>\n        </div>\n        <!-- \n        <h2>Firebase Items</h2>\n        <ul>\n            <li *ngFor=\"let item of items\">\n                {{ item | json }}\n            </li>\n        </ul>\n        <h2>QRUnits</h2>\n        <ul>\n            <li *ngFor=\"let item of qrunits\">\n                {{ item | json }}\n            </li>\n        </ul>\n        <h2>Cameras</h2>\n        <ul>\n            <li *ngFor=\"let item of cameras\">\n                {{ item | json }}\n            </li>\n        </ul>\n        <h2>Servers</h2>\n        <ul>\n            <li *ngFor=\"let item of servers\">\n                {{ item | json }}\n            </li>\n        </ul>\n        <h2>Alerts</h2>\n        <ul>\n            <li *ngFor=\"let item of alerts\">\n                {{ item | json }}\n            </li>\n        </ul>\n         -->\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tests-only/tests-only.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tests-only/tests-only.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTestsOnlyTestsOnlyComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id='container'>\n    <div class=\"wrapper\">\n        <button (click)=\"open()\">Click to open dialog</button>\n    </div>\n    <div class=\"wrapper\">\n        <h1>Testing map with navigation</h1>\n        {{location | json}}\n        <app-map-with-search (locationSelected)=\"location=$event\"></app-map-with-search>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/view-alert/view-alert.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/view-alert/view-alert.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewAlertViewAlertComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id='container'>\n    <div class='wrapper'>\n        <h1>Viewing Alert</h1>\n        <p>When was this alert generated: {{alert.time}}</p>\n        <p>ID: {{alert._id}}</p>\n        <div *ngIf=\"alert\" class='alert-holder'>\n            <div class='frame-holder'>\n                <h2>Captured Frame: </h2>\n                <img src=\"{{alert.frame_url}}\" alt=\"\">\n            </div>\n            <div class='suspect-holder'>\n                <h2>Suspect Information</h2>\n                <p>Click on suspect to view additional information</p>\n                <app-suspect-details [suspect]=\"alert.suspectId\"></app-suspect-details>\n\n\n            </div>\n        </div>\n        <div *ngIf=\"!alert\">\n            Loading alert\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/view-camera/view-camera.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/view-camera/view-camera.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewCameraViewCameraComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id='container'>\n    <div class='wrapper'>\n        <div *ngIf=\"camera == null\">\n            <h1>Please wait, loading camera details!</h1>\n        </div>\n        <div *ngIf=\"camera != null\">\n            <h1>Viewing live footage of camera: {{camera._id}}</h1>\n            <div class='frame'>\n\n                <div class='live-footage'>\n                    <div>\n                        Footage from:\n                        <select [(ngModel)]=\"videoOrigin\">\n                            <option value='camera'>Camera</option>\n                            <option value='server' *ngIf=\"server != null\">Server</option>\n                        </select>\n                    </div>\n                    <div *ngIf=\"videoOrigin == 'camera'\">\n                        <img src=\"{{camera.url}}\" (error)=\"validCameraVideoUrl=false\" *ngIf=\"validCameraVideoUrl\" />\n                        <div style='margin: 30px 0' class='error' *ngIf=\"!validCameraVideoUrl\">Streaming unavailable for this camera - check url and make sure camera is running</div>\n                    </div>\n\n                    <div *ngIf=\"videoOrigin == 'server'\">\n                        <img src=\"{{server.url + '/camera/' + camera._id}}\" (error)=\"validServerVideoUrl=false\" *ngIf=\"validServerVideoUrl\" />\n                        <div style='margin: 30px 0' class='error' *ngIf=\"!validServerVideoUrl\">Server streaming unavailable for this camera - check url and make sure server is running</div>\n                    </div>\n\n                    <app-adjust-preprocessing class='aapc' [cameraId]=\"cameraId\"></app-adjust-preprocessing>\n                </div>\n                <agm-map (mapClick)=\"choseThisLocation($event)\" class='location-on-map' [latitude]=\"camera.latitude\" [longitude]=\"camera.longitude\" [zoom]=\"16\">\n                    <agm-marker [longitude]=\"camera.longitude\" [latitude]=\"camera.latitude\"></agm-marker>\n                </agm-map>\n                <form class='camera-details'>\n                    <!-- can edit camera details here  -->\n                    <h1>Camera Details</h1>\n                    <div>\n                        <label>Url: </label>\n                        <input type='url' [(ngModel)]=\"camera.url\" name='url' />\n\n                        <label>Location </label>\n\n                        <!-- filler -->\n                        <label for=\"\"></label>\n\n                        <label>Longitude: </label>\n                        <input type='number' [(ngModel)]=\"camera.longitude\" name='longitude' />\n                        <label>Latitude: </label>\n                        <input type='number' [(ngModel)]=\"camera.latitude\" name='latitude' />\n\n\n                        <h3 style='grid-column: 1 / 3'>Assigned to Server:</h3>\n\n                        <select name=\"serverId\" style='grid-column: 1 / 3' [(ngModel)]=\"camera.serverId\">\n                            <option selected value=\"\">No server</option>\n                            <option *ngFor=\"let server of servers\" [value]=\"server._id\"\n                                [attr.selected]=\"server._id==camera.serverId ? true : null\">\n                                {{server._id }} > {{server.name}}\n                            </option>\n                        </select>\n\n\n                        <button (click)=\"deleteCamera()\" style=\"background-color:#e74c3c; color: white;\">Delete</button>\n\n                        <button (click)=\"updateCamera()\" style=\"background-color:#2980b9; color: white;\">Update</button>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/view-live-feed/view-live-feed.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/view-live-feed/view-live-feed.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewLiveFeedViewLiveFeedComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id='container'>\n    <div class='wrapper'>\n        <div *ngIf=\"camera == null\">\n            <h1>Please wait, loading camera details!</h1>\n        </div>\n        <div *ngIf=\"camera != null\">\n            <h1>Viewing live footage of camera: {{camera._id}}</h1>\n            <div class='frame'>\n\n                <div class='live-footage'>\n                    <div>\n                        Footage from:\n                        <select [(ngModel)]=\"videoOrigin\">\n                            <option value='camera'>Camera</option>\n                            <option value='server' *ngIf=\"server != null\">Server</option>\n                        </select>\n                    </div>\n                    <div *ngIf=\"videoOrigin == 'camera'\">\n                        <img src=\"{{camera.url}}\" (error)=\"validCameraVideoUrl=false\" *ngIf=\"validCameraVideoUrl\" />\n                        <div style='margin: 30px 0' class='error' *ngIf=\"!validCameraVideoUrl\">Streaming unavailable for this camera - check url and make sure camera is running</div>\n                    </div>\n\n                    <div *ngIf=\"videoOrigin == 'server'\">\n                        <img src=\"{{server.url + '/camera/' + camera._id}}\" (error)=\"validServerVideoUrl=false\" *ngIf=\"validServerVideoUrl\" />\n                        <div style='margin: 30px 0' class='error' *ngIf=\"!validServerVideoUrl\">Server streaming unavailable for this camera - check url and make sure server is running</div>\n                    </div>\n                </div>\n                <agm-map class='location-on-map' [latitude]=\"camera.latitude\" [longitude]=\"camera.longitude\" [zoom]=\"16\">\n                    <agm-marker [longitude]=\"camera.longitude\" [latitude]=\"camera.latitude\"></agm-marker>\n                </agm-map>\n                <div class='camera-details'>\n                    <!-- can edit camera details here  -->\n                    <h1>Camera Details</h1>\n                    <div>\n                        <label>Url: </label>\n                        <label>{{camera.url}}</label>\n\n                        <label>Location </label>\n\n                        <!-- filler -->\n                        <label></label>\n\n                        <label>Longitude: </label>\n                        <label>{{camera.longitude}}</label>\n                        <label>Latitude: </label>\n                        <label>{{camera.latitude}}</label>\n\n\n                        <h3 *ngIf=\"server != null\" style='grid-column: 1 / 3'>Assigned to Server: {{server._id }}</h3>\n                        <h3 *ngIf=\"server == null\" style='grid-column: 1 / 3'>Not assigned to any server</h3>\n\n\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/view-server/view-server.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/view-server/view-server.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewServerViewServerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id='container'>\n    <div class='wrapper'>\n        <h1>Viewing Server {{ '(' + server.name + ')'}}: {{server._id}}</h1>\n        <div class='frame'>\n\n            <form class='camera-details'>\n                <!-- can edit camera details here  -->\n                <h1>Server Details</h1>\n                <div>\n                    <label>Name: </label>\n                    <input type='text' [(ngModel)]=\"server.name\" name='name' />\n                    <label>Url: </label>\n                    <input type='url' [(ngModel)]=\"server.url\" name='url' />\n                    <label>Location </label>\n\n                    <!-- filler -->\n                    <label for=\"\"></label>\n\n                    <label>Longitude: </label>\n                    <input type='number' [(ngModel)]=\"server.longitude\" name='longitude' />\n                    <label>Latitude: </label>\n                    <input type='number' [(ngModel)]=\"server.latitude\" name='latitude' />\n\n\n                    <button (click)=\"deleteServer()\" style=\"background-color:#e74c3c; color: white;\">Delete</button>\n\n                    <button (click)=\"updateServer()\" style=\"background-color:#2980b9; color: white;\">Update</button>\n                </div>\n            </form>\n            <agm-map (mapClick)=\"choseThisLocation($event)\" class='location-on-map' [latitude]=\"server.latitude\" [longitude]=\"server.longitude\" [zoom]=\"16\">\n                <agm-marker [longitude]=\"server.longitude\" [latitude]=\"server.latitude\"></agm-marker>\n            </agm-map>\n            <div class='cameras-holder'>\n                <!-- place cameras here -->\n                <h2>Cameras connected to this server: {{server.cameras.length}}</h2>\n                <div class='cameras'>\n                    <app-camera-details *ngFor=\"let camera of server.cameras\" routerLink=\"/admin/cameras/{{camera._id}}\" [camera]=\"camera\"></app-camera-details>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/view-suspect/view-suspect.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/view-suspect/view-suspect.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewSuspectViewSuspectComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id='container'>\n    <div class='wrapper'>\n        <h1 style='text-transform: capitalize;'>Viewing Suspect: {{suspect.fullName}}</h1>\n        <p>Suspect ID: {{suspect._id}}</p>\n        <div class='frame'>\n            <div class='image-viewer'>\n                <div class='current-image'>\n                    <img src=\"{{suspect.pictures[0]}}\" style=\"max-height: 300px\" />\n                </div>\n                <hr>\n                <h3>All Pictures: </h3>\n                <p>Upload pictures:</p>\n                <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" multiple (onFileSelected)=\"uploadFiles()\" />\n                <br>\n                <div class='all-images'>\n                    <div *ngFor=\"let image of suspect.pictures\">\n                        <img src=\"{{image}}\" (click)=\"clickOnImage(image)\" />\n                    </div>\n                </div>\n            </div>\n            <form class='suspect-details'>\n                <!-- can edit camera details here  -->\n                <h1>Suspect Details</h1>\n                <div>\n\n                    <label>Full Name: </label>\n                    <input type='text' [(ngModel)]=\"suspect.fullName\" name='fullName' />\n\n\n                    <label>Gender: </label>\n                    <select [(ngModel)]=\"suspect.gender\" name=\"gender\">\n                        <option value=\"Male\">Male</option>\n                        <option value=\"Female\">Female</option>\n                    </select>\n\n                    <label>Tags (separated by commas): </label>\n                    <!-- <textarea [(ngModel)]=\"tags\" name='tags'></textarea> -->\n                    <app-chipper [items]=\"suspect.tags\" (change)=\"updateSuspectTags($event)\"></app-chipper>\n                    <button (click)=\"deleteSuspect()\" class='button red'>Delete</button>\n\n                    <button (click)=\"updateSuspect()\" class='button green'>Update</button>\n\n                </div>\n            </form>\n            <div class='map'>\n                <h1>Track history</h1>\n                <p>Alerts reported ({{alerts.length}})</p>\n                <p *ngIf=\"alerts.length == 0\">Map will only be shown if there are alerts for this suspect.</p>\n                <div *ngIf=\"alerts.length > 0\">\n                    <h3>Navigation</h3>\n                    <p>Navigate to this alert on the map: </p>\n                    <select (change)=\"showUnitOnMap($event.target.value, alerts)\">\n                        <option value=\"\"></option>\n                        <option *ngFor=\"let item of alerts\" value=\"{{item._id}}\">{{item.suspectId.fullName}} -\n                            {{item.time}}\n                        </option>\n                    </select>\n                    <br>\n                    <agm-map [latitude]=\"comsats.latitude\" [longitude]=\"comsats.longitude\" [zoom]=\"16\" [zoom]=\"16\">\n\n                        <agm-marker class='alert-marker' *ngFor=\"let item of alerts\" [longitude]=\"item.longitude\" [latitude]=\"item.latitude\" [iconUrl]=\"item.icon\" [title]=\"'alert: ' + item._id\" [label]=\"'Suspect:' + item.suspectId.fullName\" (markerClick)=\"viewAlert(item)\"></agm-marker>\n                        <agm-polyline *ngFor=\"let path of tpl\" [editable]=\"false\">\n                            <agm-polyline-point *ngFor=\"let p of path\" [latitude]=\"p[1]\" [longitude]=\"p[0]\">\n                            </agm-polyline-point>\n                        </agm-polyline>\n                    </agm-map>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/add-admin/add-admin.component.css":
  /*!***************************************************!*\
    !*** ./src/app/add-admin/add-admin.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAddAdminAddAdminComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1hZG1pbi9hZGQtYWRtaW4uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/add-admin/add-admin.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/add-admin/add-admin.component.ts ***!
    \**************************************************/

  /*! exports provided: AddAdminComponent */

  /***/
  function srcAppAddAdminAddAdminComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddAdminComponent", function () {
      return AddAdminComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ng2-file-upload */
    "./node_modules/ng2-file-upload/fesm2015/ng2-file-upload.js");
    /* harmony import */


    var _authoritative_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../authoritative.service */
    "./src/app/authoritative.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _toaster_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../toaster.service */
    "./src/app/toaster.service.ts");

    var AddAdminComponent =
    /*#__PURE__*/
    function () {
      function AddAdminComponent(authoritativeService, router, toaster) {
        var _this = this;

        _classCallCheck(this, AddAdminComponent);

        this.authoritativeService = authoritativeService;
        this.router = router;
        this.toaster = toaster;
        this.url = "https://darts-web-server.herokuapp.com/authoritative/admin/person/";
        this.priv = [{
          name: "manage servers",
          checked: false
        }, {
          name: "manage cameras",
          checked: false
        }];
        this.person = {
          fullName: "",
          gender: ""
        };
        this.name = "";
        this.admin = {
          email: "",
          personId: "",
          privileges: []
        }; //available people

        this.people = [];
        this.personSelected = {};

        this.personPictureSelected = function (file) {
          console.log("File selected", file);
        };

        this.addPerson = function () {
          console.log("works");

          if (_this.uploader.queue.length <= 0) {
            _this.toaster.err("Please provide a picture!");

            return;
          }

          _this.uploader.uploadAll();

          _this.toaster.info("Please wait!");
        };

        this.selectPerson = function (p, i) {
          // this.admin.personId = p._id
          // this.people.splice(i, 1)
          _this.personSelected = p;
          _this.admin.personId = p._id;
          console.log(i);
        };

        this.resetSelection = function () {
          _this.admin.personId = ""; // this.people.push(this.personSelected)
        };

        this.addAdmin = function () {
          _this.admin.privileges = [];

          for (var i = 0; i < _this.priv.length; i++) {
            if (_this.priv[i].checked) {
              _this.admin.privileges.push(_this.priv[i].name);
            }
          }

          _this.authoritativeService.addAdmin(_this.admin).subscribe(function (data) {
            if (data.err) {
              _this.toaster.err(data.err.message);
            } else if (data.succ) {
              _this.toaster.succ(data.succ.message);

              _this.router.navigate(["authoritative/home/"]);
            }
          }, function (err) {
            _this.toaster.err(err);
          }, function () {});
        };
      }

      _createClass(AddAdminComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__["FileUploader"]({
            url: "http://localhost:3000/authoritative/admin/person/",
            method: "POST",
            itemAlias: "picture"
          });
          this.uploader.response.subscribe(function (data) {
            data = JSON.parse(data);

            if (data.err) {
              _this2.toaster.err(data.err.message);
            } else if (data.succ || !data.err) {
              console.log(data);

              _this2.people.push(data.person);

              _this2.toaster.succ(data.succ.message);

              _this2.person.fullName = "";
              _this2.person.gender = "";

              _this2.selectPerson(data.person, 0);
            }
          }, function (err) {
            _this2.toaster.err(err);
          }, function () {});

          this.uploader.onBuildItemForm = function (fileItem, form) {
            form.append('person', JSON.stringify(_this2.person));
          }; //get all available people


          this.authoritativeService.getAvailablePeopleAdmin().subscribe(function (data) {
            if (data.err) {
              _this2.toaster.err(data.err.message);
            } else if (data.succ) {
              _this2.people = data.people;
            }
          }, function (err) {
            _this2.toaster.err(err);
          }, function () {});
        }
      }, {
        key: "personAdded",
        value: function personAdded(person) {
          this.people.push(person);
          this.selectPerson(person, 0);
        }
      }]);

      return AddAdminComponent;
    }();

    AddAdminComponent.ctorParameters = function () {
      return [{
        type: _authoritative_service__WEBPACK_IMPORTED_MODULE_3__["AuthoritativeService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _toaster_service__WEBPACK_IMPORTED_MODULE_5__["ToasterService"]
      }];
    };

    AddAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-admin',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-admin.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/add-admin/add-admin.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-admin.component.css */
      "./src/app/add-admin/add-admin.component.css")).default]
    })], AddAdminComponent);
    /***/
  },

  /***/
  "./src/app/add-authoritative/add-authoritative.component.css":
  /*!*******************************************************************!*\
    !*** ./src/app/add-authoritative/add-authoritative.component.css ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAddAuthoritativeAddAuthoritativeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1hdXRob3JpdGF0aXZlL2FkZC1hdXRob3JpdGF0aXZlLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/add-authoritative/add-authoritative.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/add-authoritative/add-authoritative.component.ts ***!
    \******************************************************************/

  /*! exports provided: AddAuthoritativeComponent */

  /***/
  function srcAppAddAuthoritativeAddAuthoritativeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddAuthoritativeComponent", function () {
      return AddAuthoritativeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ng2-file-upload */
    "./node_modules/ng2-file-upload/fesm2015/ng2-file-upload.js");
    /* harmony import */


    var _authoritative_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../authoritative.service */
    "./src/app/authoritative.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _toaster_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../toaster.service */
    "./src/app/toaster.service.ts");

    var AddAuthoritativeComponent =
    /*#__PURE__*/
    function () {
      function AddAuthoritativeComponent(authoritativeService, router, toaster) {
        var _this3 = this;

        _classCallCheck(this, AddAuthoritativeComponent);

        this.authoritativeService = authoritativeService;
        this.router = router;
        this.toaster = toaster;
        this.priv = [{
          name: "manage suspects",
          checked: false
        }, {
          name: "view map",
          checked: false
        }];
        this.person = {
          fullName: "",
          gender: ""
        };
        this.name = "";
        this.ap = {
          email: "",
          personId: "",
          privileges: []
        }; //available people

        this.people = [];
        this.personSelected = {};

        this.personPictureSelected = function (file) {
          console.log("File selected", file);
        };

        this.addPerson = function () {
          console.log("works");

          if (_this3.uploader.queue.length <= 0) {
            _this3.toaster.err("Please provide a picture!");

            return;
          }

          _this3.uploader.uploadAll();

          _this3.toaster.info("Please wait!");
        };

        this.selectPerson = function (p, i) {
          // this.admin.personId = p._id
          // this.people.splice(i, 1)
          _this3.personSelected = p;
          _this3.ap.personId = p._id;
          console.log(i);
        };

        this.resetSelection = function () {
          _this3.ap.personId = ""; // this.people.push(this.personSelected)
        };

        this.addAp = function () {
          _this3.ap.privileges = [];

          for (var i = 0; i < _this3.priv.length; i++) {
            if (_this3.priv[i].checked) {
              _this3.ap.privileges.push(_this3.priv[i].name);
            }
          }

          _this3.authoritativeService.addAp(_this3.ap).subscribe(function (data) {
            if (data.err) {
              _this3.toaster.err(data.err.message);
            } else if (data.succ) {
              _this3.toaster.succ(data.succ.message);

              _this3.router.navigate(["authoritative/home/"]);
            }
          }, function (err) {
            _this3.toaster.err(err);
          }, function () {});
        };
      }

      _createClass(AddAuthoritativeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__["FileUploader"]({
            url: "http://localhost:3000/authoritative/admin/person/",
            method: "POST",
            itemAlias: "picture"
          });
          this.uploader.response.subscribe(function (data) {
            data = JSON.parse(data);

            if (data.err) {
              _this4.toaster.err(data.err.message);
            } else if (data.succ || !data.err) {
              console.log(data);

              _this4.people.push(data.person);

              _this4.toaster.succ(data.succ.message);

              _this4.person.fullName = "";
              _this4.person.gender = "";

              _this4.selectPerson(data.person, 0);
            }
          }, function (err) {
            _this4.toaster.err(err);
          }, function () {});

          this.uploader.onBuildItemForm = function (fileItem, form) {
            form.append('person', JSON.stringify(_this4.person));
          }; //get all available people


          this.authoritativeService.getAvailablePeopleAuthoritative().subscribe(function (data) {
            if (data.err) {
              _this4.toaster.err(data.err.message);
            } else if (data.succ) {
              _this4.people = data.people;
            }
          }, function (err) {
            _this4.toaster.err(err);
          }, function () {});
        }
      }, {
        key: "personAdded",
        value: function personAdded(person) {
          this.people.push(person);
          this.selectPerson(person, 0);
        }
      }]);

      return AddAuthoritativeComponent;
    }();

    AddAuthoritativeComponent.ctorParameters = function () {
      return [{
        type: _authoritative_service__WEBPACK_IMPORTED_MODULE_3__["AuthoritativeService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _toaster_service__WEBPACK_IMPORTED_MODULE_5__["ToasterService"]
      }];
    };

    AddAuthoritativeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-authoritative',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-authoritative.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/add-authoritative/add-authoritative.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-authoritative.component.css */
      "./src/app/add-authoritative/add-authoritative.component.css")).default]
    })], AddAuthoritativeComponent);
    /***/
  },

  /***/
  "./src/app/add-camera/add-camera.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/add-camera/add-camera.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAddCameraAddCameraComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".grid-form {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    grid-gap: 30px;\r\n}\r\n\r\n.grid-form>.map {\r\n    height: 70vh;\r\n}\r\n\r\n.grid-form>form>div {\r\n    display: grid;\r\n    grid-template-columns: 1fr 2fr;\r\n    grid-gap: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLWNhbWVyYS9hZGQtY2FtZXJhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvYWRkLWNhbWVyYS9hZGQtY2FtZXJhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZC1mb3JtIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgICBncmlkLWdhcDogMzBweDtcclxufVxyXG5cclxuLmdyaWQtZm9ybT4ubWFwIHtcclxuICAgIGhlaWdodDogNzB2aDtcclxufVxyXG5cclxuLmdyaWQtZm9ybT5mb3JtPmRpdiB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xyXG4gICAgZ3JpZC1nYXA6IDEwcHg7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/add-camera/add-camera.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/add-camera/add-camera.component.ts ***!
    \****************************************************/

  /*! exports provided: AddCameraComponent */

  /***/
  function srcAppAddCameraAddCameraComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddCameraComponent", function () {
      return AddCameraComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../admin.service */
    "./src/app/admin.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _toaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../toaster.service */
    "./src/app/toaster.service.ts");

    var AddCameraComponent =
    /*#__PURE__*/
    function () {
      function AddCameraComponent(adminService, router, toaster) {
        var _this5 = this;

        _classCallCheck(this, AddCameraComponent);

        this.adminService = adminService;
        this.router = router;
        this.toaster = toaster;
        this.comsats = {
          zoom: 16,
          longitude: 73.156456,
          latitude: 33.651592
        };
        this.locationSelected = false;
        this.locationCoords = {
          longitude: 0,
          latitude: 0
        };

        this.addCamera = function () {
          if (_this5.url != "" && _this5.locationCoords.latitude != 0 && _this5.locationCoords.longitude != 0) {
            var camera = {
              url: _this5.url,
              longitude: _this5.locationCoords.longitude,
              latitude: _this5.locationCoords.latitude
            };

            _this5.adminService.addCamera(camera).subscribe(function (data) {
              if (data.err) {
                _this5.toaster.err(data.err.message);
              } else if (data.succ) {
                _this5.toaster.succ(data.succ.message);

                _this5.router.navigate(["admin/cameras/" + data.camera._id]);
              }
            }, function (err) {
              _this5.toaster.err(err);
            }, function () {});
          } else {
            _this5.toaster.err("Please fill in all the details");
          }
        };

        this.choseThisLocation = function (event) {
          console.log(event);
          _this5.locationSelected = true;
          _this5.locationCoords.latitude = event.coords.lat;
          _this5.locationCoords.longitude = event.coords.lng;
        };
      }

      _createClass(AddCameraComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AddCameraComponent;
    }();

    AddCameraComponent.ctorParameters = function () {
      return [{
        type: _admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"]
      }];
    };

    AddCameraComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-camera',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-camera.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/add-camera/add-camera.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-camera.component.css */
      "./src/app/add-camera/add-camera.component.css")).default]
    })], AddCameraComponent);
    /***/
  },

  /***/
  "./src/app/add-person/add-person.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/add-person/add-person.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAddPersonAddPersonComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".add-person {\r\n    width: 400px;\r\n    display: grid;\r\n    grid-template-columns: 1fr 2fr;\r\n}\r\n\r\n.add-person .image-holder .image {\r\n    max-width: 100px;\r\n}\r\n\r\n.add-person>.image-holder {\r\n    display: grid;\r\n    grid-gap: 10px;\r\n    grid-template-columns: 1fr;\r\n}\r\n\r\n.add-person>.data-holder {\r\n    display: grid;\r\n    grid-gap: 10px;\r\n    grid-template-columns: 1fr 1fr;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLXBlcnNvbi9hZGQtcGVyc29uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2QsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCw4QkFBOEI7QUFDbEMiLCJmaWxlIjoic3JjL2FwcC9hZGQtcGVyc29uL2FkZC1wZXJzb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGQtcGVyc29uIHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XHJcbn1cclxuXHJcbi5hZGQtcGVyc29uIC5pbWFnZS1ob2xkZXIgLmltYWdlIHtcclxuICAgIG1heC13aWR0aDogMTAwcHg7XHJcbn1cclxuXHJcbi5hZGQtcGVyc29uPi5pbWFnZS1ob2xkZXIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtZ2FwOiAxMHB4O1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbn1cclxuXHJcbi5hZGQtcGVyc29uPi5kYXRhLWhvbGRlciB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC1nYXA6IDEwcHg7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/add-person/add-person.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/add-person/add-person.component.ts ***!
    \****************************************************/

  /*! exports provided: AddPersonComponent */

  /***/
  function srcAppAddPersonAddPersonComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddPersonComponent", function () {
      return AddPersonComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ng2-file-upload */
    "./node_modules/ng2-file-upload/fesm2015/ng2-file-upload.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    var AddPersonComponent =
    /*#__PURE__*/
    function () {
      function AddPersonComponent(sanitizer) {
        var _this6 = this;

        _classCallCheck(this, AddPersonComponent);

        this.sanitizer = sanitizer;
        this.personAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.person = {
          fullName: null,
          gender: null,
          picture_url: null
        };

        this.addPerson = function () {
          var shouldAdd = true;
          Object.keys(_this6.person).forEach(function (k) {
            if (_this6.person[k] == null) {
              shouldAdd = false;
            }
          });

          if (shouldAdd) {
            _this6.toaster.info("Adding person");

            _this6.uploader.uploadAll();
          } else {
            _this6.toaster.err("Please enter all the details!");
          }
        };
      }

      _createClass(AddPersonComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__["FileUploader"]({
            url: this.url,
            method: "POST",
            itemAlias: "picture"
          });
          this.uploader.response.subscribe(function (data) {
            try {
              console.log(data);
              data = JSON.parse(data);

              if (data.err) {
                _this7.toaster.err(data.err.message);
              } else if (data.succ || !data.err) {
                _this7.toaster.succ(data.succ);

                var person = data.person;

                _this7.personAdded.emit(person);
              }
            } catch (err) {
              _this7.toaster.err(err);
            }
          }, function (err) {
            _this7.toaster.err(err);
          }, function () {});

          this.uploader.onBuildItemForm = function (fileItem, form) {
            form.append('person', JSON.stringify(_this7.person));
          };
        }
      }, {
        key: "personPictureSelected",
        value: function personPictureSelected(e) {
          console.log(e);

          if (e.length > 0) {
            this.person.picture_url = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(e[0]));
          } else {
            this.person.picture_url = null;
          }
        }
      }, {
        key: "pictureChanged",
        value: function pictureChanged(e) {
          console.log(e);
        }
      }]);

      return AddPersonComponent;
    }();

    AddPersonComponent.ctorParameters = function () {
      return [{
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], AddPersonComponent.prototype, "personAdded", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AddPersonComponent.prototype, "toaster", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AddPersonComponent.prototype, "url", void 0);
    AddPersonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-person',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-person.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/add-person/add-person.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-person.component.css */
      "./src/app/add-person/add-person.component.css")).default]
    })], AddPersonComponent);
    /***/
  },

  /***/
  "./src/app/add-qrunit/add-qrunit.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/add-qrunit/add-qrunit.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAddQrunitAddQrunitComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1xcnVuaXQvYWRkLXFydW5pdC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/add-qrunit/add-qrunit.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/add-qrunit/add-qrunit.component.ts ***!
    \****************************************************/

  /*! exports provided: AddQrunitComponent */

  /***/
  function srcAppAddQrunitAddQrunitComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddQrunitComponent", function () {
      return AddQrunitComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ng2-file-upload */
    "./node_modules/ng2-file-upload/fesm2015/ng2-file-upload.js");
    /* harmony import */


    var _admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../admin.service */
    "./src/app/admin.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _toaster_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../toaster.service */
    "./src/app/toaster.service.ts");

    var AddQrunitComponent =
    /*#__PURE__*/
    function () {
      function AddQrunitComponent(adminService, router, toaster) {
        var _this8 = this;

        _classCallCheck(this, AddQrunitComponent);

        this.adminService = adminService;
        this.router = router;
        this.toaster = toaster;
        this.name = "";
        this.url = "https://darts-web-server.herokuapp.com/admin/qrunit/person/";
        this.person = {
          fullName: "",
          gender: ""
        };
        this.people = [];
        this.col = ["ID", "Full Name", "Gender", "Picture", "Actions"];
        this.members = [];
        this.qrunit = {
          name: "",
          members: []
        };

        this.removeMember = function (i, member) {
          var m = _this8.members.splice(i, 1);

          _this8.people.push(m[0]);
        };

        this.personPictureSelected = function (file) {
          console.log("File selected", file);
        };

        this.addPerson = function () {
          console.log("works");

          if (_this8.uploader.queue.length <= 0) {
            _this8.toaster.err("Please provide a picture!");

            return;
          }

          _this8.uploader.uploadAll();

          _this8.toaster.info("Please wait!");
        };

        this.addAsMember = function (p, i) {
          _this8.members.push(p);

          _this8.people.splice(i, 1);

          console.log(i);
        };

        this.addQRUnit = function () {
          _this8.qrunit.members = [];

          for (var i = 0; i < _this8.members.length; i++) {
            // this.qrunit.members.push({
            //   personId: this.members[i]._id
            // })
            _this8.qrunit.members.push(_this8.members[i]._id);
          }

          _this8.adminService.addQRUnit(_this8.qrunit).subscribe(function (data) {
            if (data.err) {
              _this8.toaster.err(data.err.message);
            } else if (data.succ) {
              _this8.toaster.succ(data.succ.message);

              _this8.router.navigate(["admin/qrunit/authenticate/" + data.auth_id]);
            }
          }, function (err) {
            _this8.toaster.err(err);
          }, function () {});
        };
      }

      _createClass(AddQrunitComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__["FileUploader"]({
            url: "http://localhost:3000/admin/qrunit/person/",
            method: "POST",
            itemAlias: "picture"
          });
          this.uploader.response.subscribe(function (data) {
            data = JSON.parse(data);

            if (data.err) {
              _this9.toaster.err(data.err.message);
            } else if (data.succ || !data.err) {
              console.log(data);

              _this9.people.push(data.person);

              _this9.toaster.succ(data.succ.message);

              _this9.person.fullName = "";
              _this9.person.gender = "";
            }
          }, function (err) {
            _this9.toaster.err(err);
          }, function () {});

          this.uploader.onBuildItemForm = function (fileItem, form) {
            form.append('person', JSON.stringify(_this9.person));
          }; //get all available people


          this.adminService.getAvailablePeople().subscribe(function (data) {
            if (data.err) {
              _this9.toaster.err(data.err.message);
            } else if (data.succ) {
              _this9.people = data.people;
            }
          }, function (err) {
            _this9.toaster.err(err);
          }, function () {});
        }
      }]);

      return AddQrunitComponent;
    }();

    AddQrunitComponent.ctorParameters = function () {
      return [{
        type: _admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _toaster_service__WEBPACK_IMPORTED_MODULE_5__["ToasterService"]
      }];
    };

    AddQrunitComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-qrunit',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-qrunit.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/add-qrunit/add-qrunit.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-qrunit.component.css */
      "./src/app/add-qrunit/add-qrunit.component.css")).default]
    })], AddQrunitComponent);
    /***/
  },

  /***/
  "./src/app/add-server/add-server.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/add-server/add-server.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAddServerAddServerComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".grid-form {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    grid-gap: 30px;\r\n}\r\n\r\n.grid-form>.map {\r\n    height: 70vh;\r\n}\r\n\r\n.grid-form>form>div {\r\n    display: grid;\r\n    grid-template-columns: 1fr 2fr;\r\n    grid-gap: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLXNlcnZlci9hZGQtc2VydmVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvYWRkLXNlcnZlci9hZGQtc2VydmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZC1mb3JtIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgICBncmlkLWdhcDogMzBweDtcclxufVxyXG5cclxuLmdyaWQtZm9ybT4ubWFwIHtcclxuICAgIGhlaWdodDogNzB2aDtcclxufVxyXG5cclxuLmdyaWQtZm9ybT5mb3JtPmRpdiB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xyXG4gICAgZ3JpZC1nYXA6IDEwcHg7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/add-server/add-server.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/add-server/add-server.component.ts ***!
    \****************************************************/

  /*! exports provided: AddServerComponent */

  /***/
  function srcAppAddServerAddServerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddServerComponent", function () {
      return AddServerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../admin.service */
    "./src/app/admin.service.ts");
    /* harmony import */


    var _toaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../toaster.service */
    "./src/app/toaster.service.ts");

    var AddServerComponent =
    /*#__PURE__*/
    function () {
      function AddServerComponent(adminService, router, toaster) {
        var _this10 = this;

        _classCallCheck(this, AddServerComponent);

        this.adminService = adminService;
        this.router = router;
        this.toaster = toaster;
        this.comsats = {
          zoom: 16,
          longitude: 73.156456,
          latitude: 33.651592
        };
        this.locationSelected = false;
        this.locationCoords = {
          longitude: 0,
          latitude: 0
        };

        this.choseThisLocation = function (event) {
          console.log(event);
          _this10.locationSelected = true;
          _this10.locationCoords.latitude = event.coords.lat;
          _this10.locationCoords.longitude = event.coords.lng;
        };

        this.addServer = function () {
          if (_this10.url != "" && _this10.name != "" && _this10.locationCoords.latitude != 0 && _this10.locationCoords.longitude != 0) {
            var server = {
              url: _this10.url,
              name: _this10.name,
              longitude: _this10.locationCoords.longitude,
              latitude: _this10.locationCoords.latitude
            };

            _this10.adminService.addServer(server).subscribe(function (data) {
              if (data.err) {
                _this10.toaster.err(data.err.message);
              } else if (data.succ) {
                _this10.toaster.succ(data.succ.message);

                _this10.router.navigate(["admin/servers/" + data.server._id]);
              }
            }, function (err) {
              _this10.toaster.err(err);
            }, function () {});
          } else {
            _this10.toaster.err("Please fill in all the details");
          }
        };
      }

      _createClass(AddServerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AddServerComponent;
    }();

    AddServerComponent.ctorParameters = function () {
      return [{
        type: _admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"]
      }];
    };

    AddServerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-server',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-server.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/add-server/add-server.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-server.component.css */
      "./src/app/add-server/add-server.component.css")).default]
    })], AddServerComponent);
    /***/
  },

  /***/
  "./src/app/add-suspect/add-suspect.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/add-suspect/add-suspect.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAddSuspectAddSuspectComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "form {\r\n    display: grid;\r\n    grid-template-columns: 1fr 2fr;\r\n    grid-gap: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLXN1c3BlY3QvYWRkLXN1c3BlY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2FkZC1zdXNwZWN0L2FkZC1zdXNwZWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3JtIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XHJcbiAgICBncmlkLWdhcDogMTBweDtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/add-suspect/add-suspect.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/add-suspect/add-suspect.component.ts ***!
    \******************************************************/

  /*! exports provided: AddSuspectComponent */

  /***/
  function srcAppAddSuspectAddSuspectComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddSuspectComponent", function () {
      return AddSuspectComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _authoritative_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../authoritative.service */
    "./src/app/authoritative.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _toaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../toaster.service */
    "./src/app/toaster.service.ts");

    var AddSuspectComponent =
    /*#__PURE__*/
    function () {
      function AddSuspectComponent(authoritativeService, router, toaster) {
        var _this11 = this;

        _classCallCheck(this, AddSuspectComponent);

        this.authoritativeService = authoritativeService;
        this.router = router;
        this.toaster = toaster;
        this.suspect = {
          fullName: "",
          gender: "",
          tags: ""
        };

        this.addSuspect = function () {
          _this11.suspect.tags = _this11.suspect.tags.split(",");

          _this11.authoritativeService.addSuspect(_this11.suspect).subscribe(function (data) {
            if (data.err) {
              _this11.toaster.err(data.err.message);
            } else if (data.succ) {
              _this11.toaster.succ(data.succ.message);

              _this11.router.navigate(["authoritative/suspects/" + data.suspect._id]);
            }
          }, function (err) {
            _this11.toaster.err(err);
          }, function () {});
        };
      }

      _createClass(AddSuspectComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AddSuspectComponent;
    }();

    AddSuspectComponent.ctorParameters = function () {
      return [{
        type: _authoritative_service__WEBPACK_IMPORTED_MODULE_2__["AuthoritativeService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"]
      }];
    };

    AddSuspectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-suspect',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-suspect.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/add-suspect/add-suspect.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-suspect.component.css */
      "./src/app/add-suspect/add-suspect.component.css")).default]
    })], AddSuspectComponent);
    /***/
  },

  /***/
  "./src/app/adjust-preprocessing/adjust-preprocessing.component.css":
  /*!*************************************************************************!*\
    !*** ./src/app/adjust-preprocessing/adjust-preprocessing.component.css ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdjustPreprocessingAdjustPreprocessingComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".adjust-preprocessing>div {\r\n    display: grid;\r\n    grid-gap: 10px;\r\n    grid-template-columns: 2fr 4fr 1fr;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRqdXN0LXByZXByb2Nlc3NpbmcvYWRqdXN0LXByZXByb2Nlc3NpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2Qsa0NBQWtDO0FBQ3RDIiwiZmlsZSI6InNyYy9hcHAvYWRqdXN0LXByZXByb2Nlc3NpbmcvYWRqdXN0LXByZXByb2Nlc3NpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGp1c3QtcHJlcHJvY2Vzc2luZz5kaXYge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtZ2FwOiAxMHB4O1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgNGZyIDFmcjtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/adjust-preprocessing/adjust-preprocessing.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/adjust-preprocessing/adjust-preprocessing.component.ts ***!
    \************************************************************************/

  /*! exports provided: AdjustPreprocessingComponent */

  /***/
  function srcAppAdjustPreprocessingAdjustPreprocessingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdjustPreprocessingComponent", function () {
      return AdjustPreprocessingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../admin.service */
    "./src/app/admin.service.ts");
    /* harmony import */


    var _toaster_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../toaster.service */
    "./src/app/toaster.service.ts");

    var AdjustPreprocessingComponent =
    /*#__PURE__*/
    function () {
      function AdjustPreprocessingComponent(adminService, toaster) {
        var _this12 = this;

        _classCallCheck(this, AdjustPreprocessingComponent);

        this.adminService = adminService;
        this.toaster = toaster;
        this.brightness = 0.5;
        this.sharpness = 1;
        this.denoise = 0;

        this.updateCameraPreprocessingValues = function () {
          _this12.toaster.info("Updating Camera's Preprocessing values");

          var pre = {
            brightness: _this12.brightness,
            sharpness: _this12.sharpness,
            denoise: _this12.denoise
          };

          _this12.adminService.updateCameraPreprocessingValues(_this12.cameraId, pre).subscribe(function (data) {
            if (data.err) {
              _this12.toaster.err(data.err);
            } else {
              if (data.pre.brightness) _this12.brightness = data.pre.brightness;
              if (data.pre.sharpness) _this12.sharpness = data.pre.sharpness;
              if (data.pre.denoise) _this12.denoise = data.pre.denoise;

              _this12.toaster.succ("Done updating the preprocessing values!");
            }
          }, function (error) {
            _this12.toaster.err(error);
          });
        };
      }

      _createClass(AdjustPreprocessingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadCameraPreprocessingValues();
        }
      }, {
        key: "loadCameraPreprocessingValues",
        value: function loadCameraPreprocessingValues() {
          var _this13 = this;

          this.toaster.info("Loading Camera's Preprocessing values");
          this.adminService.getCameraPreprocessingValues(this.cameraId).subscribe(function (data) {
            if (data.err) {
              _this13.toaster.err(data);
            } else {
              if (data.pre.brightness) _this13.brightness = data.pre.brightness;
              if (data.pre.sharpness) _this13.sharpness = data.pre.sharpness;
              if (data.pre.denoise) _this13.denoise = data.pre.denoise;

              _this13.toaster.succ("Done loading the preprocessing values!");
            }
          }, function (error) {
            _this13.toaster.err(error);
          });
        }
      }]);

      return AdjustPreprocessingComponent;
    }();

    AdjustPreprocessingComponent.ctorParameters = function () {
      return [{
        type: _admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]
      }, {
        type: _toaster_service__WEBPACK_IMPORTED_MODULE_3__["ToasterService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AdjustPreprocessingComponent.prototype, "cameraId", void 0);
    AdjustPreprocessingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-adjust-preprocessing',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./adjust-preprocessing.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/adjust-preprocessing/adjust-preprocessing.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./adjust-preprocessing.component.css */
      "./src/app/adjust-preprocessing/adjust-preprocessing.component.css")).default]
    })], AdjustPreprocessingComponent);
    /***/
  },

  /***/
  "./src/app/admin-home/admin-home.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/admin-home/admin-home.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminHomeAdminHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".bar {\r\n    display: -webkit-box;\r\n    display: flex;\r\n}\r\n\r\n.bar h1 {}\r\n\r\n.bar>.buttons {\r\n    -webkit-box-flex: 1;\r\n            flex: 1;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: end;\r\n            justify-content: flex-end;\r\n    margin: 0 0 0 10px;\r\n    padding: 20px 0 10px 0;\r\n}\r\n\r\n.bar>.buttons>button {\r\n    border-radius: 5px;\r\n    background-color: #2ecc71;\r\n    color: white;\r\n    margin: 0px 5px;\r\n}\r\n\r\n.bar>.buttons>button:hover {\r\n    background-color: #27ae60;\r\n}\r\n\r\n.cameras {\r\n    /*     \r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n    grid-gap: 30px;\r\n    ; */\r\n}\r\n\r\n.cameras-holder {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.camera {\r\n    cursor: pointer;\r\n    padding: 5px;\r\n    box-shadow: 0 0 10px #aaa;\r\n    ;\r\n    border-radius: 10px;\r\n}\r\n\r\n.camera .location {\r\n    font-size: 10px;\r\n}\r\n\r\n.servers {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n    grid-gap: 30px;\r\n    ;\r\n}\r\n\r\n.server {\r\n    cursor: pointer;\r\n    padding: 5px;\r\n    box-shadow: 0 0 10px #aaa;\r\n    ;\r\n    border-radius: 10px;\r\n}\r\n\r\n.server .location {\r\n    font-size: 10px;\r\n}\r\n\r\n.search {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: row;\r\n    -webkit-box-pack: end;\r\n            justify-content: flex-end;\r\n}\r\n\r\n.search * {\r\n    display: block;\r\n    height: 30px;\r\n    line-height: 30px;\r\n    margin: 0;\r\n    margin-left: 10px;\r\n}\r\n\r\n.search>.search-bar {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    border-radius: 50px;\r\n    border: 1px solid #888;\r\n    overflow: hidden;\r\n}\r\n\r\n.search>.search-bar * {\r\n    display: block;\r\n    background: transparent;\r\n    border: none;\r\n    padding: 0 5px;\r\n    margin: 0;\r\n    outline: none;\r\n}\r\n\r\n.search>.search-bar button:hover {\r\n    background: rgb(199, 65, 65);\r\n    color: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4taG9tZS9hZG1pbi1ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBYTtJQUFiLGFBQWE7QUFDakI7O0FBRUEsU0FBUzs7QUFFVDtJQUNJLG1CQUFPO1lBQVAsT0FBTztJQUNQLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHFCQUF5QjtZQUF6Qix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSTs7OztPQUlHO0FBQ1A7O0FBRUE7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWix5QkFBeUI7O0lBRXpCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLGNBQWM7O0FBRWxCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWix5QkFBeUI7O0lBRXpCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYiw4QkFBbUI7SUFBbkIsNkJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQixxQkFBeUI7WUFBekIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsU0FBUztJQUNULGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osY0FBYztJQUNkLFNBQVM7SUFDVCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi1ob21lL2FkbWluLWhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmJhciBoMSB7fVxyXG5cclxuLmJhcj4uYnV0dG9ucyB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBtYXJnaW46IDAgMCAwIDEwcHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDAgMTBweCAwO1xyXG59XHJcblxyXG4uYmFyPi5idXR0b25zPmJ1dHRvbiB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmVjYzcxO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luOiAwcHggNXB4O1xyXG59XHJcblxyXG4uYmFyPi5idXR0b25zPmJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjdhZTYwO1xyXG59XHJcblxyXG4uY2FtZXJhcyB7XHJcbiAgICAvKiAgICAgXHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcclxuICAgIGdyaWQtZ2FwOiAzMHB4O1xyXG4gICAgOyAqL1xyXG59XHJcblxyXG4uY2FtZXJhcy1ob2xkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLmNhbWVyYSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAjYWFhO1xyXG4gICAgO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLmNhbWVyYSAubG9jYXRpb24ge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcblxyXG4uc2VydmVycyB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcclxuICAgIGdyaWQtZ2FwOiAzMHB4O1xyXG4gICAgO1xyXG59XHJcblxyXG4uc2VydmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4ICNhYWE7XHJcbiAgICA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uc2VydmVyIC5sb2NhdGlvbiB7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuXHJcbi5zZWFyY2gge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4uc2VhcmNoICoge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4uc2VhcmNoPi5zZWFyY2gtYmFyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5zZWFyY2g+LnNlYXJjaC1iYXIgKiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogMCA1cHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uc2VhcmNoPi5zZWFyY2gtYmFyIGJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTk5LCA2NSwgNjUpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/admin-home/admin-home.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/admin-home/admin-home.component.ts ***!
    \****************************************************/

  /*! exports provided: AdminHomeComponent */

  /***/
  function srcAppAdminHomeAdminHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminHomeComponent", function () {
      return AdminHomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../admin.service */
    "./src/app/admin.service.ts");
    /* harmony import */


    var _toaster_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../toaster.service */
    "./src/app/toaster.service.ts");

    var AdminHomeComponent =
    /*#__PURE__*/
    function () {
      function AdminHomeComponent(adminService, toaster) {
        var _this14 = this;

        _classCallCheck(this, AdminHomeComponent);

        this.adminService = adminService;
        this.toaster = toaster; //implementing searching of cameras at location

        this.search = {
          cameras: {
            query: "",
            cameras: [],
            location: null
          }
        };

        this.clearCamerasSearchQuery = function () {
          _this14.search.cameras.query = '';
          _this14.search.cameras.location = null;

          _this14.getCameras();
        };

        this.searchForCamerasAtLocation = function () {
          _this14.toaster.info("Looking for cameras, please wait!");

          var query = _this14.search.cameras.query;

          if (query == "") {
            _this14.getCameras();

            return;
          }

          _this14.adminService.searchCamerasAtLocation(query).subscribe(function (data) {
            if (data.err) {
              _this14.toaster.err(data.err.message);
            } else if (data.succ || !data.err) {
              _this14.toaster.succ(data.succ);

              _this14.search.cameras.cameras = data.cameras;
              _this14.search.cameras.location = data.location;
            }
          }, function (err) {
            _this14.toaster.err(err);
          }, function () {});
        };

        this.servers = [];
        this.cameras = [];

        this.getCameras = function () {
          _this14.adminService.getCameras().subscribe(function (data) {
            if (data.err) {
              _this14.toaster.err(data.err.message);
            } else if (data.succ || !data.err) {
              console.log(data);
              _this14.cameras = data.cameras;
            }
          }, function (err) {
            _this14.toaster.err(err);
          }, function () {});
        };
      }

      _createClass(AdminHomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this15 = this;

          this.getCameras();
          this.adminService.getServers().subscribe(function (data) {
            if (data.err) {
              _this15.toaster.err(data.err.message);
            } else if (data.succ || !data.err) {
              console.log(data);
              _this15.servers = data.servers;
            }
          }, function (err) {
            _this15.toaster.err(err);
          }, function () {});
        }
      }]);

      return AdminHomeComponent;
    }();

    AdminHomeComponent.ctorParameters = function () {
      return [{
        type: _admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]
      }, {
        type: _toaster_service__WEBPACK_IMPORTED_MODULE_3__["ToasterService"]
      }];
    };

    AdminHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-home/admin-home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-home.component.css */
      "./src/app/admin-home/admin-home.component.css")).default]
    })], AdminHomeComponent);
    /***/
  },

  /***/
  "./src/app/admin-login/admin-login.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/admin-login/admin-login.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminLoginAdminLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "form > * {\r\n    display: block;\r\n}\r\nform input[type=\"text\"],\r\nform input[type=\"email\"],\r\nform input[type='password'],\r\nform button {\r\n    padding: 5px 10px;\r\n    margin: 10px 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tbG9naW4vYWRtaW4tbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTs7OztJQUlJLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4tbG9naW4vYWRtaW4tbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm0gPiAqIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbmZvcm0gaW5wdXRbdHlwZT1cInRleHRcIl0sXHJcbmZvcm0gaW5wdXRbdHlwZT1cImVtYWlsXCJdLFxyXG5mb3JtIGlucHV0W3R5cGU9J3Bhc3N3b3JkJ10sXHJcbmZvcm0gYnV0dG9uIHtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/admin-login/admin-login.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/admin-login/admin-login.component.ts ***!
    \******************************************************/

  /*! exports provided: AdminLoginComponent */

  /***/
  function srcAppAdminLoginAdminLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminLoginComponent", function () {
      return AdminLoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../admin.service */
    "./src/app/admin.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _toaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../toaster.service */
    "./src/app/toaster.service.ts");

    var AdminLoginComponent =
    /*#__PURE__*/
    function () {
      function AdminLoginComponent(adminService, router, toaster) {
        _classCallCheck(this, AdminLoginComponent);

        this.adminService = adminService;
        this.router = router;
        this.toaster = toaster;
      }

      _createClass(AdminLoginComponent, [{
        key: "login",
        value: function login() {
          var _this16 = this;

          this.toaster.info("Please wait! Working on it");
          this.adminService.login(this.email, this.password).subscribe(function (data) {
            if (data.err) {
              _this16.toaster.err(data.err.message);
            } else if (data.succ) {
              _this16.toaster.succ(data.succ.message);

              _this16.router.navigate(["admin/home"]);
            }
          }, function (err) {
            _this16.toaster.err(err);
          }, function () {});
        }
      }]);

      return AdminLoginComponent;
    }();

    AdminLoginComponent.ctorParameters = function () {
      return [{
        type: _admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"]
      }];
    };

    AdminLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-login/admin-login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-login.component.css */
      "./src/app/admin-login/admin-login.component.css")).default]
    })], AdminLoginComponent);
    /***/
  },

  /***/
  "./src/app/admin.service.ts":
  /*!**********************************!*\
    !*** ./src/app/admin.service.ts ***!
    \**********************************/

  /*! exports provided: AdminService */

  /***/
  function srcAppAdminServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminService", function () {
      return AdminService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
    }; // const url: string = "http://localhost:3000/"

    var url = "https://darts-web-server.herokuapp.com/";

    var AdminService =
    /*#__PURE__*/
    function () {
      function AdminService(http) {
        _classCallCheck(this, AdminService);

        this.http = http;
      }

      _createClass(AdminService, [{
        key: "login",
        value: function login(email, password) {
          return this.http.post(url + "admin/login", {
            user: {
              email: email,
              password: password
            }
          }, httpOptions);
        }
      }, {
        key: "logout",
        value: function logout() {
          return this.http.post(url + "admin/logout", {}, httpOptions);
        }
      }, {
        key: "isLoggedIn",
        value: function isLoggedIn() {
          return this.http.get(url + "admin/isLoggedIn", httpOptions);
        }
      }, {
        key: "addCamera",
        value: function addCamera(camera) {
          return this.http.post(url + "admin/cameras/", {
            camera: camera
          }, httpOptions);
        }
      }, {
        key: "getCameras",
        value: function getCameras() {
          return this.http.get(url + "admin/cameras/", httpOptions);
        }
      }, {
        key: "getCamera",
        value: function getCamera(cameraId) {
          return this.http.get(url + "admin/cameras/" + cameraId, httpOptions);
        }
      }, {
        key: "searchCamerasAtLocation",
        value: function searchCamerasAtLocation(q) {
          return this.http.get(url + "admin/cameras/search/" + q, httpOptions);
        }
      }, {
        key: "updateCamera",
        value: function updateCamera(cameraId, camera) {
          return this.http.put(url + "admin/cameras/" + cameraId, {
            camera: camera
          }, httpOptions);
        }
      }, {
        key: "deleteCamera",
        value: function deleteCamera(cameraId) {
          return this.http.delete(url + "admin/cameras/" + cameraId, httpOptions);
        }
      }, {
        key: "autoAssign",
        value: function autoAssign() {
          return this.http.post(url + "admin/cameras/autoassign/", {}, httpOptions);
        }
      }, {
        key: "addServer",
        value: function addServer(server) {
          return this.http.post(url + "admin/servers/", {
            server: server
          }, httpOptions);
        }
      }, {
        key: "getServers",
        value: function getServers() {
          return this.http.get(url + "admin/servers/", httpOptions);
        }
      }, {
        key: "getServer",
        value: function getServer(serverId) {
          return this.http.get(url + "admin/servers/" + serverId, httpOptions);
        }
      }, {
        key: "updateServer",
        value: function updateServer(serverId, server) {
          return this.http.put(url + "admin/servers/" + serverId, {
            server: server
          }, httpOptions);
        }
      }, {
        key: "deleteServer",
        value: function deleteServer(serverId) {
          return this.http.delete(url + "admin/servers/" + serverId, httpOptions);
        }
      }, {
        key: "getAvailablePeople",
        value: function getAvailablePeople() {
          return this.http.get(url + "admin/qrunit/person", httpOptions);
        }
      }, {
        key: "addQRUnit",
        value: function addQRUnit(qrunit) {
          return this.http.post(url + "admin/qrunit/", {
            qrunit: qrunit
          }, httpOptions);
        }
      }, {
        key: "getCameraPreprocessingValues",
        value: function getCameraPreprocessingValues(cameraId) {
          return this.http.get(url + "admin/cameras/" + cameraId + "/preprocessing", httpOptions);
        }
      }, {
        key: "updateCameraPreprocessingValues",
        value: function updateCameraPreprocessingValues(cameraId, pre) {
          return this.http.put(url + "admin/cameras/" + cameraId + "/preprocessing", {
            pre: pre
          }, httpOptions);
        }
      }]);

      return AdminService;
    }();

    AdminService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    AdminService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AdminService);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./admin-home/admin-home.component */
    "./src/app/admin-home/admin-home.component.ts");
    /* harmony import */


    var _main_home_main_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./main-home/main-home.component */
    "./src/app/main-home/main-home.component.ts");
    /* harmony import */


    var _admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./admin-login/admin-login.component */
    "./src/app/admin-login/admin-login.component.ts");
    /* harmony import */


    var _add_camera_add_camera_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./add-camera/add-camera.component */
    "./src/app/add-camera/add-camera.component.ts");
    /* harmony import */


    var _view_camera_view_camera_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./view-camera/view-camera.component */
    "./src/app/view-camera/view-camera.component.ts");
    /* harmony import */


    var _add_server_add_server_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./add-server/add-server.component */
    "./src/app/add-server/add-server.component.ts");
    /* harmony import */


    var _view_server_view_server_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./view-server/view-server.component */
    "./src/app/view-server/view-server.component.ts");
    /* harmony import */


    var _authoritative_login_authoritative_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./authoritative-login/authoritative-login.component */
    "./src/app/authoritative-login/authoritative-login.component.ts");
    /* harmony import */


    var _authoritative_home_authoritative_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./authoritative-home/authoritative-home.component */
    "./src/app/authoritative-home/authoritative-home.component.ts");
    /* harmony import */


    var _add_suspect_add_suspect_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./add-suspect/add-suspect.component */
    "./src/app/add-suspect/add-suspect.component.ts");
    /* harmony import */


    var _view_suspect_view_suspect_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./view-suspect/view-suspect.component */
    "./src/app/view-suspect/view-suspect.component.ts");
    /* harmony import */


    var _auto_assign_camera_auto_assign_camera_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./auto-assign-camera/auto-assign-camera.component */
    "./src/app/auto-assign-camera/auto-assign-camera.component.ts");
    /* harmony import */


    var _add_qrunit_add_qrunit_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./add-qrunit/add-qrunit.component */
    "./src/app/add-qrunit/add-qrunit.component.ts");
    /* harmony import */


    var _qrunit_login_with_qrcode_qrunit_login_with_qrcode_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./qrunit-login-with-qrcode/qrunit-login-with-qrcode.component */
    "./src/app/qrunit-login-with-qrcode/qrunit-login-with-qrcode.component.ts");
    /* harmony import */


    var _add_admin_add_admin_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./add-admin/add-admin.component */
    "./src/app/add-admin/add-admin.component.ts");
    /* harmony import */


    var _add_authoritative_add_authoritative_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./add-authoritative/add-authoritative.component */
    "./src/app/add-authoritative/add-authoritative.component.ts");
    /* harmony import */


    var _test_test_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./test/test.component */
    "./src/app/test/test.component.ts");
    /* harmony import */


    var _view_live_feed_view_live_feed_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./view-live-feed/view-live-feed.component */
    "./src/app/view-live-feed/view-live-feed.component.ts");
    /* harmony import */


    var _view_alert_view_alert_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./view-alert/view-alert.component */
    "./src/app/view-alert/view-alert.component.ts");
    /* harmony import */


    var _tests_only_tests_only_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./tests-only/tests-only.component */
    "./src/app/tests-only/tests-only.component.ts");

    var routes = [{
      path: "",
      component: _main_home_main_home_component__WEBPACK_IMPORTED_MODULE_4__["MainHomeComponent"]
    }, {
      path: "admin/home",
      component: _admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_3__["AdminHomeComponent"]
    }, {
      path: "admin/login",
      component: _admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_5__["AdminLoginComponent"]
    }, {
      path: "admin/cameras/add",
      component: _add_camera_add_camera_component__WEBPACK_IMPORTED_MODULE_6__["AddCameraComponent"]
    }, {
      path: "admin/cameras/autoassign",
      component: _auto_assign_camera_auto_assign_camera_component__WEBPACK_IMPORTED_MODULE_14__["AutoAssignCameraComponent"]
    }, {
      path: "admin/cameras/:cameraId",
      component: _view_camera_view_camera_component__WEBPACK_IMPORTED_MODULE_7__["ViewCameraComponent"]
    }, {
      path: "admin/servers/add",
      component: _add_server_add_server_component__WEBPACK_IMPORTED_MODULE_8__["AddServerComponent"]
    }, {
      path: "admin/servers/:serverId",
      component: _view_server_view_server_component__WEBPACK_IMPORTED_MODULE_9__["ViewServerComponent"]
    }, {
      path: "admin/qrunit/authenticate/:authId",
      component: _qrunit_login_with_qrcode_qrunit_login_with_qrcode_component__WEBPACK_IMPORTED_MODULE_16__["QrunitLoginWithQrcodeComponent"]
    }, //qrunits
    {
      path: "admin/qrunits/add",
      component: _add_qrunit_add_qrunit_component__WEBPACK_IMPORTED_MODULE_15__["AddQrunitComponent"]
    }, {
      path: "authoritative/login",
      component: _authoritative_login_authoritative_login_component__WEBPACK_IMPORTED_MODULE_10__["AuthoritativeLoginComponent"]
    }, {
      path: "authoritative/home",
      component: _authoritative_home_authoritative_home_component__WEBPACK_IMPORTED_MODULE_11__["AuthoritativeHomeComponent"]
    }, {
      path: "authoritative/suspects/add",
      component: _add_suspect_add_suspect_component__WEBPACK_IMPORTED_MODULE_12__["AddSuspectComponent"]
    }, {
      path: "authoritative/suspects/:suspectId",
      component: _view_suspect_view_suspect_component__WEBPACK_IMPORTED_MODULE_13__["ViewSuspectComponent"]
    }, {
      path: "authoritative/admins/add",
      component: _add_admin_add_admin_component__WEBPACK_IMPORTED_MODULE_17__["AddAdminComponent"]
    }, {
      path: "authoritative/authoritative/add",
      component: _add_authoritative_add_authoritative_component__WEBPACK_IMPORTED_MODULE_18__["AddAuthoritativeComponent"]
    }, {
      path: "authoritative/map",
      component: _test_test_component__WEBPACK_IMPORTED_MODULE_19__["TestComponent"]
    }, {
      path: "authoritative/live/:cameraId",
      component: _view_live_feed_view_live_feed_component__WEBPACK_IMPORTED_MODULE_20__["ViewLiveFeedComponent"]
    }, {
      path: "authoritative/alert/:alertId",
      component: _view_alert_view_alert_component__WEBPACK_IMPORTED_MODULE_21__["ViewAlertComponent"]
    }, {
      path: "test",
      component: _tests_only_tests_only_component__WEBPACK_IMPORTED_MODULE_22__["TestsOnlyComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./admin.service */
    "./src/app/admin.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _authoritative_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./authoritative.service */
    "./src/app/authoritative.service.ts");
    /* harmony import */


    var _toaster_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./toaster.service */
    "./src/app/toaster.service.ts");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(adminService, authoritativeService, router, toaster) {
        _classCallCheck(this, AppComponent);

        this.adminService = adminService;
        this.authoritativeService = authoritativeService;
        this.router = router;
        this.toaster = toaster;
        this.title = 'client';
        this.didAdminLogin = false;
        this.didAuthoritativeLogin = false;
      }

      _createClass(AppComponent, [{
        key: "adminLogout",
        value: function adminLogout() {
          var _this17 = this;

          this.toaster.info("Please wait! Working on it");
          this.adminService.logout().subscribe(function (data) {
            if (data.err) _this17.toaster.err(data.err.message);else {
              _this17.toaster.succ(data.succ.message);

              _this17.router.navigate(["/"]);
            }
          }, function (err) {
            console.error(err);
          }, function () {});
        }
      }, {
        key: "authoritativeLogout",
        value: function authoritativeLogout() {
          var _this18 = this;

          this.toaster.info("Please wait! Working on it");
          this.authoritativeService.logout().subscribe(function (data) {
            if (data.err) _this18.toaster.err(data.err.message);else {
              _this18.toaster.succ(data.succ.message);

              _this18.router.navigate(["/"]);
            }
          }, function (err) {
            console.error(err);
          }, function () {});
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this19 = this;

          console.log("working");
          this.adminService.isLoggedIn().subscribe(function (data) {
            if (data.err) _this19.didAdminLogin = false;else _this19.didAdminLogin = true;
            console.log(data);
          }, function (err) {
            console.error(err);
          }, function () {});
          this.authoritativeService.isLoggedIn().subscribe(function (data) {
            if (data.err) _this19.didAuthoritativeLogin = false;else _this19.didAuthoritativeLogin = true;
            console.log(data);
          }, function (err) {
            console.error(err);
          }, function () {});
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]
      }, {
        type: _authoritative_service__WEBPACK_IMPORTED_MODULE_4__["AuthoritativeService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _toaster_service__WEBPACK_IMPORTED_MODULE_5__["ToasterService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var ngx_socket_io__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-socket-io */
    "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");
    /* harmony import */


    var _admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./admin-home/admin-home.component */
    "./src/app/admin-home/admin-home.component.ts");
    /* harmony import */


    var _main_home_main_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./main-home/main-home.component */
    "./src/app/main-home/main-home.component.ts");
    /* harmony import */


    var _admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./admin-login/admin-login.component */
    "./src/app/admin-login/admin-login.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _add_camera_add_camera_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./add-camera/add-camera.component */
    "./src/app/add-camera/add-camera.component.ts");
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/fesm2015/agm-core.js");
    /* harmony import */


    var _view_camera_view_camera_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./view-camera/view-camera.component */
    "./src/app/view-camera/view-camera.component.ts");
    /* harmony import */


    var _add_server_add_server_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./add-server/add-server.component */
    "./src/app/add-server/add-server.component.ts");
    /* harmony import */


    var _view_server_view_server_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./view-server/view-server.component */
    "./src/app/view-server/view-server.component.ts");
    /* harmony import */


    var _authoritative_login_authoritative_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./authoritative-login/authoritative-login.component */
    "./src/app/authoritative-login/authoritative-login.component.ts");
    /* harmony import */


    var _authoritative_home_authoritative_home_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./authoritative-home/authoritative-home.component */
    "./src/app/authoritative-home/authoritative-home.component.ts");
    /* harmony import */


    var _add_suspect_add_suspect_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./add-suspect/add-suspect.component */
    "./src/app/add-suspect/add-suspect.component.ts");
    /* harmony import */


    var _view_suspect_view_suspect_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./view-suspect/view-suspect.component */
    "./src/app/view-suspect/view-suspect.component.ts");
    /* harmony import */


    var agm_direction__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! agm-direction */
    "./node_modules/agm-direction/fesm2015/agm-direction.js");
    /* harmony import */


    var ng2_file_upload__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ng2-file-upload */
    "./node_modules/ng2-file-upload/fesm2015/ng2-file-upload.js");
    /* harmony import */


    var angular_file_uploader__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! angular-file-uploader */
    "./node_modules/angular-file-uploader/fesm2015/angular-file-uploader.js");
    /* harmony import */


    var _auto_assign_camera_auto_assign_camera_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./auto-assign-camera/auto-assign-camera.component */
    "./src/app/auto-assign-camera/auto-assign-camera.component.ts");
    /* harmony import */


    var _add_qrunit_add_qrunit_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./add-qrunit/add-qrunit.component */
    "./src/app/add-qrunit/add-qrunit.component.ts");
    /* harmony import */


    var _qrunit_login_with_qrcode_qrunit_login_with_qrcode_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./qrunit-login-with-qrcode/qrunit-login-with-qrcode.component */
    "./src/app/qrunit-login-with-qrcode/qrunit-login-with-qrcode.component.ts");
    /* harmony import */


    var _add_admin_add_admin_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./add-admin/add-admin.component */
    "./src/app/add-admin/add-admin.component.ts");
    /* harmony import */


    var _add_authoritative_add_authoritative_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./add-authoritative/add-authoritative.component */
    "./src/app/add-authoritative/add-authoritative.component.ts");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/fesm2015/angular-fire.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/fesm2015/angular-fire-database.js");
    /* harmony import */


    var _test_test_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./test/test.component */
    "./src/app/test/test.component.ts");
    /* harmony import */


    var _view_live_feed_view_live_feed_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./view-live-feed/view-live-feed.component */
    "./src/app/view-live-feed/view-live-feed.component.ts");
    /* harmony import */


    var _view_alert_view_alert_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./view-alert/view-alert.component */
    "./src/app/view-alert/view-alert.component.ts");
    /* harmony import */


    var _suspect_details_suspect_details_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./suspect-details/suspect-details.component */
    "./src/app/suspect-details/suspect-details.component.ts");
    /* harmony import */


    var _person_details_person_details_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./person-details/person-details.component */
    "./src/app/person-details/person-details.component.ts");
    /* harmony import */


    var _tests_only_tests_only_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./tests-only/tests-only.component */
    "./src/app/tests-only/tests-only.component.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _camera_details_camera_details_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./camera-details/camera-details.component */
    "./src/app/camera-details/camera-details.component.ts");
    /* harmony import */


    var _server_details_server_details_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ./server-details/server-details.component */
    "./src/app/server-details/server-details.component.ts");
    /* harmony import */


    var _angular_material___WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! @angular/material/ */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _chipper_chipper_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! ./chipper/chipper.component */
    "./src/app/chipper/chipper.component.ts");
    /* harmony import */


    var _temp_dialog_temp_dialog_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! ./temp-dialog/temp-dialog.component */
    "./src/app/temp-dialog/temp-dialog.component.ts");
    /* harmony import */


    var _add_person_add_person_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! ./add-person/add-person.component */
    "./src/app/add-person/add-person.component.ts");
    /* harmony import */


    var _map_with_search_map_with_search_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! ./map-with-search/map-with-search.component */
    "./src/app/map-with-search/map-with-search.component.ts");
    /* harmony import */


    var _adjust_preprocessing_adjust_preprocessing_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! ./adjust-preprocessing/adjust-preprocessing.component */
    "./src/app/adjust-preprocessing/adjust-preprocessing.component.ts"); //firebase


    var config = {
      url: 'http://localhost:5000',
      options: {}
    };
    var toastOptions = {
      timeOut: 2000,
      progressBar: true,
      progressAnimation: 'decreasing',
      positionClass: 'toast-bottom-right'
    };
    var firebaseConfig = {
      apiKey: "AIzaSyBtc_hk_Aamj-hBDpD2s0OyrzEBgbp4KeI",
      authDomain: "fypqrf-b3259.firebaseapp.com",
      databaseURL: "https://fypqrf-b3259.firebaseio.com",
      projectId: "fypqrf-b3259",
      storageBucket: "fypqrf-b3259.appspot.com",
      messagingSenderId: "571613899436",
      appId: "1:571613899436:web:48a1be034b95c3d3cf4d09"
    };

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_7__["AdminHomeComponent"], _main_home_main_home_component__WEBPACK_IMPORTED_MODULE_8__["MainHomeComponent"], _admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_9__["AdminLoginComponent"], _add_camera_add_camera_component__WEBPACK_IMPORTED_MODULE_12__["AddCameraComponent"], _view_camera_view_camera_component__WEBPACK_IMPORTED_MODULE_14__["ViewCameraComponent"], _add_server_add_server_component__WEBPACK_IMPORTED_MODULE_15__["AddServerComponent"], _view_server_view_server_component__WEBPACK_IMPORTED_MODULE_16__["ViewServerComponent"], _authoritative_login_authoritative_login_component__WEBPACK_IMPORTED_MODULE_17__["AuthoritativeLoginComponent"], _authoritative_home_authoritative_home_component__WEBPACK_IMPORTED_MODULE_18__["AuthoritativeHomeComponent"], _add_suspect_add_suspect_component__WEBPACK_IMPORTED_MODULE_19__["AddSuspectComponent"], _view_suspect_view_suspect_component__WEBPACK_IMPORTED_MODULE_20__["ViewSuspectComponent"], _auto_assign_camera_auto_assign_camera_component__WEBPACK_IMPORTED_MODULE_24__["AutoAssignCameraComponent"], _add_qrunit_add_qrunit_component__WEBPACK_IMPORTED_MODULE_25__["AddQrunitComponent"], _qrunit_login_with_qrcode_qrunit_login_with_qrcode_component__WEBPACK_IMPORTED_MODULE_26__["QrunitLoginWithQrcodeComponent"], _add_admin_add_admin_component__WEBPACK_IMPORTED_MODULE_27__["AddAdminComponent"], _add_authoritative_add_authoritative_component__WEBPACK_IMPORTED_MODULE_28__["AddAuthoritativeComponent"], _test_test_component__WEBPACK_IMPORTED_MODULE_31__["TestComponent"], _view_live_feed_view_live_feed_component__WEBPACK_IMPORTED_MODULE_32__["ViewLiveFeedComponent"], _view_alert_view_alert_component__WEBPACK_IMPORTED_MODULE_33__["ViewAlertComponent"], _suspect_details_suspect_details_component__WEBPACK_IMPORTED_MODULE_34__["SuspectDetailsComponent"], _person_details_person_details_component__WEBPACK_IMPORTED_MODULE_35__["PersonDetailsComponent"], _tests_only_tests_only_component__WEBPACK_IMPORTED_MODULE_36__["TestsOnlyComponent"], _camera_details_camera_details_component__WEBPACK_IMPORTED_MODULE_40__["CameraDetailsComponent"], _server_details_server_details_component__WEBPACK_IMPORTED_MODULE_41__["ServerDetailsComponent"], _chipper_chipper_component__WEBPACK_IMPORTED_MODULE_43__["ChipperComponent"], _temp_dialog_temp_dialog_component__WEBPACK_IMPORTED_MODULE_44__["TempDialogComponent"], _add_person_add_person_component__WEBPACK_IMPORTED_MODULE_45__["AddPersonComponent"], _map_with_search_map_with_search_component__WEBPACK_IMPORTED_MODULE_46__["MapWithSearchComponent"], _adjust_preprocessing_adjust_preprocessing_component__WEBPACK_IMPORTED_MODULE_47__["AdjustPreprocessingComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_22__["FileUploadModule"], angular_file_uploader__WEBPACK_IMPORTED_MODULE_23__["AngularFileUploaderModule"], ngx_socket_io__WEBPACK_IMPORTED_MODULE_6__["SocketIoModule"].forRoot(config), _agm_core__WEBPACK_IMPORTED_MODULE_13__["AgmCoreModule"].forRoot({
        apiKey: 'AIzaSyBtc_hk_Aamj-hBDpD2s0OyrzEBgbp4KeI'
      }), agm_direction__WEBPACK_IMPORTED_MODULE_21__["AgmDirectionModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonicModule"].forRoot(), _angular_fire__WEBPACK_IMPORTED_MODULE_29__["AngularFireModule"].initializeApp(firebaseConfig, "fypqrf-b3259"), _angular_fire_database__WEBPACK_IMPORTED_MODULE_30__["AngularFireDatabaseModule"], _angular_common__WEBPACK_IMPORTED_MODULE_38__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_39__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_37__["ToastrModule"].forRoot(toastOptions) // ToastrModule added
      //material layout
      , _angular_material___WEBPACK_IMPORTED_MODULE_42__["MatFormFieldModule"], _angular_material___WEBPACK_IMPORTED_MODULE_42__["MatChipsModule"], _angular_material___WEBPACK_IMPORTED_MODULE_42__["MatInputModule"], _angular_material___WEBPACK_IMPORTED_MODULE_42__["MatIconModule"], _angular_material___WEBPACK_IMPORTED_MODULE_42__["MatDialogModule"], _angular_material___WEBPACK_IMPORTED_MODULE_42__["MatSliderModule"]],
      providers: [{
        provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["HAMMER_GESTURE_CONFIG"],
        useClass: _angular_material___WEBPACK_IMPORTED_MODULE_42__["GestureConfig"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
      entryComponents: [_temp_dialog_temp_dialog_component__WEBPACK_IMPORTED_MODULE_44__["TempDialogComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/authoritative-home/authoritative-home.component.css":
  /*!*********************************************************************!*\
    !*** ./src/app/authoritative-home/authoritative-home.component.css ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthoritativeHomeAuthoritativeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".bar {\r\n    display: -webkit-box;\r\n    display: flex;\r\n}\r\n\r\n.bar h1 {}\r\n\r\n.bar>.buttons {\r\n    -webkit-box-flex: 1;\r\n            flex: 1;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: end;\r\n            justify-content: flex-end;\r\n    margin: 0 0 0 10px;\r\n    padding: 20px 0 10px 0;\r\n}\r\n\r\n.bar>.buttons>button {\r\n    border-radius: 5px;\r\n    background-color: #2ecc71;\r\n    color: white;\r\n}\r\n\r\n.bar>.buttons>button:hover {\r\n    background-color: #27ae60;\r\n}\r\n\r\n.suspects {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr 1fr;\r\n    grid-gap: 30px;\r\n    ;\r\n}\r\n\r\n.suspect {\r\n    cursor: pointer;\r\n    padding: 5px;\r\n    box-shadow: 0 0 10px #aaa;\r\n    ;\r\n    border-radius: 10px;\r\n}\r\n\r\n.big-banner {\r\n    height: 300px;\r\n    text-align: center;\r\n    line-height: 300px;\r\n    margin: 10px 0;\r\n    background: #3498db;\r\n}\r\n\r\n.big-banner button {\r\n    background: white !important;\r\n    color: black !important;\r\n    margin: 0 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aG9yaXRhdGl2ZS1ob21lL2F1dGhvcml0YXRpdmUtaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0FBQ2pCOztBQUVBLFNBQVM7O0FBRVQ7SUFDSSxtQkFBTztZQUFQLE9BQU87SUFDUCxvQkFBYTtJQUFiLGFBQWE7SUFDYixxQkFBeUI7WUFBekIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLGNBQWM7O0FBRWxCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWix5QkFBeUI7O0lBRXpCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsdUJBQXVCO0lBQ3ZCLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9hdXRob3JpdGF0aXZlLWhvbWUvYXV0aG9yaXRhdGl2ZS1ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5iYXIgaDEge31cclxuXHJcbi5iYXI+LmJ1dHRvbnMge1xyXG4gICAgZmxleDogMTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgbWFyZ2luOiAwIDAgMCAxMHB4O1xyXG4gICAgcGFkZGluZzogMjBweCAwIDEwcHggMDtcclxufVxyXG5cclxuLmJhcj4uYnV0dG9ucz5idXR0b24ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJlY2M3MTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmJhcj4uYnV0dG9ucz5idXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI3YWU2MDtcclxufVxyXG5cclxuLnN1c3BlY3RzIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcclxuICAgIGdyaWQtZ2FwOiAzMHB4O1xyXG4gICAgO1xyXG59XHJcblxyXG4uc3VzcGVjdCB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAjYWFhO1xyXG4gICAgO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLmJpZy1iYW5uZXIge1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMDBweDtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgYmFja2dyb3VuZDogIzM0OThkYjtcclxufVxyXG5cclxuLmJpZy1iYW5uZXIgYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMCAxMHB4O1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/authoritative-home/authoritative-home.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/authoritative-home/authoritative-home.component.ts ***!
    \********************************************************************/

  /*! exports provided: AuthoritativeHomeComponent */

  /***/
  function srcAppAuthoritativeHomeAuthoritativeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthoritativeHomeComponent", function () {
      return AuthoritativeHomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _authoritative_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../authoritative.service */
    "./src/app/authoritative.service.ts");
    /* harmony import */


    var _toaster_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../toaster.service */
    "./src/app/toaster.service.ts");

    var AuthoritativeHomeComponent =
    /*#__PURE__*/
    function () {
      function AuthoritativeHomeComponent(authoritativeService, toaster) {
        var _this20 = this;

        _classCallCheck(this, AuthoritativeHomeComponent);

        this.authoritativeService = authoritativeService;
        this.toaster = toaster; //implementing searching of suspects

        this.search = {
          suspects: {
            query: "",
            suspects: []
          }
        };

        this.clearSuspectsSearchQuery = function () {
          _this20.search.suspects.query = '';
          console.log(_this20.search);

          _this20.getSuspects();
        };

        this.searchForSuspects = function () {
          _this20.toaster.info("Looking for suspects, please wait!");

          var query = _this20.search.suspects.query;

          if (query == "") {
            _this20.getSuspects();

            return;
          }

          _this20.authoritativeService.searchSuspects(query).subscribe(function (data) {
            if (data.err) {
              _this20.toaster.err(data.err.message);
            } else if (data.succ || !data.err) {
              _this20.toaster.succ(data.succ);

              _this20.search.suspects.suspects = data.suspects;
            }
          }, function (err) {
            _this20.toaster.err(err);
          }, function () {});
        };

        this.getSuspects = function () {
          _this20.authoritativeService.getSuspects().subscribe(function (data) {
            if (data.err) {
              _this20.toaster.err(data.err.message);
            } else if (data.succ || !data.err) {
              console.log(data);
              _this20.suspects = data.suspects;
            }
          }, function (err) {
            _this20.toaster.err(err);
          }, function () {});
        };

        this.suspects = [];
      }

      _createClass(AuthoritativeHomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.search = {
            suspects: {
              query: "",
              suspects: []
            }
          };
          this.getSuspects();
        }
      }]);

      return AuthoritativeHomeComponent;
    }();

    AuthoritativeHomeComponent.ctorParameters = function () {
      return [{
        type: _authoritative_service__WEBPACK_IMPORTED_MODULE_2__["AuthoritativeService"]
      }, {
        type: _toaster_service__WEBPACK_IMPORTED_MODULE_3__["ToasterService"]
      }];
    };

    AuthoritativeHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-authoritative-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./authoritative-home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/authoritative-home/authoritative-home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./authoritative-home.component.css */
      "./src/app/authoritative-home/authoritative-home.component.css")).default]
    })], AuthoritativeHomeComponent);
    /***/
  },

  /***/
  "./src/app/authoritative-login/authoritative-login.component.css":
  /*!***********************************************************************!*\
    !*** ./src/app/authoritative-login/authoritative-login.component.css ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthoritativeLoginAuthoritativeLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "form>* {\r\n    display: block;\r\n}\r\n\r\nform input[type=\"text\"],\r\nform input[type=\"email\"],\r\nform input[type='password'],\r\nform button {\r\n    padding: 5px 10px;\r\n    margin: 10px 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aG9yaXRhdGl2ZS1sb2dpbi9hdXRob3JpdGF0aXZlLWxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBOzs7O0lBSUksaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9hdXRob3JpdGF0aXZlLWxvZ2luL2F1dGhvcml0YXRpdmUtbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm0+KiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuZm9ybSBpbnB1dFt0eXBlPVwidGV4dFwiXSxcclxuZm9ybSBpbnB1dFt0eXBlPVwiZW1haWxcIl0sXHJcbmZvcm0gaW5wdXRbdHlwZT0ncGFzc3dvcmQnXSxcclxuZm9ybSBidXR0b24ge1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/authoritative-login/authoritative-login.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/authoritative-login/authoritative-login.component.ts ***!
    \**********************************************************************/

  /*! exports provided: AuthoritativeLoginComponent */

  /***/
  function srcAppAuthoritativeLoginAuthoritativeLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthoritativeLoginComponent", function () {
      return AuthoritativeLoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _authoritative_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../authoritative.service */
    "./src/app/authoritative.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _toaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../toaster.service */
    "./src/app/toaster.service.ts");

    var AuthoritativeLoginComponent =
    /*#__PURE__*/
    function () {
      function AuthoritativeLoginComponent(authoritativeService, router, toaster) {
        _classCallCheck(this, AuthoritativeLoginComponent);

        this.authoritativeService = authoritativeService;
        this.router = router;
        this.toaster = toaster;
      }

      _createClass(AuthoritativeLoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "loginx",
        value: function loginx() {
          var _this21 = this;

          this.toaster.info("Please wait! Working on it");
          this.authoritativeService.login(this.email, this.password).subscribe(function (data) {
            if (data.err) {
              _this21.toaster.err(data.err.message);
            } else if (data.succ) {
              _this21.toaster.succ(data.succ.message);

              _this21.router.navigate(["authoritative/home"]);
            }
          }, function (err) {
            _this21.toaster.err(err);
          }, function () {});
        }
      }]);

      return AuthoritativeLoginComponent;
    }();

    AuthoritativeLoginComponent.ctorParameters = function () {
      return [{
        type: _authoritative_service__WEBPACK_IMPORTED_MODULE_2__["AuthoritativeService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"]
      }];
    };

    AuthoritativeLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-authoritative-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./authoritative-login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/authoritative-login/authoritative-login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./authoritative-login.component.css */
      "./src/app/authoritative-login/authoritative-login.component.css")).default]
    })], AuthoritativeLoginComponent);
    /***/
  },

  /***/
  "./src/app/authoritative.service.ts":
  /*!******************************************!*\
    !*** ./src/app/authoritative.service.ts ***!
    \******************************************/

  /*! exports provided: AuthoritativeService */

  /***/
  function srcAppAuthoritativeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthoritativeService", function () {
      return AuthoritativeService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
    }; // const url: string = "http://localhost:3000/";

    var url = "https://darts-web-server.herokuapp.com/";

    var AuthoritativeService =
    /*#__PURE__*/
    function () {
      function AuthoritativeService(http) {
        var _this22 = this;

        _classCallCheck(this, AuthoritativeService);

        this.http = http; //for map
        //get list of all cameras

        this.mGetCameras = function () {
          return _this22.http.get(url + "authoritative/map/cameras", httpOptions);
        }; //get list of all alerts


        this.mGetAlerts = function () {
          return _this22.http.get(url + "authoritative/map/alerts", httpOptions);
        }; //get list of all servers


        this.mGetServers = function () {
          return _this22.http.get(url + "authoritative/map/servers", httpOptions);
        }; //get list of all qrunits


        this.mGetQRUnits = function () {
          return _this22.http.get(url + "authoritative/map/qrunits", httpOptions);
        };

        this.mSearchLocation = function (q) {
          return _this22.http.get(url + "authoritative/map/search/" + q, httpOptions);
        };

        this.getSuspectAlerts = function (suspectId) {
          return _this22.http.get(url + "authoritative/map/alerts/" + suspectId, httpOptions);
        };
      }

      _createClass(AuthoritativeService, [{
        key: "login",
        value: function login(email, password) {
          return this.http.post(url + "authoritative/login", {
            user: {
              email: email,
              password: password
            }
          }, httpOptions);
        }
      }, {
        key: "logout",
        value: function logout() {
          return this.http.post(url + "authoritative/logout", {}, httpOptions);
        }
      }, {
        key: "isLoggedIn",
        value: function isLoggedIn() {
          return this.http.get(url + "authoritative/isLoggedIn", httpOptions);
        }
      }, {
        key: "addSuspect",
        value: function addSuspect(suspect) {
          return this.http.post(url + "authoritative/suspects/", {
            suspect: suspect
          }, httpOptions);
        }
      }, {
        key: "getSuspect",
        value: function getSuspect(suspectId) {
          return this.http.get(url + "authoritative/suspects/" + suspectId, httpOptions);
        }
      }, {
        key: "getSuspects",
        value: function getSuspects() {
          return this.http.get(url + "authoritative/suspects/", httpOptions);
        }
      }, {
        key: "updateSuspect",
        value: function updateSuspect(suspect) {
          return this.http.put(url + "authoritative/suspects/" + suspect._id, {
            suspect: suspect
          }, httpOptions);
        }
      }, {
        key: "deleteSuspect",
        value: function deleteSuspect(suspectId) {
          return this.http.delete(url + "authoritative/suspects/" + suspectId, httpOptions);
        }
      }, {
        key: "searchSuspects",
        value: function searchSuspects(q) {
          return this.http.get(url + "authoritative/suspects/search/" + q, httpOptions);
        }
      }, {
        key: "getAvailablePeopleAdmin",
        value: function getAvailablePeopleAdmin() {
          return this.http.get(url + "authoritative/admin/person", httpOptions);
        }
      }, {
        key: "addAdmin",
        value: function addAdmin(admin) {
          return this.http.post(url + "authoritative/admin/", {
            admin: admin
          }, httpOptions);
        }
      }, {
        key: "getAvailablePeopleAuthoritative",
        value: function getAvailablePeopleAuthoritative() {
          return this.http.get(url + "authoritative/authoritative/person", httpOptions);
        }
      }, {
        key: "addAp",
        value: function addAp(ap) {
          return this.http.post(url + "authoritative/authoritative/", {
            ap: ap
          }, httpOptions);
        }
      }, {
        key: "getCamera",
        value: function getCamera(cameraId) {
          return this.http.get(url + "authoritative/map/camera/" + cameraId, httpOptions);
        }
      }, {
        key: "getAlert",
        value: function getAlert(alertId) {
          return this.http.get(url + "authoritative/map/alert/" + alertId, httpOptions);
        }
      }]);

      return AuthoritativeService;
    }();

    AuthoritativeService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    AuthoritativeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthoritativeService);
    /***/
  },

  /***/
  "./src/app/auto-assign-camera/auto-assign-camera.component.css":
  /*!*********************************************************************!*\
    !*** ./src/app/auto-assign-camera/auto-assign-camera.component.css ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAutoAssignCameraAutoAssignCameraComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dG8tYXNzaWduLWNhbWVyYS9hdXRvLWFzc2lnbi1jYW1lcmEuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/auto-assign-camera/auto-assign-camera.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/auto-assign-camera/auto-assign-camera.component.ts ***!
    \********************************************************************/

  /*! exports provided: AutoAssignCameraComponent */

  /***/
  function srcAppAutoAssignCameraAutoAssignCameraComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AutoAssignCameraComponent", function () {
      return AutoAssignCameraComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../admin.service */
    "./src/app/admin.service.ts");
    /* harmony import */


    var _toaster_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../toaster.service */
    "./src/app/toaster.service.ts");

    var AutoAssignCameraComponent =
    /*#__PURE__*/
    function () {
      function AutoAssignCameraComponent(adminService, toaster) {
        var _this23 = this;

        _classCallCheck(this, AutoAssignCameraComponent);

        this.adminService = adminService;
        this.toaster = toaster;
        this.result = "Click on yes to start the process";

        this.autoAssign = function () {
          _this23.result = "";
          _this23.result += "Started\n";

          _this23.adminService.autoAssign().subscribe(function (data) {
            if (data.err) {
              _this23.toaster.err(data.err.message);

              _this23.result += data.err.message + "\n";
            } else if (data.succ || !data.err) {
              console.log(data);
              _this23.result += data.succ.message + "\n";
            }
          }, function (err) {
            _this23.toaster.err(err);

            _this23.result += err + "\n";
          }, function () {});
        };
      }

      _createClass(AutoAssignCameraComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AutoAssignCameraComponent;
    }();

    AutoAssignCameraComponent.ctorParameters = function () {
      return [{
        type: _admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]
      }, {
        type: _toaster_service__WEBPACK_IMPORTED_MODULE_3__["ToasterService"]
      }];
    };

    AutoAssignCameraComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-auto-assign-camera',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./auto-assign-camera.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/auto-assign-camera/auto-assign-camera.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./auto-assign-camera.component.css */
      "./src/app/auto-assign-camera/auto-assign-camera.component.css")).default]
    })], AutoAssignCameraComponent);
    /***/
  },

  /***/
  "./src/app/camera-details/camera-details.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/camera-details/camera-details.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCameraDetailsCameraDetailsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".camera-details {\r\n    width: 300px;\r\n    margin: 10px;\r\n    box-shadow: 0 0 10px #888;\r\n    text-align: center;\r\n    padding: 10px 20px;\r\n    border-radius: 20px;\r\n    ;\r\n}\r\n\r\n.camera-details:hover {\r\n    cursor: pointer;\r\n    box-shadow: 0 0 20px #888;\r\n}\r\n\r\n.camera-details .image-holder {\r\n    min-height: 200px !important;\r\n    line-height: 200px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.camera-details .image-holder img {\r\n    border-radius: 10px;\r\n    ;\r\n}\r\n\r\n.camera-details .details-holder {\r\n    display: grid;\r\n    grid-template-columns: 1fr 5fr;\r\n    text-align: left;\r\n}\r\n\r\n.camera-details .details-holder label:nth-child(2n) {\r\n    font-weight: normal;\r\n}\r\n\r\n.camera-details .details-holder * {\r\n    font-weight: bold;\r\n    background-color: #f39c12;\r\n    padding: 5px 10px;\r\n    border-radius: 10px;\r\n    color: white;\r\n    line-height: 15px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FtZXJhLWRldGFpbHMvY2FtZXJhLWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsbUJBQW1COztBQUV2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjs7QUFFdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY2FtZXJhLWRldGFpbHMvY2FtZXJhLWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYW1lcmEtZGV0YWlscyB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAjODg4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIDtcclxufVxyXG5cclxuLmNhbWVyYS1kZXRhaWxzOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAyMHB4ICM4ODg7XHJcbn1cclxuXHJcbi5jYW1lcmEtZGV0YWlscyAuaW1hZ2UtaG9sZGVyIHtcclxuICAgIG1pbi1oZWlnaHQ6IDIwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBsaW5lLWhlaWdodDogMjAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uY2FtZXJhLWRldGFpbHMgLmltYWdlLWhvbGRlciBpbWcge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIDtcclxufVxyXG5cclxuLmNhbWVyYS1kZXRhaWxzIC5kZXRhaWxzLWhvbGRlciB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLmNhbWVyYS1kZXRhaWxzIC5kZXRhaWxzLWhvbGRlciBsYWJlbDpudGgtY2hpbGQoMm4pIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi5jYW1lcmEtZGV0YWlscyAuZGV0YWlscy1ob2xkZXIgKiB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMzljMTI7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBsaW5lLWhlaWdodDogMTVweDtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/camera-details/camera-details.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/camera-details/camera-details.component.ts ***!
    \************************************************************/

  /*! exports provided: CameraDetailsComponent */

  /***/
  function srcAppCameraDetailsCameraDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CameraDetailsComponent", function () {
      return CameraDetailsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CameraDetailsComponent =
    /*#__PURE__*/
    function () {
      function CameraDetailsComponent() {
        _classCallCheck(this, CameraDetailsComponent);

        this.validImg = true;
      }

      _createClass(CameraDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CameraDetailsComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CameraDetailsComponent.prototype, "camera", void 0);
    CameraDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-camera-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./camera-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/camera-details/camera-details.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./camera-details.component.css */
      "./src/app/camera-details/camera-details.component.css")).default]
    })], CameraDetailsComponent);
    /***/
  },

  /***/
  "./src/app/chipper/chipper.component.css":
  /*!***********************************************!*\
    !*** ./src/app/chipper/chipper.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppChipperChipperComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoaXBwZXIvY2hpcHBlci5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/chipper/chipper.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/chipper/chipper.component.ts ***!
    \**********************************************/

  /*! exports provided: ChipperComponent */

  /***/
  function srcAppChipperChipperComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChipperComponent", function () {
      return ChipperComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/esm2015/keycodes.js");

    var ChipperComponent =
    /*#__PURE__*/
    function () {
      function ChipperComponent() {
        var _this24 = this;

        _classCallCheck(this, ChipperComponent);

        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["COMMA"]];

        this.generateOutput = function () {
          console.log("Generating output");

          _this24.change.emit(_this24.items);
        };
      }

      _createClass(ChipperComponent, [{
        key: "add",
        value: function add(event) {
          var input = event.input;
          var value = event.value;

          if ((value || '').trim()) {
            this.items.push(value.trim());
          }

          if (input) {
            input.value = '';
          }

          this.generateOutput();
        }
      }, {
        key: "remove",
        value: function remove(item) {
          var index = this.items.indexOf(item);
          console.log(this.items, index, item);

          if (index >= 0) {
            this.items.splice(index, 1);
          }

          this.generateOutput();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ChipperComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ChipperComponent.prototype, "change", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ChipperComponent.prototype, "items", void 0);
    ChipperComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-chipper',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./chipper.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/chipper/chipper.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./chipper.component.css */
      "./src/app/chipper/chipper.component.css")).default]
    })], ChipperComponent);
    /***/
  },

  /***/
  "./src/app/firebasedatabase.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/firebasedatabase.service.ts ***!
    \*********************************************/

  /*! exports provided: FirebasedatabaseService */

  /***/
  function srcAppFirebasedatabaseServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FirebasedatabaseService", function () {
      return FirebasedatabaseService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/fesm2015/angular-fire-database.js");

    var FirebasedatabaseService = function FirebasedatabaseService(_db) {
      var _this25 = this;

      _classCallCheck(this, FirebasedatabaseService);

      this._db = _db;

      this.getQRUnits = function () {
        return _this25._db.object("/locations").valueChanges();
      };

      this.getAlerts = function () {
        return _this25._db.object("/Alerts").valueChanges();
      };
    };

    FirebasedatabaseService.ctorParameters = function () {
      return [{
        type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]
      }];
    };

    FirebasedatabaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], FirebasedatabaseService);
    /***/
  },

  /***/
  "./src/app/main-home/main-home.component.css":
  /*!***************************************************!*\
    !*** ./src/app/main-home/main-home.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainHomeMainHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n\r\n\r\n#container .wrapper .center {\r\n    position: relative;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    width: 500px;\r\n    text-align: center;\r\n}\r\n#container .wrapper .center > * {\r\n    display: block;\r\n    padding: 10px 20px;\r\n    margin: 5px 10px;\r\n    text-align: center;\r\n    background: #ddd;\r\n    color: black;\r\n    text-decoration: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1ob21lL21haW4taG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1Qsd0NBQWdDO1lBQWhDLGdDQUFnQztJQUNoQyxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9tYWluLWhvbWUvbWFpbi1ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcblxyXG4jY29udGFpbmVyIC53cmFwcGVyIC5jZW50ZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4jY29udGFpbmVyIC53cmFwcGVyIC5jZW50ZXIgPiAqIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgbWFyZ2luOiA1cHggMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICNkZGQ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/main-home/main-home.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/main-home/main-home.component.ts ***!
    \**************************************************/

  /*! exports provided: MainHomeComponent */

  /***/
  function srcAppMainHomeMainHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainHomeComponent", function () {
      return MainHomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MainHomeComponent =
    /*#__PURE__*/
    function () {
      function MainHomeComponent() {
        _classCallCheck(this, MainHomeComponent);
      }

      _createClass(MainHomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MainHomeComponent;
    }();

    MainHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-main-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./main-home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main-home/main-home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./main-home.component.css */
      "./src/app/main-home/main-home.component.css")).default]
    })], MainHomeComponent);
    /***/
  },

  /***/
  "./src/app/map-with-search/map-with-search.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/map-with-search/map-with-search.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMapWithSearchMapWithSearchComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".map-with-navigation {\r\n    width: 100%;\r\n}\r\n\r\n.map-with-navigation .map {\r\n    width: 100%;\r\n    height: 300px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwLXdpdGgtc2VhcmNoL21hcC13aXRoLXNlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9tYXAtd2l0aC1zZWFyY2gvbWFwLXdpdGgtc2VhcmNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFwLXdpdGgtbmF2aWdhdGlvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1hcC13aXRoLW5hdmlnYXRpb24gLm1hcCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/map-with-search/map-with-search.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/map-with-search/map-with-search.component.ts ***!
    \**************************************************************/

  /*! exports provided: MapWithSearchComponent */

  /***/
  function srcAppMapWithSearchMapWithSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapWithSearchComponent", function () {
      return MapWithSearchComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _map_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../map.service */
    "./src/app/map.service.ts");
    /* harmony import */


    var _toaster_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../toaster.service */
    "./src/app/toaster.service.ts");

    var MapWithSearchComponent =
    /*#__PURE__*/
    function () {
      function MapWithSearchComponent(mapService, toaster) {
        var _this26 = this;

        _classCallCheck(this, MapWithSearchComponent);

        this.mapService = mapService;
        this.toaster = toaster;
        this.latitude = 33.651592;
        this.longitude = 73.156456;
        this.zoom = 16;
        this.locationSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.query = "";
        this.results = [];

        this.search = function () {
          _this26.toaster.info("Searching for locations");

          _this26.mapService.search(_this26.query).subscribe(function (data) {
            if (data.err) {
              _this26.toaster.err(data.err);
            } else {
              if (data.locations.results.length > 0) {
                _this26.results = data.locations.results;
              } else {
                _this26.toaster.err("No location found!");
              }
            }
          }, function (err) {
            _this26.toaster.err(err);
          });
        };

        this.selectLocation = function (index) {
          console.log(index, _this26.results);

          if (index < _this26.results.length) {
            var location = {
              latitude: _this26.results[index].geometry.lat,
              longitude: _this26.results[index].geometry.lng
            };

            _this26.locationSelected.emit(location);

            _this26.latitude = location.latitude;
            _this26.longitude = location.longitude;
            _this26.results = [];
          } else {
            _this26.toaster.err("Invalid selection!");
          }
        };

        this.choseThisLocation = function (e) {
          console.log(e);
          var location = {
            latitude: e.coords.lat,
            longitude: e.coords.lng
          };

          _this26.locationSelected.emit(location);

          _this26.results = [];
          _this26.latitude = location.latitude;
          _this26.longitude = location.longitude;
        };
      }

      _createClass(MapWithSearchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MapWithSearchComponent;
    }();

    MapWithSearchComponent.ctorParameters = function () {
      return [{
        type: _map_service__WEBPACK_IMPORTED_MODULE_2__["MapService"]
      }, {
        type: _toaster_service__WEBPACK_IMPORTED_MODULE_3__["ToasterService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MapWithSearchComponent.prototype, "latitude", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MapWithSearchComponent.prototype, "longitude", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MapWithSearchComponent.prototype, "zoom", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], MapWithSearchComponent.prototype, "locationSelected", void 0);
    MapWithSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-map-with-search',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./map-with-search.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/map-with-search/map-with-search.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./map-with-search.component.css */
      "./src/app/map-with-search/map-with-search.component.css")).default]
    })], MapWithSearchComponent);
    /***/
  },

  /***/
  "./src/app/map.service.ts":
  /*!********************************!*\
    !*** ./src/app/map.service.ts ***!
    \********************************/

  /*! exports provided: MapService */

  /***/
  function srcAppMapServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapService", function () {
      return MapService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
    };
    var url = "https://darts-web-server.herokuapp.com/map";

    var MapService =
    /*#__PURE__*/
    function () {
      function MapService(http) {
        _classCallCheck(this, MapService);

        this.http = http;
      }

      _createClass(MapService, [{
        key: "search",
        value: function search(query) {
          return this.http.get(url + "/search/" + query);
        }
      }]);

      return MapService;
    }();

    MapService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    MapService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], MapService);
    /***/
  },

  /***/
  "./src/app/person-details/person-details.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/person-details/person-details.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPersonDetailsPersonDetailsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* .person-details {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    width: 300px;\r\n    margin: 5px 10px;\r\n    cursor: pointer;\r\n    grid-gap: 10px;\r\n    padding: 5px;\r\n    border: 1px solid #999;\r\n}\r\n\r\n.person-details:hover {\r\n    background: #999;\r\n}\r\n\r\n.person-details .details-holder {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    grid-gap: 5px;\r\n}\r\n\r\n.person-details .details-holder label:nth-child(2n+1) {\r\n    font-weight: normal;\r\n} */\r\n\r\n\r\n/* .person-details {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    width: 300px;\r\n    margin: 5px 10px;\r\n    cursor: pointer;\r\n    grid-gap: 10px;\r\n    padding: 5px;\r\n    border: 1px solid #999;\r\n}\r\n\r\n.person-details:hover {\r\n    background: #999;\r\n}\r\n\r\n.person-details .details-holder {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    grid-gap: 5px;\r\n}\r\n\r\n.person-details .details-holder label:nth-child(2n+1) {\r\n    font-weight: normal;\r\n} */\r\n\r\n\r\n.person-details {\r\n    width: 130px;\r\n    padding: 20px 10px;\r\n    background: white;\r\n    border-radius: 20px;\r\n    box-shadow: 0 0 10px #888;\r\n    text-align: center;\r\n    -webkit-animation: all 0.3s ease-in-out;\r\n            animation: all 0.3s ease-in-out;\r\n    margin: 10px;\r\n}\r\n\r\n\r\n.person-details:hover {\r\n    box-shadow: 0 0 20px #888;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.person-details .details-holder {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    grid-gap: 1px;\r\n    overflow: hidden;\r\n    margin-top: 10px;\r\n    width: 100%;\r\n}\r\n\r\n\r\n.person-details .details-holder label:nth-child(2n) {\r\n    font-weight: normal;\r\n}\r\n\r\n\r\n.person-details .fullName {\r\n    text-transform: capitalize;\r\n}\r\n\r\n\r\n.person-details .image {\r\n    border-radius: 50%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVyc29uLWRldGFpbHMvcGVyc29uLWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F1Qkc7OztBQUdIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXVCRzs7O0FBRUg7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQix1Q0FBK0I7WUFBL0IsK0JBQStCO0lBQy9CLFlBQVk7QUFDaEI7OztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7OztBQUVBO0lBQ0ksYUFBYTtJQUNiLDBCQUEwQjtJQUMxQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7OztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOzs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9wZXJzb24tZGV0YWlscy9wZXJzb24tZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLnBlcnNvbi1kZXRhaWxzIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBtYXJnaW46IDVweCAxMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZ3JpZC1nYXA6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xyXG59XHJcblxyXG4ucGVyc29uLWRldGFpbHM6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzk5OTtcclxufVxyXG5cclxuLnBlcnNvbi1kZXRhaWxzIC5kZXRhaWxzLWhvbGRlciB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICBncmlkLWdhcDogNXB4O1xyXG59XHJcblxyXG4ucGVyc29uLWRldGFpbHMgLmRldGFpbHMtaG9sZGVyIGxhYmVsOm50aC1jaGlsZCgybisxKSB7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59ICovXHJcblxyXG5cclxuLyogLnBlcnNvbi1kZXRhaWxzIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBtYXJnaW46IDVweCAxMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZ3JpZC1nYXA6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xyXG59XHJcblxyXG4ucGVyc29uLWRldGFpbHM6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzk5OTtcclxufVxyXG5cclxuLnBlcnNvbi1kZXRhaWxzIC5kZXRhaWxzLWhvbGRlciB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICBncmlkLWdhcDogNXB4O1xyXG59XHJcblxyXG4ucGVyc29uLWRldGFpbHMgLmRldGFpbHMtaG9sZGVyIGxhYmVsOm50aC1jaGlsZCgybisxKSB7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59ICovXHJcblxyXG4ucGVyc29uLWRldGFpbHMge1xyXG4gICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgcGFkZGluZzogMjBweCAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggIzg4ODtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGFuaW1hdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbi5wZXJzb24tZGV0YWlsczpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMjBweCAjODg4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ucGVyc29uLWRldGFpbHMgLmRldGFpbHMtaG9sZGVyIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIGdyaWQtZ2FwOiAxcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucGVyc29uLWRldGFpbHMgLmRldGFpbHMtaG9sZGVyIGxhYmVsOm50aC1jaGlsZCgybikge1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuLnBlcnNvbi1kZXRhaWxzIC5mdWxsTmFtZSB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG5cclxuLnBlcnNvbi1kZXRhaWxzIC5pbWFnZSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/person-details/person-details.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/person-details/person-details.component.ts ***!
    \************************************************************/

  /*! exports provided: PersonDetailsComponent */

  /***/
  function srcAppPersonDetailsPersonDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PersonDetailsComponent", function () {
      return PersonDetailsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PersonDetailsComponent =
    /*#__PURE__*/
    function () {
      function PersonDetailsComponent() {
        _classCallCheck(this, PersonDetailsComponent);
      }

      _createClass(PersonDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PersonDetailsComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PersonDetailsComponent.prototype, "person", void 0);
    PersonDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-person-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./person-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/person-details/person-details.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./person-details.component.css */
      "./src/app/person-details/person-details.component.css")).default]
    })], PersonDetailsComponent);
    /***/
  },

  /***/
  "./src/app/qrunit-login-with-qrcode/qrunit-login-with-qrcode.component.css":
  /*!*********************************************************************************!*\
    !*** ./src/app/qrunit-login-with-qrcode/qrunit-login-with-qrcode.component.css ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppQrunitLoginWithQrcodeQrunitLoginWithQrcodeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3FydW5pdC1sb2dpbi13aXRoLXFyY29kZS9xcnVuaXQtbG9naW4td2l0aC1xcmNvZGUuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/qrunit-login-with-qrcode/qrunit-login-with-qrcode.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/qrunit-login-with-qrcode/qrunit-login-with-qrcode.component.ts ***!
    \********************************************************************************/

  /*! exports provided: QrunitLoginWithQrcodeComponent */

  /***/
  function srcAppQrunitLoginWithQrcodeQrunitLoginWithQrcodeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QrunitLoginWithQrcodeComponent", function () {
      return QrunitLoginWithQrcodeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var QrunitLoginWithQrcodeComponent =
    /*#__PURE__*/
    function () {
      function QrunitLoginWithQrcodeComponent(activatedRoute) {
        _classCallCheck(this, QrunitLoginWithQrcodeComponent);

        this.activatedRoute = activatedRoute;
        this.authId = "";
      }

      _createClass(QrunitLoginWithQrcodeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.authId = this.activatedRoute.snapshot.paramMap.get("authId");
        }
      }]);

      return QrunitLoginWithQrcodeComponent;
    }();

    QrunitLoginWithQrcodeComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    QrunitLoginWithQrcodeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-qrunit-login-with-qrcode',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./qrunit-login-with-qrcode.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/qrunit-login-with-qrcode/qrunit-login-with-qrcode.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./qrunit-login-with-qrcode.component.css */
      "./src/app/qrunit-login-with-qrcode/qrunit-login-with-qrcode.component.css")).default]
    })], QrunitLoginWithQrcodeComponent);
    /***/
  },

  /***/
  "./src/app/server-details/server-details.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/server-details/server-details.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppServerDetailsServerDetailsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".server-details {\r\n    width: 300px;\r\n    margin: 10px;\r\n    box-shadow: 0 0 10px #888;\r\n    text-align: center;\r\n    padding: 10px 20px;\r\n    border-radius: 20px;\r\n    ;\r\n}\r\n\r\n.server-details:hover {\r\n    cursor: pointer;\r\n    box-shadow: 0 0 20px #888;\r\n}\r\n\r\n.server-details .image-holder {\r\n    min-height: 200px !important;\r\n    line-height: 200px;\r\n}\r\n\r\n.server-details .details-holder {\r\n    display: grid;\r\n    grid-template-columns: 1fr 5fr;\r\n    text-align: left;\r\n}\r\n\r\n.server-details .details-holder label:nth-child(2n) {\r\n    font-weight: normal;\r\n}\r\n\r\n.server-details .details-holder * {\r\n    font-weight: bold;\r\n    background-color: #f39c12;\r\n    padding: 5px 10px;\r\n    border-radius: 10px;\r\n    color: white;\r\n    line-height: 15px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmVyLWRldGFpbHMvc2VydmVyLWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsbUJBQW1COztBQUV2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3NlcnZlci1kZXRhaWxzL3NlcnZlci1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VydmVyLWRldGFpbHMge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggIzg4ODtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICA7XHJcbn1cclxuXHJcbi5zZXJ2ZXItZGV0YWlsczpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMjBweCAjODg4O1xyXG59XHJcblxyXG4uc2VydmVyLWRldGFpbHMgLmltYWdlLWhvbGRlciB7XHJcbiAgICBtaW4taGVpZ2h0OiAyMDBweCAhaW1wb3J0YW50O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwMHB4O1xyXG59XHJcblxyXG4uc2VydmVyLWRldGFpbHMgLmRldGFpbHMtaG9sZGVyIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnI7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uc2VydmVyLWRldGFpbHMgLmRldGFpbHMtaG9sZGVyIGxhYmVsOm50aC1jaGlsZCgybikge1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuLnNlcnZlci1kZXRhaWxzIC5kZXRhaWxzLWhvbGRlciAqIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YzOWMxMjtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/server-details/server-details.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/server-details/server-details.component.ts ***!
    \************************************************************/

  /*! exports provided: ServerDetailsComponent */

  /***/
  function srcAppServerDetailsServerDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServerDetailsComponent", function () {
      return ServerDetailsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ServerDetailsComponent =
    /*#__PURE__*/
    function () {
      function ServerDetailsComponent() {
        _classCallCheck(this, ServerDetailsComponent);
      }

      _createClass(ServerDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ServerDetailsComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ServerDetailsComponent.prototype, "server", void 0);
    ServerDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-server-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./server-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/server-details/server-details.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./server-details.component.css */
      "./src/app/server-details/server-details.component.css")).default]
    })], ServerDetailsComponent);
    /***/
  },

  /***/
  "./src/app/suspect-details/suspect-details.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/suspect-details/suspect-details.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSuspectDetailsSuspectDetailsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* .suspect-details {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    width: 300px;\r\n    margin: 5px 10px;\r\n    cursor: pointer;\r\n    grid-gap: 10px;\r\n    padding: 5px;\r\n    border: 1px solid #999;\r\n}\r\n\r\n.suspect-details:hover {\r\n    background: #999;\r\n}\r\n\r\n.suspect-details .details-holder {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    grid-gap: 5px;\r\n}\r\n\r\n.suspect-details .details-holder label:nth-child(2n+1) {\r\n    font-weight: normal;\r\n} */\r\n\r\n.suspect-details {\r\n    width: 170px;\r\n    padding: 20px 10px;\r\n    background: white;\r\n    border-radius: 20px;\r\n    box-shadow: 0 0 10px #888;\r\n    text-align: center;\r\n    -webkit-animation: all 0.3s ease-in-out;\r\n            animation: all 0.3s ease-in-out;\r\n}\r\n\r\n.suspect-details:hover {\r\n    box-shadow: 0 0 20px #888;\r\n    cursor: pointer;\r\n}\r\n\r\n.suspect-details .details-holder {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    grid-gap: 1px;\r\n    overflow: hidden;\r\n    margin-top: 10px;\r\n}\r\n\r\n.suspect-details .details-holder label:nth-child(2n) {\r\n    font-weight: normal;\r\n}\r\n\r\n.suspect-details .fullName {\r\n    text-transform: capitalize;\r\n}\r\n\r\n.suspect-details .image {\r\n    border-radius: 50%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VzcGVjdC1kZXRhaWxzL3N1c3BlY3QtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXVCRzs7QUFFSDtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLHVDQUErQjtZQUEvQiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9zdXNwZWN0LWRldGFpbHMvc3VzcGVjdC1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAuc3VzcGVjdC1kZXRhaWxzIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBtYXJnaW46IDVweCAxMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZ3JpZC1nYXA6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xyXG59XHJcblxyXG4uc3VzcGVjdC1kZXRhaWxzOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICM5OTk7XHJcbn1cclxuXHJcbi5zdXNwZWN0LWRldGFpbHMgLmRldGFpbHMtaG9sZGVyIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIGdyaWQtZ2FwOiA1cHg7XHJcbn1cclxuXHJcbi5zdXNwZWN0LWRldGFpbHMgLmRldGFpbHMtaG9sZGVyIGxhYmVsOm50aC1jaGlsZCgybisxKSB7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59ICovXHJcblxyXG4uc3VzcGVjdC1kZXRhaWxzIHtcclxuICAgIHdpZHRoOiAxNzBweDtcclxuICAgIHBhZGRpbmc6IDIwcHggMTBweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4ICM4ODg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbmltYXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uc3VzcGVjdC1kZXRhaWxzOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAyMHB4ICM4ODg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5zdXNwZWN0LWRldGFpbHMgLmRldGFpbHMtaG9sZGVyIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIGdyaWQtZ2FwOiAxcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLnN1c3BlY3QtZGV0YWlscyAuZGV0YWlscy1ob2xkZXIgbGFiZWw6bnRoLWNoaWxkKDJuKSB7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG4uc3VzcGVjdC1kZXRhaWxzIC5mdWxsTmFtZSB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG5cclxuLnN1c3BlY3QtZGV0YWlscyAuaW1hZ2Uge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/suspect-details/suspect-details.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/suspect-details/suspect-details.component.ts ***!
    \**************************************************************/

  /*! exports provided: SuspectDetailsComponent */

  /***/
  function srcAppSuspectDetailsSuspectDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SuspectDetailsComponent", function () {
      return SuspectDetailsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SuspectDetailsComponent =
    /*#__PURE__*/
    function () {
      function SuspectDetailsComponent() {
        _classCallCheck(this, SuspectDetailsComponent);
      }

      _createClass(SuspectDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SuspectDetailsComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SuspectDetailsComponent.prototype, "suspect", void 0);
    SuspectDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-suspect-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./suspect-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/suspect-details/suspect-details.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./suspect-details.component.css */
      "./src/app/suspect-details/suspect-details.component.css")).default]
    })], SuspectDetailsComponent);
    /***/
  },

  /***/
  "./src/app/temp-dialog/temp-dialog.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/temp-dialog/temp-dialog.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTempDialogTempDialogComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlbXAtZGlhbG9nL3RlbXAtZGlhbG9nLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/temp-dialog/temp-dialog.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/temp-dialog/temp-dialog.component.ts ***!
    \******************************************************/

  /*! exports provided: TempDialogComponent */

  /***/
  function srcAppTempDialogTempDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TempDialogComponent", function () {
      return TempDialogComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var TempDialogComponent =
    /*#__PURE__*/
    function () {
      function TempDialogComponent(data, dialogRef) {
        var _this27 = this;

        _classCallCheck(this, TempDialogComponent);

        this.data = data;
        this.dialogRef = dialogRef;
        this.yes = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.no = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();

        this.handleBtnYes = function () {
          console.log("yes");

          _this27.yes.emit("yes pressed");
        };

        this.handleBtnNo = function () {
          console.log("no");

          _this27.no.emit("no pressed");
        };
      }

      _createClass(TempDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TempDialogComponent;
    }();

    TempDialogComponent.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], TempDialogComponent.prototype, "yes", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], TempDialogComponent.prototype, "no", void 0);
    TempDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-temp-dialog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./temp-dialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/temp-dialog/temp-dialog.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./temp-dialog.component.css */
      "./src/app/temp-dialog/temp-dialog.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], TempDialogComponent);
    /***/
  },

  /***/
  "./src/app/test/test.component.css":
  /*!*****************************************!*\
    !*** ./src/app/test/test.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppTestTestComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".location-on-map {\r\n    width: 100%;\r\n    height: 300px;\r\n}\r\n\r\n.qrunit-marker {}\r\n\r\n.alert-marker {\r\n    color: red;\r\n    ;\r\n}\r\n\r\n.wrapper {\r\n    display: grid;\r\n    grid-template-columns: 2fr 1fr;\r\n    grid-gap: 10px;\r\n}\r\n\r\n.search-suggestions-holder {\r\n    list-style: none;\r\n    display: block;\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 1px solid #666;\r\n}\r\n\r\n.search-suggestion {\r\n    cursor: pointer;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #666;\r\n}\r\n\r\n.search-suggestion:hover {\r\n    background: #aaa;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVzdC90ZXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtBQUNqQjs7QUFFQSxnQkFBZ0I7O0FBRWhCO0lBQ0ksVUFBVTs7QUFFZDs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3Rlc3QvdGVzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvY2F0aW9uLW9uLW1hcCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbn1cclxuXHJcbi5xcnVuaXQtbWFya2VyIHt9XHJcblxyXG4uYWxlcnQtbWFya2VyIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICA7XHJcbn1cclxuXHJcbi53cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XHJcbiAgICBncmlkLWdhcDogMTBweDtcclxufVxyXG5cclxuLnNlYXJjaC1zdWdnZXN0aW9ucy1ob2xkZXIge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM2NjY7XHJcbn1cclxuXHJcbi5zZWFyY2gtc3VnZ2VzdGlvbiB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzY2NjtcclxufVxyXG5cclxuLnNlYXJjaC1zdWdnZXN0aW9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNhYWE7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/test/test.component.ts":
  /*!****************************************!*\
    !*** ./src/app/test/test.component.ts ***!
    \****************************************/

  /*! exports provided: TestComponent */

  /***/
  function srcAppTestTestComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestComponent", function () {
      return TestComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _firebasedatabase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../firebasedatabase.service */
    "./src/app/firebasedatabase.service.ts");
    /* harmony import */


    var _authoritative_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../authoritative.service */
    "./src/app/authoritative.service.ts");
    /* harmony import */


    var _tplapi_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../tplapi.service */
    "./src/app/tplapi.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _toaster_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../toaster.service */
    "./src/app/toaster.service.ts");

    var TestComponent =
    /*#__PURE__*/
    function () {
      function TestComponent(fbdbs, apService, tplapi, router, toaster) {
        var _this28 = this;

        _classCallCheck(this, TestComponent);

        this.fbdbs = fbdbs;
        this.apService = apService;
        this.tplapi = tplapi;
        this.router = router;
        this.toaster = toaster;

        this.viewLiveFeed = function (camera) {
          console.log('working');

          _this28.router.navigate(["authoritative/live/" + camera._id]);
        };

        this.viewAlert = function (alert) {
          console.log('working');

          _this28.router.navigate(["authoritative/alert/" + alert._id]);
        }; //searching


        this.search = {
          query: "",
          results: []
        };
        this.searchResults = [];

        this.searchLocation = function (query) {
          if (query == "") _this28.search.results = [];else {
            console.log(query);

            _this28.apService.mSearchLocation(query).subscribe(function (data) {
              console.log(data);

              if (data.err) {
                _this28.toaster.err(data.err.message);
              } else {
                _this28.search.results = data.locations.results;
              }
            }, function (err) {
              console.log(err);
            });
          }
        };

        this.moveMapOver = function (loc) {
          _this28.comsats.latitude = loc.lat;
          _this28.comsats.longitude = loc.lng;
          _this28.search.query = "";
          _this28.search.results = [];
        };

        this.showQRUnit = function (_id) {
          console.log(_id);

          for (var i = 0; i < _this28.qrunits.length; i++) {
            if (_this28.qrunits[i]._id == _id) {
              console.log("found");
              var qrunit = _this28.qrunits[i];
              _this28.comsats.latitude = qrunit.latitude;
              _this28.comsats.longitude = qrunit.longitude;
              break;
            }
          }
        };

        this.showUnitOnMap = function (_id, _list) {
          console.log(_id);

          for (var i = 0; i < _list.length; i++) {
            if (_list[i]._id == _id) {
              console.log("found");
              var x = _list[i];
              console.log(x.latitude, x.longitude);
              _this28.comsats.latitude = parseFloat(x.latitude);
              _this28.comsats.longitude = parseFloat(x.longitude);
              break;
            }
          }
        };

        this.filter = {
          cameras: true,
          servers: true,
          qrunits: true,
          alerts: true,
          paths: true
        };
        this.filter_keys = [];
        this.showRealTimeOperations = true;
        this.comsats = {
          zoom: 16,
          longitude: 73.156456,
          latitude: 33.651592
        };
        this.scaledSize = {
          width: 30,
          height: 30
        };
        this.labelOrigin = {
          x: 10,
          y: 40
        };
        this.vehicle_icon = {
          url: "./assets/images/map-icons/police.svg",
          scaledSize: this.scaledSize,
          labelOrigin: this.labelOrigin
        };
        this.camera_icon = {
          url: "./assets/images/map-icons/cctv.svg",
          // url: '<ion-icon name="airplane"></ion-icon>',
          scaledSize: this.scaledSize,
          labelOrigin: this.labelOrigin
        };
        this.server_icon = {
          url: "./assets/images/map-icons/database.svg",
          scaledSize: this.scaledSize,
          labelOrigin: this.labelOrigin
        };
        this.alert_icon = {
          url: "./assets/images/map-icons/warning.svg",
          scaledSize: this.scaledSize,
          labelOrigin: this.labelOrigin
        };
        this.paths = {};
        this.tpl = {};
        this.tpl_keys = [];

        this.generatePaths = function () {
          _this28.paths = {};

          for (var i = 0; i < _this28.alerts.length; i++) {
            var alert = _this28.alerts[i];
            var suspectId = alert.suspectId._id;

            var _ids = Object.keys(_this28.paths);

            var p = {
              lat: parseFloat(alert.latitude),
              lng: parseFloat(alert.longitude)
            };

            if (_ids.indexOf(suspectId) > -1) {
              _this28.paths[suspectId].push(p);
            } else {
              _this28.paths[suspectId] = [p];
            }
          } // console.log(this.paths)


          _this28.paths_keys = Object.keys(_this28.paths);

          _this28.paths_keys.forEach(function (k) {
            var suspectId = k;
            var path = _this28.paths[k];

            _this28.tplapi.getRoute(path).subscribe(function (data) {
              if (data.err || data.error) {
                _this28.toaster.err(data.err);
              } else {
                // this.tpl.push(data.p[0].p)
                // console.log(data.p[0].p)
                // this.servers = data.servers
                _this28.tpl[suspectId] = data.p[0].p;
                _this28.tpl_keys = Object.keys(_this28.tpl);
              }
            }, function (err) {
              console.log(err);
            });
          });

          _this28.generateOnGoingOperationsPaths();
        };
        /*
        check all alerts
        if an alert is on-going draw a path from the qrunit's location (handler) to alert's location (being handled!)
        */


        this.onGoingOperationsPaths = {};
        this.onGoingOperationsPaths_keys = [];

        this.generateOnGoingOperationsPaths = function () {
          if (_this28.alerts == null) return;
          console.log("generating ongoing operations");

          _this28.alerts.forEach(function (alert) {
            if (alert.qrunit) {
              //alert has been assigned to this qrunit
              if (!alert.closed_alert) {
                console.log("ongoing alert: " + alert._id); //alert has not been closed yet!
                //draw route from qrunit's location to alert's location
                //get qrunit

                var qrunit = null;

                if (_this28.qrunits != null) {
                  _this28.qrunits.forEach(function (unit) {
                    console.log(unit, qrunit, alert);

                    if (unit._id == alert.qrunit._id) {
                      qrunit = unit;
                    }
                  });
                }

                if (qrunit != null) {
                  console.log("ongoing alert: ", alert, ", qrunit: ", qrunit);
                  var path = [];
                  path.push({
                    lat: qrunit.latitude,
                    lng: qrunit.longitude
                  });
                  path.push({
                    lat: alert.latitude,
                    lng: alert.longitude
                  });

                  _this28.tplapi.getRoute(path).subscribe(function (data) {
                    if (data.err || data.error) {
                      _this28.toaster.err(data.err || data.error);
                    } else {
                      var route = data.p[0].p; //update or new entry

                      _this28.onGoingOperationsPaths[alert._id] = route;
                      _this28.onGoingOperationsPaths_keys = Object.keys(_this28.onGoingOperationsPaths);
                    }
                  }, function (err) {
                    console.log(err);
                  });
                }
              } else {
                //alert has been closed!
                //change icon to something friendly!
                delete _this28.onGoingOperationsPaths[alert._id];
                _this28.onGoingOperationsPaths_keys = Object.keys(_this28.onGoingOperationsPaths);
              }
            }
          });
        };

        this.loadDataFromServer = function () {
          _this28.apService.mGetCameras().subscribe(function (data) {
            if (data.err) {
              _this28.toaster.err(data.err);
            } else {
              _this28.cameras = data.cameras;
            }
          }, function (err) {
            console.log(err);
          });

          _this28.apService.mGetServers().subscribe(function (data) {
            if (data.err) {
              _this28.toaster.err(data.err);
            } else {
              _this28.servers = data.servers;
            }
          }, function (err) {
            console.log(err);
          });

          _this28.getAlertsFromServer();

          _this28.apService.mGetQRUnits().subscribe(function (data) {
            if (data.err) {
              _this28.toaster.err(data.err);
            } else {
              _this28.qrunits = data.qrunits;

              _this28.getFirebaseUpdates();
            }
          }, function (err) {
            console.log(err);
          });
        };

        this.getAlertsFromServer = function () {
          _this28.apService.mGetAlerts().subscribe(function (data) {
            if (data.err) {
              _this28.toaster.err(data.err);
            } else {
              _this28.alerts = data.alerts;

              for (var i = 0; i < _this28.alerts.length; i++) {
                var alert = _this28.alerts[i];
                /*
                alert.icon = {
                  url: alert.suspectId.pictures[0],
                  scaledSize: this.scaledSize,
                  labelOrigin: this.labelOrigin
                }
                */

                alert.icon = _this28.alert_icon;
              }

              _this28.generatePaths();
            }
          }, function (err) {
            console.log(err);
          });
        };

        this.getFirebaseUpdates = function () {
          _this28.fbdbs.getQRUnits().subscribe(function (items) {
            _this28.items = [];
            Object.keys(items).map(function (_id) {
              var item = items[_id];
              item._id = _id;

              _this28.items.push(item); //update qrunit locations


              for (var i = 0; i < _this28.qrunits.length; i++) {
                var qrunit = _this28.qrunits[i];

                if (qrunit._id == _id) {
                  qrunit.longitude = item.longitude;
                  qrunit.latitude = item.latitude;
                  _this28.qrunits[i] = qrunit;
                  break;
                }
              }
            });

            _this28.getAlertsFromServer();
          });

          _this28.fbdbs.getAlerts().subscribe(function (items) {
            _this28.getAlertsFromServer();
          });
          /*
          setInterval(() => {
            this.getAlertsFromServer()
          }, 10000)
          */

        };
      }

      _createClass(TestComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.filter_keys = Object.keys(this.filter);
          console.log(this.filter_keys);
          this.loadDataFromServer();
        }
      }]);

      return TestComponent;
    }();

    TestComponent.ctorParameters = function () {
      return [{
        type: _firebasedatabase_service__WEBPACK_IMPORTED_MODULE_2__["FirebasedatabaseService"]
      }, {
        type: _authoritative_service__WEBPACK_IMPORTED_MODULE_3__["AuthoritativeService"]
      }, {
        type: _tplapi_service__WEBPACK_IMPORTED_MODULE_4__["TplapiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _toaster_service__WEBPACK_IMPORTED_MODULE_6__["ToasterService"]
      }];
    };

    TestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-test',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./test.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/test/test.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./test.component.css */
      "./src/app/test/test.component.css")).default]
    })], TestComponent);
    /***/
  },

  /***/
  "./src/app/tests-only/tests-only.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/tests-only/tests-only.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTestsOnlyTestsOnlyComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3RzLW9ubHkvdGVzdHMtb25seS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/tests-only/tests-only.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/tests-only/tests-only.component.ts ***!
    \****************************************************/

  /*! exports provided: TestsOnlyComponent */

  /***/
  function srcAppTestsOnlyTestsOnlyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestsOnlyComponent", function () {
      return TestsOnlyComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _temp_dialog_temp_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../temp-dialog/temp-dialog.component */
    "./src/app/temp-dialog/temp-dialog.component.ts");
    /* harmony import */


    var _toaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../toaster.service */
    "./src/app/toaster.service.ts");

    var TestsOnlyComponent =
    /*#__PURE__*/
    function () {
      function TestsOnlyComponent(dialog, toaster) {
        _classCallCheck(this, TestsOnlyComponent);

        this.dialog = dialog;
        this.toaster = toaster;
        this.location = {};
      }

      _createClass(TestsOnlyComponent, [{
        key: "open",
        value: function open() {
          var _this29 = this;

          var d = {
            btnNo: "Delete",
            btnYes: "View",
            description: "You selected an image, what you do want to do with it?",
            title: "Image selected!"
          };
          var dia = this.dialog.open(_temp_dialog_temp_dialog_component__WEBPACK_IMPORTED_MODULE_3__["TempDialogComponent"], {
            data: d
          });
          dia.componentInstance.no.subscribe(function (x) {
            _this29.toaster.err(x);

            dia.close();
          });
          dia.componentInstance.yes.subscribe(function (x) {
            _this29.toaster.succ(x);

            dia.close();
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TestsOnlyComponent;
    }();

    TestsOnlyComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }, {
        type: _toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"]
      }];
    };

    TestsOnlyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tests-only',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tests-only.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tests-only/tests-only.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tests-only.component.css */
      "./src/app/tests-only/tests-only.component.css")).default]
    })], TestsOnlyComponent);
    /***/
  },

  /***/
  "./src/app/toaster.service.ts":
  /*!************************************!*\
    !*** ./src/app/toaster.service.ts ***!
    \************************************/

  /*! exports provided: ToasterService */

  /***/
  function srcAppToasterServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToasterService", function () {
      return ToasterService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    var ToasterService = function ToasterService(toastr) {
      var _this30 = this;

      _classCallCheck(this, ToasterService);

      this.toastr = toastr;

      this.err = function (msg) {
        if (msg.message) msg = msg.message;

        _this30.toastr.error(msg, "Error");
      };

      this.succ = function (msg) {
        if (msg.message) msg = msg.message;

        _this30.toastr.success(msg, "Success");
      };

      this.info = function (msg) {
        if (msg.message) msg = msg.message;

        _this30.toastr.info(msg, "Information");
      };
    };

    ToasterService.ctorParameters = function () {
      return [{
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]
      }];
    };

    ToasterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ToasterService);
    /***/
  },

  /***/
  "./src/app/tplapi.service.ts":
  /*!***********************************!*\
    !*** ./src/app/tplapi.service.ts ***!
    \***********************************/

  /*! exports provided: TplapiService */

  /***/
  function srcAppTplapiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TplapiService", function () {
      return TplapiService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
    };
    var url = "http://api.tplmaps.com:8888/";

    var TplapiService = function TplapiService(http) {
      var _this31 = this;

      _classCallCheck(this, TplapiService);

      this.http = http;

      this.getRoute = function (points) {
        var ps = "";

        for (var i = 0; i < points.length; i++) {
          var p = points[i];
          var s = p.lat + "," + p.lng + ";";
          ps += s;
        }

        var u = url + "route?points=" + ps + "&reroute=false&pointsencoded=false&apikey=$2a$10$EAVaIVvXe3gESbS8skWZZe4vpCIazE7q5sDUpL3P1HgyTS5wD8Y8q";
        console.log(u);
        return _this31.http.get(u);
      };
    };

    TplapiService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    TplapiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], TplapiService);
    /***/
  },

  /***/
  "./src/app/view-alert/view-alert.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/view-alert/view-alert.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppViewAlertViewAlertComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".alert-holder {\r\n    display: grid;\r\n    grid-template-columns: 2fr 1fr;\r\n    grid-gap: 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy1hbGVydC92aWV3LWFsZXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC92aWV3LWFsZXJ0L3ZpZXctYWxlcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbGVydC1ob2xkZXIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmcjtcclxuICAgIGdyaWQtZ2FwOiAyMHB4O1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/view-alert/view-alert.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/view-alert/view-alert.component.ts ***!
    \****************************************************/

  /*! exports provided: ViewAlertComponent */

  /***/
  function srcAppViewAlertViewAlertComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewAlertComponent", function () {
      return ViewAlertComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _authoritative_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../authoritative.service */
    "./src/app/authoritative.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _toaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../toaster.service */
    "./src/app/toaster.service.ts");

    var ViewAlertComponent =
    /*#__PURE__*/
    function () {
      function ViewAlertComponent(apService, activatedRoute, toaster) {
        _classCallCheck(this, ViewAlertComponent);

        this.apService = apService;
        this.activatedRoute = activatedRoute;
        this.toaster = toaster;
        this.alertId = "";
        this.alert = {};
      }

      _createClass(ViewAlertComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this32 = this;

          this.alertId = this.activatedRoute.snapshot.paramMap.get("alertId");
          this.apService.getAlert(this.alertId).subscribe(function (data) {
            if (data.err) {
              _this32.toaster.err(data.err.message);
            } else if (data.succ || !data.err) {
              console.log(data);
              _this32.alert = data.alert;
            }
          }, function (err) {
            _this32.toaster.err(err);
          }, function () {});
        }
      }]);

      return ViewAlertComponent;
    }();

    ViewAlertComponent.ctorParameters = function () {
      return [{
        type: _authoritative_service__WEBPACK_IMPORTED_MODULE_2__["AuthoritativeService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"]
      }];
    };

    ViewAlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-view-alert',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./view-alert.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/view-alert/view-alert.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./view-alert.component.css */
      "./src/app/view-alert/view-alert.component.css")).default]
    })], ViewAlertComponent);
    /***/
  },

  /***/
  "./src/app/view-camera/view-camera.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/view-camera/view-camera.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppViewCameraViewCameraComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".frame {\r\n    display: grid;\r\n    grid-template-columns: 2fr 1fr;\r\n    grid-template-rows: 1fr 1fr;\r\n    grid-gap: 10px;\r\n}\r\n\r\n.frame .live-footage {\r\n    grid-row: 1 / 3;\r\n}\r\n\r\n.frame .location-on-map {\r\n    grid-column: 2;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.frame .aapc {\r\n    grid-column: 1;\r\n    grid-row: 3;\r\n}\r\n\r\n.frame .camera-details {\r\n    grid-column: 2;\r\n}\r\n\r\n.camera-details>div {\r\n    display: grid;\r\n    grid-template-columns: 1fr 2fr;\r\n    grid-gap: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy1jYW1lcmEvdmlldy1jYW1lcmEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsMkJBQTJCO0lBQzNCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC92aWV3LWNhbWVyYS92aWV3LWNhbWVyYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZyYW1lIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XHJcbiAgICBncmlkLWdhcDogMTBweDtcclxufVxyXG5cclxuLmZyYW1lIC5saXZlLWZvb3RhZ2Uge1xyXG4gICAgZ3JpZC1yb3c6IDEgLyAzO1xyXG59XHJcblxyXG4uZnJhbWUgLmxvY2F0aW9uLW9uLW1hcCB7XHJcbiAgICBncmlkLWNvbHVtbjogMjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uZnJhbWUgLmFhcGMge1xyXG4gICAgZ3JpZC1jb2x1bW46IDE7XHJcbiAgICBncmlkLXJvdzogMztcclxufVxyXG5cclxuLmZyYW1lIC5jYW1lcmEtZGV0YWlscyB7XHJcbiAgICBncmlkLWNvbHVtbjogMjtcclxufVxyXG5cclxuLmNhbWVyYS1kZXRhaWxzPmRpdiB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xyXG4gICAgZ3JpZC1nYXA6IDEwcHg7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/view-camera/view-camera.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/view-camera/view-camera.component.ts ***!
    \******************************************************/

  /*! exports provided: ViewCameraComponent */

  /***/
  function srcAppViewCameraViewCameraComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewCameraComponent", function () {
      return ViewCameraComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../admin.service */
    "./src/app/admin.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _toaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../toaster.service */
    "./src/app/toaster.service.ts");

    var ViewCameraComponent =
    /*#__PURE__*/
    function () {
      function ViewCameraComponent(adminService, activatedRoute, toaster, router) {
        var _this33 = this;

        _classCallCheck(this, ViewCameraComponent);

        this.adminService = adminService;
        this.activatedRoute = activatedRoute;
        this.toaster = toaster;
        this.router = router; //checking video streams urls

        this.validCameraVideoUrl = true;
        this.validServerVideoUrl = true;
        this.videoOrigin = 'camera';
        this.servers = [];

        this.choseThisLocation = function (event) {
          _this33.camera.latitude = event.coords.lat;
          _this33.camera.longitude = event.coords.lng;
        };

        this.updateCamera = function () {
          _this33.adminService.updateCamera(_this33.cameraId, _this33.camera).subscribe(function (data) {
            if (data.err) {
              _this33.toaster.err(data.err.message);
            } else if (data.succ) {
              _this33.toaster.succ(data.succ.message);
            }
          }, function (err) {
            _this33.toaster.err(err);
          }, function () {});
        };

        this.deleteCamera = function () {
          _this33.adminService.deleteCamera(_this33.cameraId).subscribe(function (data) {
            if (data.err) {
              _this33.toaster.err(data.err.message);
            } else if (data.succ) {
              _this33.toaster.succ(data.succ.message);

              _this33.router.navigate(["admin/home"]);
            }
          }, function (err) {
            _this33.toaster.err(err);
          }, function () {});
        };
      }

      _createClass(ViewCameraComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this34 = this;

          this.cameraId = this.activatedRoute.snapshot.paramMap.get("cameraId");
          this.adminService.getServers().subscribe(function (data) {
            if (data.err) {
              _this34.toaster.err(data.err.message);
            } else if (data.succ || !data.err) {
              console.log(data);
              _this34.servers = data.servers;
            }
          }, function (err) {
            _this34.toaster.err(err);
          }, function () {});
          this.adminService.getCamera(this.cameraId).subscribe(function (data) {
            if (data.err) {
              _this34.toaster.err(data.err.message);
            } else if (data.succ || !data.err) {
              console.log(data);
              _this34.camera = data.camera;
              if (data.server) _this34.server = data.server;
            }
          }, function (err) {
            _this34.toaster.err(err);
          }, function () {});
        }
      }]);

      return ViewCameraComponent;
    }();

    ViewCameraComponent.ctorParameters = function () {
      return [{
        type: _admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    ViewCameraComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-view-camera',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./view-camera.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/view-camera/view-camera.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./view-camera.component.css */
      "./src/app/view-camera/view-camera.component.css")).default]
    })], ViewCameraComponent);
    /***/
  },

  /***/
  "./src/app/view-live-feed/view-live-feed.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/view-live-feed/view-live-feed.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppViewLiveFeedViewLiveFeedComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".frame {\r\n    display: grid;\r\n    grid-template-columns: 2fr 1fr;\r\n    grid-template-rows: 1fr 1fr;\r\n    grid-gap: 10px;\r\n}\r\n\r\n.frame .live-footage {\r\n    grid-row: 1 / 3;\r\n}\r\n\r\n.frame .location-on-map {\r\n    grid-column: 2;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.frame .camera-details {\r\n    grid-column: 2;\r\n}\r\n\r\n.camera-details>div {\r\n    display: grid;\r\n    grid-template-columns: 1fr 2fr;\r\n    grid-gap: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy1saXZlLWZlZWQvdmlldy1saXZlLWZlZWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsMkJBQTJCO0lBQzNCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXctbGl2ZS1mZWVkL3ZpZXctbGl2ZS1mZWVkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnJhbWUge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcclxuICAgIGdyaWQtZ2FwOiAxMHB4O1xyXG59XHJcblxyXG4uZnJhbWUgLmxpdmUtZm9vdGFnZSB7XHJcbiAgICBncmlkLXJvdzogMSAvIDM7XHJcbn1cclxuXHJcbi5mcmFtZSAubG9jYXRpb24tb24tbWFwIHtcclxuICAgIGdyaWQtY29sdW1uOiAyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5mcmFtZSAuY2FtZXJhLWRldGFpbHMge1xyXG4gICAgZ3JpZC1jb2x1bW46IDI7XHJcbn1cclxuXHJcbi5jYW1lcmEtZGV0YWlscz5kaXYge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcclxuICAgIGdyaWQtZ2FwOiAxMHB4O1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/view-live-feed/view-live-feed.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/view-live-feed/view-live-feed.component.ts ***!
    \************************************************************/

  /*! exports provided: ViewLiveFeedComponent */

  /***/
  function srcAppViewLiveFeedViewLiveFeedComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewLiveFeedComponent", function () {
      return ViewLiveFeedComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _authoritative_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../authoritative.service */
    "./src/app/authoritative.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _toaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../toaster.service */
    "./src/app/toaster.service.ts");

    var ViewLiveFeedComponent =
    /*#__PURE__*/
    function () {
      function ViewLiveFeedComponent(apService, activatedRoute, toaster) {
        _classCallCheck(this, ViewLiveFeedComponent);

        this.apService = apService;
        this.activatedRoute = activatedRoute;
        this.toaster = toaster; //checking video streams urls

        this.validCameraVideoUrl = true;
        this.validServerVideoUrl = true;
        this.videoOrigin = 'camera';
        this.servers = [];
      }

      _createClass(ViewLiveFeedComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this35 = this;

          this.cameraId = this.activatedRoute.snapshot.paramMap.get("cameraId");
          this.apService.getCamera(this.cameraId).subscribe(function (data) {
            if (data.err) {
              _this35.toaster.err(data.err.message);
            } else if (data.succ || !data.err) {
              console.log(data);
              _this35.camera = data.camera;
              if (data.server) _this35.server = data.server;
            }
          }, function (err) {
            _this35.toaster.err(err);
          }, function () {});
        }
      }]);

      return ViewLiveFeedComponent;
    }();

    ViewLiveFeedComponent.ctorParameters = function () {
      return [{
        type: _authoritative_service__WEBPACK_IMPORTED_MODULE_2__["AuthoritativeService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"]
      }];
    };

    ViewLiveFeedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-view-live-feed',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./view-live-feed.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/view-live-feed/view-live-feed.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./view-live-feed.component.css */
      "./src/app/view-live-feed/view-live-feed.component.css")).default]
    })], ViewLiveFeedComponent);
    /***/
  },

  /***/
  "./src/app/view-server/view-server.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/view-server/view-server.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppViewServerViewServerComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".frame {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    grid-template-rows: 1fr 1fr;\r\n    grid-gap: 10px;\r\n}\r\n\r\n.frame .cameras-holder {\r\n    grid-row: 2;\r\n    grid-column: 1 / 3;\r\n}\r\n\r\n.frame .location-on-map {\r\n    grid-column: 2;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.frame .camera-details {\r\n    grid-column: 1;\r\n}\r\n\r\n.camera-details>div {\r\n    display: grid;\r\n    grid-template-columns: 1fr 2fr;\r\n    grid-gap: 10px;\r\n}\r\n\r\n.cameras {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n    grid-gap: 30px;\r\n    ;\r\n}\r\n\r\n.camera {\r\n    cursor: pointer;\r\n    padding: 5px;\r\n    box-shadow: 0 0 10px #aaa;\r\n    ;\r\n    border-radius: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy1zZXJ2ZXIvdmlldy1zZXJ2ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsMkJBQTJCO0lBQzNCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsY0FBYzs7QUFFbEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLHlCQUF5Qjs7SUFFekIsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvdmlldy1zZXJ2ZXIvdmlldy1zZXJ2ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mcmFtZSB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xyXG4gICAgZ3JpZC1nYXA6IDEwcHg7XHJcbn1cclxuXHJcbi5mcmFtZSAuY2FtZXJhcy1ob2xkZXIge1xyXG4gICAgZ3JpZC1yb3c6IDI7XHJcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XHJcbn1cclxuXHJcbi5mcmFtZSAubG9jYXRpb24tb24tbWFwIHtcclxuICAgIGdyaWQtY29sdW1uOiAyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5mcmFtZSAuY2FtZXJhLWRldGFpbHMge1xyXG4gICAgZ3JpZC1jb2x1bW46IDE7XHJcbn1cclxuXHJcbi5jYW1lcmEtZGV0YWlscz5kaXYge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcclxuICAgIGdyaWQtZ2FwOiAxMHB4O1xyXG59XHJcblxyXG4uY2FtZXJhcyB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcclxuICAgIGdyaWQtZ2FwOiAzMHB4O1xyXG4gICAgO1xyXG59XHJcblxyXG4uY2FtZXJhIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4ICNhYWE7XHJcbiAgICA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/view-server/view-server.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/view-server/view-server.component.ts ***!
    \******************************************************/

  /*! exports provided: ViewServerComponent */

  /***/
  function srcAppViewServerViewServerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewServerComponent", function () {
      return ViewServerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../admin.service */
    "./src/app/admin.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _toaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../toaster.service */
    "./src/app/toaster.service.ts");

    var ViewServerComponent =
    /*#__PURE__*/
    function () {
      function ViewServerComponent(adminService, activatedRoute, toaster) {
        var _this36 = this;

        _classCallCheck(this, ViewServerComponent);

        this.adminService = adminService;
        this.activatedRoute = activatedRoute;
        this.toaster = toaster;
        this.server = {
          _id: "",
          longitude: 0,
          latitude: 0,
          url: "",
          name: "",
          cameras: []
        };

        this.choseThisLocation = function (event) {
          _this36.server.latitude = event.coords.lat;
          _this36.server.longitude = event.coords.lng;
        };

        this.updateServer = function () {
          _this36.adminService.updateServer(_this36.serverId, _this36.server).subscribe(function (data) {
            if (data.err) {
              _this36.toaster.err(data.err.message);
            } else if (data.succ) {
              _this36.toaster.succ(data.succ.message);
            }
          }, function (err) {
            _this36.toaster.err(err);
          }, function () {});
        };

        this.deleteServer = function () {
          _this36.adminService.deleteServer(_this36.serverId).subscribe(function (data) {
            if (data.err) {
              _this36.toaster.err(data.err.message);
            } else if (data.succ) {
              _this36.toaster.succ(data.succ.message);
            }
          }, function (err) {
            _this36.toaster.err(err);
          }, function () {});
        };
      }

      _createClass(ViewServerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this37 = this;

          this.serverId = this.activatedRoute.snapshot.paramMap.get("serverId");
          this.adminService.getServer(this.serverId).subscribe(function (data) {
            if (data.err) {
              _this37.toaster.err(data.err.message);
            } else if (data.succ || !data.err) {
              console.log(data);
              _this37.server = data.server;
            }
          }, function (err) {
            _this37.toaster.err(err);
          }, function () {});
        }
      }]);

      return ViewServerComponent;
    }();

    ViewServerComponent.ctorParameters = function () {
      return [{
        type: _admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"]
      }];
    };

    ViewServerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-view-server',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./view-server.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/view-server/view-server.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./view-server.component.css */
      "./src/app/view-server/view-server.component.css")).default]
    })], ViewServerComponent);
    /***/
  },

  /***/
  "./src/app/view-suspect/view-suspect.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/view-suspect/view-suspect.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppViewSuspectViewSuspectComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".frame {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    grid-gap: 10px;\r\n}\r\n\r\n.frame .suspect-details {}\r\n\r\n.suspect-details>div {\r\n    display: grid;\r\n    grid-template-columns: 1fr 2fr;\r\n    grid-gap: 10px;\r\n}\r\n\r\nagm-map {\r\n    height: 400px;\r\n}\r\n\r\n.map {\r\n    grid-column: 1 /3;\r\n}\r\n\r\n.all-images {\r\n    display: -webkit-box;\r\n    display: flex;\r\n}\r\n\r\n.all-images>div {\r\n    width: 100px;\r\n    margin-right: 20px;\r\n    border-radius: 50%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy1zdXNwZWN0L3ZpZXctc3VzcGVjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixjQUFjO0FBQ2xCOztBQUVBLHlCQUF5Qjs7QUFFekI7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC92aWV3LXN1c3BlY3Qvdmlldy1zdXNwZWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnJhbWUge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICAgIGdyaWQtZ2FwOiAxMHB4O1xyXG59XHJcblxyXG4uZnJhbWUgLnN1c3BlY3QtZGV0YWlscyB7fVxyXG5cclxuLnN1c3BlY3QtZGV0YWlscz5kaXYge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcclxuICAgIGdyaWQtZ2FwOiAxMHB4O1xyXG59XHJcblxyXG5hZ20tbWFwIHtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbn1cclxuXHJcbi5tYXAge1xyXG4gICAgZ3JpZC1jb2x1bW46IDEgLzM7XHJcbn1cclxuXHJcbi5hbGwtaW1hZ2VzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5hbGwtaW1hZ2VzPmRpdiB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/view-suspect/view-suspect.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/view-suspect/view-suspect.component.ts ***!
    \********************************************************/

  /*! exports provided: ViewSuspectComponent */

  /***/
  function srcAppViewSuspectViewSuspectComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewSuspectComponent", function () {
      return ViewSuspectComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _authoritative_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../authoritative.service */
    "./src/app/authoritative.service.ts");
    /* harmony import */


    var ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ng2-file-upload */
    "./node_modules/ng2-file-upload/fesm2015/ng2-file-upload.js");
    /* harmony import */


    var _tplapi_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../tplapi.service */
    "./src/app/tplapi.service.ts");
    /* harmony import */


    var _toaster_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../toaster.service */
    "./src/app/toaster.service.ts");
    /* harmony import */


    var _temp_dialog_temp_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../temp-dialog/temp-dialog.component */
    "./src/app/temp-dialog/temp-dialog.component.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var ViewSuspectComponent =
    /*#__PURE__*/
    function () {
      function ViewSuspectComponent(authoritativeService, activatedRoute, tplapi, toaster, router, dialog) {
        var _this38 = this;

        _classCallCheck(this, ViewSuspectComponent);

        this.authoritativeService = authoritativeService;
        this.activatedRoute = activatedRoute;
        this.tplapi = tplapi;
        this.toaster = toaster;
        this.router = router;
        this.dialog = dialog; //dialog

        this.clickOnImage = function (url) {
          var d = {
            btnNo: "Delete",
            btnYes: "View",
            description: "You selected an image, what you do want to do with it?",
            title: "Image selected!"
          };

          var dia = _this38.dialog.open(_temp_dialog_temp_dialog_component__WEBPACK_IMPORTED_MODULE_7__["TempDialogComponent"], {
            data: d
          });

          dia.componentInstance.no.subscribe(function (x) {
            _this38.toaster.info("Deleting image!");

            var index = _this38.suspect.pictures.indexOf(url);

            if (index > -1) {
              _this38.suspect.pictures.splice(index, 1);

              _this38.updateSuspect();
            }

            dia.close();
          });
          dia.componentInstance.yes.subscribe(function (x) {
            _this38.toaster.succ(x);

            window.open(url, '_blank' // <- This is what makes it open in a new window.
            );
            dia.close();
          });
        };

        this.viewAlert = function (alert) {
          console.log('working');

          _this38.router.navigate(["authoritative/alert/" + alert._id]);
        }; //for map


        this.alerts = [];
        this.scaledSize = {
          width: 30,
          height: 30
        };
        this.comsats = {
          zoom: 16,
          longitude: 73.156456,
          latitude: 33.651592
        };
        this.paths = {};
        this.tpl = [];

        this.generatePaths = function () {
          for (var i = 0; i < _this38.alerts.length; i++) {
            var alert = _this38.alerts[i];
            var suspectId = alert.suspectId._id;

            var _ids = Object.keys(_this38.paths);

            var p = {
              lat: parseFloat(alert.latitude),
              lng: parseFloat(alert.longitude)
            };

            if (_ids.indexOf(suspectId) > -1) {
              _this38.paths[suspectId].push(p);
            } else {
              _this38.paths[suspectId] = [p];
            }
          } // console.log(this.paths)


          _this38.paths_keys = Object.keys(_this38.paths);
          _this38.tpl = [];

          _this38.paths_keys.forEach(function (k) {
            var path = _this38.paths[k];

            _this38.tplapi.getRoute(path).subscribe(function (data) {
              if (data.err || data.error) {
                _this38.toaster.err(data.err || data.error);
              } else {
                _this38.tpl.push(data.p[0].p); // console.log(data.p[0].p)
                // this.servers = data.servers

              }
            }, function (err) {
              console.log(err);
            });
          });
        };

        this.suspect = {
          _id: "",
          fullName: "",
          gender: "",
          pictures: [],
          tags: []
        };

        this.uploadFiles = function () {
          _this38.uploader.uploadAll();

          _this38.toaster.info("pictures are being uploaded");
        };

        this.showUnitOnMap = function (_id, _list) {
          console.log(_id);

          for (var i = 0; i < _list.length; i++) {
            if (_list[i]._id == _id) {
              console.log("found");
              var x = _list[i];
              console.log(x.latitude, x.longitude);
              _this38.comsats.latitude = parseFloat(x.latitude);
              _this38.comsats.longitude = parseFloat(x.longitude);
              break;
            }
          }
        };

        this.deleteSuspect = function () {
          _this38.toaster.info("Deleting suspect! Please wait");

          _this38.authoritativeService.deleteSuspect(_this38.suspectId).subscribe(function (data) {
            if (data.err) {
              _this38.toaster.err(data.err.message);
            } else if (data.succ || !data.err) {
              _this38.toaster.succ(data.succ);

              _this38.router.navigate(["/authoritative/home"]);
            }
          }, function (err) {
            _this38.toaster.err(err);
          }, function () {});
        };

        this.updateSuspect = function () {
          _this38.toaster.info("Updating suspect! Please wait");

          _this38.authoritativeService.updateSuspect(_this38.suspect).subscribe(function (data) {
            if (data.err) {
              _this38.toaster.err(data.err.message);
            } else if (data.succ || !data.err) {
              console.log(data);

              _this38.toaster.succ(data.succ);

              _this38.suspect = data.suspect;
            }
          }, function (err) {
            _this38.toaster.err(err);
          }, function () {});
        };
      } //chipper


      _createClass(ViewSuspectComponent, [{
        key: "updateSuspectTags",
        value: function updateSuspectTags(tags) {
          console.log(tags);
          this.suspect.tags = tags;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this39 = this;

          this.suspectId = this.activatedRoute.snapshot.paramMap.get("suspectId");
          this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__["FileUploader"]({
            url: "https://darts-web-server.herokuapp.com/authoritative/suspects/" + this.suspectId + "/picture",
            method: "PUT",
            itemAlias: "picture"
          });
          this.uploader.response.subscribe(function (data) {
            data = JSON.parse(data);

            if (data.err) {
              _this39.toaster.err(data.err.message);
            } else if (data.succ || !data.err) {
              console.log(data);

              _this39.toaster.succ(data.succ);

              _this39.suspect = data.suspect;

              _this39.suspect.pictures.push(data.frame_url);

              console.log(_this39.suspect);
            }
          }, function (err) {
            _this39.toaster.err(err);
          }, function () {});
          this.authoritativeService.getSuspect(this.suspectId).subscribe(function (data) {
            if (data.err) {
              _this39.toaster.err(data.err.message);
            } else if (data.succ || !data.err) {
              console.log(data);
              _this39.suspect = data.suspect;
            }
          }, function (err) {
            _this39.toaster.err(err);
          }, function () {}); //for map

          this.authoritativeService.getSuspectAlerts(this.suspectId).subscribe(function (data) {
            if (data.err) {
              _this39.toaster.err(data.err.message);
            } else if (data.succ || !data.err) {
              // console.log(data)
              _this39.alerts = data.alerts;

              if (_this39.alerts.length > 0) {
                _this39.comsats.latitude = _this39.alerts[0].latitude;
                _this39.comsats.longitude = _this39.alerts[0].longitude;
              }

              console.log(_this39.alerts[0].latitude, _this39.alerts[0].longitude);

              for (var i = 0; i < _this39.alerts.length; i++) {
                var alert = _this39.alerts[i];
                alert.icon = {
                  url: alert.suspectId.pictures[0],
                  scaledSize: _this39.scaledSize
                };
              }

              _this39.generatePaths();
            }
          }, function (err) {
            _this39.toaster.err(err);
          }, function () {});
        }
      }]);

      return ViewSuspectComponent;
    }();

    ViewSuspectComponent.ctorParameters = function () {
      return [{
        type: _authoritative_service__WEBPACK_IMPORTED_MODULE_3__["AuthoritativeService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _tplapi_service__WEBPACK_IMPORTED_MODULE_5__["TplapiService"]
      }, {
        type: _toaster_service__WEBPACK_IMPORTED_MODULE_6__["ToasterService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]
      }];
    };

    ViewSuspectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-view-suspect',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./view-suspect.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/view-suspect/view-suspect.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./view-suspect.component.css */
      "./src/app/view-suspect/view-suspect.component.css")).default]
    })], ViewSuspectComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      firebaseConfig: {
        apiKey: "AIzaSyBtc_hk_Aamj-hBDpD2s0OyrzEBgbp4KeI",
        authDomain: "fypqrf-b3259.firebaseapp.com",
        databaseURL: "https://fypqrf-b3259.firebaseio.com",
        projectId: "fypqrf-b3259",
        storageBucket: "fypqrf-b3259.appspot.com",
        messagingSenderId: "571613899436",
        appId: "1:571613899436:web:48a1be034b95c3d3cf4d09"
      }
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_5__);

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Shark\Documents\darts-master\darts-master\github\darts-angular-app\src\main.ts */
    "./src/main.ts");
    /***/
  },

  /***/
  1:
  /*!********************!*\
    !*** ws (ignored) ***!
    \********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map