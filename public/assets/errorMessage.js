/* Inject Location: body_top */
// Error Message
document.addEventListener("DOMContentLoaded", function(e){
    const errorMessage = document.querySelector('.alert.alert-info.alert-dismissible');
    const errorMessage2 = document.querySelector('.alert.alert-danger.alert-dismissible');
    errorMessage.innerHTML = ` 
      <button class="close" data-dismiss="alert"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>No Records Found
  <ul>
  <li> Make sure that all search terms are spelled correctly.</li>
  <li>Try more general search terms.</li>
<li>Add a search row using the + sign at the end of the search to create a Boolean search.</li>
<li>Not all collections have been processed to the same level of detail. If you can’t find what you are looking for, please contact us. </li>
  </ul>
    `
        errorMessage2.innerHTML = ` 
      <button class="close" data-dismiss="alert"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>No Records Found
  <ul>
  <li> Make sure that all search terms are spelled correctly.</li>
  <li>Try more general search terms.</li>
<li>Add a search row using the + sign at the end of the search to create a Boolean search.</li>
<li>Not all collections have been processed to the same level of detail. If you can’t find what you are looking for, please contact us. </li>
  </ul>
    `
      });
