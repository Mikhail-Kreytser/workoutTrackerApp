import React, { Component } from 'react'
import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Text,
  View,
  Button,
  FlatList,
} from 'react-native'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import HomeScreen from './components/home'
import AddExerciseScreen from './components/addExercise'
import AddWorkoutScreen from './components/addWorkout'
import UpdateExerciseScreen from './components/updateExercise'
import UpdateWorkoutScreen from './components/updateWorkout'
import ExerciseListView from './components/viewExerciseList'
import AllExercises from './components/viewAllExercises'
import AllWorkouts from './components/viewAllWorkouts'
import ViewWorkoutScreen from './components/viewWorkout'

class App extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    const WorkoutStack = createStackNavigator();
    function WorkoutStackScreen() {
      return (
        <WorkoutStack.Navigator>
          <WorkoutStack.Screen name="Workouts" component={AllWorkouts} />
          <WorkoutStack.Screen name="Add Workout" component={AddWorkoutScreen} />
          <WorkoutStack.Screen name="Update Workout" component={UpdateWorkoutScreen} />
        </WorkoutStack.Navigator>
      );
    }
    const ExerciseStack = createStackNavigator();
    function ExerciseStackScreen() {
      return (
        <ExerciseStack.Navigator>
          <ExerciseStack.Screen name="Exercises" component={AllExercises} />
          <ExerciseStack.Screen name="Add Exercise" component={AddExerciseScreen} />
          <ExerciseStack.Screen name="Update Exercise" component={UpdateExerciseScreen} />
        </ExerciseStack.Navigator>
      );
    }    
    const HomeStack = createStackNavigator();
    function HomeStackScreen() {
      return (
        <HomeStack.Navigator>
          <HomeStack.Screen name="Home" component={HomeScreen} />
          <HomeStack.Screen name="View Workout" component={ViewWorkoutScreen} />
        </HomeStack.Navigator>
      );
    }
    const Tab = createBottomTabNavigator();
    function FinalStack() {
      return (
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeStackScreen} />
          <Tab.Screen name="Workouts" component={WorkoutStackScreen} />
          <Tab.Screen name="Exercises" component={ExerciseStackScreen} />
        </Tab.Navigator>
      );
    }
    return (
      <NavigationContainer>
        <FinalStack/>
      </NavigationContainer>
    );
  }

}

export default App

