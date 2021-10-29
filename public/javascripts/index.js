const title = document.querySelector('#title');
const hiddenElems = document.querySelectorAll('.hidden');

const toggleHiddenElems = () => {
    hiddenElems.forEach(elem => {
        elem.classList.toggle('hidden');
    });
};

try {
    title.onclick = () => {
        toggleHiddenElems();
    };
} catch (e) {
    console.log(e)
}

