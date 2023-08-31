"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addIosImageSetContents = exports.EImageSetType = void 0;
const path_1 = require("path");
const file_processing_1 = require("../file.processing");
const utils_1 = require("../../utils");
var EImageSetType;
(function (EImageSetType) {
    EImageSetType["IMAGE"] = "imageset";
    EImageSetType["ICON"] = "appiconset";
})(EImageSetType || (exports.EImageSetType = EImageSetType = {}));
const addIosImageSetContents = (imageSetName, setType = EImageSetType.ICON) => {
    const iosImageFolder = `./ios/${(0, utils_1.getIosPackageName)()}/Images.xcassets/${imageSetName}.${setType}`;
    (0, file_processing_1.copyFile)((0, path_1.join)(__dirname, `../../../templates/ios/${imageSetName}SetContents.json`), `${iosImageFolder}/Contents.json`);
    return iosImageFolder;
};
exports.addIosImageSetContents = addIosImageSetContents;
