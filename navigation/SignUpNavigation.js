import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LogIn } from "../screens/LogIn";
import { SignUp } from "../screens/SignUp";
import { MakeDeck } from "../screens/MakeDeck";

const Stack = createStackNavigator();

const SignUpNavigation = (props) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="LogIn" component={LogIn}
                          options={{
                              title: null,
                              headerStyle: {
                                  height: 0
                              },
                          }}/>
            <Stack.Screen name="SignUp" component={SignUp}
                          options={{
                              title: null,
                              headerStyle: {
                                  height: 0
                              },
                              headerLeft: null,
                              gesturesEnabled: false
                          }}/>
            <Stack.Screen name="MakeDeck" component={MakeDeck}
                          options={{
                              title: null,
                              headerStyle: {
                                  height: 0
                              },
                              headerLeft: null,
                              gesturesEnabled: false
                          }}/>
        </Stack.Navigator>
    );
};

export { SignUpNavigation }
