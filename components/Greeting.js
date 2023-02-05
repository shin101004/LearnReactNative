import React from 'react';
import {View, Text} from 'react-native';

const Greeting = props => {
  return (
    <View>
      <Text>안녕하세요 {props.name}!</Text>
    </View>
  );
};

Greeting.defaultProps = {
  name: 'React Native',
};

export default Greeting;
