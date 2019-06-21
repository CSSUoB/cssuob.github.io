const CONTAINER = 'fadein-container';
const FADEIN = 'fadein';

const DELAY_PREFIX = 'fadein-delay-';

window.addEventListener('load', () => {
    let collections = document.getElementsByClassName(CONTAINER);
    for (let collection of collections) {
        // find delay in classes
        let delay = 50;
        for (let className of collection.classList) {
            if (className.startsWith(DELAY_PREFIX)) {
                delay = className.substring(DELAY_PREFIX.length);
                break;
            }
        }

        // gradually fade in
        let fadeins = collection.getElementsByClassName(FADEIN);
        let i = 0;
        let appear = setInterval(() => {
            if (i >= fadeins.length) {
                clearInterval(appear);
                return;
            }

            // we add 'visible' and remove 'hidden'
            // but probably, the css styles will only use one
            fadeins[i].classList.add('visible');
            fadeins[i].classList.remove('hidden');

            i++;
        }, delay);
    }
});