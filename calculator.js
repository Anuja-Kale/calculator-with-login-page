$(document).ready(() => {
  // get the username from the query string
  const urlParams = new URLSearchParams(window.location.search);
  const username = urlParams.get('username');

  // if the username exists, show a welcome message
  if (username) {
    $('#username').text(username);
  }

  // add event listeners to the buttons
  $('#add').click(() => {
    const num1 = parseFloat($('#number1').val());
    const num2 = parseFloat($('#number2').val());

    if (!isNaN(num1) && !isNaN(num2)) {
      $('#result').val(num1 + num2);
    } else {
      $('#result').val('');
      alert('Please enter valid numbers');
    }
  });

  $('#subtract').click(() => {
    const num1 = parseFloat($('#number1').val());
    const num2 = parseFloat($('#number2').val());

    if (!isNaN(num1) && !isNaN(num2)) {
      $('#result').val(num1 - num2);
    } else {
      $('#result').val('');
      alert('Please enter valid numbers');
    }
  });

  $('#multiply').click(() => {
    const num1 = parseFloat($('#number1').val());
    const num2 = parseFloat($('#number2').val());

    if (!isNaN(num1) && !isNaN(num2)) {
      $('#result').val(num1 * num2);
    } else {
      $('#result').val('');
      alert('Please enter valid numbers');
    }
  });

  $('#divide').click(() => {
    const num1 = parseFloat($('#number1').val());
    const num2 = parseFloat($('#number2').val());

    if (!isNaN(num1) && !isNaN(num2) && num2 !== 0) {
      $('#result').val(num1 / num2);
    } else {
      $('#result').val('');
      alert('Please enter valid numbers and make sure the second number is not zero');
    }
  });

  $('#reset').click(() => {
    $('#number1').val('');
    $('#number2').val('');
    $('#result').val('');
  });
});
