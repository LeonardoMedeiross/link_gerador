function toggleMode (){
    const html = document.documentElement
    html.classList.toggle('light')

    //pegando a imagen na tag img 
   
    const img =document.querySelector("#profile img")
   
   
    //subistituindo a imagem 
   
    if(html.classList.contains('light')){
     
    //se tiver light mode 
        img.setAttribute("src", "./assets/avatar-light.png")

    }else{
      //se não tiver light mode
        img.setAttribute("src", "./assets/Avatar.png")

    }   


   

    
}   