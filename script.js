// INITIATIVE PAGES SCROLL THING
window.addEventListener("scroll", function() {
    const events = document.querySelectorAll(".event-box");
    const scrollPosition = window.scrollY + window.innerHeight;

    events.forEach(event => {
        const eventPosition = event.offsetTop + event.offsetHeight;

        if (scrollPosition > eventPosition - 150 && scrollPosition < eventPosition + 150) {
            event.classList.remove("blurred");
        } else {
            event.classList.add("blurred");
        }
    });
});
/*FROM AI - CAN BE ELIMINATED; CONTENT STILL THE SAME.*/