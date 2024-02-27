import React from 'react';
import { NativeAdsManager } from 'react-native-fbads';
import { nativeAdId } from '../Variables';
import NativeAdView from './NativeAdView';

const NativeAd = () => {
  console.log({ nativeAdId });

  const adsManager = new NativeAdsManager(nativeAdId, 3);

  return (
    <NativeAdView adsManager={adsManager} adChoicePosition="bottomRight" />
  );
};

export default NativeAd;
