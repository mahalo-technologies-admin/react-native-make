"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const service_1 = require("./ios/service");
const service_2 = require("./android/service");
const service_3 = require("./watchos/service");
const type_1 = require("../../services/type");
exports.setIconTask = async (argv, config, args) => {
    const { path, platform, background, target } = args;
    switch (platform) {
        case type_1.EPlatform.IOS:
            await service_1.addIosIcon(path, target);
            break;
        case type_1.EPlatform.ANDROID:
            await service_2.addAndroidIcon(path, background);
            break;
        case type_1.EPlatform.WATCHOS:
            console.log('Generating watchos icons');
            await service_3.addWatchOsIcon(path);
            break;
        case type_1.EPlatform.ALL:
            await service_1.addIosIcon(path, target);
            await service_2.addAndroidIcon(path, background);
            break;
        default:
            console.log("We don't support this platform yet");
            break;
    }
};
