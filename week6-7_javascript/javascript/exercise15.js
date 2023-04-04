const form = document.querySelector('form');
const ipInput = form.querySelector('input[name="ip"]');
const urlInput = form.querySelector('input[name="url"]');
const zipcodeInput = form.querySelector('input[name="zipcode"]');

const ipRegex = /^(([01]?\d{1,2}|2([0-4]\d|5[0-5]))\.){3}([01]?\d{1,2}|2([0-4]\d|5[0-5]))$/;

const urlRegex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i;

const zipcodeRegex = /^\d{5}(?:[-\s]\d{4})?$/;

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (ipInput.value.trim() !== '' && !ipRegex.test(ipInput.value.trim())) {
    window.alert('Invalid IP address');
    return;
  }

  if (urlInput.value.trim() !== '' && !urlRegex.test(urlInput.value.trim())) {
    window.alert('Invalid URL');
    return;
  }

  if (zipcodeInput.value.trim() !== '' && !zipcodeRegex.test(zipcodeInput.value.trim())) {
    window.alert('Invalid ZIP code');
    return;
  }

  window.alert('Form submitted successfully');
});
