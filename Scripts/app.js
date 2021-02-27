/*Custom JS goes here*/

//IIFE-Immediately Invoked Funtion Expression
//Anonymous Self Executing Function
(function(){
   var title=document.title;
   
function start(){
 console.log("App Started!");
 console.log("Title: "+title);
}

window.onload=start;
})(); 