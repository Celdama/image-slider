const slider = (() => {
  const images = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
  ];

  const previousWithEffect = () => {
    const firstImg = document.querySelector('.image');
    const previousImg = document.querySelector('.image0');

    const fullPath = firstImg.src;
    const filename = fullPath.replace(/^.*[\\\/]/, '');
    const indexOfCurrentImg = images.indexOf(filename);

    if (indexOfCurrentImg >= 0) {
      let indexOfPreviousImage = indexOfCurrentImg - 1;
      if (indexOfPreviousImage < 0) {
        indexOfPreviousImage = 3;
      }

      const previousFileName = images[indexOfPreviousImage];
      const previousImageFullPath = `./images/${previousFileName}`;
      previousImg.src = `${previousImageFullPath}`;
      previousImg.classList.add('active-previous');

      setTimeout(() => {
        firstImg.src = previousImg.src;
        previousImg.classList.remove('active-previous');
      }, (1500));
    }
  };

  const nextWithEffect = () => {
    const firstImg = document.querySelector('.image');
    const secondImg = document.querySelector('.image2');

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
      secondImg.classList.add('active-next');

      setTimeout(() => {
        firstImg.src = secondImg.src;
        secondImg.classList.remove('active-next');
      }, 1500);
    }
  };

  const animateSlider = () => {
    const btn = document.querySelector('.next');
    btn.addEventListener('click', () => {
      nextWithEffect();
    });

    const previousBtn = document.querySelector('.previous');
    previousBtn.addEventListener('click', () => {
      previousWithEffect();
    });
  };

  return {
    animateSlider,
  };
})();

slider.animateSlider();
