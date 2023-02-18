import React from 'react';
import {View, Text, Button} from 'react-native';

function DetailScreen({route, navigation}) {
  return (
    <View>
      <Text>Detail id: {route.params.id}</Text>
      <Button
        title="다음"
        onPress={() => navigation.navigate('Detail', {id: route.params.id + 1})}
      />
      <Button title="뒤로가기" onPress={() => navigation.pop()} />
      <Button title="처음으로" onPress={() => navigation.popToTop()} />
    </View>
  );
}

export default DetailScreen;
