import React from 'react';
import { NativeAdsManager } from 'react-native-fbads';
import { nativeAdId } from '../Variables';
import NativeAdView from './NativeAdView';

const NativeAd = () => {
  const adsManager = new NativeAdsManager(nativeAdId, 50);

  return (
    <NativeAdView adsManager={adsManager} adChoicePosition="bottomRight" />
  );
};

export default NativeAd;
