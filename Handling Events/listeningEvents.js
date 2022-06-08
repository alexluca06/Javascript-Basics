/**
 * we need to actually listen for a particular event on the browser lifecycle 
 * The trigger is DOMContentLoaded!!
 */

document.addEventListener("DOMContentLoaded",
    function (event) {
        function sayHello(event) {
            console.log(event);
            // Change the text of the button 
            this.textContent = "Said it!";
        
            // Get the input from the user
            var name = document.getElementById("name").value;
            console.log("Hello " + name);
            // Write the message inside the page, not at console
            var message1 = "Hello " + name + "!";
            // Inject text in div element with the id="content"!
            document
                .getElementById("content1")
                .textContent = message1;
        
            // !!!! INJECT HTML CODE !!!!
            var message2 = '<h2 style="color: red"> Hello ' + name + "!</h2>";
            document
                .getElementById("content2")
                .innerHTML = message2; 
        
            // QUERY selector(pretty same with the CSS selection)
        
            if (name === "student") {
                var title = 
                    document
                        .querySelector("#title")
                        .textContent;
                
                title += " & Lovin' it!";
                // in this case: h1 == #title
                document
                    .querySelector("h1")
                    .textContent = title;
            }
        }
        document.querySelector("button")
            .addEventListener("click", sayHello);

        document.querySelector("body")
            .addEventListener('mousemove',
                function (event) {
                    if(event.shiftKey === true) {
                        console.log("X: " + event.clientX);
                        console.log("Y: " + event.clientY);
                    }
                }    
            );
    }
);