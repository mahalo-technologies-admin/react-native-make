import { join } from 'path';
import { copyFile } from '../file.processing';
import { getIosPackageName } from '../../utils';

export enum EImageSetType {
  IMAGE = 'imageset',
  ICON = 'appiconset',
}

export const addIosImageSetContents = (
  imageSetName: string,
  targetName: string,
  setType: EImageSetType = EImageSetType.ICON
) => {
  console.log(`Target Name set to: ${targetName}`)
  const packageName = targetName ? targetName : getIosPackageName()
  console.log(`Package Name set to: ${packageName}`)
  const iosImageFolder = `./ios/${packageName}/Images.xcassets/${imageSetName}.${setType}`;
  console.log(`iOS Image Folder: ${iosImageFolder}`)
  copyFile(
    join(__dirname, `../../../templates/ios/${imageSetName}SetContents.json`),
    `${iosImageFolder}/Contents.json`
  );
  return iosImageFolder;
};
