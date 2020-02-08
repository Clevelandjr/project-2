'use strict';
$("#create-todo").on("submit", event => {
  event.preventDefault();

  $.ajax({
    url: "/api/todos",
    method: "POST",
    data: {
      title: $("#title").val().trim(),
      // ingredients: $("#ingredients").val().trim(),
      // instructions: $("#instructions").val().trim(),
    }
  }).then(newTodo => {
    location.reload();
  });
});

$(".complete").on("change", event => {
  const id = $(event.target).parent().attr('data-id');

  $.ajax({
    url: `/api/todos/${id}`,
    method: "PUT",
    data: {
      isCompleted: event.target.checked
    }
  }).then(() => {
    console.log(`toggled ID ${id}`);
  }).catch(err => {
    console.log(err);
    location.reload();
  });
});

$(".destroy").on("click", event => {
  const id = $(event.target).parent().attr("data-id");

  $.ajax({
    url: `/api/todos/${id}`,
    method: "DELETE"
  }).then(() => {
    console.log(`deleted ID ${id}`);
    location.reload();
  }).catch(err => {
    console.log(err);
    location.reload();
  });
});