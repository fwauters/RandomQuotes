function injectQuote(data) {
    if (data === null || data === "undefied") {
        document.getElementById("quote").innerHTML = "Sorry an error occur, please refresh your browser";
    }
    else {
        document.getElementById("image").src = data.photo;
        document.getElementById("quote").innerHTML = data.quote;
        document.getElementById("author").innerHTML = "- " + data.author;
    }
}

fetch("https://thatsthespir.it/api")
    .then(result => result.json())
    .then(data => injectQuote(data));