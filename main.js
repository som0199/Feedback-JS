let form = document.querySelector("form")
let input1 = document.getElementById("name")
let input2 = document.getElementById("email")
let number = document.getElementById("number")
let text = document.getElementById("message")
let button = document.querySelector("button")
let ul = document.querySelector("ul")
let body = document.querySelector("body")
body.style.backgroundImage = "url(https://images.unsplash.com/photo-1633613286991-611fe299c4be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVlZGJhY2t8ZW58MHx8MHx8fDA%3D"
body.style.backgroundSize = "cover"
body.style.backgroundPosition = "start"
body.style.backgroundRepeat = "no-repeat"

const fetch = (e) => {
e.preventDefault();
let li = document.createElement("li")

// li.innerText = text.value + "\n" + 
//                "rating : "+ number.value + "\n"+
//                "\n"+
//                input1.value; 
li.className = "list-group-item bg-dark text-light p-3 mx-5 "
let h4 = document.createElement("h4")
h4.innerText = text.value;
h4.className = "display-4"
let h3 = document.createElement("h3")
h3.innerText =`Rating: ${number.value}`
h3.className ="display-5"
let p = document.createElement("p")
p.innerText = input1.value;
// p.className = "display-6"

let edit = document.createElement("button")
edit.className = "btn btn-warning  rounded-0 float-end mx-1";
edit.innerText = " Edit ";
let delbtn = document.createElement("button")
delbtn.innerText = "Delete";
delbtn.className = "btn btn-danger  rounded-0 float-end";

li.appendChild(h4)
li.appendChild(h3)
li.appendChild(p)
li.appendChild(delbtn);
li.appendChild(edit);

ul.appendChild(li);

form.reset();

}
form.addEventListener("submit", fetch)

const delButton = (event) =>{
    if(event.target.className.includes("btn-danger")){
        if(window.confirm("Are You Sure??")){
            ul.removeChild(event.target.parentElement)
        }
    }
}
ul.addEventListener("click", delButton)