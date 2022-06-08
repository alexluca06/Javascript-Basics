// DOM manipulation
console.log(document.getElementById("title"));
console.log(document instanceof HTMLDocument);
function sayHello() {
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