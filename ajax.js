document.addEventListener("DOMContentLoaded", function() {
  const ajaxButton = document.getElementById('ajax');
  const pingButton = document.getElementById('ping');

  const section = document.getElementById('step3456');

  ajaxButton.addEventListener('click', () => {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com',
      method: 'get',
      data: {},
      dataType: 'text'
    });
  });

  pingButton.addEventListener('click', () => {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/pong',
      method: 'get',
      data: {},
      dataType: 'text'
    }).done((responseData) => {
      console.log(responseData);
      const el = document.createElement('p');
      el.innerText = responseData;
      section.appendChild(el);
    }).fail(() => {
      const msg = document.createElement('p');
      msg.innerText = 'Something went wrong user. Please try again later! xoxo';
      section.appendChild(msg);
    })
  });

});
