document.addEventListener('DOMContentLoaded', () => {
  function animationNumber(currentPrice, priceLabel) {
    const time        = 150
    const stepNumber  = 72
    let counterPrice  = 0

    const timeInterval = Math.round(time / (currentPrice / stepNumber))
    const intervalChangeNumber = setInterval(() => {
      counterPrice += stepNumber

      if (counterPrice >= currentPrice) {
        clearInterval(intervalChangeNumber)
        priceLabel.innerHTML = currentPrice
      } else {
        priceLabel.innerHTML = counterPrice
      }
    }, timeInterval)
  }

  const currentForms = document.querySelectorAll('form.calculator-greenhouses')
  currentForms.forEach((form) => {
    function calcPrice() {
      const brandName           = form.querySelector("input[name='product']").value
      const arcType             = form.querySelector("input[name='arc_type']:checked").value
      const lengthDevice        = form.querySelector("input[name='length']:checked").value
      const arcStep             = form.querySelector("input[name='arc_step']:checked").value
      const polycarbonate       = form.querySelector("input[name='polycarbonate']:checked").value
      const calculatorPriceNew  = form.querySelector('.price--new')
      let calculationPrice      = 0

      calculationPrice += DATA.priceList[brandName][arcType][lengthDevice][arcStep][polycarbonate]
      calculatorPriceNew.innerHTML = Number(calculationPrice).toFixed()

      animationNumber(calculationPrice, calculatorPriceNew)
    }
    calcPrice()

    form.querySelectorAll("input[type='radio']").forEach((radioButton) => {
      radioButton.addEventListener('input', calcPrice)
    })
  })
})

