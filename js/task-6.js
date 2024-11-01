function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const boxes = document.querySelector('#boxes');
const numIn = document.querySelector('input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');

const amount = numIn.value;

numIn.addEventListener('input', () => {
  return amount;
});

console.log(amount);
// const box = document.createElement('div');
// boxes.append(box);
// console.log(boxes);

function createBoxes(...amount) {
  let boxArray = [];
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    boxArray.push(box);
  }
  return boxArray;
  // return boxes.append(boxArray);
}
console.log(createBoxes(20));
// function createBoxes(amount) {
//   const box = document.createElement('div')
// };

// function destroyBoxes()

// btnCreate.addEventListener('click', createBoxes);
// btnDestroy.addEventListener('click', destroyBoxes);
