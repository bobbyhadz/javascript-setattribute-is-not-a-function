console.log('bobbyhadz.com');

const boxes = document.querySelectorAll('.box');
console.log(boxes); // 👉️ [div.box, div.box, div.box]

// ✅ Works
boxes[0].setAttribute('id', 'first');

const box = null;

if (
  typeof box === 'object' &&
  box !== null &&
  'setAttribute' in box
) {
  box.setAttribute('id', 'example');
}
