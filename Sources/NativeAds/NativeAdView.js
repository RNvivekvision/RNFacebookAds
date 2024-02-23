import React from 'react';
import { Text, View, Dimensions } from 'react-native';
import {
  AdIconView,
  TriggerableView,
  MediaView,
  withNativeAd,
} from 'react-native-fbads';

const { width } = Dimensions.get('window');

const NativeAdView = props => {
  return (
    <View style={{ flexDirection: 'column', borderWidth: 1 }}>
      <MediaView style={{ width: '100%', height: 150 }} />

      <View style={{ flexDirection: 'row', paddingVertical: 10 }}>
        <AdIconView style={{ width: '25%', height: 80 }} />
        <View
          style={{ flexDirection: 'column', paddingHorizontal: 10, flex: 1 }}>
          <TriggerableView style={{ fontSize: 18 }}>
            {props.nativeAd?.headline}
          </TriggerableView>

          <Text>{props.nativeAd?.sponsoredTranslation}</Text>

          <TriggerableView style={{ fontSize: 10 }}>
            {props.nativeAd?.linkDescription}
          </TriggerableView>
        </View>
      </View>

      <View style={{ alignItems: 'center' }}>
        <TriggerableView
          style={{
            fontSize: 15,
            color: '#a70f0a',
            paddingVertical: 10,
            paddingHorizontal: 30,
            elevation: 3,
            borderTopWidth: 0,
            margin: 10,
            borderRadius: 6,
          }}>
          {props.nativeAd?.callToActionText}
        </TriggerableView>
      </View>
    </View>
  );
};

export default withNativeAd(NativeAdView);
