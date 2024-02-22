/* Inject Location: body_top */
document.addEventListener("DOMContentLoaded", function (e) {
  const blueNavbar = document.querySelector(
    "#collapsemenu .nav.nav.navbar-nav"
  );
  const contactUsBtn = document.createElement("li");
  contactUsBtn.innerHTML = `
      <div class="dropdown" data-dropdown>
      <button class="link" data-dropdown-button>Contact Us</button>
      <div class="dropdown-menu information-grid">
          <div id="dropdown-links">
            <a href="https://www.library.rochester.edu/services/forms/contact-rbscp" target="_blank">Rare Books and Special Collections</a>
            <a href="https://www.esm.rochester.edu/sibley/contact/" target="_blank">Sibley Music Library</a>

            <a href="https://urmc-rochester.libanswers.com/form?queue_id=6183" target="_blank">Edward G.Miner Library</a>

            <a href="https://www.library.rochester.edu/about/staff/dept#38" target="_blank">Rossell Hope Robbins Library</a>

            <a href="https://mag.rochester.edu/about/contact-us/" target="_blank">Memorial Art Gallery</a>
          </div>
      </div>
    </div>
  `;
  blueNavbar.appendChild(contactUsBtn);
});

document.addEventListener("click", (e) => {
  const isDropdownButton = e.target.matches("[data-dropdown-button]");
  if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return;

  let currentDropdown;
  if (isDropdownButton) {
    currentDropdown = e.target.closest("[data-dropdown]");
    currentDropdown.classList.toggle("active");
  }

  document.querySelectorAll("[data-dropdown].active").forEach((dropdown) => {
    if (dropdown === currentDropdown) return;
    dropdown.classList.remove("active");
  });
});

