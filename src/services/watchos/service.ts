import { join } from 'path';
import { copyFile } from '../file.processing';

export enum EImageSetType {
    IMAGE = 'imageset',
    ICON = 'appiconset',
}

export const addWatchOsImageSetContents = (
    imageSetName: string,
    setType: EImageSetType = EImageSetType.ICON
) => {
    const iosImageFolder = `./ios/V2 Watch App/Assets.xcassets/${imageSetName}.${setType}`;
    copyFile(
        join(__dirname, `../../../templates/watchos/${imageSetName}SetContents.json`),
        `${iosImageFolder}/Contents.json`
    );
    return iosImageFolder;
};