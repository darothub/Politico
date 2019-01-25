const showList=()=>{
    let menuList = document.getElementById("menu-lists")
    if(menuList.style.display === "block"){
        menuList.style.display = "none"
        return false
    }
    menuList.style.display = "block";
    return false
}