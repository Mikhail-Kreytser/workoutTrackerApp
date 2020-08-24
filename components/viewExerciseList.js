import React, { Component } from 'react'
import { View, TextInput, Text, Button, FlatList, TouchableHighlight, Alert, ScrollView, StyleSheet} from 'react-native';

import { List, ListItem } from 'react-native-elements'
import { styles, calendarTheme, Separator } from './styles'


export default class ExerciseListView extends Component {
  constructor(props) {
    super(props);
  }


render() {
  const renderExercise = ({ item }) => {
    return (
      <Exercise
        item={item}
        onPress={() => this.props.exerciseAction(item.id)}
      />
    );
  };


	const Exercise = ({ item, onPress }) => {
		return(
		  <TouchableHighlight style={styles.workout} onPress={onPress}>
		  	<View>
          <Text style={styles.title}>
            ID: {item.id} Name: {item.name}
          </Text>
			    <Text style={styles.title}>
			    	{item.info}
		    	</Text>
		   	</View>
		  </TouchableHighlight>
		)};


	return (
		<View>       
      <View>
      <FlatList
      	LisHeaderComponent={
      		<Text style={styles.header}>Todays exercises</Text>}
        data={this.props.exercises}
        keyExtractor={exercise => exercise.id.toString()}
      	renderItem={renderExercise}    
        vertical={true}
      	ListEmptyComponent={() =>
          <TouchableHighlight style={styles.workout}>
				    <Text style={styles.title}>
		        	There are no exercises created.
		      	</Text>
	 				 </TouchableHighlight>
	    	}/>
      </View>
    </View>
    );
  }
}
