const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const list = document.querySelector(".gallery");
console.log(list)

const galery = images
  .map(
    (img) =>
      `<li><img src='${img.url}' alt='${img.alt}' width="320" height="240" class='style'></li>`
  )
  .join("");



list.insertAdjacentHTML("beforeend", galery);

list.style.display = "flex";
list.style.flexWrap = "wrap";
list.style.alignItems = "center";
list.style.gap = "35px";
list.style.justifyContent = "center";