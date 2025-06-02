function setupHoverEffect(triggerSelector, targetSelector) {
    const triggers = document.querySelectorAll(triggerSelector);
    const targets = document.querySelectorAll(targetSelector);
    let timeoutId;
  
    const addActive = () => targets.forEach(el => el.classList.add("active"));
    const removeActive = () => targets.forEach(el => el.classList.remove("active"));
  
    const isAnyHovered = () =>
      [...triggers, ...targets].some(el => el.matches(':hover'));
  
    triggers.forEach(trigger => {
      trigger.addEventListener('mouseenter', () => {
        clearTimeout(timeoutId);
        addActive();
      });
  
      trigger.addEventListener('mouseleave', () => {
        timeoutId = setTimeout(() => {
          if (!isAnyHovered()) removeActive();
        }, 150);
      });
    });
  
    targets.forEach(target => {
      target.addEventListener('mouseenter', () => {
        clearTimeout(timeoutId);
      });
  
      target.addEventListener('mouseleave', () => {
        timeoutId = setTimeout(() => {
          if (!isAnyHovered()) removeActive();
        }, 150);
      });
    });
  }
  

setupHoverEffect('.design', '.firstp');

setupHoverEffect('.firstphtml', '.seconddesign');

setupHoverEffect('.quality', '.firstquality');
setupHoverEffect('.quality', '.pquality');

setupHoverEffect('.qualitys', '.secondquality');
setupHoverEffect('.qualitys', '.pqualitys');

setupHoverEffect('.exppro', '.expprop');
setupHoverEffect('.exppro', '.expproh2');
setupHoverEffect('.exppro', '.exppro');

document.querySelector('.downloadcv').addEventListener('click', function() {
  const a = document.createElement('a');
  a.href = './image/CV.pdf';
  a.download = 'Mon_CV.pdf'; // Nom à l'enregistrement
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
});

const activesetting = document.querySelector("#iconsetting");
const menusetting = document.querySelector(".openmenu");
activesetting.addEventListener("click", () => {
    menusetting.classList.toggle("active");
});

document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(() => {
        window.scrollTo({
          top: window.pageYOffset,
          left: 0,
          behavior: 'auto'
        });
      }, 300);
    }
  });
});

document.querySelector('.viewcv').addEventListener('click', function() {
  window.open('./image/cv.pdf', '_blank');
});
