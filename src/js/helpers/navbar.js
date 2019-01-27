document.addEventListener('DOMContentLoaded', () => {
  const navBar = document.querySelector('.header__ul');
  const links = document.querySelectorAll('.header__a');

  navBar.addEventListener('click', (event) => {
    if (event.target.nodeName === 'A') {
      for (let i = 0; i < links.length; i += 1) {
        links[i].classList.remove('header__a_active');
      }

      event.target.classList.add('header__a_active');
    }
  });
});
