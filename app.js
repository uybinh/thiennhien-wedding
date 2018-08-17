var openPhotoSwipe = function(index) {
  var pswpElement = document.querySelectorAll('.pswp')[0];

  // build items array
  var items = [
    {
      src: 'images/img-1.jpg',
      w: 1195,
      h: 795,
    },
    {
      src: 'images/img-2.jpg',
      w: 1237,
      h: 1200
    },
    {
      src: 'images/img-3.jpg',
      w: 1214,
      h: 808
    },
    {
      src: 'images/img-4.jpg',
      w: 1160,
      h: 773
    },
    {
      src: 'images/img-5.jpg',
      w: 1514,
      h: 1113
    },
    {
      src: 'images/img-6.jpg',
      w: 795,
      h: 1199
    },
  ];

  // define options (if needed)
  var options = {
    // optionName: 'option value'
    // for example:
    index: index // start at first slide
  };

  // Initializes and opens PhotoSwipe
  var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
  gallery.init();
};

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#btn').addEventListener("click", () => {
    openPhotoSwipe(1)
  })

  let images = document.querySelectorAll(".gallery a[class^='img']")
  images.forEach((image, index) => {
    image.addEventListener('click', (event) => {
      event.preventDefault()
      openPhotoSwipe(index)
    })
  })
})