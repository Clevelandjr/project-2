// 'use strict';
$("#create-recipe").on("submit", event => {
  event.preventDefault();

  $.ajax({
    url: "/api/post",
    method: "POST",
    data: {
      title: $("#title").val().trim(),
    }
  })
});
  // this will need to be uncommented to sent to other page 
  // .then(newTodo => {
  //   location.reload("all");
  // });


(function() {
  var burger = document.querySelector('.nav-toggle');
  var menu = document.querySelector('.nav-menu');
  burger.addEventListener('click', function() {
      burger.classList.toggle('is-active');
      menu.classList.toggle('is-active');
  });
})();
// $(".complete").on("change", event => {
//   const id = $(event.target).parent().attr('data-id');

//   $.ajax({
//     url: `/api/todos/${id}`,
//     method: "PUT",
//     data: {
//       isCompleted: event.target.checked
//     }
//   }).then(() => {
//     console.log(`toggled ID ${id}`);
//   }).catch(err => {
//     console.log(err);
//     location.reload();
//   });
// });

// $(".destroy").on("click", event => {
//   const id = $(event.target).parent().attr("data-id");

//   $.ajax({
//     url: `/api/todos/${id}`,
//     method: "DELETE"
//   }).then(() => {
//     console.log(`deleted ID ${id}`);
//     location.reload();
//   }).catch(err => {
//     console.log(err);
//     location.reload();
//   });
// });