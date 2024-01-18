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
      <div class="headerSurvey"><p>What do you think about the new finding aid interface? Will you take this <a href="https://docs.google.com/forms/d/e/1FAIpQLSd7xm6qVSzNwuUw0GvfRja5wGm4j-Z3eUDePmy1XjjV1wc-fQ/viewform" target="_blank"> User Testing </a> to help us improve your experience?</p></div>
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
