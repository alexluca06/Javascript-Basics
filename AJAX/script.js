// Event handling

/**
 * DOMContentLoaded -> start listening after HTML content was
 * loaded, but before css or images!
 */
 document.addEventListener("DOMContentLoaded",
 function (event) {
   
   // Unobtrusive event binding
   document.querySelector("button")
     .addEventListener("click", function () {
       
       // Call server to get the name
       $ajaxUtils
         .sendGetRequest("/data/data.txt", 
           function (request) {
             var name = request.responseText;

             document.querySelector("#content")
               .innerHTML = "<h2>Hello " + name + "!</h2>";
           });  
    });
 }
);