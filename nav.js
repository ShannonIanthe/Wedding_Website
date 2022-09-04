const createNav = () => {
    let nav = document.querySelector('nav');

    nav.innerHTML = `
    <nav id="nav" class="nav">
    <!--     <div class="logo"><a href="index.html">O & M</a></div> --> 
          <ul class="nav-ul">
            <li><a class="nav-links" href="index.html">O&M</a></li><span class="line">|</span> 
            <li><a class="nav-links" href="boda.html">Boda</a></li><span class="line">|</span>
            <li><a class="nav-links" href="regalo.html">Regalo</a></li><span class="line">|</span>
            <li><a class="nav-links" href="rsvp.html">RSVP</a></li>
          </ul>
        </nav>`
}

createNav();

const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})