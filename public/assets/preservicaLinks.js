/* Inject Location: body_top */
document.addEventListener("readystatechange", event => {
    const header = document.querySelectorAll('#add_desc .panel-body .note .otherfindaid h3');
    const boxInfo = document.querySelectorAll('#add_desc .panel-body .note .otherfindaid');
    const internalHeader = document.querySelector('#res_accordion .panel.panel-default #add_desc .panel-body .note .otherfindaid.single_note h3');
    

    header[1].innerHTML = 'Access Digital Version';
    internalHeader.innerHTML = 'Access Digital Version';
    boxInfo[0].style.display = 'none';
          });
