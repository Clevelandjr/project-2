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

      $('html').html(html);
      
    });

    event.preventDefault();
    
  });

 (function () {
   var burger = document.querySelector('.nav-toggle');
  var menu = document.querySelector('.nav-menu');
  burger.addEventListener('click', function() {
      burger.classList.toggle('is-active');
      menu.classList.toggle('is-active');
   });
 })();

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