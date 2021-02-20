import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Dashboard } from "../screens/Dashboard";

const Stack = createStackNavigator();

const HomeNavigation = (props) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Dashboard" component={Dashboard}
                          options={{
                              title: null,
                              headerStyle: {
                                  height: 0
                              },
                          }}/>
        </Stack.Navigator>
    );
};

export { HomeNavigation }
