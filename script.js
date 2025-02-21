// Rotating Banner (only on index.html)
const bannerImages = document.querySelectorAll('.banner-img');
if (bannerImages.length) {
    let currentIndex = 0;
    setInterval(() => {
        bannerImages[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % bannerImages.length;
        bannerImages[currentIndex].classList.add('active');
    }, 5000);
}

// Rotating Testimonials (like Crumbs)
const testimonials = document.querySelectorAll('.testimonial');
if (testimonials.length) {
    let currentTestimonial = 0;
    function rotateTestimonials() {
        testimonials[currentTestimonial].classList.remove('active');
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        testimonials[currentTestimonial].classList.add('active');
    }
    testimonials[0].classList.add('active');
    setInterval(rotateTestimonials, 4000); // Rotates every 4 seconds
}