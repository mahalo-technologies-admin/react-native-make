"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addIosIcon = void 0;
const config_1 = require("./config");
const service_1 = require("../../../services/ios/service");
const image_processing_1 = require("../../../services/image.processing");
const addIosIcon = async (iconSource) => {
    try {
        await (0, image_processing_1.checkImageIsSquare)(iconSource);
        const iosIconFolder = (0, service_1.addIosImageSetContents)('AppIcon');
        await generateIosIcons(iconSource, iosIconFolder);
    }
    catch (err) {
        console.log(err);
    }
};
exports.addIosIcon = addIosIcon;
const generateIosIcons = (iconSource, iosIconFolder) => Promise.all(config_1.config.iosIconSizes.map(size => Promise.all(size.multipliers.map(multiplier => (0, image_processing_1.generateResizedAssetsWithoutAlpha)(iconSource, `${iosIconFolder}/icon-${size.size}@${multiplier}x.png`, size.size * multiplier)))));
