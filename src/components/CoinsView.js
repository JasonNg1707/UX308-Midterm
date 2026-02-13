import React from 'react';
import { View, Text } from 'react-native';
import { totalCoins } from '../logic/coins';

export default function CoinsView() {
  return (
    <View>
      <Text>All 0: ${totalCoins(0,0,0,0,0)}</Text>
      <Text>1 each: ${totalCoins(1,1,1,1,1)}</Text>
      <Text>10,5,4,2,3: ${totalCoins(10,5,4,2,3)}</Text>
    </View>
  );
}
