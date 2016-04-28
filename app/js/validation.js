(function() {
  'use strict';
  var my = {}, errorClass;

  publicInterface();
  init();


  function init() {
    console.log("Инициализация модуля");

  }

  function removeError() { // Убирает красную обводку у элементов форм
    console.log('Красная обводка у элементов форм удалена');
    $(this).removeClass(errorClass);
  }

  function addError(element) {
    element.addClass(errorClass);
    createQtip(element, element.data('position'));
  }

  function clearForm(e) { // Очищает форму
    console.log('Очищаем форму');

    var form = $(this);
    form.find('input').trigger('hideTooltip'); // удаляем тултипы
    form.find('textarea').trigger('hideTooltip'); // удаляем тултипы
    form.find('.' + errorClass).removeClass(errorClass); // удаляем красную подсветку

  }

  function createQtip(element, position) { // Создаёт тултипы
    console.log('Создаем тултип');

    // позиция тултипа
    if (position === 'right') {
      position = {
        my: 'left center',
        at: 'right center'
      };
    } else {
      position = {
        my: 'right center',
        at: 'left center',
        adjust: {
          method: 'shift none'
        }
      };
    }

    // инициализация тултипа
    element.qtip({
      content: {
        text: function() {
          return $(this).data('content');
        }
      },
      show: {
        event: 'show'
      },
      hide: {
        event: 'keydown click hideTooltip'
      },
      position: position,
      style: {
        classes: 'qtip-mystyle qtip-rounded',
        tip: {
          height: 10,
          width: 10
        }
      }
    }).trigger('show');
  };

  function publicInterface() {
    my = {
      init: function(form, className) {
        errorClass = className;
        $(form).on('keydown','.' + errorClass, removeError); // удаляем красную обводку у элементов форм
        $(form).on('click','.' +  errorClass, removeError); // удаляем красную обводку у элементов форм
        $(form).on('reset', clearForm); // при сбросе формы удаляем также: тултипы, обводку, сообщение от сервера
      },

      validateForm: function(form) { // Проверяет, чтобы все поля формы были не пустыми. Если пустые - вызывает тултипы
        console.log('Проверяем форму');

        var
          self = this,
          elements = form.find('input, textarea').not('input[type="hidden"], input[name="filename"], input[name="radio"], input[name="submit"], input[name="reset"], input[name="button"]'),
          valid = true;

        $.each(elements, function(index, element) {
          var
            $element = $(element),
            value = $element.val();

          if (!value.length) {
            addError($element);
            valid = false;
          }
        });

        return valid;
      }
    };
  }

  window.validation = my;
})();