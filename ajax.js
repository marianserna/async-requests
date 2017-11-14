document.addEventListener("DOMContentLoaded", function() {
  const ajaxButton = document.getElementById('ajax');

  ajaxButton.addEventListener('click', () => {
    console.log('Hello!');

    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/',
      method: 'get',
      data: {},
      dataType: 'text'
    });
  });
});
