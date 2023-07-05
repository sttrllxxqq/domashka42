// 42
function generateList(array) {
  const ul = document.createElement('ul');

  for (let i = 0; i < array.length; i++) {
    const item = document.createElement('li');

    if (Array.isArray(array[i])) {
      const nestedUl = generateList(array[i]);
      item.appendChild(nestedUl);
    } else {
      item.textContent = array[i];
    }

    ul.appendChild(item);
  }

  return ul;
}

const array1 = [1, 2, 3];
const array2 = [1, 2, [1.1, 1.2, 1.3], 3];

const list1 = generateList(array1);
const list2 = generateList(array2);

document.body.appendChild(list1);
document.body.appendChild(list2);
