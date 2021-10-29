window.addEventListener('DOMContentLoaded', () => {
    const arrowNext = document.querySelector('#arrow_next');
    const arrowPrev = document.querySelector('#arrow_prev');
    const slides = document.querySelectorAll('.slide');

    let index = 1;

    try {
        arrowNext.onclick = () => {
            nextSlide()
            console.log(index)
        }
    } catch (e) {
        console.log(e)
    }

    try {
        arrowPrev.onclick = () => {
            prevSlide()
            console.log(index)
        }
    } catch (e) {
        console.log(e)
    }

    const hideSlides = () => {
        slides.forEach(slide => {
            slide.classList.add('hidden')
        })
    }

    const showSlide = (i) => {
        slides[i].classList.remove('hidden')
    }

    const nextSlide = () => {
        if (index < slides.length) {
            index++
            hideSlides();
            showSlide(index - 1)
        }
        togglePrevArow()
        toggleNextArrow()
    }

    const prevSlide = () => {
        if (index > 1) {
            index--
            hideSlides();
            showSlide(index - 1)
        }
        togglePrevArow()
        toggleNextArrow()
    }

    const togglePrevArow = () => {
        if (index > 1) {
            arrowPrev.classList.add('pointer_arrow')
        } else {
            arrowPrev.classList.remove('pointer_arrow')
        }
    }

    const toggleNextArrow = () => {
        if (index == slides.length) {
            arrowNext.classList.remove('pointer_arrow')
        } else {
            arrowNext.classList.add('pointer_arrow')
        }
    }

    hideSlides()
    showSlide(index - 1)
})