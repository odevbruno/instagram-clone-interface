import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './srcs/Pages/Home';
import Busca from './srcs/Pages/Busca';
import Reels from './srcs/Pages/Reels';
import Loja from './srcs/Pages/Loja';
import Perfil from './srcs/Pages/Perfil';

export default function App() {

  const Bottom = createBottomTabNavigator();


  const bar = {
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10
  }
  

  return (
    <NavigationContainer>
      <Bottom.Navigator
        initialRouteName='Home'
        screenOptions={({ route }) => ({
          tabBarStyle: {bar},
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? require('./srcs/Imgs/homeFilled.png') : require('./srcs/Imgs/homeOutline.png');
            } else if (route.name === 'Buscar') {
              iconName = focused ? require('./srcs/Imgs/searchSelected.png') : require('./srcs/Imgs/search.png');
            } else if (route.name === 'Reels') {
              iconName = focused ? require('./srcs/Imgs/mediaSelect.png') : require('./srcs/Imgs/mediaFilled.png');
            } else if (route.name === 'Loja') {
              iconName = focused ? require('./srcs/Imgs/lojaSelect.png') : require('./srcs/Imgs/lojaOutline.png');
            } else if (route.name === 'Perfil') {
              iconName = focused ? { uri: 'https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg' } : { uri: 'https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg' };
            }

            console.log(iconName)
            return <Image source={iconName} style={{
              height: size,
              width: size,
              borderRadius: route.name === 'Perfil' ? size : null
            }} />;
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
          tabBarShowLabel: false
        })}>
        <Bottom.Screen name='Home' component={Home} />
        <Bottom.Screen name='Buscar' component={Busca} />
        <Bottom.Screen name='Reels' component={Reels} />
        <Bottom.Screen name='Loja' component={Loja} />
        <Bottom.Screen name='Perfil' component={Perfil} />
      </Bottom.Navigator>
    </NavigationContainer>
  );
}
