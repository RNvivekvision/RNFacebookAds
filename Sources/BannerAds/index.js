import React from 'react';
import { StyleSheet, View } from 'react-native';
import { BannerView } from 'react-native-fbads';
import { bannerAdPlacementId } from '../Variables';

export default function BannerAd() {
  return (
    <View style={styles.container}>
      <View style={styles.bannerContainer}>
        <BannerView
          placementId={bannerAdPlacementId}
          type="standard"
          onPress={() => console.log('Click Banner 1')}
          onError={e => console.error('Error Banner 1 -> ', e.nativeEvent)}
        />
      </View>
      <View style={styles.bannerContainer}>
        <BannerView
          placementId={bannerAdPlacementId}
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
