import React, { Component } from 'react'
import { View, TextInput, Text, Button } from 'react-native';

import { styles, calendarTheme, Separator } from './styles'


class AddExercise extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '',  exerciseDetails:'' };
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
		  <Button title="Create exercise"
    			onPress={() => {
    				this.props.navigation.navigate('Exercises', {
    					newExercise: this.state
				  	});
    			}}/>

    </View>
    );
  }
}
export default AddExercise;
