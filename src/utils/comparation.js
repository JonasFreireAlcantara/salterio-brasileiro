export default function psalmComparation(psalmOne, psalmTwo) {
  let titleOne = psalmOne.title.match(/\d{1,3}[bBcC]?/)[0];
  let titleTwo = psalmTwo.title.match(/\d{1,3}[bBcC]?/)[0];

  titleOne = titleOne.replace(/[bBcC]$/, '0000');
  titleTwo = titleTwo.replace(/[bBcC]$/, '0000');

  return Number(titleOne) - Number(titleTwo);
}
