$(document).ready(function(){
    let newListItem = $("#newListItem");
  
  $("#add").on( "click", function(){
    let valueToBeAdded = createNewLi(newListItem.val());
    
    $("#list").append(valueToBeAdded);
    
    $("#newListItem").val("");
    $("input").focus();
  })
  
  let createNewLi = function(newListItem) {
  
    let newLi = $("<li></li>");
    let deleteButton = $("<button class='delete'>x</button>");
  
    newLi.append(newListItem).append(deleteButton);
  
    return newLi;
  }
  
  $("#list").on("click", ".delete", function(){
    $(this).parent().remove();  
  })
  });