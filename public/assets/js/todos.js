// 'use strict';
// $("#create-recipe").on("submit", event => {
//   event.preventDefault();

<<<<<<< HEAD
//   $.ajax({
//     url: "/api/post",
//     method: "POST",
//     data: {
//       title: $("#title").val().trim(),
//     }
//   })
// });
  // this will need to be uncommented to sent to other page 
  // .then(newTodo => {
  //   location.reload("all");
  // });


=======
  $.ajax({
    url: "/api/post",
    method: "POST",
    data: {
      title: $("#title").val().trim(),
    }
  })
});
>>>>>>> b80c2caf6dab81d4043b52b8d3abd65800d44e03
  // todo
  // event:click on searchButton
  // Get value of input field
  // AJAX request get /ingredient

  // *************************On-click event runs findIngredients function********************************
  $("#searchBTN").on("click", function(event){
    $("#nutritionResult").empty().append();

    var ingredient = $("#nutrition").val().trim();
    console.log('ingredient: ', ingredient);

    
    const localAPI = `/ingredient?ingredient=${ingredient}`;
    $.ajax({
      type: 'GET',
      url: localAPI,
    }).then(function (html) {

<<<<<<< HEAD
// $(".complete").on("change", event => {
//   const id = $(event.target).parent().attr('data-id');
=======
      $('html').html(html);
      
    });

    event.preventDefault();
    
  });
>>>>>>> b80c2caf6dab81d4043b52b8d3abd65800d44e03

 
   
 

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