// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
import "babel-polyfill";

var form = document.querySelector("form")
var name = document.querySelector("#name")
var email = document.querySelector("#email")
var password = document.querySelector("#password")
var submit = document.querySelector(".btn")
var check = document.querySelector("#checkbox")

    
//alert("thank  your for submitting your details! ")


form.addEventListener("submit", async function(e, url='http://jsonplaceholder.typicode.com/posts'){
         e.preventDefault()
        
         var formData = [name.value ,email.value, password.value,check.checked]
   const response= await fetch(url,{
        method:'Post',
        body:JSON.stringify(formData),
        headers:{
            "Content-type":"application/json;charset=UTF-8"
        }
        

    })

    .then(response=>response.json())
    .then(json=>{console.log(json)
    
        alert("thanks  for your submitting your details! \n user id:"+json.id) })



})

