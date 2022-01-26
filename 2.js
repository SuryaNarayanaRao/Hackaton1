let a = document.createElement("div");
a.setAttribute("id","title");
a.setAttribute("class","setclass");
document.body.appendChild(a)

//card

let card = document.createElement("div");
card.setAttribute("id" , "card1");
card.setAttribute("alt","style");
a.appendChild(card);

//heading books

let Fire = document.createElement("h1");
Fire.setAttribute("id" , "title");
Fire.setAttribute("class","text-center")
Fire.innerText="Books";
a.appendChild(Fire);
let Ice = document.createElement("button");
Ice.setAttribute("id","title");
Ice.setAttribute("class","text-center")
Ice.setAttribute("onclick","func1()");
Ice.innerText="Books";
a.appendChild(Ice);

//heading name

let Fire1 = document.createElement("h1");
Fire1.setAttribute("id" , "title");
Fire1.setAttribute("class","text-center")
Fire1.innerText="Name";
a.appendChild(Fire1);
let Ice1 = document.createElement("button");
Ice1.setAttribute("id","title");
Ice1.setAttribute("class1","text-center")
Ice1.setAttribute("onclick","func()");
Ice1.innerText="Name";
a.appendChild(Ice1);

//heading for author

let Fire2 = document.createElement("h1");
Fire2.setAttribute("id" , "title");
Fire2.setAttribute("class","text-center")
Fire2.innerText="Authors";
a.appendChild(Fire2);
let Ice2 = document.createElement("button");
Ice2.setAttribute("id","title");
Ice2.setAttribute("class1","text-center")
Ice2.setAttribute("onclick","func2()");
Ice2.innerText="Authors";
a.appendChild(Ice2);

// button center

let div = document.createElement("div")
div.setAttribute("class","text-center")
document.body.appendChild(div)
//button 



output=document.createElement("div")
output.setAttribute("id","div1")
div.appendChild(output)

//fetch func for aliases
 function func1(){
fetch("https://www.anapioficeandfire.com/api/characters?page=1&pageSize=50")
.then((response) => response.json())
.then((data)=> {
    var str=""
    for(let i=0; i<=data.length;i++){
       console.log(data[i].aliases)
      //row.innerHTML=`<div><p>${data[i].aliases}</p></div>`
     let k=[]
     k[i]=document.createElement("div")
     k[i].setAttribute("id",`k${i}`)
     document.body.appendChild(k[i])

     console.log(data[i].aliases)
     str=(data[i].aliases)
      document.getElementById(`k${i}`).innerHTML=str;
        
    }
})

  }

//name 

let b = document.createElement("div");
b.setAttribute("id","title");
b.setAttribute("class","setclass");
document.body.appendChild(b)


// button center

let div1 = document.createElement("div")
div1.setAttribute("class1","text-center")
document.body.appendChild(div1)

//button 

output1=document.createElement("div")
output1.setAttribute("id","div1")
div1.appendChild(output1)

//fetch func for name
function func(){
    fetch("https://www.anapioficeandfire.com/api/characters?page=1&pageSize=50")
    .then((response)=> response.json())
    .then((data) => {
      // console.log(data);
        var str1=""
        for(let i=0; i<=data.length;i++){
          console.log(data[i].name)
           
         //row.innerHTML=`<div><p>${data[i].aliases}</p></div>`
         let L=[]
         L[i]=document.createElement("div")
         L[i].setAttribute("id",`L${i}`)
         document.body.appendChild(L[i])
    
         console.log(data[i].name)
    
      
          str1=(data[i].name)
          
           
    
          document.getElementById(`L${i}`).innerHTML=str1;
            
        }
    })
   
}    