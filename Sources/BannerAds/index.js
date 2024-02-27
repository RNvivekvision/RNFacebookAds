import React from 'react';
import { StyleSheet, View } from 'react-native';
import { BannerView } from 'react-native-fbads';
import {} from 'react-native-fbsdk-next';
import { bannerAdId } from '../Variables';

export default function BannerAd() {
  console.log({ bannerAdId });

  return (
    <View style={styles.container}>
      <View style={styles.bannerContainer}>
        <BannerView
          placementId={bannerAdId}
          type="standard"
          onPress={() => console.log('Click Banner 1')}
          // onError={e => console.error('Error Banner 1 -> ', e.nativeEvent)}
          onError={e => console.error('Error Banner 1 -> ')}
        />
      </View>
      <View style={styles.bannerContainer}>
        <BannerView
          placementId={bannerAdId}
          type="large"
          onPress={() => console.log('Click Banner 2')}
          // onError={e => console.error('Error Banner 2 -> ', e.nativeEvent)}
          onError={e => console.error('Error Banner 2 -> ')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  bannerContainer: {
    marginVertical: 10,
    backgroundColor: '#f00',
  },
});
