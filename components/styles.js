import React from 'react'
import {
  StyleSheet,
  View,
} from 'react-native'

const Separator = () => (
  <View style={styles.separator} />
  );

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
  },
  button: {
    width: '100%',
  },
  options: {
    marginHorizontal: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  content: {
    marginBottom: 20,
    padding: 30,
    backgroundColor: 'white'
  },
  nameInput: {
    textAlign: 'center',
    alignItems: 'center',
    height: 40,
  },
  exerciseDetails: {
    height: 110,
    textAlignVertical: 'top'
  },
  exerciseScreen: {
    margin: 10,
    padding: 30,    
  },
  workoutScreen: {
    margin: 10,
    padding: 30,    
  },
  workoutList: {
    height: 200,
    padding: 10,
  },
  workout: {
    marginRight:40,
    marginLeft:40,
    marginTop:10,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#68a0cf',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  picker: {
    alignItems: 'center',
    textAlign: 'center',
    height: 50, width: 150

  }
});

const calendarTheme = {
  backgroundColor: '#ffffff',
  calendarBackground: '#ffffff',
  textSectionTitleColor: '#b6c1cd',
  textSectionTitleDisabledColor: '#d9e1e8',
  selectedDayBackgroundColor: '#00adf5',
  selectedDayTextColor: '#ffffff',
  todayTextColor: '#00adf5',
  dayTextColor: '#2d4150',
  textDisabledColor: '#d9e1e8',
  dotColor: '#00adf5',
  selectedDotColor: '#ffffff',
  arrowColor: 'orange',
  disabledArrowColor: '#d9e1e8',
  monthTextColor: 'blue',
  indicatorColor: 'blue',
  textDayFontFamily: 'monospace',
  textMonthFontFamily: 'monospace',
  textDayHeaderFontFamily: 'monospace',
  textDayFontWeight: '300',
  textMonthFontWeight: 'bold',
  textDayHeaderFontWeight: '300',
  textDayFontSize: 16,
  textMonthFontSize: 16,
  textDayHeaderFontSize: 16
}

export {
  styles,
  calendarTheme,
  Separator
}