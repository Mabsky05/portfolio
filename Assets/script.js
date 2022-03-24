function contact() {
    contact_info = document.querySelector(".contact")
    contact_info.innerHTML = "grimdango@gmail.com &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 0421441463";
    contact_info.style.fontSize=".8em"
    contact_info.style.color="grey"
 }

 document.querySelector(".contact").addEventListener('click', contact);

 function about() {
    contact_info = document.getElementById("about")
    var img = document.createElement('img')
    img.src = "assets"+ "\\"+ "profpic2.jpg"
    document.getElementById("my_name").innerHTML = "<img src=" + img.src + " width='100px'" + ">"
    contact_info.innerHTML = "Software Developer <br> HTML CSS Javascript <br> Bootstrap Jquery <br> Web design and development";
    contact_info.style.fontSize=".8em"
    contact_info.style.color="grey"
    contact_info.style.cursor="none"
 }


 function about_clear() {
     document.getElementById("about").innerHTML = "About";
     document.getElementById("my_name").innerHTML = "Miguel Afable"
     contact_info.style.fontSize="1em"
     contact_info.style.color="azure"
 }
 
 document.getElementById("about").addEventListener('mousedown', about);
 document.getElementById("about").addEventListener('mouseup', about_clear);

 $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

 $(document).ready(function () {
    $('[data-toggle="popover"]').popover()
  })

  $('.btn').popover(animation)

  $('.btn').tooltip(animation)