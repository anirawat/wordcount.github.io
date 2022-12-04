let inputextarea = document.getElementById("input-textarea");
let charcount = document.getElementById("charac-count");
let wordcount = document.getElementById("word-count");

inputextarea.addEventListener("input", () => {

    charcount.textContent =inputextarea.value.length;
    let text = inputextarea.value.trim();
    wordcount.textContent = text.split(/\s+/).filter((item) => item).length;
})