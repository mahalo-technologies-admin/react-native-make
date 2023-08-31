"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addWatchOsImageSetContents = exports.EImageSetType = void 0;
const path_1 = require("path");
const file_processing_1 = require("../file.processing");
var EImageSetType;
(function (EImageSetType) {
    EImageSetType["IMAGE"] = "imageset";
    EImageSetType["ICON"] = "appiconset";
})(EImageSetType || (exports.EImageSetType = EImageSetType = {}));
const addWatchOsImageSetContents = (imageSetName, setType = EImageSetType.ICON) => {
    const iosImageFolder = `./ios/V2 Watch App/Assets.xcassets/${imageSetName}.${setType}`;
    (0, file_processing_1.copyFile)((0, path_1.join)(__dirname, `../../../templates/watchos/${imageSetName}SetContents.json`), `${iosImageFolder}/Contents.json`);
    return iosImageFolder;
};
exports.addWatchOsImageSetContents = addWatchOsImageSetContents;
