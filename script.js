function toggleMode(){
  const html = document.documentElement;
  const img = document.querySelector("#profile img")

  if(html.classList.contains("light")){
    img.setAttribute("src","assets/avatar-light.png")
    html.classList.remove("light")
  }else{
    html.classList.add("light")
    img.setAttribute("src","assets/avatar.png")
  }
}