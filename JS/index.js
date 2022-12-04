$('.knapper').click(function(){
    var contClass = $(this).data('div');
    $('.mat').hide().filter('.' + contClass).show()
    })
    
function visKnapper(){
console.log("registrer klikk");
var knapper = document.getElementsByClassName('knapper');
Array.from(knapper).forEach((x) => {
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
})
}

