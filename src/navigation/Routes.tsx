import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home';
import ArticleDetail from '../screens/ArticleDetail';
import { createStackNavigator } from '@react-navigation/stack';
import SavedArticles from '../screens/SavedArticles';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="ArticleDetail" component={ArticleDetail} />
  </Stack.Navigator>
);

const Routes = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="HomeStack" component={HomeStack} />
    <Drawer.Screen name="SaveArticles" component={SavedArticles} />
  </Drawer.Navigator>
);

export default Routes;
