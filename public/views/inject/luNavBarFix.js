/* Inject Location: body_top */

document.addEventListener("DOMContentLoaded", function(e){
    const navBar = document.getElementById('navigation');
    const newNav = document.createElement('div');
    newNav.classList.add('row');
    newNav.innerHTML = ` 
      <div class="col-sm-12">
        <div id="secondNavLu">
        <div class="container">
            <a href="https://www.library.rochester.edu/rbscp">Rare Books and Special Collections</a>
            <a href="https://www.esm.rochester.edu/sibley/">Sibley Music Library</a>
            <a href="https://www.urmc.rochester.edu/libraries/miner/rare-books-and-manuscripts.aspx">Edward G. Miner Library History of Medicine Section</a>
            <a href="https://www.library.rochester.edu/spaces/robbins">Rossell Hope Robbins Library </a>
            <a href="https://mag.rochester.edu/">Memorial Art Gallery</a>
    
        </div>
        </div>
          
      </div>
    `
    navBar.appendChild(newNav);
      });

/* Top survey bar */
document.addEventListener("DOMContentLoaded", function(e){
    const navBar = document.getElementById('header');
    const newNav = document.createElement('div');
    newNav.innerHTML = ` 
      <div class="headerSurvey"><p>What do you think about the new finding aid interface? Will you take this <a href="https://docs.google.com/forms/d/e/1FAIpQLSfXe7jzLaC_zSJTfz8l0az5qXaljZz7wNgToC-44OBmS0gddw/viewform" target="_blank"> Quick Survey </a> to help us improve your experience?</p></div>
    `
    navBar.prepend(newNav);
      });

/* Adding text to the search button */
document.addEventListener("DOMContentLoaded", function(e){
    let searchBtn = document.querySelector("#collapsemenu .nav.nav.navbar-nav li:nth-child(8)");
    searchBtn.innerHTML = ` 
      <a href="/search?reset=true" title="Search The Archives">
                <span class="fa fa-search" aria-hidden="true"></span>
                 Search<span class="sr-only">Search The Archives</span>
              </a>
    `
      });

/* Adjusting placeholder in search bar */
document.addEventListener("DOMContentLoaded", function(e){
    let searchContent = document.getElementById("filter_q0");
    searchContent.placeholder = 'Search this collection';
      });

/* Adding home icon */
document.addEventListener("DOMContentLoaded", function(e){
    let homeBtn = document.querySelector(".nav.nav.navbar-nav li:nth-child(1)");
    homeBtn.innerHTML = ` 
<a href="/">
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" viewBox="0 0 50 50" style="fill:#FFFFFF;"> <path d="M 24.962891 1.0546875 A 1.0001 1.0001 0 0 0 24.384766 1.2636719 L 1.3847656 19.210938 A 1.0005659 1.0005659 0 0 0 2.6152344 20.789062 L 4 19.708984 L 4 46 A 1.0001 1.0001 0 0 0 5 47 L 18.832031 47 A 1.0001 1.0001 0 0 0 19.158203 47 L 30.832031 47 A 1.0001 1.0001 0 0 0 31.158203 47 L 45 47 A 1.0001 1.0001 0 0 0 46 46 L 46 19.708984 L 47.384766 20.789062 A 1.0005657 1.0005657 0 1 0 48.615234 19.210938 L 41 13.269531 L 41 6 L 35 6 L 35 8.5859375 L 25.615234 1.2636719 A 1.0001 1.0001 0 0 0 24.962891 1.0546875 z M 25 3.3222656 L 44 18.148438 L 44 45 L 32 45 L 32 26 L 18 26 L 18 45 L 6 45 L 6 18.148438 L 25 3.3222656 z M 37 8 L 39 8 L 39 11.708984 L 37 10.146484 L 37 8 z M 20 28 L 30 28 L 30 45 L 20 45 L 20 28 z"></path> </svg>
</a>
    `
      });
/* FIxing text in search page */
document.addEventListener("DOMContentLoaded", function(e){
    let header = document.querySelector("#content .row .col-sm-12 .search h2");
    header.innerHTML = `Search the Archives`;
      });
