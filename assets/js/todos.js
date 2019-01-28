/* eslint-disable no-alert */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-undef */
/* eslint-disable func-names */
// Check off specific Todos by clicking


$('ul').on('click', 'li', function () {
  $(this).toggleClass('completed');
});

$('ul').on('click', 'span', function (e) {
  $(this).parent().fadeOut(300, function () {
    $(this).remove();
  });
  e.stopPropagation(); // 버튼을 누르면 상위로 올라가면서 하나씩 다 실행되는 것을 방지한다! (이벤트 버블링!)
});

$("input[type='text']").keypress(function (e) {
  if (e.which === 13) {
    const todoText = $(this).val();
    $(this).val('');
    //  create a new li and add to ul
    $('ul').append(`<li><span><i class="far fa-trash-alt"></i></span> ${todoText}</li>`);
  }
});

$('#toggleForm').click(function () {
  $("input[type='text']").fadeToggle();
});
