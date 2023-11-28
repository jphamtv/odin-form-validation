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
  if (confirmPassword.validity.valid) {
    confirmPassword.textContent = '';
    confirmPassword.className = 'confirm-password-error';
  } else {
    showConfirmPasswordError();
  }
});

form.addEventListener('submit', (event) => {
  if (!email.validity.valid) {
    showEmailError();
  } 
  
  if (!country.validity.valid) {
    showCountryError();
  } 
  
  if (!zipCode.validity.valid) {
    showZipCodeError();
  } 
  
  if (!password.validity.valid) {
    showPasswordError();
  } 
  
  if (!confirmPassword.validity.valid) {
    showConfirmPasswordError();
  }

  event.preventDefault();
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

// function showConfirmPasswordError() {
//   if (confirmPassword.validity.typeMismatch) {
//     confirmPasswordError.textContent = 'Passwords must match.';
//   } else if (confirmPassword.validity.valueMissing) {
//     confirmPasswordError.textContent = 'Re-enter the password.';
//   }

//   confirmPasswordError.className = 'confirm-password-error active';
// }

function showConfirmPasswordError() {
  if (password.value !== confirmPassword.value) {
    console.log(password.value, confirmPassword.value);
    confirmPasswordError.textContent = 'Passwords must match.';
  } else if (confirmPassword.validity.valueMissing) {
    confirmPasswordError.textContent = 'Re-enter the password to confirm.';
  } else {
    confirmPasswordError.textContent = '';
  }

  confirmPasswordError.className = 'confirm-password-error active';
}