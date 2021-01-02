$(document).ready(function(){
    let uusiTehtava = $("#uusiTehtava");
  
  $("#lisaa").on( "click", function(){
    let lisattavaArvo = luoUusiLi(uusiTehtava.val());
    
    $("#lista").append(lisattavaArvo);
    
    $("#uusiTehtava").val("");
    $("input").focus();
  })
  
  let luoUusiLi = function(uusiTehtava) {
  
    let uusiLi = $("<li></li>");
    let poistaPainike = $("<button class='poista'>x</button>");
  
    uusiLi.append(uusiTehtava).append(poistaPainike);
  
    return uusiLi;
  }
  
  $("#lista").on("click", ".poista", function(){
    $(this).parent().remove();  
  })
  });