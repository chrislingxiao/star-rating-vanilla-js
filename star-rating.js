function ratingStar(event) {
  var checkValue = document.querySelectorAll("input");
  var checkStar = document.querySelectorAll("label");
  var checkCount = 0;

  for (var i = 0; i < checkValue.length; i++) {
    if (checkValue[i] == event.target) {
      checkCount = i;
    }
  }

  for (var j = checkCount; j < checkValue.length; j++) {
    checkValue[j].checked = true;
    checkStar[j].className = "rated";
  }

  for (var k = 0; k < checkCount; k++) {
    checkValue[k].checked = false;
    checkStar[k].className = "check";
  }
}
