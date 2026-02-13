import React from 'react';
import { View, Text } from 'react-native';
import { earthquakeDamage } from '../logic/earthquake';

export default function EarthquakeView() {
  return (
    <View>
      <Text>4.8 → {earthquakeDamage(4.8)}</Text>
      <Text>5.2 → {earthquakeDamage(5.2)}</Text>
      <Text>6.0 → {earthquakeDamage(6.0)}</Text>
      <Text>7.0 → {earthquakeDamage(7.0)}</Text>
      <Text>8.0 → {earthquakeDamage(8.0)}</Text>
    </View>
  );
}