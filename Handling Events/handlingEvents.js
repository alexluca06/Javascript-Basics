/**
 * Events handling
 *  
 */

// in this way, we need to modify html code adding onclick() etc
function sayHello(event) {
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

// Unobstrusive event binding: nothing special change/add in html code
document.querySelector("button")
    .addEventListener("click", sayHello);

// Another way:
/* document.querySelector("button")
    .onclick = sayHello; */