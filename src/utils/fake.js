import { v4 as uuid } from "uuid";
import moment from "moment";
import { Random } from "random-js";
import { makeRandomExerciseNameList, makeExerciseList } from "./data";

const random = new Random();
const today = moment();

const FAKE_LIBRARY = [
  "deadlifts",
  "kettlebell swings",
  "leg curls",
  "push-ups",
  "pull-ups",
  "sit-ups",
  "split jumps",
  "squats",
  "tuck-ups",
  "walking lunges",
];

/*
 * returns an array of `count` workouts.
 *
 * [
 *   {
 *     id: 100,
 *     date: 2020-08-04T14:55:41.147Z,
 *     exercises: [
 *       { id: 1, name: 'squats', reps: 150 }
 *       { id: 2, name: 'pushup', reps: 50 }
 *     ]
 *   },
 *   {
 *     id: 200,
 *     date: 2020-07-30T14:55:41.147Z,
 *     exercises: [
 *       { id: 333, name: 'squats', reps: 100 }
 *       { id: 888, name: 'pullup', reps: 100 }
 *     ]
 *   },
 * ]
 */
export const makeFakeWods = async ({ count = 30 } = {}) =>
  new Array(count).fill({}).map(makeFakeWod).sort(sortByDate);

/*
 * returns what a user would submit when creating a new workout.
 * {
 *   id: 1234,
 *   date: 2020-07-30T14:55:41.147Z,
 *   exercises: [
 *     { id: 1234, name: 'squats', reps: 150 }
 *   ]
 * }
 */
export const makeFakeWod = ({
  exerciseNames = makeRandomExerciseNameList({ names: FAKE_LIBRARY }),
} = {}) => {
  return {
    id: uuid(),
    date: today
      .add({
        days: random.integer(1, 20),
        months: random.integer(1, 10),
      })
      .format(),
    exercises: makeExerciseList({ exerciseNames, reps: { min: 10, max: 250 } }),
  };
};

/*
 * custom callback function for Array.sort
 */
const sortByDate = (a, b) => {
  if (moment(a.date).isBefore(b.date)) return -1;
  if (moment(a.date).isAfter(b.date)) return 1;
  return 0;
};
