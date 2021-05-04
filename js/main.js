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
});
