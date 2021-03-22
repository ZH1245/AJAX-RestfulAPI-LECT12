$(function(){
    $("#load").click(function(){
        console.log("BTN CLICKED")
        loadRecipies();
    });
    
});
function loadRecipies(){
    $("#load").attr('disabled','true')
    $.ajax({
        url:"https://usman-recipes.herokuapp.com/api/recipes",
        method:"GET",
        success:function(response){
            // $("ul").empty()
            var tempul=document.createElement("ul");
            tempul.id='btn_disabled'
            // tempul.innerHTML='Recipies:'
            tempul.style.fontSize='20px'
            for (let index = 0; index < response.length; index++) {
                var templi = document.createElement("li");
                templi.id='recipies-li'
                templi.style.fontSize='20px'
                // templi.append(response[index].title);
                templi.innerHTML=`<h4>${response[index].title}</h4><p>${response[index].body}</p>`;
                tempul.append(templi)
            }
            $('#recipies').append(tempul);
        }
    })
}