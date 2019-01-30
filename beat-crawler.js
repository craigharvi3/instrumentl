let beats = [];
document.querySelectorAll('.sound-row').forEach((element) => {
  beats.push({
    name: element.querySelector('.sound-name').innerHTML,
    type: element.querySelector('.type').innerHTML,
    instrument: element.querySelector('.instrument').innerHTML,
    bpm: element.querySelector('.bpm').innerHTML,
    key: element.querySelector('.key').innerHTML,
  });
});
console.log(JSON.stringify(beats));