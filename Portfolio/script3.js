const scriptURL = 'https://script.google.com/macros/s/AKfycbwXiBm-gv2Wbv0VEEWRoLBB3GO9j2hB9V1j7hqCR1XF8sMwLQvQ9k8PFMgvhoUqa_MfIw/exec'
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => alert("Thanks for contacting me..! I will contact you soon..."))
    .catch(error => console.error('Error!', error.message))
})