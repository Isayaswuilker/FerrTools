import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
// Importaremos as outras telas depois
import { colors } from '../utils/colors';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Stack para a Home (permite navegar para outras telas)
const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name="HomeMain" 
      component={HomeScreen} 
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

// Componente principal de navegação
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Início') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Escanear') {
              iconName = focused ? 'scan' : 'scan-outline';
            } else if (route.name === 'Inventário') {
              iconName = focused ? 'list' : 'list-outline';
            } else if (route.name === 'Perfil') {
              iconName = focused ? 'person' : 'person-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.textLight,
          tabBarStyle: {
            height: 60,
            paddingBottom: 10,
            paddingTop: 5,
          },
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#FFF',
        })}
      >
        <Tab.Screen 
          name="Início" 
          component={HomeStack} 
          options={{ headerShown: false }}
        />
        <Tab.Screen 
          name="Escanear" 
          component={HomeScreen} // Temporário, depois substituiremos
        />
        <Tab.Screen 
          name="Inventário" 
          component={HomeScreen} // Temporário, depois substituiremos
        />
        <Tab.Screen 
          name="Perfil" 
          component={HomeScreen} // Temporário, depois substituiremos
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
