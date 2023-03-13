window.onload = function() {
  console.log("Hello");
  var modeBtn = document.querySelector('.color-mode');

  modeBtn.addEventListener('click', clickMode);

  function clickMode (e) {
    modeBtn.style.visibility = "hidden";
  }
};

