import { v4 as uuid } from "uuid";
import moment from "moment";
import { Random } from "random-js";

export const EXERCISE_LIBRARY = [
  "air squats",
  "w.lunges",
  "b.lunges",
  "push-ups",
  "pull-ups",
  "tuck-ups",
  "deadlifts",
  "rows",
  "tricep ext",
  "chin-ups",
  "split jumps",
  "leg curls",
  "kb swings",
  "mtn climbers",
].sort();
const random = new Random();
const today = moment();

/*
 * returns something like this:
 *
 * {
 *   id: 1234, name: 'squats', reps: 150
 * }
 *
 */
const createExercise = () => {
  return {
    id: uuid(),
    name: EXERCISE_LIBRARY[random.integer(0, EXERCISE_LIBRARY.length - 1)],
    reps: random.integer(10, 100),
  };
};

/*
 * reducer function. eventually returns something like this:
 *
 * {
 *   "squats": { id: 1234, name: 'squats', reps: 150 },
 *   ...
 * }
 *
 */
const uniqifyByExerciseName = (result, wod) => {
  if (!result[wod.name]) {
    result[wod.name] = { ...wod };
  }
  return result;
};

/*
 * returns something like this:
 *
 * [
 *   { id: 1234, name: 'squats', reps: 150 },
 *   ...
 * ]
 */
const createExerciseList = () => {
  const exercisesByName = new Array(random.integer(5, EXERCISE_LIBRARY.length))
    .fill({})
    .map(createExercise)
    .reduce(uniqifyByExerciseName, {});

  return Object.keys(exercisesByName).map((key) => exercisesByName[key]);
};

/*
 * returns something like this:
 *
 * {
 *   id: 1234,
 *   date: 2020-07-30T14:55:41.147Z,
 *   exercises: [
 *     { id: 1234, name: 'squats', reps: 150 }
 *   ]
 * }
 */
const createWod = () => {
  return {
    id: uuid(),
    date: today
      .add({
        days: random.integer(1, 20),
        months: random.integer(1, 10),
      })
      .format(),
    exercises: createExerciseList(),
  };
};

/*
 * returns something like this:
 *
 * [ "rgb(255,255,255)" ]
 */
const genColors = (numColors) => {
  const genRGB = () =>
    [
      random.integer(0, 255),
      random.integer(0, 255),
      random.integer(0, 255),
    ].join(",");

  return new Array(numColors).fill("").map(() => `rgb(${genRGB()})`);
};

/*
 * returns something like this:
 *
 * [
 *   {
 *     label: "squats",
 *     backgroundColor: "rgb(56,255,94)",
 *     data: [150, 50, 100]
 *   }
 * ]
 */
const createDatasets = (wods) => {
  const wodHash = wods.reduce((hash, wod) => {
    wod.exercises.forEach((exercise) => {
      if (!hash[exercise.name]) {
        hash[exercise.name] = {
          label: exercise.name,
          backgroundColor: "",
          data: [],
        };
      }
    });
    return hash;
  }, {});

  Object.keys(wodHash).forEach((exerciseKey) => {
    wods.forEach((wod) => {
      const target = wod.exercises.find(
        (exercise) => exercise.name === exerciseKey
      );
      wodHash[exerciseKey].data.push(target ? target.reps : 0);
    });
  });

  const colors = genColors(Object.keys(wodHash).length);

  return Object.keys(wodHash).map((key, idx) => ({
    ...wodHash[key],
    backgroundColor: colors[idx],
  }));
};

const sortByDate = (a, b) => {
  if (moment(a.date).isBefore(b.date)) return -1;
  if (moment(a.date).isAfter(b.date)) return 1;
  return 0;
};

export const genWods = (numWods) =>
  new Array(numWods).fill({}).map(createWod).sort(sortByDate);

export const genLabels = (wods) =>
  wods.map((wod) => moment(wod.date).format("MM-DD-YY"));

export const genDatasets = (wods) => createDatasets(wods);
