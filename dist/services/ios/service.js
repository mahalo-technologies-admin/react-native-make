"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const file_processing_1 = require("../file.processing");
const utils_1 = require("../../utils");
var EImageSetType;
(function (EImageSetType) {
    EImageSetType["IMAGE"] = "imageset";
    EImageSetType["ICON"] = "appiconset";
})(EImageSetType = exports.EImageSetType || (exports.EImageSetType = {}));
exports.addIosImageSetContents = (imageSetName, targetName, setType = EImageSetType.ICON) => {
    const packageName = targetName ? targetName : utils_1.getIosPackageName();
    const iosImageFolder = `./ios/${packageName}/Images.xcassets/${imageSetName}.${setType}`;
    file_processing_1.copyFile(path_1.join(__dirname, `../../../templates/ios/${imageSetName}SetContents.json`), `${iosImageFolder}/Contents.json`);
    return iosImageFolder;
};
