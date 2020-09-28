$(function () {
  /*create a function that listens to shopping list form and
    upon the submit button creates a new shopping item in 
    shopping list*/

  $("#js-shopping-list-form").submit((event) => {
    event.preventDefault();
    const inputText = $("#shopping-list-entry").val();
    const outputText = `<li><span class='shopping-item'>${inputText}</span>
          <div class='shopping-item-controls'>
            <button class='shopping-item-toggle'>
             <span class='button-label'>check</span>
           </button>
            <button class='shopping-item-delete'>
            <span class='button-label'>delete</span>
           </button>
          </div></li>`;
    $(".shopping-list").append(outputText);
    $("#shopping-list-entry").val("");
  });

  /*create a function that listens in the ul for a click on the shopping 
  item toggle button. when that happens add the class 
  shopping item checked*/

  $("ul").on("click", "li .shopping-item-toggle", function (event) {
    $(this)
      .closest("li")
      .find(".shopping-item")
      .toggleClass("shopping-item__checked");
  });

  /*create a function that listens in the ul for a click on the 
  shopping item delete button and removes the list item*/

  $("ul").on("click", "li .shopping-item-delete", function (event) {
    $(this).closest("li").remove();
  });
});
