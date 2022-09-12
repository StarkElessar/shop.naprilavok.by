@@include('./lib/jquery-3.6.0.min.js')
@@include('./lib/lazyload.min.js')

@@include('./plugins/it-chief-slider.js')

@@include('./Data.js')
@@include('./modules/renderHTML.js')
@@include('./plugins/calculatorPrice.js')

@@include('./modules/testWebP.js')
@@include('./modules/lazyLoadInit.js')
@@include('./modules/onResizeWindow.js')
@@include('./modules/onClickNavLinks.js')
@@include('./modules/setActiveLink.js')
@@include('./modules/chiefSliderInit.js')
@@include('./modules/maskedInputInit.js')
@@include('./modules/sendingDataFromForms.js')

@@include('./plugins/loading-yandex-map.js')

const header = document.querySelector('#nav-header')
const firstScreen = document.querySelector('#first-screen')

const headerStickyObserver = new IntersectionObserver(([entry]) => {
  header.classList.toggle('sticky', !entry.isIntersecting)
})

headerStickyObserver.observe(firstScreen)

// Фикс дергания экрана при появлении Модального окна
const TIMEOUT                 = 280
const body                    = document.querySelector('body')
const anchorLinks             = document.querySelectorAll('a._link')
const lockPaddingElements     = document.querySelectorAll('.lock-padding')
const lockPosition            = document.querySelector('.lock-position')
const modalLegalInfo          = document.querySelector('.legal-info__modal')
const closeBtnModalLegalInfo  = document.querySelector('.legal-info__close-btn')
const showModalLegalInfoBtn   = document.querySelector('.legal-info__btn')
const modalFeedbackRequest    = document.querySelector('.feedback-request__modal')
const showModalFeedbackBtns   = document.querySelectorAll('.modal-feedback__btn--show')
const closeBtnModalFeedback   = document.querySelector('.feedback-request__close-btn')

if (showModalLegalInfoBtn && closeBtnModalLegalInfo) {
  showModalLegalInfoBtn.onclick = () => {
    modalLegalInfo.classList.add('show')
    bodyToggleLock(true)
  }
  closeBtnModalLegalInfo.onclick = () => {
    modalLegalInfo.classList.remove('show')
    bodyToggleLock(false)
    setTransition(false)
  }
}
if (showModalFeedbackBtns && closeBtnModalFeedback) {
  showModalFeedbackBtns.forEach((btn) => {
    btn.onclick = () => {
      modalFeedbackRequest.classList.add('show')
      bodyToggleLock(true)
    }
  })
  closeBtnModalFeedback.onclick = () => {
    modalFeedbackRequest.classList.remove('show')
    bodyToggleLock(false)
    setTransition(false)
  }
}

function bodyToggleLock(isLock) {
  const pageWrapper      = document.querySelector('.page')
  const lockPaddingValue = window.innerWidth - pageWrapper.offsetWidth

  if (lockPaddingElements) {
    lockPaddingElements.forEach((element) => {
      element.style.paddingRight = isLock ? `${lockPaddingValue}px` : '0px'
      element.style.transition = 'none'
    })
  }
  lockPosition.style.right = 15 + (isLock ? lockPaddingValue : 0) + 'px'
  body.style.paddingRight = isLock ? `${lockPaddingValue}px` : '0px'
  body.classList.toggle('lock', isLock)
}

// Возвращение свойства transition после закрытия модального окна
function setTransition(isLock) {
  setTimeout(() => {
    if (lockPaddingElements) {
      lockPaddingElements.forEach(element => {
        element.style.transition = isLock ? 'none' : 'all 280ms ease 0ms'
      })
    }
  }, TIMEOUT + 500)
}

// Burger Menu
const burgerBtn     = document.querySelector('.nav-header__burger')
const navHeaderMenu = document.querySelector('.nav-header__menu-list')
let isBodyLock      = false
const setIsBodyLock = () => {
  isBodyLock = !isBodyLock
  setTransition(isBodyLock)
  bodyToggleLock(isBodyLock)
}
if (burgerBtn) {
  burgerBtn.onclick = () => {
    burgerBtn.classList.toggle('nav-header__burger--active')
    navHeaderMenu.classList.toggle('nav-header__menu-list--active')
    setIsBodyLock()
  }
}
// Аккордеон
(() => {
  const accordionItems = document.querySelectorAll('.faq-accordion__item')
  const accordionContainer = document.querySelector('.faq-accordion')

  accordionItems.forEach((item, index) => {
    const header = item.querySelector('.item__header')
    const content = item.querySelector('.item__body')

    if (item.hasAttribute('data-open')) {
      item.classList.add('active')
      content.style.height = `${content.scrollHeight}px`
    }
    const colorBackground = item.dataset.colorBack
    const colorBorder = item.dataset.colorBorder

    if (colorBackground || colorBorder) {
      item.style.background = colorBackground
      item.style.borderColor = colorBorder
    }

    header.addEventListener('click', () => {
      item.classList.toggle('active')
      if (item.classList.contains('active')) {
        content.style.height = `${content.scrollHeight}px`
      } else {
        content.style.height = 0
      }

      if (accordionContainer.dataset.autoClosing === 'true') {
        removeOpen(index)
      }
    })
  })

  function removeOpen(i) {
    accordionItems.forEach((item, index) => {
      if (i != index) {
        const content = item.querySelector('.item__body')

        item.classList.remove('active')
        content.style.height = 0
      }
    })
  }
})()
