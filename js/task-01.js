const categoris = document.querySelector('#categories');
const item = document.querySelectorAll('li.item')


//Порахує і виведе в консоль кількість категорій в ul#categories,
// тобто елементів li.item.
console.log("Number of categories:", categoris.children.length);


//Для кожного элемента li.item у списку ul#categories,
// знайде і виведе в консоль текст заголовку елемента(тегу < h2 >)
// і кількість елементів в категорії(усіх < li >, вкладених в нього).
item.forEach(elem =>  {
    console.log(`Category: ${elem.querySelector("h2").textContent}`);
    console.log(`Elements: ${elem.querySelectorAll('li').length}`)
})