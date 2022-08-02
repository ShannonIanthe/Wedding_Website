const createNav = () => {
    let nav = document.querySelector('nav');

    nav.innerHTML = `
    <nav id="nav" class="nav">
    <!--     <div class="logo"><a href="index.html">K & F</a></div> --> 
          <ul class="nav-ul">
            <li><a class="nav-links" href="index.html">K&F</a></li><span class="line">|</span> 
            <li><a class="nav-links" href="boda.html">Boda</a></li><span class="line">|</span>
            <li><a class="nav-links" href="regalo.html">Regalo</a></li><span class="line">|</span>
            <li><a class="nav-links" href="rsvp.html">RSVP</a></li>
          </ul>
        </nav>`
}

createNav();