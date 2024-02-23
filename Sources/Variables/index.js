import { Platform } from 'react-native';

const IMG_16_9_APP_INSTALL = 'IMG_16_9_APP_INSTALL#';
const VID_HD_9_16_39S_APP_INSTALL = 'VID_HD_9_16_39S_APP_INSTALL#';
const VID_HD_16_9_15S_APP_INSTALL = 'VID_HD_16_9_15S_APP_INSTALL#';

const android_banner = '1389868308291342_1390326908245482';
const android_interstitial = '1389868308291342_1389893608288812';
const android_native = '1389868308291342_1389926311618875';

const ios_banner = '1389868308291342_1390268971584609';
const ios_interstitial = '1389868308291342_1390269058251267';
const ios_native = '1389868308291342_1390269594917880';

const getKey = ({ ios, android }) =>
  Platform.select({
    ios: ios,
    android: android,
  });

const bannerAdId = __DEV__
  ? VID_HD_9_16_39S_APP_INSTALL +
    getKey({ ios: ios_banner, android: android_banner })
  : getKey({ ios: ios_banner, android: android_banner });
const interstitialAdId = __DEV__
  ? VID_HD_9_16_39S_APP_INSTALL +
    getKey({ ios: ios_interstitial, android: android_interstitial })
  : getKey({ ios: ios_interstitial, android: android_interstitial });
const nativeAdId = __DEV__
  ? VID_HD_9_16_39S_APP_INSTALL +
    getKey({ ios: ios_native, android: android_native })
  : getKey({ ios: ios_native, android: android_native });

export { bannerAdId, interstitialAdId, nativeAdId };
