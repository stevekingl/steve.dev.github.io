
//humbuger menu
function toggleMenu() {
    var mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.style.display = (mobileMenu.style.display === 'flex') ? 'none' : 'flex';
}

function toggleMenu() {
    var mobileMenu = document.querySelector('.mobile-menu');
    if (mobileMenu.style.display === 'flex') {
        mobileMenu.style.display = 'none';
    } else {
        mobileMenu.style.display = 'flex';
    }
}

//humbuger menu smooth transition
function toggleMenu() {
    var mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenu.style.opacity === '1') {
        mobileMenu.style.opacity = '0';
        setTimeout(function() {
            mobileMenu.style.display = 'none';
        }, 500); 
    } else {
        mobileMenu.style.display = 'flex';
        setTimeout(function() {
            mobileMenu.style.opacity = '1';
        }, 0); 
    }
}

// Hamburger menu toggle
function toggleMenu() {
    var mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenu.style.opacity === '1') {
        mobileMenu.style.opacity = '0';
        setTimeout(function() {
            mobileMenu.style.display = 'none';
        }, 500); 
    } else {
        mobileMenu.style.display = 'flex';
        setTimeout(function() {
            mobileMenu.style.opacity = '1';
        }, 0); 
    }
}


//animation

const scrollRevealOption={
    distance:"50px",
    origin:"bottom",
    duration:1000
}
const scrollRevealtransparent={
    distance:"50px",
    opacity: 0.2,
    duration:1000
}

ScrollReveal().reveal(".main1 h1 .h p",scrollRevealOption)
ScrollReveal().reveal(".icon a ",{...scrollRevealOption,delay:500})
ScrollReveal().reveal(".container2 img .cards img h2 ",{...scrollRevealOption,delay:1000})
ScrollReveal().reveal(".con1 img",{...scrollRevealtransparent,delay:1000})
ScrollReveal().reveal(".main2 h1",scrollRevealOption)
ScrollReveal().reveal(".big .main3",{...scrollRevealOption,delay:500})
ScrollReveal().reveal(".main3 h1",{...scrollRevealOption,delay:1000})
ScrollReveal().reveal(".cards img h2",{...scrollRevealOption,delay:2000})
ScrollReveal().reveal(".portofolio ",{...scrollRevealOption,delay:500})
ScrollReveal().reveal(".portofolio-cards .portofolio-card img ",{...scrollRevealtransparent,delay:1000})


 
