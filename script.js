// const mouse = document.querySelector('#mouse');
const heading = document.querySelector('h1');

// document.addEventListener('mousemove', (e) => {
//     const x = e.pageX;
//     const y = e.pageY;

//     const mouseWidth = mouse.offsetWidth / 2;
//     const mouseHeigh = mouse.offsetHeight / 2;

//     mouse.style.translate = `${x - mouseWidth}px ${y - mouseHeigh}px`;
// })

// Blur effect
document.addEventListener('DOMContentLoaded', () => {
    let i = 40;
    const blurInterval = setInterval(() => {
        heading.style.filter = `blur(${i}px) url('#filter')`;
        // console.log('text');
        i--;
        if (i === 0) clearInterval(blurInterval);
    }, 50);

})


// AboutMe animation
function disableScroll() {
    // Get the current page scroll position
    scrollTop = window.scrollY || document.documentElement.scrollTop;
    (scrollLeft = window.scrollY || document.documentElement.scrollLeft),
        // if any scroll is attempted,
        // set this to the previous value
        (window.onscroll = function () {
            window.scrollTo(scrollLeft, scrollTop);
        });
}

function enableScroll() {
    window.onscroll = function () {};
}

// ///////////////////////// //
// OLD INTERSECTION OBSERVER //
// ///////////////////////// //
// set intersection observer for the section that contains the animation
// const observer = new IntersectionObserver(
//     (entries, observer) => {
//         entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//                 console.log("isIntersecting");
//                 // when section is intersecting disable scroll
//                 // disableScroll();
//                 // target.style.overflow = 'scroll';

//                 const onWheel = (e) => {
//                     // e.preventDefault()

//                     // target.scrollLeft += e.deltaY + e.deltaX;
//                     // target.scrollTop += 0;

//                     // if(target.offsetWidth + target.scrollLeft >= target.scrollWidth && e.deltaY > 0 || target.scrollLeft === 0 && e.deltaY < 0) {
//                     //     console.log('test')
//                     //     enableScroll();
//                     //     target.removeEventListener('wheel', onWheel);
//                     // }

//                     if(target.offsetHeight + target.scrollTop >= target.scrollHeight && e.deltaY > 0 || target.scrollTop === 0 && e.deltaY < 0) {
//                         enableScroll();
//                     }
//                 }

//                 target.addEventListener('wheel', onWheel);

                

//                 // target.addEventListener('scroll', () => {
//                 //     console.log('scrollTop: ' + target.scrollTop)
//                 //     console.log('scrollHeight: ' + target.scrollHeight)
//                 //     console.log('offsetHeight: ' + target.offsetHeight)
//                 //     console.log('offsetHeight + scrollTop: ' + (target.offsetHeight + target.scrollTop))
//                 // })
//             } else {
//                 // target.style.overflow = 'hidden';
//                 console.log("notIntersecting");
//             }
//         });
//     },
//     { threshold: 0.98 }
// );

// const target = document.querySelector("#aboutMe");
// console.log(target);

// observer.observe(target);

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(item => {
        if(item.isIntersecting) {
            item.target.classList.add('lineAnim');
            item.target.classList.add('titleAnim')
            item.target.classList.add('parAnim')
            // lineAnim.addEventListener('animationend', (e) => {

            // })
        } else {
            item.target.classList.remove('lineAnim');
            item.target.classList.remove('titleAnim');
            item.target.classList.remove('parAnim');

        }
    })
}, {threshold: 0.90})

const lineAnim = document.querySelector('#third path');
const target = document.querySelector('#third');

console.log(lineAnim.getTotalLength());
// 6415.72607421875

observer.observe(target)

// skills
// const skills = document.querySelector('#skills');

// let newScrollPos

// skills.addEventListener('wheel', (e) => {
//     e.target.scrollLeft += e.deltaY
    
// })