const images = document.querySelectorAll(".image-container img");

const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(!entry.isIntersecting) return;

            const image = entry.target;

            image.src = image.src.replace("&w=10&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=", "&w=10000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=");
        });

        observer.unobserve(image);
}, {});

images.forEach((image) => {
    observer.observe(image);
});