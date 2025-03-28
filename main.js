'use strict';

{
  const mainvisual = document.getElementById('mainvisual');
  const mainimg = document.getElementById('mainimg');
  const profile = document.getElementById('profile');
  const Email = document.getElementById('Email')

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const windowH = window.innerHeight;

    if (scrollY < windowH) {
      const ratio = scrollY / windowH; // 0.0～1.0
      let scale = 1 + ratio; // 1～2
      if (scale > 2) scale = 2;
      mainimg.style.transform = `scale(${scale})`;
    }

    const intro = document.getElementById('intro');
    const introBottom = intro.offsetTop + intro.offsetHeight;
    const triggerPoint = introBottom - windowH * 0.2; 

    if (scrollY > triggerPoint) {
      profile.style.transform = 'translateY(0)';
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    const fadeImages = document.querySelectorAll(".fade-in-scroll");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }else {
          entry.target.classList.remove("show"); 
        }
      });
    }, { threshold: 0.3 }); 
  
    fadeImages.forEach(img => {
      observer.observe(img);
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const fadeImages = document.querySelectorAll("#contact img");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "0.5"; 
          entry.target.style.transform = "scale(1)";
        } else {
          entry.target.style.opacity = "0";
          entry.target.style.transform = "scale(1.1)";
        }
      });
    }, { threshold: 0.3 });
  
    fadeImages.forEach(img => {
      observer.observe(img);
    });
  });
  

  Email.addEventListener('click',()=>{
    
  })

  document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");

  hamburger.addEventListener("click", function () {
    this.classList.toggle("active"); 
    navMenu.classList.toggle("active"); 
  });

  document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", function () {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });
});


}
