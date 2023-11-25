function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    //se tiver light mode adicionar a imagem ligh
    img.setAttribute("src", "./assets/img-light.png")
  } else {
    //se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", './assets/eu_preview_rev_1.png')
  }
}



