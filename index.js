const slider = (() => {
  const images = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
  ];

  const nextImage = () => {
    const image = document.querySelector('.image');
    const fullPath = image.src;
    const filename = fullPath.replace(/^.*[\\\/]/, '');

    const indexOfCurrentImg = images.indexOf(filename);
    if (indexOfCurrentImg >= 0) {
      let indexOfNextImage = indexOfCurrentImg + 1;
      if (indexOfNextImage === 4) {
        indexOfNextImage = 0;
      }

      const nextImageFileName = images[indexOfNextImage];
      const nextImageFullPath = `./images/${nextImageFileName}`;

      image.src = `${nextImageFullPath}`;
    }
  };

  const animateSlider = () => {
    // images.forEach((image) => {
    //   console.log(image);
    // });
    const btn = document.querySelector('.next');
    btn.addEventListener('click', () => {
      nextImage();
    });
  };

  return {
    animateSlider,
  };
})();

slider.animateSlider();
