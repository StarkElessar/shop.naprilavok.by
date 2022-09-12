const navMenu = document.querySelector('.nav-header__menu-list')
const navLinks = document.querySelectorAll('._link')
const section = document.querySelectorAll('._section')

const getId = (link) => link.getAttribute('href').replace('#', '')

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navLinks.forEach((link) => {
        link.classList.toggle('active', getId(link) === entry.target.id)
      })
    }
  })
}, {
  threshold: [0.15, 0.7],
})

if (section) {
  section.forEach((section) => observer.observe(section))
}

navMenu.onclick = (event) => {
  if (event.target.classList.contains('_link')) {
    event.preventDefault()

    window.scrollTo({
      top: document.getElementById(getId(event.target)).offsetTop,
      behavior: 'smooth',
    })
    onClickNavLinks()
  }
}
