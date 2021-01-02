var input = document.getElementById("newListItem");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("add").click();
  }
});

$(document).ready(function(){
    let newListItem = $("#newListItem");
    
    
    for (i = 0; i < localStorage.length; i++) {
        x = localStorage.key(i);
        let newLi1 = $("<li></li>");
        let deleteButton1 = $("<button class='delete'>x</button>");
        //$("#list").append("<li></li>"+localStorage.getItem(x)).append("<button class='delete'>x</button>");
       //$("#list").append("<li></li>").append(localStorage.getItem(x)).append("<button class='delete'>x</button>");
        newLi1.append(localStorage.getItem(x)).append(deleteButton1).append("<br>");
        $("#list").append(newLi1);
        
    
        console.log(newLi1);
      }
      

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
    randomId= "toDO" + Math.floor(Math.random() * 100) + 1;
    localStorage.setItem(randomId, newListItem);
    return newLi;
  }
  
  $("#list").on("click", ".delete", function(){
    $(this).parent().remove();
    var testi=localStorage.key(this);
    localStorage.removeItem(testi);  
  })
  });