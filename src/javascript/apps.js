window.addEventListener("load", function(){
  var button = this.document.querySelectorAll(".navbar-buttons button");


  for (let index = 0; index < button.length; index++) {
    button[index].addEventListener("click", function(){
      for (let i = 0; i < button.length; i++) {
        if (button[i].hasAttribute("act")){
          button[i].removeAttribute('act');
        }
      }
      button[index].setAttribute("act", '1');
    })
  }
})