import React, {useEffect, useState} from 'react';
// import {KeyboardAvoidingView, StyleSheet, Platform} from 'react-native';
// import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
// import AddTodo from './components/todo/AddTodo';
// import DateHead from './components/todo/DateHead';
// import Empty from './components/todo/Empty';
// import TodoList from './components/todo/TodoList';
import AsyncStorage from '@react-native-community/async-storage';
import {NavigationContainer, TabActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import HomeScreen from './screens/HomeScreen';
// import DetailScreen from './screens/DetailScreen';
import {TouchableOpacity, Text, View, Button} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MainScreen from './screens/MainScreen';
import DetailScreen from './screens/DetailScreen';
// import HeaderlessScreen from './screens/HeaderlessScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
// const Tab = createMaterialTopTabNavigator();

function App() {
  // const today = new Date();
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '작업환경 설정',
      done: true,
    },
    {
      id: 2,
      text: '리액트 네이티브 기초 공부',
      done: false,
    },
    {
      id: 3,
      text: '투두리스트 만들어보기',
      done: false,
    },
  ]);

  useEffect(() => {
    async function load() {
      try {
        const rawTodos = await AsyncStorage.getItem('todos');
        const savedTodos = JSON.parse(rawTodos);
        setTodos(savedTodos);
      } catch (e) {
        console.log('Failed to load todos');
      }
    }
    load();
  }, [todos]);

  useEffect(() => {
    async function save() {
      try {
        await AsyncStorage.setItem('todos', JSON.stringify(todos));
      } catch (e) {
        console.log('Failed to save todos');
      }
    }
    save();
  }, [todos]);

  // const onInsert = (text: string) => {
  //   const nextId =
  //     todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
  //   const todo = {
  //     id: nextId,
  //     text,
  //     done: false,
  //   };

  //   setTodos(todos.concat(todo));
  // };

  // const onToggle = (id: number) => {
  //   const nextTodos = todos.map(todo =>
  //     todo.id === id ? {...todo, done: !todo.done} : todo,
  //   );
  //   setTodos(nextTodos);
  // };

  // const onRemove = (id: number) => {
  //   const nextTodos = todos.filter(todo => todo.id !== id);
  //   setTodos(nextTodos);
  // };

  return (
    <NavigationContainer>
      {/* 스택 네비게이터 + 바텀 네비게이터 */}
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
      {/* ----------------------------------------------------------------- */}
      {/* Bottom Tab Navigator */}
      {/* <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: '#fb8c00',
          showLabel: false,
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: '홈',
            tabBarIcon: ({color, size}) => (
              <Icon name="home" color={color} size={size} />
            ),
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
      </Tab.Navigator> */}
      {/* ----------------------------------------------------------------- */}
      {/* Drawer Navigator */}
      {/* <Drawer.Navigator
        initialRouteName="Home"
        drawerPosition="left"
        backBehavior="history"
        drawerContent={({navigation}) => (
          <SafeAreaView>
            <Text>A custom drawer</Text>
          </SafeAreaView>
        )}
        screenOptions={{
          drawerActiveBackgroundColor: '#fb8c00',
          drawerActiveTintColor: '#ffffff',
        }}>
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{title: '홈'}}
        />
        <Drawer.Screen
          name="Setting"
          component={SettingScreen}
          options={{title: '설정'}}
        />
      </Drawer.Navigator> */}
      {/* ----------------------------------------------------------------- */}
      {/* Stack Navigator */}
      {/* <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: '홈',
            headerStyle: {
              backgroundColor: '#29b6f6',
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
            },
          }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={({route}) => ({
            title: `상세 정보 - ${route?.params?.id}`,
            headerLeft: ({onPress}) => (
              <TouchableOpacity onPress={onPress}>
                <Text>Left</Text>
              </TouchableOpacity>
            ),
            headerTitle: ({children}) => (
              <View>
                <Text>{children}</Text>
              </View>
            ),
            headerRight: () => (
              <View>
                <Text>Right</Text>
              </View>
            ),
          })}
        />
        <Stack.Screen
          name="Headerless"
          component={HeaderlessScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator> */}
      {/* ----------------------------------------------------------------- */}
      {/* [1~4장] TodoList */}
      {/* <SafeAreaProvider>
        <SafeAreaView edges={['bottom']} style={styles.block}>
          <KeyboardAvoidingView
            behavior={Platform.select({ios: 'padding'})}
            style={styles.avoid}>
            <DateHead date={today} />
            {todos.length === 0 ? (
              <Empty />
            ) : (
              <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
            )}
            <AddTodo onInsert={onInsert} />
          </KeyboardAvoidingView>
        </SafeAreaView>
      </SafeAreaProvider> */}
    </NavigationContainer>
  );
}

// ** DrawNavigator **
// function HomeScreen({navigation}) {
//   return (
//     <View>
//       <Text>Home</Text>
//       <Button title="Drawer 열기" onPress={() => navigation.openDrawer()} />
//       <Button
//         title="Setting 열기"
//         onPress={() => navigation.navigate('Setting')}
//       />
//     </View>
//   );
// }

// function SettingScreen({navigation}) {
//   return (
//     <View>
//       <Text>Setting</Text>
//       <Button title="뒤로가기" onPress={() => navigation.goBack()} />
//     </View>
//   );
// }

// ** BottomNavigator **
// function HomeScreen() {
//   return <Text>Home</Text>;
// }

// function SearchScreen() {
//   return <Text>Search</Text>;
// }

// function NotificationScreen() {
//   return <Text>Notify</Text>;
// }

// function MessageScreen() {
//   return <Text>Message</Text>;
// }

// ** 1~4장 **
// const styles = StyleSheet.create({
//   block: {
//     flex: 1,
//   },
//   avoid: {
//     flex: 1,
//   },
// });

export default App;
