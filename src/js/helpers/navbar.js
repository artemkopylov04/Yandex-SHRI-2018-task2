export default function navbar() {
  const navBar = document.querySelector('.header__ul');
  const links = document.querySelectorAll('.header__a');

  navBar.addEventListener('click', (e) => {

    const { classList } = e.target;

    if (classList.contains('header__a')) {
      Object.values(links).map((el) => {
          el.classList.remove('header__a_active');
      });

      classList.add('header__a_active');
    }
  });
}
