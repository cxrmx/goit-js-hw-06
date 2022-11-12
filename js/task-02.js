const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients")

let itemsHTML = []

for (const ingredient of ingredients) {
  const item = document.createElement('li')
  item.textContent = ingredient
  item.classList.add("item")
  itemsHTML.push(item)
}

list.append(...itemsHTML)
