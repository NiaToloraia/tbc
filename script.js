
//slider-logos 

document.addEventListener("DOMContentLoaded", function() {
    const sliderContainer = document.getElementById('slider-container');
    const slides = document.querySelectorAll('.slide');
    const paginationDots = document.querySelectorAll('.slider-pagination ul li'); 
    let index = 0;


    //calculates index
    window.nextSlide = function() {
        if (index < slides.length - 1) {
            index++;
        } else {
            index = 0;
        }
        updateSlidePosition();
    }

    window.previousSlide = function() {
        if (index > 0) {
            index--;
        } else {
            index = slides.length - 1;
        }
        updateSlidePosition();
    }




    //slidewidth
    function updateSlidePosition() {
        const slideWidth = sliderContainer.clientWidth;
        const newTransformValue = -slideWidth * index;
        sliderContainer.style.transform = `translateX(${newTransformValue}px)`;
        updatePagination();
    }

    window.goToSlide = function(slideIndex) {
        index = slideIndex;
        updateSlidePosition();
    }

    //dots
    function updatePagination() {
        paginationDots.forEach((dot, idx) => {
            if (idx === index) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    
    updatePagination();

    let slideInterval = setInterval(nextSlide, 5000); // timer 




    //  for slider logos arrow
    document.querySelector('.left-arrow').addEventListener('click', function() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 10000);
    });

    document.querySelector('.right-arrow').addEventListener('click', function() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 10000);
    });
});







//accordion card 
document.addEventListener('DOMContentLoaded', function() {
    const headers = document.querySelectorAll('.accordion-header');
    headers.forEach(header => {
        header.addEventListener('click', function() {
            const accordionContent = this.nextElementSibling;

            // Toggle active class on the header
            this.classList.toggle('active');

            // Toggle the accordion content
            if (accordionContent.style.display === 'block') {
                accordionContent.style.display = 'none';
            } else {
                accordionContent.style.display = 'block';
            }

            // Close other open accordion sections
            headers.forEach(otherHeader => {
                if (otherHeader !== header) {
                    otherHeader.classList.remove('active');
                    otherHeader.nextElementSibling.style.display = 'none';
                }
            });
        });
    });
});









// Vertical Scroll
//to close and open side text
const rules = document.querySelector('#rules');
const sideText = document.querySelector('#side-text');
const crossButton = document.getElementById("cross-Btn");
const closeBtn = document.querySelector('#close-Btn');

rules.addEventListener('click', () => {
    sideText.classList.toggle('active');
    rules.classList.toggle('active');
    

});


closeBtn.addEventListener('click', () => {
    sideText.classList.remove("active");
    rules.classList.remove('active');
});



crossButton.addEventListener('click', () => {
    sideText.classList.remove("active");
    rules.classList.remove('active');
});