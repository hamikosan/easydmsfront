
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
new FroalaEditor('div#froala-editor', {
    documentReady: true
  })

function showOutSideLink() {
    var checkBox = document.getElementById("link_check");
    var outsidelink = document.getElementById("outsidelink_form");
    var detail= document.getElementById("prewriting");

    if (checkBox.checked == true){
        outsidelink.style.display = "block";
        detail.style.display="none";
    } else {
        outsidelink.style.display = "none";
        detail.style.display="block";
    }
}

function deletePopUP(){
    var confirmbox = document.getElementById("modal");
    var btn = document.getElementById("deleteB");
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