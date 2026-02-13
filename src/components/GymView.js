import React from 'react';
import { View, Text } from 'react-native';
import { gymCost } from '../logic/gym';

export default function GymView() {
  return (
    <View>
      <Text>1 friend: ${gymCost(100,1)}</Text>
      <Text>2 friends: ${gymCost(100,2)}</Text>
      <Text>3 friends: ${gymCost(100,3)}</Text>
      <Text>4 friends: ${gymCost(100,4)}</Text>
    </View>
  );
}