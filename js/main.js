$('document').ready(function () {
  $('.file-btn').click(function () {
    $(this).closest('label').closest('div').find('input').trigger('click');
  });

  $('.file-input').on('change', function () {
    let fileName = $(this).val().split('\\').pop();
    $(this).closest('div').find('label').find('span').text(fileName);
    $(this).closest('div').find('.remove').show();
  });

  $('.remove').click(function () {
    $(this).closest('div').find('input').val('');
    $(this).closest('div').find('span').text('');
    $(this).hide();
  });

  //смена пользователя
  $('.tools .ava-control').on('click', function () {
    $(this).closest('.tools').addClass('open');
  });

  $(document).mouseup(function (e) {
    // событие клика по веб-документу
    let div = $('.tools'); // тут указываем ID элемента
    if (
      !div.is(e.target) && // если клик был не по нашему блоку
      div.has(e.target).length === 0
    ) {
      // и не по его дочерним элементам
      div.removeClass('open'); // скрываем его
    }
  });
});
