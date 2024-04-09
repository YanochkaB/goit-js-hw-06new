const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


//Напиши скрипт, який для кожного елемента масиву ingredients:

//Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
//Додасть назву інгредієнта як його текстовий вміст.
//Додасть елементу клас item.
//Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const list = document.querySelector("#ingredients");
console.log(list)


const elements = ingredients.map((ingredient) => {
  const items = document.createElement("li");

  items.textContent = ingredient;
  items.classList.add("item");
  return items;
});

list.append(...elements)