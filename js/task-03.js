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

let elementLiArr = [];

for(const element of images) {
  let newElement = document.createElement("li"); 
  let newImag = document.createElement("img");
  newImag.setAttribute("src", element.url);
  newImag.setAttribute("alt", element.alt);
  newImag.style.width = "500px";
  newImag.style.flexWrap = "wrap";
  newElement.appendChild(newImag);
  elementLiArr.push(newElement);
  // .setAttribute("src", element.url)
}

document.querySelector(".gallery").insertAdjacentHTML("afterbegin", ...elementLiArr);