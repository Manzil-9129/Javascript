/*Custom JS goes here*/

//IIFE-Immediately Invoked Funtion Expression
//Anonymous Self Executing Function

(function () {
   "use strict"

   function AboutButtonClick(event) {
      console.log("What is the matter");
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
      ThisButton.addEventListener("click", Aboutclick);
      

   }


   function start() {

      let title = document.title;
      
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
})();