import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

const RNLoader = ({ visible, style, color, size }) => {
  return visible ? (
    <View style={[styles.Container, style]}>
      <ActivityIndicator size={size ?? 'large'} color={color || '#f00'} />
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  Container: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00000060',
    zIndex: 10000,
  },
});
export default RNLoader;
