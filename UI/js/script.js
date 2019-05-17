const menubar = () =>{
    document.getElementById('menu-bar').style.display = 'block';
    document.getElementById('bar-icon').style.display = 'none';
    document.getElementById('menu-bar').style.transition= '1.2s';
}
const away = () =>{
    document.getElementById('menu-bar').style.display = 'none';
    document.getElementById('bar-icon').style.display = 'block';
}
const openNav = () => {
    document.getElementById("myNav").style.width = "100%";
}
  
const closeNav = () => {
    document.getElementById("myNav").style.width = "0%";
}