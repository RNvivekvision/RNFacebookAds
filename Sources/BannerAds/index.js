import React from 'react';
import { StyleSheet, View } from 'react-native';
import { BannerView } from 'react-native-fbads';
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
          onError={e => console.error('Error Banner 1 -> ', e.nativeEvent)}
        />
      </View>
      <View style={styles.bannerContainer}>
        <BannerView
          placementId={bannerAdId}
          type="large"
          onPress={() => console.log('Click Banner 2')}
          onError={e => console.error('Error Banner 2 -> ', e.nativeEvent)}
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
