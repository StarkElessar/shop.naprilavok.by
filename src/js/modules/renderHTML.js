const renderHTML = (catalogData, placeToRender, renderHTMLFunction) => {
  catalogData.forEach((itemCatalog) => {
    placeToRender.insertAdjacentHTML('beforeend', renderHTMLFunction(itemCatalog))
  })
}

const getHTMLAbout = (props) => `
  <div class="about__item">
    <div class="about__item-img">
      <img src="./img/icon${props.imgUrl}" alt="icon" class="lazy">
    </div>
    <h4 class="about__item-title">${props.title}</h4>
    <span class="about__item-description">${props.description}</span>
  </div>
`

const getHTMLMakepurchase = (props) => `
  <div class="makepurchase__item">
    <span class="makepurchase__number">${props.id}</span>
    <div class="makepurchase__subtitle">
      <span class="${props.className}">${props.subtitle} шаг</span>
      </div>
      <div class="makepurchase__item-title">
      <p>${props.title}</p>
      </div>
      <div class="makepurchase__item-text">
      <p>${props.description}</p>
    </div>
  </div>
`

const getHTMLCatalogTeplic = (props) => `
  <div class="catalog__card">
    <div class="catalog__card-title">
      <h4>${props.title}</h4>
    </div>
    <div class="catalog__card-slider slider">
      <div class="slider__container">
        <div class="slider__wrapper">
          <div class="slider__items">
            ${props.images.map(getImageHTML).join('')}
          </div>
        </div>
      </div>
      <a href="/" class="slider__control" data-slide="prev"></a>
      <a href="/" class="slider__control" data-slide="next"></a>
      <ol class="slider__indicators">${props.numberIndicators
        .map(getSliderIndicator)
        .join('')}</ol>
    </div>
    <form class="catalog__card-content calculator-greenhouses">
      <input type="hidden" name="product" value="${props.productName}">
      <div class="catalog__card-table card-table">
        <div class="card-table__row">
          <div class="card-table__column-1">Арочный профиль</div>
          <div class="card-table__column-2">${props.tube} мм</div>
        </div>
        <div class="card-table__row">
          <div class="card-table__column-1">Покрытие металла</div>
          <div class="card-table__column-2">Оцинковка</div>
        </div>
        <div class="card-table__row">
          <div class="card-table__column-1">Ширина теплицы</div>
          <div class="card-table__column-2">${props.width} м</div>
        </div>
        <div class="card-table__row">
          <div class="card-table__column-1">Высота теплицы</div>
          <div class="card-table__column-2">${props.height} м</div>
        </div>
        <div class="card-table__row">
          <div class="card-table__column-1">Поликарбонат</div>
          <div class="card-table__column-2">3 мм</div>
        </div>
        <div class="card-table__row">
          <div class="card-table__column-1">Грунтозацепы</div>
          <div class="card-table__column-2">245 мм</div>
        </div>
      </div>
      <div class="catalog__card-options">
        <p>Выберите дуги:</p>
        <div class="input__wrapper">
          <label class="catalog__card-label">
            <input type="radio" name="arc_type" value="demountable" checked>
            <span>Разборные</span>
          </label>
          <label class="catalog__card-label">
            <input type="radio" name="arc_type" value="one-piece">
            <span>Цельные</span>
          </label>
        </div>
        <p>Выберите длину теплицы:</p>
        <div class="input__wrapper">
          <label class="catalog__card-label" for="${props.id}-4m">
            <input type="radio" id="${props.id}-4m" name="length" value="4m" checked>
            <span>4 м</span>
          </label>
          <label class="catalog__card-label" for="${props.id}-6m">
            <input type="radio" id="${props.id}-6m" name="length" value="6m">
            <span>6 м</span>
          </label>
          <label class="catalog__card-label" for="${props.id}-8m">
            <input type="radio" id="${props.id}-8m" name="length" value="8m">
            <span>8 м</span>
          </label>
          <label class="catalog__card-label" for="${props.id}-10m">
            <input type="radio" id="${props.id}-10m" name="length" value="10m">
            <span>10 м</span>
          </label>
        </div>
        <p>Шаг между дугами:</p>
        <div class="input__wrapper">
          ${Object.keys(props.arcStep)
            .map((key, index) => {
              const { arcStep } = props
              const checked = index === 0 ? 'checked' : ''

              return `
                <label class="catalog__card-label" for="${props.id}-${
                arcStep[key]
              }sm">
                  <input type="radio" id="${props.id}-${
                arcStep[key]
              }sm" name="arc_step" value="${arcStep[key]}" ${checked}>
                  <span>${[key]} м</span>
                </label>
              `
            }).join('')}
        </div>
        <p>Толщина поликарбоната:</p>
        <div class="input__wrapper">
          ${props.polycarbonate.map((number, index) => {
            const checked = index === 0 ? 'checked' : ''

            return `
              <label class="catalog__card-label" for="${props.id}-${number}mm">
                <input type="radio" id="${props.id}-${number}mm" name="polycarbonate" value="${number}mm" ${checked}>
                <span>${number} мм</span>
              </label>
            `
          }).join('')}
          <label class="catalog__card-label" for="${props.id}-0mm">
            <input type="radio" id="${
              props.id
            }-0mm" name="polycarbonate" value="0mm">
            <span>Каркас</span>
          </label>
        </div>
      </div>
      <div class="catalog__card-price">
        <div class="catalog__card-price--old"></div>
        <div class="catalog__card-price--new">
          <span class="price--new"></span> BYN
        </div>
      </div>
      <div class="catalog__card-submit">
        <input
          title="Здесь можете указать Ваш номер телефона"
          type="tel"
          name="user_phone"
          class="catalog__card-input"
          placeholder="+375 (__) ___-__-__"
          required
        >
        <button
        title="Нажмите эту кнопку, чтобы забронировать скидку"
        type="submit"
        class="catalog__card-btn btn-blick"
        >
        Заказать
        </button>
      </div>
    </form>
  </div>
`

const getImageHTML = (img) => `
  <div class="slider__item catalog__card-img">
    <img src="./img/teplica/${img}" alt="Фото теплицы">
  </div>
`

const getSliderIndicator = (number) => `<li data-slide-to="${number}"></li>`

const getHTMLAddEquipment = (props) => {
  const srcUrl =
    'src="data:image/gif;base64,R0lGODlhGQACAIAAAP///wAAACH5BAEAAAEALAAAAAAZAAIAAAIGjI+py50FADs="'

  return `
    <div class="add-equipment__item item__block">
      <div class="item__img">
        <img class="lazy" ${srcUrl} data-src='img/add-equip${props.imgUrl}' alt="${props.altName}">
      </div>
      <div class="item-cover">
        <h3 class="item-cover__title">${props.name}</h3>
      </div>
      <div class="item-labels">
        <div class="item-labels__price">${props.price} руб.</div>
        <div class="item-labels__btn modal-feedback__btn--show">Купить</div>
      </div>
    </div>
  `
}

const getHTMLAccordion = (props) => `
  <div class="faq-accordion__item">
    <div class="item__header">
      <h4 class="item__header-title">${props.title}</h4>
    </div>
    <div class="item__body">
      <p class="item__body-text">${props.description}</p>
    </div>
  </div>
`

const aboutPlace = document.querySelector('.about__items')
const makepurchasePlace = document.querySelector('.makepurchase__items')
const catalogTeplicPlace = document.querySelector('.catalog__items')
const addEquipmentPlace = document.querySelector('.add-equipment__items')
const accordionPlace = document.querySelector('.faq-accordion')

renderHTML(DATA.about, aboutPlace, getHTMLAbout)
renderHTML(DATA.makepurchase, makepurchasePlace, getHTMLMakepurchase)
renderHTML(DATA.catalogTeplic, catalogTeplicPlace, getHTMLCatalogTeplic)
renderHTML(DATA.addEquipment, addEquipmentPlace, getHTMLAddEquipment)
renderHTML(DATA.accordion, accordionPlace, getHTMLAccordion)
