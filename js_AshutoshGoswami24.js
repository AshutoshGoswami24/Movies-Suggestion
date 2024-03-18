//jaldi yeha se hato
// (c) lord krishna (c) biisal

async function getDets() {
    let randPage = Math.floor(1 + Math.random() * 100)
    const apiKey = '6abcb6bb99fb77f33c37016a28866ed2';
    let apiArr = [`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=hin-US&page=${randPage}`, `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}&language=hin-US&page=${randPage}`, `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=hin-US&page=${randPage}`]
    let ArrRanIndex = Math.floor(Math.random() * apiArr.length)
    let apiUrl = apiArr[ArrRanIndex]
    let movieCont = document.querySelector('.movieSug')
    let img = document.querySelector('.movieimg img')
    let movieDets = document.querySelector('.movieDets')
    let movieDetsMini = document.querySelector('.movieDets-mini')
    let data = await fetch(apiUrl)
    let resData = await data.json()
    let ranIndex = Math.floor(Math.random() * resData.results.length)
    let movie = resData.results[ranIndex]
    movieDets.innerHTML = `
    <h3>Must-see blockbuster film!</h3>
    <h4><span>Title:</span> ${movie.title}</h4>
                        <h4><span>movie overview:</span> ${movie.overview}</h4>
                        <h4><span>Release Date:</span> ${movie.release_date}</h4>
                        <h4><span>Vote Average:</span> ${movie.vote_average}</h4>
    `
    movieDetsMini.innerHTML = `
                <h3><span>Title:</span> ${movie.title}</h3>
                <h3><span>Release Date:</span> ${movie.release_date}</h3>
                <h3><span>Vote Average:</span> ${movie.vote_average}</h3>
        `
    img.src = `https://image.tmdb.org/t/p/w1280/${movie.poster_path}`
    movieCont.style.backgroundImage = `url(https://image.tmdb.org/t/p/w1280/${movie.backdrop_path})`;
}
window.addEventListener("load", getDets())

let homeBtn = document.querySelector(".home-btn")
let abtBtn = document.querySelector(".about-btn")
let dldBtn_outer = document.querySelector(".downloadBtn")
let file_name = document.querySelector(".file-name")
let about_nav = document.querySelector(".about-nav")
let bot_btn = document.querySelector('.bot-btn')
let contact_btn = document.querySelector('.contact-btn')
let links = document.querySelectorAll('.links a')
let bot_links = document.querySelectorAll('.bot-link a')
let chnl_link = document.querySelectorAll('.chnl-link a')
let abt_chnl = document.querySelector('.abt-chnl')
let contact = document.querySelectorAll('.contact a')
let footer = document.querySelector('footer')

let timer = 0

if (document.getElementById("heading").classList.contains("title")) {
    document.querySelector(".title").textContent = 'BISAL FILES'
}

// adding under in home btn at first 
homeBtn.classList.add('active');

// when clicking about
abtBtn.addEventListener("click", () => {
    dldBtn_outer.style.display = "none";
    file_name.style.display = "none";
    footer.style.display = "none";
    about_nav.style.display = "block"
    about_nav.style.display = "block"
    about_nav.style.animation = "strtLoad 1s ease 0s forwards"



})
// when clicking home
homeBtn.addEventListener("click", () => {
    dldBtn_outer.style.display = "flex";
    file_name.style.display = "block";
    footer.style.display = "block";
    window.location.href = "#main";
    about_nav.style.animation = "strtLoad 1s ease 0s forwards"
    about_nav.style.display = "none"

})

abt_chnl.addEventListener("click", () => {
    timer = 1
    chnl_link.forEach((i) => {
        i.style.animation = `strtLoad 1s ease ${timer}s forwards, linksBtnAn 2s ease ${timer}s infinite `
        timer += 0.3;
    });
    timer = 0
});
function bot_btn_clicked() {
    var about_btn = document.querySelector(".about-btn")
    timer = 1;
    bot_links.forEach((i) => {
        i.style.animation = `linksBtnAn 2s ease ${timer}s infinite ,strtLoad 1s ease ${timer}s forwards`;
        timer += 0.3;
    });
    timer = 0;
    dldBtn_outer.style.display = "none";
    file_name.style.display = "none";
    footer.style.display = "none";
    about_nav.style.display = "block"
    about_nav.style.display = "block"
    about_nav.style.animation = "strtLoad 1s ease 0s forwards"
    var links = document.querySelectorAll('.nryt a');
    links.forEach(function (link) {
        link.classList.remove('active');
    });
    about_btn.classList.add('active');
    var links = document.querySelectorAll('.about-nav a');
    links.forEach(function (link) {
        link.classList.remove('active');
    });
    let wlcm = document.querySelector(".wlcm")
    wlcm.classList.add('active');
    var links = document.querySelectorAll('.about-nav a');
    links.forEach(function (link) {
        link.classList.remove('active');
    });
    bot_btn.classList.add('active');
};
footer_bisal_btn_clicked = () => {
    timer = 1;
    contact.forEach((i) => {
        i.style.animation = `linksBtnAn 2s ease ${timer}s infinite ,strtLoad 1s ease ${timer}s forwards`;
        timer += 0.3;
    });

    timer = 0;
    var about_btn = document.querySelector(".about-btn")
    timer = 1;
    bot_links.forEach((i) => {
        i.style.animation = `linksBtnAn 2s ease ${timer}s infinite ,strtLoad 1s ease ${timer}s forwards`;
        timer += 0.3;
    });
    timer = 0;
    dldBtn_outer.style.display = "none";
    file_name.style.display = "none";
    footer.style.display = "none";
    about_nav.style.display = "block"
    about_nav.style.display = "block"
    about_nav.style.animation = "strtLoad 1s ease 0s forwards"
    var links = document.querySelectorAll('.nryt a');
    links.forEach(function (link) {
        link.classList.remove('active');
    });
    about_btn.classList.add('active');
    var links = document.querySelectorAll('.about-nav a');
    links.forEach(function (link) {
        link.classList.remove('active');
    });
    let wlcm = document.querySelector(".wlcm")
    wlcm.classList.add('active');
    var links = document.querySelectorAll('.about-nav a');
    links.forEach(function (link) {
        link.classList.remove('active');
    });
    contact_btn.classList.add('active');
}

contact_btn.addEventListener("click", () => {
    timer = 1;
    contact.forEach((i) => {
        i.style.animation = `linksBtnAn 2s ease ${timer}s infinite ,strtLoad 1s ease ${timer}s forwards`;
        timer += 0.3;
    });

    timer = 0;
})

// btn animations 
let dldBtn = document.querySelectorAll('.downloadBtn button')
dldBtn.forEach((i) => {
    i.style.animation = `strtLoad 1s ease ${timer}s forwards, linksBtnAn 2s ease ${timer}s infinite`
    timer += 0.3;
    i.style.setProperty("--beforestyl", `button_shine ${2 + Math.random() * 7}s ease  ${Math.random() * 10}s infinite`);

})

timer = 0
links.forEach((i) => {
    i.style.animation = `linksBtnAn 2s ease ${timer}s infinite`
    timer += 0.3
    i.style.setProperty("--beforestyl", `button_shine ${2 + Math.random() * 7}s ease ${Math.random() * 10}s infinite`);

})
timer = 0
timer = 0

function toggleWidth(element) {
    var links = document.querySelectorAll('.about-nav a');
    links.forEach(function (link) {
        link.classList.remove('active');
    });

    element.classList.add('active');
}
function toggleWidthnav(element) {
    var links = document.querySelectorAll('.nryt a');
    links.forEach(function (link) {
        link.classList.remove('active');
    });

    element.classList.add('active');
    var links = document.querySelectorAll('.about-nav a');
    links.forEach(function (link) {
        link.classList.remove('active');
    });
    let wlcm = document.querySelector(".wlcm")
    wlcm.classList.add('active');
}

if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
    Shery.mouseFollower();
    Shery.makeMagnet(".magnet");
}


// file name showing 
var div = document.getElementById('myDiv');
var text = div.textContent;
if (text.length > 300) {
    div.textContent = text.slice(0, 300) + "....";
}

// video player 
const controls = [
    'play-large',
    'rewind', 'play',
    'fast-forward',
    'progress',
    'current-time',
    'duration',
    // 'mute',
    // 'volume',
    'captions',
    'settings',
    'pip',
    'airplay',
    'download',
    'fullscreen'
];
document.addEventListener('DOMContentLoaded', () => {
    const player = Plyr.setup('.player', { controls });
});

// disabling right click
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});
document.addEventListener('keydown', function (e) {
    if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && e.key === 'I') ||
        (e.ctrlKey && e.key === 'u') ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey
    ) {
        e.preventDefault();
    }
});


const videolink = window.location.href;
const bisallink = videolink.replace("/watch/", "/");

function vlc_player() {
    const openbisallink = bisallink;
    const openVlc = `vlc://${openbisallink}`;
    window.location.href = openVlc;
}

function mx_player() {
    const openbisallink = bisallink;
    const openMx = `intent:${openbisallink}#Intent;package=com.mxtech.videoplayer.ad;end`;
    window.location.href = openMx;
}

function playit_player() {
    const openbisallink = bisallink;
    const openPlayit = `playit://playerv2/video?url=${openbisallink}`;
    window.location.href = openPlayit;
}

function s_player() {
    const openbisallink = bisallink;
    const openSplayer = `intent:${openbisallink}#Intent;action=com.young.simple.player.playback_online;package=com.young.simple.player;end`;
    window.location.href = openSplayer;
}

function km_player() {
    const openbisallink = bisallink;
    const openKmplayer = `intent:${openbisallink}#Intent;package=com.kmplayer;end`;
    window.location.href = openKmplayer;
}

function hd_player() {
    const openbisallink = bisallink;
    const openHDplayer = `intent:${openbisallink}#Intent;package=uplayer.video.player;end`;
    window.location.href = openHDplayer;
}

function bisalDownload() {
    const openbisallink = bisallink;
    window.location.href = openbisallink;
}
