export default function arrowsScripts() {
  const scriptsContainer = document.querySelector('.scripts__ul');
  const scripts = document.querySelectorAll('.scripts__li');
  const btnPrev = document.querySelector('.scripts__scripts-btn-prev');
  const btnNext = document.querySelector('.scripts__scripts-btn-next');

  scriptsContainer.style.marginLeft = window.getComputedStyle(scriptsContainer)
    .getPropertyValue('margin-left');

  btnPrev.classList.add('scripts__scripts-btn-prev_disabled');
  btnNext.classList.add('scripts__scripts-btn-next_disabled');

  if (scripts.length > 9) {
    btnNext.classList.remove('scripts__scripts-btn-next_disabled');
  }


  const widthScenariosDiv = 670;
  let positionScriptsCarousel = 0;

  btnPrev.onclick = function () {
    positionScriptsCarousel = Math.min(positionScriptsCarousel + widthScenariosDiv, 0);

    btnNext.classList.remove('scripts__scripts-btn-next_disabled');

    if (!positionScriptsCarousel) {
      this.classList.add('scripts__scripts-btn-prev_disabled');
    }
    scriptsContainer.style.marginLeft = `${positionScriptsCarousel}px`;
  };

  btnNext.onclick = function () {
    positionScriptsCarousel = Math.max(positionScriptsCarousel - widthScenariosDiv,
      -widthScenariosDiv * Math.ceil(scripts.length / 9 - 1));

    btnPrev.classList.remove('scripts__scripts-btn-prev_disabled');

    if (positionScriptsCarousel === -widthScenariosDiv * Math.ceil(scripts.length / 9 - 1)) {
      this.classList.add('scripts__scripts-btn-next_disabled');
    }
    scriptsContainer.style.marginLeft = `${positionScriptsCarousel}px`;
  };
}
