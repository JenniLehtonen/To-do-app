var input = document.getElementById("newListItem");  //User can just click enter after writing the task into input field, no need to click the actual button
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("add").click();
  }
});

$(document).ready(function(){
    let newListItem = $("#newListItem");
    
    for (i = 0; i < localStorage.length; i++) {  //Take unfinished list items from the local storage and show them in to do list
        x = localStorage.key(i);
        let newLi1 = $("<li></li>");
        let deleteButton1 = $("<button class='delete'>x</button>");
        newLi1.append(localStorage.getItem(x)).append(deleteButton1);
        $("#list").append(newLi1);
      }
      
  $("#add").on( "click", function(){
    let valueToBeAdded = createNewLi(newListItem.val());  //Send the value to createNewLi function
    
    $("#list").append(valueToBeAdded);  //Add the created li element to to do list
    
    $("#newListItem").val("");
    $("input").focus();
  })
  
  let createNewLi = function(newListItem) {
  
    let newLi = $("<li></li>");
    let deleteButton = $("<button class='delete'>x</button>");

    newLi.append(newListItem).append(deleteButton); //Create new li element
    randomId= "toDO" + Math.floor(Math.random() * 100) + 1;
    localStorage.setItem(randomId, newListItem);  //Add the new item to the local storage
    return newLi;
  }
  
  $("#list").on("click", ".delete", function(){
    $(this).parent().remove();
    let localStorageKey=localStorage.key(this); //Get the local storage key of the clicked item
    localStorage.removeItem(localStorageKey);  //Remove the clicked item from the local storage
  })
  });