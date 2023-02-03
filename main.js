function hideIconBar(){
    var iconBar = document.getElementById("iconBar");
    var navigation = document.getElementById("navigation");
    iconBar.setAttribute("style", "display:none;");
    navigation.classList.remove("hide");
}

function showIconBar(){
    var iconBar = document.getElementById("iconBar");
    var navigation = document.getElementById("navigation");
    iconBar.setAttribute("style", "display:block;");
    navigation.classList.add("hide");
}
function deletePopUP(){
    var confirmbox = document.getElementById("modal");
    var btn = document.getElementById("del_acc");
    var close = document.getElementById("no_button");
    btn.onclick = function() {
        confirmbox.style.display = "block";
    }

    close.onclick = function() {
        confirmbox.style.display = "none";
    }
    
    window.onclick = function(event) {
        if (event.target == confirmbox) {
            confirmbox.style.display = "none";
        }
    }
}

//image editor section
var imgout=document.getElementById("imgout");
var imgin=document.getElementById("imgin");
var loadFile = function(event){
    imgout.setAttribute("src",URL.createObjectURL(event.target.files[0]));  
}
var loadFileIn = function(event){
    imgin.setAttribute("src",URL.createObjectURL(event.target.files[0]));
}

/*date filtering */
document.querySelector("input[type=number]").oninput = e => console.log(new Date(e.target.valueAsNumber, 0, 1));