//

const carrousel = document.querySelector('.carousel');
let sliders = [];

let slidersIndex = 0; // to track current slide index

// function to create a slide:
const createSlide = () => {
  if (slideIndex >= movies.length) {
    slidersIndex = 0;
  }

  // creating DOM elements
  let slide = document.createElement('div');
  let imgElement = document.createElement('img');
  let content = document.createElement('div');
  let h1 = document.createElement('h1');
  let p = document.createElement('p');

  // attaching all elements to slide
  imgElement.appendChild(document.createTextNode(''));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].description));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(content);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);

  // setting up images
  imgElement.src = movies[slideIndex].image;
  slideIndex++;

  // setting elements class name
  slide.className = 'slider';
  content.className = 'slider-content';
  h1.className = 'movie-title';
  p.className = 'movie-des';
  sliders.push(slide);

  // adding  sliding effect
  if(sliders.length){
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)} - ${30 * (sliders.length - 2)})`;
  }
}

for(let i = 0; i < 3; i++){
  createSlide();
}

setInterval(() => {
  createSlide();
}, 3000);
