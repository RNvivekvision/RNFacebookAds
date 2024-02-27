import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { AdSettings } from 'react-native-fbads';

import NativeAd from './NativeAds';
import BannerAd from './BannerAds';
import InterstitialAd from './InterstitialAds';
import { RNLoader } from './Components';

const App = () => {
  const [State, setState] = useState({ isLoading: true });

  useEffect(() => {
    setTimeout(() => {
      setState(p => ({ ...p, isLoading: false }));
    }, 10);
  }, []);

  useEffect(() => {
    Init();
    return () => AdSettings.clearTestDevices();
  }, []);

  const Init = async () => {
    try {
      AdSettings.setLogLevel('debug');
      AdSettings.addTestDevice(AdSettings.currentDeviceHash);
      const requestedStatus = await AdSettings.requestTrackingPermission();
      if (
        requestedStatus === 'authorized' ||
        requestedStatus === 'unavailable'
      ) {
        AdSettings.setAdvertiserIDCollectionEnabled(true);
        // Both calls are not related to each other
        // FB won't deliver any ads if this is set to false or not called at all.
        AdSettings.setAdvertiserTrackingEnabled(true);
      }
    } catch (e) {
      console.log('Error Init -> ', e);
    }
  };

  if (State.isLoading) {
    return <RNLoader visible={true} />;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <NativeAd />
        <BannerAd />
        <InterstitialAd />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
