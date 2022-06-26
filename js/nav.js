function responsiveMenu() {
    var nav = document.getElementById("nav");
    if(nav.className==""){
        nav.className = "responsive";
    }else{
        nav.className = "";
    }
}
