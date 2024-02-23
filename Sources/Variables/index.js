const IMG_16_9_APP_INSTALL = 'IMG_16_9_APP_INSTALL#';
const VID_HD_9_16_39S_APP_INSTALL = 'VID_HD_9_16_39S_APP_INSTALL#';
const VID_HD_16_9_15S_APP_INSTALL = 'VID_HD_16_9_15S_APP_INSTALL#';

const banner = '1389868308291342_1390326908245482';
const interstitial = '1389868308291342_1389893608288812';
const native = '1389868308291342_1389926311618875';

const bannerAdPlacementId = __DEV__
  ? VID_HD_9_16_39S_APP_INSTALL + banner
  : banner;
const InterstitialAdPlacementId = __DEV__
  ? VID_HD_9_16_39S_APP_INSTALL + interstitial
  : interstitial;
const nativeAdPlacementId = __DEV__
  ? VID_HD_16_9_15S_APP_INSTALL + native
  : native;

export { nativeAdPlacementId, bannerAdPlacementId, InterstitialAdPlacementId };
