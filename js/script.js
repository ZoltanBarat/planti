
const effectDiv = document.querySelectorAll('.cardAnim');

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
/*     
    console.log(document.documentElement.clientHeight)
    console.log(window.innerHeight)
    console.log(rect.bottom) */

    return (
        rect.bottom >= 0 &&
        rect.left >= 0 &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight)-180 &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

document.addEventListener('scroll', function () {

    effectDiv.forEach(element => {        
        if (isInViewport(element)) {  
            
            element.classList.add('--cardAnimation')
        } 
       
        if (!isInViewport(element)) {         
            element.classList.remove('--cardAnimation')
            
        } 
    });

   
});
    
    

