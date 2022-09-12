const submissionForms = () => {
  const allForms  = document.querySelectorAll('form')
  const allInputs = document.querySelectorAll('input')

  const postData = async (url, data) => {
    const result = await fetch(url, {
      method: 'POST',
      body: data
    })

    return await result.text()
  }

  const clearInputs = () => {
    allInputs.forEach((input) => input.value = '')
  }

  allForms.forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault()
      const formData = new FormData(form)

      postData('../mail-telegram.php', formData)
        .then((result) => {
          window.location.href = '/thanks/';
        })
        .catch(() => {
          window.location.href = '/error/';
        })
        .finally(() => {
          clearInputs()
        })
    })
  })
}

window.addEventListener('DOMContentLoaded', () => {
  submissionForms()
})