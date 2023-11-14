/* Inject Location: body_top */

function openBtn() {
    const elem = document.getElementById('contactUsContent');
    elem.style.display = 'flex';
    }
    function closeBtn() {
    const elem = document.getElementById('contactUsContent');
    elem.style.display = 'none';
    } 

function toggleBtn() {
  var btn1 = document.getElementsByClassName("openBtn");
  var btn2 = document.getElementsByClassName("quickSurvey");
    if (btn1[0].style.display === "none" || btn2[0].style.display === 'none') {
    btn1[0].style.display = "block";
    btn2[0].style.display = "block";
  } else {
    btn1[0].style.display = "none";
    btn2[0].style.display = "none";
  }
}
