/*Custom JS goes here*/

//IIFE-Immediately Invoked Funtion Expression
//Anonymous Self Executing Function

let app=(function () {
   "use strict"
    //variables
    let title;
   
   function AboutButtonClick(event) {
      
   }


   function Aboutbuttonover(event) {
      event.currentTarget.style.opacity=0.3;
      AboutButton.style.opacity = 0.3;
   }

   function Aboutbuttonout(event) {
      event.currentTarget.style.opacity=1.0;
      AboutButton.style.opacity = 1.0;
   }
   
   
   function Aboutclick() {
      console.log("What is the name ");
   }

   function HomeContent() {
      console.log("Home content came up");
      let AboutButton = document.getElementById("AboutButton");

      AboutButton.innerText="About";

      AboutButton.addEventListener("click", AboutButtonClick);

      AboutButton.addEventListener("mouseover", Aboutbuttonover);
      AboutButton.addEventListener("mouseout", Aboutbuttonout);
   
   }

   function creator1() {
      let ThisButton = document.getElementById("ThisButton");
      let Thispara=document.getElementById("Paragraph");
      ThisButton.innerText="NEXT";
      Thispara.textContent="We will be changing the content of the paragraph throughout the semester";
      
      //creates an empty array container
    /*  let Array=[
       {name:"Manzil",age:"22"},
       {name:"Manzilpatel",age:"24"},
       {name:"Manzi",age:"21"}
      ]


      //Array called by creating class content in HTML file inside the 
      //paragraph
      let content=document.getElementsByClassName("Content");
      console.log(Array);
      console.log(Array.length);*/

      /*for(let index=0;index<=Array.length;index++)
      {
         
         console.log(Array[index].name);
      }*/
      
     /* let index1=0
      while(index1<=Array.length)
      {
         Array[index1].name;
         console.log(Array[index1].name);
         index1++;
      }*/

      /*let myAssociateArray=[];
      myAssociateArray["Name"]="Tom ";
      myAssociateArray["age"]=30;
      console.log(myAssociateArray);
      console.log(myAssociateArray.Name);*/

     //Asking the message When the Browser loads
     let decision=confirm("Are you sure")
     console.log(decision)
       
      let myArray=[
       "Video Games",
       "Laptop",
       "Travelling"
       ];
      
       let myFavouritelist=document.getElementById("Favourite Things")
     
        myArray.forEach(thing=>
        {
      let newItem=document.createElement("li")
      newItem.textContent=thing;
      myFavouritelist.appendChild(newItem);
      console.log(newItem);
        });
        ThisButton.addEventListener("click", Aboutclick);
   }


   function start() {

      title = document.title;
      
      switch(title)
      { case "Hi":
      HomeContent();
      console.log("Start came up ");
      break;
      
      case "Creator":
         creator1();
         console.log("Creator came up");

      break;

      default:
      break;
   }

   console.log("App Started");

   }

   window.onload = start;
   return{
   title:document.title

   };
   
})();