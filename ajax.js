document.addEventListener("DOMContentLoaded", function() {
  const ajaxButton = document.getElementById('ajax');
  const pingButton = document.getElementById('ping');
  const countButton = document.getElementById('count');
  const timeButton = document.getElementById('time');

  const pingSection = document.getElementById('step3456');
  const countSection = document.getElementById('step7');

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
      pingSection.appendChild(el);
    }).fail(() => {
      const msg = document.createElement('p');
      msg.innerText = 'Something went wrong user. Please try again later! xoxo';
      pingSection.appendChild(msg);
    }).always(() => {
      console.log('Hey the request finished!');
    })
  });

  countButton.addEventListener('click', () => {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/count',
      method: 'get',
      data: {},
      dataType: 'text'
    }).done((responseData) => {
      const num = document.createElement('p');
      num.innerText = `${responseData}`;
      countSection.appendChild(num);
    })
  });

  timeButton.addEventListener('click', () => {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/time',
      method: 'get',
      data: {
        timezone: 'America/Mexico_City'
      },
      dataType: 'text'
    }).done((responseData) => {
      const timezome = document.createElement('p');
      timezome.innerText = `${responseData}`;
      countSection.appendChild(timezome);
    })
  });
});
