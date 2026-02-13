import React from 'react';
import { View, Text } from 'react-native';
import { cubeVolume } from '../logic/cube';

export default function CubeView() {
  return (
    <View>
      <Text>1m cube → {cubeVolume(1)} m³</Text>
      <Text>2m cube → {cubeVolume(2)} m³</Text>
      <Text>3m cube → {cubeVolume(3)} m³</Text>
    </View>
  );
}