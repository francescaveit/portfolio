(function() {
  var $form = document.querySelector('#register-form');
  var $emailInput = document.querySelector('#email');
  var $nameInput = document.querySelector('#name');
  var $messageInput = document.querySelector('#message');

  function validateEmail() {
    var value = $emailInput.value;

    if (!value) {
      showErrorMessage($emailInput, 'Email is a required field.');
      return false;
    }

    if (value.indexOf('@') === -1) {
      showErrorMessage($emailInput, 'You must enter a valid email address.');
      return false;
    }

    showErrorMessage($emailInput, null);
    return true;
  }

  function validateName() {
    var value = $nameInput.value;

    if (!value) {
      showErrorMessage($nameInput, 'Name is a required field.');
      return false;
    }

    showErrorMessage($nameInput, null);
    return true;
  }

  function validateMessage() {
    var value = $messageInput.value;

    if (!value) {
      showErrorMessage($messageInput, 'Message is a required field.');
      return false;
    }

    showErrorMessage($messageInput, null);
    return true;
  }

function validateForm() {
  var isValidEmail = validateEmail();
  var isValidName = validateName();
  var isValidMessage = validateMessage();
  return isValidEmail && isValidName && isValidMessage;
  }

function showErrorMessage($input, message) {
  var $container = $input.parentElement; // The .input-wrapper

  // Remove an existing error
  var error = $container.querySelector('.error-message');
  if (error) {
    $container.removeChild(error);
  }

  // Now add the error if the message isn’t empty
  if (message) {
    var error = document.createElement('div');
    error.classList.add('error-message');
    error.innerHTML = '<div class="error">' + message + '</div>';
    $container.appendChild(error);
  }
}



$form.addEventListener("click", function(){
  //console.log("click");
  if (validateForm()) {
    //alert('Success!');
  }
});

$form.addEventListener('submit', function() {

    console.log ("test");
    e.preventDefault(); // Do not submit to the server
    if (validateForm()) {
      alert('Success!');
    }
  })
})();

/*(function() {

var $form = document.querySelector('#contact-form');
var $emailInput = document.querySelector('#email');
var $passwordInput = document.querySelector('#password');

console.log ($form);

function validateEmail()
  {
  var value = $emailInput.value;

  if (!value)
    {
    showErrorMessage($emailInput, 'Email is a required field.');
    return false;
    }

  if (value.indexOf('@') === -1)
    {
    showErrorMessage($emailInput, 'You must enter a valid email address.');
    return false;
    }

  showErrorMessage($emailInput, null);
  return true;
  }

function validatePassword()
  {
  var value = $passwordInput.value;

  if (!value)
    {
    showErrorMessage($passwordInput, 'Password is a required field.');
    return false;
    }

  if (value.length < 8)
    {
    showErrorMessage($passwordInput, 'The password needs to be at least 8 characters long.');
    return false;
    }

  showErrorMessage($passwordInput, null);
  return true;
  }

function validateForm()
  {
  var isValidEmail = validateEmail();
  var isValidPassword = validatePassword();
  return isValidEmail && isValidPassword;
  }

function showErrorMessage($input, message)
  {
  var $container = $input.parentElement; // The .input-wrapper

  // Remove an existing error
  var error = $container.querySelector('.error-message');

  if (error)
    {
    $container.removeChild(error);
    }

  // Now add the error if the message isn’t empty

  if (message)
    {
    var error = document.createElement('div');
    error.classList.add('error-message');
    error.innerText = message;
    $container.appendChild(error);
    }
  }

  $form.addEventListener('submit', (e) =>
    {
    console.log ("yes");
    e.preventDefault(); // Do not submit to the server
    if (validateForm())
      {

      }
    })
})();*/
