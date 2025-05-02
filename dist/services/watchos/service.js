"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const file_processing_1 = require("../file.processing");
var EImageSetType;
(function (EImageSetType) {
    EImageSetType["IMAGE"] = "imageset";
    EImageSetType["ICON"] = "appiconset";
})(EImageSetType = exports.EImageSetType || (exports.EImageSetType = {}));
exports.addWatchOsImageSetContents = (imageSetName, setType = EImageSetType.ICON) => {
    const iosImageFolder = `./ios/V2 Watch App/Assets.xcassets/${imageSetName}.${setType}`;
    file_processing_1.copyFile(path_1.join(__dirname, `../../../templates/watchos/${imageSetName}SetContents.json`), `${iosImageFolder}/Contents.json`);
    return iosImageFolder;
};
