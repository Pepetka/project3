'use strict';

window.addEventListener('DOMContentLoaded', () => {
  function tabs() {
    const btns = document.querySelectorAll('.tabs__btn'),
      content = document.querySelectorAll('.content-tab');

    content[0].classList.add('active-tab');
    btns[0].classList.add('active-btn');

    btns.forEach((btn) => {
      btn.addEventListener('click', () => {
        if (!btn.classList.contains('active-btn')) {
          btns.forEach((el) => {
            el.classList.remove('active-btn');
          });

          btn.classList.add('active-btn');

          content.forEach((el) => {
            if (el.classList.contains(btn.classList[btn.classList.length - 2])) {
              el.classList.add('active-tab');
            } else {
              el.classList.remove('active-tab');
            }
          });
        }
      });
    });
  }

  function burger() {
    const burger = document.querySelector('.header__burger'),
      menu = document.querySelector('.header__menu');

    burger.addEventListener('click', () => {
      burger.classList.toggle('active');
      menu.classList.toggle('active');

      document.querySelector('body').classList.toggle('lock');
    });
  }

  function form() {
    const forms = document.querySelectorAll('form'),
      inputs = document.querySelectorAll('[placeholder]'),
      message = {
        saccess: 'Отправлено',
        failture: 'Ошибка...',
        loading: 'Идет отправка...'
      };

    const postData = async (url, data) => {
      document.querySelector('.status').textContent = message.loading;

      let result = await fetch(url, {
        method: 'POST',
        body: data
      });

      return await result.text();
    };

    const clearForms = (inputs) => {
      inputs.forEach((input) => {
        input.value = '';
      });
    };

    forms.forEach((form) => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();

        let status = document.createElement('div');
        status.classList.add('status');
        status.style.fontSize = '16px';
        status.style.color = '#ff8b38';
        status.style.textAlign = 'center';
        status.style.padding = '10px';
        form.parentNode.appendChild(status);

        const formData = new FormData(form);

        postData('server.php', formData)
          .then((res) => {
            console.log(res);
            status.textContent = message.saccess;
          })
          .catch(() => {
            status.textContent = message.failture;
          })
          .finally(() => {
            setTimeout(() => {
              clearForms(inputs);
              status.remove();
            }, 5000);
          });
      });
    });
  }

  tabs();
  burger();
  form();
});