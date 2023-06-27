"use strict";

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

function imgStyle() {
  const ulElement = document.querySelector(".gallery");
  const imgElement = document.getElementsByTagName("img");

  ulElement.style.listStyle = "none";
  ulElement.style.display = "flex";
  ulElement.style.flexWrap = "wrap";
  ulElement.style.columnGap = "20px";
  ulElement.style.rowGap = "20px";
  
  // console.log(luChildren);
  for(const element of imgElement) {
    element.style.width = "350px";
  }
    
}

// create string content for second parameter of "insertAdjacentHTML" metod
const newElement = images.map(image => `<li><img src = ${image.url} alt = ${image.alt}></li>`)
.join("");

// add content (markup) to ul with "gallery" class
document.querySelector(".gallery").insertAdjacentHTML("afterbegin", newElement);

// add style for "img" element
imgStyle();