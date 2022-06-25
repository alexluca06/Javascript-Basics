// An object which defines my CSS style!
const myStyle = {
    fontSize: "30px",
    color: "blue",
    fontStyle: "italic",
    change: function () {
        /*
        document.querySelector(".mytext").style.fontSize = this.fontSize;
        document.querySelector(".mytext").style.color = this.color;
        document.querySelector(".mytext").style.fontStyle = this.fontStyle;
        */
 
        let style = "font-size: " + this.fontSize + "; color: " + this.color +
            "; font-style: " + this.fontStyle;

        document.querySelector(".mytext").style = style;
    }
}
