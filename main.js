let xhr = new XMLHttpRequest()
let div = document.querySelector(".container")
let btn = document.querySelectorAll("button")
let page = 1

localStorage.setItem("page", 1)

ShowData()
btn.forEach(function(element){
   element.addEventListener("click", function(e){
   // e.preventDefault()
      localStorage.setItem("page", element.textContent)
      page = localStorage.getItem("page") - 0
     
     btn.forEach(function(el){
       // e.preventDefault()
         if(el === element){
             element.classList.add("active")
         }else{
             el.classList.remove("active")
         }
     })
     ShowData()

     div.innerHTML = ""

   
   })
   
 
   
});


function ShowData(){
    xhr.open("GET","https://jsonplaceholder.typicode.com/posts", true)

    xhr.onload = function(){
        let data = JSON.parse(this.response)
      
        data.forEach(function(el) {

            
           console.log(page)
           let first_page = (page-1)*20
           let last_page = page*20 + 1
            if(el.id < last_page && el.id> first_page){
    
                    div.innerHTML += `
                    <div class="card">
                    <div class="bg"></div>
                        <span class="title">${el.title}</span>
                        <spn class="post">${el.body}</spn>
                    </div>
                    `
            }       
        });
        
    }
    xhr.send()
}
