$(document).ready(function(){

  $("#list-items").html(localStorage.getItem("listItems"));

  $(".add-items").submit(function(event){
    event.preventDefault();
    console.log("Hey Buddy");

  var item =  $("#todo-list-item").val();
  if(item){
    $("#list-items").append("<li><input class='checkbox'type='checkbox'/>"+ item +"<a class='remove'>X</a><hr></li>");
    localStorage.setItem("listItems",$("#list-items").html())
    var item =  $("#todo-list-item").val("");
  }

  });
$(document).on("change",".checkbox",function(){
  if($(this).attr("checked")){
    $(this).removeAttr("checked");
  }
  else{
      $(this).attr("checked","checked");
  }
  $(this).parent().toggleClass("completed");
    localStorage.setItem("listItems",$("#list-items").html())
  });

$(document).on("click",".remove",function(){
  $(this).parent().remove();
    localStorage.setItem("listItems",$("#list-items").html());
})
});
