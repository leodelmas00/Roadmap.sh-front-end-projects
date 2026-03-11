document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const content = button.nextElementSibling;
            const img = button.querySelector("img");
            const isVisible = content.classList.contains("visible");

            document.querySelectorAll(".content").forEach(c => c.classList.remove("visible"));
            document.querySelectorAll("button img").forEach(i => i.classList.remove("rotated"));

            if (!isVisible) {
                content.classList.add("visible");
                img.classList.add("rotated");
            }
        });
    });
});