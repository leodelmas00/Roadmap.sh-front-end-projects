document.addEventListener("DOMContentLoaded", function() {
    if (localStorage.getItem("cookiesAccepted")) {
        document.getElementById("cookiePopup").style.display = "none";
        document.getElementById("overlay").style.display = "none";
    }
});

function acceptCookie() {
    document.getElementById("cookiePopup").style.display = "none";
    document.getElementById("overlay").style.display = "none";
    localStorage.setItem("cookiesAccepted", "true");
}

function rejectCookie() {
    document.getElementById("cookiePopup").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}