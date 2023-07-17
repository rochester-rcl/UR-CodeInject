/* Inject Location: head */

document.addEventListener("DOMContentLoaded", function(e){
    const header = document.querySelector('#add_desc .panel-body .note .otherfindaid.single_note h3');
    
    const boxInfo = document.querySelector('#add_desc .panel-body .note .otherfindaid.single_note');
    if (header.innerHTML === 'Preservica Public URL') {
      header.innerHTML = 'Access Digital Version';
    }
    if (header.innerHTML === 'Preservica Internal URL') {
      boxInfo.style.display = 'none';
    }
          });
    
