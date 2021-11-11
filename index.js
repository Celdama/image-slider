const slider = (() => {
  const images = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg',
    '10.jpg',
  ];

  const toggleCurrentDot = (index) => {
    const dots = Array.from(document.querySelectorAll('li'));
    dots.forEach((dot) => {
      if (dot.classList.contains('current')) {
        dot.classList.remove('current');
      }
    });
    dots[index].classList.toggle('current');
  };

  const previousSlide = () => {
    const firstImg = document.querySelector('.image');
    const previousImg = document.querySelector('.image0');

    const fullPath = firstImg.src;
    const filename = fullPath.replace(/^.*[\\\/]/, '');
    const indexOfCurrentImg = images.indexOf(filename);

    if (indexOfCurrentImg >= 0) {
      let indexOfPreviousImage = indexOfCurrentImg - 1;
      if (indexOfPreviousImage < 0) {
        indexOfPreviousImage = 9;
      }

      toggleCurrentDot(indexOfPreviousImage);

      const previousImageFileName = images[indexOfPreviousImage];
      const previousImageFullPath = `./images/${previousImageFileName}`;
      previousImg.src = `${previousImageFullPath}`;
      previousImg.classList.add('active-previous');

      setTimeout(() => {
        firstImg.src = previousImg.src;
        previousImg.classList.remove('active-previous');
      }, (1500));
    }
  };

  const nextSlide = () => {
    const firstImg = document.querySelector('.image');
    const secondImg = document.querySelector('.image2');

    const fullPath = firstImg.src;
    const filename = fullPath.replace(/^.*[\\\/]/, '');

    const indexOfCurrentImg = images.indexOf(filename);
    if (indexOfCurrentImg >= 0) {
      let indexOfNextImage = indexOfCurrentImg + 1;
      if (indexOfNextImage === 10) {
        indexOfNextImage = 0;
      }

      toggleCurrentDot(indexOfNextImage);

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
      nextSlide();
    });

    const previousBtn = document.querySelector('.previous');
    previousBtn.addEventListener('click', () => {
      previousSlide();
    });

    setInterval(() => {
      nextSlide();
    }, 7000);
  };

  return {
    animateSlider,
  };
})();

slider.animateSlider();
