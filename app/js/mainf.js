(function() {
 'use strict';
  var my = {};

  addListener();
  init();

  function init() {
  	validation.init($('#myForm'), 'has-error');
  }

  function addListener() {
    $('#myForm').on('submit', submitForm);
  }

  function submitForm(e) {
    var form = $(this),
      url = '',
      defObject = ajaxForm(form, url);
    e.preventDefault();
    console.log("отработала форма");

  }

  function ajaxForm(form, url) {

    if (!validation.validateForm(form)) return false; // Возвращает false, если не проходит валидацию
    var data = form.serialize(); // собираем данные из формы в объект data

  }

}(window));
