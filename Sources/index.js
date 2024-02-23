import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { AdSettings } from 'react-native-fbads';

// import Main from './src';
import NativeAd from './NativeAds';
import BannerAd from './BannerAds';
import InterstitialAd from './InterstitialAds';
import { RNLoader } from './Components';

const App = () => {
  const [State, setState] = useState({ isLoading: true });

  useEffect(() => {
    setTimeout(() => {
      setState(p => ({ ...p, isLoading: false }));
    }, 1000);
  }, []);

  useEffect(() => {
    Init();
    return () => {
      AdSettings.clearTestDevices();
    };
  }, []);

  const Init = async () => {
    AdSettings.setLogLevel('debug');
    console.log('currentDeviceHash -> ', AdSettings.currentDeviceHash);
    AdSettings.addTestDevice(AdSettings.currentDeviceHash);
    const requestedStatus = await AdSettings.requestTrackingPermission();
    console.log('requestedStatus -> ', requestedStatus);
    if (requestedStatus === 'authorized' || requestedStatus === 'unavailable') {
      console.log('setAdvertiserIDCollectionEnabled called...');
      AdSettings.setAdvertiserIDCollectionEnabled(true);
      // Both calls are not related to each other
      // FB won't deliver any ads if this is set to false or not called at all.
      console.log('setAdvertiserTrackingEnabled called...');
      AdSettings.setAdvertiserTrackingEnabled(true);
    }
  };

  if (State.isLoading) {
    return <RNLoader visible={true} />;
  }

  return (
    <View>
      <NativeAd />
      <BannerAd />
      <InterstitialAd />
    </View>
  );
};

export default App;
