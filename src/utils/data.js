import moment from "moment";
import { v4 as uuid } from "uuid";
import { Random } from "random-js";

const random = new Random();

/*
 * given an array of objects of the form:
 * [
 *   { date: 2020-08-04T14:55:41.147Z, ... },
 *   { date: 2020-07-30T14:55:41.147Z, ... },
 * ]
 *
 * returns:
 * [
 *   '08-04-20', '07-30-20'
 * ]
 */
export const makeLabels = (wods = []) =>
  wods.map((wod) => moment(wod.date).format("MM-DD-YY"));

/*
 * given the example in the comments for `makeFakeWods` in `fake.js`, returns:
 * [
 *   {
 *     label: "squats",
 *     backgroundColor: "rgb(56,255,94)",
 *     data: [150, 100]
 *   },
 *   {
 *     label: "pullup",
 *     backgroundColor: "rgb(97,55,54)",
 *     data: [0, 100]
 *   },
 *   {
 *     label: "pushup",
 *     backgroundColor: "rgb(111,90,43)",
 *     data: [50, 0]
 *   },
 * ]
 *
 * the `data` property length must equal the number of 'wods' processed.
 */
export const makeDatasets = (wods = []) => {
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

  Object.keys(wodHash).forEach((exerciseName) => {
    wods.forEach((wod) => {
      const targetEx = wod.exercises.find(
        (exercise) => exercise.name === exerciseName
      );
      wodHash[exerciseName].data.push(targetEx ? targetEx.reps : 0);
    });
  });

  const colors = makeRandomColors({
    count: Object.keys(wodHash).length,
    exclude: [[255, 255, 255]],
  }).map((rgb) => `rgb(${rgb.join(",")})`);

  return Object.keys(wodHash).map((exerciseName, idx) => ({
    ...wodHash[exerciseName],
    backgroundColor: colors[idx],
  }));
};

/*
 * returns an array of exercise names, each randomly choosen from `names`.
 */
export const makeRandomExerciseNameList = ({ names = [], count = 6 } = {}) => {
  const result = [];
  let idx = 0;
  let exerciseNames = names.slice();

  for (let i = 0; i < count && exerciseNames.length > 0; i += 1) {
    idx = random.integer(0, exerciseNames.length - 1);
    result.push(exerciseNames[idx]);
    exerciseNames.splice(idx, 1);
  }

  return result;
};

/*
 * given a list of exercise names (see `makeRandomExerciseNameList()`), returns:
 * [
 *   { id: 222, 'squats', reps: 0 }
 * ]
 *
 * or, if a rep range is given, returns:
 * [
 *   { id: 222, 'squats', reps: 30 }
 *   { id: 345, 'push-ups', reps: 100 }
 * ]
 */
export const makeExerciseList = ({
  exerciseNames = [],
  reps = { min: 0, max: 0 },
} = {}) =>
  exerciseNames.map((name) => ({
    id: uuid(),
    name,
    reps: reps.min === reps.max ? reps.min : random.integer(reps.min, reps.max),
  }));

/*
 * returns and array of rgb values
 * [
 *   [55,97,255], [255,9,56], ...
 * ]
 */
const makeRandomColors = ({ count = 10, exclude = [] } = {}) => {
  const discard = exclude.map((color) => color.join(""));

  const genRGB = () => [
    random.integer(0, 255),
    random.integer(0, 255),
    random.integer(0, 255),
  ];

  const genColor = () => {
    let color = genRGB();

    while (discard.includes(color.join(""))) {
      color = genRGB();
    }

    return color;
  };

  return new Array(count).fill([]).map(() => genColor());
};
