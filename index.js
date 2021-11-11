const slider = (() => {
  const images = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
  ];

  const previousWithEffect = () => {

  };

  const nextWithEffect = () => {
    const firstImg = document.querySelector('.image');
    const secondImg = document.querySelector('.image2');
    console.log(secondImg);

    const fullPath = firstImg.src;
    const filename = fullPath.replace(/^.*[\\\/]/, '');

    const indexOfCurrentImg = images.indexOf(filename);
    if (indexOfCurrentImg >= 0) {
      let indexOfNextImage = indexOfCurrentImg + 1;
      if (indexOfNextImage === 4) {
        indexOfNextImage = 0;
      }

      const nextImageFileName = images[indexOfNextImage];
      const nextImageFullPath = `./images/${nextImageFileName}`;
      secondImg.src = `${nextImageFullPath}`;
      secondImg.classList.add('active');

      setTimeout(() => {
        firstImg.src = secondImg.src;
        secondImg.classList.remove('active');
      }, 1500);
    }
  };

  const animateSlider = () => {
    // images.forEach((image) => {
    //   console.log(image);
    // });

    const btn = document.querySelector('.next');
    btn.addEventListener('click', () => {
      nextWithEffect();
    });
  };

  return {
    animateSlider,
  };
})();

slider.animateSlider();
