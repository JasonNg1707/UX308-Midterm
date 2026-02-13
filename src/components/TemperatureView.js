import React from 'react';
import { View, Text } from 'react-native';
import { fahrenheitToCelsius } from '../logic/temperature';

export default function TemperatureView() {
  return (
    <View>
      <Text>32F → {fahrenheitToCelsius(32)}°C</Text>
      <Text>212F → {fahrenheitToCelsius(212)}°C</Text>
      <Text>70F → {fahrenheitToCelsius(70)}°C</Text>
    </View>
  );
}