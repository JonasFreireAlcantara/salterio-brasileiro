export default function psalmComparation(psalmOne, psalmTwo) {
  let titleOne = psalmOne.title.match(/\d{1,3}[b|B]?/)[0];
  let titleTwo = psalmTwo.title.match(/\d{1,3}[b|B]?/)[0];

  titleOne = titleOne.replace(/[b|B]$/, '0000');
  titleTwo = titleTwo.replace(/[b|B]$/, '0000');

  return Number(titleOne) - Number(titleTwo);
}
