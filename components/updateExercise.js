import React, { Component } from 'react'
import { View, TextInput, Text, Button } from 'react-native';

import { styles, calendarTheme, Separator } from './styles'

import realm from './realm';


class UpdateExercise extends Component {
  constructor(props) {
    super(props);
    
    this.exercise = realm.objects('Exercise').filtered('id = ' + this.props.route.params.exerciseId);
    this.state = {id: this.exercise[0].id, name: this.exercise[0].name,  exerciseDetails: this.exercise[0].info};
  }

render() {
	return (
		<View style={styles.exerciseScreen}>
		  <View style={styles.content}>
				<View style={styles.nameInput} >
				  <TextInput
						style={styles.nameInput}
						placeholder="Name of exercise"
						onChangeText={text => this.setState({ name:text})}
						defaultValue={this.state.name}/>
					</View>	
				<Separator />
				<View style={styles.exerciseDetails} >
				  <TextInput
       			multiline
						style={styles.exerciseDetails}
						placeholder={`Exercise details\n\n\t\t3 sets of 20 reps with 5 minute rests inbetween.`}
						onChangeText={text => this.setState({ exerciseDetails:text})}
						defaultValue={this.state.exerciseDetails}/>
			  </View>
		  </View>
      	<Button title="Update" 
      			onPress={() => {
      				this.props.navigation.navigate('Exercises', {
      					updateExercise: this.state
					  	});
      			}}/>
				<Separator />
      	<Button title="Delete"
      			onPress={() => {
      				this.props.navigation.navigate('Exercises', {
      					deleteExercise: this.state
					  	});
					  }}/>
    </View>
    );
  }
}
export default UpdateExercise;
