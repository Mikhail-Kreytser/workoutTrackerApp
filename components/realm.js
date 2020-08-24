import Realm from 'realm';

class Exercise extends Realm.Object {}
Exercise = {
  name: 'Exercise',
  primaryKey: 'id',
  properties: {
    id: "int",
    name:  'string',
    info: 'string',
  },
};

class Workout extends Realm.Object {}
Workout = {
  name: 'Workout',
  primaryKey: 'id',
  properties: {
    id: "int",
    name:  'string',
    startDate: 'string',
    endDate: {type: 'string', optional: true},
    daysOfWeek: 'int[]',
    recurring: 'bool',
    exerciseIds: 'int[]',
  },
};

export default new Realm({schema: [Exercise, Workout]});
