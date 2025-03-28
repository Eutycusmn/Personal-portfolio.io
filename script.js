document.addEventListener("DOMContentLoaded", () => {
    // Add fade-in animations for sections
    const sections = document.querySelectorAll("section");
    const observerOptions = { threshold: 0.6 };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            } else {
                entry.target.style.opacity = "0";
                entry.target.style.transform = "translateY(50px)";
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.style.opacity = "0";
        section.style.transition = "opacity 0.8s ease, transform 0.8s ease";
        observer.observe(section);
    });

    // Contact Button Alert
    const contactButton = document.getElementById("contactButton");
    if (contactButton) {
        contactButton.addEventListener("click", () => {
            alert("Thank you for visiting my portfolio! Reach out anytime.");
        });
    }
});