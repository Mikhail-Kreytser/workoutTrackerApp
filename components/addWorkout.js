import React, { Component } from 'react'
import { View, TextInput, Text, Button, Picker} from 'react-native';

import { styles, calendarTheme, Separator} from './styles'


class AddWorkout extends Component {
	constructor(props) {

		let state = { 
			name: '',  
			startDate: new Date().toISOString().replace(/T.+/, ''),
			endDate: '',
			daysOfWeek: [],
			recurring: false,
			exerciseIds: ''}

			if (props.route.params?.newExercise != null) {
				state.newExercise = props.route.params?.newExercise
			}
			super(props);
			this.state = state;
		}

		componentDidUpdate(prevProps) {
			if (prevProps.route.params?.newExercise !== this.props.route.params?.newExercise) {
				this.setState({newExercise: result})
				const result = this.props.route.params?.newExercise;
				this.setState({newExercise: result})
				console.log(result)
			}
		}

		render() {

			return (
				<View style={styles.workoutScreen}>
					<View style={styles.content}>
						<View style={styles.nameInput} >
							<TextInput
								label="HI"
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
								onValueChange={(itemValue, itemIndex) => this.setState({ recurring:itemValue=="true"})}>
								<Picker.Item label="Recurring" value="true" />
								<Picker.Item label="Non recurring" value="false" />
							</Picker>
						</View>	

						<View style={styles.nameInput} >
							<TextInput
								style={styles.nameInput}
								editable={this.state.recurring}
								placeholder="End date of workout"
								// onChangeText={text => this.setState({ endDate:text})}
								// defaultValue={this.state.endDate}
								/>
						</View>	

						<View style={styles.nameInput} >
							<TextInput
								style={styles.nameInput}
								editable={this.state.recurring}
								placeholder="Days of the week"
								// onChangeText={text => this.setState({ daysOfWeek:text.split(',').map(Number)})}
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
						<Separator />
					</View>
					<Button title="Create workout" 
						onPress={() => {
							this.props.navigation.navigate('Workouts', {
								newWorkout: this.state
							});
						}}
					/>
				</View>
			);
		}
	}
	export default AddWorkout;