import React, { Component } from 'react'
import { View, TextInput, Text, Button, FlatList, TouchableHighlight, Alert, ScrollView, StyleSheet} from 'react-native';

import { List, ListItem } from 'react-native-elements'
import { styles, calendarTheme, Separator } from './styles'


export default class WorkoutListView extends Component {
  constructor(props) {
    super(props);
  }


render() {
  const renderWorkout = ({ item }) => {
    return (
      <Workout
        item={item}
        onPress={() => this.props.workoutAction(item.id)}
      />
    );
  };


	const Workout = ({ item, onPress }) => {
		return(
		  <TouchableHighlight style={styles.workout} onPress={onPress}>
		  	<View>
			    <Text style={styles.title}>
			    	{item.name}
		    	</Text>
			    <Text style={styles.title}>
			    	{item.exerciseIds.length != 0 ?
			    			"Number of exercises: " + item.exerciseIds.length : "No exercises added to this workout"}
		    	</Text>
		   	</View>
		  </TouchableHighlight>
		)};


	return (
		<View>       
		 	<View >
      <FlatList
      	LisHeaderComponent={
      		<Text style={styles.header}>Todays workouts</Text>}
        data={this.props.workouts}
        keyExtractor={workout => workout.id.toString()}
      	renderItem={renderWorkout}    
        vertical={true}
      	ListEmptyComponent={() =>
				  <TouchableHighlight style={styles.workout}>
				    <Text style={styles.title}>
		        	There are no workouts schedualed
		      	</Text>
	 				 </TouchableHighlight>
	    	}/>
      </View>
    </View>
    );
  }
}