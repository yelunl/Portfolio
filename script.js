const heading = document.querySelector('h1');

// Blur effect
document.addEventListener('DOMContentLoaded', () => {
    let i = 40;
    const blurInterval = setInterval(() => {
        heading.style.filter = `blur(${i}px) url('#filter')`;
        i--;
        if (i === 0) clearInterval(blurInterval);
    }, 50);

})

// About me animation
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(item => {
        if(item.isIntersecting) {
            item.target.classList.add('lineAnim');
            item.target.classList.add('titleAnim')
            item.target.classList.add('parAnim')
            item.target.classList.add('imgFade')
        } else {
            item.target.classList.remove('lineAnim');
            item.target.classList.remove('titleAnim');
            item.target.classList.remove('parAnim');
            item.target.classList.remove('imgFade');

        }
    })
}, {threshold: 0.40})

const lineAnim = document.querySelector('#aboutme path');
const target = document.querySelector('#aboutme');

console.log(lineAnim.getTotalLength());
// 6415.72607421875

observer.observe(target)