document.addEventListener("DOMContentLoaded", () => {
    let text = document.getElementById("textArea");
    let countResult = document.getElementById("countResult");

    text.addEventListener("input", () => {
        let counter = text.value.length;

        if (counter >= 250) {
            text.value = text.value.substring(0, 250);
            counter = 250;

            text.style.border = "2px solid red";
            countResult.style.color = "red";
        } else {
            text.style.border = "2px solid black";
            countResult.style.color = "black";
        }

        countResult.textContent = `${counter}/250`;
    });
});