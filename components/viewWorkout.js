import React, { Component } from 'react'
import { View, TextInput, Text, Button } from 'react-native';

import { styles, calendarTheme, Separator } from './styles'

import ExerciseListView from './viewExerciseList'
import realm from './realm';


class ViewWorkout extends Component {
	constructor(props) {
		super(props);

		this.workout = realm.objects('Workout').filtered('id = ' + this.props.route.params.workoutId)[0];

		let exerciseIdList = this.workout.exerciseIds;
		let query = "";
		for (var i = 0; i < exerciseIdList.length; i++) {
			query += "id = ";
			query += exerciseIdList[i];
			if(i != exerciseIdList.length - 1){
				query += " or ";
			}
		}
		console.log(query)
		if(exerciseIdList.length != 0) {
			this.exerciseList = realm.objects('Exercise').filtered(query);
		} else {
			this.exerciseList = [];
		}

		this.state = { 
			id: this.workout.id,
			name: this.workout.name,  
			startDate: this.workout.startDate,
			endDate: this.workout.endDate,
			daysOfWeek: this.workout.daysOfWeek,
			recurring: this.workout.recurring.toString(),
			exerciseIds: this.workout.exerciseIds,
			exerciseList: this.exerciseList,
		}

    this._viewExerciseScreen = this._viewExerciseScreen.bind(this);
  }

  _viewExerciseScreen(id) {

  }

		render() {
			return (
				<View style={styles.workoutScreen}>
					<View style={styles.content}>
						<Text style={styles.title} >
						 	{this.state.name}
						</Text>
					</View>
					<ExerciseListView exercises={this.state.exerciseList} exerciseAction={this._viewExerciseScreen}/>	
				</View>
				);
		}
	}
	export default ViewWorkout;
