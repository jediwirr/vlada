const title = document.querySelector('#title');
const hiddenElems = document.querySelectorAll('.hidden');
const hiddenMenu = document.querySelectorAll('.mutable');
const trigger = document.querySelectorAll('.trigger');
const triggerInnerMenu = document.querySelector('#trigger_inner_menu');
const innerMainMenu = document.querySelector('#inner_main_menu');

try {
    triggerInnerMenu.onclick = () => {
        innerMainMenu.classList.toggle('hidden');
    }
} catch (e) {
    console.log(e)
}

const toggleHiddenElems = () => {
    hiddenElems.forEach(elem => {
        elem.classList.toggle('hidden');
    });
};

// try {
//     title.onclick = () => {
//         toggleHiddenElems();
//     };
// } catch (e) {
//     console.log(e)
// }

const showSubMenu = () => {
    hiddenMenu.forEach(item => {
        item.classList.toggle('hidden_submenu');
    })
}

try {
    trigger.forEach(item => {
        item.onclick = () => {
            showSubMenu();
        }
    })
} catch (e) {
    console.log(e)
}
