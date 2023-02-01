window.addEventListener('DOMContentLoaded', () => {
    // get all progress bar
    const elements = [].slice.call(document.querySelectorAll('.pie'));
    // call to function
    const circle = new CircularProgressBar('pie');

    // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
    // if IntersectionObserver is supported by the browser
    if ('IntersectionObserver' in window) {
        const config = {
            root: null,
            rootMargin: '0px',
            threshold: 0.75,
        };

        const ovserver = new IntersectionObserver((entries, observer) => {
            entries.map((entry) => {
                if (entry.isIntersecting && entry.intersectionRatio >= 0.75) {
                    circle.initial(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, config);

        elements.map((item) => {
            ovserver.observe(item);
        });
    } else {
        // if the browser does not support IntersectionObserver
        // we run all progress bars at once
        elements.map((element) => {
            circle.initial(element);
        });
    }
});