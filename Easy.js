/**
 * @Title Two Number Sum
 * @Description find the two integers that add up to the the target. No duplicated elements.
 * @Input array, target
 * @Output [num1, num2]
 */
// O(n) time | O(n) space
function twoSum(array, target) {
  const arr = {};
  for (let i = 0; i < array.length; i++) {
    arr[array[i]] = true;
    const x = target - array[i];
    if (arr[x]) return [x, array[i]];
  }
  return false;
}

// O(n log(n)) time | O(1) space
function twoSum2(array, target) {
  array.sort();
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    let sum = array[left] + array[right];
    if (sum === target) return [array[left], array[right]];
    if (sum < target) left++;
    if (sum > target) right++;
  }
  return [];
}

/**
 * @Title Validate Subsequence
 * @Description find if the sequence is a subsequence of the original array.
 * @Input array, sequence
 * @Output boolean
 */
// O(n) time | O(1) space
function isValidSubsequence(array, sequence) {
  let seqIdx = 0;
  for (const value of array) {
    if (value === sequence[seqIdx]) seqIdx++;
    if (seqIdx === sequence.length) return true;
  }

  return false;
}

/**
 * @param {array of strings} cometitions
 * @param {array of winners} result
 * @return {name of the winner team}
 */

function tournamentWinner(competitions, results) {
  const NUM_OF_TEAMS = competitions.length;
  const Doubledscore = {};
  const score = {};
  for (let i = 0; i < competitions.length; i++) {
    const competition = competitions[i];
    Doubledscore[competition] = results[i];
  }

  const keys = Object.keys(Doubledscore);
  keys.forEach((doubleWinner) => {
    const result = Doubledscore[doubleWinner];
    const possibleTeams = doubleWinner.split(",");
    if (result === 0) {
      const winner = possibleTeams[1];
      if (score[winner]) {
        score[winner] += 1;
      } else {
        score[winner] = 1;
      }
    } else if (result === 1) {
      const winner = possibleTeams[0];
      if (score[winner]) {
        score[winner] += 1;
      } else {
        score[winner] = 1;
      }
    }
  });
  const totalScore = Object.values(score).sort((a,b) => b-a)
  const highestScore = totalScore[0]

  for (const key in score) {
    if (score[key] === highestScore) return key
  }
}
tournamentWinner(
  [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"],
  ],
  [0, 0, 1]
);
