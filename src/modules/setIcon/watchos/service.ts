import { config } from './config';
import { addWatchOsImageSetContents } from '../../../services/watchos/service';
import {
    checkImageIsSquare,
    generateResizedAssetsWithoutAlpha,
} from '../../../services/image.processing';

export const addWatchOsIcon = async (iconSource: string) => {
    try {
        console.log('Generating watchos icons');
        await checkImageIsSquare(iconSource);
        const iosIconFolder = addWatchOsImageSetContents('AppIcon');
        await generateIosIcons(iconSource, iosIconFolder);
    } catch (err) {
        console.log(err);
    }
};

const generateIosIcons = (iconSource: string, iosIconFolder: string) =>
    Promise.all(
        config.iosIconSizes.map(size =>
            Promise.all(
                size.multipliers.map(multiplier =>
                    generateResizedAssetsWithoutAlpha(
                        iconSource,
                        `${iosIconFolder}/items.png`,
                        size.size * multiplier
                    )
                )
            )
        )
    );