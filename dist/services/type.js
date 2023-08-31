"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EResizeMode = exports.EPlatform = void 0;
var EPlatform;
(function (EPlatform) {
    EPlatform["IOS"] = "ios";
    EPlatform["ANDROID"] = "android";
    EPlatform["WATCHOS"] = "watchos";
    EPlatform["ALL"] = "all";
})(EPlatform || (exports.EPlatform = EPlatform = {}));
var EResizeMode;
(function (EResizeMode) {
    EResizeMode["COVER"] = "cover";
    EResizeMode["CENTER"] = "center";
    EResizeMode["CONTAIN"] = "contain";
})(EResizeMode || (exports.EResizeMode = EResizeMode = {}));
