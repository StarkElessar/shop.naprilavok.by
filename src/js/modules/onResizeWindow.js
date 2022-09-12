document.addEventListener('DOMContentLoaded', () => {
  const sectionTitles = document.querySelectorAll('.title-resize')

  const onResize = () => {
    if (sectionTitles) {
      sectionTitles.forEach((title) => {
        title.classList.toggle('title-line', window.innerWidth > 830)
      })
    }
  }

  window.onresize = onResize
  onResize()
})
