import React from 'react';
import {View, Button} from 'react-native';

// [5장] 기본 navagator
function HomeScreen({navigation}) {
  return (
    <View>
      <Button
        title="Detail1 열기"
        onPress={() => navigation.navigate('Detail', {id: 1})}
      />
      <Button
        title="Detail2 열기"
        onPress={() => navigation.navigate('Detail', {id: 2})}
      />
      <Button
        title="Headerless 열기"
        onPress={() => navigation.push('Headerless')}
      />
    </View>
  );
}

export default HomeScreen;
