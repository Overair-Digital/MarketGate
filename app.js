import "https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js";


function animateHeaders() {
    let headers = document.querySelectorAll('.textContainerLeft');

    for (let i = 0; i < headers.length; i++) {

        headers[i].animate([
            {transform: 'translateX(-10px)',
                opacity: 0},
            {transform: 'none',
                opacity: 1}], {
            duration: 10000,
            fill: 'both',
            timeline: new ScrollTimeline({
                scrollOffsets: [{target: headers[i], edge: 'end', rootMargin: '-20px', clamp: true},
                    {target: headers[i], edge: 'end', threshold: 1, rootMargin: '-20px', clamp: true}],
                fill: 'both',
            })
        });
    }
}

animateHeaders();