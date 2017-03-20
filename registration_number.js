var Dropdown = document.getElementById("provinces");
var input = document.getElementById("name");
var press = document.getElementById("ADDREG");
var outputMsg = document.getElementById("output");

var rr = function addR(){
  if ( input.value.length > 0) {
  //output.innerHTML= input.value;

  var list = document.createElement("li");
  var txtName = document.createTextNode(input.value)
input.value = '';
  // li.textcontent = text;

  list.appendChild(txtName);
  document.getElementById("regNumber").appendChild(list);
}
};


  press.addEventListener("click", rr);

  Dropdown.addEventListener('change', function(e) {

  var namelist = document.querySelectorAll('li');

  for (var i=0; i<namelist.length; i++) {
    if (e.target.value === "ALL") {
      namelist[i].style.display = 'block';
    }
    else if (namelist[i].innerHTML.startsWith(e.target.value)) {
        namelist[i].style.display = 'block';
    }
    else {
        namelist[i].style.display = 'none';
    }
}
  });
