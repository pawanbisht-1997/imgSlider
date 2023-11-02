const gallery = [
    'img/slide1.png',
    'img/slide2.png',
    'img/slide3.png',
    'img/slide4.png',
]

const sliderImage = document.querySelector('#sliderImage');
const prevImage = document.querySelector('#prev-image-button');
const nextImage = document.querySelector('#next-image-button');

let currentIndex = 0;

const displayImg =(index)=>{
    sliderImage.src =  gallery[index];
}

prevImage.addEventListener('click', ()=>{
  if(currentIndex>0)
  {
    currentIndex--;
  }
  else{
    currentIndex = gallery.length -1;
  }
  displayImg(currentIndex);
})

nextImage.addEventListener('click', ()=>{
    if(currentIndex<gallery.length-1)
    {
        currentIndex++;
    }
    else{
        currentIndex = 0;
    }
    displayImg(currentIndex);
})