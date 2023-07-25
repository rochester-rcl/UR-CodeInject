/* Inject Location: body_top */

document.addEventListener("DOMContentLoaded", function(e){
    const header = document.querySelector('#add_desc .panel-body .note .otherfindaid h3');
    
    const boxInfo = document.querySelector('#add_desc .panel-body .note .otherfindaid');
    console.log('here', header.innerHTML);
    if (header.innerHTML.toLowerCase().includes('preservica public url')) {
      header.innerHTML = 'Access Digital Version';
    }
    if (header.innerHTML.toLowerCase().includes('preservica internal url')) {
      boxInfo.style.display = 'none';
    }
          });
    
