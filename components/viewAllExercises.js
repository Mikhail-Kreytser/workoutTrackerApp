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
import ExerciseListView from './viewExerciseList'
import realm from './realm';

class AllExercises extends Component {
  constructor(props) {
    super(props);
    this.exerciseList = realm.objects('Exercise');
    this.state = {exerciseList: this.exerciseList};
    this.exerciseList.addListener((workouts, changes) => {
      this.setState({exerciseList : this.exerciseList})
    })
    this._updateExerciseScreen = this._updateExerciseScreen.bind(this);
  }

  _updateExerciseScreen(id) {
    this.props.navigation.navigate('Update Exercise', {
      exerciseId: id
    });
  }

  componentDidUpdate(prevProps){
    if (prevProps.route.params?.newExercise !== this.props.route.params?.newExercise) {
      const result = this.props.route.params?.newExercise;
      this._addNewExercise(result.name, result.exerciseDetails)
      this.setState({exerciseList : this.exerciseList})
    }
    if (prevProps.route.params?.updateExercise !== this.props.route.params?.updateExercise) {
      const result = this.props.route.params?.updateExercise;
      this._updateExercise(result)
      this.setState({exerciseList : this.exerciseList})
    }
    if (prevProps.route.params?.deleteExercise !== this.props.route.params?.deleteExercise) {
      const result = this.props.route.params?.deleteExercise;
      this._deleteExercise(result)
    }
  };

  _getPrimaryKeyId(model) {
    if (realm.objects(model).max("id")) {
      return realm.objects(model).max("id") + 1;
    }
    return 1;
  }

  _addNewExercise(name, exerciseDetails) {
    let id = this._getPrimaryKeyId('Exercise')
    realm.write(() => {
      realm.create('Exercise', {
        id: id,
        name: name,
        info: exerciseDetails,
      });
    });
    return id;
  }

  _updateExercise(updatedExercise) {
    realm.write(() => {
      let exercise = realm.objectForPrimaryKey('Exercise', updatedExercise.id)
      exercise.name = updatedExercise.name
      exercise.info = updatedExercise.exerciseDetails
    });
  }

  _deleteExercise(deleteExercise) {
    realm.write(() => {
      let exercise = realm.objectForPrimaryKey('Exercise', deleteExercise.id)
      if (exercise != undefined) {
        realm.delete(exercise);
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
              title="Add new exercise"
              onPress={() => this.props.navigation.navigate('Add Exercise')}
            />
          </View>
        </View>
        <Separator/>
        <Text>
        </Text>
        <ExerciseListView exercises={this.state.exerciseList} exerciseAction={this._updateExerciseScreen}/>
      </SafeAreaView>
      );
  }
}

export default AllExercises;