import { addIosIcon } from './ios/service';
import { addAndroidIcon } from './android/service';
import { addWatchOsIcon } from './watchos/service';
import { Config } from '@react-native-community/cli';
import { EPlatform } from '../../services/type';

export const setIconTask = async (argv: string[], config: Config, args: Record<string, any>) => {
  const { path, platform, background, targetName } = args;
  switch (platform) {
    case EPlatform.IOS:
      await addIosIcon(path, targetName);
      break;
    case EPlatform.ANDROID:
      await addAndroidIcon(path, background);
      break;
    case EPlatform.WATCHOS:
      console.log('Generating watchos icons')
      await addWatchOsIcon(path);
      break;
    case EPlatform.ALL:
      await addIosIcon(path, targetName);
      await addAndroidIcon(path, background);
      break;
    default:
      console.log("We don't support this platform yet");
      break;
  }
};
