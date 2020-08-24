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

import Modal from 'react-native-modal';
import { styles, calendarTheme, Separator } from './styles'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import WorkoutListView from './viewWorkoutList'
import realm from './realm';

class Home extends Component {
  constructor(props) {
    super(props);

    let today = new Date().toISOString().replace(/T.+/, '')
    this.workoutList = realm.objects('Workout');
    this.state = {
      selectedDate : today,
      workoutList: this.workoutList
    }
    this.workoutList.addListener((workouts, changes) => {
      this.setState({workoutList : this.workoutList})
    })

    this._viewWorkoutScreen = this._viewWorkoutScreen.bind(this);
  }

  _viewWorkoutScreen(id) {
    this.props.navigation.navigate('View Workout', {
      workoutId: id
    });
  }

  render() {
    return (
      <SafeAreaView>
        <Calendar 
          theme={calendarTheme} 
          style={styles.calendar} 
          onDayPress={(day) => { this.setState({selectedDate : day.dateString})}}
          />
        
        <Separator/>
        
        <WorkoutListView 
          workoutAction ={this._viewWorkoutScreen}
          workouts={this.state.workoutList.filtered(`startDate == "${this.state.selectedDate}"`)}/>
      </SafeAreaView>
      );
  }
}

export default Home;
