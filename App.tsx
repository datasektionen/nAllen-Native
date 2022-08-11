import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { WHITE } from "./assets/style/colors";
import Login from "./screens/login";
import Calendar from "./screens/calendar";
import Home from "./screens/home";
import News from "./screens/news";
import Profile from "./screens/profile";

import { TabIcon } from "./components"
import UserHandler from "./utils/user";
import Register from "./screens/register";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <UserHandler>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { elevation: 0 },
              cardStyle: { backgroundColor: WHITE },
            }}
          >

            <Stack.Screen
              name="Login"
              options={{ headerShown: false, animationEnabled: false }}
              component={Login}
            />
            <Stack.Screen
              name="Register"
              options={{ headerShown: false, animationEnabled: false }}
              component={Register}
            />

            <Stack.Screen
              name="Tab"
              options={{ headerShown: false, animationEnabled: false }}
            >
              {() => (
                <Tab.Navigator
                  screenOptions={{
                    tabBarShowLabel: false,
                    tabBarStyle: [{ display: "flex" }, null],

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
      </UserHandler>
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
  },
});
