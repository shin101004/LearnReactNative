import React, {useCallback} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, View, Button} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {useFocusEffect} from '@react-navigation/native';

// const Tab = createMaterialTopTabNavigator();
const Tab = createMaterialBottomTabNavigator();

function MainScreen() {
  return (
    <Tab.Navigator initialRouteName="Home" tabBarOptions={{showIcon: true}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: '홈',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
          tabBarColor: 'black',
          tabBarBadge: 'new',
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: '검색',
          tabBarIcon: ({color, size}) => (
            <Icon name="search" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          title: '알림',
          tabBarIcon: ({color, size}) => (
            <Icon name="notifications" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Message"
        component={MessageScreen}
        options={{
          title: '메시지',
          tabBarIcon: ({color, size}) => (
            <Icon name="message" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function HomeScreen({navigation}) {
  useFocusEffect(
    useCallback(() => {
      console.log('지금 이 화면 !');
      return () => {
        console.log('홈 스크린 벗어남 !');
      };
    }, []),
  );
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Detail 1 열기"
        onPress={() => navigation.push('Detail', {id: 1})}
      />
    </View>
  );
}

function SearchScreen() {
  return <Text>Search</Text>;
}

function NotificationScreen() {
  return <Text>Notify</Text>;
}

function MessageScreen() {
  return <Text>Message</Text>;
}

export default MainScreen;
