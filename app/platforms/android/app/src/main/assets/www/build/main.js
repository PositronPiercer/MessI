webpackJsonp([3],{

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signin_signin__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register__ = __webpack_require__(189);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.check_login();
    }
    LoginPage.prototype.check_login = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                console.log(user);
                _this.navCtrl.pop();
            }
        });
    };
    LoginPage.prototype.signIn = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signin_signin__["a" /* SigninPage */]);
    };
    LoginPage.prototype.register = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"D:\hoehoe\messi\src\pages\login\login.html"*/'\n\n\n<div class="lb">\n<button ion-button icon-start (click)=\'signIn()\'>\n  <ion-icon name="man"></ion-icon>\n  Sign In\n</button>\n<button ion-button icon-start (click)=\'register()\'>\n  <ion-icon name="man"></ion-icon>\n  Register\n</button>\n</div>\n\n\n'/*ion-inline-end:"D:\hoehoe\messi\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SigninPage = /** @class */ (function () {
    function SigninPage(fire, navCtrl, navParams, alertCtrl) {
        this.fire = fire;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    SigninPage.prototype.signIn = function () {
        var _this = this;
        this.fire.auth.signInWithEmailAndPassword(this.email, this.passwd)
            .then(function (data) {
            _this.navCtrl.pop();
        })
            .catch(function (err) {
            _this.showAlert(err);
        });
    };
    SigninPage.prototype.showAlert = function (err) {
        var alert = this.alertCtrl.create({
            title: "Can't log you in",
            subTitle: err,
            buttons: ['My Bad']
        });
        alert.present();
    };
    SigninPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SigninPage');
    };
    SigninPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signin',template:/*ion-inline-start:"D:\hoehoe\messi\src\pages\signin\signin.html"*/'<!--\n  Generated template for the SigninPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Sign In</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-item>\n    <ion-label floating>Enter Email</ion-label>\n    <ion-input type="text" [(ngModel)]="email" #uname></ion-input>\n  </ion-item>\n    <ion-item>\n    <ion-label floating>Enter Password</ion-label>\n    <ion-input type="password" [(ngModel)]="passwd" #pass></ion-input>\n  </ion-item>\n\n<button ion-button color="#84b4ff" full (click)="signIn()">Sign In</button>\n</ion-content>\n'/*ion-inline-end:"D:\hoehoe\messi\src\pages\signin\signin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], SigninPage);
    return SigninPage;
}());

//# sourceMappingURL=signin.js.map

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterPage = /** @class */ (function () {
    function RegisterPage(fire, navCtrl, navParams, alertCtrl) {
        this.fire = fire;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    RegisterPage.prototype.register = function () {
        var _this = this;
        this.fire.auth.createUserWithEmailAndPassword(this.email, this.passwd)
            .then(function (data) {
            _this.fire.auth.signInWithEmailAndPassword(_this.email, _this.passwd);
            _this.showAlert("Successfully Registered", "Welcome");
            _this.navCtrl.pop();
        })
            .catch(function (err) {
            _this.showAlert("Can't sign you up", err);
        });
    };
    RegisterPage.prototype.showAlert = function (title, err) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: err,
            buttons: ['Ok']
        });
        alert.present();
    };
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"D:\hoehoe\messi\src\pages\register\register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="Primary">\n    <ion-title>Register</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-item>\n    <ion-label floating>Enter Email</ion-label>\n    <ion-input type="text" [(ngModel)]="email" #uname></ion-input>\n  </ion-item>\n    <ion-item>\n    <ion-label floating>Enter Password</ion-label>\n    <ion-input type="password" [(ngModel)]="passwd" #pass></ion-input>\n  </ion-item>\n\n<button ion-button color="#84b4ff" full (click)="register()">Register</button>\n</ion-content>\n'/*ion-inline-end:"D:\hoehoe\messi\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 200:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 200;

/***/ }),

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/login.module": [
		788,
		2
	],
	"../pages/register/register.module": [
		789,
		1
	],
	"../pages/signin/signin.module": [
		790,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 245;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return config; });
var config = {
    apiKey: "AIzaSyD63IK5YH8vF-XwibZGU-iEgZ3yZplAyQU",
    authDomain: "mess-f27d6.firebaseapp.com",
    databaseURL: "https://mess-f27d6.firebaseio.com",
    projectId: "mess-f27d6",
    storageBucket: "mess-f27d6.appspot.com",
    messagingSenderId: "1038785139222"
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(401);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\hoehoe\messi\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Book" tabIcon="cafe"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Schedule" tabIcon="clipboard"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"D:\hoehoe\messi\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.minDateOfPicker = new Date().toISOString();
        this.update_my_bookings();
    }
    AboutPage.prototype.update_my_bookings = function () {
        var _this = this;
        console.log('updating bookings');
        __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                var uid = __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser.uid;
                var ref = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("bookings/" + uid);
                ref.on('value', function (snap) {
                    if (snap.exists()) {
                        var books = Object.keys(snap.val());
                        console.log(snap.val(), books);
                        _this.book_1 = snap.val()[books[0]].meal + " at " + snap.val()[books[0]].time;
                        if (books.length > 1) {
                            _this.book_2 = snap.val()[books[1]].meal + " at " + snap.val()[books[1]].time;
                        }
                        console.log("book_1", _this.book_1);
                    }
                    else {
                        _this.book_1 = "No Bookings";
                    }
                });
            }
        });
    };
    AboutPage.prototype.book = function () {
        var cuser = __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser;
        var uid = cuser.uid;
        // console.log(this.meal)
        // console.log(this.dateOfEvent)
        var time = this.dateOfEvent;
        var nextday = new Date();
        var day = new Date();
        nextday.setDate(day.getDate() + 1);
        var ref = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("bookings/" + uid + "/" + nextday);
        ref.set({
            name: cuser.displayName,
            email: cuser.email,
            time: this.dateOfEvent,
            date: nextday,
            meal: this.meal
        });
        this.showAlert(this.dateOfEvent);
        //console.log(food)
    };
    AboutPage.prototype.showAlert = function (time) {
        var alert = this.alertCtrl.create({
            title: 'Your Table has been booked',
            subTitle: 'See you tomorrow at ' + time,
            buttons: ['OK']
        });
        alert.present();
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"D:\hoehoe\messi\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Book your table for tomorrow\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<ion-list>\n\n<ion-item>\n  <ion-label>Timings</ion-label>\n  <ion-datetime displayFormat="hh mm A" pickerFormat="hh mm A" [(ngModel)]="dateOfEvent" #timings></ion-datetime>\n</ion-item>\n\n  <ion-item>\n    <ion-label floating>What would you like to eat?</ion-label>\n    <ion-input type="text" [(ngModel)]="meal" #book_meal></ion-input>\n  </ion-item>\n\n</ion-list>\n<button ion-button color="#84b4ff" full (click)="book()">Book</button>\n\n<!-- my bookings -->\n  <ion-card id="my-bookings">\n  <ion-card-header class="heading">\n    My Bookings\n  </ion-card-header>\n\n  <ion-list id="menu-items">\n    <ion-item class="food_item">\n      {{book_1}}\n    </ion-item>\n    <ion-item class="food_item">\n      {{book_2}}\n    </ion-item>\n\n\n\n\n  </ion-list>\n</ion-card>\n</ion-content>\n'/*ion-inline-end:"D:\hoehoe\messi\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
        console.log('Filling Schedule');
        this.fill_schedule();
    }
    ContactPage.prototype.fill_schedule = function () {
        var _this = this;
        var ref = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("schedule/");
        var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var schedule_html = "";
        var data;
        ref.once('value')
            .then(function (snap) {
            _this.data = snap.val();
            //console.log(snap.val())
            //console.log(this.data)
            var days = Object.keys(_this.data);
            //console.log(days)
            days.forEach(function (day) {
                //console.log(day)
                schedule_html += "<ion-card>";
                schedule_html += "<ion-card-header>" + weekdays[day] + "</ion-card-header><ion-list>";
                _this.only_God_knows_why_i_am_using_this_variable = _this.data[day];
                //console.log(this.only_God_knows_why_i_am_using_this_variable)
                var timings = Object.keys(_this.only_God_knows_why_i_am_using_this_variable);
                //console.log(timings)
                timings.forEach(function (timing) {
                    schedule_html += "<ion-item>" + timing + " : " + _this.data[day][timing] + "</ion-item>";
                });
                schedule_html += "</ion-list></ion-card>";
            });
            //console.log(snap.val())
            _this.menu = schedule_html;
            //console.log(this.menu)
        });
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"D:\hoehoe\messi\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Schedule\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n<ion-card *ngFor="let item of data">\n	<ion-card-header color="primary">{{item.day}}</ion-card-header>\n	<span class="men">\n	<p> <b>Breakfast</b> : {{item.breakfast}}</p>\n	<p> <b>Lunch :</b> {{item.lunch}}</p>\n	<p> <b>Dinner :</b> {{item.dinner}}</p>\n</span>\n\n</ion-card>\n</ion-content>\n'/*ion-inline-end:"D:\hoehoe\messi\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(187);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.headCount = 0;
        this.day = -1;
        this.ref = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref();
        this.myDate = new Date();
        this.breakfast = "";
        this.lunch = "";
        this.dinner = "";
        login_check();
        this.day = this.myDate.getDay();
        this.ref.child("/schedule/" + this.day).once('value')
            .then(function (snap) {
            _this.dinner = snap.val().dinner;
            _this.lunch = snap.val().lunch;
            _this.breakfast = snap.val().breakfast;
            console.log('Menu Updated');
        });
        this.ref.child("/npersons").on('value', function (snap) {
            console.log('Connected to db!');
            console.log(snap.val());
            _this.headCount = snap.val();
        });
        function login_check() {
            __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().onAuthStateChanged(function (user) {
                if (user) {
                    console.log(user);
                    console.log('Authenticated');
                    // document.getElementById('signout')
                    //                 .setAttribute('style','display:display-inline; visibility:visible')          
                }
                else {
                    console.log('Not Auth');
                    navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
                    // document.getElementById('signout')
                    //                 .setAttribute('style','display:none; visibility:hidden')                               
                }
            });
        }
    }
    HomePage.prototype.sign_out = function () {
        __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().signOut();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\hoehoe\messi\src\pages\home\home.html"*/'<!-- <ion-header>\n  <ion-navbar>\n	Messi  </ion-navbar>\n</ion-header> -->\n\n<ion-content class="card-background-page">\n\n  <ion-card>\n    <img src="assets/imgs/food.jpg"/>\n    <div class="card-title">{{headCount}}</div>\n    <div class="card-subtitle">guys in mess now</div>\n  </ion-card>\n\n  <ion-card id="todays-menu-card">\n  <ion-card-header class="heading">\n    Todays Menu\n  </ion-card-header>\n\n  <ion-list id="menu-items">\n    <ion-item class="food_item">\n      <b>Breakfast :</b> {{breakfast}}\n    </ion-item>\n    <ion-item class="food_item">\n      <b>Lunch : </b>{{lunch}}\n    </ion-item>\n    <ion-item  class="food_item">\n      <b>Dinner :</b> {{dinner}}\n    </ion-item>\n\n\n\n  </ion-list>\n</ion-card>\n\n<button ion-button color="#84b4ff" full (click)="sign_out()">Sign Out</button>\n\n\n</ion-content>\n'/*ion-inline-end:"D:\hoehoe\messi\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(407);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(783);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_register_register__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_signin_signin__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2__ = __webpack_require__(787);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_auth__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__environment__ = __webpack_require__(397);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_register_register__["a" /* RegisterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signin/signin.module#SigninPageModule', name: 'SigninPage', segment: 'signin', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_13_angularfire2__["AngularFireModule"].initializeApp(__WEBPACK_IMPORTED_MODULE_15__environment__["a" /* config */]),
                __WEBPACK_IMPORTED_MODULE_14_angularfire2_auth__["AngularFireAuthModule"]
                //AngularFireAuth
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_register_register__["a" /* RegisterPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 783:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environment__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(398);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        __WEBPACK_IMPORTED_MODULE_4_firebase__["initializeApp"](__WEBPACK_IMPORTED_MODULE_5__environment__["a" /* config */]);
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\hoehoe\messi\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\hoehoe\messi\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[402]);
//# sourceMappingURL=main.js.map