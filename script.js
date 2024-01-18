function toggleMode () {
    const html = document.documentElement
    html.classList.toggle('light')

   // if(html.classList.contains('light')){
   //     html.classList.remove('light')
   // } else {
   //     html.classList.add('light')
   // }




   //se quiser trocar a imagem quando troca de modo você precisa adicionar esse código

   //   const img = document.querySelector("#profile img")
   //   if(html.classList.contains('light')) {
   //   img.setAttribute('src', './assets/assets/avatar-yuri-light.png')
   //   } else {
   //   img.setAttribute('src', './assets/assets/avatar-yuri.png')
   //   }

   //seguindo o exemplo acima vou mostrar como trocar o texto alternativo da imagem também

   //   const img = document.querySelector("#profile img")
   //   if(html.classList.contains('light')) {
   //   img.setAtrribute('alt', 'aqui vai a descrição da imagem no light mode')
   //   } else {
   //   img.setAtrribute('alt', 'aqui vai a descrição da imgem no dark mode')
   //   } 
}