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

import { styles, calendarTheme, Separator } from './styles'
import WorkoutListView from './viewWorkoutList'
import realm from './realm';

class AllWorkouts extends Component {
  constructor(props) {
    super(props);
    this.workoutList = realm.objects('Workout');
    this.state = {workoutList: this.workoutList};
    this.workoutList.addListener((workouts, changes) => {
      this.setState({workoutList : this.workoutList})
    })
    this._updateWorkoutScreen = this._updateWorkoutScreen.bind(this);
  }

  _updateWorkoutScreen(id) {
    this.props.navigation.navigate('Update Workout', {
      workoutId: id
    });
  }

  componentDidUpdate(prevProps){
    if (prevProps.route.params?.newWorkout !== this.props.route.params?.newWorkout) {
      const result = this.props.route.params?.newWorkout;
      this._addNewWorkout(
        result.name,
        result.startDate,
        result.daysOfWeek,
        result.recurring == 'true',
        result.exerciseIds)
      
    }
    if (prevProps.route.params?.updateWorkout !== this.props.route.params?.updateWorkout) {
      const result = this.props.route.params?.updateWorkout;
      this._updateWorkout(result)
    }
    if (prevProps.route.params?.deleteWorkoutId !== this.props.route.params?.deleteWorkoutId) {
      const result = this.props.route.params?.deleteWorkoutId;
      this._deleteWorkout(result)
    }
  };

  _getPrimaryKeyId(model) {
    if (realm.objects(model).max("id")) {
      return realm.objects(model).max("id") + 1;
    }
    return 1;
  }

  _addNewWorkout(name, startDate, daysOfWeek, recurring, exerciseIds) {
    realm.write(() =>{
      realm.create('Workout', {
        id: this._getPrimaryKeyId('Workout'),
        name: name,
        startDate: startDate,
        daysOfWeek: daysOfWeek,
        recurring: recurring,
        exerciseIds: exerciseIds.length == 0 ? [] : exerciseIds.split(',').map(Number),
      })
    })
  }

  _updateWorkout(updatedWorkout) {
    realm.write(() => {
      let workout = realm.objectForPrimaryKey('Workout', updatedWorkout.id)
      workout.name = updatedWorkout.name
      workout.startDate = updatedWorkout.startDate
      workout.daysOfWeek = updatedWorkout.daysOfWeek
      workout.recurring = updatedWorkout.recurring
      workout.exerciseIds = updatedWorkout.exerciseIds.length == 0 ? [] : updatedWorkout.exerciseIds.split(',').map(Number)
    });
  }

  _deleteWorkout(deleteWorkoutId) {
    console.log(deleteWorkoutId)
    realm.write(() => {
      let workout = realm.objectForPrimaryKey('Workout', deleteWorkoutId)
      if (workout != undefined) {
        realm.delete(workout);
      }
    });
  }

   render() {
    return (
      <SafeAreaView>
        <Separator />
        <View style={styles.options}>
          <View style={styles.button}>
            <Button
              style={styles.button}
              title="Add new workout"
              onPress={() => this.props.navigation.navigate('Add Workout')}
            />
          </View>
        </View>
        <Separator/>
        <Text>
        </Text>
        <WorkoutListView workouts={this.state.workoutList} workoutAction={this._updateWorkoutScreen}/>
      </SafeAreaView>
      );
  }
}

export default AllWorkouts;