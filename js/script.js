const effectDivsOdd = document.querySelectorAll('.cardAnimOdd');
const effectDivsEven = document.querySelectorAll('.cardAnimEven');

function isInViewport(element) {
    const rect = element.getBoundingClientRect();

    return (
        rect.bottom >= 0 &&
        rect.left >= 0 &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight)-170 &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

document.addEventListener('scroll', function () {

    
    if (window.innerWidth > 700) {
        classModifier(effectDivsOdd);
        setTimeout(() => classModifier(effectDivsEven), 700);
    } else {
        classModifier(effectDivsOdd);
        classModifier(effectDivsEven);
    }   
});
    

function classModifier(elements) {
    elements.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add('--cardAnimation')
        }
   
        if (!isInViewport(element)) {
            element.classList.remove('--cardAnimation')
        
        }
    })
}
    

