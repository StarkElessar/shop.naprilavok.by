// Переход по ссылкам с применением класса active
const onClickNavLinks = () => {
  if (anchorLinks) {
    anchorLinks.forEach((anchorLink) => {
      anchorLink.onclick = (event) => {
        event.preventDefault()
        
        anchorLinks.forEach((activeAnchorLink) => activeAnchorLink.classList.remove('active'));
        anchorLink.classList.add('active');
        burgerBtn.classList.remove('nav-header__burger--active');
        navHeaderMenu.classList.remove('nav-header__menu-list--active');
        if (isBodyLock) setIsBodyLock()
      }
    });
  }
}