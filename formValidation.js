const form = document.querySelector('#form');
const email = document.querySelector('#email');
const emailError = document.querySelector('.email-error');

const country = document.querySelector('#country-input');
const countryError = document.querySelector('.country-error');

const zipCode = document.querySelector('#zip-code');
const zipCodeError = document.querySelector('.zip-code-error');

const password = document.querySelector('#password');
const passwordError = document.querySelector('.password-error');

const confirmPassword = document.querySelector('#confirm-password');
const confirmPasswordError = document.querySelector('.confirm-password-error');

email.addEventListener('input', (event) => {
  if (email.validity.valid) {
    emailError.textContent = '';
    emailError.className = 'email-error';
  } else {
    showEmailError();
  }
});

country.addEventListener('input', (event) => {
  if (country.validity.valid) {
    countryError.textContent = '';
    countryError.className = 'country-error';
  } else {
    showCountryError();
  }
});

zipCode.addEventListener('input', (event) => {
  if (zipCode.validity.valid) {
    zipCodeError.textContent = '';
    zipCodeError.className = 'zip-code-error';
  } else {
    showZipCodeError();
  }
});

password.addEventListener('input', (event) => {
  if (password.validity.valid) {
    passwordError.textContent = '';
    passwordError.className = 'password-error';
  } else {
    showPasswordError();
  }
});

confirmPassword.addEventListener('input', (event) => {
  let password1 = password.value;
  let password2 = confirmPassword.value;

  if (password1 === password2) {
    confirmPassword.className = '';
    confirmPasswordError.textContent = '';
    confirmPasswordError.className = 'confirm-password-error';
  } else {
    showConfirmPasswordError();
  }
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
    
  if (!form.checkValidity()) {
    showEmailError();
    showCountryError();
    showZipCodeError();
    showPasswordError();
    showConfirmPasswordError();
    
    alert('Please fill out all the required fields correctly.');
  } else {
    let password1 = password.value;
    let password2 = confirmPassword.value;
    
    if (password1 === password2) {
      alert('High Five!');
    } else {
      showConfirmPasswordError();
    }
  }
});

function showEmailError() {
  if (email.validity.typeMismatch) {
    emailError.textContent = 'Enter a valid email address.';
  } else if (email.validity.valueMissing) {
    emailError.textContent = 'Please provide an email address.';
  }

  emailError.className = 'email-error active';
}

function showCountryError() {
  if (country.validity.valueMissing) {
    countryError.textContent = 'Please select a country.';
  }

  countryError.className = 'country-error active';
}

function showZipCodeError() {
  if (zipCode.validity.patternMismatch) {
    zipCodeError.textContent = 'Enter a valid 5-digit zip code.';
  } else if (zipCode.validity.valueMissing) {
    zipCodeError.textContent = 'Please enter a zip code.';
  }

  zipCodeError.className = 'zip-code-error active';
}

function showPasswordError() {
  if (password.validity.typeMismatch) {
    passwordError.textContent = 'Enter a valid password.';
  } else if (password.validity.valueMissing) {
    passwordError.textContent = 'Please choose a password.';
  }

  passwordError.className = 'password-error active';
}

function showConfirmPasswordError() {
  let password1 = password.value;
  let password2 = confirmPassword.value;

  if (password1 !== password2) {
    confirmPasswordError.textContent = 'Passwords must match.';
    confirmPassword.className = 'invalid';
  } else if (confirmPassword.validity.valueMissing) {
    confirmPasswordError.textContent = 'Re-enter the password to confirm.';
  } 

  confirmPasswordError.className = 'confirm-password-error active';
}