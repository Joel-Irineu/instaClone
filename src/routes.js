import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'; 

import Home from './pages/Home'
import Search from './pages/Search'
import Addition from './pages/Addition'
import Activity from './pages/Activity'
import Profile from './pages/Profile'

const Tab = createBottomTabNavigator()

const icons = {
    Home: {
        name: 'home'
    },
    Search: {
        name: 'search'
    },
    Addition: {
        name: 'plus-square'
    },
    Activity: {
        name: 'heart'
    },
    Profile: {
        name: 'user'
    }
}

export default function Routes(){
    return(
        <NavigationContainer>
            <Tab.Navigator
            screenOptions={({route})=>({
                tabBarIcon: ({color, size}) => {
                    const {name} = icons[route.name]
                    return <Feather name={name} size={size} color={color} />
                }
            })}
            tabBarOptions={{
                activeTintColor: '#262626',
                showLabel: false
            }}
        >
                <Tab.Screen name='Home' component={Home} />
                <Tab.Screen name='Search' component={Search} />
                <Tab.Screen name='Addition' component={Addition} />
                <Tab.Screen name='Activity' component={Activity} />
                <Tab.Screen name='Profile' component={Profile} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}