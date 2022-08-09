import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { initializeApp } from 'firebase/app';
import { BLACK, CERISE_LIGHT, CERISE_STRONG, } from './assets/style/colors';
import Login from './screens/login';
import Calendar from './screens/calendar';
import Home from './screens/home';
import News from './screens/news';
import Profile from './screens/profile';

import { TabIcon } from './components'




export default function App() {

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { elevation: 0 },
            cardStyle: { backgroundColor: BLACK },
          }}
        >

          {/* <Stack.Screen
            name="Login"
            options={{ headerShown: false, animationEnabled: false }}
            component={LoginPage}
          /> */}

          <Stack.Screen
            name="Tab"
            options={{ headerShown: false, animationEnabled: false }}
          >
            {() => (
              <Tab.Navigator
                tabBarOptions={{
                  showLabel: false,
                  activeTintColor: CERISE_STRONG,
                  inactiveTintColor: CERISE_LIGHT,
                  labelStyle: {
                    fontSize: 14,
                    textTransform: 'uppercase',
                    paddingTop: 10,
                  },



                }}
              >

                <Tab.Screen
                  name="Home"
                  component={Home}
                  options={{
                    tabBarIcon: ({ focused }) => (
                      <TabIcon
                        focused={focused}
                        name="home"
                        text="Home"
                      />
                    ),
                  }}
                />

                <Tab.Screen
                  name="News"
                  component={News}
                  options={{
                    tabBarIcon: ({ focused }) => (
                      <TabIcon
                        focused={focused}
                        name="newspaper"
                        text="News"
                      />
                    ),
                  }}
                />

                <Tab.Screen
                  name="Calendar"
                  component={Calendar}
                  options={{
                    tabBarIcon: ({ focused }) => (
                      <TabIcon
                        focused={focused}
                        name="calendar"
                        text="Calendar"
                      />
                    ),
                  }}
                />



                <Tab.Screen
                  name="Profile"
                  component={Profile}
                  options={{
                    tabBarIcon: ({ focused }) => (
                      <TabIcon
                        focused={focused}
                        name="person"
                        text="Profile"
                      />
                    ),
                  }}
                />
              </Tab.Navigator>
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // full width and height
    width: '100%',
    height: '100%',
  },
});
