function change(){
  let value = document.getElementsByName("level");
  let selected;


  for(let i = 0; i < value.length; i++){
    if(value[i].checked){
    selected = (value[i].value);
    }
  }

  if(selected == 1){
    document.querySelectorAll(".sharingan")?.forEach(el => el.style.zIndex = "2")
    document.querySelectorAll(".ms")?.forEach(el => el.style.zIndex = "1")
    document.querySelectorAll(".sharingan")?.forEach(el => el.classList.add('sharingan_rotation'))
    document.querySelectorAll(".ms")?.forEach(el => el.classList.remove('ms_rotation'))
    }
  if(selected == 2){
    document.querySelectorAll(".sharingan")?.forEach(el => el.style.zIndex = "1")
    document.querySelectorAll(".ms")?.forEach(el => el.style.zIndex = "2")
    document.querySelectorAll(".ms")?.forEach(el => el.classList.add('ms_rotation'))
    document.querySelectorAll(".sharingan")?.forEach(el => el.classList.remove('sharingan_rotation'))
  }

}