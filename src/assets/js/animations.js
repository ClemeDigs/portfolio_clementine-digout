import anime from 'animejs/lib/anime.es.js';

var textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
.add({
  targets: '.ml6 .letter',
  translateY: ["1.1em", 0],
  translateZ: 0,
  duration: 750,
  delay: (el, i) => 50 * i
}).add({
  targets: '.ml6',
  opacity: 1,
  duration: 1000,
  easing: "easeOutExpo",
  delay: 1000
});



anime.timeline({loop: false})
.add({
  targets: '.ml5 .line',
  opacity: [0.5,1],
  scaleX: [0, 1],
  easing: "easeInOutExpo",
  duration: 700
}).add({
  targets: '.ml5 .line',
  duration: 600,
  easing: "easeOutExpo",
  translateY: (el, i) => (-0.625 + 0.625*2*i) + "em"
}).add({
  targets: '.ml5 .ampersand',
  opacity: [0,1],
  scaleY: [0.5, 1],
  easing: "easeOutExpo",
  duration: 600,
  offset: '-=600'
}).add({
  targets: '.ml5 .letters-left',
  opacity: [0,1],
  translateX: ["0.5em", 0],
  easing: "easeOutExpo",
  duration: 600,
  offset: '-=300'
}).add({
  targets: '.ml5 .letters-right',
  opacity: [0,1],
  translateX: ["-0.5em", 0],
  easing: "easeOutExpo",
  duration: 600,
  offset: '-=600'
}).add({
  targets: '.ml5',
  opacity: 1,
  duration: 1000,
  easing: "easeOutExpo",
  delay: 0
});


/* const container = document.querySelector(".logo-container");
let isStopped = false;

function getRandomPosition(element) {
  const containerRect = container.getBoundingClientRect();
  const elWidth = element.offsetWidth;
  const elHeight = element.offsetHeight;

  const randomX = Math.random() * (containerRect.width - elWidth);
  const randomY = Math.random() * (containerRect.height - elHeight);

  return { x: randomX, y: randomY };
}

gsap.utils.toArray(".logo").forEach((logo) => {
  const position = getRandomPosition(logo);

  gsap.set(logo, {
    x: position.x,
    y: position.y
  });

  const moveRandomly = () => {
    if (isStopped) return;

    const newPosition = getRandomPosition(logo);
    gsap.to(logo, {
      x: newPosition.x,
      y: newPosition.y,
      duration: 3 + Math.random() * 2,
      ease: "power1.inOut",
      onComplete: moveRandomly 
    });
  };

  moveRandomly(); 

  
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.create({
    trigger: ".logo-container",
    start: "top center",
    onEnter: () => {
      isStopped = true;
      gsap.killTweensOf(logo); 

      gsap.to(".logo", {
        x: (i) => (i % 4) * 120,
        y: (i) => Math.floor(i / 4) * 120,
        duration: 1.5,
        ease: "power2.out"
      });
    }
  });
});

const updateGrid = () => {
  const isMobile = window.innerWidth <= 768;
  gsap.to(".logo", {
    x: (i) => (i % (isMobile ? 3 : 4)) * 120,
    y: (i) => Math.floor(i / (isMobile ? 3 : 4)) * 120,
    duration: 1.5,
    ease: "power2.out"
  });
};

window.addEventListener('resize', updateGrid); */