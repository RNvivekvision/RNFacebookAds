import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { InterstitialAdManager } from 'react-native-fbads';
import { interstitialAdId } from '../Variables';

export default function InterstitialAd() {
  const showInterstitialAd = async () => {
    try {
      await InterstitialAdManager.showAd(interstitialAdId);
    } catch (e) {
      console.log('Error Interstitial ads -> ', e);
    }
  };

  return (
    <View style={styles.container}>
      <Button title={'Show Interstitial Ad'} onPress={showInterstitialAd} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
