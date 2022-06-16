let link = document.querySelector(".anchor");

function scrollPage() {
    window.scrollTo({
        top: 1400,
        behavior: "smooth",
    });
}

link.addEventListener("click", scrollPage);
