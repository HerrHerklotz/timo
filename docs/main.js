(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<header>\n  <label>Timo</label>\n</header>\n<main>\n  <div *ngFor=\"let eDay of this.mContent | keyvalue\" style=\"text-align:center\">\n    <p (click)=\"this.deleteDatabaseEntry(eDay.key)\">\n      {{eDay.key}}\n    </p>\n    <p *ngFor=\"let eTime of eDay.value\">\n      {{eTime}}\n    </p>\n    <br />\n  </div>\n</main>\n<button (click)=\"this.addDatabaseEntry()\">+</button>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  background-color: #fefefe; }\n  :host header {\n    align-items: center;\n    background-color: #a82d59;\n    box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    padding: 12px;\n    z-index: 1; }\n  :host header > label {\n      color: #ffffff;\n      font-size: 24px;\n      font-weight: bold; }\n  :host main {\n    flex: 1;\n    overflow: auto; }\n  :host main > div p {\n      font-size: 18px;\n      margin: unset; }\n  :host main > div p:first-child {\n        padding: 12px;\n        cursor: pointer;\n        font-weight: bold;\n        background-color: aliceblue; }\n  :host main > div p:not(:first-child) {\n        padding-top: 4px; }\n  :host button {\n    background-color: #3e4041;\n    border: unset;\n    bottom: 24px;\n    position: fixed;\n    right: 24px;\n    border-radius: 50%;\n    width: 48px;\n    height: 48px;\n    color: #ffffff;\n    cursor: pointer;\n    font-size: 24px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxvbGl2ZVxcUHJvamVjdHNcXHRpbW8vc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHlCQUF5QixFQUFBO0VBSjdCO0lBT1EsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixpSEFBcUc7SUFDckcsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLFVBQVUsRUFBQTtFQWRsQjtNQWtCWSxjQUFjO01BQ2QsZUFBZTtNQUNmLGlCQUFpQixFQUFBO0VBcEI3QjtJQTBCUSxPQUFPO0lBQ1AsY0FBYyxFQUFBO0VBM0J0QjtNQStCZ0IsZUFBZTtNQUNmLGFBQWEsRUFBQTtFQWhDN0I7UUFtQ29CLGFBQWE7UUFDYixlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLDJCQUEyQixFQUFBO0VBdEMvQztRQTBDb0IsZ0JBQWdCLEVBQUE7RUExQ3BDO0lBa0RRLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsWUFBWTtJQUNaLGVBQWU7SUFDZixXQUFXO0lBRVgsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osY0FBYztJQUNkLGVBQWU7SUFFZixlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xyXG5cclxuICAgIGhlYWRlciB7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTgyZDU5O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDVweCAtMXB4IHJnYmEoMCwwLDAsLjIpLCAwIDZweCAxMHB4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDFweCAxOHB4IDAgcmdiYSgwLDAsMCwuMTIpO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgcGFkZGluZzogMTJweDtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgXHJcbiAgICBcclxuICAgICAgICAmID4gbGFiZWwge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG1haW4ge1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcblxyXG4gICAgICAgICYgPiBkaXYge1xyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogdW5zZXQ7XHJcblxyXG4gICAgICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA0cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzZTQwNDE7XHJcbiAgICAgICAgYm9yZGVyOiB1bnNldDtcclxuICAgICAgICBib3R0b206IDI0cHg7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHJpZ2h0OiAyNHB4O1xyXG4gICAgXHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIHdpZHRoOiA0OHB4O1xyXG4gICAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!window.indexedDB) {
            window.alert("Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.");
        }
        var request = window.indexedDB.open("TimoDatabase", 1);
        /*request.onerror = (pEvent: Event) => {
          alert(`IndexedDB Error: ${request.errorCode}`);
        };*/
        request.onsuccess = function (pEvent) {
            _this.mDatabase = pEvent.target.result; //pEvent.target.result;
            _this.readDatabase();
        };
        // This event is only implemented in recent browsers   
        request.onupgradeneeded = function (pEvent) {
            // Save the IDBDatabase interface 
            var lDatabase = pEvent.target.result;
            if (lDatabase.objectStoreNames.contains("days")) {
                lDatabase.deleteObjectStore("days");
            }
            // Create an objectStore for this database
            lDatabase.createObjectStore("days");
        };
    };
    AppComponent.prototype.readDatabase = function () {
        var _this = this;
        var lTransaction = this.mDatabase.transaction(['days'], 'readonly');
        var keyRange = IDBKeyRange.lowerBound(0);
        var lCursorRequest = lTransaction.objectStore('days').openCursor(keyRange);
        this.mContent = {};
        lTransaction.oncomplete = function (pEvent) {
            console.info("read completed");
        };
        lCursorRequest.onsuccess = function (pEvent) {
            var lResult = pEvent.target.result;
            if (!!lResult == false) {
                return;
            }
            _this.mContent[lResult.key] = lResult.value;
            lResult.continue();
        };
    };
    AppComponent.prototype.addDatabaseEntry = function () {
        var _this = this;
        function pad(pNumber) {
            return ((pNumber < 10) ? "0" + pNumber : "" + pNumber);
        }
        var transaction = this.mDatabase.transaction(['days'], 'readwrite');
        // Get the datastore.
        var objStore = transaction.objectStore('days');
        // Create a timestamp.
        var timestamp = new Date();
        var day = pad(timestamp.getDate()) + "." + pad(timestamp.getMonth() + 1);
        var time = pad(timestamp.getHours()) + ":" + pad(timestamp.getMinutes());
        if (this.mContent[day]) {
            this.mContent[day].unshift(time);
        }
        else {
            this.mContent[day] = [time];
        }
        // Create the datastore request.
        var request = objStore.put(this.mContent[day], day);
        // Handle a successful datastore put.
        request.onsuccess = function (e) {
            console.info("write completed");
            _this.readDatabase();
        };
        request.onerror = function (pEvent) {
            console.error("Error during write", pEvent);
        };
    };
    AppComponent.prototype.deleteDatabaseEntry = function (pKey) {
        var _this = this;
        var transaction = this.mDatabase.transaction(['days'], 'readwrite');
        var objStore = transaction.objectStore('days');
        var request = objStore.delete(pKey);
        request.onsuccess = function (pEvent) {
            console.info("delete completed");
            _this.readDatabase();
        };
        request.onerror = function (pEvent) {
            console.error("Error during delete", pEvent);
        };
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\olive\Projects\timo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map