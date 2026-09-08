const textElement = document.getElementById('typewriter');
if (textElement) {
    const phrases = ['Web Developer', 'Programátor', 'Frontend Kodér'];
    let phraseIndex = 0;
    let characterIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function type() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            textElement.textContent = currentPhrase.substring(0, characterIndex - 1);
            characterIndex--;
            typeSpeed = 60;
        } else {
            textElement.textContent = currentPhrase.substring(0, characterIndex + 1);
            characterIndex++;
            typeSpeed = 120;
        }

        if (!isDeleting && characterIndex === currentPhrase.length) {
            isDeleting = true;
            typeSpeed = 2000; 
        } else if (isDeleting && characterIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typeSpeed = 500; 
        }
        setTimeout(type, typeSpeed);
    }
    
    setTimeout(type, 500);
}

function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 50; // Zobrazí se dříve

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}


const hamburger = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');

if (hamburger && navList) {
    hamburger.addEventListener('click', () => {
        navList.classList.toggle('active');
        
        // Animace hamburger ikonky
        hamburger.classList.toggle('toggle');
    });
}

// SPUŠTĚNÍ VŠEHO
document.addEventListener('DOMContentLoaded', () => {
    // Okamžité spuštění reveal pro prvky nahoře
    reveal(); 
});

window.addEventListener("scroll", reveal);