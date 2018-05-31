$("ul").on("click", "li", function(){
    $(this).toggleClass("complete");
});

$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        // grab todo text from input box
        var todoText = $(this).val();
        $(this).val("");
        // create a new li and add to ul
        $("ul").append("<li> <span><i class='fas fa-minus-square'></i></span> " + todoText + "</li>");
    }
});

$(".fa-plus-square").on("click", function(){
    $("input[type='text'").fadeToggle(500, function(){
    });
});

$("#clear-btn").on("click", function(event){
    $("li").fadeOut(500, function(){
        $("li").remove();
    });
    event.stopPropagation();
});