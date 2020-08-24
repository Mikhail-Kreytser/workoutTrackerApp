import React, { Component } from 'react'
import { View, TextInput, Text, Button, Picker } from 'react-native';

import { styles, calendarTheme, Separator } from './styles'

import realm from './realm';


class UpdateWorkout extends Component {
  constructor(props) {
    super(props);

    this.workout = realm.objects('Workout').filtered('id = ' + this.props.route.params.workoutId)[0];

    this.state = { 
    	id: this.workout.id,
    	name: this.workout.name,  
    	startDate: this.workout.startDate,
    	endDate: this.workout.endDate,
    	daysOfWeek: this.workout.daysOfWeek,
    	recurring: this.workout.recurring,
    	exerciseIds: this.workout.exerciseIds.join()}
  }

render() {
	return (
		<View style={styles.workoutScreen}>
		  <View style={styles.content}>
				<View style={styles.nameInput} >
				  <TextInput
						style={styles.nameInput}
						placeholder="Name of workout"
						onChangeText={text => this.setState({ name:text})}
						defaultValue={this.state.name}/>
				</View>

				<View style={styles.nameInput} >
				  <TextInput
						style={styles.nameInput}
						placeholder="Start date of workout"
						onChangeText={text => this.setState({ startDate:text})}
						defaultValue={this.state.startDate}/>
				</View>	

				<View style={styles.nameInput} >
					<Picker
						selectedValue={this.state.recurring.toString()}
						style={{ height: 50, width: 165 }}
						onValueChange={(itemValue, itemIndex) => this.setState({ 
							recurring:itemValue == "true",
							endDate: itemValue ? this.state.endDate : "",
							daysOfWeek: itemValue ? this.state.daysOfWeek : ""
							})}>
						<Picker.Item label="Recurring" value="true" />
						<Picker.Item label="Non recurring" value="false" />
					</Picker>
				</View>

				<View style={styles.nameInput} >
				  <TextInput
						style={styles.nameInput}
						placeholder="End date of workout"
						editable={this.state.recurring}
						// onChangeText={text => this.setState({ endDate:text})}
						// defaultValue={this.state.endDate}
						/>
				</View>	

				<View style={styles.nameInput} >
				  <TextInput
						style={styles.nameInput}
						placeholder="Days of the week"
						editable={this.state.recurring}	
						// onChangeText={text => this.setState({ daysOfWeek:text})}
						// defaultValue={this.state.daysOfWeek.join()}
						/>
				</View>	

				<View style={styles.nameInput} >
				  <TextInput
						style={styles.nameInput}
						placeholder="Exercises IDs in this workout"
						onChangeText={text => this.setState({ exerciseIds:text})}
						defaultValue={this.state.exerciseIds}
						/>
				</View>	
		  </View>
      		<Button title="Update workout" 
      			onPress={() => {
      				this.props.navigation.navigate('Workouts', {
      					updateWorkout: this.state
					  });}}/>
				<Separator />
      		<Button title="Delete workout"
      			onPress={() => {
      				this.props.navigation.navigate('Workouts', {
      					deleteWorkoutId: this.state.id
					  });}}/>
    </View>
    );
  }
}
export default UpdateWorkout;
